(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/@material-ui/core/esm/FormControlLabel/FormControlLabel.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormControlLabel/FormControlLabel.js ***!
  \*********************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _FormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");










var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',
      // For correct alignment with the text.
      verticalAlign: 'middle',
      WebkitTapHighlightColor: 'transparent',
      marginLeft: -11,
      marginRight: 16,
      // used for row presentation of radio/checkbox
      '&$disabled': {
        cursor: 'default'
      }
    },

    /* Styles applied to the root element if `labelPlacement="start"`. */
    labelPlacementStart: {
      flexDirection: 'row-reverse',
      marginLeft: 16,
      // used for row presentation of radio/checkbox
      marginRight: -11
    },

    /* Styles applied to the root element if `labelPlacement="top"`. */
    labelPlacementTop: {
      flexDirection: 'column-reverse',
      marginLeft: 16
    },

    /* Styles applied to the root element if `labelPlacement="bottom"`. */
    labelPlacementBottom: {
      flexDirection: 'column',
      marginLeft: 16
    },

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the label's Typography component. */
    label: {
      '&$disabled': {
        color: theme.palette.text.disabled
      }
    }
  };
};
/**
 * Drop in replacement of the `Radio`, `Switch` and `Checkbox` component.
 * Use this component if you want to display an extra label.
 */

var FormControlLabel = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function FormControlLabel(props, ref) {
  var checked = props.checked,
      classes = props.classes,
      className = props.className,
      control = props.control,
      disabledProp = props.disabled,
      inputRef = props.inputRef,
      label = props.label,
      _props$labelPlacement = props.labelPlacement,
      labelPlacement = _props$labelPlacement === void 0 ? 'end' : _props$labelPlacement,
      name = props.name,
      onChange = props.onChange,
      value = props.value,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["checked", "classes", "className", "control", "disabled", "inputRef", "label", "labelPlacement", "name", "onChange", "value"]);

  var muiFormControl = Object(_FormControl__WEBPACK_IMPORTED_MODULE_6__["useFormControl"])();
  var disabled = disabledProp;

  if (typeof disabled === 'undefined' && typeof control.props.disabled !== 'undefined') {
    disabled = control.props.disabled;
  }

  if (typeof disabled === 'undefined' && muiFormControl) {
    disabled = muiFormControl.disabled;
  }

  var controlProps = {
    disabled: disabled
  };
  ['checked', 'name', 'onChange', 'value', 'inputRef'].forEach(function (key) {
    if (typeof control.props[key] === 'undefined' && typeof props[key] !== 'undefined') {
      controlProps[key] = props[key];
    }
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, labelPlacement !== 'end' && classes["labelPlacement".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_9__["default"])(labelPlacement))], disabled && classes.disabled),
    ref: ref
  }, other), react__WEBPACK_IMPORTED_MODULE_2___default.a.cloneElement(control, controlProps), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
    component: "span",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.label, disabled && classes.disabled)
  }, label));
});
 true ? FormControlLabel.propTypes = {
  /**
   * If `true`, the component appears selected.
   */
  checked: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * A control element. For instance, it can be be a `Radio`, a `Switch` or a `Checkbox`.
   */
  control: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /**
   * If `true`, the control will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["refType"],

  /**
   * The text to be used in an enclosing label element.
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * The position of the label.
   */
  labelPlacement: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['end', 'start', 'top', 'bottom']),

  /*
   * @ignore
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * The value of the component.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(styles, {
  name: 'MuiFormControlLabel'
})(FormControlLabel));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/FormControlLabel/index.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormControlLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/FormControlLabel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _FormControlLabel__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Slider/Slider.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Slider/Slider.js ***!
  \*************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony import */ var _utils_focusVisible__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/focusVisible */ "./node_modules/@material-ui/core/esm/utils/focusVisible.js");
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony import */ var _utils_useEventCallback__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/useEventCallback */ "./node_modules/@material-ui/core/esm/utils/useEventCallback.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _utils_useControlled__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/useControlled */ "./node_modules/@material-ui/core/esm/utils/useControlled.js");
/* harmony import */ var _ValueLabel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ValueLabel */ "./node_modules/@material-ui/core/esm/Slider/ValueLabel.js");



















function asc(a, b) {
  return a - b;
}

function clamp(value, min, max) {
  return Math.min(Math.max(min, value), max);
}

function findClosest(values, currentValue) {
  var _values$reduce = values.reduce(function (acc, value, index) {
    var distance = Math.abs(currentValue - value);

    if (acc === null || distance < acc.distance || distance === acc.distance) {
      return {
        distance: distance,
        index: index
      };
    }

    return acc;
  }, null),
      closestIndex = _values$reduce.index;

  return closestIndex;
}

function trackFinger(event, touchId) {
  if (touchId.current !== undefined && event.changedTouches) {
    for (var i = 0; i < event.changedTouches.length; i += 1) {
      var touch = event.changedTouches[i];

      if (touch.identifier === touchId.current) {
        return {
          x: touch.clientX,
          y: touch.clientY
        };
      }
    }

    return false;
  }

  return {
    x: event.clientX,
    y: event.clientY
  };
}

function valueToPercent(value, min, max) {
  return (value - min) * 100 / (max - min);
}

function percentToValue(percent, min, max) {
  return (max - min) * percent + min;
}

