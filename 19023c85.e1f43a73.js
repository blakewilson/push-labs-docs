(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),i=(n(0),n(155)),a={id:"activation-issues",title:"Fixing Activation Issues",sidebar_label:"Activation"},c={id:"video-background-pro/troubleshooting/activation-issues",title:"Fixing Activation Issues",description:"It is possible for the activation process to get stuck in limbo if the server connection times out or if the connection is interrupted.",source:"@site/docs/video-background-pro/troubleshooting/activation-issues.md",permalink:"/video-background-pro/troubleshooting/activation-issues",editUrl:"https://github.com/pushlabsco/push-labs-docs/edit/master/docs/video-background-pro/troubleshooting/activation-issues.md",lastUpdatedAt:1613154773,sidebar_label:"Activation",sidebar:"video-background-pro-docs",previous:{title:"Using SiteOrigin Page Builder to Create a Video Background",permalink:"/video-background-pro/using-siteorigin"},next:{title:"Auto Playback with Audio",permalink:"/video-background-pro/troubleshooting/auto-playback-with-audio-issues"}},s=[],u={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"It is possible for the activation process to get stuck in limbo if the server connection times out or if the connection is interrupted."),Object(i.b)("p",null,"If this happens, there are a few steps you can take to revert the activation, and try again. Start with the following steps:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Deactivate Video Background Pro under ",Object(i.b)("inlineCode",{parentName:"li"},"WordPress Admin > Plugins")),Object(i.b)("li",{parentName:"ol"},"Go to ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://pushlabs.co/my-account/my-api-keys/"}),"your API Keys")," and remove any keys for the domain you are trying to activate"),Object(i.b)("li",{parentName:"ol"},"Reactivate Video Background Pro under ",Object(i.b)("inlineCode",{parentName:"li"},"WordPress Admin > Plugins")),Object(i.b)("li",{parentName:"ol"},"Enter your license key and email found on the ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://pushlabs.co/my-account/my-api-keys/"}),"API Keys page"))))}l.isMDXComponent=!0},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,f=p["".concat(a,".").concat(d)]||p[d]||b[d]||i;return n?o.a.createElement(f,c(c({ref:t},u),{},{components:n})):o.a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);