# Wavify

Wavify is a simple library heavily adapted from a codepen board (https://codepen.io/grimor/pen/qbXLdN).

Wavify can be used as a jQuery plugin or with vanilla JavaScript.

A playground for jQuery can be accessed here: http://codepen.io/peacepostman/pen/jBavvN/

You can also see it in production here: https://potion.social/fr/plans-entreprise

## Usage

Usage is very simple. First, be sure to include TweenMax (https://greensock.com/tweenmax). If you are using Wavify as a jQuery (https://jquery.com/) plugin be sure to include jQuery too.

Here is a HTML header example:
```
<!-- Vanilla JavaScript -->
<script src="/js/TweenMax.min.js"></script>
<script src="/js/wavify/wavify.js"></script>
```
or
```
<!-- As jQuery Plugin -->
<script src="/js/TweenMax.min.js"></script>
<script src="/js/jquery.min.js"></script>
<script src="/js/wavify/wavify.js"></script>
<script src="/js/wavify/jquery.wavify.js"></script>
```

In the html add the following code:
`<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs></defs><path id="myID" d=""/></svg>`

Then in your JavaScript file add this:
```
// For Vanilla JavaScript
wavify( document.querySelect('#myId'), {
  height: 60,
  bones: 3,
  amplitude: 40,
  color: 'rgba(150, 97, 255, .8)',
  speed: .25
})

// For jQuery
$('#myID').wavify({
  height: 60,
  bones: 3,
  amplitude: 40,
  color: 'rgba(150, 97, 255, .8)',
  speed: .25
});
```

## Option Parameters

|*Property*|*Description*|*Default Value*|
|----------|:-------------|:---------------|
|container| Element query selector for parent container; used for calculating wave size | 'body' |
|color| CSS color for the wave | rgba(255,255,255, 0.20) |
|bones| Number of articulations in the wave | 3 |
|speed| Animation speed | 0.15 |
|height| Height of the wave from crest to trough | 200 |
|amplitude| Vertical distance wave travels | 100 |
