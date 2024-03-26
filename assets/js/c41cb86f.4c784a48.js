"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[23279],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,m=u["".concat(p,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},64986:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>v,default:()=>g,frontMatter:()=>m,metadata:()=>y,toc:()=>b});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&s(e,r,t[r]);return e},d=(e,t)=>a(e,i(t)),f=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const m={sidebar_custom_props:{operator:{transformation:!0}}},v="rare",y={unversionedId:"operators/rare",id:"version-Tenzir v4.10/operators/rare",title:"rare",description:"Shows the least common values. The dual to top.",source:"@site/versioned_docs/version-Tenzir v4.10/operators/rare.md",sourceDirName:"operators",slug:"/operators/rare",permalink:"/Tenzir v4.10/operators/rare",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.10/operators/rare.md",tags:[],version:"Tenzir v4.10",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"python",permalink:"/Tenzir v4.10/operators/python"},next:{title:"read",permalink:"/Tenzir v4.10/operators/read"}},h={},b=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;field&gt;</code>",id:"field",level:3},{value:"<code>--count-field=&lt;count-field&gt;|-c &lt;count-field&gt;</code>",id:"--count-fieldcount-field-c-count-field",level:3},{value:"Examples",id:"examples",level:2}],k={toc:b},O="wrapper";function g(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,n.kt)(O,d(u(u({},k),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"rare"}),"rare"),(0,n.kt)("p",null,"Shows the least common values. The dual to ",(0,n.kt)("a",u({parentName:"p"},{href:"/Tenzir%20v4.10/operators/top"}),(0,n.kt)("inlineCode",{parentName:"a"},"top")),"."),(0,n.kt)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"rare <field> [--count-field=<count-field>|-c <count-field>]\n")),(0,n.kt)("h2",u({},{id:"description"}),"Description"),(0,n.kt)("p",null,"Shows the least common values for a given field. For each unique value, a new event containing its count will be produced."),(0,n.kt)("h3",u({},{id:"field"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<field>")),(0,n.kt)("p",null,"The name of the field to find the least common values for."),(0,n.kt)("h3",u({},{id:"--count-fieldcount-field-c-count-field"}),(0,n.kt)("inlineCode",{parentName:"h3"},"--count-field=<count-field>|-c <count-field>")),(0,n.kt)("p",null,"An optional argument specifying the field name of the count field. Defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"count"),"."),(0,n.kt)("p",null,"The count field and the value field must have different names."),(0,n.kt)("h2",u({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Find the least common values for field ",(0,n.kt)("inlineCode",{parentName:"p"},"id.orig_h"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"rare id.orig_h\n")),(0,n.kt)("p",null,"Find the least common values for field ",(0,n.kt)("inlineCode",{parentName:"p"},"count")," and present the value amount in a field ",(0,n.kt)("inlineCode",{parentName:"p"},"amount"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"rare count --count-field=amount\n")))}g.isMDXComponent=!0}}]);