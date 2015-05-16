var React = require('react');

var CalendarHeader = React.createClass({
  onClickLeft: function(){
    var self = this;
    var date = self.props.date;
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    month--;
    if(month === 0) {
      month = 12;
      year--;
    }
    self.props.onNavChange(new Date(year, month - 1));
  },
  onClickRight: function(){
    var self = this;
    var date = self.props.date;
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    month++;
    if(month === 13) {
      month = 1;
      year++;
    }
    self.props.onNavChange(new Date(year, month - 1));
  },
  render: function() {
    var self = this;
    var date = self.props.date;
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    return (
      <div className="header row s1">
        <div onClick={self.onClickLeft} className="nav-btn s1 center">{'<'}</div>
        <div className="current s5 center">
          <span>{year}年{month}月</span>
        </div>
        <div onClick={self.onClickRight} className="nav-btn s1 center">{'>'}</div>
      </div>
    );
  }
});

module.exports = CalendarHeader;