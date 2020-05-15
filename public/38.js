(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./node_modules/@react-page/editor/lib-es/editor/EditableEditor.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@react-page/editor/lib-es/editor/EditableEditor.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_page_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-page/core */ "./node_modules/@react-page/core/lib-es/index.js");
/* harmony import */ var _react_page_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-page/ui */ "./node_modules/@react-page/ui/lib-es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _StickyWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StickyWrapper */ "./node_modules/@react-page/editor/lib-es/editor/StickyWrapper.js");




/* harmony default export */ __webpack_exports__["default"] = (function (_a) {
    var plugins = _a.plugins, defaultPlugin = _a.defaultPlugin, value = _a.value, onChange = _a.onChange, dndBackend = _a.dndBackend;
    var editorRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])({
        editor: new _react_page_core__WEBPACK_IMPORTED_MODULE_0__["Editor"]({ defaultPlugin: defaultPlugin, plugins: plugins }),
        editorState: null,
    });
    editorRef.current.editorState = value || Object(_react_page_core__WEBPACK_IMPORTED_MODULE_0__["createEmptyState"])();
    // updating plugins is not yet supported, so we have an editor ref  that stays the same during lifetime of the editor
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
        editorRef.current.editor.trigger.editable.update(editorRef.current.editorState);
    }, [editorRef.current.editorState !== value]);
    var _b = editorRef.current, editor = _b.editor, editorState = _b.editorState;
    return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_page_core__WEBPACK_IMPORTED_MODULE_0__["Provider"], { editor: editor, dndBackend: dndBackend },
        react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_StickyWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], null, function (stickyNess) { return (react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_page_core__WEBPACK_IMPORTED_MODULE_0__["Editable"], { id: editorState.id, onChange: onChange }),
            react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_react_page_ui__WEBPACK_IMPORTED_MODULE_1__["default"], { stickyNess: stickyNess }))); })));
});
//# sourceMappingURL=EditableEditor.js.map

/***/ }),

/***/ "./node_modules/@react-page/editor/lib-es/editor/StickyWrapper.js":
/*!************************************************************************!*\
  !*** ./node_modules/@react-page/editor/lib-es/editor/StickyWrapper.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
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

/* harmony default export */ __webpack_exports__["default"] = (function (_a) {
    var children = _a.children;
    var ref = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    var stickyElRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
    var _b = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), 2), shouldStickToTop = _b[0], setShouldStickToTop = _b[1];
    var _c = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true), 2), shouldStickToBottom = _c[0], setShouldStickToBottom = _c[1];
    var _d = __read(Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0), 2), rightOffset = _d[0], setRightOffset = _d[1];
    react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(function () {
        var calc = function () {
            if (ref.current) {
                var _a = ref.current.getBoundingClientRect(), top_1 = _a.top, left = _a.left;
                var bottom = top_1 + ref.current.clientHeight;
                // document.documentElement.clientWidth is without scrollbars, so better for us
                var right = document.documentElement.clientWidth - left - ref.current.clientWidth;
                var uiHeight = stickyElRef.current
                    ? stickyElRef.current.clientHeight
                    : 400;
                setRightOffset(right);
                setShouldStickToTop(top_1 > window.innerHeight - uiHeight);
                setShouldStickToBottom(bottom < window.innerHeight);
            }
        };
        document.addEventListener('scroll', calc);
        window.addEventListener('resize', calc);
        // do it once
        calc();
        return function () {
            document.removeEventListener('scroll', calc);
            window.removeEventListener('resize', calc);
        };
    }, [ref, stickyElRef]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { style: { position: 'relative' }, ref: ref }, children({
        rightOffset: rightOffset,
        stickyElRef: stickyElRef,
        shouldStickToTop: shouldStickToTop,
        shouldStickToBottom: shouldStickToBottom,
    })));
});
//# sourceMappingURL=StickyWrapper.js.map

/***/ })

}]);