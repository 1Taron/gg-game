/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html{\\r\\n    padding:0;\\r\\n    margin: 0;\\r\\n}\\r\\n\\r\\nbody{\\r\\n    height: 100vh;\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n}\\r\\n\\r\\n#container{\\r\\n    height: 100%;\\r\\n    width: 100%;\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n}\\r\\n\\r\\n#canvas{\\r\\n    height: 100%;\\r\\n    width: 100%;\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n    background-color: beige;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\r\n\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\nmodule.exports = function (cssWithMappingToString) {\r\n  var list = [];\r\n\r\n  // return the list of modules as css string\r\n  list.toString = function toString() {\r\n    return this.map(function (item) {\r\n      var content = \"\";\r\n      var needLayer = typeof item[5] !== \"undefined\";\r\n      if (item[4]) {\r\n        content += \"@supports (\".concat(item[4], \") {\");\r\n      }\r\n      if (item[2]) {\r\n        content += \"@media \".concat(item[2], \" {\");\r\n      }\r\n      if (needLayer) {\r\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\r\n      }\r\n      content += cssWithMappingToString(item);\r\n      if (needLayer) {\r\n        content += \"}\";\r\n      }\r\n      if (item[2]) {\r\n        content += \"}\";\r\n      }\r\n      if (item[4]) {\r\n        content += \"}\";\r\n      }\r\n      return content;\r\n    }).join(\"\");\r\n  };\r\n\r\n  // import a list of modules into the list\r\n  list.i = function i(modules, media, dedupe, supports, layer) {\r\n    if (typeof modules === \"string\") {\r\n      modules = [[null, modules, undefined]];\r\n    }\r\n    var alreadyImportedModules = {};\r\n    if (dedupe) {\r\n      for (var k = 0; k < this.length; k++) {\r\n        var id = this[k][0];\r\n        if (id != null) {\r\n          alreadyImportedModules[id] = true;\r\n        }\r\n      }\r\n    }\r\n    for (var _k = 0; _k < modules.length; _k++) {\r\n      var item = [].concat(modules[_k]);\r\n      if (dedupe && alreadyImportedModules[item[0]]) {\r\n        continue;\r\n      }\r\n      if (typeof layer !== \"undefined\") {\r\n        if (typeof item[5] === \"undefined\") {\r\n          item[5] = layer;\r\n        } else {\r\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\r\n          item[5] = layer;\r\n        }\r\n      }\r\n      if (media) {\r\n        if (!item[2]) {\r\n          item[2] = media;\r\n        } else {\r\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\r\n          item[2] = media;\r\n        }\r\n      }\r\n      if (supports) {\r\n        if (!item[4]) {\r\n          item[4] = \"\".concat(supports);\r\n        } else {\r\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\r\n          item[4] = supports;\r\n        }\r\n      }\r\n      list.push(item);\r\n    }\r\n  };\r\n  return list;\r\n};\n\n//# sourceURL=webpack://project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\r\n\r\nmodule.exports = function (i) {\r\n  return i[1];\r\n};\n\n//# sourceURL=webpack://project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/html/index.html":
/*!*****************************!*\
  !*** ./src/html/index.html ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"ko\\\">\\r\\n<head>\\r\\n    <meta charset=\\\"UTF-8\\\">\\r\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\r\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n    <title>Document</title>\\r\\n</head>\\r\\n<body>\\r\\n    <div id=\\\"container\\\">\\r\\n        <canvas id=\\\"canvas\\\"></canvas>\\r\\n    </div>\\r\\n</body>\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://project/./src/html/index.html?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://project/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar stylesInDOM = [];\r\n\r\nfunction getIndexByIdentifier(identifier) {\r\n  var result = -1;\r\n\r\n  for (var i = 0; i < stylesInDOM.length; i++) {\r\n    if (stylesInDOM[i].identifier === identifier) {\r\n      result = i;\r\n      break;\r\n    }\r\n  }\r\n\r\n  return result;\r\n}\r\n\r\nfunction modulesToDom(list, options) {\r\n  var idCountMap = {};\r\n  var identifiers = [];\r\n\r\n  for (var i = 0; i < list.length; i++) {\r\n    var item = list[i];\r\n    var id = options.base ? item[0] + options.base : item[0];\r\n    var count = idCountMap[id] || 0;\r\n    var identifier = \"\".concat(id, \" \").concat(count);\r\n    idCountMap[id] = count + 1;\r\n    var indexByIdentifier = getIndexByIdentifier(identifier);\r\n    var obj = {\r\n      css: item[1],\r\n      media: item[2],\r\n      sourceMap: item[3],\r\n      supports: item[4],\r\n      layer: item[5]\r\n    };\r\n\r\n    if (indexByIdentifier !== -1) {\r\n      stylesInDOM[indexByIdentifier].references++;\r\n      stylesInDOM[indexByIdentifier].updater(obj);\r\n    } else {\r\n      var updater = addElementStyle(obj, options);\r\n      options.byIndex = i;\r\n      stylesInDOM.splice(i, 0, {\r\n        identifier: identifier,\r\n        updater: updater,\r\n        references: 1\r\n      });\r\n    }\r\n\r\n    identifiers.push(identifier);\r\n  }\r\n\r\n  return identifiers;\r\n}\r\n\r\nfunction addElementStyle(obj, options) {\r\n  var api = options.domAPI(options);\r\n  api.update(obj);\r\n\r\n  var updater = function updater(newObj) {\r\n    if (newObj) {\r\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\r\n        return;\r\n      }\r\n\r\n      api.update(obj = newObj);\r\n    } else {\r\n      api.remove();\r\n    }\r\n  };\r\n\r\n  return updater;\r\n}\r\n\r\nmodule.exports = function (list, options) {\r\n  options = options || {};\r\n  list = list || [];\r\n  var lastIdentifiers = modulesToDom(list, options);\r\n  return function update(newList) {\r\n    newList = newList || [];\r\n\r\n    for (var i = 0; i < lastIdentifiers.length; i++) {\r\n      var identifier = lastIdentifiers[i];\r\n      var index = getIndexByIdentifier(identifier);\r\n      stylesInDOM[index].references--;\r\n    }\r\n\r\n    var newLastIdentifiers = modulesToDom(newList, options);\r\n\r\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\r\n      var _identifier = lastIdentifiers[_i];\r\n\r\n      var _index = getIndexByIdentifier(_identifier);\r\n\r\n      if (stylesInDOM[_index].references === 0) {\r\n        stylesInDOM[_index].updater();\r\n\r\n        stylesInDOM.splice(_index, 1);\r\n      }\r\n    }\r\n\r\n    lastIdentifiers = newLastIdentifiers;\r\n  };\r\n};\n\n//# sourceURL=webpack://project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar memo = {};\r\n/* istanbul ignore next  */\r\n\r\nfunction getTarget(target) {\r\n  if (typeof memo[target] === \"undefined\") {\r\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\r\n\r\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\r\n      try {\r\n        // This will throw an exception if access to iframe is blocked\r\n        // due to cross-origin restrictions\r\n        styleTarget = styleTarget.contentDocument.head;\r\n      } catch (e) {\r\n        // istanbul ignore next\r\n        styleTarget = null;\r\n      }\r\n    }\r\n\r\n    memo[target] = styleTarget;\r\n  }\r\n\r\n  return memo[target];\r\n}\r\n/* istanbul ignore next  */\r\n\r\n\r\nfunction insertBySelector(insert, style) {\r\n  var target = getTarget(insert);\r\n\r\n  if (!target) {\r\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\r\n  }\r\n\r\n  target.appendChild(style);\r\n}\r\n\r\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction insertStyleElement(options) {\r\n  var element = document.createElement(\"style\");\r\n  options.setAttributes(element, options.attributes);\r\n  options.insert(element, options.options);\r\n  return element;\r\n}\r\n\r\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction setAttributesWithoutAttributes(styleElement) {\r\n  var nonce =  true ? __webpack_require__.nc : 0;\r\n\r\n  if (nonce) {\r\n    styleElement.setAttribute(\"nonce\", nonce);\r\n  }\r\n}\r\n\r\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction apply(styleElement, options, obj) {\r\n  var css = \"\";\r\n\r\n  if (obj.supports) {\r\n    css += \"@supports (\".concat(obj.supports, \") {\");\r\n  }\r\n\r\n  if (obj.media) {\r\n    css += \"@media \".concat(obj.media, \" {\");\r\n  }\r\n\r\n  var needLayer = typeof obj.layer !== \"undefined\";\r\n\r\n  if (needLayer) {\r\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\r\n  }\r\n\r\n  css += obj.css;\r\n\r\n  if (needLayer) {\r\n    css += \"}\";\r\n  }\r\n\r\n  if (obj.media) {\r\n    css += \"}\";\r\n  }\r\n\r\n  if (obj.supports) {\r\n    css += \"}\";\r\n  }\r\n\r\n  var sourceMap = obj.sourceMap;\r\n\r\n  if (sourceMap && typeof btoa !== \"undefined\") {\r\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\r\n  } // For old IE\r\n\r\n  /* istanbul ignore if  */\r\n\r\n\r\n  options.styleTagTransform(css, styleElement, options.options);\r\n}\r\n\r\nfunction removeStyleElement(styleElement) {\r\n  // istanbul ignore if\r\n  if (styleElement.parentNode === null) {\r\n    return false;\r\n  }\r\n\r\n  styleElement.parentNode.removeChild(styleElement);\r\n}\r\n/* istanbul ignore next  */\r\n\r\n\r\nfunction domAPI(options) {\r\n  var styleElement = options.insertStyleElement(options);\r\n  return {\r\n    update: function update(obj) {\r\n      apply(styleElement, options, obj);\r\n    },\r\n    remove: function remove() {\r\n      removeStyleElement(styleElement);\r\n    }\r\n  };\r\n}\r\n\r\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction styleTagTransform(css, styleElement) {\r\n  if (styleElement.styleSheet) {\r\n    styleElement.styleSheet.cssText = css;\r\n  } else {\r\n    while (styleElement.firstChild) {\r\n      styleElement.removeChild(styleElement.firstChild);\r\n    }\r\n\r\n    styleElement.appendChild(document.createTextNode(css));\r\n  }\r\n}\r\n\r\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/delay.js":
/*!*************************!*\
  !*** ./src/js/delay.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst node_1 = __importDefault(__webpack_require__(/*! ./node */ \"./src/js/node.js\"));\r\nconst delay_passive__png_1 = __importDefault(__webpack_require__(/*! ../image/delay(passive).png */ \"./src/image/delay(passive).png\"));\r\nconst delay_Active__png_1 = __importDefault(__webpack_require__(/*! ../image/delay(Active).png */ \"./src/image/delay(Active).png\"));\r\nclass delay {\r\n    constructor(x, y, ctx) {\r\n        this.inputNode = [[null, true]];\r\n        this.nextNode = [];\r\n        this.inputPivot = [];\r\n        this.outputPivot = [];\r\n        this.click = () => {\r\n            this.activeMenu = !this.activeMenu;\r\n        };\r\n        this.activeMenu = false;\r\n        this.menuClick = (x, y) => {\r\n            if (x > 5 && x < 40 && y > 5 && y < 25) {\r\n                node_1.default.nodeid = this.id;\r\n            }\r\n            else if (x > 5 && x < 40 && y > 25 && y < 40) {\r\n                this.inputNode.forEach(e => {\r\n                    if (e[0] != null)\r\n                        node_1.default.nodes[e[0]].nextNode.filter(e2 => {\r\n                            return e2[0] != this.id;\r\n                        });\r\n                });\r\n                this.inputNode = [];\r\n            }\r\n            else if (x > 5 && x < 40 && y > 45 && y < 60) {\r\n                let temp = prompt(\"시간을 입력해주세요\");\r\n                if (temp != null)\r\n                    this.delay = Number.parseInt(temp);\r\n            }\r\n        };\r\n        this.menuDraw = () => {\r\n            this.context.beginPath();\r\n            this.context.fillStyle = 'white';\r\n            this.context.fillRect(this.position.x, this.position.y, 50, 80);\r\n            this.context.fillStyle = 'blcak';\r\n            this.context.fillText(\"노드 연결\", this.position.x + 5, this.position.y + 5);\r\n            this.context.fillText(\"연결 해제\", this.position.x + 5, this.position.y + 25);\r\n            this.context.fillText(\"시간 설정\", this.position.x + 5, this.position.y + 45);\r\n        };\r\n        this.drow = () => {\r\n            this.context.beginPath();\r\n            this.context.drawImage(this.nowImage, this.position.x - node_1.default.correction, this.position.y - node_1.default.correction);\r\n            this.context.closePath();\r\n        };\r\n        this.play = () => {\r\n            if (this.inputNode[0][1] == false)\r\n                return;\r\n            this.nowImage.src = this.activePath;\r\n            setTimeout(() => {\r\n                this.nextNode.forEach(e => {\r\n                    this.nowImage.src = this.nonActivePath;\r\n                    node_1.default.nodes[e[0]].inputNode.forEach(e2 => {\r\n                        if (e2[0] == this.id)\r\n                            e2[1] = true;\r\n                    });\r\n                    node_1.default.nodes[e[0]].play();\r\n                });\r\n            }, this.delay);\r\n        };\r\n        this.id = crypto.randomUUID();\r\n        this.nowImage = new Image();\r\n        this.activePath = delay_passive__png_1.default;\r\n        this.nonActivePath = delay_Active__png_1.default;\r\n        this.context = ctx;\r\n        this.position = { x, y };\r\n        this.delay = 1000;\r\n    }\r\n}\r\nexports[\"default\"] = delay;\r\n\n\n//# sourceURL=webpack://project/./src/js/delay.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst style_css_1 = __importDefault(__webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\"));\r\nconst ic_launcher_png_1 = __importDefault(__webpack_require__(/*! ../image/ic_launcher.png */ \"./src/image/ic_launcher.png\"));\r\nconst index_html_1 = __importDefault(__webpack_require__(/*! ../html/index.html */ \"./src/html/index.html\"));\r\nconst node_1 = __importDefault(__webpack_require__(/*! ./node */ \"./src/js/node.js\"));\r\nconst nodeMenu_1 = __importDefault(__webpack_require__(/*! ./nodeMenu */ \"./src/js/nodeMenu.js\"));\r\nconst continer = document.querySelector('#container');\r\nconst canvas = document.querySelector('#continer');\r\nconst ctx = canvas.getContext('2d');\r\nconst nM = new nodeMenu_1.default(ctx);\r\ncanvas.width = continer.clientWidth;\r\ncanvas.height = continer.clientHeight;\r\nnode_1.default.audioList.forEach(e => {\r\n    e.loop = true;\r\n    e.preservesPitch = false;\r\n});\r\nconst AllDraw = () => {\r\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\r\n    for (const v of Object.values(node_1.default.nodes)) {\r\n        v.drow();\r\n        if (v.activeMenu)\r\n            v.menuDraw();\r\n    }\r\n    if (nM.Active)\r\n        nM.draw();\r\n};\r\nconst nodeMenuEvent = (e) => {\r\n    for (const v of Object.values(node_1.default.nodes)) {\r\n        let tx = e.clientX - v.position.x - node_1.default.correction;\r\n        let ty = e.clientY - v.position.y - node_1.default.correction;\r\n        if (tx > -50 && tx < 50 && ty > -50 && ty < 50) {\r\n            v.click();\r\n            return;\r\n        }\r\n        else if (v.activeMenu) {\r\n            v.menuClick(tx, ty);\r\n            v.activeMenu = false;\r\n            return;\r\n        }\r\n    }\r\n    if (nM.Active) {\r\n        let tx = e.clientX - nM.position.x;\r\n        let ty = e.clientY - nM.position.y;\r\n        nM.click(tx, ty);\r\n    }\r\n    nM.position = { x: e.clientX, y: e.clientY };\r\n    nM.Active = !nM.Active;\r\n    nM.setTime();\r\n};\r\ncanvas.addEventListener('click', nodeMenuEvent);\r\nrequestAnimationFrame(AllDraw);\r\nconsole.log(style_css_1.default, ic_launcher_png_1.default, index_html_1.default);\r\n\n\n//# sourceURL=webpack://project/./src/js/index.js?");

/***/ }),

