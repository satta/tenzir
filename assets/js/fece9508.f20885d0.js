"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2840],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=o,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||i;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},79215:(e,t,r)=>{r.d(t,{Z:()=>j});var n=r(67294),o=r(86010),i=r(22093),a=r(11128),c=r(55602),l=r(14699);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p({href:e,children:t}){return n.createElement(a.Z,{href:e,className:(0,o.Z)("card padding--lg",s.cardContainer)},t)}function u({href:e,icon:t,title:r,description:i}){return n.createElement(p,{href:e},n.createElement("h2",{className:(0,o.Z)("text--truncate",s.cardTitle),title:r},t," ",r),i&&n.createElement("p",{className:(0,o.Z)("text--truncate",s.cardDescription),title:i},i))}function f({item:e}){var t;const r=(0,i.Wl)(e);return r?n.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!=(t=e.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function m({item:e}){var t,r;const o=(0,c.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(null!=(t=e.docId)?t:void 0);return n.createElement(u,{href:e.href,icon:o,title:e.label,description:null!=(r=e.description)?r:null==a?void 0:a.description})}function d({item:e}){switch(e.type){case"link":return n.createElement(m,{item:e});case"category":return n.createElement(f,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var y=Object.defineProperty,g=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,O=(e,t,r)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,v=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&O(e,r,t[r]);if(g)for(var r of g(t))h.call(t,r)&&O(e,r,t[r]);return e};function w({className:e}){const t=(0,i.jA)();return n.createElement(j,{items:t.items,className:e})}function j(e){const{items:t,className:r}=e;if(!t)return n.createElement(w,v({},e));const a=(0,i.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(d,{item:e})))))}},61790:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>g,default:()=>j,frontMatter:()=>y,metadata:()=>b,toc:()=>O});var n=r(3905),o=r(79215),i=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&u(e,r,t[r]);return e},m=(e,t)=>a(e,c(t)),d=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const y={},g="Integrations",b={unversionedId:"integrations",id:"integrations",title:"Integrations",description:"An integration is a set of example pipelines to interface with an external",source:"@site/docs/integrations.md",sourceDirName:".",slug:"/integrations",permalink:"/next/integrations",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/integrations.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Enrich with Threat Intel",permalink:"/next/user-guides/enrich-with-threat-intel/"},next:{title:"Graylog",permalink:"/next/integrations/graylog"}},h={},O=[],v={toc:O},w="wrapper";function j(e){var t=e,{components:r}=t,i=d(t,["components"]);return(0,n.kt)(w,m(f(f({},v),i),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",f({},{id:"integrations"}),"Integrations"),(0,n.kt)("p",null,"An ",(0,n.kt)("em",{parentName:"p"},"integration")," is a set of example pipelines to interface with an external\nproduct. The objective of most integrations is to establish dataflow from and/or\nto Tenzir using pipelines to implement common use cases."),(0,n.kt)("p",null,"Please read our ",(0,n.kt)("a",f({parentName:"p"},{href:"/next/faqs#do-you-have-an-integration-for-x"}),"FAQ entry")," on how to\nproceed if you cannot find the integration that you are looking for."),(0,n.kt)(o.Z,{mdxType:"DocCardList"}))}j.isMDXComponent=!0}}]);