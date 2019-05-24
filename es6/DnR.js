'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultTheme = exports.disableSelect = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

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