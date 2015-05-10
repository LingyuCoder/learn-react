var React = require('react');

require('./index.less');

var AsCheckbox = React.createClass({
  render: function() {
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
});

module.exports = AsCheckbox;

