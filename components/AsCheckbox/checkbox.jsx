var React = require('react');
var BaseComponent = require('../BaseComponent.jsx');

require('./index.less');

class AsCheckbox extends BaseComponent {
  constructor(){
    super();
    this._bind('render');
  }
  render() {
    var $input;
    if(this.props.checked)
      $input = <input type="checkbox" className="as-option-input as-checkbox" defaultChecked/>;
    else 
      $input = <input type="checkbox" className="as-option-input as-checkbox"/>;
    return (
      <label className="as-checkbox-label">
        {$input}
        {this.props.children}
      </label>
    );
  }
}

module.exports = AsCheckbox;

