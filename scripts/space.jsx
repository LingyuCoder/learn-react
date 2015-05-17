import {
	AsSpace,
	AsSpaceFrame
} from './components/AsSpace/index';
import React from 'react';

let randomDuration = () => {
	return Math.random() * 1 + 1;
}

const transitionsIn = [
	'scaleIn',
	'fadeIn',
	'rotateInQuarterClockwise',
	'slideInBottom',
	'slideInRight',
	'slideInTop',
	'slideInLeft'
];

const transitionsOut = [
	'scaleOut',
	'fadeOut',
	'zoomOut',
	'rotate3dOut',
	'slideOutDown',
	'slideOutLeft',
	'slideOutRight',
	'slideOutUp'
];

let randomTransitionIn = () => {
	return transitionsIn[Math.floor(Math.random() * transitionsIn.length)];
}

let randomTransitionOut = () => {
	return transitionsOut[Math.floor(Math.random() * transitionsOut.length)];
}

let prevCallback = () => {
	console.log('prev');
	space.prev();
}

let nextCallback = () => {
	console.log('next');
	space.next();
}

var space = React.render(
	<AsSpace selector=".custom-frame">
		<span className="fix prev" onClick={prevCallback}>&lt;</span>
		<span className="fix next" onClick={nextCallback}>&gt;</span>
		<AsSpaceFrame classes={['custom-frame']} exit={randomTransitionOut()} enter={randomTransitionIn()}>
			<div className="bg">
	      <section>
	        <h1>有些事我都已忘记 </h1>
				　　<h1>但我现在还记得 </h1>
	      </section>
	    </div>
		</AsSpaceFrame>
		<AsSpaceFrame classes={['custom-frame']} exit={randomTransitionOut()} enter={randomTransitionIn()}>
			<div className="bg">
	      <section>
	        <h1>在一个晚上我的母亲问我 </h1>
　　<h1>今天怎么不开心 </h1>
	      </section>
	    </div>
		</AsSpaceFrame>
		<AsSpaceFrame classes={['custom-frame']} exit={randomTransitionOut()} enter={randomTransitionIn()}>
			<div className="bg">
	      <section>
	        <h1>我说在我的想象中有一双滑板鞋 </h1>
　　<h1>与众不同最时尚跳舞肯定棒 </h1>
	      </section>
	    </div>
		</AsSpaceFrame>
		<AsSpaceFrame classes={['custom-frame']} exit={randomTransitionOut()} enter={randomTransitionIn()}>
			<div className="bg">
	      <section>
	        <h1>整个城市找遍所有的街都没有 </h1>
　　<h1>她说将来会找到的时间会给我答案 </h1>
	      </section>
	    </div>
		</AsSpaceFrame>
		<AsSpaceFrame classes={['custom-frame']} exit={randomTransitionOut()} enter={randomTransitionIn()}>
			<div className="bg">
	      <section>
	        <h1>星期天我再次寻找依然没有发现 </h1>
　　<h1>一个月后我去了第二个城市 </h1>
　　<h1>这里的人们称它为魅力之都 </h1>
	      </section>
	    </div>
		</AsSpaceFrame>
		<AsSpaceFrame classes={['custom-frame']} exit={randomTransitionOut()} enter={randomTransitionIn()}>
			<div className="bg">
	      <section>
	        <h1>时间过的很快夜幕就要降临 </h1>
　　<h1>我想我必须要离开 </h1>
	      </section>
	    </div>
		</AsSpaceFrame>
		<AsSpaceFrame classes={['custom-frame']} exit={randomTransitionOut()} enter={randomTransitionIn()}>
			<div className="bg">
	      <section>
	        <h1>当我正要走时我看到了一家专卖店</h1> 
　　<h1>那就是我要的滑板鞋 </h1>
	      </section>
	    </div>
		</AsSpaceFrame>
		<AsSpaceFrame classes={['custom-frame']} exit={randomTransitionOut()} enter={randomTransitionIn()}>
			<div className="bg">
	      <section>
	        <h1> 我的滑板鞋时尚时尚最时尚 </h1>
	        <h1>回家的路上我情不自禁 
	         </h1>
	      </section>
	    </div>
		</AsSpaceFrame>
		<AsSpaceFrame classes={['custom-frame']} exit={randomTransitionOut()} enter={randomTransitionIn()}>
			<div className="bg">
	      <section>
	        <h1>摩擦 摩擦 </h1>
　　<h1>在这光滑的地上摩擦 </h1>
	      </section>
	    </div>
		</AsSpaceFrame>
		<AsSpaceFrame classes={['custom-frame']} exit={randomTransitionOut()} enter={randomTransitionIn()}>
			<div className="bg">
	      <section>
	        <h1>月光下我看到自己的身影 </h1>
　　<h1>有时很远有时很近</h1>
	      </section>
	    </div>
		</AsSpaceFrame>
		<AsSpaceFrame classes={['custom-frame']} exit={randomTransitionOut()} enter={randomTransitionIn()}>
			<div className="bg">
	      <section>
	        <h1>感到一种力量驱使我的脚步</h1> 
　　<h1>有了滑板鞋天黑都不怕 </h1>
	      </section>
	    </div>
		</AsSpaceFrame>
		<AsSpaceFrame classes={['custom-frame']} exit={randomTransitionOut()} enter={randomTransitionIn()}>
			<div className="bg">
	      <section>
	        <h1>一步两步一步两步</h1>
　　<h1>一步一步似爪牙 </h1>
	      </section>
	    </div>
		</AsSpaceFrame>
		<AsSpaceFrame classes={['custom-frame']} exit={randomTransitionOut()} enter={randomTransitionIn()}>
			<div className="bg">
	      <section>
	        <h1>似魔鬼的步伐 </h1>
　　<h1>摩擦 摩擦 </h1>
	      </section>
	    </div>
		</AsSpaceFrame>
		<AsSpaceFrame classes={['custom-frame']}>
			<div className="bg">
	      <section>
	        <h1>摩擦</h1>
	      </section>
	    </div>
		</AsSpaceFrame>
	</AsSpace>,
	document.getElementById('space')
);