/*
*   Wavify
*   JavaScript library to make some nice waves
*   by peacepostman @ crezeo
 */
let wave_instances = {};
function wavify( wave_element, options ) {

	if( 'undefined' === typeof options )
		options = {}

	//  Options
	//
	//
	var settings = Object.assign({}, {
		container: options.container ? options.container : 'body',
		// Height of wave
		height: 200,
		// Amplitude of wave
		amplitude: 100,
		// Animation speed
		speed: .15,
		// Total number of articulation in wave
		bones: 3,
		// Color
		color: 'rgba(255,255,255, 0.20)'
	}, options );

	var wave = wave_element,
		instance_indentifier = performance.now(), // Reference the current system time as a configuration identifier for updating options
		width = document.querySelector(settings.container).getBoundingClientRect().width,
		height = document.querySelector(settings.container).getBoundingClientRect().height,
		points = [],
		lastUpdate,
		totalTime = 0;

	// Store the instance identifier for this element outside the scope of this function
	wave_instances[ wave_element.id ] = instance_indentifier

	//  Set color
	//
	TweenLite.set(wave, {attr:{fill: settings.color}});


	function drawPoints(factor) {
		var points = [];

		for (var i = 0; i <= settings.bones; i++) {
			var x = i/settings.bones * width;
			var sinSeed = (factor + (i + i % settings.bones)) * settings.speed * 100;
			var sinHeight = Math.sin(sinSeed / 100) * settings.amplitude;
			var yPos = (Math.sin(sinSeed / 100) * sinHeight) + (height - settings.height);
			points.push({x: x, y: yPos});
		}

		return points;
	}

	function drawPath(points) {
		var SVGString = 'M ' + points[0].x + ' ' + points[0].y;

		var cp0 = {
			x: (points[1].x - points[0].x) / 2,
			y: (points[1].y - points[0].y) + points[0].y + (points[1].y - points[0].y)
		};

		SVGString += ' C ' + cp0.x + ' ' + cp0.y + ' ' + cp0.x + ' ' + cp0.y + ' ' + points[1].x + ' ' + points[1].y;

		var prevCp = cp0;
		var inverted = -1;

		for (var i = 1; i < points.length-1; i++) {
			var cpLength = Math.sqrt(prevCp.x * prevCp.x + prevCp.y * prevCp.y);
			var cp1 = {
				x: (points[i].x - prevCp.x) + points[i].x,
				y: (points[i].y - prevCp.y) + points[i].y
			};

			SVGString += ' C ' + cp1.x + ' ' + cp1.y + ' ' + cp1.x + ' ' + cp1.y + ' ' + points[i+1].x + ' ' + points[i+1].y;
			prevCp = cp1;
			inverted = -inverted;
		}

		SVGString += ' L ' + width + ' ' + height;
		SVGString += ' L 0 ' + height + ' Z';
		return SVGString;
	}

	//  Draw function
	//
	//

	function draw( now ) {
		if( "undefined" === typeof now )
			now = performance.now()

		if (lastUpdate) {
			var elapsed = (now-lastUpdate) / 1000;
			lastUpdate = now;

			totalTime += elapsed;

			var factor = totalTime*Math.PI;
			TweenMax.to(wave, settings.speed, {
				attr:{
					d: drawPath(drawPoints(factor))
				},
				ease: Power1.easeInOut
			});

		} else {
			lastUpdate = now;
		}

		// Only request the animation frame if this instances identifier still matches the wave element's identifier
		if( instance_indentifier === wave_instances[ wave_element.id ] )
		{
			requestAnimationFrame(draw);
		}
	}

	//  Pure js debounce function to optimize resize method
	//
	//
	function debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			clearTimeout(timeout);
			timeout = setTimeout(function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			}, wait);
			if (immediate && !timeout) func.apply(context, args);
		};
	}

	//  Redraw for resize with debounce
	//
	var redraw = debounce(function() {
		wave.setAttribute('d', '');
		points = [];
		totalTime = 0;
		width = document.querySelector(settings.container).getBoundingClientRect().width;
		height = document.querySelector(settings.container).getBoundingClientRect().height;
		lastUpdate = false;
		setTimeout(function(){
			draw();
		}, 50);
	}, 250);
	window.addEventListener('resize', redraw)


	//  Execute
	//
	return draw();

};
