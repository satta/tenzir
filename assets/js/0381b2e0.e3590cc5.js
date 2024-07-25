"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[58393],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=r,u=m["".concat(p,".").concat(d)]||m[d]||f[d]||a;return n?o.createElement(u,i(i({ref:t},c),{},{components:n})):o.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67521:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>v,default:()=>O,frontMatter:()=>u,metadata:()=>h,toc:()=>y});var o=n(3905),r=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))l.call(t,n)&&c(e,n,t[n]);return e},f=(e,t)=>a(e,i(t)),d=(e,t)=>{var n={};for(var o in e)p.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&s)for(var o of s(e))t.indexOf(o)<0&&l.call(e,o)&&(n[o]=e[o]);return n};const u={sidebar_custom_props:{operator:{sink:!0}}},v="to",h={unversionedId:"operators/to",id:"version-v4.17/operators/to",title:"to",description:"Consumes events by combining a connector and a format.",source:"@site/versioned_docs/version-v4.17/operators/to.md",sourceDirName:"operators",slug:"/operators/to",permalink:"/v4.17/operators/to",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.17/operators/to.md",tags:[],version:"v4.17",frontMatter:{sidebar_custom_props:{operator:{sink:!0}}},sidebar:"docsSidebar",previous:{title:"timeshift",permalink:"/v4.17/operators/timeshift"},next:{title:"top",permalink:"/v4.17/operators/top"}},k={},y=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;connector&gt;</code>",id:"connector",level:3},{value:"<code>&lt;format&gt;</code>",id:"format",level:3},{value:"Examples",id:"examples",level:2}],b={toc:y},g="wrapper";function O(e){var t=e,{components:n}=t,r=d(t,["components"]);return(0,o.kt)(g,f(m(m({},b),r),{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",m({},{id:"to"}),"to"),(0,o.kt)("p",null,"Consumes events by combining a ",(0,o.kt)("a",m({parentName:"p"},{href:"/v4.17/connectors"}),"connector")," and a ",(0,o.kt)("a",m({parentName:"p"},{href:"/v4.17/formats"}),"format"),"."),(0,o.kt)("h2",m({},{id:"synopsis"}),"Synopsis"),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{}),"to <uri> [write <format>]\nto <path> [write <format>]\nto <connector> [write <format>]\n")),(0,o.kt)("h2",m({},{id:"description"}),"Description"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"to")," operator consumes events at the end of a pipeline by bringing together\na ",(0,o.kt)("a",m({parentName:"p"},{href:"/v4.17/connectors"}),"connector")," and a ",(0,o.kt)("a",m({parentName:"p"},{href:"/v4.17/formats"}),"format"),"."),(0,o.kt)("p",null,"If given something that looks like a path to a file, the connector can pick\nout a format automatically based on the file extension or the file name.\nThis enables a shorter syntax, e.g., ",(0,o.kt)("inlineCode",{parentName:"p"},"to ./file.csv")," uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"csv")," format.\nAll connectors also have a default format, which will be used\nif the format can't be determined by the path. For most connectors,\nthis default format is ",(0,o.kt)("inlineCode",{parentName:"p"},"json"),".\nSo, for example, ",(0,o.kt)("inlineCode",{parentName:"p"},"to stdin")," uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"json")," format."),(0,o.kt)("p",null,"Additionally, if a file extension indicating compression can be found,\n",(0,o.kt)("a",m({parentName:"p"},{href:"/v4.17/operators/compress"}),(0,o.kt)("inlineCode",{parentName:"a"},"compress"))," is automatically used. For example, ",(0,o.kt)("inlineCode",{parentName:"p"},"to\nmyfile.json.gz")," is automatically gzip-compressed and formatted as json, i.e.,\n",(0,o.kt)("inlineCode",{parentName:"p"},"write json | compress gzip | save myfile.json.gz"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"to")," operator is a pipeline under the hood. For most cases, it is equal to\n",(0,o.kt)("inlineCode",{parentName:"p"},"write <format> | save <connector>"),". However, for some combinations of\nconnectors and formats the underlying pipeline is a bit more complex. We\nrecommend always using ",(0,o.kt)("inlineCode",{parentName:"p"},"to ... write ...")," over the ",(0,o.kt)("a",m({parentName:"p"},{href:"/v4.17/operators/write"}),(0,o.kt)("inlineCode",{parentName:"a"},"write"))," and\n",(0,o.kt)("a",m({parentName:"p"},{href:"/v4.17/operators/save"}),(0,o.kt)("inlineCode",{parentName:"a"},"save"))," operators."),(0,o.kt)("h3",m({},{id:"connector"}),(0,o.kt)("inlineCode",{parentName:"h3"},"<connector>")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",m({parentName:"p"},{href:"/v4.17/connectors"}),"connector")," used to save bytes."),(0,o.kt)("p",null,"Some connectors have connector-specific options. Please refer to the\ndocumentation of the individual connectors for more information."),(0,o.kt)("h3",m({},{id:"format"}),(0,o.kt)("inlineCode",{parentName:"h3"},"<format>")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",m({parentName:"p"},{href:"/v4.17/formats"}),"format")," used to print events to bytes."),(0,o.kt)("p",null,"Some formats have format-specific options. Please refer to the documentation of\nthe individual formats for more information."),(0,o.kt)("h2",m({},{id:"examples"}),"Examples"),(0,o.kt)("p",null,"Write events to stdout formatted as CSV."),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{}),"to stdout write csv\n")),(0,o.kt)("p",null,"Write events to the file ",(0,o.kt)("inlineCode",{parentName:"p"},"path/to/eve.json")," formatted as JSON."),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{}),"to path/to/eve.json write json\nto file path/to/eve.json write json\n")))}O.isMDXComponent=!0}}]);