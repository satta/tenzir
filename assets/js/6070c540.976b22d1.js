"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11164],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||i;return r?n.createElement(d,c(c({ref:t},u),{},{components:r})):n.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,c=new Array(i);c[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:o,c[1]=a;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},79215:(e,t,r)=>{r.d(t,{Z:()=>j});var n=r(67294),o=r(86010),i=r(22093),c=r(11128),a=r(55602),s=r(14699);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u({href:e,children:t}){return n.createElement(c.Z,{href:e,className:(0,o.Z)("card padding--lg",l.cardContainer)},t)}function p({href:e,icon:t,title:r,description:i}){return n.createElement(u,{href:e},n.createElement("h2",{className:(0,o.Z)("text--truncate",l.cardTitle),title:r},t," ",r),i&&n.createElement("p",{className:(0,o.Z)("text--truncate",l.cardDescription),title:i},i))}function m({item:e}){var t;const r=(0,i.Wl)(e);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!=(t=e.description)?t:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function f({item:e}){var t,r;const o=(0,a.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,i.xz)(null!=(t=e.docId)?t:void 0);return n.createElement(p,{href:e.href,icon:o,title:e.label,description:null!=(r=e.description)?r:null==c?void 0:c.description})}function d({item:e}){switch(e.type){case"link":return n.createElement(f,{item:e});case"category":return n.createElement(m,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var b=Object.defineProperty,y=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,O=(e,t)=>{for(var r in t||(t={}))v.call(t,r)&&g(e,r,t[r]);if(y)for(var r of y(t))h.call(t,r)&&g(e,r,t[r]);return e};function w({className:e}){const t=(0,i.jA)();return n.createElement(j,{items:t.items,className:e})}function j(e){const{items:t,className:r}=e;if(!t)return n.createElement(w,O({},e));const c=(0,i.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(d,{item:e})))))}},29777:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>y,default:()=>j,frontMatter:()=>b,metadata:()=>v,toc:()=>g});var n=r(3905),o=r(79215),i=Object.defineProperty,c=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&p(e,r,t[r]);if(s)for(var r of s(t))u.call(t,r)&&p(e,r,t[r]);return e},f=(e,t)=>c(e,a(t)),d=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const b={},y="Contribute",v={unversionedId:"contribute",id:"version-Tenzir v4.9/contribute",title:"Contribute",description:"This section explains how to contribute to the Tenzir project. As an open-source",source:"@site/versioned_docs/version-Tenzir v4.9/contribute.md",sourceDirName:".",slug:"/contribute",permalink:"/Tenzir v4.9/contribute",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.9/contribute.md",tags:[],version:"Tenzir v4.9",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Glossary",permalink:"/Tenzir v4.9/glossary"},next:{title:"Code of Conduct",permalink:"/Tenzir v4.9/contribute/code-of-conduct"}},h={},g=[],O={toc:g},w="wrapper";function j(e){var t=e,{components:r}=t,i=d(t,["components"]);return(0,n.kt)(w,f(m(m({},O),i),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",m({},{id:"contribute"}),"Contribute"),(0,n.kt)("p",null,"This section explains how to contribute to the Tenzir project. As an open-source\nproject with the aim to build a community, we encourage contributions of any\nkind: new code, documentation enhancements, feature requests, suggestions for\nimprovements, or simply just feedback. We strive to make our development\nas transparent as possible. If you have any questions about the process, please\ndo not hesitate to reach out to us in ",(0,n.kt)("a",m({parentName:"p"},{href:"/discord"}),"community chat"),"\nor by opening a ",(0,n.kt)("a",m({parentName:"p"},{href:"https://github.com/tenzir/tenzir/discussions"}),"GitHub\nDiscussion"),"."),(0,n.kt)(o.Z,{mdxType:"DocCardList"}))}j.isMDXComponent=!0}}]);