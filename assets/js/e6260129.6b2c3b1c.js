"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[22621],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,p(p({ref:t},u),{},{components:n})):r.createElement(f,p({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15044:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>y,default:()=>v,frontMatter:()=>f,metadata:()=>b,toc:()=>k});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&u(e,n,t[n]);return e},s=(e,t)=>a(e,p(t)),m=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const f={sidebar_position:2},y="Update a node",b={unversionedId:"setup-guides/update-a-node",id:"setup-guides/update-a-node",title:"Update a node",description:"To update a deployed node, proceed with the",source:"@site/docs/setup-guides/update-a-node.md",sourceDirName:"setup-guides",slug:"/setup-guides/update-a-node",permalink:"/next/setup-guides/update-a-node",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/setup-guides/update-a-node.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Deploy a node",permalink:"/next/setup-guides/deploy-a-node"},next:{title:"Deploy the platform",permalink:"/next/setup-guides/deploy-the-platform"}},g={},k=[{value:"Docker",id:"docker",level:2},{value:"Linux",id:"linux",level:2},{value:"macOS",id:"macos",level:2}],O={toc:k},h="wrapper";function v(e){var t=e,{components:n}=t,o=m(t,["components"]);return(0,r.kt)(h,s(d(d({},O),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",d({},{id:"update-a-node"}),"Update a node"),(0,r.kt)("p",null,"To update a ",(0,r.kt)("a",d({parentName:"p"},{href:"/next/setup-guides/deploy-a-node"}),"deployed node"),", proceed with the\nplatform-specific instructions below."),(0,r.kt)("h2",d({},{id:"docker"}),"Docker"),(0,r.kt)("p",null,"Run the following commands to update a Docker Compose deployment with a\nconfiguration file ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.NODE.yaml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"docker compose -f docker-compose.NODE.yaml pull\ndocker compose -f docker-compose.NODE.yaml down\ndocker compose -f docker-compose.NODE.yaml up --detach\n")),(0,r.kt)("p",null,"Note that we ",(0,r.kt)("inlineCode",{parentName:"p"},"pull")," first so that the subsequent downtime between ",(0,r.kt)("inlineCode",{parentName:"p"},"down")," and\n",(0,r.kt)("inlineCode",{parentName:"p"},"up")," is minimal."),(0,r.kt)("h2",d({},{id:"linux"}),"Linux"),(0,r.kt)("p",null,"Run the installer again via:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"curl https://get.tenzir.app | sh\n")),(0,r.kt)("h2",d({},{id:"macos"}),"macOS"),(0,r.kt)("p",null,"Please use Docker ",(0,r.kt)("a",d({parentName:"p"},{href:"https://levelup.gitconnected.com/docker-on-apple-silicon-mac-how-to-run-x86-containers-with-rosetta-2-4a679913a0d5"}),"with\nRosetta"),"\nuntil we offer a native package."))}v.isMDXComponent=!0}}]);