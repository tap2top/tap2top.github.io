(window.webpackJsonp=window.webpackJsonp||[]).push([["1ddf"],{"8oxB":function(e,t){var r,n,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(e){r=i}try{n="function"==typeof clearTimeout?clearTimeout:u}catch(e){n=u}}();var c,l=[],f=!1,s=-1;function p(){f&&c&&(f=!1,c.length?l=c.concat(l):s=-1,l.length&&h())}function h(){if(!f){var e=a(p);f=!0;for(var t=l.length;t;){for(c=l,l=[];++s<t;)c&&c[s].run();s=-1,t=l.length}c=null,f=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function v(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new d(e,t)),1!==l.length||f||a(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"9Jkg":function(e,t,r){e.exports=r("oh+g")},EhLH:function(e,t,r){"use strict";r.r(t),function(e){var n=r("ln6h"),o=r.n(n),i=r("O40h"),u=r("q1tI"),a=r.n(u),c=r("YFqc"),l=r.n(c),f=function(e){return a.a.createElement("div",null,"Post, ",e.abc,a.a.createElement("br",null),e.ua,a.a.createElement(l.a,{href:"/"},a.a.createElement("a",null,"返回首页")))};f.getInitialProps=function(){var t=Object(i.default)(o.a.mark(function t(r){var n,i;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.req,i=r.query,r.pathname,r.asPath,console.log(i,n),console.log(123,e),t.abrupt("return",{abc:Math.random()});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),t.default=f}.call(this,r("8oxB"))},MDTK:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post",function(){var e=r("EhLH");return{page:e.default||e}}])},YFqc:function(e,t,r){e.exports=r("cTJO")},cTJO:function(e,t,r){"use strict";var n=r("KI45"),o=n(r("9Jkg")),i=n(r("/HRN")),u=n(r("WaGi")),a=n(r("ZDA2")),c=n(r("/+P4")),l=n(r("N9n2")),f=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},s=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var p=r("CxY0"),h=f(r("q1tI")),d=(s(r("17x9")),f(r("nOHt"))),v=r("Bu4q");function m(e){return e&&"object"==typeof e?v.formatWithValidation(e):e}var w=function(e){function t(){var e,r,n,o,u;return(0,i.default)(this,t),(e=(0,a.default)(this,(0,c.default)(t).apply(this,arguments))).formatUrls=(r=function(e,t){return{href:m(e),as:m(t)}},n=null,o=null,u=null,function(e,t){if(e===n&&t===o)return u;var i=r(e,t);return n=e,o=t,u=i,i}),e.linkClicked=function(t){var r=t.currentTarget,n=r.nodeName,o=r.target;if("A"!==n||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=e.formatUrls(e.props.href,e.props.as),u=i.href,a=i.as;if(function(e){var t=p.parse(e,!1,!0),r=p.parse(v.getLocationOrigin(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(u)){var c=window.location.pathname;u=p.resolve(c,u),a=a?p.resolve(c,a):u,t.preventDefault();var l=e.props.scroll;null==l&&(l=a.indexOf("#")<0),d.default[e.props.replace?"replace":"push"](u,a,{shallow:e.props.shallow}).then(function(e){e&&l&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,l.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,o.default)(this.props.href)!==(0,o.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,r=p.resolve(e,t);d.default.prefetch(r)}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,o=r.as;"string"==typeof t&&(t=h.default.createElement("a",null,t));var i=h.Children.only(t),u={onClick:function(t){i.props&&"function"==typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(u.href=o||n),u.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(u.href=d.Router._rewriteUrlForNextExport(u.href)),h.default.cloneElement(i,u)}}]),t}(h.Component);t.default=w},"oh+g":function(e,t,r){var n=r("WEpk"),o=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}}},[["MDTK","5d41","9da1"]]]);