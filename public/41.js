(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "./node_modules/@react-page/plugins-slate/lib-es/Controls/Toolbar.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@react-page/plugins-slate/lib-es/Controls/Toolbar.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_page_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-page/ui */ "./node_modules/@react-page/ui/lib-es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PluginButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PluginButton */ "./node_modules/@react-page/plugins-slate/lib-es/Controls/PluginButton.js");
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



var Toolbar = function (props) {
    var show = props.show, removeSlate = props.removeSlate, plugins = props.plugins, translations = props.translations;
    var bottomToolbarProps = {
        open: show,
        dark: true,
        onDelete: removeSlate,
        editable: props.editable,
        name: props.name,
        id: props.id,
    };
    // useWhyDidYouUpdate('Toolbar' + props.id, props);
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_react_page_ui__WEBPACK_IMPORTED_MODULE_0__["BottomToolbar"], __assign({}, bottomToolbarProps),
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, plugins &&
            plugins.map(function (plugin, i) {
                return plugin.addToolbarButton ? (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_PluginButton__WEBPACK_IMPORTED_MODULE_2__["default"], { key: i, translations: translations, plugin: plugin })) : null;
            }))));
};
/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Toolbar));
//# sourceMappingURL=Toolbar.js.map

/***/ })

}]);