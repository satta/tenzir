"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[94262],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[d]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},92965:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>y,default:()=>g,frontMatter:()=>m,metadata:()=>v,toc:()=>b});var n=r(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(c)for(var r of c(t))l.call(t,r)&&s(e,r,t[r]);return e},u=(e,t)=>i(e,a(t)),f=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const m={sidebar_custom_props:{connector:{saver:!0}}},y="directory",v={unversionedId:"connectors/directory",id:"version-Tenzir v4.10/connectors/directory",title:"directory",description:"Saves bytes to one file per schema into a directory.",source:"@site/versioned_docs/version-Tenzir v4.10/connectors/directory.md",sourceDirName:"connectors",slug:"/connectors/directory",permalink:"/Tenzir v4.10/connectors/directory",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.10/connectors/directory.md",tags:[],version:"Tenzir v4.10",frontMatter:{sidebar_custom_props:{connector:{saver:!0}}},sidebar:"docsSidebar",previous:{title:"-",permalink:"/Tenzir v4.10/connectors/dash"},next:{title:"file",permalink:"/Tenzir v4.10/connectors/file"}},h={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>-a|--append</code>",id:"-a--append",level:3},{value:"<code>-r|--real-time</code>",id:"-r--real-time",level:3},{value:"<code>&lt;path&gt;</code>",id:"path",level:3},{value:"Examples",id:"examples",level:2}],k={toc:b},O="wrapper";function g(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,n.kt)(O,u(d(d({},k),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"directory"}),"directory"),(0,n.kt)("p",null,"Saves bytes to one file per schema into a directory."),(0,n.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"directory [-a|--append] [-r|--real-time] <path>\n")),(0,n.kt)("h2",d({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"directory")," saver writes one file per schema into the provided directory."),(0,n.kt)("p",null,"The default printer for the ",(0,n.kt)("inlineCode",{parentName:"p"},"directory")," saver is ",(0,n.kt)("a",d({parentName:"p"},{href:"/Tenzir%20v4.10/formats/json"}),(0,n.kt)("inlineCode",{parentName:"a"},"json")),"."),(0,n.kt)("h3",d({},{id:"-a--append"}),(0,n.kt)("inlineCode",{parentName:"h3"},"-a|--append")),(0,n.kt)("p",null,"Append to files in ",(0,n.kt)("inlineCode",{parentName:"p"},"path")," instead of overwriting them with a new file."),(0,n.kt)("h3",d({},{id:"-r--real-time"}),(0,n.kt)("inlineCode",{parentName:"h3"},"-r|--real-time")),(0,n.kt)("p",null,"Immediately synchronize files in ",(0,n.kt)("inlineCode",{parentName:"p"},"path")," with every chunk of bytes instead of\nbuffering bytes to batch filesystem write operations."),(0,n.kt)("h3",d({},{id:"path"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<path>")),(0,n.kt)("p",null,"The path to the directory. If ",(0,n.kt)("inlineCode",{parentName:"p"},"<path>")," does not point to an existing directory,\nthe saver creates a new directory, including potential intermediate directories."),(0,n.kt)("h2",d({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Write one JSON file per unique schema to ",(0,n.kt)("inlineCode",{parentName:"p"},"/tmp/dir"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"to directory /tmp/dir write json\n")))}g.isMDXComponent=!0}}]);