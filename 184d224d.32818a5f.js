(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{102:function(e,n,o){"use strict";o.r(n),o.d(n,"frontMatter",(function(){return i})),o.d(n,"metadata",(function(){return d})),o.d(n,"rightToc",(function(){return c})),o.d(n,"default",(function(){return s}));var r=o(2),t=o(6),a=(o(0),o(151)),i={id:"playing-random-video-background",title:"Playing a Random Video Background",sidebar_label:"Random Video Background"},d={id:"video-background-pro/examples/playing-random-video-background",title:"Playing a Random Video Background",description:"There are some instances where you may want to cycle through a list of videos to be randomly played on page load. This can be dome with a simple function. Paste this at the bottom of the theme's functions.php file:",source:"@site/docs/video-background-pro/examples/playing-a-random-video.md",permalink:"/video-background-pro/examples/playing-random-video-background",editUrl:"https://github.com/pushlabsco/push-labs-docs/edit/master/docs/video-background-pro/examples/playing-a-random-video.md",lastUpdatedAt:1592288204,sidebar_label:"Random Video Background",sidebar:"video-background-pro-docs",previous:{title:"Adding a Video Background to Every Page",permalink:"/video-background-pro/examples/add-video-background-to-every-page"},next:{title:"Using Methods",permalink:"/video-background-pro/using-methods"}},c=[],p={rightToc:c};function s(e){var n=e.components,o=Object(t.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,o,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"There are some instances where you may want to cycle through a list of videos to be randomly played on page load. This can be dome with a simple function. Paste this at the bottom of the theme's ",Object(a.b)("inlineCode",{parentName:"p"},"functions.php")," file:"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"/**\n * Select a random video from an array for the video background.\n *\n * @version 08092019\n * @author Push Labs\n * @link https://pushlabs.co\n */\nfunction theme_prefix_vidbg_random_video() {\n    // The page ID in which you want the video background shortcode to be rendered on.\n    $page_id = 4;\n\n    // If the page is not the ID specified above, do not render the rest of the code.\n    if (!is_page($page_id)) {\n        return;\n    }\n\n    // Create an array of video files. You will want to replace the values with your own URLs.\n    $videos = [\n      [\n          mp4 => '/video1.mp4',\n          webm => '/video1.webm',\n      ],\n      [\n          mp4 => '/video2.mp4',\n          webm => '/video2.webm',\n      ],\n      [\n          mp4 => '/video3.mp4',\n          webm => '/video3.webm',\n      ]\n    ];\n\n    // A random array selected from the above $videos array of arrays.\n    $get_random_video = array_rand($videos, 1);\n\n    // Add [vidbg] params as needed. Be sure to change the container to your desired container.\n    echo do_shortcode('[vidbg container=\".YOUR_CONTAINER_HERE\" mp4=\"' . $get_random_video[\"mp4\"] . '\" webm=\"' . $get_random_video[\"webm\"] . '\"]');\n}\nadd_action('wp_footer', 'theme_prefix_vidbg_random_video');\n")))}s.isMDXComponent=!0},151:function(e,n,o){"use strict";o.d(n,"a",(function(){return u})),o.d(n,"b",(function(){return b}));var r=o(0),t=o.n(r);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function i(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,r)}return o}function d(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?i(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function c(e,n){if(null==e)return{};var o,r,t=function(e,n){if(null==e)return{};var o,r,t={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var p=t.a.createContext({}),s=function(e){var n=t.a.useContext(p),o=n;return e&&(o="function"==typeof e?e(n):d(d({},n),e)),o},u=function(e){var n=s(e.components);return t.a.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.a.createElement(t.a.Fragment,{},n)}},m=t.a.forwardRef((function(e,n){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(o),m=r,b=u["".concat(i,".").concat(m)]||u[m]||l[m]||a;return o?t.a.createElement(b,d(d({ref:n},p),{},{components:o})):t.a.createElement(b,d({ref:n},p))}));function b(e,n){var o=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var d={};for(var c in n)hasOwnProperty.call(n,c)&&(d[c]=n[c]);d.originalType=e,d.mdxType="string"==typeof e?e:r,i[1]=d;for(var p=2;p<a;p++)i[p]=o[p];return t.a.createElement.apply(null,i)}return t.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"}}]);