/***/ "./src/js/node.js":
/*!************************!*\
  !*** ./src/js/node.js ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar interfaces;\r\n(function (interfaces) {\r\n    interfaces.correction = 50;\r\n    interfaces.audioList = [\r\n        document.createElement('audio'),\r\n        document.createElement('audio'),\r\n        document.createElement('audio'),\r\n        document.createElement('audio'),\r\n        document.createElement('audio'),\r\n        document.createElement('audio'),\r\n        document.createElement('audio'),\r\n        document.createElement('audio')\r\n    ];\r\n    interfaces.nodes = {};\r\n    class MenuUI {\r\n    }\r\n    interfaces.MenuUI = MenuUI;\r\n})(interfaces || (interfaces = {}));\r\nexports[\"default\"] = interfaces;\r\n\n\n//# sourceURL=webpack://project/./src/js/node.js?");

/***/ }),

/***/ "./src/js/nodeMenu.js":
/*!****************************!*\
  !*** ./src/js/nodeMenu.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst nodeMenu_png_1 = __importDefault(__webpack_require__(/*! ../image/nodeMenu.png */ \"./src/image/nodeMenu.png\"));\r\nconst soundBlock_1 = __importDefault(__webpack_require__(/*! ./soundBlock */ \"./src/js/soundBlock.js\"));\r\nconst delay_1 = __importDefault(__webpack_require__(/*! ./delay */ \"./src/js/delay.js\"));\r\nconst nodeMenuImgElement = new Image();\r\nnodeMenuImgElement.src = nodeMenu_png_1.default;\r\nclass nodeMenu {\r\n    constructor(ctx) {\r\n        this.aTime = new Date().getTime();\r\n        this.position = { x: 0, y: 0 };\r\n        this.Active = false;\r\n        this.setTime = () => {\r\n            this.aTime = new Date().getTime();\r\n        };\r\n        this.draw = () => {\r\n            let dt = new Date().getTime() - this.aTime;\r\n            if (dt > 150)\r\n                dt = 150;\r\n            this.ctx.drawImage(nodeMenuImgElement, this.position.x - 75, this.position.y - 75, dt, dt);\r\n        };\r\n        this.click = (x, y) => {\r\n            if (y > 60 && y < 96 && x > 4 && x > 40) {\r\n            }\r\n            else if (y > 41 && y < 81 && x > 52 && x < 81) {\r\n                new soundBlock_1.default(this.position.x, this.position.y, this.ctx);\r\n            }\r\n            else if (y > 9 && y < 37 && x > 63 && x < 91) {\r\n                new delay_1.default(this.position.x, this.position.y, this.ctx);\r\n            }\r\n        };\r\n        this.ctx = ctx;\r\n    }\r\n}\r\nexports[\"default\"] = nodeMenu;\r\n\n\n//# sourceURL=webpack://project/./src/js/nodeMenu.js?");

