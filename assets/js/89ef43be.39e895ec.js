"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9227],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),l=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=l(r),d=n,m=h["".concat(u,".").concat(d)]||h[d]||c[d]||s;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},98251:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const s={sidebar_position:3},o="Use",i={unversionedId:"use-vast/integrate/threatbus/use",id:"use-vast/integrate/threatbus/use",title:"Use",description:"This section covers a brief walk-through of how to get started with Threat Bus.",source:"@site/docs/use-vast/integrate/threatbus/use.md",sourceDirName:"use-vast/integrate/threatbus",slug:"/use-vast/integrate/threatbus/use",permalink:"/docs/use-vast/integrate/threatbus/use",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/use-vast/integrate/threatbus/use.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Deploy",permalink:"/docs/use-vast/integrate/threatbus/deploy"},next:{title:"Design Goals",permalink:"/docs/use-vast/integrate/threatbus/understand/design-goals"}},u={},l=[{value:"Start Up",id:"start-up",level:2},{value:"Start Zeek as Threat Bus App",id:"start-zeek-as-threat-bus-app",level:2},{value:"Request an IoC Snapshot with Zeek",id:"request-an-ioc-snapshot-with-zeek",level:3},{value:"Use the Docker Container",id:"use-the-docker-container",level:2}],p={toc:l};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"use"},"Use"),(0,n.kt)("p",null,"This section covers a brief walk-through of how to get started with Threat Bus.\nFirst, ",(0,n.kt)("a",{parentName:"p",href:"install"},"install Threat Bus")," and all plugins you need. Use the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tenzir/threatbus/blob/master/config.yaml.example"},"default\nconfiguration\nfile")," to\nget started or ",(0,n.kt)("a",{parentName:"p",href:"configure"},"create a custom one"),"."),(0,n.kt)("h2",{id:"start-up"},"Start Up"),(0,n.kt)("p",null,"Display the help text:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"threatbus --help\n")),(0,n.kt)("p",null,"Start Threat Bus (it automatically looks for ",(0,n.kt)("inlineCode",{parentName:"p"},"config.yaml")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"config.yml")," in\nthe same directory):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"threatbus\n")),(0,n.kt)("p",null,"Pass a configuration file to Threat Bus via ",(0,n.kt)("inlineCode",{parentName:"p"},"-c <path/to/file>"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"threatbus -c path/to/config.yaml\n")),(0,n.kt)("h2",{id:"start-zeek-as-threat-bus-app"},"Start Zeek as Threat Bus App"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"understand/plugins/apps/zeek"},"Apps")," need to register at the bus. Zeek can be\nscripted, and the relevant functionality for Zeek to subscribe to Threat Bus is\nimplemented in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tenzir/threatbus/tree/master/apps/zeek"},"this Zeek\nscript"),". To connect\nZeek with Threat Bus, download and load the Zeek script as follows."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl -L -o threatbus.zeek https://raw.githubusercontent.com/tenzir/threatbus/master/apps/zeek/threatbus.zeek\nzeek -i <INTERFACE> -C threatbus.zeek\n")),(0,n.kt)("h3",{id:"request-an-ioc-snapshot-with-zeek"},"Request an IoC Snapshot with Zeek"),(0,n.kt)("p",null,"Threat Bus allows apps to ",(0,n.kt)("a",{parentName:"p",href:"understand/snapshotting"},"request snapshots")," of historic\nsecurity content. The Zeek script implements this request functionality for\nindicators. Invoke it like this."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'zeek -i <INTERFACE> -C threatbus.zeek -- "Tenzir::snapshot_intel=30 days"\n')),(0,n.kt)("h2",{id:"use-the-docker-container"},"Use the Docker Container"),(0,n.kt)("p",null,"Threat Bus can be used in a containerized setup. The pre-built\n",(0,n.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/tenzir/threatbus"},"docker image")," comes with all\nrequired dependencies and all existing plugins pre-installed."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"docker run tenzir/threatbus:latest --help\n")))}c.isMDXComponent=!0}}]);