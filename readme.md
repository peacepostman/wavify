# Jquery.wavify

Jquery wavify is a simple jquery plugin heavily adapted from a codepen board (https://codepen.io/grimor/pen/qbXLdN).

A playground can be accessed here : http://codepen.io/peacepostman/pen/jBavvN/

You can also see it in production here : https://potion.social/fr/plans-entreprise

## Usage

Usage is very simple. First, be sure to include Jquery (https://jquery.com/) and TweenMax (https://greensock.com/tweenmax) in order to be sure that all dependencies are loaded.

In the html add the following code :

`<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs></defs><path id="myID" d=""/></svg>`

The in your javascript file add this :

`
$('#myID').wavify({
  height: 60,
  bones: 3,
  amplitude: 40,
  color: 'rgba(150, 97, 255, .8)',
  speed: .25
});
`

## Options

Infos to come when free time is up :)
