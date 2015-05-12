var React = require('react');

class BaseComponent extends React.Component {
	_bind(...methods) {
		methods.forEach( (method) => this[method] = this[method].bind(this) );
	}
}

module.exports = BaseComponent;