function getDecimalPrecision(num) {
  // This handles the case when num is very small (0.00000001), js will turn this into 1e-8.
  // When num is bigger than 1 or less than -1 it won't get converted to this notation so it's fine.
  if (Math.abs(num) < 1) {
    var parts = num.toExponential().split('e-');
    var matissaDecimalPart = parts[0].split('.')[1];
    return (matissaDecimalPart ? matissaDecimalPart.length : 0) + parseInt(parts[1], 10);
  }

  var decimalPart = num.toString().split('.')[1];
  return decimalPart ? decimalPart.length : 0;
}

function roundValueToStep(value, step, min) {
  var nearest = Math.round((value - min) / step) * step + min;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
}

function setValueIndex(_ref) {
  var values = _ref.values,
      source = _ref.source,
      newValue = _ref.newValue,
      index = _ref.index;

  // Performance shortcut
  if (values[index] === newValue) {
    return source;
  }

  var output = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(values);

  output[index] = newValue;
  return output;
}

function focusThumb(_ref2) {
  var sliderRef = _ref2.sliderRef,
      activeIndex = _ref2.activeIndex,
      setActive = _ref2.setActive;

  if (!sliderRef.current.contains(document.activeElement) || Number(document.activeElement.getAttribute('data-index')) !== activeIndex) {
    sliderRef.current.querySelector("[data-index=\"".concat(activeIndex, "\"]")).focus();
  }

  if (setActive) {
    setActive(activeIndex);
  }
}

var axisProps = {
  horizontal: {
    offset: function offset(percent) {
      return {
        left: "".concat(percent, "%")
      };
    },
    leap: function leap(percent) {
      return {
        width: "".concat(percent, "%")
      };
    }
  },
  'horizontal-reverse': {
    offset: function offset(percent) {
      return {
        right: "".concat(percent, "%")
      };
    },
    leap: function leap(percent) {
      return {
        width: "".concat(percent, "%")
      };
    }
  },
  vertical: {
    offset: function offset(percent) {
      return {
        bottom: "".concat(percent, "%")
      };
    },
    leap: function leap(percent) {
      return {
        height: "".concat(percent, "%")
      };
    }
  }
};

var Identity = function Identity(x) {
  return x;
};

