var React = require('react');

var ResultPanel = React.createClass({
    replacement: [{
        reg: /\*/g,
        dest: '×'
    },{
        reg: /\//g,
        dest: '÷'
    }],
    render: function() {
        var exp = this.props.exp;
        var cur, last;
        this.replacement.forEach(function(item) {
            exp.cur = exp.cur.replace(item.reg, item.dest);
            exp.last = exp.last.replace(item.reg, item.dest);
        });
        return (
            <div className="result-panel">
                <div className="last-row">{exp.last}</div>
                <div className="cur-row">{exp.cur}</div>
            </div>
        );
    }
});

module.exports = ResultPanel;