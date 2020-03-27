"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDnd = require("react-dnd");

var _styledComponents = _interopRequireDefault(require("styled-components"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  right: 25%;\n  top: 0;\n  &:after {\n    content: \"\\f0dc\";\n    color: ", ";\n    font-family: \"FontAwesome\";\n    position: absolute;\n    top: 0;\n    right: 24px;\n    }\n"], ["\n  position: absolute;\n  right: 25%;\n  top: 0;\n  &:after {\n    content: \"\\\\f0dc\";\n    color: ", ";\n    font-family: \"FontAwesome\";\n    position: absolute;\n    top: 0;\n    right: 24px;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ItemControl = _styledComponents["default"].span(_templateObject(), function (props) {
  return props.theme.textColor;
});

var DraggableItem =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(DraggableItem, _Component);

  function DraggableItem(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, DraggableItem);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(DraggableItem).call(this, props));
    _this.myRef = _react["default"].createRef();
    _this.state = {
      onHover: false
    };
    return _this;
  }

  (0, _createClass2["default"])(DraggableItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var connectDragPreview = this.props.connectDragPreview;
      connectDragPreview(this.myRef.current);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var isOver = this.props.isOver;

      if (!prevProps.isOver && isOver) {
        // You can use this as enter handler
        this.setOnHover(true);
      }

      if (prevProps.isOver && !isOver) {
        // You can use this as leave handler
        this.setOnHover(false);
      }
    }
  }, {
    key: "setOnHover",
    value: function setOnHover(hoverState) {
      this.setState({
        onHover: hoverState
      });
    }
  }, {
    key: "render",
    value: function render() {
      var onHover = this.state.onHover;
      var _this$props = this.props,
          item = _this$props.item,
          onchange = _this$props.onchange,
          isVisible = _this$props.isVisible,
          onHoverBGColor = _this$props.onHoverBGColor,
          onHoverBoxShadow = _this$props.onHoverBoxShadow,
          isDragging = _this$props.isDragging,
          connectDropTarget = _this$props.connectDropTarget,
          connectDragSource = _this$props.connectDragSource,
          inputClass = _this$props.inputClass,
          labelClass = _this$props.labelClass;
      return connectDropTarget(connectDragSource(_react["default"].createElement("div", {
        style: {
          borderBottom: '1px solid #ccc',
          boxShadow: isDragging === true ? onHoverBoxShadow : 'none',
          position: 'relative',
          cursor: isDragging === true ? 'grabbing' : 'grab',
          background: onHover ? onHoverBGColor : 'transparent',
          display: 'block',
          height: '100%',
          padding: '8px 24px'
        }
      }, _react["default"].createElement("span", {
        style: {
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          right: '10px',
          width: '20px',
          height: '20px',
          display: 'block',
          zIndex: '5'
        }
      }, _react["default"].createElement(ItemControl, null)), _react["default"].createElement("input", {
        className: inputClass,
        id: item.accessor,
        defaultChecked: isVisible,
        type: "checkbox",
        value: item.accessor,
        onChange: onchange
      }), _react["default"].createElement("label", {
        htmlFor: item.accessor,
        className: labelClass
      }, _react["default"].createElement("span", {
        ref: this.myRef
      }, item.Header)))));
    }
  }]);
  return DraggableItem;
}(_react.Component);

DraggableItem.defaultProps = {
  onHoverBGColor: 'rgba(0,0,0,0.3)',
  onHoverBoxShadow: '2px 2px 2px rgba(0,0,0,.5)'
};
DraggableItem.propTypes = {
  labelClass: _propTypes["default"].string.isRequired,
  inputClass: _propTypes["default"].string.isRequired,
  onHoverBGColor: _propTypes["default"].string,
  onHoverBoxShadow: _propTypes["default"].string,
  onchange: _propTypes["default"].func.isRequired,
  connectDropTarget: _propTypes["default"].func.isRequired,
  connectDragSource: _propTypes["default"].func.isRequired,
  item: _propTypes["default"].shape({
    Header: _propTypes["default"].string,
    accessor: _propTypes["default"].string
  }).isRequired,
  isVisible: _propTypes["default"].bool.isRequired,
  isOver: _propTypes["default"].bool.isRequired,
  isDragging: _propTypes["default"].bool.isRequired,
  connectDragPreview: _propTypes["default"].func.isRequired
};

var _default = (0, _reactDnd.DropTarget)('ITEM', {
  drop: function drop(props, monitor) {
    var item = monitor.getItem();
    var newIndex = props.index;
    var oldIndex = item.index;
    props.moveCard(oldIndex, newIndex);
    return item;
  }
}, function (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
})((0, _reactDnd.DragSource)('ITEM', {
  beginDrag: function beginDrag(props) {
    var item = _objectSpread({}, props);

    return item;
  }
}, function (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  };
})(DraggableItem));

exports["default"] = _default;