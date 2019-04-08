webpackHotUpdate("static\\development\\pages\\novel.js",{

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheet);

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#".concat(name, "-deleted-rule____{}");
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  _createClass(StyleSheet, [{
    key: "setOptimizeForSpeed",
    value: function setOptimizeForSpeed(bool) {
      invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
      invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
      this.flush();
      this._optimizeForSpeed = bool;
      this.inject();
    }
  }, {
    key: "isOptimizeForSpeed",
    value: function isOptimizeForSpeed() {
      return this._optimizeForSpeed;
    }
  }, {
    key: "inject",
    value: function inject() {
      var _this = this;

      invariant(!this._injected, 'sheet already injected');
      this._injected = true;

      if (this._isBrowser && this._optimizeForSpeed) {
        this._tags[0] = this.makeStyleTag(this._name);
        this._optimizeForSpeed = 'insertRule' in this.getSheet();

        if (!this._optimizeForSpeed) {
          if (!isProd) {
            console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
          }

          this.flush();
          this._injected = true;
        }

        return;
      }

      this._serverSheet = {
        cssRules: [],
        insertRule: function insertRule(rule, index) {
          if (typeof index === 'number') {
            _this._serverSheet.cssRules[index] = {
              cssText: rule
            };
          } else {
            _this._serverSheet.cssRules.push({
              cssText: rule
            });
          }

          return index;
        },
        deleteRule: function deleteRule(index) {
          _this._serverSheet.cssRules[index] = null;
        }
      };
    }
  }, {
    key: "getSheetForTag",
    value: function getSheetForTag(tag) {
      if (tag.sheet) {
        return tag.sheet;
      } // this weirdness brought to you by firefox


      for (var i = 0; i < document.styleSheets.length; i++) {
        if (document.styleSheets[i].ownerNode === tag) {
          return document.styleSheets[i];
        }
      }
    }
  }, {
    key: "getSheet",
    value: function getSheet() {
      return this.getSheetForTag(this._tags[this._tags.length - 1]);
    }
  }, {
    key: "insertRule",
    value: function insertRule(rule, index) {
      invariant(isString(rule), '`insertRule` accepts only strings');

      if (!this._isBrowser) {
        if (typeof index !== 'number') {
          index = this._serverSheet.cssRules.length;
        }

        this._serverSheet.insertRule(rule, index);

        return this._rulesCount++;
      }

      if (this._optimizeForSpeed) {
        var sheet = this.getSheet();

        if (typeof index !== 'number') {
          index = sheet.cssRules.length;
        } // this weirdness for perf, and chrome's weird bug
        // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          }

          return -1;
        }
      } else {
        var insertionPoint = this._tags[index];

        this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
      }

      return this._rulesCount++;
    }
  }, {
    key: "replaceRule",
    value: function replaceRule(index, rule) {
      if (this._optimizeForSpeed || !this._isBrowser) {
        var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

        if (!rule.trim()) {
          rule = this._deletedRulePlaceholder;
        }

        if (!sheet.cssRules[index]) {
          // @TBD Should we throw an error?
          return index;
        }

        sheet.deleteRule(index);

        try {
          sheet.insertRule(rule, index);
        } catch (error) {
          if (!isProd) {
            console.warn("StyleSheet: illegal rule: \n\n".concat(rule, "\n\nSee https://stackoverflow.com/q/20007992 for more info"));
          } // In order to preserve the indices we insert a deleteRulePlaceholder


          sheet.insertRule(this._deletedRulePlaceholder, index);
        }
      } else {
        var tag = this._tags[index];
        invariant(tag, "old rule at index `".concat(index, "` not found"));
        tag.textContent = rule;
      }

      return index;
    }
  }, {
    key: "deleteRule",
    value: function deleteRule(index) {
      if (!this._isBrowser) {
        this._serverSheet.deleteRule(index);

        return;
      }

      if (this._optimizeForSpeed) {
        this.replaceRule(index, '');
      } else {
        var tag = this._tags[index];
        invariant(tag, "rule at index `".concat(index, "` not found"));
        tag.parentNode.removeChild(tag);
        this._tags[index] = null;
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this._injected = false;
      this._rulesCount = 0;

      if (this._isBrowser) {
        this._tags.forEach(function (tag) {
          return tag && tag.parentNode.removeChild(tag);
        });

        this._tags = [];
      } else {
        // simpler on server
        this._serverSheet.cssRules = [];
      }
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this2 = this;

      if (!this._isBrowser) {
        return this._serverSheet.cssRules;
      }

      return this._tags.reduce(function (rules, tag) {
        if (tag) {
          rules = rules.concat(_this2.getSheetForTag(tag).cssRules.map(function (rule) {
            return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
          }));
        } else {
          rules.push(null);
        }

        return rules;
      }, []);
    }
  }, {
    key: "makeStyleTag",
    value: function makeStyleTag(name, cssString, relativeToTag) {
      if (cssString) {
        invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
      }

      var tag = document.createElement('style');
      if (this._nonce) tag.setAttribute('nonce', this._nonce);
      tag.type = 'text/css';
      tag.setAttribute("data-".concat(name), '');

      if (cssString) {
        tag.appendChild(document.createTextNode(cssString));
      }

      var head = document.head || document.getElementsByTagName('head')[0];

      if (relativeToTag) {
        head.insertBefore(tag, relativeToTag);
      } else {
        head.appendChild(tag);
      }

      return tag;
    }
  }, {
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports.default = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: ".concat(message, "."));
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flush = flush;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styleSheetRegistry = new _stylesheetRegistry.default();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inherits(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _classCallCheck(this, JSXStyle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(JSXStyle).call(this, props));
    _this.prevProps = {};
    return _this;
  }

  _createClass(JSXStyle, [{
    key: "shouldComponentUpdate",
    // probably faster than PureComponent (shallowEqual)
    value: function shouldComponentUpdate(otherProps) {
      return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
      // These are the computed values for dynamic styles.
      String(this.props.dynamic) !== String(otherProps.dynamic);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      styleSheetRegistry.remove(this.props);
    }
  }, {
    key: "render",
    value: function render() {
      // This is a workaround to make the side effect async safe in the "render" phase.
      // See https://github.com/zeit/styled-jsx/pull/484
      if (this.shouldComponentUpdate(this.prevProps)) {
        // Updates
        if (this.prevProps.id) {
          styleSheetRegistry.remove(this.prevProps);
        }

        styleSheetRegistry.add(this.props);
        this.prevProps = this.props;
      }

      return null;
    }
  }], [{
    key: "dynamic",
    value: function dynamic(info) {
      return info.map(function (tagInfo) {
        var baseId = tagInfo[0];
        var props = tagInfo[1];
        return styleSheetRegistry.computeId(baseId, props);
      }).join(' ');
    }
  }]);

  return JSXStyle;
}(_react.Component);

exports.default = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    _classCallCheck(this, StyleSheetRegistry);

    this._sheet = styleSheet || new _stylesheet.default({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  _createClass(StyleSheetRegistry, [{
    key: "add",
    value: function add(props) {
      var _this = this;

      if (undefined === this._optimizeForSpeed) {
        this._optimizeForSpeed = Array.isArray(props.children);

        this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

        this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
      }

      if (this._isBrowser && !this._fromServer) {
        this._fromServer = this.selectFromServer();
        this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
          acc[tagName] = 0;
          return acc;
        }, {});
      }

      var _this$getIdAndRules = this.getIdAndRules(props),
          styleId = _this$getIdAndRules.styleId,
          rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


      if (styleId in this._instancesCounts) {
        this._instancesCounts[styleId] += 1;
        return;
      }

      var indices = rules.map(function (rule) {
        return _this._sheet.insertRule(rule);
      }) // Filter out invalid rules
      .filter(function (index) {
        return index !== -1;
      });
      this._indices[styleId] = indices;
      this._instancesCounts[styleId] = 1;
    }
  }, {
    key: "remove",
    value: function remove(props) {
      var _this2 = this;

      var _this$getIdAndRules2 = this.getIdAndRules(props),
          styleId = _this$getIdAndRules2.styleId;

      invariant(styleId in this._instancesCounts, "styleId: `".concat(styleId, "` not found"));
      this._instancesCounts[styleId] -= 1;

      if (this._instancesCounts[styleId] < 1) {
        var tagFromServer = this._fromServer && this._fromServer[styleId];

        if (tagFromServer) {
          tagFromServer.parentNode.removeChild(tagFromServer);
          delete this._fromServer[styleId];
        } else {
          this._indices[styleId].forEach(function (index) {
            return _this2._sheet.deleteRule(index);
          });

          delete this._indices[styleId];
        }

        delete this._instancesCounts[styleId];
      }
    }
  }, {
    key: "update",
    value: function update(props, nextProps) {
      this.add(nextProps);
      this.remove(props);
    }
  }, {
    key: "flush",
    value: function flush() {
      this._sheet.flush();

      this._sheet.inject();

      this._fromServer = undefined;
      this._indices = {};
      this._instancesCounts = {};
      this.computeId = this.createComputeId();
      this.computeSelector = this.createComputeSelector();
    }
  }, {
    key: "cssRules",
    value: function cssRules() {
      var _this3 = this;

      var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
        return [styleId, _this3._fromServer[styleId]];
      }) : [];

      var cssRules = this._sheet.cssRules();

      return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
        return [styleId, _this3._indices[styleId].map(function (index) {
          return cssRules[index].cssText;
        }).join(_this3._optimizeForSpeed ? '' : '\n')];
      }) // filter out empty rules
      .filter(function (rule) {
        return Boolean(rule[1]);
      }));
    }
    /**
     * createComputeId
     *
     * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
     */

  }, {
    key: "createComputeId",
    value: function createComputeId() {
      var cache = {};
      return function (baseId, props) {
        if (!props) {
          return "jsx-".concat(baseId);
        }

        var propsToString = String(props);
        var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

        if (!cache[key]) {
          cache[key] = "jsx-".concat((0, _stringHash.default)("".concat(baseId, "-").concat(propsToString)));
        }

        return cache[key];
      };
    }
    /**
     * createComputeSelector
     *
     * Creates a function to compute and memoize dynamic selectors.
     */

  }, {
    key: "createComputeSelector",
    value: function createComputeSelector() {
      var selectoPlaceholderRegexp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /__jsx-style-dynamic-selector/g;
      var cache = {};
      return function (id, css) {
        // Sanitize SSR-ed CSS.
        // Client side code doesn't need to be sanitized since we use
        // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
        if (!this._isBrowser) {
          css = sanitize(css);
        }

        var idcss = id + css;

        if (!cache[idcss]) {
          cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
        }

        return cache[idcss];
      };
    }
  }, {
    key: "getIdAndRules",
    value: function getIdAndRules(props) {
      var _this4 = this;

      var css = props.children,
          dynamic = props.dynamic,
          id = props.id;

      if (dynamic) {
        var styleId = this.computeId(id, dynamic);
        return {
          styleId: styleId,
          rules: Array.isArray(css) ? css.map(function (rule) {
            return _this4.computeSelector(styleId, rule);
          }) : [this.computeSelector(styleId, css)]
        };
      }

      return {
        styleId: this.computeId(id),
        rules: Array.isArray(css) ? css : [css]
      };
    }
    /**
     * selectFromServer
     *
     * Collects style tags from the document with id __jsx-XXX
     */

  }, {
    key: "selectFromServer",
    value: function selectFromServer() {
      var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
      return elements.reduce(function (acc, element) {
        var id = element.id.slice(2);
        acc[id] = element;
        return acc;
      }, {});
    }
  }]);

  return StyleSheetRegistry;
}();

