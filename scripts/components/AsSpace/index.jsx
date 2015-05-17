import React from 'react';
import SpaceController from './SpaceController';

require('./index.less');

class AsSpace extends React.Component {
	static propTypes = {
		selector: React.PropTypes.string,
		customTransitions: React.PropTypes.object
	};
	static defaultProps = {
		selector: '.as-space-frame',
		customTransitions: {}
	};
	constructor(props) {
		super();
		this.spaceController = new SpaceController({
			frameSelector: props.selector
		});
		this.spaceController.addTransitions(props.customTransitions);
	}
	prev = () => {
		this.spaceController.scrollToPrevFrame();
	}
	next = () => {
		this.spaceController.scrollToNextFrame();
	}
	componentDidMount = () => {
		this.spaceController.init();
	}
	render = () => {
		return (
			<div className="as-space">
				{this.props.children}
			</div>
		);
	}
}

class AsSpaceFrame extends React.Component {
	static propTypes = {
		enter: React.PropTypes.string,
		exit: React.PropTypes.string,
		transition: React.PropTypes.string,
		easing: React.PropTypes.string,
		duration: React.PropTypes.number
	};
	static defaultProps = {
		enter: 'fadeIn',
		exit: 'fadeOut',
		transition: '',
		easing: 'linear',
		duration: 1
	};
	constructor() {
		super();
	}
	render = () => {
		var classes = this.props.classes || [];
		classes.push('as-space-frame');
		return (
			<div className={classes.join(' ')}
				data-exit={this.props.exit} 
				data-enter={this.props.enter} 
				data-transition={this.props.transition} 
				data-easing={this.props.easing} 
				data-duration={this.props.duration}>
		    <div className="as-space-inner-frame">
	        {this.props.children}
		    </div>
			</div>
		);
	}
}

export default {
	AsSpaceFrame: AsSpaceFrame,
	AsSpace: AsSpace
};
