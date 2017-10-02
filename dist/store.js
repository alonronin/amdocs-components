(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("mobx"));
	else if(typeof define === 'function' && define.amd)
		define(["mobx"], factory);
	else if(typeof exports === 'object')
		exports["store"] = factory(require("mobx"));
	else
		root["store"] = factory(root["mobx"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mobx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mobx__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _desc2, _value2, _class3, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12;

function _initDefineProp(target, property, descriptor, context) {
  if (!descriptor) return;
  Object.defineProperty(target, property, {
    enumerable: descriptor.enumerable,
    configurable: descriptor.configurable,
    writable: descriptor.writable,
    value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
  });
}

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function _initializerWarningHelper(descriptor, context) {
  throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
}



var Item = (_class = function () {
  function Item(item) {
    _classCallCheck(this, Item);

    _initDefineProp(this, 'id', _descriptor, this);

    _initDefineProp(this, 'first_name', _descriptor2, this);

    _initDefineProp(this, 'last_name', _descriptor3, this);

    _initDefineProp(this, 'email', _descriptor4, this);

    _initDefineProp(this, 'gender', _descriptor5, this);

    _initDefineProp(this, 'ip_address', _descriptor6, this);

    _initDefineProp(this, 'setState', _descriptor7, this);

    this.setState(item);
  }

  _createClass(Item, [{
    key: 'full_name',
    get: function get() {
      return this.first_name + ' ' + this.last_name;
    }
  }]);

  return Item;
}(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'id', [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  enumerable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'first_name', [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  enumerable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, 'last_name', [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  enumerable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, 'email', [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  enumerable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, 'gender', [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  enumerable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, 'ip_address', [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  enumerable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, 'setState', [__WEBPACK_IMPORTED_MODULE_0_mobx__["action"]], {
  enumerable: true,
  initializer: function initializer() {
    var _this = this;

    return function () {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$id = _ref.id,
          id = _ref$id === undefined ? _this.id : _ref$id,
          _ref$first_name = _ref.first_name,
          first_name = _ref$first_name === undefined ? _this.first_name : _ref$first_name,
          _ref$last_name = _ref.last_name,
          last_name = _ref$last_name === undefined ? _this.last_name : _ref$last_name,
          _ref$email = _ref.email,
          email = _ref$email === undefined ? _this.email : _ref$email,
          _ref$gender = _ref.gender,
          gender = _ref$gender === undefined ? _this.gender : _ref$gender,
          _ref$ip_address = _ref.ip_address,
          ip_address = _ref$ip_address === undefined ? _this.ip_address : _ref$ip_address;

      _this.id = id;
      _this.first_name = first_name;
      _this.last_name = last_name;
      _this.email = email;
      _this.gender = gender;
      _this.ip_address = ip_address;
    };
  }
}), _applyDecoratedDescriptor(_class.prototype, 'full_name', [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, 'full_name'), _class.prototype)), _class);
var Store = (_class3 = function () {
  function Store() {
    _classCallCheck(this, Store);

    _initDefineProp(this, 'filter', _descriptor8, this);

    _initDefineProp(this, 'genders', _descriptor9, this);

    _initDefineProp(this, 'items', _descriptor10, this);

    _initDefineProp(this, 'setItems', _descriptor11, this);

    _initDefineProp(this, 'setState', _descriptor12, this);
  }

  _createClass(Store, [{
    key: 'data',
    get: function get() {
      var _this2 = this;

      return this.filter.length ? this.items.filter(function (item) {
        return item.full_name.toLowerCase().includes(_this2.filter.toLowerCase());
      }) : this.items;
    }
  }]);

  return Store;
}(), (_descriptor8 = _applyDecoratedDescriptor(_class3.prototype, 'filter', [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  enumerable: true,
  initializer: function initializer() {
    return '';
  }
}), _descriptor9 = _applyDecoratedDescriptor(_class3.prototype, 'genders', [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class3.prototype, 'items', [__WEBPACK_IMPORTED_MODULE_0_mobx__["observable"]], {
  enumerable: true,
  initializer: function initializer() {
    return [];
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class3.prototype, 'setItems', [__WEBPACK_IMPORTED_MODULE_0_mobx__["action"]], {
  enumerable: true,
  initializer: function initializer() {
    var _this3 = this;

    return function (items) {
      _this3.items = items.map(function (item) {
        return new Item(item);
      });
    };
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class3.prototype, 'setState', [__WEBPACK_IMPORTED_MODULE_0_mobx__["action"]], {
  enumerable: true,
  initializer: function initializer() {
    var _this4 = this;

    return function () {
      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$filter = _ref2.filter,
          filter = _ref2$filter === undefined ? _this4.filter : _ref2$filter,
          _ref2$genders = _ref2.genders,
          genders = _ref2$genders === undefined ? _this4.genders : _ref2$genders;

      _this4.filter = filter;
      _this4.genders = genders;
    };
  }
}), _applyDecoratedDescriptor(_class3.prototype, 'data', [__WEBPACK_IMPORTED_MODULE_0_mobx__["computed"]], Object.getOwnPropertyDescriptor(_class3.prototype, 'data'), _class3.prototype)), _class3);


/* harmony default export */ __webpack_exports__["default"] = (Store);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ })
/******/ ]);
});