var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      height: 2,
      width: '100%',
      boxSizing: 'content-box',
      padding: '13px 0',
      display: 'inline-block',
      position: 'relative',
      cursor: 'pointer',
      touchAction: 'none',
      color: theme.palette.primary.main,
      WebkitTapHighlightColor: 'transparent',
      '&$disabled': {
        pointerEvents: 'none',
        cursor: 'default',
        color: theme.palette.grey[400]
      },
      '&$vertical': {
        width: 2,
        height: '100%',
        padding: '0 13px'
      },
      // The primary input mechanism of the device includes a pointing device of limited accuracy.
      '@media (pointer: coarse)': {
        // Reach 42px touch target, about ~8mm on screen.
        padding: '20px 0',
        '&$vertical': {
          padding: '0 20px'
        }
      }
    },

    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {// TODO v5: move the style here
    },

    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      color: theme.palette.secondary.main
    },

    /* Styles applied to the root element if `marks` is provided with at least one label. */
    marked: {
      marginBottom: 20,
      '&$vertical': {
        marginBottom: 'auto',
        marginRight: 20
      }
    },

    /* Pseudo-class applied to the root element if `orientation="vertical"`. */
    vertical: {},

    /* Pseudo-class applied to the root and thumb element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the rail element. */
    rail: {
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: 2,
      borderRadius: 1,
      backgroundColor: 'currentColor',
      opacity: 0.38,
      '$vertical &': {
        height: '100%',
        width: 2
      }
    },

    /* Styles applied to the track element. */
    track: {
      display: 'block',
      position: 'absolute',
      height: 2,
      borderRadius: 1,
      backgroundColor: 'currentColor',
      '$vertical &': {
        width: 2
      }
    },

    /* Styles applied to the track element if `track={false}`. */
    trackFalse: {
      '& $track': {
        display: 'none'
      }
    },

    /* Styles applied to the track element if `track="inverted"`. */
    trackInverted: {
      '& $track': {
        backgroundColor: // Same logic as the LinearProgress track color
        theme.palette.type === 'light' ? Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_10__["lighten"])(theme.palette.primary.main, 0.62) : Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_10__["darken"])(theme.palette.primary.main, 0.5)
      },
      '& $rail': {
        opacity: 1
      }
    },

    /* Styles applied to the thumb element. */
    thumb: {
      position: 'absolute',
      width: 12,
      height: 12,
      marginLeft: -6,
      marginTop: -5,
      boxSizing: 'border-box',
      borderRadius: '50%',
      outline: 0,
      backgroundColor: 'currentColor',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: theme.transitions.create(['box-shadow'], {
        duration: theme.transitions.duration.shortest
      }),
      '&::after': {
        position: 'absolute',
        content: '""',
        borderRadius: '50%',
        // reach 42px hit target (2 * 15 + thumb diameter)
        left: -15,
        top: -15,
        right: -15,
        bottom: -15
      },
      '&$focusVisible,&:hover': {
        boxShadow: "0px 0px 0px 8px ".concat(Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_10__["fade"])(theme.palette.primary.main, 0.16)),
        '@media (hover: none)': {
          boxShadow: 'none'
        }
      },
      '&$active': {
        boxShadow: "0px 0px 0px 14px ".concat(Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_10__["fade"])(theme.palette.primary.main, 0.16))
      },
      '&$disabled': {
        width: 8,
        height: 8,
        marginLeft: -4,
        marginTop: -3,
        '&:hover': {
          boxShadow: 'none'
        }
      },
      '$vertical &': {
        marginLeft: -5,
        marginBottom: -6
      },
      '$vertical &$disabled': {
        marginLeft: -3,
        marginBottom: -4
      }
    },

    /* Styles applied to the thumb element if `color="primary"`. */
    thumbColorPrimary: {// TODO v5: move the style here
    },

    /* Styles applied to the thumb element if `color="secondary"`. */
    thumbColorSecondary: {
      '&$focusVisible,&:hover': {
        boxShadow: "0px 0px 0px 8px ".concat(Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_10__["fade"])(theme.palette.secondary.main, 0.16))
      },
      '&$active': {
        boxShadow: "0px 0px 0px 14px ".concat(Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_10__["fade"])(theme.palette.secondary.main, 0.16))
      }
    },

    /* Pseudo-class applied to the thumb element if it's active. */
    active: {},

    /* Pseudo-class applied to the thumb element if keyboard focused. */
    focusVisible: {},

    /* Styles applied to the thumb label element. */
    valueLabel: {},

    /* Styles applied to the mark element. */
    mark: {
      position: 'absolute',
      width: 2,
      height: 2,
      borderRadius: 1,
      backgroundColor: 'currentColor'
    },

    /* Styles applied to the mark element if active (depending on the value). */
    markActive: {
      backgroundColor: theme.palette.background.paper,
      opacity: 0.8
    },

    /* Styles applied to the mark label element. */
    markLabel: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, theme.typography.body2, {
      color: theme.palette.text.secondary,
      position: 'absolute',
      top: 26,
      transform: 'translateX(-50%)',
      whiteSpace: 'nowrap',
      '$vertical &': {
        top: 'auto',
        left: 26,
        transform: 'translateY(50%)'
      },
      '@media (pointer: coarse)': {
        top: 40,
        '$vertical &': {
          left: 31
        }
      }
    }),

    /* Styles applied to the mark label element if active (depending on the value). */
    markLabelActive: {
      color: theme.palette.text.primary
    }
  };
};
var Slider = react__WEBPACK_IMPORTED_MODULE_4___default.a.forwardRef(function Slider(props, ref) {
  var ariaLabel = props['aria-label'],
      ariaLabelledby = props['aria-labelledby'],
      ariaValuetext = props['aria-valuetext'],
      classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'span' : _props$component,
      defaultValue = props.defaultValue,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      getAriaLabel = props.getAriaLabel,
      getAriaValueText = props.getAriaValueText,
      _props$marks = props.marks,
      marksProp = _props$marks === void 0 ? false : _props$marks,
      _props$max = props.max,
      max = _props$max === void 0 ? 100 : _props$max,
      _props$min = props.min,
      min = _props$min === void 0 ? 0 : _props$min,
      name = props.name,
      onChange = props.onChange,
      onChangeCommitted = props.onChangeCommitted,
      onMouseDown = props.onMouseDown,
      _props$orientation = props.orientation,
      orientation = _props$orientation === void 0 ? 'horizontal' : _props$orientation,
      _props$scale = props.scale,
      scale = _props$scale === void 0 ? Identity : _props$scale,
      _props$step = props.step,
      step = _props$step === void 0 ? 1 : _props$step,
      _props$ThumbComponent = props.ThumbComponent,
      ThumbComponent = _props$ThumbComponent === void 0 ? 'span' : _props$ThumbComponent,
      _props$track = props.track,
      track = _props$track === void 0 ? 'normal' : _props$track,
      valueProp = props.value,
      _props$ValueLabelComp = props.ValueLabelComponent,
      ValueLabelComponent = _props$ValueLabelComp === void 0 ? _ValueLabel__WEBPACK_IMPORTED_MODULE_17__["default"] : _props$ValueLabelComp,
      _props$valueLabelDisp = props.valueLabelDisplay,
      valueLabelDisplay = _props$valueLabelDisp === void 0 ? 'off' : _props$valueLabelDisp,
      _props$valueLabelForm = props.valueLabelFormat,
      valueLabelFormat = _props$valueLabelForm === void 0 ? Identity : _props$valueLabelForm,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["aria-label", "aria-labelledby", "aria-valuetext", "classes", "className", "color", "component", "defaultValue", "disabled", "getAriaLabel", "getAriaValueText", "marks", "max", "min", "name", "onChange", "onChangeCommitted", "onMouseDown", "orientation", "scale", "step", "ThumbComponent", "track", "value", "ValueLabelComponent", "valueLabelDisplay", "valueLabelFormat"]);

  var theme = Object(_styles_useTheme__WEBPACK_IMPORTED_MODULE_9__["default"])();
  var touchId = react__WEBPACK_IMPORTED_MODULE_4___default.a.useRef(); // We can't use the :active browser pseudo-classes.
  // - The active state isn't triggered when clicking on the rail.
  // - The active state isn't transfered when inversing a range slider.

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(-1),
      active = _React$useState[0],
      setActive = _React$useState[1];

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(-1),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _useControlled = Object(_utils_useControlled__WEBPACK_IMPORTED_MODULE_16__["default"])({
    controlled: valueProp,
    default: defaultValue,
    name: 'Slider'
  }),
      _useControlled2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useControlled, 2),
      valueDerived = _useControlled2[0],
      setValueState = _useControlled2[1];

  var range = Array.isArray(valueDerived);
  var instanceRef = react__WEBPACK_IMPORTED_MODULE_4___default.a.useRef();
  var values = range ? Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(valueDerived).sort(asc) : [valueDerived];
  values = values.map(function (value) {
    return clamp(value, min, max);
  });
  var marks = marksProp === true && step !== null ? Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_3__["default"])(Array(Math.floor((max - min) / step) + 1)).map(function (_, index) {
    return {
      value: min + step * index
    };
  }) : marksProp || [];
  instanceRef.current = {
    source: valueDerived // Keep track of the input value to leverage immutable state comparison.

  };

  var _useIsFocusVisible = Object(_utils_focusVisible__WEBPACK_IMPORTED_MODULE_11__["useIsFocusVisible"])(),
      isFocusVisible = _useIsFocusVisible.isFocusVisible,
      onBlurVisible = _useIsFocusVisible.onBlurVisible,
      focusVisibleRef = _useIsFocusVisible.ref;

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(-1),
      focusVisible = _React$useState3[0],
      setFocusVisible = _React$useState3[1];

  var sliderRef = react__WEBPACK_IMPORTED_MODULE_4___default.a.useRef();
  var handleFocusRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_14__["default"])(focusVisibleRef, sliderRef);
  var handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_14__["default"])(ref, handleFocusRef);
  var handleFocus = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_13__["default"])(function (event) {
    var index = Number(event.currentTarget.getAttribute('data-index'));

    if (isFocusVisible(event)) {
      setFocusVisible(index);
    }

    setOpen(index);
  });
  var handleBlur = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_13__["default"])(function () {
    if (focusVisible !== -1) {
      setFocusVisible(-1);
      onBlurVisible();
    }

    setOpen(-1);
  });
  var handleMouseOver = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_13__["default"])(function (event) {
    var index = Number(event.currentTarget.getAttribute('data-index'));
    setOpen(index);
  });
  var handleMouseLeave = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_13__["default"])(function () {
    setOpen(-1);
  });
  var handleKeyDown = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_13__["default"])(function (event) {
    var index = Number(event.currentTarget.getAttribute('data-index'));
    var value = values[index];
    var tenPercents = (max - min) / 10;
    var marksValues = marks.map(function (mark) {
      return mark.value;
    });
    var marksIndex = marksValues.indexOf(value);
    var newValue;

    switch (event.key) {
      case 'Home':
        newValue = min;
        break;

      case 'End':
        newValue = max;
        break;

      case 'PageUp':
        if (step) {
          newValue = value + tenPercents;
        }

        break;

      case 'PageDown':
        if (step) {
          newValue = value - tenPercents;
        }

        break;

      case 'ArrowRight':
      case 'ArrowUp':
        if (step) {
          newValue = value + step;
        } else {
          newValue = marksValues[marksIndex + 1] || marksValues[marksValues.length - 1];
        }

        break;

      case 'ArrowLeft':
      case 'ArrowDown':
        if (step) {
          newValue = value - step;
        } else {
          newValue = marksValues[marksIndex - 1] || marksValues[0];
        }

        break;

      default:
        return;
    } // Prevent scroll of the page


    event.preventDefault();

    if (step) {
      newValue = roundValueToStep(newValue, step, min);
    }

    newValue = clamp(newValue, min, max);

    if (range) {
      var previousValue = newValue;
      newValue = setValueIndex({
        values: values,
        source: valueDerived,
        newValue: newValue,
        index: index
      }).sort(asc);
      focusThumb({
        sliderRef: sliderRef,
        activeIndex: newValue.indexOf(previousValue)
      });
    }

    setValueState(newValue);
    setFocusVisible(index);

    if (onChange) {
      onChange(event, newValue);
    }

    if (onChangeCommitted) {
      onChangeCommitted(event, newValue);
    }
  });
  var previousIndex = react__WEBPACK_IMPORTED_MODULE_4___default.a.useRef();
  var axis = orientation;

  if (theme.direction === 'rtl' && orientation !== "vertical") {
    axis += '-reverse';
  }

  var getFingerNewValue = function getFingerNewValue(_ref3) {
    var finger = _ref3.finger,
        _ref3$move = _ref3.move,
        move = _ref3$move === void 0 ? false : _ref3$move,
        values2 = _ref3.values,
        source = _ref3.source;
    var slider = sliderRef.current;

    var _slider$getBoundingCl = slider.getBoundingClientRect(),
        width = _slider$getBoundingCl.width,
        height = _slider$getBoundingCl.height,
        bottom = _slider$getBoundingCl.bottom,
        left = _slider$getBoundingCl.left;

    var percent;

    if (axis.indexOf('vertical') === 0) {
      percent = (bottom - finger.y) / height;
    } else {
      percent = (finger.x - left) / width;
    }

    if (axis.indexOf('-reverse') !== -1) {
      percent = 1 - percent;
    }

    var newValue;
    newValue = percentToValue(percent, min, max);

    if (step) {
      newValue = roundValueToStep(newValue, step, min);
    } else {
      var marksValues = marks.map(function (mark) {
        return mark.value;
      });
      var closestIndex = findClosest(marksValues, newValue);
      newValue = marksValues[closestIndex];
    }

    newValue = clamp(newValue, min, max);
    var activeIndex = 0;

    if (range) {
      if (!move) {
        activeIndex = findClosest(values2, newValue);
      } else {
        activeIndex = previousIndex.current;
      }

      var previousValue = newValue;
      newValue = setValueIndex({
        values: values2,
        source: source,
        newValue: newValue,
        index: activeIndex
      }).sort(asc);
      activeIndex = newValue.indexOf(previousValue);
      previousIndex.current = activeIndex;
    }

    return {
      newValue: newValue,
      activeIndex: activeIndex
    };
  };

  var handleTouchMove = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_13__["default"])(function (event) {
    var finger = trackFinger(event, touchId);

    if (!finger) {
      return;
    }

    var _getFingerNewValue = getFingerNewValue({
      finger: finger,
      move: true,
      values: values,
      source: valueDerived
    }),
        newValue = _getFingerNewValue.newValue,
        activeIndex = _getFingerNewValue.activeIndex;

    focusThumb({
      sliderRef: sliderRef,
      activeIndex: activeIndex,
      setActive: setActive
    });
    setValueState(newValue);

    if (onChange) {
      onChange(event, newValue);
    }
  });
  var handleTouchEnd = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_13__["default"])(function (event) {
    var finger = trackFinger(event, touchId);

    if (!finger) {
      return;
    }

    var _getFingerNewValue2 = getFingerNewValue({
      finger: finger,
      values: values,
      source: valueDerived
    }),
        newValue = _getFingerNewValue2.newValue;

    setActive(-1);

    if (event.type === 'touchend') {
      setOpen(-1);
    }

    if (onChangeCommitted) {
      onChangeCommitted(event, newValue);
    }

    touchId.current = undefined;
    var doc = Object(_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_12__["default"])(sliderRef.current);
    doc.removeEventListener('mousemove', handleTouchMove);
    doc.removeEventListener('mouseup', handleTouchEnd);
    doc.removeEventListener('touchmove', handleTouchMove);
    doc.removeEventListener('touchend', handleTouchEnd);
  });
  var handleTouchStart = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_13__["default"])(function (event) {
    // Workaround as Safari has partial support for touchAction: 'none'.
    event.preventDefault();
    var touch = event.changedTouches[0];

    if (touch != null) {
      // A number that uniquely identifies the current finger in the touch session.
      touchId.current = touch.identifier;
    }

    var finger = trackFinger(event, touchId);

    var _getFingerNewValue3 = getFingerNewValue({
      finger: finger,
      values: values,
      source: valueDerived
    }),
        newValue = _getFingerNewValue3.newValue,
        activeIndex = _getFingerNewValue3.activeIndex;

    focusThumb({
      sliderRef: sliderRef,
      activeIndex: activeIndex,
      setActive: setActive
    });
    setValueState(newValue);

    if (onChange) {
      onChange(event, newValue);
    }

    var doc = Object(_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_12__["default"])(sliderRef.current);
    doc.addEventListener('touchmove', handleTouchMove);
    doc.addEventListener('touchend', handleTouchEnd);
  });
  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(function () {
    var slider = sliderRef.current;
    slider.addEventListener('touchstart', handleTouchStart);
    var doc = Object(_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_12__["default"])(slider);
    return function () {
      slider.removeEventListener('touchstart', handleTouchStart);
      doc.removeEventListener('mousemove', handleTouchMove);
      doc.removeEventListener('mouseup', handleTouchEnd);
      doc.removeEventListener('touchmove', handleTouchMove);
      doc.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleTouchEnd, handleTouchMove, handleTouchStart]);
  var handleMouseDown = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_13__["default"])(function (event) {
    if (onMouseDown) {
      onMouseDown(event);
    }

    event.preventDefault();
    var finger = trackFinger(event, touchId);

    var _getFingerNewValue4 = getFingerNewValue({
      finger: finger,
      values: values,
      source: valueDerived
    }),
        newValue = _getFingerNewValue4.newValue,
        activeIndex = _getFingerNewValue4.activeIndex;

    focusThumb({
      sliderRef: sliderRef,
      activeIndex: activeIndex,
      setActive: setActive
    });
    setValueState(newValue);

    if (onChange) {
      onChange(event, newValue);
    }

    var doc = Object(_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_12__["default"])(sliderRef.current);
    doc.addEventListener('mousemove', handleTouchMove);
    doc.addEventListener('mouseup', handleTouchEnd);
  });
  var trackOffset = valueToPercent(range ? values[0] : min, min, max);
  var trackLeap = valueToPercent(values[values.length - 1], min, max) - trackOffset;

  var trackStyle = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, axisProps[axis].offset(trackOffset), {}, axisProps[axis].leap(trackLeap));

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({
    ref: handleRef,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.root, classes["color".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_15__["default"])(color))], className, disabled && classes.disabled, marks.length > 0 && marks.some(function (mark) {
      return mark.label;
    }) && classes.marked, track === false && classes.trackFalse, orientation === 'vertical' && classes.vertical, track === 'inverted' && classes.trackInverted),
    onMouseDown: handleMouseDown
  }, other), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: classes.rail
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: classes.track,
    style: trackStyle
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", {
    value: values.join(','),
    name: name,
    type: "hidden"
  }), marks.map(function (mark) {
    var percent = valueToPercent(mark.value, min, max);
    var style = axisProps[axis].offset(percent);
    var markActive;

    if (track === false) {
      markActive = values.indexOf(mark.value) !== -1;
    } else {
      markActive = track === 'normal' && (range ? mark.value >= values[0] && mark.value <= values[values.length - 1] : mark.value <= values[0]) || track === 'inverted' && (range ? mark.value <= values[0] || mark.value >= values[values.length - 1] : mark.value >= values[0]);
    }

    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {
      key: mark.value
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      style: style,
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.mark, markActive && classes.markActive)
    }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
      "aria-hidden": true,
      style: style,
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.markLabel, markActive && classes.markLabelActive)
    }, mark.label));
  }), values.map(function (value, index) {
    var percent = valueToPercent(value, min, max);
    var style = axisProps[axis].offset(percent);
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(ValueLabelComponent, {
      key: index,
      valueLabelFormat: valueLabelFormat,
      valueLabelDisplay: valueLabelDisplay,
      className: classes.valueLabel,
      value: typeof valueLabelFormat === 'function' ? valueLabelFormat(scale(value), index) : valueLabelFormat,
      index: index,
      open: open === index || active === index || valueLabelDisplay === 'on',
      disabled: disabled
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(ThumbComponent, {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(classes.thumb, classes["thumbColor".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_15__["default"])(color))], active === index && classes.active, disabled && classes.disabled, focusVisible === index && classes.focusVisible),
      tabIndex: disabled ? null : 0,
      role: "slider",
      style: style,
      "data-index": index,
      "aria-label": getAriaLabel ? getAriaLabel(index) : ariaLabel,
      "aria-labelledby": ariaLabelledby,
      "aria-orientation": orientation,
      "aria-valuemax": scale(max),
      "aria-valuemin": scale(min),
      "aria-valuenow": scale(value),
      "aria-valuetext": getAriaValueText ? getAriaValueText(scale(value), index) : ariaValuetext,
      onKeyDown: handleKeyDown,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onMouseOver: handleMouseOver,
      onMouseLeave: handleMouseLeave
    }));
  }));
});
 true ? Slider.propTypes = {
  /**
   * The label of the slider.
   */
  'aria-label': Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_7__["chainPropTypes"])(prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, function (props) {
    var range = Array.isArray(props.value || props.defaultValue);

    if (range && props['aria-label'] != null) {
      return new Error('Material-UI: you need to use the `getAriaLabel` prop instead of `aria-label` when using a range slider.');
    }

    return null;
  }),

  /**
   * The id of the element containing a label for the slider.
   */
  'aria-labelledby': prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /**
   * A string value that provides a user-friendly name for the current value of the slider.
   */
  'aria-valuetext': Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_7__["chainPropTypes"])(prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, function (props) {
    var range = Array.isArray(props.value || props.defaultValue);

    if (range && props['aria-valuetext'] != null) {
      return new Error('Material-UI: you need to use the `getAriaValueText` prop instead of `aria-valuetext` when using a range slider.');
    }

    return null;
  }),

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.elementType,

  /**
   * The default element value. Use when the component is not controlled.
   */
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number)]),

  /**
   * If `true`, the slider will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the thumb labels of the slider.
   *
   * @param {number} index The thumb label's index to format.
   * @returns {string}
   */
  getAriaLabel: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,

  /**
   * Accepts a function which returns a string value that provides a user-friendly name for the current value of the slider.
   *
   * @param {number} value The thumb label's value to format.
   * @param {number} index The thumb label's index to format.
   * @returns {string}
   */
  getAriaValueText: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,

  /**
   * Marks indicate predetermined values to which the user can move the slider.
   * If `true` the marks will be spaced according the value of the `step` prop.
   * If an array, it should contain objects with `value` and an optional `label` keys.
   */
  marks: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array]),

  /**
   * The maximum allowed value of the slider.
   * Should not be equal to min.
   */
  max: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,

  /**
   * The minimum allowed value of the slider.
   * Should not be equal to max.
   */
  min: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,

  /**
   * Name attribute of the hidden `input` element.
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /**
   * Callback function that is fired when the slider's value changed.
   *
   * @param {object} event The event source of the callback.
   * @param {any} value The new value.
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,

  /**
   * Callback function that is fired when the `mouseup` is triggered.
   *
   * @param {object} event The event source of the callback.
   * @param {any} value The new value.
   */
  onChangeCommitted: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,

  /**
   * @ignore
   */
  onMouseDown: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,

  /**
   * The slider orientation.
   */
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['horizontal', 'vertical']),

  /**
   * A transformation function, to change the scale of the slider.
   */
  scale: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,

  /**
   * The granularity with which the slider can step through values. (A "discrete" slider.)
   * The `min` prop serves as the origin for the valid values.
   * We recommend (max - min) to be evenly divisible by the step.
   *
   * When step is `null`, the thumb can only be slid onto marks provided with the `marks` prop.
   */
  step: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,

  /**
   * The component used to display the value label.
   */
  ThumbComponent: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.elementType,

  /**
   * The track presentation:
   *
   * - `normal` the track will render a bar representing the slider value.
   * - `inverted` the track will render a bar representing the remaining slider value.
   * - `false` the track will render without a bar.
   */
  track: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['normal', false, 'inverted']),

  /**
   * The value of the slider.
   * For ranged sliders, provide an array with two values.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number)]),

  /**
   * The value label component.
   */
  ValueLabelComponent: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.elementType,

  /**
   * Controls when the value label is displayed:
   *
   * - `auto` the value label will display when the thumb is hovered or focused.
   * - `on` will display persistently.
   * - `off` will never display.
   */
  valueLabelDisplay: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['on', 'auto', 'off']),

  /**
   * The format function the value label's value.
   *
   * When a function is provided, it should have the following signature:
   *
   * - {number} value The value label's value to format
   * - {number} index The value label's index to format
   */
  valueLabelFormat: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_8__["default"])(styles, {
  name: 'MuiSlider'
})(Slider));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Slider/ValueLabel.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Slider/ValueLabel.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");





