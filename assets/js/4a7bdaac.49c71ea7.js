"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[24228],{3905:(M,D,A)=>{A.d(D,{Zo:()=>g,kt:()=>j});var c=A(67294);function N(M,D,A){return D in M?Object.defineProperty(M,D,{value:A,enumerable:!0,configurable:!0,writable:!0}):M[D]=A,M}function w(M,D){var A=Object.keys(M);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(M);D&&(c=c.filter((function(D){return Object.getOwnPropertyDescriptor(M,D).enumerable}))),A.push.apply(A,c)}return A}function e(M){for(var D=1;D<arguments.length;D++){var A=null!=arguments[D]?arguments[D]:{};D%2?w(Object(A),!0).forEach((function(D){N(M,D,A[D])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(A)):w(Object(A)).forEach((function(D){Object.defineProperty(M,D,Object.getOwnPropertyDescriptor(A,D))}))}return M}function T(M,D){if(null==M)return{};var A,c,N=function(M,D){if(null==M)return{};var A,c,N={},w=Object.keys(M);for(c=0;c<w.length;c++)A=w[c],D.indexOf(A)>=0||(N[A]=M[A]);return N}(M,D);if(Object.getOwnPropertySymbols){var w=Object.getOwnPropertySymbols(M);for(c=0;c<w.length;c++)A=w[c],D.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(M,A)&&(N[A]=M[A])}return N}var x=c.createContext({}),t=function(M){var D=c.useContext(x),A=D;return M&&(A="function"==typeof M?M(D):e(e({},D),M)),A},g=function(M){var D=t(M.components);return c.createElement(x.Provider,{value:D},M.children)},I="mdxType",i={inlineCode:"code",wrapper:function(M){var D=M.children;return c.createElement(c.Fragment,{},D)}},n=c.forwardRef((function(M,D){var A=M.components,N=M.mdxType,w=M.originalType,x=M.parentName,g=T(M,["components","mdxType","originalType","parentName"]),I=t(A),n=N,j=I["".concat(x,".").concat(n)]||I[n]||i[n]||w;return A?c.createElement(j,e(e({ref:D},g),{},{components:A})):c.createElement(j,e({ref:D},g))}));function j(M,D){var A=arguments,N=D&&D.mdxType;if("string"==typeof M||N){var w=A.length,e=new Array(w);e[0]=n;var T={};for(var x in D)hasOwnProperty.call(D,x)&&(T[x]=D[x]);T.originalType=M,T[I]="string"==typeof M?M:N,e[1]=T;for(var t=2;t<w;t++)e[t]=A[t];return c.createElement.apply(null,e)}return c.createElement.apply(null,A)}n.displayName="MDXCreateElement"},83092:(M,D,A)=>{A.r(D),A.d(D,{assets:()=>d,contentTitle:()=>r,default:()=>o,frontMatter:()=>j,metadata:()=>a,toc:()=>z});var c=A(3905),N=Object.defineProperty,w=Object.defineProperties,e=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,g=(M,D,A)=>D in M?N(M,D,{enumerable:!0,configurable:!0,writable:!0,value:A}):M[D]=A,I=(M,D)=>{for(var A in D||(D={}))x.call(D,A)&&g(M,A,D[A]);if(T)for(var A of T(D))t.call(D,A)&&g(M,A,D[A]);return M},i=(M,D)=>w(M,e(D)),n=(M,D)=>{var A={};for(var c in M)x.call(M,c)&&D.indexOf(c)<0&&(A[c]=M[c]);if(null!=M&&T)for(var c of T(M))D.indexOf(c)<0&&t.call(M,c)&&(A[c]=M[c]);return A};const j={title:"Migrating from VAST to Tenzir",authors:"dominiklohmann",date:new Date("2023-06-26T00:00:00.000Z"),tags:["tenzir","vast","community","project"]},r=void 0,a={permalink:"/blog/migrating-from-vast-to-tenzir",source:"@site/blog/migrating-from-vast-to-tenzir/index.md",title:"Migrating from VAST to Tenzir",description:"VAST is now Tenzir. This blog post describes what changed when [we renamed the",date:"2023-06-26T00:00:00.000Z",formattedDate:"June 26, 2023",tags:[{label:"tenzir",permalink:"/blog/tags/tenzir"},{label:"vast",permalink:"/blog/tags/vast"},{label:"community",permalink:"/blog/tags/community"},{label:"project",permalink:"/blog/tags/project"}],readingTime:1.55,hasTruncateMarker:!0,authors:[{name:"Dominik Lohmann",title:"Engineering Manager",url:"https://github.com/dominiklohmann",email:"dominik@tenzir.com",imageURL:"https://github.com/dominiklohmann.png",key:"dominiklohmann"}],frontMatter:{title:"Migrating from VAST to Tenzir",authors:"dominiklohmann",date:"2023-06-26T00:00:00.000Z",tags:["tenzir","vast","community","project"]},prevItem:{title:"Mobilizing Zeek Logs",permalink:"/blog/mobilizing-zeek-logs"},nextItem:{title:"Visibility Across Space and Time is now Tenzir",permalink:"/blog/vast-to-tenzir"}},d={authorsImageUrls:[void 0]},z=[],l={toc:z},y="wrapper";function o(M){var D=M,{components:A}=D,N=n(D,["components"]);return(0,c.kt)(y,i(I(I({},l),N),{components:A,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"VAST is now Tenzir. This blog post describes what changed when ",(0,c.kt)("a",I({parentName:"p"},{href:"/blog/vast-to-tenzir"}),"we renamed the\nproject"),"."),(0,c.kt)("p",null,(0,c.kt)("figure",I({parentName:"p"},{className:"markdown-inline-svg"}),"\n  ",(0,c.kt)("svg",I({parentName:"figure"},{viewBox:"0 0 555.918 140",role:"img","aria-hidden":"true"}),(0,c.kt)("symbol",I({parentName:"svg"},{id:"image-2e14767d57951a7380e610ba38ae547485da886fe977ce104fa618aa8ce508dac411f2b1d1220ace20d2e788853983db"}),(0,c.kt)("image",I({parentName:"symbol"},{width:"100%",height:"100%",href:"data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bD0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgdmlld0JveD0iMzU1MjcxMzdlLTIyIDAgNTUuMDc5NjQ3IDQ4Ljk5MjU2IiB3aWR0aD0iNTUuMDc5NjQ3IiBoZWlnaHQ9IjQ4Ljk5MjU2Ij4KICA8ZGVmcy8+CiAgPGcgaWQ9IkNhbnZhc18xIiBzdHJva2Utb3BhY2l0eT0iMSIgc3Ryb2tlPSJub25lIiBzdHJva2UtZGFzaGFycmF5PSJub25lIiBmaWxsPSJub25lIiBmaWxsLW9wYWNpdHk9IjEiPgogICAgPHRpdGxlPkNhbnZhcyAxPC90aXRsZT4KICAgIDxnIGlkPSJDYW52YXNfMV9MYXllcl8xIj4KICAgICAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogICAgICA8ZyBpZD0iR3JvdXBfMiI+CiAgICAgICAgPHRpdGxlPkViZW5lXzE8L3RpdGxlPgogICAgICAgIDxnIGlkPSJHcmFwaGljXzQiPgogICAgICAgICAgPHBhdGggZD0iTSA1My44MDA4OSAuMDE2NTA2MzMxIEwgMjEuODAwODkgLjAxNjUwNjMzMSBDIDIxLjY2NjQ4NSAuMDEzMDMwMTA1IDIxLjUzMzA3IC4wNDAzOTcwNTQgMjEuNDEwODkgLjA5NjUwNjMzIEMgMjEuMTU1ODIxIC4xOTU4NDM3MSAyMC45NTI2MjQgLjM5NTM5NjU1IDIwLjg0ODY4NyAuNjQ4NjI0OSBDIDIwLjc0NDc1IC45MDE4NTMyIDIwLjc0OTE2IDEuMTg2NjE4MSAyMC44NjA4OSAxLjQzNjUwNjMgTCAyNi4wNjA4OSAxMy44OTY1MDYgQyAyNi4yMTUxNSAxNC4yODQxMDMgMjYuNTkzODE0IDE0LjUzNTIxNyAyNy4wMTA4OSAxNC41MjY1MDYgTCAzMS44NjA4OSAxNC41MjY1MDYgQyAzMi4yMzQwMjUgMTQuNDk5NzIgMzIuNTk1MTk3IDE0LjY2NDQwNiAzMi44MTk2NTQgMTQuOTYzNjgzIEMgMzMuMDQ0MTEgMTUuMjYyOTYgMzMuMTAxMDgyIDE1LjY1NTc5NyAzMi45NzA4OSAxNi4wMDY1MDYgTCAzMC4yODA4OSAyMi40NDY1MDYgQyAzMC4wNzAwNTUgMjMuMDEwNzkgMzAuMDcwMDU1IDIzLjYzMjIyMyAzMC4yODA4OSAyNC4xOTY1MDYgTCAzNi44MDA4OSAzOS43MTY1MDYgQyAzNy4wMTA4OSA0MC4yOTY1MDYgMzcuMzYwODkgNDAuNzE2NTA2IDM3LjkyMDg5IDQwLjcxNjUwNiBDIDM4LjM3MjgzMiA0MC43MTE3OTMgMzguNzczMDc0IDQwLjQyMzYyIDM4LjkyMDg5IDM5Ljk5NjUwNiBMIDU0LjkyMDg5IDEuNjU2NTA2MyBDIDU1LjE0MzMzNCAxLjI5MDgxOTEgNTUuMTMxMTYgLjgyODc4Njg1IDU0Ljg4OTc3IC40NzUzMjAxIEMgNTQuNjQ4MzggLjEyMTg1MzM2IDU0LjIyMjQ1IC0uMDU3NjE2MDIgNTMuODAwODkgLjAxNjUwNjMzMSBaIiBmaWxsPSJibGFjayIvPgogICAgICAgIDwvZz4KICAgICAgICA8ZyBpZD0iR3JhcGhpY18zIj4KICAgICAgICAgIDxwYXRoIGQ9Ik0gMzUuMTAwODkgNDcuMzk2NTA2IEwgMTcuNzgwODkgNS44MjY1MDYgTCAxNS42MzA4OSAuNjE2NTA2MyBDIDE1LjQ3NDI3NiAuMjU3NTEzOTYgMTUuMTIyNTAzIC4wMjI5OTgyNDcgMTQuNzMwODkgLjAxNjUwNjMzMSBMIDEuMjMwODg5MiAuMDE2NTA2MzMxIEMgLjgxOTcyOCAtLjA0MTUwNjY2IC40MTE3MTY1IC4xNDEzNDIzOSAuMTgxMzg2MjkgLjQ4NjgzNzcgQyAtLjA0ODk0Mzk0IC44MzIzMzMxIC0uMDYwODAwMTkgMS4yNzkyODU2IC4xNTA4ODkxOSAxLjYzNjUwNjMgTCAxOC45MDA4OSA0Ni42MzY1MDYgTCAxOS42MjA4OSA0OC4zNzY1MDYgQyAxOS43NzU5NTQgNDguNzQyNjkgMjAuMTMzMjUgNDguOTgyMTk2IDIwLjUzMDg5IDQ4Ljk4NjUwNiBMIDM0LjAyMDg5IDQ4Ljk4NjUwNiBDIDM0LjQyMDY3IDQ5LjAyODc3IDM0LjgxMTI2IDQ4Ljg0NzU0NyAzNS4wMzcxNCA0OC41MTUgQyAzNS4yNjMwMjMgNDguMTgyNDUgMzUuMjg3NTI0IDQ3Ljc1MjU2NiAzNS4xMDA4OSA0Ny4zOTY1MDYgWiIgZmlsbD0iYmxhY2siLz4KICAgICAgICA8L2c+CiAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPg=="}))),(0,c.kt)("symbol",I({parentName:"svg"},{id:"image-51cca1a9cff49d4751c0e561289b776024479dbac27992d709fd9f58acfc5951e1ec0d66f154fb9379b5cf286a4686ff"}),(0,c.kt)("image",I({parentName:"symbol"},{width:"100%",height:"100%",href:"data:image/svg+xml;base64,PHN2ZyB4bWxuczp4bD0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHZlcnNpb249IjEuMSIgdmlld0JveD0iOTYgMCA3OS42OTc4MSA0OS4wMDQ2OCIgd2lkdGg9Ijc5LjY5NzgxIiBoZWlnaHQ9IjQ5LjAwNDY4Ij4KICA8ZGVmcy8+CiAgPGcgaWQ9IkNhbnZhc18xIiBzdHJva2UtZGFzaGFycmF5PSJub25lIiBmaWxsLW9wYWNpdHk9IjEiIHN0cm9rZS1vcGFjaXR5PSIxIiBzdHJva2U9Im5vbmUiIGZpbGw9Im5vbmUiPgogICAgPHRpdGxlPkNhbnZhcyAxPC90aXRsZT4KICAgIDxnIGlkPSJDYW52YXNfMV9MYXllcl8xIj4KICAgICAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogICAgICA8ZyBpZD0iR3JvdXBfNSI+CiAgICAgICAgPHRpdGxlPkViZW5lXzE8L3RpdGxlPgogICAgICAgIDxnIGlkPSJHcmFwaGljXzciPgogICAgICAgICAgPHRpdGxlPlNoYXBlPC90aXRsZT4KICAgICAgICAgIDxwYXRoIGQ9Ik0gMTIyLjQzNzQyIDMyLjkyMjQ3IEwgMTM1Ljc1NzQyIDEuNDMyNDY5MyBDIDEzNS44NzI0NSAxLjE4MTUwNzggMTM1Ljg3ODYyIC44OTQxNTU3IDEzNS43NzQ0NiAuNjM4NDg5OSBDIDEzNS42NzAzIC4zODI4MjQxIDEzNS40NjUwOCAuMTgxNTkyNiAxMzUuMjA3NDIgLjA4MjQ2OTI3IEMgMTM1LjA4MDI0IC4wMzEwOTcwOTMgMTM0Ljk0NDU3IC4wMDM5NjM5NzA1IDEzNC44MDc0MiAuMDAyNDY5Mjc0OCBMIDEwMi4yNjc0MiAuMDAyNDY5Mjc0OCBDIDEwMS44NTAzNCAtLjAwNjI0MTc1OCAxMDEuNDcxNjggLjI0NDg3MjMgMTAxLjMxNzQyIC42MzI0NjkzIEwgOTYuMDk3NDIgMTMuMTMyNDcgQyA5NS45NzYxIDEzLjM4NjgwNCA5NS45Njc3MyAxMy42ODA1MTcgOTYuMDc0MzUgMTMuOTQxMzUyIEMgOTYuMTgwOTYgMTQuMjAyMTg3IDk2LjM5MjY4IDE0LjQwNTkzNCA5Ni42NTc0MiAxNC41MDI0NyBDIDk2Ljc4MDc0IDE0LjU1NTAwNiA5Ni45MTMzNyAxNC41ODIyMTIgOTcuMDQ3NDIgMTQuNTgyNDcgTCAxMTIuODA3NDIgMTQuNTgyNDcgQyAxMTMuMzU5NyAxNC41ODI0NyAxMTMuODA3NDIgMTUuMDMwMTg1IDExMy44MDc0MiAxNS41ODI0NyBDIDExMy44MDU5MiAxNS43MTk2MjQgMTEzLjc3ODc5IDE1Ljg1NTI5IDExMy43Mjc0MiAxNS45ODI0NyBMIDEwMC41ODc0MiA0Ny41NzI0NyBDIDEwMC40NzI4OCA0Ny44MjQ3MiAxMDAuNDY4MTEgNDguMTEzMTggMTAwLjU3NDI2IDQ4LjM2OTA3NCBDIDEwMC42ODA0MSA0OC42MjQ5NyAxMDAuODg3OTYgNDguODI1MzYgMTAxLjE0NzQyIDQ4LjkyMjQ3IEMgMTAxLjI3MDc0IDQ4Ljk3NTAwNiAxMDEuNDAzMzcgNDkuMDAyMjEgMTAxLjUzNzQyIDQ5LjAwMjQ3IEwgMTM1Ljk4NzQyIDQ5LjAwMjQ3IEMgMTM2LjQyNTAzIDQ5LjAzMTUwNSAxMzYuODMwNDkgNDguNzcyMDEgMTM2Ljk4NzQyIDQ4LjM2MjQ3IEwgMTQyLjIwNzQyIDM1Ljc4MjQ3IEMgMTQyLjMyMTk2IDM1LjUzMDIyIDE0Mi4zMjY3MiAzNS4yNDE3NiAxNDIuMjIwNTcgMzQuOTg1ODY0IEMgMTQyLjExNDQyIDM0LjcyOTk3IDE0MS45MDY4NyAzNC41Mjk1OCAxNDEuNjQ3NDIgMzQuNDMyNDcgQyAxNDEuNTI0MSAzNC4zNzk5MzMgMTQxLjM5MTQ2IDM0LjM1MjcyNyAxNDEuMjU3NDIgMzQuMzUyNDcgTCAxMjMuMzg3NDIgMzQuMzUyNDcgQyAxMjIuODM1MTMgMzQuMzUyNDcgMTIyLjM4NzQyIDMzLjkwNDc1NCAxMjIuMzg3NDIgMzMuMzUyNDcgQyAxMjIuMzc1NDQgMzMuMjA3MjQgMTIyLjM5MjQzIDMzLjA2MTA3NiAxMjIuNDM3NDIgMzIuOTIyNDcgWiIgZmlsbD0iYmxhY2siLz4KICAgICAgICA8L2c+CiAgICAgICAgPGcgaWQ9IkdyYXBoaWNfNiI+CiAgICAgICAgICA8dGl0bGU+U2hhcGUtMjwvdGl0bGU+CiAgICAgICAgICA8cGF0aCBkPSJNIDEzMC4xNTc0MiAzMC4wODI0NyBMIDE0My44Njc0MiAzMC4wODI0NyBDIDE0NC4yODQ0OSAzMC4wOTExOCAxNDQuNjYzMTYgMjkuODQwMDY2IDE0NC44MTc0MiAyOS40NTI0NyBMIDE1MC44MTc0MiAxNS4xOTI0NyBDIDE1MC45NzE2OCAxNC44MDQ4NzIgMTUxLjM1MDM0IDE0LjU1Mzc1OCAxNTEuNzY3NDIgMTQuNTYyNDcgTCAxNjkuMzk3NDIgMTQuNTYyNDcgQyAxNjkuODMyNDYgMTQuNTkyOTk1IDE3MC4yMzcxMiAxNC4zMzgwNjEgMTcwLjM5NzQyIDEzLjkzMjQ3IEwgMTc1LjYxNzQyIDEuNDMyNDY5MyBDIDE3NS43MjkxIDEuMTcxMDEyOCAxNzUuNzI0MjMgLjg3NDM3MjYgMTc1LjYwNCAuNjE2NzMxMTQgQyAxNzUuNDgzNzYgLjM1OTA4OTcyIDE3NS4yNTk1NSAuMTY0ODA3MyAxNzQuOTg3NDIgLjA4MjQ2OTI3IEMgMTc0Ljg2NDEgLjAyOTkzMjc0MyAxNzQuNzMxNDYgLjAwMjcyNzAwOSAxNzQuNTk3NDIgLjAwMjQ2OTI3NDggTCAxNDEuODA3NDIgLjAwMjQ2OTI3NDggQyAxNDEuMzcyMzcgLS4wMjgwNTY4NzMgMTQwLjk2NzcxIC4yMjY4Nzc1OSAxNDAuODA3NDIgLjYzMjQ2OTMgTCAxMjkuMTU3NDIgMjguNjMyNDcgQyAxMjkuMDQyMzggMjguODgzNDMgMTI5LjAzNjIyIDI5LjE3MDc4MyAxMjkuMTQwMzggMjkuNDI2NDUgQyAxMjkuMjQ0NTQgMjkuNjgyMTE0IDEyOS40NDk3NiAyOS44ODMzNDYgMTI5LjcwNzQyIDI5Ljk4MjQ3IEMgMTI5Ljg0ODY3IDMwLjA0NzIxIDEzMC4wMDIwNCAzMC4wODEyOTMgMTMwLjE1NzQyIDMwLjA4MjQ3IFoiIGZpbGw9ImJsYWNrIi8+CiAgICAgICAgPC9nPgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4="}))),"eyJ2ZXJzaW9uIjoiMSIsImVuY29kaW5nIjoiYnN0cmluZyIsImNvbXByZXNzZWQiOnRydWUsImVuY29kZWQiOiJ4nO1ZWXPjxlx1MDAxMX7fX7GlPNqRcZKAU3mgSC5cdTAwMTdcblx1MDAwMYpcIrhcdTAwMTKYcqVAXHUwMDAwhHDwMC9cdTAwMWMu//d8PVx1MDAwM1x1MDAxMqBcdTAwMGVbdtmOK4mq7Fx1MDAwNdDTPT3d/fUx/OHDx49X+2JcdTAwMTNcXH378SrIPTeN/K2bXX1N34/Bdlx1MDAxN61XIEnsfbc+bD228mm/3+y+/eZcdTAwMWJ3s7muua699ZJzXHUwMDA2abBcZlb7XHUwMDFk1v5cdTAwMTPvXHUwMDFmP/7A/lx1MDAwZkrkXHUwMDEz//Dh+2K6jYvd96uZ3W157iBcdTAwMWVtXHUwMDE5K1t0UihaumFQf87xTVWE83tBmmn1e1x1MDAxNvn7J3xcdTAwMTN19VpcdTAwMTc1udWWlZYua9p5xVNcdTAwMTCFT3taXCJcdNdC8088r3FXYUq713J3++06XHS663S9Ja32W3e127hbXHUwMDFjsNZt7npJuF1cdTAwMWZW/nndX1x1MDAxNuyvXrOI0nSyL1JuQtd7OmxcdTAwMWKn47s8VGdQnn0/8+3WMHbNhS3Dp1WwI1PXZ1hvXFwv2pN9RKE+XHUwMDA36bcxfOaV72qttu4yMMgtq0OaNlx1MDAwNa/8SvBcdTAwMDVhXHUwMDE3XHUwMDA0tFhst1W1papibd06XpT284/WesVCR1x1MDAxMWRcdTAwMWSe0WuuaNdDuOyZ0IWb7oLapqRCv1x1MDAwZaVcdTAwMGI1XHUwMDBlXHUwMDFi3+VMYktr6ZJcdTAwMDJfa3pttjRaJc950rWXvLLPbu/uXHUwMDBmO2ZcXPdcdTAwMTj4XHUwMDE3XHUwMDBl45a5UkXPc0VX91x1MDAxNlx1MDAwYkX3lTbehUBtiZKmz9vtliApSlv3XHUwMDExXHUwMDA0UlvXJb8t6Fx1MDAwYl9fqJrrLTxVV8VAXGY8wW+1XHUwMDE2oqos5rrc1ueqt5C0llx1MDAwYq1bzSDZXHUwMDAxTcFcdTAwMTk39Hd2K1x1MDAxZaun79i/P379XHUwMDFhtpaFcfjrRE+N+5W2sO/tg7ndP77ElrvdrrNLbMkt8VpqXHSqpEqyrOiKeIE0WdavNbhPXHUwMDEz2rqotlx1MDAxYi4+466BzTPShPdcdTAwMDPrL4rgXHRq+39cdTAwMDRUP5y9evKJVH358TnWXHUwMDE0TVYkXVFfg5oo629hXHKxXHUwMDA2iEqy+GdcdTAwMDLbZlx1MDAxZDVcdTAwMGJcdTAwMDP91U9cdTAwMWbr4GAv5+fvvn51dSPinq3/8IzvKnV3++56uYz2OMhcdTAwMWQp8Vwise3d7f4mWvnRKnxOXHUwMDBiVv5cdTAwMWJcdTAwMTTG1SEwPVx1MDAwNe5cdTAwMGKHg69JQ+2IOFxmflx1MDAwMsBcdTAwMGKtn9y5m/73m9VNZlx1MDAwNXf/moe6+q7iKFx07yiOknYtie2WrIpCu1x1MDAwNUdKr1RHUbmWZEFSUUElqaWItaf/X1x1MDAxZE+Cf7I6tpFcdTAwMWbReMi1oo3i+Fx1MDAwMsZnwFxuuiS3XHUwMDA1sVbqP4/Xd1x1MDAxNEcpXHUwMDEwlXar7attVDpcdTAwMTfnXHUwMDE2gpYozF1Zc1x1MDAwM1VpK5rqu1x1MDAxYapcXKC3214gXG7Kwm2JmutqXqBcbprveoooLqS56IuSJLheIFx0vlx1MDAxNLQ1TVOpV/Dnv0lxfKPuNVx1MDAxMunbTYsutGVV1trv8Vx1MDAwYsfwuq9cdTAwMGWfuu1yOInun5JDv7z5clx1MDAxYv95Yv0lik/1X9HbXHUwMDFhir+GXHUwMDE2p1FuWP2XxGtNQJ8jKVwiMlx1MDAwM8rRm3W8hVao7f0y+L+ziajwpSGuXHUwMDE1uf1cdTAwMDeV4edYa+zw21wi7VfUn3fWtV9eof5TXHUwMDE1+9ei90WqPaNX0VtqW3tXVuXoXfU6UX47/mtolbn0KFx1MDAwN5NcdTAwMDfHnf/50StcXOu6KklKW9NFSVfrdFacyIoqibIgii0se1x1MDAxM73SQlx1MDAwZlx1MDAxNOX3RK+ko1x1MDAxMmAsqo3zf/j+d8H3QyXhyt1sJugggrOrro5RkN28XHUwMDFkUlx1MDAxZirPsf6i9vDvP4HXsXS1jJaB3Wyzv9lcdTAwMWTDr/JlevUsUfxx11x1MDAwMlxiU3d6P6RN6fHbXHUwMDBitf42d3dBS/n67rMlzYpcdTAwMWJl/pBcdTAwMWa8cqPMe0Lkfr5cdTAwMTe83vo4lH3ZL1TZLNSjt/SOpp2oo4muzFx1MDAwN+nBLYwwXHUwMDE4iLv5ytSN5ZPgf+60hoVcdTAwMGVcdTAwMGXv4JfmYS7froalkZm9ztGTZysjOu+ROGVzj1x1MDAxYtFbZny9dFx1MDAxZlx1MDAwZqUvu9mDmM5X9+Ww7Fx1MDAxZsyJXHUwMDE2XHUwMDE5n2ept7I2c0nRjZi+XHUwMDE5ob9MU1+4PVx1MDAwNtB3ZDuh2e3Io4lcIo1sTzEnXHUwMDFkXHUwMDAxz9h7LI26WCuliT9cYsHrqcPYUa0yzKHPevaQrtzPY3xcdTAwMWbjeyezeo5ixMo/jG5Hm1xyviy9QvuqXHUwMDFidcK7gVx1MDAxN7pcdTAwMGZYl1hP89XsyVx1MDAxMzXiL/3Pt0dXmu5ng0+lO/hUeMtP6t3k9jCX1Fx1MDAxNPSl+5Dvhlx1MDAwZnrmPFhcdTAwMWL/c0K64yyW4C317WxcIlx1MDAxZb3Bp9h9vFx1MDAwN4/RlFx1MDAwN3uqx/lyXHUwMDFhXHUwMDE5g9lmPsjO73fhOoRu4d3n+40/yNO7kz5FJ7/r6lx1MDAwMmTtZjbTPzR6+cpcdTAwMTikXHT06TlcdTAwMGaq5DxaXHUwMDBi84tuOo9p6qXQP67WXcjLn4KHL4XR62tDufpW7clsUtxsZrD3vXx79Fx1MDAxZm9cdTAwMTbWxGD2eSnnSzR7UNPH8lU5Td0+w2aZO0jjx9KLLtY05aXW2nm8SV+csZaXOY/3a2NAPlx1MDAxMkLTNophPC6tcoyzmHhOXG4zXHUwMDFly0Y/XHUwMDAzzVx1MDAxNIexJ3Ja/2CBXHUwMDBlv6tmcdPDe2lNXHUwMDE0xSpccsGadPJh3FdMe5ohXiq+UFx1MDAxZfWcwugqyshcdTAwMWXnlj2VK1x1MDAxZVx1MDAxOfJcdTAwMDQr6lx1MDAxY6zYVKxeXGKcnOVJVtkpwVOOeoZcdTAwMDI98uq7YMXTbNTtXHUwMDFjTDuErKRcdTAwMDB/bpbTg1x1MDAxOXdkq2eEiElaj5g2oLtZ6YBvPUOAvMws+1x1MDAxOeJcdTAwMWT/MZqAc1xuVlx1MDAwZjpcdTAwMTGtZ6rQXHUwMDA1sd5cdTAwMTHZftDZ7HmCXHRcdTAwMWSBSX7m2Fx1MDAxM0bdXHUwMDFiXHUwMDEz9MyMlMKKX6X3XHUwMDE4nexidyCns2dYiVxywbQ9XHUwMDEx+ucms6OXW3FcYp1hu14omzHpRDY0c2brrlwimWTXOCnJXHUwMDBmwCz2Sdg5oTtsQH7wwnHRUWFcdTAwMWLo7TA7XHLJnnGYYV/+PfaQj7BnXHUwMDAxrPc6XCJ0qGRB93LKZJFv8FxckM1cdTAwMTjNXHUwMDBlM5Yj7DHZtsA7/JZIkI0zXHUwMDAy870+bDfO4IOS7Vx1MDAxM8FnNrNFXHUwMDBlu4lkb4vFXHUwMDA38XjMjpxnKsImXHUwMDE5/EY8KvYurYLzwNfYx8D+XHUwMDFldFx1MDAxYlfnXHUwMDFjXHUwMDFmLDtk57TJbrZxwFx1MDAxOV7QxnQ+skk5VVx1MDAxYvJcdTAwMDSr+l7zIFZ6ZobzkI/JJidcdTAwMWbnsFXFw/xX0aZqRZORyyXEXHUwMDE2ZJCNPcS1p2JcdTAwMWTFOM5kqFx1MDAxNY9sxmd5aiWPx1x1MDAwYtOJ0fBNXHUwMDExXHUwMDE5ZooqVrqI7dJQXHUwMDEwXHUwMDFiRKNcdTAwMTiWSVx1MDAwNuLqQDlcdTAwMTZ7hoiRXHUwMDAz7Vxy3SlOMtiSziRcdTAwMTm9sVx1MDAwMr8g5nHG7llcdTAwMWX5WmB5neJcYvma2Vx1MDAwMvJGiDXyLcmDfqJZOlXc9Vx1MDAwNY5xknfC/ykmXHKZ+5DR5MqHVVx1MDAxY3dKs/QgL2E4MON+xTOt8lx0r1x1MDAxNZf5JFFe0lx1MDAxOCZcdTAwMTEv44JwU9FKlk8mhHNcdTAwMDf6mqg5XHTT3Sq9XHUwMDAy+1c8Z3nMXHUwMDE29V5j5DIjq/KayGLxvFx1MDAxN9HMgvzKadNcdTAwMTJxSzlcdTAwMGU+UkrEOfmA8lx1MDAwZWKsL9N5YW/gXHUwMDAx8oAhs1x1MDAxY1x1MDAwMzchfOpcYrW8PtawvVx1MDAxMOteMbJcdTAwMTOZyUMsmPAjfFAyfMRcdMtcdTAwMDNcdTAwMTbZL65iXHUwMDFk8nhu5fHMaLZBPiRcdTAwMWXYMlHNku2TM1x1MDAxY9pjie9jQp5XWFx1MDAxNY/J44LJI0yfsVx1MDAxM1x1MDAxMz7CXHUwMDE3NIadmHBcdTAwMDU5lFx1MDAxN1x1MDAxYjReXHUwMDE3zMq2JuI+gf1RXHUwMDBiupynlme+kIeYXHUwMDEwYVx1MDAwYk5DfubYYfKQQ8Yll9eRTIrbiPPg/JU86IO1JO8hMsLZMt1Rn+Us8ydH2kXD8qKeaUPJu6yr5/7DL1BcdTAwMDfX7oO1sKLL2kt8/iBcdTAwMTXmg+lXU+npyVx1MDAxYkz3ZpxcdTAwMWRP356vRe8huN1cdTAwMWKqwVx1MDAxNuVZYCyvclx1MDAxZT1nXHKsXHUwMDBilDuq2tCkXHUwMDExNlx1MDAwNfiyXHUwMDE49cbotyqa3c95LMD/sYN4XHUwMDA3XHUwMDFl41x1MDAwNP5cdTAwMTijJjlSxYNcdTAwMWPA5Fx1MDAxNSOqg/Z5L9GsaZRz8pF93otoqFx1MDAwYn2JyWf1bEy1mvJgzuJcdTAwMDbxc8rL5C+2zkbclU4jxzrnXHUwMDE4Qi2CX5NcdTAwMTc0XHUwMDE2r0xn1lx1MDAxYlS0hOKf8qxcZj1cbsjPq/qAfIH6xPKEl1xyWc1lvVx1MDAwNcVXWWPXXHUwMDAzJp38jb5DZjk5TqjmIS96lItcbqY/+lx1MDAwMcqtVE+p/6CYXHUwMDAylk/yqC7Czn30XHUwMDE4JmrDmOtOPL1cdTAwMTBcdTAwMThzQrJcdTAwMGJyKfpcdTAwMTWvqPZBPkpE5CDs41xiVEtMxsPw/0bf4cGmoVx1MDAwNDxcdTAwMTKN7FCyulDx0d5kJ577gN2ykyFcdTAwMWU4zU5OMrOTTOjG7Y+znmrZc/opZ5iUXHUwMDE3kY+H1M9TXHUwMDFmYCPv8LxcdTAwMDFbJzi3l1x1MDAxYuSPmL7D57Qvq1x1MDAwYie5TsnlmlXegM/tKqfEIfVrXHKcU85cdTAwMWZjv5DRRmTDXHUwMDFl7WWw3I2eXHUwMDA3NqTnPtVcdTAwMGbFPPFAXHUwMDE3zpNcdTAwMWOohqFcdTAwMDer5cXoXHUwMDBi4Vx1MDAxN0aLQ+TnPsUoj3vqfzhcdTAwMDZcdTAwMTTEWsljjeR7VY6n56SR4+k9hM9cdTAwMWPkYVx1MDAxM+fvUJ3NK/xcdTAwMDJfXHUwMDA2xUOFUezB+0Ks61f9LuPh8j6tXHUwMDFi88XtXHUwMDBlM8rWiLTLvNPVV83+v5GXzs/VXHUwMDFh9PmYI0vl7/X46W2Dy3tcdTAwMTKh1Vx1MDAxMlx1MDAwNeniXHUwMDFh4z7Yb6Pg+HJV80bv9/+x4NfM8X/cL1x1MDAxOH/UXHUwMDFj35pcci5m+cx/vN1ccpd6MSv0xCn0dD74ssdcXCdgLqb+6ljP9D+xXHUwMDE34bqrl/7S+9k5XHUwMDFlNZdqP3ojP1x1MDAxZNqEtU5osVx1MDAxZddTqa+o+jXU26mEvWX34V5wwXex5nKur9f/irl+Lt+gPqdCYEM36OrJ98VcXNqnjVx1MDAxOf9dd1x1MDAwMD93J/Bnm+vN6Lec68evzPU3T/4gXGZpT3uCXHUwMDE5js0mqFFUk3qoZTb6KNRcdTAwMTRWN2NWI5DPXHUwMDEyqlx1MDAxMTnNzMjZpcnma1x1MDAwM3HoSPC7YnHeks9DNPNcdTAwMWGsZzfLXHUwMDBlm4epr6dZmediqr/9k0z1JJPlWIpLe0qzXHUwMDEz1Vx1MDAxNfRcdTAwMWZThdXcXHRmXHUwMDAx6j9sg81NrM7bNGNPaa+sysvUXHUwMDEzXHUwMDFmmD6Yg/lcdTAwMWRcdTAwMDDRPIH6TMhD39zHXHUwMDFjbVx1MDAxNqfv6JckXvNRX+m+ge9cdTAwMDN+Zo+c3WNw/ah+XHUwMDE1mDOzXHUwMDEzjeyG2Vx1MDAwN32PQ/WGaFx1MDAwNfVCNF9UfVx1MDAxOfpcYjqTQ3W4RE049UclzpFbxFMoZC8mj/fyXFyeTXVkUuvRpGGvku5cdTAwMGLQW6MmT3l/1EtU1ouh16X+wqxmXHUwMDA15lx1MDAxZvR+VsR4XHUwMDE0mk+YXHUwMDBmbOo3XHUwMDFjnC3kdqe+XHUwMDFhfSTNhmyujZ2Czez03abZLCz4fOpgPvVo/iN5dL/B9Yuo/jV0Z+dntFx1MDAwMutg/4buXHUwMDE0XHUwMDBm6FGQN0I2RyBcdTAwMTYwj2AviiFcdTAwMGZymE9L3jtgji8u5VksLuq9rOhcdTAwMWO/5YjN1vVeXHL7XG5MRkVDT4PexmExSP1cbvW1XHUwMDE096jRMptXeyFmcOpxPFx1MDAxZfNcdTAwMTHFkknzIPq/sKS5XHUwMDFi8rBXX2Z1vmQzZFnNtVx1MDAxOc2dkF9wnpM8k/pcdLWSh357KtQ0mt2mXHUwMDFje6wnnYo0Q8P+dCdCMzNiN8S5+zwn29RvUs9cdTAwMTfCLlx1MDAxZd3RiFxcXki9JmFcdTAwMGW9XHTwXHUwMDA3zJJ/LYpcdTAwMTHggvokyKU7XHUwMDE49OimxHlcZprPgVx1MDAwZlx1MDAwMfZHb4Z+XHUwMDE2vVxmeMy3sO82cms0p3vUwjhe5qLsOHs2VzXyXHUwMDFj5qOnjSNqZTNfvnqXSPdxdqfyXHUwMDEz+SzhfuI9PWxcdTAwMWVy2oTuOc4xQbNcdTAwMGJyXHUwMDE4z2msPz/blWKYzcjU+/H51u6X/H6K9jL4fVx1MDAwMfVzsPmoulx1MDAxM2JcdTAwMTgrzddsYbL8XHUwMDExXHUwMDEzLVT5/V0zh7K5Iaf+f8Tv7lx1MDAwNHZcdTAwMDdcdTAwMDFcXJKPKH4oXinXWXRPiLhnedhcdTAwMGVRh0PkOtqP8lx1MDAxOc1cdTAwMTOsT2YyoFx1MDAwN2IjoXtI+NQo2V7Mf1x1MDAxNNOo+TbwRLNGibmpN5WYfMJBL8l5XnOaeVxyMyPlRo5cdTAwMTO6f0Psnm1J9/omz0N0/0NzzVx0X0STLbonQ07h9yjjXHUwMDAys1x1MDAxYnBNZ4BWyE/sbshcdTAwMGWru1x1MDAxMcq7dDfC8KWwu5YzXHUwMDFl6P6hU7xC63FcdTAwMWEwxXpvdpdDcS/z7yHd5VV3VyHFvcDuRmhmwXxcdTAwMDL8kN7IiVOeXHUwMDEzyC7wXHUwMDE3zXT8XHUwMDFljHw85bFGM1x1MDAxZWZeyJLpnpp6XHUwMDE3i9/b5Gf7XHUwMDE0SnnKI7/4PqGJi/qZr4kz9lvNXfj3n+rjRV3QdeHn+ni+6vzT3o9cdTAwMWZ+/DdPZnH0In0=",(0,c.kt)("defs",{parentName:"svg"},(0,c.kt)("style",{parentName:"defs"},'@font-face{font-family:"Virgil";src:url(https://excalidraw.com/Virgil.woff2)}@font-face{font-family:"Cascadia";src:url(https://excalidraw.com/Cascadia.woff2)}')),(0,c.kt)("use",I({parentName:"svg"},{width:"196",height:"120",href:"#image-51cca1a9cff49d4751c0e561289b776024479dbac27992d709fd9f58acfc5951e1ec0d66f154fb9379b5cf286a4686ff",transform:"translate(350 10)"})),(0,c.kt)("g",I({parentName:"svg"},{strokeLineCap:"round"}),(0,c.kt)("path",I({parentName:"g"},{fill:"none",stroke:"#40c057",strokeWidth:"4",d:"M171.39 70.98c23.24 0 115.82-.68 139.3-.98M170 70.53c23.03.21 115.78 1.16 139.44 1.09"})),(0,c.kt)("path",I({parentName:"g"},{fill:"#40c057",fillRule:"evenodd",strokeWidth:"0",d:"m307.6 73.41-13.17 3.85.9-12.97 15.89 9.09"})),(0,c.kt)("path",I({parentName:"g"},{fill:"none",stroke:"#40c057",strokeWidth:"4",d:"M310.86 70.91c-5.29 3.83-10.4 5.25-15.54 7.96m13.64-7.92c-3.91 2.17-7.09 4.68-12.97 7.42m.99-1c-.98-1.75-.63-6.22-.37-11.65m-.24 11.68c-.72-2.77-.57-6.24-.34-11.67m-1.55.28c5.55-.74 8.58 1.65 15.08 4.35m-13.77-5.8c3.29 2.86 6.26 3.68 13.9 6.44m-.25.62s0 0 0 0m0 0s0 0 0 0"}))),(0,c.kt)("use",I({parentName:"svg"},{width:"128",height:"114",href:"#image-2e14767d57951a7380e610ba38ae547485da886fe977ce104fa618aa8ce508dac411f2b1d1220ace20d2e788853983db",transform:"translate(10 10)"})),(0,c.kt)("g",I({parentName:"svg"},{strokeLineCap:"round"}),(0,c.kt)("path",I({parentName:"g"},{fill:"none",stroke:"#69db7c",strokeWidth:"4",d:"M171.468 50.994c23.47-.16 116.34.88 139.83 1.02m-141.3 1.17c23.37-.05 116.56-3.18 140.25-3.18"})),(0,c.kt)("path",I({parentName:"g"},{fill:"#69db7c",fillRule:"evenodd",strokeWidth:"0",d:"m309.778 50.974-12.6 5.79 1.29-14 12.37 6.02"})),(0,c.kt)("path",I({parentName:"g"},{fill:"none",stroke:"#69db7c",strokeWidth:"4",d:"M309.238 49.754c-1.61 2.85-4.78 4.54-13.62 7.1m13.98-7.1c-3.19 2.14-5.81 3.23-13.54 6.34m.76-.5c-1.04-3.18-.15-5.26-.75-11.81m.19 12.34c.93-3.54.23-8.08.19-12.49m-1.17 1.53c6.87-.25 11.79 2.55 13.7 5.6m-12.16-6.64c4.72.96 8.64 3.88 12.83 5.48m.6.4s0 0 0 0m0 0s0 0 0 0"}))),(0,c.kt)("g",I({parentName:"svg"},{strokeLineCap:"round"}),(0,c.kt)("path",I({parentName:"g"},{fill:"none",stroke:"#2f9e44",strokeWidth:"4",d:"M171.295 92.065c23.52-.12 117.16-1.82 140.44-2.07m-141.74 1.61c23.46.02 117.81-.58 141.19-.56"})),(0,c.kt)("path",I({parentName:"g"},{fill:"#2f9e44",fillRule:"evenodd",strokeWidth:"0",d:"m310.995 89.535-14.71 8.43 2.11-14.27 12.47 5.46"})),(0,c.kt)("path",I({parentName:"g"},{fill:"none",stroke:"#2f9e44",strokeWidth:"4",d:"M312.585 91.975c-6.25.85-9.15 3.66-15.91 5.1m15.23-6.47c-5.22 2.22-10.7 4.87-14.61 6.54m-.45-.62c.65-3.72.12-9.25 1.74-11.22m-.71 12.3c.24-2.75.16-6.31-.48-12.27m1.13.05c4.58 2.62 9.19 3.43 11.8 4.74m-12.48-5.03c4.17 2.83 9.68 4.63 13.72 5.7m-.38.25s0 0 0 0m0 0s0 0 0 0"})))))))}o.isMDXComponent=!0}}]);