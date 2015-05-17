import React from 'react';

export default class AsTag extends React.Component {
	constructor() {
		super();
	}
	render = () => {
		var className = 'as-tag' + (this.props.highlight ? ' as-tag-highlight':'');
		return (
			<div className={className}>
				{this.props.children}
			</div>
		);
	}
}