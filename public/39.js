(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/@react-page/plugins-slate/lib-es/Controls/HoverButtons.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@react-page/plugins-slate/lib-es/Controls/HoverButtons.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-portal */ "./node_modules/react-portal/es/index.js");
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! slate-react */ "./node_modules/slate-react/dist/index.es.js");
/* harmony import */ var _hooks_useTextIsSelected__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useTextIsSelected */ "./node_modules/@react-page/plugins-slate/lib-es/hooks/useTextIsSelected.js");
/* harmony import */ var _PluginButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PluginButton */ "./node_modules/@react-page/plugins-slate/lib-es/Controls/PluginButton.js");





var HoverButtons = function (_a) {
    var plugins = _a.plugins, translations = _a.translations;
    var showHoverToolbar = Object(_hooks_useTextIsSelected__WEBPACK_IMPORTED_MODULE_3__["default"])();
    var toolbarRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
    var editor = Object(slate_react__WEBPACK_IMPORTED_MODULE_2__["useSlate"])();
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var toolbar = toolbarRef.current;
        if (!showHoverToolbar) {
            return;
        }
        var s = window.getSelection();
        var oRange = s.getRangeAt(0); // get the text range
        var oRect = oRange.getBoundingClientRect();
        if (oRect) {
            var left = oRect.left, top_1 = oRect.top, width = oRect.width;
            toolbar.style.opacity = '1';
            toolbar.style.top = top_1 + window.scrollY - toolbar.offsetHeight + "px";
            toolbar.style.left = left +
                window.scrollX -
                toolbar.offsetWidth / 2 +
                width / 2 + "px";
        }
    }, [editor, showHoverToolbar]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_portal__WEBPACK_IMPORTED_MODULE_1__["Portal"], null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: 'ory-plugins-content-slate-inline-toolbar ' +
                (showHoverToolbar
                    ? ''
                    : 'ory-plugins-content-slate-inline-toolbar--hidden'), style: { padding: 0 }, ref: toolbarRef }, plugins &&
            plugins.map(function (plugin, i) {
                return plugin.addHoverButton ? (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PluginButton__WEBPACK_IMPORTED_MODULE_4__["default"], { translations: translations, key: i, plugin: plugin })) : null;
            }))));
};
/* harmony default export */ __webpack_exports__["default"] = (HoverButtons);
//# sourceMappingURL=HoverButtons.js.map

/***/ }),

/***/ "./node_modules/@react-page/plugins-slate/lib-es/hooks/useTextIsSelected.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@react-page/plugins-slate/lib-es/hooks/useTextIsSelected.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slate */ "./node_modules/slate/dist/index.es.js");
/* harmony import */ var slate_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slate-react */ "./node_modules/slate-react/dist/index.es.js");


var useTextIsSelected = function () {
    var editor = Object(slate_react__WEBPACK_IMPORTED_MODULE_1__["useSlate"])();
    try {
        return (Boolean(editor.selection) &&
            slate__WEBPACK_IMPORTED_MODULE_0__["Editor"].string(editor, editor.selection) !== '');
    }
    catch (e) {
        // can in some cases throw currently
        return false;
    }
};
/* harmony default export */ __webpack_exports__["default"] = (useTextIsSelected);
//# sourceMappingURL=useTextIsSelected.js.map

/***/ })

}]);