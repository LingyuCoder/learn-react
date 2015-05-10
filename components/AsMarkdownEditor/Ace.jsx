var React = require('react');

var Ace = React.createClass({
    componentDidMount: function(){
        var self = this;
        var editor = ace.edit(self.getDOMNode());
        var maxScrollTop = 0;
        editor.setTheme('ace/theme/tomorrow');
        var session = editor.getSession();
        session.setMode('ace/mode/markdown');
        session.on('change', function(){
            self.props.onChange(editor.getValue());
        });
        session.on('changeScrollTop', function(scrollTop){
            self.props.onScroll(scrollTop / maxScrollTop);
        });
        session.setUseWrapMode(true);
        editor.renderer.on('afterRender', function(){
            var renderer = editor.renderer;
            maxScrollTop = Math.max(0, renderer.layerConfig.maxHeight - renderer.$size.scrollerHeight + renderer.scrollMargin.bottom);
        });
        editor.container.style.fontSize = '16px';
        editor.setValue(self.props.content);
    },
    render: function(){
        return (
            <div className="ace"></div>
        );
    }
});

module.exports = Ace;