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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/restaurant.jpg */ \"./src/assets/restaurant.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Dancing+Script&family=Josefin+Sans:wght@300;500;700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n  color: rgb(243, 243, 243);\\n  font-family: \\\"Josefin Sans\\\", sans-serif;\\n  font-weight: 300;\\n  z-index: 10;\\n}\\n\\nhtml,\\nbody {\\n  height: 100%;\\n}\\n\\nbody {\\n  background-color: rgb(0, 0, 0);\\n  display: flex;\\n  flex-direction: column;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: cover;\\n}\\n\\n.background-color {\\n  position: fixed;\\n  height: 100vh;\\n  width: 100vw;\\n  background-color: rgba(0, 0, 0, 0.603);\\n  z-index: 1;\\n}\\n\\n.header {\\n  height: fit-content;\\n  padding: 5px 0;\\n  position: relative;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  font-size: 2rem;\\n  border-bottom: 2px solid rgba(243, 243, 243, 0.068);\\n}\\n\\n.header > p {\\n  font-family: \\\"Dancing Script\\\", sans-serif;\\n  position: absolute;\\n  left: 20px;\\n}\\n\\nnav > ul {\\n  width: 450px;\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n  justify-items: center;\\n}\\n\\n.nav-btn {\\n  text-align: center;\\n  width: fit-content;\\n  list-style: none;\\n  padding: 5px;\\n  padding-top: 8px;\\n}\\n\\n.nav-btn:hover {\\n  cursor: pointer;\\n  text-shadow: 0 0 5px rgba(255, 255, 255, 0.808);\\n  box-shadow: 0 0 3px rgba(255, 255, 255, 0.363);\\n  border-radius: 8px;\\n}\\n\\n.current-page {\\n  font-size: 2.2rem;\\n  background-color: rgba(255, 255, 255, 0.089);\\n  border-radius: 8px;\\n  box-shadow: 0 0 3px rgba(255, 255, 255, 0.363);\\n  text-shadow: 0 0 3px rgba(243, 243, 243, 0.576);\\n}\\n\\n#location-img {\\n  width: 300px;\\n}\\n\\n.content {\\n  display: flex;\\n  flex-grow: 1;\\n  justify-content: center;\\n}\\n\\n#home-page {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  margin-top: 8%;\\n}\\n\\n#pizza-img-120px {\\n  width: 120px;\\n}\\n\\n#title {\\n  font-family: \\\"Dancing Script\\\", sans-serif;\\n  font-size: 90px;\\n  font-weight: 400;\\n  padding-bottom: 50px;\\n}\\n\\n#opening-hours-heading,\\n.opening-hours-container > h3:nth-of-type(1) {\\n  font-weight: 500;\\n}\\n\\n#opening-hours-heading,\\n.opening-hours-container {\\n  padding-bottom: 15px;\\n}\\n\\n.opening-hours-container {\\n  display: flex;\\n  gap: 20px;\\n}\\n\\n#home-page > .btn {\\n  margin-top: 50px;\\n}\\n\\n.btn {\\n  width: 150px;\\n  height: 35px;\\n  padding-top: 3px;\\n  font-size: 1.5rem;\\n  background-color: rgba(0, 0, 0, 0);\\n  border: 1px solid rgb(243, 243, 243);\\n  border-radius: 7px;\\n}\\n\\n.btn:hover {\\n  background-color: rgba(255, 255, 255, 0.089);\\n  cursor: pointer;\\n}\\n\\n#about-page {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\n.about-item,\\n#menu-page {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-self: center;\\n  background-color: rgba(0, 0, 0, 0.678);\\n  box-shadow: 0 0 5px 1px rgba(255, 255, 255, 0.144);\\n  border-radius: 15px;\\n}\\n\\n.about-item {\\n  text-align: center;\\n  padding: 5%;\\n}\\n\\n#find-us-container {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 20px;\\n}\\n\\n#find-us-container > div {\\n  display: flex;\\n  align-items: center;\\n}\\n\\n#map-marker-icon {\\n  width: 25px;\\n}\\n\\n#location-img {\\n  width: 250px;\\n  border-radius: 5px;\\n}\\n\\n#about-us-container {\\n  gap: 20px;\\n}\\n\\n#pizza-img-70px {\\n  width: 70px;\\n}\\n\\n.about-us-text {\\n  font-size: 1.4rem;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 1.2rem;\\n}\\n\\n#about-us-btns {\\n  padding-top: 10px;\\n  display: flex;\\n  gap: 40px;\\n}\\n\\n#follow-us-container {\\n  gap: 30px;\\n}\\n\\n#socials-container {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr;\\n  gap: 20px;\\n  column-gap: 30px;\\n}\\n\\n.social-icon {\\n  width: 50px;\\n}\\n\\n#menu-page {\\n  width: 700px;\\n  height: clamp(790px, 80%, 860px);\\n  margin-top: 20px;\\n  padding: 20px;\\n}\\n\\n#menu-title {\\n  font-family: \\\"Dancing Script\\\", sans-serif;\\n  font-size: 3rem;\\n}\\n\\n#menu-main-header {\\n  padding-top: 10px;\\n  font-size: 2rem;\\n  padding-bottom: 20px;\\n}\\n\\n.menu-section-header {\\n  padding-top: 25px;\\n  font-size: 1.5rem;\\n  border-image: linear-gradient(\\n      90deg,\\n      rgba(0, 0, 0, 0) 10%,\\n      rgba(243, 243, 243, 0.452) 30%,\\n      rgba(243, 243, 243, 0.452) 70%,\\n      rgba(0, 0, 0, 0) 90%\\n    )\\n    1;\\n  border-top: 1px solid transparent;\\n  width: 100%;\\n  text-align: center;\\n}\\n\\n#mains-container,\\n#desserts-container {\\n  width: 520px;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  justify-items: center;\\n  padding: 15px 0 30px 0;\\n  row-gap: 30px;\\n  column-gap: 50px;\\n}\\n\\n.menu-item {\\n  font-size: 17px;\\n  width: fit-content;\\n  display: grid;\\n  grid-template-columns: max-content 1fr;\\n  grid-template-rows: 2rem 1fr;\\n  align-items: center;\\n}\\n\\n.menu-item p:not(:nth-of-type(3)) {\\n  font-weight: 500;\\n}\\n\\n.menu-item p:nth-last-of-type(2) {\\n  justify-self: flex-end;\\n}\\n\\n.menu-item p:nth-of-type(3) {\\n  grid-column: span 2;\\n}\\n\\n.image-credits {\\n  align-self: center;\\n  margin-top: 10px;\\n  margin-bottom: 5px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/about-page.js":
/*!***************************!*\
  !*** ./src/about-page.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadAboutPage\": () => (/* binding */ loadAboutPage)\n/* harmony export */ });\nfunction loadAboutPage() {\n  const content = document.querySelector(\".content\");\n\n  // Create main container\n  const aboutPage = document.createElement(\"div\");\n  aboutPage.setAttribute(\"id\", \"about-page\");\n  content.appendChild(aboutPage);\n\n  // Create the three sections\n  const findUsContainer = document.createElement(\"div\");\n  findUsContainer.classList.add(\"about-item\");\n  findUsContainer.setAttribute(\"id\", \"find-us-container\");\n  aboutPage.appendChild(findUsContainer);\n\n  const aboutUsContainer = document.createElement(\"div\");\n  aboutUsContainer.classList.add(\"about-item\");\n  aboutUsContainer.setAttribute(\"id\", \"about-us-container\");\n  aboutPage.appendChild(aboutUsContainer);\n\n  const followUsContainer = document.createElement(\"div\");\n  followUsContainer.classList.add(\"about-item\");\n  followUsContainer.setAttribute(\"id\", \"follow-us-container\");\n  aboutPage.appendChild(followUsContainer);\n\n  // Populate Find Us section\n  const findUsTitle = document.createElement(\"h1\");\n  findUsTitle.textContent = \"Find Us\";\n  findUsContainer.appendChild(findUsTitle);\n\n  const findUsLocation = document.createElement(\"div\");\n  findUsContainer.appendChild(findUsLocation);\n\n  const markerIcon = document.createElement(\"img\");\n  markerIcon.src = \"./images/map-marker-outline.png\";\n  markerIcon.setAttribute(\"id\", \"map-marker-icon\");\n  findUsLocation.appendChild(markerIcon);\n\n  const findUsText = document.createElement(\"p\");\n  findUsText.textContent = \"Capital Boulevard. Los Santos, SA 69420\";\n  findUsLocation.appendChild(findUsText);\n\n  const mapImg = document.createElement(\"img\");\n  mapImg.setAttribute(\"id\", \"location-img\");\n  mapImg.setAttribute(\"alt\", \"Fake location on GTA V map\");\n  mapImg.src = \"./images/maplocation.png\";\n  findUsContainer.appendChild(mapImg);\n\n  // Populate About Us section\n  const pizzaImg = document.createElement(\"img\");\n  pizzaImg.setAttribute(\"id\", \"pizza-img-70px\");\n  pizzaImg.setAttribute(\"alt\", \"Cartoon Pizza Outline\");\n  pizzaImg.src = \"./images/pizza-logo.svg\";\n  aboutUsContainer.appendChild(pizzaImg);\n\n  const aboutUsTitle = document.createElement(\"h1\");\n  aboutUsTitle.textContent = \"About Us\";\n  aboutUsContainer.appendChild(aboutUsTitle);\n\n  const aboutUsFullText = document.createElement(\"div\");\n  aboutUsFullText.classList.add(\"about-us-text\");\n  aboutUsContainer.appendChild(aboutUsFullText);\n\n  const aboutUsText1 = document.createElement(\"p\");\n  aboutUsText1.textContent =\n    \"Hi there! Welcome to the home of Odin's Fakeria. If you haven't noticed already, this restaurant is completely fake! Really, it doesn't even exist!\";\n  aboutUsFullText.appendChild(aboutUsText1);\n\n  const aboutUsText2 = document.createElement(\"p\");\n  aboutUsText2.textContent =\n    \"Founded in 2023, we have worked hard to strive for absolutely nothing because we're not real. All of our products are made from 100% \\xa0\\xa0\\xa0\\xa0\\xa0\\xa0\\xa0 directly from the source, so we can ensure that our food will never exist. Forever.\";\n  aboutUsFullText.appendChild(aboutUsText2);\n\n  const aboutUsText3 = document.createElement(\"p\");\n  aboutUsText3.textContent = \"So come on down to Odin's Fakeria today and get your first meal completely free! (and the rest)\";\n  aboutUsFullText.appendChild(aboutUsText3);\n\n  const btnsContainer = document.createElement(\"div\");\n  btnsContainer.setAttribute(\"id\", \"about-us-btns\");\n  aboutUsContainer.appendChild(btnsContainer);\n\n  function createButton(btnText) {\n    const btn = document.createElement(\"button\");\n    btn.classList.add(\"btn\");\n    btn.textContent = btnText;\n    btnsContainer.appendChild(btn);\n  }\n\n  createButton(\"Book Table\");\n  createButton(\"View Menu\");\n\n  // Populate Follow Us section\n  const followUsTitle = document.createElement(\"h1\");\n  followUsTitle.textContent = \"Follow Us\";\n  followUsContainer.appendChild(followUsTitle);\n\n  const socialsContainer = document.createElement(\"div\");\n  socialsContainer.setAttribute(\"id\", \"socials-container\");\n  followUsContainer.appendChild(socialsContainer);\n\n  function createIcon(social, link, imgSrc) {\n    const socialLink = document.createElement(\"a\");\n    socialLink.setAttribute(\"href\", `${link}`);\n\n    const socialIcon = document.createElement(\"img\");\n    socialIcon.classList.add(\"social-icon\");\n    socialIcon.setAttribute(\"id\", `${social}-icon`);\n    socialIcon.src = imgSrc;\n\n    socialLink.appendChild(socialIcon);\n    socialsContainer.appendChild(socialLink);\n  }\n\n  createIcon(\"twitter\", \"https://www.twitter.com\", \"./images/003-twitter.png\");\n  createIcon(\n    \"instagram\",\n    \"https://www.instagram.com\",\n    \"./images/006-instagram.png\"\n  );\n  createIcon(\"tiktok\", \"https://www.tiktok.com\", \"./images/005-tik-tok.png\");\n  createIcon(\n    \"facebook\",\n    \"https://www.facebook.com\",\n    \"./images/004-facebook.png\"\n  );\n  createIcon(\"youtube\", \"https://www.youtube.com\", \"./images/002-youtube.png\");\n  createIcon(\n    \"pinterest\",\n    \"https://www.pinterest.com\",\n    \"./images/001-pinterest.png\"\n  );\n\n  const iconCredits = document.createElement(\"p\");\n  iconCredits.classList.add(\"icon-credits\");\n\n  const creatorLink = document.createElement(\"a\");\n  creatorLink.textContent = \"Freepik\";\n  creatorLink.setAttribute(\"href\", \"https://www.freepik.com\");\n  const siteLink = document.createElement(\"a\");\n  siteLink.textContent = \"Flaticon\";\n  siteLink.setAttribute(\"href\", \"https://www.flaticon.com\");\n\n  const ptext1 = document.createTextNode(\"Icons made by \");\n  const ptext2 = document.createTextNode(\" from \");\n\n  iconCredits.appendChild(ptext1);\n  iconCredits.appendChild(creatorLink);\n  iconCredits.appendChild(ptext2);\n  iconCredits.appendChild(siteLink);\n\n  followUsContainer.appendChild(iconCredits);\n}\n\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/about-page.js?");

/***/ }),

