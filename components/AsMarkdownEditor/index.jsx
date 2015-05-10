var React = require('react');

require('./index.less');

var Ace = require('./Ace.jsx');

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
            <div className="as-md-editor">
                <div className="editor">
                    <Ace onChange={this.changeContent} onScroll={this.scrollResult} content={this.state.content}>
                    </Ace>
                </div>
                <div className="result yue" dangerouslySetInnerHTML={{__html: $result.html()}}></div>
            </div>
        );
    }
});

module.exports = MdEditor;