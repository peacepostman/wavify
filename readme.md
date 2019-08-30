# Wavify

Wavify is a simple library to draw animated wave on a website.

The library is heavily adapted from a codepen board (https://codepen.io/grimor/pen/qbXLdN).

Wavify can be used as a jQuery plugin or with vanilla JavaScript.

A playground for jQuery can be accessed here: http://codepen.io/peacepostman/pen/jBavvN/

You can also see it in production here: https://potion.social/fr/plans-entreprise

_Warning_: It has been notified that the use of this plugin introduce performance issues in limited setups or on some mobile devices.

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

```
<svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs></defs><path id="myID" d=""/></svg>
```

Then in your JavaScript file add this:

```
// For Vanilla JavaScript
var myWave = wavify( document.querySelector('#myId'), {
  height: 60,
  bones: 3,
  amplitude: 40,
  color: 'rgba(150, 97, 255, .8)',
  speed: .25
})

// For jQuery
var myWave = $('#myID').wavify({
  height: 60,
  bones: 3,
  amplitude: 40,
  color: 'rgba(150, 97, 255, .8)',
  speed: .25
});
```

## Option Parameters

| **Property** | **Description**                                                             | **Default Value**       |
| ------------ | :-------------------------------------------------------------------------- | :---------------------- |
| container    | Element query selector for parent container; used for calculating wave size | 'body'                  |
| color        | CSS color for the wave, can be Hex, rgb, rgba                               | rgba(255,255,255, 0.20) |
| bones        | Number of articulations in the wave                                         | 3                       |
| speed        | Animation speed                                                             | 0.15                    |
| height       | Height of the wave from crest to trough                                     | 200                     |
| amplitude    | Vertical distance wave travels                                              | 100                     |

## Available Functions

**updateColor**

Will animate wave color to a new value.

Available parameters are :

| **Property** | **Description**                                  | **Default Value** |
| ------------ | :----------------------------------------------- | :---------------- |
| timing       | Duration for transition in seconds               | 1                 |
| color        | CSS color for the wave, can be Hex, rgb, rgba    | original color    |
| onComplete   | A function to be executed on transition complete | null              |

```
myWave.updateColor({
  color: 'rgba(150, 97, 255, .8)'
});

or

myWave.updateColor({
  color: '#FFF',
  timing: 10
});

or

myWave.updateColor({
  color: '#FFF',
  timing: 10,
  onComplete: function(){
    console.log('Transition Complete !')
  }
});
```

**pause**

Will pause current running animation

```
myWave.pause();
```

**play**

Will play current running animation if paused before

```
myWave.play();
```

**kill**

Will kill current animation.

```
myWave.kill();
```

**reboot**

Will reboot animation. New parameters can be provided. Please avoid changing selector, there is no logic reason to do that :D

Refer to configuration options to see available parameters

```
myWave.reboot();

OR

myWave.reboot({
  height: 80,
  bones: 10,
  amplitude: 60,
  color: 'rgba(150, 97, 255, .2)',
  speed: .45
});
```

## Copyright and license

Code released under the [MIT License](https://github.com/peacepostman/wavify/blob/master/LICENSE).

## Credits

Thanks [joeyparis](https://github.com/joeyparis) for his PRs.
