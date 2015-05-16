import React from 'react';
import BaseComponent from '../BaseComponent';

require('./index.less');

export default class AsRadio extends BaseComponent {
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