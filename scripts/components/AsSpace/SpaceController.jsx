import $ from 'expose?jQuery!../../lib/jQuery/jquery.min.js';
import ScrollController from './ScrollController';
import Transitions from './Transitions';
import EasingFunctions from './EasingFunctions';
import {
	propValueToCssFormat,
	isMobile
} from './Util';

var defaultTransition = {
	all: [Transitions.scaleOut, Transitions.fadeOut],
	enter: [],
	exit:[],
	easing: 'linear'
};

export default class SpaceController {
	constructor(config) {
		this.$window = $(window);
		this.windowHeight = this.$window.height();
		this.scrollControl = new ScrollController();
		this.frames = null;
		this.currentFrame = 0;
		this.frameSelector = config.frameSelector || '.as-space-frame';
		this.animating = false;
	}
	addTransitions(customTrans) {
		for(let name in customTrans){
			if(Transitions[name])
				return console.log('Transition name already exists!!!');
			Transitions[name] = customTrans[name];
		}
	}
	linearEase(t, b, c, d) {
	  return b + c * (t/d);
	}
	deltaValue(animations, delta, property, easing) {
	  let animation = animations[property];
	  let frameDuration = this.frames[this.currentFrame].duration;
	  let frameProgress = delta/frameDuration; // decimal percent

	  if(property == 'translate3d' || property == 'rotate3d'){
	  		let trans = {};
	  		for(let axis in animation.from)
	  			trans[axis] = +EasingFunctions[easing](delta, animation.from[axis], (animation.to[axis]-animation.from[axis]), frameDuration).toFixed(4);
	  		return trans;
	  } else
		  return +EasingFunctions[easing](delta, animation.from, (animation.to-animation.from), frameDuration).toFixed(4);
	}
	animate() {
		window.requestAnimationFrame(() => {
			this.setCurrentFrame();
			this.animateFrame();
		});
	}
	animateFrame() {
		let currentFrame = this.frames[this.currentFrame];
		let scrollInElement = (this.scrollControl.getScrollTop() - currentFrame.distanceTo);
		let props = {
			transform: ''
		};

		let frameTransition = currentFrame.transition || defaultTransition;

		let setProps = (type, value) => {
			frameTransition[type].forEach((trans) => {
				for(let property in trans) {
					if (property === 'scale' || property === 'translate3d' || property === 'rotate' || property === 'rotate3d')
						props['transform'] += propValueToCssFormat(property, this.deltaValue(trans, value, property, frameTransition.easing));
					else
						props[property] = propValueToCssFormat(property, this.deltaValue(trans, value, property, frameTransition.easing));
				}
			});
		}

		setProps('all', scrollInElement);

		if(scrollInElement <= (currentFrame.duration / 2))
			setProps('enter', scrollInElement * 2);
		else
			setProps('exit', (scrollInElement - (currentFrame.duration / 2))*2);

		props['-webkit-transform'] = props['transform'];
		props['-moz-transform'] = props['transform'];
		$(currentFrame.selector).css(props);
	}
	setCurrentFrame(){
		const top = this.scrollControl.getScrollTop();
		const trigger = this.frames[this.currentFrame].distanceTo;
		if(top < trigger){
			$(this.frameSelector).hide();
			this.currentFrame = Math.max(0, this.currentFrame - 1);
			$(this.frames[this.currentFrame].selector).show();
		} else if(top > (trigger + this.frames[this.currentFrame].duration)){
			$(this.frameSelector).hide();
			this.currentFrame++;
			$(this.frames[this.currentFrame].selector).show();
		}
	}
	scrollToNextFrame() {
		let frame = this.frames[this.currentFrame + 1];
		if(frame && !this.animating) {
			$("html, body").animate({scrollTop: frame.distanceTo + frame.duration / 2}, 1000, 'linear', () => {
				this.animating = false;
			});	
			this.animating = true;
		}
	}
	scrollToPrevFrame() {
		let frame = this.frames[this.currentFrame - 1];
		if(frame && !this.animating) {
			$("html, body").animate({scrollTop: frame.distanceTo + frame.duration / 2}, 1000, 'linear', () => {
				this.animating = false;
			});	
			this.animating = true;
		}
	}
	init() {
		const touchScreenCompensation = isMobile() ? 0.3 : 1;
		let simulatedBodyHeight = 0;

		this.frames = $(this.frameSelector).map((index, frame) => {
			let duration = frame.dataset.duration * touchScreenCompensation;
			let simulatedHeight = duration * this.windowHeight;
			let distanceTo = simulatedBodyHeight;
			simulatedBodyHeight += simulatedHeight;
			console.log(simulatedBodyHeight, simulatedHeight);
			let frameId = frame.id = 'frame-'+index;
			let customTransition = frame.dataset.transition;
			let customEnter = frame.dataset.enter;
			let customExit = frame.dataset.exit;
			let customEasing = frame.dataset.easing;

			if(customTransition || customEnter || customExit || customEasing){
				let toTransition = (arr) => {
				  return arr.split(/\s+/).map((t) => {
				    return Transitions[t];
				  })
				};

				let newTransition = {
					all: customTransition ? toTransition(customTransition) : [],
					enter: customEnter ? toTransition(customEnter) : [],
					exit: customExit ? toTransition(customExit) : [],
					easing: customEasing ? customEasing : 'linear'
				};

				return {
					selector: '#'+frameId,
					duration: simulatedHeight,
					distanceTo: distanceTo,
					transition: newTransition
				};
			}

			return {
				selector:'#'+frameId,
				duration:simulatedHeight,
				distanceTo:distanceTo
			};
		});

		$('body').height(simulatedBodyHeight + this.windowHeight);
		$(this.frames[this.currentFrame].selector).show();
		this.scrollControl.repeatOnScroll(this.animate.bind(this), 1000/60);
	}
}

