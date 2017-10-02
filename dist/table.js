(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("mobx-react"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "mobx-react"], factory);
	else if(typeof exports === 'object')
		exports["table"] = factory(require("react"), require("mobx-react"));
	else
		root["table"] = factory(root["react"], root["mobx-react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mobx_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mobx_react__);



function Table(_ref) {
  var store = _ref.store;

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'table',
    { className: 'table' },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'thead',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'tr',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'th',
          null,
          'Full Name'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'th',
          null,
          'Email'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'th',
          null,
          'Gender'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'th',
          null,
          'Ip'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'tbody',
      null,
      store.data.map(function (_ref2) {
        var id = _ref2.id,
            full_name = _ref2.full_name,
            email = _ref2.email,
            gender = _ref2.gender,
            ip_address = _ref2.ip_address;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'tr',
          { key: id },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'td',
            null,
            full_name
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'td',
            null,
            email
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'td',
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'select',
              { disabled: true },
              store.genders.map(function (item) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'option',
                  { selected: gender === item },
                  item
                );
              })
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'td',
            null,
            ip_address
          )
        );
      })
    )
  );
}

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_1_mobx_react__["observer"])(Table));

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ })
/******/ ]);
});