webpackJsonp([5],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(17);

	var _react2 = _interopRequireDefault(_react);

	var _AsTag = __webpack_require__(8);

	var _AsTag2 = _interopRequireDefault(_AsTag);

	__webpack_require__(18);

	var AsTagField = (function (_React$Component) {
		function AsTagField(props) {
			var _this = this;

			_classCallCheck(this, AsTagField);

			_get(Object.getPrototypeOf(AsTagField.prototype), 'constructor', this).call(this, props);

			this.render = function () {
				var tags = _this.state.tags;
				var highlight = _this.state.highlight;
				var $tags = tags.map(function (tag, index) {
					return highlight && index === tags.length - 1 ? _react2['default'].createElement(
						_AsTag2['default'],
						{ highlight: true },
						tag
					) : _react2['default'].createElement(
						_AsTag2['default'],
						null,
						tag
					);
				});
				return _react2['default'].createElement(
					'div',
					{ className: 'as-tagfield' },
					$tags,
					_react2['default'].createElement('input', { className: 'as-tags-input', placeholder: 'Add a new tag', type: 'text' })
				);
			};

			this.createTag = function (value) {
				if (!value.trim()) return;
				var tags = _this.state.tags;
				if (tags.indexOf(value) !== -1) return;
				tags.push(value);
				_this.setState({
					tags: tags,
					highlight: false
				});
				_this.props.onChange(tags);
			};

			this.removeTag = function () {
				var tags = _this.state.tags;
				if (_this.state.canDelete) {
					tags = tags.slice(0, -1);
					_this.setState({
						tags: tags,
						canDelete: false,
						highlight: false
					});
					_this.props.onChange(tags);
				} else _this.setState({
					highlight: true,
					canDelete: true
				});
			};

			this.componentDidMount = function () {
				var $tags = _react2['default'].findDOMNode(_this);
				var $input = $tags.querySelector('.as-tags-input');
				var tags = _this.state.tags;

				$input.addEventListener('keyup', function (e) {
					var key;
					key = e.keyCode || e.which;
					if (key === 13 || key === 188) {
						_this.createTag($input.value.replace(',', ''));
						$input.value = '';
					} else if (key === 8) $input.value === '' && _this.removeTag();else _this.setState({
						highlight: false,
						canDelete: false
					});
				}, true);

				_this.props.onChange(tags);
			};

			this.state = {
				canDelete: false,
				tags: props.initTags
			};
		}

		_inherits(AsTagField, _React$Component);

		_createClass(AsTagField, null, [{
			key: 'propTypes',
			value: {
				initTags: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.string),
				onChange: _react2['default'].PropTypes.func
			},
			enumerable: true
		}, {
			key: 'defaultProps',
			value: {
				initTags: [],
				onChange: function onChange() {}
			},
			enumerable: true
		}]);

		return AsTagField;
	})(_react2['default'].Component);

	exports['default'] = AsTagField;
	module.exports = exports['default'];

/***/ },

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

	var _react = __webpack_require__(17);

	var _react2 = _interopRequireDefault(_react);

	var AsTag = (function (_React$Component) {
		function AsTag() {
			var _this = this;

			_classCallCheck(this, AsTag);

			_get(Object.getPrototypeOf(AsTag.prototype), 'constructor', this).call(this);

			this.render = function () {
				var className = 'as-tag' + (_this.props.highlight ? ' as-tag-highlight' : '');
				return _react2['default'].createElement(
					'div',
					{ className: className },
					_this.props.children
				);
			};
		}

		_inherits(AsTag, _React$Component);

		return AsTag;
	})(_react2['default'].Component);

	exports['default'] = AsTag;
	module.exports = exports['default'];

/***/ },

/***/ 18:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(19);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 19:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(42)();
	exports.push([module.id, ".as-tag {\n  display: block;\n  float: left;\n  padding: 5px 10px;\n  border-radius: 3px;\n  margin: 0 10px 10px 0;\n  background-color: rgba(64, 224, 208, 0.5);\n  color: #666666;\n  cursor: default;\n}\n.as-tag.as-tag-highlight {\n  background-color: rgba(231, 76, 60, 0.5);\n  color: #666666;\n}\n.as-tag:after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n.as-tagfield {\n  display: inline-block;\n  max-width: 600px;\n  padding: 10px 10px 0;\n  border-radius: 3px;\n  background-color: #ffffff;\n  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);\n  overflow: hidden;\n}\n.as-tagfield .as-tags-input {\n  display: block;\n  float: left;\n  padding: 5px 10px;\n  border: none;\n  line-height: 25px;\n  font-size: 18px;\n  margin-bottom: 10px;\n}\n.as-tagfield .as-tags-input:focus {\n  outline: none;\n}\n", ""]);

/***/ }

});