webpackHotUpdate("static\\development\\pages\\novel.js",{

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
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

/***/ }),

/***/ "./pages/novel.js":
/*!************************!*\
  !*** ./pages/novel.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "C:\\Users\\ajc\\Staff\\tap2.top\\pages\\novel.js";




var ChapterTitle = function ChapterTitle(_ref) {
  var title = _ref.title,
      titleStyle = _ref.titleStyle;
  return Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])('h4', {
    style: titleStyle
  }, title);
};

var Paragraph = function Paragraph(_ref2) {
  var paragraph = _ref2.paragraph,
      style = _ref2.style;
  return Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])('div', {
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      index = _useState2[0],
      setIndex = _useState2[1];

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(),
      prevRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  var animateStatus = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return {
      playing: false
    };
  }, []);
  var prev = pages[index - 1],
      next = pages[index + 1],
      page = pages[index];
  var onClick = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (_ref4) {
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
  return Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])('div', {
    onClick: onClick,
    style: {
      position: 'relative',
      width: '100vw',
      height: '100vh',
      overflow: 'hidden'
    }
  }, Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Page, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({
    transform: '',
    page: next
  }, pageProps)), Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Page, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({
    ref: ref,
    transform: "scaleX(1) skewY(0deg)",
    page: page
  }, pageProps)), Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Page, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({
    ref: prevRef,
    transform: "scaleX(0) skewY(-90deg)",
    page: prev
  }, pageProps)));
};

var Page = Object(react__WEBPACK_IMPORTED_MODULE_5__["forwardRef"])(function (_ref5, ref) {
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
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    ref: ref,
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    style: {
      height: viewportHeight,
      overflow: 'hidden'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    style: {
      transform: "translate(0, ".concat(page.offset, "px)")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, page.paragraphs.map(function (p) {
    return p.type === 'title' ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ChapterTitle, {
      key: p.data.key,
      title: chapter.title,
      titleStyle: titleStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Paragraph, {
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
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
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
  return Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])('div', {
    ref: ref,
    style: {
      position: 'absolute',
      width: '100vw',
      transform: 'translateX(-200vw)'
    }
  }, Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(ChapterTitle, {
    title: chapter.title,
    titleStyle: titleStyle
  }), chapter.paragraphs.map(function (paragraph) {
    return Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Paragraph, {
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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 2),
      pageHeight = _useState4[0],
      setPageHeight = _useState4[1];

  var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    var lineHeight = _babel_runtime_corejs2_core_js_parse_float__WEBPACK_IMPORTED_MODULE_1___default()(appStyle.lineHeight);

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

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    setPageHeight(window.innerHeight);
  }, [pageHeight]);

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState5, 2),
      pages = _useState6[0],
      setPages = _useState6[1];

  var viewer = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "3150692238",
    __self: this
  }, "html,body{margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWpjXFxTdGFmZlxcdGFwMi50b3BcXHBhZ2VzXFxub3ZlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyTXVCLEFBR2tCLFNBQ0MsVUFDWiIsImZpbGUiOiJDOlxcVXNlcnNcXGFqY1xcU3RhZmZcXHRhcDIudG9wXFxwYWdlc1xcbm92ZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VNZW1vLFxuICBmb3J3YXJkUmVmLFxuICBjcmVhdGVFbGVtZW50IGFzIGhcbn0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IENoYXB0ZXJUaXRsZSA9ICh7IHRpdGxlLCB0aXRsZVN0eWxlIH0pID0+IHtcbiAgcmV0dXJuIGgoJ2g0Jywge1xuICAgIHN0eWxlOiB0aXRsZVN0eWxlXG4gIH0sIHRpdGxlKVxufVxuXG5cbmNvbnN0IFBhcmFncmFwaCA9ICh7IHBhcmFncmFwaCwgc3R5bGUgfSkgPT4ge1xuICByZXR1cm4gaCgnZGl2JywgeyBzdHlsZSB9LCBwYXJhZ3JhcGguY29udGVudClcbn1cblxuY29uc3QgTm92ZWwgPSAoeyBjaGFwdGVyLCBwYWdlcywgbWFyZ2luVG9wLCB2aWV3cG9ydEhlaWdodCwgYXBwU3R5bGUsIHRpdGxlU3R5bGUsIHBhcmFncmFwaFN0eWxlIH0pID0+IHtcbiAgY29uc3QgWyBpbmRleCwgc2V0SW5kZXggXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IHJlZiA9IHVzZVJlZigpLCBwcmV2UmVmID0gdXNlUmVmKClcbiAgY29uc3QgYW5pbWF0ZVN0YXR1cyA9IHVzZU1lbW8oKCkgPT4gKHsgcGxheWluZzogZmFsc2UgfSksIFtdKVxuXG4gIGNvbnN0XG4gICAgcHJldiA9IHBhZ2VzW2luZGV4IC0gMV0sXG4gICAgbmV4dCA9IHBhZ2VzW2luZGV4ICsgMV0sXG4gICAgcGFnZSA9IHBhZ2VzW2luZGV4XVxuXG4gIGNvbnN0IG9uQ2xpY2sgPSB1c2VDYWxsYmFjaygoeyBjbGllbnRYIH0pID0+IHtcbiAgICBpZihhbmltYXRlU3RhdHVzLnBsYXlpbmcpIHJldHVyblxuICAgIGNvbnN0IG5ld0luZGV4ID0gTWF0aC5tYXgoMCxcbiAgICAgIE1hdGgubWluKHBhZ2VzLmxlbmd0aCAtIDEsXG4gICAgICAgIGluZGV4ICsgKGNsaWVudFggPiAxODcgPyAxIDogLTEpXG4gICAgICApXG4gICAgKVxuICAgIGlmKGluZGV4ID4gbmV3SW5kZXgpe1xuICAgICAgYW5pbWF0ZVN0YXR1cy5wbGF5aW5nID0gdHJ1ZVxuICAgICAgY29uc3QgYW0gPSBwcmV2UmVmLmN1cnJlbnQuYW5pbWF0ZShcbiAgICAgICAgeyB0cmFuc2Zvcm06IFsgJ3NrZXdZKC05MGRlZykgc2NhbGVYKDApJywgJ3NrZXdZKDBkZWcpIHNjYWxlWCgxKScgXSB9XG4gICAgICAsIHsgZHVyYXRpb246IDFlMyxcbiAgICAgICAgZWFzaW5nOiAnZWFzZS1vdXQnXG4gICAgICB9KVxuICAgICAgXG4gICAgICBhbS5vbmZpbmlzaCA9IGUgPT4ge1xuICAgICAgICBhbmltYXRlU3RhdHVzLnBsYXlpbmcgPSBmYWxzZVxuICAgICAgICBzZXRJbmRleChuZXdJbmRleClcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZihpbmRleCA8IG5ld0luZGV4KXtcbiAgICAgIGFuaW1hdGVTdGF0dXMucGxheWluZyA9IHRydWVcbiAgICAgIGNvbnN0IGFtID0gcmVmLmN1cnJlbnQuYW5pbWF0ZShcbiAgICAgICAgeyB0cmFuc2Zvcm06IFsgJ3NrZXdZKDBkZWcpIHNjYWxlWCgxKScsICdza2V3WSgtOTBkZWcpIHNjYWxlWCgwKScgXSB9XG4gICAgICAsIHsgZHVyYXRpb246IDFlMyxcbiAgICAgICAgZWFzaW5nOiAnZWFzZS1pbidcbiAgICAgIH0pXG4gICAgICBcbiAgICAgIGFtLm9uZmluaXNoID0gZSA9PiB7XG4gICAgICAgIGFuaW1hdGVTdGF0dXMucGxheWluZyA9IGZhbHNlXG4gICAgICAgIHNldEluZGV4KG5ld0luZGV4KVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgYWxlcnQoJ2ZpcnN0IG9yIGxhc3QnKVxuICAgIH1cbiAgfSwgWyBpbmRleCBdKVxuXG4gIGNvbnN0IHBhZ2VQcm9wcyA9IHtcbiAgICBjaGFwdGVyLFxuICAgIG1hcmdpblRvcCwgdmlld3BvcnRIZWlnaHQsIGFwcFN0eWxlLCB0aXRsZVN0eWxlLCBwYXJhZ3JhcGhTdHlsZVxuICB9XG4gIHJldHVybiBoKCdkaXYnLCB7XG4gICAgb25DbGljayxcbiAgICBzdHlsZToge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICB3aWR0aDogJzEwMHZ3JyxcbiAgICAgIGhlaWdodDogJzEwMHZoJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgIH1cbiAgfSxcbiAgICBoKFBhZ2UsIHsgdHJhbnNmb3JtOiAnJywgcGFnZTogbmV4dCwgLi4ucGFnZVByb3BzIH0pLFxuICAgIGgoUGFnZSwgeyByZWYsIHRyYW5zZm9ybTogYHNjYWxlWCgxKSBza2V3WSgwZGVnKWAsIHBhZ2UsIC4uLnBhZ2VQcm9wcyB9KSxcbiAgICBoKFBhZ2UsIHsgcmVmOiBwcmV2UmVmLCB0cmFuc2Zvcm06IGBzY2FsZVgoMCkgc2tld1koLTkwZGVnKWAsIHBhZ2U6IHByZXYsIC4uLnBhZ2VQcm9wcyB9KSxcbiAgICApXG59XG5cbmNvbnN0IFBhZ2UgPSBmb3J3YXJkUmVmKCh7IGNoYXB0ZXIsIHRyYW5zZm9ybSwgcGFnZSwgaXNQcmV2LCBpc05leHQsIG1hcmdpblRvcCwgdmlld3BvcnRIZWlnaHQsIGFwcFN0eWxlLCB0aXRsZVN0eWxlLCBwYXJhZ3JhcGhTdHlsZSB9LCByZWYpID0+IHtcbiAgaWYoIXBhZ2UpIHJldHVybiBudWxsXG5cbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgd2lkdGg6ICcxMDB2dycsXG4gICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgIHBhZGRpbmdUb3A6IG1hcmdpblRvcCxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybScsXG4gICAgYmFja2dyb3VuZDogJyNlYmUxYzYnLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJ2xlZnQgdG9wJyxcbiAgICBib3JkZXI6ICdzb2xpZCAxcHggIzAwMCcsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgdHJhbnNmb3JtXG4gIH1cbiAgcmV0dXJuIDxkaXYgcmVmPXtyZWZ9IHN0eWxlPXtzdHlsZX0+XG4gICAgPGRpdiBzdHlsZT17IHsgaGVpZ2h0OiB2aWV3cG9ydEhlaWdodCwgb3ZlcmZsb3c6ICdoaWRkZW4nIH0gfT5cbiAgICAgIDxkaXYgc3R5bGU9eyB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgwLCAkeyBwYWdlLm9mZnNldCB9cHgpYCB9IH0+XG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlLnBhcmFncmFwaHMubWFwKHAgPT4gcC50eXBlID09PSAndGl0bGUnXG4gICAgICAgICAgICA/IDxDaGFwdGVyVGl0bGUga2V5PXtwLmRhdGEua2V5fSB0aXRsZT17Y2hhcHRlci50aXRsZX0gdGl0bGVTdHlsZT17dGl0bGVTdHlsZX0vPlxuICAgICAgICAgICAgOiA8UGFyYWdyYXBoIGtleT17cC5kYXRhLmtleX0gcGFyYWdyYXBoPXtwLmRhdGF9IHN0eWxlPXtwYXJhZ3JhcGhTdHlsZX0vPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxufSlcblxuY29uc3QgUHJlcmVuZGVyID0gKHsgY2hhcHRlciwgYXBwU3R5bGUsIHRpdGxlU3R5bGUsIHBhcmFncmFwaFN0eWxlLCB2aWV3cG9ydEhlaWdodCwgc2V0UGFnZXMgfSkgPT4ge1xuICBjb25zdCByZWYgPSB1c2VSZWYoKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKHZpZXdwb3J0SGVpZ2h0KXtcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSByZWYuY3VycmVudCwgdGl0bGVIZWlnaHQgPSB3cmFwcGVyLmZpcnN0Q2hpbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XG4gICAgICBjb25zdCBwYWdlcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhcmFncmFwaHM6IFsgeyB0eXBlOiAndGl0bGUnLCBkYXRhOiB7IGtleTogJ3RpdGxlXycgKyBNYXRoLnJhbmRvbSgpLCBjb250ZW50OiBjaGFwdGVyLnRpdGxlIH0gfSBdLFxuICAgICAgICAgIGhlaWdodDogdGl0bGVIZWlnaHQsXG4gICAgICAgICAgb2Zmc2V0OiAwXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSB3cmFwcGVyLmNoaWxkcmVuXG4gICAgICBsZXQgaW5kZXggPSAxLCBwYWdlID0gcGFnZXNbMF1cbiAgICAgIHdoaWxlKGluZGV4IDwgbGVuZ3RoKXtcbiAgICAgICAgY29uc3QgcEhlaWdodCA9IHdyYXBwZXIuY2hpbGRyZW5baW5kZXhdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuICAgICAgICBjb25zdCBwYXJhID0ge1xuICAgICAgICAgIHR5cGU6ICdwYXJhZ3JhcGgnLFxuICAgICAgICAgIGRhdGE6IGNoYXB0ZXIucGFyYWdyYXBoc1tpbmRleCAtIDFdXG4gICAgICAgIH1cbiAgICAgICAgaWYocGFnZS5oZWlnaHQgKyBwYWdlLm9mZnNldCA8IHZpZXdwb3J0SGVpZ2h0KXtcbiAgICAgICAgICBwYWdlLmhlaWdodCArPSBwSGVpZ2h0XG4gICAgICAgICAgcGFnZS5wYXJhZ3JhcGhzLnB1c2gocGFyYSlcbiAgICAgICAgICBcbiAgICAgICAgICBpZihwYWdlLmhlaWdodCArIHBhZ2Uub2Zmc2V0ID4gdmlld3BvcnRIZWlnaHQpe1xuICAgICAgICAgICAgcGFnZSA9IHtcbiAgICAgICAgICAgICAgcGFyYWdyYXBoczogWyBwYXJhIF0sXG4gICAgICAgICAgICAgIGhlaWdodDogcEhlaWdodCxcbiAgICAgICAgICAgICAgb2Zmc2V0OiB2aWV3cG9ydEhlaWdodCAtIHBhZ2UuaGVpZ2h0IC0gcGFnZS5vZmZzZXRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhZ2VzLnB1c2gocGFnZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICBwYWdlID0ge1xuICAgICAgICAgICAgcGFyYWdyYXBoczogWyBwYXJhIF0sXG4gICAgICAgICAgICBoZWlnaHQ6IHBIZWlnaHQsXG4gICAgICAgICAgICBvZmZzZXQ6IDBcbiAgICAgICAgICB9XG4gICAgICAgICAgcGFnZXMucHVzaChwYWdlKVxuICAgICAgICB9XG4gICAgICAgIGluZGV4ICsrXG4gICAgICB9XG4gICAgICBzZXRQYWdlcyhwYWdlcylcbiAgICB9XG4gIH0sIFsgY2hhcHRlciwgdmlld3BvcnRIZWlnaHQgXSlcbiAgcmV0dXJuIGgoJ2RpdicsIHsgcmVmLCBzdHlsZTogeyBwb3NpdGlvbjogJ2Fic29sdXRlJywgd2lkdGg6ICcxMDB2dycsIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTIwMHZ3KScgfSB9LFxuICAgIGgoQ2hhcHRlclRpdGxlLCB7IHRpdGxlOiBjaGFwdGVyLnRpdGxlLCB0aXRsZVN0eWxlIH0pLFxuICAgIGNoYXB0ZXIucGFyYWdyYXBocy5tYXAocGFyYWdyYXBoID0+IGgoUGFyYWdyYXBoLCB7IGtleTogcGFyYWdyYXBoLmtleSwgcGFyYWdyYXBoLCBzdHlsZTogcGFyYWdyYXBoU3R5bGUgfSkpXG4gIClcbn1cblxuY29uc3QgYXBwU3R5bGUgPSB7XG4gIHdpZHRoOiAnMTAwdncnLFxuICBoZWlnaHQ6ICcxMDB2aCcsXG4gIGZvbnRTaXplOiAxOCxcbiAgbGluZUhlaWdodDogJzMycHgnLFxufVxuXG5jb25zdCBOb3ZlbFZpZXdlciA9ICh7IGNoYXB0ZXIgfSkgPT4ge1xuICBjb25zdCBbIHBhZ2VIZWlnaHQsIHNldFBhZ2VIZWlnaHQgXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IHsgdGl0bGVTdHlsZSwgcGFyYWdyYXBoU3R5bGUsIG1hcmdpblRvcCwgdmlld3BvcnRIZWlnaHQgfSA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGxpbmVIZWlnaHQgPSBwYXJzZUZsb2F0KGFwcFN0eWxlLmxpbmVIZWlnaHQpXG4gICAgY29uc3Qgdmlld3BvcnRIZWlnaHQgPSBNYXRoLmZsb29yKHBhZ2VIZWlnaHQgLSBsaW5lSGVpZ2h0ICogMiAtIHBhZ2VIZWlnaHQgJSBsaW5lSGVpZ2h0KVxuICAgIGNvbnN0IG1hcmdpblRvcCA9IE1hdGguZmxvb3IoKHBhZ2VIZWlnaHQgLSB2aWV3cG9ydEhlaWdodCkgKiAuNSlcblxuICAgIGNvbnN0IHRpdGxlU3R5bGUgPSB7XG4gICAgICBmb250U2l6ZTogYXBwU3R5bGUuZm9udFNpemUgKiAyLFxuICAgICAgbWFyZ2luOiAwLFxuICAgICAgbGluZUhlaWdodDogbGluZUhlaWdodCAqIDIgKyAncHgnLFxuICAgICAgcGFkZGluZzogYDAgJHthcHBTdHlsZS5mb250U2l6ZX1weCAkeyBsaW5lSGVpZ2h0IH1weGBcbiAgICB9XG4gICAgY29uc3QgcGFyYWdyYXBoU3R5bGUgPSB7XG4gICAgICBwYWRkaW5nOiBgMCAke2FwcFN0eWxlLmZvbnRTaXplfXB4YCxcbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgdGl0bGVTdHlsZSwgcGFyYWdyYXBoU3R5bGUsIG1hcmdpblRvcCwgdmlld3BvcnRIZWlnaHQgfVxuICB9LCBbIHBhZ2VIZWlnaHQgXSlcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRQYWdlSGVpZ2h0KHdpbmRvdy5pbm5lckhlaWdodClcbiAgfSwgWyBwYWdlSGVpZ2h0IF0pXG5cbiAgY29uc3QgWyBwYWdlcywgc2V0UGFnZXMgXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IHZpZXdlciA9IHVzZVJlZigpXG5cbiAgcmV0dXJuIDw+XG4gICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgIGh0bWwsIGJvZHkge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDxkaXYgcmVmPXt2aWV3ZXJ9IHN0eWxlPXthcHBTdHlsZX0+XG4gICAgICA8UHJlcmVuZGVyIHsgLi4ueyBjaGFwdGVyLCB0aXRsZVN0eWxlLCB2aWV3cG9ydEhlaWdodCwgc2V0UGFnZXMsIGFwcFN0eWxlLCBwYXJhZ3JhcGhTdHlsZSB9IH0vPlxuICAgIHtcbiAgICAgIHBhZ2VzID8gaChOb3ZlbCwge1xuICAgICAgICBjaGFwdGVyLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYXBwU3R5bGUsXG4gICAgICAgIHRpdGxlU3R5bGUsXG4gICAgICAgIHBhcmFncmFwaFN0eWxlLFxuICAgICAgICBtYXJnaW5Ub3AsXG4gICAgICAgIHZpZXdwb3J0SGVpZ2h0XG4gICAgICB9KSA6IG51bGxcbiAgICB9PC9kaXY+XG4gIDwvPlxufVxuXG5Ob3ZlbFZpZXdlci5nZXRJbml0aWFsUHJvcHMgPSAoKSA9PiB7XG4gIGNvbnN0IGNoYXB0ZXIgPSB7XG4gICAgdGl0bGU6ICfnrKzkuIDnq6AnLFxuICAgIHBhcmFncmFwaHM6IFt7XCJrZXlcIjpcImYwNmM2YmUwYTJhZDEzM2I1YmUyNzU4ZGMwMzQ5ZWI0XCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDpu4TmmI/nmoTkvZnovonvvIzlgL7mtJLogIzkuIvvvIzkvb/lvpfmlbTluqfkupHlpKnln47vvIzpg73okpnln47kuobkuIDlsYLmt6Hmt6HnmoTph5HpnJ7jgIJcIn0se1wia2V5XCI6XCI5OGRjNWQ5OWNlMDQwYmVkNDRkNGJlZDg0NTM1NzFkOVwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiOWI0N2ZiYWQ0NzAwYjQ1YjlkNGVjODQyYTY3MWE1M2NcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOWkp+WogeatpummhuS9jeS6juS6keWkqeWfjuacgOe5geWNjueahOWcsOaute+8jOS4jei/h+ebuOavlOi+g+S6juW+gOW4uOadpe+8jOatpOaXtueahOatpummhu+8jOaYvuW+l+acieS6m+WGt+WvguOAglwifSx7XCJrZXlcIjpcIjQwZWY1YjYzZTZhMmQ1ZWYyYzliNzJmNGZlYzE1YzM2XCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCJkZTY1NTc3NzZkOTUzMDRhYmE1MzQ2Zjg1OWUxZDdjZlwiLFwiY29udGVudFwiOlwi44CA44CA44CA4oCc5ZSU4oCm4oCm4oCdXCJ9LHtcImtleVwiOlwiM2FiNzZiNjFhNWMxNTQ1OTNjYzFiNWQ4MTcyOTAwYjJcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOWcqOatpummhuinkuiQveS9jee9rueahOS4gOS4quaIv+mXtOWGhe+8jOS4gOS4quW5tOe6puWNgeS4g+WFq+WygeeahOWwkeW5tO+8jOi6uuWcqOacqOW6iuS4iu+8jOWPkeWHuuS4gOmYtei9u+WQn++8jOe0p+mXreeahOecvOearu+8jOe8k+e8k+edgeW8gOOAglwifSx7XCJrZXlcIjpcIjk5ODQ3YjZlMDYwMjkzNjM5YTljNDRiOTA5MmJjNWY1XCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCI1OTFjYmQ1M2QzYTM5MDJmYTFmZjcxNGM2NDA4MDA0N1wiLFwiY29udGVudFwiOlwi44CA44CA44CA55yL552A5Zub5ZGo54af5oKJ55qE546v5aKD77yM5p2o5pit5b6u5b6u5LiA5oSj77yM5LiN6L+H6ZqP5Y2z5LuW5YOP5piv5oOz6LW35LqG5LuA5LmI77yM5b+D5Lit5raM6LW35LiA6IKh5by654OI55qE5oCS54Gr44CCXCJ9LHtcImtleVwiOlwiMTU3YTUxMmIxNmZmZWYwMWY3MjVmNzBjNTJjMmYyM2ZcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcIjRmYTZjMDllMzIxMmM1YjA5M2UzN2JkZDNkNmJkNjI0XCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDigJznjovkupHvvIzkvaDku6zov5nnvqTni5fkuJzopb/vvIzluIjlgoXov4fkuJbov5jmsqHliLDkuIDkuKrmnIjvvIzlsLHpg73lpoLmraTmrLrmiJHjgILigJ1cIn0se1wia2V5XCI6XCI2YzExZDExM2UwMGY3MWUzNjViODQ1NWExMzViNjFlZVwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiMWNkNWI3MmFjNjk3OTQ1Mjk0ZmI0NDg1ZjgwMjM2NDdcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOaDs+i1t+S4jeS5heWJjeeahOmBremBh++8jOadqOaYreaJi+aOjOaPoee0p++8jOWWieWSmeS4reWPkeWHuuS4gOmYteS9juWQvOOAglwifSx7XCJrZXlcIjpcIjRjMjZiOWI5YjJiZGUxN2JhZTRkZWE3NGExMGMwZDQ2XCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCI2ZTdhYzU2ZWEwOGQ3Y2U4YjdjOGY2NDY4ZGFmZDM3NlwiLFwiY29udGVudFwiOlwi44CA44CA44CA5p2o5pit77yM5LuW5piO6Z2i5LiK55qE6Lqr5Lu977yM5piv5aSn5aiB5q2m6aaG6aaG5Li75L2V5pa56Iif55qE5pyA5ZCO5Lqy5Lyg5byf5a2Q44CCXCJ9LHtcImtleVwiOlwiMTgyODI1MWI5MDZmYTNiYTYxMDQyYzdjYjAyNTc2NWRcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcIjkwNWNlZWM5Mzc0NGEzMGZkZDgyYzg4N2ZhZDQzNTFjXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDkvYblj6rmnInku5boh6rlt7HmuIXmpZrvvIzlhbblrp7ku5bmmK/mnaXoh6rlj6blpJbkuIDkuKrkuJbnlYznmoTmma7pgJrkurrvvIzlj6rmmK/lm6DkuLrkuIDmrKHmhI/lpJbvvIzngbXprYLmnaXliLDkuobov5nkuKrkuJbnlYzvvIzlubbkuJTpmYTouqvliLDkuobkuIDkuKrlsJHlubTlraTlhL/nmoTouqvkuIrjgIJcIn0se1wia2V5XCI6XCI2MjkxNDM3ZDcyOTU0ZGNmYWVlN2Y2NGQ1ZTA1YTMwMFwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiOGY0YWQ0ZGRhZGFlOTliOTc3Nzg2MjU3YjI5NWM5YzhcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOS7luS5i+aJgOS7peiDveiiq+S9leaWueiIn+WgguWgguS4gOS9jeatpummhummhuS4u++8jOaUtuS4uuS6suS8oOW8n+WtkO+8jOmCo+WAkuS4jeaYr+WboOS4uuS7lueahOatpumBk+i1hOi0qOmrmOe7ne+8jOebuOWPje+8jOS7lumZhOi6q+eahOi/meWFt+i6q+i6r++8jOi1hOi0qOW+iOS4gOiIrOOAglwifSx7XCJrZXlcIjpcIjQ0YmQxNDAxMTNkZjZjYTIxOTAzOGE0ZWIyZDk3MzZjXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCJkMzM4NzRjZjA4YjI4NjMyZDlkNWMyNjEzZDU5MjZhMlwiLFwiY29udGVudFwiOlwi44CA44CA44CA55yf5q2j6K6p5L2V5pa56Iif55yL6YeN55qE77yM5piv5LuW55qE5ZWG5Lia6IO95Yqb44CCXCJ9LHtcImtleVwiOlwiYWQ0ZWFiNjFiY2JkZWQyMzc2NmVjNmI0ODU4NThjNjlcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcIjU0MzI2OTc3ZmQzY2Q2NmI0NGU5ZjhlYmI0OWNiNjRjXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDlnKjov5nkuKrmrabpgZPmmIznm5vvvIzlj6ropoHkuKrkurrlrp7lipvotrPlpJ/vvIzlsLHlj6/ku6Xlh4zpqb7kuo7kuIDliIfnpLzms5XkuYvkuIrnmoTkuJbnlYzvvIzllYbkuJrnmoTlj5HlsZXvvIznm7jlr7nkuo7pgqPlj6bkuIDkuKrkuJbnlYzvvIzml6DnlpHmmK/ljYHliIbmu57lkI7nmoTjgIJcIn0se1wia2V5XCI6XCI2NzI4Yjc5MWJjZjZlMTEyY2Y2Njc5ZjcwNWFlZmM1M1wiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiY2U0MjA1ZGFiZGI2NjhlMzUxMjk3YmU1ZmQzMzA4OWJcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOadqOaYreWAn+mJtOWJjeS4lueahOS4gOS6m+e7j+WVhuaooeW8j++8jOWGjemFjeWQiOWkp+WogeatpummhueahOWKv+WKm++8jOWPr+edgOWunuS4uuatpummhuWPkeWxleS6huS4jeWwkeS6p+S4mu+8jOi1muS6huS4jeWwkemSseOAglwifSx7XCJrZXlcIjpcIjc4ODJjYTRhZmI0N2UyMmNiYWZmMzE4MjQ3ZjVhNmMzXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCIxMDExOGEzYjE2MzRkYjQ1Nzk2N2Q1MDRhMjliMWI2YlwiLFwiY29udGVudFwiOlwi44CA44CA44CA5p2o5pit55qE6L+Z56eN5omN6IO977yM6K6p5L2V5pa56Iif5Zmo6YeN5LiN5bey77yM55Sa6Iez5ZCO5p2l6L+Y5pyJ5Lyg6Ze777yM5LuW6KaB5bCG6Ieq5bex55qE54us5aWz77yM6K646YWN57uZ5p2o5pit77yM5bm25Zyo6Ieq5bex55m+5bm05LmL5ZCO77yM5bCG5aSn5aiB5q2m6aaG77yM5Lmf57un5om/5Yiw5p2o5pit5omL5LiK44CCXCJ9LHtcImtleVwiOlwiMTNiMzg1MzRmMGQxZDc4ZTJhZTk1YzRjODc2NTllZjVcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcImZlMjgyNWJiZWU2YWRhZjMzM2MzZTkxY2MwOTQyZDE2XCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDov5nmoLfkuIDmnaXvvIzoh6rnhLborqnmnajmmK3vvIzooqvkvZXmlrnoiJ/nmoTlhbbku5blh6DkvY3kurLkvKDlvJ/lrZDvvIzop4bkuLrkuobnnLzkuK3pkonvvIzogonkuK3liLrjgIJcIn0se1wia2V5XCI6XCI5MzhjYmUwYzhlZjJmYTY5YmQ0YzZhOTY3YmVhMjhmN1wiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiZTEwYzRmNGQ5NTZhNTcyMWUyODY5OTI3NzA2OTI5NGVcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOacrOadpe+8jOS9leaWueiIn+imgeaYr+WcqOS4lu+8jOS7lumCo+WHoOS4quS6suS8oOW8n+WtkO+8jOWwveeuoeS4jea7oeadqOaYre+8jOS9huS5n+S4jeaVouWmguS9leihqOeOsOWHuuadpeOAglwifSx7XCJrZXlcIjpcIjM4NWE2MDgzYmE1M2FlMjI0NzFmYWExOWFiYTYzMmZkXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCI0M2Q0ODcyNGYwOGE2M2QxYmNkN2I5MzA3ZmJjMzczOVwiLFwiY29udGVudFwiOlwi44CA44CA44CA5L2G5YGP5YGP5Zyo5LiN5LmF5YmN77yM5L2V5pa56Iif5Zug5Li66YeH5pGY5LiA56eN54G16I2v77yM5rex5YWl5LqR5aSp5bGx6ISJ77yM5LiN5bm45q275Zyo5LqG6YeM6Z2i5by65aSn5Ye25YW95Y+j5LiL44CCXCJ9LHtcImtleVwiOlwiMzA2MTgyNjYxMDVlMzcyYzc2ZTEyYmY5NmY0ZmI3ZWVcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcImUwZDc3ZGIwYWMyMzI3ZGZkMzNkYTMzYmM1ZTcxZWQ0XCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDlpLHljrvkuobov5nkvY3lpKfpnaDlsbHvvIzkvb/lvpfoh6rouqvlrp7lipvlubbkuI3lvLrnmoTmnajmmK3vvIzlnKjlpKflqIHmrabppobnmoTlpITlooPvvIznq4vliLvkuIDokL3ljYPkuIjvvIzlj5fliLDkvZXmlrnoiJ/lh6DkvY3kurLkvKDlvJ/lrZDmiZPljovmjpLmjKTjgIJcIn0se1wia2V5XCI6XCJlNTJjM2JmMzFjZWY2NzA2MjJiZDExMTVmM2I5YTk0OFwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiZTVkZjRjZDE5NWM2ZTA5NjhhYzdiNDE4Mzc0MGIyYTVcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOS7iuWkqe+8jOmCo+S9jeeOi+S6ke+8jOabtOaYr+W4puadpeS6huWFtuS7luWHoOS9jeS6suS8oOW8n+WtkOeahOaEj+aAne+8jOaYjueZveWcsOaMh+WHuuimgeadqOaYreWNt+mTuueblui1sOS6uuOAglwifSx7XCJrZXlcIjpcImU1NDIyYjZhZDFhYzI5MzUwMTI2OTRiMmFiODI1OGE0XCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCIxMTVkMDZhNDcwODQ1NWQ3MzNlZjcxMmIzMzgxZjQ3ZFwiLFwiY29udGVudFwiOlwi44CA44CA44CA5p2o5pit5b2T5pe25oSk5oCS5LmL5LiL77yM5ZKM546L5LqR6aG25LqG5Yeg5Y+l5Zi077yM57uT5p6c6KKr5ZCO6ICF54ug54ug5pq05o+N5LiA6aG/77yM6L+Y6KKr5omT5b6X5piP5LqG6L+H5Y6744CCXCJ9LHtcImtleVwiOlwiMjBiOGI2NmYzMmRhMzFhMjMwZWE2MjQ5NWVhZmQ3ZmJcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcIjYxODhiYTMzYmM0NTdiYzBlYzFhOThmNDJkMjg4NDE0XCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDkuI3ov4fogonouqvkuIrnmoTnl5vmpZrvvIzlr7nkuo7mnajmmK3mnaXor7Tov5jkuI3nrpfku4DkuYjvvIzlj6rmmK/lvZPku5bmg7PotbfpgqPkvY3muIXkuL3lpbPlrZDml7bvvIzlv4PkuK3lsLHkvJrpl6rov4fkuIDpmLXliLrnl5vjgIJcIn0se1wia2V5XCI6XCJlNjM4MmVhYzJiMTU0MjEzNmNjMzUxNjcyNzhlM2VjOVwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiMmY0OGZhZmI1Yzg2YTVlNTQ0NTVlODdmNWIzOGQwMGNcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOmCo+e7nee+juWuueminOS4re+8jOW4puedgOeahOWGt+a3oeWSjOa8oOinhu+8jOiuqeadqOaYreawuOi/nOmDvemavuS7peW/mOaOieOAglwifSx7XCJrZXlcIjpcImMwYTEyMmRlODY3ZjQyNTVlY2QzYmNmOWIwYmQzZWRkXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCIzYjU4ZjkxNjA0Y2E3ZjE4MTQ2OWI0MjRmNzE3YzY1YVwiLFwiY29udGVudFwiOlwi44CA44CA44CA4oCc5aaC5q2k5Lmf5aW977yM5riF5qWa5LqG5L2g55qE5b+D5oSP77yM5oiR5Lmf5Y+v5Lul5LqG5peg54m15oyC55qE56a75byA5LqG44CC4oCd5p2o5pit5oOo54S25LiA56yR77yM5a+55LqO5q2m6aaG5YaN5peg55WZ5oGL44CCXCJ9LHtcImtleVwiOlwiZTBiMTBkNjhmMDhiNjFkYmRhMDE0MTFlOGUyMzFkNDBcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcImQzYWQ4YzQxMDdiMmQ4NzdjZDQxYWVhNzcyMWI5OTkzXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDogIzkuJTnu4/ov4fku4rlpKnnmoTkuovmg4XvvIzku5blt7Lnu4/mt7HliLvlnLDmmI7nmb3kuoboh6rlt7HnjrDlnKjnmoTlpITlooPjgIJcIn0se1wia2V5XCI6XCI5MzA5NzhiZTRlNjA0YTY1YTBhYTIxZWFhMjg1OGY4NFwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiNWE0MjY1NTk2ODdkNjliODdkYzA1MWY3ZjRmMjEzZWRcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOWGjeS4jeemu+W8gOatpummhu+8jOiHquW3seaBkOaAleaXqeaZmuimgeiiq+eOi+S6keetieS6uumYtOatu+OAglwifSx7XCJrZXlcIjpcIjhmYjFkODAxYjUyZWY5Y2ZhODZiYTM5NTdkYjk5Mzc1XCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCJmODk0NmU5ZGFhYWI1Y2Y2ZWIxMWQ0OTg5MGNkYjg0ZlwiLFwiY29udGVudFwiOlwi44CA44CA44CA4oCc5Lmf5LiN55+l6YGT6YKj5bCP5a2Q6YaS5LqG5rKh5pyJ77yf546L5LqR5biI5YWE5Y+v5piv6K+05LqG77yM5LuK5aSp6Z2e6K6p5LuW5rua6JuL5LiN5Y+v44CC4oCdXCJ9LHtcImtleVwiOlwiYzUwZTU5Y2JiODlhYWVlZTViMjhmMTZmOTJmZTc1MWJcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcImIzMDQ5NDE4MThhNzFlYjdiZTY1N2VkNTZjNDU2MWRiXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDigJzlmL/lmL/vvIzmsqHphpLlsLHmtYfnm4blh4nmsLTkuIvljrvvvIzkuI3mgJXku5bkuI3phpLjgILigJ1cIn0se1wia2V5XCI6XCI5NmFjNTlhNjhjYzAzZmFjN2M0NDJmNzVkNjdkNzBjMFwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiMTAyNzlkNGQ1NWU1Y2FkNzRiMDkxNDFkZjBiZWZjMjBcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOWwseWcqOi/meaXtu+8jOaIv+WkluS8oOadpeS4gOmYteWsieeskeWjsO+8jOe0p+i3n+edgO+8jOKAnOegsOKAneeahOS4gOWjsO+8jOaIv+mXqOiiq+i4ueS6huW8gOadpeOAglwifSx7XCJrZXlcIjpcIjg2MDY5OTM2NGVhNmNmOTAzYmQ0NzJiOWRkMTUzOTYxXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCIxZTE2NDlkMmVlYjU1YmU1NzY0MDEzNmQyMmNlM2E4OVwiLFwiY29udGVudFwiOlwi44CA44CA44CA5Lik5Liq6Lqr56m/57uD5Yqf5pyN55qE5bm06L2755S35a2Q77yM55u457un6LWw6L+b5bGL5YaF44CCXCJ9LHtcImtleVwiOlwiODcxZjk0MzNlM2Q1Zjk0YTc3Mjg5NzA5OTc2M2U1ZDhcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcIjk3ZmU5MzM2YWNiZGYwMzlkZDE2MjQyZjZhZmVlNTRmXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDnnIvliLDlnZDlnKjluorkuIrnmoTmnajmmK3vvIzlvZPlhYjpgqPnlLflrZDovbvnrJHkuIDlo7DpgZPvvJrigJzljp/mnaXmiJHku6znmoTigJjmnajluIjlhYTigJnlt7Lnu4/phpLkuobvvIzpgqPotbbntKfnmoTlkKfjgILnjovkupHluIjlhYTor7Tku4rml6XigJjmnajluIjlhYTigJnkvaDopoHnprvlvIDmrabppobkuobvvIzov5jnibnmhI/lj6zpm4bkuobluIjlhYTlvJ/ku6zvvIzpg73lnKjliY3pmaLvvIznrYnnnYDopoHkuLrkvaDpgIHooYzlkaLjgILigJ1cIn0se1wia2V5XCI6XCI0YTI4OWFmZjI5ZTIxYTEzMmUzMDg5YjBlYWM3MDlkN1wiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiZDNjMWMwMjBkMTVkZTEwZWQwN2E3ZmYzYmZiYTU4ZmZcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOKAnOS4jemUme+8jOi1tue0p+eahOWQp++8jOS4jeimgeiuqeS4gOS8l+W4iOWFhOW8n+etieS5heS6huOAguadqOW4iOWFhOS9oOimgeaYr+ihjOWKqOS4jeS+v++8jOaIkeS7rOWPr+S7peW4ruS4gOW4ruS9oOOAguKAneWPpuS4gOS9jeeUt+WtkO+8jOiEuOS4iumYtOeskei/nui/nuOAglwifSx7XCJrZXlcIjpcImQ0MDhhOWNiOTEyNGQ5ZWI0YWRmOGVlODhlZWMyOWZiXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCIzODJlZDI3ZmMwZDM4OTk3MGVmY2JhMGE3MTE1YmY3Y1wiLFwiY29udGVudFwiOlwi44CA44CA44CA5p2o5pit55y45YWJ5Ya35Ya977yM5rKh5pyJ55CG5Lya6L+Z5Lik5Liq55S35a2Q77yM5LiL5bqK5ZCO77yM5b6E55u056a75byA5bGL5a2Q44CCXCJ9LHtcImtleVwiOlwiMTczZTc5MThiODZiYjg1ZjY5OGY2Mjk4NDdmZWNkNTJcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcIjZhOGVlODJlMzA1OGY0MGE2ZmRkNDFjZmYxZDQ5M2I0XCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDigJzlk7zvvIHmi73ku4DkuYjlkYDvvIzov5jku6XkuLrmmK/ku6XliY3ppobkuLvlnKjnmoTml7blgJnlkJfvvIHigJ3pgqPlvZPlhYjov5vmnaXnmoTnlLflrZDvvIzop4HliLDmnajmmK3ml6Dop4boh6rlt7HvvIzkuI3nlLHlj5Hlh7rlhrflk7zjgIJcIn0se1wia2V5XCI6XCIzOGRjMTM1ZDY5MzljYjQ1NWRkZWUwNWZmZDUzNjYxMlwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiMDZkMjIzMjljNjI5ZjEyZTMyMGU4NzcwMDVmYTBjMThcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOmaj+WNs++8jOS6jOS6uuS5n+i3n+edgOadqOaYreWHuuWOu+OAglwifSx7XCJrZXlcIjpcImEzMWFkZDRjZDM1Yzg1N2E1MGU4NzAzMmVlYTU5MDViXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCI0ZGRlYjg0YmNlMDNmMmJlNTU4ZDNhZjkxOWY1NzEzZVwiLFwiY29udGVudFwiOlwi44CA44CA44CA5q2k5Yi75Zyo5aSn5aiB5q2m6aaG55qE5YmN6Zmi77yM5LiA5aSn576k55qE5q2m6aaG5byf5a2Q77yM6YO95YGc5LiL5LqG5q+P5pel6buE5piP5Y2B5YiG55qE5L+u54K85Yqf6K++77yM55u45LqS5Zyo5L2O5aOw6K6u6K66552A5LuA5LmI44CCXCJ9LHtcImtleVwiOlwiNmMwMThiZTQ4ZTJmNmJkNWYwNDM2ZDczNGZiMTk5MmJcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcImFhZWI1M2RkYmQ2YTcyZTAxMWQyZDA0NjRiNzI2M2Y5XCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDigJzll6/vvIHmnajmmK3lh7rmnaXkuobjgILigJ1cIn0se1wia2V5XCI6XCI4ZGNiMzg4MzY0MWMyZjA3OGNlY2MzZWJhYTQ0MzFhMFwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiNTgyODgxYzViNzUxODQ2OTM2NGM3N2QxZWU2MTkwMzNcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOW/veeEtu+8jOWFtuS4reS4gOS4quatpummhueahOWtpuW+ku+8jOWPkeWHuuS4gOmYteS9juWRvO+8jOS9v+W+l+mZhOi/keeahOS6uu+8jOmDveacneedgOafkOS4gOS4quaWueWQkeeci+WOu+OAglwifSx7XCJrZXlcIjpcImVmZDUzM2M2Y2NlNzI4OGM4OWIwYTEzMDljZGNiZjdjXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCIwM2Q3ZmYyNWYzZDRkNzE3ZWJiOTE1ODJhYzg3MzVkM1wiLFwiY29udGVudFwiOlwi44CA44CA44CA5LiA6Lqr55m96KGj55qE5p2o5pit77yM6Z2i6Imy6L+Y5pyJ5Yeg5YiG6IuN55m977yM6K6p5Lq65LiA55yL5LmL5LiL77yM5pu06KeJ5b6X5YOP5piv5LiA5Liq5paH5byx5Lmm55Sf44CCXCJ9LHtcImtleVwiOlwiYWIwY2UwZWFlMjcwNWM0MDU2MDlmYmM2MjVjM2MzODJcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcIjllMTEzOTRiMDkwZTFjM2ZmY2VkMDZmOTNkYjUwMjQ5XCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDlj6rmmK/lnKjnnIvlkJHmnajmmK3kuYvml7bvvIzpgqPnvqTkurrkuK3vvIzkuI3orrrmmK/mrabppobnmoTlrablvpLvvIzov5jmmK/mi7PluIjvvIznm67lhYnkuK3pg73pmpDpmpDluKbnnYDkuIDkuJ3phJnlpLflkozkuI3lsZHjgIJcIn1dXG4gIH1cbiAgcmV0dXJuIHsgY2hhcHRlciB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5vdmVsVmlld2VyIl19 */\n/*@ sourceURL=C:\\Users\\ajc\\Staff\\tap2.top\\pages\\novel.js */"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    ref: viewer,
    style: appStyle,
    className: "jsx-3150692238",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Prerender, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    chapter: chapter,
    titleStyle: titleStyle,
    viewportHeight: viewportHeight,
    setPages: setPages,
    appStyle: appStyle,
    paragraphStyle: paragraphStyle
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  })), pages ? Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Novel, {
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
//# sourceMappingURL=novel.js.80026156414e0a6f4dc8.hot-update.js.map