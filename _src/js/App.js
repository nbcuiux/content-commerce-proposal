'use strict';

var Analytics = require('./components/Analytics');
var Breakpoints = require('./components/Breakpoints');
var Error404 = require('./views/Error404');
var FeatureDetect = require('./utils/FeatureDetect');
var Header = require('./views/Header');
var Lab = require('./views/Lab');
var Panels = require('./views/Panels');
var Posts = require('./views/Posts');
var Router = require('./components/Router');

function App () {
	this.onNavigate = this.onNavigate.bind(this);
	this.onIntroComplete = this.onIntroComplete.bind(this);
	this.onViewHidden = this.onViewHidden.bind(this);
	this.onViewLoaded = this.onViewLoaded.bind(this);

	this.init();
}

var proto = App.prototype;

proto.init = function () {
	this.analytics = new Analytics('UA-54501731-1', 'minimalmonkey.github.io', 200);

	if (FeatureDetect.touch()) {
		document.documentElement.classList.remove('no-touch');
		document.documentElement.classList.add('touch');
	}

	Breakpoints.enable();

	this.logoButton = document.getElementById('siteheader-logo');
	this.logoButton.addEventListener('click', this.onLogoButtonClicked.bind(this));

	this.header = new Header();
	this.panels = new Panels();
	this.posts = new Posts();
	this.lab = new Lab();

	this.router = new Router([
		this.panels.el
	]);

	var headerLinks = this.header.getPageLinks();
	var i = headerLinks.length;
	while (i--) {
		this.router.add(headerLinks[i], this.onNavigate, this.header, 'header');
	}

	if (document.body.classList.contains('is-404')) {
		this.router.add(location.pathname, this.onNavigate, new Error404(), '404');
	}

	this.router.add('/', this.onNavigate, this.panels, 'panels');
	this.router.add('/lab/', this.onNavigate, this.lab, 'lab');
	this.router.add('*post', this.onNavigate, this.posts, 'post');
	this.router.match(location.pathname);

	if (document.body.classList.contains('is-intro')) {
		this.view.on('onintrocomplete', this.onIntroComplete);
		window.requestAnimationFrame(function () {
			document.body.classList.add('is-introtransition');
			document.body.classList.remove('is-intro');
		});
	}
};

proto.onNavigate = function (view, state, match, params) {
	if (state === 'header') {
		var lastURL = (this.state && this.state !== 'header') ? this.router.lastURL : false;
		this.header.open(match, lastURL);
	}
	else if (this.state === 'header') {
		this.header.close();
	}
	else if (this.state === state) {
		this.view.update(params);
	}
	else if (this.state) {
		document.body.classList.add('is-muted');
		view.load(params);
		this.view.on('onhidden', this.onViewHidden);
		this.view.hide(state);
	}
	this.setView(view, state);
	this.analytics.update(location.pathname);
};

proto.onLogoButtonClicked = function (evt) {
	evt.preventDefault();
	var path = '/';
	switch (this.state) {
		case 'panels' :
			if (window.pageXOffset > 0) {
				this.panels.scrollEvents.scrollToStart();
				return;
			}
			// path = '/lab/';
			break;

		case 'header' :
			path = this.header.closeURL;
			break;
	}
	this.router.navigate(path);
};

proto.setView = function (view, state) {
	if (this.state === state) {
		return;
	}
	this.view = view;
	this.view.prepare();
	if (this.state) {
		this.lastState = this.state;
		document.body.classList.remove('is-' + this.state);
	}
	this.state = state;
	document.body.classList.add('is-' + this.state);
};

proto.onIntroComplete = function () {
	this.view.off('onintrocomplete', this.onIntroComplete);
	document.body.classList.remove('is-introtransition');
};

proto.showView = function () {
	this.view.on('onshowed', this.onViewShowed);
	this.view.show(this.lastState, this.router.lastURL);
};

proto.onViewShowed = function (evt) {
	evt.target.off('onshowed', this.onViewShowed);

	var classes = document.body.classList;
	var i = classes.length;
	while (i--) {
		// TODO: Instead of indexOf maybe use an Object as will be more performant
		if (classes[i].indexOf('is-transition-') === 0) {
			document.body.classList.remove(classes[i]);
		}
	}
	document.body.classList.remove('is-muted');
};

proto.onViewHidden = function (evt) {
	evt.target.off('onhidden', this.onViewHidden);
	if (this.view.hasPage(location.pathname)) {
		this.showView();
	}
	else {
		this.view.on('onloaded', this.onViewLoaded);
	}
};

proto.onViewLoaded = function (evt) {
	if (evt.url === location.pathname) {
		this.view.off('onloaded', this.onViewLoaded);
		this.showView();
	}
};

module.exports = App;
