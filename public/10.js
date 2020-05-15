(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@material-ui/icons/ColorLens.js":
/*!******************************************************!*\
  !*** ./node_modules/@material-ui/icons/ColorLens.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
}), 'ColorLens');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/Gradient.js":
/*!*****************************************************!*\
  !*** ./node_modules/@material-ui/icons/Gradient.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M11 9h2v2h-2zm-2 2h2v2H9zm4 0h2v2h-2zm2-2h2v2h-2zM7 9h2v2H7zm12-6H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 18H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm2-7h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H9v-2H7v2H5v-2h2v-2H5V5h14v6z"
}), 'Gradient');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/Landscape.js":
/*!******************************************************!*\
  !*** ./node_modules/@material-ui/icons/Landscape.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _createSvgIcon = _interopRequireDefault(__webpack_require__(/*! ./utils/createSvgIcon */ "./node_modules/@material-ui/icons/utils/createSvgIcon.js"));

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"
}), 'Landscape');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/utils/createSvgIcon.js":
/*!****************************************************************!*\
  !*** ./node_modules/@material-ui/icons/utils/createSvgIcon.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createSvgIcon;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _SvgIcon = _interopRequireDefault(__webpack_require__(/*! @material-ui/core/SvgIcon */ "./node_modules/@material-ui/core/esm/SvgIcon/index.js"));

function createSvgIcon(path, displayName) {
  var Component = _react.default.memo(_react.default.forwardRef(function (props, ref) {
    return _react.default.createElement(_SvgIcon.default, (0, _extends2.default)({
      ref: ref
    }, props), path);
  }));

  if (true) {
    Component.displayName = "".concat(displayName, "Icon");
  }

  Component.muiName = _SvgIcon.default.muiName;
  return Component;
}

/***/ }),

/***/ "./node_modules/@react-page/plugins-background/lib-es/Controls/BackgroundDefaultControls.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@react-page/plugins-background/lib-es/Controls/BackgroundDefaultControls.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Slider */ "./node_modules/@material-ui/core/esm/Slider/index.js");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/esm/Switch/index.js");
/* harmony import */ var _material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Tab */ "./node_modules/@material-ui/core/esm/Tab/index.js");
/* harmony import */ var _material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Tabs */ "./node_modules/@material-ui/core/esm/Tabs/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_ColorLens__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/ColorLens */ "./node_modules/@material-ui/icons/ColorLens.js");
/* harmony import */ var _material_ui_icons_ColorLens__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ColorLens__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_Gradient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Gradient */ "./node_modules/@material-ui/icons/Gradient.js");
/* harmony import */ var _material_ui_icons_Gradient__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Gradient__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Landscape__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Landscape */ "./node_modules/@material-ui/icons/Landscape.js");
/* harmony import */ var _material_ui_icons_Landscape__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Landscape__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _react_page_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @react-page/ui */ "./node_modules/@react-page/ui/lib-es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _types_ModeEnum__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../types/ModeEnum */ "./node_modules/@react-page/plugins-background/lib-es/types/ModeEnum.js");
/* harmony import */ var _sub_Color__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sub/Color */ "./node_modules/@react-page/plugins-background/lib-es/Controls/sub/Color.js");
/* harmony import */ var _sub_Image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sub/Image */ "./node_modules/@react-page/plugins-background/lib-es/Controls/sub/Image.js");
/* harmony import */ var _sub_LinearGradient__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sub/LinearGradient */ "./node_modules/@react-page/plugins-background/lib-es/Controls/sub/LinearGradient.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};















