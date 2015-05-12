var React = require('react');
var BaseComponent = require('../BaseComponent.jsx');
var replacement = [{
    reg: /\*/g,
    dest: '×'
},{
    reg: /\//g,
    dest: '÷'
}];


class ResultPanel extends BaseComponent {
    constructor() {
        super();
        this._bind('render');
    }
    render() {
        var exp = this.props.exp;
        var cur, last;
        replacement.forEach((item) => {
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
}

module.exports = ResultPanel;
