"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8542],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||s;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<s;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const s={},i="Linux",o={unversionedId:"setup-vast/install/linux",id:"setup-vast/install/linux",title:"Linux",description:"Use our pre-built build packages or [build",source:"@site/docs/setup-vast/install/linux.md",sourceDirName:"setup-vast/install",slug:"/setup-vast/install/linux",permalink:"/docs/setup-vast/install/linux",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/setup-vast/install/linux.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Install",permalink:"/docs/setup-vast/install/"},next:{title:"macOS",permalink:"/docs/setup-vast/install/macos"}},l={},u=[{value:"systemd",id:"systemd",level:2},{value:"Prepare the host system",id:"prepare-the-host-system",level:3},{value:"Configure the unit",id:"configure-the-unit",level:3},{value:"Distribution Support",id:"distribution-support",level:2}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"linux"},"Linux"),(0,r.kt)("p",null,"Use our ",(0,r.kt)("a",{parentName:"p",href:"/docs/setup-vast/download#packages"},"pre-built build packages")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/setup-vast/build"},"build\nfrom source")," to install VAST on any Linux distribution."),(0,r.kt)("p",null,"To deploy VAST as system service, you can use our ",(0,r.kt)("a",{parentName:"p",href:"#systemd"},"systemd\nconfiguration"),"."),(0,r.kt)("h2",{id:"systemd"},"systemd"),(0,r.kt)("p",null,"VAST has native ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/tree/master/systemd/"},"systemd\nsupport")," for running as\nsystem service. The service is sandboxed and runs with limited privileges."),(0,r.kt)("h3",{id:"prepare-the-host-system"},"Prepare the host system"),(0,r.kt)("p",null,"Please note that all subsequent commands require ",(0,r.kt)("inlineCode",{parentName:"p"},"root")," privileges. The service\nrequires a user and group called ",(0,r.kt)("inlineCode",{parentName:"p"},"vast"),". You can create them as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"useradd --system --user-group vast\n")),(0,r.kt)("p",null,"Make sure that you don't grant any special rights to this user, e.g., do not\nenable ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo")," or other privileged commands. Once the user exists, you should\ncreate the directory for VAST's persistent data and change the permissions such\nthat it is owned by the new ",(0,r.kt)("inlineCode",{parentName:"p"},"vast")," user:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p /var/lib/vast\nchown -R vast:vast /var/lib/vast\n")),(0,r.kt)("p",null,"The systemd unit passes a\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tenzir/vast/tree/master/systemd/"},"vast.yaml")," configuration\nfile to the VAST process. Make sure that the new user can read the ",(0,r.kt)("inlineCode",{parentName:"p"},"vast.yaml"),"."),(0,r.kt)("h3",{id:"configure-the-unit"},"Configure the unit"),(0,r.kt)("p",null,"Before you begin, find the line beginning with ",(0,r.kt)("inlineCode",{parentName:"p"},"ExecStart=")," at the very bottom\nof the ",(0,r.kt)("inlineCode",{parentName:"p"},"[Service]")," section in the unit file. Depending on your installation path\nyou might need to change the location of the ",(0,r.kt)("inlineCode",{parentName:"p"},"vast")," binary and configuration\nfile."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-config"},"ExecStart=/path/to/vast start\n")),(0,r.kt)("p",null,"In case your VAST deployment needs elevated privileges, e.g., to capture\npackets, you can provide them as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ini"},"CapabilityBoundingSet=CAP_NET_RAW\nAmbientCapabilities=CAP_NET_RAW\n")),(0,r.kt)("p",null,"Then link the unit file to your systemd search path:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl link vast.service\n")),(0,r.kt)("p",null,"To have the service start up automatically on system boot, ",(0,r.kt)("inlineCode",{parentName:"p"},"enable")," it via\n",(0,r.kt)("inlineCode",{parentName:"p"},"systemd"),". Otherwise, just ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," it to run it immediately."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl enable vast\nsystemctl start vast\n")),(0,r.kt)("h2",{id:"distribution-support"},"Distribution Support"),(0,r.kt)("admonition",{title:"Community contributions wanted!",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We are striving to bring VAST into the package managers of all major Linux\ndistributions. Unfortunately we can do so only at a best-effort basis, but\nwe much appreciate community contributions.")))}c.isMDXComponent=!0}}]);