webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);


/***/ },

/***/ 2:
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

	var _CalculatorResultPanel = __webpack_require__(13);

	var _CalculatorResultPanel2 = _interopRequireDefault(_CalculatorResultPanel);

	var _CalculatorButtonPanel = __webpack_require__(14);

	var _CalculatorButtonPanel2 = _interopRequireDefault(_CalculatorButtonPanel);

	__webpack_require__(28);
	__webpack_require__(30);

	var Calculator = (function (_React$Component) {
	    function Calculator() {
	        var _this = this;

	        _classCallCheck(this, Calculator);

	        _get(Object.getPrototypeOf(Calculator.prototype), 'constructor', this).call(this);

	        this.onButtonClick = function (type) {
	            var cur;
	            var lastLetter;
	            switch (type) {
	                case 'c':
	                    _this.setState({
	                        last: '',
	                        cur: '0'
	                    });
	                    break;
	                case 'back':
	                    _this.setState({
	                        cur: _this.state.cur === '0' ? _this.state.cur : _this.state.cur.slice(0, -1) || '0'
	                    });
	                    break;
	                case '=':
	                    try {
	                        _this.setState({
	                            last: _this.state.cur + '=',
	                            cur: eval(_this.state.cur) + ''
	                        });
	                    } catch (e) {
	                        _this.setState({
	                            last: _this.state.cur + '=',
	                            cur: 'NaN'
	                        });
	                    }
	                    break;
	                case '+':
	                case '-':
	                case '*':
	                case '/':
	                    cur = _this.state.cur;
	                    lastLetter = cur.slice(-1);
	                    if (lastLetter === '+' || lastLetter === '-' || lastLetter === '*' || lastLetter === '/') _this.setState({
	                        cur: cur.slice(0, -1) + type
	                    });else _this.setState({
	                        cur: _this.state.cur + type
	                    });
	                    break;
	                case '.':
	                    cur = _this.state.cur;
	                    lastLetter = cur.slice(-1);
	                    if (lastLetter !== '.') {
	                        _this.setState({
	                            cur: _this.state.cur + type
	                        });
	                    }
	                    break;
	                default:
	                    _this.setState({
	                        cur: _this.state.cur === '0' ? type : _this.state.cur + type
	                    });
	                    break;
	            }
	        };

	        this.render = function () {
	            var exp = {
	                cur: _this.state.cur,
	                last: _this.state.last
	            };
	            return _react2['default'].createElement(
	                'div',
	                { className: 'as-calculator' },
	                _react2['default'].createElement(_CalculatorResultPanel2['default'], { exp: exp }),
	                _react2['default'].createElement(_CalculatorButtonPanel2['default'], { onClick: _this.onButtonClick })
	            );
	        };

	        this.state = {
	            last: '',
	            cur: '0'
	        };
	    }

	    _inherits(Calculator, _React$Component);

	    return Calculator;
	})(_react2['default'].Component);

	exports['default'] = Calculator;
	module.exports = exports['default'];

/***/ },

/***/ 13:
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

	var replacement = [{
	    reg: /\*/g,
	    dest: '×'
	}, {
	    reg: /\//g,
	    dest: '÷'
	}];

	var ResultPanel = (function (_React$Component) {
	    function ResultPanel() {
	        var _this = this;

	        _classCallCheck(this, ResultPanel);

	        _get(Object.getPrototypeOf(ResultPanel.prototype), 'constructor', this).call(this);

	        this.render = function () {
	            var exp = _this.props.exp;
	            var cur, last;
	            replacement.forEach(function (item) {
	                exp.cur = exp.cur.replace(item.reg, item.dest);
	                exp.last = exp.last.replace(item.reg, item.dest);
	            });
	            return _react2['default'].createElement(
	                'div',
	                { className: 'result-panel' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'last-row' },
	                    exp.last
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 'cur-row' },
	                    exp.cur
	                )
	            );
	        };
	    }

	    _inherits(ResultPanel, _React$Component);

	    _createClass(ResultPanel, null, [{
	        key: 'propTypes',
	        value: {
	            exp: _react2['default'].PropTypes.string
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            exp: 0
	        },
	        enumerable: true
	    }]);

	    return ResultPanel;
	})(_react2['default'].Component);

	exports['default'] = ResultPanel;
	module.exports = exports['default'];

/***/ },

