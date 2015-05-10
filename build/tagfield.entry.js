webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(7);

	var AsTagField = __webpack_require__(2);

	var AsForm = React.createClass({ displayName: 'AsForm',
	  handleSubmit: function handleSubmit() {
	    alert(this.refs.tags.getTags().join(','));
	  },
	  render: function render() {
	    return React.createElement('div', null, React.createElement('div', null, React.createElement(AsTagField, { ref: 'tags', initTags: ['JavaScript', 'CSS', 'HTML'] })), React.createElement('div', null, React.createElement('button', { className: 'submit', onClick: this.handleSubmit }, 'Get Value')));
	  }
	});

	React.render(React.createElement(AsForm, null), document.getElementById('form'));

/***/ },

/***/ 2:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(7);

	__webpack_require__(21);

	var AsTag = React.createClass({ displayName: 'AsTag',
		render: function render() {
			var className = 'as-tag' + (this.props.highlight ? ' as-tag-highlight' : '');
			return React.createElement('div', { className: className }, this.props.children);
		}
	});

	var AsTagField = React.createClass({ displayName: 'AsTagField',
		getInitialState: function getInitialState() {
			return {
				canDelete: false,
				tags: this.props.initTags || []
			};
		},
		getTags: function getTags() {
			return this.state.tags;
		},
		setTags: function setTags(tags) {
			this.setState({
				tags: tags
			});
		},
		createTag: function createTag(value) {
			if (!value.trim()) return;
			var tags = this.state.tags;
			if (tags.indexOf(value) !== -1) return;
			tags.push(value);
			this.setState({
				tags: tags,
				highlight: false
			});
		},
		deleteTag: function deleteTag() {
			var tags = this.state.tags;
			if (this.state.canDelete) this.setState({
				tags: tags.slice(0, -1),
				canDelete: false,
				highlight: false
			});else {
				this.setState({
					highlight: true,
					canDelete: true
				});
			}
		},
		componentDidMount: function componentDidMount() {
			var self = this;
			var $tags = self.getDOMNode();
			var $input = $tags.querySelector('.as-tags-input');
			var tags = self.state.tags;

			$input.addEventListener('keyup', function (e) {
				var key;
				key = e.keyCode || e.which;
				if (key === 13 || key === 188) {
					self.createTag($input.value.replace(',', ''));
					$input.value = '';
				} else if (key === 8) {
					if ($input.value === '') self.deleteTag();
				} else {
					self.setState({
						highlight: false,
						canDelete: false
					});
				}
			}, true);
		},
		render: function render() {
			var tags = this.state.tags;
			var highlight = this.state.highlight;
			var $tags = tags.map(function (tag, index) {
				return highlight && index === tags.length - 1 ? React.createElement(AsTag, { highlight: true }, tag) : React.createElement(AsTag, null, tag);
			});
			return React.createElement('div', { className: 'as-tagfield' }, $tags, React.createElement('input', { className: 'as-tags-input', placeholder: 'Add tag', type: 'text' }));
		}
	});

	module.exports = AsTagField;

/***/ },

/***/ 21:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(22);
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

/***/ 22:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(30)();
	exports.push([module.id, ".as-tag {\n  display: block;\n  float: left;\n  padding: 5px 10px;\n  border-radius: 3px;\n  margin: 0 10px 10px 0;\n  background-color: rgba(64, 224, 208, 0.5);\n  color: #666666;\n  cursor: default;\n}\n.as-tag.as-tag-highlight {\n  background-color: rgba(231, 76, 60, 0.5);\n  color: #666666;\n}\n.as-tag:after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n.as-tagfield {\n  display: inline-block;\n  max-width: 600px;\n  padding: 10px 10px 0;\n  border-radius: 3px;\n  background-color: #ffffff;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);\n  overflow: hidden;\n}\n.as-tagfield .as-tags-input {\n  display: block;\n  float: left;\n  padding: 5px 10px;\n  border: none;\n  line-height: 25px;\n  font-size: 18px;\n  margin-bottom: 10px;\n}\n.as-tagfield .as-tags-input:focus {\n  outline: none;\n}\n", ""]);

/***/ }

});