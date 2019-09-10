'use strict';

var loadScript = require('./utils/loadScript');

var Analytics = require('./components/Analytics');
var App = require('./App');

var init = function () {
	var externalsDelay;

	// TODO: maybe change to see if MutationObserver exists & screw IE10?
	if (document.documentElement.classList) {
		new App();
		externalsDelay = 1200;
	}
	else {
		new Analytics('UA-54501731-1', 'minimalmonkey.github.io');
		externalsDelay = 0;
	}

	loadScript('twitter-wjs', '//platform.twitter.com/widgets.js', externalsDelay);

    navigator.sayswho= (function(){
        var ua= navigator.userAgent, tem, 
        M= ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if(/trident/i.test(M[1])){
            tem=  /\brv[ :]+(\d+)/g.exec(ua) || [];
            return 'IE '+(tem[1] || '');
        }
        if(M[1]=== 'Chrome'){
            tem= ua.match(/\b(OPR|Edge)\/(\d+)/);
            if(tem!= null) return tem.slice(1).join(' ').replace('OPR', 'Opera');
        }
        M= M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
        if((tem= ua.match(/version\/(\d+)/i))!= null) M.splice(1, 1, tem[1]);
        return M.join(' ');
    })();

    var browser = navigator.sayswho.split(' ').shift();
    var version = parseInt('10', navigator.sayswho.split(' ').pop());
    console.log(browser, version);
    if (browser == 'Chrome') {
        if (version > 55) {
            document.getElementById('browserUpgrade').classList.remove('is-hidden');
        }
    }
    if (browser == 'Firefox') {
        if (version > 52) {
            document.getElementById('browserUpgrade').classList.remove('is-hidden');
        }
    }
    if (browser == 'Safari') {
        if (version > 10) {
            document.getElementById('browserUpgrade').classList.remove('is-hidden');
        }
    }
    if (browser == 'MSIE') {
        document.getElementById('browserUpgrade').classList.remove('is-hidden');
    }
};

init();


var items = document.getElementsByClassName("panel-callouts"),
    i, len;
var sections = document.getElementsByClassName("panel");

var sectionTotal = document.getElementsByClassName("panel-totals");

for (i = 0, len = 12; i < len; i++) {

    for (i = 0, len = 12; i < len; i++) {

    if (sectionTotal[0].childNodes[5].childNodes[1].innerHTML == "20") {
        sections[i].style.width = '250px';
    }

    if(items[i].childNodes[0].nextElementSibling.childNodes[1].nextElementSibling.firstChild.nextSibling.innerHTML == "1") {
    	sections[i].style.width = '350px';
    }
    else if(items[i].childNodes[0].nextElementSibling.childNodes[1].nextElementSibling.firstChild.nextSibling.innerHTML == "2") {
    	sections[i].style.width = '400px';
    }
    else if(items[i].childNodes[0].nextElementSibling.childNodes[1].nextElementSibling.firstChild.nextSibling.innerHTML == "3") {
    	sections[i].style.width = '450px';
    }
    else if(items[i].childNodes[0].nextElementSibling.childNodes[1].nextElementSibling.firstChild.nextSibling.innerHTML == "4") {
    	sections[i].style.width = '500px';
    }
   
     else  {
    	sections[i].style.width = '350px';
    }
    }
}







