"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68518],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=s(r),k=a,f=m["".concat(l,".").concat(k)]||m[k]||c[k]||i;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=k;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},5029:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>u,default:()=>v,frontMatter:()=>f,metadata:()=>N,toc:()=>y});var n=r(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&d(e,r,t[r]);if(p)for(var r of p(t))s.call(t,r)&&d(e,r,t[r]);return e},c=(e,t)=>i(e,o(t)),k=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const f={sidebar_custom_props:{operator:{source:!0}}},u="processes",N={unversionedId:"operators/processes",id:"operators/processes",title:"processes",description:"Shows a snapshot of running processes.",source:"@site/docs/operators/processes.md",sourceDirName:"operators",slug:"/operators/processes",permalink:"/next/operators/processes",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/operators/processes.md",tags:[],version:"current",frontMatter:{sidebar_custom_props:{operator:{source:!0}}},sidebar:"docsSidebar",previous:{title:"pass",permalink:"/next/operators/pass"},next:{title:"pseudonymize",permalink:"/next/operators/pseudonymize"}},g={},y=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"Schemas",id:"schemas",level:2},{value:"<code>tenzir.process</code>",id:"tenzirprocess",level:3},{value:"Examples",id:"examples",level:2}],h={toc:y},b="wrapper";function v(e){var t=e,{components:r}=t,a=k(t,["components"]);return(0,n.kt)(b,c(m(m({},h),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",m({},{id:"processes"}),"processes"),(0,n.kt)("p",null,"Shows a snapshot of running processes."),(0,n.kt)("h2",m({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"processes\n")),(0,n.kt)("h2",m({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"processes")," operator shows a snapshot of all currently running processes."),(0,n.kt)("h2",m({},{id:"schemas"}),"Schemas"),(0,n.kt)("p",null,"Tenzir emits process information with the following schema."),(0,n.kt)("h3",m({},{id:"tenzirprocess"}),(0,n.kt)("inlineCode",{parentName:"h3"},"tenzir.process")),(0,n.kt)("p",null,"Contains detailed information about the process."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:"left"}),"Field"),(0,n.kt)("th",m({parentName:"tr"},{align:"left"}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:"left"}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"name")),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"The process name.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"command_line")),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"list<string>")),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"The command line of the process.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"pid")),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"uint64")),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"The process identifier.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"ppid")),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"uint64")),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"The parent process identifier.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"uid")),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"uint64")),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"The user identifier of the process owner.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"gid")),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"uint64")),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"The group identifier of the process owner.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"ruid")),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"uint64")),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"The real user identifier of the process owner.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"rgid")),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"uint64")),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"The real group identifier of the process owner.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"priority")),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"The priority level of the process.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"startup")),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"time")),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"The time when the process was started.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"vsize")),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"uint64")),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"The virtual memory size of the process.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"rsize")),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"uint64")),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"The resident set size (physical memory used) of the process.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"swap")),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"uint64")),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"The amount of swap memory used by the process.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"peak_mem")),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"uint64")),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"Peak memory usage of the process.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"open_fds")),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"uint64")),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"The number of open file descriptors by the process.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"utime")),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"duration")),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"The user CPU time consumed by the process.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"stime")),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),(0,n.kt)("inlineCode",{parentName:"td"},"duration")),(0,n.kt)("td",m({parentName:"tr"},{align:"left"}),"The system CPU time consumed by the process.")))),(0,n.kt)("h2",m({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Show running processes sorted by how long they've been running:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"processes\n| sort startup desc\n")),(0,n.kt)("p",null,"Show the top five running processes by name:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{}),"processes\n| top name\n| head 5\n")))}v.isMDXComponent=!0}}]);