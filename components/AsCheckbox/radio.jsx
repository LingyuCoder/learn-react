var React = require('react');
var BaseComponent = require('../BaseComponent.jsx');

require('./index.less');

class AsRadio extends BaseComponent {
  constructor(){
    super();
    this._bind('render');
  }
  render() {
    var $input;
    if(this.props.checked)
      $input = <input type="radio" className="as-option-input as-radio" name={this.props.name} defaultChecked/>
    else 
      $input = <input type="radio" className="as-option-input as-radio" name={this.props.name} />
    return (
      <label className="as-checkbox-label">
        {$input}
        {this.props.children}
      </label>
    );
  }
}

module.exports = AsRadio;