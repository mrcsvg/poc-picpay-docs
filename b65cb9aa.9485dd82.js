(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{104:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return d}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(a),m=n,d=l["".concat(c,".").concat(m)]||l[m]||b[m]||r;return a?o.a.createElement(d,i(i({ref:t},p),{},{components:a})):o.a.createElement(d,i({ref:t},p))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<r;p++)c[p]=a[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},91:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a(3),o=a(7),r=(a(0),a(104)),c={id:"magento",title:"Magento"},i={unversionedId:"checkout/plugins/magento",id:"checkout/plugins/magento",isDocsHomePage:!1,title:"Magento",description:"Introdu\xe7\xe3o",source:"@site/docs\\checkout\\plugins\\magento.md",slug:"/checkout/plugins/magento",permalink:"/poc-picpay-docs/checkout/plugins/magento",editUrl:"https://github.com/mrcsvg/poc-picpay-docs/docs/checkout/plugins/magento.md",version:"current",sidebar:"docs",previous:{title:"VTEX",permalink:"/poc-picpay-docs/checkout/plugins/vtex"},next:{title:"API Reference",permalink:"/poc-picpay-docs/checkout/resources/api-reference"}},s=[{value:"Introdu\xe7\xe3o",id:"introdu\xe7\xe3o",children:[]},{value:"Antes de come\xe7ar",id:"antes-de-come\xe7ar",children:[]},{value:"Como utilizar",id:"como-utilizar",children:[{value:"Acessar a p\xe1gina oficial dos plugins do GitHub",id:"acessar-a-p\xe1gina-oficial-dos-plugins-do-github",children:[]},{value:"Instala\xe7\xe3o para Magento 1",id:"instala\xe7\xe3o-para-magento-1",children:[]},{value:"Instala\xe7\xe3o para Magento 2",id:"instala\xe7\xe3o-para-magento-2",children:[]},{value:"Configurando suas chaves dentro dos Plugins",id:"configurando-suas-chaves-dentro-dos-plugins",children:[]}]},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",children:[]},{value:"Obtendo ajuda",id:"obtendo-ajuda",children:[]}],p={toc:s};function u(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"introdu\xe7\xe3o"},"Introdu\xe7\xe3o"),Object(r.b)("p",null,"Neste guia vamos descrever o passo-a-passo para que voc\xea possa utilizar PicPay dentro do seu e-commerce com Magento 1 ou 2."),Object(r.b)("h2",{id:"antes-de-come\xe7ar"},"Antes de come\xe7ar"),Object(r.b)("p",null,"Antes de iniciar sua integra\xe7\xe3o, voc\xea deve possuir credenciais v\xe1lidas. Voc\xea pode conferir como obter suas credenciais ",Object(r.b)("a",{parentName:"p",href:"/docs/checkout/intro/getting-started#antes-de-come%C3%A7ar"},"neste artigo"),"."),Object(r.b)("h2",{id:"como-utilizar"},"Como utilizar"),Object(r.b)("h3",{id:"acessar-a-p\xe1gina-oficial-dos-plugins-do-github"},"Acessar a p\xe1gina oficial dos plugins do GitHub"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Link para Magento 1: ",Object(r.b)("a",{parentName:"li",href:"https://github.com/PicPay/magento1"},"https://github.com/PicPay/magento1")),Object(r.b)("li",{parentName:"ul"},"Link para Magento 2: ",Object(r.b)("a",{parentName:"li",href:"https://github.com/PicPay/magento2"},"https://github.com/PicPay/magento2"))),Object(r.b)("h3",{id:"instala\xe7\xe3o-para-magento-1"},"Instala\xe7\xe3o para Magento 1"),Object(r.b)("p",null,"Para configurar o PicPay como forma de pagamento no Magento 1 disponibilizamos duas op\xe7\xf5es:"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"CDN"),Object(r.b)("br",{parentName:"p"}),"\n","Efetue o download de nosso plugin atrav\xe9s de nosso CDN e copie os arquivos para seu ambiente: ",Object(r.b)("a",{parentName:"p",href:"https://cdn.picpay.com/ecommerce/Picpay_Payment-1.0.2.tgz"},"https://cdn.picpay.com/ecommerce/Picpay_Payment-1.0.2.tgz")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Composer"),Object(r.b)("br",{parentName:"p"}),"\n","Efetue a instala\xe7\xe3o utilizando Composer."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"composer require picpay/magento1\n")),Object(r.b)("h3",{id:"instala\xe7\xe3o-para-magento-2"},"Instala\xe7\xe3o para Magento 2"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Composer"),Object(r.b)("br",{parentName:"p"}),"\n","Efetue a instala\xe7\xe3o utilizando Composer."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"Passo 1"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"composer require picpay/magento2\n")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"Passo 2"))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"php bin/magento setup:upgrade\n")),Object(r.b)("h3",{id:"configurando-suas-chaves-dentro-dos-plugins"},"Configurando suas chaves dentro dos Plugins"),Object(r.b)("p",null,"Em breve."),Object(r.b)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/docs/checkout/guides/order-status"},"Entenda os poss\xedveis status de um pagamento"),";"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/docs/checkout/guides/cancel-order"},"Entenda como solicitar um cancelamento total"),";"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/docs/checkout/guides/notifications"},"Entenda um pouco mais sobre as notifica\xe7\xf5es que o PicPay envia"),";")),Object(r.b)("h2",{id:"obtendo-ajuda"},"Obtendo ajuda"),Object(r.b)("p",null,"Esperamos ter ajudado com este artigo! Caso tenha restado alguma d\xfavida, voc\xea pode consultar o nosso FAQ ou entrar em contato atrav\xe9s do e-mail ",Object(r.b)("a",{parentName:"p",href:"mailto:relacionamento-empresas@picpay.com"},"relacionamento-empresas@picpay.com")),Object(r.b)("p",null,"Adicionalmente, voc\xea tamb\xe9m pode abrir um issue em nossos reposit\xf3rios de ",Object(r.b)("a",{parentName:"p",href:"https://github.com/PicPay/magento1/issues"},"Magento 1")," ou ",Object(r.b)("a",{parentName:"p",href:"https://github.com/PicPay/magento2/issues"},"Magento 2"),"."))}u.isMDXComponent=!0}}]);