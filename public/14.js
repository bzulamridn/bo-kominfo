(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/@material-ui/icons/Delete.js":
/*!***************************************************!*\
  !*** ./node_modules/@material-ui/icons/Delete.js ***!
  \***************************************************/
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
  d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"
}), 'Delete');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@react-page/ui/lib-es/EditorUI/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@react-page/ui/lib-es/EditorUI/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DisplayModeToggle_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DisplayModeToggle/index */ "./node_modules/@react-page/ui/lib-es/DisplayModeToggle/index.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ThemeProvider */ "./node_modules/@react-page/ui/lib-es/ThemeProvider/index.js");
/* harmony import */ var _Toolbar_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Toolbar/index */ "./node_modules/@react-page/ui/lib-es/Toolbar/index.js");
/* harmony import */ var _Trash_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Trash/index */ "./node_modules/@react-page/ui/lib-es/Trash/index.js");





/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(function (_a) {
    var _b = _a.stickyNess, stickyNess = _b === void 0 ? {
        shouldStickToTop: false,
        shouldStickToBottom: false,
        rightOffset: 0,
    } : _b;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ThemeProvider__WEBPACK_IMPORTED_MODULE_2__["default"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Trash_index__WEBPACK_IMPORTED_MODULE_4__["default"], null),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DisplayModeToggle_index__WEBPACK_IMPORTED_MODULE_1__["default"], { stickyNess: stickyNess }),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Toolbar_index__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
}));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@react-page/ui/lib-es/ThemeProvider/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@react-page/ui/lib-es/ThemeProvider/index.js ***!
  \*******************************************************************/
/*! exports provided: darkTheme, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/styles */ "./node_modules/@material-ui/styles/esm/index.js");
/* harmony import */ var _DarkTheme_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DarkTheme/index */ "./node_modules/@react-page/ui/lib-es/ThemeProvider/DarkTheme/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "darkTheme", function() { return _DarkTheme_index__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _themeOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./themeOptions */ "./node_modules/@react-page/ui/lib-es/ThemeProvider/themeOptions.js");
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
/*
 * This file is part of ORY Editor.
 *
 * ORY Editor is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * ORY Editor is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with ORY Editor.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @license LGPL-3.0
 * @copyright 2016-2018 Aeneas Rekkas
 * @author Aeneas Rekkas <aeneas+oss@aeneas.io>
 *
 */







var generateClassName = Object(_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["createGenerateClassName"])({
    disableGlobal: true,
    productionPrefix: 'ory',
});
var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["createMuiTheme"])(_themeOptions__WEBPACK_IMPORTED_MODULE_4__["themeOptions"]);
var ThemeProvider = /** @class */ (function (_super) {
    __extends(ThemeProvider, _super);
    function ThemeProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThemeProvider.prototype.render = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["StylesProvider"], { injectFirst: true, generateClassName: generateClassName },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_styles__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], { theme: this.props.theme || theme }, this.props.children)));
    };
    return ThemeProvider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (ThemeProvider);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@react-page/ui/lib-es/ThemeProvider/themeOptions.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@react-page/ui/lib-es/ThemeProvider/themeOptions.js ***!
  \**************************************************************************/
/*! exports provided: themeOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themeOptions", function() { return themeOptions; });
var themeOptions = {};
//# sourceMappingURL=themeOptions.js.map

/***/ }),

/***/ "./node_modules/@react-page/ui/lib-es/Trash/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@react-page/ui/lib-es/Trash/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/Fab */ "./node_modules/@material-ui/core/esm/Fab/index.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/Delete */ "./node_modules/@material-ui/icons/Delete.js");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_page_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-page/core */ "./node_modules/@react-page/core/lib-es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");
/* harmony import */ var lodash_throttle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_throttle__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reselect */ "./node_modules/reselect/lib/index.js");
/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_6__);
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
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};







var target = {
    hover: lodash_throttle__WEBPACK_IMPORTED_MODULE_4___default()(
    // tslint:disable-next-line:no-any
    function (props, monitor) {
        var item = monitor.getItem();
        if (monitor.isOver({ shallow: true })) {
            item.clearHover();
        }
    }, 200, { trailing: false }),
    // tslint:disable-next-line:no-any
    drop: function (props, monitor) {
        var item = monitor.getItem();
        if (monitor.didDrop() || !monitor.isOver({ shallow: true })) {
            // If the item drop occurred deeper down the tree, don't do anything
            return;
        }
        props.removeCell(item.id);
    },
};
// tslint:disable-next-line:no-any
var connectMonitor = function (_connect, monitor) { return ({
    connectDropTarget: _connect.dropTarget(),
    isOverCurrent: monitor.isOver({ shallow: true }),
}); };
var Raw = /** @class */ (function (_super) {
    __extends(Raw, _super);
    function Raw() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Raw.prototype.render = function () {
        var _a = this.props, connectDropTarget = _a.connectDropTarget, isOverCurrent = _a.isOverCurrent;
        return connectDropTarget(react__WEBPACK_IMPORTED_MODULE_5__["createElement"]("div", { className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('ory-controls-trash', {
                'ory-controls-trash-active': this.props.isLayoutMode,
            }) },
            react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_0__["default"], { color: "secondary", disabled: !isOverCurrent },
                react__WEBPACK_IMPORTED_MODULE_5__["createElement"](_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_1___default.a, null))));
    };
    return Raw;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]));
var types = function (_a) {
    var editor = _a.editor;
    var plugins = __spread(Object.keys(editor.plugins.plugins.layout), Object.keys(editor.plugins.plugins.content)).map(function (p) {
        return (editor.plugins.plugins.content[p] &&
            editor.plugins.plugins.content[p].name) ||
            (editor.plugins.plugins.layout[p] &&
                editor.plugins.plugins.layout[p].name);
    });
    if (editor.plugins.hasNativePlugin()) {
        plugins.push(editor.plugins.getNativePlugin()().name);
    }
    return plugins;
};
var mapDispatchToProps = {
    removeCell: _react_page_core__WEBPACK_IMPORTED_MODULE_2__["Actions"].Cell.removeCell,
};
var mapStateToProps = Object(reselect__WEBPACK_IMPORTED_MODULE_6__["createStructuredSelector"])(_react_page_core__WEBPACK_IMPORTED_MODULE_2__["Selectors"].Display);
// tslint:disable-next-line:no-any
var Decorated = Object(_react_page_core__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Object(_react_page_core__WEBPACK_IMPORTED_MODULE_2__["DropTarget"])(types, target, connectMonitor)(Raw));
var Trash = function () {
    var editor = Object(_react_page_core__WEBPACK_IMPORTED_MODULE_2__["useEditor"])();
    return react__WEBPACK_IMPORTED_MODULE_5__["createElement"](Decorated, { editor: editor });
};
/* harmony default export */ __webpack_exports__["default"] = (Trash);
//# sourceMappingURL=index.js.map

/***/ })

}]);