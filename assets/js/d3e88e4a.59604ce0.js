"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13477],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),f=i,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},79215:(e,t,r)=>{r.d(t,{Z:()=>j});var n=r(67294),i=r(86010),o=r(22093),a=r(11128),c=r(55602),l=r(14699);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u({href:e,children:t}){return n.createElement(a.Z,{href:e,className:(0,i.Z)("card padding--lg",s.cardContainer)},t)}function p({href:e,icon:t,title:r,description:o}){return n.createElement(u,{href:e},n.createElement("h2",{className:(0,i.Z)("text--truncate",s.cardTitle),title:r},t," ",r),o&&n.createElement("p",{className:(0,i.Z)("text--truncate",s.cardDescription),title:o},o))}function d({item:e}){var t;const r=(0,o.Wl)(e);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!=(t=e.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function f({item:e}){var t,r;const i=(0,c.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(null!=(t=e.docId)?t:void 0);return n.createElement(p,{href:e.href,icon:i,title:e.label,description:null!=(r=e.description)?r:null==a?void 0:a.description})}function m({item:e}){switch(e.type){case"link":return n.createElement(f,{item:e});case"category":return n.createElement(d,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var y=Object.defineProperty,g=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,v=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&h(e,r,t[r]);if(g)for(var r of g(t))O.call(t,r)&&h(e,r,t[r]);return e};function w({className:e}){const t=(0,o.jA)();return n.createElement(j,{items:t.items,className:e})}function j(e){const{items:t,className:r}=e;if(!t)return n.createElement(w,v({},e));const a=(0,o.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(m,{item:e})))))}},1899:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>O,contentTitle:()=>g,default:()=>j,frontMatter:()=>y,metadata:()=>b,toc:()=>h});var n=r(3905),i=r(79215),o=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&p(e,r,t[r]);return e},f=(e,t)=>a(e,c(t)),m=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const y={},g="Setup Guides",b={unversionedId:"setup-guides",id:"setup-guides",title:"Setup Guides",description:"The setup guides walk you through setting up, configuring, and tuning a Tenzir",source:"@site/docs/setup-guides.md",sourceDirName:".",slug:"/setup-guides",permalink:"/next/setup-guides",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/setup-guides.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Get Started",permalink:"/next/get-started"},next:{title:"Set up an account",permalink:"/next/setup-guides/set-up-an-account"}},O={},h=[],v={toc:h},w="wrapper";function j(e){var t=e,{components:r}=t,o=m(t,["components"]);return(0,n.kt)(w,f(d(d({},v),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"setup-guides"}),"Setup Guides"),(0,n.kt)("p",null,"The setup guides walk you through setting up, configuring, and tuning a Tenzir\ndeployment."),(0,n.kt)(i.Z,{mdxType:"DocCardList"}))}j.isMDXComponent=!0}}]);