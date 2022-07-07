"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1689],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,v=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(v,a(a({ref:t},p),{},{components:n})):r.createElement(v,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const o={},a="Build Environment",l={unversionedId:"develop-vast/contribution-workflow/build-environment",id:"develop-vast/contribution-workflow/build-environment",title:"Build Environment",description:"Use Nix as Reproducible Development Environment",source:"@site/docs/develop-vast/contribution-workflow/build-environment.md",sourceDirName:"develop-vast/contribution-workflow",slug:"/develop-vast/contribution-workflow/build-environment",permalink:"/docs/develop-vast/contribution-workflow/build-environment",draft:!1,editUrl:"https://github.com/tenzir/vast/tree/master/web/docs/develop-vast/contribution-workflow/build-environment.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Contribution Workflow",permalink:"/docs/develop-vast/contribution-workflow/"},next:{title:"Changelog",permalink:"/docs/develop-vast/contribution-workflow/changelog"}},c={},u=[{value:"Use Nix as Reproducible Development Environment",id:"use-nix-as-reproducible-development-environment",level:2},{value:"Static Builds",id:"static-builds",level:3}],p={toc:u};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"build-environment"},"Build Environment"),(0,i.kt)("h2",{id:"use-nix-as-reproducible-development-environment"},"Use Nix as Reproducible Development Environment"),(0,i.kt)("p",null,"The dependencies for a dynamic build can be fetched by running ",(0,i.kt)("inlineCode",{parentName:"p"},"nix develop"),"\nfrom the topmost directory in the source tree."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://storage.googleapis.com/tenzir-public-data/vast-static-builds/vast-static-latest.tar.gz"},"direnv")," tool is able to automate this process, create an ",(0,i.kt)("inlineCode",{parentName:"p"},".envrc"),"\nwith the content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"use flake\n")),(0,i.kt)("p",null,"and it will automatically add the dependencies to your shell environment when\nyou move into the source directory."),(0,i.kt)("p",null,"If you want to silence the messages about binary caches you can use a variation\nof ",(0,i.kt)("inlineCode",{parentName:"p"},".envrc")," that invokes ",(0,i.kt)("inlineCode",{parentName:"p"},"nix")," with a lower verbosity setting:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'use_flake2() {\n  watch_file flake.nix\n  watch_file flake.lock\n  mkdir -p "$(direnv_layout_dir)"\n  eval "$(nix --quiet --quiet print-dev-env --profile "$(direnv_layout_dir)/flake-profile" "$@")"\n}\n\nuse_flake2\n')),(0,i.kt)("p",null,"The VAST repository comes with a set of CMake configure and build presets that\ncan be used in this environment:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nix-clang-debug")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nix-clang-redeb")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nix-clang-release")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nix-gcc-debug")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nix-gcc-redeb")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nix-gcc-release"))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This build environment is currently only tested on Linux.")),(0,i.kt)("h3",{id:"static-builds"},"Static Builds"),(0,i.kt)("p",null,"Static binaries require a that the dependencies were built in static mode as\nwell. That means we need to use a different environment, you can enter it with"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"nix develop .#vast-static\n")),(0,i.kt)("p",null,"The CMake presets for that mode are"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nix-gcc-static-debug")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nix-gcc-static-redeb")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nix-gcc-static-release"))))}s.isMDXComponent=!0}}]);