/***/ "./src/home-page.js":
/*!**************************!*\
  !*** ./src/home-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadHomePage\": () => (/* binding */ loadHomePage)\n/* harmony export */ });\nfunction loadHomePage() {\n  const content = document.querySelector(\".content\");\n\n  const homePage = document.createElement(\"div\");\n  homePage.setAttribute(\"id\", \"home-page\");\n  content.appendChild(homePage);\n\n  // Create img element\n  const pizzaImg = document.createElement(\"img\");\n  pizzaImg.setAttribute(\"id\", \"pizza-img-120px\");\n  pizzaImg.setAttribute(\"alt\", \"Cartoon Pizza Outline\");\n  pizzaImg.src = \"./images/pizza-logo.svg\";\n  homePage.appendChild(pizzaImg);\n\n  // Create info\n  const title = document.createElement(\"h1\");\n  title.setAttribute(\"id\", \"title\");\n  title.textContent = \"Odin's Fakeria\";\n  homePage.appendChild(title);\n\n  const timesHeading = document.createElement(\"h2\");\n  timesHeading.setAttribute(\"id\", \"opening-hours-heading\");\n  timesHeading.textContent = \"Opening Hours\";\n  homePage.appendChild(timesHeading);\n\n  // Loop creates 2 divs with the same classname and numbered id without code repetition\n  for (let i = 0; i < 2; i++) {\n    let timesContainer = document.createElement(\"div\");\n    timesContainer.classList.add(\"opening-hours-container\");\n    timesContainer.setAttribute(\"id\", `times-cont-${i + 1}`);\n    homePage.appendChild(timesContainer);\n  }\n\n  // Use the div's numbered id's to append the correct h3 elements to them\n  const timesContainerOne = document.getElementById(\"times-cont-1\");\n  const weekdays = document.createElement(\"h3\");\n  weekdays.textContent = \"Brinsday - Greenday\";\n  timesContainerOne.appendChild(weekdays);\n\n  const weekdayTimes = document.createElement(\"h3\");\n  weekdayTimes.textContent = \"09:00am - 22:00pm\";\n  timesContainerOne.appendChild(weekdayTimes);\n\n  const timesContainerTwo = document.getElementById(\"times-cont-2\");\n  const weekends = document.createElement(\"h3\");\n  weekends.textContent = \"Weekends\";\n  timesContainerTwo.appendChild(weekends);\n\n  const weekendTimes = document.createElement(\"h3\");\n  weekendTimes.textContent = \"10:00am - 23:00pm\";\n  timesContainerTwo.appendChild(weekendTimes);\n\n  // Create book table button\n  const bookBtn = document.createElement(\"button\");\n  bookBtn.setAttribute(\"type\", \"button\");\n  bookBtn.classList.add(\"btn\");\n  bookBtn.textContent = \"Book Table\";\n  homePage.appendChild(bookBtn);\n}\n\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/home-page.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _render_foundations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render-foundations */ \"./src/render-foundations.js\");\n/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page */ \"./src/home-page.js\");\n/* harmony import */ var _assets_pizza_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/pizza-logo.svg */ \"./src/assets/pizza-logo.svg\");\n/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-page */ \"./src/about-page.js\");\n/* harmony import */ var _assets_maplocation_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/maplocation.png */ \"./src/assets/maplocation.png\");\n/* harmony import */ var _assets_icons_001_pinterest_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/icons/001-pinterest.png */ \"./src/assets/icons/001-pinterest.png\");\n/* harmony import */ var _assets_icons_002_youtube_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/icons/002-youtube.png */ \"./src/assets/icons/002-youtube.png\");\n/* harmony import */ var _assets_icons_003_twitter_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/icons/003-twitter.png */ \"./src/assets/icons/003-twitter.png\");\n/* harmony import */ var _assets_icons_004_facebook_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/icons/004-facebook.png */ \"./src/assets/icons/004-facebook.png\");\n/* harmony import */ var _assets_icons_005_tik_tok_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/icons/005-tik-tok.png */ \"./src/assets/icons/005-tik-tok.png\");\n/* harmony import */ var _assets_icons_006_instagram_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/icons/006-instagram.png */ \"./src/assets/icons/006-instagram.png\");\n/* harmony import */ var _assets_icons_map_marker_outline_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/icons/map-marker-outline.png */ \"./src/assets/icons/map-marker-outline.png\");\n/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./menu-page */ \"./src/menu-page.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n(0,_render_foundations__WEBPACK_IMPORTED_MODULE_1__.renderFoundations)();\n(0,_menu_page__WEBPACK_IMPORTED_MODULE_13__.loadMenuPage)();\nhighlightNavBtn(\"menu\");\n\nfunction clearContent() {\n  const content = document.querySelector(\".content\");\n\n  while(content.firstChild) {\n    content.removeChild(content.firstChild);\n  }\n};\n\nfunction highlightNavBtn (currentPage) {\n  const navItems = document.querySelectorAll(\".nav-btn\");\n  navItems.forEach(el => {\n    el.classList.remove(\"current-page\");\n  });\n  const currentNavItem = document.getElementById(`${currentPage}-btn`);\n  currentNavItem.classList.add(\"current-page\");\n};\n\nconst aboutBtn = document.getElementById(\"about-btn\");\naboutBtn.addEventListener(\"click\", () => {\n  clearContent();\n  (0,_about_page__WEBPACK_IMPORTED_MODULE_4__.loadAboutPage)();\n  highlightNavBtn(\"about\");\n});\n\nconst homeBtn = document.getElementById(\"home-btn\");\nhomeBtn.addEventListener(\"click\", () => {\n  clearContent();\n  (0,_home_page__WEBPACK_IMPORTED_MODULE_2__.loadHomePage)();\n  highlightNavBtn(\"home\");\n});\n\nconst menuBtn = document.getElementById(\"menu-btn\");\nmenuBtn.addEventListener(\"click\", () => {\n  clearContent();\n  (0,_menu_page__WEBPACK_IMPORTED_MODULE_13__.loadMenuPage)();\n  highlightNavBtn(\"menu\");\n});\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu-page.js":
/*!**************************!*\
  !*** ./src/menu-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMenuPage\": () => (/* binding */ loadMenuPage)\n/* harmony export */ });\nfunction loadMenuPage() {\n  const content = document.querySelector(\".content\");\n\n  // Create main container\n  const menuPageContainer = document.createElement(\"div\");\n  menuPageContainer.setAttribute(\"id\", \"menu-page\");\n  content.appendChild(menuPageContainer);\n\n  // Create title section\n  const logo = document.createElement(\"img\");\n  logo.setAttribute(\"id\", \"pizza-img-70px\");\n  logo.setAttribute(\"alt\", \"Cartoon Pizza Outline\");\n  logo.src = \"./images/pizza-logo.svg\";\n  menuPageContainer.appendChild(logo);\n\n  const title = document.createElement(\"h1\");\n  title.setAttribute(\"id\", \"menu-title\");\n  title.textContent = \"Odin's Fakeria\";\n  menuPageContainer.appendChild(title);\n\n  const menuText = document.createElement(\"h2\");\n  menuText.setAttribute(\"id\", \"menu-main-header\");\n  menuText.textContent = \"Menu\";\n  menuPageContainer.appendChild(menuText);\n\n  // Create mains section\n  const mainsHeader = document.createElement(\"h3\");\n  mainsHeader.classList.add(\"menu-section-header\");\n  mainsHeader.textContent = \"Mains\";\n  menuPageContainer.appendChild(mainsHeader);\n\n  const mainsContainer = document.createElement(\"div\");\n  mainsContainer.setAttribute(\"id\", \"mains-container\");\n  menuPageContainer.appendChild(mainsContainer);\n\n  // Create desserts section\n  const dessertsHeader = document.createElement(\"h3\");\n  dessertsHeader.classList.add(\"menu-section-header\");\n  dessertsHeader.textContent = \"Desserts\";\n  menuPageContainer.appendChild(dessertsHeader);\n\n  const dessertsContainer = document.createElement(\"div\");\n  dessertsContainer.setAttribute(\"id\", \"desserts-container\");\n  menuPageContainer.appendChild(dessertsContainer);\n\n  // Create menu item function\n  function createMenuItem(name, description, sectionContainer) {\n    const item = document.createElement(\"div\");\n    item.classList.add(\"menu-item\");\n    sectionContainer.appendChild(item);\n\n    const itemName = document.createElement(\"p\");\n    itemName.textContent = name;\n    item.appendChild(itemName);\n\n    const itemPrice = document.createElement(\"p\");\n    itemPrice.textContent = \"£0.00\";\n    item.appendChild(itemPrice);\n\n    const itemDescription = document.createElement(\"p\");\n    itemDescription.textContent = description;\n    item.appendChild(itemDescription);\n  }\n\n  // Create mains items\n  createMenuItem(\n    \"Rib-eye Fake\",\n    \"The finest meat money can't buy, covered in no sauce with a side of invisible potatoes.\",\n    mainsContainer\n  );\n\n  createMenuItem(\n    \"Fakeonara\",\n    \"A deliciously creamy spaghetti fakeonara with facon and no chicken.\",\n    mainsContainer\n  );\n\n  createMenuItem(\n    \"Pepperphoni Pizza\",\n    \"0 inch pizza with mockerella cheese, invisible sauce and scattered with pepperphoni\",\n    mainsContainer\n  );\n\n  createMenuItem(\n    \"Beyond-real Burger\",\n    \"A juicy buger made from non-existant beef with mockery jack cheese, all in our own sham bun.\",\n    mainsContainer\n  );\n\n  createMenuItem(\n    \"Not-dog\",\n    \"Our infamous not-dog with your choice of sauces. Choose from faketchup, shamayo and mustard (ew).\",\n    mainsContainer\n  );\n\n  createMenuItem(\n    \"Ice Cream\",\n    \"Yeah, you heard me, ice cream for dinner. Nobody can tell you what to do ...except us because we don't have ice cream.\",\n    mainsContainer\n  );\n\n  // Create dessert items\n  createMenuItem(\n    \"Bogus Brownies\",\n    \"Chocolately, fudgy, not real. These brownies would be so tasty if they actually existed!\",\n    dessertsContainer\n  );\n\n  createMenuItem(\n    \"Pretend Profiteroles\",\n    \"Faux pastry balls filled with dream cream and covered in thin air\",\n    dessertsContainer\n  );\n}\n\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/menu-page.js?");

/***/ }),

