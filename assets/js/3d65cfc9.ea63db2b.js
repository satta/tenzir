"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80330],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),d=o,g=s["".concat(c,".").concat(d)]||s[d]||m[d]||a;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55284:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>O,frontMatter:()=>g,metadata:()=>h,toc:()=>y});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&u(e,n,t[n]);return e},m=(e,t)=>a(e,i(t)),d=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const g={sidebar_position:4},f="Changelog",h={unversionedId:"contribute/changelog",id:"version-Tenzir v4.11/contribute/changelog",title:"Changelog",description:"We maintain automatically generated changelog that contains",source:"@site/versioned_docs/version-Tenzir v4.11/contribute/changelog.md",sourceDirName:"contribute",slug:"/contribute/changelog",permalink:"/contribute/changelog",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.11/contribute/changelog.md",tags:[],version:"Tenzir v4.11",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Build Environment",permalink:"/contribute/build-environment"},next:{title:"Documentation",permalink:"/contribute/documentation"}},b={},y=[],v={toc:y},k="wrapper";function O(e){var t=e,{components:n}=t,o=d(t,["components"]);return(0,r.kt)(k,m(s(s({},v),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",s({},{id:"changelog"}),"Changelog"),(0,r.kt)("p",null,"We maintain automatically generated ",(0,r.kt)("a",s({parentName:"p"},{href:"/changelog"}),"changelog")," that contains\nnoteworthy ",(0,r.kt)("em",{parentName:"p"},"user-facing")," changes."),(0,r.kt)("p",null,"The procedure for adding a changelog entry looks as follows."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open your pull request with your proposed changes"),(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/tenzir/tenzir/tree/main/changelog"}),(0,r.kt)("inlineCode",{parentName:"a"},"changelog")),"\ndirectory in the top-level repository directory and navigate to the\n",(0,r.kt)("inlineCode",{parentName:"li"},"next")," sub-directory."),(0,r.kt)("li",{parentName:"ol"},"Choose a category for your changes and go to the corresponding sub-directory:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Feature")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"li"},"features")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bug Fix")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"li"},"bug-fixes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Change")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"li"},"changes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Breaking Change")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"li"},"breaking-changes")))),(0,r.kt)("li",{parentName:"ol"},"Add a file with the following filename structure: ",(0,r.kt)("inlineCode",{parentName:"li"},"X1[-X2-...-Xn][--Y].md"),".\nwhere ",(0,r.kt)("inlineCode",{parentName:"li"},"X")," is either a PR number in the tenzir/tenzir repository or a GitHub\naccount name. We only include account names for external contributions\noutside from the Tenzir core team. Everything after the two dashes ",(0,r.kt)("inlineCode",{parentName:"li"},"--")," is an\noptional description to clarify what the change was about.")),(0,r.kt)("p",null,"Every installation and build of Tenzir contains the amalgamated CHANGELOG.md\nfile. To view that directly, open ",(0,r.kt)("inlineCode",{parentName:"p"},"path/to/build/CHANGELOG.md")," for your Tenzir\nbuild."))}O.isMDXComponent=!0}}]);