var styles = function styles(theme) {
  return {
    thumb: {
      '&$open': {
        '& $offset': {
          transform: 'scale(1) translateY(-10px)'
        }
      }
    },
    open: {},
    offset: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      zIndex: 1
    }, theme.typography.body2, {
      fontSize: theme.typography.pxToRem(12),
      lineHeight: 1.2,
      transition: theme.transitions.create(['transform'], {
        duration: theme.transitions.duration.shortest
      }),
      top: -34,
      transformOrigin: 'bottom center',
      transform: 'scale(0)',
      position: 'absolute'
    }),
    circle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 32,
      height: 32,
      borderRadius: '50% 50% 50% 0',
      backgroundColor: 'currentColor',
      transform: 'rotate(-45deg)'
    },
    label: {
      color: theme.palette.primary.contrastText,
      transform: 'rotate(45deg)'
    }
  };
};
/**
 * @ignore - internal component.
 */


function ValueLabel(props) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      open = props.open,
      value = props.value,
      valueLabelDisplay = props.valueLabelDisplay;

  if (valueLabelDisplay === 'off') {
    return children;
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(children.props.className, (open || valueLabelDisplay === 'on') && classes.open, classes.thumb)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.offset, className)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: classes.circle
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: classes.label
  }, value))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_3__["default"])(styles, {
  name: 'PrivateValueLabel'
})(ValueLabel));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Slider/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Slider/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slider */ "./node_modules/@material-ui/core/esm/Slider/Slider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Slider__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Switch/Switch.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Switch/Switch.js ***!
  \*************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/colorManipulator */ "./node_modules/@material-ui/core/esm/styles/colorManipulator.js");
