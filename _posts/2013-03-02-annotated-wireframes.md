---
layout: post
title:  "Annotated Wireframes"
short_title: "Annotated Wireframes"
summary: "A blueprint of the product will be created along with annotations mapping it to a content management system. This allows us to effectively communicate the functionality of the interface with developers and help them build the back-end system."
date:   2013-03-02 00:00:00
color:  orange
weeks: 1
people: 1
phase: 7
example: http://content-commerce-proposal.nbcuxlab.com/A-Spot_Wireframe_Annotations.pdf
hours: 40
---



<div style="margin: 0 auto; max-width: 350px; height: 150px; overflow: hidden;">
	<iframe style="border: none; display: inline-block; float: left;" name="twitter-bird" src="{{ site.url }}/lab/css3-animations/twitter.html" width="380px" height="150px" frameborder="0" scrolling="auto" name="twitter-bird"></iframe>
</div>

{% highlight css %}
.twitter-bird {
    background-image: url(twitter-bird-sprite.png);
    display: inline-block;
    height: 150px;
    width: 150px;
}

.twitter-bird:hover {
    animation: fly 0.2s steps(3) 0 infinite;
}

@keyframes fly {
    from { background-position: 0 0; }
    to { background-position: -450px 0; }
}
{% endhighlight %}

## Logo Bounce

Next up is my favourite little animation on the site – the bouncy hover state on the logo.

<div style="margin: 0 auto; max-width: 254px; height: 200px; overflow: hidden;">
	<iframe style="overflow: hidden; border: none; display: inline-block; float: left;" name="logo" src="{{ site.url }}/lab/css3-animations/logo.html" width="254px" height="200px" frameborder="0" scrolling="auto" name="logo"></iframe>
</div>

This doesn’t use a sprite sheet and instead simply uses animation and margins to get the effect:

{% highlight css %}
.logo {
    background-image: url(logo.png);
    background-repeat: no-repeat;
    height: 150px;
    margin: 50px;
    width: 154px;
}

.logo:hover {
    animation-name: bounce;
    animation-duration: 0.5s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
}

@keyframes bounce {
    45% {
        height: 130px;
        margin-top: 70px;
    }
    55% {
        height: 130px;
        margin-top: 70px;
    }
    75% {
        height: 170px;
        margin-top: 0px;
    }
}
{% endhighlight %}


<div style="margin: 0 auto; width: 100%; height: 60px; overflow: hidden;">
	<iframe style="overflow: hidden; border: none; display: inline-block; float: left;" name="button" src="{{ site.url }}/lab/css3-animations/button.html" width="100%" height="60px" frameborder="0" scrolling="auto" name="button"></iframe>
</div>



{% highlight js %}
<div class="button">
    <span class="label">Button Label</span>
    <span class="label">Button Label</span>
</div>
{% endhighlight %}


{% highlight css %}
.button {
    display: inline-block;
    height: 60px;
    line-height: 60px;
    overflow: hidden;
    position: relative;
    text-align: center;
}

.label {
    display: block;
    height: 100%;
    position: relative;
    top: 0%;
    transition: top 0.35s;
    width: 100%;
}

.button:hover .label {
    top: -100%;
}
{% endhighlight %}


