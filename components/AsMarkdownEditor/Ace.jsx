var React = require('react');
var BaseComponent = require('../BaseComponent.jsx');

class Ace extends BaseComponent {
    constructor() {
        super();
        this._bind('componentDidMount', 'render');
    }
    componentDidMount() {
        var editor = ace.edit(this.getDOMNode());
        var maxScrollTop = 0;
        editor.setTheme('ace/theme/tomorrow');
        var session = editor.getSession();
        session.setMode('ace/mode/markdown');
        session.on('change', () => {
            this.props.onChange(editor.getValue());
        });
        session.on('changeScrollTop', (scrollTop) => {
            this.props.onScroll(scrollTop / maxScrollTop);
        });
        session.setUseWrapMode(true);
        editor.renderer.on('afterRender', () => {
            var renderer = editor.renderer;
            maxScrollTop = Math.max(0, renderer.layerConfig.maxHeight - renderer.$size.scrollerHeight + renderer.scrollMargin.bottom);
        });
        editor.container.style.fontSize = '16px';
        editor.setValue(this.props.content);
    }
    render() {
        return (
            <div className="ace"></div>
        );
    }
} 

module.exports = Ace;