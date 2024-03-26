"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[90440],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>y});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,y=u["".concat(l,".").concat(d)]||u[d]||f[d]||a;return t?n.createElement(y,i(i({ref:r},s),{},{components:t})):n.createElement(y,i({ref:r},s))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var p={};for(var l in r)hasOwnProperty.call(r,l)&&(p[l]=r[l]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},77020:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>m,default:()=>k,frontMatter:()=>y,metadata:()=>b,toc:()=>O});var n=t(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&s(e,t,r[t]);if(p)for(var t of p(r))c.call(r,t)&&s(e,t,r[t]);return e},f=(e,r)=>a(e,i(r)),d=(e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&p)for(var n of p(e))r.indexOf(n)<0&&c.call(e,n)&&(t[n]=e[n]);return t};const y={sidebar_custom_props:{operator:{source:!0,transformation:!0,sink:!0}}},m="apply",b={unversionedId:"operators/apply",id:"operators/apply",title:"apply",description:"Include the pipeline defined in another file.",source:"@site/docs/operators/apply.md",sourceDirName:"operators",slug:"/operators/apply",permalink:"/next/operators/apply",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/operators/apply.md",tags:[],version:"current",frontMatter:{sidebar_custom_props:{operator:{source:!0,transformation:!0,sink:!0}}},sidebar:"docsSidebar",previous:{title:"api",permalink:"/next/operators/api"},next:{title:"batch",permalink:"/next/operators/batch"}},v={},O=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2}],h={toc:O},g="wrapper";function k(e){var r=e,{components:t}=r,o=d(r,["components"]);return(0,n.kt)(g,f(u(u({},h),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"apply"}),"apply"),(0,n.kt)("p",null,"Include the pipeline defined in another file."),(0,n.kt)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"apply <file>\n")),(0,n.kt)("h2",u({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"apply")," operator searches for the given file, first in the current\ndirectory, and then in ",(0,n.kt)("inlineCode",{parentName:"p"},"<config>/apply/")," for every config directory, for example\n",(0,n.kt)("inlineCode",{parentName:"p"},"~/.config/tenzir/apply/"),"."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".tql")," extension is automatically added to the filename, unless it already\nhas an extension."))}k.isMDXComponent=!0}}]);