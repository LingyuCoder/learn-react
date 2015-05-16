import React from 'react';
import BaseComponent from '../BaseComponent';

export default class AsTag extends BaseComponent {
	constructor() {
		super();
		this._bind('render');
	}
	render(){
		var className = 'as-tag' + (this.props.highlight ? ' as-tag-highlight':'');
		return (
			<div className={className}>
				{this.props.children}
			</div>
		);
	}
}