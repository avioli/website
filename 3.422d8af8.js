(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(146),l=a(142),o=a(135),s=a(141),i=a(149),u=a(148),d=a(147),m=a(2),h=a(136),f=a.n(h),b=a(137),v=()=>null,g=a(159),p=a.n(g),k=a(97),E=a.n(k);const _=()=>r.a.createElement("span",{className:f()(E.a.toggle,E.a.moon)}),O=()=>r.a.createElement("span",{className:f()(E.a.toggle,E.a.sun)});var y=function(e){const{isClient:t}=Object(o.a)();return r.a.createElement(p.a,Object(m.a)({disabled:!t,icons:{checked:r.a.createElement(_,null),unchecked:r.a.createElement(O,null)}},e))},j=a(151),C=a(152);var N=function(e){const[t,a]=Object(n.useState)(e);return Object(n.useEffect)(()=>{const e=()=>a(window.location.hash);return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),[t,a]},w=a(15),T=a.n(w);const S=()=>({scrollX:T.a.canUseDOM?window.pageXOffset:0,scrollY:T.a.canUseDOM?window.pageYOffset:0});var L=(e,t=[])=>{const[a,r]=Object(n.useState)(S()),c=()=>{const t=S();r(t),e&&e(t)};return Object(n.useEffect)(()=>(window.addEventListener("scroll",c),()=>window.removeEventListener("scroll",c,{passive:!0})),t),a};var M=e=>{const[t,a]=Object(n.useState)(!0),[r,c]=Object(n.useState)(!1),[l,o]=Object(n.useState)(0),[s,i]=Object(n.useState)(0),u=Object(n.useCallback)(e=>{null!==e&&i(e.getBoundingClientRect().height)},[]),d=Object(C.b)(),[m,h]=N(d.hash);return L(({scrollY:t})=>{if(!e)return;if(0===t&&a(!0),t<s)return;if(r)return c(!1),a(!1),void o(t);const n=document.documentElement.scrollHeight-s,i=window.innerHeight;l&&t>=l?a(!1):t+i<n&&a(!0),o(t)},[l,s]),Object(n.useEffect)(()=>{e&&(a(!0),h(d.hash))},[d]),Object(n.useEffect)(()=>{e&&m&&c(!0)},[m]),{navbarRef:u,isNavbarVisible:t}},D=a(153),x=a(154),I=a(98),P=a.n(I);function B({activeBasePath:e,to:t,href:a,label:n,activeClassName:c="navbar__link--active",...l}){const o=Object(s.a)(t),i=Object(s.a)(e);return r.a.createElement(b.a,Object(m.a)({},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{isNavLink:!0,activeClassName:c,to:o,...e?{isActive:(e,t)=>t.pathname.startsWith(i)}:null},l),n)}function X({items:e,position:t,className:a,...n}){const c=(e,t=!1)=>f()({"navbar__item navbar__link":!t,dropdown__link:t},e);return e?r.a.createElement("div",{className:f()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t})},r.a.createElement(B,Object(m.a)({className:c(a)},n,{onClick:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&e.target.parentNode.classList.toggle("dropdown--show")}}),n.label),r.a.createElement("ul",{className:"dropdown__menu"},e.map(({className:e,...t},a)=>r.a.createElement("li",{key:a},r.a.createElement(B,Object(m.a)({activeClassName:"dropdown__link--active",className:c(e,!0)},t)))))):r.a.createElement(B,Object(m.a)({className:c(a)},n))}function F({items:e,className:t,...a}){const n=(e,t=!1)=>f()("menu__link",{"menu__link--sublist":t},e);return e?r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(B,Object(m.a)({className:n(t,!0)},a),a.label),r.a.createElement("ul",{className:"menu__list"},e.map(({className:e,...t},c)=>r.a.createElement("li",{className:"menu__list-item",key:c},r.a.createElement(B,Object(m.a)({activeClassName:"menu__link--active",className:n(e)},t,{onClick:a.onClick})))))):r.a.createElement("li",{className:"menu__list-item"},r.a.createElement(B,Object(m.a)({className:n(t)},a)))}var G=function(){const{siteConfig:{themeConfig:{navbar:{title:e,links:t=[],hideOnScroll:a=!1}={},disableDarkMode:c=!1}},isClient:l}=Object(o.a)(),[s,i]=Object(n.useState)(!1),[u,d]=Object(n.useState)(!1),{isDarkTheme:h,setLightTheme:g,setDarkTheme:p}=Object(j.a)(),{navbarRef:k,isNavbarVisible:E}=M(a),{logoLink:_,logoLinkProps:O,logoImageUrl:C,logoAlt:N}=Object(x.a)();Object(D.a)(s);const w=Object(n.useCallback)(()=>{i(!0)},[i]),T=Object(n.useCallback)(()=>{i(!1)},[i]),S=Object(n.useCallback)(e=>e.target.checked?p():g(),[g,p]);return r.a.createElement("nav",{ref:k,className:f()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":s,[P.a.navbarHideable]:a,[P.a.navbarHidden]:!E})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=t&&0!==t.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:w,onKeyDown:w},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(b.a,Object(m.a)({className:"navbar__brand",to:_},O),null!=C&&r.a.createElement("img",{key:l,className:"navbar__logo",src:C,alt:N}),null!=e&&r.a.createElement("strong",{className:f()("navbar__title",{[P.a.hideLogoText]:u})},e)),t.filter(e=>"left"===e.position).map((e,t)=>r.a.createElement(X,Object(m.a)({},e,{key:t})))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},t.filter(e=>"right"===e.position).map((e,t)=>r.a.createElement(X,Object(m.a)({},e,{key:t}))),!c&&r.a.createElement(y,{className:P.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:h,onChange:S}),r.a.createElement(v,{handleSearchBarToggle:d,isSearchBarExpanded:u}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:T}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(b.a,Object(m.a)({className:"navbar__brand",onClick:T,to:_},O),null!=C&&r.a.createElement("img",{key:l,className:"navbar__logo",src:C,alt:N}),null!=e&&r.a.createElement("strong",{className:"navbar__title"},e)),!c&&s&&r.a.createElement(y,{"aria-label":"Dark mode toggle in sidebar",checked:h,onChange:S})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},t.map((e,t)=>r.a.createElement(F,Object(m.a)({},e,{onClick:T,key:t}))))))))},A=a(99),H=a.n(A);function U({to:e,href:t,label:a,...n}){const c=Object(s.a)(e);return r.a.createElement(b.a,Object(m.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:c},n),a)}const R=({url:e,alt:t})=>r.a.createElement("img",{className:"footer__logo",alt:t,src:e});var Y=function(){const e=Object(o.a)(),{siteConfig:t={}}=e,{themeConfig:a={}}=t,{footer:n}=a,{copyright:c,links:l=[],logo:i={}}=n||{},u=Object(s.a)(i.src);return n?r.a.createElement("footer",{className:f()("footer",{"footer--dark":"dark"===n.style})},r.a.createElement("div",{className:"container"},l&&l.length>0&&r.a.createElement("div",{className:"row footer__links"},l.map((e,t)=>r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(U,e)))):null))),(i||c)&&r.a.createElement("div",{className:"text--center"},i&&i.src&&r.a.createElement("div",{className:"margin-bottom--sm"},i.href?r.a.createElement("a",{href:i.href,target:"_blank",rel:"noopener noreferrer",className:H.a.footerLogoLink},r.a.createElement(R,{alt:i.alt,url:u})):r.a.createElement(R,{alt:i.alt,url:u})),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:c}})))):null};a(100);t.a=function(e){const{siteConfig:t={}}=Object(o.a)(),{favicon:a,title:n,themeConfig:{image:m},url:h}=t,{children:f,title:b,noFooter:v,description:g,image:p,keywords:k,permalink:E,version:_}=e,O=b?`${b} | ${n}`:n,y=p||m;let j=h+Object(s.a)(y);Object(l.a)(y)||(j=y);const C=Object(s.a)(a);return r.a.createElement(i.a,null,r.a.createElement(u.a,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),O&&r.a.createElement("title",null,O),O&&r.a.createElement("meta",{property:"og:title",content:O}),a&&r.a.createElement("link",{rel:"shortcut icon",href:C}),g&&r.a.createElement("meta",{name:"description",content:g}),g&&r.a.createElement("meta",{property:"og:description",content:g}),_&&r.a.createElement("meta",{name:"docsearch:version",content:_}),k&&k.length&&r.a.createElement("meta",{name:"keywords",content:k.join(",")}),y&&r.a.createElement("meta",{property:"og:image",content:j}),y&&r.a.createElement("meta",{property:"twitter:image",content:j}),y&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+O}),E&&r.a.createElement("meta",{property:"og:url",content:h+E}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(d.a,null),r.a.createElement(G,null),r.a.createElement("div",{className:"main-wrapper"},f),!v&&r.a.createElement(Y,null)))}},141:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(135);function r(e){const{siteConfig:t}=Object(n.a)(),{baseUrl:a="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},145:function(e,t,a){"use strict";var n=a(0);const r=a.n(n).a.createContext({isDarkTheme:!1,setLightTheme:()=>{},setDarkTheme:()=>{}});t.a=r},147:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(135),l=a(96),o=a.n(l);t.a=function(){const{siteConfig:{themeConfig:{announcementBar:e={}}}={}}=Object(c.a)(),{id:t,content:a,backgroundColor:l,textColor:s}=e,[i,u]=Object(n.useState)(!0);return Object(n.useEffect)(()=>{const e=localStorage.getItem("docusaurus.announcement.id"),a=t!==e;localStorage.setItem("docusaurus.announcement.id",t),a&&localStorage.setItem("docusaurus.announcement.dismiss",!1),(a||"false"===localStorage.getItem("docusaurus.announcement.dismiss"))&&u(!1)},[]),!a||i?null:r.a.createElement("div",{className:o.a.announcementBar,style:{backgroundColor:l,color:s},role:"banner"},r.a.createElement("div",{className:o.a.announcementBarContent,dangerouslySetInnerHTML:{__html:a}}),r.a.createElement("button",{type:"button",className:o.a.announcementBarClose,onClick:()=>{localStorage.setItem("docusaurus.announcement.dismiss",!0),u(!0)},"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")))}},148:function(e,t,a){"use strict";var n=a(0),r=a.n(n);var c=()=>{const[e,t]=Object(n.useState)({}),a=Object(n.useCallback)((e,t)=>{try{localStorage.setItem("docusaurus.tab."+e,t)}catch(a){console.error(a)}},[]);return Object(n.useEffect)(()=>{try{const e={};for(let t=0;t<localStorage.length;t+=1){const a=localStorage.key(t);if(a.startsWith("docusaurus.tab.")){e[a.substring("docusaurus.tab.".length)]=localStorage.getItem(a)}}t(e)}catch(e){console.error(e)}},[]),{tabGroupChoices:e,setTabGroupChoices:(e,n)=>{t(t=>({...t,[e]:n})),a(e,n)}}};var l=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{}});t.a=function(e){const{tabGroupChoices:t,setTabGroupChoices:a}=c();return r.a.createElement(l.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:a}},e.children)}},149:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(135);const l="",o="dark";var s=()=>{const{siteConfig:{themeConfig:{disableDarkMode:e}}={}}=Object(c.a)(),[t,a]=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):l),r=Object(n.useCallback)(e=>{try{localStorage.setItem("theme",e)}catch(t){console.error(t)}},[a]),s=Object(n.useCallback)(()=>{a(l),r(l)},[]),i=Object(n.useCallback)(()=>{a(o),r(o)},[]);return Object(n.useEffect)(()=>{document.documentElement.setAttribute("data-theme",t)},[t]),Object(n.useEffect)(()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&a(e)}catch(t){console.error(t)}},[a]),Object(n.useEffect)(()=>{e||window.matchMedia("(prefers-color-scheme: dark)").addListener(({matches:e})=>{a(e?o:l)})},[]),{isDarkTheme:t===o,setLightTheme:s,setDarkTheme:i}},i=a(145);t.a=function(e){const{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}=s();return r.a.createElement(i.a.Provider,{value:{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}},e.children)}},151:function(e,t,a){"use strict";var n=a(0),r=a(145);t.a=function(){return Object(n.useContext)(r.a)}},152:function(e,t,a){"use strict";var n=a(19);a.d(t,"a",(function(){return n.d})),a.d(t,"b",(function(){return n.e}))},153:function(e,t,a){"use strict";var n=a(0);t.a=function(e=!0){Object(n.useEffect)(()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"}),[e])}},154:function(e,t,a){"use strict";var n=a(135),r=a(151),c=a(141),l=a(142);t.a=()=>{const{siteConfig:{baseUrl:e,themeConfig:{navbar:{logo:t={}}={}}}={}}=Object(n.a)(),{isDarkTheme:a}=Object(r.a)(),o=t.href||e;let s={};t.target?s={target:t.target}:Object(l.a)(o)||(s={rel:"noopener noreferrer",target:"_blank"});const i=t.srcDark&&a?t.srcDark:t.src;return{logoLink:o,logoLinkProps:s,logoImageUrl:Object(c.a)(i),logoAlt:t.alt}}},159:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),c=a(0),l=m(c),o=m(a(136)),s=m(a(8)),i=m(a(160)),u=m(a(161)),d=a(162);function m(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),c=(0,o.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return l.default.createElement("div",{className:c,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},l.default.createElement("div",{className:"react-toggle-track"},l.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),l.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),l.default.createElement("div",{className:"react-toggle-thumb"}),l.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(c.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:l.default.createElement(i.default,null),unchecked:l.default.createElement(u.default,null)}},h.propTypes={checked:s.default.bool,disabled:s.default.bool,defaultChecked:s.default.bool,onChange:s.default.func,onFocus:s.default.func,onBlur:s.default.func,className:s.default.string,name:s.default.string,value:s.default.string,id:s.default.string,"aria-labelledby":s.default.string,"aria-label":s.default.string,icons:s.default.oneOfType([s.default.bool,s.default.shape({checked:s.default.node,unchecked:s.default.node})])}},160:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},c.default.createElement("title",null,"switch-check"),c.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},161:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),c=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return c.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},c.default.createElement("title",null,"switch-x"),c.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},162:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}}}]);