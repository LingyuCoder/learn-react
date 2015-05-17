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
	'rotateInQuarterClockwise',
	'slideInBottom',
	'slideInRight',
	'slideInTop',
	'slideInLeft'
];

const transitionsOut = [
	'scaleOut',
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
	space.prev();
}

let nextCallback = () => {
	space.next();
}

var space = React.render(
	<AsSpace selector=".custom-frame">
		<span className="fix prev" onClick={prevCallback}>&lt;</span>
		<span className="fix next" onClick={nextCallback}>&gt;</span>
		<AsSpaceFrame classes={['custom-frame']} exit={"fadeOut " + randomTransitionOut()} enter={"fadeIn" + randomTransitionIn()}>
			<h1>我的滑板鞋</h1>	
		</AsSpaceFrame>
		<AsSpaceFrame classes={['custom-frame']} exit={"fadeOut " + randomTransitionOut()} enter={"fadeIn" + randomTransitionIn()}>
			<img src="http://skyinlayerblog.qiniudn.com/huabanxie/1.jpg" alt=""/>
		</AsSpaceFrame>
		<AsSpaceFrame classes={['custom-frame']} exit={"fadeOut " + randomTransitionOut()} enter={"fadeIn" + randomTransitionIn()}>
			<img src="http://skyinlayerblog.qiniudn.com/huabanxie/2.jpg" alt=""/>
		</AsSpaceFrame>
		<AsSpaceFrame classes={['custom-frame']} exit={"fadeOut " + randomTransitionOut()} enter={"fadeIn" + randomTransitionIn()}>
			<img src="http://skyinlayerblog.qiniudn.com/huabanxie/3.jpg" alt=""/>
		</AsSpaceFrame>
		<AsSpaceFrame classes={['custom-frame']} exit={"fadeOut " + randomTransitionOut()} enter={"fadeIn" + randomTransitionIn()}>
			<img src="http://skyinlayerblog.qiniudn.com/huabanxie/4.jpg" alt=""/>
		</AsSpaceFrame>
		<AsSpaceFrame classes={['custom-frame']} exit={"fadeOut " + randomTransitionOut()} enter={"fadeIn" + randomTransitionIn()}>
			<img src="http://skyinlayerblog.qiniudn.com/huabanxie/5.jpg" alt=""/>
		</AsSpaceFrame>
		<AsSpaceFrame classes={['custom-frame']} exit={"fadeOut " + randomTransitionOut()} enter={"fadeIn" + randomTransitionIn()}>
			<img src="http://skyinlayerblog.qiniudn.com/huabanxie/6.jpg" alt=""/>
		</AsSpaceFrame>
		<AsSpaceFrame classes={['custom-frame']} exit={"fadeOut " + randomTransitionOut()} enter={"fadeIn" + randomTransitionIn()}>
			<img src="http://skyinlayerblog.qiniudn.com/huabanxie/7.jpg" alt=""/>
		</AsSpaceFrame>
		<AsSpaceFrame classes={['custom-frame']} exit={"fadeOut " + randomTransitionOut()} enter={"fadeIn" + randomTransitionIn()}>
			<img src="http://skyinlayerblog.qiniudn.com/huabanxie/8.jpg" alt=""/>
		</AsSpaceFrame>
		<AsSpaceFrame classes={['custom-frame']} exit={"fadeOut " + randomTransitionOut()} enter={"fadeIn" + randomTransitionIn()}>
			<img src="http://skyinlayerblog.qiniudn.com/huabanxie/9.jpg" alt=""/>
		</AsSpaceFrame>
		<AsSpaceFrame classes={['custom-frame']} exit={"fadeOut " + randomTransitionOut()} enter={"fadeIn" + randomTransitionIn()}>
			<img src="http://skyinlayerblog.qiniudn.com/huabanxie/10.jpg" alt=""/>
		</AsSpaceFrame>
		<AsSpaceFrame classes={['custom-frame']} exit={"fadeOut " + randomTransitionOut()} enter={"fadeIn" + randomTransitionIn()}>
			<img src="http://skyinlayerblog.qiniudn.com/huabanxie/11.jpg" alt=""/>
		</AsSpaceFrame>
		<AsSpaceFrame classes={['custom-frame']} exit={"fadeOut " + randomTransitionOut()} enter={"fadeIn" + randomTransitionIn()}>
			<img src="http://skyinlayerblog.qiniudn.com/huabanxie/12.jpg" alt=""/>
		</AsSpaceFrame>
		<AsSpaceFrame classes={['custom-frame']} exit={"fadeOut " + randomTransitionOut()} enter={"fadeIn" + randomTransitionIn()}>
			<img src="http://skyinlayerblog.qiniudn.com/huabanxie/13.jpg" alt=""/>
		</AsSpaceFrame>
		<AsSpaceFrame classes={['custom-frame']} exit={"fadeOut " + randomTransitionOut()} enter={"fadeIn" + randomTransitionIn()}>
			<img src="http://skyinlayerblog.qiniudn.com/huabanxie/14.jpg" alt=""/>
		</AsSpaceFrame>
		<AsSpaceFrame classes={['custom-frame']} exit={"fadeOut " + randomTransitionOut()} enter={"fadeIn" + randomTransitionIn()}>
			<img src="http://skyinlayerblog.qiniudn.com/huabanxie/15.jpg" alt=""/>
		</AsSpaceFrame>
		<AsSpaceFrame classes={['custom-frame']} exit={"fadeOut " + randomTransitionOut()} enter={"fadeIn" + randomTransitionIn()}>
			<img src="http://skyinlayerblog.qiniudn.com/huabanxie/16.jpg" alt=""/>
		</AsSpaceFrame>
		<AsSpaceFrame classes={['custom-frame']} exit={"fadeOut " + randomTransitionOut()} enter={"fadeIn" + randomTransitionIn()}>
			<img src="http://skyinlayerblog.qiniudn.com/huabanxie/17.jpg" alt=""/>
		</AsSpaceFrame>
		<AsSpaceFrame classes={['custom-frame']} exit={"fadeOut " + randomTransitionOut()} enter={"fadeIn" + randomTransitionIn()}>
			<img src="http://skyinlayerblog.qiniudn.com/huabanxie/18.jpg" alt=""/>
		</AsSpaceFrame>
		<AsSpaceFrame classes={['custom-frame']} exit={"fadeOut " + randomTransitionOut()} enter={"fadeIn" + randomTransitionIn()}>
			<img src="http://skyinlayerblog.qiniudn.com/huabanxie/19.jpg" alt=""/>
		</AsSpaceFrame>
		<AsSpaceFrame classes={['custom-frame']} exit={"fadeOut " + randomTransitionOut()} enter={"fadeIn" + randomTransitionIn()}>
			<img src="http://skyinlayerblog.qiniudn.com/huabanxie/20.jpg" alt=""/>
		</AsSpaceFrame>
		<AsSpaceFrame classes={['custom-frame']} exit={"fadeOut " + randomTransitionOut()} enter={"fadeIn" + randomTransitionIn()}>
			<h1>完</h1>
		</AsSpaceFrame>
	</AsSpace>,
	document.getElementById('space')
);