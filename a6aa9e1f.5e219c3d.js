(window.webpackJsonp=window.webpackJsonp||[]).push([[24,8],{110:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(22),l=t(122),i=t(207),s=t(119);var m=function(e){const{metadata:a}=e,{previousPage:t,nextPage:n}=a;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(s.a,{className:"pagination-nav__link",to:t},r.a.createElement("div",{className:"pagination-nav__label"},"\xab Newer Entries"))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(s.a,{className:"pagination-nav__link",to:n},r.a.createElement("div",{className:"pagination-nav__label"},"Older Entries \xbb"))))},o=t(170);a.default=function(e){const{metadata:a,items:t,sidebar:n}=e,{siteConfig:{title:s}}=Object(c.default)(),{blogDescription:d,blogTitle:u,permalink:p}=a,E="/"===p?s:u;return r.a.createElement(l.a,{title:E,description:d,wrapperClassName:"blog-wrapper"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(o.a,{sidebar:n})),r.a.createElement("main",{className:"col col--8"},t.map((({content:e})=>r.a.createElement(i.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:e.metadata.truncated},r.a.createElement(e,null)))),r.a.createElement(m,{metadata:a})))))}},122:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(114),l=t(139),i=t(140),s=t(158),m=t(143),o=t(157),d=t(3),u=t(24),p=t(22),E=t(120),h=t(144),g=t(113);function b(e){const{siteConfig:a,i18n:{currentLocale:t}}=Object(p.default)(),{favicon:n,themeConfig:{image:c,metadatas:l},url:i}=a,{title:s,description:m,image:o,keywords:b,permalink:f,searchMetadatas:v}=e,_=Object(g.useTitleFormatter)(s),w=o||c,j=Object(E.a)(w,{absolute:!0}),N=Object(E.a)(n),k=t.split("-")[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null,r.a.createElement("html",{lang:k}),_&&r.a.createElement("title",null,_),_&&r.a.createElement("meta",{property:"og:title",content:_}),n&&r.a.createElement("link",{rel:"shortcut icon",href:N}),m&&r.a.createElement("meta",{name:"description",content:m}),m&&r.a.createElement("meta",{property:"og:description",content:m}),b&&b.length&&r.a.createElement("meta",{name:"keywords",content:b.join(",")}),w&&r.a.createElement("meta",{property:"og:image",content:j}),w&&r.a.createElement("meta",{name:"twitter:image",content:j}),w&&r.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${_}`}),f&&r.a.createElement("meta",{property:"og:url",content:i+f}),f&&r.a.createElement("link",{rel:"canonical",href:i+f}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700,800,900&display=swap",rel:"stylesheet"})),r.a.createElement(h.a,Object(d.a)({tag:g.DEFAULT_SEARCH_TAG,locale:t},v)),r.a.createElement(u.a,null,l.map(((e,a)=>r.a.createElement("meta",Object(d.a)({key:`metadata_${a}`},e))))))}var f=t(145);t(55);a.a=function(e){const{children:a,noFooter:t,wrapperClassName:n}=e;return Object(f.a)(),r.a.createElement(o.a,null,r.a.createElement(b,e),r.a.createElement(l.a,null),r.a.createElement(i.a,null),r.a.createElement(s.a,null),r.a.createElement("div",{className:Object(c.a)("main-wrapper",n)},a),!t&&r.a.createElement(m.a,null))}},141:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(132),l=t.n(c),i=t(117),s=t(22);a.a=e=>{const a=Object(n.useRef)(!1),c=Object(n.useRef)(null),m=Object(i.useHistory)(),{siteConfig:o={}}=Object(s.default)(),{baseUrl:d}=o,u=()=>{a.current||(Promise.all([fetch(`${d}search-doc.json`).then((e=>e.json())),fetch(`${d}lunr-index.json`).then((e=>e.json())),Promise.all([t.e(42),t.e(46)]).then(t.bind(null,159)),t.e(27).then(t.t.bind(null,156,7))]).then((([e,a,{default:t}])=>{0!==e.length&&((e,a,t)=>{new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:(e,a,t)=>{const n=d+t.url;document.createElement("a").href=n,m.push(n)}})})(e,a,t)})),a.current=!0)},p=Object(n.useCallback)((a=>{c.current.contains(a.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:p,onKeyDown:p,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:u,onMouseOver:u,onFocus:p,onBlur:p,ref:c}))}}}]);