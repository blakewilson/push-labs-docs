(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),a=(n(0),n(151)),i={id:"using-methods",title:"Using Methods",sidebar_label:"Using Methods",description:"How to call methods in Video Background Pro"},c={id:"video-background-pro/using-methods",title:"Using Methods",description:"How to call methods in Video Background Pro",source:"@site/docs/video-background-pro/methods.md",permalink:"/video-background-pro/using-methods",editUrl:"https://github.com/pushlabsco/push-labs-docs/edit/master/docs/video-background-pro/methods.md",lastUpdatedAt:1592288204,sidebar_label:"Using Methods",sidebar:"video-background-pro-docs",previous:{title:"Playing a Random Video Background",permalink:"/video-background-pro/examples/playing-random-video-background"},next:{title:"Add Dependencies for the Frontend Scripts",permalink:"/video-background-pro/filters/add-deps-for-frontend-scripts"}},d=[],u={rightToc:d};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Methods allow you to execute certain actions on your video background instance. Current methods provide the ability to play, pause, mute, unmute, and resize a video background."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"// Be sure to use your own container!\nvar container = '.your-container'\n\n// Method to play a video background\njQuery(container).data('vidbgpro').playVidbg();\n\n// Method to pause a video background\njQuery(container).data('vidbgpro').pauseVidbg();\n\n// Method to mute a video background\njQuery(container).data('vidbgpro').muteVidbg();\n\n// Method to unmute a video background\njQuery(container).data('vidbgpro').unMuteVidbg();\n\n// Method to resize a video background\njQuery(container).data('vidbgpro').resizeVidbg();\n")),Object(a.b)("p",null,"It is important to make sure you call these methods after Video Background Pro has initialized."))}p.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return g}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),s=p(n),b=r,g=s["".concat(i,".").concat(b)]||s[b]||l[b]||a;return n?o.a.createElement(g,c(c({ref:t},u),{},{components:n})):o.a.createElement(g,c({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);