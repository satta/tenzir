"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[43763],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,u=m["".concat(s,".").concat(f)]||m[f]||d[f]||a;return r?n.createElement(u,i(i({ref:t},c),{},{components:r})):n.createElement(u,i({ref:t},c))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[m]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},24646:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>h,default:()=>O,frontMatter:()=>u,metadata:()=>v,toc:()=>k});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(p)for(var r of p(t))l.call(t,r)&&c(e,r,t[r]);return e},d=(e,t)=>a(e,i(t)),f=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const u={sidebar_custom_props:{format:{parser:!0,printer:!0}}},h="feather",v={unversionedId:"formats/feather",id:"version-v4.17/formats/feather",title:"feather",description:"Reads and writes the Feather file format, a thin wrapper around",source:"@site/versioned_docs/version-v4.17/formats/feather.md",sourceDirName:"formats",slug:"/formats/feather",permalink:"/v4.17/formats/feather",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.17/formats/feather.md",tags:[],version:"v4.17",frontMatter:{sidebar_custom_props:{format:{parser:!0,printer:!0}}},sidebar:"docsSidebar",previous:{title:"csv",permalink:"/v4.17/formats/csv"},next:{title:"gelf",permalink:"/v4.17/formats/gelf"}},y={},k=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>--compression-type</code> (Printer)",id:"--compression-type-printer",level:3},{value:"<code>--compression-level</code> (Printer)",id:"--compression-level-printer",level:3},{value:"<code>--min-space-savings</code> (Printer)",id:"--min-space-savings-printer",level:3},{value:"Examples",id:"examples",level:2}],b={toc:k},g="wrapper";function O(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,n.kt)(g,d(m(m({},b),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",m({},{id:"feather"}),"feather"),(0,n.kt)("p",null,"Reads and writes the ",(0,n.kt)("a",m({parentName:"p"},{href:"https://arrow.apache.org/docs/python/feather.html"}),"Feather")," file format, a thin wrapper around\n",(0,n.kt)("a",m({parentName:"p"},{href:"https://arrow.apache.org/docs/python/ipc.html"}),"Apache Arrow's IPC")," wire format."),(0,n.kt)("h2",m({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("p",null,"Parser:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"feather\n")),(0,n.kt)("p",null,"Printer:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"feather [\u2014compression-type=<type>] [\u2014compression-level=<level] [\u2014min\u2014space-savings=<rate>]\n")),(0,n.kt)("h2",m({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"feather")," format provides both a parser and a printer for Feather files and\nApache Arrow IPC streams.  "),(0,n.kt)("admonition",m({},{title:"Limitation",type:"warning"}),(0,n.kt)("p",{parentName:"admonition"},"Tenzir currently assumes that all Feather files and Arrow IPC streams use\nmetadata recognized by Tenzir. We plan to lift this restriction in the future.")),(0,n.kt)("h3",m({},{id:"--compression-type-printer"}),(0,n.kt)("inlineCode",{parentName:"h3"},"--compression-type")," (Printer)"),(0,n.kt)("p",null,"Specifies an optional compression type. Supported options are ",(0,n.kt)("inlineCode",{parentName:"p"},"zstd")," for\n",(0,n.kt)("a",m({parentName:"p"},{href:"http://facebook.github.io/zstd/"}),"Zstandard")," compression and ",(0,n.kt)("inlineCode",{parentName:"p"},"lz4")," for ",(0,n.kt)("a",m({parentName:"p"},{href:"https://android.googlesource.com/platform/external/lz4/+/HEAD/doc/lz4_Frame_format.md"}),"LZ4 Frame"),"\ncompression."),(0,n.kt)("admonition",m({},{type:"info"}),(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Why would I use this over the ",(0,n.kt)("inlineCode",{parentName:"mdxAdmonitionTitle"},"compress")," operator?"),(0,n.kt)("p",{parentName:"admonition"},"The Feather format offers more efficient compression compared to the\n",(0,n.kt)("a",m({parentName:"p"},{href:"/v4.17/operators/compress"}),(0,n.kt)("inlineCode",{parentName:"a"},"compress"))," operator. This is because it compresses\nthe data column-by-column, leaving metadata that needs to be accessed frequently\nuncompressed.")),(0,n.kt)("h3",m({},{id:"--compression-level-printer"}),(0,n.kt)("inlineCode",{parentName:"h3"},"--compression-level")," (Printer)"),(0,n.kt)("p",null,"An optional compression level for the corresponding compression type. This\noption is ignored if no compression type is specified."),(0,n.kt)("p",null,"Defaults to the compression type's default compression level."),(0,n.kt)("h3",m({},{id:"--min-space-savings-printer"}),(0,n.kt)("inlineCode",{parentName:"h3"},"--min-space-savings")," (Printer)"),(0,n.kt)("p",null,"An optional minimum space savings percentage required for compression to be\napplied. This option is ignored if no compression is specified. The provided\nvalue must be between 0 and 1 inclusive."),(0,n.kt)("p",null,"Defaults to 0, i.e., always applying compression."),(0,n.kt)("p",null,"Space savings are calculated as ",(0,n.kt)("inlineCode",{parentName:"p"},"1.0 - compressed_size / uncompressed_size"),".\nE.g., for a minimum space savings rate of 0.1 a 100-byte body buffer will not\nbe compressed if its expected compressed size exceeds 90 bytes."),(0,n.kt)("h2",m({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Read a Feather file via the ",(0,n.kt)("a",m({parentName:"p"},{href:"/v4.17/operators/from"}),(0,n.kt)("inlineCode",{parentName:"a"},"from"))," operator:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"from /tmp/data.feather --mmap read feather\n")),(0,n.kt)("p",null,"Write a Zstd-compressed Feather file via ",(0,n.kt)("a",m({parentName:"p"},{href:"/v4.17/operators/to"}),(0,n.kt)("inlineCode",{parentName:"a"},"to"))," operator:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"to /tmp/suricata.feather write feather --compression-type zstd\n")))}O.isMDXComponent=!0}}]);