var React = require('react');
var BaseComponent = require('../BaseComponent.jsx');

class ButtonPanel extends BaseComponent {
    constructor() {
        super();
        this.keyMapping = {};
        this._bind('onClick', 'componentDidMount', 'render');
    }
    onClick(event) {
        var target = event.target;
        target.classList.remove('clicked');
        setTimeout(() => {
            target.classList.add('clicked');
        }, 0);
        this.props.onClick(target.dataset.value);
    }
    componentDidMount() {
        var dom = React.findDOMNode(this);
        var buttons = dom.querySelectorAll('button');
        buttons = [].slice.call(buttons);
        buttons.forEach((button) => {
            this.keyMapping[button.dataset.code] = button;
        });

        window.onkeydown = (event) => {
            var button;
            var key = (event.shiftKey ? 'shift+': '') + event.keyCode || event.which;
            if(button = this.keyMapping[key]) {
                button.click();
                event.stopPropagation();
                event.preventDefault();
            }
        };
    }
    render() {
        return (
            <div className="button-panel row">
                <div className="s3 column">
                    <div className="s1 row">
                        <button onClick={this.onClick} data-code="67" data-value="c" className="button s1">C</button>
                        <button onClick={this.onClick} data-code="8" data-value="back" className="button s1">←</button>
                        <button onClick={this.onClick} data-code="191" data-value="/" className="button s1">÷</button>
                    </div>
                    <div className="s1 row">
                        <button onClick={this.onClick} data-code="55" data-value="7" className="button s1">7</button>
                        <button onClick={this.onClick} data-code="56" data-value="8" className="button s1">8</button>
                        <button onClick={this.onClick} data-code="57" data-value="9" className="button s1">9</button>
                    </div>
                    <div className="s1 row">
                        <button onClick={this.onClick} data-code="52" data-value="4" className="button s1">4</button>
                        <button onClick={this.onClick} data-code="53" data-value="5" className="button s1">5</button>
                        <button onClick={this.onClick} data-code="54" data-value="6" className="button s1">6</button>
                    </div>
                    <div className="s1 row">
                        <button onClick={this.onClick} data-code="49" data-value="1" className="button s1">1</button>
                        <button onClick={this.onClick} data-code="50" data-value="2" className="button s1">2</button>
                        <button onClick={this.onClick} data-code="51" data-value="3" className="button s1">3</button>
                    </div>
                    <div className="s1 row">
                        <button onClick={this.onClick} data-code="48" data-value="0" className="button s2">0</button>
                        <button onClick={this.onClick} data-code="190" data-value="." className="button s1">.</button>
                    </div>
                </div>
                <div className="s1 column">
                    <button onClick={this.onClick} data-code="shift+56" data-value="*" className="button s1">×</button>
                    <button onClick={this.onClick} data-code="189" data-value="-" className="button s1">-</button>
                    <button onClick={this.onClick} data-code="187" data-value="+" className="button s1">+</button>
                    <button onClick={this.onClick} data-code="13" data-value="=" className="button s2 button-equal">=</button>
                </div>
            </div>
        );
    }
}

module.exports = ButtonPanel;