/* harmony import */ var _utils_capitalize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/capitalize */ "./node_modules/@material-ui/core/esm/utils/capitalize.js");
/* harmony import */ var _internal_SwitchBase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../internal/SwitchBase */ "./node_modules/@material-ui/core/esm/internal/SwitchBase.js");


// @inheritedComponent IconButton








var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'inline-flex',
      width: 34 + 12 * 2,
      height: 14 + 12 * 2,
      overflow: 'hidden',
      padding: 12,
      boxSizing: 'border-box',
      position: 'relative',
      flexShrink: 0,
      zIndex: 0,
      // Reset the stacking context.
      verticalAlign: 'middle' // For correct alignment with the text.

    },

    /* Styles applied to the root element if `edge="start"`. */
    edgeStart: {
      marginLeft: -8
    },

    /* Styles applied to the root element if `edge="end"`. */
    edgeEnd: {
      marginRight: -8
    },

    /* Styles applied to the internal `SwitchBase` component's `root` class. */
    switchBase: {
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1,
      // Render above the focus ripple.
      color: theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[400],
      transition: theme.transitions.create(['left', 'transform'], {
        duration: theme.transitions.duration.shortest
      }),
      '&$checked': {
        transform: 'translateX(20px)'
      },
      '&$disabled': {
        color: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[800]
      },
      '&$checked + $track': {
        opacity: 0.5
      },
      '&$disabled + $track': {
        opacity: theme.palette.type === 'light' ? 0.12 : 0.1
      }
    },

    /* Styles applied to the internal SwitchBase component's root element if `color="primary"`. */
    colorPrimary: {
      '&$checked': {
        color: theme.palette.primary.main,
        '&:hover': {
          backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__["fade"])(theme.palette.primary.main, theme.palette.action.hoverOpacity),
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      '&$disabled': {
        color: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[800]
      },
      '&$checked + $track': {
        backgroundColor: theme.palette.primary.main
      },
      '&$disabled + $track': {
        backgroundColor: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white
      }
    },

    /* Styles applied to the internal SwitchBase component's root element if `color="secondary"`. */
    colorSecondary: {
      '&$checked': {
        color: theme.palette.secondary.main,
        '&:hover': {
          backgroundColor: Object(_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_7__["fade"])(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
          '@media (hover: none)': {
            backgroundColor: 'transparent'
          }
        }
      },
      '&$disabled': {
        color: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[800]
      },
      '&$checked + $track': {
        backgroundColor: theme.palette.secondary.main
      },
      '&$disabled + $track': {
        backgroundColor: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white
      }
    },

    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      width: 40,
      height: 24,
      padding: 7,
      '& $thumb': {
        width: 16,
        height: 16
      },
      '& $switchBase': {
        padding: 4,
        '&$checked': {
          transform: 'translateX(16px)'
        }
      }
    },

    /* Pseudo-class applied to the internal `SwitchBase` component's `checked` class. */
    checked: {},

    /* Pseudo-class applied to the internal SwitchBase component's disabled class. */
    disabled: {},

    /* Styles applied to the internal SwitchBase component's input element. */
    input: {
      left: '-100%',
      width: '300%'
    },

    /* Styles used to create the thumb passed to the internal `SwitchBase` component `icon` prop. */
    thumb: {
      boxShadow: theme.shadows[1],
      backgroundColor: 'currentColor',
      width: 20,
      height: 20,
      borderRadius: '50%'
    },

    /* Styles applied to the track element. */
    track: {
      height: '100%',
      width: '100%',
      borderRadius: 14 / 2,
      zIndex: -1,
      transition: theme.transitions.create(['opacity', 'background-color'], {
        duration: theme.transitions.duration.shortest
      }),
      backgroundColor: theme.palette.type === 'light' ? theme.palette.common.black : theme.palette.common.white,
      opacity: theme.palette.type === 'light' ? 0.38 : 0.3
    }
  };
};
var Switch = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function Switch(props, ref) {
  var classes = props.classes,
      className = props.className,
      _props$color = props.color,
      color = _props$color === void 0 ? 'secondary' : _props$color,
      _props$edge = props.edge,
      edge = _props$edge === void 0 ? false : _props$edge,
      _props$size = props.size,
      size = _props$size === void 0 ? 'medium' : _props$size,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className", "color", "edge", "size"]);

  var icon = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: classes.thumb
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, {
      'start': classes.edgeStart,
      'end': classes.edgeEnd
    }[edge], size === "small" && classes["size".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__["default"])(size))])
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_internal_SwitchBase__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "checkbox",
    icon: icon,
    checkedIcon: icon,
    classes: {
      root: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.switchBase, classes["color".concat(Object(_utils_capitalize__WEBPACK_IMPORTED_MODULE_8__["default"])(color))]),
      input: classes.input,
      checked: classes.checked,
      disabled: classes.disabled
    },
    ref: ref
  }, other)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: classes.track
  }));
});
 true ? Switch.propTypes = {
  /**
   * If `true`, the component is checked.
   */
  checked: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['primary', 'secondary', 'default']),

  /**
   * @ignore
   */
  defaultChecked: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the switch will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   */
  edge: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['start', 'end', false]),

  /**
   * The icon to display when the component is unchecked.
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * The id of the `input` element.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_5__["refType"],

  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * If `true`, the `input` element will be required.
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The size of the switch.
   * `small` is equivalent to the dense switch styling.
   */
  size: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['small', 'medium']),

  /**
   * The input component prop `type`.
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The value of the component. The DOM API casts this to a string.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'MuiSwitch'
})(Switch));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Switch/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Switch/index.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Switch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Switch */ "./node_modules/@material-ui/core/esm/Switch/Switch.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Switch__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/internal/SwitchBase.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/internal/SwitchBase.js ***!
  \*******************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");