var BackgroundDefaultControls = /** @class */ (function (_super) {
    __extends(BackgroundDefaultControls, _super);
    function BackgroundDefaultControls(props) {
        var _this = _super.call(this, props) || this;
        _this.renderModeSwitch = function () {
            var _a = _this.props.state.modeFlag, modeFlag = _a === void 0 ? _this.props.defaultModeFlag : _a;
            var label = _this.props.translations.onOff;
            switch (_this.state.mode) {
                case _types_ModeEnum__WEBPACK_IMPORTED_MODULE_11__["ModeEnum"].COLOR_MODE_FLAG:
                    // label = 'Use color'
                    break;
                case _types_ModeEnum__WEBPACK_IMPORTED_MODULE_11__["ModeEnum"].IMAGE_MODE_FLAG:
                    // label = 'Use image'
                    break;
                case _types_ModeEnum__WEBPACK_IMPORTED_MODULE_11__["ModeEnum"].GRADIENT_MODE_FLAG:
                    // label = 'Use gradient'
                    break;
                default:
                    label = 'Unknown mode';
                    break;
            }
            return (react__WEBPACK_IMPORTED_MODULE_10__["createElement"](_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_0__["default"], { control: react__WEBPACK_IMPORTED_MODULE_10__["createElement"](_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_2__["default"], { onChange: _this.props.handleChangeModeSwitch(_this.state.mode, modeFlag), checked: Boolean(modeFlag & _this.state.mode) }), label: label }));
        };
        _this.renderUI = function () {
            switch (_this.state.mode) {
                case _types_ModeEnum__WEBPACK_IMPORTED_MODULE_11__["ModeEnum"].COLOR_MODE_FLAG:
                    return (react__WEBPACK_IMPORTED_MODULE_10__["createElement"](react__WEBPACK_IMPORTED_MODULE_10__["Fragment"], null,
                        _this.renderModeSwitch(),
                        react__WEBPACK_IMPORTED_MODULE_10__["createElement"](_sub_Color__WEBPACK_IMPORTED_MODULE_12__["default"], __assign({}, _this.props, { ensureModeOn: _this.ensureModeOn(_types_ModeEnum__WEBPACK_IMPORTED_MODULE_11__["ModeEnum"].COLOR_MODE_FLAG), onChangeBackgroundColorPreview: _this.props.handleChangeBackgroundColorPreview, backgroundColorPreview: _this.props.backgroundColorPreview }))));
                case _types_ModeEnum__WEBPACK_IMPORTED_MODULE_11__["ModeEnum"].GRADIENT_MODE_FLAG:
                    return (react__WEBPACK_IMPORTED_MODULE_10__["createElement"](react__WEBPACK_IMPORTED_MODULE_10__["Fragment"], null,
                        _this.renderModeSwitch(),
                        react__WEBPACK_IMPORTED_MODULE_10__["createElement"](_sub_LinearGradient__WEBPACK_IMPORTED_MODULE_14__["default"], __assign({}, _this.props, { ensureModeOn: _this.ensureModeOn(_types_ModeEnum__WEBPACK_IMPORTED_MODULE_11__["ModeEnum"].GRADIENT_MODE_FLAG), gradientDegPreview: _this.props.gradientDegPreview, gradientDegPreviewIndex: _this.props.gradientDegPreviewIndex, gradientOpacityPreview: _this.props.gradientOpacityPreview, gradientOpacityPreviewIndex: _this.props.gradientOpacityPreviewIndex, gradientColorPreview: _this.props.gradientColorPreview, gradientColorPreviewIndex: _this.props.gradientColorPreviewIndex, gradientColorPreviewColorIndex: _this.props.gradientColorPreviewColorIndex, onChangeGradientDegPreview: _this.props.handleChangeGradientDegPreview, onChangeGradientOpacityPreview: _this.props.handleChangeGradientOpacityPreview, onChangeGradientColorPreview: _this.props.handleChangeGradientColorPreview }))));
                case _types_ModeEnum__WEBPACK_IMPORTED_MODULE_11__["ModeEnum"].IMAGE_MODE_FLAG:
                default:
                    return (react__WEBPACK_IMPORTED_MODULE_10__["createElement"](react__WEBPACK_IMPORTED_MODULE_10__["Fragment"], null,
                        _this.renderModeSwitch(),
                        react__WEBPACK_IMPORTED_MODULE_10__["createElement"](_sub_Image__WEBPACK_IMPORTED_MODULE_13__["default"], __assign({}, _this.props, { onImageLoaded: _this.props.handleImageLoaded, onImageUploaded: _this.props.handleImageUploaded, ensureModeOn: _this.ensureModeOn(_types_ModeEnum__WEBPACK_IMPORTED_MODULE_11__["ModeEnum"].IMAGE_MODE_FLAG) }))));
            }
        };
        _this.ensureModeOn = function (mode) { return function () {
            var _a = _this.props.state.modeFlag, modeFlag = _a === void 0 ? _this.props.defaultModeFlag : _a;
            if ((modeFlag & mode) === 0) {
                _this.props.handleChangeModeSwitch(mode, modeFlag)();
            }
        }; };
        _this.handleChangeMode = function (e, mode) {
            return _this.setState({ mode: mode });
        };
        _this.state = {
            mode: props.defaultMode,
        };
        return _this;
    }
    BackgroundDefaultControls.prototype.render = function () {
        var _this = this;
        var _a = this.props, focused = _a.focused, remove = _a.remove, _b = _a.state, _c = _b.hasPadding, hasPadding = _c === void 0 ? this.props.defaultHasPadding : _c, _d = _b.modeFlag, modeFlag = _d === void 0 ? this.props.defaultModeFlag : _d, _e = _b.darken, darken = _e === void 0 ? this.props.defaultDarken : _e, _f = _b.lighten, lighten = _f === void 0 ? this.props.defaultLighten : _f;
        var darkenFinal = this.props.darkenPreview !== undefined
            ? this.props.darkenPreview
            : darken;
        var lightenFinal = this.props.lightenPreview !== undefined
            ? this.props.lightenPreview
            : lighten;
        return (react__WEBPACK_IMPORTED_MODULE_10__["createElement"](_react_page_ui__WEBPACK_IMPORTED_MODULE_9__["BottomToolbar"], __assign({ open: focused, title: this.props.translations.pluginName, icon: this.props.IconComponent, onDelete: remove }, this.props),
            react__WEBPACK_IMPORTED_MODULE_10__["createElement"](_material_ui_core_Tabs__WEBPACK_IMPORTED_MODULE_4__["default"], { value: this.state.mode, onChange: this.handleChangeMode, centered: true },
                (this.props.enabledModes & _types_ModeEnum__WEBPACK_IMPORTED_MODULE_11__["ModeEnum"].IMAGE_MODE_FLAG) > 0 && (react__WEBPACK_IMPORTED_MODULE_10__["createElement"](_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_3__["default"], { icon: react__WEBPACK_IMPORTED_MODULE_10__["createElement"](_material_ui_icons_Landscape__WEBPACK_IMPORTED_MODULE_8___default.a, { color: (modeFlag & _types_ModeEnum__WEBPACK_IMPORTED_MODULE_11__["ModeEnum"].IMAGE_MODE_FLAG) > 0
                            ? 'secondary'
                            : undefined }), label: this.props.translations.imageMode, value: _types_ModeEnum__WEBPACK_IMPORTED_MODULE_11__["ModeEnum"].IMAGE_MODE_FLAG })),
                (this.props.enabledModes & _types_ModeEnum__WEBPACK_IMPORTED_MODULE_11__["ModeEnum"].COLOR_MODE_FLAG) > 0 && (react__WEBPACK_IMPORTED_MODULE_10__["createElement"](_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_3__["default"], { icon: react__WEBPACK_IMPORTED_MODULE_10__["createElement"](_material_ui_icons_ColorLens__WEBPACK_IMPORTED_MODULE_6___default.a, { color: (modeFlag & _types_ModeEnum__WEBPACK_IMPORTED_MODULE_11__["ModeEnum"].COLOR_MODE_FLAG) > 0
                            ? 'secondary'
                            : undefined }), label: this.props.translations.colorMode, value: _types_ModeEnum__WEBPACK_IMPORTED_MODULE_11__["ModeEnum"].COLOR_MODE_FLAG })),
                (this.props.enabledModes & _types_ModeEnum__WEBPACK_IMPORTED_MODULE_11__["ModeEnum"].GRADIENT_MODE_FLAG) > 0 && (react__WEBPACK_IMPORTED_MODULE_10__["createElement"](_material_ui_core_Tab__WEBPACK_IMPORTED_MODULE_3__["default"], { icon: react__WEBPACK_IMPORTED_MODULE_10__["createElement"](_material_ui_icons_Gradient__WEBPACK_IMPORTED_MODULE_7___default.a, { color: (modeFlag & _types_ModeEnum__WEBPACK_IMPORTED_MODULE_11__["ModeEnum"].GRADIENT_MODE_FLAG) > 0
                            ? 'secondary'
                            : undefined }), label: this.props.translations.gradientMode, value: _types_ModeEnum__WEBPACK_IMPORTED_MODULE_11__["ModeEnum"].GRADIENT_MODE_FLAG }))),
            this.renderUI(),
            react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("div", { style: { display: 'flex' } },
                react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("div", { style: { flex: '1', marginRight: '8px' } },
                    react__WEBPACK_IMPORTED_MODULE_10__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], { variant: "body1", id: "linear-gradient-darken-label" },
                        this.props.translations.darken,
                        " (",
                        (darkenFinal * 100).toFixed(0),
                        "%)"),
                    react__WEBPACK_IMPORTED_MODULE_10__["createElement"](_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_1__["default"], { "aria-labelledby": "linear-gradient-darken-label", value: darkenFinal, onChange: function (e, value) {
                            return _this.props.handleChangeDarkenPreview(value instanceof Array ? value[0] : value);
                        }, onChangeCommitted: this.props.handleChangeDarken, step: 0.01, min: 0, max: 1 })),
                react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("div", { style: { flex: '1', marginLeft: '8px' } },
                    react__WEBPACK_IMPORTED_MODULE_10__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], { variant: "body1", id: "linear-gradient-lighten-label" },
                        this.props.translations.lighten,
                        " (",
                        (lightenFinal * 100).toFixed(0),
                        "%)"),
                    react__WEBPACK_IMPORTED_MODULE_10__["createElement"](_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_1__["default"], { "aria-labelledby": "linear-gradient-lighten-label", value: lightenFinal, onChange: function (e, value) {
                            return _this.props.handleChangeLightenPreview(value instanceof Array ? value[0] : value);
                        }, onChangeCommitted: this.props.handleChangeLighten, step: 0.01, min: 0, max: 1 }))),
            react__WEBPACK_IMPORTED_MODULE_10__["createElement"]("div", { style: { display: 'flex' } },
                react__WEBPACK_IMPORTED_MODULE_10__["createElement"](_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_0__["default"], { control: react__WEBPACK_IMPORTED_MODULE_10__["createElement"](_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_2__["default"], { onChange: this.props.handleChangeHasPadding, checked: hasPadding }), label: this.props.translations.usePadding }))));
    };
    return BackgroundDefaultControls;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (BackgroundDefaultControls);