/***/ 14:
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

	var ButtonPanel = (function (_React$Component) {
	    function ButtonPanel() {
	        var _this = this;

	        _classCallCheck(this, ButtonPanel);

	        _get(Object.getPrototypeOf(ButtonPanel.prototype), 'constructor', this).call(this);

	        this.onClick = function (event) {
	            var target = event.target;
	            target.classList.remove('clicked');
	            setTimeout(function () {
	                target.classList.add('clicked');
	            }, 0);
	            _this.props.onClick(target.dataset.value);
	        };

	        this.componentDidMount = function () {
	            var dom = _react2['default'].findDOMNode(_this);
	            var buttons = dom.querySelectorAll('button');
	            buttons = [].slice.call(buttons);
	            buttons.forEach(function (button) {
	                _this.keyMapping[button.dataset.code] = button;
	            });

	            window.onkeydown = function (event) {
	                var button;
	                var key = (event.shiftKey ? 'shift+' : '') + event.keyCode || event.which;
	                if (button = _this.keyMapping[key]) {
	                    button.click();
	                    event.stopPropagation();
	                    event.preventDefault();
	                }
	            };
	        };

	        this.render = function () {
	            return _react2['default'].createElement(
	                'div',
	                { className: 'button-panel row' },
	                _react2['default'].createElement(
	                    'div',
	                    { className: 's3 column' },
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 's1 row' },
	                        _react2['default'].createElement(
	                            'button',
	                            { onClick: _this.onClick, 'data-code': '67', 'data-value': 'c', className: 'button s1' },
	                            'C'
	                        ),
	                        _react2['default'].createElement(
	                            'button',
	                            { onClick: _this.onClick, 'data-code': '8', 'data-value': 'back', className: 'button s1' },
	                            '←'
	                        ),
	                        _react2['default'].createElement(
	                            'button',
	                            { onClick: _this.onClick, 'data-code': '191', 'data-value': '/', className: 'button s1' },
	                            '÷'
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 's1 row' },
	                        _react2['default'].createElement(
	                            'button',
	                            { onClick: _this.onClick, 'data-code': '55', 'data-value': '7', className: 'button s1' },
	                            '7'
	                        ),
	                        _react2['default'].createElement(
	                            'button',
	                            { onClick: _this.onClick, 'data-code': '56', 'data-value': '8', className: 'button s1' },
	                            '8'
	                        ),
	                        _react2['default'].createElement(
	                            'button',
	                            { onClick: _this.onClick, 'data-code': '57', 'data-value': '9', className: 'button s1' },
	                            '9'
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 's1 row' },
	                        _react2['default'].createElement(
	                            'button',
	                            { onClick: _this.onClick, 'data-code': '52', 'data-value': '4', className: 'button s1' },
	                            '4'
	                        ),
	                        _react2['default'].createElement(
	                            'button',
	                            { onClick: _this.onClick, 'data-code': '53', 'data-value': '5', className: 'button s1' },
	                            '5'
	                        ),
	                        _react2['default'].createElement(
	                            'button',
	                            { onClick: _this.onClick, 'data-code': '54', 'data-value': '6', className: 'button s1' },
	                            '6'
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 's1 row' },
	                        _react2['default'].createElement(
	                            'button',
	                            { onClick: _this.onClick, 'data-code': '49', 'data-value': '1', className: 'button s1' },
	                            '1'
	                        ),
	                        _react2['default'].createElement(
	                            'button',
	                            { onClick: _this.onClick, 'data-code': '50', 'data-value': '2', className: 'button s1' },
	                            '2'
	                        ),
	                        _react2['default'].createElement(
	                            'button',
	                            { onClick: _this.onClick, 'data-code': '51', 'data-value': '3', className: 'button s1' },
	                            '3'
	                        )
	                    ),
	                    _react2['default'].createElement(
	                        'div',
	                        { className: 's1 row' },
	                        _react2['default'].createElement(
	                            'button',
	                            { onClick: _this.onClick, 'data-code': '48', 'data-value': '0', className: 'button s2' },
	                            '0'
	                        ),
	                        _react2['default'].createElement(
	                            'button',
	                            { onClick: _this.onClick, 'data-code': '190', 'data-value': '.', className: 'button s1' },
	                            '.'
	                        )
	                    )
	                ),
	                _react2['default'].createElement(
	                    'div',
	                    { className: 's1 column' },
	                    _react2['default'].createElement(
	                        'button',
	                        { onClick: _this.onClick, 'data-code': 'shift+56', 'data-value': '*', className: 'button s1' },
	                        '×'
	                    ),
	                    _react2['default'].createElement(
	                        'button',
	                        { onClick: _this.onClick, 'data-code': '189', 'data-value': '-', className: 'button s1' },
	                        '-'
	                    ),
	                    _react2['default'].createElement(
	                        'button',
	                        { onClick: _this.onClick, 'data-code': '187', 'data-value': '+', className: 'button s1' },
	                        '+'
	                    ),
	                    _react2['default'].createElement(
	                        'button',
	                        { onClick: _this.onClick, 'data-code': '13', 'data-value': '=', className: 'button s2 button-equal' },
	                        '='
	                    )
	                )
	            );
	        };

	        this.keyMapping = {};
	    }

	    _inherits(ButtonPanel, _React$Component);

	    return ButtonPanel;
	})(_react2['default'].Component);

	exports['default'] = ButtonPanel;
	module.exports = exports['default'];

