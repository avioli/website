(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{133:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(138),c=t(143),i=t(137);var o=function(e){const{nextItem:a,prevItem:t}=e;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(i.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("div",{className:"pagination-nav__link--sublabel"},"Previous Post"),r.a.createElement("div",{className:"pagination-nav__link--label"},"\xab ",t.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&r.a.createElement(i.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("div",{className:"pagination-nav__link--sublabel"},"Next Post"),r.a.createElement("div",{className:"pagination-nav__link--label"},a.title," \xbb"))))};a.default=function(e){const{content:a}=e,{frontMatter:t,metadata:n}=a,{title:i,description:m,nextItem:s,prevItem:u,editUrl:p}=n;return r.a.createElement(l.a,{title:i,description:m},a&&r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement(c.a,{frontMatter:t,metadata:n,isBlogPostPage:!0},r.a.createElement(a,null)),r.a.createElement("div",null,p&&r.a.createElement("a",{href:p,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(s||u)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(o,{nextItem:s,prevItem:u}))))))}},134:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return v}));var n=t(0),r=t.n(n);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=r.a.createContext({}),s=function(e){var a=r.a.useContext(m),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=s(e.components);return r.a.createElement(m.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(t),d=n,v=u["".concat(c,".").concat(d)]||u[d]||p[d]||l;return t?r.a.createElement(v,i(i({ref:a},m),{},{components:t})):r.a.createElement(v,i({ref:a},m))}));function v(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,c=new Array(l);c[0]=d;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var m=2;m<l;m++)c[m]=t[m];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},140:function(e,a,t){"use strict";var n=t(2),r=t(0),l=t.n(r),c=t(137),i=t(139),o=t(136),m=t.n(o),s=t(135),u=(t(92),t(93)),p=t.n(u);var d=e=>function({id:a,...t}){const{siteConfig:{themeConfig:{navbar:{hideOnScroll:n=!1}={}}={}}={}}=Object(s.a)();return a?l.a.createElement(e,t,l.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:m()("anchor",{[p.a.enhancedAnchor]:!n}),id:a}),l.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+a,title:"Direct link to heading"},"#"),t.children):l.a.createElement(e,t)},v=t(94),g=t.n(v);a.a={code:e=>{const{children:a}=e;return"string"==typeof a?l.a.createElement(i.a,e):a},a:e=>/\.[^./]+$/.test(e.href)?l.a.createElement("a",e):l.a.createElement(c.a,e),pre:e=>l.a.createElement("div",Object(n.a)({className:g.a.mdxCodeBlock},e)),h1:d("h1"),h2:d("h2"),h3:d("h3"),h4:d("h4"),h5:d("h5"),h6:d("h6")}},143:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(136),c=t.n(l),i=t(134),o=t(137),m=t(140),s=t(95),u=t.n(s);const p=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){const{children:a,frontMatter:t,metadata:n,truncated:l,isBlogPostPage:s=!1}=e,{date:d,permalink:v,tags:g,readingTime:f}=n,{author:h,title:E}=t,b=t.author_url||t.authorURL,y=t.author_title||t.authorTitle,N=t.author_image_url||t.authorImageURL;return r.a.createElement("article",{className:s?void 0:"margin-bottom--xl"},(()=>{const e=s?"h1":"h2",a=d.substring(0,10).split("-"),t=a[0],n=p[parseInt(a[1],10)-1],l=parseInt(a[2],10);return r.a.createElement("header",null,r.a.createElement(e,{className:c()("margin-bottom--sm",u.a.blogPostTitle)},s?E:r.a.createElement(o.a,{to:v},E)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:d,className:u.a.blogPostDate},n," ",l,", ",t," ",f&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(f)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},N&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:b,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:N,alt:h})),r.a.createElement("div",{className:"avatar__intro"},h&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:b,target:"_blank",rel:"noreferrer noopener"},h)),r.a.createElement("small",{className:"avatar__subtitle"},y)))))})(),r.a.createElement("section",{className:"markdown"},r.a.createElement(i.a,{components:m.a},a)),(g.length>0||l)&&r.a.createElement("footer",{className:"row margin-vert--lg"},g.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),g.map(({label:e,permalink:a})=>r.a.createElement(o.a,{key:a,className:"margin-horiz--sm",to:a},e))),l&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(o.a,{to:n.permalink,"aria-label":"Read more about "+E},r.a.createElement("strong",null,"Read More")))))}}}]);