//# sourceMappingURL=BackgroundDefaultControls.js.map

/***/ }),

/***/ "./node_modules/@react-page/plugins-background/lib-es/Controls/sub/Color.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@react-page/plugins-background/lib-es/Controls/sub/Color.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_page_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-page/ui */ "./node_modules/@react-page/ui/lib-es/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ColorComponent = /** @class */ (function (_super) {
    __extends(ColorComponent, _super);
    function ColorComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChangePickerBackgroundColor = function (e) {
            return _this.props.onChangeBackgroundColorPreview &&
                _this.props.onChangeBackgroundColorPreview(e);
        };
        _this.handleChangePickerBackgroundColorComplete = function (e) {
            if (_this.props.onChangeBackgroundColorPreview) {
                _this.props.onChangeBackgroundColorPreview(undefined);
            }
            _this.props.onChange({ backgroundColor: e });
        };
        return _this;
    }
    ColorComponent.prototype.render = function () {
        var _a = this.props, backgroundColorPreview = _a.backgroundColorPreview, _b = _a.state.backgroundColor, backgroundColor = _b === void 0 ? this.props.defaultBackgroundColor : _b;
        return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { display: 'flex' } },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_react_page_ui__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], { color: backgroundColorPreview ? backgroundColorPreview : backgroundColor, onChange: this.handleChangePickerBackgroundColor, onDialogOpen: this.props.ensureModeOn, onChangeComplete: this.handleChangePickerBackgroundColorComplete, style: { margin: 'auto' } })));
    };
    return ColorComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (ColorComponent);
