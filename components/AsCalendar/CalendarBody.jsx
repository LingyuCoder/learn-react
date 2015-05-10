var React = require('react');

var CalendarBody = React.createClass({
  getFirstDay: function(year, month) {
    var firstDay = new Date(year, month - 1, 1);
    return firstDay.getDay();
  },
  getMonthLen: function(year, month) {
    var nextMonth = new Date(year, month, 1);
    nextMonth.setHours(nextMonth.getHours() - 3);
    return nextMonth.getDate();
  },
  getCalendarTable: function(year, month) {
    var self = this;
    var monthLen = self.getMonthLen(year, month);
    var firstDay = self.getFirstDay(year, month);
    var list = [[]];
    var i, cur, row, col;
    for (i = firstDay; i--;) {
      list[0].push('');
    }
    for (i = 1; i <= monthLen; i++) {
      cur = i + firstDay - 1;
      row = Math.floor(cur / 7);
      col = cur % 7;
      list[row] = list[row] || [];
      list[row].push(i);
    }
    var lastRow = list[row];
    var remain = 7 - list[row].length;
    for(i = 7 - lastRow.length;i--;) {
      lastRow.push('');
    }
    return list;
  },
  onClickCallback: function(year, month, day){
    this.props.onSelectedChange(new Date(year, month - 1, day));
  },
  render: function() {
    var self = this;
    var date = self.props.date;
    var year = date.getFullYear();
    var month = date.getMonth() + 1;

    var curDate = self.props.current;
    var curYear = curDate.getFullYear();
    var curMonth = curDate.getMonth() + 1;
    var curDay = curDate.getDate();

    var table = self.getCalendarTable(year, month);
    var rows = table.map(function(row){
      var days = row.map(function(day, index){
        var isCur = (year === curYear) && (month === curMonth) && (day === curDay);
        var isWeekend = index === 0 || index === 6;
        var lunarDate;
        var pressCb = isCur? function(){}: function() {
          self.onClickCallback(year, month, day);
        };
        var className = "day s1 center";
        if(isCur) className += ' cur';
        if(isWeekend) className += ' weekend';
        if(day) {
          lunarDate = getLunarDate(new Date(year, month - 1, day));
          lunarDate = (<span className="lunar">
            {lunarDate.month}月{lunarDate.day}
          </span>);
        }
        return (
          <div className={className} onClick={pressCb}>
            {day}
            {lunarDate}
          </div>
        );
      });
      return (
        <div className="row s1">{days}</div>
      );
    });
    return (
      <div className="rows s11 column">
        {rows}
      </div>
    );
  }
});

module.exports = CalendarBody;