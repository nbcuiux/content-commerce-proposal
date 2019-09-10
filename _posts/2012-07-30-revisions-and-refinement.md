---
layout: post
title:  "Revisions and Refinement"
summary: '“A successful product is never done or perfect.” <br> –Geoff Teehan, Product Design Director at Facebook <br><br> “But we always try.”<br>–NBC UX Lab'
date:   2012-07-30 00:00:00
weeks: 2
people: 3 
color:  purple
hideCta: ''
phase: 9
hours: 80
---



{% highlight js %}
var orientation = 0;

window.addEventListener("orientationChanged", function(event) {
    orientation = event.orientation;
}, true);

window.addEventListener("deviceorientation", function(event) {
    // process event.alpha, event.beta and event.gamma

    var x, y;

    if(orientation == 0)    x = event.beta;
    else                    x = (orientation == 90) ? event.gamma : event.gamma * -1;

    if(orientation == 0)    y = event.gamma;
    else                    y = (orientation == 90) ? event.beta : event.beta * -1;

    $('.cube')[0].style.webkitTransform = "rotateX("+(x * -1)+"deg) rotateY("+(y * -1)+"deg)";
}, true);
{% endhighlight %}



{% highlight js %}
var vx = 0, vy = 0;
var px = 0, py = 0;
var lastx, lasty;

document.addEventListener('touchstart', function(event) {
    event.preventDefault();
    var touch = event.touches[0];
    lastx = touch.pageX;
    lasty = touch.pageY;
}, false);

document.addEventListener('touchmove', function(event) {
    event.preventDefault();
    var touch = event.touches[0];
    var mousex = touch.pageX;
    var mousey = touch.pageY;
    if(lastx !== mousex) vx = mousex - lastx;
    if(lasty !== mousey) vy = mousey - lasty;
    lastx = mousex;
    lasty = mousey;
}, false);

function render() {
    px += vx;
    py += vy;
    vx *= 0.9;
    vy *= 0.9;
    $('.cube')[0].style.webkitTransform = "rotateX("+px+"deg) rotateY("+py+"deg)";
}

setInterval(render, 50);
{% endhighlight %}