/***/ }),

/***/ "./src/js/soundBlock.js":
/*!******************************!*\
  !*** ./src/js/soundBlock.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst node_1 = __importDefault(__webpack_require__(/*! ./node */ \"./src/js/node.js\"));\r\nconst noteblock_Active__png_1 = __importDefault(__webpack_require__(/*! ../image/noteblock(Active).png */ \"./src/image/noteblock(Active).png\"));\r\nconst noteblock_passive__png_1 = __importDefault(__webpack_require__(/*! ../image/noteblock(passive).png */ \"./src/image/noteblock(passive).png\"));\r\nclass soundBlock1 {\r\n    constructor(x, y, ctx) {\r\n        this.inputNode = [[null, true]];\r\n        this.nextNode = [];\r\n        this.delay = 100;\r\n        this.inputPivot = [];\r\n        this.outputPivot = [];\r\n        this.soundRate = 1;\r\n        this.drow = () => {\r\n            this.context.beginPath();\r\n            this.context.drawImage(this.nowImage, this.position.x - node_1.default.correction, this.position.y - node_1.default.correction);\r\n            this.context.closePath();\r\n        };\r\n        this.play = () => {\r\n            if (this.inputNode[0][1] == false)\r\n                return;\r\n            let size = node_1.default.audioList.length;\r\n            let audio = node_1.default.audioList[0];\r\n            for (let i = 0; i < size; ++i) {\r\n                if (node_1.default.audioList[i].src == \"\") {\r\n                    audio = node_1.default.audioList[i];\r\n                    audio.playbackRate = this.soundRate;\r\n                    audio.src = this.soundPath;\r\n                    audio.play();\r\n                }\r\n                break;\r\n            }\r\n            this.nowImage.src = this.activePath;\r\n            setTimeout(() => {\r\n                audio.pause();\r\n                audio.src = \"\";\r\n                this.nextNode.forEach(e => {\r\n                    if (e[0] != null) {\r\n                        this.nowImage.src = this.nonActivePath;\r\n                        node_1.default.nodes[e[0]].inputNode.forEach(e2 => {\r\n                            if (e2[0] == this.id)\r\n                                e2[1] = true;\r\n                        });\r\n                        node_1.default.nodes[e[0]].play();\r\n                    }\r\n                });\r\n            }, this.delay);\r\n        };\r\n        this.click = () => {\r\n            this.activeMenu = !this.activeMenu;\r\n        };\r\n        this.activeMenu = false;\r\n        this.menuClick = (x, y) => {\r\n            if (x > 5 && x < 40 && y > 5 && y < 25) {\r\n                node_1.default.nodeid = this.id;\r\n            }\r\n            else if (x > 5 && x < 40 && y > 25 && y < 40) {\r\n                this.inputNode.forEach(e => {\r\n                    if (e[0] != null)\r\n                        node_1.default.nodes[e[0]].nextNode.filter(e2 => {\r\n                            return e2[0] != this.id;\r\n                        });\r\n                });\r\n                this.inputNode = [];\r\n            }\r\n            else if (x > 5 && x < 40 && y > 45 && y < 60) {\r\n                let temp = prompt(\"시간을 입력해주세요\");\r\n                if (temp != null)\r\n                    this.delay = Number.parseInt(temp);\r\n            }\r\n            else if (x > 5 && x < 40 && y > 65 && y < 80) {\r\n                let temp = prompt(\"피치를 입력해주세요\");\r\n                if (temp != null)\r\n                    this.soundRate = Number.parseInt(temp);\r\n            }\r\n        };\r\n        this.menuDraw = () => {\r\n            this.context.beginPath();\r\n            this.context.fillStyle = 'white';\r\n            this.context.fillRect(this.position.x, this.position.y, 50, 100);\r\n            this.context.fillStyle = 'blcak';\r\n            this.context.fillText(\"노드 연결\", this.position.x + 5, this.position.y + 5);\r\n            this.context.fillText(\"연결 해제\", this.position.x + 5, this.position.y + 25);\r\n            this.context.fillText(\"시간 설정\", this.position.x + 5, this.position.y + 45);\r\n            this.context.fillText(\"피치 설정\", this.position.x + 5, this.position.y + 65);\r\n        };\r\n        this.id = crypto.randomUUID();\r\n        node_1.default.nodes[this.id] = this;\r\n        this.position = { x, y };\r\n        this.context = ctx;\r\n        this.nowImage = new Image();\r\n        this.activePath = noteblock_passive__png_1.default;\r\n        this.nonActivePath = noteblock_Active__png_1.default;\r\n        this.nowImage.src = this.activePath;\r\n        this.soundPath = \"./base/drum\";\r\n    }\r\n}\r\nexports[\"default\"] = soundBlock1;\r\n\n\n//# sourceURL=webpack://project/./src/js/soundBlock.js?");