//# sourceMappingURL=Color.js.map

/***/ }),

/***/ "./node_modules/@react-page/plugins-background/lib-es/Controls/sub/Image.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@react-page/plugins-background/lib-es/Controls/sub/Image.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/esm/Switch/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _react_page_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-page/ui */ "./node_modules/@react-page/ui/lib-es/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var ImageComponent = /** @class */ (function (_super) {
    __extends(ImageComponent, _super);
    function ImageComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChangeBackground = function (e) {
            _this.props.ensureModeOn();
            _this.props.onChange({ background: e.target.value });
        };
        _this.handleChangeIsParallax = function (e) {
            _this.props.ensureModeOn();
            _this.props.onChange({
                isParallax: _this.props.state.isParallax === undefined
                    ? false
                    : !_this.props.state.isParallax,
            });
        };
        _this.handleImageLoaded = function (image) {
            _this.props.ensureModeOn();
            _this.props.onImageLoaded(image);
        };
        _this.handleImageUploaded = function (resp) {
            _this.props.onImageUploaded();
            _this.props.onChange({ background: resp.url });
        };
        return _this;
    }
    ImageComponent.prototype.render = function () {
        var _a = this.props.state, _b = _a.isParallax, isParallax = _b === void 0 ? true : _b, _c = _a.background, background = _c === void 0 ? '' : _c;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { display: 'flex' } },
                this.props.imageUpload && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_react_page_ui__WEBPACK_IMPORTED_MODULE_4__["ImageUpload"], { imageUpload: this.props.imageUpload, imageLoaded: this.handleImageLoaded, imageUploaded: this.handleImageUploaded }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__["default"], { variant: "body1", style: { marginLeft: '20px', marginRight: '20px' } }, "OR"))),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], { placeholder: "http://example.com/image.png", label: this.props.imageUpload ? 'I have a URL' : 'Image URL', style: { width: '256px' }, value: background, onChange: this.handleChangeBackground })),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { style: { display: 'flex' } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_3__["default"], { control: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_1__["default"], { onChange: this.handleChangeIsParallax, checked: isParallax }), label: "Is parallax" }))));
    };
    return ImageComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (ImageComponent);
