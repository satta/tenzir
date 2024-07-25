"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[17786],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),u=a,v=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return r?n.createElement(v,i(i({ref:t},c),{},{components:r})):n.createElement(v,i({ref:t},c))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5185:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>f,default:()=>N,frontMatter:()=>v,metadata:()=>k,toc:()=>b});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>o(e,i(t)),u=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const v={sidebar_custom_props:{operator:{source:!0}}},f="version",k={unversionedId:"operators/version",id:"version-v4.16/operators/version",title:"version",description:"Shows the current version.",source:"@site/versioned_docs/version-v4.16/operators/version.md",sourceDirName:"operators",slug:"/operators/version",permalink:"/v4.16/operators/version",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.16/operators/version.md",tags:[],version:"v4.16",frontMatter:{sidebar_custom_props:{operator:{source:!0}}},sidebar:"docsSidebar",previous:{title:"velociraptor",permalink:"/v4.16/operators/velociraptor"},next:{title:"where",permalink:"/v4.16/operators/where"}},h={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Schemas",id:"schemas",level:2},{value:"<code>tenzir.version</code>",id:"tenzirversion",level:3},{value:"Examples",id:"examples",level:2}],y={toc:b},g="wrapper";function N(e){var t=e,{components:r}=t,a=u(t,["components"]);return(0,n.kt)(g,m(d(d({},y),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"version"}),"version"),(0,n.kt)("p",null,"Shows the current version."),(0,n.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"version\n")),(0,n.kt)("h2",d({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"version")," operator shows the current Tenzir version."),(0,n.kt)("h2",d({},{id:"schemas"}),"Schemas"),(0,n.kt)("p",null,"Tenzir emits version information with the following schema."),(0,n.kt)("h3",d({},{id:"tenzirversion"}),(0,n.kt)("inlineCode",{parentName:"h3"},"tenzir.version")),(0,n.kt)("p",null,"Contains detailed information about the process version."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",d({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"version")),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"The formatted version string.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"major")),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"uint64")),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"The major release version.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"minor")),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"uint64")),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"The minor release version.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"patch")),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"uint64")),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"The patch release version.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"tweak")),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"uint64")),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"The number of changes since the last release.")))),(0,n.kt)("h2",d({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"version")," to show the current version of a development build:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),'{\n  "version": "v4.6.3-36-gbd4c8a058b-dirty",\n  "major": 4,\n  "minor": 6,\n  "patch": 3,\n  "tweak": 36\n}\n')),(0,n.kt)("p",null,"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"version")," to show the current version of a release build:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),'{\n  "version": "v4.7.0",\n  "major": 4,\n  "minor": 7,\n  "patch": 0,\n  "tweak": 0\n}\n')))}N.isMDXComponent=!0}}]);