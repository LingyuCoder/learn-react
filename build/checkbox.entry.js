webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(7);

	var AsCheckbox = __webpack_require__(4);
	var AsRadio = __webpack_require__(5);

	React.render(React.createElement('div', null, React.createElement('div', null, React.createElement(AsCheckbox, { checked: true }, 'Checkbox'), React.createElement(AsCheckbox, null, 'Checkbox'), React.createElement(AsCheckbox, null, 'Checkbox')), React.createElement('div', null, React.createElement(AsRadio, { checked: true, name: 'radio' }, 'RadioBox'), React.createElement(AsRadio, { name: 'radio' }, 'RadioBox'), React.createElement(AsRadio, { name: 'radio' }, 'RadioBox'))), document.getElementById('checkbox'));

/***/ },

/***/ 4:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(7);

	__webpack_require__(19);

	var AsCheckbox = React.createClass({ displayName: 'AsCheckbox',
	  render: function render() {
	    var $input;
	    if (this.props.checked) $input = React.createElement('input', { type: 'checkbox', className: 'as-option-input as-checkbox', defaultChecked: true });else $input = React.createElement('input', { type: 'checkbox', className: 'as-option-input as-checkbox' });
	    return React.createElement('label', { className: 'as-checkbox-label' }, $input, this.props.children);
	  }
	});

	module.exports = AsCheckbox;

/***/ },

/***/ 5:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(7);

	__webpack_require__(19);

	var AsRadio = React.createClass({ displayName: 'AsRadio',
	  render: function render() {
	    var $input;
	    if (this.props.checked) $input = React.createElement('input', { type: 'radio', className: 'as-option-input as-radio', name: this.props.name, defaultChecked: true });else $input = React.createElement('input', { type: 'radio', className: 'as-option-input as-radio', name: this.props.name });
	    return React.createElement('label', { className: 'as-checkbox-label' }, $input, this.props.children);
	  }
	});

	module.exports = AsRadio;

/***/ },

/***/ 19:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(20);
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

/***/ 20:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(30)();
	exports.push([module.id, "@-webkit-keyframes click-wave {\n  0% {\n    width: 40px;\n    height: 40px;\n    opacity: .35;\n    position: relative;\n  }\n  100% {\n    width: 200px;\n    height: 200px;\n    -webkit-transform: translate(-80px, -80px);\n            transform: translate(-80px, -80px);\n    opacity: .0;\n  }\n}\n@keyframes click-wave {\n  0% {\n    width: 40px;\n    height: 40px;\n    opacity: .35;\n    position: relative;\n  }\n  100% {\n    width: 200px;\n    height: 200px;\n    -webkit-transform: translate(-80px, -80px);\n            transform: translate(-80px, -80px);\n    opacity: .0;\n  }\n}\n.as-checkbox-label {\n  display: inline-block;\n  line-height: 40px;\n  padding: 2px 5px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.as-option-input {\n  -webkit-appearance: none;\n  appearance: none;\n  height: 40px;\n  width: 40px;\n  -webkit-transition: all 0.15s ease-out 0s;\n          transition: all 0.15s ease-out 0s;\n  background: #cbd1d8;\n  border: none;\n  color: #fff;\n  cursor: pointer;\n  display: inline-block;\n  outline: none;\n  position: relative;\n  margin-right: 0.3rem;\n  vertical-align: bottom;\n  z-index: 1000;\n}\n.as-option-input:hover {\n  background: #9faab7;\n}\n.as-option-input:checked {\n  background: #40e0d0;\n}\n.as-option-input:checked:before {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  content: '\\2716';\n  display: inline-block;\n  font-size: 26.66667px;\n  text-align: center;\n  line-height: 40px;\n}\n.as-option-input:checked:after {\n  -webkit-animation: click-wave 0.65s;\n          animation: click-wave 0.65s;\n  background: #40e0d0;\n  content: '';\n  display: block;\n  position: relative;\n  z-index: 100;\n}\n.as-option-input.as-radio {\n  border-radius: 50%;\n}\n.as-option-input.as-radio:after {\n  border-radius: 50%;\n}\n", ""]);

/***/ }

});