/***/ },

/***/ 28:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(29);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(36)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./flex.less", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/autoprefixer-loader/index.js!./../../../node_modules/less-loader/index.js!./flex.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(42)();
	exports.push([module.id, ".text-center {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  text-align: center;\n}\n.row {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n.column {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.s1 {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.s2 {\n  -webkit-box-flex: 2;\n  -webkit-flex: 2;\n      -ms-flex: 2;\n          flex: 2;\n}\n.s3 {\n  -webkit-box-flex: 3;\n  -webkit-flex: 3;\n      -ms-flex: 3;\n          flex: 3;\n}\n.s4 {\n  -webkit-box-flex: 4;\n  -webkit-flex: 4;\n      -ms-flex: 4;\n          flex: 4;\n}\n.s5 {\n  -webkit-box-flex: 5;\n  -webkit-flex: 5;\n      -ms-flex: 5;\n          flex: 5;\n}\n.s6 {\n  -webkit-box-flex: 6;\n  -webkit-flex: 6;\n      -ms-flex: 6;\n          flex: 6;\n}\n.s7 {\n  -webkit-box-flex: 7;\n  -webkit-flex: 7;\n      -ms-flex: 7;\n          flex: 7;\n}\n.s8 {\n  -webkit-box-flex: 8;\n  -webkit-flex: 8;\n      -ms-flex: 8;\n          flex: 8;\n}\n.s9 {\n  -webkit-box-flex: 9;\n  -webkit-flex: 9;\n      -ms-flex: 9;\n          flex: 9;\n}\n.s10 {\n  -webkit-box-flex: 10;\n  -webkit-flex: 10;\n      -ms-flex: 10;\n          flex: 10;\n}\n.s11 {\n  -webkit-box-flex: 11;\n  -webkit-flex: 11;\n      -ms-flex: 11;\n          flex: 11;\n}\n.s12 {\n  -webkit-box-flex: 12;\n  -webkit-flex: 12;\n      -ms-flex: 12;\n          flex: 12;\n}\n.center {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  text-align: center;\n}\n", ""]);

/***/ },

/***/ 30:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(31);
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

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(42)();
	exports.push([module.id, ".as-calculator {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.as-calculator .result-panel {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  padding-top: 40px;\n  -webkit-box-flex: 2;\n  -webkit-flex: 2;\n      -ms-flex: 2;\n          flex: 2;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background-color: #e3e7e9;\n  text-align: right;\n  padding: 0px 30px;\n  line-height: 80px;\n}\n.as-calculator .result-panel .last-row {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  color: #969ba3;\n  font-size: 30px;\n  -webkit-box-align: end;\n  -webkit-align-items: flex-end;\n      -ms-flex-align: end;\n          align-items: flex-end;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n  -webkit-justify-content: flex-end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  overflow: auto;\n  max-width: 100%;\n}\n.as-calculator .result-panel .cur-row {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  color: #46494d;\n  font-size: 40px;\n  overflow: auto;\n  max-width: 100%;\n}\n.as-calculator .button-panel {\n  -webkit-box-flex: 5;\n  -webkit-flex: 5;\n      -ms-flex: 5;\n          flex: 5;\n}\n.as-calculator .button-panel .button {\n  cursor: pointer;\n  position: relative;\n  margin: 0;\n  padding: 0;\n  box-shadow: inset 1px 1px 0 0 #e3e7e9;\n  border: none;\n  background-color: #fafafa;\n  font-size: 30px;\n  line-height: 30px;\n  text-align: center;\n  color: #979ca4;\n  overflow: hidden;\n}\n.as-calculator .button-panel .button:before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #aaa;\n  opacity: 0;\n}\n.as-calculator .button-panel .button.clicked:before {\n  -webkit-animation: as-calculator-click 0.5s ease-out 0s 1 alternate forwards;\n          animation: as-calculator-click 0.5s ease-out 0s 1 alternate forwards;\n}\n.as-calculator .button-panel .button.button-equal {\n  color: #fff;\n  background-color: #fa722e;\n}\n.as-calculator .button-panel .button:focus {\n  outline: none;\n}\n@-webkit-keyframes as-calculator-click {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: .7;\n  }\n  100% {\n    -webkit-transform: scale(3);\n            transform: scale(3);\n    opacity: 0;\n  }\n}\n@keyframes as-calculator-click {\n  0% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: .7;\n  }\n  100% {\n    -webkit-transform: scale(3);\n            transform: scale(3);\n    opacity: 0;\n  }\n}\n", ""]);

/***/ }

});