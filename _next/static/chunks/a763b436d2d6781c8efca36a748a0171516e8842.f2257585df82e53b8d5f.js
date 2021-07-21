(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[3],{"0iIO":function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var r="undefined"!==typeof e&&e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},o=function(){function e(e){var t=void 0===e?{}:e,n=t.name,o=void 0===n?"stylesheet":n,a=t.optimizeForSpeed,c=void 0===a?r:a,l=t.isBrowser,u=void 0===l?"undefined"!==typeof window:l;s(i(o),"`name` must be a string"),this._name=o,this._deletedRulePlaceholder="#"+o+"-deleted-rule____{}",s("boolean"===typeof c,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=c,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,o,a,c=e.prototype;return c.setOptimizeForSpeed=function(e){s("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},c.isOptimizeForSpeed=function(){return this._optimizeForSpeed},c.inject=function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(r||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},c.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},c.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},c.insertRule=function(e,t){if(s(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(a){return r||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var o=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,o))}return this._rulesCount++},c.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(o){r||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];s(i,"old rule at index `"+e+"` not found"),i.textContent=t}return e},c.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},c.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},c.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},c.makeStyleTag=function(e,t,n){t&&s(i(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var o=document.head||document.getElementsByTagName("head")[0];return n?o.insertBefore(r,n):o.appendChild(r),r},t=e,(o=[{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,o),a&&n(t,a),e}();function s(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=o}).call(this,n("F63i"))},BqJQ:function(e,t,n){var r,i;void 0===(i="function"===typeof(r=function(){var e={version:"0.2.0"},t=e.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function n(e,t,n){return e<t?t:e>n?n:e}function r(e){return 100*(-1+e)}function i(e,n,i){var o;return(o="translate3d"===t.positionUsing?{transform:"translate3d("+r(e)+"%,0,0)"}:"translate"===t.positionUsing?{transform:"translate("+r(e)+"%,0)"}:{"margin-left":r(e)+"%"}).transition="all "+n+"ms "+i,o}e.configure=function(e){var n,r;for(n in e)void 0!==(r=e[n])&&e.hasOwnProperty(n)&&(t[n]=r);return this},e.status=null,e.set=function(r){var a=e.isStarted();r=n(r,t.minimum,1),e.status=1===r?null:r;var c=e.render(!a),l=c.querySelector(t.barSelector),u=t.speed,f=t.easing;return c.offsetWidth,o((function(n){""===t.positionUsing&&(t.positionUsing=e.getPositioningCSS()),s(l,i(r,u,f)),1===r?(s(c,{transition:"none",opacity:1}),c.offsetWidth,setTimeout((function(){s(c,{transition:"all "+u+"ms linear",opacity:0}),setTimeout((function(){e.remove(),n()}),u)}),u)):setTimeout(n,u)})),this},e.isStarted=function(){return"number"===typeof e.status},e.start=function(){e.status||e.set(0);var n=function(){setTimeout((function(){e.status&&(e.trickle(),n())}),t.trickleSpeed)};return t.trickle&&n(),this},e.done=function(t){return t||e.status?e.inc(.3+.5*Math.random()).set(1):this},e.inc=function(t){var r=e.status;return r?("number"!==typeof t&&(t=(1-r)*n(Math.random()*r,.1,.95)),r=n(r+t,0,.994),e.set(r)):e.start()},e.trickle=function(){return e.inc(Math.random()*t.trickleRate)},function(){var t=0,n=0;e.promise=function(r){return r&&"resolved"!==r.state()?(0===n&&e.start(),t++,n++,r.always((function(){0===--n?(t=0,e.done()):e.set((t-n)/t)})),this):this}}(),e.render=function(n){if(e.isRendered())return document.getElementById("nprogress");c(document.documentElement,"nprogress-busy");var i=document.createElement("div");i.id="nprogress",i.innerHTML=t.template;var o,a=i.querySelector(t.barSelector),l=n?"-100":r(e.status||0),u=document.querySelector(t.parent);return s(a,{transition:"all 0 linear",transform:"translate3d("+l+"%,0,0)"}),t.showSpinner||(o=i.querySelector(t.spinnerSelector))&&f(o),u!=document.body&&c(u,"nprogress-custom-parent"),u.appendChild(i),i},e.remove=function(){l(document.documentElement,"nprogress-busy"),l(document.querySelector(t.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&f(e)},e.isRendered=function(){return!!document.getElementById("nprogress")},e.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective"in e?"translate3d":t+"Transform"in e?"translate":"margin"};var o=function(){var e=[];function t(){var n=e.shift();n&&n(t)}return function(n){e.push(n),1==e.length&&t()}}(),s=function(){var e=["Webkit","O","Moz","ms"],t={};function n(e){return e.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(function(e,t){return t.toUpperCase()}))}function r(t){var n=document.body.style;if(t in n)return t;for(var r,i=e.length,o=t.charAt(0).toUpperCase()+t.slice(1);i--;)if((r=e[i]+o)in n)return r;return t}function i(e){return e=n(e),t[e]||(t[e]=r(e))}function o(e,t,n){t=i(t),e.style[t]=n}return function(e,t){var n,r,i=arguments;if(2==i.length)for(n in t)void 0!==(r=t[n])&&t.hasOwnProperty(n)&&o(e,n,r);else o(e,i[1],i[2])}}();function a(e,t){return("string"==typeof e?e:u(e)).indexOf(" "+t+" ")>=0}function c(e,t){var n=u(e),r=n+t;a(n,t)||(e.className=r.substring(1))}function l(e,t){var n,r=u(e);a(e,t)&&(n=r.replace(" "+t+" "," "),e.className=n.substring(1,n.length-1))}function u(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function f(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return e})?r.call(t,n,t,e):r)||(e.exports=i)},DSo7:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},F63i:function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"===typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var c,l=[],u=!1,f=-1;function p(){u&&c&&(u=!1,c.length?l=c.concat(l):f=-1,l.length&&d())}function d(){if(!u){var e=a(p);u=!0;for(var t=l.length;t;){for(c=l,l=[];++f<t;)c&&c[f].run();f=-1,t=l.length}c=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new m(e,t)),1!==l.length||u||a(d)},m.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=h,i.addListener=h,i.once=h,i.off=h,i.removeListener=h,i.removeAllListeners=h,i.emit=h,i.prependListener=h,i.prependOnceListener=h,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},J9Yr:function(e,t,n){"use strict";var r=n("iN+R"),i=n("zQIG"),o=n("8mBC"),s=(n("N7I1"),n("I/kN")),a=n("cMav"),c=n("pSQP");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var i=c(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return a(this,n)}}t.__esModule=!0,t.default=void 0;var u=n("ERkP"),f=function(e){s(n,e);var t=l(n);function n(e){var o;return i(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(u.Component);t.default=f},JI9i:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if("undefined"!==typeof XDomainRequest)return t(null),null;var n=new XMLHttpRequest;return n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&200===n.status&&t(JSON.parse(n.responseText))},n.open("GET",e,!0),n.send(),n},e.exports=t.default},KeDb:function(e,t,n){"use strict";var r=n("x3oR"),i=n("pONU");t.__esModule=!0,t.default=void 0;var o,s=i(n("ERkP")),a=n("L9lV"),c=n("7xIC"),l=new Map,u=window.IntersectionObserver,f={};var p=function(e,t){var n=o||(u?o=new u((function(e){e.forEach((function(e){if(l.has(e.target)){var t=l.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(o.unobserve(e.target),l.delete(e.target),t())}}))}),{rootMargin:"200px"}):void 0);return n?(n.observe(e),l.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}l.delete(e)}):function(){}};function d(e,t,n,r){(0,a.isLocalURL)(t)&&(e.prefetch(t,n,r).catch((function(e){0})),f[t+"%"+n]=!0)}var m=function(e){var t=!1!==e.prefetch,n=s.default.useState(),i=r(n,2),o=i[0],l=i[1],m=(0,c.useRouter)(),h=m&&m.pathname||"/",v=s.default.useMemo((function(){var t=(0,a.resolveHref)(h,e.href,!0),n=r(t,2),i=n[0],o=n[1];return{href:i,as:e.as?(0,a.resolveHref)(h,e.as):o||i}}),[h,e.href,e.as]),g=v.href,y=v.as;s.default.useEffect((function(){if(t&&u&&o&&o.tagName&&(0,a.isLocalURL)(g)&&!f[g+"%"+y])return p(o,(function(){d(m,g,y)}))}),[t,o,g,y,m]);var x=e.children,b=e.replace,w=e.shallow,_=e.scroll;"string"===typeof x&&(x=s.default.createElement("a",null,x));var S=s.Children.only(x),k={ref:function(e){e&&l(e),S&&"object"===typeof S&&S.ref&&("function"===typeof S.ref?S.ref(e):"object"===typeof S.ref&&(S.ref.current=e))},onClick:function(e){S.props&&"function"===typeof S.props.onClick&&S.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,o,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==s&&(s=r.indexOf("#")<0),t[i?"replace":"push"](n,r,{shallow:o}).then((function(e){e&&s&&(window.scrollTo(0,0),document.body.focus())})))}(e,m,g,y,b,w,_)}};return t&&(k.onMouseEnter=function(e){(0,a.isLocalURL)(g)&&(S.props&&"function"===typeof S.props.onMouseEnter&&S.props.onMouseEnter(e),d(m,g,y,{priority:!0}))}),(e.passHref||"a"===S.type&&!("href"in S.props))&&(k.href=(0,a.addBasePath)(y)),s.default.cloneElement(S,k)};t.default=m},"NqE+":function(e,t,n){"use strict";var r=n("yFcC"),i=n.n(r),o=n("ERkP"),s=n.n(o),a=n("O94r"),c=n.n(a),l=n("ysqo"),u=n.n(l),f=n("7xIC"),p=n.n(f),d=n("BqJQ"),m=n.n(d),h=s.a.createElement;p.a.events.on("routeChangeStart",(function(){return m.a.start()})),p.a.events.on("routeChangeComplete",(function(){m.a.done()})),p.a.events.on("routeChangeError",(function(){return m.a.done()}));var v=function(e){var t=e.title,n=void 0===t?"visualization components":t;return h("div",{className:"jsx-1887753402"},h(u.a,null,h("meta",{name:"viewport",content:"width=device-width, initial-scale=1",className:"jsx-1887753402"}),h("meta",{charSet:"utf-8",className:"jsx-1887753402"}),h("meta",{property:"og:image",content:"https://raw.githubusercontent.com/airbnb/visx/master/assets/x-hero.png",className:"jsx-1887753402"}),h("meta",{property:"og:image:type",content:"image/png",className:"jsx-1887753402"}),h("meta",{property:"og:image:secure_url",content:"https://raw.githubusercontent.com/airbnb/visx/master/assets/x-hero.png",className:"jsx-1887753402"}),h("meta",{property:"og:image:alt",content:"a collection of expressive, low-level visualization primitives for React",className:"jsx-1887753402"}),h("meta",{property:"og:url",content:"https://airbnb.io/visx/",className:"jsx-1887753402"}),h("meta",{property:"og:title",content:"visx | ".concat(n),className:"jsx-1887753402"}),h("meta",{property:"og:description",content:"a collection of expressive, low-level visualization primitives for React",className:"jsx-1887753402"}),h("meta",{name:"twitter:card",content:"summary_large_image",className:"jsx-1887753402"}),h("meta",{name:"twitter:site",content:"@AirbnbEng",className:"jsx-1887753402"}),h("meta",{name:"twitter:creator",content:"@hshoff",className:"jsx-1887753402"}),h("meta",{name:"twitter:title",content:"visx",className:"jsx-1887753402"}),h("meta",{name:"twitter:description",content:"a collection of expressive, low-level visualization primitives for React",className:"jsx-1887753402"}),h("meta",{name:"twitter:image",content:"https://raw.githubusercontent.com/airbnb/visx/master/assets/x-hero.png",className:"jsx-1887753402"}),h("meta",{name:"twitter:image:alt",content:"visx logo is an oversized X",className:"jsx-1887753402"}),h("title",{className:"jsx-1887753402"},"visx | ".concat(n)),h("link",{rel:"shortcut icon",type:"image/png",href:"static/favicon.png",className:"jsx-1887753402"}),h("link",{rel:"stylesheet",href:"static/prism/prism-funky.css",className:"jsx-1887753402"}),h("link",{rel:"stylesheet",href:"static/prism/prism-line-numbers.css",className:"jsx-1887753402"})),h(i.a,{id:"1887753402"},["body{width:100vw;overflow-x:hidden;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Oxygen','Ubuntu','Cantarell', 'Fira Sans','Droid Sans','Helvetica Neue',sans-serif;background:#ffffff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;color:white;padding:0;margin:0;font-size:22px;line-height:1.5em;}","#__next,.wrapper{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;max-width:105rem;margin:0 auto;}",".tilt{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;min-width:33%;}",".page-left{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:4;-ms-flex:4;flex:4;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:0 2rem 2rem;margin-bottom:50px;margin-top:140px;}",".page-left h2:first-child{margin-top:0;padding-top:4px;}",".page-right{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:3;-ms-flex:3;flex:3;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;color:white;padding:10px 2rem 2rem;margin-top:140px;}",".page-right>ul{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-flex:1;-ms-flex:1;flex:1;font-family:'Karla';color:#000;}",".page-right a{font-size:14px;}","ol,ul{padding-left:0;}","blockquote{margin-left:0;}","li{list-style-type:none;}","p{margin:1rem 0;}","code{font-family:'Menlo',monospace;font-weight:bold;padding:0.2rem 0.3rem;background-color:#ebebeb;line-height:1.8em;font-size:14px;}","h1{font-size:54px;display:block;margin-bottom:3rem;}","h2{font-size:19px;margin-bottom:0.2rem;margin-top:2rem;display:block;}","a{color:#272727;font-weight:400;-webkit-text-decoration:none;text-decoration:none;}","a:hover{-webkit-text-decoration:underline;text-decoration:underline;}",".logo{background-image:url('/visx/static/favicon.png');background-position:center;background-size:cover;height:24px;width:24px;background-repeat:no-repeat;}",".item-bottom .codeblock{margin:1em 0px 0;}",".visx-brush:hover{cursor:move;}","#nprogress{pointer-events:none;}","#nprogress .bar{background:#fc2e1c;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px;}","#nprogress .peg{display:block;position:absolute;right:0px;width:100px;height:100%;box-shadow:0 0 10px #ff9300,0 0 5px #ff9300;opacity:1;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px);}","svg{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;}",".visx-heatmap-circle:hover,.visx-heatmap-rect:hover{stroke:white;stroke-width:1;}","@media (max-width:960px){.tilt{min-width:45%;}}","@media (max-width:600px){.tilt{min-width:100%;}#home{display:none;}}"]))},g=v;try{v.displayName="Meta",v.__docgenInfo={description:"",displayName:"Meta",props:{title:{defaultValue:{value:"visualization components"},description:"",name:"title",required:!1,type:{name:"string | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Meta.tsx#Meta"]={docgenInfo:v.__docgenInfo,name:"Meta",path:"src/components/Meta.tsx#Meta"})}catch(T){}var y=n("jvFD"),x=n.n(y),b=n("w+y6"),w=n.n(b),_=s.a.createElement,S=function(e){var t=e.id,n=e.href,r=e.children,o=e.className,s=e.external;return _("li",{className:"jsx-3198125156 Item"},s?_("a",{id:t,href:n,target:"_blank",rel:"noopener noreferrer",className:"jsx-3198125156 "+(o||"")},r):_(x.a,{href:n},_("a",{id:t,className:"jsx-3198125156 "+(o||"")},r)),_(i.a,{id:"3198125156"},[".Item.jsx-3198125156 a.jsx-3198125156{display:inline-block;padding:10px;-webkit-text-decoration:none;text-decoration:none;color:#272727;font-weight:400;font-size:18px;}",".Item.jsx-3198125156 .github.jsx-3198125156{font-weight:600;color:#fc2e1c;}","@media (max-width:600px){.Item.jsx-3198125156{display:block;float:left;}.Item.jsx-3198125156 .github.jsx-3198125156{margin-top:0;}}"]))},k=S;try{S.displayName="NavItem",S.__docgenInfo={description:"",displayName:"NavItem",props:{href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},external:{defaultValue:null,description:"",name:"external",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/NavItem.tsx#NavItem"]={docgenInfo:S.__docgenInfo,name:"NavItem",path:"src/components/NavItem.tsx#NavItem"})}catch(T){}var j=s.a.createElement,O=function(){return j("svg",{viewBox:"0 0 1000 1000",role:"presentation","aria-hidden":"true",focusable:"false",style:{fill:"#000000"}},j("path",{d:"m499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"}))},C=s.a.createElement,R=function(){return C("div",{className:"jsx-2936125839 nav"},C("div",{className:"jsx-2936125839 nav-inner wrapper"},C(x.a,{href:"/"},C("div",{className:"jsx-2936125839 belo"},C(O,null))),C("ul",{className:"jsx-2936125839"},C(k,{id:"home",href:"/"},"Home"),C(k,{href:"/docs"},"Docs"),C(k,{href:"/gallery"},"Gallery")),C(w.a,{type:"stargazers",namespace:"airbnb",repo:"visx"})),C(i.a,{id:"2936125839"},[".belo.jsx-2936125839{width:32px;height:32px;margin:0 0.5rem;}",".nav-inner.jsx-2936125839{width:95vw;margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",".nav.jsx-2936125839{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding:0.5rem 1rem;font-size:16px;z-index:3;position:fixed;top:0;left:0;right:0;margin:0;background:#ffffff;}","ul.jsx-2936125839{list-style-type:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;padding:0;margin:0;color:white;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}",".x-logo.jsx-2936125839{width:36px;height:36px;margin-right:1rem;background-image:url('static/x-24.svg');}","@media (max-width:600px){.github-buttons.jsx-2936125839{display:none;}.Item.jsx-2936125839{float:left;}.nav.jsx-2936125839{padding:0;padding-right:1rem;}.nav-inner.jsx-2936125839{width:99vw;}}"]))},N=s.a.createElement,E=function(e){var t=e.children,n=e.title,r=e.className,o=e.wrapper,s=void 0===o||o;return N("div",{className:"jsx-1875719249 "+(c()("main",{wrapper:s},r)||"")},N(g,{title:n}),N("div",{className:"jsx-1875719249 nav-container"},N(R,null)),N("div",{className:"jsx-1875719249 page-content"},t),N(i.a,{id:"1875719249"},[".main.jsx-1875719249{width:95vw;margin:0 auto;overflow-x:hidden;}",".page-content.jsx-1875719249{margin:69px 0 40px;color:#161616;overflow-y:auto;overflow-x:hidden;-webkit-overflow-scrolling:touch;}",".nav-container.jsx-1875719249{background:#ffffff;}"]))};t.a=E;try{E.displayName="Page",E.__docgenInfo={description:"",displayName:"Page",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | boolean | undefined"}},wrapper:{defaultValue:{value:!0},description:"",name:"wrapper",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Page.tsx#Page"]={docgenInfo:E.__docgenInfo,name:"Page",path:"src/components/Page.tsx#Page"})}catch(T){}},O5Wi:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},O94r:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var s=i.apply(null,r);s&&e.push(s)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var a in r)n.call(r,a)&&r[a]&&e.push(a);else e.push(r.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()},TBv3:function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},TZT2:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var i=((r=n("ERkP"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=i},bOkD:function(e,t,n){var r=n("cHE3");e.exports=function(e){if(Array.isArray(e))return r(e)}},dq4L:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=s,t.useAmp=function(){return s(i.default.useContext(o.AmpStateContext))};var r,i=(r=n("ERkP"))&&r.__esModule?r:{default:r},o=n("TZT2");function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,i=void 0!==r&&r,o=e.hasQuery,s=void 0!==o&&o;return n||i&&s}},iKkk:function(e,t,n){"use strict";t.__esModule=!0,t.flush=function(){var e=o.cssRules();return o.flush(),e},t.default=void 0;var r,i=n("ERkP");var o=new(((r=n("icap"))&&r.__esModule?r:{default:r}).default),s=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).prevProps={},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.dynamic=function(e){return e.map((function(e){var t=e[0],n=e[1];return o.computeId(t,n)})).join(" ")};var i=r.prototype;return i.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},i.componentWillUnmount=function(){o.remove(this.props)},i.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&o.remove(this.prevProps),o.add(this.props),this.prevProps=this.props),null},r}(i.Component);t.default=s},"iN+R":function(e,t,n){var r=n("bOkD"),i=n("DSo7"),o=n("D7XE"),s=n("uYlf");e.exports=function(e){return r(e)||i(e)||o(e)||s()}},icap:function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var r=o(n("TBv3")),i=o(n("0iIO"));function o(e){return e&&e.__esModule?e:{default:e}}var s=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,o=t.optimizeForSpeed,s=void 0!==o&&o,a=t.isBrowser,c=void 0===a?"undefined"!==typeof window:a;this._sheet=r||new i.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),r&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),r=n.styleId,i=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var o=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=o,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,n){if(!n)return"jsx-"+t;var i=String(n),o=t+i;return e[o]||(e[o]="jsx-"+(0,r.default)(t+"-"+i)),e[o]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(n,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var i=n+r;return t[i]||(t[i]=r.replace(e,n)),t[i]}},t.getIdAndRules=function(e){var t=this,n=e.children,r=e.dynamic,i=e.id;if(r){var o=this.computeId(i,r);return{styleId:o,rules:Array.isArray(n)?n.map((function(e){return t.computeSelector(o,e)})):[this.computeSelector(o,n)]}}return{styleId:this.computeId(i),rules:Array.isArray(n)?n:[n]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=s},jvFD:function(e,t,n){e.exports=n("KeDb")},uYlf:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},vFaW:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.classNames=function(e){return Object.keys(e).filter((function(t){return e[t]})).join(" ")}},"w+y6":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=c(n("ERkP")),o=c(n("aWzz")),s=c(n("JI9i")),a=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n("vFaW"));function c(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function f(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):function(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var i=n[r],o=Object.getOwnPropertyDescriptor(t,i);o&&o.configurable&&void 0===e[i]&&Object.defineProperty(e,i,o)}}(e,t))}var p={stargazers:"Star",watchers:"Watch",forks:"Fork"},d={forks:"network"},m=function(e){function t(){var n,r;l(this,t);for(var i=arguments.length,o=Array(i),s=0;s<i;s++)o[s]=arguments[s];return n=r=u(this,e.call.apply(e,[this].concat(o))),r.state={count:null},u(r,n)}return f(t,e),t.prototype.componentDidMount=function(){var e=this;this.xhr=(0,s.default)(this.getRequestUrl(),(function(t){e.setCount(t)}))},t.prototype.componentWillUnmount=function(){this.xhr&&this.xhr.abort()},t.prototype.setCount=function(e){if(e){var t=e[this.props.type+"_count"];this.setState({count:t})}},t.prototype.getRequestUrl=function(){var e=this.props;return"//api.github.com/repos/"+e.namespace+"/"+e.repo},t.prototype.getRepoUrl=function(){var e=this.props;return"//github.com/"+e.namespace+"/"+e.repo+"/"},t.prototype.getCountUrl=function(){var e=this.props,t=e.namespace,n=e.repo,r=e.type;return"//github.com/"+t+"/"+n+"/"+(d[r]||r)+"/"},t.prototype.getCountStyle=function(){return null!==this.state.count?{display:"block"}:null},t.prototype.render=function(){var e=this.props,t=e.className,n=e.type,o=e.size,s=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["className","type","size"]);delete s.namespace,delete s.repo;var c,l,u,f=this.state.count,d=a.classNames((u=t,(l=t)in(c={"github-btn":!0,"github-btn-large":"large"===o})?Object.defineProperty(c,l,{value:u,enumerable:!0,configurable:!0,writable:!0}):c[l]=u,c));return i.default.createElement("span",r({},s,{className:d}),i.default.createElement("a",{className:"gh-btn",href:this.getRepoUrl(),target:"_blank"},i.default.createElement("span",{className:"gh-ico","aria-hidden":"true"}),i.default.createElement("span",{className:"gh-text"},p[n])),i.default.createElement("a",{className:"gh-count",target:"_blank",href:this.getCountUrl(),style:this.getCountStyle()},f))},t}(i.default.Component);m.displayName="GitHubButton",m.propTypes={className:o.default.string,type:o.default.oneOf(["stargazers","watchers","forks"]).isRequired,namespace:o.default.string.isRequired,repo:o.default.string.isRequired,size:o.default.oneOf(["large"])},t.default=m,e.exports=t.default},yFcC:function(e,t,n){e.exports=n("iKkk")},ysqo:function(e,t,n){"use strict";n("O5Wi");t.__esModule=!0,t.defaultHead=u,t.default=void 0;var r,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n("ERkP")),o=(r=n("J9Yr"))&&r.__esModule?r:{default:r},s=n("TZT2"),a=n("op+c"),c=n("dq4L");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function u(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function f(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var p=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(f,[]).reverse().concat(u(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(i){var o=!0;if(i.key&&"number"!==typeof i.key&&i.key.indexOf("$")>0){var s=i.key.slice(i.key.indexOf("$")+1);e.has(s)?o=!1:e.add(s)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(var a=0,c=p.length;a<c;a++){var l=p[a];if(i.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?o=!1:n.add(l);else{var u=i.props[l],f=r[l]||new Set;f.has(u)?o=!1:(f.add(u),r[l]=f)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return i.default.cloneElement(e,{key:n})}))}function m(e){var t=e.children,n=(0,i.useContext)(s.AmpStateContext),r=(0,i.useContext)(a.HeadManagerContext);return i.default.createElement(o.default,{reduceComponentsToState:d,headManager:r,inAmpMode:(0,c.isInAmpMode)(n)},t)}m.rewind=function(){};var h=m;t.default=h}}]);