/***/ "./src/render-foundations.js":
/*!***********************************!*\
  !*** ./src/render-foundations.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderFoundations\": () => (/* binding */ renderFoundations)\n/* harmony export */ });\nfunction renderFoundations() {\n  // Assign Header\n  const header = document.querySelector(\".header\");\n\n  // Create logo\n  const logo = document.createElement(\"p\");\n  logo.classList.add(\"logo\");\n  logo.textContent = \"Odin's\";\n  header.appendChild(logo);\n\n  // Create nav-bar\n  const nav = document.createElement(\"nav\");\n  header.appendChild(nav);\n  const navItems = document.createElement(\"ul\");\n  nav.appendChild(navItems);\n\n  // Create items for nav-bar\n  const aboutBtn = document.createElement(\"li\");\n  aboutBtn.textContent = \"About\";\n  aboutBtn.setAttribute(\"id\", \"about-btn\");\n  aboutBtn.classList.add(\"nav-btn\");\n  navItems.appendChild(aboutBtn);\n\n  const homeBtn = document.createElement(\"li\");\n  homeBtn.textContent = \"Home\";\n  homeBtn.setAttribute(\"id\", \"home-btn\");\n  homeBtn.classList.add(\"nav-btn\");\n  navItems.appendChild(homeBtn);\n\n  const menuBtn = document.createElement(\"li\");\n  menuBtn.textContent = \"Menu\";\n  menuBtn.setAttribute(\"id\", \"menu-btn\");\n  menuBtn.classList.add(\"nav-btn\");\n  navItems.appendChild(menuBtn);\n\n  // Create image credits footer\n  const photoCredit = document.createElement(\"p\");\n  photoCredit.classList.add(\"image-credits\")\n\n  const profileLink = document.createElement(\"a\");\n  profileLink.textContent = \"Jason Leung\"\n  profileLink.setAttribute(\"href\", \"https://unsplash.com/@ninjason\");\n  const siteLink = document.createElement(\"a\");\n  siteLink.textContent = \"Unsplash\"\n  siteLink.setAttribute(\"href\", \"https://unsplash.com/photos/poI7DelFiVA\");\n\n  const ptext1 = document.createTextNode(\"Photo by \");\n  const ptext2 = document.createTextNode(\" on \");\n\n  photoCredit.appendChild(ptext1);\n  photoCredit.appendChild(profileLink);\n  photoCredit.appendChild(ptext2);\n  photoCredit.appendChild(siteLink);\n\n  document.body.appendChild(photoCredit);\n}\n\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./src/render-foundations.js?");

/***/ }),