exports.default = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: ".concat(message, "."));
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./pages/novel.js":
/*!************************!*\
  !*** ./pages/novel.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);



var _jsxFileName = "C:\\Users\\ajc\\Staff\\tap2.top\\pages\\novel.js";




var ChapterTitle = function ChapterTitle(_ref) {
  var title = _ref.title,
      titleStyle = _ref.titleStyle;
  return Object(react__WEBPACK_IMPORTED_MODULE_4__["createElement"])('h4', {
    style: titleStyle
  }, title);
};

var Paragraph = function Paragraph(_ref2) {
  var paragraph = _ref2.paragraph,
      style = _ref2.style;
  return Object(react__WEBPACK_IMPORTED_MODULE_4__["createElement"])('div', {
    style: style
  }, paragraph.content);
};

var Novel = function Novel(_ref3) {
  var chapter = _ref3.chapter,
      pages = _ref3.pages,
      marginTop = _ref3.marginTop,
      viewportHeight = _ref3.viewportHeight,
      appStyle = _ref3.appStyle,
      titleStyle = _ref3.titleStyle,
      paragraphStyle = _ref3.paragraphStyle;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      index = _useState2[0],
      setIndex = _useState2[1];

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])(),
      prevRef = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  var animateStatus = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    return {
      playing: false
    };
  }, []);
  var prev = pages[index - 1],
      next = pages[index + 1],
      page = pages[index];
  var onClick = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (_ref4) {
    var clientX = _ref4.clientX;
    if (animateStatus.playing) return;
    var newIndex = Math.max(0, Math.min(pages.length - 1, index + (clientX > 187 ? 1 : -1)));

    if (index > newIndex) {
      animateStatus.playing = true;
      var am = prevRef.current.animate({
        transform: ['skewY(-90deg) scaleX(0)', 'skewY(0deg) scaleX(1)']
      }, {
        duration: 1e3,
        easing: 'ease-out'
      });

      am.onfinish = function (e) {
        animateStatus.playing = false;
        setIndex(newIndex);
      };
    } else if (index < newIndex) {
      animateStatus.playing = true;

      var _am = ref.current.animate({
        transform: ['skewY(0deg) scaleX(1)', 'skewY(-90deg) scaleX(0)']
      }, {
        duration: 1e3,
        easing: 'ease-in'
      });

      _am.onfinish = function (e) {
        animateStatus.playing = false;
        setIndex(newIndex);
      };
    } else {
      alert('first or last');
    }
  }, [index]);
  var pageProps = {
    chapter: chapter,
    marginTop: marginTop,
    viewportHeight: viewportHeight,
    appStyle: appStyle,
    titleStyle: titleStyle,
    paragraphStyle: paragraphStyle
  };
  return Object(react__WEBPACK_IMPORTED_MODULE_4__["createElement"])('div', {
    onClick: onClick,
    style: {
      position: 'relative',
      width: '100vw',
      height: '100vh',
      overflow: 'hidden'
    }
  }, Object(react__WEBPACK_IMPORTED_MODULE_4__["createElement"])(Page, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
    transform: '',
    page: next
  }, pageProps)), Object(react__WEBPACK_IMPORTED_MODULE_4__["createElement"])(Page, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
    ref: ref,
    transform: "scaleX(1) skewY(0deg)",
    page: page
  }, pageProps)), Object(react__WEBPACK_IMPORTED_MODULE_4__["createElement"])(Page, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
    ref: prevRef,
    transform: "scaleX(0) skewY(-90deg)",
    page: prev
  }, pageProps)));
};

var Page = Object(react__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(function (_ref5, ref) {
  var chapter = _ref5.chapter,
      transform = _ref5.transform,
      page = _ref5.page,
      isPrev = _ref5.isPrev,
      isNext = _ref5.isNext,
      marginTop = _ref5.marginTop,
      viewportHeight = _ref5.viewportHeight,
      appStyle = _ref5.appStyle,
      titleStyle = _ref5.titleStyle,
      paragraphStyle = _ref5.paragraphStyle;
  if (!page) return null;
  var style = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    paddingTop: marginTop,
    overflow: 'hidden',
    willChange: 'transform',
    background: '#ebe1c6',
    transformOrigin: 'left top',
    border: 'solid 1px #000',
    boxSizing: 'border-box',
    transform: transform
  };
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    ref: ref,
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: {
      height: viewportHeight,
      overflow: 'hidden'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: {
      transform: "translate(0, ".concat(page.offset, "px)")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, page.paragraphs.map(function (p) {
    return p.type === 'title' ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(ChapterTitle, {
      key: p.data.key,
      title: chapter.title,
      titleStyle: titleStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Paragraph, {
      key: p.data.key,
      paragraph: p.data,
      style: paragraphStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    });
  }))));
});

var Prerender = function Prerender(_ref6) {
  var chapter = _ref6.chapter,
      appStyle = _ref6.appStyle,
      titleStyle = _ref6.titleStyle,
      paragraphStyle = _ref6.paragraphStyle,
      viewportHeight = _ref6.viewportHeight,
      setPages = _ref6.setPages;
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (viewportHeight) {
      var wrapper = ref.current,
          titleHeight = wrapper.firstChild.getBoundingClientRect().height;
      var pages = [{
        paragraphs: [{
          type: 'title',
          data: {
            key: 'title_' + Math.random(),
            content: chapter.title
          }
        }],
        height: titleHeight,
        offset: 0
      }];
      var length = wrapper.children.length;
      var index = 1,
          page = pages[0];

      while (index < length) {
        var pHeight = wrapper.children[index].getBoundingClientRect().height;
        var para = {
          type: 'paragraph',
          data: chapter.paragraphs[index - 1]
        };

        if (page.height + page.offset < viewportHeight) {
          page.height += pHeight;
          page.paragraphs.push(para);

          if (page.height + page.offset > viewportHeight) {
            page = {
              paragraphs: [para],
              height: pHeight,
              offset: viewportHeight - page.height - page.offset
            };
            pages.push(page);
          }
        } else {
          page = {
            paragraphs: [para],
            height: pHeight,
            offset: 0
          };
          pages.push(page);
        }

        index++;
      }

      setPages(pages);
    }
  }, [chapter, viewportHeight]);
  return Object(react__WEBPACK_IMPORTED_MODULE_4__["createElement"])('div', {
    ref: ref,
    style: {
      position: 'absolute',
      width: '100vw',
      transform: 'translateX(-200vw)'
    }
  }, Object(react__WEBPACK_IMPORTED_MODULE_4__["createElement"])(ChapterTitle, {
    title: chapter.title,
    titleStyle: titleStyle
  }), chapter.paragraphs.map(function (paragraph) {
    return Object(react__WEBPACK_IMPORTED_MODULE_4__["createElement"])(Paragraph, {
      key: paragraph.key,
      paragraph: paragraph,
      style: paragraphStyle
    });
  }));
};

var appStyle = {
  width: '100vw',
  height: '100vh',
  fontSize: 18,
  lineHeight: '32px'
};

var NovelViewer = function NovelViewer(_ref7) {
  var chapter = _ref7.chapter;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      pageHeight = _useState4[0],
      setPageHeight = _useState4[1];

  var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_4__["useMemo"])(function () {
    var lineHeight = _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_0___default()(appStyle.lineHeight);

    var viewportHeight = Math.floor(pageHeight - lineHeight * 2 - pageHeight % lineHeight);
    var marginTop = Math.floor((pageHeight - viewportHeight) * .5);
    var titleStyle = {
      fontSize: appStyle.fontSize * 2,
      margin: 0,
      lineHeight: lineHeight * 2 + 'px',
      padding: "0 ".concat(appStyle.fontSize, "px ").concat(lineHeight, "px")
    };
    var paragraphStyle = {
      padding: "0 ".concat(appStyle.fontSize, "px"),
      boxSizing: 'border-box'
    };
    return {
      titleStyle: titleStyle,
      paragraphStyle: paragraphStyle,
      marginTop: marginTop,
      viewportHeight: viewportHeight
    };
  }, [pageHeight]),
      titleStyle = _useMemo.titleStyle,
      paragraphStyle = _useMemo.paragraphStyle,
      marginTop = _useMemo.marginTop,
      viewportHeight = _useMemo.viewportHeight;

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    setPageHeight(window.innerHeight);
  }, [pageHeight]);

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      pages = _useState6[0],
      setPages = _useState6[1];

  var viewer = Object(react__WEBPACK_IMPORTED_MODULE_4__["useRef"])();
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "3150692238",
    __self: this
  }, "html,body{margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWpjXFxTdGFmZlxcdGFwMi50b3BcXHBhZ2VzXFxub3ZlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyTXVCLEFBR2tCLFNBQ0MsVUFDWiIsImZpbGUiOiJDOlxcVXNlcnNcXGFqY1xcU3RhZmZcXHRhcDIudG9wXFxwYWdlc1xcbm92ZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VNZW1vLFxuICBmb3J3YXJkUmVmLFxuICBjcmVhdGVFbGVtZW50IGFzIGhcbn0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IENoYXB0ZXJUaXRsZSA9ICh7IHRpdGxlLCB0aXRsZVN0eWxlIH0pID0+IHtcbiAgcmV0dXJuIGgoJ2g0Jywge1xuICAgIHN0eWxlOiB0aXRsZVN0eWxlXG4gIH0sIHRpdGxlKVxufVxuXG5cbmNvbnN0IFBhcmFncmFwaCA9ICh7IHBhcmFncmFwaCwgc3R5bGUgfSkgPT4ge1xuICByZXR1cm4gaCgnZGl2JywgeyBzdHlsZSB9LCBwYXJhZ3JhcGguY29udGVudClcbn1cblxuY29uc3QgTm92ZWwgPSAoeyBjaGFwdGVyLCBwYWdlcywgbWFyZ2luVG9wLCB2aWV3cG9ydEhlaWdodCwgYXBwU3R5bGUsIHRpdGxlU3R5bGUsIHBhcmFncmFwaFN0eWxlIH0pID0+IHtcbiAgY29uc3QgWyBpbmRleCwgc2V0SW5kZXggXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IHJlZiA9IHVzZVJlZigpLCBwcmV2UmVmID0gdXNlUmVmKClcbiAgY29uc3QgYW5pbWF0ZVN0YXR1cyA9IHVzZU1lbW8oKCkgPT4gKHsgcGxheWluZzogZmFsc2UgfSksIFtdKVxuXG4gIGNvbnN0XG4gICAgcHJldiA9IHBhZ2VzW2luZGV4IC0gMV0sXG4gICAgbmV4dCA9IHBhZ2VzW2luZGV4ICsgMV0sXG4gICAgcGFnZSA9IHBhZ2VzW2luZGV4XVxuXG4gIGNvbnN0IG9uQ2xpY2sgPSB1c2VDYWxsYmFjaygoeyBjbGllbnRYIH0pID0+IHtcbiAgICBpZihhbmltYXRlU3RhdHVzLnBsYXlpbmcpIHJldHVyblxuICAgIGNvbnN0IG5ld0luZGV4ID0gTWF0aC5tYXgoMCxcbiAgICAgIE1hdGgubWluKHBhZ2VzLmxlbmd0aCAtIDEsXG4gICAgICAgIGluZGV4ICsgKGNsaWVudFggPiAxODcgPyAxIDogLTEpXG4gICAgICApXG4gICAgKVxuICAgIGlmKGluZGV4ID4gbmV3SW5kZXgpe1xuICAgICAgYW5pbWF0ZVN0YXR1cy5wbGF5aW5nID0gdHJ1ZVxuICAgICAgY29uc3QgYW0gPSBwcmV2UmVmLmN1cnJlbnQuYW5pbWF0ZShcbiAgICAgICAgeyB0cmFuc2Zvcm06IFsgJ3NrZXdZKC05MGRlZykgc2NhbGVYKDApJywgJ3NrZXdZKDBkZWcpIHNjYWxlWCgxKScgXSB9XG4gICAgICAsIHsgZHVyYXRpb246IDFlMyxcbiAgICAgICAgZWFzaW5nOiAnZWFzZS1vdXQnXG4gICAgICB9KVxuICAgICAgXG4gICAgICBhbS5vbmZpbmlzaCA9IGUgPT4ge1xuICAgICAgICBhbmltYXRlU3RhdHVzLnBsYXlpbmcgPSBmYWxzZVxuICAgICAgICBzZXRJbmRleChuZXdJbmRleClcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZihpbmRleCA8IG5ld0luZGV4KXtcbiAgICAgIGFuaW1hdGVTdGF0dXMucGxheWluZyA9IHRydWVcbiAgICAgIGNvbnN0IGFtID0gcmVmLmN1cnJlbnQuYW5pbWF0ZShcbiAgICAgICAgeyB0cmFuc2Zvcm06IFsgJ3NrZXdZKDBkZWcpIHNjYWxlWCgxKScsICdza2V3WSgtOTBkZWcpIHNjYWxlWCgwKScgXSB9XG4gICAgICAsIHsgZHVyYXRpb246IDFlMyxcbiAgICAgICAgZWFzaW5nOiAnZWFzZS1pbidcbiAgICAgIH0pXG4gICAgICBcbiAgICAgIGFtLm9uZmluaXNoID0gZSA9PiB7XG4gICAgICAgIGFuaW1hdGVTdGF0dXMucGxheWluZyA9IGZhbHNlXG4gICAgICAgIHNldEluZGV4KG5ld0luZGV4KVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgYWxlcnQoJ2ZpcnN0IG9yIGxhc3QnKVxuICAgIH1cbiAgfSwgWyBpbmRleCBdKVxuXG4gIGNvbnN0IHBhZ2VQcm9wcyA9IHtcbiAgICBjaGFwdGVyLFxuICAgIG1hcmdpblRvcCwgdmlld3BvcnRIZWlnaHQsIGFwcFN0eWxlLCB0aXRsZVN0eWxlLCBwYXJhZ3JhcGhTdHlsZVxuICB9XG4gIHJldHVybiBoKCdkaXYnLCB7XG4gICAgb25DbGljayxcbiAgICBzdHlsZToge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB3aWR0aDogJzEwMHZ3JyxcbiAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgIH1cbiAgfSxcbiAgICBoKFBhZ2UsIHsgdHJhbnNmb3JtOiAnJywgcGFnZTogbmV4dCwgLi4ucGFnZVByb3BzIH0pLFxuICAgIGgoUGFnZSwgeyByZWYsIHRyYW5zZm9ybTogYHNjYWxlWCgxKSBza2V3WSgwZGVnKWAsIHBhZ2UsIC4uLnBhZ2VQcm9wcyB9KSxcbiAgICBoKFBhZ2UsIHsgcmVmOiBwcmV2UmVmLCB0cmFuc2Zvcm06IGBzY2FsZVgoMCkgc2tld1koLTkwZGVnKWAsIHBhZ2U6IHByZXYsIC4uLnBhZ2VQcm9wcyB9KSxcbiAgICApXG59XG5cbmNvbnN0IFBhZ2UgPSBmb3J3YXJkUmVmKCh7IGNoYXB0ZXIsIHRyYW5zZm9ybSwgcGFnZSwgaXNQcmV2LCBpc05leHQsIG1hcmdpblRvcCwgdmlld3BvcnRIZWlnaHQsIGFwcFN0eWxlLCB0aXRsZVN0eWxlLCBwYXJhZ3JhcGhTdHlsZSB9LCByZWYpID0+IHtcbiAgaWYoIXBhZ2UpIHJldHVybiBudWxsXG5cbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgd2lkdGg6ICcxMDB2dycsXG4gICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgIHBhZGRpbmdUb3A6IG1hcmdpblRvcCxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybScsXG4gICAgYmFja2dyb3VuZDogJyNlYmUxYzYnLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJ2xlZnQgdG9wJyxcbiAgICBib3JkZXI6ICdzb2xpZCAxcHggIzAwMCcsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgdHJhbnNmb3JtXG4gIH1cbiAgcmV0dXJuIDxkaXYgcmVmPXtyZWZ9IHN0eWxlPXtzdHlsZX0+XG4gICAgPGRpdiBzdHlsZT17IHsgaGVpZ2h0OiB2aWV3cG9ydEhlaWdodCwgb3ZlcmZsb3c6ICdoaWRkZW4nIH0gfT5cbiAgICAgIDxkaXYgc3R5bGU9eyB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgwLCAkeyBwYWdlLm9mZnNldCB9cHgpYCB9IH0+XG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlLnBhcmFncmFwaHMubWFwKHAgPT4gcC50eXBlID09PSAndGl0bGUnXG4gICAgICAgICAgICA/IDxDaGFwdGVyVGl0bGUga2V5PXtwLmRhdGEua2V5fSB0aXRsZT17Y2hhcHRlci50aXRsZX0gdGl0bGVTdHlsZT17dGl0bGVTdHlsZX0vPlxuICAgICAgICAgICAgOiA8UGFyYWdyYXBoIGtleT17cC5kYXRhLmtleX0gcGFyYWdyYXBoPXtwLmRhdGF9IHN0eWxlPXtwYXJhZ3JhcGhTdHlsZX0vPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxufSlcblxuY29uc3QgUHJlcmVuZGVyID0gKHsgY2hhcHRlciwgYXBwU3R5bGUsIHRpdGxlU3R5bGUsIHBhcmFncmFwaFN0eWxlLCB2aWV3cG9ydEhlaWdodCwgc2V0UGFnZXMgfSkgPT4ge1xuICBjb25zdCByZWYgPSB1c2VSZWYoKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKHZpZXdwb3J0SGVpZ2h0KXtcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSByZWYuY3VycmVudCwgdGl0bGVIZWlnaHQgPSB3cmFwcGVyLmZpcnN0Q2hpbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XG4gICAgICBjb25zdCBwYWdlcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhcmFncmFwaHM6IFsgeyB0eXBlOiAndGl0bGUnLCBkYXRhOiB7IGtleTogJ3RpdGxlXycgKyBNYXRoLnJhbmRvbSgpLCBjb250ZW50OiBjaGFwdGVyLnRpdGxlIH0gfSBdLFxuICAgICAgICAgIGhlaWdodDogdGl0bGVIZWlnaHQsXG4gICAgICAgICAgb2Zmc2V0OiAwXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSB3cmFwcGVyLmNoaWxkcmVuXG4gICAgICBsZXQgaW5kZXggPSAxLCBwYWdlID0gcGFnZXNbMF1cbiAgICAgIHdoaWxlKGluZGV4IDwgbGVuZ3RoKXtcbiAgICAgICAgY29uc3QgcEhlaWdodCA9IHdyYXBwZXIuY2hpbGRyZW5baW5kZXhdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuICAgICAgICBjb25zdCBwYXJhID0ge1xuICAgICAgICAgIHR5cGU6ICdwYXJhZ3JhcGgnLFxuICAgICAgICAgIGRhdGE6IGNoYXB0ZXIucGFyYWdyYXBoc1tpbmRleCAtIDFdXG4gICAgICAgIH1cbiAgICAgICAgaWYocGFnZS5oZWlnaHQgKyBwYWdlLm9mZnNldCA8IHZpZXdwb3J0SGVpZ2h0KXtcbiAgICAgICAgICBwYWdlLmhlaWdodCArPSBwSGVpZ2h0XG4gICAgICAgICAgcGFnZS5wYXJhZ3JhcGhzLnB1c2gocGFyYSlcbiAgICAgICAgICBcbiAgICAgICAgICBpZihwYWdlLmhlaWdodCArIHBhZ2Uub2Zmc2V0ID4gdmlld3BvcnRIZWlnaHQpe1xuICAgICAgICAgICAgcGFnZSA9IHtcbiAgICAgICAgICAgICAgcGFyYWdyYXBoczogWyBwYXJhIF0sXG4gICAgICAgICAgICAgIGhlaWdodDogcEhlaWdodCxcbiAgICAgICAgICAgICAgb2Zmc2V0OiB2aWV3cG9ydEhlaWdodCAtIHBhZ2UuaGVpZ2h0IC0gcGFnZS5vZmZzZXRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhZ2VzLnB1c2gocGFnZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICBwYWdlID0ge1xuICAgICAgICAgICAgcGFyYWdyYXBoczogWyBwYXJhIF0sXG4gICAgICAgICAgICBoZWlnaHQ6IHBIZWlnaHQsXG4gICAgICAgICAgICBvZmZzZXQ6IDBcbiAgICAgICAgICB9XG4gICAgICAgICAgcGFnZXMucHVzaChwYWdlKVxuICAgICAgICB9XG4gICAgICAgIGluZGV4ICsrXG4gICAgICB9XG4gICAgICBzZXRQYWdlcyhwYWdlcylcbiAgICB9XG4gIH0sIFsgY2hhcHRlciwgdmlld3BvcnRIZWlnaHQgXSlcbiAgcmV0dXJuIGgoJ2RpdicsIHsgcmVmLCBzdHlsZTogeyBwb3NpdGlvbjogJ2Fic29sdXRlJywgd2lkdGg6ICcxMDB2dycsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTIwMHZ3KScgfSB9LFxuICAgIGgoQ2hhcHRlclRpdGxlLCB7IHRpdGxlOiBjaGFwdGVyLnRpdGxlLCB0aXRsZVN0eWxlIH0pLFxuICAgIGNoYXB0ZXIucGFyYWdyYXBocy5tYXAocGFyYWdyYXBoID0+IGgoUGFyYWdyYXBoLCB7IGtleTogcGFyYWdyYXBoLmtleSwgcGFyYWdyYXBoLCBzdHlsZTogcGFyYWdyYXBoU3R5bGUgfSkpXG4gIClcbn1cblxuY29uc3QgYXBwU3R5bGUgPSB7XG4gIHdpZHRoOiAnMTAwdncnLFxuICBoZWlnaHQ6ICcxMDB2aCcsXG4gIGZvbnRTaXplOiAxOCxcbiAgbGluZUhlaWdodDogJzMycHgnLFxufVxuXG5jb25zdCBOb3ZlbFZpZXdlciA9ICh7IGNoYXB0ZXIgfSkgPT4ge1xuICBjb25zdCBbIHBhZ2VIZWlnaHQsIHNldFBhZ2VIZWlnaHQgXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IHsgdGl0bGVTdHlsZSwgcGFyYWdyYXBoU3R5bGUsIG1hcmdpblRvcCwgdmlld3BvcnRIZWlnaHQgfSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGxpbmVIZWlnaHQgPSBwYXJzZUZsb2F0KGFwcFN0eWxlLmxpbmVIZWlnaHQpXG4gICAgY29uc3Qgdmlld3BvcnRIZWlnaHQgPSBNYXRoLmZsb29yKHBhZ2VIZWlnaHQgLSBsaW5lSGVpZ2h0ICogMiAtIHBhZ2VIZWlnaHQgJSBsaW5lSGVpZ2h0KVxuICAgIGNvbnN0IG1hcmdpblRvcCA9IE1hdGguZmxvb3IoKHBhZ2VIZWlnaHQgLSB2aWV3cG9ydEhlaWdodCkgKiAuNSlcblxuICAgIGNvbnN0IHRpdGxlU3R5bGUgPSB7XG4gICAgICBmb250U2l6ZTogYXBwU3R5bGUuZm9udFNpemUgKiAyLFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgbGluZUhlaWdodDogbGluZUhlaWdodCAqIDIgKyAncHgnLFxuICAgICAgcGFkZGluZzogYDAgJHthcHBTdHlsZS5mb250U2l6ZX1weCAkeyBsaW5lSGVpZ2h0IH1weGBcbiAgICB9XG4gICAgY29uc3QgcGFyYWdyYXBoU3R5bGUgPSB7XG4gICAgICBwYWRkaW5nOiBgMCAke2FwcFN0eWxlLmZvbnRTaXplfXB4YCxcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdGl0bGVTdHlsZSwgcGFyYWdyYXBoU3R5bGUsIG1hcmdpblRvcCwgdmlld3BvcnRIZWlnaHQgfVxuICB9LCBbIHBhZ2VIZWlnaHQgXSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRQYWdlSGVpZ2h0KHdpbmRvdy5pbm5lckhlaWdodClcbiAgfSwgWyBwYWdlSGVpZ2h0IF0pXG5cbiAgY29uc3QgWyBwYWdlcywgc2V0UGFnZXMgXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IHZpZXdlciA9IHVzZVJlZigpXG5cbiAgcmV0dXJuIDw+XG4gICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgIGh0bWwsIGJvZHkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDxkaXYgcmVmPXt2aWV3ZXJ9IHN0eWxlPXthcHBTdHlsZX0+e1xuICAgICAgaChQcmVyZW5kZXIsIHsgY2hhcHRlciwgdGl0bGVTdHlsZSwgdmlld3BvcnRIZWlnaHQsIHNldFBhZ2VzLCBhcHBTdHlsZSwgcGFyYWdyYXBoU3R5bGUgfSlcbiAgICB9e1xuICAgICAgcGFnZXMgPyBoKE5vdmVsLCB7XG4gICAgICAgIGNoYXB0ZXIsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBhcHBTdHlsZSxcbiAgICAgICAgdGl0bGVTdHlsZSxcbiAgICAgICAgcGFyYWdyYXBoU3R5bGUsXG4gICAgICAgIG1hcmdpblRvcCxcbiAgICAgICAgdmlld3BvcnRIZWlnaHRcbiAgICAgIH0pIDogbnVsbFxuICAgIH08L2Rpdj5cbiAgPC8+XG59XG5cbk5vdmVsVmlld2VyLmdldEluaXRpYWxQcm9wcyA9ICgpID0+IHtcbiAgY29uc3QgY2hhcHRlciA9IHtcbiAgICB0aXRsZTogJ+esrOS4gOeroCcsXG4gICAgcGFyYWdyYXBoczogW3tcImtleVwiOlwiZjA2YzZiZTBhMmFkMTMzYjViZTI3NThkYzAzNDllYjRcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOm7hOaYj+eahOS9mei+ie+8jOWAvua0kuiAjOS4i++8jOS9v+W+l+aVtOW6p+S6keWkqeWfju+8jOmDveiSmeWfjuS6huS4gOWxgua3oea3oeeahOmHkemcnuOAglwifSx7XCJrZXlcIjpcIjk4ZGM1ZDk5Y2UwNDBiZWQ0NGQ0YmVkODQ1MzU3MWQ5XCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCI5YjQ3ZmJhZDQ3MDBiNDViOWQ0ZWM4NDJhNjcxYTUzY1wiLFwiY29udGVudFwiOlwi44CA44CA44CA5aSn5aiB5q2m6aaG5L2N5LqO5LqR5aSp5Z+O5pyA57mB5Y2O55qE5Zyw5q6177yM5LiN6L+H55u45q+U6L6D5LqO5b6A5bi45p2l77yM5q2k5pe255qE5q2m6aaG77yM5pi+5b6X5pyJ5Lqb5Ya35a+C44CCXCJ9LHtcImtleVwiOlwiNDBlZjViNjNlNmEyZDVlZjJjOWI3MmY0ZmVjMTVjMzZcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcImRlNjU1Nzc3NmQ5NTMwNGFiYTUzNDZmODU5ZTFkN2NmXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDigJzllJTigKbigKbigJ1cIn0se1wia2V5XCI6XCIzYWI3NmI2MWE1YzE1NDU5M2NjMWI1ZDgxNzI5MDBiMlwiLFwiY29udGVudFwiOlwi44CA44CA44CA5Zyo5q2m6aaG6KeS6JC95L2N572u55qE5LiA5Liq5oi/6Ze05YaF77yM5LiA5Liq5bm057qm5Y2B5LiD5YWr5bKB55qE5bCR5bm077yM6Lq65Zyo5pyo5bqK5LiK77yM5Y+R5Ye65LiA6Zi16L275ZCf77yM57Sn6Zet55qE55y855qu77yM57yT57yT552B5byA44CCXCJ9LHtcImtleVwiOlwiOTk4NDdiNmUwNjAyOTM2MzlhOWM0NGI5MDkyYmM1ZjVcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcIjU5MWNiZDUzZDNhMzkwMmZhMWZmNzE0YzY0MDgwMDQ3XCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDnnIvnnYDlm5vlkajnhp/mgonnmoTnjq/looPvvIzmnajmmK3lvq7lvq7kuIDmhKPvvIzkuI3ov4fpmo/ljbPku5blg4/mmK/mg7Potbfkuobku4DkuYjvvIzlv4PkuK3mtozotbfkuIDogqHlvLrng4jnmoTmgJLngavjgIJcIn0se1wia2V5XCI6XCIxNTdhNTEyYjE2ZmZlZjAxZjcyNWY3MGM1MmMyZjIzZlwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiNGZhNmMwOWUzMjEyYzViMDkzZTM3YmRkM2Q2YmQ2MjRcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOKAnOeOi+S6ke+8jOS9oOS7rOi/mee+pOeLl+S4nOilv++8jOW4iOWChei/h+S4lui/mOayoeWIsOS4gOS4quaciO+8jOWwsemDveWmguatpOasuuaIkeOAguKAnVwifSx7XCJrZXlcIjpcIjZjMTFkMTEzZTAwZjcxZTM2NWI4NDU1YTEzNWI2MWVlXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCIxY2Q1YjcyYWM2OTc5NDUyOTRmYjQ0ODVmODAyMzY0N1wiLFwiY29udGVudFwiOlwi44CA44CA44CA5oOz6LW35LiN5LmF5YmN55qE6YGt6YGH77yM5p2o5pit5omL5o6M5o+h57Sn77yM5ZaJ5ZKZ5Lit5Y+R5Ye65LiA6Zi15L2O5ZC844CCXCJ9LHtcImtleVwiOlwiNGMyNmI5YjliMmJkZTE3YmFlNGRlYTc0YTEwYzBkNDZcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcIjZlN2FjNTZlYTA4ZDdjZThiN2M4ZjY0NjhkYWZkMzc2XCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDmnajmmK3vvIzku5bmmI7pnaLkuIrnmoTouqvku73vvIzmmK/lpKflqIHmrabppobppobkuLvkvZXmlrnoiJ/nmoTmnIDlkI7kurLkvKDlvJ/lrZDjgIJcIn0se1wia2V5XCI6XCIxODI4MjUxYjkwNmZhM2JhNjEwNDJjN2NiMDI1NzY1ZFwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiOTA1Y2VlYzkzNzQ0YTMwZmRkODJjODg3ZmFkNDM1MWNcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOS9huWPquacieS7luiHquW3sea4healmu+8jOWFtuWunuS7luaYr+adpeiHquWPpuWkluS4gOS4quS4lueVjOeahOaZrumAmuS6uu+8jOWPquaYr+WboOS4uuS4gOasoeaEj+Wklu+8jOeBtemtguadpeWIsOS6hui/meS4quS4lueVjO+8jOW5tuS4lOmZhOi6q+WIsOS6huS4gOS4quWwkeW5tOWtpOWEv+eahOi6q+S4iuOAglwifSx7XCJrZXlcIjpcIjYyOTE0MzdkNzI5NTRkY2ZhZWU3ZjY0ZDVlMDVhMzAwXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCI4ZjRhZDRkZGFkYWU5OWI5Nzc3ODYyNTdiMjk1YzljOFwiLFwiY29udGVudFwiOlwi44CA44CA44CA5LuW5LmL5omA5Lul6IO96KKr5L2V5pa56Iif5aCC5aCC5LiA5L2N5q2m6aaG6aaG5Li777yM5pS25Li65Lqy5Lyg5byf5a2Q77yM6YKj5YCS5LiN5piv5Zug5Li65LuW55qE5q2m6YGT6LWE6LSo6auY57ud77yM55u45Y+N77yM5LuW6ZmE6Lqr55qE6L+Z5YW36Lqr6Lqv77yM6LWE6LSo5b6I5LiA6Iis44CCXCJ9LHtcImtleVwiOlwiNDRiZDE0MDExM2RmNmNhMjE5MDM4YTRlYjJkOTczNmNcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcImQzMzg3NGNmMDhiMjg2MzJkOWQ1YzI2MTNkNTkyNmEyXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDnnJ/mraPorqnkvZXmlrnoiJ/nnIvph43nmoTvvIzmmK/ku5bnmoTllYbkuJrog73lipvjgIJcIn0se1wia2V5XCI6XCJhZDRlYWI2MWJjYmRlZDIzNzY2ZWM2YjQ4NTg1OGM2OVwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiNTQzMjY5NzdmZDNjZDY2YjQ0ZTlmOGViYjQ5Y2I2NGNcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOWcqOi/meS4quatpumBk+aYjOebm++8jOWPquimgeS4quS6uuWunuWKm+i2s+Wkn++8jOWwseWPr+S7peWHjOmpvuS6juS4gOWIh+ekvOazleS5i+S4iueahOS4lueVjO+8jOWVhuS4mueahOWPkeWxle+8jOebuOWvueS6jumCo+WPpuS4gOS4quS4lueVjO+8jOaXoOeWkeaYr+WNgeWIhua7nuWQjueahOOAglwifSx7XCJrZXlcIjpcIjY3MjhiNzkxYmNmNmUxMTJjZjY2NzlmNzA1YWVmYzUzXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCJjZTQyMDVkYWJkYjY2OGUzNTEyOTdiZTVmZDMzMDg5YlwiLFwiY29udGVudFwiOlwi44CA44CA44CA5p2o5pit5YCf6Ym05YmN5LiW55qE5LiA5Lqb57uP5ZWG5qih5byP77yM5YaN6YWN5ZCI5aSn5aiB5q2m6aaG55qE5Yq/5Yqb77yM5Y+v552A5a6e5Li65q2m6aaG5Y+R5bGV5LqG5LiN5bCR5Lqn5Lia77yM6LWa5LqG5LiN5bCR6ZKx44CCXCJ9LHtcImtleVwiOlwiNzg4MmNhNGFmYjQ3ZTIyY2JhZmYzMTgyNDdmNWE2YzNcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcIjEwMTE4YTNiMTYzNGRiNDU3OTY3ZDUwNGEyOWIxYjZiXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDmnajmmK3nmoTov5nnp43miY3og73vvIzorqnkvZXmlrnoiJ/lmajph43kuI3lt7LvvIznlJroh7PlkI7mnaXov5jmnInkvKDpl7vvvIzku5bopoHlsIboh6rlt7HnmoTni6zlpbPvvIzorrjphY3nu5nmnajmmK3vvIzlubblnKjoh6rlt7Hnmb7lubTkuYvlkI7vvIzlsIblpKflqIHmrabppobvvIzkuZ/nu6fmib/liLDmnajmmK3miYvkuIrjgIJcIn0se1wia2V5XCI6XCIxM2IzODUzNGYwZDFkNzhlMmFlOTVjNGM4NzY1OWVmNVwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiZmUyODI1YmJlZTZhZGFmMzMzYzNlOTFjYzA5NDJkMTZcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOi/meagt+S4gOadpe+8jOiHqueEtuiuqeadqOaYre+8jOiiq+S9leaWueiIn+eahOWFtuS7luWHoOS9jeS6suS8oOW8n+WtkO+8jOinhuS4uuS6huecvOS4remSie+8jOiCieS4reWIuuOAglwifSx7XCJrZXlcIjpcIjkzOGNiZTBjOGVmMmZhNjliZDRjNmE5NjdiZWEyOGY3XCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCJlMTBjNGY0ZDk1NmE1NzIxZTI4Njk5Mjc3MDY5Mjk0ZVwiLFwiY29udGVudFwiOlwi44CA44CA44CA5pys5p2l77yM5L2V5pa56Iif6KaB5piv5Zyo5LiW77yM5LuW6YKj5Yeg5Liq5Lqy5Lyg5byf5a2Q77yM5bC9566h5LiN5ruh5p2o5pit77yM5L2G5Lmf5LiN5pWi5aaC5L2V6KGo546w5Ye65p2l44CCXCJ9LHtcImtleVwiOlwiMzg1YTYwODNiYTUzYWUyMjQ3MWZhYTE5YWJhNjMyZmRcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcIjQzZDQ4NzI0ZjA4YTYzZDFiY2Q3YjkzMDdmYmMzNzM5XCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDkvYblgY/lgY/lnKjkuI3kuYXliY3vvIzkvZXmlrnoiJ/lm6DkuLrph4fmkZjkuIDnp43ngbXoja/vvIzmt7HlhaXkupHlpKnlsbHohInvvIzkuI3lubjmrbvlnKjkuobph4zpnaLlvLrlpKflh7blhb3lj6PkuIvjgIJcIn0se1wia2V5XCI6XCIzMDYxODI2NjEwNWUzNzJjNzZlMTJiZjk2ZjRmYjdlZVwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiZTBkNzdkYjBhYzIzMjdkZmQzM2RhMzNiYzVlNzFlZDRcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOWkseWOu+S6hui/meS9jeWkp+mdoOWxse+8jOS9v+W+l+iHqui6q+WunuWKm+W5tuS4jeW8uueahOadqOaYre+8jOWcqOWkp+WogeatpummhueahOWkhOWig++8jOeri+WIu+S4gOiQveWNg+S4iO+8jOWPl+WIsOS9leaWueiIn+WHoOS9jeS6suS8oOW8n+WtkOaJk+WOi+aOkuaMpOOAglwifSx7XCJrZXlcIjpcImU1MmMzYmYzMWNlZjY3MDYyMmJkMTExNWYzYjlhOTQ4XCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCJlNWRmNGNkMTk1YzZlMDk2OGFjN2I0MTgzNzQwYjJhNVwiLFwiY29udGVudFwiOlwi44CA44CA44CA5LuK5aSp77yM6YKj5L2N546L5LqR77yM5pu05piv5bim5p2l5LqG5YW25LuW5Yeg5L2N5Lqy5Lyg5byf5a2Q55qE5oSP5oCd77yM5piO55m95Zyw5oyH5Ye66KaB5p2o5pit5Y236ZO655uW6LWw5Lq644CCXCJ9LHtcImtleVwiOlwiZTU0MjJiNmFkMWFjMjkzNTAxMjY5NGIyYWI4MjU4YTRcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcIjExNWQwNmE0NzA4NDU1ZDczM2VmNzEyYjMzODFmNDdkXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDmnajmmK3lvZPml7bmhKTmgJLkuYvkuIvvvIzlkoznjovkupHpobbkuoblh6Dlj6XlmLTvvIznu5PmnpzooqvlkI7ogIXni6Dni6DmmrTmj43kuIDpob/vvIzov5jooqvmiZPlvpfmmI/kuobov4fljrvjgIJcIn0se1wia2V5XCI6XCIyMGI4YjY2ZjMyZGEzMWEyMzBlYTYyNDk1ZWFmZDdmYlwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiNjE4OGJhMzNiYzQ1N2JjMGVjMWE5OGY0MmQyODg0MTRcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOS4jei/h+iCiei6q+S4iueahOeXm+almu+8jOWvueS6juadqOaYreadpeivtOi/mOS4jeeul+S7gOS5iO+8jOWPquaYr+W9k+S7luaDs+i1t+mCo+S9jea4heS4veWls+WtkOaXtu+8jOW/g+S4reWwseS8mumXqui/h+S4gOmYteWIuueXm+OAglwifSx7XCJrZXlcIjpcImU2MzgyZWFjMmIxNTQyMTM2Y2MzNTE2NzI3OGUzZWM5XCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCIyZjQ4ZmFmYjVjODZhNWU1NDQ1NWU4N2Y1YjM4ZDAwY1wiLFwiY29udGVudFwiOlwi44CA44CA44CA6YKj57ud576O5a656aKc5Lit77yM5bim552A55qE5Ya35reh5ZKM5ryg6KeG77yM6K6p5p2o5pit5rC46L+c6YO96Zq+5Lul5b+Y5o6J44CCXCJ9LHtcImtleVwiOlwiYzBhMTIyZGU4NjdmNDI1NWVjZDNiY2Y5YjBiZDNlZGRcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcIjNiNThmOTE2MDRjYTdmMTgxNDY5YjQyNGY3MTdjNjVhXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDigJzlpoLmraTkuZ/lpb3vvIzmuIXmpZrkuobkvaDnmoTlv4PmhI/vvIzmiJHkuZ/lj6/ku6Xkuobml6DnibXmjILnmoTnprvlvIDkuobjgILigJ3mnajmmK3mg6jnhLbkuIDnrJHvvIzlr7nkuo7mrabppoblho3ml6DnlZnmgYvjgIJcIn0se1wia2V5XCI6XCJlMGIxMGQ2OGYwOGI2MWRiZGEwMTQxMWU4ZTIzMWQ0MFwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiZDNhZDhjNDEwN2IyZDg3N2NkNDFhZWE3NzIxYjk5OTNcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOiAjOS4lOe7j+i/h+S7iuWkqeeahOS6i+aDhe+8jOS7luW3sue7j+a3seWIu+WcsOaYjueZveS6huiHquW3seeOsOWcqOeahOWkhOWig+OAglwifSx7XCJrZXlcIjpcIjkzMDk3OGJlNGU2MDRhNjVhMGFhMjFlYWEyODU4Zjg0XCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCI1YTQyNjU1OTY4N2Q2OWI4N2RjMDUxZjdmNGYyMTNlZFwiLFwiY29udGVudFwiOlwi44CA44CA44CA5YaN5LiN56a75byA5q2m6aaG77yM6Ieq5bex5oGQ5oCV5pep5pma6KaB6KKr546L5LqR562J5Lq66Zi05q2744CCXCJ9LHtcImtleVwiOlwiOGZiMWQ4MDFiNTJlZjljZmE4NmJhMzk1N2RiOTkzNzVcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcImY4OTQ2ZTlkYWFhYjVjZjZlYjExZDQ5ODkwY2RiODRmXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDigJzkuZ/kuI3nn6XpgZPpgqPlsI/lrZDphpLkuobmsqHmnInvvJ/njovkupHluIjlhYTlj6/mmK/or7TkuobvvIzku4rlpKnpnZ7orqnku5bmu5rom4vkuI3lj6/jgILigJ1cIn0se1wia2V5XCI6XCJjNTBlNTljYmI4OWFhZWVlNWIyOGYxNmY5MmZlNzUxYlwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiYjMwNDk0MTgxOGE3MWViN2JlNjU3ZWQ1NmM0NTYxZGJcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOKAnOWYv+WYv++8jOayoemGkuWwsea1h+ebhuWHieawtOS4i+WOu++8jOS4jeaAleS7luS4jemGkuOAguKAnVwifSx7XCJrZXlcIjpcIjk2YWM1OWE2OGNjMDNmYWM3YzQ0MmY3NWQ2N2Q3MGMwXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCIxMDI3OWQ0ZDU1ZTVjYWQ3NGIwOTE0MWRmMGJlZmMyMFwiLFwiY29udGVudFwiOlwi44CA44CA44CA5bCx5Zyo6L+Z5pe277yM5oi/5aSW5Lyg5p2l5LiA6Zi15ayJ56yR5aOw77yM57Sn6Lef552A77yM4oCc56Cw4oCd55qE5LiA5aOw77yM5oi/6Zeo6KKr6Li55LqG5byA5p2l44CCXCJ9LHtcImtleVwiOlwiODYwNjk5MzY0ZWE2Y2Y5MDNiZDQ3MmI5ZGQxNTM5NjFcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcIjFlMTY0OWQyZWViNTViZTU3NjQwMTM2ZDIyY2UzYTg5XCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDkuKTkuKrouqvnqb/nu4Plip/mnI3nmoTlubTovbvnlLflrZDvvIznm7jnu6fotbDov5vlsYvlhoXjgIJcIn0se1wia2V5XCI6XCI4NzFmOTQzM2UzZDVmOTRhNzcyODk3MDk5NzYzZTVkOFwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiOTdmZTkzMzZhY2JkZjAzOWRkMTYyNDJmNmFmZWU1NGZcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOeci+WIsOWdkOWcqOW6iuS4iueahOadqOaYre+8jOW9k+WFiOmCo+eUt+WtkOi9u+eskeS4gOWjsOmBk++8muKAnOWOn+adpeaIkeS7rOeahOKAmOadqOW4iOWFhOKAmeW3sue7j+mGkuS6hu+8jOmCo+i1tue0p+eahOWQp+OAgueOi+S6keW4iOWFhOivtOS7iuaXpeKAmOadqOW4iOWFhOKAmeS9oOimgeemu+W8gOatpummhuS6hu+8jOi/mOeJueaEj+WPrOmbhuS6huW4iOWFhOW8n+S7rO+8jOmDveWcqOWJjemZou+8jOetieedgOimgeS4uuS9oOmAgeihjOWRouOAguKAnVwifSx7XCJrZXlcIjpcIjRhMjg5YWZmMjllMjFhMTMyZTMwODliMGVhYzcwOWQ3XCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCJkM2MxYzAyMGQxNWRlMTBlZDA3YTdmZjNiZmJhNThmZlwiLFwiY29udGVudFwiOlwi44CA44CA44CA4oCc5LiN6ZSZ77yM6LW257Sn55qE5ZCn77yM5LiN6KaB6K6p5LiA5LyX5biI5YWE5byf562J5LmF5LqG44CC5p2o5biI5YWE5L2g6KaB5piv6KGM5Yqo5LiN5L6/77yM5oiR5Lus5Y+v5Lul5biu5LiA5biu5L2g44CC4oCd5Y+m5LiA5L2N55S35a2Q77yM6IS45LiK6Zi056yR6L+e6L+e44CCXCJ9LHtcImtleVwiOlwiZDQwOGE5Y2I5MTI0ZDllYjRhZGY4ZWU4OGVlYzI5ZmJcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcIjM4MmVkMjdmYzBkMzg5OTcwZWZjYmEwYTcxMTViZjdjXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDmnajmmK3nnLjlhYnlhrflhr3vvIzmsqHmnInnkIbkvJrov5nkuKTkuKrnlLflrZDvvIzkuIvluorlkI7vvIzlvoTnm7TnprvlvIDlsYvlrZDjgIJcIn0se1wia2V5XCI6XCIxNzNlNzkxOGI4NmJiODVmNjk4ZjYyOTg0N2ZlY2Q1MlwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiNmE4ZWU4MmUzMDU4ZjQwYTZmZGQ0MWNmZjFkNDkzYjRcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOKAnOWTvO+8geaLveS7gOS5iOWRgO+8jOi/mOS7peS4uuaYr+S7peWJjemmhuS4u+WcqOeahOaXtuWAmeWQl++8geKAnemCo+W9k+WFiOi/m+adpeeahOeUt+WtkO+8jOingeWIsOadqOaYreaXoOinhuiHquW3se+8jOS4jeeUseWPkeWHuuWGt+WTvOOAglwifSx7XCJrZXlcIjpcIjM4ZGMxMzVkNjkzOWNiNDU1ZGRlZTA1ZmZkNTM2NjEyXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCIwNmQyMjMyOWM2MjlmMTJlMzIwZTg3NzAwNWZhMGMxOFwiLFwiY29udGVudFwiOlwi44CA44CA44CA6ZqP5Y2z77yM5LqM5Lq65Lmf6Lef552A5p2o5pit5Ye65Y6744CCXCJ9LHtcImtleVwiOlwiYTMxYWRkNGNkMzVjODU3YTUwZTg3MDMyZWVhNTkwNWJcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcIjRkZGViODRiY2UwM2YyYmU1NThkM2FmOTE5ZjU3MTNlXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDmraTliLvlnKjlpKflqIHmrabppobnmoTliY3pmaLvvIzkuIDlpKfnvqTnmoTmrabppoblvJ/lrZDvvIzpg73lgZzkuIvkuobmr4/ml6Xpu4TmmI/ljYHliIbnmoTkv67ngrzlip/or77vvIznm7jkupLlnKjkvY7lo7Dorq7orrrnnYDku4DkuYjjgIJcIn0se1wia2V5XCI6XCI2YzAxOGJlNDhlMmY2YmQ1ZjA0MzZkNzM0ZmIxOTkyYlwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiYWFlYjUzZGRiZDZhNzJlMDExZDJkMDQ2NGI3MjYzZjlcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOKAnOWXr++8geadqOaYreWHuuadpeS6huOAguKAnVwifSx7XCJrZXlcIjpcIjhkY2IzODgzNjQxYzJmMDc4Y2VjYzNlYmFhNDQzMWEwXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCI1ODI4ODFjNWI3NTE4NDY5MzY0Yzc3ZDFlZTYxOTAzM1wiLFwiY29udGVudFwiOlwi44CA44CA44CA5b+954S277yM5YW25Lit5LiA5Liq5q2m6aaG55qE5a2m5b6S77yM5Y+R5Ye65LiA6Zi15L2O5ZG877yM5L2/5b6X6ZmE6L+R55qE5Lq677yM6YO95pyd552A5p+Q5LiA5Liq5pa55ZCR55yL5Y6744CCXCJ9LHtcImtleVwiOlwiZWZkNTMzYzZjY2U3Mjg4Yzg5YjBhMTMwOWNkY2JmN2NcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcIjAzZDdmZjI1ZjNkNGQ3MTdlYmI5MTU4MmFjODczNWQzXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDkuIDouqvnmb3ooaPnmoTmnajmmK3vvIzpnaLoibLov5jmnInlh6DliIboi43nmb3vvIzorqnkurrkuIDnnIvkuYvkuIvvvIzmm7Top4nlvpflg4/mmK/kuIDkuKrmloflvLHkuabnlJ/jgIJcIn0se1wia2V5XCI6XCJhYjBjZTBlYWUyNzA1YzQwNTYwOWZiYzYyNWMzYzM4MlwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiOWUxMTM5NGIwOTBlMWMzZmZjZWQwNmY5M2RiNTAyNDlcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOWPquaYr+WcqOeci+WQkeadqOaYreS5i+aXtu+8jOmCo+e+pOS6uuS4re+8jOS4jeiuuuaYr+atpummhueahOWtpuW+ku+8jOi/mOaYr+aLs+W4iO+8jOebruWFieS4remDvemakOmakOW4puedgOS4gOS4nemEmeWkt+WSjOS4jeWxkeOAglwifV1cbiAgfVxuICByZXR1cm4geyBjaGFwdGVyIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTm92ZWxWaWV3ZXIiXX0= */\n/*@ sourceURL=C:\\Users\\ajc\\Staff\\tap2.top\\pages\\novel.js */"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    ref: viewer,
    style: appStyle,
    className: "jsx-3150692238",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, Object(react__WEBPACK_IMPORTED_MODULE_4__["createElement"])(Prerender, {
    chapter: chapter,
    titleStyle: titleStyle,
    viewportHeight: viewportHeight,
    setPages: setPages,
    appStyle: appStyle,
    paragraphStyle: paragraphStyle
  }), pages ? Object(react__WEBPACK_IMPORTED_MODULE_4__["createElement"])(Novel, {
    chapter: chapter,
    pages: pages,
    appStyle: appStyle,
    titleStyle: titleStyle,
    paragraphStyle: paragraphStyle,
    marginTop: marginTop,
    viewportHeight: viewportHeight
  }) : null));
};