//# sourceMappingURL=Image.js.map

/***/ }),

/***/ "./node_modules/@react-page/plugins-background/lib-es/Controls/sub/LinearGradient.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@react-page/plugins-background/lib-es/Controls/sub/LinearGradient.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Slider */ "./node_modules/@material-ui/core/esm/Slider/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _react_page_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-page/ui */ "./node_modules/@react-page/ui/lib-es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};







var LinearGradientComponent = /** @class */ (function (_super) {
    __extends(LinearGradientComponent, _super);
    function LinearGradientComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.addGradient = function () {
            _this.props.ensureModeOn();
            _this.props.onChange({
                gradients: (_this.props.state.gradients
                    ? _this.props.state.gradients
                    : []).concat({
                    deg: 45,
                    opacity: 1,
                }),
            });
        };
        _this.handleChangeDeg = function (index, value) { return function () {
            _this.props.onChangeGradientDegPreview &&
                _this.props.onChangeGradientDegPreview(undefined, undefined);
            _this.props.onChange({
                gradients: (_this.props.state.gradients
                    ? _this.props.state.gradients
                    : []).map(function (g, i) { return (i === index ? __assign(__assign({}, g), { deg: value }) : g); }),
            });
        }; };
        _this.handleChangeDegPreview = function (index) { return function (e, value) {
            _this.props.onChangeGradientDegPreview &&
                _this.props.onChangeGradientDegPreview(value, index);
        }; };
        _this.handleChangeOpacity = function (index, value) { return function () {
            _this.props.onChangeGradientOpacityPreview &&
                _this.props.onChangeGradientOpacityPreview(undefined, undefined);
            _this.props.onChange({
                gradients: (_this.props.state.gradients
                    ? _this.props.state.gradients
                    : []).map(function (g, i) { return (i === index ? __assign(__assign({}, g), { opacity: value }) : g); }),
            });
        }; };
        _this.handleChangeOpacityPreview = function (index) { return function (e, value) {
            _this.props.onChangeGradientOpacityPreview &&
                _this.props.onChangeGradientOpacityPreview(value, index);
        }; };
        _this.handleChangeGradientColor = function (index, cpIndex) { return function (e) {
            _this.props.onChangeGradientColorPreview &&
                _this.props.onChangeGradientColorPreview(undefined, undefined, undefined);
            _this.props.onChange({
                gradients: []
                    .concat(_this.props.state.gradients ? _this.props.state.gradients : [])
                    .map(function (g, i) {
                    return i === index
                        ? __assign(__assign({}, g), { colors: (g.colors ? g.colors : []).map(function (c, cpI) {
                                return cpI === cpIndex ? __assign(__assign({}, c), { color: e }) : c;
                            }) }) : g;
                }),
            });
        }; };
        _this.handleChangeGradientColorPreview = function (index, cpIndex) { return function (e) {
            _this.props.onChangeGradientColorPreview &&
                _this.props.onChangeGradientColorPreview(e, index, cpIndex);
        }; };
        _this.addColor = function (index) { return function () {
            _this.props.ensureModeOn();
            _this.props.onChange({
                gradients: (_this.props.state.gradients
                    ? _this.props.state.gradients
                    : []).map(function (g, i) {
                    return i === index
                        ? __assign(__assign({}, g), { colors: (g.colors ? g.colors : []).concat({
                                color: (g.colors ? g.colors : []).length % 2 === index % 2
                                    ? _this.props.defaultGradientColor
                                    : _this.props.defaultGradientSecondaryColor,
                            }) }) : g;
                }),
            });
        }; };
        _this.removeColor = function (index, cpIndex) { return function () {
            _this.props.onChange({
                gradients: []
                    .concat(_this.props.state.gradients ? _this.props.state.gradients : [])
                    .map(function (g, i) {
                    return i === index
                        ? __assign(__assign({}, g), { colors: (g.colors ? g.colors : []).filter(function (c, cpI) { return cpI !== cpIndex; }) }) : g;
                }),
            });
        }; };
        _this.removeGradient = function (index) { return function () {
            _this.props.onChange({
                gradients: []
                    .concat(_this.props.state.gradients ? _this.props.state.gradients : [])
                    .filter(function (item, i) { return i !== index; }),
            });
        }; };
        return _this;
    }
    LinearGradientComponent.prototype.render = function () {
        var _this = this;
        var _a = this.props, gradientDegPreview = _a.gradientDegPreview, gradientDegPreviewIndex = _a.gradientDegPreviewIndex, gradientOpacityPreview = _a.gradientOpacityPreview, gradientOpacityPreviewIndex = _a.gradientOpacityPreviewIndex, gradientColorPreview = _a.gradientColorPreview, gradientColorPreviewIndex = _a.gradientColorPreviewIndex, gradientColorPreviewColorIndex = _a.gradientColorPreviewColorIndex, _b = _a.state.gradients, gradients = _b === void 0 ? [] : _b;
        return (react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", null,
            gradients.map(function (gradient, i) {
                var colors = gradient.colors ? gradient.colors : [];
                var deg = i === gradientDegPreviewIndex && gradientDegPreview !== undefined
                    ? gradientDegPreview
                    : gradient.deg;
                var opacity = i === gradientOpacityPreviewIndex &&
                    gradientOpacityPreview !== undefined
                    ? gradientOpacityPreview
                    : gradient.opacity;
                return (react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", { key: i, style: {
                        marginBottom: '8px',
                        borderLeft: '2px',
                        borderLeftStyle: 'solid',
                        paddingLeft: '8px',
                    } },
                    react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", null,
                        react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], { variant: "body1", id: "linear-gradient-degree-label" },
                            _this.props.translations.gradientRotation,
                            " (",
                            deg,
                            _this.props.translations.degrees,
                            ")"),
                        react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_2__["default"], { "aria-labelledby": "linear-gradient-degree-label", value: deg, onChange: _this.handleChangeDegPreview(i), onChangeCommitted: _this.handleChangeDeg(i, deg), step: 5, min: 0, max: 360 })),
                    react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", null,
                        react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__["default"], { variant: "body1", id: "linear-gradient-opacity-label" },
                            _this.props.translations.gradientOpacity,
                            " (",
                            (opacity * 100).toFixed(0),
                            "%)"),
                        react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_material_ui_core_Slider__WEBPACK_IMPORTED_MODULE_2__["default"], { "aria-labelledby": "linear-gradient-opacity-label", value: opacity, onChange: _this.handleChangeOpacityPreview(i), onChangeCommitted: _this.handleChangeOpacity(i, opacity), step: 0.01, min: 0, max: 1 })),
                    colors.map(function (c, cpIndex) {
                        var color = i === gradientColorPreviewIndex &&
                            cpIndex === gradientColorPreviewColorIndex &&
                            gradientColorPreview !== undefined
                            ? gradientColorPreview
                            : c.color;
                        return (react__WEBPACK_IMPORTED_MODULE_6__["createElement"](react__WEBPACK_IMPORTED_MODULE_6__["Fragment"], { key: cpIndex },
                            react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_react_page_ui__WEBPACK_IMPORTED_MODULE_5__["ColorPicker"], { style: { marginLeft: '8px' }, color: color, onChange: _this.handleChangeGradientColorPreview(i, cpIndex), onChangeComplete: _this.handleChangeGradientColor(i, cpIndex) }),
                            react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__["default"], { "aria-label": "Delete", onClick: _this.removeColor(i, cpIndex) },
                                react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4___default.a, null))));
                    }),
                    react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_0__["default"], { variant: "contained", onClick: _this.addColor(i), style: { marginLeft: '8px' } }, _this.props.translations.addColor),
                    react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_1__["default"], { "aria-label": "Delete", onClick: _this.removeGradient(i) },
                        react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4___default.a, null))));
            }),
            react__WEBPACK_IMPORTED_MODULE_6__["createElement"]("div", { style: { display: 'flex' } },
                react__WEBPACK_IMPORTED_MODULE_6__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_0__["default"], { style: {
                        margin: 'auto',
                    }, variant: "contained", onClick: this.addGradient, disabled: gradients.length > 5 }, this.props.translations.addGradient))));
    };
    return LinearGradientComponent;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (LinearGradientComponent);
//# sourceMappingURL=LinearGradient.js.map

/***/ })

}]);