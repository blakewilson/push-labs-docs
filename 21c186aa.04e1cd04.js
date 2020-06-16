(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{111:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return p})),o.d(t,"metadata",(function(){return i})),o.d(t,"rightToc",(function(){return s})),o.d(t,"default",(function(){return d}));var r=o(2),n=o(6),a=(o(0),o(151)),p={id:"adding-metabox-custom-post-types",title:"Adding the Metabox to Custom Post Types",sidebar_label:"Adding Metabox to Custom post Types"},i={id:"video-background-pro/filters/adding-metabox-custom-post-types",title:"Adding the Metabox to Custom Post Types",description:"To add the Video Background Pro metabox to a custom post type, add the function below to the bottom of your functions.php file. In the $post_types array, add your desired custom post types.",source:"@site/docs/video-background-pro/filters/adding-the-metabox-to-custom-post-types.md",permalink:"/video-background-pro/filters/adding-metabox-custom-post-types",editUrl:"https://github.com/pushlabsco/push-labs-docs/edit/master/docs/video-background-pro/filters/adding-the-metabox-to-custom-post-types.md",lastUpdatedAt:1592288204,sidebar_label:"Adding Metabox to Custom post Types",sidebar:"video-background-pro-docs",previous:{title:"Add Dependencies for the Frontend Scripts",permalink:"/video-background-pro/filters/add-deps-for-frontend-scripts"},next:{title:"Change the Priority of the Metabox",permalink:"/video-background-pro/filters/change-metabox-priority"}},s=[],c={rightToc:s};function d(e){var t=e.components,o=Object(n.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},c,o,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"To add the Video Background Pro metabox to a custom post type, add the function below to the bottom of your ",Object(a.b)("inlineCode",{parentName:"p"},"functions.php")," file. In the ",Object(a.b)("inlineCode",{parentName:"p"},"$post_types")," array, add your desired custom post types."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"<?php\n/**\n * Define Video Background Pros post types\n *\n * @since 1.1.2\n * @author Push Labs\n * @param array $post_types\n * @return array Array of post types Video Background Pro should use\n */\nfunction themeprefix_vidbgpro_post_types( $post_types ) {\n  /**\n   * list the post types you would like Video Background Pro\n   * to use in the form of an array\n   */\n  $post_types = array( 'post', 'page' );\n  return $post_types;\n}\nadd_filter( 'vidbgpro_post_types', 'themeprefix_vidbgpro_post_types' );\n")))}d.isMDXComponent=!0},151:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return f}));var r=o(0),n=o.n(r);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function p(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?p(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=n.a.createContext({}),d=function(e){var t=n.a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=d(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(o),b=r,f=u["".concat(p,".").concat(b)]||u[b]||l[b]||a;return o?n.a.createElement(f,i(i({ref:t},c),{},{components:o})):n.a.createElement(f,i({ref:t},c))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,p=new Array(a);p[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var c=2;c<a;c++)p[c]=o[c];return n.a.createElement.apply(null,p)}return n.a.createElement.apply(null,o)}b.displayName="MDXCreateElement"}}]);