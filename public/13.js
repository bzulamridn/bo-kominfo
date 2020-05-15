(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

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

/***/ "./node_modules/@material-ui/icons/CloudUpload.js":
/*!********************************************************!*\
  !*** ./node_modules/@material-ui/icons/CloudUpload.js ***!
  \********************************************************/
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
  d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"
}), 'CloudUpload');

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/icons/Error.js":
/*!**************************************************!*\
  !*** ./node_modules/@material-ui/icons/Error.js ***!
  \**************************************************/
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
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
}), 'Error');

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

/***/ "./node_modules/@react-page/ui/lib-es/ImageUpload/defaultTranslations.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@react-page/ui/lib-es/ImageUpload/defaultTranslations.js ***!
  \*******************************************************************************/
/*! exports provided: defaultTranslations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTranslations", function() { return defaultTranslations; });
var defaultTranslations = {
    buttonContent: 'Upload image',
    noFileError: 'No file selected',
    badExtensionError: 'Bad file type',
    tooBigError: 'Too big',
    uploadingError: 'Error while uploading',
    unknownError: 'Unknown error',
};
//# sourceMappingURL=defaultTranslations.js.map

/***/ }),

/***/ "./node_modules/@react-page/ui/lib-es/ImageUpload/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@react-page/ui/lib-es/ImageUpload/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_icons_CloudUpload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/CloudUpload */ "./node_modules/@material-ui/icons/CloudUpload.js");
/* harmony import */ var _material_ui_icons_CloudUpload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_CloudUpload__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Error */ "./node_modules/@material-ui/icons/Error.js");
/* harmony import */ var _material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _defaultTranslations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./defaultTranslations */ "./node_modules/@react-page/ui/lib-es/ImageUpload/defaultTranslations.js");
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






var NO_FILE_ERROR_CODE = 1;
var BAD_EXTENSION_ERROR_CODE = 2;
var TOO_BIG_ERROR_CODE = 3;
var UPLOADING_ERROR_CODE = 4;
var ImageUpload = /** @class */ (function (_super) {
    __extends(ImageUpload, _super);
    function ImageUpload() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isUploading: false,
            hasError: false,
            errorText: '',
            progress: 0,
        };
        _this.hasExtension = function (fileName) {
            var patternPart = _this.props.allowedExtensions
                ? _this.props.allowedExtensions.map(function (a) { return a.toLowerCase(); }).join('|')
                : '';
            var pattern = '(' + patternPart.replace(/\./g, '\\.') + ')$';
            return new RegExp(pattern, 'i').test(fileName.toLowerCase());
        };
        _this.handleError = function (errorCode) {
            var errorText = '';
            switch (errorCode) {
                case NO_FILE_ERROR_CODE:
                    errorText = _this.props.translations.noFileError;
                    break;
                case BAD_EXTENSION_ERROR_CODE:
                    errorText = _this.props.translations.badExtensionError;
                    break;
                case TOO_BIG_ERROR_CODE:
                    errorText = _this.props.translations.tooBigError;
                    break;
                case UPLOADING_ERROR_CODE:
                    errorText = _this.props.translations.uploadingError;
                    break;
                default:
                    errorText = _this.props.translations.unknownError;
                    break;
            }
            // Need to flick "isUploading" because otherwise the handler doesn't fire properly
            _this.setState({ hasError: true, errorText: errorText, isUploading: true }, function () {
                return _this.setState({ isUploading: false });
            });
            setTimeout(function () { return _this.setState({ hasError: false, errorText: '' }); }, 5000);
        };
        _this.handleFileSelected = function (e) {
            if (!e.target.files || !e.target.files[0]) {
                _this.handleError(NO_FILE_ERROR_CODE);
                return;
            }
            var file = e.target.files[0];
            if (!_this.hasExtension(file.name)) {
                _this.handleError(BAD_EXTENSION_ERROR_CODE);
                return;
            }
            if (file.size > _this.props.maxFileSize) {
                _this.handleError(TOO_BIG_ERROR_CODE);
                return;
            }
            if (_this.props.imageLoaded) {
                _this.readFile(file).then(function (data) { return _this.props.imageLoaded(data); });
            }
            if (_this.props.imageUpload) {
                _this.setState({ isUploading: true });
                _this.props
                    .imageUpload(file, _this.handleReportProgress)
                    .then(function (resp) {
                    _this.setState({ progress: undefined, isUploading: false });
                    _this.props.imageUploaded && _this.props.imageUploaded(resp);
                })
                    .catch(function (error) {
                    _this.setState({ isUploading: false });
                    _this.props.imageUploadError && _this.props.imageUploadError(error);
                });
            }
        };
        _this.handleFileUploadClick = function () {
            return _this.fileInput.click();
        };
        _this.handleReportProgress = function (progress) { return _this.setState({ progress: progress }); };
        _this.renderChildren = function () {
            if (_this.state.isUploading) {
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__["default"], { value: _this.state.progress, size: 19 });
            }
            if (_this.state.hasError) {
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                    _this.state.errorText,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_icons_Error__WEBPACK_IMPORTED_MODULE_4___default.a, { style: { marginLeft: '8px' } })));
            }
            return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                _this.props.translations.buttonContent,
                _this.props.icon));
        };
        return _this;
    }
    ImageUpload.prototype.readFile = function (file) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            // Read the image via FileReader API and save image result in state.
            reader.onload = function (e) {
                // Add the file name to the data URL
                // tslint:disable-next-line:no-any
                var dataUrl = e.target.result;
                dataUrl = dataUrl.replace(';base64', ";name=" + file.name + ";base64");
                resolve({ file: file, dataUrl: dataUrl });
            };
            reader.readAsDataURL(file);
        });
    };
    ImageUpload.prototype.render = function () {
        var _this = this;
        return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_1__["default"], { disabled: this.state.isUploading, variant: "contained", color: this.state.hasError ? 'secondary' : 'primary', onClick: this.handleFileUploadClick, style: this.props.style }, this.renderChildren()),
            !this.state.isUploading && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("input", { style: { display: 'none' }, ref: function (fileInput) { return (_this.fileInput = fileInput); }, type: "file", onChange: this.handleFileSelected }))));
    };
    ImageUpload.defaultProps = {
        icon: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_icons_CloudUpload__WEBPACK_IMPORTED_MODULE_3___default.a, { style: { marginLeft: '8px' } }),
        allowedExtensions: ['jpg', 'jpeg', 'png'],
        maxFileSize: 5242880,
        translations: _defaultTranslations__WEBPACK_IMPORTED_MODULE_5__["defaultTranslations"],
    };
    return ImageUpload;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]));
/* harmony default export */ __webpack_exports__["default"] = (ImageUpload);
//# sourceMappingURL=index.js.map

/***/ })

}]);