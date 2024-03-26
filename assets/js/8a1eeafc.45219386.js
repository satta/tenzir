"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84928],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),k=a,f=d["".concat(p,".").concat(k)]||d[k]||m[k]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},63089:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>u,default:()=>v,frontMatter:()=>f,metadata:()=>N,toc:()=>h});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>o(e,i(t)),k=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const f={sidebar_custom_props:{operator:{source:!0}}},u="sockets",N={unversionedId:"operators/sockets",id:"operators/sockets",title:"sockets",description:"Shows a snapshot of open sockets.",source:"@site/docs/operators/sockets.md",sourceDirName:"operators",slug:"/operators/sockets",permalink:"/next/operators/sockets",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/operators/sockets.md",tags:[],version:"current",frontMatter:{sidebar_custom_props:{operator:{source:!0}}},sidebar:"docsSidebar",previous:{title:"slice",permalink:"/next/operators/slice"},next:{title:"sort",permalink:"/next/operators/sort"}},b={},h=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Schemas",id:"schemas",level:2},{value:"<code>tenzir.socket</code>",id:"tenzirsocket",level:3},{value:"Examples",id:"examples",level:2}],y={toc:h},g="wrapper";function v(e){var t=e,{components:r}=t,a=k(t,["components"]);return(0,n.kt)(g,m(d(d({},y),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"sockets"}),"sockets"),(0,n.kt)("p",null,"Shows a snapshot of open sockets."),(0,n.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"sockets\n")),(0,n.kt)("h2",d({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"sockets")," operator shows a snapshot of all currently open sockets."),(0,n.kt)("h2",d({},{id:"schemas"}),"Schemas"),(0,n.kt)("p",null,"Tenzir emits socket information with the following schema."),(0,n.kt)("h3",d({},{id:"tenzirsocket"}),(0,n.kt)("inlineCode",{parentName:"h3"},"tenzir.socket")),(0,n.kt)("p",null,"Contains detailed information about the socket."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",d({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"pid")),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"uint64")),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"The process identifier.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"process")),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"The name of the process involved.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"protocol")),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"uint64")),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"The protocol used for the communication.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"local_addr")),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"ip")),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"The local IP address involved in the connection.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"local_port")),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"port")),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"The local port number involved in the connection.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"remote_addr")),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"ip")),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"The remote IP address involved in the connection.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"remote_port")),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"port")),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"The remote port number involved in the connection.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"state")),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",d({parentName:"tr"},{align:"left"}),"The current state of the connection.")))),(0,n.kt)("h2",d({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Show process ID, local, and remote IP address of all sockets:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"sockets\n| select pid, local_addr, remote_addr \n")))}v.isMDXComponent=!0}}]);