"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[92613],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(r),m=a,f=g["".concat(s,".").concat(m)]||g[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[g]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},469:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>b,default:()=>O,frontMatter:()=>f,metadata:()=>d,toc:()=>y});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&c(e,r,t[r]);return e},u=(e,t)=>o(e,i(t)),m=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const f={title:"VAST v3.0",description:"VAST Language Evolution \u2014 Dataflow Pipelines",authors:["dominiklohmann","dakostu"],image:"/img/blog/building-blocks.excalidraw.svg",date:new Date("2023-03-14T00:00:00.000Z"),tags:["release","pipelines","language","cef","performance","introspection","regex"]},b=void 0,d={permalink:"/blog/vast-v3.0",source:"@site/blog/vast-v3.0/index.md",title:"VAST v3.0",description:"VAST Language Evolution \u2014 Dataflow Pipelines",date:"2023-03-14T00:00:00.000Z",formattedDate:"March 14, 2023",tags:[{label:"release",permalink:"/blog/tags/release"},{label:"pipelines",permalink:"/blog/tags/pipelines"},{label:"language",permalink:"/blog/tags/language"},{label:"cef",permalink:"/blog/tags/cef"},{label:"performance",permalink:"/blog/tags/performance"},{label:"introspection",permalink:"/blog/tags/introspection"},{label:"regex",permalink:"/blog/tags/regex"}],readingTime:9.14,hasTruncateMarker:!0,authors:[{name:"Dominik Lohmann",title:"Engineering Manager",url:"https://github.com/dominiklohmann",email:"dominik@tenzir.com",imageURL:"https://github.com/dominiklohmann.png",key:"dominiklohmann"},{name:"Daniel Kostuj",title:"Software Engineer",url:"https://github.com/dakostu",email:"daniel@tenzir.com",imageURL:"https://github.com/dakostu.png",key:"dakostu"}],frontMatter:{title:"VAST v3.0",description:"VAST Language Evolution \u2014 Dataflow Pipelines",authors:["dominiklohmann","dakostu"],image:"/img/blog/building-blocks.excalidraw.svg",date:"2023-03-14T00:00:00.000Z",tags:["release","pipelines","language","cef","performance","introspection","regex"]},prevItem:{title:"VAST v3.1",permalink:"/blog/vast-v3.1"},nextItem:{title:"From Slack to Discord",permalink:"/blog/from-slack-to-discord"}},v={authorsImageUrls:[void 0,void 0]},y=[],h={toc:y},k="wrapper";function O(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(k,u(g(g({},h),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",g({parentName:"p"},{href:"https://github.com/tenzir/vast/releases/tag/v3.0.4"}),"VAST v3.0")," is out. This release brings some major updates\nto the the VAST language, making it easy to write down dataflow pipelines that\nfilter, reshape, aggregate, and enrich security event data. Think of VAST as\nsecurity data pipelines plus open storage engine."))}O.isMDXComponent=!0}}]);