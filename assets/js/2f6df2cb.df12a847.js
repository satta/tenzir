"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6847],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,p(p({ref:t},s),{},{components:r})):n.createElement(m,p({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[f]="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},65280:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>h,frontMatter:()=>m,metadata:()=>y,toc:()=>O});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&s(e,r,t[r]);return e},u=(e,t)=>a(e,p(t)),d=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const m={sidebar_custom_props:{connector:{loader:!0}}},v="ftp",y={unversionedId:"connectors/ftp",id:"version-v4.18/connectors/ftp",title:"ftp",description:"Loads bytes via FTP.",source:"@site/versioned_docs/version-v4.18/connectors/ftp.md",sourceDirName:"connectors",slug:"/connectors/ftp",permalink:"/connectors/ftp",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.18/connectors/ftp.md",tags:[],version:"v4.18",frontMatter:{sidebar_custom_props:{connector:{loader:!0}}},sidebar:"docsSidebar",previous:{title:"file",permalink:"/connectors/file"},next:{title:"ftps",permalink:"/connectors/ftps"}},b={},O=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;url&gt;</code>",id:"url",level:3},{value:"Examples",id:"examples",level:2}],k={toc:O},g="wrapper";function h(e){var t=e,{components:r}=t,o=d(t,["components"]);return(0,n.kt)(g,u(f(f({},k),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",f({},{id:"ftp"}),"ftp"),(0,n.kt)("p",null,"Loads bytes via FTP."),(0,n.kt)("h2",f({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{}),"ftp <url>\n")),(0,n.kt)("h2",f({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"ftp")," loader downloads a file via the ",(0,n.kt)("a",f({parentName:"p"},{href:"https://en.wikipedia.org/wiki/File_Transfer_Protocol"}),"File Transfer Protocol\n(FTP)"),"."),(0,n.kt)("h3",f({},{id:"url"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<url>")),(0,n.kt)("p",null,"The FTP URL."),(0,n.kt)("p",null,"To provide a username and password, use the typical ",(0,n.kt)("inlineCode",{parentName:"p"},"user:pass@example.org"),"\nsyntax."),(0,n.kt)("p",null,"The scheme is ",(0,n.kt)("inlineCode",{parentName:"p"},"ftp://")," and can be omitted."),(0,n.kt)("h2",f({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Download and process a ",(0,n.kt)("a",f({parentName:"p"},{href:"/formats/csv"}),"CSV")," file:"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{}),"from ftp example.org/file.csv read csv\n")),(0,n.kt)("p",null,"Process a Zstd-compressed ",(0,n.kt)("a",f({parentName:"p"},{href:"/formats/suricata"}),"Suricata EVE JSON")," file:"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{}),"load ftp example.org/gigantic.eve.json.zst\n| decompress zstd\n| read suricata\n")))}h.isMDXComponent=!0}}]);