/***/ "./src/assets/icons/001-pinterest.png":
/*!********************************************!*\
  !*** ./src/assets/icons/001-pinterest.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/001-pinterest.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/icons/001-pinterest.png?");

/***/ }),

/***/ "./src/assets/icons/002-youtube.png":
/*!******************************************!*\
  !*** ./src/assets/icons/002-youtube.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/002-youtube.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/icons/002-youtube.png?");

/***/ }),

/***/ "./src/assets/icons/003-twitter.png":
/*!******************************************!*\
  !*** ./src/assets/icons/003-twitter.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/003-twitter.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/icons/003-twitter.png?");

/***/ }),

/***/ "./src/assets/icons/004-facebook.png":
/*!*******************************************!*\
  !*** ./src/assets/icons/004-facebook.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/004-facebook.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/icons/004-facebook.png?");

/***/ }),

/***/ "./src/assets/icons/005-tik-tok.png":
/*!******************************************!*\
  !*** ./src/assets/icons/005-tik-tok.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/005-tik-tok.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/icons/005-tik-tok.png?");

/***/ }),

/***/ "./src/assets/icons/006-instagram.png":
/*!********************************************!*\
  !*** ./src/assets/icons/006-instagram.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/006-instagram.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/icons/006-instagram.png?");

/***/ }),

/***/ "./src/assets/icons/map-marker-outline.png":
/*!*************************************************!*\
  !*** ./src/assets/icons/map-marker-outline.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/map-marker-outline.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/icons/map-marker-outline.png?");

/***/ }),

/***/ "./src/assets/maplocation.png":
/*!************************************!*\
  !*** ./src/assets/maplocation.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/maplocation.png\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/maplocation.png?");

/***/ }),

/***/ "./src/assets/pizza-logo.svg":
/*!***********************************!*\
  !*** ./src/assets/pizza-logo.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/pizza-logo.svg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/pizza-logo.svg?");

/***/ }),

/***/ "./src/assets/restaurant.jpg":
/*!***********************************!*\
  !*** ./src/assets/restaurant.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/restaurant.jpg\";\n\n//# sourceURL=webpack://odin-restaurant-page/./src/assets/restaurant.jpg?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;