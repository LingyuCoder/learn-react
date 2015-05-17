import $ from 'expose?jQuery!../../lib/jQuery/jquery.min.js';

export default class ScrollController {
	constructor() {
		this.method = null;
		this.interval = null;
		this.repeatIntervalId = null;
		this.$window = $(window);
		this.lastScrollTop = 0;
		this.astScrollTime = null;
		this.delayCount = 0;
	}
	repeatOnScroll(func, interv) {
		this.method = func;
		this.interval = interv;

		this.$window.on('scroll', () => {
			(!this.repeatIntervalId) && this.startRepeat();
		});
	}
	update() {
		if(!this.repeatIntervalId) return;
		let tmpScrollTop;
		if((tmpScrollTop = this.$window.scrollTop()) === this.lastScrollTop)
			if(++this.delayCount >= 30){
				this.delayCount = 0;
				this.stopRepeat();
			}
		this.lastScrollTop = tmpScrollTop;
		this.method();
	}
	startRepeat() {
		this.repeatIntervalId = setInterval(this.update.bind(this), this.interval);
	}
	stopRepeat(){
		clearInterval(this.repeatIntervalId);
		this.repeatIntervalId = undefined;
	}
	getScrollTop() {
		return this.lastScrollTop;
	}
}