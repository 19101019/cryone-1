"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Slider.tsx":
/*!*******************************!*\
  !*** ./components/Slider.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive-carousel */ \"./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _getPrototypeOf(o) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o, p) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o, p);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\nvar Slider = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(Slider, Component1);\n    var _super = _createSuper(Slider);\n    function Slider() {\n        _classCallCheck(this, Slider);\n        return _super.apply(this, arguments);\n    }\n    _createClass(Slider, [\n        {\n            key: \"render\",\n            value: function render() {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                    showThumbs: false,\n                    autoPlay: true,\n                    infiniteLoop: true,\n                    showArrows: false,\n                    showIndicators: false,\n                    showStatus: false,\n                    className: \"border-1 \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-full relative \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute left-32 top-32 text-left\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: \"01/04\"\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\projects\\\\cryone-1\\\\components\\\\Slider.tsx\",\n                                            lineNumber: 18,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                                            className: \" text-6xl\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                    children: \"Thinking\"\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\projects\\\\cryone-1\\\\components\\\\Slider.tsx\",\n                                                    lineNumber: 20,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                    children: \"Differently\"\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\projects\\\\cryone-1\\\\components\\\\Slider.tsx\",\n                                                    lineNumber: 21,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"F:\\\\projects\\\\cryone-1\\\\components\\\\Slider.tsx\",\n                                            lineNumber: 19,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"F:\\\\projects\\\\cryone-1\\\\components\\\\Slider.tsx\",\n                                            lineNumber: 23,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                            className: \"text-2xl\",\n                                            children: \"Creative Territory\"\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\projects\\\\cryone-1\\\\components\\\\Slider.tsx\",\n                                            lineNumber: 24,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"F:\\\\projects\\\\cryone-1\\\\components\\\\Slider.tsx\",\n                                    lineNumber: 17,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"h-4/6\",\n                                    src: \"./images/\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\projects\\\\cryone-1\\\\components\\\\Slider.tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"F:\\\\projects\\\\cryone-1\\\\components\\\\Slider.tsx\",\n                            lineNumber: 16,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-full relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute left-32 top-32 text-left\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: \"02/04\"\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\projects\\\\cryone-1\\\\components\\\\Slider.tsx\",\n                                            lineNumber: 33,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                                            className: \" text-6xl\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                    children: \"Thinking\"\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\projects\\\\cryone-1\\\\components\\\\Slider.tsx\",\n                                                    lineNumber: 35,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                    children: \"Differently\"\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\projects\\\\cryone-1\\\\components\\\\Slider.tsx\",\n                                                    lineNumber: 36,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"F:\\\\projects\\\\cryone-1\\\\components\\\\Slider.tsx\",\n                                            lineNumber: 34,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"F:\\\\projects\\\\cryone-1\\\\components\\\\Slider.tsx\",\n                                            lineNumber: 38,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                            className: \"text-2xl\",\n                                            children: \"Creative Territory\"\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\projects\\\\cryone-1\\\\components\\\\Slider.tsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"F:\\\\projects\\\\cryone-1\\\\components\\\\Slider.tsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"h-4/6\",\n                                    src: \"https://cdn.dribbble.com/userupload/1939488/file/original-915fb0c4bf914eb8e4f0f457f30cf763.jpg?compress=1&resize=800x600&vertical=top\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\projects\\\\cryone-1\\\\components\\\\Slider.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"F:\\\\projects\\\\cryone-1\\\\components\\\\Slider.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-full relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute left-32 top-32 text-left\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: \"03/04\"\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\projects\\\\cryone-1\\\\components\\\\Slider.tsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                                            className: \" text-6xl\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                    children: \"Thinking\"\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\projects\\\\cryone-1\\\\components\\\\Slider.tsx\",\n                                                    lineNumber: 50,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                    children: \"Differently\"\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\projects\\\\cryone-1\\\\components\\\\Slider.tsx\",\n                                                    lineNumber: 51,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"F:\\\\projects\\\\cryone-1\\\\components\\\\Slider.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"F:\\\\projects\\\\cryone-1\\\\components\\\\Slider.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                            className: \"text-2xl\",\n                                            children: \"Creative Territory\"\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\projects\\\\cryone-1\\\\components\\\\Slider.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"F:\\\\projects\\\\cryone-1\\\\components\\\\Slider.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"h-4/6\",\n                                    src: \"https://cdn.dribbble.com/userupload/1939488/file/original-915fb0c4bf914eb8e4f0f457f30cf763.jpg?compress=1&resize=800x600&vertical=top\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\projects\\\\cryone-1\\\\components\\\\Slider.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"F:\\\\projects\\\\cryone-1\\\\components\\\\Slider.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-full relative\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"absolute left-32 top-32 text-left\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: \"04/04\"\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\projects\\\\cryone-1\\\\components\\\\Slider.tsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                                            className: \" text-6xl\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                    children: \"Thinking\"\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\projects\\\\cryone-1\\\\components\\\\Slider.tsx\",\n                                                    lineNumber: 65,\n                                                    columnNumber: 19\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                    children: \"Differently\"\n                                                }, void 0, false, {\n                                                    fileName: \"F:\\\\projects\\\\cryone-1\\\\components\\\\Slider.tsx\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 19\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"F:\\\\projects\\\\cryone-1\\\\components\\\\Slider.tsx\",\n                                            lineNumber: 64,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                            fileName: \"F:\\\\projects\\\\cryone-1\\\\components\\\\Slider.tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                            className: \"text-2xl\",\n                                            children: \"Creative Territory\"\n                                        }, void 0, false, {\n                                            fileName: \"F:\\\\projects\\\\cryone-1\\\\components\\\\Slider.tsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"F:\\\\projects\\\\cryone-1\\\\components\\\\Slider.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: \"h-4/6\",\n                                    src: \"https://cdn.dribbble.com/userupload/1939488/file/original-915fb0c4bf914eb8e4f0f457f30cf763.jpg?compress=1&resize=800x600&vertical=top\"\n                                }, void 0, false, {\n                                    fileName: \"F:\\\\projects\\\\cryone-1\\\\components\\\\Slider.tsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"F:\\\\projects\\\\cryone-1\\\\components\\\\Slider.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"F:\\\\projects\\\\cryone-1\\\\components\\\\Slider.tsx\",\n                    lineNumber: 8,\n                    columnNumber: 11\n                }, this));\n            }\n        }\n    ]);\n    return Slider;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Slider);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7NEdBRTVDTyxDQUFHO29DQUNGUCxTQUFTLEVBQUMsQ0FBTztvQ0FDakJRLEdBQUcsRUFBQyxDQUF1STs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS3ZKLENBQUM7OztXQXpFQ2hCLE1BQU07RUFBU0YsNENBQVM7QUE0RTlCLCtEQUFlRSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TbGlkZXIudHN4PzQzNWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvc3R5bGVzL2Nhcm91c2VsLm1pbi5jc3NcIjsgXHJcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSAncmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbCc7XHJcblxyXG5jbGFzcyBTbGlkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8Q2Fyb3VzZWxcclxuICAgICAgICAgICAgc2hvd1RodW1icz17ZmFsc2V9XHJcbiAgICAgICAgICAgIGF1dG9QbGF5PXt0cnVlfVxyXG4gICAgICAgICAgICBpbmZpbml0ZUxvb3A9e3RydWV9XHJcbiAgICAgICAgICAgIHNob3dBcnJvd3M9e2ZhbHNlfVxyXG4gICAgICAgICAgICBzaG93SW5kaWNhdG9ycz17ZmFsc2V9XHJcbiAgICAgICAgICAgIHNob3dTdGF0dXM9e2ZhbHNlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2JvcmRlci0xICc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLWZ1bGwgcmVsYXRpdmUgJz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWJzb2x1dGUgbGVmdC0zMiB0b3AtMzIgdGV4dC1sZWZ0Jz5cclxuICAgICAgICAgICAgICAgIDxoMj4wMS8wNDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8cHJlIGNsYXNzTmFtZT0nIHRleHQtNnhsJz5cclxuICAgICAgICAgICAgICAgICAgPGgxPlRoaW5raW5nPC9oMT5cclxuICAgICAgICAgICAgICAgICAgPGgxPkRpZmZlcmVudGx5PC9oMT5cclxuICAgICAgICAgICAgICAgIDwvcHJlPlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPSd0ZXh0LTJ4bCc+Q3JlYXRpdmUgVGVycml0b3J5PC9oND5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2gtNC82J1xyXG4gICAgICAgICAgICAgICAgc3JjPScuL2ltYWdlcy8nXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLWZ1bGwgcmVsYXRpdmUnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSBsZWZ0LTMyIHRvcC0zMiB0ZXh0LWxlZnQnPlxyXG4gICAgICAgICAgICAgICAgPGgyPjAyLzA0PC9oMj5cclxuICAgICAgICAgICAgICAgIDxwcmUgY2xhc3NOYW1lPScgdGV4dC02eGwnPlxyXG4gICAgICAgICAgICAgICAgICA8aDE+VGhpbmtpbmc8L2gxPlxyXG4gICAgICAgICAgICAgICAgICA8aDE+RGlmZmVyZW50bHk8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9wcmU+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J3RleHQtMnhsJz5DcmVhdGl2ZSBUZXJyaXRvcnk8L2g0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naC00LzYnXHJcbiAgICAgICAgICAgICAgICBzcmM9J2h0dHBzOi8vY2RuLmRyaWJiYmxlLmNvbS91c2VydXBsb2FkLzE5Mzk0ODgvZmlsZS9vcmlnaW5hbC05MTVmYjBjNGJmOTE0ZWI4ZTRmMGY0NTdmMzBjZjc2My5qcGc/Y29tcHJlc3M9MSZyZXNpemU9ODAweDYwMCZ2ZXJ0aWNhbD10b3AnXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLWZ1bGwgcmVsYXRpdmUnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSBsZWZ0LTMyIHRvcC0zMiB0ZXh0LWxlZnQnPlxyXG4gICAgICAgICAgICAgICAgPGgyPjAzLzA0PC9oMj5cclxuICAgICAgICAgICAgICAgIDxwcmUgY2xhc3NOYW1lPScgdGV4dC02eGwnPlxyXG4gICAgICAgICAgICAgICAgICA8aDE+VGhpbmtpbmc8L2gxPlxyXG4gICAgICAgICAgICAgICAgICA8aDE+RGlmZmVyZW50bHk8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9wcmU+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J3RleHQtMnhsJz5DcmVhdGl2ZSBUZXJyaXRvcnk8L2g0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naC00LzYnXHJcbiAgICAgICAgICAgICAgICBzcmM9J2h0dHBzOi8vY2RuLmRyaWJiYmxlLmNvbS91c2VydXBsb2FkLzE5Mzk0ODgvZmlsZS9vcmlnaW5hbC05MTVmYjBjNGJmOTE0ZWI4ZTRmMGY0NTdmMzBjZjc2My5qcGc/Y29tcHJlc3M9MSZyZXNpemU9ODAweDYwMCZ2ZXJ0aWNhbD10b3AnXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLWZ1bGwgcmVsYXRpdmUnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhYnNvbHV0ZSBsZWZ0LTMyIHRvcC0zMiB0ZXh0LWxlZnQnPlxyXG4gICAgICAgICAgICAgICAgPGgyPjA0LzA0PC9oMj5cclxuICAgICAgICAgICAgICAgIDxwcmUgY2xhc3NOYW1lPScgdGV4dC02eGwnPlxyXG4gICAgICAgICAgICAgICAgICA8aDE+VGhpbmtpbmc8L2gxPlxyXG4gICAgICAgICAgICAgICAgICA8aDE+RGlmZmVyZW50bHk8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9wcmU+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J3RleHQtMnhsJz5DcmVhdGl2ZSBUZXJyaXRvcnk8L2g0PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naC00LzYnXHJcbiAgICAgICAgICAgICAgICBzcmM9J2h0dHBzOi8vY2RuLmRyaWJiYmxlLmNvbS91c2VydXBsb2FkLzE5Mzk0ODgvZmlsZS9vcmlnaW5hbC05MTVmYjBjNGJmOTE0ZWI4ZTRmMGY0NTdmMzBjZjc2My5qcGc/Y29tcHJlc3M9MSZyZXNpemU9ODAweDYwMCZ2ZXJ0aWNhbD10b3AnXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWRlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2Fyb3VzZWwiLCJTbGlkZXIiLCJyZW5kZXIiLCJzaG93VGh1bWJzIiwiYXV0b1BsYXkiLCJpbmZpbml0ZUxvb3AiLCJzaG93QXJyb3dzIiwic2hvd0luZGljYXRvcnMiLCJzaG93U3RhdHVzIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDIiLCJwcmUiLCJoMSIsImJyIiwiaDQiLCJpbWciLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Slider.tsx\n");

/***/ })

});