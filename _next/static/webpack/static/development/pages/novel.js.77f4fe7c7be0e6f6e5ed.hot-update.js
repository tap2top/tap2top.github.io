webpackHotUpdate("static\\development\\pages\\novel.js",{

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
      prevRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(),
      nextRef = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])(),
      root = Object(react__WEBPACK_IMPORTED_MODULE_5__["useRef"])();
  var animateStatus = Object(react__WEBPACK_IMPORTED_MODULE_5__["useMemo"])(function () {
    return {
      playing: false
    };
  }, []);
  var prev = pages[index - 1],
      next = pages[index + 1],
      page = pages[index];
  var onClick = Object(react__WEBPACK_IMPORTED_MODULE_5__["useCallback"])(function (_ref4) {
    var clientX = _ref4.clientX,
        clientY = _ref4.clientY;
    if (animateStatus.playing || clientY > 100) return;
    var newIndex = Math.max(0, Math.min(pages.length - 1, index + (clientX > 187 ? 1 : -1)));

    if (index > newIndex) {
      animateStatus.playing = true;
      var am = prevRef.current.animate({
        transform: ['skewY(-90deg) scaleX(0)', 'skewY(0deg) scaleX(1)']
      }, {
        duration: 500,
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
        duration: 500,
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
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var Hammer = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");

    var hammer = new Hammer(root.current);
    var pageWidth = window.innerWidth;
    var c = 0,
        arrow = 0,
        pageIndex = index;

    var panstart = function panstart(e) {
      hammer.on('panmove', panmove);
      hammer.on('panend', panend);
    };

    var panmove = function panmove(_ref5) {
      var deltaX = _ref5.deltaX;
      c = deltaX / pageWidth;

      if (arrow === 0) {
        arrow = c > 0 ? 1 : -1;
      }

      switch (arrow) {
        case -1:
          c = Math.max(-1, Math.min(0, c));

          if (nextRef.current) {
            ref.current.style.transform = "skewY(".concat(90 * c, "deg) scaleX(").concat(1 + c, ")");
          }

          break;

        case 1:
          c = Math.min(1, Math.max(0, c));

          if (prevRef.current) {
            prevRef.current.style.transform = "skewY(".concat(-90 * (1 - c), "deg) scaleX(").concat(c, ")");
          }

          break;
      }
    };

    var panend = function panend(e) {
      var newIndex = Math.max(0, Math.min(pages.length - 1, pageIndex - arrow));

      switch (arrow) {
        case -1:
          if (nextRef.current) {
            ref.current.animate({
              transform: ["skewY(".concat(90 * c, "deg) scaleX(").concat(1 + c, ")"), 'skewY(-90deg) scaleX(0)']
            }, {
              duration: 500 * (1 + c),
              easing: 'ease-out'
            }).onfinish = function () {
              pageIndex = newIndex;
              setIndex(newIndex);
            };
          }

          break;

        case 1:
          if (prevRef.current) {
            prevRef.current.animate({
              transform: ["skewY(".concat(-90 * (1 - c), "deg) scaleX(").concat(c, ")"), 'skewY(-90deg) scaleX(0)']
            }, {
              duration: 500 * c,
              easing: 'ease-out'
            }).onfinish = function () {
              pageIndex = newIndex;
              setIndex(newIndex);
            };
          }

          break;
      }

      arrow = 0;
      hammer.off('panmove', panmove);
      hammer.off('panend', panend);
    };

    hammer.on('panstart', panstart);
  }, [pages]);
  var pageProps = {
    chapter: chapter,
    marginTop: marginTop,
    viewportHeight: viewportHeight,
    appStyle: appStyle,
    titleStyle: titleStyle,
    paragraphStyle: paragraphStyle
  };
  return Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])('div', {
    ref: root,
    onClick: onClick,
    style: {
      position: 'relative',
      width: '100vw',
      height: '100vh',
      overflow: 'hidden'
    }
  }, Object(react__WEBPACK_IMPORTED_MODULE_5__["createElement"])(Page, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({
    ref: nextRef,
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

var Page = Object(react__WEBPACK_IMPORTED_MODULE_5__["forwardRef"])(function (_ref6, ref) {
  var chapter = _ref6.chapter,
      transform = _ref6.transform,
      page = _ref6.page,
      isPrev = _ref6.isPrev,
      isNext = _ref6.isNext,
      marginTop = _ref6.marginTop,
      viewportHeight = _ref6.viewportHeight,
      appStyle = _ref6.appStyle,
      titleStyle = _ref6.titleStyle,
      paragraphStyle = _ref6.paragraphStyle;
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
      lineNumber: 173
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    style: {
      height: viewportHeight,
      overflow: 'hidden'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    style: {
      transform: "translate(0, ".concat(page.offset, "px)")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, page.paragraphs.map(function (p) {
    return p.type === 'title' ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(ChapterTitle, {
      key: p.data.key,
      title: chapter.title,
      titleStyle: titleStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Paragraph, {
      key: p.data.key,
      paragraph: p.data,
      style: paragraphStyle,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    });
  }))));
});

var Prerender = function Prerender(_ref7) {
  var chapter = _ref7.chapter,
      appStyle = _ref7.appStyle,
      titleStyle = _ref7.titleStyle,
      paragraphStyle = _ref7.paragraphStyle,
      viewportHeight = _ref7.viewportHeight,
      setPages = _ref7.setPages;
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
              offset: page.height + page.offset - viewportHeight - pHeight
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

var NovelViewer = function NovelViewer(_ref8) {
  var chapter = _ref8.chapter;

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
  }, "html,body{margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcYWpjXFxTdGFmZlxcdGFwMi50b3BcXHBhZ2VzXFxub3ZlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpUnVCLEFBR2tCLFNBQ0MsVUFDWiIsImZpbGUiOiJDOlxcVXNlcnNcXGFqY1xcU3RhZmZcXHRhcDIudG9wXFxwYWdlc1xcbm92ZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlUmVmLCB1c2VNZW1vLFxuICBmb3J3YXJkUmVmLFxuICBjcmVhdGVFbGVtZW50IGFzIGhcbn0gZnJvbSAncmVhY3QnXG5cblxuY29uc3QgQ2hhcHRlclRpdGxlID0gKHsgdGl0bGUsIHRpdGxlU3R5bGUgfSkgPT4ge1xuICByZXR1cm4gaCgnaDQnLCB7XG4gICAgc3R5bGU6IHRpdGxlU3R5bGVcbiAgfSwgdGl0bGUpXG59XG5cblxuY29uc3QgUGFyYWdyYXBoID0gKHsgcGFyYWdyYXBoLCBzdHlsZSB9KSA9PiB7XG4gIHJldHVybiBoKCdkaXYnLCB7IHN0eWxlIH0sIHBhcmFncmFwaC5jb250ZW50KVxufVxuXG5jb25zdCBOb3ZlbCA9ICh7IGNoYXB0ZXIsIHBhZ2VzLCBtYXJnaW5Ub3AsIHZpZXdwb3J0SGVpZ2h0LCBhcHBTdHlsZSwgdGl0bGVTdHlsZSwgcGFyYWdyYXBoU3R5bGUgfSkgPT4ge1xuICBjb25zdCBbIGluZGV4LCBzZXRJbmRleCBdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgcmVmID0gdXNlUmVmKCksIHByZXZSZWYgPSB1c2VSZWYoKSwgbmV4dFJlZiA9IHVzZVJlZigpLCByb290ID0gdXNlUmVmKClcbiAgY29uc3QgYW5pbWF0ZVN0YXR1cyA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIHJldHVybiB7IHBsYXlpbmc6IGZhbHNlIH1cbiAgfSwgW10pXG5cbiAgY29uc3RcbiAgICBwcmV2ID0gcGFnZXNbaW5kZXggLSAxXSxcbiAgICBuZXh0ID0gcGFnZXNbaW5kZXggKyAxXSxcbiAgICBwYWdlID0gcGFnZXNbaW5kZXhdXG5cbiAgY29uc3Qgb25DbGljayA9IHVzZUNhbGxiYWNrKCh7IGNsaWVudFgsIGNsaWVudFkgfSkgPT4ge1xuICAgIGlmKGFuaW1hdGVTdGF0dXMucGxheWluZyB8fCBjbGllbnRZID4gMTAwKSByZXR1cm5cbiAgICBjb25zdCBuZXdJbmRleCA9IE1hdGgubWF4KDAsXG4gICAgICBNYXRoLm1pbihwYWdlcy5sZW5ndGggLSAxLFxuICAgICAgICBpbmRleCArIChjbGllbnRYID4gMTg3ID8gMSA6IC0xKVxuICAgICAgKVxuICAgIClcbiAgICBpZihpbmRleCA+IG5ld0luZGV4KXtcbiAgICAgIGFuaW1hdGVTdGF0dXMucGxheWluZyA9IHRydWVcbiAgICAgIGNvbnN0IGFtID0gcHJldlJlZi5jdXJyZW50LmFuaW1hdGUoXG4gICAgICAgIHsgdHJhbnNmb3JtOiBbICdza2V3WSgtOTBkZWcpIHNjYWxlWCgwKScsICdza2V3WSgwZGVnKSBzY2FsZVgoMSknIF0gfVxuICAgICAgLCB7IGR1cmF0aW9uOiA1MDAsXG4gICAgICAgIGVhc2luZzogJ2Vhc2Utb3V0J1xuICAgICAgfSlcbiAgICAgIFxuICAgICAgYW0ub25maW5pc2ggPSBlID0+IHtcbiAgICAgICAgYW5pbWF0ZVN0YXR1cy5wbGF5aW5nID0gZmFsc2VcbiAgICAgICAgc2V0SW5kZXgobmV3SW5kZXgpXG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYoaW5kZXggPCBuZXdJbmRleCl7XG4gICAgICBhbmltYXRlU3RhdHVzLnBsYXlpbmcgPSB0cnVlXG4gICAgICBjb25zdCBhbSA9IHJlZi5jdXJyZW50LmFuaW1hdGUoXG4gICAgICAgIHsgdHJhbnNmb3JtOiBbICdza2V3WSgwZGVnKSBzY2FsZVgoMSknLCAnc2tld1koLTkwZGVnKSBzY2FsZVgoMCknIF0gfVxuICAgICAgLCB7IGR1cmF0aW9uOiA1MDAsXG4gICAgICAgIGVhc2luZzogJ2Vhc2UtaW4nXG4gICAgICB9KVxuICAgICAgXG4gICAgICBhbS5vbmZpbmlzaCA9IGUgPT4ge1xuICAgICAgICBhbmltYXRlU3RhdHVzLnBsYXlpbmcgPSBmYWxzZVxuICAgICAgICBzZXRJbmRleChuZXdJbmRleClcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZXtcbiAgICAgIGFsZXJ0KCdmaXJzdCBvciBsYXN0JylcbiAgICB9XG4gIH0sIFsgaW5kZXggXSlcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgSGFtbWVyID0gcmVxdWlyZSgnaGFtbWVyanMnKVxuICAgIGNvbnN0IGhhbW1lciA9IG5ldyBIYW1tZXIocm9vdC5jdXJyZW50KVxuICAgIGNvbnN0IHBhZ2VXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgbGV0IGMgPSAwLCBhcnJvdyA9IDAsIHBhZ2VJbmRleCA9IGluZGV4XG4gICAgY29uc3QgcGFuc3RhcnQgPSBlID0+IHtcbiAgICAgIGhhbW1lci5vbigncGFubW92ZScsIHBhbm1vdmUpXG4gICAgICBoYW1tZXIub24oJ3BhbmVuZCcsIHBhbmVuZClcbiAgICB9XG4gICAgY29uc3QgcGFubW92ZSA9ICh7IGRlbHRhWCB9KSA9PiB7XG4gICAgICBjID0gZGVsdGFYIC8gcGFnZVdpZHRoXG4gICAgICBpZihhcnJvdyA9PT0gMCl7XG4gICAgICAgIGFycm93ID0gYyA+IDAgPyAxIDogLTFcbiAgICAgIH1cbiAgICAgIHN3aXRjaChhcnJvdyl7XG4gICAgICAgIGNhc2UgLTE6XG4gICAgICAgICAgYyA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigwLCBjKSlcbiAgICAgICAgICBpZihuZXh0UmVmLmN1cnJlbnQpe1xuICAgICAgICAgICAgcmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHNrZXdZKCR7IDkwICogYyB9ZGVnKSBzY2FsZVgoJHsxICsgY30pYFxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgYyA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGMpKVxuICAgICAgICAgIGlmKHByZXZSZWYuY3VycmVudCl7XG4gICAgICAgICAgICBwcmV2UmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHNrZXdZKCR7IC0gOTAgKiAoMSAtIGMpIH1kZWcpIHNjYWxlWCgke2N9KWBcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFuZW5kID0gZSA9PiB7XG4gICAgICBsZXQgbmV3SW5kZXggPSBNYXRoLm1heCgwLFxuICAgICAgICBNYXRoLm1pbihwYWdlcy5sZW5ndGggLSAxLFxuICAgICAgICAgIHBhZ2VJbmRleCAtIGFycm93XG4gICAgICAgIClcbiAgICAgIClcbiAgICAgIHN3aXRjaChhcnJvdyl7XG4gICAgICAgIGNhc2UgLTE6XG4gICAgICAgICAgaWYobmV4dFJlZi5jdXJyZW50KXtcbiAgICAgICAgICAgIHJlZi5jdXJyZW50LmFuaW1hdGUoXG4gICAgICAgICAgICAgIHsgdHJhbnNmb3JtOiBbIGBza2V3WSgkeyA5MCAqIGMgfWRlZykgc2NhbGVYKCR7MSArIGN9KWAsICdza2V3WSgtOTBkZWcpIHNjYWxlWCgwKScgXSB9LFxuICAgICAgICAgICAgICB7IGR1cmF0aW9uOiA1MDAgKiAoMSArIGMpLCBlYXNpbmc6ICdlYXNlLW91dCcgfVxuICAgICAgICAgICAgKS5vbmZpbmlzaCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgcGFnZUluZGV4ID0gbmV3SW5kZXhcbiAgICAgICAgICAgICAgc2V0SW5kZXgobmV3SW5kZXgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBpZihwcmV2UmVmLmN1cnJlbnQpe1xuICAgICAgICAgICAgcHJldlJlZi5jdXJyZW50LmFuaW1hdGUoXG4gICAgICAgICAgICAgIHsgdHJhbnNmb3JtOiBbIGBza2V3WSgkeyAtIDkwICogKDEgLSBjKSB9ZGVnKSBzY2FsZVgoJHtjfSlgLCAnc2tld1koLTkwZGVnKSBzY2FsZVgoMCknIF0gfSxcbiAgICAgICAgICAgICAgeyBkdXJhdGlvbjogNTAwICogYywgZWFzaW5nOiAnZWFzZS1vdXQnIH1cbiAgICAgICAgICAgICkub25maW5pc2ggPSAoKSA9PiB7XG4gICAgICAgICAgICAgIHBhZ2VJbmRleCA9IG5ld0luZGV4XG4gICAgICAgICAgICAgIHNldEluZGV4KG5ld0luZGV4KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgYXJyb3cgPSAwXG4gICAgICBoYW1tZXIub2ZmKCdwYW5tb3ZlJywgcGFubW92ZSlcbiAgICAgIGhhbW1lci5vZmYoJ3BhbmVuZCcsIHBhbmVuZClcbiAgICB9XG4gICAgaGFtbWVyLm9uKCdwYW5zdGFydCcsIHBhbnN0YXJ0KVxuICB9LCBbIHBhZ2VzIF0pXG4gIGNvbnN0IHBhZ2VQcm9wcyA9IHtcbiAgICBjaGFwdGVyLFxuICAgIG1hcmdpblRvcCwgdmlld3BvcnRIZWlnaHQsIGFwcFN0eWxlLCB0aXRsZVN0eWxlLCBwYXJhZ3JhcGhTdHlsZVxuICB9XG4gIHJldHVybiBoKCdkaXYnLCB7XG4gICAgcmVmOiByb290LFxuICAgIG9uQ2xpY2ssXG4gICAgc3R5bGU6IHtcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgd2lkdGg6ICcxMDB2dycsXG4gICAgICBoZWlnaHQ6ICcxMDB2aCcsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICB9XG4gIH0sXG4gICAgaChQYWdlLCB7IHJlZjogbmV4dFJlZiwgdHJhbnNmb3JtOiAnJywgcGFnZTogbmV4dCwgLi4ucGFnZVByb3BzIH0pLFxuICAgIGgoUGFnZSwgeyByZWYsIHRyYW5zZm9ybTogYHNjYWxlWCgxKSBza2V3WSgwZGVnKWAsIHBhZ2UsIC4uLnBhZ2VQcm9wcyB9KSxcbiAgICBoKFBhZ2UsIHsgcmVmOiBwcmV2UmVmLCB0cmFuc2Zvcm06IGBzY2FsZVgoMCkgc2tld1koLTkwZGVnKWAsIHBhZ2U6IHByZXYsIC4uLnBhZ2VQcm9wcyB9KSxcbiAgICApXG59XG5cbmNvbnN0IFBhZ2UgPSBmb3J3YXJkUmVmKCh7IGNoYXB0ZXIsIHRyYW5zZm9ybSwgcGFnZSwgaXNQcmV2LCBpc05leHQsIG1hcmdpblRvcCwgdmlld3BvcnRIZWlnaHQsIGFwcFN0eWxlLCB0aXRsZVN0eWxlLCBwYXJhZ3JhcGhTdHlsZSB9LCByZWYpID0+IHtcbiAgaWYoIXBhZ2UpIHJldHVybiBudWxsXG5cbiAgY29uc3Qgc3R5bGUgPSB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgd2lkdGg6ICcxMDB2dycsXG4gICAgaGVpZ2h0OiAnMTAwdmgnLFxuICAgIHBhZGRpbmdUb3A6IG1hcmdpblRvcCxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgd2lsbENoYW5nZTogJ3RyYW5zZm9ybScsXG4gICAgYmFja2dyb3VuZDogJyNlYmUxYzYnLFxuICAgIHRyYW5zZm9ybU9yaWdpbjogJ2xlZnQgdG9wJyxcbiAgICBib3JkZXI6ICdzb2xpZCAxcHggIzAwMCcsXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgdHJhbnNmb3JtXG4gIH1cbiAgcmV0dXJuIDxkaXYgcmVmPXtyZWZ9IHN0eWxlPXtzdHlsZX0+XG4gICAgPGRpdiBzdHlsZT17IHsgaGVpZ2h0OiB2aWV3cG9ydEhlaWdodCwgb3ZlcmZsb3c6ICdoaWRkZW4nIH0gfT5cbiAgICAgIDxkaXYgc3R5bGU9eyB7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgwLCAkeyBwYWdlLm9mZnNldCB9cHgpYCB9IH0+XG4gICAgICAgIHtcbiAgICAgICAgICBwYWdlLnBhcmFncmFwaHMubWFwKHAgPT4gcC50eXBlID09PSAndGl0bGUnXG4gICAgICAgICAgICA/IDxDaGFwdGVyVGl0bGUga2V5PXtwLmRhdGEua2V5fSB0aXRsZT17Y2hhcHRlci50aXRsZX0gdGl0bGVTdHlsZT17dGl0bGVTdHlsZX0vPlxuICAgICAgICAgICAgOiA8UGFyYWdyYXBoIGtleT17cC5kYXRhLmtleX0gcGFyYWdyYXBoPXtwLmRhdGF9IHN0eWxlPXtwYXJhZ3JhcGhTdHlsZX0vPlxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxufSlcblxuY29uc3QgUHJlcmVuZGVyID0gKHsgY2hhcHRlciwgYXBwU3R5bGUsIHRpdGxlU3R5bGUsIHBhcmFncmFwaFN0eWxlLCB2aWV3cG9ydEhlaWdodCwgc2V0UGFnZXMgfSkgPT4ge1xuICBjb25zdCByZWYgPSB1c2VSZWYoKVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmKHZpZXdwb3J0SGVpZ2h0KXtcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSByZWYuY3VycmVudCwgdGl0bGVIZWlnaHQgPSB3cmFwcGVyLmZpcnN0Q2hpbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0XG4gICAgICBjb25zdCBwYWdlcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgIHBhcmFncmFwaHM6IFsgeyB0eXBlOiAndGl0bGUnLCBkYXRhOiB7IGtleTogJ3RpdGxlXycgKyBNYXRoLnJhbmRvbSgpLCBjb250ZW50OiBjaGFwdGVyLnRpdGxlIH0gfSBdLFxuICAgICAgICAgIGhlaWdodDogdGl0bGVIZWlnaHQsXG4gICAgICAgICAgb2Zmc2V0OiAwXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSB3cmFwcGVyLmNoaWxkcmVuXG4gICAgICBsZXQgaW5kZXggPSAxLCBwYWdlID0gcGFnZXNbMF1cbiAgICAgIHdoaWxlKGluZGV4IDwgbGVuZ3RoKXtcbiAgICAgICAgY29uc3QgcEhlaWdodCA9IHdyYXBwZXIuY2hpbGRyZW5baW5kZXhdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodFxuICAgICAgICBjb25zdCBwYXJhID0ge1xuICAgICAgICAgIHR5cGU6ICdwYXJhZ3JhcGgnLFxuICAgICAgICAgIGRhdGE6IGNoYXB0ZXIucGFyYWdyYXBoc1tpbmRleCAtIDFdXG4gICAgICAgIH1cbiAgICAgICAgaWYocGFnZS5oZWlnaHQgKyBwYWdlLm9mZnNldCA8IHZpZXdwb3J0SGVpZ2h0KXtcbiAgICAgICAgICBwYWdlLmhlaWdodCArPSBwSGVpZ2h0XG4gICAgICAgICAgcGFnZS5wYXJhZ3JhcGhzLnB1c2gocGFyYSlcbiAgICAgICAgICBcbiAgICAgICAgICBpZihwYWdlLmhlaWdodCArIHBhZ2Uub2Zmc2V0ID4gdmlld3BvcnRIZWlnaHQpe1xuICAgICAgICAgICAgcGFnZSA9IHtcbiAgICAgICAgICAgICAgcGFyYWdyYXBoczogWyBwYXJhIF0sXG4gICAgICAgICAgICAgIGhlaWdodDogcEhlaWdodCxcbiAgICAgICAgICAgICAgb2Zmc2V0OiBwYWdlLmhlaWdodCArIHBhZ2Uub2Zmc2V0IC0gdmlld3BvcnRIZWlnaHQgLSBwSGVpZ2h0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYWdlcy5wdXNoKHBhZ2UpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgcGFnZSA9IHtcbiAgICAgICAgICAgIHBhcmFncmFwaHM6IFsgcGFyYSBdLFxuICAgICAgICAgICAgaGVpZ2h0OiBwSGVpZ2h0LFxuICAgICAgICAgICAgb2Zmc2V0OiAwXG4gICAgICAgICAgfVxuICAgICAgICAgIHBhZ2VzLnB1c2gocGFnZSlcbiAgICAgICAgfVxuICAgICAgICBpbmRleCArK1xuICAgICAgfVxuICAgICAgc2V0UGFnZXMocGFnZXMpXG4gICAgfVxuICB9LCBbIGNoYXB0ZXIsIHZpZXdwb3J0SGVpZ2h0IF0pXG4gIHJldHVybiBoKCdkaXYnLCB7IHJlZiwgc3R5bGU6IHsgcG9zaXRpb246ICdhYnNvbHV0ZScsIHdpZHRoOiAnMTAwdncnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC0yMDB2dyknIH0gfSxcbiAgICBoKENoYXB0ZXJUaXRsZSwgeyB0aXRsZTogY2hhcHRlci50aXRsZSwgdGl0bGVTdHlsZSB9KSxcbiAgICBjaGFwdGVyLnBhcmFncmFwaHMubWFwKHBhcmFncmFwaCA9PiBoKFBhcmFncmFwaCwgeyBrZXk6IHBhcmFncmFwaC5rZXksIHBhcmFncmFwaCwgc3R5bGU6IHBhcmFncmFwaFN0eWxlIH0pKVxuICApXG59XG5cbmNvbnN0IGFwcFN0eWxlID0ge1xuICB3aWR0aDogJzEwMHZ3JyxcbiAgaGVpZ2h0OiAnMTAwdmgnLFxuICBmb250U2l6ZTogMTgsXG4gIGxpbmVIZWlnaHQ6ICczMnB4Jyxcbn1cblxuY29uc3QgTm92ZWxWaWV3ZXIgPSAoeyBjaGFwdGVyIH0pID0+IHtcbiAgY29uc3QgWyBwYWdlSGVpZ2h0LCBzZXRQYWdlSGVpZ2h0IF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCB7IHRpdGxlU3R5bGUsIHBhcmFncmFwaFN0eWxlLCBtYXJnaW5Ub3AsIHZpZXdwb3J0SGVpZ2h0IH0gPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBsaW5lSGVpZ2h0ID0gcGFyc2VGbG9hdChhcHBTdHlsZS5saW5lSGVpZ2h0KVxuICAgIGNvbnN0IHZpZXdwb3J0SGVpZ2h0ID0gTWF0aC5mbG9vcihwYWdlSGVpZ2h0IC0gbGluZUhlaWdodCAqIDIgLSBwYWdlSGVpZ2h0ICUgbGluZUhlaWdodClcbiAgICBjb25zdCBtYXJnaW5Ub3AgPSBNYXRoLmZsb29yKChwYWdlSGVpZ2h0IC0gdmlld3BvcnRIZWlnaHQpICogLjUpXG5cbiAgICBjb25zdCB0aXRsZVN0eWxlID0ge1xuICAgICAgZm9udFNpemU6IGFwcFN0eWxlLmZvbnRTaXplICogMixcbiAgICAgIG1hcmdpbjogMCxcbiAgICAgIGxpbmVIZWlnaHQ6IGxpbmVIZWlnaHQgKiAyICsgJ3B4JyxcbiAgICAgIHBhZGRpbmc6IGAwICR7YXBwU3R5bGUuZm9udFNpemV9cHggJHsgbGluZUhlaWdodCB9cHhgXG4gICAgfVxuICAgIGNvbnN0IHBhcmFncmFwaFN0eWxlID0ge1xuICAgICAgcGFkZGluZzogYDAgJHthcHBTdHlsZS5mb250U2l6ZX1weGAsXG4gICAgICBib3hTaXppbmc6ICdib3JkZXItYm94J1xuICAgIH1cblxuICAgIHJldHVybiB7IHRpdGxlU3R5bGUsIHBhcmFncmFwaFN0eWxlLCBtYXJnaW5Ub3AsIHZpZXdwb3J0SGVpZ2h0IH1cbiAgfSwgWyBwYWdlSGVpZ2h0IF0pXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UGFnZUhlaWdodCh3aW5kb3cuaW5uZXJIZWlnaHQpXG4gIH0sIFsgcGFnZUhlaWdodCBdKVxuXG4gIGNvbnN0IFsgcGFnZXMsIHNldFBhZ2VzIF0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCB2aWV3ZXIgPSB1c2VSZWYoKVxuXG4gIHJldHVybiA8PlxuICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICBodG1sLCBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8ZGl2IHJlZj17dmlld2VyfSBzdHlsZT17YXBwU3R5bGV9PlxuICAgICAgPFByZXJlbmRlciB7IC4uLnsgY2hhcHRlciwgdGl0bGVTdHlsZSwgdmlld3BvcnRIZWlnaHQsIHNldFBhZ2VzLCBhcHBTdHlsZSwgcGFyYWdyYXBoU3R5bGUgfSB9Lz5cbiAgICB7XG4gICAgICBwYWdlcyA/IDxOb3ZlbCB7IC4uLiB7XG4gICAgICAgIGNoYXB0ZXIsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBhcHBTdHlsZSxcbiAgICAgICAgdGl0bGVTdHlsZSxcbiAgICAgICAgcGFyYWdyYXBoU3R5bGUsXG4gICAgICAgIG1hcmdpblRvcCxcbiAgICAgICAgdmlld3BvcnRIZWlnaHRcbiAgICAgIH19Lz4gOiBudWxsXG4gICAgfTwvZGl2PlxuICA8Lz5cbn1cblxuTm92ZWxWaWV3ZXIuZ2V0SW5pdGlhbFByb3BzID0gKCkgPT4ge1xuICBjb25zdCBjaGFwdGVyID0ge1xuICAgIHRpdGxlOiAn56ys5LiA56ugJyxcbiAgICBwYXJhZ3JhcGhzOiBbe1wia2V5XCI6XCJmMDZjNmJlMGEyYWQxMzNiNWJlMjc1OGRjMDM0OWViNFwiLFwiY29udGVudFwiOlwi44CA44CA44CA6buE5piP55qE5L2Z6L6J77yM5YC+5rSS6ICM5LiL77yM5L2/5b6X5pW05bqn5LqR5aSp5Z+O77yM6YO96JKZ5Z+O5LqG5LiA5bGC5reh5reh55qE6YeR6Zye44CCXCJ9LHtcImtleVwiOlwiOThkYzVkOTljZTA0MGJlZDQ0ZDRiZWQ4NDUzNTcxZDlcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcIjliNDdmYmFkNDcwMGI0NWI5ZDRlYzg0MmE2NzFhNTNjXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDlpKflqIHmrabppobkvY3kuo7kupHlpKnln47mnIDnuYHljY7nmoTlnLDmrrXvvIzkuI3ov4fnm7jmr5TovoPkuo7lvoDluLjmnaXvvIzmraTml7bnmoTmrabppobvvIzmmL7lvpfmnInkupvlhrflr4LjgIJcIn0se1wia2V5XCI6XCI0MGVmNWI2M2U2YTJkNWVmMmM5YjcyZjRmZWMxNWMzNlwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiZGU2NTU3Nzc2ZDk1MzA0YWJhNTM0NmY4NTllMWQ3Y2ZcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOKAnOWUlOKApuKApuKAnVwifSx7XCJrZXlcIjpcIjNhYjc2YjYxYTVjMTU0NTkzY2MxYjVkODE3MjkwMGIyXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDlnKjmrabppobop5LokL3kvY3nva7nmoTkuIDkuKrmiL/pl7TlhoXvvIzkuIDkuKrlubTnuqbljYHkuIPlhavlsoHnmoTlsJHlubTvvIzourrlnKjmnKjluorkuIrvvIzlj5Hlh7rkuIDpmLXovbvlkJ/vvIzntKfpl63nmoTnnLznmq7vvIznvJPnvJPnnYHlvIDjgIJcIn0se1wia2V5XCI6XCI5OTg0N2I2ZTA2MDI5MzYzOWE5YzQ0YjkwOTJiYzVmNVwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiNTkxY2JkNTNkM2EzOTAyZmExZmY3MTRjNjQwODAwNDdcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOeci+edgOWbm+WRqOeGn+aCieeahOeOr+Wig++8jOadqOaYreW+ruW+ruS4gOaEo++8jOS4jei/h+maj+WNs+S7luWDj+aYr+aDs+i1t+S6huS7gOS5iO+8jOW/g+S4rea2jOi1t+S4gOiCoeW8uueDiOeahOaAkueBq+OAglwifSx7XCJrZXlcIjpcIjE1N2E1MTJiMTZmZmVmMDFmNzI1ZjcwYzUyYzJmMjNmXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCI0ZmE2YzA5ZTMyMTJjNWIwOTNlMzdiZGQzZDZiZDYyNFwiLFwiY29udGVudFwiOlwi44CA44CA44CA4oCc546L5LqR77yM5L2g5Lus6L+Z576k54uX5Lic6KW/77yM5biI5YKF6L+H5LiW6L+Y5rKh5Yiw5LiA5Liq5pyI77yM5bCx6YO95aaC5q2k5qy65oiR44CC4oCdXCJ9LHtcImtleVwiOlwiNmMxMWQxMTNlMDBmNzFlMzY1Yjg0NTVhMTM1YjYxZWVcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcIjFjZDViNzJhYzY5Nzk0NTI5NGZiNDQ4NWY4MDIzNjQ3XCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDmg7PotbfkuI3kuYXliY3nmoTpga3pgYfvvIzmnajmmK3miYvmjozmj6HntKfvvIzllonlkpnkuK3lj5Hlh7rkuIDpmLXkvY7lkLzjgIJcIn0se1wia2V5XCI6XCI0YzI2YjliOWIyYmRlMTdiYWU0ZGVhNzRhMTBjMGQ0NlwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiNmU3YWM1NmVhMDhkN2NlOGI3YzhmNjQ2OGRhZmQzNzZcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOadqOaYre+8jOS7luaYjumdouS4iueahOi6q+S7ve+8jOaYr+Wkp+WogeatpummhummhuS4u+S9leaWueiIn+eahOacgOWQjuS6suS8oOW8n+WtkOOAglwifSx7XCJrZXlcIjpcIjE4MjgyNTFiOTA2ZmEzYmE2MTA0MmM3Y2IwMjU3NjVkXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCI5MDVjZWVjOTM3NDRhMzBmZGQ4MmM4ODdmYWQ0MzUxY1wiLFwiY29udGVudFwiOlwi44CA44CA44CA5L2G5Y+q5pyJ5LuW6Ieq5bex5riF5qWa77yM5YW25a6e5LuW5piv5p2l6Ieq5Y+m5aSW5LiA5Liq5LiW55WM55qE5pmu6YCa5Lq677yM5Y+q5piv5Zug5Li65LiA5qyh5oSP5aSW77yM54G16a2C5p2l5Yiw5LqG6L+Z5Liq5LiW55WM77yM5bm25LiU6ZmE6Lqr5Yiw5LqG5LiA5Liq5bCR5bm05a2k5YS/55qE6Lqr5LiK44CCXCJ9LHtcImtleVwiOlwiNjI5MTQzN2Q3Mjk1NGRjZmFlZTdmNjRkNWUwNWEzMDBcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcIjhmNGFkNGRkYWRhZTk5Yjk3Nzc4NjI1N2IyOTVjOWM4XCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDku5bkuYvmiYDku6Xog73ooqvkvZXmlrnoiJ/loILloILkuIDkvY3mrabppobppobkuLvvvIzmlLbkuLrkurLkvKDlvJ/lrZDvvIzpgqPlgJLkuI3mmK/lm6DkuLrku5bnmoTmrabpgZPotYTotKjpq5jnu53vvIznm7jlj43vvIzku5bpmYTouqvnmoTov5nlhbfouqvouq/vvIzotYTotKjlvojkuIDoiKzjgIJcIn0se1wia2V5XCI6XCI0NGJkMTQwMTEzZGY2Y2EyMTkwMzhhNGViMmQ5NzM2Y1wiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiZDMzODc0Y2YwOGIyODYzMmQ5ZDVjMjYxM2Q1OTI2YTJcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOecn+ato+iuqeS9leaWueiIn+eci+mHjeeahO+8jOaYr+S7lueahOWVhuS4muiDveWKm+OAglwifSx7XCJrZXlcIjpcImFkNGVhYjYxYmNiZGVkMjM3NjZlYzZiNDg1ODU4YzY5XCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCI1NDMyNjk3N2ZkM2NkNjZiNDRlOWY4ZWJiNDljYjY0Y1wiLFwiY29udGVudFwiOlwi44CA44CA44CA5Zyo6L+Z5Liq5q2m6YGT5piM55ub77yM5Y+q6KaB5Liq5Lq65a6e5Yqb6Laz5aSf77yM5bCx5Y+v5Lul5YeM6am+5LqO5LiA5YiH56S85rOV5LmL5LiK55qE5LiW55WM77yM5ZWG5Lia55qE5Y+R5bGV77yM55u45a+55LqO6YKj5Y+m5LiA5Liq5LiW55WM77yM5peg55aR5piv5Y2B5YiG5rue5ZCO55qE44CCXCJ9LHtcImtleVwiOlwiNjcyOGI3OTFiY2Y2ZTExMmNmNjY3OWY3MDVhZWZjNTNcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcImNlNDIwNWRhYmRiNjY4ZTM1MTI5N2JlNWZkMzMwODliXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDmnajmmK3lgJ/pibTliY3kuJbnmoTkuIDkupvnu4/llYbmqKHlvI/vvIzlho3phY3lkIjlpKflqIHmrabppobnmoTlir/lipvvvIzlj6/nnYDlrp7kuLrmrabppoblj5HlsZXkuobkuI3lsJHkuqfkuJrvvIzotZrkuobkuI3lsJHpkrHjgIJcIn0se1wia2V5XCI6XCI3ODgyY2E0YWZiNDdlMjJjYmFmZjMxODI0N2Y1YTZjM1wiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiMTAxMThhM2IxNjM0ZGI0NTc5NjdkNTA0YTI5YjFiNmJcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOadqOaYreeahOi/meenjeaJjeiDve+8jOiuqeS9leaWueiIn+WZqOmHjeS4jeW3su+8jOeUmuiHs+WQjuadpei/mOacieS8oOmXu++8jOS7luimgeWwhuiHquW3seeahOeLrOWls++8jOiuuOmFjee7meadqOaYre+8jOW5tuWcqOiHquW3seeZvuW5tOS5i+WQju+8jOWwhuWkp+Wogeatpummhu+8jOS5n+e7p+aJv+WIsOadqOaYreaJi+S4iuOAglwifSx7XCJrZXlcIjpcIjEzYjM4NTM0ZjBkMWQ3OGUyYWU5NWM0Yzg3NjU5ZWY1XCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCJmZTI4MjViYmVlNmFkYWYzMzNjM2U5MWNjMDk0MmQxNlwiLFwiY29udGVudFwiOlwi44CA44CA44CA6L+Z5qC35LiA5p2l77yM6Ieq54S26K6p5p2o5pit77yM6KKr5L2V5pa56Iif55qE5YW25LuW5Yeg5L2N5Lqy5Lyg5byf5a2Q77yM6KeG5Li65LqG55y85Lit6ZKJ77yM6IKJ5Lit5Yi644CCXCJ9LHtcImtleVwiOlwiOTM4Y2JlMGM4ZWYyZmE2OWJkNGM2YTk2N2JlYTI4ZjdcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcImUxMGM0ZjRkOTU2YTU3MjFlMjg2OTkyNzcwNjkyOTRlXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDmnKzmnaXvvIzkvZXmlrnoiJ/opoHmmK/lnKjkuJbvvIzku5bpgqPlh6DkuKrkurLkvKDlvJ/lrZDvvIzlsL3nrqHkuI3mu6HmnajmmK3vvIzkvYbkuZ/kuI3mlaLlpoLkvZXooajnjrDlh7rmnaXjgIJcIn0se1wia2V5XCI6XCIzODVhNjA4M2JhNTNhZTIyNDcxZmFhMTlhYmE2MzJmZFwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiNDNkNDg3MjRmMDhhNjNkMWJjZDdiOTMwN2ZiYzM3MzlcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOS9huWBj+WBj+WcqOS4jeS5heWJje+8jOS9leaWueiIn+WboOS4uumHh+aRmOS4gOenjeeBteiNr++8jOa3seWFpeS6keWkqeWxseiEie+8jOS4jeW5uOatu+WcqOS6humHjOmdouW8uuWkp+WHtuWFveWPo+S4i+OAglwifSx7XCJrZXlcIjpcIjMwNjE4MjY2MTA1ZTM3MmM3NmUxMmJmOTZmNGZiN2VlXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCJlMGQ3N2RiMGFjMjMyN2RmZDMzZGEzM2JjNWU3MWVkNFwiLFwiY29udGVudFwiOlwi44CA44CA44CA5aSx5Y675LqG6L+Z5L2N5aSn6Z2g5bGx77yM5L2/5b6X6Ieq6Lqr5a6e5Yqb5bm25LiN5by655qE5p2o5pit77yM5Zyo5aSn5aiB5q2m6aaG55qE5aSE5aKD77yM56uL5Yi75LiA6JC95Y2D5LiI77yM5Y+X5Yiw5L2V5pa56Iif5Yeg5L2N5Lqy5Lyg5byf5a2Q5omT5Y6L5o6S5oyk44CCXCJ9LHtcImtleVwiOlwiZTUyYzNiZjMxY2VmNjcwNjIyYmQxMTE1ZjNiOWE5NDhcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcImU1ZGY0Y2QxOTVjNmUwOTY4YWM3YjQxODM3NDBiMmE1XCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDku4rlpKnvvIzpgqPkvY3njovkupHvvIzmm7TmmK/luKbmnaXkuoblhbbku5blh6DkvY3kurLkvKDlvJ/lrZDnmoTmhI/mgJ3vvIzmmI7nmb3lnLDmjIflh7ropoHmnajmmK3ljbfpk7rnm5botbDkurrjgIJcIn0se1wia2V5XCI6XCJlNTQyMmI2YWQxYWMyOTM1MDEyNjk0YjJhYjgyNThhNFwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiMTE1ZDA2YTQ3MDg0NTVkNzMzZWY3MTJiMzM4MWY0N2RcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOadqOaYreW9k+aXtuaEpOaAkuS5i+S4i++8jOWSjOeOi+S6kemhtuS6huWHoOWPpeWYtO+8jOe7k+aenOiiq+WQjuiAheeLoOeLoOaatOaPjeS4gOmhv++8jOi/mOiiq+aJk+W+l+aYj+S6hui/h+WOu+OAglwifSx7XCJrZXlcIjpcIjIwYjhiNjZmMzJkYTMxYTIzMGVhNjI0OTVlYWZkN2ZiXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCI2MTg4YmEzM2JjNDU3YmMwZWMxYTk4ZjQyZDI4ODQxNFwiLFwiY29udGVudFwiOlwi44CA44CA44CA5LiN6L+H6IKJ6Lqr5LiK55qE55eb5qWa77yM5a+55LqO5p2o5pit5p2l6K+06L+Y5LiN566X5LuA5LmI77yM5Y+q5piv5b2T5LuW5oOz6LW36YKj5L2N5riF5Li95aWz5a2Q5pe277yM5b+D5Lit5bCx5Lya6Zeq6L+H5LiA6Zi15Yi655eb44CCXCJ9LHtcImtleVwiOlwiZTYzODJlYWMyYjE1NDIxMzZjYzM1MTY3Mjc4ZTNlYzlcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcIjJmNDhmYWZiNWM4NmE1ZTU0NDU1ZTg3ZjViMzhkMDBjXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDpgqPnu53nvo7lrrnpopzkuK3vvIzluKbnnYDnmoTlhrfmt6HlkozmvKDop4bvvIzorqnmnajmmK3msLjov5zpg73pmr7ku6Xlv5jmjonjgIJcIn0se1wia2V5XCI6XCJjMGExMjJkZTg2N2Y0MjU1ZWNkM2JjZjliMGJkM2VkZFwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiM2I1OGY5MTYwNGNhN2YxODE0NjliNDI0ZjcxN2M2NWFcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOKAnOWmguatpOS5n+Wlve+8jOa4healmuS6huS9oOeahOW/g+aEj++8jOaIkeS5n+WPr+S7peS6huaXoOeJteaMgueahOemu+W8gOS6huOAguKAneadqOaYreaDqOeEtuS4gOeske+8jOWvueS6juatpummhuWGjeaXoOeVmeaBi+OAglwifSx7XCJrZXlcIjpcImUwYjEwZDY4ZjA4YjYxZGJkYTAxNDExZThlMjMxZDQwXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCJkM2FkOGM0MTA3YjJkODc3Y2Q0MWFlYTc3MjFiOTk5M1wiLFwiY29udGVudFwiOlwi44CA44CA44CA6ICM5LiU57uP6L+H5LuK5aSp55qE5LqL5oOF77yM5LuW5bey57uP5rex5Yi75Zyw5piO55m95LqG6Ieq5bex546w5Zyo55qE5aSE5aKD44CCXCJ9LHtcImtleVwiOlwiOTMwOTc4YmU0ZTYwNGE2NWEwYWEyMWVhYTI4NThmODRcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcIjVhNDI2NTU5Njg3ZDY5Yjg3ZGMwNTFmN2Y0ZjIxM2VkXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDlho3kuI3nprvlvIDmrabppobvvIzoh6rlt7HmgZDmgJXml6nmmZropoHooqvnjovkupHnrYnkurrpmLTmrbvjgIJcIn0se1wia2V5XCI6XCI4ZmIxZDgwMWI1MmVmOWNmYTg2YmEzOTU3ZGI5OTM3NVwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiZjg5NDZlOWRhYWFiNWNmNmViMTFkNDk4OTBjZGI4NGZcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOKAnOS5n+S4jeefpemBk+mCo+Wwj+WtkOmGkuS6huayoeacie+8n+eOi+S6keW4iOWFhOWPr+aYr+ivtOS6hu+8jOS7iuWkqemdnuiuqeS7lua7muibi+S4jeWPr+OAguKAnVwifSx7XCJrZXlcIjpcImM1MGU1OWNiYjg5YWFlZWU1YjI4ZjE2ZjkyZmU3NTFiXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCJiMzA0OTQxODE4YTcxZWI3YmU2NTdlZDU2YzQ1NjFkYlwiLFwiY29udGVudFwiOlwi44CA44CA44CA4oCc5Zi/5Zi/77yM5rKh6YaS5bCx5rWH55uG5YeJ5rC05LiL5Y6777yM5LiN5oCV5LuW5LiN6YaS44CC4oCdXCJ9LHtcImtleVwiOlwiOTZhYzU5YTY4Y2MwM2ZhYzdjNDQyZjc1ZDY3ZDcwYzBcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcIjEwMjc5ZDRkNTVlNWNhZDc0YjA5MTQxZGYwYmVmYzIwXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDlsLHlnKjov5nml7bvvIzmiL/lpJbkvKDmnaXkuIDpmLXlrInnrJHlo7DvvIzntKfot5/nnYDvvIzigJznoLDigJ3nmoTkuIDlo7DvvIzmiL/pl6jooqvouLnkuoblvIDmnaXjgIJcIn0se1wia2V5XCI6XCI4NjA2OTkzNjRlYTZjZjkwM2JkNDcyYjlkZDE1Mzk2MVwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiMWUxNjQ5ZDJlZWI1NWJlNTc2NDAxMzZkMjJjZTNhODlcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOS4pOS4qui6q+epv+e7g+WKn+acjeeahOW5tOi9u+eUt+WtkO+8jOebuOe7p+i1sOi/m+Wxi+WGheOAglwifSx7XCJrZXlcIjpcIjg3MWY5NDMzZTNkNWY5NGE3NzI4OTcwOTk3NjNlNWQ4XCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCI5N2ZlOTMzNmFjYmRmMDM5ZGQxNjI0MmY2YWZlZTU0ZlwiLFwiY29udGVudFwiOlwi44CA44CA44CA55yL5Yiw5Z2Q5Zyo5bqK5LiK55qE5p2o5pit77yM5b2T5YWI6YKj55S35a2Q6L2756yR5LiA5aOw6YGT77ya4oCc5Y6f5p2l5oiR5Lus55qE4oCY5p2o5biI5YWE4oCZ5bey57uP6YaS5LqG77yM6YKj6LW257Sn55qE5ZCn44CC546L5LqR5biI5YWE6K+05LuK5pel4oCY5p2o5biI5YWE4oCZ5L2g6KaB56a75byA5q2m6aaG5LqG77yM6L+Y54m55oSP5Y+s6ZuG5LqG5biI5YWE5byf5Lus77yM6YO95Zyo5YmN6Zmi77yM562J552A6KaB5Li65L2g6YCB6KGM5ZGi44CC4oCdXCJ9LHtcImtleVwiOlwiNGEyODlhZmYyOWUyMWExMzJlMzA4OWIwZWFjNzA5ZDdcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcImQzYzFjMDIwZDE1ZGUxMGVkMDdhN2ZmM2JmYmE1OGZmXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDigJzkuI3plJnvvIzotbbntKfnmoTlkKfvvIzkuI3opoHorqnkuIDkvJfluIjlhYTlvJ/nrYnkuYXkuobjgILmnajluIjlhYTkvaDopoHmmK/ooYzliqjkuI3kvr/vvIzmiJHku6zlj6/ku6XluK7kuIDluK7kvaDjgILigJ3lj6bkuIDkvY3nlLflrZDvvIzohLjkuIrpmLTnrJHov57ov57jgIJcIn0se1wia2V5XCI6XCJkNDA4YTljYjkxMjRkOWViNGFkZjhlZTg4ZWVjMjlmYlwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiMzgyZWQyN2ZjMGQzODk5NzBlZmNiYTBhNzExNWJmN2NcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOadqOaYreecuOWFieWGt+WGve+8jOayoeacieeQhuS8mui/meS4pOS4queUt+WtkO+8jOS4i+W6iuWQju+8jOW+hOebtOemu+W8gOWxi+WtkOOAglwifSx7XCJrZXlcIjpcIjE3M2U3OTE4Yjg2YmI4NWY2OThmNjI5ODQ3ZmVjZDUyXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCI2YThlZTgyZTMwNThmNDBhNmZkZDQxY2ZmMWQ0OTNiNFwiLFwiY29udGVudFwiOlwi44CA44CA44CA4oCc5ZO877yB5ou95LuA5LmI5ZGA77yM6L+Y5Lul5Li65piv5Lul5YmN6aaG5Li75Zyo55qE5pe25YCZ5ZCX77yB4oCd6YKj5b2T5YWI6L+b5p2l55qE55S35a2Q77yM6KeB5Yiw5p2o5pit5peg6KeG6Ieq5bex77yM5LiN55Sx5Y+R5Ye65Ya35ZO844CCXCJ9LHtcImtleVwiOlwiMzhkYzEzNWQ2OTM5Y2I0NTVkZGVlMDVmZmQ1MzY2MTJcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcIjA2ZDIyMzI5YzYyOWYxMmUzMjBlODc3MDA1ZmEwYzE4XCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDpmo/ljbPvvIzkuozkurrkuZ/ot5/nnYDmnajmmK3lh7rljrvjgIJcIn0se1wia2V5XCI6XCJhMzFhZGQ0Y2QzNWM4NTdhNTBlODcwMzJlZWE1OTA1YlwiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiNGRkZWI4NGJjZTAzZjJiZTU1OGQzYWY5MTlmNTcxM2VcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOatpOWIu+WcqOWkp+WogeatpummhueahOWJjemZou+8jOS4gOWkp+e+pOeahOatpummhuW8n+WtkO+8jOmDveWBnOS4i+S6huavj+aXpem7hOaYj+WNgeWIhueahOS/rueCvOWKn+ivvu+8jOebuOS6kuWcqOS9juWjsOiuruiuuuedgOS7gOS5iOOAglwifSx7XCJrZXlcIjpcIjZjMDE4YmU0OGUyZjZiZDVmMDQzNmQ3MzRmYjE5OTJiXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCJhYWViNTNkZGJkNmE3MmUwMTFkMmQwNDY0YjcyNjNmOVwiLFwiY29udGVudFwiOlwi44CA44CA44CA4oCc5Zev77yB5p2o5pit5Ye65p2l5LqG44CC4oCdXCJ9LHtcImtleVwiOlwiOGRjYjM4ODM2NDFjMmYwNzhjZWNjM2ViYWE0NDMxYTBcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgFwifSx7XCJrZXlcIjpcIjU4Mjg4MWM1Yjc1MTg0NjkzNjRjNzdkMWVlNjE5MDMzXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIDlv73nhLbvvIzlhbbkuK3kuIDkuKrmrabppobnmoTlrablvpLvvIzlj5Hlh7rkuIDpmLXkvY7lkbzvvIzkvb/lvpfpmYTov5HnmoTkurrvvIzpg73mnJ3nnYDmn5DkuIDkuKrmlrnlkJHnnIvljrvjgIJcIn0se1wia2V5XCI6XCJlZmQ1MzNjNmNjZTcyODhjODliMGExMzA5Y2RjYmY3Y1wiLFwiY29udGVudFwiOlwi44CA44CA44CAXCJ9LHtcImtleVwiOlwiMDNkN2ZmMjVmM2Q0ZDcxN2ViYjkxNTgyYWM4NzM1ZDNcIixcImNvbnRlbnRcIjpcIuOAgOOAgOOAgOS4gOi6q+eZveiho+eahOadqOaYre+8jOmdouiJsui/mOacieWHoOWIhuiLjeeZve+8jOiuqeS6uuS4gOeci+S5i+S4i++8jOabtOinieW+l+WDj+aYr+S4gOS4quaWh+W8seS5pueUn+OAglwifSx7XCJrZXlcIjpcImFiMGNlMGVhZTI3MDVjNDA1NjA5ZmJjNjI1YzNjMzgyXCIsXCJjb250ZW50XCI6XCLjgIDjgIDjgIBcIn0se1wia2V5XCI6XCI5ZTExMzk0YjA5MGUxYzNmZmNlZDA2ZjkzZGI1MDI0OVwiLFwiY29udGVudFwiOlwi44CA44CA44CA5Y+q5piv5Zyo55yL5ZCR5p2o5pit5LmL5pe277yM6YKj576k5Lq65Lit77yM5LiN6K665piv5q2m6aaG55qE5a2m5b6S77yM6L+Y5piv5ouz5biI77yM55uu5YWJ5Lit6YO96ZqQ6ZqQ5bim552A5LiA5Lid6YSZ5aS35ZKM5LiN5bGR44CCXCJ9XVxuICB9XG4gIHJldHVybiB7IGNoYXB0ZXIgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOb3ZlbFZpZXdlciJdfQ== */\n/*@ sourceURL=C:\\Users\\ajc\\Staff\\tap2.top\\pages\\novel.js */"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    ref: viewer,
    style: appStyle,
    className: "jsx-3150692238",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
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
      lineNumber: 281
    },
    __self: this
  })), pages ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Novel, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    chapter: chapter,
    pages: pages,
    appStyle: appStyle,
    titleStyle: titleStyle,
    paragraphStyle: paragraphStyle,
    marginTop: marginTop,
    viewportHeight: viewportHeight
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  })) : null));
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
//# sourceMappingURL=novel.js.77f4fe7c7be0e6f6e5ed.hot-update.js.map