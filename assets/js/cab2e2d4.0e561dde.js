"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[51202],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},79215:(e,t,r)=>{r.d(t,{Z:()=>O});var n=r(67294),a=r(86010),o=r(22093),i=r(11128),s=r(55602),l=r(14699);const c={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u({href:e,children:t}){return n.createElement(i.Z,{href:e,className:(0,a.Z)("card padding--lg",c.cardContainer)},t)}function p({href:e,icon:t,title:r,description:o}){return n.createElement(u,{href:e},n.createElement("h2",{className:(0,a.Z)("text--truncate",c.cardTitle),title:r},t," ",r),o&&n.createElement("p",{className:(0,a.Z)("text--truncate",c.cardDescription),title:o},o))}function d({item:e}){var t;const r=(0,o.Wl)(e);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!=(t=e.description)?t:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null}function m({item:e}){var t,r;const a=(0,s.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,o.xz)(null!=(t=e.docId)?t:void 0);return n.createElement(p,{href:e.href,icon:a,title:e.label,description:null!=(r=e.description)?r:null==i?void 0:i.description})}function f({item:e}){switch(e.type){case"link":return n.createElement(m,{item:e});case"category":return n.createElement(d,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}var h=Object.defineProperty,g=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,b=(e,t,r)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,k=(e,t)=>{for(var r in t||(t={}))y.call(t,r)&&b(e,r,t[r]);if(g)for(var r of g(t))v.call(t,r)&&b(e,r,t[r]);return e};function w({className:e}){const t=(0,o.jA)();return n.createElement(O,{items:t.items,className:e})}function O(e){const{items:t,className:r}=e;if(!t)return n.createElement(w,k({},e));const i=(0,o.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},84954:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>g,default:()=>O,frontMatter:()=>h,metadata:()=>y,toc:()=>b});var n=r(3905),a=r(79215),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&p(e,r,t[r]);return e},m=(e,t)=>i(e,s(t)),f=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const h={},g="User Guides",y={unversionedId:"user-guides",id:"version-Tenzir v4.11/user-guides",title:"User Guides",description:"The user guides walk you through hands-on examples that illustrate how to use",source:"@site/versioned_docs/version-Tenzir v4.11/user-guides.md",sourceDirName:".",slug:"/user-guides",permalink:"/user-guides",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.11/user-guides.md",tags:[],version:"Tenzir v4.11",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Collect metrics",permalink:"/setup-guides/collect-metrics"},next:{title:"Run pipelines",permalink:"/user-guides/run-pipelines/"}},v={},b=[{value:"Datasets",id:"datasets",level:2},{value:"M57",id:"m57",level:3}],k={toc:b},w="wrapper";function O(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,n.kt)(w,m(d(d({},k),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"user-guides"}),"User Guides"),(0,n.kt)("p",null,"The user guides walk you through hands-on examples that illustrate how to use\nTenzir."),(0,n.kt)("h2",d({},{id:"datasets"}),"Datasets"),(0,n.kt)("p",null,"Throughout our guides, we use publicly available datasets so that you can follow\nalong."),(0,n.kt)("h3",d({},{id:"m57"}),"M57"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",d({parentName:"p"},{href:"https://digitalcorpora.org/corpora/scenarios/m57-patents-scenario/"}),"M57 Patents\nScenario"),"\ncontains large amounts of diverse network traffic. We enriched the PCAP from Nov\n18, 2009, by adding malicious traffic from\n",(0,n.kt)("a",d({parentName:"p"},{href:"https://malware-traffic-analysis.net"}),"malware-traffic-analysis.net"),". We\nadjusted all packet timestamp to 2021. Thereafter, we ran\n",(0,n.kt)("a",d({parentName:"p"},{href:"https://zeek.org"}),"Zeek")," v5.2.0 and ",(0,n.kt)("a",d({parentName:"p"},{href:"https://suricata.io"}),"Suricata")," 6.0.10 to\nobtain structured logs."),(0,n.kt)("p",null,"The dataset includes the following files:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"https://storage.googleapis.com/tenzir-datasets/M57/README.md"}),"README.md")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"https://storage.googleapis.com/tenzir-datasets/M57/zeek-all.log.zst"}),"zeek-all.log.zst")," (41 MB)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"https://storage.googleapis.com/tenzir-datasets/M57/suricata.json.zst"}),"suricata.json.zst")," (57 MB)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",d({parentName:"li"},{href:"https://storage.googleapis.com/tenzir-datasets/M57/PCAP/data.pcap"}),"data.pcap")," (3.8 GB)")),(0,n.kt)("p",null,"For following examples we assume that you have imported the demo data in your\nnode with the following two pipelines:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),'from https://storage.googleapis.com/tenzir-datasets/M57/suricata.json.zst \n  read suricata --no-infer\n| where #schema != "suricata.stats"\n| import\n')),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"from https://storage.googleapis.com/tenzir-datasets/M57/zeek-all.log.zst\n  read zeek-tsv\n| import\n")),(0,n.kt)("p",null,"Note that the demo node already comes with this demo data pre-populated for you."),(0,n.kt)(a.Z,{mdxType:"DocCardList"}))}O.isMDXComponent=!0}}]);