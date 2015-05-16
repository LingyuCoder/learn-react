import React from 'react';
import BaseComponent from '../BaseComponent';
import Ace from './Ace';
import Marked from 'marked';
import Highlight from 'highlight.js';

require('./index.less');

var $ = require('expose?jQuery!../../lib/jQuery/jquery.min.js');

export default class MdEditor extends BaseComponent {
    constructor() {
        super();
        this.storage = window.localStorage;
        this.state = {
            content: this.storage.lastEdit || ''
        };
        this._bind('changeContent', 'scrollResult', 'render');
    }
    changeContent(content) {
        this.setState({
            content: content
        });
        this.storage.lastEdit = content;
    }
    scrollResult(percent) {
        var $result = $('.result', this.getDOMNode());
        var maxScrollHeight = $result.prop('scrollHeight') - $result.outerHeight();
        $result.scrollTop(maxScrollHeight * percent);
    }
    render() {
        var $result = $('<div>' + Marked(this.state.content) + '</div>');
        $('pre code', $result).each((i, block) => {
            Highlight.highlightBlock(block);
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
}
