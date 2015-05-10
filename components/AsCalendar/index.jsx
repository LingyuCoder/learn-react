var React = require('react');

require('./index.less');
require('./flex.less');

var CalendarHeader = require('./CalendarHeader.jsx');
var CalendarHead = require('./CalendarHead.jsx');
var CalendarBody = require('./CalendarBody.jsx');

var Calendar = React.createClass({
  getInitialState: function(){
    var cur = new Date();
    return {
      date: cur,
      current: cur
    };
  },
  onNavChange: function(date) {
    this.setState({
      date: date
    });
  },
  onSelectedChange: function(date) {
    this.setState({
      current: date
    });
  },
  render: function() {
    var date = this.state.date;
    var current = this.state.current;
    return (
      <div className="as-calendar column">
        <CalendarHeader date={date} onNavChange={this.onNavChange}></CalendarHeader>
        <div className="calendar column s9">
          <CalendarHead></CalendarHead>
          <CalendarBody current={current} date={date} onSelectedChange={this.onSelectedChange}/>
        </div>
      </div>
    );
  }
});

module.exports = Calendar;
