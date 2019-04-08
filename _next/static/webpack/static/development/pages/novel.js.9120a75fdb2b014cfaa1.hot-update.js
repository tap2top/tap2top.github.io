webpackHotUpdate("static\\development\\pages\\novel.js",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);



var _jsxFileName = "C:\\Users\\ajc\\Staff\\tap2.top\\pages\\novel.js";



var ChapterTitle = function ChapterTitle(_ref) {
  var title = _ref.title,
      titleStyle = _ref.titleStyle;
  return Object(react__WEBPACK_IMPORTED_MODULE_3__["createElement"])('h4', {
    style: titleStyle
  }, title);
};

var Paragraph = function Paragraph(_ref2) {
  var paragraph = _ref2.paragraph,
      style = _ref2.style;
  return Object(react__WEBPACK_IMPORTED_MODULE_3__["createElement"])('div', {
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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      index = _useState2[0],
      setIndex = _useState2[1];

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(),
      prevRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  var animateStatus = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
    return {
      playing: false
    };
  }, []);
  var prev = pages[index - 1],
      next = pages[index + 1],
      page = pages[index];
  var onClick = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (_ref4) {
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
  return Object(react__WEBPACK_IMPORTED_MODULE_3__["createElement"])('div', {
    onClick: onClick,
    style: {
      position: 'relative',
      width: '100vw',
      height: '100vh',
      overflow: 'hidden'
    }
  }, Object(react__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Page, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
    transform: '',
    page: next
  }, pageProps)), Object(react__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Page, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
    ref: ref,
    transform: "scaleX(1) skewY(0deg)",
    page: page
  }, pageProps)), Object(react__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Page, Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({
    ref: prevRef,
    transform: "scaleX(0) skewY(-90deg)",
    page: prev
  }, pageProps)));
};

var Page = Object(react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function (_ref5, ref) {
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
  return Object(react__WEBPACK_IMPORTED_MODULE_3__["createElement"])('div', {
    ref: ref,
    style: style
  }, Object(react__WEBPACK_IMPORTED_MODULE_3__["createElement"])('div', {
    style: {
      transform: "translate(0, ".concat(page.offset, "px)")
    }
  }, page.paragraphs.map(function (p) {
    return p.type === 'title' ? Object(react__WEBPACK_IMPORTED_MODULE_3__["createElement"])(ChapterTitle, {
      key: p.data.key,
      title: chapter.title,
      titleStyle: titleStyle
    }) : Object(react__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Paragraph, {
      key: p.data.key,
      paragraph: p.data,
      style: paragraphStyle
    });
  })));
});

var Prerender = function Prerender(_ref6) {
  var chapter = _ref6.chapter,
      appStyle = _ref6.appStyle,
      titleStyle = _ref6.titleStyle,
      paragraphStyle = _ref6.paragraphStyle,
      viewportHeight = _ref6.viewportHeight,
      setPages = _ref6.setPages;
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
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
  return Object(react__WEBPACK_IMPORTED_MODULE_3__["createElement"])('div', {
    ref: ref,
    style: {
      position: 'absolute',
      width: '100vw',
      transform: 'translateX(-200vw)'
    }
  }, Object(react__WEBPACK_IMPORTED_MODULE_3__["createElement"])(ChapterTitle, {
    title: chapter.title,
    titleStyle: titleStyle
  }), chapter.paragraphs.map(function (paragraph) {
    return Object(react__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Paragraph, {
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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      pageHeight = _useState4[0],
      setPageHeight = _useState4[1];

  var _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_3__["useMemo"])(function () {
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

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setPageHeight(window.innerHeight);
  }, [pageHeight]);

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      pages = _useState6[0],
      setPages = _useState6[1];

  var viewer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])();
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    ref: viewer,
    style: appStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }, Object(react__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Prerender, {
    chapter: chapter,
    titleStyle: titleStyle,
    viewportHeight: viewportHeight,
    setPages: setPages,
    appStyle: appStyle,
    paragraphStyle: paragraphStyle
  }), pages ? Object(react__WEBPACK_IMPORTED_MODULE_3__["createElement"])(Novel, {
    chapter: chapter,
    pages: pages,
    appStyle: appStyle,
    titleStyle: titleStyle,
    paragraphStyle: paragraphStyle,
    marginTop: marginTop,
    viewportHeight: viewportHeight
  }) : null);
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
//# sourceMappingURL=novel.js.9120a75fdb2b014cfaa1.hot-update.js.map