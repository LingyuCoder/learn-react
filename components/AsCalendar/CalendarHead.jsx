var React = require('react');

var CalendarHead = React.createClass({
  render: function() {
    var nodes = ['日', '一', '二', '三', '四','五', '六'].map(function(text, index){
      var className = "day s1 center" + (index === 0 || index === 6 ? ' weekend': '');
      return (
        <div className={className}>
          {text}
        </div>
      );
    });
    return (
      <div className="head row s1">
        {nodes}
      </div>
    );
  }
});

module.exports = CalendarHead;