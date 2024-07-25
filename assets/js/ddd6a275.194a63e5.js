"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19439],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,f=u["".concat(p,".").concat(d)]||u[d]||v[d]||a;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},10016:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>g,frontMatter:()=>f,metadata:()=>y,toc:()=>h});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&l(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&l(e,r,t[r]);return e},v=(e,t)=>a(e,s(t)),d=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const f={sidebar_custom_props:{operator:{sink:!0}}},m="save",y={unversionedId:"operators/save",id:"version-v4.18/operators/save",title:"save",description:"The save operator saves bytes to a connector.",source:"@site/versioned_docs/version-v4.18/operators/save.md",sourceDirName:"operators",slug:"/operators/save",permalink:"/operators/save",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.18/operators/save.md",tags:[],version:"v4.18",frontMatter:{sidebar_custom_props:{operator:{sink:!0}}},sidebar:"docsSidebar",previous:{title:"reverse",permalink:"/operators/reverse"},next:{title:"select",permalink:"/operators/select"}},b={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;connector&gt;</code>",id:"connector",level:3},{value:"Examples",id:"examples",level:2}],k={toc:h},O="wrapper";function g(e){var t=e,{components:r}=t,o=d(t,["components"]);return(0,n.kt)(O,v(u(u({},k),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"save"}),"save"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"save")," operator saves bytes to a ",(0,n.kt)("a",u({parentName:"p"},{href:"/connectors"}),"connector"),"."),(0,n.kt)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"save <uri>\nsave <path>\nsave <connector>\n")),(0,n.kt)("h2",u({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"save")," operator operates on raw bytes."),(0,n.kt)("p",null,"Notably, it cannot be used after an operator that emits events, but rather only\nwith operators that emit bytes, e.g., ",(0,n.kt)("a",u({parentName:"p"},{href:"/operators/write"}),(0,n.kt)("inlineCode",{parentName:"a"},"write"))," or ",(0,n.kt)("a",u({parentName:"p"},{href:"/operators/load"}),(0,n.kt)("inlineCode",{parentName:"a"},"load")),"."),(0,n.kt)("h3",u({},{id:"connector"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<connector>")),(0,n.kt)("p",null,"The ",(0,n.kt)("a",u({parentName:"p"},{href:"/connectors"}),"connector")," used to save bytes."),(0,n.kt)("p",null,"Some connectors have connector-specific options. Please refer to the\ndocumentation of the individual connectors for more information."),(0,n.kt)("h2",u({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Write bytes to stdout:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"save stdin\n")),(0,n.kt)("p",null,"Write bytes to the file ",(0,n.kt)("inlineCode",{parentName:"p"},"path/to/eve.json"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"save path/to/eve.json\nsave file path/to/eve.json\n")))}g.isMDXComponent=!0}}]);