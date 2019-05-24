(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["DnR"] = factory(require("react"));
	else
		root["DnR"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.WindowsTheme = exports.OSXTheme = exports.default = undefined;

	var _themes = __webpack_require__(3);

	Object.defineProperty(exports, 'OSXTheme', {
	  enumerable: true,
	  get: function get() {
	    return _themes.OSXTheme;
	  }
	});
	Object.defineProperty(exports, 'WindowsTheme', {
	  enumerable: true,
	  get: function get() {
	    return _themes.WindowsTheme;
	  }
	});

	var _DnR = __webpack_require__(1);

	var _DnR2 = _interopRequireDefault(_DnR);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _DnR2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.defaultTheme = exports.disableSelect = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _propTypes = __webpack_require__(5);

	var _propTypes2 = _interopRequireDefault(_propTypes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var disableSelect = exports.disableSelect = {
	  userSelect: 'none',
	  WebkitUserSelect: 'none',
	  msUserSelect: 'none',
	  MozUserSelect: 'none',
	  OUserSelect: 'none'
	};

	var defaultTheme = exports.defaultTheme = {
	  title: {
	    userSelect: 'none',
	    WebkitUserSelect: 'none',
	    msUserSelect: 'none',
	    MozUserSelect: 'none',
	    OUserSelect: 'none',
	    overflow: 'hidden',
	    width: '100%',
	    height: 25
	  },
	  frame: {
	    position: 'absolute',
	    margin: 0,
	    padding: 0,
	    overflow: 'hidden'
	  },
	  transition: 'all 0.25s ease-in-out'
	};

	function prefixedTransition(transition) {
	  return transition ? {
	    transition: transition,
	    WebkitTransition: transition,
	    msTransition: transition,
	    MozTransition: transition,
	    OTransition: transition
	  } : {};
	}

	var DnR = function (_React$Component) {
	  _inherits(DnR, _React$Component);

	  function DnR(props) {
	    _classCallCheck(this, DnR);

	    var _this = _possibleConstructorReturn(this, (DnR.__proto__ || Object.getPrototypeOf(DnR)).call(this, props));

	    var _this$props = _this.props,
	        transition = _this$props.transition,
	        theme = _this$props.theme;

	    _this.cursorX = 0;
	    _this.cursorY = 0;
	    _this.clicked = null;
	    _this.allowTransition = false;
	    _this.frameRect = {};
	    _this.state = {
	      cursor: 'auto',
	      transition: prefixedTransition(transition ? transition : theme.transition)
	    };

	    _this.frameRef = _react2.default.createRef();
	    _this.titleRef = _react2.default.createRef();
	    _this.contentRef = _react2.default.createRef();

	    _this.mouseMoveListener = _this._onMove.bind(_this);
	    _this.mouseUpListener = _this._onUp.bind(_this);
	    return _this;
	  }

	  _createClass(DnR, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _props = this.props,
	          initialWidth = _props.initialWidth,
	          initialHeight = _props.initialHeight,
	          initialTop = _props.initialTop,
	          initialLeft = _props.initialLeft,
	          attachedTo = _props.attachedTo;


	      var boundingBox = this.getFrameRect();
	      this.frameRect.width = initialWidth || boundingBox.width;
	      this.frameRect.height = initialHeight || boundingBox.height;
	      this.frameRect.top = initialTop || this.frameRef.current.offsetTop;
	      this.frameRect.left = initialLeft || this.frameRef.current.offsetLeft;

	      attachedTo.addEventListener('mousemove', this.mouseMoveListener);
	      attachedTo.addEventListener('mouseup', this.mouseUpListener);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.transition !== this.props.transition) {
	        this.setState({ transition: prefixedTransition(nextProps.transition) });
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.props.attachedTo.removeEventListener('mousemove', this.mouseMoveListener);
	      this.props.attachedTo.removeEventListener('mouseup', this.mouseUpListener);
	    }
	  }, {
	    key: 'transform',
	    value: function transform(state) {
	      var allowTransition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
	      var updateHistory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

	      var boundingBox = this.getFrameRect();

	      var top = this.frameRef.current.offsetTop;
	      var left = this.frameRef.current.offsetLeft;
	      var width = boundingBox.width;
	      var height = boundingBox.height;

	      if (updateHistory) {
	        this.prevState = {
	          top: top,
	          left: left,
	          width: width,
	          height: height
	        };
	      }

	      if (!state) return;

	      this.frameRect.top = typeof state.top === 'number' ? state.top : state.bottom ? state.bottom - (state.height || height) : top;
	      this.frameRect.left = typeof state.left === 'number' ? state.left : state.right ? state.right - (state.width || width) : left;
	      this.frameRect.width = typeof state.width === 'number' ? state.width : typeof state.right === 'number' && typeof state.left === 'number' ? state.right - state.left : typeof state.right === 'number' ? state.right - this.frameRect.left : width;
	      this.frameRect.height = typeof state.height === 'number' ? state.height : typeof state.bottom === 'number' && typeof state.top === 'number' ? state.top - state.bottom : typeof state.bottom === 'number' ? state.bottom - this.frameRect.top : height;
	      this.allowTransition = allowTransition;

	      if (this.props.onTransform) {
	        setTimeout(this.props.onTransform.bind(this, this.frameRect, this.prevState));
	      }
	      this.forceUpdate();
	    }
	  }, {
	    key: 'restore',
	    value: function restore() {
	      var allowTransition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

	      this.transform(this.prevState, allowTransition);
	    }
	  }, {
	    key: 'minimize',
	    value: function minimize() {
	      var allowTransition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

	      this.transform({ width: 0, height: 0 }, allowTransition);
	    }
	  }, {
	    key: 'maximize',
	    value: function maximize() {
	      var allowTransition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

	      this.transform({ top: 0, left: 0, width: this.props.attachedTo.innerWidth, height: this.props.attachedTo.innerHeight }, allowTransition);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props2 = this.props,
	          style = _props2.style,
	          contentStyle = _props2.contentStyle,
	          titleStyle = _props2.titleStyle,
	          theme = _props2.theme,
	          minWidth = _props2.minWidth,
	          minHeight = _props2.minHeight,
	          animate = _props2.animate,
	          cursorRemap = _props2.cursorRemap,
	          children = _props2.children,
	          boundary = _props2.boundary,
	          onMove = _props2.onMove,
	          onResize = _props2.onResize;


	      var pervFrameRect = _extends({}, this.frameRect);

	      if (this.clicked) {
	        var hits = this.hitEdges;
	        var boundingBox = this.clicked.boundingBox;

	        if (hits.top || hits.bottom || hits.left || hits.right) {
	          if (hits.right) this.frameRect.width = Math.max(this.cursorX - boundingBox.left, minWidth) + 'px';
	          if (hits.bottom) this.frameRect.height = Math.max(this.cursorY - boundingBox.top, minHeight) + 'px';

	          if (hits.left) {
	            var currentWidth = boundingBox.right - this.cursorX;
	            if (currentWidth > minWidth) {
	              this.frameRect.width = currentWidth;
	              this.frameRect.left = this.clicked.frameLeft + this.cursorX - this.clicked.x;
	            }
	          }

	          if (hits.top) {
	            var currentHeight = boundingBox.bottom - this.cursorY;
	            if (currentHeight > minHeight) {
	              this.frameRect.height = currentHeight;
	              this.frameRect.top = this.clicked.frameTop + this.cursorY - this.clicked.y;
	            }
	          }
	        } else if (this.state.cursor === 'move') {
	          this.frameRect.top = this.clicked.frameTop + this.cursorY - this.clicked.y;
	          this.frameRect.left = this.clicked.frameLeft + this.cursorX - this.clicked.x;
	        }
	      }

	      if (boundary) {
	        var _frameRect = this.frameRect,
	            top = _frameRect.top,
	            left = _frameRect.left,
	            width = _frameRect.width,
	            height = _frameRect.height;

	        if (typeof boundary.top === 'number' && top < boundary.top) {
	          this.frameRect.top = boundary.top;
	        }
	        if (typeof boundary.bottom === 'number' && top + height > boundary.bottom) {
	          this.frameRect.top = boundary.bottom - height;
	          if (typeof boundary.top === 'number' && this.frameRect.top < boundary.top) {
	            this.frameRect.top = boundary.top;
	            this.frameRect.height = boundary.bottom - boundary.top;
	          }
	        }
	        if (typeof boundary.left === 'number' && left < boundary.left) {
	          this.frameRect.left = boundary.left;
	        }
	        if (typeof boundary.right === 'number' && top + height > boundary.right) {
	          this.frameRect.left = boundary.right - width;
	          if (typeof boundary.left === 'number' && this.frameRect.left < boundary.left) {
	            this.frameRect.left = boundary.left;
	            this.frameRect.width = boundary.right - boundary.left;
	          }
	        }
	      }

	      var cursor = this.state.cursor;

	      if (cursorRemap) {
	        var res = cursorRemap.call(this, cursor);

	        if (res && typeof res === 'string') cursor = res;
	      }

	      var dnrstate = {
	        cursor: cursor,
	        clicked: this.clicked,
	        frameRect: this.frameRect,
	        allowTransition: this.allowTransition
	      };

	      var titleBar = _react2.default.createElement(
	        'div',
	        { ref: this.titleRef,
	          style: _extends({}, theme.title, titleStyle, {
	            cursor: cursor
	          }) },
	        typeof this.props.titleBar !== 'string' ? _react2.default.cloneElement(this.props.titleBar, { dnrstate: dnrstate }) : this.props.titleBar
	      );

	      var childrenWithProps = _react2.default.Children.map(children, function (child) {
	        return typeof child === 'string' ? child : _react2.default.cloneElement(child, { dnrstate: dnrstate });
	      });

	      var frameTransition = animate && this.allowTransition ? this.state.transition : {};

	      if (onMove && (pervFrameRect.top !== this.frameRect.top || pervFrameRect.left !== this.frameRect.left)) {
	        setTimeout(onMove.bind(this, this.frameRect, pervFrameRect));
	      }

	      if (onResize && (pervFrameRect.width !== this.frameRect.width || pervFrameRect.height !== this.frameRect.height)) {
	        setTimeout(onResize.bind(this, this.frameRect, pervFrameRect));
	      }
	      return _react2.default.createElement(
	        'div',
	        { ref: this.frameRef,
	          onMouseDownCapture: this._onDown.bind(this),
	          onMouseMoveCapture: function onMouseMoveCapture(e) {
	            if (_this2.clicked !== null) {
	              e.preventDefault();
	            }
	          },
	          style: _extends({}, theme.frame, frameTransition, {
	            cursor: cursor
	          }, style, this.frameRect, this.clicked ? disableSelect : {}) },
	        titleBar,
	        _react2.default.createElement(
	          'div',
	          { ref: this.contentRef,
	            className: 'contentClassName',
	            style: _extends({ position: 'absolute', width: '100%', top: theme.title.height, bottom: 0 }, contentStyle) },
	          childrenWithProps
	        )
	      );
	    }
	  }, {
	    key: 'getFrameRect',
	    value: function getFrameRect() {
	      return this.frameRef.current.getBoundingClientRect();
	    }
	  }, {
	    key: 'getDOMFrame',
	    value: function getDOMFrame() {
	      return this.frameRef.current;
	    }
	  }, {
	    key: 'getTitleRect',
	    value: function getTitleRect() {
	      return this.titleRef.current.getBoundingClientRect();
	    }
	  }, {
	    key: '_cursorStatus',
	    value: function _cursorStatus(e) {
	      var boundingBox = this.getFrameRect();
	      this.cursorX = e.clientX;
	      this.cursorY = e.clientY;

	      if (this.clicked) return;

	      var hitRange = this.props.edgeDetectionRange;
	      var hitTop = this.cursorY <= boundingBox.top + hitRange;
	      var hitBottom = this.cursorY >= boundingBox.bottom - hitRange;
	      var hitLeft = this.cursorX <= boundingBox.left + hitRange;
	      var hitRight = this.cursorX >= boundingBox.right - hitRange;

	      var cursor = 'auto';

	      if (hitTop || hitBottom || hitLeft || hitRight) {
	        if (hitRight && hitBottom || hitLeft && hitTop) {
	          cursor = 'nwse-resize';
	        } else if (hitRight && hitTop || hitBottom && hitLeft) {
	          cursor = 'nesw-resize';
	        } else if (hitRight || hitLeft) {
	          cursor = 'ew-resize';
	        } else if (hitBottom || hitTop) {
	          cursor = 'ns-resize';
	        }
	        e.stopPropagation();
	      } else {
	        var titleBounding = this.getTitleRect();
	        if (this.cursorX > titleBounding.left && this.cursorX < titleBounding.right && this.cursorY > titleBounding.top && this.cursorY < titleBounding.bottom) {
	          cursor = 'move';
	        }
	      }

	      this.hitEdges = {
	        top: hitTop,
	        bottom: hitBottom,
	        left: hitLeft,
	        right: hitRight
	      };

	      if (cursor !== this.state.cursor) {
	        this.setState({ cursor: cursor });
	      }
	    }
	  }, {
	    key: '_onDown',
	    value: function _onDown(e) {
	      this.allowTransition = false;
	      this._cursorStatus(e);
	      var boundingBox = this.getFrameRect();
	      this.clicked = { x: e.clientX, y: e.clientY, boundingBox: boundingBox,
	        frameTop: this.frameRef.current.offsetTop, frameLeft: this.frameRef.current.offsetLeft };
	    }
	  }, {
	    key: '_onUp',
	    value: function _onUp(e) {
	      this.clicked = null;
	      this._cursorStatus(e);
	    }
	  }, {
	    key: '_onMove',
	    value: function _onMove(e) {
	      this._cursorStatus(e);
	      if (this.clicked !== null) {
	        this.forceUpdate();
	      }
	    }
	  }]);

	  return DnR;
	}(_react2.default.Component);

	exports.default = DnR;


	DnR.propTypes = {
	  titleBar: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
	  style: _propTypes2.default.object,
	  contentClassName: _propTypes2.default.object,
	  contentStyle: _propTypes2.default.object,
	  titleStyle: _propTypes2.default.object,
	  theme: _propTypes2.default.object,
	  minWidth: _propTypes2.default.number,
	  minHeight: _propTypes2.default.number,
	  edgeDetectionRange: _propTypes2.default.number,
	  initialWidth: _propTypes2.default.number,
	  initialHeight: _propTypes2.default.number,
	  initialTop: _propTypes2.default.number,
	  initialLeft: _propTypes2.default.number,
	  transition: _propTypes2.default.string,
	  animate: _propTypes2.default.bool,
	  onMove: _propTypes2.default.func,
	  onResize: _propTypes2.default.func,
	  onTransform: _propTypes2.default.func,
	  cursorRemap: _propTypes2.default.func,
	  boundary: _propTypes2.default.object,
	  attachedTo: _propTypes2.default.object
	};

	DnR.defaultProps = {
	  minWidth: 20,
	  minHeight: 20,
	  edgeDetectionRange: 4,
	  theme: defaultTheme,
	  initialWidth: null,
	  initialHeight: null,
	  initialTop: null,
	  initialLeft: null,
	  animate: true,
	  attachedTo: window
	};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.WindowsTheme = exports.OSXTheme = exports.TitleBar = exports.Button = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(2);

	var _react2 = _interopRequireDefault(_react);

	var _DnR = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Button = exports.Button = function (_React$Component) {
		_inherits(Button, _React$Component);

		function Button(props) {
			_classCallCheck(this, Button);

			var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

			_this.state = {
				hover: false,
				down: false
			};
			return _this;
		}

		_createClass(Button, [{
			key: 'render',
			value: function render() {
				var _this2 = this;

				var _props = this.props,
				    style = _props.style,
				    hoverStyle = _props.hoverStyle,
				    downStyle = _props.downStyle,
				    children = _props.children,
				    cursor = _props.cursor,
				    other = _objectWithoutProperties(_props, ['style', 'hoverStyle', 'downStyle', 'children', 'cursor']);

				var dragging = /resize$/.test(cursor);

				var buttonStyle = _extends({}, style, this.state.hover && !dragging ? hoverStyle : {}, this.state.down && !dragging ? downStyle : {}, {
					cursor: cursor
				});

				return _react2.default.createElement(
					'button',
					_extends({
						onMouseEnter: function onMouseEnter() {
							return _this2.setState({ hover: true });
						},
						onMouseLeave: function onMouseLeave() {
							return _this2.setState({ hover: false, down: false });
						},
						onMouseDown: function onMouseDown() {
							return _this2.setState({ down: true });
						},
						onMouseUp: function onMouseUp() {
							return _this2.setState({ down: false });
						},
						style: buttonStyle
					}, other),
					children
				);
			}
		}]);

		return Button;
	}(_react2.default.Component);

	var TitleBar = exports.TitleBar = function TitleBar(_ref) {
		var children = _ref.children,
		    buttons = _ref.buttons,
		    button1 = _ref.button1,
		    button2 = _ref.button2,
		    button3 = _ref.button3,
		    button1Children = _ref.button1Children,
		    button2Children = _ref.button2Children,
		    button3Children = _ref.button3Children,
		    dnrstate = _ref.dnrstate;
		return _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				'div',
				buttons,
				_react2.default.createElement(
					Button,
					_extends({}, button1, { cursor: dnrstate.cursor }),
					button1Children
				),
				_react2.default.createElement(
					Button,
					_extends({}, button2, { cursor: dnrstate.cursor }),
					button2Children
				),
				_react2.default.createElement(
					Button,
					_extends({}, button3, { cursor: dnrstate.cursor }),
					button3Children
				)
			),
			children
		);
	};

	var OSXTheme = exports.OSXTheme = function OSXTheme(_ref2) {
		var title = _ref2.title,
		    onClose = _ref2.onClose,
		    onMinimize = _ref2.onMinimize,
		    onMaximize = _ref2.onMaximize;

		var titleHeight = 25;
		var buttonRadius = 6;
		var fontSize = 14;
		var fontFamily = 'Helvetica, sans-serif';

		var style = {
			height: titleHeight
		};

		var buttonStyle = {
			padding: 0,
			margin: 0,
			marginRight: '4px',
			width: buttonRadius * 2,
			height: buttonRadius * 2,
			borderRadius: buttonRadius,
			content: '',
			border: '1px solid rgba(0, 0, 0, 0.2)',
			outline: 'none'
		};
		var buttons = {
			style: {
				height: titleHeight,
				position: 'absolute',
				float: 'left',
				margin: '0 8px',
				display: 'flex',
				alignItems: 'center'
			}
		};

		var closeButton = {
			style: _extends({}, buttonStyle, {
				backgroundColor: 'rgb(255, 97, 89)'
			}),
			hoverStyle: {
				backgroundColor: 'rgb(230, 72, 64)'
			},
			downStyle: {
				backgroundColor: 'rgb(204, 46, 38)'
			},
			onClick: onClose
		};
		var minimizeButton = {
			style: _extends({}, buttonStyle, {
				backgroundColor: 'rgb(255, 191, 47)'
			}),
			hoverStyle: {
				backgroundColor: 'rgb(230, 166, 22)'
			},
			downStyle: {
				backgroundColor: 'rgb(204, 140, 0)'
			},
			onClick: onMinimize
		};
		var maximizeButton = {
			style: _extends({}, buttonStyle, {
				backgroundColor: 'rgb(37, 204, 62)'
			}),
			hoverStyle: {
				backgroundColor: 'rgb(12, 179, 37)'
			},
			downStyle: {
				backgroundColor: 'rgb(0, 153, 11)'
			},
			onClick: onMaximize
		};
		return {
			theme: {
				title: _extends({}, _DnR.defaultTheme.title, {
					fontFamily: fontFamily,
					borderTopLeftRadius: '5px',
					borderTopRightRadius: '5px',
					background: 'linear-gradient(0deg, #d8d8d8, #ececec)',
					color: 'rgba(0, 0, 0, 0.7)',
					fontSize: fontSize,
					height: titleHeight
				}),
				frame: _extends({}, _DnR.defaultTheme.frame, {
					borderRadius: '5px'
				}),
				transition: 'all 0.25s ease-in-out'
			},
			titleBar: _react2.default.createElement(
				TitleBar,
				{
					style: style,
					buttons: buttons,
					button1: closeButton,
					button2: minimizeButton,
					button3: maximizeButton },
				_react2.default.createElement(
					'div',
					{ style: {
							width: '100%',
							height: '100%',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center'
						} },
					title
				)
			)
		};
	};

	var WindowsTheme = exports.WindowsTheme = function WindowsTheme(_ref3) {
		var title = _ref3.title,
		    onClose = _ref3.onClose,
		    onMinimize = _ref3.onMinimize,
		    onMaximize = _ref3.onMaximize,
		    _ref3$titleBarColor = _ref3.titleBarColor,
		    titleBarColor = _ref3$titleBarColor === undefined ? '#0095ff' : _ref3$titleBarColor;

		var titleHeight = 25;
		var buttonRadius = 6;
		var fontSize = 14;
		var fontFamily = 'Helvetica, sans-serif';

		var style = {
			height: titleHeight
		};

		var buttonStyle = {
			padding: 0,
			margin: 0,
			width: 25,
			height: 25,
			outline: 'none',
			border: 'none',
			textAlign: 'center'
		};

		var buttons = {
			style: {
				height: titleHeight,
				position: 'absolute',
				right: 0,
				margin: 0,
				display: 'flex',
				alignItems: 'center',
				verticalAlign: 'baseline'
			}
		};

		var closeButton = {
			style: _extends({}, buttonStyle, {
				fontSize: '20px',
				fontWeight: 500,
				lineHeight: '36px',
				backgroundColor: titleBarColor
			}),
			hoverStyle: {
				backgroundColor: '#ec6060'
			},
			downStyle: {
				backgroundColor: '#bc4040'
			},
			onClick: onClose
		};

		var minimizeButton = {
			style: _extends({}, buttonStyle, {
				lineHeight: '22px',
				backgroundColor: titleBarColor
			}),
			hoverStyle: {
				backgroundColor: 'rgba(0, 0, 0, 0.1)'
			},
			downStyle: {
				backgroundColor: 'rgba(0, 0, 0, 0.2)'
			},
			onClick: onMinimize
		};

		var maximizeButton = {
			style: _extends({}, buttonStyle, {
				lineHeight: '12px',
				backgroundColor: titleBarColor
			}),
			hoverStyle: {
				backgroundColor: 'rgba(0, 0, 0, 0.1)'
			},
			downStyle: {
				backgroundColor: 'rgba(0, 0, 0, 0.2)'
			},
			onClick: onMaximize
		};
		return {
			theme: {
				title: _extends({}, _DnR.defaultTheme.title, {
					fontFamily: fontFamily,
					background: titleBarColor,
					color: 'rgba(0, 0, 0, 0.7)',
					fontSize: fontSize,
					height: titleHeight
				}),
				frame: _extends({}, _DnR.defaultTheme.frame),
				transition: 'all 0.25s ease-in-out'
			},
			titleBar: _react2.default.createElement(
				TitleBar,
				{
					style: style,
					buttons: buttons,
					button1: minimizeButton,
					button2: maximizeButton,
					button3: closeButton,
					button1Children: '\u2012',
					button2Children: '\u25A1',
					button3Children: '\u02DF' },
				_react2.default.createElement(
					'div',
					{ style: {
							width: '100%',
							height: '100%',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center'
						} },
					title
				)
			)
		};
	};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = __webpack_require__(6);

	function emptyFunction() {}
	function emptyFunctionWithReset() {}
	emptyFunctionWithReset.resetWarningCache = emptyFunction;

	module.exports = function() {
	  function shim(props, propName, componentName, location, propFullName, secret) {
	    if (secret === ReactPropTypesSecret) {
	      // It is still safe when called from React.
	      return;
	    }
	    var err = new Error(
	      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
	      'Use PropTypes.checkPropTypes() to call them. ' +
	      'Read more at http://fb.me/use-check-prop-types'
	    );
	    err.name = 'Invariant Violation';
	    throw err;
	  };
	  shim.isRequired = shim;
	  function getShim() {
	    return shim;
	  };
	  // Important!
	  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
	  var ReactPropTypes = {
	    array: shim,
	    bool: shim,
	    func: shim,
	    number: shim,
	    object: shim,
	    string: shim,
	    symbol: shim,

	    any: shim,
	    arrayOf: getShim,
	    element: shim,
	    elementType: shim,
	    instanceOf: getShim,
	    node: shim,
	    objectOf: getShim,
	    oneOf: getShim,
	    oneOfType: getShim,
	    shape: getShim,
	    exact: getShim,

	    checkPropTypes: emptyFunctionWithReset,
	    resetWarningCache: emptyFunction
	  };

	  ReactPropTypes.PropTypes = ReactPropTypes;

	  return ReactPropTypes;
	};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	if (false) {
	  var ReactIs = require('react-is');

	  // By explicitly using `prop-types` you are opting into new development behavior.
	  // http://fb.me/prop-types-in-prod
	  var throwOnDirectAccess = true;
	  module.exports = require('./factoryWithTypeCheckers')(ReactIs.isElement, throwOnDirectAccess);
	} else {
	  // By explicitly using `prop-types` you are opting into new production behavior.
	  // http://fb.me/prop-types-in-prod
	  module.exports = __webpack_require__(4)();
	}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	'use strict';

	var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

	module.exports = ReactPropTypesSecret;


/***/ })
/******/ ])
});
;