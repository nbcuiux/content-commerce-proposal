---
layout: post
title:  "User Testing"
summary: "Not only do we want to catch consumers in the act, but we also want to run our prototype by our stakeholders. Together, they will provide us with highly comprehensive and contextual feedback that will give us the means to perfect the user experience."
date:   2013-03-06 00:00:00
color:  lime
weeks: 3
people: 2
phase: 6
example: http://concerto.nbcuxlab.com/4-1-preview-schedule/06-usertesting.html
hours: 120
---


{% highlight css %}
//============================================================
//
// arrow
//
// @param width           :  px, em
// @param height          :  px, em
// @param direction       :  up, down, left, right
// @param color           :  hex, rgb
//
//============================================================

=arrow($width: 20px, $height: 20px, $direction: up, $color: red)

  width: 0
  height: 0

  // Right
  @if $direction == right
    border-top: $height/2 solid transparent
    border-bottom: $height/2 solid transparent
    border-left: $width solid $color

  // Left
  @if $direction == left
    border-top: $height/2 solid transparent
    border-bottom: $height/2 solid transparent
    border-right: $width solid $color

  // Up
  @if $direction == up
    border-left: $width/2 solid transparent
    border-right: $width/2 solid transparent
    border-bottom: $height solid $color

  // Down
  @if $direction == down
    border-left: $width/2 solid transparent
    border-right: $width/2 solid transparent
    border-top: $height solid $color
{% endhighlight %}


<div style="margin: 30px auto 20px; width: 280px; height: 90px;">
	<iframe style="border: none;" name="sass-triangles" src="http://minimalmonkey.com/lab/sass-triangle-mixin/" width="280px" height="90px" frameborder="0" scrolling="auto" name="sass-triangles"></iframe>
</div>

{% highlight css %}
.label
    background-color: #e88565
    height: 60px
    line-height: 60px
    position: absolute
    text-transform: uppercase
    width: 280px

    &:after
        +arrow(40px, 30px, down, #e88565)
        content: ''
        left: 0
        margin: 60px 0 0 120px
        position: absolute
        top: 0
{% endhighlight %}

