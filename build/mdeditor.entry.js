webpackJsonp([3],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(7);

	var AsMarkdownEditor = __webpack_require__(6);

	React.render(React.createElement(AsMarkdownEditor, null), document.getElementById('MdEditor'));

/***/ },

/***/ 6:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(7);

	__webpack_require__(27);

	var Ace = __webpack_require__(13);

	var MdEditor = React.createClass({ displayName: 'MdEditor',
	    storage: window.localStorage,
	    getInitialState: function getInitialState() {
	        var self = this;
	        return {
	            content: self.storage.lastEdit || ''
	        };
	    },
	    changeContent: function changeContent(content) {
	        var self = this;
	        self.setState({
	            content: content
	        });
	        self.storage.lastEdit = content;
	    },
	    scrollResult: function scrollResult(percent) {
	        var self = this;
	        var $result = $('.result', self.getDOMNode());
	        var maxScrollHeight = $result.prop('scrollHeight') - $result.outerHeight();
	        $result.scrollTop(maxScrollHeight * percent);
	    },
	    render: function render() {
	        var $result = $('<div>' + marked(this.state.content) + '</div>');
	        $('pre code', $result).each(function (i, block) {
	            hljs.highlightBlock(block);
	        });
	        return React.createElement('div', { className: 'as-md-editor' }, React.createElement('div', { className: 'editor' }, React.createElement(Ace, { onChange: this.changeContent, onScroll: this.scrollResult, content: this.state.content })), React.createElement('div', { className: 'result yue', dangerouslySetInnerHTML: { __html: $result.html() } }));
	    }
	});

	module.exports = MdEditor;

/***/ },

/***/ 13:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(7);

	var Ace = React.createClass({ displayName: 'Ace',
	    componentDidMount: function componentDidMount() {
	        var self = this;
	        var editor = ace.edit(self.getDOMNode());
	        var maxScrollTop = 0;
	        editor.setTheme('ace/theme/tomorrow');
	        var session = editor.getSession();
	        session.setMode('ace/mode/markdown');
	        session.on('change', function () {
	            self.props.onChange(editor.getValue());
	        });
	        session.on('changeScrollTop', function (scrollTop) {
	            self.props.onScroll(scrollTop / maxScrollTop);
	        });
	        session.setUseWrapMode(true);
	        editor.renderer.on('afterRender', function () {
	            var renderer = editor.renderer;
	            maxScrollTop = Math.max(0, renderer.layerConfig.maxHeight - renderer.$size.scrollerHeight + renderer.scrollMargin.bottom);
	        });
	        editor.container.style.fontSize = '16px';
	        editor.setValue(self.props.content);
	    },
	    render: function render() {
	        return React.createElement('div', { className: 'ace' });
	    }
	});

	module.exports = Ace;

/***/ },

/***/ 27:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(28);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(29)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 28:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(30)();
	exports.push([module.id, ".as-md-editor {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.as-md-editor .editor {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 50%;\n}\n.as-md-editor .editor .ace {\n  height: 100%;\n}\n.as-md-editor .editor .ace .ace_layer {\n  /*用于修正ace中文换行时可能出现的叠字情况*/\n  white-space: nowrap !important;\n}\n.as-md-editor .result {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  bottom: 0;\n  right: 0;\n  overflow: auto;\n  padding: 20px;\n}\n", ""]);

/***/ }

});