/***/ }),

/***/ "./src/image/delay(Active).png":
/*!*************************************!*\
  !*** ./src/image/delay(Active).png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dc0a9ebfa18b618e9008.png\";\n\n//# sourceURL=webpack://project/./src/image/delay(Active).png?");

/***/ }),

/***/ "./src/image/delay(passive).png":
/*!**************************************!*\
  !*** ./src/image/delay(passive).png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5ab3fb4c8f41a1b3aedd.png\";\n\n//# sourceURL=webpack://project/./src/image/delay(passive).png?");

/***/ }),

/***/ "./src/image/ic_launcher.png":
/*!***********************************!*\
  !*** ./src/image/ic_launcher.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9a2b2a3328a2209dca28.png\";\n\n//# sourceURL=webpack://project/./src/image/ic_launcher.png?");

/***/ }),

/***/ "./src/image/nodeMenu.png":
/*!********************************!*\
  !*** ./src/image/nodeMenu.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1a06dec3368c37882403.png\";\n\n//# sourceURL=webpack://project/./src/image/nodeMenu.png?");

/***/ }),

/***/ "./src/image/noteblock(Active).png":
/*!*****************************************!*\
  !*** ./src/image/noteblock(Active).png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"acfc1856109f68284df4.png\";\n\n//# sourceURL=webpack://project/./src/image/noteblock(Active).png?");

/***/ }),

/***/ "./src/image/noteblock(passive).png":
/*!******************************************!*\
  !*** ./src/image/noteblock(passive).png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c54c2448f02fe48d54f6.png\";\n\n//# sourceURL=webpack://project/./src/image/noteblock(passive).png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;