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

var MdEditor = React.createClass({
    storage: window.localStorage,
    getInitialState: function(){
        var self = this;
        return {
            content: self.storage.lastEdit || ''
        };
    },
    changeContent: function(content){
        var self = this;
        self.setState({
            content: content
        });
        self.storage.lastEdit = content;
    },
    scrollResult: function(percent){
        var self = this;
        var $result = $('.result', self.getDOMNode());
        var maxScrollHeight = $result.prop('scrollHeight') - $result.outerHeight();
        $result.scrollTop(maxScrollHeight * percent);
    },
    render: function() {
        var $result = $('<div>' + marked(this.state.content) + '</div>');
        $('pre code', $result).each(function(i, block) {
            hljs.highlightBlock(block);
        });
        return (
            <div className="markdown">
                <div className="editor">
                    <Ace onChange={this.changeContent} onScroll={this.scrollResult} content={this.state.content}>
                    </Ace>
                </div>
                <div className="result yue" dangerouslySetInnerHTML={{__html: $result.html()}}></div>
            </div>    
        );
    }
});

React.render(
  <MdEditor/>,
  document.getElementById('MdEditor')
);
