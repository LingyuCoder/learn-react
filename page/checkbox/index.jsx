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

var AsRadio = React.createClass({
  render: function() {
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
});