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

var ButtonPanel = React.createClass({
    keyMapping: {},
    onClick: function(event) {
        var target = event.target;
        target.classList.remove('clicked');
        setTimeout(function(){
            target.classList.add('clicked');
        }, 0);
        this.props.onClick(target.dataset.value);
    },
    componentDidMount: function() {
        self = this;
        var dom = self.getDOMNode();
        var buttons = dom.querySelectorAll('button');
        buttons = Array.prototype.slice.call(buttons);
        buttons.forEach(function(button) {
            self.keyMapping[button.dataset.code] = button;
        });

        window.onkeydown = function(event) {
            var button;
            var key = (event.shiftKey ? 'shift+': '') + event.keyCode || event.which;
            if(button = self.keyMapping[key]) {
                button.click();
                event.stopPropagation();
                event.preventDefault();
            }
        };
    },
    render: function() {
        return (
            <div className="button-panel row">
                <div className="f3 col">
                    <div className="f1 row">
                        <button onClick={this.onClick} data-code="67" data-value="c" className="button f1">C</button>
                        <button onClick={this.onClick} data-code="8" data-value="back" className="button f1">←</button>
                        <button onClick={this.onClick} data-code="191" data-value="/" className="button f1">÷</button>
                    </div>
                    <div className="f1 row">
                        <button onClick={this.onClick} data-code="55" data-value="7" className="button f1">7</button>
                        <button onClick={this.onClick} data-code="56" data-value="8" className="button f1">8</button>
                        <button onClick={this.onClick} data-code="57" data-value="9" className="button f1">9</button>
                    </div>
                    <div className="f1 row">
                        <button onClick={this.onClick} data-code="52" data-value="4" className="button f1">4</button>
                        <button onClick={this.onClick} data-code="53" data-value="5" className="button f1">5</button>
                        <button onClick={this.onClick} data-code="54" data-value="6" className="button f1">6</button>
                    </div>
                    <div className="f1 row">
                        <button onClick={this.onClick} data-code="49" data-value="1" className="button f1">1</button>
                        <button onClick={this.onClick} data-code="50" data-value="2" className="button f1">2</button>
                        <button onClick={this.onClick} data-code="51" data-value="3" className="button f1">3</button>
                    </div>
                    <div className="f1 row">
                        <button onClick={this.onClick} data-code="48" data-value="0" className="button f2">0</button>
                        <button onClick={this.onClick} data-code="190" data-value="." className="button f1">.</button>
                    </div>
                </div>
                <div className="f1 col">
                    <button onClick={this.onClick} data-code="shift+56" data-value="*" className="button f1">×</button>
                    <button onClick={this.onClick} data-code="189" data-value="-" className="button f1">-</button>
                    <button onClick={this.onClick} data-code="187" data-value="+" className="button f1">+</button>
                    <button onClick={this.onClick} data-code="13" data-value="=" className="button f2 button-equal">=</button>
                </div>
            </div>
        );
    }
});

var Calculator = React.createClass({
    getInitialState: function(){
        return {
            last: '',
            cur: '0'
        };
    },
    onButtonClick: function(type){
        var cur;
        var lastLetter;
        switch (type) {
            case 'c':
                this.setState({
                    last: '',
                    cur: '0'
                });
                break;
            case 'back':
                this.setState({
                    cur: this.state.cur === '0' ? this.state.cur : this.state.cur.slice(0, -1) || '0'
                });
                break;
            case '=':
                try {
                    this.setState({
                        last: this.state.cur + '=',
                        cur: eval(this.state.cur) + ''
                    });
                } catch(e) {
                    this.setState({
                        last: this.state.cur + '=',
                        cur: 'NaN'
                    });
                }
                break;
            case '+':
            case '-':
            case '*':
            case '/':
                cur = this.state.cur;
                lastLetter = cur.slice(-1);
                if(lastLetter === '+' || lastLetter === '-' || lastLetter === '*' || lastLetter === '/')
                    this.setState({
                        cur: cur.slice(0, -1) + type
                    });
                else
                    this.setState({
                        cur: this.state.cur + type
                    });
                break;
            case '.':
                cur = this.state.cur;
                lastLetter = cur.slice(-1);
                if(lastLetter !== '.') {
                    this.setState({
                        cur: this.state.cur + type
                    });
                }
                break;
            default:
                this.setState({
                    cur: this.state.cur === '0' ? type: this.state.cur + type
                });
                break;
        }
    },
    render: function() {
        var exp = {
            cur: this.state.cur,
            last: this.state.last
        };
        return (
            <div className="react-calculator">
                <ResultPanel exp={exp}/>
                <ButtonPanel onClick={this.onButtonClick}/>
            </div>
        );
    }
});

React.render(
    <Calculator />,
    document.getElementById('calculator')
);