/* harmony import */ var _utils_useControlled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/useControlled */ "./node_modules/@material-ui/core/esm/utils/useControlled.js");
/* harmony import */ var _FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../FormControl/useFormControl */ "./node_modules/@material-ui/core/esm/FormControl/useFormControl.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");











var styles = {
  root: {
    padding: 9
  },
  checked: {},
  disabled: {},
  input: {
    cursor: 'inherit',
    position: 'absolute',
    opacity: 0,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    margin: 0,
    padding: 0,
    zIndex: 1
  }
};
/**
 * @ignore - internal component.
 */

var SwitchBase = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function SwitchBase(props, ref) {
  var autoFocus = props.autoFocus,
      checkedProp = props.checked,
      checkedIcon = props.checkedIcon,
      classes = props.classes,
      className = props.className,
      defaultChecked = props.defaultChecked,
      disabledProp = props.disabled,
      icon = props.icon,
      id = props.id,
      inputProps = props.inputProps,
      inputRef = props.inputRef,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onFocus = props.onFocus,
      readOnly = props.readOnly,
      required = props.required,
      tabIndex = props.tabIndex,
      type = props.type,
      value = props.value,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["autoFocus", "checked", "checkedIcon", "classes", "className", "defaultChecked", "disabled", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"]);

  var _useControlled = Object(_utils_useControlled__WEBPACK_IMPORTED_MODULE_7__["default"])({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: 'SwitchBase'
  }),
      _useControlled2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useControlled, 2),
      checked = _useControlled2[0],
      setCheckedState = _useControlled2[1];

  var muiFormControl = Object(_FormControl_useFormControl__WEBPACK_IMPORTED_MODULE_8__["default"])();

  var handleFocus = function handleFocus(event) {
    if (onFocus) {
      onFocus(event);
    }

    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    }
  };

  var handleBlur = function handleBlur(event) {
    if (onBlur) {
      onBlur(event);
    }

    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    }
  };

  var handleInputChange = function handleInputChange(event) {
    var newChecked = event.target.checked;
    setCheckedState(newChecked);

    if (onChange) {
      onChange(event, newChecked);
    }
  };

  var disabled = disabledProp;

  if (muiFormControl) {
    if (typeof disabled === 'undefined') {
      disabled = muiFormControl.disabled;
    }
  }

  var hasLabelFor = type === 'checkbox' || type === 'radio';
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_IconButton__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    component: "span",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, className, checked && classes.checked, disabled && classes.disabled),
    disabled: disabled,
    tabIndex: null,
    role: undefined,
    onFocus: handleFocus,
    onBlur: handleBlur,
    ref: ref
  }, other), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    autoFocus: autoFocus,
    checked: checkedProp,
    defaultChecked: defaultChecked,
    className: classes.input,
    disabled: disabled,
    id: hasLabelFor && id,
    name: name,
    onChange: handleInputChange,
    readOnly: readOnly,
    ref: inputRef,
    required: required,
    tabIndex: tabIndex,
    type: type,
    value: value
  }, inputProps)), checked ? checkedIcon : icon);
}); // NB: If changed, please update Checkbox, Switch and Radio
// so that the API documentation is updated.

 true ? SwitchBase.propTypes = {
  /**
   * If `true`, the `input` element will be focused during the first mount.
   */
  autoFocus: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, the component is checked.
   */
  checked: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * @ignore
   */
  defaultChecked: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, the switch will be disabled.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * The icon to display when the component is unchecked.
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node.isRequired,

  /**
   * The id of the `input` element.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * Pass a ref to the `input` element.
   */
  inputRef: _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__["refType"],

  /*
   * @ignore
   */
  name: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * @ignore
   */
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * @ignore
   */
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,

  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * If `true`, the `input` element will be required.
   */
  required: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * @ignore
   */
  tabIndex: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string]),

  /**
   * The input component prop `type`.
   */
  type: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,

  /**
   * The value of the component.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_9__["default"])(styles, {
  name: 'PrivateSwitchBase'
})(SwitchBase));

/***/ }),

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

/***/ })

}]);