NovelViewer.getInitialProps = function () {
  var chapter = {
    title: '第一章',
    paragraphs: [{
      "key": "f06c6be0a2ad133b5be2758dc0349eb4",
      "content": "　　　黄昏的余辉，倾洒而下，使得整座云天城，都蒙城了一层淡淡的金霞。"
    }, {
      "key": "98dc5d99ce040bed44d4bed8453571d9",
      "content": "　　　"
    }, {
      "key": "9b47fbad4700b45b9d4ec842a671a53c",
      "content": "　　　大威武馆位于云天城最繁华的地段，不过相比较于往常来，此时的武馆，显得有些冷寂。"
    }, {
      "key": "40ef5b63e6a2d5ef2c9b72f4fec15c36",
      "content": "　　　"
    }, {
      "key": "de6557776d95304aba5346f859e1d7cf",
      "content": "　　　“唔……”"
    }, {
      "key": "3ab76b61a5c154593cc1b5d8172900b2",
      "content": "　　　在武馆角落位置的一个房间内，一个年约十七八岁的少年，躺在木床上，发出一阵轻吟，紧闭的眼皮，缓缓睁开。"
    }, {
      "key": "99847b6e060293639a9c44b9092bc5f5",
      "content": "　　　"
    }, {
      "key": "591cbd53d3a3902fa1ff714c64080047",
      "content": "　　　看着四周熟悉的环境，杨昭微微一愣，不过随即他像是想起了什么，心中涌起一股强烈的怒火。"
    }, {
      "key": "157a512b16ffef01f725f70c52c2f23f",
      "content": "　　　"
    }, {
      "key": "4fa6c09e3212c5b093e37bdd3d6bd624",
      "content": "　　　“王云，你们这群狗东西，师傅过世还没到一个月，就都如此欺我。”"
    }, {
      "key": "6c11d113e00f71e365b8455a135b61ee",
      "content": "　　　"
    }, {
      "key": "1cd5b72ac697945294fb4485f8023647",
      "content": "　　　想起不久前的遭遇，杨昭手掌握紧，喉咙中发出一阵低吼。"
    }, {
      "key": "4c26b9b9b2bde17bae4dea74a10c0d46",
      "content": "　　　"
    }, {
      "key": "6e7ac56ea08d7ce8b7c8f6468dafd376",
      "content": "　　　杨昭，他明面上的身份，是大威武馆馆主何方舟的最后亲传弟子。"
    }, {
      "key": "1828251b906fa3ba61042c7cb025765d",
      "content": "　　　"
    }, {
      "key": "905ceec93744a30fdd82c887fad4351c",
      "content": "　　　但只有他自己清楚，其实他是来自另外一个世界的普通人，只是因为一次意外，灵魂来到了这个世界，并且附身到了一个少年孤儿的身上。"
    }, {
      "key": "6291437d72954dcfaee7f64d5e05a300",
      "content": "　　　"
    }, {
      "key": "8f4ad4ddadae99b977786257b295c9c8",
      "content": "　　　他之所以能被何方舟堂堂一位武馆馆主，收为亲传弟子，那倒不是因为他的武道资质高绝，相反，他附身的这具身躯，资质很一般。"
    }, {
      "key": "44bd140113df6ca219038a4eb2d9736c",
      "content": "　　　"
    }, {
      "key": "d33874cf08b28632d9d5c2613d5926a2",
      "content": "　　　真正让何方舟看重的，是他的商业能力。"
    }, {
      "key": "ad4eab61bcbded23766ec6b485858c69",
      "content": "　　　"
    }, {
      "key": "54326977fd3cd66b44e9f8ebb49cb64c",
      "content": "　　　在这个武道昌盛，只要个人实力足够，就可以凌驾于一切礼法之上的世界，商业的发展，相对于那另一个世界，无疑是十分滞后的。"
    }, {
      "key": "6728b791bcf6e112cf6679f705aefc53",
      "content": "　　　"
    }, {
      "key": "ce4205dabdb668e351297be5fd33089b",
      "content": "　　　杨昭借鉴前世的一些经商模式，再配合大威武馆的势力，可着实为武馆发展了不少产业，赚了不少钱。"
    }, {
      "key": "7882ca4afb47e22cbaff318247f5a6c3",
      "content": "　　　"
    }, {
      "key": "10118a3b1634db457967d504a29b1b6b",
      "content": "　　　杨昭的这种才能，让何方舟器重不已，甚至后来还有传闻，他要将自己的独女，许配给杨昭，并在自己百年之后，将大威武馆，也继承到杨昭手上。"
    }, {
      "key": "13b38534f0d1d78e2ae95c4c87659ef5",
      "content": "　　　"
    }, {
      "key": "fe2825bbee6adaf333c3e91cc0942d16",
      "content": "　　　这样一来，自然让杨昭，被何方舟的其他几位亲传弟子，视为了眼中钉，肉中刺。"
    }, {
      "key": "938cbe0c8ef2fa69bd4c6a967bea28f7",
      "content": "　　　"
    }, {
      "key": "e10c4f4d956a5721e28699277069294e",
      "content": "　　　本来，何方舟要是在世，他那几个亲传弟子，尽管不满杨昭，但也不敢如何表现出来。"
    }, {
      "key": "385a6083ba53ae22471faa19aba632fd",
      "content": "　　　"
    }, {
      "key": "43d48724f08a63d1bcd7b9307fbc3739",
      "content": "　　　但偏偏在不久前，何方舟因为采摘一种灵药，深入云天山脉，不幸死在了里面强大凶兽口下。"
    }, {
      "key": "30618266105e372c76e12bf96f4fb7ee",
      "content": "　　　"
    }, {
      "key": "e0d77db0ac2327dfd33da33bc5e71ed4",
      "content": "　　　失去了这位大靠山，使得自身实力并不强的杨昭，在大威武馆的处境，立刻一落千丈，受到何方舟几位亲传弟子打压排挤。"
    }, {
      "key": "e52c3bf31cef670622bd1115f3b9a948",
      "content": "　　　"
    }, {
      "key": "e5df4cd195c6e0968ac7b4183740b2a5",
      "content": "　　　今天，那位王云，更是带来了其他几位亲传弟子的意思，明白地指出要杨昭卷铺盖走人。"
    }, {
      "key": "e5422b6ad1ac2935012694b2ab8258a4",
      "content": "　　　"
    }, {
      "key": "115d06a4708455d733ef712b3381f47d",
      "content": "　　　杨昭当时愤怒之下，和王云顶了几句嘴，结果被后者狠狠暴揍一顿，还被打得昏了过去。"
    }, {
      "key": "20b8b66f32da31a230ea62495eafd7fb",
      "content": "　　　"
    }, {
      "key": "6188ba33bc457bc0ec1a98f42d288414",
      "content": "　　　不过肉身上的痛楚，对于杨昭来说还不算什么，只是当他想起那位清丽女子时，心中就会闪过一阵刺痛。"
    }, {
      "key": "e6382eac2b1542136cc35167278e3ec9",
      "content": "　　　"
    }, {
      "key": "2f48fafb5c86a5e54455e87f5b38d00c",
      "content": "　　　那绝美容颜中，带着的冷淡和漠视，让杨昭永远都难以忘掉。"
    }, {
      "key": "c0a122de867f4255ecd3bcf9b0bd3edd",
      "content": "　　　"
    }, {
      "key": "3b58f91604ca7f181469b424f717c65a",
      "content": "　　　“如此也好，清楚了你的心意，我也可以了无牵挂的离开了。”杨昭惨然一笑，对于武馆再无留恋。"
    }, {
      "key": "e0b10d68f08b61dbda01411e8e231d40",
      "content": "　　　"
    }, {
      "key": "d3ad8c4107b2d877cd41aea7721b9993",
      "content": "　　　而且经过今天的事情，他已经深刻地明白了自己现在的处境。"
    }, {
      "key": "930978be4e604a65a0aa21eaa2858f84",
      "content": "　　　"
    }, {
      "key": "5a426559687d69b87dc051f7f4f213ed",
      "content": "　　　再不离开武馆，自己恐怕早晚要被王云等人阴死。"
    }, {
      "key": "8fb1d801b52ef9cfa86ba3957db99375",
      "content": "　　　"
    }, {
      "key": "f8946e9daaab5cf6eb11d49890cdb84f",
      "content": "　　　“也不知道那小子醒了没有？王云师兄可是说了，今天非让他滚蛋不可。”"
    }, {
      "key": "c50e59cbb89aaeee5b28f16f92fe751b",
      "content": "　　　"
    }, {
      "key": "b304941818a71eb7be657ed56c4561db",
      "content": "　　　“嘿嘿，没醒就浇盆凉水下去，不怕他不醒。”"
    }, {
      "key": "96ac59a68cc03fac7c442f75d67d70c0",
      "content": "　　　"
    }, {
      "key": "10279d4d55e5cad74b09141df0befc20",
      "content": "　　　就在这时，房外传来一阵嬉笑声，紧跟着，“砰”的一声，房门被踹了开来。"
    }, {
      "key": "860699364ea6cf903bd472b9dd153961",
      "content": "　　　"
    }, {
      "key": "1e1649d2eeb55be57640136d22ce3a89",
      "content": "　　　两个身穿练功服的年轻男子，相继走进屋内。"
    }, {
      "key": "871f9433e3d5f94a772897099763e5d8",
      "content": "　　　"
    }, {
      "key": "97fe9336acbdf039dd16242f6afee54f",
      "content": "　　　看到坐在床上的杨昭，当先那男子轻笑一声道：“原来我们的‘杨师兄’已经醒了，那赶紧的吧。王云师兄说今日‘杨师兄’你要离开武馆了，还特意召集了师兄弟们，都在前院，等着要为你送行呢。”"
    }, {
      "key": "4a289aff29e21a132e3089b0eac709d7",
      "content": "　　　"
    }, {
      "key": "d3c1c020d15de10ed07a7ff3bfba58ff",
      "content": "　　　“不错，赶紧的吧，不要让一众师兄弟等久了。杨师兄你要是行动不便，我们可以帮一帮你。”另一位男子，脸上阴笑连连。"
    }, {
      "key": "d408a9cb9124d9eb4adf8ee88eec29fb",
      "content": "　　　"
    }, {
      "key": "382ed27fc0d389970efcba0a7115bf7c",
      "content": "　　　杨昭眸光冷冽，没有理会这两个男子，下床后，径直离开屋子。"
    }, {
      "key": "173e7918b86bb85f698f629847fecd52",
      "content": "　　　"
    }, {
      "key": "6a8ee82e3058f40a6fdd41cff1d493b4",
      "content": "　　　“哼！拽什么呀，还以为是以前馆主在的时候吗！”那当先进来的男子，见到杨昭无视自己，不由发出冷哼。"
    }, {
      "key": "38dc135d6939cb455ddee05ffd536612",
      "content": "　　　"
    }, {
      "key": "06d22329c629f12e320e877005fa0c18",
      "content": "　　　随即，二人也跟着杨昭出去。"
    }, {
      "key": "a31add4cd35c857a50e87032eea5905b",
      "content": "　　　"
    }, {
      "key": "4ddeb84bce03f2be558d3af919f5713e",
      "content": "　　　此刻在大威武馆的前院，一大群的武馆弟子，都停下了每日黄昏十分的修炼功课，相互在低声议论着什么。"
    }, {
      "key": "6c018be48e2f6bd5f0436d734fb1992b",
      "content": "　　　"
    }, {
      "key": "aaeb53ddbd6a72e011d2d0464b7263f9",
      "content": "　　　“嗯！杨昭出来了。”"
    }, {
      "key": "8dcb3883641c2f078cecc3ebaa4431a0",
      "content": "　　　"
    }, {
      "key": "582881c5b7518469364c77d1ee619033",
      "content": "　　　忽然，其中一个武馆的学徒，发出一阵低呼，使得附近的人，都朝着某一个方向看去。"
    }, {
      "key": "efd533c6cce7288c89b0a1309cdcbf7c",
      "content": "　　　"
    }, {
      "key": "03d7ff25f3d4d717ebb91582ac8735d3",
      "content": "　　　一身白衣的杨昭，面色还有几分苍白，让人一看之下，更觉得像是一个文弱书生。"
    }, {
      "key": "ab0ce0eae2705c405609fbc625c3c382",
      "content": "　　　"
    }, {
      "key": "9e11394b090e1c3ffced06f93db50249",
      "content": "　　　只是在看向杨昭之时，那群人中，不论是武馆的学徒，还是拳师，目光中都隐隐带着一丝鄙夷和不屑。"
    }]
  };
  return {
    chapter: chapter
  };
};

/* harmony default export */ __webpack_exports__["default"] = (NovelViewer);

/***/ })

})
//# sourceMappingURL=novel.js.6c97d03d146747b2beac.hot-update.js.map