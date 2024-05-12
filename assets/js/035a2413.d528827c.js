"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[55161],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),u=a,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},28638:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>k,frontMatter:()=>f,metadata:()=>v,toc:()=>g});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&c(e,r,t[r]);if(s)for(var r of s(t))p.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>o(e,i(t)),u=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const f={sidebar_custom_props:{format:{parser:!0,printer:!0}}},b="bitz",v={unversionedId:"formats/bitz",id:"version-Tenzir v4.12/formats/bitz",title:"bitz",description:"Reads and writes BITZ, Tenzir's internal wire format.",source:"@site/versioned_docs/version-Tenzir v4.12/formats/bitz.md",sourceDirName:"formats",slug:"/formats/bitz",permalink:"/Tenzir v4.12/formats/bitz",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.12/formats/bitz.md",tags:[],version:"Tenzir v4.12",frontMatter:{sidebar_custom_props:{format:{parser:!0,printer:!0}}},sidebar:"docsSidebar",previous:{title:"Formats",permalink:"/Tenzir v4.12/formats"},next:{title:"cef",permalink:"/Tenzir v4.12/formats/cef"}},y={},g=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Examples",id:"examples",level:2}],h={toc:g},w="wrapper";function k(e){var t=e,{components:r}=t,a=u(t,["components"]);return(0,n.kt)(w,m(d(d({},h),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"bitz"}),"bitz"),(0,n.kt)("p",null,"Reads and writes BITZ, Tenzir's internal wire format."),(0,n.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"bitz\n")),(0,n.kt)("h2",d({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"bitz")," format provides a parser and printer for Tenzir's internal wire\nformat. It enables lossless transfer of events between Tenzir nodes through any\nconnector."),(0,n.kt)("p",null,"BITZ is an unstable format, i.e., it cannot safely be written to disk and be\nread again later with another Tenzir version."),(0,n.kt)("p",null,"Use BITZ when you need high-throughput structured data exchange with minimal\noverhead. BITZ is a thin wrapper around Arrow's record batches. That is, BITZ\nlays out data in a (compressed) columnar fashion that makes it conducive for\nanalytical workloads. Since it's padded and byte-aligned, it is portable and\ndoesn't induce any deserialization cost, making it suitable for\nwrite-once-read-many use cases."),(0,n.kt)("admonition",d({},{title:"Did you know?",type:"info"}),(0,n.kt)("p",{parentName:"admonition"},"BITZ is short for ",(0,n.kt)("strong",{parentName:"p"},"bi"),"nary ",(0,n.kt)("strong",{parentName:"p"},"T"),"en",(0,n.kt)("strong",{parentName:"p"},"z"),"ir, and a play on the word bits.")),(0,n.kt)("h2",d({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Transfer events between two pipelines using ",(0,n.kt)("inlineCode",{parentName:"p"},"zmq"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-text",metastring:'{0} title="Send BITZ over ZeroMQ"',"{0}":!0,title:'"Send',BITZ:!0,over:!0,'ZeroMQ"':!0}),"export\n| to zmq://localhost:5670 write bitz\n")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-text",metastring:'{0} title="Receive BITZ from ZeroMQ"',"{0}":!0,title:'"Receive',BITZ:!0,from:!0,'ZeroMQ"':!0}),"from zmq://localhost:5670 read bitz\n| import\n")))}k.isMDXComponent=!0}}]);