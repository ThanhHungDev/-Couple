/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/index.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--6-2!./src/scss/index.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n/*\nAuthor: TRƯƠNG THANH HÙNG\nAuthor URI: https://www.facebook.com/HungSmurf\nVersion: 1.0\nDescription: .\n*/\n*,\n:after,\n:before {\n  box-sizing: border-box;\n}\n\n:focus {\n  outline: 0 !important;\n  text-decoration: none !important;\n}\n\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: \"Times New Roman\", Times, serif;\n  font-size: 1rem;\n  color: #212529;\n  background-color: #fff;\n  line-height: 1.3;\n}\n\nh6, h5, h4, h3, h2, h1 {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nh1 {\n  font-size: 2.5rem;\n}\n\nh2 {\n  font-size: 2rem;\n}\n\nh3 {\n  font-size: 1.75rem;\n}\n\nh4 {\n  font-size: 1.5rem;\n}\n\nh5 {\n  font-size: 1.25rem;\n}\n\nh6 {\n  font-size: 1rem;\n}\n\np {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nol,\nul {\n  padding-left: 2rem;\n  list-style: none;\n}\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection,\nmain,\ntime {\n  display: block;\n}\n\na {\n  color: #20c997;\n  text-decoration: none;\n}\na:hover, a:active {\n  background-color: transparent;\n  color: #158765;\n  text-decoration: none;\n}\na:not([href]), a:not([href]):hover {\n  color: inherit;\n  text-decoration: none;\n}\n\nimg {\n  vertical-align: middle;\n  border: none;\n  max-width: 100%;\n  height: auto;\n}\n\n.float-left {\n  float: left !important;\n}\n\n.float-right {\n  float: right !important;\n}\n\n.float-none {\n  float: none !important;\n}\n\n.mobile {\n  display: none;\n}\n@media only screen and (max-width: 768px) {\n  .mobile {\n    display: block;\n  }\n}\n\n.pc {\n  display: block;\n}\n@media only screen and (max-width: 768px) {\n  .pc {\n    display: none;\n  }\n}\n\n.md-d-block {\n  display: block;\n}\n@media only screen and (max-width: 991px) {\n  .md-d-block {\n    display: none;\n  }\n}\n\n.small {\n  display: none;\n}\n@media only screen and (max-width: 575px) {\n  .small {\n    display: block;\n  }\n}\n\n/* Clearfix\n-----------------------------------------*/\n.clear:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n\n.line-height-0 {\n  line-height: 0;\n}\n\n/**\n* display\n*/\n.d-none {\n  display: none !important;\n}\n\n.d-inline {\n  display: inline !important;\n}\n\n.d-inline-block {\n  display: inline-block !important;\n}\n\n.d-block {\n  display: block !important;\n}\n\n.d-table {\n  display: table !important;\n}\n\n.d-table-row {\n  display: table-row !important;\n}\n\n.d-table-cell {\n  display: table-cell !important;\n}\n\n.d-flex {\n  display: -ms-flexbox !important;\n  display: flex !important;\n}\n\n.d-inline-flex {\n  display: -ms-inline-flexbox !important;\n  display: inline-flex !important;\n}\n\n.position-relative {\n  position: relative;\n}\n\n.italic {\n  font-style: italic !important;\n}\n\n.not-italic {\n  font-style: normal !important;\n}\n\n.uppercase {\n  text-transform: uppercase !important;\n}\n\n.lowercase {\n  text-transform: lowercase !important;\n}\n\n.capitalize {\n  text-transform: capitalize !important;\n}\n\n.normal-case {\n  text-transform: none !important;\n}\n\n.underline {\n  text-decoration: underline !important;\n}\n\n.line-through {\n  text-decoration: line-through !important;\n}\n\n.no-underline {\n  text-decoration: none !important;\n}\n\n/**************************************************/\n.font-hairline {\n  font-weight: 100 !important;\n}\n\n.font-thin {\n  font-weight: 200 !important;\n}\n\n.font-light {\n  font-weight: 300 !important;\n}\n\n.font-normal {\n  font-weight: 400 !important;\n}\n\n.font-medium {\n  font-weight: 500 !important;\n}\n\n.font-semibold {\n  font-weight: 600 !important;\n}\n\n.font-bold {\n  font-weight: 700 !important;\n}\n\n.font-extrabold {\n  font-weight: 800 !important;\n}\n\n.font-black {\n  font-weight: 900 !important;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.vertical-align-middle {\n  vertical-align: middle;\n}\n\n.mg-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.rounded-circle {\n  border-radius: 50% !important;\n}\n\n.border {\n  border: 1px solid #dee2e6 !important;\n}\n\n.border-top {\n  border-top: 1px solid #dee2e6 !important;\n}\n\n.border-right {\n  border-right: 1px solid #dee2e6 !important;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #dee2e6 !important;\n}\n\n.border-left {\n  border-left: 1px solid #dee2e6 !important;\n}\n\n.text-color-red {\n  color: #f44336;\n}\n\n.text-color-pink {\n  color: #e91e63;\n}\n\n.text-color-purple {\n  color: #9c27b0;\n}\n\n.text-color-deep-purple {\n  color: #673ab7;\n}\n\n.text-color-indigo {\n  color: #3f51b5;\n}\n\n.text-color-blue {\n  color: #2196f3;\n}\n\n.text-color-light-blue {\n  color: #03a9f4;\n}\n\n.text-color-cyan {\n  color: #00bcd4;\n}\n\n.text-color-teal {\n  color: #009688;\n}\n\n.text-color-green {\n  color: #4caf50;\n}\n\n.text-color-light-green {\n  color: #8bc34a;\n}\n\n.text-color-lime {\n  color: #cddc39;\n}\n\n.text-color-yellow {\n  color: #ffeb3b;\n}\n\n.text-color-amber {\n  color: #ffc107;\n}\n\n.text-color-orange {\n  color: #ff9800;\n}\n\n.text-color-deep-orange {\n  color: #ff5722;\n}\n\n.text-color-brown {\n  color: #795548;\n}\n\n.text-color-black {\n  color: #000;\n}\n\n.text-color-white {\n  color: #fff;\n}\n\n.text-color-grey {\n  color: #9e9e9e;\n}\n\n.text-color-blue-grey {\n  color: #607d8b;\n}\n\n.text-color-primary-color-dark {\n  color: #0d47a1;\n}\n\n.text-color-secondary-color {\n  color: #aa66cc;\n}\n\n.text-color-secondary-color-dark {\n  color: #9933cc;\n}\n\n.text-color-default-color {\n  color: #2bbbad;\n}\n\n.text-color-default-color-dark {\n  color: #00695c;\n}\n\n.text-color-info-color {\n  color: #33b5e5;\n}\n\n.text-color-info-color-dark {\n  color: #0099cc;\n}\n\n.text-color-success-color {\n  color: #00c851;\n}\n\n.text-color-success-color-dark {\n  color: #007e33;\n}\n\n.text-color-warning-color {\n  color: #ffbb33;\n}\n\n.text-color-warning-color-dark {\n  color: #ff8800;\n}\n\n.text-color-danger-color {\n  color: #ff3547;\n}\n\n.text-color-danger-color-dark {\n  color: #cc0000;\n}\n\n.text-color-elegant-color {\n  color: #2e2e2e;\n}\n\n.text-color-elegant-color-dark {\n  color: #212121;\n}\n\n.text-color-stylish-color {\n  color: #4b515d;\n}\n\n.text-color-stylish-color-dark {\n  color: #3e4551;\n}\n\n.text-color-unique-color {\n  color: #3f729b;\n}\n\n.text-color-unique-color-dark {\n  color: #1c2331;\n}\n\n.text-color-special-color {\n  color: #37474f;\n}\n\n.text-color-special-color-dark {\n  color: #263238;\n}\n\n.text-color-primary {\n  color: #4285f4;\n}\n\n.text-color-danger {\n  color: #ff3547;\n}\n\n.text-color-warning {\n  color: #ffbb33;\n}\n\n.text-color-success {\n  color: #00c851;\n}\n\n.text-color-info {\n  color: #33b5e5;\n}\n\n.text-color-default {\n  color: #2bbbad;\n}\n\n.text-color-secondary {\n  color: #aa66cc;\n}\n\n.text-color-dark {\n  color: #212121;\n}\n\n.text-color-light {\n  color: #e0e0e0;\n}\n\n.text-color-grey-x {\n  color: #f9f9f9;\n}\n\n.border-color-red {\n  border-color: #f44336;\n}\n\n.border-color-pink {\n  border-color: #e91e63;\n}\n\n.border-color-purple {\n  border-color: #9c27b0;\n}\n\n.border-color-deep-purple {\n  border-color: #673ab7;\n}\n\n.border-color-indigo {\n  border-color: #3f51b5;\n}\n\n.border-color-blue {\n  border-color: #2196f3;\n}\n\n.border-color-light-blue {\n  border-color: #03a9f4;\n}\n\n.border-color-cyan {\n  border-color: #00bcd4;\n}\n\n.border-color-teal {\n  border-color: #009688;\n}\n\n.border-color-green {\n  border-color: #4caf50;\n}\n\n.border-color-light-green {\n  border-color: #8bc34a;\n}\n\n.border-color-lime {\n  border-color: #cddc39;\n}\n\n.border-color-yellow {\n  border-color: #ffeb3b;\n}\n\n.border-color-amber {\n  border-color: #ffc107;\n}\n\n.border-color-orange {\n  border-color: #ff9800;\n}\n\n.border-color-deep-orange {\n  border-color: #ff5722;\n}\n\n.border-color-brown {\n  border-color: #795548;\n}\n\n.border-color-black {\n  border-color: #000;\n}\n\n.border-color-white {\n  border-color: #fff;\n}\n\n.border-color-grey {\n  border-color: #9e9e9e;\n}\n\n.border-color-blue-grey {\n  border-color: #607d8b;\n}\n\n.border-color-primary-color-dark {\n  border-color: #0d47a1;\n}\n\n.border-color-secondary-color {\n  border-color: #aa66cc;\n}\n\n.border-color-secondary-color-dark {\n  border-color: #9933cc;\n}\n\n.border-color-default-color {\n  border-color: #2bbbad;\n}\n\n.border-color-default-color-dark {\n  border-color: #00695c;\n}\n\n.border-color-info-color {\n  border-color: #33b5e5;\n}\n\n.border-color-info-color-dark {\n  border-color: #0099cc;\n}\n\n.border-color-success-color {\n  border-color: #00c851;\n}\n\n.border-color-success-color-dark {\n  border-color: #007e33;\n}\n\n.border-color-warning-color {\n  border-color: #ffbb33;\n}\n\n.border-color-warning-color-dark {\n  border-color: #ff8800;\n}\n\n.border-color-danger-color {\n  border-color: #ff3547;\n}\n\n.border-color-danger-color-dark {\n  border-color: #cc0000;\n}\n\n.border-color-elegant-color {\n  border-color: #2e2e2e;\n}\n\n.border-color-elegant-color-dark {\n  border-color: #212121;\n}\n\n.border-color-stylish-color {\n  border-color: #4b515d;\n}\n\n.border-color-stylish-color-dark {\n  border-color: #3e4551;\n}\n\n.border-color-unique-color {\n  border-color: #3f729b;\n}\n\n.border-color-unique-color-dark {\n  border-color: #1c2331;\n}\n\n.border-color-special-color {\n  border-color: #37474f;\n}\n\n.border-color-special-color-dark {\n  border-color: #263238;\n}\n\n.border-color-primary {\n  border-color: #4285f4;\n}\n\n.border-color-danger {\n  border-color: #ff3547;\n}\n\n.border-color-warning {\n  border-color: #ffbb33;\n}\n\n.border-color-success {\n  border-color: #00c851;\n}\n\n.border-color-info {\n  border-color: #33b5e5;\n}\n\n.border-color-default {\n  border-color: #2bbbad;\n}\n\n.border-color-secondary {\n  border-color: #aa66cc;\n}\n\n.border-color-dark {\n  border-color: #212121;\n}\n\n.border-color-light {\n  border-color: #e0e0e0;\n}\n\n.border-color-grey-x {\n  border-color: #f9f9f9;\n}\n\n.bg-color-red {\n  background-color: #f44336;\n}\n\n.bg-color-pink {\n  background-color: #e91e63;\n}\n\n.bg-color-purple {\n  background-color: #9c27b0;\n}\n\n.bg-color-deep-purple {\n  background-color: #673ab7;\n}\n\n.bg-color-indigo {\n  background-color: #3f51b5;\n}\n\n.bg-color-blue {\n  background-color: #2196f3;\n}\n\n.bg-color-light-blue {\n  background-color: #03a9f4;\n}\n\n.bg-color-cyan {\n  background-color: #00bcd4;\n}\n\n.bg-color-teal {\n  background-color: #009688;\n}\n\n.bg-color-green {\n  background-color: #4caf50;\n}\n\n.bg-color-light-green {\n  background-color: #8bc34a;\n}\n\n.bg-color-lime {\n  background-color: #cddc39;\n}\n\n.bg-color-yellow {\n  background-color: #ffeb3b;\n}\n\n.bg-color-amber {\n  background-color: #ffc107;\n}\n\n.bg-color-orange {\n  background-color: #ff9800;\n}\n\n.bg-color-deep-orange {\n  background-color: #ff5722;\n}\n\n.bg-color-brown {\n  background-color: #795548;\n}\n\n.bg-color-black {\n  background-color: #000;\n}\n\n.bg-color-white {\n  background-color: #fff;\n}\n\n.bg-color-grey {\n  background-color: #9e9e9e;\n}\n\n.bg-color-blue-grey {\n  background-color: #607d8b;\n}\n\n.bg-color-primary-color-dark {\n  background-color: #0d47a1;\n}\n\n.bg-color-secondary-color {\n  background-color: #aa66cc;\n}\n\n.bg-color-secondary-color-dark {\n  background-color: #9933cc;\n}\n\n.bg-color-default-color {\n  background-color: #2bbbad;\n}\n\n.bg-color-default-color-dark {\n  background-color: #00695c;\n}\n\n.bg-color-info-color {\n  background-color: #33b5e5;\n}\n\n.bg-color-info-color-dark {\n  background-color: #0099cc;\n}\n\n.bg-color-success-color {\n  background-color: #00c851;\n}\n\n.bg-color-success-color-dark {\n  background-color: #007e33;\n}\n\n.bg-color-warning-color {\n  background-color: #ffbb33;\n}\n\n.bg-color-warning-color-dark {\n  background-color: #ff8800;\n}\n\n.bg-color-danger-color {\n  background-color: #ff3547;\n}\n\n.bg-color-danger-color-dark {\n  background-color: #cc0000;\n}\n\n.bg-color-elegant-color {\n  background-color: #2e2e2e;\n}\n\n.bg-color-elegant-color-dark {\n  background-color: #212121;\n}\n\n.bg-color-stylish-color {\n  background-color: #4b515d;\n}\n\n.bg-color-stylish-color-dark {\n  background-color: #3e4551;\n}\n\n.bg-color-unique-color {\n  background-color: #3f729b;\n}\n\n.bg-color-unique-color-dark {\n  background-color: #1c2331;\n}\n\n.bg-color-special-color {\n  background-color: #37474f;\n}\n\n.bg-color-special-color-dark {\n  background-color: #263238;\n}\n\n.bg-color-primary {\n  background-color: #4285f4;\n}\n\n.bg-color-danger {\n  background-color: #ff3547;\n}\n\n.bg-color-warning {\n  background-color: #ffbb33;\n}\n\n.bg-color-success {\n  background-color: #00c851;\n}\n\n.bg-color-info {\n  background-color: #33b5e5;\n}\n\n.bg-color-default {\n  background-color: #2bbbad;\n}\n\n.bg-color-secondary {\n  background-color: #aa66cc;\n}\n\n.bg-color-dark {\n  background-color: #212121;\n}\n\n.bg-color-light {\n  background-color: #e0e0e0;\n}\n\n.bg-color-grey-x {\n  background-color: #f9f9f9;\n}\n\n.w-25 {\n  width: 25;\n}\n\n.w-50 {\n  width: 50;\n}\n\n.w-55 {\n  width: 55;\n}\n\n.w-60 {\n  width: 60;\n}\n\n.w-65 {\n  width: 65;\n}\n\n.w-70 {\n  width: 70;\n}\n\n.w-75 {\n  width: 75;\n}\n\n.w-80 {\n  width: 80;\n}\n\n.w-85 {\n  width: 85;\n}\n\n.w-90 {\n  width: 90;\n}\n\n.w-95 {\n  width: 95;\n}\n\n.w-100 {\n  width: 100;\n}\n\n.text-xs {\n  font-size: 0.75rem;\n}\n\n.text-sm {\n  font-size: 0.875rem;\n}\n\n.text-base {\n  font-size: 1rem;\n}\n\n.text-lg {\n  font-size: 1.125rem;\n}\n\n.text-xl {\n  font-size: 1.25rem;\n}\n\n.text-2xl {\n  font-size: 1.5rem;\n}\n\n.text-3xl {\n  font-size: 1.875rem;\n}\n\n.text-4xl {\n  font-size: 2.25rem;\n}\n\n.text-5xl {\n  font-size: 3rem;\n}\n\n.text-6xl {\n  font-size: 4rem;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.8em;\n}\n\nbody.neo-scroll {\n  overflow: hidden;\n}\n\n.btn {\n  display: inline-block;\n  color: #212529;\n  text-align: center;\n  white-space: normal;\n  word-wrap: break-word;\n  vertical-align: middle;\n  cursor: pointer;\n  user-select: none;\n  background-color: transparent;\n  padding: 0.7rem 1.5rem 0.6rem;\n  font-size: 0.81rem;\n  -webkit-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  -o-transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;\n  margin: 0.375rem;\n  border: 2px solid transparent;\n  -webkit-border-radius: 0.125rem;\n  border-radius: 0.125rem;\n}\n.btn.btn-primary {\n  background-color: #0d6efd;\n  color: #fff;\n  border: 2px solid #0d6efd;\n}\n.btn.btn-primary:hover {\n  background-color: #fff;\n  border: 2px solid color-level(#0d6efd, -8);\n  color: #0d6efd;\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n.btn.btn-primary:focus, .btn.btn-primary.focus {\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  outline: 0;\n}\n.btn.btn-primary:disabled, .btn.btn-primary.disabled, fieldset:disabled .btn.btn-primary {\n  pointer-events: none;\n  opacity: 0.65;\n}\n.btn.btn-secondary {\n  background-color: #6c757d;\n  color: #fff;\n  border: 2px solid #6c757d;\n}\n.btn.btn-secondary:hover {\n  background-color: #fff;\n  border: 2px solid color-level(#6c757d, -8);\n  color: #6c757d;\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n.btn.btn-secondary:focus, .btn.btn-secondary.focus {\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  outline: 0;\n}\n.btn.btn-secondary:disabled, .btn.btn-secondary.disabled, fieldset:disabled .btn.btn-secondary {\n  pointer-events: none;\n  opacity: 0.65;\n}\n.btn.btn-success {\n  background-color: #28a745;\n  color: #fff;\n  border: 2px solid #28a745;\n}\n.btn.btn-success:hover {\n  background-color: #fff;\n  border: 2px solid color-level(#28a745, -8);\n  color: #28a745;\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n.btn.btn-success:focus, .btn.btn-success.focus {\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  outline: 0;\n}\n.btn.btn-success:disabled, .btn.btn-success.disabled, fieldset:disabled .btn.btn-success {\n  pointer-events: none;\n  opacity: 0.65;\n}\n.btn.btn-info {\n  background-color: #17a2b8;\n  color: #fff;\n  border: 2px solid #17a2b8;\n}\n.btn.btn-info:hover {\n  background-color: #fff;\n  border: 2px solid color-level(#17a2b8, -8);\n  color: #17a2b8;\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n.btn.btn-info:focus, .btn.btn-info.focus {\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  outline: 0;\n}\n.btn.btn-info:disabled, .btn.btn-info.disabled, fieldset:disabled .btn.btn-info {\n  pointer-events: none;\n  opacity: 0.65;\n}\n.btn.btn-warning {\n  background-color: #ffc107;\n  color: #fff;\n  border: 2px solid #ffc107;\n}\n.btn.btn-warning:hover {\n  background-color: #fff;\n  border: 2px solid color-level(#ffc107, -8);\n  color: #ffc107;\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n.btn.btn-warning:focus, .btn.btn-warning.focus {\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  outline: 0;\n}\n.btn.btn-warning:disabled, .btn.btn-warning.disabled, fieldset:disabled .btn.btn-warning {\n  pointer-events: none;\n  opacity: 0.65;\n}\n.btn.btn-danger {\n  background-color: #dc3545;\n  color: #fff;\n  border: 2px solid #dc3545;\n}\n.btn.btn-danger:hover {\n  background-color: #fff;\n  border: 2px solid color-level(#dc3545, -8);\n  color: #dc3545;\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n.btn.btn-danger:focus, .btn.btn-danger.focus {\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  outline: 0;\n}\n.btn.btn-danger:disabled, .btn.btn-danger.disabled, fieldset:disabled .btn.btn-danger {\n  pointer-events: none;\n  opacity: 0.65;\n}\n.btn.btn-light {\n  background-color: #f8f9fa;\n  color: #fff;\n  border: 2px solid #f8f9fa;\n}\n.btn.btn-light:hover {\n  background-color: #fff;\n  border: 2px solid color-level(#f8f9fa, -8);\n  color: #f8f9fa;\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n.btn.btn-light:focus, .btn.btn-light.focus {\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  outline: 0;\n}\n.btn.btn-light:disabled, .btn.btn-light.disabled, fieldset:disabled .btn.btn-light {\n  pointer-events: none;\n  opacity: 0.65;\n}\n.btn.btn-dark {\n  background-color: #343a40;\n  color: #fff;\n  border: 2px solid #343a40;\n}\n.btn.btn-dark:hover {\n  background-color: #fff;\n  border: 2px solid color-level(#343a40, -8);\n  color: #343a40;\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n.btn.btn-dark:focus, .btn.btn-dark.focus {\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  outline: 0;\n}\n.btn.btn-dark:disabled, .btn.btn-dark.disabled, fieldset:disabled .btn.btn-dark {\n  pointer-events: none;\n  opacity: 0.65;\n}\n.btn.btn-outline-primary {\n  border: 2px solid #0d6efd !important;\n  background-color: transparent !important;\n  color: #0d6efd !important;\n}\n.btn.btn-outline-primary:hover {\n  background-color: color-level(#0d6efd, -8);\n  border: 2px solid #fff;\n  color: #fff;\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n.btn.btn-outline-primary:focus, .btn.btn-outline-primary.focus {\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  outline: 0;\n}\n.btn.btn-outline-primary:disabled, .btn.btn-outline-primary.disabled, fieldset:disabled .btn.btn-outline-primary {\n  pointer-events: none;\n  opacity: 0.65;\n}\n.btn.btn-outline-secondary {\n  border: 2px solid #6c757d !important;\n  background-color: transparent !important;\n  color: #6c757d !important;\n}\n.btn.btn-outline-secondary:hover {\n  background-color: color-level(#6c757d, -8);\n  border: 2px solid #fff;\n  color: #fff;\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n.btn.btn-outline-secondary:focus, .btn.btn-outline-secondary.focus {\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  outline: 0;\n}\n.btn.btn-outline-secondary:disabled, .btn.btn-outline-secondary.disabled, fieldset:disabled .btn.btn-outline-secondary {\n  pointer-events: none;\n  opacity: 0.65;\n}\n.btn.btn-outline-success {\n  border: 2px solid #28a745 !important;\n  background-color: transparent !important;\n  color: #28a745 !important;\n}\n.btn.btn-outline-success:hover {\n  background-color: color-level(#28a745, -8);\n  border: 2px solid #fff;\n  color: #fff;\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n.btn.btn-outline-success:focus, .btn.btn-outline-success.focus {\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  outline: 0;\n}\n.btn.btn-outline-success:disabled, .btn.btn-outline-success.disabled, fieldset:disabled .btn.btn-outline-success {\n  pointer-events: none;\n  opacity: 0.65;\n}\n.btn.btn-outline-info {\n  border: 2px solid #17a2b8 !important;\n  background-color: transparent !important;\n  color: #17a2b8 !important;\n}\n.btn.btn-outline-info:hover {\n  background-color: color-level(#17a2b8, -8);\n  border: 2px solid #fff;\n  color: #fff;\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n.btn.btn-outline-info:focus, .btn.btn-outline-info.focus {\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  outline: 0;\n}\n.btn.btn-outline-info:disabled, .btn.btn-outline-info.disabled, fieldset:disabled .btn.btn-outline-info {\n  pointer-events: none;\n  opacity: 0.65;\n}\n.btn.btn-outline-warning {\n  border: 2px solid #ffc107 !important;\n  background-color: transparent !important;\n  color: #ffc107 !important;\n}\n.btn.btn-outline-warning:hover {\n  background-color: color-level(#ffc107, -8);\n  border: 2px solid #fff;\n  color: #fff;\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n.btn.btn-outline-warning:focus, .btn.btn-outline-warning.focus {\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  outline: 0;\n}\n.btn.btn-outline-warning:disabled, .btn.btn-outline-warning.disabled, fieldset:disabled .btn.btn-outline-warning {\n  pointer-events: none;\n  opacity: 0.65;\n}\n.btn.btn-outline-danger {\n  border: 2px solid #dc3545 !important;\n  background-color: transparent !important;\n  color: #dc3545 !important;\n}\n.btn.btn-outline-danger:hover {\n  background-color: color-level(#dc3545, -8);\n  border: 2px solid #fff;\n  color: #fff;\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n.btn.btn-outline-danger:focus, .btn.btn-outline-danger.focus {\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  outline: 0;\n}\n.btn.btn-outline-danger:disabled, .btn.btn-outline-danger.disabled, fieldset:disabled .btn.btn-outline-danger {\n  pointer-events: none;\n  opacity: 0.65;\n}\n.btn.btn-outline-light {\n  border: 2px solid #f8f9fa !important;\n  background-color: transparent !important;\n  color: #f8f9fa !important;\n}\n.btn.btn-outline-light:hover {\n  background-color: color-level(#f8f9fa, -8);\n  border: 2px solid #fff;\n  color: #fff;\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n.btn.btn-outline-light:focus, .btn.btn-outline-light.focus {\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  outline: 0;\n}\n.btn.btn-outline-light:disabled, .btn.btn-outline-light.disabled, fieldset:disabled .btn.btn-outline-light {\n  pointer-events: none;\n  opacity: 0.65;\n}\n.btn.btn-outline-dark {\n  border: 2px solid #343a40 !important;\n  background-color: transparent !important;\n  color: #343a40 !important;\n}\n.btn.btn-outline-dark:hover {\n  background-color: color-level(#343a40, -8);\n  border: 2px solid #fff;\n  color: #fff;\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n}\n.btn.btn-outline-dark:focus, .btn.btn-outline-dark.focus {\n  -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\n  outline: 0;\n}\n.btn.btn-outline-dark:disabled, .btn.btn-outline-dark.disabled, fieldset:disabled .btn.btn-outline-dark {\n  pointer-events: none;\n  opacity: 0.65;\n}\n\n.container-fluid {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n\n.container {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media only screen and (max-width: 1500px) {\n  .container {\n    max-width: 1320px;\n  }\n}\n@media only screen and (max-width: 1320px) {\n  .container {\n    max-width: 1010px;\n  }\n}\n@media only screen and (max-width: 1199px) {\n  .container {\n    max-width: 960px;\n  }\n}\n@media only screen and (max-width: 991px) {\n  .container {\n    max-width: 720px;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .container {\n    max-width: 720px;\n  }\n}\n@media only screen and (max-width: 575px) {\n  .container {\n    max-width: 540px;\n  }\n}\n\n.row {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n.row:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n\n.col-1 {\n  width: 8.3333333333%;\n  padding-right: 15px;\n  padding-left: 15px;\n  float: left;\n}\n\n@media only screen and (max-width: 1500px) {\n  .col-xxl-1 {\n    width: 8.3333333333%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 1320px) {\n  .col-xl-1 {\n    width: 8.3333333333%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 1199px) {\n  .col-lg-1 {\n    width: 8.3333333333%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 991px) {\n  .col-md-1 {\n    width: 8.3333333333%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .col-sm-1 {\n    width: 8.3333333333%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 575px) {\n  .col-xs-1 {\n    width: 8.3333333333%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n.col-2 {\n  width: 16.6666666667%;\n  padding-right: 15px;\n  padding-left: 15px;\n  float: left;\n}\n\n@media only screen and (max-width: 1500px) {\n  .col-xxl-2 {\n    width: 16.6666666667%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 1320px) {\n  .col-xl-2 {\n    width: 16.6666666667%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 1199px) {\n  .col-lg-2 {\n    width: 16.6666666667%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 991px) {\n  .col-md-2 {\n    width: 16.6666666667%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .col-sm-2 {\n    width: 16.6666666667%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 575px) {\n  .col-xs-2 {\n    width: 16.6666666667%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n.col-3 {\n  width: 25%;\n  padding-right: 15px;\n  padding-left: 15px;\n  float: left;\n}\n\n@media only screen and (max-width: 1500px) {\n  .col-xxl-3 {\n    width: 25%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 1320px) {\n  .col-xl-3 {\n    width: 25%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 1199px) {\n  .col-lg-3 {\n    width: 25%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 991px) {\n  .col-md-3 {\n    width: 25%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .col-sm-3 {\n    width: 25%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 575px) {\n  .col-xs-3 {\n    width: 25%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n.col-4 {\n  width: 33.3333333333%;\n  padding-right: 15px;\n  padding-left: 15px;\n  float: left;\n}\n\n@media only screen and (max-width: 1500px) {\n  .col-xxl-4 {\n    width: 33.3333333333%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 1320px) {\n  .col-xl-4 {\n    width: 33.3333333333%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 1199px) {\n  .col-lg-4 {\n    width: 33.3333333333%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 991px) {\n  .col-md-4 {\n    width: 33.3333333333%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .col-sm-4 {\n    width: 33.3333333333%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 575px) {\n  .col-xs-4 {\n    width: 33.3333333333%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n.col-5 {\n  width: 41.6666666667%;\n  padding-right: 15px;\n  padding-left: 15px;\n  float: left;\n}\n\n@media only screen and (max-width: 1500px) {\n  .col-xxl-5 {\n    width: 41.6666666667%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 1320px) {\n  .col-xl-5 {\n    width: 41.6666666667%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 1199px) {\n  .col-lg-5 {\n    width: 41.6666666667%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 991px) {\n  .col-md-5 {\n    width: 41.6666666667%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .col-sm-5 {\n    width: 41.6666666667%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 575px) {\n  .col-xs-5 {\n    width: 41.6666666667%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n.col-6 {\n  width: 50%;\n  padding-right: 15px;\n  padding-left: 15px;\n  float: left;\n}\n\n@media only screen and (max-width: 1500px) {\n  .col-xxl-6 {\n    width: 50%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 1320px) {\n  .col-xl-6 {\n    width: 50%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 1199px) {\n  .col-lg-6 {\n    width: 50%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 991px) {\n  .col-md-6 {\n    width: 50%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .col-sm-6 {\n    width: 50%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 575px) {\n  .col-xs-6 {\n    width: 50%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n.col-7 {\n  width: 58.3333333333%;\n  padding-right: 15px;\n  padding-left: 15px;\n  float: left;\n}\n\n@media only screen and (max-width: 1500px) {\n  .col-xxl-7 {\n    width: 58.3333333333%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 1320px) {\n  .col-xl-7 {\n    width: 58.3333333333%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 1199px) {\n  .col-lg-7 {\n    width: 58.3333333333%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 991px) {\n  .col-md-7 {\n    width: 58.3333333333%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .col-sm-7 {\n    width: 58.3333333333%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 575px) {\n  .col-xs-7 {\n    width: 58.3333333333%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n.col-8 {\n  width: 66.6666666667%;\n  padding-right: 15px;\n  padding-left: 15px;\n  float: left;\n}\n\n@media only screen and (max-width: 1500px) {\n  .col-xxl-8 {\n    width: 66.6666666667%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 1320px) {\n  .col-xl-8 {\n    width: 66.6666666667%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 1199px) {\n  .col-lg-8 {\n    width: 66.6666666667%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 991px) {\n  .col-md-8 {\n    width: 66.6666666667%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .col-sm-8 {\n    width: 66.6666666667%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 575px) {\n  .col-xs-8 {\n    width: 66.6666666667%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n.col-9 {\n  width: 75%;\n  padding-right: 15px;\n  padding-left: 15px;\n  float: left;\n}\n\n@media only screen and (max-width: 1500px) {\n  .col-xxl-9 {\n    width: 75%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 1320px) {\n  .col-xl-9 {\n    width: 75%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 1199px) {\n  .col-lg-9 {\n    width: 75%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 991px) {\n  .col-md-9 {\n    width: 75%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .col-sm-9 {\n    width: 75%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 575px) {\n  .col-xs-9 {\n    width: 75%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n.col-10 {\n  width: 83.3333333333%;\n  padding-right: 15px;\n  padding-left: 15px;\n  float: left;\n}\n\n@media only screen and (max-width: 1500px) {\n  .col-xxl-10 {\n    width: 83.3333333333%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 1320px) {\n  .col-xl-10 {\n    width: 83.3333333333%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 1199px) {\n  .col-lg-10 {\n    width: 83.3333333333%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 991px) {\n  .col-md-10 {\n    width: 83.3333333333%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .col-sm-10 {\n    width: 83.3333333333%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 575px) {\n  .col-xs-10 {\n    width: 83.3333333333%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n.col-11 {\n  width: 91.6666666667%;\n  padding-right: 15px;\n  padding-left: 15px;\n  float: left;\n}\n\n@media only screen and (max-width: 1500px) {\n  .col-xxl-11 {\n    width: 91.6666666667%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 1320px) {\n  .col-xl-11 {\n    width: 91.6666666667%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 1199px) {\n  .col-lg-11 {\n    width: 91.6666666667%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 991px) {\n  .col-md-11 {\n    width: 91.6666666667%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .col-sm-11 {\n    width: 91.6666666667%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 575px) {\n  .col-xs-11 {\n    width: 91.6666666667%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n.col-12 {\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  float: left;\n}\n\n@media only screen and (max-width: 1500px) {\n  .col-xxl-12 {\n    width: 100%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 1320px) {\n  .col-xl-12 {\n    width: 100%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 1199px) {\n  .col-lg-12 {\n    width: 100%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 991px) {\n  .col-md-12 {\n    width: 100%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .col-sm-12 {\n    width: 100%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n@media only screen and (max-width: 575px) {\n  .col-xs-12 {\n    width: 100%;\n    padding-right: 15px;\n    padding-left: 15px;\n    float: left;\n  }\n}\n\n:root {\n  --animate-duration: 1s;\n  --animate-delay: 1s;\n  --animate-loop: 1;\n}\n\n.animated {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n}\n.animated.infinite {\n  -webkit-animation-iteration-count: infinite;\n  animation-iteration-count: infinite;\n}\n.animated.faster {\n  animation-duration: calc($--animate-duration / 2);\n}\n.animated.fast {\n  animation-duration: calc($--animate-duration * 0.8);\n}\n.animated.slow {\n  animation-duration: calc($--animate-duration * 2);\n}\n.animated.slower {\n  animation-duration: calc($--animate-duration * 3);\n}\n.animated.loop-1 {\n  animation-iteration-count: 1;\n}\n.animated.delay-1s {\n  animation-delay: calc($--animate-delay * $i);\n}\n.animated.loop-2 {\n  animation-iteration-count: 2;\n}\n.animated.delay-1s {\n  animation-delay: calc($--animate-delay * $i);\n}\n.animated.loop-3 {\n  animation-iteration-count: 3;\n}\n.animated.delay-1s {\n  animation-delay: calc($--animate-delay * $i);\n}\n.animated.loop-4 {\n  animation-iteration-count: 4;\n}\n.animated.delay-1s {\n  animation-delay: calc($--animate-delay * $i);\n}\n\n@media print, (prefers-reduced-motion: reduce) {\n  .animated {\n    animation-duration: 1ms !important;\n    transition-duration: 1ms !important;\n    animation-iteration-count: 1 !important;\n  }\n\n  .animated[class*=Out] {\n    opacity: 0;\n  }\n}\n.animated-initial {\n  animation-name: initial !important;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@keyframes pulse {\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n  50% {\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n.pulse {\n  animation-name: pulse;\n  animation-timing-function: ease-in-out;\n}\n\n@keyframes tada {\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n  10%, 20% {\n    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);\n  }\n  30%, 50%, 70%, 90% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n  40%, 60%, 80% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n.tada {\n  animation-name: tada;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.fadeIn {\n  animation-name: fadeIn;\n}\n\n@keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.fadeInLeft {\n  animation-name: fadeInLeft;\n}\n\n@keyframes fadeInRight {\n  from {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.fadeInRight {\n  animation-name: fadeInRight;\n}\n\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.fadeInUp {\n  animation-name: fadeInUp;\n}\n\n@keyframes rotateOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0;\n  }\n}\n.rotateOut {\n  animation-name: rotateOut;\n  transform-origin: center;\n}\n\n.rotate-circle {\n  animation: rotateCircle 9s infinite;\n}\n\n/*\n Custom Animations\n */\n@keyframes rotateCircle {\n  0% {\n    transform: rotate(0deg);\n  }\n  25% {\n    transform: rotate(90deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  75% {\n    transform: rotate(270deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@keyframes jackInTheBox {\n  from {\n    opacity: 0;\n    transform: scale(0.1) rotate(30deg);\n    transform-origin: center bottom;\n  }\n  50% {\n    transform: rotate(-10deg);\n  }\n  70% {\n    transform: rotate(3deg);\n  }\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n.jackInTheBox {\n  animation-name: jackInTheBox;\n}\n\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n@keyframes rollIn {\n  from {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n  }\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n}\n.rollIn {\n  animation-name: rollIn;\n}\n\n@keyframes zoomIn {\n  from {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n  50% {\n    opacity: 1;\n  }\n}\n.zoomIn {\n  animation-name: zoomIn;\n}\n\n@keyframes slideInDown {\n  from {\n    transform: translate3d(0, -100%, 0);\n    visibility: visible;\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n.slideInDown {\n  animation-name: slideInDown;\n}\n\n@keyframes float {\n  0% {\n    transform: translateY(0px);\n    -webkit-transition: translateY(0px);\n  }\n  50% {\n    transform: translateY(-6px);\n    -webkit-transition: translateY(-6px);\n  }\n  100% {\n    transform: translateY(0px);\n    -webkit-transition: translateY(0px);\n  }\n}\n.purple-gradient {\n  background: -moz-linear-gradient(40deg, #ff6ec4, #7873f5) !important;\n  background: -webkit-linear-gradient(40deg, #ff6ec4, #7873f5) !important;\n  background: -o-linear-gradient(40deg, #ff6ec4, #7873f5) !important;\n  background: -ms-linear-gradient(40deg, #ff6ec4, #7873f5) !important;\n  background: linear-gradient(40deg, #ff6ec4, #7873f5) !important;\n}\n\n.peach-gradient {\n  background: -moz-linear-gradient(40deg, #ffd86f, #fc6262) !important;\n  background: -webkit-linear-gradient(40deg, #ffd86f, #fc6262) !important;\n  background: -o-linear-gradient(40deg, #ffd86f, #fc6262) !important;\n  background: -ms-linear-gradient(40deg, #ffd86f, #fc6262) !important;\n  background: linear-gradient(40deg, #ffd86f, #fc6262) !important;\n}\n\n.aqua-gradient {\n  background: -moz-linear-gradient(40deg, #2096ff, #05ffa3) !important;\n  background: -webkit-linear-gradient(40deg, #2096ff, #05ffa3) !important;\n  background: -o-linear-gradient(40deg, #2096ff, #05ffa3) !important;\n  background: -ms-linear-gradient(40deg, #2096ff, #05ffa3) !important;\n  background: linear-gradient(40deg, #2096ff, #05ffa3) !important;\n}\n\n.blue-gradient {\n  background: -moz-linear-gradient(40deg, #45cafc, #303f9f) !important;\n  background: -webkit-linear-gradient(40deg, #45cafc, #303f9f) !important;\n  background: -o-linear-gradient(40deg, #45cafc, #303f9f) !important;\n  background: -ms-linear-gradient(40deg, #45cafc, #303f9f) !important;\n  background: linear-gradient(40deg, #45cafc, #303f9f) !important;\n}\n\n.home-page-gradient {\n  background: -moz-linear-gradient(40deg, #e1fefa, #fcf7f4) !important;\n  background: -webkit-linear-gradient(40deg, #e1fefa, #fcf7f4) !important;\n  background: -o-linear-gradient(40deg, #e1fefa, #fcf7f4) !important;\n  background: -ms-linear-gradient(40deg, #e1fefa, #fcf7f4) !important;\n  background: linear-gradient(40deg, #e1fefa, #fcf7f4) !important;\n}\n\n.purple-gradient-rgba {\n  background: -moz-linear-gradient(40deg, rgba(255, 110, 196, 0.9), rgba(120, 115, 245, 0.9)) !important;\n  background: -webkit-linear-gradient(40deg, rgba(255, 110, 196, 0.9), rgba(120, 115, 245, 0.9)) !important;\n  background: -o-linear-gradient(40deg, rgba(255, 110, 196, 0.9), rgba(120, 115, 245, 0.9)) !important;\n  background: -ms-linear-gradient(40deg, rgba(255, 110, 196, 0.9), rgba(120, 115, 245, 0.9)) !important;\n  background: linear-gradient(40deg, rgba(255, 110, 196, 0.9), rgba(120, 115, 245, 0.9)) !important;\n}\n\n.peach-gradient-rgba {\n  background: -moz-linear-gradient(40deg, rgba(255, 216, 111, 0.9), rgba(252, 98, 98, 0.9)) !important;\n  background: -webkit-linear-gradient(40deg, rgba(255, 216, 111, 0.9), rgba(252, 98, 98, 0.9)) !important;\n  background: -o-linear-gradient(40deg, rgba(255, 216, 111, 0.9), rgba(252, 98, 98, 0.9)) !important;\n  background: -ms-linear-gradient(40deg, rgba(255, 216, 111, 0.9), rgba(252, 98, 98, 0.9)) !important;\n  background: linear-gradient(40deg, rgba(255, 216, 111, 0.9), rgba(252, 98, 98, 0.9)) !important;\n}\n\n.aqua-gradient-rgba {\n  background: -moz-linear-gradient(40deg, rgba(32, 150, 255, 0.9), rgba(5, 255, 163, 0.9)) !important;\n  background: -webkit-linear-gradient(40deg, rgba(32, 150, 255, 0.9), rgba(5, 255, 163, 0.9)) !important;\n  background: -o-linear-gradient(40deg, rgba(32, 150, 255, 0.9), rgba(5, 255, 163, 0.9)) !important;\n  background: -ms-linear-gradient(40deg, rgba(32, 150, 255, 0.9), rgba(5, 255, 163, 0.9)) !important;\n  background: linear-gradient(40deg, rgba(32, 150, 255, 0.9), rgba(5, 255, 163, 0.9)) !important;\n}\n\n.blue-gradient-rgba {\n  background: -moz-linear-gradient(40deg, rgba(69, 202, 252, 0.9), rgba(48, 63, 159, 0.9)) !important;\n  background: -webkit-linear-gradient(40deg, rgba(69, 202, 252, 0.9), rgba(48, 63, 159, 0.9)) !important;\n  background: -o-linear-gradient(40deg, rgba(69, 202, 252, 0.9), rgba(48, 63, 159, 0.9)) !important;\n  background: -ms-linear-gradient(40deg, rgba(69, 202, 252, 0.9), rgba(48, 63, 159, 0.9)) !important;\n  background: linear-gradient(40deg, rgba(69, 202, 252, 0.9), rgba(48, 63, 159, 0.9)) !important;\n}\n\n.bg-gradient-purple {\n  background: -moz-linear-gradient(131.93deg, #ff6ec4, #7873f5) !important;\n  background: -webkit-linear-gradient(131.93deg, #ff6ec4, #7873f5) !important;\n  background: -o-linear-gradient(131.93deg, #ff6ec4, #7873f5) !important;\n  background: -ms-linear-gradient(131.93deg, #ff6ec4, #7873f5) !important;\n  background: linear-gradient(131.93deg, #ff6ec4, #7873f5) !important;\n}\n\n.bg-gradient-peach {\n  background: -moz-linear-gradient(131.93deg, #ffd86f, #fc6262) !important;\n  background: -webkit-linear-gradient(131.93deg, #ffd86f, #fc6262) !important;\n  background: -o-linear-gradient(131.93deg, #ffd86f, #fc6262) !important;\n  background: -ms-linear-gradient(131.93deg, #ffd86f, #fc6262) !important;\n  background: linear-gradient(131.93deg, #ffd86f, #fc6262) !important;\n}\n\n.bg-gradient-aqua {\n  background: -moz-linear-gradient(131.93deg, #2096ff, #05ffa3) !important;\n  background: -webkit-linear-gradient(131.93deg, #2096ff, #05ffa3) !important;\n  background: -o-linear-gradient(131.93deg, #2096ff, #05ffa3) !important;\n  background: -ms-linear-gradient(131.93deg, #2096ff, #05ffa3) !important;\n  background: linear-gradient(131.93deg, #2096ff, #05ffa3) !important;\n}\n\n.bg-gradient-blue {\n  background: -moz-linear-gradient(131.93deg, #45cafc, #303f9f) !important;\n  background: -webkit-linear-gradient(131.93deg, #45cafc, #303f9f) !important;\n  background: -o-linear-gradient(131.93deg, #45cafc, #303f9f) !important;\n  background: -ms-linear-gradient(131.93deg, #45cafc, #303f9f) !important;\n  background: linear-gradient(131.93deg, #45cafc, #303f9f) !important;\n}\n\n.bg-gradient-home-page {\n  background: -moz-linear-gradient(131.93deg, #e1fefa, #fcf7f4) !important;\n  background: -webkit-linear-gradient(131.93deg, #e1fefa, #fcf7f4) !important;\n  background: -o-linear-gradient(131.93deg, #e1fefa, #fcf7f4) !important;\n  background: -ms-linear-gradient(131.93deg, #e1fefa, #fcf7f4) !important;\n  background: linear-gradient(131.93deg, #e1fefa, #fcf7f4) !important;\n}\n\n@font-face {\n  font-family: \"HERO Icons\";\n  src: url(\"/font/IconFont/webfont.eot?v=1.4.57\");\n  src: url(\"/font/IconFont/webfont.eot?#iefix&v=1.4.57\") format(\"embedded-opentype\"), url(\"/font/IconFont/webfont.woff2?v=1.4.57\") format(\"woff2\"), url(\"/font/IconFont/webfont.woff?v=1.4.57\") format(\"woff\"), url(\"/font/IconFont/webfont.ttf?v=1.4.57\") format(\"truetype\"), url(\"/font/IconFont/webfont.svg?v=1.4.57\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\ni.hero-icon {\n  display: inline-block;\n  width: 32px;\n  height: 24px;\n  text-align: center;\n  vertical-align: middle;\n  cursor: pointer;\n  line-height: 24px;\n}\ni.hero-icon:before {\n  font-size: 24px;\n  display: inline-block;\n  font: normal normal normal 24px/1 \"HERO Icons\";\n  font-size: inherit;\n  text-rendering: auto;\n  line-height: inherit;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\ni.hero-icon.hero-account-group-outline::before {\n  content: \"\\F0B58\";\n}\ni.hero-icon.hero-account-search-outline::before {\n  content: \"\\F0935\";\n}\ni.hero-icon.hero-arrow-down-bold-box-outline::before {\n  content: \"\\F0730\";\n}\ni.hero-icon.hero-arrow-up-bold-box-outline::before {\n  content: \"\\F0739\";\n}\ni.hero-icon.hero-arrow-up-box::before {\n  content: \"\\F06C3\";\n}\ni.hero-icon.hero-auto-fix::before {\n  content: \"\\F0068\";\n}\ni.hero-icon.hero-auto-upload::before {\n  content: \"\\F0069\";\n}\ni.hero-icon.hero-ballot-recount-outline::before {\n  content: \"\\F0C3A\";\n}\ni.hero-icon.hero-card-account-mail-outline::before {\n  content: \"\\F0E98\";\n}\ni.hero-icon.hero-cellphone-cog::before {\n  content: \"\\F0951\";\n}\ni.hero-icon.hero-cellphone-nfc::before {\n  content: \"\\F0E90\";\n}\ni.hero-icon.hero-certificate-outline::before {\n  content: \"\\F1188\";\n}\ni.hero-icon.hero-clippy::before {\n  content: \"\\F014F\";\n}\ni.hero-icon.hero-creation::before {\n  content: \"\\F0674\";\n}\ni.hero-icon.hero-email-edit-outline::before {\n  content: \"\\F0EE4\";\n}\ni.hero-icon.hero-emoticon::before {\n  content: \"\\F0C68\";\n}\ni.hero-icon.hero-emoticon-angry::before {\n  content: \"\\F0C69\";\n}\ni.hero-icon.hero-emoticon-angry-outline::before {\n  content: \"\\F0C6A\";\n}\ni.hero-icon.hero-emoticon-confused::before {\n  content: \"\\F10DE\";\n}\ni.hero-icon.hero-emoticon-confused-outline::before {\n  content: \"\\F10DF\";\n}\ni.hero-icon.hero-emoticon-cool::before {\n  content: \"\\F0C6B\";\n}\ni.hero-icon.hero-emoticon-cool-outline::before {\n  content: \"\\F01F3\";\n}\ni.hero-icon.hero-emoticon-cry::before {\n  content: \"\\F0C6C\";\n}\ni.hero-icon.hero-emoticon-cry-outline::before {\n  content: \"\\F0C6D\";\n}\ni.hero-icon.hero-emoticon-dead::before {\n  content: \"\\F0C6E\";\n}\ni.hero-icon.hero-emoticon-dead-outline::before {\n  content: \"\\F069B\";\n}\ni.hero-icon.hero-emoticon-devil::before {\n  content: \"\\F0C6F\";\n}\ni.hero-icon.hero-emoticon-devil-outline::before {\n  content: \"\\F01F4\";\n}\ni.hero-icon.hero-emoticon-excited::before {\n  content: \"\\F0C70\";\n}\ni.hero-icon.hero-emoticon-excited-outline::before {\n  content: \"\\F069C\";\n}\ni.hero-icon.hero-emoticon-frown::before {\n  content: \"\\F0F4C\";\n}\ni.hero-icon.hero-emoticon-frown-outline::before {\n  content: \"\\F0F4D\";\n}\ni.hero-icon.hero-emoticon-happy::before {\n  content: \"\\F0C71\";\n}\ni.hero-icon.hero-emoticon-happy-outline::before {\n  content: \"\\F01F5\";\n}\ni.hero-icon.hero-emoticon-kiss::before {\n  content: \"\\F0C72\";\n}\ni.hero-icon.hero-emoticon-kiss-outline::before {\n  content: \"\\F0C73\";\n}\ni.hero-icon.hero-emoticon-lol::before {\n  content: \"\\F1214\";\n}\ni.hero-icon.hero-emoticon-lol-outline::before {\n  content: \"\\F1215\";\n}\ni.hero-icon.hero-emoticon-neutral::before {\n  content: \"\\F0C74\";\n}\ni.hero-icon.hero-emoticon-neutral-outline::before {\n  content: \"\\F01F6\";\n}\ni.hero-icon.hero-emoticon-outline::before {\n  content: \"\\F01F2\";\n}\ni.hero-icon.hero-emoticon-poop::before {\n  content: \"\\F01F7\";\n}\ni.hero-icon.hero-emoticon-poop-outline::before {\n  content: \"\\F0C75\";\n}\ni.hero-icon.hero-emoticon-sad::before {\n  content: \"\\F0C76\";\n}\ni.hero-icon.hero-emoticon-sad-outline::before {\n  content: \"\\F01F8\";\n}\ni.hero-icon.hero-emoticon-tongue::before {\n  content: \"\\F01F9\";\n}\ni.hero-icon.hero-emoticon-tongue-outline::before {\n  content: \"\\F0C77\";\n}\ni.hero-icon.hero-emoticon-wink::before {\n  content: \"\\F0C78\";\n}\ni.hero-icon.hero-emoticon-wink-outline::before {\n  content: \"\\F0C79\";\n}\ni.hero-icon.hero-file::before {\n  content: \"\\F0214\";\n}\ni.hero-icon.hero-format-list-text::before {\n  content: \"\\F126F\";\n}\ni.hero-icon.hero-google-ads::before {\n  content: \"\\F0C87\";\n}\ni.hero-icon.hero-hand-okay::before {\n  content: \"\\F0A50\";\n}\ni.hero-icon.hero-headset::before {\n  content: \"\\F02CE\";\n}\ni.hero-icon.hero-heart-multiple-outline::before {\n  content: \"\\F0A57\";\n}\ni.hero-icon.hero-home-map-marker::before {\n  content: \"\\F05F8\";\n}\ni.hero-icon.hero-human-male-child::before {\n  content: \"\\F138C\";\n}\ni.hero-icon.hero-message-cog-outline::before {\n  content: \"\\F1172\";\n}\ni.hero-icon.hero-message-text-outline::before {\n  content: \"\\F036A\";\n}\ni.hero-icon.hero-mouse::before {\n  content: \"\\F037D\";\n}\ni.hero-icon.hero-mouse-bluetooth::before {\n  content: \"\\F098B\";\n}\ni.hero-icon.hero-mouse-off::before {\n  content: \"\\F037E\";\n}\ni.hero-icon.hero-mouse-variant::before {\n  content: \"\\F037F\";\n}\ni.hero-icon.hero-mouse-variant-off::before {\n  content: \"\\F0380\";\n}\ni.hero-icon.hero-newspaper-variant-outline::before {\n  content: \"\\F1004\";\n}\ni.hero-icon.hero-plus-outline::before {\n  content: \"\\F0705\";\n}\ni.hero-icon.hero-responsive::before {\n  content: \"\\F045E\";\n}\ni.hero-icon.hero-selection-search::before {\n  content: \"\\F1205\";\n}\ni.hero-icon.hero-send::before {\n  content: \"\\F048A\";\n}\ni.hero-icon.hero-send-check-outline::before {\n  content: \"\\F1162\";\n}\ni.hero-icon.hero-send-outline::before {\n  content: \"\\F1165\";\n}\ni.hero-icon.hero-share-all-outline::before {\n  content: \"\\F11F5\";\n}\ni.hero-icon.hero-star-box-multiple-outline::before {\n  content: \"\\F1287\";\n}\ni.hero-icon.hero-sticker-emoji::before {\n  content: \"\\F0785\";\n}\ni.hero-icon.hero-television-clean::before {\n  content: \"\\F1110\";\n}\ni.hero-icon.hero-update::before {\n  content: \"\\F06B0\";\n}\ni.hero-icon.hero-zodiac-taurus::before {\n  content: \"\\F0A87\";\n}\ni.hero-icon.hero-zodiac-virgo::before {\n  content: \"\\F0A88\";\n}\n\n.fa, .fas, .far, .fal, .fad, .fab {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  line-height: 1;\n}\n\n.fa,\n.fas,\n.far,\n.fal,\n.fad,\n.fab {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  line-height: 1;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-500px:before {\n  content: \"\";\n}\n\n.fa-abacus:before {\n  content: \"\";\n}\n\n.fa-accessible-icon:before {\n  content: \"\";\n}\n\n.fa-accusoft:before {\n  content: \"\";\n}\n\n.fa-acorn:before {\n  content: \"\";\n}\n\n.fa-acquisitions-incorporated:before {\n  content: \"\";\n}\n\n.fa-ad:before {\n  content: \"\";\n}\n\n.fa-address-book:before {\n  content: \"\";\n}\n\n.fa-address-card:before {\n  content: \"\";\n}\n\n.fa-adjust:before {\n  content: \"\";\n}\n\n.fa-adn:before {\n  content: \"\";\n}\n\n.fa-adobe:before {\n  content: \"\";\n}\n\n.fa-adversal:before {\n  content: \"\";\n}\n\n.fa-affiliatetheme:before {\n  content: \"\";\n}\n\n.fa-air-conditioner:before {\n  content: \"\";\n}\n\n.fa-air-freshener:before {\n  content: \"\";\n}\n\n.fa-airbnb:before {\n  content: \"\";\n}\n\n.fa-alarm-clock:before {\n  content: \"\";\n}\n\n.fa-alarm-exclamation:before {\n  content: \"\";\n}\n\n.fa-alarm-plus:before {\n  content: \"\";\n}\n\n.fa-alarm-snooze:before {\n  content: \"\";\n}\n\n.fa-album:before {\n  content: \"\";\n}\n\n.fa-album-collection:before {\n  content: \"\";\n}\n\n.fa-algolia:before {\n  content: \"\";\n}\n\n.fa-alicorn:before {\n  content: \"\";\n}\n\n.fa-alien:before {\n  content: \"\";\n}\n\n.fa-alien-monster:before {\n  content: \"\";\n}\n\n.fa-align-center:before {\n  content: \"\";\n}\n\n.fa-align-justify:before {\n  content: \"\";\n}\n\n.fa-align-left:before {\n  content: \"\";\n}\n\n.fa-align-right:before {\n  content: \"\";\n}\n\n.fa-align-slash:before {\n  content: \"\";\n}\n\n.fa-alipay:before {\n  content: \"\";\n}\n\n.fa-allergies:before {\n  content: \"\";\n}\n\n.fa-amazon:before {\n  content: \"\";\n}\n\n.fa-amazon-pay:before {\n  content: \"\";\n}\n\n.fa-ambulance:before {\n  content: \"\";\n}\n\n.fa-american-sign-language-interpreting:before {\n  content: \"\";\n}\n\n.fa-amilia:before {\n  content: \"\";\n}\n\n.fa-amp-guitar:before {\n  content: \"\";\n}\n\n.fa-analytics:before {\n  content: \"\";\n}\n\n.fa-anchor:before {\n  content: \"\";\n}\n\n.fa-android:before {\n  content: \"\";\n}\n\n.fa-angel:before {\n  content: \"\";\n}\n\n.fa-angellist:before {\n  content: \"\";\n}\n\n.fa-angle-double-down:before {\n  content: \"\";\n}\n\n.fa-angle-double-left:before {\n  content: \"\";\n}\n\n.fa-angle-double-right:before {\n  content: \"\";\n}\n\n.fa-angle-double-up:before {\n  content: \"\";\n}\n\n.fa-angle-down:before {\n  content: \"\";\n}\n\n.fa-angle-left:before {\n  content: \"\";\n}\n\n.fa-angle-right:before {\n  content: \"\";\n}\n\n.fa-angle-up:before {\n  content: \"\";\n}\n\n.fa-angry:before {\n  content: \"\";\n}\n\n.fa-angrycreative:before {\n  content: \"\";\n}\n\n.fa-angular:before {\n  content: \"\";\n}\n\n.fa-ankh:before {\n  content: \"\";\n}\n\n.fa-app-store:before {\n  content: \"\";\n}\n\n.fa-app-store-ios:before {\n  content: \"\";\n}\n\n.fa-apper:before {\n  content: \"\";\n}\n\n.fa-apple:before {\n  content: \"\";\n}\n\n.fa-apple-alt:before {\n  content: \"\";\n}\n\n.fa-apple-crate:before {\n  content: \"\";\n}\n\n.fa-apple-pay:before {\n  content: \"\";\n}\n\n.fa-archive:before {\n  content: \"\";\n}\n\n.fa-archway:before {\n  content: \"\";\n}\n\n.fa-arrow-alt-circle-down:before {\n  content: \"\";\n}\n\n.fa-arrow-alt-circle-left:before {\n  content: \"\";\n}\n\n.fa-arrow-alt-circle-right:before {\n  content: \"\";\n}\n\n.fa-arrow-alt-circle-up:before {\n  content: \"\";\n}\n\n.fa-arrow-alt-down:before {\n  content: \"\";\n}\n\n.fa-arrow-alt-from-bottom:before {\n  content: \"\";\n}\n\n.fa-arrow-alt-from-left:before {\n  content: \"\";\n}\n\n.fa-arrow-alt-from-right:before {\n  content: \"\";\n}\n\n.fa-arrow-alt-from-top:before {\n  content: \"\";\n}\n\n.fa-arrow-alt-left:before {\n  content: \"\";\n}\n\n.fa-arrow-alt-right:before {\n  content: \"\";\n}\n\n.fa-arrow-alt-square-down:before {\n  content: \"\";\n}\n\n.fa-arrow-alt-square-left:before {\n  content: \"\";\n}\n\n.fa-arrow-alt-square-right:before {\n  content: \"\";\n}\n\n.fa-arrow-alt-square-up:before {\n  content: \"\";\n}\n\n.fa-arrow-alt-to-bottom:before {\n  content: \"\";\n}\n\n.fa-arrow-alt-to-left:before {\n  content: \"\";\n}\n\n.fa-arrow-alt-to-right:before {\n  content: \"\";\n}\n\n.fa-arrow-alt-to-top:before {\n  content: \"\";\n}\n\n.fa-arrow-alt-up:before {\n  content: \"\";\n}\n\n.fa-arrow-circle-down:before {\n  content: \"\";\n}\n\n.fa-arrow-circle-left:before {\n  content: \"\";\n}\n\n.fa-arrow-circle-right:before {\n  content: \"\";\n}\n\n.fa-arrow-circle-up:before {\n  content: \"\";\n}\n\n.fa-arrow-down:before {\n  content: \"\";\n}\n\n.fa-arrow-from-bottom:before {\n  content: \"\";\n}\n\n.fa-arrow-from-left:before {\n  content: \"\";\n}\n\n.fa-arrow-from-right:before {\n  content: \"\";\n}\n\n.fa-arrow-from-top:before {\n  content: \"\";\n}\n\n.fa-arrow-left:before {\n  content: \"\";\n}\n\n.fa-arrow-right:before {\n  content: \"\";\n}\n\n.fa-arrow-square-down:before {\n  content: \"\";\n}\n\n.fa-arrow-square-left:before {\n  content: \"\";\n}\n\n.fa-arrow-square-right:before {\n  content: \"\";\n}\n\n.fa-arrow-square-up:before {\n  content: \"\";\n}\n\n.fa-arrow-to-bottom:before {\n  content: \"\";\n}\n\n.fa-arrow-to-left:before {\n  content: \"\";\n}\n\n.fa-arrow-to-right:before {\n  content: \"\";\n}\n\n.fa-arrow-to-top:before {\n  content: \"\";\n}\n\n.fa-arrow-up:before {\n  content: \"\";\n}\n\n.fa-arrows:before {\n  content: \"\";\n}\n\n.fa-arrows-alt:before {\n  content: \"\";\n}\n\n.fa-arrows-alt-h:before {\n  content: \"\";\n}\n\n.fa-arrows-alt-v:before {\n  content: \"\";\n}\n\n.fa-arrows-h:before {\n  content: \"\";\n}\n\n.fa-arrows-v:before {\n  content: \"\";\n}\n\n.fa-artstation:before {\n  content: \"\";\n}\n\n.fa-assistive-listening-systems:before {\n  content: \"\";\n}\n\n.fa-asterisk:before {\n  content: \"\";\n}\n\n.fa-asymmetrik:before {\n  content: \"\";\n}\n\n.fa-at:before {\n  content: \"\";\n}\n\n.fa-atlas:before {\n  content: \"\";\n}\n\n.fa-atlassian:before {\n  content: \"\";\n}\n\n.fa-atom:before {\n  content: \"\";\n}\n\n.fa-atom-alt:before {\n  content: \"\";\n}\n\n.fa-audible:before {\n  content: \"\";\n}\n\n.fa-audio-description:before {\n  content: \"\";\n}\n\n.fa-autoprefixer:before {\n  content: \"\";\n}\n\n.fa-avianex:before {\n  content: \"\";\n}\n\n.fa-aviato:before {\n  content: \"\";\n}\n\n.fa-award:before {\n  content: \"\";\n}\n\n.fa-aws:before {\n  content: \"\";\n}\n\n.fa-axe:before {\n  content: \"\";\n}\n\n.fa-axe-battle:before {\n  content: \"\";\n}\n\n.fa-baby:before {\n  content: \"\";\n}\n\n.fa-baby-carriage:before {\n  content: \"\";\n}\n\n.fa-backpack:before {\n  content: \"\";\n}\n\n.fa-backspace:before {\n  content: \"\";\n}\n\n.fa-backward:before {\n  content: \"\";\n}\n\n.fa-bacon:before {\n  content: \"\";\n}\n\n.fa-bacteria:before {\n  content: \"陵\";\n}\n\n.fa-bacterium:before {\n  content: \"讀\";\n}\n\n.fa-badge:before {\n  content: \"\";\n}\n\n.fa-badge-check:before {\n  content: \"\";\n}\n\n.fa-badge-dollar:before {\n  content: \"\";\n}\n\n.fa-badge-percent:before {\n  content: \"\";\n}\n\n.fa-badge-sheriff:before {\n  content: \"\";\n}\n\n.fa-badger-honey:before {\n  content: \"\";\n}\n\n.fa-bags-shopping:before {\n  content: \"\";\n}\n\n.fa-bahai:before {\n  content: \"\";\n}\n\n.fa-balance-scale:before {\n  content: \"\";\n}\n\n.fa-balance-scale-left:before {\n  content: \"\";\n}\n\n.fa-balance-scale-right:before {\n  content: \"\";\n}\n\n.fa-ball-pile:before {\n  content: \"\";\n}\n\n.fa-ballot:before {\n  content: \"\";\n}\n\n.fa-ballot-check:before {\n  content: \"\";\n}\n\n.fa-ban:before {\n  content: \"\";\n}\n\n.fa-band-aid:before {\n  content: \"\";\n}\n\n.fa-bandcamp:before {\n  content: \"\";\n}\n\n.fa-banjo:before {\n  content: \"\";\n}\n\n.fa-barcode:before {\n  content: \"\";\n}\n\n.fa-barcode-alt:before {\n  content: \"\";\n}\n\n.fa-barcode-read:before {\n  content: \"\";\n}\n\n.fa-barcode-scan:before {\n  content: \"\";\n}\n\n.fa-bars:before {\n  content: \"\";\n}\n\n.fa-baseball:before {\n  content: \"\";\n}\n\n.fa-baseball-ball:before {\n  content: \"\";\n}\n\n.fa-basketball-ball:before {\n  content: \"\";\n}\n\n.fa-basketball-hoop:before {\n  content: \"\";\n}\n\n.fa-bat:before {\n  content: \"\";\n}\n\n.fa-bath:before {\n  content: \"\";\n}\n\n.fa-battery-bolt:before {\n  content: \"\";\n}\n\n.fa-battery-empty:before {\n  content: \"\";\n}\n\n.fa-battery-full:before {\n  content: \"\";\n}\n\n.fa-battery-half:before {\n  content: \"\";\n}\n\n.fa-battery-quarter:before {\n  content: \"\";\n}\n\n.fa-battery-slash:before {\n  content: \"\";\n}\n\n.fa-battery-three-quarters:before {\n  content: \"\";\n}\n\n.fa-battle-net:before {\n  content: \"\";\n}\n\n.fa-bed:before {\n  content: \"\";\n}\n\n.fa-bed-alt:before {\n  content: \"\";\n}\n\n.fa-bed-bunk:before {\n  content: \"\";\n}\n\n.fa-bed-empty:before {\n  content: \"\";\n}\n\n.fa-beer:before {\n  content: \"\";\n}\n\n.fa-behance:before {\n  content: \"\";\n}\n\n.fa-behance-square:before {\n  content: \"\";\n}\n\n.fa-bell:before {\n  content: \"\";\n}\n\n.fa-bell-exclamation:before {\n  content: \"\";\n}\n\n.fa-bell-on:before {\n  content: \"\";\n}\n\n.fa-bell-plus:before {\n  content: \"\";\n}\n\n.fa-bell-school:before {\n  content: \"\";\n}\n\n.fa-bell-school-slash:before {\n  content: \"\";\n}\n\n.fa-bell-slash:before {\n  content: \"\";\n}\n\n.fa-bells:before {\n  content: \"\";\n}\n\n.fa-betamax:before {\n  content: \"\";\n}\n\n.fa-bezier-curve:before {\n  content: \"\";\n}\n\n.fa-bible:before {\n  content: \"\";\n}\n\n.fa-bicycle:before {\n  content: \"\";\n}\n\n.fa-biking:before {\n  content: \"\";\n}\n\n.fa-biking-mountain:before {\n  content: \"\";\n}\n\n.fa-bimobject:before {\n  content: \"\";\n}\n\n.fa-binoculars:before {\n  content: \"\";\n}\n\n.fa-biohazard:before {\n  content: \"\";\n}\n\n.fa-birthday-cake:before {\n  content: \"\";\n}\n\n.fa-bitbucket:before {\n  content: \"\";\n}\n\n.fa-bitcoin:before {\n  content: \"\";\n}\n\n.fa-bity:before {\n  content: \"\";\n}\n\n.fa-black-tie:before {\n  content: \"\";\n}\n\n.fa-blackberry:before {\n  content: \"\";\n}\n\n.fa-blanket:before {\n  content: \"\";\n}\n\n.fa-blender:before {\n  content: \"\";\n}\n\n.fa-blender-phone:before {\n  content: \"\";\n}\n\n.fa-blind:before {\n  content: \"\";\n}\n\n.fa-blinds:before {\n  content: \"\";\n}\n\n.fa-blinds-open:before {\n  content: \"\";\n}\n\n.fa-blinds-raised:before {\n  content: \"\";\n}\n\n.fa-blog:before {\n  content: \"\";\n}\n\n.fa-blogger:before {\n  content: \"\";\n}\n\n.fa-blogger-b:before {\n  content: \"\";\n}\n\n.fa-bluetooth:before {\n  content: \"\";\n}\n\n.fa-bluetooth-b:before {\n  content: \"\";\n}\n\n.fa-bold:before {\n  content: \"\";\n}\n\n.fa-bolt:before {\n  content: \"\";\n}\n\n.fa-bomb:before {\n  content: \"\";\n}\n\n.fa-bone:before {\n  content: \"\";\n}\n\n.fa-bone-break:before {\n  content: \"\";\n}\n\n.fa-bong:before {\n  content: \"\";\n}\n\n.fa-book:before {\n  content: \"\";\n}\n\n.fa-book-alt:before {\n  content: \"\";\n}\n\n.fa-book-dead:before {\n  content: \"\";\n}\n\n.fa-book-heart:before {\n  content: \"\";\n}\n\n.fa-book-medical:before {\n  content: \"\";\n}\n\n.fa-book-open:before {\n  content: \"\";\n}\n\n.fa-book-reader:before {\n  content: \"\";\n}\n\n.fa-book-spells:before {\n  content: \"\";\n}\n\n.fa-book-user:before {\n  content: \"\";\n}\n\n.fa-bookmark:before {\n  content: \"\";\n}\n\n.fa-books:before {\n  content: \"\";\n}\n\n.fa-books-medical:before {\n  content: \"\";\n}\n\n.fa-boombox:before {\n  content: \"\";\n}\n\n.fa-boot:before {\n  content: \"\";\n}\n\n.fa-booth-curtain:before {\n  content: \"\";\n}\n\n.fa-bootstrap:before {\n  content: \"\";\n}\n\n.fa-border-all:before {\n  content: \"\";\n}\n\n.fa-border-bottom:before {\n  content: \"\";\n}\n\n.fa-border-center-h:before {\n  content: \"\";\n}\n\n.fa-border-center-v:before {\n  content: \"\";\n}\n\n.fa-border-inner:before {\n  content: \"\";\n}\n\n.fa-border-left:before {\n  content: \"\";\n}\n\n.fa-border-none:before {\n  content: \"\";\n}\n\n.fa-border-outer:before {\n  content: \"\";\n}\n\n.fa-border-right:before {\n  content: \"\";\n}\n\n.fa-border-style:before {\n  content: \"\";\n}\n\n.fa-border-style-alt:before {\n  content: \"\";\n}\n\n.fa-border-top:before {\n  content: \"\";\n}\n\n.fa-bow-arrow:before {\n  content: \"\";\n}\n\n.fa-bowling-ball:before {\n  content: \"\";\n}\n\n.fa-bowling-pins:before {\n  content: \"\";\n}\n\n.fa-box:before {\n  content: \"\";\n}\n\n.fa-box-alt:before {\n  content: \"\";\n}\n\n.fa-box-ballot:before {\n  content: \"\";\n}\n\n.fa-box-check:before {\n  content: \"\";\n}\n\n.fa-box-fragile:before {\n  content: \"\";\n}\n\n.fa-box-full:before {\n  content: \"\";\n}\n\n.fa-box-heart:before {\n  content: \"\";\n}\n\n.fa-box-open:before {\n  content: \"\";\n}\n\n.fa-box-tissue:before {\n  content: \"拏\";\n}\n\n.fa-box-up:before {\n  content: \"\";\n}\n\n.fa-box-usd:before {\n  content: \"\";\n}\n\n.fa-boxes:before {\n  content: \"\";\n}\n\n.fa-boxes-alt:before {\n  content: \"\";\n}\n\n.fa-boxing-glove:before {\n  content: \"\";\n}\n\n.fa-brackets:before {\n  content: \"\";\n}\n\n.fa-brackets-curly:before {\n  content: \"\";\n}\n\n.fa-braille:before {\n  content: \"\";\n}\n\n.fa-brain:before {\n  content: \"\";\n}\n\n.fa-bread-loaf:before {\n  content: \"\";\n}\n\n.fa-bread-slice:before {\n  content: \"\";\n}\n\n.fa-briefcase:before {\n  content: \"\";\n}\n\n.fa-briefcase-medical:before {\n  content: \"\";\n}\n\n.fa-bring-forward:before {\n  content: \"\";\n}\n\n.fa-bring-front:before {\n  content: \"\";\n}\n\n.fa-broadcast-tower:before {\n  content: \"\";\n}\n\n.fa-broom:before {\n  content: \"\";\n}\n\n.fa-browser:before {\n  content: \"\";\n}\n\n.fa-brush:before {\n  content: \"\";\n}\n\n.fa-btc:before {\n  content: \"\";\n}\n\n.fa-buffer:before {\n  content: \"\";\n}\n\n.fa-bug:before {\n  content: \"\";\n}\n\n.fa-building:before {\n  content: \"\";\n}\n\n.fa-bullhorn:before {\n  content: \"\";\n}\n\n.fa-bullseye:before {\n  content: \"\";\n}\n\n.fa-bullseye-arrow:before {\n  content: \"\";\n}\n\n.fa-bullseye-pointer:before {\n  content: \"\";\n}\n\n.fa-burger-soda:before {\n  content: \"\";\n}\n\n.fa-burn:before {\n  content: \"\";\n}\n\n.fa-buromobelexperte:before {\n  content: \"\";\n}\n\n.fa-burrito:before {\n  content: \"\";\n}\n\n.fa-bus:before {\n  content: \"\";\n}\n\n.fa-bus-alt:before {\n  content: \"\";\n}\n\n.fa-bus-school:before {\n  content: \"\";\n}\n\n.fa-business-time:before {\n  content: \"\";\n}\n\n.fa-buy-n-large:before {\n  content: \"\";\n}\n\n.fa-buysellads:before {\n  content: \"\";\n}\n\n.fa-cabinet-filing:before {\n  content: \"\";\n}\n\n.fa-cactus:before {\n  content: \"\";\n}\n\n.fa-calculator:before {\n  content: \"\";\n}\n\n.fa-calculator-alt:before {\n  content: \"\";\n}\n\n.fa-calendar:before {\n  content: \"\";\n}\n\n.fa-calendar-alt:before {\n  content: \"\";\n}\n\n.fa-calendar-check:before {\n  content: \"\";\n}\n\n.fa-calendar-day:before {\n  content: \"\";\n}\n\n.fa-calendar-edit:before {\n  content: \"\";\n}\n\n.fa-calendar-exclamation:before {\n  content: \"\";\n}\n\n.fa-calendar-minus:before {\n  content: \"\";\n}\n\n.fa-calendar-plus:before {\n  content: \"\";\n}\n\n.fa-calendar-star:before {\n  content: \"\";\n}\n\n.fa-calendar-times:before {\n  content: \"\";\n}\n\n.fa-calendar-week:before {\n  content: \"\";\n}\n\n.fa-camcorder:before {\n  content: \"\";\n}\n\n.fa-camera:before {\n  content: \"\";\n}\n\n.fa-camera-alt:before {\n  content: \"\";\n}\n\n.fa-camera-home:before {\n  content: \"\";\n}\n\n.fa-camera-movie:before {\n  content: \"\";\n}\n\n.fa-camera-polaroid:before {\n  content: \"\";\n}\n\n.fa-camera-retro:before {\n  content: \"\";\n}\n\n.fa-campfire:before {\n  content: \"\";\n}\n\n.fa-campground:before {\n  content: \"\";\n}\n\n.fa-canadian-maple-leaf:before {\n  content: \"\";\n}\n\n.fa-candle-holder:before {\n  content: \"\";\n}\n\n.fa-candy-cane:before {\n  content: \"\";\n}\n\n.fa-candy-corn:before {\n  content: \"\";\n}\n\n.fa-cannabis:before {\n  content: \"\";\n}\n\n.fa-capsules:before {\n  content: \"\";\n}\n\n.fa-car:before {\n  content: \"\";\n}\n\n.fa-car-alt:before {\n  content: \"\";\n}\n\n.fa-car-battery:before {\n  content: \"\";\n}\n\n.fa-car-building:before {\n  content: \"\";\n}\n\n.fa-car-bump:before {\n  content: \"\";\n}\n\n.fa-car-bus:before {\n  content: \"\";\n}\n\n.fa-car-crash:before {\n  content: \"\";\n}\n\n.fa-car-garage:before {\n  content: \"\";\n}\n\n.fa-car-mechanic:before {\n  content: \"\";\n}\n\n.fa-car-side:before {\n  content: \"\";\n}\n\n.fa-car-tilt:before {\n  content: \"\";\n}\n\n.fa-car-wash:before {\n  content: \"\";\n}\n\n.fa-caravan:before {\n  content: \"\";\n}\n\n.fa-caravan-alt:before {\n  content: \"豈\";\n}\n\n.fa-caret-circle-down:before {\n  content: \"\";\n}\n\n.fa-caret-circle-left:before {\n  content: \"\";\n}\n\n.fa-caret-circle-right:before {\n  content: \"\";\n}\n\n.fa-caret-circle-up:before {\n  content: \"\";\n}\n\n.fa-caret-down:before {\n  content: \"\";\n}\n\n.fa-caret-left:before {\n  content: \"\";\n}\n\n.fa-caret-right:before {\n  content: \"\";\n}\n\n.fa-caret-square-down:before {\n  content: \"\";\n}\n\n.fa-caret-square-left:before {\n  content: \"\";\n}\n\n.fa-caret-square-right:before {\n  content: \"\";\n}\n\n.fa-caret-square-up:before {\n  content: \"\";\n}\n\n.fa-caret-up:before {\n  content: \"\";\n}\n\n.fa-carrot:before {\n  content: \"\";\n}\n\n.fa-cars:before {\n  content: \"\";\n}\n\n.fa-cart-arrow-down:before {\n  content: \"\";\n}\n\n.fa-cart-plus:before {\n  content: \"\";\n}\n\n.fa-cash-register:before {\n  content: \"\";\n}\n\n.fa-cassette-tape:before {\n  content: \"\";\n}\n\n.fa-cat:before {\n  content: \"\";\n}\n\n.fa-cat-space:before {\n  content: \"更\";\n}\n\n.fa-cauldron:before {\n  content: \"\";\n}\n\n.fa-cc-amazon-pay:before {\n  content: \"\";\n}\n\n.fa-cc-amex:before {\n  content: \"\";\n}\n\n.fa-cc-apple-pay:before {\n  content: \"\";\n}\n\n.fa-cc-diners-club:before {\n  content: \"\";\n}\n\n.fa-cc-discover:before {\n  content: \"\";\n}\n\n.fa-cc-jcb:before {\n  content: \"\";\n}\n\n.fa-cc-mastercard:before {\n  content: \"\";\n}\n\n.fa-cc-paypal:before {\n  content: \"\";\n}\n\n.fa-cc-stripe:before {\n  content: \"\";\n}\n\n.fa-cc-visa:before {\n  content: \"\";\n}\n\n.fa-cctv:before {\n  content: \"\";\n}\n\n.fa-centercode:before {\n  content: \"\";\n}\n\n.fa-centos:before {\n  content: \"\";\n}\n\n.fa-certificate:before {\n  content: \"\";\n}\n\n.fa-chair:before {\n  content: \"\";\n}\n\n.fa-chair-office:before {\n  content: \"\";\n}\n\n.fa-chalkboard:before {\n  content: \"\";\n}\n\n.fa-chalkboard-teacher:before {\n  content: \"\";\n}\n\n.fa-charging-station:before {\n  content: \"\";\n}\n\n.fa-chart-area:before {\n  content: \"\";\n}\n\n.fa-chart-bar:before {\n  content: \"\";\n}\n\n.fa-chart-line:before {\n  content: \"\";\n}\n\n.fa-chart-line-down:before {\n  content: \"\";\n}\n\n.fa-chart-network:before {\n  content: \"\";\n}\n\n.fa-chart-pie:before {\n  content: \"\";\n}\n\n.fa-chart-pie-alt:before {\n  content: \"\";\n}\n\n.fa-chart-scatter:before {\n  content: \"\";\n}\n\n.fa-check:before {\n  content: \"\";\n}\n\n.fa-check-circle:before {\n  content: \"\";\n}\n\n.fa-check-double:before {\n  content: \"\";\n}\n\n.fa-check-square:before {\n  content: \"\";\n}\n\n.fa-cheese:before {\n  content: \"\";\n}\n\n.fa-cheese-swiss:before {\n  content: \"\";\n}\n\n.fa-cheeseburger:before {\n  content: \"\";\n}\n\n.fa-chess:before {\n  content: \"\";\n}\n\n.fa-chess-bishop:before {\n  content: \"\";\n}\n\n.fa-chess-bishop-alt:before {\n  content: \"\";\n}\n\n.fa-chess-board:before {\n  content: \"\";\n}\n\n.fa-chess-clock:before {\n  content: \"\";\n}\n\n.fa-chess-clock-alt:before {\n  content: \"\";\n}\n\n.fa-chess-king:before {\n  content: \"\";\n}\n\n.fa-chess-king-alt:before {\n  content: \"\";\n}\n\n.fa-chess-knight:before {\n  content: \"\";\n}\n\n.fa-chess-knight-alt:before {\n  content: \"\";\n}\n\n.fa-chess-pawn:before {\n  content: \"\";\n}\n\n.fa-chess-pawn-alt:before {\n  content: \"\";\n}\n\n.fa-chess-queen:before {\n  content: \"\";\n}\n\n.fa-chess-queen-alt:before {\n  content: \"\";\n}\n\n.fa-chess-rook:before {\n  content: \"\";\n}\n\n.fa-chess-rook-alt:before {\n  content: \"\";\n}\n\n.fa-chevron-circle-down:before {\n  content: \"\";\n}\n\n.fa-chevron-circle-left:before {\n  content: \"\";\n}\n\n.fa-chevron-circle-right:before {\n  content: \"\";\n}\n\n.fa-chevron-circle-up:before {\n  content: \"\";\n}\n\n.fa-chevron-double-down:before {\n  content: \"\";\n}\n\n.fa-chevron-double-left:before {\n  content: \"\";\n}\n\n.fa-chevron-double-right:before {\n  content: \"\";\n}\n\n.fa-chevron-double-up:before {\n  content: \"\";\n}\n\n.fa-chevron-down:before {\n  content: \"\";\n}\n\n.fa-chevron-left:before {\n  content: \"\";\n}\n\n.fa-chevron-right:before {\n  content: \"\";\n}\n\n.fa-chevron-square-down:before {\n  content: \"\";\n}\n\n.fa-chevron-square-left:before {\n  content: \"\";\n}\n\n.fa-chevron-square-right:before {\n  content: \"\";\n}\n\n.fa-chevron-square-up:before {\n  content: \"\";\n}\n\n.fa-chevron-up:before {\n  content: \"\";\n}\n\n.fa-child:before {\n  content: \"\";\n}\n\n.fa-chimney:before {\n  content: \"\";\n}\n\n.fa-chrome:before {\n  content: \"\";\n}\n\n.fa-chromecast:before {\n  content: \"\";\n}\n\n.fa-church:before {\n  content: \"\";\n}\n\n.fa-circle:before {\n  content: \"\";\n}\n\n.fa-circle-notch:before {\n  content: \"\";\n}\n\n.fa-city:before {\n  content: \"\";\n}\n\n.fa-clarinet:before {\n  content: \"\";\n}\n\n.fa-claw-marks:before {\n  content: \"\";\n}\n\n.fa-clinic-medical:before {\n  content: \"\";\n}\n\n.fa-clipboard:before {\n  content: \"\";\n}\n\n.fa-clipboard-check:before {\n  content: \"\";\n}\n\n.fa-clipboard-list:before {\n  content: \"\";\n}\n\n.fa-clipboard-list-check:before {\n  content: \"\";\n}\n\n.fa-clipboard-prescription:before {\n  content: \"\";\n}\n\n.fa-clipboard-user:before {\n  content: \"\";\n}\n\n.fa-clock:before {\n  content: \"\";\n}\n\n.fa-clone:before {\n  content: \"\";\n}\n\n.fa-closed-captioning:before {\n  content: \"\";\n}\n\n.fa-cloud:before {\n  content: \"\";\n}\n\n.fa-cloud-download:before {\n  content: \"\";\n}\n\n.fa-cloud-download-alt:before {\n  content: \"\";\n}\n\n.fa-cloud-drizzle:before {\n  content: \"\";\n}\n\n.fa-cloud-hail:before {\n  content: \"\";\n}\n\n.fa-cloud-hail-mixed:before {\n  content: \"\";\n}\n\n.fa-cloud-meatball:before {\n  content: \"\";\n}\n\n.fa-cloud-moon:before {\n  content: \"\";\n}\n\n.fa-cloud-moon-rain:before {\n  content: \"\";\n}\n\n.fa-cloud-music:before {\n  content: \"\";\n}\n\n.fa-cloud-rain:before {\n  content: \"\";\n}\n\n.fa-cloud-rainbow:before {\n  content: \"\";\n}\n\n.fa-cloud-showers:before {\n  content: \"\";\n}\n\n.fa-cloud-showers-heavy:before {\n  content: \"\";\n}\n\n.fa-cloud-sleet:before {\n  content: \"\";\n}\n\n.fa-cloud-snow:before {\n  content: \"\";\n}\n\n.fa-cloud-sun:before {\n  content: \"\";\n}\n\n.fa-cloud-sun-rain:before {\n  content: \"\";\n}\n\n.fa-cloud-upload:before {\n  content: \"\";\n}\n\n.fa-cloud-upload-alt:before {\n  content: \"\";\n}\n\n.fa-clouds:before {\n  content: \"\";\n}\n\n.fa-clouds-moon:before {\n  content: \"\";\n}\n\n.fa-clouds-sun:before {\n  content: \"\";\n}\n\n.fa-cloudscale:before {\n  content: \"\";\n}\n\n.fa-cloudsmith:before {\n  content: \"\";\n}\n\n.fa-cloudversify:before {\n  content: \"\";\n}\n\n.fa-club:before {\n  content: \"\";\n}\n\n.fa-cocktail:before {\n  content: \"\";\n}\n\n.fa-code:before {\n  content: \"\";\n}\n\n.fa-code-branch:before {\n  content: \"\";\n}\n\n.fa-code-commit:before {\n  content: \"\";\n}\n\n.fa-code-merge:before {\n  content: \"\";\n}\n\n.fa-codepen:before {\n  content: \"\";\n}\n\n.fa-codiepie:before {\n  content: \"\";\n}\n\n.fa-coffee:before {\n  content: \"\";\n}\n\n.fa-coffee-pot:before {\n  content: \"車\";\n}\n\n.fa-coffee-togo:before {\n  content: \"\";\n}\n\n.fa-coffin:before {\n  content: \"\";\n}\n\n.fa-coffin-cross:before {\n  content: \"陋\";\n}\n\n.fa-cog:before {\n  content: \"\";\n}\n\n.fa-cogs:before {\n  content: \"\";\n}\n\n.fa-coin:before {\n  content: \"\";\n}\n\n.fa-coins:before {\n  content: \"\";\n}\n\n.fa-columns:before {\n  content: \"\";\n}\n\n.fa-comet:before {\n  content: \"賈\";\n}\n\n.fa-comment:before {\n  content: \"\";\n}\n\n.fa-comment-alt:before {\n  content: \"\";\n}\n\n.fa-comment-alt-check:before {\n  content: \"\";\n}\n\n.fa-comment-alt-dollar:before {\n  content: \"\";\n}\n\n.fa-comment-alt-dots:before {\n  content: \"\";\n}\n\n.fa-comment-alt-edit:before {\n  content: \"\";\n}\n\n.fa-comment-alt-exclamation:before {\n  content: \"\";\n}\n\n.fa-comment-alt-lines:before {\n  content: \"\";\n}\n\n.fa-comment-alt-medical:before {\n  content: \"\";\n}\n\n.fa-comment-alt-minus:before {\n  content: \"\";\n}\n\n.fa-comment-alt-music:before {\n  content: \"\";\n}\n\n.fa-comment-alt-plus:before {\n  content: \"\";\n}\n\n.fa-comment-alt-slash:before {\n  content: \"\";\n}\n\n.fa-comment-alt-smile:before {\n  content: \"\";\n}\n\n.fa-comment-alt-times:before {\n  content: \"\";\n}\n\n.fa-comment-check:before {\n  content: \"\";\n}\n\n.fa-comment-dollar:before {\n  content: \"\";\n}\n\n.fa-comment-dots:before {\n  content: \"\";\n}\n\n.fa-comment-edit:before {\n  content: \"\";\n}\n\n.fa-comment-exclamation:before {\n  content: \"\";\n}\n\n.fa-comment-lines:before {\n  content: \"\";\n}\n\n.fa-comment-medical:before {\n  content: \"\";\n}\n\n.fa-comment-minus:before {\n  content: \"\";\n}\n\n.fa-comment-music:before {\n  content: \"\";\n}\n\n.fa-comment-plus:before {\n  content: \"\";\n}\n\n.fa-comment-slash:before {\n  content: \"\";\n}\n\n.fa-comment-smile:before {\n  content: \"\";\n}\n\n.fa-comment-times:before {\n  content: \"\";\n}\n\n.fa-comments:before {\n  content: \"\";\n}\n\n.fa-comments-alt:before {\n  content: \"\";\n}\n\n.fa-comments-alt-dollar:before {\n  content: \"\";\n}\n\n.fa-comments-dollar:before {\n  content: \"\";\n}\n\n.fa-compact-disc:before {\n  content: \"\";\n}\n\n.fa-compass:before {\n  content: \"\";\n}\n\n.fa-compass-slash:before {\n  content: \"\";\n}\n\n.fa-compress:before {\n  content: \"\";\n}\n\n.fa-compress-alt:before {\n  content: \"\";\n}\n\n.fa-compress-arrows-alt:before {\n  content: \"\";\n}\n\n.fa-compress-wide:before {\n  content: \"\";\n}\n\n.fa-computer-classic:before {\n  content: \"\";\n}\n\n.fa-computer-speaker:before {\n  content: \"\";\n}\n\n.fa-concierge-bell:before {\n  content: \"\";\n}\n\n.fa-confluence:before {\n  content: \"\";\n}\n\n.fa-connectdevelop:before {\n  content: \"\";\n}\n\n.fa-construction:before {\n  content: \"\";\n}\n\n.fa-container-storage:before {\n  content: \"\";\n}\n\n.fa-contao:before {\n  content: \"\";\n}\n\n.fa-conveyor-belt:before {\n  content: \"\";\n}\n\n.fa-conveyor-belt-alt:before {\n  content: \"\";\n}\n\n.fa-cookie:before {\n  content: \"\";\n}\n\n.fa-cookie-bite:before {\n  content: \"\";\n}\n\n.fa-copy:before {\n  content: \"\";\n}\n\n.fa-copyright:before {\n  content: \"\";\n}\n\n.fa-corn:before {\n  content: \"\";\n}\n\n.fa-cotton-bureau:before {\n  content: \"\";\n}\n\n.fa-couch:before {\n  content: \"\";\n}\n\n.fa-cow:before {\n  content: \"\";\n}\n\n.fa-cowbell:before {\n  content: \"\";\n}\n\n.fa-cowbell-more:before {\n  content: \"\";\n}\n\n.fa-cpanel:before {\n  content: \"\";\n}\n\n.fa-creative-commons:before {\n  content: \"\";\n}\n\n.fa-creative-commons-by:before {\n  content: \"\";\n}\n\n.fa-creative-commons-nc:before {\n  content: \"\";\n}\n\n.fa-creative-commons-nc-eu:before {\n  content: \"\";\n}\n\n.fa-creative-commons-nc-jp:before {\n  content: \"\";\n}\n\n.fa-creative-commons-nd:before {\n  content: \"\";\n}\n\n.fa-creative-commons-pd:before {\n  content: \"\";\n}\n\n.fa-creative-commons-pd-alt:before {\n  content: \"\";\n}\n\n.fa-creative-commons-remix:before {\n  content: \"\";\n}\n\n.fa-creative-commons-sa:before {\n  content: \"\";\n}\n\n.fa-creative-commons-sampling:before {\n  content: \"\";\n}\n\n.fa-creative-commons-sampling-plus:before {\n  content: \"\";\n}\n\n.fa-creative-commons-share:before {\n  content: \"\";\n}\n\n.fa-creative-commons-zero:before {\n  content: \"\";\n}\n\n.fa-credit-card:before {\n  content: \"\";\n}\n\n.fa-credit-card-blank:before {\n  content: \"\";\n}\n\n.fa-credit-card-front:before {\n  content: \"\";\n}\n\n.fa-cricket:before {\n  content: \"\";\n}\n\n.fa-critical-role:before {\n  content: \"\";\n}\n\n.fa-croissant:before {\n  content: \"\";\n}\n\n.fa-crop:before {\n  content: \"\";\n}\n\n.fa-crop-alt:before {\n  content: \"\";\n}\n\n.fa-cross:before {\n  content: \"\";\n}\n\n.fa-crosshairs:before {\n  content: \"\";\n}\n\n.fa-crow:before {\n  content: \"\";\n}\n\n.fa-crown:before {\n  content: \"\";\n}\n\n.fa-crutch:before {\n  content: \"\";\n}\n\n.fa-crutches:before {\n  content: \"\";\n}\n\n.fa--var-css3:before {\n  content: \"\";\n}\n\n.fa--var-css3-alt:before {\n  content: \"\";\n}\n\n.fa-cube:before {\n  content: \"\";\n}\n\n.fa-cubes:before {\n  content: \"\";\n}\n\n.fa-curling:before {\n  content: \"\";\n}\n\n.fa-cut:before {\n  content: \"\";\n}\n\n.fa-cuttlefish:before {\n  content: \"\";\n}\n\n.fa-d-and-d:before {\n  content: \"\";\n}\n\n.fa-d-and-d-beyond:before {\n  content: \"\";\n}\n\n.fa-dagger:before {\n  content: \"\";\n}\n\n.fa-dailymotion:before {\n  content: \"勒\";\n}\n\n.fa-dashcube:before {\n  content: \"\";\n}\n\n.fa-database:before {\n  content: \"\";\n}\n\n.fa-deaf:before {\n  content: \"\";\n}\n\n.fa-debug:before {\n  content: \"\";\n}\n\n.fa-deer:before {\n  content: \"\";\n}\n\n.fa-deer-rudolph:before {\n  content: \"\";\n}\n\n.fa-delicious:before {\n  content: \"\";\n}\n\n.fa-democrat:before {\n  content: \"\";\n}\n\n.fa-deploydog:before {\n  content: \"\";\n}\n\n.fa-deskpro:before {\n  content: \"\";\n}\n\n.fa-desktop:before {\n  content: \"\";\n}\n\n.fa-desktop-alt:before {\n  content: \"\";\n}\n\n.fa-dev:before {\n  content: \"\";\n}\n\n.fa-deviantart:before {\n  content: \"\";\n}\n\n.fa-dewpoint:before {\n  content: \"\";\n}\n\n.fa-dharmachakra:before {\n  content: \"\";\n}\n\n.fa-dhl:before {\n  content: \"\";\n}\n\n.fa-diagnoses:before {\n  content: \"\";\n}\n\n.fa-diamond:before {\n  content: \"\";\n}\n\n.fa-diaspora:before {\n  content: \"\";\n}\n\n.fa-dice:before {\n  content: \"\";\n}\n\n.fa--var-dice-d10:before {\n  content: \"\";\n}\n\n.fa--var-dice-d12:before {\n  content: \"\";\n}\n\n.fa--var-dice-d20:before {\n  content: \"\";\n}\n\n.fa--var-dice-d4:before {\n  content: \"\";\n}\n\n.fa--var-dice-d6:before {\n  content: \"\";\n}\n\n.fa--var-dice-d8:before {\n  content: \"\";\n}\n\n.fa-dice-five:before {\n  content: \"\";\n}\n\n.fa-dice-four:before {\n  content: \"\";\n}\n\n.fa-dice-one:before {\n  content: \"\";\n}\n\n.fa-dice-six:before {\n  content: \"\";\n}\n\n.fa-dice-three:before {\n  content: \"\";\n}\n\n.fa-dice-two:before {\n  content: \"\";\n}\n\n.fa-digg:before {\n  content: \"\";\n}\n\n.fa-digging:before {\n  content: \"\";\n}\n\n.fa-digital-ocean:before {\n  content: \"\";\n}\n\n.fa-digital-tachograph:before {\n  content: \"\";\n}\n\n.fa-diploma:before {\n  content: \"\";\n}\n\n.fa-directions:before {\n  content: \"\";\n}\n\n.fa-disc-drive:before {\n  content: \"\";\n}\n\n.fa-discord:before {\n  content: \"\";\n}\n\n.fa-discourse:before {\n  content: \"\";\n}\n\n.fa-disease:before {\n  content: \"\";\n}\n\n.fa-divide:before {\n  content: \"\";\n}\n\n.fa-dizzy:before {\n  content: \"\";\n}\n\n.fa-dna:before {\n  content: \"\";\n}\n\n.fa-do-not-enter:before {\n  content: \"\";\n}\n\n.fa-dochub:before {\n  content: \"\";\n}\n\n.fa-docker:before {\n  content: \"\";\n}\n\n.fa-dog:before {\n  content: \"\";\n}\n\n.fa-dog-leashed:before {\n  content: \"\";\n}\n\n.fa-dollar-sign:before {\n  content: \"\";\n}\n\n.fa-dolly:before {\n  content: \"\";\n}\n\n.fa-dolly-empty:before {\n  content: \"\";\n}\n\n.fa-dolly-flatbed:before {\n  content: \"\";\n}\n\n.fa-dolly-flatbed-alt:before {\n  content: \"\";\n}\n\n.fa-dolly-flatbed-empty:before {\n  content: \"\";\n}\n\n.fa-donate:before {\n  content: \"\";\n}\n\n.fa-door-closed:before {\n  content: \"\";\n}\n\n.fa-door-open:before {\n  content: \"\";\n}\n\n.fa-dot-circle:before {\n  content: \"\";\n}\n\n.fa-dove:before {\n  content: \"\";\n}\n\n.fa-download:before {\n  content: \"\";\n}\n\n.fa--var-draft2digital:before {\n  content: \"\";\n}\n\n.fa-drafting-compass:before {\n  content: \"\";\n}\n\n.fa-dragon:before {\n  content: \"\";\n}\n\n.fa-draw-circle:before {\n  content: \"\";\n}\n\n.fa-draw-polygon:before {\n  content: \"\";\n}\n\n.fa-draw-square:before {\n  content: \"\";\n}\n\n.fa-dreidel:before {\n  content: \"\";\n}\n\n.fa-dribbble:before {\n  content: \"\";\n}\n\n.fa-dribbble-square:before {\n  content: \"\";\n}\n\n.fa-drone:before {\n  content: \"\";\n}\n\n.fa-drone-alt:before {\n  content: \"\";\n}\n\n.fa-dropbox:before {\n  content: \"\";\n}\n\n.fa-drum:before {\n  content: \"\";\n}\n\n.fa-drum-steelpan:before {\n  content: \"\";\n}\n\n.fa-drumstick:before {\n  content: \"\";\n}\n\n.fa-drumstick-bite:before {\n  content: \"\";\n}\n\n.fa-drupal:before {\n  content: \"\";\n}\n\n.fa-dryer:before {\n  content: \"\";\n}\n\n.fa-dryer-alt:before {\n  content: \"\";\n}\n\n.fa-duck:before {\n  content: \"\";\n}\n\n.fa-dumbbell:before {\n  content: \"\";\n}\n\n.fa-dumpster:before {\n  content: \"\";\n}\n\n.fa-dumpster-fire:before {\n  content: \"\";\n}\n\n.fa-dungeon:before {\n  content: \"\";\n}\n\n.fa-dyalog:before {\n  content: \"\";\n}\n\n.fa-ear:before {\n  content: \"\";\n}\n\n.fa-ear-muffs:before {\n  content: \"\";\n}\n\n.fa-earlybirds:before {\n  content: \"\";\n}\n\n.fa-ebay:before {\n  content: \"\";\n}\n\n.fa-eclipse:before {\n  content: \"\";\n}\n\n.fa-eclipse-alt:before {\n  content: \"\";\n}\n\n.fa-edge:before {\n  content: \"\";\n}\n\n.fa-edit:before {\n  content: \"\";\n}\n\n.fa-egg:before {\n  content: \"\";\n}\n\n.fa-egg-fried:before {\n  content: \"\";\n}\n\n.fa-eject:before {\n  content: \"\";\n}\n\n.fa-elementor:before {\n  content: \"\";\n}\n\n.fa-elephant:before {\n  content: \"\";\n}\n\n.fa-ellipsis-h:before {\n  content: \"\";\n}\n\n.fa-ellipsis-h-alt:before {\n  content: \"\";\n}\n\n.fa-ellipsis-v:before {\n  content: \"\";\n}\n\n.fa-ellipsis-v-alt:before {\n  content: \"\";\n}\n\n.fa-ello:before {\n  content: \"\";\n}\n\n.fa-ember:before {\n  content: \"\";\n}\n\n.fa-empire:before {\n  content: \"\";\n}\n\n.fa-empty-set:before {\n  content: \"\";\n}\n\n.fa-engine-warning:before {\n  content: \"\";\n}\n\n.fa-envelope:before {\n  content: \"\";\n}\n\n.fa-envelope-open:before {\n  content: \"\";\n}\n\n.fa-envelope-open-dollar:before {\n  content: \"\";\n}\n\n.fa-envelope-open-text:before {\n  content: \"\";\n}\n\n.fa-envelope-square:before {\n  content: \"\";\n}\n\n.fa-envira:before {\n  content: \"\";\n}\n\n.fa-equals:before {\n  content: \"\";\n}\n\n.fa-eraser:before {\n  content: \"\";\n}\n\n.fa-erlang:before {\n  content: \"\";\n}\n\n.fa-ethereum:before {\n  content: \"\";\n}\n\n.fa-ethernet:before {\n  content: \"\";\n}\n\n.fa-etsy:before {\n  content: \"\";\n}\n\n.fa-euro-sign:before {\n  content: \"\";\n}\n\n.fa-evernote:before {\n  content: \"\";\n}\n\n.fa-exchange:before {\n  content: \"\";\n}\n\n.fa-exchange-alt:before {\n  content: \"\";\n}\n\n.fa-exclamation:before {\n  content: \"\";\n}\n\n.fa-exclamation-circle:before {\n  content: \"\";\n}\n\n.fa-exclamation-square:before {\n  content: \"\";\n}\n\n.fa-exclamation-triangle:before {\n  content: \"\";\n}\n\n.fa-expand:before {\n  content: \"\";\n}\n\n.fa-expand-alt:before {\n  content: \"\";\n}\n\n.fa-expand-arrows:before {\n  content: \"\";\n}\n\n.fa-expand-arrows-alt:before {\n  content: \"\";\n}\n\n.fa-expand-wide:before {\n  content: \"\";\n}\n\n.fa-expeditedssl:before {\n  content: \"\";\n}\n\n.fa-external-link:before {\n  content: \"\";\n}\n\n.fa-external-link-alt:before {\n  content: \"\";\n}\n\n.fa-external-link-square:before {\n  content: \"\";\n}\n\n.fa-external-link-square-alt:before {\n  content: \"\";\n}\n\n.fa-eye:before {\n  content: \"\";\n}\n\n.fa-eye-dropper:before {\n  content: \"\";\n}\n\n.fa-eye-evil:before {\n  content: \"\";\n}\n\n.fa-eye-slash:before {\n  content: \"\";\n}\n\n.fa-facebook:before {\n  content: \"\";\n}\n\n.fa-facebook-f:before {\n  content: \"\";\n}\n\n.fa-facebook-messenger:before {\n  content: \"\";\n}\n\n.fa-facebook-square:before {\n  content: \"\";\n}\n\n.fa-fan:before {\n  content: \"\";\n}\n\n.fa-fan-table:before {\n  content: \"滑\";\n}\n\n.fa-fantasy-flight-games:before {\n  content: \"\";\n}\n\n.fa-farm:before {\n  content: \"\";\n}\n\n.fa-fast-backward:before {\n  content: \"\";\n}\n\n.fa-fast-forward:before {\n  content: \"\";\n}\n\n.fa-faucet:before {\n  content: \"串\";\n}\n\n.fa-faucet-drip:before {\n  content: \"句\";\n}\n\n.fa-fax:before {\n  content: \"\";\n}\n\n.fa-feather:before {\n  content: \"\";\n}\n\n.fa-feather-alt:before {\n  content: \"\";\n}\n\n.fa-fedex:before {\n  content: \"\";\n}\n\n.fa-fedora:before {\n  content: \"\";\n}\n\n.fa-female:before {\n  content: \"\";\n}\n\n.fa-field-hockey:before {\n  content: \"\";\n}\n\n.fa-fighter-jet:before {\n  content: \"\";\n}\n\n.fa-figma:before {\n  content: \"\";\n}\n\n.fa-file:before {\n  content: \"\";\n}\n\n.fa-file-alt:before {\n  content: \"\";\n}\n\n.fa-file-archive:before {\n  content: \"\";\n}\n\n.fa-file-audio:before {\n  content: \"\";\n}\n\n.fa-file-certificate:before {\n  content: \"\";\n}\n\n.fa-file-chart-line:before {\n  content: \"\";\n}\n\n.fa-file-chart-pie:before {\n  content: \"\";\n}\n\n.fa-file-check:before {\n  content: \"\";\n}\n\n.fa-file-code:before {\n  content: \"\";\n}\n\n.fa-file-contract:before {\n  content: \"\";\n}\n\n.fa-file-csv:before {\n  content: \"\";\n}\n\n.fa-file-download:before {\n  content: \"\";\n}\n\n.fa-file-edit:before {\n  content: \"\";\n}\n\n.fa-file-excel:before {\n  content: \"\";\n}\n\n.fa-file-exclamation:before {\n  content: \"\";\n}\n\n.fa-file-export:before {\n  content: \"\";\n}\n\n.fa-file-image:before {\n  content: \"\";\n}\n\n.fa-file-import:before {\n  content: \"\";\n}\n\n.fa-file-invoice:before {\n  content: \"\";\n}\n\n.fa-file-invoice-dollar:before {\n  content: \"\";\n}\n\n.fa-file-medical:before {\n  content: \"\";\n}\n\n.fa-file-medical-alt:before {\n  content: \"\";\n}\n\n.fa-file-minus:before {\n  content: \"\";\n}\n\n.fa-file-music:before {\n  content: \"\";\n}\n\n.fa-file-pdf:before {\n  content: \"\";\n}\n\n.fa-file-plus:before {\n  content: \"\";\n}\n\n.fa-file-powerpoint:before {\n  content: \"\";\n}\n\n.fa-file-prescription:before {\n  content: \"\";\n}\n\n.fa-file-search:before {\n  content: \"\";\n}\n\n.fa-file-signature:before {\n  content: \"\";\n}\n\n.fa-file-spreadsheet:before {\n  content: \"\";\n}\n\n.fa-file-times:before {\n  content: \"\";\n}\n\n.fa-file-upload:before {\n  content: \"\";\n}\n\n.fa-file-user:before {\n  content: \"\";\n}\n\n.fa-file-video:before {\n  content: \"\";\n}\n\n.fa-file-word:before {\n  content: \"\";\n}\n\n.fa-files-medical:before {\n  content: \"\";\n}\n\n.fa-fill:before {\n  content: \"\";\n}\n\n.fa-fill-drip:before {\n  content: \"\";\n}\n\n.fa-film:before {\n  content: \"\";\n}\n\n.fa-film-alt:before {\n  content: \"\";\n}\n\n.fa-film-canister:before {\n  content: \"\";\n}\n\n.fa-filter:before {\n  content: \"\";\n}\n\n.fa-fingerprint:before {\n  content: \"\";\n}\n\n.fa-fire:before {\n  content: \"\";\n}\n\n.fa-fire-alt:before {\n  content: \"\";\n}\n\n.fa-fire-extinguisher:before {\n  content: \"\";\n}\n\n.fa-fire-smoke:before {\n  content: \"\";\n}\n\n.fa-firefox:before {\n  content: \"\";\n}\n\n.fa-firefox-browser:before {\n  content: \"龜\";\n}\n\n.fa-fireplace:before {\n  content: \"\";\n}\n\n.fa-first-aid:before {\n  content: \"\";\n}\n\n.fa-first-order:before {\n  content: \"\";\n}\n\n.fa-first-order-alt:before {\n  content: \"\";\n}\n\n.fa-firstdraft:before {\n  content: \"\";\n}\n\n.fa-fish:before {\n  content: \"\";\n}\n\n.fa-fish-cooked:before {\n  content: \"\";\n}\n\n.fa-fist-raised:before {\n  content: \"\";\n}\n\n.fa-flag:before {\n  content: \"\";\n}\n\n.fa-flag-alt:before {\n  content: \"\";\n}\n\n.fa-flag-checkered:before {\n  content: \"\";\n}\n\n.fa-flag-usa:before {\n  content: \"\";\n}\n\n.fa-flame:before {\n  content: \"\";\n}\n\n.fa-flashlight:before {\n  content: \"\";\n}\n\n.fa-flask:before {\n  content: \"\";\n}\n\n.fa-flask-poison:before {\n  content: \"\";\n}\n\n.fa-flask-potion:before {\n  content: \"\";\n}\n\n.fa-flickr:before {\n  content: \"\";\n}\n\n.fa-flipboard:before {\n  content: \"\";\n}\n\n.fa-flower:before {\n  content: \"\";\n}\n\n.fa-flower-daffodil:before {\n  content: \"\";\n}\n\n.fa-flower-tulip:before {\n  content: \"\";\n}\n\n.fa-flushed:before {\n  content: \"\";\n}\n\n.fa-flute:before {\n  content: \"\";\n}\n\n.fa-flux-capacitor:before {\n  content: \"\";\n}\n\n.fa-fly:before {\n  content: \"\";\n}\n\n.fa-fog:before {\n  content: \"\";\n}\n\n.fa-folder:before {\n  content: \"\";\n}\n\n.fa-folder-download:before {\n  content: \"肋\";\n}\n\n.fa-folder-minus:before {\n  content: \"\";\n}\n\n.fa-folder-open:before {\n  content: \"\";\n}\n\n.fa-folder-plus:before {\n  content: \"\";\n}\n\n.fa-folder-times:before {\n  content: \"\";\n}\n\n.fa-folder-tree:before {\n  content: \"\";\n}\n\n.fa-folder-upload:before {\n  content: \"凜\";\n}\n\n.fa-folders:before {\n  content: \"\";\n}\n\n.fa-font:before {\n  content: \"\";\n}\n\n.fa-font-awesome:before {\n  content: \"\";\n}\n\n.fa-font-awesome-alt:before {\n  content: \"\";\n}\n\n.fa-font-awesome-flag:before {\n  content: \"\";\n}\n\n.fa-font-awesome-logo-full:before {\n  content: \"\";\n}\n\n.fa-font-case:before {\n  content: \"\";\n}\n\n.fa-fonticons:before {\n  content: \"\";\n}\n\n.fa-fonticons-fi:before {\n  content: \"\";\n}\n\n.fa-football-ball:before {\n  content: \"\";\n}\n\n.fa-football-helmet:before {\n  content: \"\";\n}\n\n.fa-forklift:before {\n  content: \"\";\n}\n\n.fa-fort-awesome:before {\n  content: \"\";\n}\n\n.fa-fort-awesome-alt:before {\n  content: \"\";\n}\n\n.fa-forumbee:before {\n  content: \"\";\n}\n\n.fa-forward:before {\n  content: \"\";\n}\n\n.fa-foursquare:before {\n  content: \"\";\n}\n\n.fa-fragile:before {\n  content: \"\";\n}\n\n.fa-free-code-camp:before {\n  content: \"\";\n}\n\n.fa-freebsd:before {\n  content: \"\";\n}\n\n.fa-french-fries:before {\n  content: \"\";\n}\n\n.fa-frog:before {\n  content: \"\";\n}\n\n.fa-frosty-head:before {\n  content: \"\";\n}\n\n.fa-frown:before {\n  content: \"\";\n}\n\n.fa-frown-open:before {\n  content: \"\";\n}\n\n.fa-fulcrum:before {\n  content: \"\";\n}\n\n.fa-function:before {\n  content: \"\";\n}\n\n.fa-funnel-dollar:before {\n  content: \"\";\n}\n\n.fa-futbol:before {\n  content: \"\";\n}\n\n.fa-galactic-republic:before {\n  content: \"\";\n}\n\n.fa-galactic-senate:before {\n  content: \"\";\n}\n\n.fa-galaxy:before {\n  content: \"龜\";\n}\n\n.fa-game-board:before {\n  content: \"\";\n}\n\n.fa-game-board-alt:before {\n  content: \"\";\n}\n\n.fa-game-console-handheld:before {\n  content: \"\";\n}\n\n.fa-gamepad:before {\n  content: \"\";\n}\n\n.fa-gamepad-alt:before {\n  content: \"\";\n}\n\n.fa-garage:before {\n  content: \"契\";\n}\n\n.fa-garage-car:before {\n  content: \"金\";\n}\n\n.fa-garage-open:before {\n  content: \"喇\";\n}\n\n.fa-gas-pump:before {\n  content: \"\";\n}\n\n.fa-gas-pump-slash:before {\n  content: \"\";\n}\n\n.fa-gavel:before {\n  content: \"\";\n}\n\n.fa-gem:before {\n  content: \"\";\n}\n\n.fa-genderless:before {\n  content: \"\";\n}\n\n.fa-get-pocket:before {\n  content: \"\";\n}\n\n.fa-gg:before {\n  content: \"\";\n}\n\n.fa-gg-circle:before {\n  content: \"\";\n}\n\n.fa-ghost:before {\n  content: \"\";\n}\n\n.fa-gift:before {\n  content: \"\";\n}\n\n.fa-gift-card:before {\n  content: \"\";\n}\n\n.fa-gifts:before {\n  content: \"\";\n}\n\n.fa-gingerbread-man:before {\n  content: \"\";\n}\n\n.fa-git:before {\n  content: \"\";\n}\n\n.fa-git-alt:before {\n  content: \"\";\n}\n\n.fa-git-square:before {\n  content: \"\";\n}\n\n.fa-github:before {\n  content: \"\";\n}\n\n.fa-github-alt:before {\n  content: \"\";\n}\n\n.fa-github-square:before {\n  content: \"\";\n}\n\n.fa-gitkraken:before {\n  content: \"\";\n}\n\n.fa-gitlab:before {\n  content: \"\";\n}\n\n.fa-gitter:before {\n  content: \"\";\n}\n\n.fa-glass:before {\n  content: \"\";\n}\n\n.fa-glass-champagne:before {\n  content: \"\";\n}\n\n.fa-glass-cheers:before {\n  content: \"\";\n}\n\n.fa-glass-citrus:before {\n  content: \"\";\n}\n\n.fa-glass-martini:before {\n  content: \"\";\n}\n\n.fa-glass-martini-alt:before {\n  content: \"\";\n}\n\n.fa-glass-whiskey:before {\n  content: \"\";\n}\n\n.fa-glass-whiskey-rocks:before {\n  content: \"\";\n}\n\n.fa-glasses:before {\n  content: \"\";\n}\n\n.fa-glasses-alt:before {\n  content: \"\";\n}\n\n.fa-glide:before {\n  content: \"\";\n}\n\n.fa-glide-g:before {\n  content: \"\";\n}\n\n.fa-globe:before {\n  content: \"\";\n}\n\n.fa-globe-africa:before {\n  content: \"\";\n}\n\n.fa-globe-americas:before {\n  content: \"\";\n}\n\n.fa-globe-asia:before {\n  content: \"\";\n}\n\n.fa-globe-europe:before {\n  content: \"\";\n}\n\n.fa-globe-snow:before {\n  content: \"\";\n}\n\n.fa-globe-stand:before {\n  content: \"\";\n}\n\n.fa-gofore:before {\n  content: \"\";\n}\n\n.fa-golf-ball:before {\n  content: \"\";\n}\n\n.fa-golf-club:before {\n  content: \"\";\n}\n\n.fa-goodreads:before {\n  content: \"\";\n}\n\n.fa-goodreads-g:before {\n  content: \"\";\n}\n\n.fa-google:before {\n  content: \"\";\n}\n\n.fa-google-drive:before {\n  content: \"\";\n}\n\n.fa-google-play:before {\n  content: \"\";\n}\n\n.fa-google-plus:before {\n  content: \"\";\n}\n\n.fa-google-plus-g:before {\n  content: \"\";\n}\n\n.fa-google-plus-square:before {\n  content: \"\";\n}\n\n.fa-google-wallet:before {\n  content: \"\";\n}\n\n.fa-gopuram:before {\n  content: \"\";\n}\n\n.fa-graduation-cap:before {\n  content: \"\";\n}\n\n.fa-gramophone:before {\n  content: \"\";\n}\n\n.fa-gratipay:before {\n  content: \"\";\n}\n\n.fa-grav:before {\n  content: \"\";\n}\n\n.fa-greater-than:before {\n  content: \"\";\n}\n\n.fa-greater-than-equal:before {\n  content: \"\";\n}\n\n.fa-grimace:before {\n  content: \"\";\n}\n\n.fa-grin:before {\n  content: \"\";\n}\n\n.fa-grin-alt:before {\n  content: \"\";\n}\n\n.fa-grin-beam:before {\n  content: \"\";\n}\n\n.fa-grin-beam-sweat:before {\n  content: \"\";\n}\n\n.fa-grin-hearts:before {\n  content: \"\";\n}\n\n.fa-grin-squint:before {\n  content: \"\";\n}\n\n.fa-grin-squint-tears:before {\n  content: \"\";\n}\n\n.fa-grin-stars:before {\n  content: \"\";\n}\n\n.fa-grin-tears:before {\n  content: \"\";\n}\n\n.fa-grin-tongue:before {\n  content: \"\";\n}\n\n.fa-grin-tongue-squint:before {\n  content: \"\";\n}\n\n.fa-grin-tongue-wink:before {\n  content: \"\";\n}\n\n.fa-grin-wink:before {\n  content: \"\";\n}\n\n.fa-grip-horizontal:before {\n  content: \"\";\n}\n\n.fa-grip-lines:before {\n  content: \"\";\n}\n\n.fa-grip-lines-vertical:before {\n  content: \"\";\n}\n\n.fa-grip-vertical:before {\n  content: \"\";\n}\n\n.fa-gripfire:before {\n  content: \"\";\n}\n\n.fa-grunt:before {\n  content: \"\";\n}\n\n.fa-guitar:before {\n  content: \"\";\n}\n\n.fa-guitar-electric:before {\n  content: \"\";\n}\n\n.fa-guitars:before {\n  content: \"\";\n}\n\n.fa-gulp:before {\n  content: \"\";\n}\n\n.fa-h-square:before {\n  content: \"\";\n}\n\n.fa--var-h1:before {\n  content: \"\";\n}\n\n.fa--var-h2:before {\n  content: \"\";\n}\n\n.fa--var-h3:before {\n  content: \"\";\n}\n\n.fa--var-h4:before {\n  content: \"\";\n}\n\n.fa-hacker-news:before {\n  content: \"\";\n}\n\n.fa-hacker-news-square:before {\n  content: \"\";\n}\n\n.fa-hackerrank:before {\n  content: \"\";\n}\n\n.fa-hamburger:before {\n  content: \"\";\n}\n\n.fa-hammer:before {\n  content: \"\";\n}\n\n.fa-hammer-war:before {\n  content: \"\";\n}\n\n.fa-hamsa:before {\n  content: \"\";\n}\n\n.fa-hand-heart:before {\n  content: \"\";\n}\n\n.fa-hand-holding:before {\n  content: \"\";\n}\n\n.fa-hand-holding-box:before {\n  content: \"\";\n}\n\n.fa-hand-holding-heart:before {\n  content: \"\";\n}\n\n.fa-hand-holding-magic:before {\n  content: \"\";\n}\n\n.fa-hand-holding-medical:before {\n  content: \"樂\";\n}\n\n.fa-hand-holding-seedling:before {\n  content: \"\";\n}\n\n.fa-hand-holding-usd:before {\n  content: \"\";\n}\n\n.fa-hand-holding-water:before {\n  content: \"\";\n}\n\n.fa-hand-lizard:before {\n  content: \"\";\n}\n\n.fa-hand-middle-finger:before {\n  content: \"\";\n}\n\n.fa-hand-paper:before {\n  content: \"\";\n}\n\n.fa-hand-peace:before {\n  content: \"\";\n}\n\n.fa-hand-point-down:before {\n  content: \"\";\n}\n\n.fa-hand-point-left:before {\n  content: \"\";\n}\n\n.fa-hand-point-right:before {\n  content: \"\";\n}\n\n.fa-hand-point-up:before {\n  content: \"\";\n}\n\n.fa-hand-pointer:before {\n  content: \"\";\n}\n\n.fa-hand-receiving:before {\n  content: \"\";\n}\n\n.fa-hand-rock:before {\n  content: \"\";\n}\n\n.fa-hand-scissors:before {\n  content: \"\";\n}\n\n.fa-hand-sparkles:before {\n  content: \"諾\";\n}\n\n.fa-hand-spock:before {\n  content: \"\";\n}\n\n.fa-hands:before {\n  content: \"\";\n}\n\n.fa-hands-heart:before {\n  content: \"\";\n}\n\n.fa-hands-helping:before {\n  content: \"\";\n}\n\n.fa-hands-usd:before {\n  content: \"\";\n}\n\n.fa-hands-wash:before {\n  content: \"丹\";\n}\n\n.fa-handshake:before {\n  content: \"\";\n}\n\n.fa-handshake-alt:before {\n  content: \"\";\n}\n\n.fa-handshake-alt-slash:before {\n  content: \"寧\";\n}\n\n.fa-handshake-slash:before {\n  content: \"怒\";\n}\n\n.fa-hanukiah:before {\n  content: \"\";\n}\n\n.fa-hard-hat:before {\n  content: \"\";\n}\n\n.fa-hashtag:before {\n  content: \"\";\n}\n\n.fa-hat-chef:before {\n  content: \"\";\n}\n\n.fa-hat-cowboy:before {\n  content: \"\";\n}\n\n.fa-hat-cowboy-side:before {\n  content: \"\";\n}\n\n.fa-hat-santa:before {\n  content: \"\";\n}\n\n.fa-hat-winter:before {\n  content: \"\";\n}\n\n.fa-hat-witch:before {\n  content: \"\";\n}\n\n.fa-hat-wizard:before {\n  content: \"\";\n}\n\n.fa-hdd:before {\n  content: \"\";\n}\n\n.fa-head-side:before {\n  content: \"\";\n}\n\n.fa-head-side-brain:before {\n  content: \"\";\n}\n\n.fa-head-side-cough:before {\n  content: \"率\";\n}\n\n.fa-head-side-cough-slash:before {\n  content: \"異\";\n}\n\n.fa-head-side-headphones:before {\n  content: \"\";\n}\n\n.fa-head-side-mask:before {\n  content: \"北\";\n}\n\n.fa-head-side-medical:before {\n  content: \"\";\n}\n\n.fa-head-side-virus:before {\n  content: \"磻\";\n}\n\n.fa-head-vr:before {\n  content: \"\";\n}\n\n.fa-heading:before {\n  content: \"\";\n}\n\n.fa-headphones:before {\n  content: \"\";\n}\n\n.fa-headphones-alt:before {\n  content: \"\";\n}\n\n.fa-headset:before {\n  content: \"\";\n}\n\n.fa-heart:before {\n  content: \"\";\n}\n\n.fa-heart-broken:before {\n  content: \"\";\n}\n\n.fa-heart-circle:before {\n  content: \"\";\n}\n\n.fa-heart-rate:before {\n  content: \"\";\n}\n\n.fa-heart-square:before {\n  content: \"\";\n}\n\n.fa-heartbeat:before {\n  content: \"\";\n}\n\n.fa-heat:before {\n  content: \"奈\";\n}\n\n.fa-helicopter:before {\n  content: \"\";\n}\n\n.fa-helmet-battle:before {\n  content: \"\";\n}\n\n.fa-hexagon:before {\n  content: \"\";\n}\n\n.fa-highlighter:before {\n  content: \"\";\n}\n\n.fa-hiking:before {\n  content: \"\";\n}\n\n.fa-hippo:before {\n  content: \"\";\n}\n\n.fa-hips:before {\n  content: \"\";\n}\n\n.fa-hire-a-helper:before {\n  content: \"\";\n}\n\n.fa-history:before {\n  content: \"\";\n}\n\n.fa-hockey-mask:before {\n  content: \"\";\n}\n\n.fa-hockey-puck:before {\n  content: \"\";\n}\n\n.fa-hockey-sticks:before {\n  content: \"\";\n}\n\n.fa-holly-berry:before {\n  content: \"\";\n}\n\n.fa-home:before {\n  content: \"\";\n}\n\n.fa-home-alt:before {\n  content: \"\";\n}\n\n.fa-home-heart:before {\n  content: \"\";\n}\n\n.fa-home-lg:before {\n  content: \"\";\n}\n\n.fa-home-lg-alt:before {\n  content: \"\";\n}\n\n.fa-hood-cloak:before {\n  content: \"\";\n}\n\n.fa-hooli:before {\n  content: \"\";\n}\n\n.fa-horizontal-rule:before {\n  content: \"\";\n}\n\n.fa-hornbill:before {\n  content: \"\";\n}\n\n.fa-horse:before {\n  content: \"\";\n}\n\n.fa-horse-head:before {\n  content: \"\";\n}\n\n.fa-horse-saddle:before {\n  content: \"\";\n}\n\n.fa-hospital:before {\n  content: \"\";\n}\n\n.fa-hospital-alt:before {\n  content: \"\";\n}\n\n.fa-hospital-symbol:before {\n  content: \"\";\n}\n\n.fa-hospital-user:before {\n  content: \"\";\n}\n\n.fa-hospitals:before {\n  content: \"\";\n}\n\n.fa-hot-tub:before {\n  content: \"\";\n}\n\n.fa-hotdog:before {\n  content: \"\";\n}\n\n.fa-hotel:before {\n  content: \"\";\n}\n\n.fa-hotjar:before {\n  content: \"\";\n}\n\n.fa-hourglass:before {\n  content: \"\";\n}\n\n.fa-hourglass-end:before {\n  content: \"\";\n}\n\n.fa-hourglass-half:before {\n  content: \"\";\n}\n\n.fa-hourglass-start:before {\n  content: \"\";\n}\n\n.fa-house:before {\n  content: \"懶\";\n}\n\n.fa-house-damage:before {\n  content: \"\";\n}\n\n.fa-house-day:before {\n  content: \"癩\";\n}\n\n.fa-house-flood:before {\n  content: \"\";\n}\n\n.fa-house-leave:before {\n  content: \"羅\";\n}\n\n.fa-house-night:before {\n  content: \"蘿\";\n}\n\n.fa-house-return:before {\n  content: \"螺\";\n}\n\n.fa-house-signal:before {\n  content: \"裸\";\n}\n\n.fa-house-user:before {\n  content: \"便\";\n}\n\n.fa-houzz:before {\n  content: \"\";\n}\n\n.fa-hryvnia:before {\n  content: \"\";\n}\n\n.fa--var-html5:before {\n  content: \"\";\n}\n\n.fa-hubspot:before {\n  content: \"\";\n}\n\n.fa-humidity:before {\n  content: \"\";\n}\n\n.fa-hurricane:before {\n  content: \"\";\n}\n\n.fa-i-cursor:before {\n  content: \"\";\n}\n\n.fa-ice-cream:before {\n  content: \"\";\n}\n\n.fa-ice-skate:before {\n  content: \"\";\n}\n\n.fa-icicles:before {\n  content: \"\";\n}\n\n.fa-icons:before {\n  content: \"\";\n}\n\n.fa-icons-alt:before {\n  content: \"\";\n}\n\n.fa-id-badge:before {\n  content: \"\";\n}\n\n.fa-id-card:before {\n  content: \"\";\n}\n\n.fa-id-card-alt:before {\n  content: \"\";\n}\n\n.fa-ideal:before {\n  content: \"邏\";\n}\n\n.fa-igloo:before {\n  content: \"\";\n}\n\n.fa-image:before {\n  content: \"\";\n}\n\n.fa-image-polaroid:before {\n  content: \"\";\n}\n\n.fa-images:before {\n  content: \"\";\n}\n\n.fa-imdb:before {\n  content: \"\";\n}\n\n.fa-inbox:before {\n  content: \"\";\n}\n\n.fa-inbox-in:before {\n  content: \"\";\n}\n\n.fa-inbox-out:before {\n  content: \"\";\n}\n\n.fa-indent:before {\n  content: \"\";\n}\n\n.fa-industry:before {\n  content: \"\";\n}\n\n.fa-industry-alt:before {\n  content: \"\";\n}\n\n.fa-infinity:before {\n  content: \"\";\n}\n\n.fa-info:before {\n  content: \"\";\n}\n\n.fa-info-circle:before {\n  content: \"\";\n}\n\n.fa-info-square:before {\n  content: \"\";\n}\n\n.fa-inhaler:before {\n  content: \"\";\n}\n\n.fa-instagram:before {\n  content: \"\";\n}\n\n.fa-instagram-square:before {\n  content: \"凌\";\n}\n\n.fa-integral:before {\n  content: \"\";\n}\n\n.fa-intercom:before {\n  content: \"\";\n}\n\n.fa-internet-explorer:before {\n  content: \"\";\n}\n\n.fa-intersection:before {\n  content: \"\";\n}\n\n.fa-inventory:before {\n  content: \"\";\n}\n\n.fa-invision:before {\n  content: \"\";\n}\n\n.fa-ioxhost:before {\n  content: \"\";\n}\n\n.fa-island-tropical:before {\n  content: \"\";\n}\n\n.fa-italic:before {\n  content: \"\";\n}\n\n.fa-itch-io:before {\n  content: \"\";\n}\n\n.fa-itunes:before {\n  content: \"\";\n}\n\n.fa-itunes-note:before {\n  content: \"\";\n}\n\n.fa-jack-o-lantern:before {\n  content: \"\";\n}\n\n.fa-java:before {\n  content: \"\";\n}\n\n.fa-jedi:before {\n  content: \"\";\n}\n\n.fa-jedi-order:before {\n  content: \"\";\n}\n\n.fa-jenkins:before {\n  content: \"\";\n}\n\n.fa-jira:before {\n  content: \"\";\n}\n\n.fa-joget:before {\n  content: \"\";\n}\n\n.fa-joint:before {\n  content: \"\";\n}\n\n.fa-joomla:before {\n  content: \"\";\n}\n\n.fa-journal-whills:before {\n  content: \"\";\n}\n\n.fa-joystick:before {\n  content: \"\";\n}\n\n.fa-js:before {\n  content: \"\";\n}\n\n.fa-js-square:before {\n  content: \"\";\n}\n\n.fa-jsfiddle:before {\n  content: \"\";\n}\n\n.fa-jug:before {\n  content: \"\";\n}\n\n.fa-kaaba:before {\n  content: \"\";\n}\n\n.fa-kaggle:before {\n  content: \"\";\n}\n\n.fa-kazoo:before {\n  content: \"\";\n}\n\n.fa-kerning:before {\n  content: \"\";\n}\n\n.fa-key:before {\n  content: \"\";\n}\n\n.fa-key-skeleton:before {\n  content: \"\";\n}\n\n.fa-keybase:before {\n  content: \"\";\n}\n\n.fa-keyboard:before {\n  content: \"\";\n}\n\n.fa-keycdn:before {\n  content: \"\";\n}\n\n.fa-keynote:before {\n  content: \"\";\n}\n\n.fa-khanda:before {\n  content: \"\";\n}\n\n.fa-kickstarter:before {\n  content: \"\";\n}\n\n.fa-kickstarter-k:before {\n  content: \"\";\n}\n\n.fa-kidneys:before {\n  content: \"\";\n}\n\n.fa-kiss:before {\n  content: \"\";\n}\n\n.fa-kiss-beam:before {\n  content: \"\";\n}\n\n.fa-kiss-wink-heart:before {\n  content: \"\";\n}\n\n.fa-kite:before {\n  content: \"\";\n}\n\n.fa-kiwi-bird:before {\n  content: \"\";\n}\n\n.fa-knife-kitchen:before {\n  content: \"\";\n}\n\n.fa-korvue:before {\n  content: \"\";\n}\n\n.fa-lambda:before {\n  content: \"\";\n}\n\n.fa-lamp:before {\n  content: \"\";\n}\n\n.fa-lamp-desk:before {\n  content: \"樂\";\n}\n\n.fa-lamp-floor:before {\n  content: \"洛\";\n}\n\n.fa-landmark:before {\n  content: \"\";\n}\n\n.fa-landmark-alt:before {\n  content: \"\";\n}\n\n.fa-language:before {\n  content: \"\";\n}\n\n.fa-laptop:before {\n  content: \"\";\n}\n\n.fa-laptop-code:before {\n  content: \"\";\n}\n\n.fa-laptop-house:before {\n  content: \"復\";\n}\n\n.fa-laptop-medical:before {\n  content: \"\";\n}\n\n.fa-laravel:before {\n  content: \"\";\n}\n\n.fa-lasso:before {\n  content: \"\";\n}\n\n.fa-lastfm:before {\n  content: \"\";\n}\n\n.fa-lastfm-square:before {\n  content: \"\";\n}\n\n.fa-laugh:before {\n  content: \"\";\n}\n\n.fa-laugh-beam:before {\n  content: \"\";\n}\n\n.fa-laugh-squint:before {\n  content: \"\";\n}\n\n.fa-laugh-wink:before {\n  content: \"\";\n}\n\n.fa-layer-group:before {\n  content: \"\";\n}\n\n.fa-layer-minus:before {\n  content: \"\";\n}\n\n.fa-layer-plus:before {\n  content: \"\";\n}\n\n.fa-leaf:before {\n  content: \"\";\n}\n\n.fa-leaf-heart:before {\n  content: \"\";\n}\n\n.fa-leaf-maple:before {\n  content: \"\";\n}\n\n.fa-leaf-oak:before {\n  content: \"\";\n}\n\n.fa-leanpub:before {\n  content: \"\";\n}\n\n.fa-lemon:before {\n  content: \"\";\n}\n\n.fa-less:before {\n  content: \"\";\n}\n\n.fa-less-than:before {\n  content: \"\";\n}\n\n.fa-less-than-equal:before {\n  content: \"\";\n}\n\n.fa-level-down:before {\n  content: \"\";\n}\n\n.fa-level-down-alt:before {\n  content: \"\";\n}\n\n.fa-level-up:before {\n  content: \"\";\n}\n\n.fa-level-up-alt:before {\n  content: \"\";\n}\n\n.fa-life-ring:before {\n  content: \"\";\n}\n\n.fa-light-ceiling:before {\n  content: \"烙\";\n}\n\n.fa-light-switch:before {\n  content: \"珞\";\n}\n\n.fa-light-switch-off:before {\n  content: \"落\";\n}\n\n.fa-light-switch-on:before {\n  content: \"酪\";\n}\n\n.fa-lightbulb:before {\n  content: \"\";\n}\n\n.fa-lightbulb-dollar:before {\n  content: \"\";\n}\n\n.fa-lightbulb-exclamation:before {\n  content: \"\";\n}\n\n.fa-lightbulb-on:before {\n  content: \"\";\n}\n\n.fa-lightbulb-slash:before {\n  content: \"\";\n}\n\n.fa-lights-holiday:before {\n  content: \"\";\n}\n\n.fa-line:before {\n  content: \"\";\n}\n\n.fa-line-columns:before {\n  content: \"\";\n}\n\n.fa-line-height:before {\n  content: \"\";\n}\n\n.fa-link:before {\n  content: \"\";\n}\n\n.fa-linkedin:before {\n  content: \"\";\n}\n\n.fa-linkedin-in:before {\n  content: \"\";\n}\n\n.fa-linode:before {\n  content: \"\";\n}\n\n.fa-linux:before {\n  content: \"\";\n}\n\n.fa-lips:before {\n  content: \"\";\n}\n\n.fa-lira-sign:before {\n  content: \"\";\n}\n\n.fa-list:before {\n  content: \"\";\n}\n\n.fa-list-alt:before {\n  content: \"\";\n}\n\n.fa-list-music:before {\n  content: \"\";\n}\n\n.fa-list-ol:before {\n  content: \"\";\n}\n\n.fa-list-ul:before {\n  content: \"\";\n}\n\n.fa-location:before {\n  content: \"\";\n}\n\n.fa-location-arrow:before {\n  content: \"\";\n}\n\n.fa-location-circle:before {\n  content: \"\";\n}\n\n.fa-location-slash:before {\n  content: \"\";\n}\n\n.fa-lock:before {\n  content: \"\";\n}\n\n.fa-lock-alt:before {\n  content: \"\";\n}\n\n.fa-lock-open:before {\n  content: \"\";\n}\n\n.fa-lock-open-alt:before {\n  content: \"\";\n}\n\n.fa-long-arrow-alt-down:before {\n  content: \"\";\n}\n\n.fa-long-arrow-alt-left:before {\n  content: \"\";\n}\n\n.fa-long-arrow-alt-right:before {\n  content: \"\";\n}\n\n.fa-long-arrow-alt-up:before {\n  content: \"\";\n}\n\n.fa-long-arrow-down:before {\n  content: \"\";\n}\n\n.fa-long-arrow-left:before {\n  content: \"\";\n}\n\n.fa-long-arrow-right:before {\n  content: \"\";\n}\n\n.fa-long-arrow-up:before {\n  content: \"\";\n}\n\n.fa-loveseat:before {\n  content: \"\";\n}\n\n.fa-low-vision:before {\n  content: \"\";\n}\n\n.fa-luchador:before {\n  content: \"\";\n}\n\n.fa-luggage-cart:before {\n  content: \"\";\n}\n\n.fa-lungs:before {\n  content: \"\";\n}\n\n.fa-lungs-virus:before {\n  content: \"不\";\n}\n\n.fa-lyft:before {\n  content: \"\";\n}\n\n.fa-mace:before {\n  content: \"\";\n}\n\n.fa-magento:before {\n  content: \"\";\n}\n\n.fa-magic:before {\n  content: \"\";\n}\n\n.fa-magnet:before {\n  content: \"\";\n}\n\n.fa-mail-bulk:before {\n  content: \"\";\n}\n\n.fa-mailbox:before {\n  content: \"\";\n}\n\n.fa-mailchimp:before {\n  content: \"\";\n}\n\n.fa-male:before {\n  content: \"\";\n}\n\n.fa-mandalorian:before {\n  content: \"\";\n}\n\n.fa-mandolin:before {\n  content: \"\";\n}\n\n.fa-map:before {\n  content: \"\";\n}\n\n.fa-map-marked:before {\n  content: \"\";\n}\n\n.fa-map-marked-alt:before {\n  content: \"\";\n}\n\n.fa-map-marker:before {\n  content: \"\";\n}\n\n.fa-map-marker-alt:before {\n  content: \"\";\n}\n\n.fa-map-marker-alt-slash:before {\n  content: \"\";\n}\n\n.fa-map-marker-check:before {\n  content: \"\";\n}\n\n.fa-map-marker-edit:before {\n  content: \"\";\n}\n\n.fa-map-marker-exclamation:before {\n  content: \"\";\n}\n\n.fa-map-marker-minus:before {\n  content: \"\";\n}\n\n.fa-map-marker-plus:before {\n  content: \"\";\n}\n\n.fa-map-marker-question:before {\n  content: \"\";\n}\n\n.fa-map-marker-slash:before {\n  content: \"\";\n}\n\n.fa-map-marker-smile:before {\n  content: \"\";\n}\n\n.fa-map-marker-times:before {\n  content: \"\";\n}\n\n.fa-map-pin:before {\n  content: \"\";\n}\n\n.fa-map-signs:before {\n  content: \"\";\n}\n\n.fa-markdown:before {\n  content: \"\";\n}\n\n.fa-marker:before {\n  content: \"\";\n}\n\n.fa-mars:before {\n  content: \"\";\n}\n\n.fa-mars-double:before {\n  content: \"\";\n}\n\n.fa-mars-stroke:before {\n  content: \"\";\n}\n\n.fa-mars-stroke-h:before {\n  content: \"\";\n}\n\n.fa-mars-stroke-v:before {\n  content: \"\";\n}\n\n.fa-mask:before {\n  content: \"\";\n}\n\n.fa-mastodon:before {\n  content: \"\";\n}\n\n.fa-maxcdn:before {\n  content: \"\";\n}\n\n.fa-mdb:before {\n  content: \"\";\n}\n\n.fa-meat:before {\n  content: \"\";\n}\n\n.fa-medal:before {\n  content: \"\";\n}\n\n.fa-medapps:before {\n  content: \"\";\n}\n\n.fa-medium:before {\n  content: \"\";\n}\n\n.fa-medium-m:before {\n  content: \"\";\n}\n\n.fa-medkit:before {\n  content: \"\";\n}\n\n.fa-medrt:before {\n  content: \"\";\n}\n\n.fa-meetup:before {\n  content: \"\";\n}\n\n.fa-megaphone:before {\n  content: \"\";\n}\n\n.fa-megaport:before {\n  content: \"\";\n}\n\n.fa-meh:before {\n  content: \"\";\n}\n\n.fa-meh-blank:before {\n  content: \"\";\n}\n\n.fa-meh-rolling-eyes:before {\n  content: \"\";\n}\n\n.fa-memory:before {\n  content: \"\";\n}\n\n.fa-mendeley:before {\n  content: \"\";\n}\n\n.fa-menorah:before {\n  content: \"\";\n}\n\n.fa-mercury:before {\n  content: \"\";\n}\n\n.fa-meteor:before {\n  content: \"\";\n}\n\n.fa-microblog:before {\n  content: \"駱\";\n}\n\n.fa-microchip:before {\n  content: \"\";\n}\n\n.fa-microphone:before {\n  content: \"\";\n}\n\n.fa-microphone-alt:before {\n  content: \"\";\n}\n\n.fa-microphone-alt-slash:before {\n  content: \"\";\n}\n\n.fa-microphone-slash:before {\n  content: \"\";\n}\n\n.fa-microphone-stand:before {\n  content: \"\";\n}\n\n.fa-microscope:before {\n  content: \"\";\n}\n\n.fa-microsoft:before {\n  content: \"\";\n}\n\n.fa-microwave:before {\n  content: \"亂\";\n}\n\n.fa-mind-share:before {\n  content: \"\";\n}\n\n.fa-minus:before {\n  content: \"\";\n}\n\n.fa-minus-circle:before {\n  content: \"\";\n}\n\n.fa-minus-hexagon:before {\n  content: \"\";\n}\n\n.fa-minus-octagon:before {\n  content: \"\";\n}\n\n.fa-minus-square:before {\n  content: \"\";\n}\n\n.fa-mistletoe:before {\n  content: \"\";\n}\n\n.fa-mitten:before {\n  content: \"\";\n}\n\n.fa-mix:before {\n  content: \"\";\n}\n\n.fa-mixcloud:before {\n  content: \"\";\n}\n\n.fa-mixer:before {\n  content: \"稜\";\n}\n\n.fa-mizuni:before {\n  content: \"\";\n}\n\n.fa-mobile:before {\n  content: \"\";\n}\n\n.fa-mobile-alt:before {\n  content: \"\";\n}\n\n.fa-mobile-android:before {\n  content: \"\";\n}\n\n.fa-mobile-android-alt:before {\n  content: \"\";\n}\n\n.fa-modx:before {\n  content: \"\";\n}\n\n.fa-monero:before {\n  content: \"\";\n}\n\n.fa-money-bill:before {\n  content: \"\";\n}\n\n.fa-money-bill-alt:before {\n  content: \"\";\n}\n\n.fa-money-bill-wave:before {\n  content: \"\";\n}\n\n.fa-money-bill-wave-alt:before {\n  content: \"\";\n}\n\n.fa-money-check:before {\n  content: \"\";\n}\n\n.fa-money-check-alt:before {\n  content: \"\";\n}\n\n.fa-money-check-edit:before {\n  content: \"\";\n}\n\n.fa-money-check-edit-alt:before {\n  content: \"\";\n}\n\n.fa-monitor-heart-rate:before {\n  content: \"\";\n}\n\n.fa-monkey:before {\n  content: \"\";\n}\n\n.fa-monument:before {\n  content: \"\";\n}\n\n.fa-moon:before {\n  content: \"\";\n}\n\n.fa-moon-cloud:before {\n  content: \"\";\n}\n\n.fa-moon-stars:before {\n  content: \"\";\n}\n\n.fa-mortar-pestle:before {\n  content: \"\";\n}\n\n.fa-mosque:before {\n  content: \"\";\n}\n\n.fa-motorcycle:before {\n  content: \"\";\n}\n\n.fa-mountain:before {\n  content: \"\";\n}\n\n.fa-mountains:before {\n  content: \"\";\n}\n\n.fa-mouse:before {\n  content: \"\";\n}\n\n.fa-mouse-alt:before {\n  content: \"\";\n}\n\n.fa-mouse-pointer:before {\n  content: \"\";\n}\n\n.fa--var-mp3-player:before {\n  content: \"\";\n}\n\n.fa-mug:before {\n  content: \"\";\n}\n\n.fa-mug-hot:before {\n  content: \"\";\n}\n\n.fa-mug-marshmallows:before {\n  content: \"\";\n}\n\n.fa-mug-tea:before {\n  content: \"\";\n}\n\n.fa-music:before {\n  content: \"\";\n}\n\n.fa-music-alt:before {\n  content: \"\";\n}\n\n.fa-music-alt-slash:before {\n  content: \"\";\n}\n\n.fa-music-slash:before {\n  content: \"\";\n}\n\n.fa-napster:before {\n  content: \"\";\n}\n\n.fa-narwhal:before {\n  content: \"\";\n}\n\n.fa-neos:before {\n  content: \"\";\n}\n\n.fa-network-wired:before {\n  content: \"\";\n}\n\n.fa-neuter:before {\n  content: \"\";\n}\n\n.fa-newspaper:before {\n  content: \"\";\n}\n\n.fa-nimblr:before {\n  content: \"\";\n}\n\n.fa-node:before {\n  content: \"\";\n}\n\n.fa-node-js:before {\n  content: \"\";\n}\n\n.fa-not-equal:before {\n  content: \"\";\n}\n\n.fa-notes-medical:before {\n  content: \"\";\n}\n\n.fa-npm:before {\n  content: \"\";\n}\n\n.fa--var-ns8:before {\n  content: \"\";\n}\n\n.fa-nutritionix:before {\n  content: \"\";\n}\n\n.fa-object-group:before {\n  content: \"\";\n}\n\n.fa-object-ungroup:before {\n  content: \"\";\n}\n\n.fa-octagon:before {\n  content: \"\";\n}\n\n.fa-odnoklassniki:before {\n  content: \"\";\n}\n\n.fa-odnoklassniki-square:before {\n  content: \"\";\n}\n\n.fa-oil-can:before {\n  content: \"\";\n}\n\n.fa-oil-temp:before {\n  content: \"\";\n}\n\n.fa-old-republic:before {\n  content: \"\";\n}\n\n.fa-om:before {\n  content: \"\";\n}\n\n.fa-omega:before {\n  content: \"\";\n}\n\n.fa-opencart:before {\n  content: \"\";\n}\n\n.fa-openid:before {\n  content: \"\";\n}\n\n.fa-opera:before {\n  content: \"\";\n}\n\n.fa-optin-monster:before {\n  content: \"\";\n}\n\n.fa-orcid:before {\n  content: \"\";\n}\n\n.fa-ornament:before {\n  content: \"\";\n}\n\n.fa-osi:before {\n  content: \"\";\n}\n\n.fa-otter:before {\n  content: \"\";\n}\n\n.fa-outdent:before {\n  content: \"\";\n}\n\n.fa-outlet:before {\n  content: \"卵\";\n}\n\n.fa-oven:before {\n  content: \"欄\";\n}\n\n.fa-overline:before {\n  content: \"\";\n}\n\n.fa-page-break:before {\n  content: \"\";\n}\n\n.fa--var-page4:before {\n  content: \"\";\n}\n\n.fa-pagelines:before {\n  content: \"\";\n}\n\n.fa-pager:before {\n  content: \"\";\n}\n\n.fa-paint-brush:before {\n  content: \"\";\n}\n\n.fa-paint-brush-alt:before {\n  content: \"\";\n}\n\n.fa-paint-roller:before {\n  content: \"\";\n}\n\n.fa-palette:before {\n  content: \"\";\n}\n\n.fa-palfed:before {\n  content: \"\";\n}\n\n.fa-pallet:before {\n  content: \"\";\n}\n\n.fa-pallet-alt:before {\n  content: \"\";\n}\n\n.fa-paper-plane:before {\n  content: \"\";\n}\n\n.fa-paperclip:before {\n  content: \"\";\n}\n\n.fa-parachute-box:before {\n  content: \"\";\n}\n\n.fa-paragraph:before {\n  content: \"\";\n}\n\n.fa-paragraph-rtl:before {\n  content: \"\";\n}\n\n.fa-parking:before {\n  content: \"\";\n}\n\n.fa-parking-circle:before {\n  content: \"\";\n}\n\n.fa-parking-circle-slash:before {\n  content: \"\";\n}\n\n.fa-parking-slash:before {\n  content: \"\";\n}\n\n.fa-passport:before {\n  content: \"\";\n}\n\n.fa-pastafarianism:before {\n  content: \"\";\n}\n\n.fa-paste:before {\n  content: \"\";\n}\n\n.fa-patreon:before {\n  content: \"\";\n}\n\n.fa-pause:before {\n  content: \"\";\n}\n\n.fa-pause-circle:before {\n  content: \"\";\n}\n\n.fa-paw:before {\n  content: \"\";\n}\n\n.fa-paw-alt:before {\n  content: \"\";\n}\n\n.fa-paw-claws:before {\n  content: \"\";\n}\n\n.fa-paypal:before {\n  content: \"\";\n}\n\n.fa-peace:before {\n  content: \"\";\n}\n\n.fa-pegasus:before {\n  content: \"\";\n}\n\n.fa-pen:before {\n  content: \"\";\n}\n\n.fa-pen-alt:before {\n  content: \"\";\n}\n\n.fa-pen-fancy:before {\n  content: \"\";\n}\n\n.fa-pen-nib:before {\n  content: \"\";\n}\n\n.fa-pen-square:before {\n  content: \"\";\n}\n\n.fa-pencil:before {\n  content: \"\";\n}\n\n.fa-pencil-alt:before {\n  content: \"\";\n}\n\n.fa-pencil-paintbrush:before {\n  content: \"\";\n}\n\n.fa-pencil-ruler:before {\n  content: \"\";\n}\n\n.fa-pennant:before {\n  content: \"\";\n}\n\n.fa-penny-arcade:before {\n  content: \"\";\n}\n\n.fa-people-arrows:before {\n  content: \"泌\";\n}\n\n.fa-people-carry:before {\n  content: \"\";\n}\n\n.fa-pepper-hot:before {\n  content: \"\";\n}\n\n.fa-percent:before {\n  content: \"\";\n}\n\n.fa-percentage:before {\n  content: \"\";\n}\n\n.fa-periscope:before {\n  content: \"\";\n}\n\n.fa-person-booth:before {\n  content: \"\";\n}\n\n.fa-person-carry:before {\n  content: \"\";\n}\n\n.fa-person-dolly:before {\n  content: \"\";\n}\n\n.fa-person-dolly-empty:before {\n  content: \"\";\n}\n\n.fa-person-sign:before {\n  content: \"\";\n}\n\n.fa-phabricator:before {\n  content: \"\";\n}\n\n.fa-phoenix-framework:before {\n  content: \"\";\n}\n\n.fa-phoenix-squadron:before {\n  content: \"\";\n}\n\n.fa-phone:before {\n  content: \"\";\n}\n\n.fa-phone-alt:before {\n  content: \"\";\n}\n\n.fa-phone-laptop:before {\n  content: \"\";\n}\n\n.fa-phone-office:before {\n  content: \"\";\n}\n\n.fa-phone-plus:before {\n  content: \"\";\n}\n\n.fa-phone-rotary:before {\n  content: \"\";\n}\n\n.fa-phone-slash:before {\n  content: \"\";\n}\n\n.fa-phone-square:before {\n  content: \"\";\n}\n\n.fa-phone-square-alt:before {\n  content: \"\";\n}\n\n.fa-phone-volume:before {\n  content: \"\";\n}\n\n.fa-photo-video:before {\n  content: \"\";\n}\n\n.fa-php:before {\n  content: \"\";\n}\n\n.fa-pi:before {\n  content: \"\";\n}\n\n.fa-piano:before {\n  content: \"\";\n}\n\n.fa-piano-keyboard:before {\n  content: \"\";\n}\n\n.fa-pie:before {\n  content: \"\";\n}\n\n.fa-pied-piper:before {\n  content: \"\";\n}\n\n.fa-pied-piper-alt:before {\n  content: \"\";\n}\n\n.fa-pied-piper-hat:before {\n  content: \"\";\n}\n\n.fa-pied-piper-pp:before {\n  content: \"\";\n}\n\n.fa-pied-piper-square:before {\n  content: \"爛\";\n}\n\n.fa-pig:before {\n  content: \"\";\n}\n\n.fa-piggy-bank:before {\n  content: \"\";\n}\n\n.fa-pills:before {\n  content: \"\";\n}\n\n.fa-pinterest:before {\n  content: \"\";\n}\n\n.fa-pinterest-p:before {\n  content: \"\";\n}\n\n.fa-pinterest-square:before {\n  content: \"\";\n}\n\n.fa-pizza:before {\n  content: \"\";\n}\n\n.fa-pizza-slice:before {\n  content: \"\";\n}\n\n.fa-place-of-worship:before {\n  content: \"\";\n}\n\n.fa-plane:before {\n  content: \"\";\n}\n\n.fa-plane-alt:before {\n  content: \"\";\n}\n\n.fa-plane-arrival:before {\n  content: \"\";\n}\n\n.fa-plane-departure:before {\n  content: \"\";\n}\n\n.fa-plane-slash:before {\n  content: \"數\";\n}\n\n.fa-planet-moon:before {\n  content: \"蘭\";\n}\n\n.fa-planet-ringed:before {\n  content: \"鸞\";\n}\n\n.fa-play:before {\n  content: \"\";\n}\n\n.fa-play-circle:before {\n  content: \"\";\n}\n\n.fa-playstation:before {\n  content: \"\";\n}\n\n.fa-plug:before {\n  content: \"\";\n}\n\n.fa-plus:before {\n  content: \"\";\n}\n\n.fa-plus-circle:before {\n  content: \"\";\n}\n\n.fa-plus-hexagon:before {\n  content: \"\";\n}\n\n.fa-plus-octagon:before {\n  content: \"\";\n}\n\n.fa-plus-square:before {\n  content: \"\";\n}\n\n.fa-podcast:before {\n  content: \"\";\n}\n\n.fa-podium:before {\n  content: \"\";\n}\n\n.fa-podium-star:before {\n  content: \"\";\n}\n\n.fa-police-box:before {\n  content: \"嵐\";\n}\n\n.fa-poll:before {\n  content: \"\";\n}\n\n.fa-poll-h:before {\n  content: \"\";\n}\n\n.fa-poll-people:before {\n  content: \"\";\n}\n\n.fa-poo:before {\n  content: \"\";\n}\n\n.fa-poo-storm:before {\n  content: \"\";\n}\n\n.fa-poop:before {\n  content: \"\";\n}\n\n.fa-popcorn:before {\n  content: \"\";\n}\n\n.fa-portal-enter:before {\n  content: \"濫\";\n}\n\n.fa-portal-exit:before {\n  content: \"藍\";\n}\n\n.fa-portrait:before {\n  content: \"\";\n}\n\n.fa-pound-sign:before {\n  content: \"\";\n}\n\n.fa-power-off:before {\n  content: \"\";\n}\n\n.fa-pray:before {\n  content: \"\";\n}\n\n.fa-praying-hands:before {\n  content: \"\";\n}\n\n.fa-prescription:before {\n  content: \"\";\n}\n\n.fa-prescription-bottle:before {\n  content: \"\";\n}\n\n.fa-prescription-bottle-alt:before {\n  content: \"\";\n}\n\n.fa-presentation:before {\n  content: \"\";\n}\n\n.fa-print:before {\n  content: \"\";\n}\n\n.fa-print-search:before {\n  content: \"\";\n}\n\n.fa-print-slash:before {\n  content: \"\";\n}\n\n.fa-procedures:before {\n  content: \"\";\n}\n\n.fa-product-hunt:before {\n  content: \"\";\n}\n\n.fa-project-diagram:before {\n  content: \"\";\n}\n\n.fa-projector:before {\n  content: \"\";\n}\n\n.fa-pump-medical:before {\n  content: \"索\";\n}\n\n.fa-pump-soap:before {\n  content: \"參\";\n}\n\n.fa-pumpkin:before {\n  content: \"\";\n}\n\n.fa-pushed:before {\n  content: \"\";\n}\n\n.fa-puzzle-piece:before {\n  content: \"\";\n}\n\n.fa-python:before {\n  content: \"\";\n}\n\n.fa-qq:before {\n  content: \"\";\n}\n\n.fa-qrcode:before {\n  content: \"\";\n}\n\n.fa-question:before {\n  content: \"\";\n}\n\n.fa-question-circle:before {\n  content: \"\";\n}\n\n.fa-question-square:before {\n  content: \"\";\n}\n\n.fa-quidditch:before {\n  content: \"\";\n}\n\n.fa-quinscape:before {\n  content: \"\";\n}\n\n.fa-quora:before {\n  content: \"\";\n}\n\n.fa-quote-left:before {\n  content: \"\";\n}\n\n.fa-quote-right:before {\n  content: \"\";\n}\n\n.fa-quran:before {\n  content: \"\";\n}\n\n.fa-r-project:before {\n  content: \"\";\n}\n\n.fa-rabbit:before {\n  content: \"\";\n}\n\n.fa-rabbit-fast:before {\n  content: \"\";\n}\n\n.fa-racquet:before {\n  content: \"\";\n}\n\n.fa-radar:before {\n  content: \"襤\";\n}\n\n.fa-radiation:before {\n  content: \"\";\n}\n\n.fa-radiation-alt:before {\n  content: \"\";\n}\n\n.fa-radio:before {\n  content: \"\";\n}\n\n.fa-radio-alt:before {\n  content: \"\";\n}\n\n.fa-rainbow:before {\n  content: \"\";\n}\n\n.fa-raindrops:before {\n  content: \"\";\n}\n\n.fa-ram:before {\n  content: \"\";\n}\n\n.fa-ramp-loading:before {\n  content: \"\";\n}\n\n.fa-random:before {\n  content: \"\";\n}\n\n.fa-raspberry-pi:before {\n  content: \"\";\n}\n\n.fa-ravelry:before {\n  content: \"\";\n}\n\n.fa-raygun:before {\n  content: \"拉\";\n}\n\n.fa-react:before {\n  content: \"\";\n}\n\n.fa-reacteurope:before {\n  content: \"\";\n}\n\n.fa-readme:before {\n  content: \"\";\n}\n\n.fa-rebel:before {\n  content: \"\";\n}\n\n.fa-receipt:before {\n  content: \"\";\n}\n\n.fa-record-vinyl:before {\n  content: \"\";\n}\n\n.fa-rectangle-landscape:before {\n  content: \"\";\n}\n\n.fa-rectangle-portrait:before {\n  content: \"\";\n}\n\n.fa-rectangle-wide:before {\n  content: \"\";\n}\n\n.fa-recycle:before {\n  content: \"\";\n}\n\n.fa-red-river:before {\n  content: \"\";\n}\n\n.fa-reddit:before {\n  content: \"\";\n}\n\n.fa-reddit-alien:before {\n  content: \"\";\n}\n\n.fa-reddit-square:before {\n  content: \"\";\n}\n\n.fa-redhat:before {\n  content: \"\";\n}\n\n.fa-redo:before {\n  content: \"\";\n}\n\n.fa-redo-alt:before {\n  content: \"\";\n}\n\n.fa-refrigerator:before {\n  content: \"臘\";\n}\n\n.fa-registered:before {\n  content: \"\";\n}\n\n.fa-remove-format:before {\n  content: \"\";\n}\n\n.fa-renren:before {\n  content: \"\";\n}\n\n.fa-repeat:before {\n  content: \"\";\n}\n\n.fa--var-repeat-1:before {\n  content: \"\";\n}\n\n.fa--var-repeat-1-alt:before {\n  content: \"\";\n}\n\n.fa-repeat-alt:before {\n  content: \"\";\n}\n\n.fa-reply:before {\n  content: \"\";\n}\n\n.fa-reply-all:before {\n  content: \"\";\n}\n\n.fa-replyd:before {\n  content: \"\";\n}\n\n.fa-republican:before {\n  content: \"\";\n}\n\n.fa-researchgate:before {\n  content: \"\";\n}\n\n.fa-resolving:before {\n  content: \"\";\n}\n\n.fa-restroom:before {\n  content: \"\";\n}\n\n.fa-retweet:before {\n  content: \"\";\n}\n\n.fa-retweet-alt:before {\n  content: \"\";\n}\n\n.fa-rev:before {\n  content: \"\";\n}\n\n.fa-ribbon:before {\n  content: \"\";\n}\n\n.fa-ring:before {\n  content: \"\";\n}\n\n.fa-rings-wedding:before {\n  content: \"\";\n}\n\n.fa-road:before {\n  content: \"\";\n}\n\n.fa-robot:before {\n  content: \"\";\n}\n\n.fa-rocket:before {\n  content: \"\";\n}\n\n.fa-rocket-launch:before {\n  content: \"蠟\";\n}\n\n.fa-rocketchat:before {\n  content: \"\";\n}\n\n.fa-rockrms:before {\n  content: \"\";\n}\n\n.fa-route:before {\n  content: \"\";\n}\n\n.fa-route-highway:before {\n  content: \"\";\n}\n\n.fa-route-interstate:before {\n  content: \"\";\n}\n\n.fa-router:before {\n  content: \"\";\n}\n\n.fa-rss:before {\n  content: \"\";\n}\n\n.fa-rss-square:before {\n  content: \"\";\n}\n\n.fa-ruble-sign:before {\n  content: \"\";\n}\n\n.fa-ruler:before {\n  content: \"\";\n}\n\n.fa-ruler-combined:before {\n  content: \"\";\n}\n\n.fa-ruler-horizontal:before {\n  content: \"\";\n}\n\n.fa-ruler-triangle:before {\n  content: \"\";\n}\n\n.fa-ruler-vertical:before {\n  content: \"\";\n}\n\n.fa-running:before {\n  content: \"\";\n}\n\n.fa-rupee-sign:before {\n  content: \"\";\n}\n\n.fa-rv:before {\n  content: \"\";\n}\n\n.fa-sack:before {\n  content: \"\";\n}\n\n.fa-sack-dollar:before {\n  content: \"\";\n}\n\n.fa-sad-cry:before {\n  content: \"\";\n}\n\n.fa-sad-tear:before {\n  content: \"\";\n}\n\n.fa-safari:before {\n  content: \"\";\n}\n\n.fa-salad:before {\n  content: \"\";\n}\n\n.fa-salesforce:before {\n  content: \"\";\n}\n\n.fa-sandwich:before {\n  content: \"\";\n}\n\n.fa-sass:before {\n  content: \"\";\n}\n\n.fa-satellite:before {\n  content: \"\";\n}\n\n.fa-satellite-dish:before {\n  content: \"\";\n}\n\n.fa-sausage:before {\n  content: \"\";\n}\n\n.fa-save:before {\n  content: \"\";\n}\n\n.fa-sax-hot:before {\n  content: \"\";\n}\n\n.fa-saxophone:before {\n  content: \"\";\n}\n\n.fa-scalpel:before {\n  content: \"\";\n}\n\n.fa-scalpel-path:before {\n  content: \"\";\n}\n\n.fa-scanner:before {\n  content: \"\";\n}\n\n.fa-scanner-image:before {\n  content: \"\";\n}\n\n.fa-scanner-keyboard:before {\n  content: \"\";\n}\n\n.fa-scanner-touchscreen:before {\n  content: \"\";\n}\n\n.fa-scarecrow:before {\n  content: \"\";\n}\n\n.fa-scarf:before {\n  content: \"\";\n}\n\n.fa-schlix:before {\n  content: \"\";\n}\n\n.fa-school:before {\n  content: \"\";\n}\n\n.fa-screwdriver:before {\n  content: \"\";\n}\n\n.fa-scribd:before {\n  content: \"\";\n}\n\n.fa-scroll:before {\n  content: \"\";\n}\n\n.fa-scroll-old:before {\n  content: \"\";\n}\n\n.fa-scrubber:before {\n  content: \"\";\n}\n\n.fa-scythe:before {\n  content: \"\";\n}\n\n.fa-sd-card:before {\n  content: \"\";\n}\n\n.fa-search:before {\n  content: \"\";\n}\n\n.fa-search-dollar:before {\n  content: \"\";\n}\n\n.fa-search-location:before {\n  content: \"\";\n}\n\n.fa-search-minus:before {\n  content: \"\";\n}\n\n.fa-search-plus:before {\n  content: \"\";\n}\n\n.fa-searchengin:before {\n  content: \"\";\n}\n\n.fa-seedling:before {\n  content: \"\";\n}\n\n.fa-sellcast:before {\n  content: \"\";\n}\n\n.fa-sellsy:before {\n  content: \"\";\n}\n\n.fa-send-back:before {\n  content: \"\";\n}\n\n.fa-send-backward:before {\n  content: \"\";\n}\n\n.fa-sensor:before {\n  content: \"廊\";\n}\n\n.fa-sensor-alert:before {\n  content: \"朗\";\n}\n\n.fa-sensor-fire:before {\n  content: \"浪\";\n}\n\n.fa-sensor-on:before {\n  content: \"狼\";\n}\n\n.fa-sensor-smoke:before {\n  content: \"郎\";\n}\n\n.fa-server:before {\n  content: \"\";\n}\n\n.fa-servicestack:before {\n  content: \"\";\n}\n\n.fa-shapes:before {\n  content: \"\";\n}\n\n.fa-share:before {\n  content: \"\";\n}\n\n.fa-share-all:before {\n  content: \"\";\n}\n\n.fa-share-alt:before {\n  content: \"\";\n}\n\n.fa-share-alt-square:before {\n  content: \"\";\n}\n\n.fa-share-square:before {\n  content: \"\";\n}\n\n.fa-sheep:before {\n  content: \"\";\n}\n\n.fa-shekel-sign:before {\n  content: \"\";\n}\n\n.fa-shield:before {\n  content: \"\";\n}\n\n.fa-shield-alt:before {\n  content: \"\";\n}\n\n.fa-shield-check:before {\n  content: \"\";\n}\n\n.fa-shield-cross:before {\n  content: \"\";\n}\n\n.fa-shield-virus:before {\n  content: \"塞\";\n}\n\n.fa-ship:before {\n  content: \"\";\n}\n\n.fa-shipping-fast:before {\n  content: \"\";\n}\n\n.fa-shipping-timed:before {\n  content: \"\";\n}\n\n.fa-shirtsinbulk:before {\n  content: \"\";\n}\n\n.fa-shish-kebab:before {\n  content: \"\";\n}\n\n.fa-shoe-prints:before {\n  content: \"\";\n}\n\n.fa-shopify:before {\n  content: \"綾\";\n}\n\n.fa-shopping-bag:before {\n  content: \"\";\n}\n\n.fa-shopping-basket:before {\n  content: \"\";\n}\n\n.fa-shopping-cart:before {\n  content: \"\";\n}\n\n.fa-shopware:before {\n  content: \"\";\n}\n\n.fa-shovel:before {\n  content: \"\";\n}\n\n.fa-shovel-snow:before {\n  content: \"\";\n}\n\n.fa-shower:before {\n  content: \"\";\n}\n\n.fa-shredder:before {\n  content: \"\";\n}\n\n.fa-shuttle-van:before {\n  content: \"\";\n}\n\n.fa-shuttlecock:before {\n  content: \"\";\n}\n\n.fa-sickle:before {\n  content: \"\";\n}\n\n.fa-sigma:before {\n  content: \"\";\n}\n\n.fa-sign:before {\n  content: \"\";\n}\n\n.fa-sign-in:before {\n  content: \"\";\n}\n\n.fa-sign-in-alt:before {\n  content: \"\";\n}\n\n.fa-sign-language:before {\n  content: \"\";\n}\n\n.fa-sign-out:before {\n  content: \"\";\n}\n\n.fa-sign-out-alt:before {\n  content: \"\";\n}\n\n.fa-signal:before {\n  content: \"\";\n}\n\n.fa--var-signal-1:before {\n  content: \"\";\n}\n\n.fa--var-signal-2:before {\n  content: \"\";\n}\n\n.fa--var-signal-3:before {\n  content: \"\";\n}\n\n.fa--var-signal-4:before {\n  content: \"\";\n}\n\n.fa-signal-alt:before {\n  content: \"\";\n}\n\n.fa--var-signal-alt-1:before {\n  content: \"\";\n}\n\n.fa--var-signal-alt-2:before {\n  content: \"\";\n}\n\n.fa--var-signal-alt-3:before {\n  content: \"\";\n}\n\n.fa-signal-alt-slash:before {\n  content: \"\";\n}\n\n.fa-signal-slash:before {\n  content: \"\";\n}\n\n.fa-signal-stream:before {\n  content: \"\";\n}\n\n.fa-signature:before {\n  content: \"\";\n}\n\n.fa-sim-card:before {\n  content: \"\";\n}\n\n.fa-simplybuilt:before {\n  content: \"\";\n}\n\n.fa-sink:before {\n  content: \"省\";\n}\n\n.fa-siren:before {\n  content: \"來\";\n}\n\n.fa-siren-on:before {\n  content: \"冷\";\n}\n\n.fa-sistrix:before {\n  content: \"\";\n}\n\n.fa-sitemap:before {\n  content: \"\";\n}\n\n.fa-sith:before {\n  content: \"\";\n}\n\n.fa-skating:before {\n  content: \"\";\n}\n\n.fa-skeleton:before {\n  content: \"\";\n}\n\n.fa-sketch:before {\n  content: \"\";\n}\n\n.fa-ski-jump:before {\n  content: \"\";\n}\n\n.fa-ski-lift:before {\n  content: \"\";\n}\n\n.fa-skiing:before {\n  content: \"\";\n}\n\n.fa-skiing-nordic:before {\n  content: \"\";\n}\n\n.fa-skull:before {\n  content: \"\";\n}\n\n.fa-skull-cow:before {\n  content: \"\";\n}\n\n.fa-skull-crossbones:before {\n  content: \"\";\n}\n\n.fa-skyatlas:before {\n  content: \"\";\n}\n\n.fa-skype:before {\n  content: \"\";\n}\n\n.fa-slack:before {\n  content: \"\";\n}\n\n.fa-slack-hash:before {\n  content: \"\";\n}\n\n.fa-slash:before {\n  content: \"\";\n}\n\n.fa-sledding:before {\n  content: \"\";\n}\n\n.fa-sleigh:before {\n  content: \"\";\n}\n\n.fa-sliders-h:before {\n  content: \"\";\n}\n\n.fa-sliders-h-square:before {\n  content: \"\";\n}\n\n.fa-sliders-v:before {\n  content: \"\";\n}\n\n.fa-sliders-v-square:before {\n  content: \"\";\n}\n\n.fa-slideshare:before {\n  content: \"\";\n}\n\n.fa-smile:before {\n  content: \"\";\n}\n\n.fa-smile-beam:before {\n  content: \"\";\n}\n\n.fa-smile-plus:before {\n  content: \"\";\n}\n\n.fa-smile-wink:before {\n  content: \"\";\n}\n\n.fa-smog:before {\n  content: \"\";\n}\n\n.fa-smoke:before {\n  content: \"\";\n}\n\n.fa-smoking:before {\n  content: \"\";\n}\n\n.fa-smoking-ban:before {\n  content: \"\";\n}\n\n.fa-sms:before {\n  content: \"\";\n}\n\n.fa-snake:before {\n  content: \"\";\n}\n\n.fa-snapchat:before {\n  content: \"\";\n}\n\n.fa-snapchat-ghost:before {\n  content: \"\";\n}\n\n.fa-snapchat-square:before {\n  content: \"\";\n}\n\n.fa-snooze:before {\n  content: \"\";\n}\n\n.fa-snow-blowing:before {\n  content: \"\";\n}\n\n.fa-snowboarding:before {\n  content: \"\";\n}\n\n.fa-snowflake:before {\n  content: \"\";\n}\n\n.fa-snowflakes:before {\n  content: \"\";\n}\n\n.fa-snowman:before {\n  content: \"\";\n}\n\n.fa-snowmobile:before {\n  content: \"\";\n}\n\n.fa-snowplow:before {\n  content: \"\";\n}\n\n.fa-soap:before {\n  content: \"葉\";\n}\n\n.fa-socks:before {\n  content: \"\";\n}\n\n.fa-solar-panel:before {\n  content: \"\";\n}\n\n.fa-solar-system:before {\n  content: \"勞\";\n}\n\n.fa-sort:before {\n  content: \"\";\n}\n\n.fa-sort-alpha-down:before {\n  content: \"\";\n}\n\n.fa-sort-alpha-down-alt:before {\n  content: \"\";\n}\n\n.fa-sort-alpha-up:before {\n  content: \"\";\n}\n\n.fa-sort-alpha-up-alt:before {\n  content: \"\";\n}\n\n.fa-sort-alt:before {\n  content: \"\";\n}\n\n.fa-sort-amount-down:before {\n  content: \"\";\n}\n\n.fa-sort-amount-down-alt:before {\n  content: \"\";\n}\n\n.fa-sort-amount-up:before {\n  content: \"\";\n}\n\n.fa-sort-amount-up-alt:before {\n  content: \"\";\n}\n\n.fa-sort-circle:before {\n  content: \"擄\";\n}\n\n.fa-sort-circle-down:before {\n  content: \"櫓\";\n}\n\n.fa-sort-circle-up:before {\n  content: \"爐\";\n}\n\n.fa-sort-down:before {\n  content: \"\";\n}\n\n.fa-sort-numeric-down:before {\n  content: \"\";\n}\n\n.fa-sort-numeric-down-alt:before {\n  content: \"\";\n}\n\n.fa-sort-numeric-up:before {\n  content: \"\";\n}\n\n.fa-sort-numeric-up-alt:before {\n  content: \"\";\n}\n\n.fa-sort-shapes-down:before {\n  content: \"\";\n}\n\n.fa-sort-shapes-down-alt:before {\n  content: \"\";\n}\n\n.fa-sort-shapes-up:before {\n  content: \"\";\n}\n\n.fa-sort-shapes-up-alt:before {\n  content: \"\";\n}\n\n.fa-sort-size-down:before {\n  content: \"\";\n}\n\n.fa-sort-size-down-alt:before {\n  content: \"\";\n}\n\n.fa-sort-size-up:before {\n  content: \"\";\n}\n\n.fa-sort-size-up-alt:before {\n  content: \"\";\n}\n\n.fa-sort-up:before {\n  content: \"\";\n}\n\n.fa-soundcloud:before {\n  content: \"\";\n}\n\n.fa-soup:before {\n  content: \"\";\n}\n\n.fa-sourcetree:before {\n  content: \"\";\n}\n\n.fa-spa:before {\n  content: \"\";\n}\n\n.fa-space-shuttle:before {\n  content: \"\";\n}\n\n.fa-space-station-moon:before {\n  content: \"盧\";\n}\n\n.fa-space-station-moon-alt:before {\n  content: \"老\";\n}\n\n.fa-spade:before {\n  content: \"\";\n}\n\n.fa-sparkles:before {\n  content: \"\";\n}\n\n.fa-speakap:before {\n  content: \"\";\n}\n\n.fa-speaker:before {\n  content: \"\";\n}\n\n.fa-speaker-deck:before {\n  content: \"\";\n}\n\n.fa-speakers:before {\n  content: \"\";\n}\n\n.fa-spell-check:before {\n  content: \"\";\n}\n\n.fa-spider:before {\n  content: \"\";\n}\n\n.fa-spider-black-widow:before {\n  content: \"\";\n}\n\n.fa-spider-web:before {\n  content: \"\";\n}\n\n.fa-spinner:before {\n  content: \"\";\n}\n\n.fa-spinner-third:before {\n  content: \"\";\n}\n\n.fa-splotch:before {\n  content: \"\";\n}\n\n.fa-spotify:before {\n  content: \"\";\n}\n\n.fa-spray-can:before {\n  content: \"\";\n}\n\n.fa-sprinkler:before {\n  content: \"蘆\";\n}\n\n.fa-square:before {\n  content: \"\";\n}\n\n.fa-square-full:before {\n  content: \"\";\n}\n\n.fa-square-root:before {\n  content: \"\";\n}\n\n.fa-square-root-alt:before {\n  content: \"\";\n}\n\n.fa-squarespace:before {\n  content: \"\";\n}\n\n.fa-squirrel:before {\n  content: \"\";\n}\n\n.fa-stack-exchange:before {\n  content: \"\";\n}\n\n.fa-stack-overflow:before {\n  content: \"\";\n}\n\n.fa-stackpath:before {\n  content: \"\";\n}\n\n.fa-staff:before {\n  content: \"\";\n}\n\n.fa-stamp:before {\n  content: \"\";\n}\n\n.fa-star:before {\n  content: \"\";\n}\n\n.fa-star-and-crescent:before {\n  content: \"\";\n}\n\n.fa-star-christmas:before {\n  content: \"\";\n}\n\n.fa-star-exclamation:before {\n  content: \"\";\n}\n\n.fa-star-half:before {\n  content: \"\";\n}\n\n.fa-star-half-alt:before {\n  content: \"\";\n}\n\n.fa-star-of-david:before {\n  content: \"\";\n}\n\n.fa-star-of-life:before {\n  content: \"\";\n}\n\n.fa-star-shooting:before {\n  content: \"虜\";\n}\n\n.fa-starfighter:before {\n  content: \"路\";\n}\n\n.fa-starfighter-alt:before {\n  content: \"露\";\n}\n\n.fa-stars:before {\n  content: \"\";\n}\n\n.fa-starship:before {\n  content: \"魯\";\n}\n\n.fa-starship-freighter:before {\n  content: \"鷺\";\n}\n\n.fa-staylinked:before {\n  content: \"\";\n}\n\n.fa-steak:before {\n  content: \"\";\n}\n\n.fa-steam:before {\n  content: \"\";\n}\n\n.fa-steam-square:before {\n  content: \"\";\n}\n\n.fa-steam-symbol:before {\n  content: \"\";\n}\n\n.fa-steering-wheel:before {\n  content: \"\";\n}\n\n.fa-step-backward:before {\n  content: \"\";\n}\n\n.fa-step-forward:before {\n  content: \"\";\n}\n\n.fa-stethoscope:before {\n  content: \"\";\n}\n\n.fa-sticker-mule:before {\n  content: \"\";\n}\n\n.fa-sticky-note:before {\n  content: \"\";\n}\n\n.fa-stocking:before {\n  content: \"\";\n}\n\n.fa-stomach:before {\n  content: \"\";\n}\n\n.fa-stop:before {\n  content: \"\";\n}\n\n.fa-stop-circle:before {\n  content: \"\";\n}\n\n.fa-stopwatch:before {\n  content: \"\";\n}\n\n.fa--var-stopwatch-20:before {\n  content: \"說\";\n}\n\n.fa-store:before {\n  content: \"\";\n}\n\n.fa-store-alt:before {\n  content: \"\";\n}\n\n.fa-store-alt-slash:before {\n  content: \"殺\";\n}\n\n.fa-store-slash:before {\n  content: \"辰\";\n}\n\n.fa-strava:before {\n  content: \"\";\n}\n\n.fa-stream:before {\n  content: \"\";\n}\n\n.fa-street-view:before {\n  content: \"\";\n}\n\n.fa-stretcher:before {\n  content: \"\";\n}\n\n.fa-strikethrough:before {\n  content: \"\";\n}\n\n.fa-stripe:before {\n  content: \"\";\n}\n\n.fa-stripe-s:before {\n  content: \"\";\n}\n\n.fa-stroopwafel:before {\n  content: \"\";\n}\n\n.fa-studiovinari:before {\n  content: \"\";\n}\n\n.fa-stumbleupon:before {\n  content: \"\";\n}\n\n.fa-stumbleupon-circle:before {\n  content: \"\";\n}\n\n.fa-subscript:before {\n  content: \"\";\n}\n\n.fa-subway:before {\n  content: \"\";\n}\n\n.fa-suitcase:before {\n  content: \"\";\n}\n\n.fa-suitcase-rolling:before {\n  content: \"\";\n}\n\n.fa-sun:before {\n  content: \"\";\n}\n\n.fa-sun-cloud:before {\n  content: \"\";\n}\n\n.fa-sun-dust:before {\n  content: \"\";\n}\n\n.fa-sun-haze:before {\n  content: \"\";\n}\n\n.fa-sunglasses:before {\n  content: \"\";\n}\n\n.fa-sunrise:before {\n  content: \"\";\n}\n\n.fa-sunset:before {\n  content: \"\";\n}\n\n.fa-superpowers:before {\n  content: \"\";\n}\n\n.fa-superscript:before {\n  content: \"\";\n}\n\n.fa-supple:before {\n  content: \"\";\n}\n\n.fa-surprise:before {\n  content: \"\";\n}\n\n.fa-suse:before {\n  content: \"\";\n}\n\n.fa-swatchbook:before {\n  content: \"\";\n}\n\n.fa-swift:before {\n  content: \"\";\n}\n\n.fa-swimmer:before {\n  content: \"\";\n}\n\n.fa-swimming-pool:before {\n  content: \"\";\n}\n\n.fa-sword:before {\n  content: \"\";\n}\n\n.fa-sword-laser:before {\n  content: \"碌\";\n}\n\n.fa-sword-laser-alt:before {\n  content: \"祿\";\n}\n\n.fa-swords:before {\n  content: \"\";\n}\n\n.fa-swords-laser:before {\n  content: \"綠\";\n}\n\n.fa-symfony:before {\n  content: \"\";\n}\n\n.fa-synagogue:before {\n  content: \"\";\n}\n\n.fa-sync:before {\n  content: \"\";\n}\n\n.fa-sync-alt:before {\n  content: \"\";\n}\n\n.fa-syringe:before {\n  content: \"\";\n}\n\n.fa-table:before {\n  content: \"\";\n}\n\n.fa-table-tennis:before {\n  content: \"\";\n}\n\n.fa-tablet:before {\n  content: \"\";\n}\n\n.fa-tablet-alt:before {\n  content: \"\";\n}\n\n.fa-tablet-android:before {\n  content: \"\";\n}\n\n.fa-tablet-android-alt:before {\n  content: \"\";\n}\n\n.fa-tablet-rugged:before {\n  content: \"\";\n}\n\n.fa-tablets:before {\n  content: \"\";\n}\n\n.fa-tachometer:before {\n  content: \"\";\n}\n\n.fa-tachometer-alt:before {\n  content: \"\";\n}\n\n.fa-tachometer-alt-average:before {\n  content: \"\";\n}\n\n.fa-tachometer-alt-fast:before {\n  content: \"\";\n}\n\n.fa-tachometer-alt-fastest:before {\n  content: \"\";\n}\n\n.fa-tachometer-alt-slow:before {\n  content: \"\";\n}\n\n.fa-tachometer-alt-slowest:before {\n  content: \"\";\n}\n\n.fa-tachometer-average:before {\n  content: \"\";\n}\n\n.fa-tachometer-fast:before {\n  content: \"\";\n}\n\n.fa-tachometer-fastest:before {\n  content: \"\";\n}\n\n.fa-tachometer-slow:before {\n  content: \"\";\n}\n\n.fa-tachometer-slowest:before {\n  content: \"\";\n}\n\n.fa-taco:before {\n  content: \"\";\n}\n\n.fa-tag:before {\n  content: \"\";\n}\n\n.fa-tags:before {\n  content: \"\";\n}\n\n.fa-tally:before {\n  content: \"\";\n}\n\n.fa-tanakh:before {\n  content: \"\";\n}\n\n.fa-tape:before {\n  content: \"\";\n}\n\n.fa-tasks:before {\n  content: \"\";\n}\n\n.fa-tasks-alt:before {\n  content: \"\";\n}\n\n.fa-taxi:before {\n  content: \"\";\n}\n\n.fa-teamspeak:before {\n  content: \"\";\n}\n\n.fa-teeth:before {\n  content: \"\";\n}\n\n.fa-teeth-open:before {\n  content: \"\";\n}\n\n.fa-telegram:before {\n  content: \"\";\n}\n\n.fa-telegram-plane:before {\n  content: \"\";\n}\n\n.fa-telescope:before {\n  content: \"菉\";\n}\n\n.fa-temperature-down:before {\n  content: \"錄\";\n}\n\n.fa-temperature-frigid:before {\n  content: \"\";\n}\n\n.fa-temperature-high:before {\n  content: \"\";\n}\n\n.fa-temperature-hot:before {\n  content: \"\";\n}\n\n.fa-temperature-low:before {\n  content: \"\";\n}\n\n.fa-temperature-up:before {\n  content: \"鹿\";\n}\n\n.fa-tencent-weibo:before {\n  content: \"\";\n}\n\n.fa-tenge:before {\n  content: \"\";\n}\n\n.fa-tennis-ball:before {\n  content: \"\";\n}\n\n.fa-terminal:before {\n  content: \"\";\n}\n\n.fa-text:before {\n  content: \"\";\n}\n\n.fa-text-height:before {\n  content: \"\";\n}\n\n.fa-text-size:before {\n  content: \"\";\n}\n\n.fa-text-width:before {\n  content: \"\";\n}\n\n.fa-th:before {\n  content: \"\";\n}\n\n.fa-th-large:before {\n  content: \"\";\n}\n\n.fa-th-list:before {\n  content: \"\";\n}\n\n.fa-the-red-yeti:before {\n  content: \"\";\n}\n\n.fa-theater-masks:before {\n  content: \"\";\n}\n\n.fa-themeco:before {\n  content: \"\";\n}\n\n.fa-themeisle:before {\n  content: \"\";\n}\n\n.fa-thermometer:before {\n  content: \"\";\n}\n\n.fa-thermometer-empty:before {\n  content: \"\";\n}\n\n.fa-thermometer-full:before {\n  content: \"\";\n}\n\n.fa-thermometer-half:before {\n  content: \"\";\n}\n\n.fa-thermometer-quarter:before {\n  content: \"\";\n}\n\n.fa-thermometer-three-quarters:before {\n  content: \"\";\n}\n\n.fa-theta:before {\n  content: \"\";\n}\n\n.fa-think-peaks:before {\n  content: \"\";\n}\n\n.fa-thumbs-down:before {\n  content: \"\";\n}\n\n.fa-thumbs-up:before {\n  content: \"\";\n}\n\n.fa-thumbtack:before {\n  content: \"\";\n}\n\n.fa-thunderstorm:before {\n  content: \"\";\n}\n\n.fa-thunderstorm-moon:before {\n  content: \"\";\n}\n\n.fa-thunderstorm-sun:before {\n  content: \"\";\n}\n\n.fa-ticket:before {\n  content: \"\";\n}\n\n.fa-ticket-alt:before {\n  content: \"\";\n}\n\n.fa-tilde:before {\n  content: \"\";\n}\n\n.fa-times:before {\n  content: \"\";\n}\n\n.fa-times-circle:before {\n  content: \"\";\n}\n\n.fa-times-hexagon:before {\n  content: \"\";\n}\n\n.fa-times-octagon:before {\n  content: \"\";\n}\n\n.fa-times-square:before {\n  content: \"\";\n}\n\n.fa-tint:before {\n  content: \"\";\n}\n\n.fa-tint-slash:before {\n  content: \"\";\n}\n\n.fa-tire:before {\n  content: \"\";\n}\n\n.fa-tire-flat:before {\n  content: \"\";\n}\n\n.fa-tire-pressure-warning:before {\n  content: \"\";\n}\n\n.fa-tire-rugged:before {\n  content: \"\";\n}\n\n.fa-tired:before {\n  content: \"\";\n}\n\n.fa-toggle-off:before {\n  content: \"\";\n}\n\n.fa-toggle-on:before {\n  content: \"\";\n}\n\n.fa-toilet:before {\n  content: \"\";\n}\n\n.fa-toilet-paper:before {\n  content: \"\";\n}\n\n.fa-toilet-paper-alt:before {\n  content: \"\";\n}\n\n.fa-toilet-paper-slash:before {\n  content: \"沈\";\n}\n\n.fa-tombstone:before {\n  content: \"\";\n}\n\n.fa-tombstone-alt:before {\n  content: \"\";\n}\n\n.fa-toolbox:before {\n  content: \"\";\n}\n\n.fa-tools:before {\n  content: \"\";\n}\n\n.fa-tooth:before {\n  content: \"\";\n}\n\n.fa-toothbrush:before {\n  content: \"\";\n}\n\n.fa-torah:before {\n  content: \"\";\n}\n\n.fa-torii-gate:before {\n  content: \"\";\n}\n\n.fa-tornado:before {\n  content: \"\";\n}\n\n.fa-tractor:before {\n  content: \"\";\n}\n\n.fa-trade-federation:before {\n  content: \"\";\n}\n\n.fa-trademark:before {\n  content: \"\";\n}\n\n.fa-traffic-cone:before {\n  content: \"\";\n}\n\n.fa-traffic-light:before {\n  content: \"\";\n}\n\n.fa-traffic-light-go:before {\n  content: \"\";\n}\n\n.fa-traffic-light-slow:before {\n  content: \"\";\n}\n\n.fa-traffic-light-stop:before {\n  content: \"\";\n}\n\n.fa-trailer:before {\n  content: \"論\";\n}\n\n.fa-train:before {\n  content: \"\";\n}\n\n.fa-tram:before {\n  content: \"\";\n}\n\n.fa-transgender:before {\n  content: \"\";\n}\n\n.fa-transgender-alt:before {\n  content: \"\";\n}\n\n.fa-transporter:before {\n  content: \"壟\";\n}\n\n.fa--var-transporter-1:before {\n  content: \"弄\";\n}\n\n.fa--var-transporter-2:before {\n  content: \"籠\";\n}\n\n.fa--var-transporter-3:before {\n  content: \"聾\";\n}\n\n.fa-transporter-empty:before {\n  content: \"牢\";\n}\n\n.fa-trash:before {\n  content: \"\";\n}\n\n.fa-trash-alt:before {\n  content: \"\";\n}\n\n.fa-trash-restore:before {\n  content: \"\";\n}\n\n.fa-trash-restore-alt:before {\n  content: \"\";\n}\n\n.fa-trash-undo:before {\n  content: \"\";\n}\n\n.fa-trash-undo-alt:before {\n  content: \"\";\n}\n\n.fa-treasure-chest:before {\n  content: \"\";\n}\n\n.fa-tree:before {\n  content: \"\";\n}\n\n.fa-tree-alt:before {\n  content: \"\";\n}\n\n.fa-tree-christmas:before {\n  content: \"\";\n}\n\n.fa-tree-decorated:before {\n  content: \"\";\n}\n\n.fa-tree-large:before {\n  content: \"\";\n}\n\n.fa-tree-palm:before {\n  content: \"\";\n}\n\n.fa-trees:before {\n  content: \"\";\n}\n\n.fa-trello:before {\n  content: \"\";\n}\n\n.fa-triangle:before {\n  content: \"\";\n}\n\n.fa-triangle-music:before {\n  content: \"\";\n}\n\n.fa-tripadvisor:before {\n  content: \"\";\n}\n\n.fa-trophy:before {\n  content: \"\";\n}\n\n.fa-trophy-alt:before {\n  content: \"\";\n}\n\n.fa-truck:before {\n  content: \"\";\n}\n\n.fa-truck-container:before {\n  content: \"\";\n}\n\n.fa-truck-couch:before {\n  content: \"\";\n}\n\n.fa-truck-loading:before {\n  content: \"\";\n}\n\n.fa-truck-monster:before {\n  content: \"\";\n}\n\n.fa-truck-moving:before {\n  content: \"\";\n}\n\n.fa-truck-pickup:before {\n  content: \"\";\n}\n\n.fa-truck-plow:before {\n  content: \"\";\n}\n\n.fa-truck-ramp:before {\n  content: \"\";\n}\n\n.fa-trumpet:before {\n  content: \"\";\n}\n\n.fa-tshirt:before {\n  content: \"\";\n}\n\n.fa-tty:before {\n  content: \"\";\n}\n\n.fa-tumblr:before {\n  content: \"\";\n}\n\n.fa-tumblr-square:before {\n  content: \"\";\n}\n\n.fa-turkey:before {\n  content: \"\";\n}\n\n.fa-turntable:before {\n  content: \"\";\n}\n\n.fa-turtle:before {\n  content: \"\";\n}\n\n.fa-tv:before {\n  content: \"\";\n}\n\n.fa-tv-alt:before {\n  content: \"\";\n}\n\n.fa-tv-music:before {\n  content: \"\";\n}\n\n.fa-tv-retro:before {\n  content: \"\";\n}\n\n.fa-twitch:before {\n  content: \"\";\n}\n\n.fa-twitter:before {\n  content: \"\";\n}\n\n.fa-twitter-square:before {\n  content: \"\";\n}\n\n.fa-typewriter:before {\n  content: \"\";\n}\n\n.fa--var-typo3:before {\n  content: \"\";\n}\n\n.fa-uber:before {\n  content: \"\";\n}\n\n.fa-ubuntu:before {\n  content: \"\";\n}\n\n.fa-ufo:before {\n  content: \"磊\";\n}\n\n.fa-ufo-beam:before {\n  content: \"賂\";\n}\n\n.fa-uikit:before {\n  content: \"\";\n}\n\n.fa-umbraco:before {\n  content: \"\";\n}\n\n.fa-umbrella:before {\n  content: \"\";\n}\n\n.fa-umbrella-beach:before {\n  content: \"\";\n}\n\n.fa-underline:before {\n  content: \"\";\n}\n\n.fa-undo:before {\n  content: \"\";\n}\n\n.fa-undo-alt:before {\n  content: \"\";\n}\n\n.fa-unicorn:before {\n  content: \"\";\n}\n\n.fa-union:before {\n  content: \"\";\n}\n\n.fa-uniregistry:before {\n  content: \"\";\n}\n\n.fa-unity:before {\n  content: \"雷\";\n}\n\n.fa-universal-access:before {\n  content: \"\";\n}\n\n.fa-university:before {\n  content: \"\";\n}\n\n.fa-unlink:before {\n  content: \"\";\n}\n\n.fa-unlock:before {\n  content: \"\";\n}\n\n.fa-unlock-alt:before {\n  content: \"\";\n}\n\n.fa-untappd:before {\n  content: \"\";\n}\n\n.fa-upload:before {\n  content: \"\";\n}\n\n.fa-ups:before {\n  content: \"\";\n}\n\n.fa-usb:before {\n  content: \"\";\n}\n\n.fa-usb-drive:before {\n  content: \"\";\n}\n\n.fa-usd-circle:before {\n  content: \"\";\n}\n\n.fa-usd-square:before {\n  content: \"\";\n}\n\n.fa-user:before {\n  content: \"\";\n}\n\n.fa-user-alien:before {\n  content: \"壘\";\n}\n\n.fa-user-alt:before {\n  content: \"\";\n}\n\n.fa-user-alt-slash:before {\n  content: \"\";\n}\n\n.fa-user-astronaut:before {\n  content: \"\";\n}\n\n.fa-user-chart:before {\n  content: \"\";\n}\n\n.fa-user-check:before {\n  content: \"\";\n}\n\n.fa-user-circle:before {\n  content: \"\";\n}\n\n.fa-user-clock:before {\n  content: \"\";\n}\n\n.fa-user-cog:before {\n  content: \"\";\n}\n\n.fa-user-cowboy:before {\n  content: \"\";\n}\n\n.fa-user-crown:before {\n  content: \"\";\n}\n\n.fa-user-edit:before {\n  content: \"\";\n}\n\n.fa-user-friends:before {\n  content: \"\";\n}\n\n.fa-user-graduate:before {\n  content: \"\";\n}\n\n.fa-user-hard-hat:before {\n  content: \"\";\n}\n\n.fa-user-headset:before {\n  content: \"\";\n}\n\n.fa-user-injured:before {\n  content: \"\";\n}\n\n.fa-user-lock:before {\n  content: \"\";\n}\n\n.fa-user-md:before {\n  content: \"\";\n}\n\n.fa-user-md-chat:before {\n  content: \"\";\n}\n\n.fa-user-minus:before {\n  content: \"\";\n}\n\n.fa-user-music:before {\n  content: \"\";\n}\n\n.fa-user-ninja:before {\n  content: \"\";\n}\n\n.fa-user-nurse:before {\n  content: \"\";\n}\n\n.fa-user-plus:before {\n  content: \"\";\n}\n\n.fa-user-robot:before {\n  content: \"屢\";\n}\n\n.fa-user-secret:before {\n  content: \"\";\n}\n\n.fa-user-shield:before {\n  content: \"\";\n}\n\n.fa-user-slash:before {\n  content: \"\";\n}\n\n.fa-user-tag:before {\n  content: \"\";\n}\n\n.fa-user-tie:before {\n  content: \"\";\n}\n\n.fa-user-times:before {\n  content: \"\";\n}\n\n.fa-user-unlock:before {\n  content: \"菱\";\n}\n\n.fa-user-visor:before {\n  content: \"樓\";\n}\n\n.fa-users:before {\n  content: \"\";\n}\n\n.fa-users-class:before {\n  content: \"\";\n}\n\n.fa-users-cog:before {\n  content: \"\";\n}\n\n.fa-users-crown:before {\n  content: \"\";\n}\n\n.fa-users-medical:before {\n  content: \"\";\n}\n\n.fa-users-slash:before {\n  content: \"拾\";\n}\n\n.fa-usps:before {\n  content: \"\";\n}\n\n.fa-ussunnah:before {\n  content: \"\";\n}\n\n.fa-utensil-fork:before {\n  content: \"\";\n}\n\n.fa-utensil-knife:before {\n  content: \"\";\n}\n\n.fa-utensil-spoon:before {\n  content: \"\";\n}\n\n.fa-utensils:before {\n  content: \"\";\n}\n\n.fa-utensils-alt:before {\n  content: \"\";\n}\n\n.fa-vaadin:before {\n  content: \"\";\n}\n\n.fa-vacuum:before {\n  content: \"淚\";\n}\n\n.fa-vacuum-robot:before {\n  content: \"漏\";\n}\n\n.fa-value-absolute:before {\n  content: \"\";\n}\n\n.fa-vector-square:before {\n  content: \"\";\n}\n\n.fa-venus:before {\n  content: \"\";\n}\n\n.fa-venus-double:before {\n  content: \"\";\n}\n\n.fa-venus-mars:before {\n  content: \"\";\n}\n\n.fa-vhs:before {\n  content: \"\";\n}\n\n.fa-viacoin:before {\n  content: \"\";\n}\n\n.fa-viadeo:before {\n  content: \"\";\n}\n\n.fa-viadeo-square:before {\n  content: \"\";\n}\n\n.fa-vial:before {\n  content: \"\";\n}\n\n.fa-vials:before {\n  content: \"\";\n}\n\n.fa-viber:before {\n  content: \"\";\n}\n\n.fa-video:before {\n  content: \"\";\n}\n\n.fa-video-plus:before {\n  content: \"\";\n}\n\n.fa-video-slash:before {\n  content: \"\";\n}\n\n.fa-vihara:before {\n  content: \"\";\n}\n\n.fa-vimeo:before {\n  content: \"\";\n}\n\n.fa-vimeo-square:before {\n  content: \"\";\n}\n\n.fa-vimeo-v:before {\n  content: \"\";\n}\n\n.fa-vine:before {\n  content: \"\";\n}\n\n.fa-violin:before {\n  content: \"\";\n}\n\n.fa-virus:before {\n  content: \"若\";\n}\n\n.fa-virus-slash:before {\n  content: \"掠\";\n}\n\n.fa-viruses:before {\n  content: \"略\";\n}\n\n.fa-vk:before {\n  content: \"\";\n}\n\n.fa-vnv:before {\n  content: \"\";\n}\n\n.fa-voicemail:before {\n  content: \"\";\n}\n\n.fa-volcano:before {\n  content: \"\";\n}\n\n.fa-volleyball-ball:before {\n  content: \"\";\n}\n\n.fa-volume:before {\n  content: \"\";\n}\n\n.fa-volume-down:before {\n  content: \"\";\n}\n\n.fa-volume-mute:before {\n  content: \"\";\n}\n\n.fa-volume-off:before {\n  content: \"\";\n}\n\n.fa-volume-slash:before {\n  content: \"\";\n}\n\n.fa-volume-up:before {\n  content: \"\";\n}\n\n.fa-vote-nay:before {\n  content: \"\";\n}\n\n.fa-vote-yea:before {\n  content: \"\";\n}\n\n.fa-vr-cardboard:before {\n  content: \"\";\n}\n\n.fa-vuejs:before {\n  content: \"\";\n}\n\n.fa-wagon-covered:before {\n  content: \"\";\n}\n\n.fa-walker:before {\n  content: \"\";\n}\n\n.fa-walkie-talkie:before {\n  content: \"\";\n}\n\n.fa-walking:before {\n  content: \"\";\n}\n\n.fa-wallet:before {\n  content: \"\";\n}\n\n.fa-wand:before {\n  content: \"\";\n}\n\n.fa-wand-magic:before {\n  content: \"\";\n}\n\n.fa-warehouse:before {\n  content: \"\";\n}\n\n.fa-warehouse-alt:before {\n  content: \"\";\n}\n\n.fa-washer:before {\n  content: \"\";\n}\n\n.fa-watch:before {\n  content: \"\";\n}\n\n.fa-watch-calculator:before {\n  content: \"\";\n}\n\n.fa-watch-fitness:before {\n  content: \"\";\n}\n\n.fa-water:before {\n  content: \"\";\n}\n\n.fa-water-lower:before {\n  content: \"\";\n}\n\n.fa-water-rise:before {\n  content: \"\";\n}\n\n.fa-wave-sine:before {\n  content: \"\";\n}\n\n.fa-wave-square:before {\n  content: \"\";\n}\n\n.fa-wave-triangle:before {\n  content: \"\";\n}\n\n.fa-waveform:before {\n  content: \"\";\n}\n\n.fa-waveform-path:before {\n  content: \"\";\n}\n\n.fa-waze:before {\n  content: \"\";\n}\n\n.fa-webcam:before {\n  content: \"\";\n}\n\n.fa-webcam-slash:before {\n  content: \"\";\n}\n\n.fa-weebly:before {\n  content: \"\";\n}\n\n.fa-weibo:before {\n  content: \"\";\n}\n\n.fa-weight:before {\n  content: \"\";\n}\n\n.fa-weight-hanging:before {\n  content: \"\";\n}\n\n.fa-weixin:before {\n  content: \"\";\n}\n\n.fa-whale:before {\n  content: \"\";\n}\n\n.fa-whatsapp:before {\n  content: \"\";\n}\n\n.fa-whatsapp-square:before {\n  content: \"\";\n}\n\n.fa-wheat:before {\n  content: \"\";\n}\n\n.fa-wheelchair:before {\n  content: \"\";\n}\n\n.fa-whistle:before {\n  content: \"\";\n}\n\n.fa-whmcs:before {\n  content: \"\";\n}\n\n.fa-wifi:before {\n  content: \"\";\n}\n\n.fa--var-wifi-1:before {\n  content: \"\";\n}\n\n.fa--var-wifi-2:before {\n  content: \"\";\n}\n\n.fa-wifi-slash:before {\n  content: \"\";\n}\n\n.fa-wikipedia-w:before {\n  content: \"\";\n}\n\n.fa-wind:before {\n  content: \"\";\n}\n\n.fa-wind-turbine:before {\n  content: \"\";\n}\n\n.fa-wind-warning:before {\n  content: \"\";\n}\n\n.fa-window:before {\n  content: \"\";\n}\n\n.fa-window-alt:before {\n  content: \"\";\n}\n\n.fa-window-close:before {\n  content: \"\";\n}\n\n.fa-window-frame:before {\n  content: \"累\";\n}\n\n.fa-window-frame-open:before {\n  content: \"縷\";\n}\n\n.fa-window-maximize:before {\n  content: \"\";\n}\n\n.fa-window-minimize:before {\n  content: \"\";\n}\n\n.fa-window-restore:before {\n  content: \"\";\n}\n\n.fa-windows:before {\n  content: \"\";\n}\n\n.fa-windsock:before {\n  content: \"\";\n}\n\n.fa-wine-bottle:before {\n  content: \"\";\n}\n\n.fa-wine-glass:before {\n  content: \"\";\n}\n\n.fa-wine-glass-alt:before {\n  content: \"\";\n}\n\n.fa-wix:before {\n  content: \"\";\n}\n\n.fa-wizards-of-the-coast:before {\n  content: \"\";\n}\n\n.fa-wolf-pack-battalion:before {\n  content: \"\";\n}\n\n.fa-won-sign:before {\n  content: \"\";\n}\n\n.fa-wordpress:before {\n  content: \"\";\n}\n\n.fa-wordpress-simple:before {\n  content: \"\";\n}\n\n.fa-wpbeginner:before {\n  content: \"\";\n}\n\n.fa-wpexplorer:before {\n  content: \"\";\n}\n\n.fa-wpforms:before {\n  content: \"\";\n}\n\n.fa-wpressr:before {\n  content: \"\";\n}\n\n.fa-wreath:before {\n  content: \"\";\n}\n\n.fa-wrench:before {\n  content: \"\";\n}\n\n.fa-x-ray:before {\n  content: \"\";\n}\n\n.fa-xbox:before {\n  content: \"\";\n}\n\n.fa-xing:before {\n  content: \"\";\n}\n\n.fa-xing-square:before {\n  content: \"\";\n}\n\n.fa-y-combinator:before {\n  content: \"\";\n}\n\n.fa-yahoo:before {\n  content: \"\";\n}\n\n.fa-yammer:before {\n  content: \"\";\n}\n\n.fa-yandex:before {\n  content: \"\";\n}\n\n.fa-yandex-international:before {\n  content: \"\";\n}\n\n.fa-yarn:before {\n  content: \"\";\n}\n\n.fa-yelp:before {\n  content: \"\";\n}\n\n.fa-yen-sign:before {\n  content: \"\";\n}\n\n.fa-yin-yang:before {\n  content: \"\";\n}\n\n.fa-yoast:before {\n  content: \"\";\n}\n\n.fa-youtube:before {\n  content: \"\";\n}\n\n.fa-youtube-square:before {\n  content: \"\";\n}\n\n.fa-zhihu:before {\n  content: \"\";\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n/*!\n * Font Awesome Pro 5.13.0 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license (Commercial License)\n */\n.fa, .fas, .far, .fal, .fad, .fab {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  line-height: 1;\n}\n\n@font-face {\n  font-family: \"Font Awesome 5 Brands\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: block;\n  src: url(\"/font/font-awe/webfonts/fa-brands-400.eot\");\n  src: url(\"/font/font-awe/webfonts/fa-brands-400.eot?#iefix\") format(\"embedded-opentype\"), url(\"/font/font-awe/webfonts/fa-brands-400.woff2\") format(\"woff2\"), url(\"/font/font-awe/webfonts/fa-brands-400.woff\") format(\"woff\"), url(\"/font/font-awe/webfonts/fa-brands-400.ttf\") format(\"truetype\"), url(\"/font/font-awe/webfonts/fa-brands-400.svg#fontawesome\") format(\"svg\");\n}\n.fab {\n  font-family: \"Font Awesome 5 Brands\";\n  font-weight: 400;\n}\n\n/*!\n * Font Awesome Pro 5.13.0 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license (Commercial License)\n */\n.fa, .fas, .far, .fal, .fad, .fab {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  line-height: 1;\n}\n\n@font-face {\n  font-family: \"Font Awesome 5 Duotone\";\n  font-style: normal;\n  font-weight: 900;\n  font-display: block;\n  src: url(\"/font/font-awe/webfonts/fa-duotone-900.eot\");\n  src: url(\"/font/font-awe/webfonts/fa-duotone-900.eot?#iefix\") format(\"embedded-opentype\"), url(\"/font/font-awe/webfonts/fa-duotone-900.woff2\") format(\"woff2\"), url(\"/font/font-awe/webfonts/fa-duotone-900.woff\") format(\"woff\"), url(\"/font/font-awe/webfonts/fa-duotone-900.ttf\") format(\"truetype\"), url(\"/font/font-awe/webfonts/fa-duotone-900.svg#fontawesome\") format(\"svg\");\n}\n.fad {\n  position: relative;\n  font-family: \"Font Awesome 5 Duotone\";\n  font-weight: 900;\n}\n\n.fad:before {\n  position: absolute;\n  color: var(--fa-primary-color, inherit);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.fad:after {\n  color: var(--fa-secondary-color, inherit);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.fa-swap-opacity .fad:before,\n.fad.fa-swap-opacity:before {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.fa-swap-opacity .fad:after,\n.fad.fa-swap-opacity:after {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}\n\n.fad.fa-stack-1x, .fad.fa-stack-2x {\n  position: absolute;\n}\n\n.fad.fa-stack-1x:before,\n.fad.fa-stack-2x:before,\n.fad.fa-fw:before {\n  left: 50%;\n  transform: translateX(-50%);\n}\n\n.fad.fa-abacus:after {\n  content: \"􏙀\";\n}\n\n.fad.fa-acorn:after {\n  content: \"􏚮\";\n}\n\n.fad.fa-ad:after {\n  content: \"􏙁\";\n}\n\n.fad.fa-address-book:after {\n  content: \"􏊹\";\n}\n\n.fad.fa-address-card:after {\n  content: \"􏊻\";\n}\n\n.fad.fa-adjust:after {\n  content: \"􏁂\";\n}\n\n.fad.fa-air-conditioner:after {\n  content: \"􏣴\";\n}\n\n.fad.fa-air-freshener:after {\n  content: \"􏗐\";\n}\n\n.fad.fa-alarm-clock:after {\n  content: \"􏍎\";\n}\n\n.fad.fa-alarm-exclamation:after {\n  content: \"􏡃\";\n}\n\n.fad.fa-alarm-plus:after {\n  content: \"􏡄\";\n}\n\n.fad.fa-alarm-snooze:after {\n  content: \"􏡅\";\n}\n\n.fad.fa-album:after {\n  content: \"􏢟\";\n}\n\n.fad.fa-album-collection:after {\n  content: \"􏢠\";\n}\n\n.fad.fa-alicorn:after {\n  content: \"􏚰\";\n}\n\n.fad.fa-alien:after {\n  content: \"􏣵\";\n}\n\n.fad.fa-alien-monster:after {\n  content: \"􏣶\";\n}\n\n.fad.fa-align-center:after {\n  content: \"􏀷\";\n}\n\n.fad.fa-align-justify:after {\n  content: \"􏀹\";\n}\n\n.fad.fa-align-left:after {\n  content: \"􏀶\";\n}\n\n.fad.fa-align-right:after {\n  content: \"􏀸\";\n}\n\n.fad.fa-align-slash:after {\n  content: \"􏡆\";\n}\n\n.fad.fa-allergies:after {\n  content: \"􏑡\";\n}\n\n.fad.fa-ambulance:after {\n  content: \"􏃹\";\n}\n\n.fad.fa-american-sign-language-interpreting:after {\n  content: \"􏊣\";\n}\n\n.fad.fa-amp-guitar:after {\n  content: \"􏢡\";\n}\n\n.fad.fa-analytics:after {\n  content: \"􏙃\";\n}\n\n.fad.fa-anchor:after {\n  content: \"􏄽\";\n}\n\n.fad.fa-angel:after {\n  content: \"􏝹\";\n}\n\n.fad.fa-angle-double-down:after {\n  content: \"􏄃\";\n}\n\n.fad.fa-angle-double-left:after {\n  content: \"􏄀\";\n}\n\n.fad.fa-angle-double-right:after {\n  content: \"􏄁\";\n}\n\n.fad.fa-angle-double-up:after {\n  content: \"􏄂\";\n}\n\n.fad.fa-angle-down:after {\n  content: \"􏄇\";\n}\n\n.fad.fa-angle-left:after {\n  content: \"􏄄\";\n}\n\n.fad.fa-angle-right:after {\n  content: \"􏄅\";\n}\n\n.fad.fa-angle-up:after {\n  content: \"􏄆\";\n}\n\n.fad.fa-angry:after {\n  content: \"􏕖\";\n}\n\n.fad.fa-ankh:after {\n  content: \"􏙄\";\n}\n\n.fad.fa-apple-alt:after {\n  content: \"􏗑\";\n}\n\n.fad.fa-apple-crate:after {\n  content: \"􏚱\";\n}\n\n.fad.fa-archive:after {\n  content: \"􏆇\";\n}\n\n.fad.fa-archway:after {\n  content: \"􏕗\";\n}\n\n.fad.fa-arrow-alt-circle-down:after {\n  content: \"􏍘\";\n}\n\n.fad.fa-arrow-alt-circle-left:after {\n  content: \"􏍙\";\n}\n\n.fad.fa-arrow-alt-circle-right:after {\n  content: \"􏍚\";\n}\n\n.fad.fa-arrow-alt-circle-up:after {\n  content: \"􏍛\";\n}\n\n.fad.fa-arrow-alt-down:after {\n  content: \"􏍔\";\n}\n\n.fad.fa-arrow-alt-from-bottom:after {\n  content: \"􏍆\";\n}\n\n.fad.fa-arrow-alt-from-left:after {\n  content: \"􏍇\";\n}\n\n.fad.fa-arrow-alt-from-right:after {\n  content: \"􏍈\";\n}\n\n.fad.fa-arrow-alt-from-top:after {\n  content: \"􏍉\";\n}\n\n.fad.fa-arrow-alt-left:after {\n  content: \"􏍕\";\n}\n\n.fad.fa-arrow-alt-right:after {\n  content: \"􏍖\";\n}\n\n.fad.fa-arrow-alt-square-down:after {\n  content: \"􏍐\";\n}\n\n.fad.fa-arrow-alt-square-left:after {\n  content: \"􏍑\";\n}\n\n.fad.fa-arrow-alt-square-right:after {\n  content: \"􏍒\";\n}\n\n.fad.fa-arrow-alt-square-up:after {\n  content: \"􏍓\";\n}\n\n.fad.fa-arrow-alt-to-bottom:after {\n  content: \"􏍊\";\n}\n\n.fad.fa-arrow-alt-to-left:after {\n  content: \"􏍋\";\n}\n\n.fad.fa-arrow-alt-to-right:after {\n  content: \"􏍌\";\n}\n\n.fad.fa-arrow-alt-to-top:after {\n  content: \"􏍍\";\n}\n\n.fad.fa-arrow-alt-up:after {\n  content: \"􏍗\";\n}\n\n.fad.fa-arrow-circle-down:after {\n  content: \"􏂫\";\n}\n\n.fad.fa-arrow-circle-left:after {\n  content: \"􏂨\";\n}\n\n.fad.fa-arrow-circle-right:after {\n  content: \"􏂩\";\n}\n\n.fad.fa-arrow-circle-up:after {\n  content: \"􏂪\";\n}\n\n.fad.fa-arrow-down:after {\n  content: \"􏁣\";\n}\n\n.fad.fa-arrow-from-bottom:after {\n  content: \"􏍂\";\n}\n\n.fad.fa-arrow-from-left:after {\n  content: \"􏍃\";\n}\n\n.fad.fa-arrow-from-right:after {\n  content: \"􏍄\";\n}\n\n.fad.fa-arrow-from-top:after {\n  content: \"􏍅\";\n}\n\n.fad.fa-arrow-left:after {\n  content: \"􏁠\";\n}\n\n.fad.fa-arrow-right:after {\n  content: \"􏁡\";\n}\n\n.fad.fa-arrow-square-down:after {\n  content: \"􏌹\";\n}\n\n.fad.fa-arrow-square-left:after {\n  content: \"􏌺\";\n}\n\n.fad.fa-arrow-square-right:after {\n  content: \"􏌻\";\n}\n\n.fad.fa-arrow-square-up:after {\n  content: \"􏌼\";\n}\n\n.fad.fa-arrow-to-bottom:after {\n  content: \"􏌽\";\n}\n\n.fad.fa-arrow-to-left:after {\n  content: \"􏌾\";\n}\n\n.fad.fa-arrow-to-right:after {\n  content: \"􏍀\";\n}\n\n.fad.fa-arrow-to-top:after {\n  content: \"􏍁\";\n}\n\n.fad.fa-arrow-up:after {\n  content: \"􏁢\";\n}\n\n.fad.fa-arrows:after {\n  content: \"􏁇\";\n}\n\n.fad.fa-arrows-alt:after {\n  content: \"􏂲\";\n}\n\n.fad.fa-arrows-alt-h:after {\n  content: \"􏌷\";\n}\n\n.fad.fa-arrows-alt-v:after {\n  content: \"􏌸\";\n}\n\n.fad.fa-arrows-h:after {\n  content: \"􏁾\";\n}\n\n.fad.fa-arrows-v:after {\n  content: \"􏁽\";\n}\n\n.fad.fa-assistive-listening-systems:after {\n  content: \"􏊢\";\n}\n\n.fad.fa-asterisk:after {\n  content: \"􏁩\";\n}\n\n.fad.fa-at:after {\n  content: \"􏇺\";\n}\n\n.fad.fa-atlas:after {\n  content: \"􏕘\";\n}\n\n.fad.fa-atom:after {\n  content: \"􏗒\";\n}\n\n.fad.fa-atom-alt:after {\n  content: \"􏗓\";\n}\n\n.fad.fa-audio-description:after {\n  content: \"􏊞\";\n}\n\n.fad.fa-award:after {\n  content: \"􏕙\";\n}\n\n.fad.fa-axe:after {\n  content: \"􏚲\";\n}\n\n.fad.fa-axe-battle:after {\n  content: \"􏚳\";\n}\n\n.fad.fa-baby:after {\n  content: \"􏝼\";\n}\n\n.fad.fa-baby-carriage:after {\n  content: \"􏝽\";\n}\n\n.fad.fa-backpack:after {\n  content: \"􏗔\";\n}\n\n.fad.fa-backspace:after {\n  content: \"􏕚\";\n}\n\n.fad.fa-backward:after {\n  content: \"􏁊\";\n}\n\n.fad.fa-bacon:after {\n  content: \"􏟥\";\n}\n\n.fad.fa-bacteria:after {\n  content: \"􏥙\";\n}\n\n.fad.fa-bacterium:after {\n  content: \"􏥚\";\n}\n\n.fad.fa-badge:after {\n  content: \"􏌵\";\n}\n\n.fad.fa-badge-check:after {\n  content: \"􏌶\";\n}\n\n.fad.fa-badge-dollar:after {\n  content: \"􏙅\";\n}\n\n.fad.fa-badge-percent:after {\n  content: \"􏙆\";\n}\n\n.fad.fa-badge-sheriff:after {\n  content: \"􏢢\";\n}\n\n.fad.fa-badger-honey:after {\n  content: \"􏚴\";\n}\n\n.fad.fa-bags-shopping:after {\n  content: \"􏡇\";\n}\n\n.fad.fa-bahai:after {\n  content: \"􏙦\";\n}\n\n.fad.fa-balance-scale:after {\n  content: \"􏉎\";\n}\n\n.fad.fa-balance-scale-left:after {\n  content: \"􏔕\";\n}\n\n.fad.fa-balance-scale-right:after {\n  content: \"􏔖\";\n}\n\n.fad.fa-ball-pile:after {\n  content: \"􏝾\";\n}\n\n.fad.fa-ballot:after {\n  content: \"􏜲\";\n}\n\n.fad.fa-ballot-check:after {\n  content: \"􏜳\";\n}\n\n.fad.fa-ban:after {\n  content: \"􏁞\";\n}\n\n.fad.fa-band-aid:after {\n  content: \"􏑢\";\n}\n\n.fad.fa-banjo:after {\n  content: \"􏢣\";\n}\n\n.fad.fa-barcode:after {\n  content: \"􏀪\";\n}\n\n.fad.fa-barcode-alt:after {\n  content: \"􏑣\";\n}\n\n.fad.fa-barcode-read:after {\n  content: \"􏑤\";\n}\n\n.fad.fa-barcode-scan:after {\n  content: \"􏑥\";\n}\n\n.fad.fa-bars:after {\n  content: \"􏃉\";\n}\n\n.fad.fa-baseball:after {\n  content: \"􏐲\";\n}\n\n.fad.fa-baseball-ball:after {\n  content: \"􏐳\";\n}\n\n.fad.fa-basketball-ball:after {\n  content: \"􏐴\";\n}\n\n.fad.fa-basketball-hoop:after {\n  content: \"􏐵\";\n}\n\n.fad.fa-bat:after {\n  content: \"􏚵\";\n}\n\n.fad.fa-bath:after {\n  content: \"􏋍\";\n}\n\n.fad.fa-battery-bolt:after {\n  content: \"􏍶\";\n}\n\n.fad.fa-battery-empty:after {\n  content: \"􏉄\";\n}\n\n.fad.fa-battery-full:after {\n  content: \"􏉀\";\n}\n\n.fad.fa-battery-half:after {\n  content: \"􏉂\";\n}\n\n.fad.fa-battery-quarter:after {\n  content: \"􏉃\";\n}\n\n.fad.fa-battery-slash:after {\n  content: \"􏍷\";\n}\n\n.fad.fa-battery-three-quarters:after {\n  content: \"􏉁\";\n}\n\n.fad.fa-bed:after {\n  content: \"􏈶\";\n}\n\n.fad.fa-bed-alt:after {\n  content: \"􏣷\";\n}\n\n.fad.fa-bed-bunk:after {\n  content: \"􏣸\";\n}\n\n.fad.fa-bed-empty:after {\n  content: \"􏣹\";\n}\n\n.fad.fa-beer:after {\n  content: \"􏃼\";\n}\n\n.fad.fa-bell:after {\n  content: \"􏃳\";\n}\n\n.fad.fa-bell-exclamation:after {\n  content: \"􏡈\";\n}\n\n.fad.fa-bell-on:after {\n  content: \"􏣺\";\n}\n\n.fad.fa-bell-plus:after {\n  content: \"􏡉\";\n}\n\n.fad.fa-bell-school:after {\n  content: \"􏗕\";\n}\n\n.fad.fa-bell-school-slash:after {\n  content: \"􏗖\";\n}\n\n.fad.fa-bell-slash:after {\n  content: \"􏇶\";\n}\n\n.fad.fa-bells:after {\n  content: \"􏝿\";\n}\n\n.fad.fa-betamax:after {\n  content: \"􏢤\";\n}\n\n.fad.fa-bezier-curve:after {\n  content: \"􏕛\";\n}\n\n.fad.fa-bible:after {\n  content: \"􏙇\";\n}\n\n.fad.fa-bicycle:after {\n  content: \"􏈆\";\n}\n\n.fad.fa-biking:after {\n  content: \"􏡊\";\n}\n\n.fad.fa-biking-mountain:after {\n  content: \"􏡋\";\n}\n\n.fad.fa-binoculars:after {\n  content: \"􏇥\";\n}\n\n.fad.fa-biohazard:after {\n  content: \"􏞀\";\n}\n\n.fad.fa-birthday-cake:after {\n  content: \"􏇽\";\n}\n\n.fad.fa-blanket:after {\n  content: \"􏒘\";\n}\n\n.fad.fa-blender:after {\n  content: \"􏔗\";\n}\n\n.fad.fa-blender-phone:after {\n  content: \"􏚶\";\n}\n\n.fad.fa-blind:after {\n  content: \"􏊝\";\n}\n\n.fad.fa-blinds:after {\n  content: \"􏣻\";\n}\n\n.fad.fa-blinds-open:after {\n  content: \"􏣼\";\n}\n\n.fad.fa-blinds-raised:after {\n  content: \"􏣽\";\n}\n\n.fad.fa-blog:after {\n  content: \"􏞁\";\n}\n\n.fad.fa-bold:after {\n  content: \"􏀲\";\n}\n\n.fad.fa-bolt:after {\n  content: \"􏃧\";\n}\n\n.fad.fa-bomb:after {\n  content: \"􏇢\";\n}\n\n.fad.fa-bone:after {\n  content: \"􏗗\";\n}\n\n.fad.fa-bone-break:after {\n  content: \"􏗘\";\n}\n\n.fad.fa-bong:after {\n  content: \"􏕜\";\n}\n\n.fad.fa-book:after {\n  content: \"􏀭\";\n}\n\n.fad.fa-book-alt:after {\n  content: \"􏗙\";\n}\n\n.fad.fa-book-dead:after {\n  content: \"􏚷\";\n}\n\n.fad.fa-book-heart:after {\n  content: \"􏒙\";\n}\n\n.fad.fa-book-medical:after {\n  content: \"􏟦\";\n}\n\n.fad.fa-book-open:after {\n  content: \"􏔘\";\n}\n\n.fad.fa-book-reader:after {\n  content: \"􏗚\";\n}\n\n.fad.fa-book-spells:after {\n  content: \"􏚸\";\n}\n\n.fad.fa-book-user:after {\n  content: \"􏟧\";\n}\n\n.fad.fa-bookmark:after {\n  content: \"􏀮\";\n}\n\n.fad.fa-books:after {\n  content: \"􏗛\";\n}\n\n.fad.fa-books-medical:after {\n  content: \"􏟨\";\n}\n\n.fad.fa-boombox:after {\n  content: \"􏢥\";\n}\n\n.fad.fa-boot:after {\n  content: \"􏞂\";\n}\n\n.fad.fa-booth-curtain:after {\n  content: \"􏜴\";\n}\n\n.fad.fa-border-all:after {\n  content: \"􏡌\";\n}\n\n.fad.fa-border-bottom:after {\n  content: \"􏡍\";\n}\n\n.fad.fa-border-center-h:after {\n  content: \"􏢜\";\n}\n\n.fad.fa-border-center-v:after {\n  content: \"􏢝\";\n}\n\n.fad.fa-border-inner:after {\n  content: \"􏡎\";\n}\n\n.fad.fa-border-left:after {\n  content: \"􏡏\";\n}\n\n.fad.fa-border-none:after {\n  content: \"􏡐\";\n}\n\n.fad.fa-border-outer:after {\n  content: \"􏡑\";\n}\n\n.fad.fa-border-right:after {\n  content: \"􏡒\";\n}\n\n.fad.fa-border-style:after {\n  content: \"􏡓\";\n}\n\n.fad.fa-border-style-alt:after {\n  content: \"􏡔\";\n}\n\n.fad.fa-border-top:after {\n  content: \"􏡕\";\n}\n\n.fad.fa-bow-arrow:after {\n  content: \"􏚹\";\n}\n\n.fad.fa-bowling-ball:after {\n  content: \"􏐶\";\n}\n\n.fad.fa-bowling-pins:after {\n  content: \"􏐷\";\n}\n\n.fad.fa-box:after {\n  content: \"􏑦\";\n}\n\n.fad.fa-box-alt:after {\n  content: \"􏒚\";\n}\n\n.fad.fa-box-ballot:after {\n  content: \"􏜵\";\n}\n\n.fad.fa-box-check:after {\n  content: \"􏑧\";\n}\n\n.fad.fa-box-fragile:after {\n  content: \"􏒛\";\n}\n\n.fad.fa-box-full:after {\n  content: \"􏒜\";\n}\n\n.fad.fa-box-heart:after {\n  content: \"􏒝\";\n}\n\n.fad.fa-box-open:after {\n  content: \"􏒞\";\n}\n\n.fad.fa-box-tissue:after {\n  content: \"􏥛\";\n}\n\n.fad.fa-box-up:after {\n  content: \"􏒟\";\n}\n\n.fad.fa-box-usd:after {\n  content: \"􏒠\";\n}\n\n.fad.fa-boxes:after {\n  content: \"􏑨\";\n}\n\n.fad.fa-boxes-alt:after {\n  content: \"􏒡\";\n}\n\n.fad.fa-boxing-glove:after {\n  content: \"􏐸\";\n}\n\n.fad.fa-brackets:after {\n  content: \"􏟩\";\n}\n\n.fad.fa-brackets-curly:after {\n  content: \"􏟪\";\n}\n\n.fad.fa-braille:after {\n  content: \"􏊡\";\n}\n\n.fad.fa-brain:after {\n  content: \"􏗜\";\n}\n\n.fad.fa-bread-loaf:after {\n  content: \"􏟫\";\n}\n\n.fad.fa-bread-slice:after {\n  content: \"􏟬\";\n}\n\n.fad.fa-briefcase:after {\n  content: \"􏂱\";\n}\n\n.fad.fa-briefcase-medical:after {\n  content: \"􏑩\";\n}\n\n.fad.fa-bring-forward:after {\n  content: \"􏡖\";\n}\n\n.fad.fa-bring-front:after {\n  content: \"􏡗\";\n}\n\n.fad.fa-broadcast-tower:after {\n  content: \"􏔙\";\n}\n\n.fad.fa-broom:after {\n  content: \"􏔚\";\n}\n\n.fad.fa-browser:after {\n  content: \"􏍾\";\n}\n\n.fad.fa-brush:after {\n  content: \"􏕝\";\n}\n\n.fad.fa-bug:after {\n  content: \"􏆈\";\n}\n\n.fad.fa-building:after {\n  content: \"􏆭\";\n}\n\n.fad.fa-bullhorn:after {\n  content: \"􏂡\";\n}\n\n.fad.fa-bullseye:after {\n  content: \"􏅀\";\n}\n\n.fad.fa-bullseye-arrow:after {\n  content: \"􏙈\";\n}\n\n.fad.fa-bullseye-pointer:after {\n  content: \"􏙉\";\n}\n\n.fad.fa-burger-soda:after {\n  content: \"􏡘\";\n}\n\n.fad.fa-burn:after {\n  content: \"􏑪\";\n}\n\n.fad.fa-burrito:after {\n  content: \"􏟭\";\n}\n\n.fad.fa-bus:after {\n  content: \"􏈇\";\n}\n\n.fad.fa-bus-alt:after {\n  content: \"􏕞\";\n}\n\n.fad.fa-bus-school:after {\n  content: \"􏗝\";\n}\n\n.fad.fa-business-time:after {\n  content: \"􏙊\";\n}\n\n.fad.fa-cabinet-filing:after {\n  content: \"􏙋\";\n}\n\n.fad.fa-cactus:after {\n  content: \"􏢧\";\n}\n\n.fad.fa-calculator:after {\n  content: \"􏇬\";\n}\n\n.fad.fa-calculator-alt:after {\n  content: \"􏙌\";\n}\n\n.fad.fa-calendar:after {\n  content: \"􏄳\";\n}\n\n.fad.fa-calendar-alt:after {\n  content: \"􏁳\";\n}\n\n.fad.fa-calendar-check:after {\n  content: \"􏉴\";\n}\n\n.fad.fa-calendar-day:after {\n  content: \"􏞃\";\n}\n\n.fad.fa-calendar-edit:after {\n  content: \"􏌳\";\n}\n\n.fad.fa-calendar-exclamation:after {\n  content: \"􏌴\";\n}\n\n.fad.fa-calendar-minus:after {\n  content: \"􏉲\";\n}\n\n.fad.fa-calendar-plus:after {\n  content: \"􏉱\";\n}\n\n.fad.fa-calendar-star:after {\n  content: \"􏜶\";\n}\n\n.fad.fa-calendar-times:after {\n  content: \"􏉳\";\n}\n\n.fad.fa-calendar-week:after {\n  content: \"􏞄\";\n}\n\n.fad.fa-camcorder:after {\n  content: \"􏢨\";\n}\n\n.fad.fa-camera:after {\n  content: \"􏀰\";\n}\n\n.fad.fa-camera-alt:after {\n  content: \"􏌲\";\n}\n\n.fad.fa-camera-home:after {\n  content: \"􏣾\";\n}\n\n.fad.fa-camera-movie:after {\n  content: \"􏢩\";\n}\n\n.fad.fa-camera-polaroid:after {\n  content: \"􏢪\";\n}\n\n.fad.fa-camera-retro:after {\n  content: \"􏂃\";\n}\n\n.fad.fa-campfire:after {\n  content: \"􏚺\";\n}\n\n.fad.fa-campground:after {\n  content: \"􏚻\";\n}\n\n.fad.fa-candle-holder:after {\n  content: \"􏚼\";\n}\n\n.fad.fa-candy-cane:after {\n  content: \"􏞆\";\n}\n\n.fad.fa-candy-corn:after {\n  content: \"􏚽\";\n}\n\n.fad.fa-cannabis:after {\n  content: \"􏕟\";\n}\n\n.fad.fa-capsules:after {\n  content: \"􏑫\";\n}\n\n.fad.fa-car:after {\n  content: \"􏆹\";\n}\n\n.fad.fa-car-alt:after {\n  content: \"􏗞\";\n}\n\n.fad.fa-car-battery:after {\n  content: \"􏗟\";\n}\n\n.fad.fa-car-building:after {\n  content: \"􏡙\";\n}\n\n.fad.fa-car-bump:after {\n  content: \"􏗠\";\n}\n\n.fad.fa-car-bus:after {\n  content: \"􏡚\";\n}\n\n.fad.fa-car-crash:after {\n  content: \"􏗡\";\n}\n\n.fad.fa-car-garage:after {\n  content: \"􏗢\";\n}\n\n.fad.fa-car-mechanic:after {\n  content: \"􏗣\";\n}\n\n.fad.fa-car-side:after {\n  content: \"􏗤\";\n}\n\n.fad.fa-car-tilt:after {\n  content: \"􏗥\";\n}\n\n.fad.fa-car-wash:after {\n  content: \"􏗦\";\n}\n\n.fad.fa-caravan:after {\n  content: \"􏣿\";\n}\n\n.fad.fa-caravan-alt:after {\n  content: \"􏤀\";\n}\n\n.fad.fa-caret-circle-down:after {\n  content: \"􏌭\";\n}\n\n.fad.fa-caret-circle-left:after {\n  content: \"􏌮\";\n}\n\n.fad.fa-caret-circle-right:after {\n  content: \"􏌰\";\n}\n\n.fad.fa-caret-circle-up:after {\n  content: \"􏌱\";\n}\n\n.fad.fa-caret-down:after {\n  content: \"􏃗\";\n}\n\n.fad.fa-caret-left:after {\n  content: \"􏃙\";\n}\n\n.fad.fa-caret-right:after {\n  content: \"􏃚\";\n}\n\n.fad.fa-caret-square-down:after {\n  content: \"􏅐\";\n}\n\n.fad.fa-caret-square-left:after {\n  content: \"􏆑\";\n}\n\n.fad.fa-caret-square-right:after {\n  content: \"􏅒\";\n}\n\n.fad.fa-caret-square-up:after {\n  content: \"􏅑\";\n}\n\n.fad.fa-caret-up:after {\n  content: \"􏃘\";\n}\n\n.fad.fa-carrot:after {\n  content: \"􏞇\";\n}\n\n.fad.fa-cars:after {\n  content: \"􏡛\";\n}\n\n.fad.fa-cart-arrow-down:after {\n  content: \"􏈘\";\n}\n\n.fad.fa-cart-plus:after {\n  content: \"􏈗\";\n}\n\n.fad.fa-cash-register:after {\n  content: \"􏞈\";\n}\n\n.fad.fa-cassette-tape:after {\n  content: \"􏢫\";\n}\n\n.fad.fa-cat:after {\n  content: \"􏚾\";\n}\n\n.fad.fa-cat-space:after {\n  content: \"􏤁\";\n}\n\n.fad.fa-cauldron:after {\n  content: \"􏚿\";\n}\n\n.fad.fa-cctv:after {\n  content: \"􏢬\";\n}\n\n.fad.fa-certificate:after {\n  content: \"􏂣\";\n}\n\n.fad.fa-chair:after {\n  content: \"􏛀\";\n}\n\n.fad.fa-chair-office:after {\n  content: \"􏛁\";\n}\n\n.fad.fa-chalkboard:after {\n  content: \"􏔛\";\n}\n\n.fad.fa-chalkboard-teacher:after {\n  content: \"􏔜\";\n}\n\n.fad.fa-charging-station:after {\n  content: \"􏗧\";\n}\n\n.fad.fa-chart-area:after {\n  content: \"􏇾\";\n}\n\n.fad.fa-chart-bar:after {\n  content: \"􏂀\";\n}\n\n.fad.fa-chart-line:after {\n  content: \"􏈁\";\n}\n\n.fad.fa-chart-line-down:after {\n  content: \"􏙍\";\n}\n\n.fad.fa-chart-network:after {\n  content: \"􏞊\";\n}\n\n.fad.fa-chart-pie:after {\n  content: \"􏈀\";\n}\n\n.fad.fa-chart-pie-alt:after {\n  content: \"􏙎\";\n}\n\n.fad.fa-chart-scatter:after {\n  content: \"􏟮\";\n}\n\n.fad.fa-check:after {\n  content: \"􏀌\";\n}\n\n.fad.fa-check-circle:after {\n  content: \"􏁘\";\n}\n\n.fad.fa-check-double:after {\n  content: \"􏕠\";\n}\n\n.fad.fa-check-square:after {\n  content: \"􏅊\";\n}\n\n.fad.fa-cheese:after {\n  content: \"􏟯\";\n}\n\n.fad.fa-cheese-swiss:after {\n  content: \"􏟰\";\n}\n\n.fad.fa-cheeseburger:after {\n  content: \"􏟱\";\n}\n\n.fad.fa-chess:after {\n  content: \"􏐹\";\n}\n\n.fad.fa-chess-bishop:after {\n  content: \"􏐺\";\n}\n\n.fad.fa-chess-bishop-alt:after {\n  content: \"􏐻\";\n}\n\n.fad.fa-chess-board:after {\n  content: \"􏐼\";\n}\n\n.fad.fa-chess-clock:after {\n  content: \"􏐽\";\n}\n\n.fad.fa-chess-clock-alt:after {\n  content: \"􏐾\";\n}\n\n.fad.fa-chess-king:after {\n  content: \"􏐿\";\n}\n\n.fad.fa-chess-king-alt:after {\n  content: \"􏑀\";\n}\n\n.fad.fa-chess-knight:after {\n  content: \"􏑁\";\n}\n\n.fad.fa-chess-knight-alt:after {\n  content: \"􏑂\";\n}\n\n.fad.fa-chess-pawn:after {\n  content: \"􏑃\";\n}\n\n.fad.fa-chess-pawn-alt:after {\n  content: \"􏑄\";\n}\n\n.fad.fa-chess-queen:after {\n  content: \"􏑅\";\n}\n\n.fad.fa-chess-queen-alt:after {\n  content: \"􏑆\";\n}\n\n.fad.fa-chess-rook:after {\n  content: \"􏑇\";\n}\n\n.fad.fa-chess-rook-alt:after {\n  content: \"􏑈\";\n}\n\n.fad.fa-chevron-circle-down:after {\n  content: \"􏄺\";\n}\n\n.fad.fa-chevron-circle-left:after {\n  content: \"􏄷\";\n}\n\n.fad.fa-chevron-circle-right:after {\n  content: \"􏄸\";\n}\n\n.fad.fa-chevron-circle-up:after {\n  content: \"􏄹\";\n}\n\n.fad.fa-chevron-double-down:after {\n  content: \"􏌢\";\n}\n\n.fad.fa-chevron-double-left:after {\n  content: \"􏌣\";\n}\n\n.fad.fa-chevron-double-right:after {\n  content: \"􏌤\";\n}\n\n.fad.fa-chevron-double-up:after {\n  content: \"􏌥\";\n}\n\n.fad.fa-chevron-down:after {\n  content: \"􏁸\";\n}\n\n.fad.fa-chevron-left:after {\n  content: \"􏁓\";\n}\n\n.fad.fa-chevron-right:after {\n  content: \"􏁔\";\n}\n\n.fad.fa-chevron-square-down:after {\n  content: \"􏌩\";\n}\n\n.fad.fa-chevron-square-left:after {\n  content: \"􏌪\";\n}\n\n.fad.fa-chevron-square-right:after {\n  content: \"􏌫\";\n}\n\n.fad.fa-chevron-square-up:after {\n  content: \"􏌬\";\n}\n\n.fad.fa-chevron-up:after {\n  content: \"􏁷\";\n}\n\n.fad.fa-child:after {\n  content: \"􏆮\";\n}\n\n.fad.fa-chimney:after {\n  content: \"􏞋\";\n}\n\n.fad.fa-church:after {\n  content: \"􏔝\";\n}\n\n.fad.fa-circle:after {\n  content: \"􏄑\";\n}\n\n.fad.fa-circle-notch:after {\n  content: \"􏇎\";\n}\n\n.fad.fa-city:after {\n  content: \"􏙏\";\n}\n\n.fad.fa-clarinet:after {\n  content: \"􏢭\";\n}\n\n.fad.fa-claw-marks:after {\n  content: \"􏛂\";\n}\n\n.fad.fa-clinic-medical:after {\n  content: \"􏟲\";\n}\n\n.fad.fa-clipboard:after {\n  content: \"􏌨\";\n}\n\n.fad.fa-clipboard-check:after {\n  content: \"􏑬\";\n}\n\n.fad.fa-clipboard-list:after {\n  content: \"􏑭\";\n}\n\n.fad.fa-clipboard-list-check:after {\n  content: \"􏜷\";\n}\n\n.fad.fa-clipboard-prescription:after {\n  content: \"􏗨\";\n}\n\n.fad.fa-clipboard-user:after {\n  content: \"􏟳\";\n}\n\n.fad.fa-clock:after {\n  content: \"􏀗\";\n}\n\n.fad.fa-clone:after {\n  content: \"􏉍\";\n}\n\n.fad.fa-closed-captioning:after {\n  content: \"􏈊\";\n}\n\n.fad.fa-cloud:after {\n  content: \"􏃂\";\n}\n\n.fad.fa-cloud-download:after {\n  content: \"􏃭\";\n}\n\n.fad.fa-cloud-download-alt:after {\n  content: \"􏎁\";\n}\n\n.fad.fa-cloud-drizzle:after {\n  content: \"􏜸\";\n}\n\n.fad.fa-cloud-hail:after {\n  content: \"􏜹\";\n}\n\n.fad.fa-cloud-hail-mixed:after {\n  content: \"􏜺\";\n}\n\n.fad.fa-cloud-meatball:after {\n  content: \"􏜻\";\n}\n\n.fad.fa-cloud-moon:after {\n  content: \"􏛃\";\n}\n\n.fad.fa-cloud-moon-rain:after {\n  content: \"􏜼\";\n}\n\n.fad.fa-cloud-music:after {\n  content: \"􏢮\";\n}\n\n.fad.fa-cloud-rain:after {\n  content: \"􏜽\";\n}\n\n.fad.fa-cloud-rainbow:after {\n  content: \"􏜾\";\n}\n\n.fad.fa-cloud-showers:after {\n  content: \"􏜿\";\n}\n\n.fad.fa-cloud-showers-heavy:after {\n  content: \"􏝀\";\n}\n\n.fad.fa-cloud-sleet:after {\n  content: \"􏝁\";\n}\n\n.fad.fa-cloud-snow:after {\n  content: \"􏝂\";\n}\n\n.fad.fa-cloud-sun:after {\n  content: \"􏛄\";\n}\n\n.fad.fa-cloud-sun-rain:after {\n  content: \"􏝃\";\n}\n\n.fad.fa-cloud-upload:after {\n  content: \"􏃮\";\n}\n\n.fad.fa-cloud-upload-alt:after {\n  content: \"􏎂\";\n}\n\n.fad.fa-clouds:after {\n  content: \"􏝄\";\n}\n\n.fad.fa-clouds-moon:after {\n  content: \"􏝅\";\n}\n\n.fad.fa-clouds-sun:after {\n  content: \"􏝆\";\n}\n\n.fad.fa-club:after {\n  content: \"􏌧\";\n}\n\n.fad.fa-cocktail:after {\n  content: \"􏕡\";\n}\n\n.fad.fa-code:after {\n  content: \"􏄡\";\n}\n\n.fad.fa-code-branch:after {\n  content: \"􏄦\";\n}\n\n.fad.fa-code-commit:after {\n  content: \"􏎆\";\n}\n\n.fad.fa-code-merge:after {\n  content: \"􏎇\";\n}\n\n.fad.fa-coffee:after {\n  content: \"􏃴\";\n}\n\n.fad.fa-coffee-pot:after {\n  content: \"􏤂\";\n}\n\n.fad.fa-coffee-togo:after {\n  content: \"􏛅\";\n}\n\n.fad.fa-coffin:after {\n  content: \"􏛆\";\n}\n\n.fad.fa-coffin-cross:after {\n  content: \"􏥑\";\n}\n\n.fad.fa-cog:after {\n  content: \"􏀓\";\n}\n\n.fad.fa-cogs:after {\n  content: \"􏂅\";\n}\n\n.fad.fa-coin:after {\n  content: \"􏡜\";\n}\n\n.fad.fa-coins:after {\n  content: \"􏔞\";\n}\n\n.fad.fa-columns:after {\n  content: \"􏃛\";\n}\n\n.fad.fa-comet:after {\n  content: \"􏤃\";\n}\n\n.fad.fa-comment:after {\n  content: \"􏁵\";\n}\n\n.fad.fa-comment-alt:after {\n  content: \"􏉺\";\n}\n\n.fad.fa-comment-alt-check:after {\n  content: \"􏒢\";\n}\n\n.fad.fa-comment-alt-dollar:after {\n  content: \"􏙐\";\n}\n\n.fad.fa-comment-alt-dots:after {\n  content: \"􏒣\";\n}\n\n.fad.fa-comment-alt-edit:after {\n  content: \"􏒤\";\n}\n\n.fad.fa-comment-alt-exclamation:after {\n  content: \"􏒥\";\n}\n\n.fad.fa-comment-alt-lines:after {\n  content: \"􏒦\";\n}\n\n.fad.fa-comment-alt-medical:after {\n  content: \"􏟴\";\n}\n\n.fad.fa-comment-alt-minus:after {\n  content: \"􏒧\";\n}\n\n.fad.fa-comment-alt-music:after {\n  content: \"􏢯\";\n}\n\n.fad.fa-comment-alt-plus:after {\n  content: \"􏒨\";\n}\n\n.fad.fa-comment-alt-slash:after {\n  content: \"􏒩\";\n}\n\n.fad.fa-comment-alt-smile:after {\n  content: \"􏒪\";\n}\n\n.fad.fa-comment-alt-times:after {\n  content: \"􏒫\";\n}\n\n.fad.fa-comment-check:after {\n  content: \"􏒬\";\n}\n\n.fad.fa-comment-dollar:after {\n  content: \"􏙑\";\n}\n\n.fad.fa-comment-dots:after {\n  content: \"􏒭\";\n}\n\n.fad.fa-comment-edit:after {\n  content: \"􏒮\";\n}\n\n.fad.fa-comment-exclamation:after {\n  content: \"􏒯\";\n}\n\n.fad.fa-comment-lines:after {\n  content: \"􏒰\";\n}\n\n.fad.fa-comment-medical:after {\n  content: \"􏟵\";\n}\n\n.fad.fa-comment-minus:after {\n  content: \"􏒱\";\n}\n\n.fad.fa-comment-music:after {\n  content: \"􏢰\";\n}\n\n.fad.fa-comment-plus:after {\n  content: \"􏒲\";\n}\n\n.fad.fa-comment-slash:after {\n  content: \"􏒳\";\n}\n\n.fad.fa-comment-smile:after {\n  content: \"􏒴\";\n}\n\n.fad.fa-comment-times:after {\n  content: \"􏒵\";\n}\n\n.fad.fa-comments:after {\n  content: \"􏂆\";\n}\n\n.fad.fa-comments-alt:after {\n  content: \"􏒶\";\n}\n\n.fad.fa-comments-alt-dollar:after {\n  content: \"􏙒\";\n}\n\n.fad.fa-comments-dollar:after {\n  content: \"􏙓\";\n}\n\n.fad.fa-compact-disc:after {\n  content: \"􏔟\";\n}\n\n.fad.fa-compass:after {\n  content: \"􏅎\";\n}\n\n.fad.fa-compass-slash:after {\n  content: \"􏗩\";\n}\n\n.fad.fa-compress:after {\n  content: \"􏁦\";\n}\n\n.fad.fa-compress-alt:after {\n  content: \"􏐢\";\n}\n\n.fad.fa-compress-arrows-alt:after {\n  content: \"􏞌\";\n}\n\n.fad.fa-compress-wide:after {\n  content: \"􏌦\";\n}\n\n.fad.fa-computer-classic:after {\n  content: \"􏢱\";\n}\n\n.fad.fa-computer-speaker:after {\n  content: \"􏢲\";\n}\n\n.fad.fa-concierge-bell:after {\n  content: \"􏕢\";\n}\n\n.fad.fa-construction:after {\n  content: \"􏡝\";\n}\n\n.fad.fa-container-storage:after {\n  content: \"􏒷\";\n}\n\n.fad.fa-conveyor-belt:after {\n  content: \"􏑮\";\n}\n\n.fad.fa-conveyor-belt-alt:after {\n  content: \"􏑯\";\n}\n\n.fad.fa-cookie:after {\n  content: \"􏕣\";\n}\n\n.fad.fa-cookie-bite:after {\n  content: \"􏕤\";\n}\n\n.fad.fa-copy:after {\n  content: \"􏃅\";\n}\n\n.fad.fa-copyright:after {\n  content: \"􏇹\";\n}\n\n.fad.fa-corn:after {\n  content: \"􏛇\";\n}\n\n.fad.fa-couch:after {\n  content: \"􏒸\";\n}\n\n.fad.fa-cow:after {\n  content: \"􏛈\";\n}\n\n.fad.fa-cowbell:after {\n  content: \"􏢳\";\n}\n\n.fad.fa-cowbell-more:after {\n  content: \"􏢴\";\n}\n\n.fad.fa-credit-card:after {\n  content: \"􏂝\";\n}\n\n.fad.fa-credit-card-blank:after {\n  content: \"􏎉\";\n}\n\n.fad.fa-credit-card-front:after {\n  content: \"􏎊\";\n}\n\n.fad.fa-cricket:after {\n  content: \"􏑉\";\n}\n\n.fad.fa-croissant:after {\n  content: \"􏟶\";\n}\n\n.fad.fa-crop:after {\n  content: \"􏄥\";\n}\n\n.fad.fa-crop-alt:after {\n  content: \"􏕥\";\n}\n\n.fad.fa-cross:after {\n  content: \"􏙔\";\n}\n\n.fad.fa-crosshairs:after {\n  content: \"􏁛\";\n}\n\n.fad.fa-crow:after {\n  content: \"􏔠\";\n}\n\n.fad.fa-crown:after {\n  content: \"􏔡\";\n}\n\n.fad.fa-crutch:after {\n  content: \"􏟷\";\n}\n\n.fad.fa-crutches:after {\n  content: \"􏟸\";\n}\n\n.fad.fa-cube:after {\n  content: \"􏆲\";\n}\n\n.fad.fa-cubes:after {\n  content: \"􏆳\";\n}\n\n.fad.fa-curling:after {\n  content: \"􏑊\";\n}\n\n.fad.fa-cut:after {\n  content: \"􏃄\";\n}\n\n.fad.fa-dagger:after {\n  content: \"􏛋\";\n}\n\n.fad.fa-database:after {\n  content: \"􏇀\";\n}\n\n.fad.fa-deaf:after {\n  content: \"􏊤\";\n}\n\n.fad.fa-debug:after {\n  content: \"􏟹\";\n}\n\n.fad.fa-deer:after {\n  content: \"􏞎\";\n}\n\n.fad.fa-deer-rudolph:after {\n  content: \"􏞏\";\n}\n\n.fad.fa-democrat:after {\n  content: \"􏝇\";\n}\n\n.fad.fa-desktop:after {\n  content: \"􏄈\";\n}\n\n.fad.fa-desktop-alt:after {\n  content: \"􏎐\";\n}\n\n.fad.fa-dewpoint:after {\n  content: \"􏝈\";\n}\n\n.fad.fa-dharmachakra:after {\n  content: \"􏙕\";\n}\n\n.fad.fa-diagnoses:after {\n  content: \"􏑰\";\n}\n\n.fad.fa-diamond:after {\n  content: \"􏈙\";\n}\n\n.fad.fa-dice:after {\n  content: \"􏔢\";\n}\n\n.fad.fa-dice-d10:after {\n  content: \"􏛍\";\n}\n\n.fad.fa-dice-d12:after {\n  content: \"􏛎\";\n}\n\n.fad.fa-dice-d20:after {\n  content: \"􏛏\";\n}\n\n.fad.fa-dice-d4:after {\n  content: \"􏛐\";\n}\n\n.fad.fa-dice-d6:after {\n  content: \"􏛑\";\n}\n\n.fad.fa-dice-d8:after {\n  content: \"􏛒\";\n}\n\n.fad.fa-dice-five:after {\n  content: \"􏔣\";\n}\n\n.fad.fa-dice-four:after {\n  content: \"􏔤\";\n}\n\n.fad.fa-dice-one:after {\n  content: \"􏔥\";\n}\n\n.fad.fa-dice-six:after {\n  content: \"􏔦\";\n}\n\n.fad.fa-dice-three:after {\n  content: \"􏔧\";\n}\n\n.fad.fa-dice-two:after {\n  content: \"􏔨\";\n}\n\n.fad.fa-digging:after {\n  content: \"􏡞\";\n}\n\n.fad.fa-digital-tachograph:after {\n  content: \"􏕦\";\n}\n\n.fad.fa-diploma:after {\n  content: \"􏗪\";\n}\n\n.fad.fa-directions:after {\n  content: \"􏗫\";\n}\n\n.fad.fa-disc-drive:after {\n  content: \"􏢵\";\n}\n\n.fad.fa-disease:after {\n  content: \"􏟺\";\n}\n\n.fad.fa-divide:after {\n  content: \"􏔩\";\n}\n\n.fad.fa-dizzy:after {\n  content: \"􏕧\";\n}\n\n.fad.fa-dna:after {\n  content: \"􏑱\";\n}\n\n.fad.fa-do-not-enter:after {\n  content: \"􏗬\";\n}\n\n.fad.fa-dog:after {\n  content: \"􏛓\";\n}\n\n.fad.fa-dog-leashed:after {\n  content: \"􏛔\";\n}\n\n.fad.fa-dollar-sign:after {\n  content: \"􏅕\";\n}\n\n.fad.fa-dolly:after {\n  content: \"􏑲\";\n}\n\n.fad.fa-dolly-empty:after {\n  content: \"􏑳\";\n}\n\n.fad.fa-dolly-flatbed:after {\n  content: \"􏑴\";\n}\n\n.fad.fa-dolly-flatbed-alt:after {\n  content: \"􏑵\";\n}\n\n.fad.fa-dolly-flatbed-empty:after {\n  content: \"􏑶\";\n}\n\n.fad.fa-donate:after {\n  content: \"􏒹\";\n}\n\n.fad.fa-door-closed:after {\n  content: \"􏔪\";\n}\n\n.fad.fa-door-open:after {\n  content: \"􏔫\";\n}\n\n.fad.fa-dot-circle:after {\n  content: \"􏆒\";\n}\n\n.fad.fa-dove:after {\n  content: \"􏒺\";\n}\n\n.fad.fa-download:after {\n  content: \"􏀙\";\n}\n\n.fad.fa-drafting-compass:after {\n  content: \"􏕨\";\n}\n\n.fad.fa-dragon:after {\n  content: \"􏛕\";\n}\n\n.fad.fa-draw-circle:after {\n  content: \"􏗭\";\n}\n\n.fad.fa-draw-polygon:after {\n  content: \"􏗮\";\n}\n\n.fad.fa-draw-square:after {\n  content: \"􏗯\";\n}\n\n.fad.fa-dreidel:after {\n  content: \"􏞒\";\n}\n\n.fad.fa-drone:after {\n  content: \"􏡟\";\n}\n\n.fad.fa-drone-alt:after {\n  content: \"􏡠\";\n}\n\n.fad.fa-drum:after {\n  content: \"􏕩\";\n}\n\n.fad.fa-drum-steelpan:after {\n  content: \"􏕪\";\n}\n\n.fad.fa-drumstick:after {\n  content: \"􏛖\";\n}\n\n.fad.fa-drumstick-bite:after {\n  content: \"􏛗\";\n}\n\n.fad.fa-dryer:after {\n  content: \"􏡡\";\n}\n\n.fad.fa-dryer-alt:after {\n  content: \"􏡢\";\n}\n\n.fad.fa-duck:after {\n  content: \"􏛘\";\n}\n\n.fad.fa-dumbbell:after {\n  content: \"􏑋\";\n}\n\n.fad.fa-dumpster:after {\n  content: \"􏞓\";\n}\n\n.fad.fa-dumpster-fire:after {\n  content: \"􏞔\";\n}\n\n.fad.fa-dungeon:after {\n  content: \"􏛙\";\n}\n\n.fad.fa-ear:after {\n  content: \"􏗰\";\n}\n\n.fad.fa-ear-muffs:after {\n  content: \"􏞕\";\n}\n\n.fad.fa-eclipse:after {\n  content: \"􏝉\";\n}\n\n.fad.fa-eclipse-alt:after {\n  content: \"􏝊\";\n}\n\n.fad.fa-edit:after {\n  content: \"􏁄\";\n}\n\n.fad.fa-egg:after {\n  content: \"􏟻\";\n}\n\n.fad.fa-egg-fried:after {\n  content: \"􏟼\";\n}\n\n.fad.fa-eject:after {\n  content: \"􏁒\";\n}\n\n.fad.fa-elephant:after {\n  content: \"􏛚\";\n}\n\n.fad.fa-ellipsis-h:after {\n  content: \"􏅁\";\n}\n\n.fad.fa-ellipsis-h-alt:after {\n  content: \"􏎛\";\n}\n\n.fad.fa-ellipsis-v:after {\n  content: \"􏅂\";\n}\n\n.fad.fa-ellipsis-v-alt:after {\n  content: \"􏎜\";\n}\n\n.fad.fa-empty-set:after {\n  content: \"􏙖\";\n}\n\n.fad.fa-engine-warning:after {\n  content: \"􏗲\";\n}\n\n.fad.fa-envelope:after {\n  content: \"􏃠\";\n}\n\n.fad.fa-envelope-open:after {\n  content: \"􏊶\";\n}\n\n.fad.fa-envelope-open-dollar:after {\n  content: \"􏙗\";\n}\n\n.fad.fa-envelope-open-text:after {\n  content: \"􏙘\";\n}\n\n.fad.fa-envelope-square:after {\n  content: \"􏆙\";\n}\n\n.fad.fa-equals:after {\n  content: \"􏔬\";\n}\n\n.fad.fa-eraser:after {\n  content: \"􏄭\";\n}\n\n.fad.fa-ethernet:after {\n  content: \"􏞖\";\n}\n\n.fad.fa-euro-sign:after {\n  content: \"􏅓\";\n}\n\n.fad.fa-exchange:after {\n  content: \"􏃬\";\n}\n\n.fad.fa-exchange-alt:after {\n  content: \"􏍢\";\n}\n\n.fad.fa-exclamation:after {\n  content: \"􏄪\";\n}\n\n.fad.fa-exclamation-circle:after {\n  content: \"􏁪\";\n}\n\n.fad.fa-exclamation-square:after {\n  content: \"􏌡\";\n}\n\n.fad.fa-exclamation-triangle:after {\n  content: \"􏁱\";\n}\n\n.fad.fa-expand:after {\n  content: \"􏁥\";\n}\n\n.fad.fa-expand-alt:after {\n  content: \"􏐤\";\n}\n\n.fad.fa-expand-arrows:after {\n  content: \"􏌝\";\n}\n\n.fad.fa-expand-arrows-alt:after {\n  content: \"􏌞\";\n}\n\n.fad.fa-expand-wide:after {\n  content: \"􏌠\";\n}\n\n.fad.fa-external-link:after {\n  content: \"􏂎\";\n}\n\n.fad.fa-external-link-alt:after {\n  content: \"􏍝\";\n}\n\n.fad.fa-external-link-square:after {\n  content: \"􏅌\";\n}\n\n.fad.fa-external-link-square-alt:after {\n  content: \"􏍠\";\n}\n\n.fad.fa-eye:after {\n  content: \"􏁮\";\n}\n\n.fad.fa-eye-dropper:after {\n  content: \"􏇻\";\n}\n\n.fad.fa-eye-evil:after {\n  content: \"􏛛\";\n}\n\n.fad.fa-eye-slash:after {\n  content: \"􏁰\";\n}\n\n.fad.fa-fan:after {\n  content: \"􏡣\";\n}\n\n.fad.fa-fan-table:after {\n  content: \"􏤄\";\n}\n\n.fad.fa-farm:after {\n  content: \"􏡤\";\n}\n\n.fad.fa-fast-backward:after {\n  content: \"􏁉\";\n}\n\n.fad.fa-fast-forward:after {\n  content: \"􏁐\";\n}\n\n.fad.fa-faucet:after {\n  content: \"􏤅\";\n}\n\n.fad.fa-faucet-drip:after {\n  content: \"􏤆\";\n}\n\n.fad.fa-fax:after {\n  content: \"􏆬\";\n}\n\n.fad.fa-feather:after {\n  content: \"􏔭\";\n}\n\n.fad.fa-feather-alt:after {\n  content: \"􏕫\";\n}\n\n.fad.fa-female:after {\n  content: \"􏆂\";\n}\n\n.fad.fa-field-hockey:after {\n  content: \"􏑌\";\n}\n\n.fad.fa-fighter-jet:after {\n  content: \"􏃻\";\n}\n\n.fad.fa-file:after {\n  content: \"􏅛\";\n}\n\n.fad.fa-file-alt:after {\n  content: \"􏅜\";\n}\n\n.fad.fa-file-archive:after {\n  content: \"􏇆\";\n}\n\n.fad.fa-file-audio:after {\n  content: \"􏇇\";\n}\n\n.fad.fa-file-certificate:after {\n  content: \"􏗳\";\n}\n\n.fad.fa-file-chart-line:after {\n  content: \"􏙙\";\n}\n\n.fad.fa-file-chart-pie:after {\n  content: \"􏙚\";\n}\n\n.fad.fa-file-check:after {\n  content: \"􏌖\";\n}\n\n.fad.fa-file-code:after {\n  content: \"􏇉\";\n}\n\n.fad.fa-file-contract:after {\n  content: \"􏕬\";\n}\n\n.fad.fa-file-csv:after {\n  content: \"􏛝\";\n}\n\n.fad.fa-file-download:after {\n  content: \"􏕭\";\n}\n\n.fad.fa-file-edit:after {\n  content: \"􏌜\";\n}\n\n.fad.fa-file-excel:after {\n  content: \"􏇃\";\n}\n\n.fad.fa-file-exclamation:after {\n  content: \"􏌚\";\n}\n\n.fad.fa-file-export:after {\n  content: \"􏕮\";\n}\n\n.fad.fa-file-image:after {\n  content: \"􏇅\";\n}\n\n.fad.fa-file-import:after {\n  content: \"􏕯\";\n}\n\n.fad.fa-file-invoice:after {\n  content: \"􏕰\";\n}\n\n.fad.fa-file-invoice-dollar:after {\n  content: \"􏕱\";\n}\n\n.fad.fa-file-medical:after {\n  content: \"􏑷\";\n}\n\n.fad.fa-file-medical-alt:after {\n  content: \"􏑸\";\n}\n\n.fad.fa-file-minus:after {\n  content: \"􏌘\";\n}\n\n.fad.fa-file-music:after {\n  content: \"􏢶\";\n}\n\n.fad.fa-file-pdf:after {\n  content: \"􏇁\";\n}\n\n.fad.fa-file-plus:after {\n  content: \"􏌙\";\n}\n\n.fad.fa-file-powerpoint:after {\n  content: \"􏇄\";\n}\n\n.fad.fa-file-prescription:after {\n  content: \"􏕲\";\n}\n\n.fad.fa-file-search:after {\n  content: \"􏡥\";\n}\n\n.fad.fa-file-signature:after {\n  content: \"􏕳\";\n}\n\n.fad.fa-file-spreadsheet:after {\n  content: \"􏙛\";\n}\n\n.fad.fa-file-times:after {\n  content: \"􏌗\";\n}\n\n.fad.fa-file-upload:after {\n  content: \"􏕴\";\n}\n\n.fad.fa-file-user:after {\n  content: \"􏙜\";\n}\n\n.fad.fa-file-video:after {\n  content: \"􏇈\";\n}\n\n.fad.fa-file-word:after {\n  content: \"􏇂\";\n}\n\n.fad.fa-files-medical:after {\n  content: \"􏟽\";\n}\n\n.fad.fa-fill:after {\n  content: \"􏕵\";\n}\n\n.fad.fa-fill-drip:after {\n  content: \"􏕶\";\n}\n\n.fad.fa-film:after {\n  content: \"􏀈\";\n}\n\n.fad.fa-film-alt:after {\n  content: \"􏎠\";\n}\n\n.fad.fa-film-canister:after {\n  content: \"􏢷\";\n}\n\n.fad.fa-filter:after {\n  content: \"􏂰\";\n}\n\n.fad.fa-fingerprint:after {\n  content: \"􏕷\";\n}\n\n.fad.fa-fire:after {\n  content: \"􏁭\";\n}\n\n.fad.fa-fire-alt:after {\n  content: \"􏟤\";\n}\n\n.fad.fa-fire-extinguisher:after {\n  content: \"􏄴\";\n}\n\n.fad.fa-fire-smoke:after {\n  content: \"􏝋\";\n}\n\n.fad.fa-fireplace:after {\n  content: \"􏞚\";\n}\n\n.fad.fa-first-aid:after {\n  content: \"􏑹\";\n}\n\n.fad.fa-fish:after {\n  content: \"􏕸\";\n}\n\n.fad.fa-fish-cooked:after {\n  content: \"􏟾\";\n}\n\n.fad.fa-fist-raised:after {\n  content: \"􏛞\";\n}\n\n.fad.fa-flag:after {\n  content: \"􏀤\";\n}\n\n.fad.fa-flag-alt:after {\n  content: \"􏝌\";\n}\n\n.fad.fa-flag-checkered:after {\n  content: \"􏄞\";\n}\n\n.fad.fa-flag-usa:after {\n  content: \"􏝍\";\n}\n\n.fad.fa-flame:after {\n  content: \"􏛟\";\n}\n\n.fad.fa-flashlight:after {\n  content: \"􏢸\";\n}\n\n.fad.fa-flask:after {\n  content: \"􏃃\";\n}\n\n.fad.fa-flask-poison:after {\n  content: \"􏛠\";\n}\n\n.fad.fa-flask-potion:after {\n  content: \"􏛡\";\n}\n\n.fad.fa-flower:after {\n  content: \"􏟿\";\n}\n\n.fad.fa-flower-daffodil:after {\n  content: \"􏠀\";\n}\n\n.fad.fa-flower-tulip:after {\n  content: \"􏠁\";\n}\n\n.fad.fa-flushed:after {\n  content: \"􏕹\";\n}\n\n.fad.fa-flute:after {\n  content: \"􏢹\";\n}\n\n.fad.fa-flux-capacitor:after {\n  content: \"􏢺\";\n}\n\n.fad.fa-fog:after {\n  content: \"􏝎\";\n}\n\n.fad.fa-folder:after {\n  content: \"􏁻\";\n}\n\n.fad.fa-folder-download:after {\n  content: \"􏥓\";\n}\n\n.fad.fa-folder-minus:after {\n  content: \"􏙝\";\n}\n\n.fad.fa-folder-open:after {\n  content: \"􏁼\";\n}\n\n.fad.fa-folder-plus:after {\n  content: \"􏙞\";\n}\n\n.fad.fa-folder-times:after {\n  content: \"􏙟\";\n}\n\n.fad.fa-folder-tree:after {\n  content: \"􏠂\";\n}\n\n.fad.fa-folder-upload:after {\n  content: \"􏥔\";\n}\n\n.fad.fa-folders:after {\n  content: \"􏙠\";\n}\n\n.fad.fa-font:after {\n  content: \"􏀱\";\n}\n\n.fad.fa-font-awesome-logo-full:after {\n  content: \"􏓦\";\n}\n\n.fad.fa-font-case:after {\n  content: \"􏡦\";\n}\n\n.fad.fa-football-ball:after {\n  content: \"􏑎\";\n}\n\n.fad.fa-football-helmet:after {\n  content: \"􏑏\";\n}\n\n.fad.fa-forklift:after {\n  content: \"􏑺\";\n}\n\n.fad.fa-forward:after {\n  content: \"􏁎\";\n}\n\n.fad.fa-fragile:after {\n  content: \"􏒻\";\n}\n\n.fad.fa-french-fries:after {\n  content: \"􏠃\";\n}\n\n.fad.fa-frog:after {\n  content: \"􏔮\";\n}\n\n.fad.fa-frosty-head:after {\n  content: \"􏞛\";\n}\n\n.fad.fa-frown:after {\n  content: \"􏄙\";\n}\n\n.fad.fa-frown-open:after {\n  content: \"􏕺\";\n}\n\n.fad.fa-function:after {\n  content: \"􏙡\";\n}\n\n.fad.fa-funnel-dollar:after {\n  content: \"􏙢\";\n}\n\n.fad.fa-futbol:after {\n  content: \"􏇣\";\n}\n\n.fad.fa-galaxy:after {\n  content: \"􏤈\";\n}\n\n.fad.fa-game-board:after {\n  content: \"􏡧\";\n}\n\n.fad.fa-game-board-alt:after {\n  content: \"􏡨\";\n}\n\n.fad.fa-game-console-handheld:after {\n  content: \"􏢻\";\n}\n\n.fad.fa-gamepad:after {\n  content: \"􏄛\";\n}\n\n.fad.fa-gamepad-alt:after {\n  content: \"􏢼\";\n}\n\n.fad.fa-garage:after {\n  content: \"􏤉\";\n}\n\n.fad.fa-garage-car:after {\n  content: \"􏤊\";\n}\n\n.fad.fa-garage-open:after {\n  content: \"􏤋\";\n}\n\n.fad.fa-gas-pump:after {\n  content: \"􏔯\";\n}\n\n.fad.fa-gas-pump-slash:after {\n  content: \"􏗴\";\n}\n\n.fad.fa-gavel:after {\n  content: \"􏃣\";\n}\n\n.fad.fa-gem:after {\n  content: \"􏎥\";\n}\n\n.fad.fa-genderless:after {\n  content: \"􏈭\";\n}\n\n.fad.fa-ghost:after {\n  content: \"􏛢\";\n}\n\n.fad.fa-gift:after {\n  content: \"􏁫\";\n}\n\n.fad.fa-gift-card:after {\n  content: \"􏙣\";\n}\n\n.fad.fa-gifts:after {\n  content: \"􏞜\";\n}\n\n.fad.fa-gingerbread-man:after {\n  content: \"􏞝\";\n}\n\n.fad.fa-glass:after {\n  content: \"􏠄\";\n}\n\n.fad.fa-glass-champagne:after {\n  content: \"􏞞\";\n}\n\n.fad.fa-glass-cheers:after {\n  content: \"􏞟\";\n}\n\n.fad.fa-glass-citrus:after {\n  content: \"􏡩\";\n}\n\n.fad.fa-glass-martini:after {\n  content: \"􏀀\";\n}\n\n.fad.fa-glass-martini-alt:after {\n  content: \"􏕻\";\n}\n\n.fad.fa-glass-whiskey:after {\n  content: \"􏞠\";\n}\n\n.fad.fa-glass-whiskey-rocks:after {\n  content: \"􏞡\";\n}\n\n.fad.fa-glasses:after {\n  content: \"􏔰\";\n}\n\n.fad.fa-glasses-alt:after {\n  content: \"􏗵\";\n}\n\n.fad.fa-globe:after {\n  content: \"􏂬\";\n}\n\n.fad.fa-globe-africa:after {\n  content: \"􏕼\";\n}\n\n.fad.fa-globe-americas:after {\n  content: \"􏕽\";\n}\n\n.fad.fa-globe-asia:after {\n  content: \"􏕾\";\n}\n\n.fad.fa-globe-europe:after {\n  content: \"􏞢\";\n}\n\n.fad.fa-globe-snow:after {\n  content: \"􏞣\";\n}\n\n.fad.fa-globe-stand:after {\n  content: \"􏗶\";\n}\n\n.fad.fa-golf-ball:after {\n  content: \"􏑐\";\n}\n\n.fad.fa-golf-club:after {\n  content: \"􏑑\";\n}\n\n.fad.fa-gopuram:after {\n  content: \"􏙤\";\n}\n\n.fad.fa-graduation-cap:after {\n  content: \"􏆝\";\n}\n\n.fad.fa-gramophone:after {\n  content: \"􏢽\";\n}\n\n.fad.fa-greater-than:after {\n  content: \"􏔱\";\n}\n\n.fad.fa-greater-than-equal:after {\n  content: \"􏔲\";\n}\n\n.fad.fa-grimace:after {\n  content: \"􏕿\";\n}\n\n.fad.fa-grin:after {\n  content: \"􏖀\";\n}\n\n.fad.fa-grin-alt:after {\n  content: \"􏖁\";\n}\n\n.fad.fa-grin-beam:after {\n  content: \"􏖂\";\n}\n\n.fad.fa-grin-beam-sweat:after {\n  content: \"􏖃\";\n}\n\n.fad.fa-grin-hearts:after {\n  content: \"􏖄\";\n}\n\n.fad.fa-grin-squint:after {\n  content: \"􏖅\";\n}\n\n.fad.fa-grin-squint-tears:after {\n  content: \"􏖆\";\n}\n\n.fad.fa-grin-stars:after {\n  content: \"􏖇\";\n}\n\n.fad.fa-grin-tears:after {\n  content: \"􏖈\";\n}\n\n.fad.fa-grin-tongue:after {\n  content: \"􏖉\";\n}\n\n.fad.fa-grin-tongue-squint:after {\n  content: \"􏖊\";\n}\n\n.fad.fa-grin-tongue-wink:after {\n  content: \"􏖋\";\n}\n\n.fad.fa-grin-wink:after {\n  content: \"􏖌\";\n}\n\n.fad.fa-grip-horizontal:after {\n  content: \"􏖍\";\n}\n\n.fad.fa-grip-lines:after {\n  content: \"􏞤\";\n}\n\n.fad.fa-grip-lines-vertical:after {\n  content: \"􏞥\";\n}\n\n.fad.fa-grip-vertical:after {\n  content: \"􏖎\";\n}\n\n.fad.fa-guitar:after {\n  content: \"􏞦\";\n}\n\n.fad.fa-guitar-electric:after {\n  content: \"􏢾\";\n}\n\n.fad.fa-guitars:after {\n  content: \"􏢿\";\n}\n\n.fad.fa-h-square:after {\n  content: \"􏃽\";\n}\n\n.fad.fa-h1:after {\n  content: \"􏌓\";\n}\n\n.fad.fa-h2:after {\n  content: \"􏌔\";\n}\n\n.fad.fa-h3:after {\n  content: \"􏌕\";\n}\n\n.fad.fa-h4:after {\n  content: \"􏡪\";\n}\n\n.fad.fa-hamburger:after {\n  content: \"􏠅\";\n}\n\n.fad.fa-hammer:after {\n  content: \"􏛣\";\n}\n\n.fad.fa-hammer-war:after {\n  content: \"􏛤\";\n}\n\n.fad.fa-hamsa:after {\n  content: \"􏙥\";\n}\n\n.fad.fa-hand-heart:after {\n  content: \"􏒼\";\n}\n\n.fad.fa-hand-holding:after {\n  content: \"􏒽\";\n}\n\n.fad.fa-hand-holding-box:after {\n  content: \"􏑻\";\n}\n\n.fad.fa-hand-holding-heart:after {\n  content: \"􏒾\";\n}\n\n.fad.fa-hand-holding-magic:after {\n  content: \"􏛥\";\n}\n\n.fad.fa-hand-holding-medical:after {\n  content: \"􏥜\";\n}\n\n.fad.fa-hand-holding-seedling:after {\n  content: \"􏒿\";\n}\n\n.fad.fa-hand-holding-usd:after {\n  content: \"􏓀\";\n}\n\n.fad.fa-hand-holding-water:after {\n  content: \"􏓁\";\n}\n\n.fad.fa-hand-lizard:after {\n  content: \"􏉘\";\n}\n\n.fad.fa-hand-middle-finger:after {\n  content: \"􏠆\";\n}\n\n.fad.fa-hand-paper:after {\n  content: \"􏉖\";\n}\n\n.fad.fa-hand-peace:after {\n  content: \"􏉛\";\n}\n\n.fad.fa-hand-point-down:after {\n  content: \"􏂧\";\n}\n\n.fad.fa-hand-point-left:after {\n  content: \"􏂥\";\n}\n\n.fad.fa-hand-point-right:after {\n  content: \"􏂤\";\n}\n\n.fad.fa-hand-point-up:after {\n  content: \"􏂦\";\n}\n\n.fad.fa-hand-pointer:after {\n  content: \"􏉚\";\n}\n\n.fad.fa-hand-receiving:after {\n  content: \"􏑼\";\n}\n\n.fad.fa-hand-rock:after {\n  content: \"􏉕\";\n}\n\n.fad.fa-hand-scissors:after {\n  content: \"􏉗\";\n}\n\n.fad.fa-hand-sparkles:after {\n  content: \"􏥝\";\n}\n\n.fad.fa-hand-spock:after {\n  content: \"􏉙\";\n}\n\n.fad.fa-hands:after {\n  content: \"􏓂\";\n}\n\n.fad.fa-hands-heart:after {\n  content: \"􏓃\";\n}\n\n.fad.fa-hands-helping:after {\n  content: \"􏓄\";\n}\n\n.fad.fa-hands-usd:after {\n  content: \"􏓅\";\n}\n\n.fad.fa-hands-wash:after {\n  content: \"􏥞\";\n}\n\n.fad.fa-handshake:after {\n  content: \"􏊵\";\n}\n\n.fad.fa-handshake-alt:after {\n  content: \"􏓆\";\n}\n\n.fad.fa-handshake-alt-slash:after {\n  content: \"􏥟\";\n}\n\n.fad.fa-handshake-slash:after {\n  content: \"􏥠\";\n}\n\n.fad.fa-hanukiah:after {\n  content: \"􏛦\";\n}\n\n.fad.fa-hard-hat:after {\n  content: \"􏠇\";\n}\n\n.fad.fa-hashtag:after {\n  content: \"􏊒\";\n}\n\n.fad.fa-hat-chef:after {\n  content: \"􏡫\";\n}\n\n.fad.fa-hat-cowboy:after {\n  content: \"􏣀\";\n}\n\n.fad.fa-hat-cowboy-side:after {\n  content: \"􏣁\";\n}\n\n.fad.fa-hat-santa:after {\n  content: \"􏞧\";\n}\n\n.fad.fa-hat-winter:after {\n  content: \"􏞨\";\n}\n\n.fad.fa-hat-witch:after {\n  content: \"􏛧\";\n}\n\n.fad.fa-hat-wizard:after {\n  content: \"􏛨\";\n}\n\n.fad.fa-hdd:after {\n  content: \"􏂠\";\n}\n\n.fad.fa-head-side:after {\n  content: \"􏛩\";\n}\n\n.fad.fa-head-side-brain:after {\n  content: \"􏠈\";\n}\n\n.fad.fa-head-side-cough:after {\n  content: \"􏥡\";\n}\n\n.fad.fa-head-side-cough-slash:after {\n  content: \"􏥢\";\n}\n\n.fad.fa-head-side-headphones:after {\n  content: \"􏣂\";\n}\n\n.fad.fa-head-side-mask:after {\n  content: \"􏥣\";\n}\n\n.fad.fa-head-side-medical:after {\n  content: \"􏠉\";\n}\n\n.fad.fa-head-side-virus:after {\n  content: \"􏥤\";\n}\n\n.fad.fa-head-vr:after {\n  content: \"􏛪\";\n}\n\n.fad.fa-heading:after {\n  content: \"􏇜\";\n}\n\n.fad.fa-headphones:after {\n  content: \"􏀥\";\n}\n\n.fad.fa-headphones-alt:after {\n  content: \"􏖏\";\n}\n\n.fad.fa-headset:after {\n  content: \"􏖐\";\n}\n\n.fad.fa-heart:after {\n  content: \"􏀄\";\n}\n\n.fad.fa-heart-broken:after {\n  content: \"􏞩\";\n}\n\n.fad.fa-heart-circle:after {\n  content: \"􏓇\";\n}\n\n.fad.fa-heart-rate:after {\n  content: \"􏗸\";\n}\n\n.fad.fa-heart-square:after {\n  content: \"􏓈\";\n}\n\n.fad.fa-heartbeat:after {\n  content: \"􏈞\";\n}\n\n.fad.fa-heat:after {\n  content: \"􏤌\";\n}\n\n.fad.fa-helicopter:after {\n  content: \"􏔳\";\n}\n\n.fad.fa-helmet-battle:after {\n  content: \"􏛫\";\n}\n\n.fad.fa-hexagon:after {\n  content: \"􏌒\";\n}\n\n.fad.fa-highlighter:after {\n  content: \"􏖑\";\n}\n\n.fad.fa-hiking:after {\n  content: \"􏛬\";\n}\n\n.fad.fa-hippo:after {\n  content: \"􏛭\";\n}\n\n.fad.fa-history:after {\n  content: \"􏇚\";\n}\n\n.fad.fa-hockey-mask:after {\n  content: \"􏛮\";\n}\n\n.fad.fa-hockey-puck:after {\n  content: \"􏑓\";\n}\n\n.fad.fa-hockey-sticks:after {\n  content: \"􏑔\";\n}\n\n.fad.fa-holly-berry:after {\n  content: \"􏞪\";\n}\n\n.fad.fa-home:after {\n  content: \"􏀕\";\n}\n\n.fad.fa-home-alt:after {\n  content: \"􏠊\";\n}\n\n.fad.fa-home-heart:after {\n  content: \"􏓉\";\n}\n\n.fad.fa-home-lg:after {\n  content: \"􏠋\";\n}\n\n.fad.fa-home-lg-alt:after {\n  content: \"􏠌\";\n}\n\n.fad.fa-hood-cloak:after {\n  content: \"􏛯\";\n}\n\n.fad.fa-horizontal-rule:after {\n  content: \"􏡬\";\n}\n\n.fad.fa-horse:after {\n  content: \"􏛰\";\n}\n\n.fad.fa-horse-head:after {\n  content: \"􏞫\";\n}\n\n.fad.fa-horse-saddle:after {\n  content: \"􏣃\";\n}\n\n.fad.fa-hospital:after {\n  content: \"􏃸\";\n}\n\n.fad.fa-hospital-alt:after {\n  content: \"􏑽\";\n}\n\n.fad.fa-hospital-symbol:after {\n  content: \"􏑾\";\n}\n\n.fad.fa-hospital-user:after {\n  content: \"􏠍\";\n}\n\n.fad.fa-hospitals:after {\n  content: \"􏠎\";\n}\n\n.fad.fa-hot-tub:after {\n  content: \"􏖓\";\n}\n\n.fad.fa-hotdog:after {\n  content: \"􏠏\";\n}\n\n.fad.fa-hotel:after {\n  content: \"􏖔\";\n}\n\n.fad.fa-hourglass:after {\n  content: \"􏉔\";\n}\n\n.fad.fa-hourglass-end:after {\n  content: \"􏉓\";\n}\n\n.fad.fa-hourglass-half:after {\n  content: \"􏉒\";\n}\n\n.fad.fa-hourglass-start:after {\n  content: \"􏉑\";\n}\n\n.fad.fa-house:after {\n  content: \"􏤍\";\n}\n\n.fad.fa-house-damage:after {\n  content: \"􏛱\";\n}\n\n.fad.fa-house-day:after {\n  content: \"􏤎\";\n}\n\n.fad.fa-house-flood:after {\n  content: \"􏝏\";\n}\n\n.fad.fa-house-leave:after {\n  content: \"􏤏\";\n}\n\n.fad.fa-house-night:after {\n  content: \"􏤐\";\n}\n\n.fad.fa-house-return:after {\n  content: \"􏤑\";\n}\n\n.fad.fa-house-signal:after {\n  content: \"􏤒\";\n}\n\n.fad.fa-house-user:after {\n  content: \"􏥥\";\n}\n\n.fad.fa-hryvnia:after {\n  content: \"􏛲\";\n}\n\n.fad.fa-humidity:after {\n  content: \"􏝐\";\n}\n\n.fad.fa-hurricane:after {\n  content: \"􏝑\";\n}\n\n.fad.fa-i-cursor:after {\n  content: \"􏉆\";\n}\n\n.fad.fa-ice-cream:after {\n  content: \"􏠐\";\n}\n\n.fad.fa-ice-skate:after {\n  content: \"􏞬\";\n}\n\n.fad.fa-icicles:after {\n  content: \"􏞭\";\n}\n\n.fad.fa-icons:after {\n  content: \"􏡭\";\n}\n\n.fad.fa-icons-alt:after {\n  content: \"􏡮\";\n}\n\n.fad.fa-id-badge:after {\n  content: \"􏋁\";\n}\n\n.fad.fa-id-card:after {\n  content: \"􏋂\";\n}\n\n.fad.fa-id-card-alt:after {\n  content: \"􏑿\";\n}\n\n.fad.fa-igloo:after {\n  content: \"􏞮\";\n}\n\n.fad.fa-image:after {\n  content: \"􏀾\";\n}\n\n.fad.fa-image-polaroid:after {\n  content: \"􏣄\";\n}\n\n.fad.fa-images:after {\n  content: \"􏌂\";\n}\n\n.fad.fa-inbox:after {\n  content: \"􏀜\";\n}\n\n.fad.fa-inbox-in:after {\n  content: \"􏌐\";\n}\n\n.fad.fa-inbox-out:after {\n  content: \"􏌑\";\n}\n\n.fad.fa-indent:after {\n  content: \"􏀼\";\n}\n\n.fad.fa-industry:after {\n  content: \"􏉵\";\n}\n\n.fad.fa-industry-alt:after {\n  content: \"􏎳\";\n}\n\n.fad.fa-infinity:after {\n  content: \"􏔴\";\n}\n\n.fad.fa-info:after {\n  content: \"􏄩\";\n}\n\n.fad.fa-info-circle:after {\n  content: \"􏁚\";\n}\n\n.fad.fa-info-square:after {\n  content: \"􏌏\";\n}\n\n.fad.fa-inhaler:after {\n  content: \"􏗹\";\n}\n\n.fad.fa-integral:after {\n  content: \"􏙧\";\n}\n\n.fad.fa-intersection:after {\n  content: \"􏙨\";\n}\n\n.fad.fa-inventory:after {\n  content: \"􏒀\";\n}\n\n.fad.fa-island-tropical:after {\n  content: \"􏠑\";\n}\n\n.fad.fa-italic:after {\n  content: \"􏀳\";\n}\n\n.fad.fa-jack-o-lantern:after {\n  content: \"􏌎\";\n}\n\n.fad.fa-jedi:after {\n  content: \"􏙩\";\n}\n\n.fad.fa-joint:after {\n  content: \"􏖕\";\n}\n\n.fad.fa-journal-whills:after {\n  content: \"􏙪\";\n}\n\n.fad.fa-joystick:after {\n  content: \"􏣅\";\n}\n\n.fad.fa-jug:after {\n  content: \"􏣆\";\n}\n\n.fad.fa-kaaba:after {\n  content: \"􏙫\";\n}\n\n.fad.fa-kazoo:after {\n  content: \"􏣇\";\n}\n\n.fad.fa-kerning:after {\n  content: \"􏡯\";\n}\n\n.fad.fa-key:after {\n  content: \"􏂄\";\n}\n\n.fad.fa-key-skeleton:after {\n  content: \"􏛳\";\n}\n\n.fad.fa-keyboard:after {\n  content: \"􏄜\";\n}\n\n.fad.fa-keynote:after {\n  content: \"􏙬\";\n}\n\n.fad.fa-khanda:after {\n  content: \"􏙭\";\n}\n\n.fad.fa-kidneys:after {\n  content: \"􏗻\";\n}\n\n.fad.fa-kiss:after {\n  content: \"􏖖\";\n}\n\n.fad.fa-kiss-beam:after {\n  content: \"􏖗\";\n}\n\n.fad.fa-kiss-wink-heart:after {\n  content: \"􏖘\";\n}\n\n.fad.fa-kite:after {\n  content: \"􏛴\";\n}\n\n.fad.fa-kiwi-bird:after {\n  content: \"􏔵\";\n}\n\n.fad.fa-knife-kitchen:after {\n  content: \"􏛵\";\n}\n\n.fad.fa-lambda:after {\n  content: \"􏙮\";\n}\n\n.fad.fa-lamp:after {\n  content: \"􏓊\";\n}\n\n.fad.fa-lamp-desk:after {\n  content: \"􏤔\";\n}\n\n.fad.fa-lamp-floor:after {\n  content: \"􏤕\";\n}\n\n.fad.fa-landmark:after {\n  content: \"􏙯\";\n}\n\n.fad.fa-landmark-alt:after {\n  content: \"􏝒\";\n}\n\n.fad.fa-language:after {\n  content: \"􏆫\";\n}\n\n.fad.fa-laptop:after {\n  content: \"􏄉\";\n}\n\n.fad.fa-laptop-code:after {\n  content: \"􏗼\";\n}\n\n.fad.fa-laptop-house:after {\n  content: \"􏥦\";\n}\n\n.fad.fa-laptop-medical:after {\n  content: \"􏠒\";\n}\n\n.fad.fa-lasso:after {\n  content: \"􏣈\";\n}\n\n.fad.fa-laugh:after {\n  content: \"􏖙\";\n}\n\n.fad.fa-laugh-beam:after {\n  content: \"􏖚\";\n}\n\n.fad.fa-laugh-squint:after {\n  content: \"􏖛\";\n}\n\n.fad.fa-laugh-wink:after {\n  content: \"􏖜\";\n}\n\n.fad.fa-layer-group:after {\n  content: \"􏗽\";\n}\n\n.fad.fa-layer-minus:after {\n  content: \"􏗾\";\n}\n\n.fad.fa-layer-plus:after {\n  content: \"􏗿\";\n}\n\n.fad.fa-leaf:after {\n  content: \"􏁬\";\n}\n\n.fad.fa-leaf-heart:after {\n  content: \"􏓋\";\n}\n\n.fad.fa-leaf-maple:after {\n  content: \"􏛶\";\n}\n\n.fad.fa-leaf-oak:after {\n  content: \"􏛷\";\n}\n\n.fad.fa-lemon:after {\n  content: \"􏂔\";\n}\n\n.fad.fa-less-than:after {\n  content: \"􏔶\";\n}\n\n.fad.fa-less-than-equal:after {\n  content: \"􏔷\";\n}\n\n.fad.fa-level-down:after {\n  content: \"􏅉\";\n}\n\n.fad.fa-level-down-alt:after {\n  content: \"􏎾\";\n}\n\n.fad.fa-level-up:after {\n  content: \"􏅈\";\n}\n\n.fad.fa-level-up-alt:after {\n  content: \"􏎿\";\n}\n\n.fad.fa-life-ring:after {\n  content: \"􏇍\";\n}\n\n.fad.fa-light-ceiling:after {\n  content: \"􏤖\";\n}\n\n.fad.fa-light-switch:after {\n  content: \"􏤗\";\n}\n\n.fad.fa-light-switch-off:after {\n  content: \"􏤘\";\n}\n\n.fad.fa-light-switch-on:after {\n  content: \"􏤙\";\n}\n\n.fad.fa-lightbulb:after {\n  content: \"􏃫\";\n}\n\n.fad.fa-lightbulb-dollar:after {\n  content: \"􏙰\";\n}\n\n.fad.fa-lightbulb-exclamation:after {\n  content: \"􏙱\";\n}\n\n.fad.fa-lightbulb-on:after {\n  content: \"􏙲\";\n}\n\n.fad.fa-lightbulb-slash:after {\n  content: \"􏙳\";\n}\n\n.fad.fa-lights-holiday:after {\n  content: \"􏞲\";\n}\n\n.fad.fa-line-columns:after {\n  content: \"􏡰\";\n}\n\n.fad.fa-line-height:after {\n  content: \"􏡱\";\n}\n\n.fad.fa-link:after {\n  content: \"􏃁\";\n}\n\n.fad.fa-lips:after {\n  content: \"􏘀\";\n}\n\n.fad.fa-lira-sign:after {\n  content: \"􏆕\";\n}\n\n.fad.fa-list:after {\n  content: \"􏀺\";\n}\n\n.fad.fa-list-alt:after {\n  content: \"􏀢\";\n}\n\n.fad.fa-list-music:after {\n  content: \"􏣉\";\n}\n\n.fad.fa-list-ol:after {\n  content: \"􏃋\";\n}\n\n.fad.fa-list-ul:after {\n  content: \"􏃊\";\n}\n\n.fad.fa-location:after {\n  content: \"􏘁\";\n}\n\n.fad.fa-location-arrow:after {\n  content: \"􏄤\";\n}\n\n.fad.fa-location-circle:after {\n  content: \"􏘂\";\n}\n\n.fad.fa-location-slash:after {\n  content: \"􏘃\";\n}\n\n.fad.fa-lock:after {\n  content: \"􏀣\";\n}\n\n.fad.fa-lock-alt:after {\n  content: \"􏌍\";\n}\n\n.fad.fa-lock-open:after {\n  content: \"􏏁\";\n}\n\n.fad.fa-lock-open-alt:after {\n  content: \"􏏂\";\n}\n\n.fad.fa-long-arrow-alt-down:after {\n  content: \"􏌉\";\n}\n\n.fad.fa-long-arrow-alt-left:after {\n  content: \"􏌊\";\n}\n\n.fad.fa-long-arrow-alt-right:after {\n  content: \"􏌋\";\n}\n\n.fad.fa-long-arrow-alt-up:after {\n  content: \"􏌌\";\n}\n\n.fad.fa-long-arrow-down:after {\n  content: \"􏅵\";\n}\n\n.fad.fa-long-arrow-left:after {\n  content: \"􏅷\";\n}\n\n.fad.fa-long-arrow-right:after {\n  content: \"􏅸\";\n}\n\n.fad.fa-long-arrow-up:after {\n  content: \"􏅶\";\n}\n\n.fad.fa-loveseat:after {\n  content: \"􏓌\";\n}\n\n.fad.fa-low-vision:after {\n  content: \"􏊨\";\n}\n\n.fad.fa-luchador:after {\n  content: \"􏑕\";\n}\n\n.fad.fa-luggage-cart:after {\n  content: \"􏖝\";\n}\n\n.fad.fa-lungs:after {\n  content: \"􏘄\";\n}\n\n.fad.fa-lungs-virus:after {\n  content: \"􏥧\";\n}\n\n.fad.fa-mace:after {\n  content: \"􏛸\";\n}\n\n.fad.fa-magic:after {\n  content: \"􏃐\";\n}\n\n.fad.fa-magnet:after {\n  content: \"􏁶\";\n}\n\n.fad.fa-mail-bulk:after {\n  content: \"􏙴\";\n}\n\n.fad.fa-mailbox:after {\n  content: \"􏠓\";\n}\n\n.fad.fa-male:after {\n  content: \"􏆃\";\n}\n\n.fad.fa-mandolin:after {\n  content: \"􏛹\";\n}\n\n.fad.fa-map:after {\n  content: \"􏉹\";\n}\n\n.fad.fa-map-marked:after {\n  content: \"􏖟\";\n}\n\n.fad.fa-map-marked-alt:after {\n  content: \"􏖠\";\n}\n\n.fad.fa-map-marker:after {\n  content: \"􏁁\";\n}\n\n.fad.fa-map-marker-alt:after {\n  content: \"􏏅\";\n}\n\n.fad.fa-map-marker-alt-slash:after {\n  content: \"􏘅\";\n}\n\n.fad.fa-map-marker-check:after {\n  content: \"􏘆\";\n}\n\n.fad.fa-map-marker-edit:after {\n  content: \"􏘇\";\n}\n\n.fad.fa-map-marker-exclamation:after {\n  content: \"􏘈\";\n}\n\n.fad.fa-map-marker-minus:after {\n  content: \"􏘉\";\n}\n\n.fad.fa-map-marker-plus:after {\n  content: \"􏘊\";\n}\n\n.fad.fa-map-marker-question:after {\n  content: \"􏘋\";\n}\n\n.fad.fa-map-marker-slash:after {\n  content: \"􏘌\";\n}\n\n.fad.fa-map-marker-smile:after {\n  content: \"􏘍\";\n}\n\n.fad.fa-map-marker-times:after {\n  content: \"􏘎\";\n}\n\n.fad.fa-map-pin:after {\n  content: \"􏉶\";\n}\n\n.fad.fa-map-signs:after {\n  content: \"􏉷\";\n}\n\n.fad.fa-marker:after {\n  content: \"􏖡\";\n}\n\n.fad.fa-mars:after {\n  content: \"􏈢\";\n}\n\n.fad.fa-mars-double:after {\n  content: \"􏈧\";\n}\n\n.fad.fa-mars-stroke:after {\n  content: \"􏈩\";\n}\n\n.fad.fa-mars-stroke-h:after {\n  content: \"􏈫\";\n}\n\n.fad.fa-mars-stroke-v:after {\n  content: \"􏈪\";\n}\n\n.fad.fa-mask:after {\n  content: \"􏛺\";\n}\n\n.fad.fa-meat:after {\n  content: \"􏠔\";\n}\n\n.fad.fa-medal:after {\n  content: \"􏖢\";\n}\n\n.fad.fa-medkit:after {\n  content: \"􏃺\";\n}\n\n.fad.fa-megaphone:after {\n  content: \"􏙵\";\n}\n\n.fad.fa-meh:after {\n  content: \"􏄚\";\n}\n\n.fad.fa-meh-blank:after {\n  content: \"􏖤\";\n}\n\n.fad.fa-meh-rolling-eyes:after {\n  content: \"􏖥\";\n}\n\n.fad.fa-memory:after {\n  content: \"􏔸\";\n}\n\n.fad.fa-menorah:after {\n  content: \"􏙶\";\n}\n\n.fad.fa-mercury:after {\n  content: \"􏈣\";\n}\n\n.fad.fa-meteor:after {\n  content: \"􏝓\";\n}\n\n.fad.fa-microchip:after {\n  content: \"􏋛\";\n}\n\n.fad.fa-microphone:after {\n  content: \"􏄰\";\n}\n\n.fad.fa-microphone-alt:after {\n  content: \"􏏉\";\n}\n\n.fad.fa-microphone-alt-slash:after {\n  content: \"􏔹\";\n}\n\n.fad.fa-microphone-slash:after {\n  content: \"􏄱\";\n}\n\n.fad.fa-microphone-stand:after {\n  content: \"􏣋\";\n}\n\n.fad.fa-microscope:after {\n  content: \"􏘐\";\n}\n\n.fad.fa-microwave:after {\n  content: \"􏤛\";\n}\n\n.fad.fa-mind-share:after {\n  content: \"􏙷\";\n}\n\n.fad.fa-minus:after {\n  content: \"􏁨\";\n}\n\n.fad.fa-minus-circle:after {\n  content: \"􏁖\";\n}\n\n.fad.fa-minus-hexagon:after {\n  content: \"􏌇\";\n}\n\n.fad.fa-minus-octagon:after {\n  content: \"􏌈\";\n}\n\n.fad.fa-minus-square:after {\n  content: \"􏅆\";\n}\n\n.fad.fa-mistletoe:after {\n  content: \"􏞴\";\n}\n\n.fad.fa-mitten:after {\n  content: \"􏞵\";\n}\n\n.fad.fa-mobile:after {\n  content: \"􏄋\";\n}\n\n.fad.fa-mobile-alt:after {\n  content: \"􏏍\";\n}\n\n.fad.fa-mobile-android:after {\n  content: \"􏏎\";\n}\n\n.fad.fa-mobile-android-alt:after {\n  content: \"􏏏\";\n}\n\n.fad.fa-money-bill:after {\n  content: \"􏃖\";\n}\n\n.fad.fa-money-bill-alt:after {\n  content: \"􏏑\";\n}\n\n.fad.fa-money-bill-wave:after {\n  content: \"􏔺\";\n}\n\n.fad.fa-money-bill-wave-alt:after {\n  content: \"􏔻\";\n}\n\n.fad.fa-money-check:after {\n  content: \"􏔼\";\n}\n\n.fad.fa-money-check-alt:after {\n  content: \"􏔽\";\n}\n\n.fad.fa-money-check-edit:after {\n  content: \"􏡲\";\n}\n\n.fad.fa-money-check-edit-alt:after {\n  content: \"􏡳\";\n}\n\n.fad.fa-monitor-heart-rate:after {\n  content: \"􏘑\";\n}\n\n.fad.fa-monkey:after {\n  content: \"􏛻\";\n}\n\n.fad.fa-monument:after {\n  content: \"􏖦\";\n}\n\n.fad.fa-moon:after {\n  content: \"􏆆\";\n}\n\n.fad.fa-moon-cloud:after {\n  content: \"􏝔\";\n}\n\n.fad.fa-moon-stars:after {\n  content: \"􏝕\";\n}\n\n.fad.fa-mortar-pestle:after {\n  content: \"􏖧\";\n}\n\n.fad.fa-mosque:after {\n  content: \"􏙸\";\n}\n\n.fad.fa-motorcycle:after {\n  content: \"􏈜\";\n}\n\n.fad.fa-mountain:after {\n  content: \"􏛼\";\n}\n\n.fad.fa-mountains:after {\n  content: \"􏛽\";\n}\n\n.fad.fa-mouse:after {\n  content: \"􏣌\";\n}\n\n.fad.fa-mouse-alt:after {\n  content: \"􏣍\";\n}\n\n.fad.fa-mouse-pointer:after {\n  content: \"􏉅\";\n}\n\n.fad.fa-mp3-player:after {\n  content: \"􏣎\";\n}\n\n.fad.fa-mug:after {\n  content: \"􏡴\";\n}\n\n.fad.fa-mug-hot:after {\n  content: \"􏞶\";\n}\n\n.fad.fa-mug-marshmallows:after {\n  content: \"􏞷\";\n}\n\n.fad.fa-mug-tea:after {\n  content: \"􏡵\";\n}\n\n.fad.fa-music:after {\n  content: \"􏀁\";\n}\n\n.fad.fa-music-alt:after {\n  content: \"􏣏\";\n}\n\n.fad.fa-music-alt-slash:after {\n  content: \"􏣐\";\n}\n\n.fad.fa-music-slash:after {\n  content: \"􏣑\";\n}\n\n.fad.fa-narwhal:after {\n  content: \"􏛾\";\n}\n\n.fad.fa-network-wired:after {\n  content: \"􏛿\";\n}\n\n.fad.fa-neuter:after {\n  content: \"􏈬\";\n}\n\n.fad.fa-newspaper:after {\n  content: \"􏇪\";\n}\n\n.fad.fa-not-equal:after {\n  content: \"􏔾\";\n}\n\n.fad.fa-notes-medical:after {\n  content: \"􏒁\";\n}\n\n.fad.fa-object-group:after {\n  content: \"􏉇\";\n}\n\n.fad.fa-object-ungroup:after {\n  content: \"􏉈\";\n}\n\n.fad.fa-octagon:after {\n  content: \"􏌆\";\n}\n\n.fad.fa-oil-can:after {\n  content: \"􏘓\";\n}\n\n.fad.fa-oil-temp:after {\n  content: \"􏘔\";\n}\n\n.fad.fa-om:after {\n  content: \"􏙹\";\n}\n\n.fad.fa-omega:after {\n  content: \"􏙺\";\n}\n\n.fad.fa-ornament:after {\n  content: \"􏞸\";\n}\n\n.fad.fa-otter:after {\n  content: \"􏜀\";\n}\n\n.fad.fa-outdent:after {\n  content: \"􏀻\";\n}\n\n.fad.fa-outlet:after {\n  content: \"􏤜\";\n}\n\n.fad.fa-oven:after {\n  content: \"􏤝\";\n}\n\n.fad.fa-overline:after {\n  content: \"􏡶\";\n}\n\n.fad.fa-page-break:after {\n  content: \"􏡷\";\n}\n\n.fad.fa-pager:after {\n  content: \"􏠕\";\n}\n\n.fad.fa-paint-brush:after {\n  content: \"􏇼\";\n}\n\n.fad.fa-paint-brush-alt:after {\n  content: \"􏖩\";\n}\n\n.fad.fa-paint-roller:after {\n  content: \"􏖪\";\n}\n\n.fad.fa-palette:after {\n  content: \"􏔿\";\n}\n\n.fad.fa-pallet:after {\n  content: \"􏒂\";\n}\n\n.fad.fa-pallet-alt:after {\n  content: \"􏒃\";\n}\n\n.fad.fa-paper-plane:after {\n  content: \"􏇘\";\n}\n\n.fad.fa-paperclip:after {\n  content: \"􏃆\";\n}\n\n.fad.fa-parachute-box:after {\n  content: \"􏓍\";\n}\n\n.fad.fa-paragraph:after {\n  content: \"􏇝\";\n}\n\n.fad.fa-paragraph-rtl:after {\n  content: \"􏡸\";\n}\n\n.fad.fa-parking:after {\n  content: \"􏕀\";\n}\n\n.fad.fa-parking-circle:after {\n  content: \"􏘕\";\n}\n\n.fad.fa-parking-circle-slash:after {\n  content: \"􏘖\";\n}\n\n.fad.fa-parking-slash:after {\n  content: \"􏘗\";\n}\n\n.fad.fa-passport:after {\n  content: \"􏖫\";\n}\n\n.fad.fa-pastafarianism:after {\n  content: \"􏙻\";\n}\n\n.fad.fa-paste:after {\n  content: \"􏃪\";\n}\n\n.fad.fa-pause:after {\n  content: \"􏁌\";\n}\n\n.fad.fa-pause-circle:after {\n  content: \"􏊋\";\n}\n\n.fad.fa-paw:after {\n  content: \"􏆰\";\n}\n\n.fad.fa-paw-alt:after {\n  content: \"􏜁\";\n}\n\n.fad.fa-paw-claws:after {\n  content: \"􏜂\";\n}\n\n.fad.fa-peace:after {\n  content: \"􏙼\";\n}\n\n.fad.fa-pegasus:after {\n  content: \"􏜃\";\n}\n\n.fad.fa-pen:after {\n  content: \"􏌄\";\n}\n\n.fad.fa-pen-alt:after {\n  content: \"􏌅\";\n}\n\n.fad.fa-pen-fancy:after {\n  content: \"􏖬\";\n}\n\n.fad.fa-pen-nib:after {\n  content: \"􏖭\";\n}\n\n.fad.fa-pen-square:after {\n  content: \"􏅋\";\n}\n\n.fad.fa-pencil:after {\n  content: \"􏁀\";\n}\n\n.fad.fa-pencil-alt:after {\n  content: \"􏌃\";\n}\n\n.fad.fa-pencil-paintbrush:after {\n  content: \"􏘘\";\n}\n\n.fad.fa-pencil-ruler:after {\n  content: \"􏖮\";\n}\n\n.fad.fa-pennant:after {\n  content: \"􏑖\";\n}\n\n.fad.fa-people-arrows:after {\n  content: \"􏥨\";\n}\n\n.fad.fa-people-carry:after {\n  content: \"􏓎\";\n}\n\n.fad.fa-pepper-hot:after {\n  content: \"􏠖\";\n}\n\n.fad.fa-percent:after {\n  content: \"􏊕\";\n}\n\n.fad.fa-percentage:after {\n  content: \"􏕁\";\n}\n\n.fad.fa-person-booth:after {\n  content: \"􏝖\";\n}\n\n.fad.fa-person-carry:after {\n  content: \"􏓏\";\n}\n\n.fad.fa-person-dolly:after {\n  content: \"􏓐\";\n}\n\n.fad.fa-person-dolly-empty:after {\n  content: \"􏓑\";\n}\n\n.fad.fa-person-sign:after {\n  content: \"􏝗\";\n}\n\n.fad.fa-phone:after {\n  content: \"􏂕\";\n}\n\n.fad.fa-phone-alt:after {\n  content: \"􏡹\";\n}\n\n.fad.fa-phone-laptop:after {\n  content: \"􏡺\";\n}\n\n.fad.fa-phone-office:after {\n  content: \"􏙽\";\n}\n\n.fad.fa-phone-plus:after {\n  content: \"􏓒\";\n}\n\n.fad.fa-phone-rotary:after {\n  content: \"􏣓\";\n}\n\n.fad.fa-phone-slash:after {\n  content: \"􏏝\";\n}\n\n.fad.fa-phone-square:after {\n  content: \"􏂘\";\n}\n\n.fad.fa-phone-square-alt:after {\n  content: \"􏡻\";\n}\n\n.fad.fa-phone-volume:after {\n  content: \"􏊠\";\n}\n\n.fad.fa-photo-video:after {\n  content: \"􏡼\";\n}\n\n.fad.fa-pi:after {\n  content: \"􏙾\";\n}\n\n.fad.fa-piano:after {\n  content: \"􏣔\";\n}\n\n.fad.fa-piano-keyboard:after {\n  content: \"􏣕\";\n}\n\n.fad.fa-pie:after {\n  content: \"􏜅\";\n}\n\n.fad.fa-pig:after {\n  content: \"􏜆\";\n}\n\n.fad.fa-piggy-bank:after {\n  content: \"􏓓\";\n}\n\n.fad.fa-pills:after {\n  content: \"􏒄\";\n}\n\n.fad.fa-pizza:after {\n  content: \"􏠗\";\n}\n\n.fad.fa-pizza-slice:after {\n  content: \"􏠘\";\n}\n\n.fad.fa-place-of-worship:after {\n  content: \"􏙿\";\n}\n\n.fad.fa-plane:after {\n  content: \"􏁲\";\n}\n\n.fad.fa-plane-alt:after {\n  content: \"􏏞\";\n}\n\n.fad.fa-plane-arrival:after {\n  content: \"􏖯\";\n}\n\n.fad.fa-plane-departure:after {\n  content: \"􏖰\";\n}\n\n.fad.fa-plane-slash:after {\n  content: \"􏥩\";\n}\n\n.fad.fa-planet-moon:after {\n  content: \"􏤟\";\n}\n\n.fad.fa-planet-ringed:after {\n  content: \"􏤠\";\n}\n\n.fad.fa-play:after {\n  content: \"􏁋\";\n}\n\n.fad.fa-play-circle:after {\n  content: \"􏅄\";\n}\n\n.fad.fa-plug:after {\n  content: \"􏇦\";\n}\n\n.fad.fa-plus:after {\n  content: \"􏁧\";\n}\n\n.fad.fa-plus-circle:after {\n  content: \"􏁕\";\n}\n\n.fad.fa-plus-hexagon:after {\n  content: \"􏌀\";\n}\n\n.fad.fa-plus-octagon:after {\n  content: \"􏌁\";\n}\n\n.fad.fa-plus-square:after {\n  content: \"􏃾\";\n}\n\n.fad.fa-podcast:after {\n  content: \"􏋎\";\n}\n\n.fad.fa-podium:after {\n  content: \"􏚀\";\n}\n\n.fad.fa-podium-star:after {\n  content: \"􏝘\";\n}\n\n.fad.fa-police-box:after {\n  content: \"􏤡\";\n}\n\n.fad.fa-poll:after {\n  content: \"􏚁\";\n}\n\n.fad.fa-poll-h:after {\n  content: \"􏚂\";\n}\n\n.fad.fa-poll-people:after {\n  content: \"􏝙\";\n}\n\n.fad.fa-poo:after {\n  content: \"􏋾\";\n}\n\n.fad.fa-poo-storm:after {\n  content: \"􏝚\";\n}\n\n.fad.fa-poop:after {\n  content: \"􏘙\";\n}\n\n.fad.fa-popcorn:after {\n  content: \"􏠙\";\n}\n\n.fad.fa-portal-enter:after {\n  content: \"􏤢\";\n}\n\n.fad.fa-portal-exit:after {\n  content: \"􏤣\";\n}\n\n.fad.fa-portrait:after {\n  content: \"􏏠\";\n}\n\n.fad.fa-pound-sign:after {\n  content: \"􏅔\";\n}\n\n.fad.fa-power-off:after {\n  content: \"􏀑\";\n}\n\n.fad.fa-pray:after {\n  content: \"􏚃\";\n}\n\n.fad.fa-praying-hands:after {\n  content: \"􏚄\";\n}\n\n.fad.fa-prescription:after {\n  content: \"􏖱\";\n}\n\n.fad.fa-prescription-bottle:after {\n  content: \"􏒅\";\n}\n\n.fad.fa-prescription-bottle-alt:after {\n  content: \"􏒆\";\n}\n\n.fad.fa-presentation:after {\n  content: \"􏚅\";\n}\n\n.fad.fa-print:after {\n  content: \"􏀯\";\n}\n\n.fad.fa-print-search:after {\n  content: \"􏠚\";\n}\n\n.fad.fa-print-slash:after {\n  content: \"􏚆\";\n}\n\n.fad.fa-procedures:after {\n  content: \"􏒇\";\n}\n\n.fad.fa-project-diagram:after {\n  content: \"􏕂\";\n}\n\n.fad.fa-projector:after {\n  content: \"􏣖\";\n}\n\n.fad.fa-pump-medical:after {\n  content: \"􏥪\";\n}\n\n.fad.fa-pump-soap:after {\n  content: \"􏥫\";\n}\n\n.fad.fa-pumpkin:after {\n  content: \"􏜇\";\n}\n\n.fad.fa-puzzle-piece:after {\n  content: \"􏄮\";\n}\n\n.fad.fa-qrcode:after {\n  content: \"􏀩\";\n}\n\n.fad.fa-question:after {\n  content: \"􏄨\";\n}\n\n.fad.fa-question-circle:after {\n  content: \"􏁙\";\n}\n\n.fad.fa-question-square:after {\n  content: \"􏋽\";\n}\n\n.fad.fa-quidditch:after {\n  content: \"􏑘\";\n}\n\n.fad.fa-quote-left:after {\n  content: \"􏄍\";\n}\n\n.fad.fa-quote-right:after {\n  content: \"􏄎\";\n}\n\n.fad.fa-quran:after {\n  content: \"􏚇\";\n}\n\n.fad.fa-rabbit:after {\n  content: \"􏜈\";\n}\n\n.fad.fa-rabbit-fast:after {\n  content: \"􏜉\";\n}\n\n.fad.fa-racquet:after {\n  content: \"􏑚\";\n}\n\n.fad.fa-radar:after {\n  content: \"􏤤\";\n}\n\n.fad.fa-radiation:after {\n  content: \"􏞹\";\n}\n\n.fad.fa-radiation-alt:after {\n  content: \"􏞺\";\n}\n\n.fad.fa-radio:after {\n  content: \"􏣗\";\n}\n\n.fad.fa-radio-alt:after {\n  content: \"􏣘\";\n}\n\n.fad.fa-rainbow:after {\n  content: \"􏝛\";\n}\n\n.fad.fa-raindrops:after {\n  content: \"􏝜\";\n}\n\n.fad.fa-ram:after {\n  content: \"􏜊\";\n}\n\n.fad.fa-ramp-loading:after {\n  content: \"􏓔\";\n}\n\n.fad.fa-random:after {\n  content: \"􏁴\";\n}\n\n.fad.fa-raygun:after {\n  content: \"􏤥\";\n}\n\n.fad.fa-receipt:after {\n  content: \"􏕃\";\n}\n\n.fad.fa-record-vinyl:after {\n  content: \"􏣙\";\n}\n\n.fad.fa-rectangle-landscape:after {\n  content: \"􏋺\";\n}\n\n.fad.fa-rectangle-portrait:after {\n  content: \"􏋻\";\n}\n\n.fad.fa-rectangle-wide:after {\n  content: \"􏋼\";\n}\n\n.fad.fa-recycle:after {\n  content: \"􏆸\";\n}\n\n.fad.fa-redo:after {\n  content: \"􏀞\";\n}\n\n.fad.fa-redo-alt:after {\n  content: \"􏋹\";\n}\n\n.fad.fa-refrigerator:after {\n  content: \"􏤦\";\n}\n\n.fad.fa-registered:after {\n  content: \"􏉝\";\n}\n\n.fad.fa-remove-format:after {\n  content: \"􏡽\";\n}\n\n.fad.fa-repeat:after {\n  content: \"􏍣\";\n}\n\n.fad.fa-repeat-1:after {\n  content: \"􏍥\";\n}\n\n.fad.fa-repeat-1-alt:after {\n  content: \"􏍦\";\n}\n\n.fad.fa-repeat-alt:after {\n  content: \"􏍤\";\n}\n\n.fad.fa-reply:after {\n  content: \"􏏥\";\n}\n\n.fad.fa-reply-all:after {\n  content: \"􏄢\";\n}\n\n.fad.fa-republican:after {\n  content: \"􏝞\";\n}\n\n.fad.fa-restroom:after {\n  content: \"􏞽\";\n}\n\n.fad.fa-retweet:after {\n  content: \"􏁹\";\n}\n\n.fad.fa-retweet-alt:after {\n  content: \"􏍡\";\n}\n\n.fad.fa-ribbon:after {\n  content: \"􏓖\";\n}\n\n.fad.fa-ring:after {\n  content: \"􏜋\";\n}\n\n.fad.fa-rings-wedding:after {\n  content: \"􏠛\";\n}\n\n.fad.fa-road:after {\n  content: \"􏀘\";\n}\n\n.fad.fa-robot:after {\n  content: \"􏕄\";\n}\n\n.fad.fa-rocket:after {\n  content: \"􏄵\";\n}\n\n.fad.fa-rocket-launch:after {\n  content: \"􏤧\";\n}\n\n.fad.fa-route:after {\n  content: \"􏓗\";\n}\n\n.fad.fa-route-highway:after {\n  content: \"􏘚\";\n}\n\n.fad.fa-route-interstate:after {\n  content: \"􏘛\";\n}\n\n.fad.fa-router:after {\n  content: \"􏣚\";\n}\n\n.fad.fa-rss:after {\n  content: \"􏂞\";\n}\n\n.fad.fa-rss-square:after {\n  content: \"􏅃\";\n}\n\n.fad.fa-ruble-sign:after {\n  content: \"􏅘\";\n}\n\n.fad.fa-ruler:after {\n  content: \"􏕅\";\n}\n\n.fad.fa-ruler-combined:after {\n  content: \"􏕆\";\n}\n\n.fad.fa-ruler-horizontal:after {\n  content: \"􏕇\";\n}\n\n.fad.fa-ruler-triangle:after {\n  content: \"􏘜\";\n}\n\n.fad.fa-ruler-vertical:after {\n  content: \"􏕈\";\n}\n\n.fad.fa-running:after {\n  content: \"􏜌\";\n}\n\n.fad.fa-rupee-sign:after {\n  content: \"􏅖\";\n}\n\n.fad.fa-rv:after {\n  content: \"􏞾\";\n}\n\n.fad.fa-sack:after {\n  content: \"􏠜\";\n}\n\n.fad.fa-sack-dollar:after {\n  content: \"􏠝\";\n}\n\n.fad.fa-sad-cry:after {\n  content: \"􏖳\";\n}\n\n.fad.fa-sad-tear:after {\n  content: \"􏖴\";\n}\n\n.fad.fa-salad:after {\n  content: \"􏠞\";\n}\n\n.fad.fa-sandwich:after {\n  content: \"􏠟\";\n}\n\n.fad.fa-satellite:after {\n  content: \"􏞿\";\n}\n\n.fad.fa-satellite-dish:after {\n  content: \"􏟀\";\n}\n\n.fad.fa-sausage:after {\n  content: \"􏠠\";\n}\n\n.fad.fa-save:after {\n  content: \"􏃇\";\n}\n\n.fad.fa-sax-hot:after {\n  content: \"􏣛\";\n}\n\n.fad.fa-saxophone:after {\n  content: \"􏣜\";\n}\n\n.fad.fa-scalpel:after {\n  content: \"􏘝\";\n}\n\n.fad.fa-scalpel-path:after {\n  content: \"􏘞\";\n}\n\n.fad.fa-scanner:after {\n  content: \"􏒈\";\n}\n\n.fad.fa-scanner-image:after {\n  content: \"􏣳\";\n}\n\n.fad.fa-scanner-keyboard:after {\n  content: \"􏒉\";\n}\n\n.fad.fa-scanner-touchscreen:after {\n  content: \"􏒊\";\n}\n\n.fad.fa-scarecrow:after {\n  content: \"􏜍\";\n}\n\n.fad.fa-scarf:after {\n  content: \"􏟁\";\n}\n\n.fad.fa-school:after {\n  content: \"􏕉\";\n}\n\n.fad.fa-screwdriver:after {\n  content: \"􏕊\";\n}\n\n.fad.fa-scroll:after {\n  content: \"􏜎\";\n}\n\n.fad.fa-scroll-old:after {\n  content: \"􏜏\";\n}\n\n.fad.fa-scrubber:after {\n  content: \"􏋸\";\n}\n\n.fad.fa-scythe:after {\n  content: \"􏜐\";\n}\n\n.fad.fa-sd-card:after {\n  content: \"􏟂\";\n}\n\n.fad.fa-search:after {\n  content: \"􏀂\";\n}\n\n.fad.fa-search-dollar:after {\n  content: \"􏚈\";\n}\n\n.fad.fa-search-location:after {\n  content: \"􏚉\";\n}\n\n.fad.fa-search-minus:after {\n  content: \"􏀐\";\n}\n\n.fad.fa-search-plus:after {\n  content: \"􏀎\";\n}\n\n.fad.fa-seedling:after {\n  content: \"􏓘\";\n}\n\n.fad.fa-send-back:after {\n  content: \"􏡾\";\n}\n\n.fad.fa-send-backward:after {\n  content: \"􏡿\";\n}\n\n.fad.fa-sensor:after {\n  content: \"􏤨\";\n}\n\n.fad.fa-sensor-alert:after {\n  content: \"􏤩\";\n}\n\n.fad.fa-sensor-fire:after {\n  content: \"􏤪\";\n}\n\n.fad.fa-sensor-on:after {\n  content: \"􏤫\";\n}\n\n.fad.fa-sensor-smoke:after {\n  content: \"􏤬\";\n}\n\n.fad.fa-server:after {\n  content: \"􏈳\";\n}\n\n.fad.fa-shapes:after {\n  content: \"􏘟\";\n}\n\n.fad.fa-share:after {\n  content: \"􏁤\";\n}\n\n.fad.fa-share-all:after {\n  content: \"􏍧\";\n}\n\n.fad.fa-share-alt:after {\n  content: \"􏇠\";\n}\n\n.fad.fa-share-alt-square:after {\n  content: \"􏇡\";\n}\n\n.fad.fa-share-square:after {\n  content: \"􏅍\";\n}\n\n.fad.fa-sheep:after {\n  content: \"􏜑\";\n}\n\n.fad.fa-shekel-sign:after {\n  content: \"􏈋\";\n}\n\n.fad.fa-shield:after {\n  content: \"􏄲\";\n}\n\n.fad.fa-shield-alt:after {\n  content: \"􏏭\";\n}\n\n.fad.fa-shield-check:after {\n  content: \"􏋷\";\n}\n\n.fad.fa-shield-cross:after {\n  content: \"􏜒\";\n}\n\n.fad.fa-shield-virus:after {\n  content: \"􏥬\";\n}\n\n.fad.fa-ship:after {\n  content: \"􏈚\";\n}\n\n.fad.fa-shipping-fast:after {\n  content: \"􏒋\";\n}\n\n.fad.fa-shipping-timed:after {\n  content: \"􏒌\";\n}\n\n.fad.fa-shish-kebab:after {\n  content: \"􏠡\";\n}\n\n.fad.fa-shoe-prints:after {\n  content: \"􏕋\";\n}\n\n.fad.fa-shopping-bag:after {\n  content: \"􏊐\";\n}\n\n.fad.fa-shopping-basket:after {\n  content: \"􏊑\";\n}\n\n.fad.fa-shopping-cart:after {\n  content: \"􏁺\";\n}\n\n.fad.fa-shovel:after {\n  content: \"􏜓\";\n}\n\n.fad.fa-shovel-snow:after {\n  content: \"􏟃\";\n}\n\n.fad.fa-shower:after {\n  content: \"􏋌\";\n}\n\n.fad.fa-shredder:after {\n  content: \"􏚊\";\n}\n\n.fad.fa-shuttle-van:after {\n  content: \"􏖶\";\n}\n\n.fad.fa-shuttlecock:after {\n  content: \"􏑛\";\n}\n\n.fad.fa-sickle:after {\n  content: \"􏠢\";\n}\n\n.fad.fa-sigma:after {\n  content: \"􏚋\";\n}\n\n.fad.fa-sign:after {\n  content: \"􏓙\";\n}\n\n.fad.fa-sign-in:after {\n  content: \"􏂐\";\n}\n\n.fad.fa-sign-in-alt:after {\n  content: \"􏋶\";\n}\n\n.fad.fa-sign-language:after {\n  content: \"􏊧\";\n}\n\n.fad.fa-sign-out:after {\n  content: \"􏂋\";\n}\n\n.fad.fa-sign-out-alt:after {\n  content: \"􏋵\";\n}\n\n.fad.fa-signal:after {\n  content: \"􏀒\";\n}\n\n.fad.fa-signal-1:after {\n  content: \"􏚌\";\n}\n\n.fad.fa-signal-2:after {\n  content: \"􏚍\";\n}\n\n.fad.fa-signal-3:after {\n  content: \"􏚎\";\n}\n\n.fad.fa-signal-4:after {\n  content: \"􏚏\";\n}\n\n.fad.fa-signal-alt:after {\n  content: \"􏚐\";\n}\n\n.fad.fa-signal-alt-1:after {\n  content: \"􏚑\";\n}\n\n.fad.fa-signal-alt-2:after {\n  content: \"􏚒\";\n}\n\n.fad.fa-signal-alt-3:after {\n  content: \"􏚓\";\n}\n\n.fad.fa-signal-alt-slash:after {\n  content: \"􏚔\";\n}\n\n.fad.fa-signal-slash:after {\n  content: \"􏚕\";\n}\n\n.fad.fa-signal-stream:after {\n  content: \"􏣝\";\n}\n\n.fad.fa-signature:after {\n  content: \"􏖷\";\n}\n\n.fad.fa-sim-card:after {\n  content: \"􏟄\";\n}\n\n.fad.fa-sink:after {\n  content: \"􏥭\";\n}\n\n.fad.fa-siren:after {\n  content: \"􏤭\";\n}\n\n.fad.fa-siren-on:after {\n  content: \"􏤮\";\n}\n\n.fad.fa-sitemap:after {\n  content: \"􏃨\";\n}\n\n.fad.fa-skating:after {\n  content: \"􏟅\";\n}\n\n.fad.fa-skeleton:after {\n  content: \"􏘠\";\n}\n\n.fad.fa-ski-jump:after {\n  content: \"􏟇\";\n}\n\n.fad.fa-ski-lift:after {\n  content: \"􏟈\";\n}\n\n.fad.fa-skiing:after {\n  content: \"􏟉\";\n}\n\n.fad.fa-skiing-nordic:after {\n  content: \"􏟊\";\n}\n\n.fad.fa-skull:after {\n  content: \"􏕌\";\n}\n\n.fad.fa-skull-cow:after {\n  content: \"􏣞\";\n}\n\n.fad.fa-skull-crossbones:after {\n  content: \"􏜔\";\n}\n\n.fad.fa-slash:after {\n  content: \"􏜕\";\n}\n\n.fad.fa-sledding:after {\n  content: \"􏟋\";\n}\n\n.fad.fa-sleigh:after {\n  content: \"􏟌\";\n}\n\n.fad.fa-sliders-h:after {\n  content: \"􏇞\";\n}\n\n.fad.fa-sliders-h-square:after {\n  content: \"􏏰\";\n}\n\n.fad.fa-sliders-v:after {\n  content: \"􏏱\";\n}\n\n.fad.fa-sliders-v-square:after {\n  content: \"􏏲\";\n}\n\n.fad.fa-smile:after {\n  content: \"􏄘\";\n}\n\n.fad.fa-smile-beam:after {\n  content: \"􏖸\";\n}\n\n.fad.fa-smile-plus:after {\n  content: \"􏖹\";\n}\n\n.fad.fa-smile-wink:after {\n  content: \"􏓚\";\n}\n\n.fad.fa-smog:after {\n  content: \"􏝟\";\n}\n\n.fad.fa-smoke:after {\n  content: \"􏝠\";\n}\n\n.fad.fa-smoking:after {\n  content: \"􏒍\";\n}\n\n.fad.fa-smoking-ban:after {\n  content: \"􏕍\";\n}\n\n.fad.fa-sms:after {\n  content: \"􏟍\";\n}\n\n.fad.fa-snake:after {\n  content: \"􏜖\";\n}\n\n.fad.fa-snooze:after {\n  content: \"􏢀\";\n}\n\n.fad.fa-snow-blowing:after {\n  content: \"􏝡\";\n}\n\n.fad.fa-snowboarding:after {\n  content: \"􏟎\";\n}\n\n.fad.fa-snowflake:after {\n  content: \"􏋜\";\n}\n\n.fad.fa-snowflakes:after {\n  content: \"􏟏\";\n}\n\n.fad.fa-snowman:after {\n  content: \"􏟐\";\n}\n\n.fad.fa-snowmobile:after {\n  content: \"􏟑\";\n}\n\n.fad.fa-snowplow:after {\n  content: \"􏟒\";\n}\n\n.fad.fa-soap:after {\n  content: \"􏥮\";\n}\n\n.fad.fa-socks:after {\n  content: \"􏚖\";\n}\n\n.fad.fa-solar-panel:after {\n  content: \"􏖺\";\n}\n\n.fad.fa-solar-system:after {\n  content: \"􏤯\";\n}\n\n.fad.fa-sort:after {\n  content: \"􏃜\";\n}\n\n.fad.fa-sort-alpha-down:after {\n  content: \"􏅝\";\n}\n\n.fad.fa-sort-alpha-down-alt:after {\n  content: \"􏢁\";\n}\n\n.fad.fa-sort-alpha-up:after {\n  content: \"􏅞\";\n}\n\n.fad.fa-sort-alpha-up-alt:after {\n  content: \"􏢂\";\n}\n\n.fad.fa-sort-alt:after {\n  content: \"􏢃\";\n}\n\n.fad.fa-sort-amount-down:after {\n  content: \"􏅠\";\n}\n\n.fad.fa-sort-amount-down-alt:after {\n  content: \"􏢄\";\n}\n\n.fad.fa-sort-amount-up:after {\n  content: \"􏅡\";\n}\n\n.fad.fa-sort-amount-up-alt:after {\n  content: \"􏢅\";\n}\n\n.fad.fa-sort-circle:after {\n  content: \"􏤰\";\n}\n\n.fad.fa-sort-circle-down:after {\n  content: \"􏤱\";\n}\n\n.fad.fa-sort-circle-up:after {\n  content: \"􏤲\";\n}\n\n.fad.fa-sort-down:after {\n  content: \"􏃝\";\n}\n\n.fad.fa-sort-numeric-down:after {\n  content: \"􏅢\";\n}\n\n.fad.fa-sort-numeric-down-alt:after {\n  content: \"􏢆\";\n}\n\n.fad.fa-sort-numeric-up:after {\n  content: \"􏅣\";\n}\n\n.fad.fa-sort-numeric-up-alt:after {\n  content: \"􏢇\";\n}\n\n.fad.fa-sort-shapes-down:after {\n  content: \"􏢈\";\n}\n\n.fad.fa-sort-shapes-down-alt:after {\n  content: \"􏢉\";\n}\n\n.fad.fa-sort-shapes-up:after {\n  content: \"􏢊\";\n}\n\n.fad.fa-sort-shapes-up-alt:after {\n  content: \"􏢋\";\n}\n\n.fad.fa-sort-size-down:after {\n  content: \"􏢌\";\n}\n\n.fad.fa-sort-size-down-alt:after {\n  content: \"􏢍\";\n}\n\n.fad.fa-sort-size-up:after {\n  content: \"􏢎\";\n}\n\n.fad.fa-sort-size-up-alt:after {\n  content: \"􏢏\";\n}\n\n.fad.fa-sort-up:after {\n  content: \"􏃞\";\n}\n\n.fad.fa-soup:after {\n  content: \"􏠣\";\n}\n\n.fad.fa-spa:after {\n  content: \"􏖻\";\n}\n\n.fad.fa-space-shuttle:after {\n  content: \"􏆗\";\n}\n\n.fad.fa-space-station-moon:after {\n  content: \"􏤳\";\n}\n\n.fad.fa-space-station-moon-alt:after {\n  content: \"􏤴\";\n}\n\n.fad.fa-spade:after {\n  content: \"􏋴\";\n}\n\n.fad.fa-sparkles:after {\n  content: \"􏢐\";\n}\n\n.fad.fa-speaker:after {\n  content: \"􏣟\";\n}\n\n.fad.fa-speakers:after {\n  content: \"􏣠\";\n}\n\n.fad.fa-spell-check:after {\n  content: \"􏢑\";\n}\n\n.fad.fa-spider:after {\n  content: \"􏜗\";\n}\n\n.fad.fa-spider-black-widow:after {\n  content: \"􏜘\";\n}\n\n.fad.fa-spider-web:after {\n  content: \"􏜙\";\n}\n\n.fad.fa-spinner:after {\n  content: \"􏄐\";\n}\n\n.fad.fa-spinner-third:after {\n  content: \"􏏴\";\n}\n\n.fad.fa-splotch:after {\n  content: \"􏖼\";\n}\n\n.fad.fa-spray-can:after {\n  content: \"􏖽\";\n}\n\n.fad.fa-sprinkler:after {\n  content: \"􏤵\";\n}\n\n.fad.fa-square:after {\n  content: \"􏃈\";\n}\n\n.fad.fa-square-full:after {\n  content: \"􏑜\";\n}\n\n.fad.fa-square-root:after {\n  content: \"􏚗\";\n}\n\n.fad.fa-square-root-alt:after {\n  content: \"􏚘\";\n}\n\n.fad.fa-squirrel:after {\n  content: \"􏜚\";\n}\n\n.fad.fa-staff:after {\n  content: \"􏜛\";\n}\n\n.fad.fa-stamp:after {\n  content: \"􏖿\";\n}\n\n.fad.fa-star:after {\n  content: \"􏀅\";\n}\n\n.fad.fa-star-and-crescent:after {\n  content: \"􏚙\";\n}\n\n.fad.fa-star-christmas:after {\n  content: \"􏟔\";\n}\n\n.fad.fa-star-exclamation:after {\n  content: \"􏋳\";\n}\n\n.fad.fa-star-half:after {\n  content: \"􏂉\";\n}\n\n.fad.fa-star-half-alt:after {\n  content: \"􏗀\";\n}\n\n.fad.fa-star-of-david:after {\n  content: \"􏚚\";\n}\n\n.fad.fa-star-of-life:after {\n  content: \"􏘡\";\n}\n\n.fad.fa-star-shooting:after {\n  content: \"􏤶\";\n}\n\n.fad.fa-starfighter:after {\n  content: \"􏤷\";\n}\n\n.fad.fa-starfighter-alt:after {\n  content: \"􏤸\";\n}\n\n.fad.fa-stars:after {\n  content: \"􏝢\";\n}\n\n.fad.fa-starship:after {\n  content: \"􏤹\";\n}\n\n.fad.fa-starship-freighter:after {\n  content: \"􏤺\";\n}\n\n.fad.fa-steak:after {\n  content: \"􏠤\";\n}\n\n.fad.fa-steering-wheel:after {\n  content: \"􏘢\";\n}\n\n.fad.fa-step-backward:after {\n  content: \"􏁈\";\n}\n\n.fad.fa-step-forward:after {\n  content: \"􏁑\";\n}\n\n.fad.fa-stethoscope:after {\n  content: \"􏃱\";\n}\n\n.fad.fa-sticky-note:after {\n  content: \"􏉉\";\n}\n\n.fad.fa-stocking:after {\n  content: \"􏟕\";\n}\n\n.fad.fa-stomach:after {\n  content: \"􏘣\";\n}\n\n.fad.fa-stop:after {\n  content: \"􏁍\";\n}\n\n.fad.fa-stop-circle:after {\n  content: \"􏊍\";\n}\n\n.fad.fa-stopwatch:after {\n  content: \"􏋲\";\n}\n\n.fad.fa-stopwatch-20:after {\n  content: \"􏥯\";\n}\n\n.fad.fa-store:after {\n  content: \"􏕎\";\n}\n\n.fad.fa-store-alt:after {\n  content: \"􏕏\";\n}\n\n.fad.fa-store-alt-slash:after {\n  content: \"􏥰\";\n}\n\n.fad.fa-store-slash:after {\n  content: \"􏥱\";\n}\n\n.fad.fa-stream:after {\n  content: \"􏕐\";\n}\n\n.fad.fa-street-view:after {\n  content: \"􏈝\";\n}\n\n.fad.fa-stretcher:after {\n  content: \"􏠥\";\n}\n\n.fad.fa-strikethrough:after {\n  content: \"􏃌\";\n}\n\n.fad.fa-stroopwafel:after {\n  content: \"􏕑\";\n}\n\n.fad.fa-subscript:after {\n  content: \"􏄬\";\n}\n\n.fad.fa-subway:after {\n  content: \"􏈹\";\n}\n\n.fad.fa-suitcase:after {\n  content: \"􏃲\";\n}\n\n.fad.fa-suitcase-rolling:after {\n  content: \"􏗁\";\n}\n\n.fad.fa-sun:after {\n  content: \"􏆅\";\n}\n\n.fad.fa-sun-cloud:after {\n  content: \"􏝣\";\n}\n\n.fad.fa-sun-dust:after {\n  content: \"􏝤\";\n}\n\n.fad.fa-sun-haze:after {\n  content: \"􏝥\";\n}\n\n.fad.fa-sunglasses:after {\n  content: \"􏢒\";\n}\n\n.fad.fa-sunrise:after {\n  content: \"􏝦\";\n}\n\n.fad.fa-sunset:after {\n  content: \"􏝧\";\n}\n\n.fad.fa-superscript:after {\n  content: \"􏄫\";\n}\n\n.fad.fa-surprise:after {\n  content: \"􏗂\";\n}\n\n.fad.fa-swatchbook:after {\n  content: \"􏗃\";\n}\n\n.fad.fa-swimmer:after {\n  content: \"􏗄\";\n}\n\n.fad.fa-swimming-pool:after {\n  content: \"􏗅\";\n}\n\n.fad.fa-sword:after {\n  content: \"􏜜\";\n}\n\n.fad.fa-sword-laser:after {\n  content: \"􏤻\";\n}\n\n.fad.fa-sword-laser-alt:after {\n  content: \"􏤼\";\n}\n\n.fad.fa-swords:after {\n  content: \"􏜝\";\n}\n\n.fad.fa-swords-laser:after {\n  content: \"􏤽\";\n}\n\n.fad.fa-synagogue:after {\n  content: \"􏚛\";\n}\n\n.fad.fa-sync:after {\n  content: \"􏀡\";\n}\n\n.fad.fa-sync-alt:after {\n  content: \"􏋱\";\n}\n\n.fad.fa-syringe:after {\n  content: \"􏒎\";\n}\n\n.fad.fa-table:after {\n  content: \"􏃎\";\n}\n\n.fad.fa-table-tennis:after {\n  content: \"􏑝\";\n}\n\n.fad.fa-tablet:after {\n  content: \"􏄊\";\n}\n\n.fad.fa-tablet-alt:after {\n  content: \"􏏺\";\n}\n\n.fad.fa-tablet-android:after {\n  content: \"􏏻\";\n}\n\n.fad.fa-tablet-android-alt:after {\n  content: \"􏏼\";\n}\n\n.fad.fa-tablet-rugged:after {\n  content: \"􏒏\";\n}\n\n.fad.fa-tablets:after {\n  content: \"􏒐\";\n}\n\n.fad.fa-tachometer:after {\n  content: \"􏃤\";\n}\n\n.fad.fa-tachometer-alt:after {\n  content: \"􏏽\";\n}\n\n.fad.fa-tachometer-alt-average:after {\n  content: \"􏘤\";\n}\n\n.fad.fa-tachometer-alt-fast:after {\n  content: \"􏘥\";\n}\n\n.fad.fa-tachometer-alt-fastest:after {\n  content: \"􏘦\";\n}\n\n.fad.fa-tachometer-alt-slow:after {\n  content: \"􏘧\";\n}\n\n.fad.fa-tachometer-alt-slowest:after {\n  content: \"􏘨\";\n}\n\n.fad.fa-tachometer-average:after {\n  content: \"􏘩\";\n}\n\n.fad.fa-tachometer-fast:after {\n  content: \"􏘪\";\n}\n\n.fad.fa-tachometer-fastest:after {\n  content: \"􏘫\";\n}\n\n.fad.fa-tachometer-slow:after {\n  content: \"􏘬\";\n}\n\n.fad.fa-tachometer-slowest:after {\n  content: \"􏘭\";\n}\n\n.fad.fa-taco:after {\n  content: \"􏠦\";\n}\n\n.fad.fa-tag:after {\n  content: \"􏀫\";\n}\n\n.fad.fa-tags:after {\n  content: \"􏀬\";\n}\n\n.fad.fa-tally:after {\n  content: \"􏚜\";\n}\n\n.fad.fa-tanakh:after {\n  content: \"􏠧\";\n}\n\n.fad.fa-tape:after {\n  content: \"􏓛\";\n}\n\n.fad.fa-tasks:after {\n  content: \"􏂮\";\n}\n\n.fad.fa-tasks-alt:after {\n  content: \"􏠨\";\n}\n\n.fad.fa-taxi:after {\n  content: \"􏆺\";\n}\n\n.fad.fa-teeth:after {\n  content: \"􏘮\";\n}\n\n.fad.fa-teeth-open:after {\n  content: \"􏘯\";\n}\n\n.fad.fa-telescope:after {\n  content: \"􏤾\";\n}\n\n.fad.fa-temperature-down:after {\n  content: \"􏤿\";\n}\n\n.fad.fa-temperature-frigid:after {\n  content: \"􏝨\";\n}\n\n.fad.fa-temperature-high:after {\n  content: \"􏝩\";\n}\n\n.fad.fa-temperature-hot:after {\n  content: \"􏝪\";\n}\n\n.fad.fa-temperature-low:after {\n  content: \"􏝫\";\n}\n\n.fad.fa-temperature-up:after {\n  content: \"􏥀\";\n}\n\n.fad.fa-tenge:after {\n  content: \"􏟗\";\n}\n\n.fad.fa-tennis-ball:after {\n  content: \"􏑞\";\n}\n\n.fad.fa-terminal:after {\n  content: \"􏄠\";\n}\n\n.fad.fa-text:after {\n  content: \"􏢓\";\n}\n\n.fad.fa-text-height:after {\n  content: \"􏀴\";\n}\n\n.fad.fa-text-size:after {\n  content: \"􏢔\";\n}\n\n.fad.fa-text-width:after {\n  content: \"􏀵\";\n}\n\n.fad.fa-th:after {\n  content: \"􏀊\";\n}\n\n.fad.fa-th-large:after {\n  content: \"􏀉\";\n}\n\n.fad.fa-th-list:after {\n  content: \"􏀋\";\n}\n\n.fad.fa-theater-masks:after {\n  content: \"􏘰\";\n}\n\n.fad.fa-thermometer:after {\n  content: \"􏒑\";\n}\n\n.fad.fa-thermometer-empty:after {\n  content: \"􏋋\";\n}\n\n.fad.fa-thermometer-full:after {\n  content: \"􏋇\";\n}\n\n.fad.fa-thermometer-half:after {\n  content: \"􏋉\";\n}\n\n.fad.fa-thermometer-quarter:after {\n  content: \"􏋊\";\n}\n\n.fad.fa-thermometer-three-quarters:after {\n  content: \"􏋈\";\n}\n\n.fad.fa-theta:after {\n  content: \"􏚞\";\n}\n\n.fad.fa-thumbs-down:after {\n  content: \"􏅥\";\n}\n\n.fad.fa-thumbs-up:after {\n  content: \"􏅤\";\n}\n\n.fad.fa-thumbtack:after {\n  content: \"􏂍\";\n}\n\n.fad.fa-thunderstorm:after {\n  content: \"􏝬\";\n}\n\n.fad.fa-thunderstorm-moon:after {\n  content: \"􏝭\";\n}\n\n.fad.fa-thunderstorm-sun:after {\n  content: \"􏝮\";\n}\n\n.fad.fa-ticket:after {\n  content: \"􏅅\";\n}\n\n.fad.fa-ticket-alt:after {\n  content: \"􏏿\";\n}\n\n.fad.fa-tilde:after {\n  content: \"􏚟\";\n}\n\n.fad.fa-times:after {\n  content: \"􏀍\";\n}\n\n.fad.fa-times-circle:after {\n  content: \"􏁗\";\n}\n\n.fad.fa-times-hexagon:after {\n  content: \"􏋮\";\n}\n\n.fad.fa-times-octagon:after {\n  content: \"􏋰\";\n}\n\n.fad.fa-times-square:after {\n  content: \"􏋓\";\n}\n\n.fad.fa-tint:after {\n  content: \"􏁃\";\n}\n\n.fad.fa-tint-slash:after {\n  content: \"􏗇\";\n}\n\n.fad.fa-tire:after {\n  content: \"􏘱\";\n}\n\n.fad.fa-tire-flat:after {\n  content: \"􏘲\";\n}\n\n.fad.fa-tire-pressure-warning:after {\n  content: \"􏘳\";\n}\n\n.fad.fa-tire-rugged:after {\n  content: \"􏘴\";\n}\n\n.fad.fa-tired:after {\n  content: \"􏗈\";\n}\n\n.fad.fa-toggle-off:after {\n  content: \"􏈄\";\n}\n\n.fad.fa-toggle-on:after {\n  content: \"􏈅\";\n}\n\n.fad.fa-toilet:after {\n  content: \"􏟘\";\n}\n\n.fad.fa-toilet-paper:after {\n  content: \"􏜞\";\n}\n\n.fad.fa-toilet-paper-alt:after {\n  content: \"􏜟\";\n}\n\n.fad.fa-toilet-paper-slash:after {\n  content: \"􏥲\";\n}\n\n.fad.fa-tombstone:after {\n  content: \"􏜠\";\n}\n\n.fad.fa-tombstone-alt:after {\n  content: \"􏜡\";\n}\n\n.fad.fa-toolbox:after {\n  content: \"􏕒\";\n}\n\n.fad.fa-tools:after {\n  content: \"􏟙\";\n}\n\n.fad.fa-tooth:after {\n  content: \"􏗉\";\n}\n\n.fad.fa-toothbrush:after {\n  content: \"􏘵\";\n}\n\n.fad.fa-torah:after {\n  content: \"􏚠\";\n}\n\n.fad.fa-torii-gate:after {\n  content: \"􏚡\";\n}\n\n.fad.fa-tornado:after {\n  content: \"􏝯\";\n}\n\n.fad.fa-tractor:after {\n  content: \"􏜢\";\n}\n\n.fad.fa-trademark:after {\n  content: \"􏉜\";\n}\n\n.fad.fa-traffic-cone:after {\n  content: \"􏘶\";\n}\n\n.fad.fa-traffic-light:after {\n  content: \"􏘷\";\n}\n\n.fad.fa-traffic-light-go:after {\n  content: \"􏘸\";\n}\n\n.fad.fa-traffic-light-slow:after {\n  content: \"􏘹\";\n}\n\n.fad.fa-traffic-light-stop:after {\n  content: \"􏘺\";\n}\n\n.fad.fa-trailer:after {\n  content: \"􏥁\";\n}\n\n.fad.fa-train:after {\n  content: \"􏈸\";\n}\n\n.fad.fa-tram:after {\n  content: \"􏟚\";\n}\n\n.fad.fa-transgender:after {\n  content: \"􏈤\";\n}\n\n.fad.fa-transgender-alt:after {\n  content: \"􏈥\";\n}\n\n.fad.fa-transporter:after {\n  content: \"􏥂\";\n}\n\n.fad.fa-transporter-1:after {\n  content: \"􏥃\";\n}\n\n.fad.fa-transporter-2:after {\n  content: \"􏥄\";\n}\n\n.fad.fa-transporter-3:after {\n  content: \"􏥅\";\n}\n\n.fad.fa-transporter-empty:after {\n  content: \"􏥆\";\n}\n\n.fad.fa-trash:after {\n  content: \"􏇸\";\n}\n\n.fad.fa-trash-alt:after {\n  content: \"􏋭\";\n}\n\n.fad.fa-trash-restore:after {\n  content: \"􏠩\";\n}\n\n.fad.fa-trash-restore-alt:after {\n  content: \"􏠪\";\n}\n\n.fad.fa-trash-undo:after {\n  content: \"􏢕\";\n}\n\n.fad.fa-trash-undo-alt:after {\n  content: \"􏢖\";\n}\n\n.fad.fa-treasure-chest:after {\n  content: \"􏜣\";\n}\n\n.fad.fa-tree:after {\n  content: \"􏆻\";\n}\n\n.fad.fa-tree-alt:after {\n  content: \"􏐀\";\n}\n\n.fad.fa-tree-christmas:after {\n  content: \"􏟛\";\n}\n\n.fad.fa-tree-decorated:after {\n  content: \"􏟜\";\n}\n\n.fad.fa-tree-large:after {\n  content: \"􏟝\";\n}\n\n.fad.fa-tree-palm:after {\n  content: \"􏠫\";\n}\n\n.fad.fa-trees:after {\n  content: \"􏜤\";\n}\n\n.fad.fa-triangle:after {\n  content: \"􏋬\";\n}\n\n.fad.fa-triangle-music:after {\n  content: \"􏣢\";\n}\n\n.fad.fa-trophy:after {\n  content: \"􏂑\";\n}\n\n.fad.fa-trophy-alt:after {\n  content: \"􏋫\";\n}\n\n.fad.fa-truck:after {\n  content: \"􏃑\";\n}\n\n.fad.fa-truck-container:after {\n  content: \"􏓜\";\n}\n\n.fad.fa-truck-couch:after {\n  content: \"􏓝\";\n}\n\n.fad.fa-truck-loading:after {\n  content: \"􏓞\";\n}\n\n.fad.fa-truck-monster:after {\n  content: \"􏘻\";\n}\n\n.fad.fa-truck-moving:after {\n  content: \"􏓟\";\n}\n\n.fad.fa-truck-pickup:after {\n  content: \"􏘼\";\n}\n\n.fad.fa-truck-plow:after {\n  content: \"􏟞\";\n}\n\n.fad.fa-truck-ramp:after {\n  content: \"􏓠\";\n}\n\n.fad.fa-trumpet:after {\n  content: \"􏣣\";\n}\n\n.fad.fa-tshirt:after {\n  content: \"􏕓\";\n}\n\n.fad.fa-tty:after {\n  content: \"􏇤\";\n}\n\n.fad.fa-turkey:after {\n  content: \"􏜥\";\n}\n\n.fad.fa-turntable:after {\n  content: \"􏣤\";\n}\n\n.fad.fa-turtle:after {\n  content: \"􏜦\";\n}\n\n.fad.fa-tv:after {\n  content: \"􏉬\";\n}\n\n.fad.fa-tv-alt:after {\n  content: \"􏣥\";\n}\n\n.fad.fa-tv-music:after {\n  content: \"􏣦\";\n}\n\n.fad.fa-tv-retro:after {\n  content: \"􏐁\";\n}\n\n.fad.fa-typewriter:after {\n  content: \"􏣧\";\n}\n\n.fad.fa-ufo:after {\n  content: \"􏥇\";\n}\n\n.fad.fa-ufo-beam:after {\n  content: \"􏥈\";\n}\n\n.fad.fa-umbrella:after {\n  content: \"􏃩\";\n}\n\n.fad.fa-umbrella-beach:after {\n  content: \"􏗊\";\n}\n\n.fad.fa-underline:after {\n  content: \"􏃍\";\n}\n\n.fad.fa-undo:after {\n  content: \"􏃢\";\n}\n\n.fad.fa-undo-alt:after {\n  content: \"􏋪\";\n}\n\n.fad.fa-unicorn:after {\n  content: \"􏜧\";\n}\n\n.fad.fa-union:after {\n  content: \"􏚢\";\n}\n\n.fad.fa-universal-access:after {\n  content: \"􏊚\";\n}\n\n.fad.fa-university:after {\n  content: \"􏆜\";\n}\n\n.fad.fa-unlink:after {\n  content: \"􏄧\";\n}\n\n.fad.fa-unlock:after {\n  content: \"􏂜\";\n}\n\n.fad.fa-unlock-alt:after {\n  content: \"􏄾\";\n}\n\n.fad.fa-upload:after {\n  content: \"􏂓\";\n}\n\n.fad.fa-usb-drive:after {\n  content: \"􏣩\";\n}\n\n.fad.fa-usd-circle:after {\n  content: \"􏋨\";\n}\n\n.fad.fa-usd-square:after {\n  content: \"􏋩\";\n}\n\n.fad.fa-user:after {\n  content: \"􏀇\";\n}\n\n.fad.fa-user-alien:after {\n  content: \"􏥊\";\n}\n\n.fad.fa-user-alt:after {\n  content: \"􏐆\";\n}\n\n.fad.fa-user-alt-slash:after {\n  content: \"􏓺\";\n}\n\n.fad.fa-user-astronaut:after {\n  content: \"􏓻\";\n}\n\n.fad.fa-user-chart:after {\n  content: \"􏚣\";\n}\n\n.fad.fa-user-check:after {\n  content: \"􏓼\";\n}\n\n.fad.fa-user-circle:after {\n  content: \"􏊽\";\n}\n\n.fad.fa-user-clock:after {\n  content: \"􏓽\";\n}\n\n.fad.fa-user-cog:after {\n  content: \"􏓾\";\n}\n\n.fad.fa-user-cowboy:after {\n  content: \"􏣪\";\n}\n\n.fad.fa-user-crown:after {\n  content: \"􏚤\";\n}\n\n.fad.fa-user-edit:after {\n  content: \"􏓿\";\n}\n\n.fad.fa-user-friends:after {\n  content: \"􏔀\";\n}\n\n.fad.fa-user-graduate:after {\n  content: \"􏔁\";\n}\n\n.fad.fa-user-hard-hat:after {\n  content: \"􏠬\";\n}\n\n.fad.fa-user-headset:after {\n  content: \"􏠭\";\n}\n\n.fad.fa-user-injured:after {\n  content: \"􏜨\";\n}\n\n.fad.fa-user-lock:after {\n  content: \"􏔂\";\n}\n\n.fad.fa-user-md:after {\n  content: \"􏃰\";\n}\n\n.fad.fa-user-md-chat:after {\n  content: \"􏠮\";\n}\n\n.fad.fa-user-minus:after {\n  content: \"􏔃\";\n}\n\n.fad.fa-user-music:after {\n  content: \"􏣫\";\n}\n\n.fad.fa-user-ninja:after {\n  content: \"􏔄\";\n}\n\n.fad.fa-user-nurse:after {\n  content: \"􏠯\";\n}\n\n.fad.fa-user-plus:after {\n  content: \"􏈴\";\n}\n\n.fad.fa-user-robot:after {\n  content: \"􏥋\";\n}\n\n.fad.fa-user-secret:after {\n  content: \"􏈛\";\n}\n\n.fad.fa-user-shield:after {\n  content: \"􏔅\";\n}\n\n.fad.fa-user-slash:after {\n  content: \"􏔆\";\n}\n\n.fad.fa-user-tag:after {\n  content: \"􏔇\";\n}\n\n.fad.fa-user-tie:after {\n  content: \"􏔈\";\n}\n\n.fad.fa-user-times:after {\n  content: \"􏈵\";\n}\n\n.fad.fa-user-unlock:after {\n  content: \"􏥘\";\n}\n\n.fad.fa-user-visor:after {\n  content: \"􏥌\";\n}\n\n.fad.fa-users:after {\n  content: \"􏃀\";\n}\n\n.fad.fa-users-class:after {\n  content: \"􏘽\";\n}\n\n.fad.fa-users-cog:after {\n  content: \"􏔉\";\n}\n\n.fad.fa-users-crown:after {\n  content: \"􏚥\";\n}\n\n.fad.fa-users-medical:after {\n  content: \"􏠰\";\n}\n\n.fad.fa-users-slash:after {\n  content: \"􏥳\";\n}\n\n.fad.fa-utensil-fork:after {\n  content: \"􏋣\";\n}\n\n.fad.fa-utensil-knife:after {\n  content: \"􏋤\";\n}\n\n.fad.fa-utensil-spoon:after {\n  content: \"􏋥\";\n}\n\n.fad.fa-utensils:after {\n  content: \"􏋧\";\n}\n\n.fad.fa-utensils-alt:after {\n  content: \"􏋦\";\n}\n\n.fad.fa-vacuum:after {\n  content: \"􏥍\";\n}\n\n.fad.fa-vacuum-robot:after {\n  content: \"􏥎\";\n}\n\n.fad.fa-value-absolute:after {\n  content: \"􏚦\";\n}\n\n.fad.fa-vector-square:after {\n  content: \"􏗋\";\n}\n\n.fad.fa-venus:after {\n  content: \"􏈡\";\n}\n\n.fad.fa-venus-double:after {\n  content: \"􏈦\";\n}\n\n.fad.fa-venus-mars:after {\n  content: \"􏈨\";\n}\n\n.fad.fa-vhs:after {\n  content: \"􏣬\";\n}\n\n.fad.fa-vial:after {\n  content: \"􏒒\";\n}\n\n.fad.fa-vials:after {\n  content: \"􏒓\";\n}\n\n.fad.fa-video:after {\n  content: \"􏀽\";\n}\n\n.fad.fa-video-plus:after {\n  content: \"􏓡\";\n}\n\n.fad.fa-video-slash:after {\n  content: \"􏓢\";\n}\n\n.fad.fa-vihara:after {\n  content: \"􏚧\";\n}\n\n.fad.fa-violin:after {\n  content: \"􏣭\";\n}\n\n.fad.fa-virus:after {\n  content: \"􏥴\";\n}\n\n.fad.fa-virus-slash:after {\n  content: \"􏥵\";\n}\n\n.fad.fa-viruses:after {\n  content: \"􏥶\";\n}\n\n.fad.fa-voicemail:after {\n  content: \"􏢗\";\n}\n\n.fad.fa-volcano:after {\n  content: \"􏝰\";\n}\n\n.fad.fa-volleyball-ball:after {\n  content: \"􏑟\";\n}\n\n.fad.fa-volume:after {\n  content: \"􏚨\";\n}\n\n.fad.fa-volume-down:after {\n  content: \"􏀧\";\n}\n\n.fad.fa-volume-mute:after {\n  content: \"􏚩\";\n}\n\n.fad.fa-volume-off:after {\n  content: \"􏀦\";\n}\n\n.fad.fa-volume-slash:after {\n  content: \"􏋢\";\n}\n\n.fad.fa-volume-up:after {\n  content: \"􏀨\";\n}\n\n.fad.fa-vote-nay:after {\n  content: \"􏝱\";\n}\n\n.fad.fa-vote-yea:after {\n  content: \"􏝲\";\n}\n\n.fad.fa-vr-cardboard:after {\n  content: \"􏜩\";\n}\n\n.fad.fa-wagon-covered:after {\n  content: \"􏣮\";\n}\n\n.fad.fa-walker:after {\n  content: \"􏠱\";\n}\n\n.fad.fa-walkie-talkie:after {\n  content: \"􏣯\";\n}\n\n.fad.fa-walking:after {\n  content: \"􏕔\";\n}\n\n.fad.fa-wallet:after {\n  content: \"􏕕\";\n}\n\n.fad.fa-wand:after {\n  content: \"􏜪\";\n}\n\n.fad.fa-wand-magic:after {\n  content: \"􏜫\";\n}\n\n.fad.fa-warehouse:after {\n  content: \"􏒔\";\n}\n\n.fad.fa-warehouse-alt:after {\n  content: \"􏒕\";\n}\n\n.fad.fa-washer:after {\n  content: \"􏢘\";\n}\n\n.fad.fa-watch:after {\n  content: \"􏋡\";\n}\n\n.fad.fa-watch-calculator:after {\n  content: \"􏣰\";\n}\n\n.fad.fa-watch-fitness:after {\n  content: \"􏘾\";\n}\n\n.fad.fa-water:after {\n  content: \"􏝳\";\n}\n\n.fad.fa-water-lower:after {\n  content: \"􏝴\";\n}\n\n.fad.fa-water-rise:after {\n  content: \"􏝵\";\n}\n\n.fad.fa-wave-sine:after {\n  content: \"􏢙\";\n}\n\n.fad.fa-wave-square:after {\n  content: \"􏠾\";\n}\n\n.fad.fa-wave-triangle:after {\n  content: \"􏢚\";\n}\n\n.fad.fa-waveform:after {\n  content: \"􏣱\";\n}\n\n.fad.fa-waveform-path:after {\n  content: \"􏣲\";\n}\n\n.fad.fa-webcam:after {\n  content: \"􏠲\";\n}\n\n.fad.fa-webcam-slash:after {\n  content: \"􏠳\";\n}\n\n.fad.fa-weight:after {\n  content: \"􏒖\";\n}\n\n.fad.fa-weight-hanging:after {\n  content: \"􏗍\";\n}\n\n.fad.fa-whale:after {\n  content: \"􏜬\";\n}\n\n.fad.fa-wheat:after {\n  content: \"􏜭\";\n}\n\n.fad.fa-wheelchair:after {\n  content: \"􏆓\";\n}\n\n.fad.fa-whistle:after {\n  content: \"􏑠\";\n}\n\n.fad.fa-wifi:after {\n  content: \"􏇫\";\n}\n\n.fad.fa-wifi-1:after {\n  content: \"􏚪\";\n}\n\n.fad.fa-wifi-2:after {\n  content: \"􏚫\";\n}\n\n.fad.fa-wifi-slash:after {\n  content: \"􏚬\";\n}\n\n.fad.fa-wind:after {\n  content: \"􏜮\";\n}\n\n.fad.fa-wind-turbine:after {\n  content: \"􏢛\";\n}\n\n.fad.fa-wind-warning:after {\n  content: \"􏝶\";\n}\n\n.fad.fa-window:after {\n  content: \"􏐎\";\n}\n\n.fad.fa-window-alt:after {\n  content: \"􏐏\";\n}\n\n.fad.fa-window-close:after {\n  content: \"􏐐\";\n}\n\n.fad.fa-window-frame:after {\n  content: \"􏥏\";\n}\n\n.fad.fa-window-frame-open:after {\n  content: \"􏥐\";\n}\n\n.fad.fa-window-maximize:after {\n  content: \"􏋐\";\n}\n\n.fad.fa-window-minimize:after {\n  content: \"􏋑\";\n}\n\n.fad.fa-window-restore:after {\n  content: \"􏋒\";\n}\n\n.fad.fa-windsock:after {\n  content: \"􏝷\";\n}\n\n.fad.fa-wine-bottle:after {\n  content: \"􏜯\";\n}\n\n.fad.fa-wine-glass:after {\n  content: \"􏓣\";\n}\n\n.fad.fa-wine-glass-alt:after {\n  content: \"􏗎\";\n}\n\n.fad.fa-won-sign:after {\n  content: \"􏅙\";\n}\n\n.fad.fa-wreath:after {\n  content: \"􏟢\";\n}\n\n.fad.fa-wrench:after {\n  content: \"􏂭\";\n}\n\n.fad.fa-x-ray:after {\n  content: \"􏒗\";\n}\n\n.fad.fa-yen-sign:after {\n  content: \"􏅗\";\n}\n\n.fad.fa-yin-yang:after {\n  content: \"􏚭\";\n}\n\n/*!\n * Font Awesome Pro 5.13.0 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license (Commercial License)\n */\n.fa, .fas, .far, .fal, .fad, .fab {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  line-height: 1;\n}\n\n@font-face {\n  font-family: \"Font Awesome 5 Pro\";\n  font-style: normal;\n  font-weight: 300;\n  font-display: block;\n  src: url(\"/font/font-awe/webfonts/fa-light-300.eot\");\n  src: url(\"/font/font-awe/webfonts/fa-light-300.eot?#iefix\") format(\"embedded-opentype\"), url(\"/font/font-awe/webfonts/fa-light-300.woff2\") format(\"woff2\"), url(\"/font/font-awe/webfonts/fa-light-300.woff\") format(\"woff\"), url(\"/font/font-awe/webfonts/fa-light-300.ttf\") format(\"truetype\"), url(\"/font/font-awe/webfonts/fa-light-300.svg#fontawesome\") format(\"svg\");\n}\n.fal {\n  font-family: \"Font Awesome 5 Pro\";\n  font-weight: 300;\n}\n\n/*!\n * Font Awesome Pro 5.13.0 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license (Commercial License)\n */\n.fa, .fas, .far, .fal, .fad, .fab {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  line-height: 1;\n}\n\n@font-face {\n  font-family: \"Font Awesome 5 Pro\";\n  font-style: normal;\n  font-weight: 400;\n  font-display: block;\n  src: url(\"/font/font-awe/webfonts/fa-regular-400.eot\");\n  src: url(\"/font/font-awe/webfonts/fa-regular-400.eot?#iefix\") format(\"embedded-opentype\"), url(\"/font/font-awe/webfonts/fa-regular-400.woff2\") format(\"woff2\"), url(\"/font/font-awe/webfonts/fa-regular-400.woff\") format(\"woff\"), url(\"/font/font-awe/webfonts/fa-regular-400.ttf\") format(\"truetype\"), url(\"/font/font-awe/webfonts/fa-regular-400.svg#fontawesome\") format(\"svg\");\n}\n.far {\n  font-family: \"Font Awesome 5 Pro\";\n  font-weight: 400;\n}\n\n/*!\n * Font Awesome Pro 5.13.0 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license (Commercial License)\n */\n.fa, .fas, .far, .fal, .fad, .fab {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  display: inline-block;\n  font-style: normal;\n  font-variant: normal;\n  text-rendering: auto;\n  line-height: 1;\n}\n\n@font-face {\n  font-family: \"Font Awesome 5 Pro\";\n  font-style: normal;\n  font-weight: 900;\n  font-display: block;\n  src: url(\"/font/font-awe/webfonts/fa-solid-900.eot\");\n  src: url(\"/font/font-awe/webfonts/fa-solid-900.eot?#iefix\") format(\"embedded-opentype\"), url(\"/font/font-awe/webfonts/fa-solid-900.woff2\") format(\"woff2\"), url(\"/font/font-awe/webfonts/fa-solid-900.woff\") format(\"woff\"), url(\"/font/font-awe/webfonts/fa-solid-900.ttf\") format(\"truetype\"), url(\"/font/font-awe/webfonts/fa-solid-900.svg#fontawesome\") format(\"svg\");\n}\n.fa,\n.fas {\n  font-family: \"Font Awesome 5 Pro\";\n  font-weight: 900;\n}\n\n.dropdown-toggle ~ ul {\n  display: none;\n}\n.dropdown-toggle.open ~ ul {\n  display: block;\n}\n\n.AppComponent {\n  overflow: hidden;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/react/client/footer/footer.scss":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--6-2!./src/scss/react/client/footer/footer.scss ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.wrapper-footer-page {\n  text-align: center;\n}\n.wrapper-footer-page .head-footer {\n  padding: 60px 60px 15px 60px;\n}\n@media only screen and (max-width: 768px) {\n  .wrapper-footer-page .head-footer {\n    padding: 20px 0 15px 0;\n  }\n}\n.wrapper-footer-page .head-footer .footer-title {\n  font-size: 26px;\n  line-height: 45px;\n  font-family: \"Archivo-Medium\";\n}\n.wrapper-footer-page .head-footer .footer-title .footer-go-to-chat {\n  cursor: pointer;\n}\n.wrapper-footer-page .head-footer .des-footer {\n  margin: 0 auto;\n  padding: 20px;\n  max-width: 600px;\n}\n.wrapper-footer-page .option-contact {\n  display: block;\n  max-width: 900px;\n  margin: 0 auto;\n}\n.wrapper-footer-page .option-contact:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.wrapper-footer-page .option-contact .item-advisory {\n  padding: 15px;\n  display: block;\n  float: left;\n  position: relative;\n}\n@media only screen and (max-width: 768px) {\n  .wrapper-footer-page .option-contact .item-advisory {\n    float: none;\n    text-align: left;\n  }\n}\n.wrapper-footer-page .option-contact .item-advisory:nth-child(1) {\n  width: 40%;\n}\n@media only screen and (max-width: 768px) {\n  .wrapper-footer-page .option-contact .item-advisory:nth-child(1) {\n    width: 100%;\n  }\n}\n.wrapper-footer-page .option-contact .item-advisory:nth-child(2) {\n  width: 30%;\n}\n@media only screen and (max-width: 768px) {\n  .wrapper-footer-page .option-contact .item-advisory:nth-child(2) {\n    width: 100%;\n  }\n}\n.wrapper-footer-page .option-contact .item-advisory:nth-child(3) {\n  width: 30%;\n}\n@media only screen and (max-width: 768px) {\n  .wrapper-footer-page .option-contact .item-advisory:nth-child(3) {\n    width: 100%;\n  }\n}\n.wrapper-footer-page .option-contact .item-advisory .hero-icon {\n  display: inline-block;\n  font-size: 32px;\n  vertical-align: middle;\n  color: #673ab7;\n  opacity: 0.7;\n}\n.wrapper-footer-page .option-contact .item-advisory .option-contact-content {\n  vertical-align: middle;\n  display: inline-block;\n  padding-left: 10px;\n  text-align: left;\n  font-size: 13px;\n}\n.wrapper-footer-page .option-contact .item-advisory .option-contact-content .type a {\n  color: #adb5bd;\n}\n.wrapper-footer-page .option-contact .item-advisory .option-contact-content .link {\n  color: #000;\n}\n.wrapper-footer-page .option-contact .item-advisory .option-contact-content .link:hover {\n  color: #495057;\n}\n.wrapper-footer-page .component-footer-content {\n  text-align: left;\n  max-width: 1100px;\n  margin: 0 auto;\n  border-top: 1px solid #6c757d;\n  padding-top: 20px;\n}\n.wrapper-footer-page .component-footer-content:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.wrapper-footer-page .component-footer-content .about-us {\n  width: 30%;\n}\n@media only screen and (max-width: 1199px) {\n  .wrapper-footer-page .component-footer-content .about-us {\n    width: 50%;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .wrapper-footer-page .component-footer-content .about-us {\n    width: 100%;\n    float: none;\n  }\n}\n.wrapper-footer-page .component-footer-content .service-us {\n  width: 30%;\n}\n@media only screen and (max-width: 1199px) {\n  .wrapper-footer-page .component-footer-content .service-us {\n    width: 50%;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .wrapper-footer-page .component-footer-content .service-us {\n    width: 100%;\n    float: none;\n  }\n}\n.wrapper-footer-page .component-footer-content .map-us {\n  width: 40%;\n  float: left;\n  min-width: 300px;\n  height: 100%;\n  height: 250px;\n  position: relative;\n  overflow: hidden;\n}\n@media only screen and (max-width: 1199px) {\n  .wrapper-footer-page .component-footer-content .map-us {\n    width: 100%;\n    float: none;\n  }\n}\n.wrapper-footer-page .component-footer-content .map-us .address_detail_map {\n  font-size: 11px;\n  color: #495057;\n}\n.wrapper-footer-page .component-footer-content .map-us .main_color {\n  font-size: 13px;\n  color: #0d47a1;\n}\n.wrapper-footer-page .component-footer-content .about-us, .wrapper-footer-page .component-footer-content .service-us {\n  padding: 15px;\n  line-height: 1;\n  vertical-align: middle;\n  float: left;\n  font-family: \"Archivo-Medium\";\n}\n.wrapper-footer-page .component-footer-content .about-us .company-name, .wrapper-footer-page .component-footer-content .about-us .tax-code, .wrapper-footer-page .component-footer-content .about-us .tax-code-date, .wrapper-footer-page .component-footer-content .about-us .address, .wrapper-footer-page .component-footer-content .about-us .phone, .wrapper-footer-page .component-footer-content .about-us .email,\n.wrapper-footer-page .component-footer-content .about-us .seo-standard, .wrapper-footer-page .component-footer-content .about-us .chat-realtime, .wrapper-footer-page .component-footer-content .about-us .recruit, .wrapper-footer-page .component-footer-content .about-us .news, .wrapper-footer-page .component-footer-content .about-us .marketing-sale-online, .wrapper-footer-page .component-footer-content .about-us .responsive, .wrapper-footer-page .component-footer-content .service-us .company-name, .wrapper-footer-page .component-footer-content .service-us .tax-code, .wrapper-footer-page .component-footer-content .service-us .tax-code-date, .wrapper-footer-page .component-footer-content .service-us .address, .wrapper-footer-page .component-footer-content .service-us .phone, .wrapper-footer-page .component-footer-content .service-us .email,\n.wrapper-footer-page .component-footer-content .service-us .seo-standard, .wrapper-footer-page .component-footer-content .service-us .chat-realtime, .wrapper-footer-page .component-footer-content .service-us .recruit, .wrapper-footer-page .component-footer-content .service-us .news, .wrapper-footer-page .component-footer-content .service-us .marketing-sale-online, .wrapper-footer-page .component-footer-content .service-us .responsive {\n  margin-bottom: 10px;\n  cursor: pointer;\n}\n.wrapper-footer-page .component-footer-content .about-us .company-name:hover span, .wrapper-footer-page .component-footer-content .about-us .tax-code:hover span, .wrapper-footer-page .component-footer-content .about-us .tax-code-date:hover span, .wrapper-footer-page .component-footer-content .about-us .address:hover span, .wrapper-footer-page .component-footer-content .about-us .phone:hover span, .wrapper-footer-page .component-footer-content .about-us .email:hover span,\n.wrapper-footer-page .component-footer-content .about-us .seo-standard:hover span, .wrapper-footer-page .component-footer-content .about-us .chat-realtime:hover span, .wrapper-footer-page .component-footer-content .about-us .recruit:hover span, .wrapper-footer-page .component-footer-content .about-us .news:hover span, .wrapper-footer-page .component-footer-content .about-us .marketing-sale-online:hover span, .wrapper-footer-page .component-footer-content .about-us .responsive:hover span, .wrapper-footer-page .component-footer-content .service-us .company-name:hover span, .wrapper-footer-page .component-footer-content .service-us .tax-code:hover span, .wrapper-footer-page .component-footer-content .service-us .tax-code-date:hover span, .wrapper-footer-page .component-footer-content .service-us .address:hover span, .wrapper-footer-page .component-footer-content .service-us .phone:hover span, .wrapper-footer-page .component-footer-content .service-us .email:hover span,\n.wrapper-footer-page .component-footer-content .service-us .seo-standard:hover span, .wrapper-footer-page .component-footer-content .service-us .chat-realtime:hover span, .wrapper-footer-page .component-footer-content .service-us .recruit:hover span, .wrapper-footer-page .component-footer-content .service-us .news:hover span, .wrapper-footer-page .component-footer-content .service-us .marketing-sale-online:hover span, .wrapper-footer-page .component-footer-content .service-us .responsive:hover span {\n  color: #adb5bd;\n}\n.wrapper-footer-page .component-footer-content .about-us .company-name:hover a, .wrapper-footer-page .component-footer-content .about-us .tax-code:hover a, .wrapper-footer-page .component-footer-content .about-us .tax-code-date:hover a, .wrapper-footer-page .component-footer-content .about-us .address:hover a, .wrapper-footer-page .component-footer-content .about-us .phone:hover a, .wrapper-footer-page .component-footer-content .about-us .email:hover a,\n.wrapper-footer-page .component-footer-content .about-us .seo-standard:hover a, .wrapper-footer-page .component-footer-content .about-us .chat-realtime:hover a, .wrapper-footer-page .component-footer-content .about-us .recruit:hover a, .wrapper-footer-page .component-footer-content .about-us .news:hover a, .wrapper-footer-page .component-footer-content .about-us .marketing-sale-online:hover a, .wrapper-footer-page .component-footer-content .about-us .responsive:hover a, .wrapper-footer-page .component-footer-content .service-us .company-name:hover a, .wrapper-footer-page .component-footer-content .service-us .tax-code:hover a, .wrapper-footer-page .component-footer-content .service-us .tax-code-date:hover a, .wrapper-footer-page .component-footer-content .service-us .address:hover a, .wrapper-footer-page .component-footer-content .service-us .phone:hover a, .wrapper-footer-page .component-footer-content .service-us .email:hover a,\n.wrapper-footer-page .component-footer-content .service-us .seo-standard:hover a, .wrapper-footer-page .component-footer-content .service-us .chat-realtime:hover a, .wrapper-footer-page .component-footer-content .service-us .recruit:hover a, .wrapper-footer-page .component-footer-content .service-us .news:hover a, .wrapper-footer-page .component-footer-content .service-us .marketing-sale-online:hover a, .wrapper-footer-page .component-footer-content .service-us .responsive:hover a {\n  color: #158765;\n}\n.wrapper-footer-page .component-footer-content .about-us .company-name:hover .hero-icon, .wrapper-footer-page .component-footer-content .about-us .tax-code:hover .hero-icon, .wrapper-footer-page .component-footer-content .about-us .tax-code-date:hover .hero-icon, .wrapper-footer-page .component-footer-content .about-us .address:hover .hero-icon, .wrapper-footer-page .component-footer-content .about-us .phone:hover .hero-icon, .wrapper-footer-page .component-footer-content .about-us .email:hover .hero-icon,\n.wrapper-footer-page .component-footer-content .about-us .seo-standard:hover .hero-icon, .wrapper-footer-page .component-footer-content .about-us .chat-realtime:hover .hero-icon, .wrapper-footer-page .component-footer-content .about-us .recruit:hover .hero-icon, .wrapper-footer-page .component-footer-content .about-us .news:hover .hero-icon, .wrapper-footer-page .component-footer-content .about-us .marketing-sale-online:hover .hero-icon, .wrapper-footer-page .component-footer-content .about-us .responsive:hover .hero-icon, .wrapper-footer-page .component-footer-content .service-us .company-name:hover .hero-icon, .wrapper-footer-page .component-footer-content .service-us .tax-code:hover .hero-icon, .wrapper-footer-page .component-footer-content .service-us .tax-code-date:hover .hero-icon, .wrapper-footer-page .component-footer-content .service-us .address:hover .hero-icon, .wrapper-footer-page .component-footer-content .service-us .phone:hover .hero-icon, .wrapper-footer-page .component-footer-content .service-us .email:hover .hero-icon,\n.wrapper-footer-page .component-footer-content .service-us .seo-standard:hover .hero-icon, .wrapper-footer-page .component-footer-content .service-us .chat-realtime:hover .hero-icon, .wrapper-footer-page .component-footer-content .service-us .recruit:hover .hero-icon, .wrapper-footer-page .component-footer-content .service-us .news:hover .hero-icon, .wrapper-footer-page .component-footer-content .service-us .marketing-sale-online:hover .hero-icon, .wrapper-footer-page .component-footer-content .service-us .responsive:hover .hero-icon {\n  color: #9c27b0;\n}\n.wrapper-footer-page .component-footer-content .about-us .title, .wrapper-footer-page .component-footer-content .service-us .title {\n  font-size: 21px;\n  color: #0d47a1;\n  text-transform: capitalize;\n  padding-bottom: 15px;\n  margin-bottom: 0;\n}\n.wrapper-footer-page .component-footer-content .about-us span, .wrapper-footer-page .component-footer-content .about-us a, .wrapper-footer-page .component-footer-content .service-us span, .wrapper-footer-page .component-footer-content .service-us a {\n  vertical-align: middle;\n  font-size: 13px;\n  color: #495057;\n}\n.wrapper-footer-page .component-footer-content .about-us .hero-icon, .wrapper-footer-page .component-footer-content .service-us .hero-icon {\n  width: 20px;\n  margin-right: 10px;\n  vertical-align: middle;\n  font-size: 24px;\n  color: #0d47a1;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/react/client/header/header.scss":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--6-2!./src/scss/react/client/header/header.scss ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.component-header {\n  padding: 0;\n  width: 100%;\n  position: relative;\n}\n.component-header.wrapper-header {\n  padding: 0;\n}\n.component-header.wrapper-header:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-header.wrapper-header .component-logo {\n  display: block;\n  float: left;\n}\n.component-header.wrapper-header-home-page {\n  padding: 30px 30px 15px 30px;\n}\n@media only screen and (max-width: 768px) {\n  .component-header.wrapper-header-home-page {\n    padding: 30px 0 15px 0;\n  }\n}\n.component-header.wrapper-header-home-page .button-click-interactive {\n  text-align: left;\n  margin-bottom: 30px;\n}\n@media only screen and (max-width: 768px) {\n  .component-header.wrapper-header-home-page .button-click-interactive {\n    text-align: center;\n  }\n}\n.component-header.wrapper-header-home-page .des-create-explore {\n  animation-delay: 0.8s;\n  animation-name: fadeIn;\n  margin-top: 70px;\n  font-size: 75px;\n  line-height: 1.04;\n  letter-spacing: -0.01em;\n  color: #020549;\n  margin-bottom: 30px;\n}\n@media only screen and (max-width: 1199px) {\n  .component-header.wrapper-header-home-page .des-create-explore {\n    font-size: 45px;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .component-header.wrapper-header-home-page .des-create-explore {\n    text-align: center;\n    padding: 0 20%;\n  }\n}\n@media only screen and (max-width: 575px) {\n  .component-header.wrapper-header-home-page .des-create-explore {\n    padding: 0 5%;\n    font-size: 35px;\n    margin-top: 60px;\n  }\n}\n.component-header.wrapper-header-home-page .des-create-explore .decor-element {\n  position: absolute;\n  top: 10%;\n  right: 20%;\n}\n.component-header.wrapper-header-home-page .des-create-explore .decor-element .polygon-svg-rotate {\n  width: 176px;\n}\n@media only screen and (max-width: 1199px) {\n  .component-header.wrapper-header-home-page .des-create-explore .decor-element .polygon-svg-rotate {\n    width: 100px;\n  }\n}\n@media only screen and (max-width: 575px) {\n  .component-header.wrapper-header-home-page .des-create-explore .decor-element .polygon-svg-rotate {\n    width: 70px;\n  }\n}\n@media only screen and (max-width: 1320px) {\n  .component-header.wrapper-header-home-page .des-create-explore .decor-element {\n    right: 15%;\n  }\n}\n@media only screen and (max-width: 575px) {\n  .component-header.wrapper-header-home-page .des-create-explore .decor-element {\n    right: 5%;\n  }\n}\n.component-header.wrapper-header-home-page .btn-create-service {\n  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);\n  color: #ffffff;\n  background-color: #28a745;\n  border-color: #28a745;\n  padding: 14px 40px;\n  border-radius: 60px;\n  font-size: 18px;\n  text-transform: capitalize;\n  font-family: \"Muli\";\n}\n@media only screen and (max-width: 575px) {\n  .component-header.wrapper-header-home-page .btn-create-service {\n    padding: 12px 30px;\n    font-size: 16px;\n  }\n}\n.component-header.wrapper-header-home-page .link-create-explore {\n  padding: 14px 20px;\n  color: #fd7e14;\n  font-family: \"Muli\";\n}\n.component-header.wrapper-header-home-page .link-create-explore:hover {\n  color: #28a745;\n  text-decoration: underline;\n}\n@media only screen and (max-width: 575px) {\n  .component-header.wrapper-header-home-page .link-create-explore {\n    font-size: 16px;\n  }\n}\n.component-header:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-header .logo {\n  font-family: \"Muli\";\n  font-size: 20px;\n  vertical-align: middle;\n  padding: 15px;\n}\n.component-header .logo a {\n  font-weight: 900;\n  color: #212529;\n  display: block;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/react/client/header/logo.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--6-2!./src/scss/react/client/header/logo.scss ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.component-logo .svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1.5em;\n  overflow: visible;\n}\n.component-logo .svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.component-logo .svg-inline--fa.fa-w-10 {\n  width: 0.8em;\n}\n.component-logo .svg-inline--fa .fa-secondary {\n  fill: #d63384;\n}\n.component-logo .svg-inline--fa .fa-primary {\n  fill: #fd7e14;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/react/client/header/menu-full.scss":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--6-2!./src/scss/react/client/header/menu-full.scss ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.component-button-hambeger {\n  position: absolute;\n  top: 30%;\n  right: 15px;\n}\n.component-button-hambeger svg {\n  width: 25px;\n  height: auto;\n}\n.component-button-hambeger svg path:first-child {\n  fill: #0542a2;\n  opacity: 0.4;\n}\n.component-button-hambeger svg path:last-child {\n  fill: #0542a2;\n  opacity: 1;\n}\n\n.component-menu.menu-full {\n  /*********** <---- MENU FULL ***********/\n  float: right;\n}\n.component-menu.menu-full ul.wrapper-link {\n  margin: 0;\n  padding: 15px 20px 0;\n}\n.component-menu.menu-full ul.wrapper-link:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-menu.menu-full ul.wrapper-link .dropdown-menu {\n  position: relative;\n}\n.component-menu.menu-full ul.wrapper-link .dropdown-menu a:after {\n  content: unset;\n}\n.component-menu.menu-full ul.wrapper-link .dropdown-menu .sub-link {\n  display: block;\n  padding: 0;\n  background: #f8f9fa none repeat scroll 0 0;\n  width: 230px;\n  margin: -6px 2px 0;\n  border: 1px solid #e9ecef;\n  position: absolute;\n  top: 70px;\n  left: 80%;\n  visibility: hidden;\n  opacity: 0;\n  z-index: -1;\n  overflow: hidden;\n  height: 0;\n  -webkit-transform: translateX(-50%);\n  -moz-transform: translateX(-50%);\n  -o-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  transform: translateX(-50%);\n  -webkit-transition: all 0.15s ease-in-out;\n  -moz-transition: all 0.15s ease-in-out;\n  -o-transition: all 0.15s ease-in-out;\n  -ms-transition: all 0.15s ease-in-out;\n  transition: all 0.15s ease-in-out;\n}\n.component-menu.menu-full ul.wrapper-link .dropdown-menu .sub-link:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-menu.menu-full ul.wrapper-link .dropdown-menu .sub-link li {\n  display: block;\n  float: none;\n}\n.component-menu.menu-full ul.wrapper-link .dropdown-menu .sub-link li:last-child a {\n  border-bottom: none;\n}\n.component-menu.menu-full ul.wrapper-link .dropdown-menu .sub-link li a {\n  display: block;\n  color: #0d47a1;\n  border-bottom: 1px solid #e9ecef;\n  box-shadow: none;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 16px;\n  padding: 10px 14px 10px 20px;\n  text-transform: none;\n  position: relative;\n  transition: all 0.3s ease-out 0s;\n  -webkit-transition: all 0.3s ease-out 0s;\n}\n.component-menu.menu-full ul.wrapper-link .dropdown-menu .sub-link li a:hover {\n  padding-left: 14px;\n  padding-right: 20px;\n  color: #20c997;\n}\n.component-menu.menu-full ul.wrapper-link .dropdown-menu:hover .sub-link {\n  top: 120%;\n  height: unset;\n  opacity: 1;\n  z-index: 100;\n  visibility: unset;\n}\n.component-menu.menu-full ul.wrapper-link > li {\n  padding: 0 10px;\n  float: left;\n  position: relative;\n}\n@media only screen and (max-width: 991px) {\n  .component-menu.menu-full ul.wrapper-link > li {\n    padding: 0 5px;\n  }\n}\n.component-menu.menu-full ul.wrapper-link > li .hero-icon {\n  position: absolute;\n  top: 60%;\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n  right: 0px;\n  color: #0d47a1;\n  width: 16px;\n  font-size: 14px;\n  -webkit-transition: all 0.35s linear 0s;\n  -moz-transition: all 0.35s linear 0s;\n  -o-transition: all 0.35s linear 0s;\n  -ms-transition: all 0.35s linear 0s;\n  transition: all 0.35s linear 0s;\n}\n.component-menu.menu-full ul.wrapper-link > li > a {\n  display: block;\n  padding: 10px 5px 5px;\n  font-size: 17px;\n  margin-left: 3px;\n  font-weight: 900;\n  color: #0d47a1;\n  font-family: \"Sawarabi-Mincho-Regular\";\n  position: relative;\n}\n@media only screen and (max-width: 991px) {\n  .component-menu.menu-full ul.wrapper-link > li > a {\n    font-size: 15px;\n  }\n}\n.component-menu.menu-full ul.wrapper-link > li > a.active {\n  color: #20c997;\n}\n.component-menu.menu-full ul.wrapper-link > li > a:after {\n  content: \".\";\n  color: transparent;\n  position: absolute;\n  left: 50%;\n  right: 50%;\n  bottom: 0;\n  border-bottom: 3px solid #0d47a1;\n  -webkit-transition: all 0.5s;\n  -moz-transition: all 0.5s;\n  -o-transition: all 0.5s;\n  -ms-transition: all 0.5s;\n  transition: all 0.5s;\n}\n.component-menu.menu-full ul.wrapper-link > li:hover > a {\n  color: #20c997;\n}\n.component-menu.menu-full ul.wrapper-link > li:hover > a:after {\n  left: 0;\n  right: 0;\n}\n.component-menu.menu-full ul.wrapper-link > li:hover .hero-icon {\n  color: #20c997;\n  -webkit-transform: translateY(-50%) scale(1) rotate(270deg);\n  -moz-transform: translateY(-50%) scale(1) rotate(270deg);\n  -o-transform: translateY(-50%) scale(1) rotate(270deg);\n  -ms-transform: translateY(-50%) scale(1) rotate(270deg);\n  transform: translateY(-50%) scale(1) rotate(270deg);\n}\n@media only screen and (max-width: 991px) {\n  .component-menu.menu-full ul.wrapper-link {\n    padding: 15px 10px 0;\n  }\n}\n\n@media only screen and (max-width: 768px) {\n  .component-menu.menu-full {\n    display: none;\n    -webkit-transition: 0.2s 0s;\n    -o-transition: 0.2s 0s;\n    transition: 0.2s 0s;\n  }\n  .component-menu.menu-full.open {\n    display: block;\n    position: fixed;\n    overflow: scroll;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    background: -moz-linear-gradient(0deg, #ffd1d4, #d6ffc6) !important;\n    background: -webkit-linear-gradient(0deg, #ffd1d4, #d6ffc6) !important;\n    background: -o-linear-gradient(0deg, #ffd1d4, #d6ffc6) !important;\n    background: -ms-linear-gradient(0deg, #ffd1d4, #d6ffc6) !important;\n    background: linear-gradient(0deg, #ffd1d4, #d6ffc6) !important;\n    z-index: 22;\n    top: 0;\n    bottom: 0;\n    overflow-y: scroll;\n    padding: 15px;\n  }\n  .component-menu.menu-full ul.wrapper-link {\n    margin: 0;\n    padding: 0;\n  }\n  .component-menu.menu-full ul.wrapper-link:after {\n    clear: both;\n    content: \".\";\n    display: block;\n    height: 0;\n    line-height: 0;\n    visibility: hidden;\n    overflow: hidden;\n  }\n  .component-menu.menu-full ul.wrapper-link .dropdown-menu {\n    position: relative;\n  }\n  .component-menu.menu-full ul.wrapper-link .dropdown-menu.active .sub-link {\n    display: block;\n    width: 100%;\n    margin: 0;\n    border: none;\n    top: unset;\n    left: unset;\n    visibility: unset;\n    opacity: 1;\n    z-index: 1;\n    height: unset;\n  }\n  .component-menu.menu-full ul.wrapper-link > li {\n    padding: 0;\n    float: none;\n    display: block;\n    border-bottom: 1px dashed #dee2e6;\n    position: relative;\n  }\n  .component-menu.menu-full ul.wrapper-link > li .hero-icon {\n    top: 23px;\n    right: 5px;\n    width: 25px;\n    border: 1px solid #dee2e6;\n  }\n  .component-menu.menu-full ul.wrapper-link > li > a {\n    padding: 15px 0;\n    margin: 0;\n    width: 90%;\n    min-width: 300px;\n    position: unset;\n  }\n  .component-menu.menu-full ul.wrapper-link > li.dropdown-menu .sub-link {\n    display: none;\n    position: unset;\n    background-color: transparent;\n    -webkit-transform: translateX(0%);\n    -moz-transform: translateX(0%);\n    -o-transform: translateX(0%);\n    -ms-transform: translateX(0%);\n    transform: translateX(0%);\n  }\n  .component-menu.menu-full .head-line-close-menu {\n    display: block;\n    text-align: right;\n    border-bottom: 1px solid #adb5bd;\n    padding-bottom: 15px;\n  }\n  .component-menu.menu-full .head-line-close-menu path {\n    color: #6c757d;\n  }\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/react/client/header/menu.scss":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--6-2!./src/scss/react/client/header/menu.scss ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.component-menu.menu-home-page {\n  position: absolute;\n  top: 30px;\n  right: 10%;\n  z-index: 999;\n  background-color: #fff;\n  box-shadow: -4px 20px 40px rgba(0, 0, 0, 0.15);\n}\n@media only screen and (max-width: 768px) {\n  .component-menu.menu-home-page {\n    top: 90px;\n    left: 0;\n    right: 0;\n    text-align: center;\n    margin: 0 auto;\n    box-shadow: none;\n    background-color: transparent;\n  }\n}\n.component-menu.menu-home-page .wrapper-link {\n  margin: 0;\n  padding: 0 10px 8px;\n}\n.component-menu.menu-home-page .wrapper-link:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n@media only screen and (max-width: 768px) {\n  .component-menu.menu-home-page .wrapper-link {\n    text-align: center;\n    margin: 0 auto;\n    padding: 0 5px;\n  }\n}\n.component-menu.menu-home-page .wrapper-link li {\n  padding: 0 15px;\n  float: left;\n}\n@media only screen and (max-width: 768px) {\n  .component-menu.menu-home-page .wrapper-link li {\n    float: none;\n    display: inline-block;\n    text-align: center;\n    margin: 0 auto;\n  }\n}\n@media only screen and (max-width: 575px) {\n  .component-menu.menu-home-page .wrapper-link li {\n    padding: 0 4px;\n  }\n}\n.component-menu.menu-home-page .wrapper-link li a {\n  display: block;\n  padding: 10px 5px 5px;\n  font-size: 19px;\n  margin-left: 3px;\n  color: #0d47a1;\n  font-weight: 900;\n  position: relative;\n}\n@media only screen and (max-width: 575px) {\n  .component-menu.menu-home-page .wrapper-link li a {\n    font-size: 14px;\n  }\n  .component-menu.menu-home-page .wrapper-link li a:after {\n    border-bottom: 2px solid #0d47a1;\n  }\n}\n.component-menu.menu-home-page .wrapper-link li a:after {\n  content: \".\";\n  color: transparent;\n  position: absolute;\n  left: 50%;\n  right: 50%;\n  bottom: 0;\n  border-bottom: 3px solid #0d47a1;\n  -webkit-transition: all 0.5s;\n  -moz-transition: all 0.5s;\n  -o-transition: all 0.5s;\n  -ms-transition: all 0.5s;\n  transition: all 0.5s;\n}\n.component-menu.menu-home-page .wrapper-link li a:hover, .component-menu.menu-home-page .wrapper-link li a.active {\n  color: #20c997;\n}\n.component-menu.menu-home-page .wrapper-link li a:hover:after, .component-menu.menu-home-page .wrapper-link li a.active:after {\n  left: 0;\n  right: 0;\n}\n\n.service-description {\n  margin-top: 40px;\n  max-width: 370px;\n  padding: 0 0 0 60px;\n  position: relative;\n  line-height: 1.66em;\n  font-family: \"Muli\";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.6;\n  color: #495057;\n}\n@media only screen and (max-width: 991px) {\n  .service-description {\n    padding: 0;\n    padding: 0;\n    text-align: center;\n    margin: 0 auto;\n  }\n}\n.service-description::before {\n  content: \".\";\n  color: transparent;\n  width: 50px;\n  position: absolute;\n  top: 10px;\n  left: 0;\n  border-top: 1px solid #212529;\n}\n@media only screen and (max-width: 991px) {\n  .service-description::before {\n    display: none;\n  }\n}\n\n.text-bordered {\n  display: block;\n  margin-top: 30px;\n  margin-bottom: 40px;\n  line-height: 1em;\n  -webkit-text-stroke-color: rgba(2, 5, 73, 0.14);\n  -webkit-text-stroke-width: 2px;\n  color: transparent;\n  letter-spacing: -0.03em;\n  text-transform: uppercase;\n  font-family: \"Archivo-Medium\";\n  font-size: 2.5em;\n}\n@media only screen and (max-width: 768px) {\n  .text-bordered {\n    font-size: 2em;\n  }\n}\n@media only screen and (max-width: 575px) {\n  .text-bordered {\n    font-size: 1.7em;\n    text-align: center;\n  }\n}\n.text-bordered:hover {\n  color: #17a2b8;\n  opacity: 0.2;\n}\n\n.component-web-design-image {\n  overflow: hidden;\n  width: 100%;\n}\n.component-web-design-image img {\n  width: 40%;\n  height: auto;\n  -webkit-transition: all 2s;\n  -moz-transition: all 2s;\n  -o-transition: all 2s;\n  -ms-transition: all 2s;\n  transition: all 2s;\n}\n.component-web-design-image .box-samples-img-1 {\n  position: absolute;\n  top: 20%;\n  left: 15px;\n}\n.component-web-design-image .box-samples-img-2 {\n  position: absolute;\n  top: 10%;\n  right: 15px;\n}\n.component-web-design-image .box-samples-img-3 {\n  position: absolute;\n  bottom: 10%;\n  right: 20%;\n  -webkit-transform: rotate(-20deg);\n  -moz-transform: rotate(-20deg);\n  -o-transform: rotate(-20deg);\n  -ms-transform: rotate(-20deg);\n  transform: rotate(-20deg);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/react/client/page/alo-now.scss":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--6-2!./src/scss/react/client/page/alo-now.scss ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.component-alo-now .alo-phone {\n  background-color: transparent;\n  bottom: 0;\n  cursor: pointer;\n  height: 110px;\n  left: 0;\n  position: fixed;\n  visibility: visible;\n  width: 110px;\n  z-index: 200000 !important;\n}\n.component-alo-now .alo-phone .alo-ph-circle {\n  display: block;\n  background-color: transparent;\n  border: 2px solid #6610f2;\n  border-radius: 100%;\n  height: 90px;\n  left: 12px;\n  opacity: 0.5;\n  position: absolute;\n  top: 12px;\n  width: 90px;\n}\n.component-alo-now .alo-phone .alo-ph-circle-fill {\n  display: block;\n  background-color: #6610f2;\n  border: 2px solid transparent;\n  border-radius: 100%;\n  height: 60px;\n  left: 28px;\n  opacity: 0.75 !important;\n  position: absolute;\n  top: 28px;\n  transition: all 0.5s ease 0s;\n  width: 60px;\n}\n.component-alo-now .alo-phone .alo-ph-img-circle {\n  display: block;\n  background: #6610f2 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNmlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjarY6xSsNQFEDPi6LiUCsEcXB4kygotupgxqQtRRCs1SHJ1qShSmkSXl7VfoSjWwcXd7/AyVFwUPwC/0Bx6uAQIYODCJ7p3MPlcsGo2HWnYZRhEGvVbjrS9Xw5+8QMUwDQCbPUbrUOAOIkjvjB5ysC4HnTrjsN/sZ8mCoNTIDtbpSFICpA/0KnGsQYMIN+qkHcAaY6addAPAClXu4vQCnI/Q0oKdfzQXwAZs/1fDDmADPIfQUwdXSpAWpJOlJnvVMtq5ZlSbubBJE8HmU6GmRyPw4TlSaqo6MukP8HwGK+2G46cq1qWXvr/DOu58vc3o8QgFh6LFpBOFTn3yqMnd/n4sZ4GQ5vYXpStN0ruNmAheuirVahvAX34y/Axk/96FpPYgAAACBjSFJNAAB6JQAAgIMAAPn/AACA6AAAUggAARVYAAA6lwAAF2/XWh+QAAAB/ElEQVR42uya7W3CMBCG31QM4A1aNggTlG6QbpBMkHYC1AloJ4BOABuEDcgGtBOETnD9c1ERCH/lwxeaV8oPFGP86Hy+DxMREW5Bd7gRjSDSNGn4/RiAOvm8C0ZCRD5PSkQVXSr1nK/xE3mcWimA1ZV3JYBZCIO4giQANoYxMwYS6+xKY4lT5dJPreWZY+uspqSCKPYN27GJVBDXheVSQe494ksiEWTuMXcu1dld9SARxDX1OAJ4lgjy4zDnFsC076A4adEiRwAZg4hOUSpNoCsBPDGM+HqkNGynYBCuILuWj+dgWysGsNe8nwL4GsrW0m2fxZBq9rW0rNcX5MOQ9eZD8JFahcG5g/iKT671alGAYQggpYWvpEPYWrU/HDTOfeRIX0q2SL3QN4tGhZJukVobQyXYWw7WtLDKDIuM+ZSzscyCE9PCy5IttCvnZNaeiGLNHKuz8ZVh/MXTVu/1xQKmIqLEAuJ0fNo3iG5B51oSkeKnsBi/4bG9gYB/lCytU5G9DryFW+3Gm+JLwU7ehbJrwTjq4DJU8bHcVbEV9dXXqqP6uqO5e2/QZRYJpqu2IUAA4B3tXvx8hgKp05QZW6dJqrLTNkB6vrRURLRwPHqtYgkC3cLWQAcDQGGKH13FER/NATzi786+BPDNjm1dMkfjn2pGkBHkf4D8DgBJDuDHx9BN+gAAAABJRU5ErkJggg==) no-repeat scroll center center/70% auto;\n  border: 2px solid transparent;\n  border-radius: 100%;\n  height: 30px;\n  left: 43px;\n  opacity: 0.7;\n  position: absolute;\n  top: 43px;\n  transform-origin: 50% 50% 0;\n  transition: all 0.2s ease-in-out 0s;\n  width: 30px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/react/client/page/back-top.scss":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--6-2!./src/scss/react/client/page/back-top.scss ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.component-back-top {\n  position: fixed;\n  z-index: 999;\n  bottom: 50px;\n  right: 50px;\n  cursor: pointer;\n  animation: 2s ease 0s normal none infinite running float;\n}\n.component-back-top .hero-icon {\n  font-size: 50px;\n  color: #6610f2;\n}\n.component-back-top .hero-icon:hover {\n  color: #6f42c1;\n  opacity: 0.3;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/react/client/page/chat/chat.scss":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--6-2!./src/scss/react/client/page/chat/chat.scss ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.bg-chat-temalate {\n  background: -moz-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -webkit-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -o-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: -ms-linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n  background: linear-gradient(135deg, #e1fefa, #fcf7f4) !important;\n}\n\n.wrapper-page-chat {\n  max-width: 1100px;\n  margin: 0 auto;\n}\n.wrapper-page-chat:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/react/client/page/chat/emoji.scss":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--6-2!./src/scss/react/client/page/chat/emoji.scss ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.component-list-emoji {\n  position: absolute;\n  left: 50%;\n  right: 50%;\n  padding: 10px;\n  border: 1px solid #e9ecef;\n  border-radius: 10px;\n  background-color: #fff;\n  opacity: 0;\n  visibility: hidden;\n  height: 0;\n}\n.component-list-emoji.first-show {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n  animation-name: tada;\n}\n.component-list-emoji.show {\n  visibility: unset;\n  height: unset;\n  bottom: 100%;\n  left: 20px;\n  right: 20px;\n  opacity: 1;\n}\n\n.component-emoji {\n  width: 28px;\n  height: 28px;\n  text-align: center;\n  display: inline-block;\n  vertical-align: middle;\n  cursor: pointer;\n  line-height: 24px;\n  font: normal normal normal 24px/1 \"HERO Icons\";\n  text-rendering: auto;\n  line-height: inherit;\n  -webkit-font-smoothing: antialiased;\n  color: #0d47a1;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/react/client/page/chat/head-info.scss":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--6-2!./src/scss/react/client/page/chat/head-info.scss ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.component-head-info .user-active-chat {\n  position: relative;\n  padding: 10px 20px;\n  box-sizing: border-box;\n  border-bottom: 1px solid #e9ecef;\n  min-height: 75px;\n}\n.component-head-info .user-active-chat .state-avatar {\n  position: absolute;\n  top: 50%;\n  display: block;\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n  border-radius: 50%;\n  box-sizing: border-box;\n  border: 1px solid #6c757d;\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.component-head-info .user-active-chat .state-avatar img {\n  width: 40px;\n  height: 40px;\n}\n.component-head-info .user-active-chat .text-info {\n  display: block;\n  padding: 7px 7px 7px 55px;\n  color: #0d47a1;\n}\n.component-head-info .user-active-chat .text-info .name {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.component-head-info .user-active-chat .text-info .time-online {\n  display: block;\n  font-size: 12px;\n  color: #6c757d;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.component-head-info .user-active-chat .text-info .time-online.active-now {\n  color: #8bc34a;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/react/client/page/chat/input-send-chat.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--6-2!./src/scss/react/client/page/chat/input-send-chat.scss ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.component-input-send-chat {\n  border: 1px solid #e9ecef;\n  border-left: none;\n  position: relative;\n  padding: 5px 50px 0;\n}\n.component-input-send-chat textarea {\n  width: 100% !important;\n  min-height: 30px;\n  max-height: 150px;\n  overflow-y: scroll;\n  resize: none;\n  padding: 10px 15px;\n  background-color: #f2f2f2;\n  border-radius: 15px;\n  border: 1px solid #e9ecef;\n  font-size: 14px;\n  scrollbar-width: none;\n  margin: 0;\n  text-decoration: none;\n}\n.component-input-send-chat textarea:focus {\n  border-color: #0d47a1;\n  color: #0d47a1;\n}\n.component-input-send-chat textarea:focus ~ .hero-icon.send {\n  display: inline-block;\n}\n.component-input-send-chat textarea:focus ~ .hero-icon.react {\n  display: none;\n}\n.component-input-send-chat textarea::-webkit-scrollbar {\n  display: block;\n}\n.component-input-send-chat > i {\n  position: absolute;\n  z-index: 11;\n  bottom: 20px;\n  font-size: 28px;\n  color: #0d6efd;\n}\n.component-input-send-chat .hero-icon.emoticon {\n  left: 10px;\n}\n.component-input-send-chat .hero-icon.send {\n  display: none;\n  right: 10px;\n}\n.component-input-send-chat .hero-icon.react {\n  display: inline-block;\n  right: 10px;\n}\n.component-input-send-chat .image-block .remove-image {\n  max-height: 100px;\n  overflow: hidden;\n  display: inline-block;\n  position: relative;\n}\n.component-input-send-chat .image-block .remove-image:after {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  content: \"󰅗\";\n  width: 32px;\n  height: 24px;\n  text-align: center;\n  display: inline-block;\n  vertical-align: middle;\n  cursor: pointer;\n  line-height: 24px;\n  font: normal normal normal 24px/1 \"HERO Icons\";\n  text-rendering: auto;\n  line-height: inherit;\n  -webkit-font-smoothing: antialiased;\n}\n.component-input-send-chat .image-block .remove-image:hover img {\n  opacity: 0.4;\n}\n.component-input-send-chat .image-block .remove-image:hover:after {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n  animation-name: tada;\n}\n.component-input-send-chat .image-block img {\n  padding: 5px;\n  opacity: 0.9;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/react/client/page/chat/list-message.scss":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--6-2!./src/scss/react/client/page/chat/list-message.scss ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.component-list-message {\n  float: left;\n  width: 70%;\n  border-left: 1px solid #e9ecef;\n}\n.component-list-message .wrapper-list-message {\n  padding: 15px;\n  height: 400px;\n  overflow-y: scroll;\n}\n.component-list-message .wrapper-list-message:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n\n.ticontainer {\n  display: inline-block;\n  min-width: 30px;\n}\n.ticontainer .tiblock {\n  align-items: center;\n  display: flex;\n  height: 17px;\n}\n.ticontainer .tiblock .tidot {\n  background-color: #adb5bd;\n  -webkit-animation: mercuryTypingAnimation 1.5s infinite ease-in-out;\n  animation: mercuryTypingAnimation 1.5s infinite ease-in-out;\n  border-radius: 50%;\n  display: inline-block;\n  height: 6px;\n  margin-right: 4px;\n  width: 6px;\n}\n.ticontainer .tiblock .tidot:nth-child(1) {\n  -webkit-animation-delay: 150ms;\n  animation-delay: 200ms;\n}\n.ticontainer .tiblock .tidot:nth-child(2) {\n  -webkit-animation-delay: 300ms;\n  animation-delay: 300ms;\n}\n.ticontainer .tiblock .tidot:nth-child(3) {\n  -webkit-animation-delay: 450ms;\n  animation-delay: 400ms;\n}\n\n@-webkit-keyframes mercuryTypingAnimation {\n  0% {\n    -webkit-transform: translateY(0px);\n  }\n  28% {\n    -webkit-transform: translateY(-5px);\n  }\n  44% {\n    -webkit-transform: translateY(0px);\n  }\n}\n@media only screen and (max-width: 991px) {\n  .component-list-message {\n    width: 60%;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .component-list-message {\n    width: calc(100% - 60px);\n  }\n  .component-list-message .wrapper-list-message {\n    height: 300px;\n  }\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/react/client/page/chat/list-user.scss":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--6-2!./src/scss/react/client/page/chat/list-user.scss ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.component-user-chat-sidebar .user-chat {\n  position: relative;\n  padding: 5px;\n  cursor: pointer;\n}\n.component-user-chat-sidebar .user-chat.active-message {\n  background-color: #f1ffff;\n}\n.component-user-chat-sidebar .user-chat.active .state-avatar {\n  border-color: #28a745;\n}\n.component-user-chat-sidebar .user-chat.active .state-avatar:after {\n  background-color: #28a745;\n}\n.component-user-chat-sidebar .user-chat .state-avatar {\n  position: absolute;\n  top: 50%;\n  display: block;\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n  border-radius: 50%;\n  box-sizing: border-box;\n  border: 1px solid #6c757d;\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n.component-user-chat-sidebar .user-chat .state-avatar:after {\n  content: \".\";\n  color: transparent;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  z-index: 5;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  overflow: hidden;\n  background-color: #adb5bd;\n  -webkit-transform: translateX(-50%);\n  -moz-transform: translateX(-50%);\n  -o-transform: translateX(-50%);\n  -ms-transform: translateX(-50%);\n  transform: translateX(-50%);\n}\n.component-user-chat-sidebar .user-chat .state-avatar img {\n  width: 40px;\n  height: 40px;\n}\n.component-user-chat-sidebar .user-chat .text-info {\n  display: block;\n  padding: 7px 7px 7px 55px;\n  color: #0d47a1;\n}\n.component-user-chat-sidebar .user-chat .text-info .name {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.component-user-chat-sidebar .user-chat .text-info .last-message {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n@media only screen and (max-width: 768px) {\n  .component-user-chat-sidebar .user-chat.active-message {\n    background-color: #adb5bd;\n  }\n  .component-user-chat-sidebar .user-chat .text-info {\n    width: 10px;\n    overflow: hidden;\n  }\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/react/client/page/chat/message-chat.scss":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--6-2!./src/scss/react/client/page/chat/message-chat.scss ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.component-message-chat {\n  padding-top: 5px;\n}\n.component-message-chat:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-message-chat .chat-group:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n.component-message-chat .chat-group.by-me .avatar {\n  display: none !important;\n}\n.component-message-chat .chat-group.by-me .message-content .text {\n  background: -moz-linear-gradient(210deg, #f8f9fa, #adb5bd) !important;\n  background: -webkit-linear-gradient(210deg, #f8f9fa, #adb5bd) !important;\n  background: -o-linear-gradient(210deg, #f8f9fa, #adb5bd) !important;\n  background: -ms-linear-gradient(210deg, #f8f9fa, #adb5bd) !important;\n  background: linear-gradient(210deg, #f8f9fa, #adb5bd) !important;\n}\n.component-message-chat .chat-group .avatar {\n  max-width: 40px;\n  max-height: 40px;\n  margin: 0;\n  border-radius: 50%;\n  overflow: hidden;\n  float: left;\n}\n.component-message-chat .chat-group .avatar img {\n  width: 100%;\n}\n.component-message-chat .chat-group .message-content {\n  padding-left: 50px;\n}\n.component-message-chat .chat-group .message-content .text {\n  padding: 10px;\n  border-radius: 15px;\n  background: -moz-linear-gradient(135deg, #f8f9fa, #6f42c1) !important;\n  background: -webkit-linear-gradient(135deg, #f8f9fa, #6f42c1) !important;\n  background: -o-linear-gradient(135deg, #f8f9fa, #6f42c1) !important;\n  background: -ms-linear-gradient(135deg, #f8f9fa, #6f42c1) !important;\n  background: linear-gradient(135deg, #f8f9fa, #6f42c1) !important;\n}\n.component-message-chat .chat-group .typing-message .text {\n  background: transparent !important;\n}\n.component-message-chat .chat-group .typing-message .typing-text {\n  font-size: 10px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/react/client/page/chat/search-user.scss":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--6-2!./src/scss/react/client/page/chat/search-user.scss ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.component-search-user {\n  padding: 10px;\n  position: relative;\n}\n.component-search-user .search-user {\n  background-color: #f8f9fa;\n  border: 1px solid #6c757d;\n  width: 100%;\n  padding: 5px 30px 5px 15px;\n  font-size: 13px;\n  color: #6c757d;\n  font-style: \"Archivo-Medium\";\n}\n.component-search-user .search-user:focus {\n  border-color: #0d47a1;\n  color: #0d47a1;\n}\n.component-search-user .search-user:focus ~ .hero-icon {\n  color: #0d47a1;\n}\n.component-search-user .hero-icon {\n  position: absolute;\n  top: 50%;\n  color: #6c757d;\n  right: 10px;\n  z-index: 2;\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n\n@media only screen and (max-width: 768px) {\n  .component-search-user {\n    display: none;\n  }\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/react/client/page/chat/sidebar.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--6-2!./src/scss/react/client/page/chat/sidebar.scss ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.component-sidebar-chat {\n  float: left;\n  width: 30%;\n}\n.component-sidebar-chat * {\n  box-sizing: border-box;\n}\n\n.myinfo {\n  padding: 10px 20px;\n  box-sizing: border-box;\n  border-bottom: 1px solid #e9ecef;\n  min-height: 75px;\n}\n.myinfo .avatar .state-avatar {\n  display: inline-block;\n  vertical-align: middle;\n  padding: 0;\n  margin: 0;\n  overflow: hidden;\n  border-radius: 50%;\n  box-sizing: border-box;\n  position: relative;\n}\n.myinfo .avatar .state-avatar:after {\n  content: \".\";\n  color: transparent;\n  position: absolute;\n  top: 1px;\n  left: 1px;\n  right: 1px;\n  bottom: 1px;\n  border-radius: 50%;\n  border: 2px double #9175ca;\n}\n.myinfo .avatar .state-avatar.active-online {\n  border: 2px double #00c851;\n}\n.myinfo .avatar .state-avatar img {\n  max-width: 50px;\n  max-height: 50px;\n}\n.myinfo .avatar .name {\n  display: inline-block;\n  vertical-align: middle;\n  padding: 10px;\n  color: #0d47a1;\n}\n\n@media only screen and (max-width: 991px) {\n  .component-sidebar-chat {\n    width: 40%;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .component-sidebar-chat {\n    width: 60px;\n  }\n  .component-sidebar-chat .user-chat .state-avatar {\n    left: 10px;\n  }\n\n  .myinfo {\n    padding: 10px;\n  }\n  .myinfo .avatar .state-avatar img {\n    max-width: 35px;\n    max-height: 35px;\n  }\n  .myinfo .avatar .name {\n    display: none;\n  }\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/react/client/page/home.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js??ref--6-2!./src/scss/react/client/page/home.scss ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@font-face {\n  font-family: \"Great Vibes\";\n  src: url(\"/font/Great_Vibes/GreatVibes-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Muli\";\n  src: url(\"/font/Muli/Muli-VariableFont_wght.ttf\");\n}\n@font-face {\n  font-family: \"Archivo-Medium\";\n  src: url(\"/font/Archivo/Archivo-Medium.ttf\");\n}\n@font-face {\n  font-family: \"BenchNine-Regular\";\n  src: url(\"/font/BenchNine/BenchNine-Regular.ttf\");\n}\n@font-face {\n  font-family: \"Sawarabi-Mincho-Regular\";\n  src: url(\"/font/Sawarabi_Mincho/SawarabiMincho-Regular.ttf\");\n}\n.component-home {\n  overflow: hidden;\n}\n\n.topic-website-selector {\n  background-color: transparent;\n  padding: 15px 0;\n}\n@media only screen and (max-width: 768px) {\n  .topic-website-selector {\n    padding: 0 0 30px;\n  }\n}\n.topic-website-selector .title-topic {\n  background: transparent url(/image/background/bg_title.png) no-repeat scroll center bottom;\n  color: #142149;\n  display: block;\n  font-family: RCB;\n  font-size: 25px;\n  padding: 15px 30px 15px;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.component-service-website-selector {\n  background-color: #f8f9fa;\n}\n\n.wrapper-website-selector {\n  width: 90%;\n  margin: 15px auto 0;\n}\n@media only screen and (max-width: 768px) {\n  .wrapper-website-selector {\n    width: 100%;\n    margin: 0 auto;\n  }\n}\n.wrapper-website-selector .block-website-selector {\n  width: 30%;\n  margin: 1px auto;\n  background-color: #e9ecef;\n  padding: 15px;\n  float: left;\n  cursor: pointer;\n  -webkit-transition: all 0.5s;\n  -moz-transition: all 0.5s;\n  -o-transition: all 0.5s;\n  -ms-transition: all 0.5s;\n  transition: all 0.5s;\n}\n.wrapper-website-selector .block-website-selector svg {\n  -webkit-transition: all 1s;\n  -moz-transition: all 1s;\n  -o-transition: all 1s;\n  -ms-transition: all 1s;\n  transition: all 1s;\n}\n.wrapper-website-selector .block-website-selector:hover {\n  box-shadow: -4px 20px 40px rgba(0, 0, 0, 0.15);\n}\n.wrapper-website-selector .block-website-selector:hover svg {\n  transform: rotate(180deg);\n}\n.wrapper-website-selector .block-website-selector.middle {\n  width: 40%;\n  background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);\n  margin-top: -15px;\n}\n@media only screen and (max-width: 768px) {\n  .wrapper-website-selector .block-website-selector {\n    display: block;\n    float: none;\n    width: 80%;\n  }\n  .wrapper-website-selector .block-website-selector.middle {\n    width: 80%;\n    margin-top: 0px;\n  }\n}\n@media only screen and (max-width: 575px) {\n  .wrapper-website-selector .block-website-selector {\n    width: 95%;\n  }\n  .wrapper-website-selector .block-website-selector.middle {\n    width: 95%;\n  }\n}\n.wrapper-website-selector .block-website-selector .icon-title-block {\n  text-align: center;\n  position: relative;\n}\n.wrapper-website-selector .block-website-selector .icon-title-block .icon-title .icon-abs-middle {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 11;\n  font-size: 28px;\n  -webkit-transform: translate(-50%, -50%);\n  -moz-transform: translate(-50%, -50%);\n  -o-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n.wrapper-website-selector .block-website-selector .icon-title-block .icon-title .hero-creation {\n  color: #aa51bb;\n}\n.wrapper-website-selector .block-website-selector .icon-title-block .icon-title .hero-format-list-text {\n  color: #f86729;\n}\n.wrapper-website-selector .block-website-selector .icon-title-block .icon-title .hero-auto-fix {\n  color: #a5770d;\n}\n.wrapper-website-selector .block-website-selector .title-block-language {\n  text-align: center;\n  font-size: 24px;\n  color: #253811;\n  text-transform: uppercase;\n  font-weight: bold;\n  padding: 15px 0;\n}\n.wrapper-website-selector .block-website-selector .content-language {\n  text-align: center;\n  color: #142149;\n}\n\n.component-home-intro-layout:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n@media only screen and (max-width: 768px) {\n  .component-home-intro-layout {\n    padding: 0 3px;\n  }\n}\n.component-home-intro-layout .wrapper-item-craft-layout {\n  display: block;\n  width: 33.3333%;\n  float: left;\n  padding: 15px;\n}\n@media only screen and (max-width: 768px) {\n  .component-home-intro-layout .wrapper-item-craft-layout {\n    padding: 3px;\n    width: 50%;\n  }\n  .component-home-intro-layout .wrapper-item-craft-layout:last-child {\n    display: none;\n  }\n  .component-home-intro-layout .wrapper-item-craft-layout figure.box-modern-figure {\n    display: block;\n    margin: 15px 0;\n  }\n}\n.component-home-intro-layout .wrapper-item-craft-layout figure.box-modern-figure {\n  display: block;\n  margin: 25px 0;\n}\n.component-home-intro-layout .wrapper-item-craft-layout figure.box-modern-figure img:hover {\n  opacity: 0.8;\n  box-shadow: 0 4px 12px #343a40;\n}\n.component-home-intro-layout .wrapper-item-craft-layout .box-modern-title {\n  text-align: center;\n}\n@media only screen and (max-width: 768px) {\n  .component-home-intro-layout .wrapper-item-craft-layout .box-modern-title {\n    font-size: 13px;\n  }\n}\n\n.component-standard-contract {\n  display: block;\n  padding: 15px;\n  text-align: center;\n  cursor: pointer;\n}\n.component-standard-contract:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n@media only screen and (max-width: 768px) {\n  .component-standard-contract {\n    padding: 15px 0;\n  }\n}\n.component-standard-contract .component-item-standard-contract {\n  overflow: hidden;\n  display: block;\n  padding: 15px;\n  width: 25%;\n  float: left;\n  -webkit-transition: all 0.5s;\n  -moz-transition: all 0.5s;\n  -o-transition: all 0.5s;\n  -ms-transition: all 0.5s;\n  transition: all 0.5s;\n}\n.component-standard-contract .component-item-standard-contract:hover {\n  box-shadow: -4px 20px 40px rgba(0, 0, 0, 0.15);\n}\n.component-standard-contract .component-item-standard-contract a {\n  display: block;\n  color: inherit;\n}\n@media only screen and (max-width: 768px) {\n  .component-standard-contract .component-item-standard-contract {\n    width: 50%;\n    padding: 15px 0;\n  }\n}\n.component-standard-contract .component-item-standard-contract:hover .des-standard-contract {\n  color: #03275e;\n}\n.component-standard-contract .component-item-standard-contract:hover .wrapper-icon-item-standard {\n  border-color: #46bece;\n}\n.component-standard-contract .component-item-standard-contract:hover .wrapper-icon-item-standard .hero-icon {\n  color: #46bece;\n}\n.component-standard-contract .component-item-standard-contract .des-standard-contract {\n  font-size: 15px;\n  padding: 15px;\n}\n@media only screen and (max-width: 575px) {\n  .component-standard-contract .component-item-standard-contract .des-standard-contract {\n    padding: 15px 5px;\n  }\n}\n.component-standard-contract .component-item-standard-contract .wrapper-icon-item-standard {\n  margin: 0 auto 15px;\n  width: 60px;\n  height: 60px;\n  display: block;\n  border-radius: 50%;\n  border: 1px solid #0d47a1;\n  position: relative;\n}\n.component-standard-contract .component-item-standard-contract .wrapper-icon-item-standard .hero-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  color: #0d47a1;\n  -webkit-transform: translate(-50%, -50%);\n  -moz-transform: translate(-50%, -50%);\n  -o-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  font-size: 32px;\n}\n\n.component-intro-theme .component-intro-theme {\n  max-width: 1180px;\n  margin: 0 auto;\n  padding: 10px;\n}\n.component-intro-theme .component-intro-theme:after {\n  clear: both;\n  content: \".\";\n  display: block;\n  height: 0;\n  line-height: 0;\n  visibility: hidden;\n  overflow: hidden;\n}\n@media only screen and (max-width: 768px) {\n  .component-intro-theme .component-intro-theme {\n    padding: 5px;\n  }\n}\n.component-intro-theme .component-intro-theme .wrapper-item-theme {\n  width: 33.33%;\n  float: left;\n  padding: 10px;\n}\n@media only screen and (max-width: 991px) {\n  .component-intro-theme .component-intro-theme .wrapper-item-theme:last-child {\n    display: none !important;\n  }\n}\n@media only screen and (max-width: 768px) {\n  .component-intro-theme .component-intro-theme .wrapper-item-theme {\n    width: 50%;\n    padding: 5px;\n  }\n}\n.component-intro-theme .component-intro-theme .wrapper-item-theme .box-modern-figure {\n  padding: 0;\n  margin: 0;\n  height: 300px;\n  overflow: hidden;\n  position: relative;\n  border-radius: 4px;\n  border: 1px solid #6c757d;\n}\n@media only screen and (max-width: 768px) {\n  .component-intro-theme .component-intro-theme .wrapper-item-theme .box-modern-figure {\n    height: 250px;\n  }\n}\n.component-intro-theme .component-intro-theme .wrapper-item-theme .box-modern-figure:hover {\n  box-shadow: -4px 20px 40px rgba(0, 0, 0, 0.15);\n}\n.component-intro-theme .component-intro-theme .wrapper-item-theme .box-modern-figure:hover .box-modern-title {\n  height: 100px;\n  bottom: 0;\n}\n.component-intro-theme .component-intro-theme .wrapper-item-theme .box-modern-figure:hover .theme-img-scroll {\n  top: 100%;\n  transform: translateY(-100%);\n  -webkit-transform: translateY(-100%);\n}\n.component-intro-theme .component-intro-theme .wrapper-item-theme .box-modern-figure:hover .theme-img-scroll img {\n  margin-bottom: 100px;\n}\n.component-intro-theme .component-intro-theme .wrapper-item-theme .box-modern-figure .box-modern-title {\n  position: absolute;\n  color: #aa66cc;\n  overflow: hidden;\n  height: 0;\n  width: 100%;\n  bottom: -40px;\n  padding: 20px;\n  -webkit-transition: all 0.2s ease-in-out 0s;\n  -moz-transition: all 0.2s ease-in-out 0s;\n  -o-transition: all 0.2s ease-in-out 0s;\n  -ms-transition: all 0.2s ease-in-out 0s;\n  transition: all 0.2s ease-in-out 0s;\n  background: -moz-linear-gradient(130deg, #6f42c1, #d63384) !important;\n  background: -webkit-linear-gradient(130deg, #6f42c1, #d63384) !important;\n  background: -o-linear-gradient(130deg, #6f42c1, #d63384) !important;\n  background: -ms-linear-gradient(130deg, #6f42c1, #d63384) !important;\n  background: linear-gradient(130deg, #6f42c1, #d63384) !important;\n}\n@media only screen and (max-width: 991px) {\n  .component-intro-theme .component-intro-theme .wrapper-item-theme .box-modern-figure .box-modern-title {\n    height: 60px;\n    bottom: 0;\n    bottom: 0px;\n    padding: 10px;\n  }\n}\n.component-intro-theme .component-intro-theme .wrapper-item-theme .box-modern-figure .box-modern-title .name {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #fff;\n  width: calc(100% - 60px);\n  font-size: 20px;\n}\n@media only screen and (max-width: 991px) {\n  .component-intro-theme .component-intro-theme .wrapper-item-theme .box-modern-figure .box-modern-title .name {\n    font-size: 16px;\n  }\n}\n.component-intro-theme .component-intro-theme .wrapper-item-theme .box-modern-figure .box-modern-title .author {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: calc(100% - 60px);\n  color: #f17067;\n  font-size: 18px;\n}\n@media only screen and (max-width: 991px) {\n  .component-intro-theme .component-intro-theme .wrapper-item-theme .box-modern-figure .box-modern-title .author {\n    font-size: 13px;\n  }\n}\n.component-intro-theme .component-intro-theme .wrapper-item-theme .box-modern-figure .box-modern-title .btn-trial {\n  text-align: center;\n  padding: 5px 10px;\n  border-radius: 2px;\n  display: inline-block;\n  background: #4caf50;\n  color: #fff;\n  text-transform: capitalize;\n  position: absolute;\n  right: 10px;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n  -moz-transform: translateY(-50%);\n  -o-transform: translateY(-50%);\n  -ms-transform: translateY(-50%);\n  transform: translateY(-50%);\n}\n@media only screen and (max-width: 991px) {\n  .component-intro-theme .component-intro-theme .wrapper-item-theme .box-modern-figure .box-modern-title .btn-trial {\n    font-size: 14px;\n  }\n}\n.component-intro-theme .component-intro-theme .wrapper-item-theme .box-modern-figure .box-modern-title .btn-trial:hover, .component-intro-theme .component-intro-theme .wrapper-item-theme .box-modern-figure .box-modern-title .btn-trial:focus {\n  background: #cddc39;\n}\n.component-intro-theme .component-intro-theme .wrapper-item-theme .box-modern-figure .theme-img-scroll {\n  display: block;\n  left: 0;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  -webkit-transition: all 3.2s ease-in-out 0s;\n  -moz-transition: all 3.2s ease-in-out 0s;\n  -o-transition: all 3.2s ease-in-out 0s;\n  -ms-transition: all 3.2s ease-in-out 0s;\n  transition: all 3.2s ease-in-out 0s;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/action/type.js":
/*!****************************!*\
  !*** ./src/action/type.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var TYPE = {
  HOME: {
    CHANGE_LAYOUTS: 'CHANGE_LAYOUTS',
    CHANGE_THEME: 'CHANGE_THEME'
  },
  CHAT: {
    CHANGE_USER_CHAT_DEFAULT: 'CHANGE_USER_CHAT_DEFAULT'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (TYPE);

/***/ }),

/***/ "./src/component/App.js":
/*!******************************!*\
  !*** ./src/component/App.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _client_Register_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client/Register.jsx */ "./src/component/client/Register.jsx");
/* harmony import */ var _client_page_Home_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client/page/Home.jsx */ "./src/component/client/page/Home.jsx");
/* harmony import */ var _client_page_DetailTheme_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client/page/DetailTheme.jsx */ "./src/component/client/page/DetailTheme.jsx");
/* harmony import */ var _client_page_Theme_ListTheme_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client/page/Theme/ListTheme.jsx */ "./src/component/client/page/Theme/ListTheme.jsx");
/* harmony import */ var _client_page_Chat_Chat_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client/page/Chat/Chat.jsx */ "./src/component/client/page/Chat/Chat.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var App = /*#__PURE__*/function (_Component) {
  _inherits(App, _Component);

  var _super = _createSuper(App);

  function App(props) {
    _classCallCheck(this, App);

    return _super.call(this, props);
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "AppComponent"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/",
        render: function render() {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_page_Home_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null);
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/chat",
        render: function render(_ref) {
          var match = _ref.match;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_page_Chat_Chat_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
            match: match
          });
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/chat/:id",
        render: function render(_ref2) {
          var match = _ref2.match;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_page_Chat_Chat_jsx__WEBPACK_IMPORTED_MODULE_6__["default"], {
            match: match
          });
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        exact: true,
        path: "/theme",
        render: function render(_ref3) {
          var match = _ref3.match;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_page_Theme_ListTheme_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
            match: match
          });
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/theme/:id",
        render: function render(_ref4) {
          var match = _ref4.match;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_page_DetailTheme_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
            match: match
          });
        }
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/register",
        render: function render() {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_Register_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null);
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
        path: "/login",
        render: function render() {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_client_Register_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null);
        }
      })));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/component/client/Register.jsx":
/*!*******************************************!*\
  !*** ./src/component/client/Register.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _general_dropdown_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../general/dropdown.jsx */ "./src/component/general/dropdown.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




/**
 * import define
 */



var Register = /*#__PURE__*/function (_Component) {
  _inherits(Register, _Component);

  var _super = _createSuper(Register);

  function Register(props) {
    var _this;

    _classCallCheck(this, Register);

    _this = _super.call(this, props); // this.state = {
    //   count:  1
    // }

    _this.handleChangeState = function (event) {
      // this.setState({
      //   count: this.state.count + 1
      // })
      _this.props.dispatch({
        type: 'demo',
        payload: 'ahihi ddooff ngốc payload '
      });
    };

    return _this;
  }

  _createClass(Register, [{
    key: "render",
    value: function render() {
      console.log("đã render state");
      console.log(this.props.demo);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "animated fadeIn"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_general_dropdown_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        button: 'come me baby',
        list: ['html', 'php', 'nodejs']
      }), "page register b\xECnh th\u01B0\u1EDDng ch\u01B0a thay \u0111\u1ED5i state", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_general_dropdown_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        button: 'sờ chị đi cưng',
        list: ['ahihi', 'nà ní']
      }), "h\xF9ng \u0111\u1EB9p trai", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.handleChangeState
      }, "click me"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/"
      }, "trang ch\u1EE7"));
    }
  }]);

  return Register;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    demo: state.demo
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(Register));

/***/ }),

/***/ "./src/component/client/_layout/footer/Content.jsx":
/*!*********************************************************!*\
  !*** ./src/component/client/_layout/footer/Content.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContentFooter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _scss_react_client_footer_footer_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../scss/react/client/footer/footer.scss */ "./src/scss/react/client/footer/footer.scss");
/* harmony import */ var _scss_react_client_footer_footer_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_react_client_footer_footer_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var jQuery = jquery__WEBPACK_IMPORTED_MODULE_3___default.a;

var ContentFooter = /*#__PURE__*/function (_Component) {
  _inherits(ContentFooter, _Component);

  var _super = _createSuper(ContentFooter);

  function ContentFooter() {
    var _temp, _this;

    _classCallCheck(this, ContentFooter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _super.call.apply(_super, [this].concat(args)), _this.drawGoogleMap = function () {
      var styles = [{
        stylers: [{
          saturation: 0
        }]
      }, {
        featureType: "road",
        elementType: "geometry",
        stylers: [//  { lightness: 100 },
        {
          visibility: "simplified"
        }]
      }, {
        featureType: "road",
        elementType: "labels",
        stylers: [{
          visibility: "off"
        }]
      }]; // Create a new StyledMapType object, passing it the array of styles,
      // as well as the name to be displayed on the map type control.

      var styledMap = new google.maps.StyledMapType(styles, {
        name: "Google Map"
      });
      var myLatlng = new google.maps.LatLng(10.651623, 107.270763);
      var mapOptions = {
        zoom: 10,
        scrollwheel: false,
        center: myLatlng,
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, "map_style"]
        }
      };
      var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        icon: '/image/map-icon.png'
      });
      var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions); //Associate the styled map with the MapTypeId and set it to display.

      map.mapTypes.set("map_style", styledMap);
      map.setMapTypeId("map_style");
      marker.setMap(map);
      var address_detail = '<div class="address_detail_map">' + '<h4 class="main_color">EBUDEZAIN Vietnam Limited Company</h4>' + "0674, Binh Gia Commune, Chau Duc District, Ba Ria - Vung Tau Province, Vietnam" + "</div>";
      address_detail = address_detail.split("\n").join("<br />");
      var infowindow = new google.maps.InfoWindow({
        content: address_detail
      });
      marker.addListener("click", function () {
        infowindow.open(map, marker);
      });
      infowindow.open(map, marker);
    }, _temp));
  }

  _createClass(ContentFooter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.drawGoogleMap();
      var thisPointer = this;
      jQuery(window).on("resize", function (e) {
        thisPointer.drawGoogleMap();
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-footer-content "
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "about-us animated fadeIn"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "title"
      }, "\u79C1\u305F\u3061\u306B\u3064\u3044\u3066"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "company-name"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-account-group-outline"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "EBUDEZAIN Vietnam Limited Company")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tax-code"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-star-box-multiple-outline"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "0314650129 ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tax-code-date"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-update"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "28-09-2017")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "address"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-home-map-marker"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "0674, Binh Gia Commune, Chau Duc District, Ba Ria - Vung Tau Province, Vietnam")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "phone"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-cellphone-nfc"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Phone in japan: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "tel:+8180-3387-0674"
      }, "080-3387-0674"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "email"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-card-account-mail-outline"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "mailto:thanhhung.code@gmail.com"
      }, "thanhhung.code@gmail.com")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "service-us animated fadeDown"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "title"
      }, "\u79C1\u305F\u3061\u306E\u30B5\u30FC\u30D3\u30B9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "seo-standard"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-google-ads"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "create-web-standard-seo"
      }, "SEO\u6A19\u6E96Web\u30C7\u30B6\u30A4\u30F3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chat-realtime"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-message-text-outline"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "create-web-chat-realtime"
      }, "\u30EA\u30A2\u30EB\u30BF\u30A4\u30E0Web\u30C1\u30E3\u30C3\u30C8\u306E\u8A2D\u8A08")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "recruit"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-human-male-child"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "create-web-recruit"
      }, "\u63A1\u7528\u3055\u308C\u305F\u30A6\u30A7\u30D6\u30C7\u30B6\u30A4\u30F3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "news"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-newspaper-variant-outline"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "create-web-news"
      }, "\u30CB\u30E5\u30FC\u30B9\u30A6\u30A7\u30D6\u30C7\u30B6\u30A4\u30F3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "marketing-sale-online"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-ballot-recount-outline"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "create-web-marketing-sale-online"
      }, "\u8CA9\u58F2\u30A6\u30A7\u30D6\u30C7\u30B6\u30A4\u30F3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "responsive"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-responsive"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "create-web-responsive"
      }, "\u30E2\u30D0\u30A4\u30EB\u30EC\u30B9\u30DD\u30F3\u30B7\u30D6\u30A6\u30A7\u30D6\u30C7\u30B6\u30A4\u30F3"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "map-canvas",
        className: "map-us"
      }));
    }
  }]);

  return ContentFooter;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/component/client/_layout/footer/index.jsx":
/*!*******************************************************!*\
  !*** ./src/component/client/_layout/footer/index.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _scss_react_client_footer_footer_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../scss/react/client/footer/footer.scss */ "./src/scss/react/client/footer/footer.scss");
/* harmony import */ var _scss_react_client_footer_footer_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_react_client_footer_footer_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Content_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Content.jsx */ "./src/component/client/_layout/footer/Content.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var Footer = /*#__PURE__*/function (_Component) {
  _inherits(Footer, _Component);

  var _super = _createSuper(Footer);

  function Footer() {
    _classCallCheck(this, Footer);

    return _super.apply(this, arguments);
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-footer wrapper-footer-page bg-gradient-home-page"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container head-footer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "footer-title"
      }, "\u30C1\u30E3\u30C3\u30C8\u30B7\u30B9\u30C6\u30E0\u3067\u304A\u5BA2\u69D8\u3092\u5E74\u4E2D\u7121\u4F11\u3067\u30B5\u30DD\u30FC\u30C8 ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/chat",
        className: "footer-go-to-chat"
      }, "\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30C1\u30E3\u30C3\u30C8")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "des-footer"
      }, "\u7D4C\u9A13\u8C4A\u5BCC\u306A\u30B9\u30BF\u30C3\u30D5\u306E\u30C1\u30FC\u30E0\u306B\u3088\u308A\u3001\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u304B\u3089\u554F\u984C\u3092\u5C0E\u304D\u5BFE\u51E6\u3059\u308B\u3060\u3051\u3067\u306A\u304F\u3001\u30B3\u30F3\u30B5\u30EB\u30C6\u30A3\u30F3\u30B0\u3092\u884C\u3044\u3001\u30D3\u30B8\u30CD\u30B9\u3068\u5171\u306B\u6210\u9577\u3057\u307E\u3059\u3002")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "option-contact"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-advisory"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-message-cog-outline"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "option-contact-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "type"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/chat/advisory-system"
      }, "\u30B3\u30F3\u30B5\u30EB\u30C6\u30A3\u30F3\u30B0\u30A6\u30A7\u30D6\u30C7\u30B6\u30A4\u30F3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        className: "link",
        to: "/chat/advisory-system"
      }, "\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30C1\u30E3\u30C3\u30C8"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-advisory"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-certificate-outline"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "option-contact-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "type"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/chat/advisory-system"
      }, "\u6280\u8853\u30B5\u30DD\u30FC\u30C8")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        className: "link",
        to: "/chat/advisory-system"
      }, "\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30C1\u30E3\u30C3\u30C8"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "item-advisory"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-email-edit-outline"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "option-contact-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "type"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        to: "/chat/advisory-system"
      }, "Web\u30EA\u30AF\u30A8\u30B9\u30C8\u3092\u9001\u4FE1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        className: "link",
        to: "/chat/advisory-system"
      }, "\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30C1\u30E3\u30C3\u30C8")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Content_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/component/client/_layout/header/ButtonHambeger.jsx":
/*!****************************************************************!*\
  !*** ./src/component/client/_layout/header/ButtonHambeger.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ButtonHambeger; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _svg_align_justify_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../svg/align-justify.jsx */ "./src/component/svg/align-justify.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var ButtonHambeger = /*#__PURE__*/function (_Component) {
  _inherits(ButtonHambeger, _Component);

  var _super = _createSuper(ButtonHambeger);

  function ButtonHambeger() {
    var _temp, _this;

    _classCallCheck(this, ButtonHambeger);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _super.call.apply(_super, [this].concat(args)), _this.toggleMenu = function () {
      var wrapperLink = document.getElementById('js-toggle-menu-mobile');

      if (wrapperLink) {
        wrapperLink.classList.toggle('open');
        document.body.classList.toggle('neo-scroll');
      }
    }, _temp));
  }

  _createClass(ButtonHambeger, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-button-hambeger mobile",
        onClick: this.toggleMenu
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_svg_align_justify_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null));
    }
  }]);

  return ButtonHambeger;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/component/client/_layout/header/Header.jsx":
/*!********************************************************!*\
  !*** ./src/component/client/_layout/header/Header.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_react_client_header_menu_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../scss/react/client/header/menu.scss */ "./src/scss/react/client/header/menu.scss");
/* harmony import */ var _scss_react_client_header_menu_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_react_client_header_menu_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Logo_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logo.jsx */ "./src/component/client/_layout/header/Logo.jsx");
/* harmony import */ var _MenuFull_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MenuFull.jsx */ "./src/component/client/_layout/header/MenuFull.jsx");
/* harmony import */ var _ButtonHambeger_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ButtonHambeger.jsx */ "./src/component/client/_layout/header/ButtonHambeger.jsx");
/* harmony import */ var _scss_react_client_header_header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../scss/react/client/header/header.scss */ "./src/scss/react/client/header/header.scss");
/* harmony import */ var _scss_react_client_header_header_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scss_react_client_header_header_scss__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var Header = /*#__PURE__*/function (_Component) {
  _inherits(Header, _Component);

  var _super = _createSuper(Header);

  function Header() {
    _classCallCheck(this, Header);

    return _super.apply(this, arguments);
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-header wrapper-header bg-gradient-home-page position-relative"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuFull_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
        match: this.props.match
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ButtonHambeger_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], null));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/component/client/_layout/header/HeaderHomePage.jsx":
/*!****************************************************************!*\
  !*** ./src/component/client/_layout/header/HeaderHomePage.jsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_react_client_header_menu_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../scss/react/client/header/menu.scss */ "./src/scss/react/client/header/menu.scss");
/* harmony import */ var _scss_react_client_header_menu_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_react_client_header_menu_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Logo_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Logo.jsx */ "./src/component/client/_layout/header/Logo.jsx");
/* harmony import */ var _LstWebDesignImg_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LstWebDesignImg.jsx */ "./src/component/client/_layout/header/LstWebDesignImg.jsx");
/* harmony import */ var _Menu_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Menu.jsx */ "./src/component/client/_layout/header/Menu.jsx");
/* harmony import */ var _scss_react_client_header_header_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../scss/react/client/header/header.scss */ "./src/scss/react/client/header/header.scss");
/* harmony import */ var _scss_react_client_header_header_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scss_react_client_header_header_scss__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var Header = /*#__PURE__*/function (_Component) {
  _inherits(Header, _Component);

  var _super = _createSuper(Header);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _super.call(this, props);

    _this.formatHeightHeader = function () {
      if (document.getElementsByClassName('js-nomal-height').length) {
        var heightPrevColumn = document.getElementsByClassName('js-nomal-height')[0].clientHeight;
        document.getElementsByClassName('component-web-design-image')[0]['style']['height'] = heightPrevColumn + "px";
      }
    };

    return _this;
  }

  _createClass(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var instance = this;
      instance.formatHeightHeader();
      window.addEventListener("resize", function () {
        instance.formatHeightHeader();
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-header wrapper-header-home-page bg-gradient-home-page position-relative"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Menu_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container-fluid"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-6 col-sm-12 js-nomal-height"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Logo_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "des-create-explore position-relative"
      }, "\u3042\u306A\u305F\u306E\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u3092\u4F5C\u6210", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "decor-element animated fadeIn"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        className: "rotate-circle polygon-svg-rotate",
        viewBox: "0 0 176 198",
        fill: "none"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        opacity: "0.05",
        d: "M85.5 10.9904C87.047 10.0972 88.953 10.0972 90.5 10.9904L162.969 52.8301C164.516 53.7233 165.469 55.3739 165.469 57.1603V140.84C165.469 142.626 164.516 144.277 162.969 145.17L90.5 187.01C88.953 187.903 87.047 187.903 85.5 187.01L13.0314 145.17L8.03143 153.83L13.0314 145.17C11.4844 144.277 10.5314 142.626 10.5314 140.84V57.1603C10.5314 55.3739 11.4844 53.7233 13.0314 52.8301L85.5 10.9904Z",
        stroke: "#020549",
        strokeWidth: "20"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "button-click-interactive"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/service",
        className: "btn btn-success btn-create-service animate-support animated tada"
      }, "\u5229\u7528\u30B5\u30FC\u30D3\u30B9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/theme",
        className: "link-create-explore"
      }, "\u63A2\u691C\u3059\u308B")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "service-description"
      }, "\u79C1\u305F\u3061\u306F\u30D7\u30ED\u306E\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u30C7\u30B6\u30A4\u30F3\u30E6\u30CB\u30C3\u30C8\u3067\u3059\u3002 \u30A8\u30D6\u30C7\u30B6\u30A4\u30F3\u306F\u3001\u65E5\u672C\u4F01\u696D\u306E\u6210\u9577\u306B\u5BFE\u5FDC\u3067\u304D\u308B\u3053\u3068\u3092\u3046\u308C\u3057\u304F\u601D\u3044\u307E\u3059\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        to: "/chat",
        className: "text-bordered"
      }, "\u30AF\u30EA\u30C3\u30AF\u3057\u3066\u30C1\u30E3\u30C3\u30C8")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-6 col-sm-12 pc"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LstWebDesignImg_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
        fillClass: "component-web-design-image "
      })))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/component/client/_layout/header/Logo.jsx":
/*!******************************************************!*\
  !*** ./src/component/client/_layout/header/Logo.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _svg_layer_group_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../svg/layer-group.jsx */ "./src/component/svg/layer-group.jsx");
/* harmony import */ var _scss_react_client_header_logo_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../scss/react/client/header/logo.scss */ "./src/scss/react/client/header/logo.scss");
/* harmony import */ var _scss_react_client_header_logo_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_react_client_header_logo_scss__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var Logo = /*#__PURE__*/function (_Component) {
  _inherits(Logo, _Component);

  var _super = _createSuper(Logo);

  function Logo() {
    _classCallCheck(this, Logo);

    return _super.apply(this, arguments);
  }

  _createClass(Logo, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-logo"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        className: "logo"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        activeClassName: "active",
        exact: true,
        to: "/"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_svg_layer_group_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null), " EBUDEZAIN")));
    }
  }]);

  return Logo;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./src/component/client/_layout/header/LstWebDesignImg.jsx":
/*!*****************************************************************!*\
  !*** ./src/component/client/_layout/header/LstWebDesignImg.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var LstWebDesignImg = /*#__PURE__*/function (_Component) {
  _inherits(LstWebDesignImg, _Component);

  var _super = _createSuper(LstWebDesignImg);

  function LstWebDesignImg() {
    _classCallCheck(this, LstWebDesignImg);

    return _super.apply(this, arguments);
  }

  _createClass(LstWebDesignImg, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("scroll", function (event) {
        var DF_SCALE_PERCENT = 0.5;
        var scroll = this.scrollY;
        var wrapperComponent = document.getElementsByClassName("component-web-design-image");

        if (wrapperComponent.length) {
          var positionScroll = wrapperComponent[0].clientHeight;
          var scale = 0;

          if (scroll > positionScroll) {
            scale = 100;
          } else {
            scale = parseInt(scroll * 100 * 100 / positionScroll) / 100.0;
          }

          scale *= DF_SCALE_PERCENT;
          document.getElementsByClassName("box-samples-img-1")[0]['style']['top'] = 20 + scale + '%';
          document.getElementsByClassName("box-samples-img-2")[0]['style']['top'] = 10 - scale + '%';
          document.getElementsByClassName("box-samples-img-3")[0]['style']['bottom'] = 10 - scale + '%';
          document.getElementsByClassName("box-samples-img-3")[0]['style']['right'] = 20 - scale + '%';
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: this.props.fillClass + ' position-relative'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "img-classic box-samples-img-1 animated jackInTheBox",
        src: "image/general/img-sample-1-413x566.jpg",
        alt: "",
        width: "413",
        height: "566"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "img-classic box-samples-img-2 animated rollIn",
        src: "image/general/img-sample-2-413x566.jpg",
        alt: "",
        width: "413",
        height: "566"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "img-classic box-samples-img-3 animated zoomIn",
        src: "image/general/img-sample-3-413x566.jpg",
        alt: "",
        width: "413",
        height: "566"
      }));
    }
  }]);

  return LstWebDesignImg;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LstWebDesignImg);

/***/ }),

/***/ "./src/component/client/_layout/header/Menu.jsx":
/*!******************************************************!*\
  !*** ./src/component/client/_layout/header/Menu.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _scss_react_client_header_menu_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../scss/react/client/header/menu.scss */ "./src/scss/react/client/header/menu.scss");
/* harmony import */ var _scss_react_client_header_menu_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_react_client_header_menu_scss__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var Menu = /*#__PURE__*/function (_Component) {
  _inherits(Menu, _Component);

  var _super = _createSuper(Menu);

  function Menu(props) {
    _classCallCheck(this, Menu);

    return _super.call(this, props);
  }

  _createClass(Menu, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-menu menu-home-page"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "wrapper-link"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        activeClassName: "active",
        exact: true,
        to: "/"
      }, "\u30DB\u30FC\u30E0\u30DA\u30FC\u30B8")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        activeClassName: "active",
        to: "/service"
      }, "\u30B5\u30FC\u30D3\u30B9")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        activeClassName: "active",
        to: "/chat"
      }, "\u30C1\u30E3\u30C3\u30C8")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        activeClassName: "active",
        to: "/theme"
      }, "\u610F\u5320"))));
    }
  }]);

  return Menu;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./src/component/client/_layout/header/MenuFull.jsx":
/*!**********************************************************!*\
  !*** ./src/component/client/_layout/header/MenuFull.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_react_client_header_menu_full_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../scss/react/client/header/menu-full.scss */ "./src/scss/react/client/header/menu-full.scss");
/* harmony import */ var _scss_react_client_header_menu_full_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_react_client_header_menu_full_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _partial_General_NavLinkCustom_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../partial/General/NavLinkCustom.jsx */ "./src/component/client/_layout/partial/General/NavLinkCustom.jsx");
/* harmony import */ var _svg_windows_close_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../svg/windows-close.jsx */ "./src/component/svg/windows-close.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var MenuFull = /*#__PURE__*/function (_Component) {
  _inherits(MenuFull, _Component);

  var _super = _createSuper(MenuFull);

  function MenuFull(props) {
    var _this;

    _classCallCheck(this, MenuFull);

    _this = _super.call(this, props);

    _this.getClassActive = function (to) {
      var group = _this.props.group;

      if (group && group == to) {
        return 'active';
      }

      return '';
    };

    _this.activeMenuMobile = function (event) {
      if (window.innerWidth > 767) {
        return;
      }

      var dropdownClick = event.target.parentElement;

      if (dropdownClick.classList.contains('active')) {
        dropdownClick.classList.remove('active');
      } else {
        dropdownClick.classList.add('active-temp');
      }

      var lstDropDown = document.getElementById('js-toggle-menu-mobile').getElementsByClassName('dropdown-menu');

      if (lstDropDown.length) {
        for (var index = 0; index < lstDropDown.length; index++) {
          if (lstDropDown[index].classList.contains('active')) {
            lstDropDown[index].classList.remove('active');
          }

          if (lstDropDown[index].classList.contains('active-temp')) {
            lstDropDown[index].classList.remove('active-temp');
            lstDropDown[index].classList.add('active');
          }
        }
      }
    };

    _this.closeMenuToggle = function (event) {
      if (window.innerWidth > 767) {
        return;
      }

      document.getElementById('js-toggle-menu-mobile').classList.toggle('open');
      document.body.classList.remove('neo-scroll');
    };

    return _this;
  }

  _createClass(MenuFull, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "js-toggle-menu-mobile",
        className: "component-menu menu-full"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "mobile head-line-close-menu",
        onClick: this.closeMenuToggle
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_svg_windows_close_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "wrapper-link"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partial_General_NavLinkCustom_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        exact: true,
        to: "/",
        text: "\u30DB\u30FC\u30E0\u30DA\u30FC\u30B8"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: 'dropdown-menu ' + this.getClassActive('service')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partial_General_NavLinkCustom_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        to: "/service",
        text: "\u30B5\u30FC\u30D3\u30B9"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-plus-outline",
        onClick: this.activeMenuMobile
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "sub-link"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partial_General_NavLinkCustom_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        to: "/service/system",
        text: "\u30B5\u30FC\u30D3\u30B9"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partial_General_NavLinkCustom_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        to: "/service/hung",
        text: "h\xF9ng"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partial_General_NavLinkCustom_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        to: "/service/nhin",
        text: "nhi"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: 'dropdown-menu ' + this.getClassActive('chat')
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partial_General_NavLinkCustom_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        to: "/chat",
        text: "\u30C1\u30E3\u30C3\u30C8"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-plus-outline",
        onClick: this.activeMenuMobile
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "sub-link"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partial_General_NavLinkCustom_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        to: "/chat/advisory-system",
        text: "\u30B3\u30F3\u30B5\u30EB\u30C6\u30A3\u30F3\u30B0\u30A6\u30A7\u30D6\u30C7\u30B6\u30A4\u30F3"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partial_General_NavLinkCustom_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        to: "/chat/technical-support",
        text: "\u6280\u8853\u30B5\u30DD\u30FC\u30C8"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partial_General_NavLinkCustom_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        to: "/chat/website-creation-request",
        text: "\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u4F5C\u6210\u4F9D\u983C"
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partial_General_NavLinkCustom_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        to: "/theme",
        text: "\u610F\u5320"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partial_General_NavLinkCustom_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        to: "/contact",
        text: "\u304A\u554F\u3044\u5408\u308F\u305B"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_partial_General_NavLinkCustom_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        to: "/login",
        text: "\u30ED\u30B0\u30A4\u30F3"
      }))));
    }
  }]);

  return MenuFull;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MenuFull);

/***/ }),

/***/ "./src/component/client/_layout/partial/General/AloNow.jsx":
/*!*****************************************************************!*\
  !*** ./src/component/client/_layout/partial/General/AloNow.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AloNow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_react_client_page_alo_now_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../scss/react/client/page/alo-now.scss */ "./src/scss/react/client/page/alo-now.scss");
/* harmony import */ var _scss_react_client_page_alo_now_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_react_client_page_alo_now_scss__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var AloNow = /*#__PURE__*/function (_Component) {
  _inherits(AloNow, _Component);

  var _super = _createSuper(AloNow);

  function AloNow(props) {
    var _this;

    _classCallCheck(this, AloNow);

    _this = _super.call(this, props);
    _this.state = {
      tel: '080-3387-0674'
    };
    return _this;
  }

  _createClass(AloNow, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-alo-now"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: this.state.tel + "tel:",
        rel: "nofollow"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "alo-phone"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "animated infinite zoomIn alo-ph-circle"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "animated infinite pulse alo-ph-circle-fill"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "animated infinite tada alo-ph-img-circle"
      }))));
    }
  }]);

  return AloNow;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/component/client/_layout/partial/General/BackTop.jsx":
/*!******************************************************************!*\
  !*** ./src/component/client/_layout/partial/General/BackTop.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BackTop; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_react_client_page_back_top_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../scss/react/client/page/back-top.scss */ "./src/scss/react/client/page/back-top.scss");
/* harmony import */ var _scss_react_client_page_back_top_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_react_client_page_back_top_scss__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var BackTop = /*#__PURE__*/function (_Component) {
  _inherits(BackTop, _Component);

  var _super = _createSuper(BackTop);

  function BackTop(props) {
    var _this;

    _classCallCheck(this, BackTop);

    _this = _super.call(this, props);

    _this.trackScroll = function (e) {
      var scrolled = window.pageYOffset;
      var coords = document.documentElement.clientHeight;

      if (scrolled > coords) {
        var btnBackTop = document.getElementsByClassName('component-back-top');

        if (btnBackTop.length) {
          btnBackTop = btnBackTop[0];
          btnBackTop.classList.remove('d-none');
        }
      }

      if (scrolled < coords) {
        var btnBackTop = document.getElementsByClassName('component-back-top');

        if (btnBackTop.length) {
          btnBackTop = btnBackTop[0];
          btnBackTop.classList.add('d-none');
        }
      }
    };

    _this.backToTop = function () {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(_this.backToTop, 10);
      }
    };

    return _this;
  }

  _createClass(BackTop, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.trackScroll);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-back-top d-none",
        onClick: this.backToTop
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        title: "\u30DA\u30FC\u30B8\u306E\u5148\u982D\u306B\u79FB\u52D5",
        id: "back-top",
        className: "dpl_way"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-arrow-up-bold-box-outline"
      })));
    }
  }]);

  return BackTop;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/component/client/_layout/partial/General/NavLinkCustom.jsx":
/*!************************************************************************!*\
  !*** ./src/component/client/_layout/partial/General/NavLinkCustom.jsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavLinkCustom; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var NavLinkCustom = /*#__PURE__*/function (_Component) {
  _inherits(NavLinkCustom, _Component);

  var _super = _createSuper(NavLinkCustom);

  function NavLinkCustom() {
    var _temp, _this;

    _classCallCheck(this, NavLinkCustom);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _super.call.apply(_super, [this].concat(args)), _this.closeMenuToggle = function (event) {
      if (window.innerWidth > 767) {
        return;
      }

      document.getElementById('js-toggle-menu-mobile').classList.toggle('open');
      document.body.classList.remove('neo-scroll');
    }, _temp));
  }

  _createClass(NavLinkCustom, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        onClick: this.closeMenuToggle,
        activeClassName: "active",
        exact: this.props.exact,
        to: this.props.to
      }, this.props.text);
    }
  }]);

  return NavLinkCustom;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/component/client/_layout/partial/HomePage/ServiceWebsiteSelector.jsx":
/*!**********************************************************************************!*\
  !*** ./src/component/client/_layout/partial/HomePage/ServiceWebsiteSelector.jsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_react_client_page_home_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../scss/react/client/page/home.scss */ "./src/scss/react/client/page/home.scss");
/* harmony import */ var _scss_react_client_page_home_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_react_client_page_home_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _svg_box_classic_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../svg/box-classic.jsx */ "./src/component/svg/box-classic.jsx");
/* harmony import */ var _StandardContract_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StandardContract.jsx */ "./src/component/client/_layout/partial/HomePage/StandardContract.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var ServiceWebsiteSelector = /*#__PURE__*/function (_Component) {
  _inherits(ServiceWebsiteSelector, _Component);

  var _super = _createSuper(ServiceWebsiteSelector);

  function ServiceWebsiteSelector(props) {
    _classCallCheck(this, ServiceWebsiteSelector);

    return _super.call(this, props);
  }

  _createClass(ServiceWebsiteSelector, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-service-website-selector"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "topic-website-selector"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title-topic"
      }, "\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u306E\u30C7\u30B6\u30A4\u30F3\u30CB\u30FC\u30BA")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wrapper-website-selector clear animated fadeInRight"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "block-website-selector"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "icon-title-block"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "icon-title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-abs-middle hero-icon hero-creation"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_svg_box_classic_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        fillColor: "#DDC2E5"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "text-center"
      }, "\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u306E\u30C7\u30B6\u30A4\u30F3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "title-block-language"
      }, "\u4E8B\u696D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "content-language"
      }, "\u30D3\u30B8\u30CD\u30B9\u306E\u958B\u767A\u3068\u4FC3\u9032\u3001\u30D6\u30E9\u30F3\u30C9\u4FA1\u5024\u306E\u5411\u4E0A")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "block-website-selector clear middle animated fadeInUp"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "icon-title-block"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "icon-title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-abs-middle hero-icon hero-format-list-text"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_svg_box_classic_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        fillColor: "#FFD5C5"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "text-center"
      }, "\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u306E\u30C7\u30B6\u30A4\u30F3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "title-block-language"
      }, "\u3054\u81EA\u8EAB\u306E\u8981\u4EF6\u306B\u5FDC\u3058\u305F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "content-language"
      }, "\u30A2\u30A4\u30C7\u30A2\u3092\u4E0E\u3048\u3066\u30D3\u30B8\u30CD\u30B9\u306B\u96C6\u4E2D\u3057\u3001\u6B8B\u308A\u306F\u79C1\u305F\u3061\u306B\u4EFB\u305B\u307E\u3059")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "block-website-selector clear animated fadeInLeft"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "icon-title-block"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "icon-title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-abs-middle hero-icon hero-auto-fix"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_svg_box_classic_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
        fillColor: "#f5d285"
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "text-center"
      }, "\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u306E\u30C7\u30B6\u30A4\u30F3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
        className: "title-block-language"
      }, "\u96FB\u5B50\u5546\u53D6\u5F15"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "content-language"
      }, "\u30D3\u30B8\u30CD\u30B9\u3092\u4FC3\u9032\u3057\u3001\u30AA\u30F3\u30E9\u30A4\u30F3\u5E02\u5834\u3092\u652F\u914D\u3059\u308B"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StandardContract_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null));
    }
  }]);

  return ServiceWebsiteSelector;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ServiceWebsiteSelector);

/***/ }),

/***/ "./src/component/client/_layout/partial/HomePage/StandardContract.jsx":
/*!****************************************************************************!*\
  !*** ./src/component/client/_layout/partial/HomePage/StandardContract.jsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StandardContract; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _library_format_height_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../library/format-height.js */ "./src/library/format-height.js");
/* harmony import */ var _library_format_height_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_library_format_height_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var StandardContract = /*#__PURE__*/function (_Component) {
  _inherits(StandardContract, _Component);

  var _super = _createSuper(StandardContract);

  function StandardContract(props) {
    var _this;

    _classCallCheck(this, StandardContract);

    _this = _super.call(this, props);
    _this.state = {
      standardContract: [{
        icon: "hero-television-clean",
        text: "お客様は適切なウェブサイトのインターフェースを選択します"
      }, {
        icon: "hero-selection-search",
        text: "情報を提供し、編集ウェブサイトをリクエストする"
      }, {
        icon: "hero-auto-fix",
        text: "必要に応じて編集し、デモを実施します"
      }, {
        icon: "hero-hand-okay",
        text: "製品のテスト実行と引き渡しの実施"
      }]
    };
    return _this;
  }

  _createClass(StandardContract, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(".component-standard-contract").each(function () {
        _library_format_height_js__WEBPACK_IMPORTED_MODULE_1___default()(jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).get(0), "component-item-standard-contract");
      });
      jquery__WEBPACK_IMPORTED_MODULE_2___default()(window).on("resize", function () {
        jquery__WEBPACK_IMPORTED_MODULE_2___default()(".component-standard-contract").each(function () {
          _library_format_height_js__WEBPACK_IMPORTED_MODULE_1___default()(jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).get(0), "component-item-standard-contract");
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-standard-contract"
      }, this.state.standardContract.map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ItemStandardContract, {
          key: index + item.icon,
          data: item
        });
      }));
    }
  }]);

  return StandardContract;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



var ItemStandardContract = /*#__PURE__*/function (_Component2) {
  _inherits(ItemStandardContract, _Component2);

  var _super2 = _createSuper(ItemStandardContract);

  function ItemStandardContract() {
    _classCallCheck(this, ItemStandardContract);

    return _super2.apply(this, arguments);
  }

  _createClass(ItemStandardContract, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-item-standard-contract"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        to: "/designs",
        className: "wrapper-icon-item-standard"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: this.props.data.icon + " hero-icon animated"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "des-standard-contract"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        to: "/designs"
      }, this.props.data.text)));
    }
  }]);

  return ItemStandardContract;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/***/ }),

/***/ "./src/component/client/_layout/partial/HomePage/index.jsx":
/*!*****************************************************************!*\
  !*** ./src/component/client/_layout/partial/HomePage/index.jsx ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _scss_react_client_page_home_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../scss/react/client/page/home.scss */ "./src/scss/react/client/page/home.scss");
/* harmony import */ var _scss_react_client_page_home_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_react_client_page_home_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _page_Theme_ItemTheme_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../page/Theme/ItemTheme.jsx */ "./src/component/client/page/Theme/ItemTheme.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var HomePage = /*#__PURE__*/function (_Component) {
  _inherits(HomePage, _Component);

  var _super = _createSuper(HomePage);

  function HomePage() {
    _classCallCheck(this, HomePage);

    return _super.apply(this, arguments);
  }

  _createClass(HomePage, [{
    key: "render",
    value: function render() {
      var themes = this.props.themes;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-intro-theme bg-gradient-home-page"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "topic-website-selector"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title-topic"
      }, "\u7D76\u5999\u306A\u30C7\u30B6\u30A4\u30F3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-intro-theme"
      }, themes && themes.map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_page_Theme_ItemTheme_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: index,
          data: item
        });
      })));
    }
  }]);

  return HomePage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    themes: state.themes
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(HomePage));

/***/ }),

/***/ "./src/component/client/page/Chat/Chat.jsx":
/*!*************************************************!*\
  !*** ./src/component/client/page/Chat/Chat.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_header_Header_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_layout/header/Header.jsx */ "./src/component/client/_layout/header/Header.jsx");
/* harmony import */ var _layout_footer_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_layout/footer/index.jsx */ "./src/component/client/_layout/footer/index.jsx");
/* harmony import */ var _SideBarChat_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SideBarChat.jsx */ "./src/component/client/page/Chat/SideBarChat.jsx");
/* harmony import */ var _ListMessage_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListMessage.jsx */ "./src/component/client/page/Chat/ListMessage.jsx");
/* harmony import */ var _scss_react_client_page_chat_chat_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../scss/react/client/page/chat/chat.scss */ "./src/scss/react/client/page/chat/chat.scss");
/* harmony import */ var _scss_react_client_page_chat_chat_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scss_react_client_page_chat_chat_scss__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var Chat = /*#__PURE__*/function (_Component) {
  _inherits(Chat, _Component);

  var _super = _createSuper(Chat);

  function Chat() {
    _classCallCheck(this, Chat);

    return _super.apply(this, arguments);
  }

  _createClass(Chat, [{
    key: "render",
    value: function render() {
      console.log("render lại Chat"); // console.log(data_hung);///chat {match.params.id}

      var match = this.props.match;
      var myinfo = this.props.myinfo;

      if (!myinfo || !myinfo.avatar || !myinfo.name) {
        myinfo = {};
        myinfo.avatar = '/image/avatar-hero.jpg';
        myinfo.name = 'チュオン タン フン';
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-chat"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_header_Header_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        match: match,
        group: "/chat"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bg-chat-temalate"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wrapper-page-chat"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SideBarChat_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
        myinfo: myinfo
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListMessage_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
        myinfo: myinfo
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_footer_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null));
    }
  }]);

  return Chat;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Chat);

/***/ }),

/***/ "./src/component/client/page/Chat/Emoji.jsx":
/*!**************************************************!*\
  !*** ./src/component/client/page/Chat/Emoji.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_react_client_page_chat_emoji_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../scss/react/client/page/chat/emoji.scss */ "./src/scss/react/client/page/chat/emoji.scss");
/* harmony import */ var _scss_react_client_page_chat_emoji_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_react_client_page_chat_emoji_scss__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Emoji = /*#__PURE__*/function (_Component) {
  _inherits(Emoji, _Component);

  var _super = _createSuper(Emoji);

  function Emoji() {
    var _temp, _this;

    _classCallCheck(this, Emoji);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _super.call.apply(_super, [this].concat(args)), _this.addIconInputChat = function (event) {
      var input = document.getElementById("js-input-chat");

      if (input) {
        var content = input.value; /// add icon 

        content = content + _this.props.symbol;
        input.value = content;
      }
    }, _temp));
  }

  _createClass(Emoji, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "component-emoji",
        onClick: this.addIconInputChat
      }, this.props.symbol);
    }
  }]);

  return Emoji;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Emoji);

/***/ }),

/***/ "./src/component/client/page/Chat/HeadInfo.jsx":
/*!*****************************************************!*\
  !*** ./src/component/client/page/Chat/HeadInfo.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _scss_react_client_page_chat_head_info_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../scss/react/client/page/chat/head-info.scss */ "./src/scss/react/client/page/chat/head-info.scss");
/* harmony import */ var _scss_react_client_page_chat_head_info_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_react_client_page_chat_head_info_scss__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var HeadInfo = /*#__PURE__*/function (_Component) {
  _inherits(HeadInfo, _Component);

  var _super = _createSuper(HeadInfo);

  function HeadInfo() {
    var _temp, _this;

    _classCallCheck(this, HeadInfo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _super.call.apply(_super, [this].concat(args)), _this.renderTextEndTimeonline = function (time) {
      var endTime = new Date(time.replace(/-/g, "/"));
      var timeNow = new Date();
      var diffTime = Math.abs(timeNow - endTime);
      diffTime = parseInt(diffTime);
      var diffTimeMinute = Math.round(diffTime / (1000 * 60));

      if (diffTimeMinute >= 60) {
        var diffTimeHour = Math.round(diffTimeMinute / 60);

        if (diffTimeHour / 24 < 1) {
          return diffTimeHour + "時間前にアクティブ";
        }

        return Math.round(diffTimeHour / 24) + "日前にアクティブ";
      } else {
        return "アクティブ" + diffTimeMinute + "分前";
      }
    }, _temp));
  }

  _createClass(HeadInfo, [{
    key: "render",
    value: function render() {
      console.log("render lại head ìon");
      var users = this.props.users;
      var userActiveChat = users.find(function (user) {
        return user.isActive;
      });
      var timeOnline = '';

      if (userActiveChat.isOnline) {
        var timeOnline = "オンライン";
      } else {
        var timeOnline = this.renderTextEndTimeonline(userActiveChat.timeEndOnline);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-head-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-active-chat"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
        className: "state-avatar active-online"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: userActiveChat.avatar,
        alt: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "name"
      }, userActiveChat.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: (userActiveChat.isOnline ? "active-now" : '') + " time-online"
      }, timeOnline))));
    }
  }]);

  return HeadInfo;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    users: state.userChat
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(HeadInfo));

/***/ }),

/***/ "./src/component/client/page/Chat/InputSendChat.jsx":
/*!**********************************************************!*\
  !*** ./src/component/client/page/Chat/InputSendChat.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ListEmoji_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListEmoji.jsx */ "./src/component/client/page/Chat/ListEmoji.jsx");
/* harmony import */ var _scss_react_client_page_chat_input_send_chat_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../scss/react/client/page/chat/input-send-chat.scss */ "./src/scss/react/client/page/chat/input-send-chat.scss");
/* harmony import */ var _scss_react_client_page_chat_input_send_chat_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_react_client_page_chat_input_send_chat_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../config/index.js */ "./src/config/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var InputSendChat = /*#__PURE__*/function (_Component) {
  _inherits(InputSendChat, _Component);

  var _super = _createSuper(InputSendChat);

  function InputSendChat(props) {
    var _this;

    _classCallCheck(this, InputSendChat);

    _this = _super.call(this, props);

    _this.handleSendMessageDown = function (event) {
      if (event.keyCode == 13 && !event.shiftKey) {
        console.log(event.target.value); /// .replace(/\n/g,'<br />')

        _this.setState({
          sendChat: true
        });

        document.getElementById("js-input-chat").value = "";
        return false;
      }

      if (event.keyCode == 32) {
        var input = document.getElementById("js-input-chat");

        if (input) {
          var content = input.value; /// get word last

          var words = content.split(" ");
          var wordLastest = words[words.length - 1];
          console.log(wordLastest); //// check have sysbol 

          var emojisCall = _config_index_js__WEBPACK_IMPORTED_MODULE_4__["default"].EMOJIS.filter(function (item) {
            return item.sign == wordLastest;
          });
          console.log(emojisCall);

          if (emojisCall.length) {
            /// add icon 
            var lastIndex = content.lastIndexOf(" ");
            input.value = content.substring(0, lastIndex) + " " + emojisCall[0].symbol;
          }
        }
      }
    };

    _this.handleSendMessageUp = function () {
      if (_this.state.sendChat) {
        _this.setState({
          sendChat: false
        });

        document.getElementById("js-input-chat").value = "";
      }
    };

    _this.retrieveImageFromClipboardAsBlob = function (pasteEvent, callback) {
      if (!pasteEvent.clipboardData) {
        if (typeof callback == "function") {
          /// call calback function undefine
          callback(undefined);
        }
      }

      var items = pasteEvent.clipboardData.items;

      if (!items) {
        if (typeof callback == "function") {
          /// call calback function undefine
          callback(undefined);
        }
      }

      for (var i = 0; i < items.length; i++) {
        // Skip content if not image
        if (items[i].type.indexOf("image") == -1) continue; // Retrieve image on clipboard as blob

        var blob = items[i].getAsFile(); // Create an image

        var img = new Image(); // Once the image loads, render the img on the canvas

        img.onload = function () {
          // Update dimensions of the canvas with the dimensions of the image
          callback(this);
        }; // Crossbrowser support for URL


        var URLObj = window.URL || window.webkitURL; // Creates a DOMString containing a URL representing the object given in the parameter
        // namely the original Blob

        try {
          img.src = URLObj.createObjectURL(blob);
        } catch (error) {
          console.log(error);
        }
      }
    };

    _this.showListEmoji = function (event) {
      var emojis = document.getElementById("js-emojis");

      if (emojis) {
        emojis.classList.add("show-temp");
      }
    };

    _this.state = {
      sendChat: false
    };
    return _this;
  }

  _createClass(InputSendChat, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var sup = this;
      window.addEventListener("paste", function (event) {
        // Handle the event
        sup.retrieveImageFromClipboardAsBlob(event, function (imgLoading) {
          // add it in editor
          imgLoading.width = 100; /// create wrapper img

          var wrapperImage = document.createElement("div");
          wrapperImage.className = "remove-image";

          wrapperImage.onclick = function () {
            this.remove();
          };

          wrapperImage.appendChild(imgLoading);
          document.getElementById("js-image--block").appendChild(wrapperImage);
        });
      }, false);

      window.onclick = function (event) {
        if (event.target) {
          if (event.target.classList.contains('component-emoji')) {
            return;
          }
        }

        var emojis = document.getElementById("js-emojis");

        if (emojis) {
          emojis.classList.remove("show");
          setTimeout(function () {
            if (emojis.classList.contains("show-temp")) {
              emojis.classList.remove("show-temp");
              emojis.classList.add("show");
            }
          }, 100);
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-input-send-chat"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "js-image--block",
        className: "image-block"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-sticker-emoji emoticon",
        onClick: this.showListEmoji
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        id: "js-input-chat",
        onKeyDown: this.handleSendMessageDown,
        onKeyUp: this.handleSendMessageUp,
        placeholder: "\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u66F8\u304F..."
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-send-outline send"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-heart-multiple-outline react"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListEmoji_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null));
    }
  }]);

  return InputSendChat;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])()(InputSendChat));

/***/ }),

/***/ "./src/component/client/page/Chat/ListEmoji.jsx":
/*!******************************************************!*\
  !*** ./src/component/client/page/Chat/ListEmoji.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Emoji_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Emoji.jsx */ "./src/component/client/page/Chat/Emoji.jsx");
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../config/index.js */ "./src/config/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var ListEmoji = /*#__PURE__*/function (_Component) {
  _inherits(ListEmoji, _Component);

  var _super = _createSuper(ListEmoji);

  function ListEmoji(props) {
    _classCallCheck(this, ListEmoji);

    return _super.call(this, props);
  }

  _createClass(ListEmoji, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "js-emojis",
        className: "component-list-emoji"
      }, _config_index_js__WEBPACK_IMPORTED_MODULE_2__["default"].EMOJIS.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Emoji_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
          key: item.sign,
          symbol: item.symbol,
          sign: item.sign
        });
      }));
    }
  }]);

  return ListEmoji;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ListEmoji);

/***/ }),

/***/ "./src/component/client/page/Chat/ListMessage.jsx":
/*!********************************************************!*\
  !*** ./src/component/client/page/Chat/ListMessage.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _HeadInfo_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeadInfo.jsx */ "./src/component/client/page/Chat/HeadInfo.jsx");
/* harmony import */ var _MessageChat_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MessageChat.jsx */ "./src/component/client/page/Chat/MessageChat.jsx");
/* harmony import */ var _InputSendChat_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./InputSendChat.jsx */ "./src/component/client/page/Chat/InputSendChat.jsx");
/* harmony import */ var _MessageChatTyping_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MessageChatTyping.jsx */ "./src/component/client/page/Chat/MessageChatTyping.jsx");
/* harmony import */ var _scss_react_client_page_chat_list_message_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../scss/react/client/page/chat/list-message.scss */ "./src/scss/react/client/page/chat/list-message.scss");
/* harmony import */ var _scss_react_client_page_chat_list_message_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scss_react_client_page_chat_list_message_scss__WEBPACK_IMPORTED_MODULE_6__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









var ListMessage = /*#__PURE__*/function (_Component) {
  _inherits(ListMessage, _Component);

  var _super = _createSuper(ListMessage);

  function ListMessage() {
    _classCallCheck(this, ListMessage);

    return _super.apply(this, arguments);
  }

  _createClass(ListMessage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.getElementById('js-scroll-to-bottom').scrollTo(0, document.getElementById('js-scroll-to-bottom').scrollHeight);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      document.getElementById('js-scroll-to-bottom').scrollTo(0, document.getElementById('js-scroll-to-bottom').scrollHeight);
    }
  }, {
    key: "render",
    value: function render() {
      console.log("render lại ListMessage");
      var users = this.props.users;
      var userActiveChat = users.find(function (user) {
        return user.isActive;
      });
      var messages = userActiveChat.message;
      var myinfo = this.props.myinfo;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-list-message"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HeadInfo_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "wrapper-list-message",
        id: "js-scroll-to-bottom"
      }, messages && messages.map(function (message, key) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MessageChat_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: "message-chat" + key + userActiveChat.id,
          myinfo: myinfo,
          message: message,
          toUser: userActiveChat
        });
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MessageChatTyping_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
        toUser: userActiveChat
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InputSendChat_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null));
    }
  }]);

  return ListMessage;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    users: state.userChat
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(ListMessage));

/***/ }),

/***/ "./src/component/client/page/Chat/ListUser.jsx":
/*!*****************************************************!*\
  !*** ./src/component/client/page/Chat/ListUser.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_react_client_page_chat_list_user_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../scss/react/client/page/chat/list-user.scss */ "./src/scss/react/client/page/chat/list-user.scss");
/* harmony import */ var _scss_react_client_page_chat_list_user_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_react_client_page_chat_list_user_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UserChat_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserChat.jsx */ "./src/component/client/page/Chat/UserChat.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var ListUser = /*#__PURE__*/function (_Component) {
  _inherits(ListUser, _Component);

  var _super = _createSuper(ListUser);

  function ListUser() {
    _classCallCheck(this, ListUser);

    return _super.apply(this, arguments);
  }

  _createClass(ListUser, [{
    key: "render",
    value: function render() {
      var users = this.props.users;
      console.log("render list user");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-list-user"
      }, users && users.map(function (user) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserChat_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: user.id,
          user: user
        });
      }));
    }
  }]);

  return ListUser;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    users: state.userChat
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(ListUser));

/***/ }),

/***/ "./src/component/client/page/Chat/MessageChat.jsx":
/*!********************************************************!*\
  !*** ./src/component/client/page/Chat/MessageChat.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _action_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../action/type.js */ "./src/action/type.js");
/* harmony import */ var _scss_react_client_page_chat_message_chat_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../scss/react/client/page/chat/message-chat.scss */ "./src/scss/react/client/page/chat/message-chat.scss");
/* harmony import */ var _scss_react_client_page_chat_message_chat_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_react_client_page_chat_message_chat_scss__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var MessageChat = /*#__PURE__*/function (_Component) {
  _inherits(MessageChat, _Component);

  var _super = _createSuper(MessageChat);

  function MessageChat() {
    _classCallCheck(this, MessageChat);

    return _super.apply(this, arguments);
  }

  _createClass(MessageChat, [{
    key: "render",
    value: function render() {
      var myinfo = this.props.myinfo;
      var message = this.props.message;
      var toUser = this.props.toUser;
      var userInfo = toUser;

      if (!message.type) {
        var typeMessage = 'float-left ';
      } else {
        var typeMessage = 'float-right by-me ';
        userInfo = myinfo;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-message-chat"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: typeMessage + "chat-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
        className: "avatar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: userInfo.avatar,
        alt: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "message-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text"
      }, message.content), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "time"
      }, message.time))));
    }
  }]);

  return MessageChat;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])()(MessageChat));

/***/ }),

/***/ "./src/component/client/page/Chat/MessageChatTyping.jsx":
/*!**************************************************************!*\
  !*** ./src/component/client/page/Chat/MessageChatTyping.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var MessageChatTyping = /*#__PURE__*/function (_Component) {
  _inherits(MessageChatTyping, _Component);

  var _super = _createSuper(MessageChatTyping);

  function MessageChatTyping() {
    _classCallCheck(this, MessageChatTyping);

    return _super.apply(this, arguments);
  }

  _createClass(MessageChatTyping, [{
    key: "render",
    value: function render() {
      var toUser = this.props.toUser;
      var typeMessage = 'float-left ';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-message-chat"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: typeMessage + "chat-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
        className: "avatar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: toUser.avatar,
        alt: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "message-content typing-message"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "typing-text"
      }, toUser.name && toUser.name + " が入力しています "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ticontainer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tiblock"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tidot"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tidot"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "tidot"
      })))))));
    }
  }]);

  return MessageChatTyping;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (MessageChatTyping);

/***/ }),

/***/ "./src/component/client/page/Chat/SearchUser.jsx":
/*!*******************************************************!*\
  !*** ./src/component/client/page/Chat/SearchUser.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_header_Header_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_layout/header/Header.jsx */ "./src/component/client/_layout/header/Header.jsx");
/* harmony import */ var _layout_footer_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_layout/footer/index.jsx */ "./src/component/client/_layout/footer/index.jsx");
/* harmony import */ var _SideBarChat_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SideBarChat.jsx */ "./src/component/client/page/Chat/SideBarChat.jsx");
/* harmony import */ var _ListMessage_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListMessage.jsx */ "./src/component/client/page/Chat/ListMessage.jsx");
/* harmony import */ var _scss_react_client_page_chat_search_user_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../scss/react/client/page/chat/search-user.scss */ "./src/scss/react/client/page/chat/search-user.scss");
/* harmony import */ var _scss_react_client_page_chat_search_user_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scss_react_client_page_chat_search_user_scss__WEBPACK_IMPORTED_MODULE_5__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var Chat = /*#__PURE__*/function (_Component) {
  _inherits(Chat, _Component);

  var _super = _createSuper(Chat);

  function Chat() {
    _classCallCheck(this, Chat);

    return _super.apply(this, arguments);
  }

  _createClass(Chat, [{
    key: "render",
    value: function render() {
      // console.log(data_hung);///chat {match.params.id}
      var match = this.props.match;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-search-user"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "text",
        className: "search-user",
        name: "search-user",
        placeholder: "\u5165\u529B\u3057\u3066\u8AB0\u304B\u3092\u898B\u3064\u3051\u308B"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "hero-icon hero-account-search-outline"
      }));
    }
  }]);

  return Chat;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Chat);

/***/ }),

/***/ "./src/component/client/page/Chat/SideBarChat.jsx":
/*!********************************************************!*\
  !*** ./src/component/client/page/Chat/SideBarChat.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SearchUser_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchUser.jsx */ "./src/component/client/page/Chat/SearchUser.jsx");
/* harmony import */ var _ListUser_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListUser.jsx */ "./src/component/client/page/Chat/ListUser.jsx");
/* harmony import */ var _scss_react_client_page_chat_sidebar_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../scss/react/client/page/chat/sidebar.scss */ "./src/scss/react/client/page/chat/sidebar.scss");
/* harmony import */ var _scss_react_client_page_chat_sidebar_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_react_client_page_chat_sidebar_scss__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var SideBarChat = /*#__PURE__*/function (_Component) {
  _inherits(SideBarChat, _Component);

  var _super = _createSuper(SideBarChat);

  function SideBarChat() {
    _classCallCheck(this, SideBarChat);

    return _super.apply(this, arguments);
  }

  _createClass(SideBarChat, [{
    key: "render",
    value: function render() {
      console.log("render sidebar");
      var myinfo = this.props.myinfo;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-sidebar-chat"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "myinfo"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "avatar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
        className: "state-avatar active-online"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: myinfo.avatar,
        alt: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "name"
      }, myinfo.name))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "list-user"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SearchUser_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ListUser_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
    }
  }]);

  return SideBarChat;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SideBarChat);

/***/ }),

/***/ "./src/component/client/page/Chat/UserChat.jsx":
/*!*****************************************************!*\
  !*** ./src/component/client/page/Chat/UserChat.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _action_type_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../action/type.js */ "./src/action/type.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var UserChat = /*#__PURE__*/function (_Component) {
  _inherits(UserChat, _Component);

  var _super = _createSuper(UserChat);

  function UserChat() {
    var _temp, _this;

    _classCallCheck(this, UserChat);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _super.call.apply(_super, [this].concat(args)), _this.changeActiveUser = function (id) {
      _this.props.dispatch({
        type: _action_type_js__WEBPACK_IMPORTED_MODULE_2__["default"].CHAT.CHANGE_USER_CHAT_DEFAULT,
        payload: id
      });
    }, _temp));
  }

  _createClass(UserChat, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var user = this.props.user;
      var classActiveOnline = user.isOnline ? ' active ' : '';
      var classActiveMessage = user.isActive ? ' active-message ' : '';

      var _user$message$slice = user.message.slice(-1),
          _user$message$slice2 = _slicedToArray(_user$message$slice, 1),
          lastItem = _user$message$slice2[0];

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-user-chat-sidebar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classActiveOnline + classActiveMessage + "user-chat",
        onClick: function onClick() {
          return _this2.changeActiveUser(user.id);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
        className: "state-avatar"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: user.avatar,
        alt: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "name"
      }, user.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "last-message"
      }, lastItem.content))));
    }
  }]);

  return UserChat;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])()(UserChat));

/***/ }),

/***/ "./src/component/client/page/DetailTheme.jsx":
/*!***************************************************!*\
  !*** ./src/component/client/page/DetailTheme.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var DetailTheme = /*#__PURE__*/function (_Component) {
  _inherits(DetailTheme, _Component);

  var _super = _createSuper(DetailTheme);

  function DetailTheme(props) {
    _classCallCheck(this, DetailTheme);

    return _super.call(this, props);
  }

  _createClass(DetailTheme, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-detail-theme"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
        src: "http://velikorodnov.com/dev/homeshop_preview/",
        frameborder: "0",
        height: "10000px",
        width: "100%"
      }));
    }
  }]);

  return DetailTheme;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DetailTheme);

/***/ }),

/***/ "./src/component/client/page/Home.jsx":
/*!********************************************!*\
  !*** ./src/component/client/page/Home.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layout_header_HeaderHomePage_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_layout/header/HeaderHomePage.jsx */ "./src/component/client/_layout/header/HeaderHomePage.jsx");
/* harmony import */ var _layout_footer_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_layout/footer/index.jsx */ "./src/component/client/_layout/footer/index.jsx");
/* harmony import */ var _scss_react_client_page_home_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../scss/react/client/page/home.scss */ "./src/scss/react/client/page/home.scss");
/* harmony import */ var _scss_react_client_page_home_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_react_client_page_home_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _layout_partial_HomePage_ServiceWebsiteSelector_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_layout/partial/HomePage/ServiceWebsiteSelector.jsx */ "./src/component/client/_layout/partial/HomePage/ServiceWebsiteSelector.jsx");
/* harmony import */ var _layout_partial_HomePage_index_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_layout/partial/HomePage/index.jsx */ "./src/component/client/_layout/partial/HomePage/index.jsx");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _library_check_in_view_position_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../library/check-in-view-position.js */ "./src/library/check-in-view-position.js");
/* harmony import */ var _library_check_in_view_position_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_library_check_in_view_position_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _layout_partial_General_BackTop_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_layout/partial/General/BackTop.jsx */ "./src/component/client/_layout/partial/General/BackTop.jsx");
/* harmony import */ var _layout_partial_General_AloNow_jsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_layout/partial/General/AloNow.jsx */ "./src/component/client/_layout/partial/General/AloNow.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }












var Home = /*#__PURE__*/function (_Component) {
  _inherits(Home, _Component);

  var _super = _createSuper(Home);

  function Home(props) {
    _classCallCheck(this, Home);

    return _super.call(this, props);
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var $animation_elements = jquery__WEBPACK_IMPORTED_MODULE_6___default()(".animate-support");
      jquery__WEBPACK_IMPORTED_MODULE_6___default()(window).scroll(function () {
        _library_check_in_view_position_js__WEBPACK_IMPORTED_MODULE_7___default()(jquery__WEBPACK_IMPORTED_MODULE_6___default.a, $animation_elements);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-home"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_header_HeaderHomePage_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_partial_HomePage_ServiceWebsiteSelector_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_partial_HomePage_index_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_partial_General_BackTop_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_partial_General_AloNow_jsx__WEBPACK_IMPORTED_MODULE_9__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_footer_index_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/component/client/page/Theme/ItemTheme.jsx":
/*!*******************************************************!*\
  !*** ./src/component/client/page/Theme/ItemTheme.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ItemTheme; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _scss_react_client_page_home_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../scss/react/client/page/home.scss */ "./src/scss/react/client/page/home.scss");
/* harmony import */ var _scss_react_client_page_home_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_react_client_page_home_scss__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var ItemTheme = /*#__PURE__*/function (_Component) {
  _inherits(ItemTheme, _Component);

  var _super = _createSuper(ItemTheme);

  function ItemTheme(props) {
    _classCallCheck(this, ItemTheme);

    return _super.call(this, props);
  }

  _createClass(ItemTheme, [{
    key: "render",
    value: function render() {
      var itemDefault = {
        img: '/image/intro-layout/page-1-465x357.jpg',
        des: 'DEFAULT'
      };
      var itemData = this.props.data ? this.props.data : itemDefault;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-item-theme wrapper-item-theme"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
        className: "box-modern-figure"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        className: "theme-img-scroll",
        to: "/register"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: itemData.img,
        alt: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figcaption", {
        className: "box-modern-title"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "name"
      }, itemData.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        className: "author"
      }, itemData.author), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        className: "btn-trial",
        to: "/register"
      }, "\u88C1\u5224"))));
    }
  }]);

  return ItemTheme;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/component/client/page/Theme/ListTheme.jsx":
/*!*******************************************************!*\
  !*** ./src/component/client/page/Theme/ListTheme.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _layout_header_Header_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_layout/header/Header.jsx */ "./src/component/client/_layout/header/Header.jsx");
/* harmony import */ var _layout_footer_index_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_layout/footer/index.jsx */ "./src/component/client/_layout/footer/index.jsx");
/* harmony import */ var _ItemTheme_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ItemTheme.jsx */ "./src/component/client/page/Theme/ItemTheme.jsx");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var ListTheme = /*#__PURE__*/function (_Component) {
  _inherits(ListTheme, _Component);

  var _super = _createSuper(ListTheme);

  function ListTheme() {
    _classCallCheck(this, ListTheme);

    return _super.apply(this, arguments);
  }

  _createClass(ListTheme, [{
    key: "render",
    value: function render() {
      var themes = this.props.themes;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-chat"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_header_Header_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-intro-theme bg-gradient-home-page"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "topic-website-selector"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "title-topic"
      }, "\u7D76\u5999\u306A\u30C7\u30B6\u30A4\u30F3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "component-intro-theme"
      }, themes && themes.map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ItemTheme_jsx__WEBPACK_IMPORTED_MODULE_4__["default"], {
          key: index,
          data: item
        });
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layout_footer_index_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null));
    }
  }]);

  return ListTheme;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    themes: state.themes
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(ListTheme));

/***/ }),

/***/ "./src/component/general/dropdown.jsx":
/*!********************************************!*\
  !*** ./src/component/general/dropdown.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Dropdown = /*#__PURE__*/function (_Component) {
  _inherits(Dropdown, _Component);

  var _super = _createSuper(Dropdown);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _super.call(this, props);

    _this.removeOpenDropdown = function (event) {
      var lstDropdown = document.getElementsByClassName('dropdown-toggle');

      for (var index = 0; index < lstDropdown.length; index++) {
        var element = lstDropdown[index];
        element.classList.remove('open');

        if (element.classList.contains("open-sign")) {
          element.classList.remove('open-sign');
          element.classList.add('open');
        }
      }
    };

    _this.handleClick = function (e) {
      if (e.target.classList.contains("open")) {
        e.target.classList.remove('open');
      } else {
        e.target.classList.add('open-sign');
      }
    };

    _this.state = {
      hung: " đẹp trai "
    };
    return _this;
  }

  _createClass(Dropdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.onclick = this.removeOpenDropdown;
    }
  }, {
    key: "render",
    value: function render() {
      console.log(" render dropdown ");
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dropdown"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-primary dropdown-toggle",
        onClick: this.handleClick
      }, this.props.button), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "animated fadeIn faster"
      }, this.props.list.map(function (item, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: item + index
        }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          onClick: function onClick(e) {
            return e.preventDefault();
          }
        }, item), " ");
      })));
    }
  }]);

  return Dropdown;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Dropdown);

/***/ }),

/***/ "./src/component/svg/align-justify.jsx":
/*!*********************************************!*\
  !*** ./src/component/svg/align-justify.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IconAlignJustify; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var IconAlignJustify = /*#__PURE__*/function (_Component) {
  _inherits(IconAlignJustify, _Component);

  var _super = _createSuper(IconAlignJustify);

  function IconAlignJustify() {
    _classCallCheck(this, IconAlignJustify);

    return _super.apply(this, arguments);
  }

  _createClass(IconAlignJustify, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        "aria-hidden": "true",
        focusable: "false",
        "data-prefix": "fad",
        "data-icon": "align-justify",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 448 512",
        className: "svg-inline--fa"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        className: "fa-group",
        stroke: "none",
        fill: "currentColor",
        strokeWidth: "1px"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M432 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-256H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z",
        stroke: "none",
        strokeWidth: "1px"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M432 288H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-256H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z",
        stroke: "none",
        strokeWidth: "1px"
      })));
    }
  }]);

  return IconAlignJustify;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/component/svg/box-classic.jsx":
/*!*******************************************!*\
  !*** ./src/component/svg/box-classic.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BoxClassic; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var BoxClassic = /*#__PURE__*/function (_Component) {
  _inherits(BoxClassic, _Component);

  var _super = _createSuper(BoxClassic);

  function BoxClassic() {
    _classCallCheck(this, BoxClassic);

    return _super.apply(this, arguments);
  }

  _createClass(BoxClassic, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        width: "65",
        height: "71",
        viewBox: "0 0 65 71",
        fill: this.props.fillColor
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M26.5 2.4641C30.2128 0.320508 34.7872 0.320508 38.5 2.4641L58.1099 13.7859C61.8227 15.9295 64.1099 19.891 64.1099 24.1782V46.8218C64.1099 51.109 61.8227 55.0705 58.1099 57.2141L38.5 68.5359C34.7872 70.6795 30.2128 70.6795 26.5 68.5359L6.89007 57.2141C3.17726 55.0705 0.890072 51.109 0.890072 46.8218V24.1782C0.890072 19.891 3.17726 15.9295 6.89007 13.7859L26.5 2.4641Z"
      }));
    }
  }]);

  return BoxClassic;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/component/svg/layer-group.jsx":
/*!*******************************************!*\
  !*** ./src/component/svg/layer-group.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var LayerGroup = /*#__PURE__*/function (_Component) {
  _inherits(LayerGroup, _Component);

  var _super = _createSuper(LayerGroup);

  function LayerGroup() {
    _classCallCheck(this, LayerGroup);

    return _super.apply(this, arguments);
  }

  _createClass(LayerGroup, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        "aria-hidden": "true",
        focusable: "false",
        "data-prefix": "fad",
        "data-icon": "layer-group",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "svg-inline--fa"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
        className: "fa-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        fill: "currentColor",
        d: "M12.41 236.31L70.51 210l161.63 73.27a57.64 57.64 0 0 0 47.72 0L441.5 210l58.09 26.33c16.55 7.5 16.55 32.5 0 40L266.64 381.9a25.68 25.68 0 0 1-21.29 0L12.41 276.31c-16.55-7.5-16.55-32.5 0-40z",
        className: "fa-secondary"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        fill: "currentColor",
        d: "M12.41 148l232.94 105.7a25.61 25.61 0 0 0 21.29 0L499.58 148c16.55-7.51 16.55-32.52 0-40L266.65 2.32a25.61 25.61 0 0 0-21.29 0L12.41 108c-16.55 7.5-16.55 32.52 0 40zm487.18 216.11l-57.87-26.23-161.86 73.37a57.64 57.64 0 0 1-47.72 0L70.29 337.88l-57.88 26.23c-16.55 7.5-16.55 32.5 0 40L245.35 509.7a25.68 25.68 0 0 0 21.29 0l233-105.59c16.5-7.5 16.5-32.5-.05-40z",
        className: "fa-primary"
      })));
    }
  }]);

  return LayerGroup;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (LayerGroup);

/***/ }),

/***/ "./src/component/svg/windows-close.jsx":
/*!*********************************************!*\
  !*** ./src/component/svg/windows-close.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WindowsClose; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var WindowsClose = /*#__PURE__*/function (_Component) {
  _inherits(WindowsClose, _Component);

  var _super = _createSuper(WindowsClose);

  function WindowsClose() {
    _classCallCheck(this, WindowsClose);

    return _super.apply(this, arguments);
  }

  _createClass(WindowsClose, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        "aria-hidden": "true",
        focusable: "false",
        "data-prefix": "fal",
        "data-icon": "window-close",
        role: "img",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 512 512",
        className: "svg-inline--fa fa-align-justify fa-w-9 fa-2x"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        fill: "currentColor",
        d: "M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm16 400c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h416c8.8 0 16 7.2 16 16v352zM348.6 188.3L280.9 256l67.7 67.7c4.6 4.6 4.6 12 0 16.6l-8.3 8.3c-4.6 4.6-12 4.6-16.6 0L256 280.9l-67.7 67.7c-4.6 4.6-12 4.6-16.6 0l-8.3-8.3c-4.6-4.6-4.6-12 0-16.6l67.7-67.7-67.7-67.7c-4.6-4.6-4.6-12 0-16.6l8.3-8.3c4.6-4.6 12-4.6 16.6 0l67.7 67.7 67.7-67.7c4.6-4.6 12-4.6 16.6 0l8.3 8.3c4.5 4.6 4.5 12 0 16.6z",
        stroke: "none",
        strokeWidth: "1px"
      }));
    }
  }]);

  return WindowsClose;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  SITE: {
    NAME: 'hùng đẹp trai'
  },
  EMOJIS: [{
    symbol: "🙂",
    sign: ":)"
  }, {
    symbol: "🙂",
    sign: "=)"
  }, {
    symbol: "😊",
    sign: ":^)"
  }, {
    symbol: "😀",
    sign: ":}"
  }, {
    symbol: "😁",
    sign: ":o)"
  }, {
    symbol: "😃",
    sign: ":‑D"
  }, {
    symbol: "😄",
    sign: "=D"
  }, {
    symbol: "😆",
    sign: "X‑D"
  }, {
    symbol: "😍",
    sign: "B^D"
  }, {
    symbol: "🙁",
    sign: ":‑("
  }, {
    symbol: "😠",
    sign: ":("
  }, {
    symbol: "😡",
    sign: ":‑<"
  }, {
    symbol: "😞",
    sign: ":["
  }, {
    symbol: "😟",
    sign: ">:["
  }, {
    symbol: "😣",
    sign: ":{"
  }, {
    symbol: "😖",
    sign: ">:("
  }, {
    symbol: "😢",
    sign: ":'‑("
  }, {
    symbol: "😭",
    sign: ":'("
  }, {
    symbol: "😂",
    sign: ":')"
  }, {
    symbol: "😨",
    sign: "D‑':"
  }, {
    symbol: "😧",
    sign: "D:<"
  }, {
    symbol: "😦",
    sign: "D:"
  }, {
    symbol: "😱",
    sign: "D;"
  }, {
    symbol: "😫",
    sign: "D="
  }, {
    symbol: "😩",
    sign: "DX"
  }, {
    symbol: "😮",
    sign: ":-0"
  }, {
    symbol: "😯",
    sign: "8‑0"
  }, {
    symbol: "😲",
    sign: ">:O"
  }, {
    symbol: "😗",
    sign: ":-*"
  }, {
    symbol: "😙",
    sign: ":^*"
  }, {
    symbol: "😚",
    sign: ":^-"
  }, {
    symbol: "😘",
    sign: ":x"
  }, {
    symbol: "😍",
    sign: ":X"
  }, {
    symbol: "😉",
    sign: ";‑)"
  }, {
    symbol: "😜",
    sign: "*-)"
  }, {
    symbol: "😘",
    sign: ";D"
  }, {
    symbol: "😛",
    sign: ":P"
  }, {
    symbol: "😝",
    sign: "x‑p"
  }, {
    symbol: "😜",
    sign: "=p"
  }, {
    symbol: "🤑",
    sign: ">:P"
  }, {
    symbol: "🤔",
    sign: ":‑/"
  }, {
    symbol: "😕",
    sign: ":‑."
  }, {
    symbol: "😟",
    sign: ":S"
  }, {
    symbol: "😐",
    sign: ":‑|"
  }, {
    symbol: "😑",
    sign: ":|"
  }, {
    symbol: "😳",
    sign: ":$"
  }, {
    symbol: "😞",
    sign: ":b3"
  }, {
    symbol: "😖",
    sign: ":‑X"
  }, {
    symbol: "🤐",
    sign: ":&"
  }, {
    symbol: "😶",
    sign: "O:‑)"
  }, {
    symbol: "😇",
    sign: "O:)"
  }, {
    symbol: "👼",
    sign: "0;^)"
  }, {
    symbol: "😈",
    sign: ">;3"
  }, {
    symbol: "😎",
    sign: "|;‑)"
  }, {
    symbol: "😪",
    sign: "|‑O"
  }, {
    symbol: "😏",
    sign: ":‑J"
  }, {
    symbol: "😒",
    sign: "#‑)"
  }, {
    symbol: "😵",
    sign: "%‑)"
  }, {
    symbol: "😕",
    sign: "%)"
  }, {
    symbol: "🤒",
    sign: ":#/"
  }, {
    symbol: "😷",
    sign: ":D-"
  }, {
    symbol: "🤢",
    sign: ":cR"
  }, {
    symbol: "🤕",
    sign: "<:‑/"
  }, {
    symbol: "🤨",
    sign: ":-l"
  }, {
    symbol: "💝",
    sign: "<3"
  }]
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js */ "./node_modules/core-js/index.js");
/* harmony import */ var core_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_App_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/App.js */ "./src/component/App.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducer */ "./src/reducer/index.js");
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scss/index.scss */ "./src/scss/index.scss");
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_scss_index_scss__WEBPACK_IMPORTED_MODULE_7__);








var store = Object(redux__WEBPACK_IMPORTED_MODULE_4__["createStore"])(_reducer__WEBPACK_IMPORTED_MODULE_6__["default"]);
store.subscribe(function () {
  console.log('có thay đổi trong Redux!!');
  console.log(store.getState());
});
react_dom__WEBPACK_IMPORTED_MODULE_2___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
  store: store
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_component_App_js__WEBPACK_IMPORTED_MODULE_3__["default"], null)), document.getElementById("root"));

/***/ }),

/***/ "./src/library/check-in-view-position.js":
/*!***********************************************!*\
  !*** ./src/library/check-in-view-position.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function ($, $animations) {
  var window_height = $(window).height();
  var window_top_position = $(window).scrollTop();
  var window_bottom_position = window_top_position + window_height;
  $.each($animations, function () {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = element_top_position + element_height; //check to see if this current container is within viewport

    if (element_bottom_position >= window_top_position && element_top_position <= window_bottom_position) {
      $element.removeClass("animated-initial");
    } else {
      $element.addClass("animated-initial");
    }
  });
};

/***/ }),

/***/ "./src/library/format-height.js":
/*!**************************************!*\
  !*** ./src/library/format-height.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function formatHeight(parent, classElement, classChildFormatHeight) {
  var elementsFormat = parent.getElementsByClassName(classElement);
  resetHeightIndexOf(elementsFormat, classChildFormatHeight);
  var iteminRow = 1;

  if (elementsFormat.length) {
    iteminRow = Math.ceil(parent.clientWidth / elementsFormat[0].clientWidth);
  }

  for (var index = 0; index < elementsFormat.length; index += iteminRow) {
    var begin = index;
    var end = index + iteminRow - 1;

    if (index + iteminRow > elementsFormat.length) {
      end = elementsFormat.length - 1;
    }

    var maxHeight = getMaxHeightIndexOf(elementsFormat, begin, end);
    fixHeightIndexOf(elementsFormat, maxHeight, begin, end, classChildFormatHeight);
  }
}

function getMaxHeightIndexOf(elements, begin, end) {
  // var classFixHeight = 'js-item-format-height';
  var max = elements[begin].clientHeight;

  if (begin == end) {
    return max;
  }

  for (var index = begin; index <= end; index++) {
    ///elements[index].getElementsByClassName(classFixHeight)[0].style.height = '';
    var heightDom = elements[index].clientHeight;

    if (heightDom > max) {
      max = heightDom;
    }
  }

  return max;
}

function fixHeightIndexOf(elements, height, begin, end, classChildFormatHeight) {
  for (var index = begin; index <= end; index++) {
    var domFormat = elements[index];

    if (classChildFormatHeight) {
      var domsFormat = domFormat.getElementsByClassName(classChildFormatHeight);

      if (domsFormat.length) {
        var domFormat = domsFormat[0];
      }
    }

    domFormat.style.height = height + "px";
  }
}

function resetHeightIndexOf(elements, classChildFormatHeight) {
  for (var index = 0; index < elements.length; index++) {
    var domFormat = elements[index];

    if (classChildFormatHeight) {
      var domsFormat = domFormat.getElementsByClassName(classChildFormatHeight);

      if (domsFormat.length) {
        var domFormat = domsFormat[0];
      }
    }

    domFormat.style.height = "";
  }
}

module.exports = formatHeight;

/***/ }),

/***/ "./src/reducer/detect.js":
/*!*******************************!*\
  !*** ./src/reducer/detect.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DetectClientReducer; });
function detectClient() {
  {
    var unknown = 'unknown'; // browser

    var nVer = navigator.appVersion;
    var nAgt = navigator.userAgent;
    var browser = navigator.appName;
    var version = '' + parseFloat(navigator.appVersion);
    var majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix; // Opera

    if ((verOffset = nAgt.indexOf('Opera')) != -1) {
      browser = 'Opera';
      version = nAgt.substring(verOffset + 6);

      if ((verOffset = nAgt.indexOf('Version')) != -1) {
        version = nAgt.substring(verOffset + 8);
      }
    } // Opera Next


    if ((verOffset = nAgt.indexOf('OPR')) != -1) {
      browser = 'Opera';
      version = nAgt.substring(verOffset + 4);
    } // Edge
    else if ((verOffset = nAgt.indexOf('Edge')) != -1) {
        browser = 'Microsoft Edge';
        version = nAgt.substring(verOffset + 5);
      } // MSIE
      else if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
          browser = 'Microsoft Internet Explorer';
          version = nAgt.substring(verOffset + 5);
        } // Chrome
        else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
            browser = 'Chrome';
            version = nAgt.substring(verOffset + 7);
          } // Safari
          else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
              browser = 'Safari';
              version = nAgt.substring(verOffset + 7);

              if ((verOffset = nAgt.indexOf('Version')) != -1) {
                version = nAgt.substring(verOffset + 8);
              }
            } // Firefox
            else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
                browser = 'Firefox';
                version = nAgt.substring(verOffset + 8);
              } // MSIE 11+
              else if (nAgt.indexOf('Trident/') != -1) {
                  browser = 'Microsoft Internet Explorer';
                  version = nAgt.substring(nAgt.indexOf('rv:') + 3);
                } // Other browsers
                else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
                    browser = nAgt.substring(nameOffset, verOffset);
                    version = nAgt.substring(verOffset + 1);

                    if (browser.toLowerCase() == browser.toUpperCase()) {
                      browser = navigator.appName;
                    }
                  } // trim the version string


    if ((ix = version.indexOf(';')) != -1) version = version.substring(0, ix);
    if ((ix = version.indexOf(' ')) != -1) version = version.substring(0, ix);
    if ((ix = version.indexOf(')')) != -1) version = version.substring(0, ix);
    majorVersion = parseInt('' + version, 10);

    if (isNaN(majorVersion)) {
      version = '' + parseFloat(navigator.appVersion);
      majorVersion = parseInt(navigator.appVersion, 10);
    } // system


    var os = unknown;
    var clientStrings = [{
      s: 'Windows 10',
      r: /(Windows 10.0|Windows NT 10.0)/
    }, {
      s: 'Windows 8.1',
      r: /(Windows 8.1|Windows NT 6.3)/
    }, {
      s: 'Windows 8',
      r: /(Windows 8|Windows NT 6.2)/
    }, {
      s: 'Windows 7',
      r: /(Windows 7|Windows NT 6.1)/
    }, {
      s: 'Windows Vista',
      r: /Windows NT 6.0/
    }, {
      s: 'Windows Server 2003',
      r: /Windows NT 5.2/
    }, {
      s: 'Windows XP',
      r: /(Windows NT 5.1|Windows XP)/
    }, {
      s: 'Windows 2000',
      r: /(Windows NT 5.0|Windows 2000)/
    }, {
      s: 'Windows ME',
      r: /(Win 9x 4.90|Windows ME)/
    }, {
      s: 'Windows 98',
      r: /(Windows 98|Win98)/
    }, {
      s: 'Windows 95',
      r: /(Windows 95|Win95|Windows_95)/
    }, {
      s: 'Windows NT 4.0',
      r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/
    }, {
      s: 'Windows CE',
      r: /Windows CE/
    }, {
      s: 'Windows 3.11',
      r: /Win16/
    }, {
      s: 'Android',
      r: /Android/
    }, {
      s: 'Open BSD',
      r: /OpenBSD/
    }, {
      s: 'Sun OS',
      r: /SunOS/
    }, {
      s: 'Linux',
      r: /(Linux|X11)/
    }, {
      s: 'iOS',
      r: /(iPhone|iPad|iPod)/
    }, {
      s: 'Mac OS X',
      r: /Mac OS X/
    }, {
      s: 'Mac OS',
      r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
    }, {
      s: 'QNX',
      r: /QNX/
    }, {
      s: 'UNIX',
      r: /UNIX/
    }, {
      s: 'BeOS',
      r: /BeOS/
    }, {
      s: 'OS/2',
      r: /OS\/2/
    }, {
      s: 'Search Bot',
      r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
    }];

    for (var id in clientStrings) {
      var cs = clientStrings[id];

      if (cs.r.test(nAgt)) {
        os = cs.s;
        break;
      }
    }

    var osVersion = unknown;

    if (/Windows/.test(os)) {
      osVersion = /Windows (.*)/.exec(os)[1];
      os = 'Windows';
    }

    switch (os) {
      case 'Mac OS X':
        osVersion = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1];
        break;

      case 'Android':
        osVersion = /Android ([\.\_\d]+)/.exec(nAgt)[1];
        break;

      case 'iOS':
        osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
        osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
        break;
    }
  }
  return {
    browser: browser,
    browser_version: version,
    browser_major_version: majorVersion,
    os: os,
    os_version: osVersion
  };
}

function DetectClientReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : detectClient();
  return state;
}

/***/ }),

/***/ "./src/reducer/home-page.js":
/*!**********************************!*\
  !*** ./src/reducer/home-page.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/type.js */ "./src/action/type.js");
var CRAFT_LAYOUTS = [{
  img: '/image/intro-layout/page-1-465x357.jpg',
  des: 'ソフト開発'
}, {
  img: '/image/intro-layout/page-2-465x357.jpg',
  des: 'インテリアデザイン'
}, {
  img: '/image/intro-layout/page-3-465x357.jpg',
  des: 'ビジネススクール'
}, {
  img: '/image/intro-layout/page-4-465x357.jpg',
  des: 'レンタカー'
}, {
  img: '/image/intro-layout/page-5-465x357.jpg',
  des: '旅行代理店'
}, {
  img: '/image/intro-layout/page-6-465x357.jpg',
  des: '建設'
}, {
  img: '/image/intro-layout/page-7-465x357.jpg',
  des: 'フローリング'
}, {
  img: '/image/intro-layout/page-8-465x357.jpg',
  des: 'ホテル'
}, {
  img: '/image/intro-layout/page-9-465x357.jpg',
  des: '構造2'
}];

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : CRAFT_LAYOUTS;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_type_js__WEBPACK_IMPORTED_MODULE_0__["default"].HOME.CHANGE_LAYOUTS:
      return action.payload;

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducer/index.js":
/*!******************************!*\
  !*** ./src/reducer/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _detect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detect.js */ "./src/reducer/detect.js");
/* harmony import */ var _home_page_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-page.js */ "./src/reducer/home-page.js");
/* harmony import */ var _theme_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./theme.js */ "./src/reducer/theme.js");
/* harmony import */ var _user_chat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-chat.js */ "./src/reducer/user-chat.js");
 ///thêm các reducer funtion cần được combine vào đây




 //// khởi tạo 1 biến biểu diễn REDUCER ALL 

var Reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  client: _detect_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  CRAFT_LAYOUTS: _home_page_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  themes: _theme_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  userChat: _user_chat_js__WEBPACK_IMPORTED_MODULE_4__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (Reducer);

/***/ }),

/***/ "./src/reducer/theme.js":
/*!******************************!*\
  !*** ./src/reducer/theme.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/type.js */ "./src/action/type.js");
var themes = [{
  img: '/image/theme/homeshop.png',
  name: 'ホームショップ',
  author: 'by チュン　タン　フン'
}, {
  img: '/image/theme/myservice.png',
  name: 'Ebudezain',
  author: 'by チュン　タン　フン'
}, {
  img: '/image/theme/kandc.png',
  name: 'kandc',
  author: 'by チュン　タン　フン'
}, {
  img: '/image/theme/doctor-recruit.png',
  name: 'trust-growth',
  author: 'by チュン　タン　フン'
}, {
  img: '/image/intro-layout/page-5-465x357.jpg',
  name: 'Home Shop',
  author: 'by Trương Thanh Hùng'
}, {
  img: '/image/intro-layout/page-6-465x357.jpg',
  name: '建設',
  author: 'by Trương Thanh Hùng'
}, {
  img: '/image/intro-layout/page-7-465x357.jpg',
  name: 'フローリング',
  author: 'by Trương Thanh Hùng'
}, {
  img: '/image/intro-layout/page-8-465x357.jpg',
  name: 'ホテル',
  author: 'by Trương Thanh Hùng'
}, {
  img: '/image/intro-layout/page-9-465x357.jpg',
  name: '構造2',
  author: 'by Trương Thanh Hùng'
}];

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : themes;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_type_js__WEBPACK_IMPORTED_MODULE_0__["default"].HOME.CHNAGE_THEME:
      return action.payload;

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/reducer/user-chat.js":
/*!**********************************!*\
  !*** ./src/reducer/user-chat.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_type_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action/type.js */ "./src/action/type.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

if (!userDefault) {
  userDefault = [];
}

var userChatDefault = JSON.parse(userDefault);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : userChatDefault;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action_type_js__WEBPACK_IMPORTED_MODULE_0__["default"].CHAT.CHANGE_USER_CHAT_DEFAULT:
      return state.map(function (item) {
        if (item.id === action.payload) {
          return _objectSpread({}, item, {
            isActive: true
          });
        }

        return _objectSpread({}, item, {
          isActive: false
        });
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js??ref--6-2!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/scss/react/client/footer/footer.scss":
/*!**************************************************!*\
  !*** ./src/scss/react/client/footer/footer.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-2!./footer.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/react/client/footer/footer.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/scss/react/client/header/header.scss":
/*!**************************************************!*\
  !*** ./src/scss/react/client/header/header.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-2!./header.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/react/client/header/header.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/scss/react/client/header/logo.scss":
/*!************************************************!*\
  !*** ./src/scss/react/client/header/logo.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-2!./logo.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/react/client/header/logo.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/scss/react/client/header/menu-full.scss":
/*!*****************************************************!*\
  !*** ./src/scss/react/client/header/menu-full.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-2!./menu-full.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/react/client/header/menu-full.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/scss/react/client/header/menu.scss":
/*!************************************************!*\
  !*** ./src/scss/react/client/header/menu.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-2!./menu.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/react/client/header/menu.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/scss/react/client/page/alo-now.scss":
/*!*************************************************!*\
  !*** ./src/scss/react/client/page/alo-now.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-2!./alo-now.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/react/client/page/alo-now.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/scss/react/client/page/back-top.scss":
/*!**************************************************!*\
  !*** ./src/scss/react/client/page/back-top.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-2!./back-top.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/react/client/page/back-top.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/scss/react/client/page/chat/chat.scss":
/*!***************************************************!*\
  !*** ./src/scss/react/client/page/chat/chat.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-2!./chat.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/react/client/page/chat/chat.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/scss/react/client/page/chat/emoji.scss":
/*!****************************************************!*\
  !*** ./src/scss/react/client/page/chat/emoji.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-2!./emoji.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/react/client/page/chat/emoji.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/scss/react/client/page/chat/head-info.scss":
/*!********************************************************!*\
  !*** ./src/scss/react/client/page/chat/head-info.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-2!./head-info.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/react/client/page/chat/head-info.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/scss/react/client/page/chat/input-send-chat.scss":
/*!**************************************************************!*\
  !*** ./src/scss/react/client/page/chat/input-send-chat.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-2!./input-send-chat.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/react/client/page/chat/input-send-chat.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/scss/react/client/page/chat/list-message.scss":
/*!***********************************************************!*\
  !*** ./src/scss/react/client/page/chat/list-message.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-2!./list-message.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/react/client/page/chat/list-message.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/scss/react/client/page/chat/list-user.scss":
/*!********************************************************!*\
  !*** ./src/scss/react/client/page/chat/list-user.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-2!./list-user.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/react/client/page/chat/list-user.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/scss/react/client/page/chat/message-chat.scss":
/*!***********************************************************!*\
  !*** ./src/scss/react/client/page/chat/message-chat.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-2!./message-chat.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/react/client/page/chat/message-chat.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/scss/react/client/page/chat/search-user.scss":
/*!**********************************************************!*\
  !*** ./src/scss/react/client/page/chat/search-user.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-2!./search-user.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/react/client/page/chat/search-user.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/scss/react/client/page/chat/sidebar.scss":
/*!******************************************************!*\
  !*** ./src/scss/react/client/page/chat/sidebar.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-2!./sidebar.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/react/client/page/chat/sidebar.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/scss/react/client/page/home.scss":
/*!**********************************************!*\
  !*** ./src/scss/react/client/page/home.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/sass-loader/dist/cjs.js??ref--6-2!./home.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js?!./src/scss/react/client/page/home.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });