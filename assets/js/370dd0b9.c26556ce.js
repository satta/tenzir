"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[56362],{3905:(e,t,c)=>{c.d(t,{Zo:()=>M,kt:()=>w});var n=c(67294);function r(e,t,c){return t in e?Object.defineProperty(e,t,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[t]=c,e}function o(e,t){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),c.push.apply(c,n)}return c}function a(e){for(var t=1;t<arguments.length;t++){var c=null!=arguments[t]?arguments[t]:{};t%2?o(Object(c),!0).forEach((function(t){r(e,t,c[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):o(Object(c)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(c,t))}))}return e}function m(e,t){if(null==e)return{};var c,n,r=function(e,t){if(null==e)return{};var c,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)c=o[n],t.indexOf(c)>=0||(r[c]=e[c]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)c=o[n],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(r[c]=e[c])}return r}var i=n.createContext({}),l=function(e){var t=n.useContext(i),c=t;return e&&(c="function"==typeof e?e(t):a(a({},t),e)),c},M=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var c=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,M=m(e,["components","mdxType","originalType","parentName"]),d=l(c),p=r,w=d["".concat(i,".").concat(p)]||d[p]||s[p]||o;return c?n.createElement(w,a(a({ref:t},M),{},{components:c})):n.createElement(w,a({ref:t},M))}));function w(e,t){var c=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=c.length,a=new Array(o);a[0]=p;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m[d]="string"==typeof e?e:r,a[1]=m;for(var l=2;l<o;l++)a[l]=c[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,c)}p.displayName="MDXCreateElement"},90568:(e,t,c)=>{c.r(t),c.d(t,{assets:()=>D,contentTitle:()=>x,default:()=>h,frontMatter:()=>w,metadata:()=>f,toc:()=>A});var n=c(3905),r=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,M=(e,t,c)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:c}):e[t]=c,d=(e,t)=>{for(var c in t||(t={}))i.call(t,c)&&M(e,c,t[c]);if(m)for(var c of m(t))l.call(t,c)&&M(e,c,t[c]);return e},s=(e,t)=>o(e,a(t)),p=(e,t)=>{var c={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(c[n]=e[n]);if(null!=e&&m)for(var n of m(e))t.indexOf(n)<0&&l.call(e,n)&&(c[n]=e[n]);return c};const w={sidebar_custom_props:{connector:{loader:!0,saver:!0}}},x="zmq",f={unversionedId:"connectors/zmq",id:"version-Tenzir v4.13/connectors/zmq",title:"zmq",description:"Loads bytes from and saves bytes to ZeroMQ messages.",source:"@site/versioned_docs/version-Tenzir v4.13/connectors/zmq.md",sourceDirName:"connectors",slug:"/connectors/zmq",permalink:"/connectors/zmq",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.13/connectors/zmq.md",tags:[],version:"Tenzir v4.13",frontMatter:{sidebar_custom_props:{connector:{loader:!0,saver:!0}}},sidebar:"docsSidebar",previous:{title:"udp",permalink:"/connectors/udp"},next:{title:"Formats",permalink:"/formats"}},D={},A=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>-f|--filter &lt;prefix&gt;</code> (Loader)",id:"-f--filter-prefix-loader",level:3},{value:"<code>-l|--listen</code>",id:"-l--listen",level:3},{value:"<code>-c|--connect</code>",id:"-c--connect",level:3},{value:"<code>-m|--monitor</code>",id:"-m--monitor",level:3},{value:"<code>&lt;endpoint&gt;</code>",id:"endpoint",level:3},{value:"Examples",id:"examples",level:2}],k={toc:A},T="wrapper";function h(e){var t=e,{components:c}=t,r=p(t,["components"]);return(0,n.kt)(T,s(d(d({},k),r),{components:c,mdxType:"MDXLayout"}),(0,n.kt)("h1",d({},{id:"zmq"}),"zmq"),(0,n.kt)("p",null,"Loads bytes from and saves bytes to ZeroMQ messages."),(0,n.kt)("h2",d({},{id:"synopsis"}),"Synopsis"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"zmq [-l|--listen] [-c|--connect] [-m|--monitor] [<endpoint>]\n")),(0,n.kt)("h2",d({},{id:"description"}),"Description"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"zmq")," loader processes the bytes in a ZeroMQ message received by a ",(0,n.kt)("inlineCode",{parentName:"p"},"SUB"),"\nsocket. The ",(0,n.kt)("inlineCode",{parentName:"p"},"zmq")," saver sends bytes as a ZeroMQ message via a ",(0,n.kt)("inlineCode",{parentName:"p"},"PUB")," socket."),(0,n.kt)("p",null,(0,n.kt)("figure",d({parentName:"p"},{className:"markdown-inline-svg"}),"\n  ",(0,n.kt)("svg",d({parentName:"figure"},{viewBox:"0 0 1020.745 220.48",role:"img","aria-hidden":"true"}),"eyJ2ZXJzaW9uIjoiMSIsImVuY29kaW5nIjoiYnN0cmluZyIsImNvbXByZXNzZWQiOnRydWUsImVuY29kZWQiOiJ4nO1cXGtX2sxcdTAwMTb+7q/o4nwt6dwv/VZcdTAwMTErXHUwMDE121praz3nXa5IXCJGkFBcYnh5V//72Vx0SiY3SJBaznvEVS2TZGYy2c9+nj17Jn9vvXpVXHUwMDBi7oZu7e2rmnvbsfueM7Jvaq/D8qk7XHUwMDFhe/5cdTAwMDBcdTAwMGWR6PvYn4w60ZmXQTBcdTAwMWO/ffPGXHUwMDFlXHUwMDBlrfgqq+Nfz650++61O1xixnDuv+H7q1d/R7+NtvrewI3OjUrjloRS6dKP/iBqXHUwMDE1K0yYXHUwMDE2XHUwMDAyxWd441x1MDAxZGgqcFx1MDAxZDh8YffHbnwkLKpdXHUwMDFk9C8nzTt12Om2z7R3d/i9ecDjZi+8fv8ouOvP7snuXFxORkanxsHI77nfPSe4fFx1MDAxY1x1MDAwMqN8ft3Yh7uPr1x1MDAxYfmT7uXAXHUwMDFkh/eO56X+0O54wV1YhtC81Fx1MDAxZXSjOuKSW/hWx1palGHNqFxib1x1MDAxOVx1MDAxOTdcdTAwMWPWQFx1MDAxMbGIIEpSqYnEQvFU11x1MDAxYX7fXHUwMDFmhV37XHUwMDE3ij5x587tTq9cdTAwMGI9XHUwMDFjOPE5rnY77kV8zs3jXHJcdTAwMWJcdTAwMWS9dL3uZVx1MDAwMIVSWUwpzKWSimnJZNy0XHUwMDFiPVx1MDAwNYIwQZJgXHUwMDExX1x1MDAxYzY4bDmRMfxcdTAwMTWP/ci+dlvhJYNJv29cdTAwMGXfwHlcdTAwMTi+xIHz8EDTsKu4qsnQsWc2gIWmWmFGNMbxqICt9dLV9f1OL8dsxoE9XG62vYHjXHK66UvcgVNwpG+Pg4Z/fe1cdTAwMDXQjc++N1xi0mdE9b5cdTAwMWKN/JtL187cNNRcXHhsXHUwMDE4Vlx1MDAxN1x1MDAwMyn8xP97XHUwMDE1m070Zf7/v17nnl1Hllx1MDAwNstcdTAwMTFcXHEwXHUwMDFkhFx1MDAxMdHm9fB0XHUwMDAxYVIzxlx1MDAxOVOc8WX1Ya4tRCVcdTAwMDZrZfDU9Vx1MDAxM2vTXHUwMDBiaqNwXGZxiTnHnFAhn9Q1XHUwMDE4XHUwMDA3Qlx1MDAxNVx1MDAxNZRcdTAwMDG8wGDBXpfVVzTQW+bfX6/zvV3g3lx1MDAwNnneTlx1MDAxNjs7xDD8Q1qUdnZcdTAwMWaGfe+OTr99aLTq7dNcdTAwMWb9XHQ9clCBs0s5raSrw6ny3+nqqLSkXHUwMDE2SsZojVxcXHUwMDFjIVx1MDAxNsZK4NDVUEGMUUi7OOyGP4tdXFzHdZhjZ12c4JYgcctzL0epZTQ4c2zQXHUwMDFkjFx1MDAwNZHkXHUwMDBmOjaktWBcIraZXG6O7cJcdTAwMWZcdTAwMDRH3n34XGKISpTu2tdeP1x1MDAxYfR5cWSub8NbeSD0eem7vtdcclxyt9aB3rqjhE1cdTAwMDdcdTAwMWVcYoH5XHSBP4yPdqBcdTAwMWRcdTAwMWJcdTAwMTh/lFx1MDAxZFx1MDAxN3/kdb2B3f+a22YoXHUwMDEz9lx1MDAxZVx1MDAxZlx1MDAwYraI8ZjHbqQh4H5kLvZmoDg+2CFcdTAwMDf1Xovr6ZXyroZcdTAwMWX+cXVr3FOuXHUwMDFjiUzT5L9oeFx1MDAxOMpcdTAwMThcdTAwMTDLochFNr+K8V5cXLhcdTAwMWStN0e0rGz1j08mXHUwMDFldvJQ8itccjYuXHUwMDE4qFx1MDAxYoqJaV+PXG6xyGWCMpRKXHUwMDAx1ZTwmGnQJTqdXHUwMDBmO21cdTAwMWFlWditl73ZMlx1MDAxMqqqSCornco6ZiEtXHUwMDE2XHUwMDA1XHUwMDAxIFCKXHUwMDFlMtWEXHRQl6jEQ555gC/2lf7W3uvvu93W9s4+sneGrZPNgVM+MTJscU1BxlwixlxiXHUwMDA1wZOKXHUwMDAwsKUpYlxuXHUwMDA0XHUwMDExkCSiqX6tJ1x1MDAwMFxi5Vx1MDAxOFx1MDAxNZpLXHUwMDA2LIwo0/Htz52dQlx1MDAxNlaISDhOUXhqhjbhXHUwMDFlNOegs17igc2LXHUwMDA3aEojI/Y6ddSU3Hipg1p3eKEh3ERCXCJcdTAwMDUmJFx1MDAwNVM0VVx1MDAxZFx1MDAwMvOEOJlgqiBcdTAwMTitWp2UZnX1JKbgNpbVt1JIMHNKnUkjaH/S3bu9Nu/uXHJcdTAwMGUx3298ysqSZNxwXHUwMDFiydCkJzDMei5KtEWwqajzde2LOil2Llx1MDAwZs6LcsSEoDQjOZIqOlx1MDAxZLpcdEaZQIrG9/fnhcijpLcsy3hYVYOCXHUwMDE15X9CrK9cdTAwMTJcdTAwMTQkep2OXHRcdTAwMTZKjKLIm8auLvv8XGLnSmpaPvQ+/FwideOUfOzq/Z5qfejdnEw9vNmhN3h8XHUwMDBiYVxyvlx1MDAwZeyba3DyScfyPFx1MDAxMTgllsJlQ/CwI1xu1ESMqz9cdTAwMTSBr4TAlVwi8MB/7vjbbPFcdNH3I/5GbieYXHUwMDE5YFx1MDAwZVxisTGSaVx1MDAxMFx1MDAxMsakQJSXcaIzXHUwMDEw2j/PnO97u1NcdTAwMDGRe/PnmTdcdTAwMTh8fdfdXHUwMDFjZsqHIVx1MDAwMVx1MDAwNVxyTIFcdKgvXHUwMDBloIuN/m52dK3sPJf2KmfiXHUwMDAyXHUwMDFiU1uP6l1wJrmWeFxykMuG//ShJFx1MDAwZf8zSJxfXHUwMDEzX13k3FxyS7hcdTAwMTdNv/ut549bzd6O9+Hyev/4rFebn/frdX61s4ul//n98bGW705Ou2dnzXt6Ou7dJFt5bN9cdTAwMGVFulHvo/ArjkQgkGK6ylx1MDAwNN5K5IapLMRcdTAwMTWDOI5QqsvjKn80N1x1MDAxY1egwCxCiGRyhqtcdTAwMTS7IWGx34KsYvEtpOFAXHUwMDFm8MUgXHUwMDE2YURw8XR4/a8w2v31z/9cZlYltWvPcUwqSfLaMlx1MDAwNkhTXaorZdhO4IWALJrQglxiu1x1MDAxMJBYXHUwMDExTrAoXHUwMDE1LcxcdTAwMDDZRvS+0zpCerjTJdKtXHUwMDFm/PzEJptcdTAwMGXIxURHxTNcdTAwMTJdhuZcYlx1MDAxMlxuMYbEXHUwMDFhJqnKzHI/XHUwMDBmPP/hc1fGo02dv2X+rcydxXPPmIbBXHUwMDEyY1x1MDAxNaDaoJ/wab3JXHUwMDA20/qosTs++f7Vde82XHUwMDFkqpRTi3CqdT53iqeFgkVQpdzCPDdcdTAwMWRLsrPKXGZRKf5cdTAwMTGhIEqULiDOz8fbz1x1MDAxZFx1MDAwYiaaLFx1MDAxNVxmolx1MDAxNemxMKlHXHUwMDEwxlxmY8liXHUwMDFiWEqPZ4Mz5+pQn3lcdTAwMWZtcexcdTAwMGb3ek7zx6ZjLqRHzTBSoFx1MDAwNFx1MDAxNEbmnOMs+Yyt0P1gXHUwMDA1XHUwMDA3lZTFXHUwMDE5nyeJ1zJkiaVWlGNjXHUwMDE5wlx1MDAwYlduOlcuz1x1MDAxY+fidoangU2778/px1x1MDAwM90/mXxcdTAwMTmcyy9cdTAwMTdcdTAwMWZcZjwlg+GEUddcdTAwMTlcdTAwMGVcdTAwMTNMlILAZVxuqESlrJpgS0khgFKwZlx1MDAxMowqY5JcXFhcXLIwMVx1MDAwM9bPkeBskYkuz2lcXCDVWZZcdTAwMTD9x+Q0Kqy4UCCAucxLdJiZ08xMeZjkw1x1MDAwNJeZKa+U6Vx1MDAwMKdPpVx1MDAxMSP8sSVcdTAwMTfF9pe6fitVz2Yswag5flBbgO0mO/zk/PypbtpDiEJ/3Fx1MDAxZFx1MDAxZU2dwzJ5yDozyFwiNFhmKJmFS4hcdLKMJToviF2ahVx1MDAwNM9JXHUwMDE4xdmE1WJwKsJcdTAwMDVcIqSMbqpcdTAwMDZNypU25jNWSEJcdTAwMDad4ds3bzCRXHUwMDE2glx1MDAxZvyWwyc3K4nhXGZhfmjirN+WpcTCQonPSlnLxbdZKo05Q2m33ujVXXkv2qh+s9NcdTAwMWSMtuXgYD1cZiywxTTHSCiQnVx1MDAxNNN4JOeLZJ+4xvH/XG6/XHUwMDE1XHUwMDE4XHUwMDE3a8RcdTAwMDXmObFPbeHC8JCNXHUwMDA00Xjtq1x1MDAwYsBcYjhF2DTQP8O5YplY3TCOXHJG3lxmXHUwMDA2XHUwMDBiINwgbFr3zs/Z9vT7cWN/0rkkXHUwMDA3dlx1MDAxNsI56dJcdTAwMTmMSZJtzcRg6aTey4qfylx0yXnMi1x1MDAxMMbE3HpcdTAwMTZjlVx1MDAxNU5eaE0o0aVSbWvKfE7di+ZJa/otYL2P9967g6/H07aolKFEiuF4nd2qXHUwMDE5ykW9KaMuKWeWQJqm94Uk8nZcdTAwMTVzbi/mv1RqhqFcdTAwMWNFiTX0htYsXqxcdTAwMDGjT1xilitZ+lx1MDAxMk6qao5cdTAwMTmxmcry/cY1b+nsZFwib1ggIJdcdTAwMTFDxZzlXHUwMDAyMN60rvr2j8OhfXSJ71x1MDAxY1WvO4ff/SxcdTAwMThzdsKkycdM1pVMtL1gb2WZqLhcdTAwMDAoMJm3XHUwMDE3XHUwMDA2XHUwMDE3Ulx1MDAwZlx1MDAwMIfAVaX2Sj9cdTAwMTdcIp85/bdZKnHpZpiihGTWXHUwMDE3x2t5XHUwMDEwXHUwMDE1XHUwMDAwxlxum2F2T765k7ZzOtk9ks325LDeXHUwMDFk7bzbXHUwMDFjQFx1MDAxNexcdTAwMTJcdTAwMDXrt7hMLFx1MDAxNN2cTCRRjGik1pBcdTAwMGVZeX/L6pBcXClcdTAwMTN59PyZyKM1Z1wiU1MlpsgpVDk63F5Iq2RcIkfHu5PP21fv973bu+2dJr/+dOY4m442JlJsT9Y7tzPP7DCLXG7JkCCMS4yRzsFbJvkoXHUwMDEwl1x1MDAwNKnn4uAqIMRcXFx1MDAxM7HStOhGJFx1MDAxZqNMwe+h6uInnbp8y/xbeeFcdTAwMGUpzlMpXHUwMDEyviZFq/LQPUZcdTAwMDHqdu/F6eg6eH912WtvO1x1MDAxN2LToWvOXG6lczLrhG6JvM584oQjRpFmf3L7J1x1MDAwNcNjT31rwmqpiNrSNMAz7eqolIrII9SHN6RUJtRiPqVcdTAwMThJLUpt1y+zMn9DMclcdTAwMDS2eLhcdTAwMTWWXG7MmMQym4DBXHUwMDEw42lcdTAwMTDySnKCi1/m9CSy1Vx1MDAxNlx1MDAxNlJwJjghlFx1MDAxOLvwYq61tJKCIVx1MDAxOa74Q4qar5WagVnS0HmLjSRfSjhbSVx1MDAwMafI1+jYw0vMyiwtj5xAZzKOhlx1MDAxMbhcdTAwMGVGklxiXHUwMDA0jif0fsZJXXtcdTAwMTj2OXOrz8fy81xcxW+i+lwiO1x1MDAwYj/1rImV5P5cdTAwMTn+v/ntr9Or+23n9GL3/KLh1tuH4qzMdDKlXHUwMDE4WiaYaim11ii1ySrnxS5SWlx1MDAwMs5cdTAwMTRcdTAwMDLIXHUwMDBiflx1MDAxOVfEO1x1MDAxNPlcdTAwMDLk/1/PbuXOLEtJKOcqN4NSvJdaSFx1MDAxY5nL+qexKHhb8aSJ5SN7anJ1iYllnKhjXHKbqWNcdTAwMTOsXHUwMDEySyf7nSZ/vpL6Lk6CYckkUYRUeG1jY/t9oPzTvfODz/Z5q3V621x1MDAxM/Wvm1x1MDAwM4yiWSpwXHUwMDFhmIQ+RoiQkJJvbTS9zDonqzSzXGKTmodcdTAwMGL1w51kOS9poVx1MDAxOSZcdTAwMTdcdTAwMTJ4nKG1g73SS1lcdTAwMTDIXHUwMDFkYprhXHUwMDFh950lkVx1MDAxNlx1MDAwZWDbt1x1MDAxZNPsn0d3p1vNgC1cdTAwMWbWM1xibj3QbM1cdTAwMWVcdTAwMGWPXHUwMDAyXHUwMDE4vbk+qU0992Y710rCT5jwjVx1MDAwMFx1MDAxY0LFjfTWr61f/1x1MDAwNWvg7FxiIn0=",(0,n.kt)("defs",{parentName:"svg"},(0,n.kt)("style",{parentName:"defs"},'@font-face{font-family:"Virgil";src:url(https://excalidraw.com/Virgil.woff2)}@font-face{font-family:"Cascadia";src:url(https://excalidraw.com/Cascadia.woff2)}')),(0,n.kt)("g",d({parentName:"svg"},{fillRule:"evenodd",strokeLineCap:"round"}),(0,n.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#e9ecef",d:"M292.658 72.263s0 0 0 0m0 0s0 0 0 0m1.11 10.5c-.05-.47 2.36-3.71 9.56-11.8m-10.15 13.19c3.07-3.11 6.05-5.79 9.75-12.14m-8.74 23.11c3.24-1.32 6.68-7.16 21.52-23.91m-23.17 25.48c4.65-5.57 11.27-12.19 20.72-23.73m-22.63 34.54c11.36-9.11 23.31-19.59 32.46-33.41m-31.01 34.84c7.6-7.41 14.05-14.24 31.65-37.4m-33.3 48.64c13.12-14.29 28.03-28.71 44.41-47.67m-43.95 50.01c11.14-11.1 19.83-21.38 43.7-50.22m-43.81 62.07c21.68-22.1 37.49-43.06 54.99-61.11m-54.41 60.53c18.59-18.92 34.66-37.78 54.6-61.19m-54.3 75.28c20.76-24.93 40.14-45.6 66.46-77.19m-67.07 76.17c18.63-17.79 34.74-38.29 65.67-75.38m-61.65 83.04c28.25-32.14 56.1-64.72 72.49-81.79m-72.72 81.27c23.07-27.69 47.84-55.72 72.72-81.27m-62.41 80.72c23.68-25.02 44.06-52.69 72.06-82.61m-71.07 83.12c23.61-25.82 45.16-50.87 71.8-82.12m-60.98 81.36c25.69-26.21 51.02-54.8 70.66-83.14m-71.03 84.97c24.41-28.24 51.13-58.37 72.5-84.01m-63.55 81.27c20.57-16.62 38.27-39.41 73.25-81.27m-70.6 83.67c17.69-20.09 34.1-40.01 70.84-82.47m-61.63 80.63c27.88-28.2 51.76-55.44 70.74-80.99m-70.45 82.26c28.15-33.09 56.78-64.16 71.88-82.05m-61.12 82.46c19.25-25.04 43.86-50.59 72.08-84.22m-70.88 82.9c16.08-19.93 34.1-38.86 69.64-82.26m-61.23 81.61c19.62-19.64 35.6-38.51 72.21-78.88m-70.86 79.91c18.44-21.1 36.2-40.87 71.14-81.65m-59.52 83.79c18.54-24.59 37.91-44.94 72.07-82.92m-73.01 80.79c19.52-24.7 41.71-48.14 70.41-81.73m-60.89 80.53c16.7-19.39 34.99-38.26 70.59-80.29m-68.64 81.17c17.36-20.89 36.07-41.33 70.5-81.04m-62.59 80.24c18.84-21.14 35.57-39.71 67.46-74.87m-65.41 75.82c19.35-19.94 37.02-40.94 66.18-75.08m-55.97 75.1c14.9-18.89 34.74-37.73 63.52-69.39m-62.83 70.47c18.47-22.35 35.59-41.36 60.39-71.17m-51.87 70.99c13.62-13.87 24.78-27.96 58.4-64.3m-56.84 63.75c13.88-17.71 29.62-35.29 55.84-65.32m-45.25 65.31c14.16-16.16 28.54-32.59 52.35-61.03m-52.66 61.41c20.27-23.88 41.3-45.94 52.89-59.59m-42.06 57.35c11.2-12.01 23.57-26.32 44.99-52.01m-44.54 53.38c12.26-12.78 25.07-28.62 46.25-54m-34.95 53.2c9.04-11.06 18.28-22.15 40.58-46.69m-42.01 48.73c14.59-15.38 26.82-31.09 42.25-48.57"})),(0,n.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#000",strokeWidth:"2",d:"M291.598 71.463c.06 18.96-.26 39.27-.6 78.87m1.79-78.43c-.84 27-2.02 55.01-.36 78.01m.96 2.5c41.04-1.69 82.64-2.39 159.77-2.5m-162.08.87c44.7-.7 87.18-1.33 160.44.14m1.48-1.84c9.48-7.47 17.56-18.74 40.02-37.38m-41.3 39.21c15.85-14.89 30.54-30.58 40.49-38.87m-2.39-1.35c-10.09-14.18-25.28-26.86-39.94-37.44m42.7 38.16c-14.23-13.57-30.46-28.62-40.22-39.3m1.31.18c-55.95-1.48-107.34.33-162.22-.41m160.81.48c-60.83.49-121.45.27-158.67-.44m-.93.34s0 0 0 0m0 0s0 0 0 0"}))),(0,n.kt)("text",d({parentName:"svg"},{x:"32.813",fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"28",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(352.203 92.119)"}),"from"),(0,n.kt)("path",d({parentName:"svg"},{fill:"none",stroke:"#1e1e1e",strokeLineCap:"round",strokeWidth:"2",d:"M289.64 110.68c-6.65-.08-33.87-1.19-40.42-1.25m42.43.57c-6.19.07-33.15.37-40.13.66"})),(0,n.kt)("g",d({parentName:"svg"},{fillRule:"evenodd",strokeLineCap:"round"}),(0,n.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#e9ecef",d:"M531.593 71.93s0 0 0 0m0 0s0 0 0 0m4.75 6.29c1.56-2.02 3.66-4.38 5.69-6.53m-4.79 6.23c1.1-.92 1.72-2.6 4.62-6.23m1.53 12.87c1.74-3.44 6.17-8.14 8.81-12.11m-9.6 11.17c4.44-4.36 7.22-8.27 10.29-11.82m-4.76 17.96c6.96-4.43 8.3-9.28 13.46-18.09m-12.55 17.72c5.47-5.61 9.72-13.61 14.39-17.66m-10.17 21.5c8.85-7.08 14.1-13.32 18.96-22.88m-16.91 24.22c7.81-9.12 14.36-18.03 19.26-22.56m-12.78 28.34c5.91-9.42 15.2-18.4 23.22-30.18m-24.6 30.68c7.54-8.78 16.02-18.6 24.36-29.72m-18.14 33.46c9.24-9.2 19.97-22.42 28.51-35.17m-28.3 37.05c5.77-8.46 11.68-15.47 30.09-34.94m-62.13 82.73c22.89-26.72 45.89-52.04 72.52-82.05m-73.77 81.44c26.1-28.67 51.13-55.27 73.21-81.99m-60.6 82.5c25.65-32.94 52.97-63.31 71.45-84.21m-71.92 83.32c15.29-17.59 32.3-36.79 72.03-82.85m-61.07 83.82c15.81-17.35 28.51-36.59 72.23-83.87m-74.06 84.15c17.78-20.22 33.42-38.44 72.57-83.34m-59.75 84.55c23.29-27.63 44.28-53.78 69.8-84.97m-70.15 83.26c16.26-20.81 34.5-41.6 71.84-84m-61.2 83.41c16.74-18.23 34.28-41.02 73.1-81.45m-73.84 81.15c23.98-25.32 46.32-52.25 71.9-82.37m-63.32 82.92c31.33-33.3 57.18-64.73 73.05-81.25m-71.39 80.45c14.19-14.76 28.23-33.56 71.77-82.96m-60.38 82.49c22.74-25.47 46.04-49.9 70.61-82.3m-70.75 82.95c25.35-28.22 50.23-57.51 71.48-83.32m-61.95 83.36c20.08-22.27 43.11-46.41 72.7-80.56m-72.5 80.62c28.66-30.65 54.32-62.2 72.06-81.96m-61.98 81.57c26.9-27.7 50.24-56.47 72.26-81.93m-70.91 82.57c27.06-30.43 53.28-61.34 71.55-82.45m-61.74 81.09c27.15-29.18 55.72-61.32 72.24-82.38m-70.88 84.05c13.85-16.49 28.81-33.24 70.96-83.28m-62.86 82.65c26.54-26.3 49.39-51.09 74.22-84.59m-71.62 84.25c28.14-32.66 56.14-66.22 71.01-82.75m-60.98 83.62c19.68-23.31 40.25-44.59 71.84-82.99m-73.05 82.24c20.02-22.43 39-44.25 73.39-83.89m-62.08 83.96c17.86-20.39 35.34-40.7 72.72-82.01m-72.73 82.25c28.42-30.46 55.11-61.53 70.83-80.72m-61.5 81.43c12.09-13.35 24.79-28.86 60.57-69.27m-58.98 69.85c17.68-21.37 34.75-41.93 59.15-69.46m-49.03 67.88c9.09-10.92 21.1-23.37 50.17-54.04m-48.81 55.42c9.95-13.15 21.48-26.38 48.21-56.96m-36.85 56.62c9.86-15.08 23.19-27.13 35.81-43.52m-37.44 43.43c13.18-17.07 28.19-34.6 38.4-45.02m-26.99 45.72c10.75-13.67 18.85-25.63 26.42-31.62m-26.34 30.21c9.48-12.44 22.18-25.14 27.74-33.15m-17.5 31.84c2.77-4.1 7.92-11.94 16.96-18.29m-17.69 20.29c5.61-6.35 13.05-15.09 17.26-19.88m-5.56 18.95c-.08-1.92 1.77-3.37 5.12-6.13m-5.6 7.07c1.58-2.79 3.48-5.55 6.46-7.77"})),(0,n.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#000",strokeWidth:"2",d:"M530.663 70.86c11.36 12.85 23.32 24.31 41.03 38.47m-39.84-38.39c10.42 11.73 22.95 22.94 38.37 39.86m1.65 1.43c-14.27 14.12-28.88 27.36-41.82 39.83m41.26-40.32c-16.25 14.28-31.27 29.31-41.31 39.19m2.23-.68c41.9-.58 86.33 1.72 199.42 1.19m-200.17-.68c62.13-1.54 125.11-.71 198.73-.88m.63-1.72c-1.58-17.92-1.91-32.66.51-80.09m-.38 82.54c-2.24-32.35-1.01-63.95-.64-80.61m-1.27-1.95c-66.03 2.66-135.68 3.16-195.89 2.19m196.81.65c-58.03.92-114.38.56-198.67 1.62m.28-.58s0 0 0 0m0 0s0 0 0 0"}))),(0,n.kt)("text",d({parentName:"svg"},{x:"24.609",fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"28",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(501 85)"}),"..."),(0,n.kt)("text",d({parentName:"svg"},{x:"16.406",fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"28",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(630.02 92.119)"}),"to"),(0,n.kt)("g",d({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#ffec99",d:"M778.162 57.7s0 0 0 0m0 0s0 0 0 0m-4.46 17.32c7.54-8.1 11.18-14.52 17.71-20.38m-17.71 20.38c7.51-8.59 13.02-14.63 17.71-20.38m-17.58 32.42c7.41-10.07 16.08-19.69 30.18-34.72m-30.18 34.72c7.76-8.93 14.2-17.36 30.18-34.72m-30.04 46.76c13.45-14.18 23.91-25.05 40.67-46.79m-40.67 46.79c12.63-16.52 27.73-31.15 40.67-46.79m-41.2 59.59c17.91-20.4 31.75-36.34 51.83-59.62m-51.83 59.62c16.17-17.55 32.16-36.77 51.83-59.62m-51.69 71.66c21.13-23.71 39.49-44.62 62.32-71.7m-62.32 71.7c16.41-17.65 31.52-37.49 62.32-71.7m-62.19 83.74c25.42-29.95 49.89-57.66 72.17-83.02m-72.17 83.02c26.81-31.23 53.58-61.7 72.17-83.02m-72.69 95.81c23.51-26.49 42.69-49.7 83.32-95.84m-83.32 95.84c25.41-29.68 49.66-57.95 83.32-95.84m-81.22 105.62c28.1-32.73 59.12-67.99 91.85-105.66m-91.85 105.66c19.65-23.61 39.95-48.45 91.85-105.66m-86.47 111.66c31.7-36.61 64.61-76.27 97.1-111.69m-97.1 111.69c30.93-36.62 62-71.32 97.1-111.69m-91.06 116.94c26.53-31.99 51.47-60.79 101.69-116.98M786.712 169.8c31.56-36.81 63.47-73.79 101.69-116.98m-92.37 118.46c24.85-30.17 51.61-59.98 103-118.49m-103 118.49c37.29-43.49 76.84-87.46 103-118.49m-94.34 120.72c23.85-26.52 45.96-56.6 104.97-120.76m-104.97 120.76c35.9-42.46 72.86-84.96 104.97-120.76m-94.34 120.72c34.01-37.77 64.13-73.33 106.28-122.26m-106.28 122.26c40.63-45.57 82.52-92.96 106.28-122.26m-95.65 122.23c32.93-38.7 67.43-79.05 105.62-121.51m-105.62 121.51c30.2-34.97 60.75-70.65 105.62-121.51m-94.99 121.47c33.1-37.84 65.76-77.69 103-118.49m-103 118.49c34.89-40.23 70.86-80.37 103-118.49m-92.37 118.46c32.17-36.59 64.09-74.74 98.41-113.21m-98.41 113.21c31.84-36.84 64.18-71.99 98.41-113.21m-87.78 113.18c29.8-34.06 58.24-66.63 93.16-107.17m-93.16 107.17c24.07-27.98 47.99-56.95 93.16-107.17m-82.53 107.13c18.57-22.32 35.04-43.7 84.63-97.36m-84.63 97.36c25.97-27.45 49.75-57.56 84.63-97.36m-74 97.33c29.83-35.07 57.81-64.96 74.13-85.29m-74.13 85.29c16.29-18.42 32.21-37.65 74.13-85.29m-63.5 85.25c18.61-20.72 37.06-45.07 63.64-73.21m-63.64 73.21c20.07-24.77 40.13-47.89 63.64-73.21m-53.01 73.18c12.2-13.96 26.8-30.05 53.14-61.13m-53.14 61.13c17.56-21.64 36.8-40.91 53.14-61.13m-42.51 61.09c9.62-12.62 22.61-23.18 42.64-49.05m-42.64 49.05c14.36-17.26 29.06-32.5 42.64-49.05m-30.7 47.51c10.14-12.24 21.9-23.05 30.84-35.47m-30.84 35.47c5.3-8.01 13.58-15.89 30.84-35.47m-18.24 33.17c5.9-3.58 10.07-9.53 17.71-20.38m-17.71 20.38c5.54-6.44 12.19-13.7 17.71-20.38"})),(0,n.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#1e1e1e",strokeWidth:"2",d:"M800.832 50c25.92.63 51.35 1.54 120 0m-120 0c29.42.44 59.11-.84 120 0m0 0c20.07 1.04 29.17 9.4 30 30m-30-30c20.36 1.62 29.98 8.41 30 30m0 0c-.04 16.79-.35 29.42 0 60m0-60c.57 11.19.42 24.24 0 60m0 0c-1.19 18.36-10.75 28.66-30 30m30-30c1.3 20.64-10.28 32.02-30 30m0 0c-39.36.85-83.41-1.79-120 0m120 0c-36.8.14-72.64.23-120 0m0 0c-20.11.24-30.13-11.95-30-30m30 30c-18.1 1.65-28.46-9.64-30-30m0 0c-.69-16.92-.17-34.18 0-60m0 60c.77-19.99 1.23-40.51 0-60m0 0c1.28-18.72 9.34-29.16 30-30m-30 30c-1.74-22.26 11.89-28.89 30-30"}))),(0,n.kt)("text",d({parentName:"svg"},{x:"24.609",fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"28",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(836.223 76.4)"}),"zmq"),(0,n.kt)("path",d({parentName:"svg"},{fill:"none",stroke:"#1e1e1e",strokeLineCap:"round",strokeWidth:"2",d:"M771.242 129c29.99.01 149.13 1.47 179.17 1.45m-180.41.64c29.82-.38 149.07-2.28 179.24-2.53"})),(0,n.kt)("text",d({parentName:"svg"},{x:"17.578",fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(843.254 136)"}),"PUB"),(0,n.kt)("path",d({parentName:"svg"},{fill:"none",stroke:"#1e1e1e",strokeLineCap:"round",strokeWidth:"2",d:"M771.551 110.019c-6.6-.13-33.93.37-40.61.75m39.46 1.28c-6.71 0-33.83.31-40.4.06"})),(0,n.kt)("g",d({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#f08c00",strokeWidth:"2",d:"M72.117 91.387c-9.75.05-49.01 1.25-58.66 1.18m57.8-2.49c-9.46-.32-45.94.45-55.58.74"})),(0,n.kt)("path",d({parentName:"g"},{fill:"#f08c00",strokeWidth:"0",d:"M12.517 82.187c1.78-1.02 4.13-.97 6-.39 1.88.58 4.22 2.24 5.24 3.86 1.02 1.61 1.28 3.91.87 5.83-.4 1.93-2.05 4.44-3.29 5.71-1.24 1.26-2.44 1.74-4.13 1.88-1.68.15-4.41-.04-6-1.01-1.59-.98-3.01-2.91-3.52-4.84-.51-1.93-.3-4.91.46-6.74s3.04-3.65 4.1-4.26c1.06-.61 2.29.26 2.27.61m4.01 1.52c1.79.81 5.06 2.18 6.2 3.89 1.14 1.71 1.4 4.6.64 6.39-.76 1.78-3.32 3.34-5.21 4.33-1.88.98-4.25 2.06-6.09 1.58-1.85-.49-3.89-2.8-5-4.49-1.11-1.69-1.63-3.91-1.69-5.65-.06-1.74.19-3.25 1.35-4.78 1.16-1.53 3.78-4.03 5.63-4.39 1.85-.36 4.63 1.77 5.48 2.22.84.45-.33.31-.44.47"}))),(0,n.kt)("text",d({parentName:"svg"},{x:"100",fill:"#f08c00",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"17.067",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(50 190)"}),"tcp://127.0.0.1:5555"),(0,n.kt)("g",d({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#f08c00",strokeWidth:"2",d:"M70.167 131.205c-10.08.08-50.32.08-60.17.03m61.95-1.24c-9.67.34-49.48 2.32-59.74 2.64"})),(0,n.kt)("path",d({parentName:"g"},{fill:"#f08c00",fillRule:"evenodd",strokeWidth:"0",d:"m12.647 131.665 12.54-6.31-.23 12.11-13.48-6.55"})),(0,n.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#f08c00",strokeWidth:"2",d:"M11.837 131.425c3.54-.32 6.6-3.43 14.21-4.32m-14.17 4.92c4.47-.82 7.6-3.15 13.71-6.36m.63-.85c.67 4.61.32 5.77.99 12.71m-1.5-12c-.66 4.71.26 8.92.12 12.88m-.57 1.45c-1-3.85-6.93-3.53-12.21-6.55m13.4 5.46c-4.81-2.72-9.67-3.73-14.37-5.4m.13-.73s0 0 0 0m0 0s0 0 0 0"}))),(0,n.kt)("g",d({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#ffec99",d:"M77.33 57.7s0 0 0 0m0 0s0 0 0 0m-4.46 17.32c5.53-7.9 11.81-16.44 17.71-20.38M72.87 75.02c7.35-8.78 13.11-14.74 17.71-20.38M73 87.06c9.11-11.7 19.07-23.14 30.18-34.72M73 87.06c5.02-7.78 12.44-15.01 30.18-34.72M73.14 99.1c9.72-11.97 15.69-19.41 40.67-46.79M73.14 99.1c8.56-11 18.44-22.42 40.67-46.79m-41.2 59.59c18.13-19.62 37.85-42.85 51.83-59.62M72.61 111.9c14.43-15.09 27.92-32.11 51.83-59.62m-51.69 71.66c26.42-29.46 48.19-55.79 62.32-71.7m-62.32 71.7c22.5-25.9 46.81-52.87 62.32-71.7m-62.19 83.74c16.08-19.26 31.34-40.51 72.17-83.02m-72.17 83.02c21.17-25.23 42.14-49.27 72.17-83.02m-72.69 95.81c23.25-26.43 48.4-54.72 83.32-95.84m-83.32 95.84c33.8-37.61 67.25-76.27 83.32-95.84M74.46 158.55c21.02-22.74 39.17-43.81 91.85-105.66M74.46 158.55c18.66-22.04 39.43-44.21 91.85-105.66M79.84 164.55c35.81-39.46 71.52-80.49 97.1-111.69m-97.1 111.69c22.88-27.97 46.23-54.21 97.1-111.69M85.88 169.8c36.81-42.4 72.33-81.82 101.69-116.98M85.88 169.8c35.09-40.41 69.69-81.48 101.69-116.98M95.2 171.28c33.28-39.16 65.59-74.71 103-118.49m-103 118.49c39.57-46.01 79.45-90.44 103-118.49m-94.34 120.72c39.75-48.16 81.7-95.12 104.97-120.76M103.86 173.51c37.3-42.59 74.72-85.62 104.97-120.76m-94.34 120.72c31.45-34.85 62.68-73.32 106.28-122.26M114.49 173.47c29.9-33.67 59.12-65.1 106.28-122.26m-95.65 122.23c30.87-39.31 65.73-75.99 105.62-121.51M125.12 173.44c28.16-31.32 55.85-63.95 105.62-121.51M135.75 173.4c29.47-36.53 61.79-70.09 103-118.49m-103 118.49c27.88-33.15 57.59-66.48 103-118.49m-92.37 118.46c29.6-37.85 62.53-72.4 98.41-113.21m-98.41 113.21c20.83-24.9 44.16-51.13 98.41-113.21m-87.78 113.18c36.64-39.57 69.12-81.96 93.16-107.17m-93.16 107.17c32.51-39.6 66.17-78.97 93.16-107.17M167.64 173.3c26.61-27.69 51.05-58.76 84.63-97.36m-84.63 97.36c29.27-34.14 56.97-66.75 84.63-97.36m-74 97.33c16.2-18.05 32.96-39.94 74.13-85.29m-74.13 85.29c28.2-33.66 57.88-67.8 74.13-85.29m-63.5 85.25c23.71-27.48 47.03-53.02 63.64-73.21m-63.64 73.21c18.05-19.44 35.51-41.24 63.64-73.21m-53.01 73.18c10.27-12.19 22.18-28.13 53.14-61.13m-53.14 61.13c10.28-14.16 21.76-26.92 53.14-61.13m-42.51 61.09c14.64-16.86 27.31-31.9 42.64-49.05m-42.64 49.05c10.8-12.55 22.74-26.88 42.64-49.05m-30.7 47.51c10.91-12.8 21.52-24.85 30.84-35.47m-30.84 35.47c7.11-7.66 12.18-14.87 30.84-35.47m-18.24 33.17c6.27-5.82 14.63-15.03 17.71-20.38m-17.71 20.38c5.42-5.04 8.14-10.2 17.71-20.38"})),(0,n.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#1e1e1e",strokeWidth:"2",d:"M100 50c27.81-2.23 56.55-1.52 120 0m-120 0c36.75.67 73.23 1.92 120 0m0 0c21.92-1.46 30.62 9.46 30 30m-30-30c22.18.2 29.89 11.12 30 30m0 0c-1.58 14.64-.33 30.69 0 60m0-60c.03 12.94-.37 25.39 0 60m0 0c.58 18.9-8.3 30.15-30 30m30-30c.22 20.63-9.52 31.37-30 30m0 0c-31.9-.31-65.22-.33-120 0m120 0c-46.47.89-94.66 2.03-120 0m0 0c-18.88 1.17-28.16-11.72-30-30m30 30c-19.08.95-31.66-9.17-30-30m0 0c-1.65-12.18.22-25.18 0-60m0 60c.64-17.15.53-33.98 0-60m0 0c.02-20.22 8.21-31.4 30-30M70 80c-.48-22.21 8.69-31.22 30-30"}))),(0,n.kt)("text",d({parentName:"svg"},{x:"24.609",fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"28",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(135.39 76.4)"}),"zmq"),(0,n.kt)("path",d({parentName:"svg"},{fill:"none",stroke:"#1e1e1e",strokeLineCap:"round",strokeWidth:"2",d:"M69.35 130.7c30.05.15 151.3-.32 181.28-.28m-179.43-.4c29.92-.18 148.73-1.34 178.81-1.5"})),(0,n.kt)("text",d({parentName:"svg"},{x:"17.578",fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"20",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(142.422 136)"}),"SUB"),(0,n.kt)("g",d({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#f08c00",strokeWidth:"2",d:"M948.98 89.62c9.25-.12 46.96.51 56.19.41m-54.53-1.66c9.2.02 45.19 2.97 54 3.21"})),(0,n.kt)("path",d({parentName:"g"},{fill:"#f08c00",strokeWidth:"0",d:"M1004.04 82.3c1.55-.28 3.49 1.34 4.76 2.44 1.27 1.1 2.45 2.41 2.87 4.16.43 1.75.22 4.67-.3 6.35-.52 1.68-1.39 2.89-2.81 3.73-1.43.84-4.11 1.75-5.74 1.33-1.63-.41-2.87-2.25-4.03-3.83-1.16-1.58-2.83-3.76-2.92-5.63-.08-1.88.93-4.4 2.39-5.62 1.45-1.22 4.96-1.28 6.37-1.7 1.4-.42 1.92-.74 2.06-.82m-2.85-.73c1.68-.08 3.95 1.81 5.24 3.02 1.29 1.22 2.06 2.91 2.49 4.27.43 1.36.54 2.49.06 3.92-.47 1.43-1.46 3.39-2.91 4.65-1.45 1.26-4.12 2.82-5.79 2.93-1.66.11-3.08-.69-4.2-2.26-1.13-1.58-2.33-5.29-2.56-7.2-.23-1.92-.2-2.97 1.18-4.31 1.38-1.35 5.98-2.92 7.1-3.76 1.11-.84-.27-1.35-.42-1.27"}))),(0,n.kt)("text",d({parentName:"svg"},{x:"100",fill:"#f08c00",dominantBaseline:"text-before-edge",fontFamily:"Cascadia, Segoe UI Emoji",fontSize:"17.067",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(770 190)"}),"tcp://127.0.0.1:5555"),(0,n.kt)("g",d({parentName:"svg"},{strokeLineCap:"round"}),(0,n.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#f08c00",strokeWidth:"2",d:"M951.471 130.129c9.74-.19 49.37.05 59.27-.13m-60.74 2.23c9.52 0 49.79-.36 59.84-.76"})),(0,n.kt)("path",d({parentName:"g"},{fill:"#f08c00",fillRule:"evenodd",strokeWidth:"0",d:"m1010.221 132.859-15.08 6.23-.24-15.44 14.72 6.08"})),(0,n.kt)("path",d({parentName:"g"},{fill:"none",stroke:"#f08c00",strokeWidth:"2",d:"M1008.601 131.559c-3.86 2.64-9.95 6.19-13.63 5.23m15.28-5.21c-4.61 1.97-8.08 4.62-13.46 5.81m-.9-.03c.57-4.47.46-7.34-.81-12.6m1.48 13.01c-.33-3.57-.91-7.55-.91-12.34m-.57 1.45c2.67-.96 6.9 2.47 14.23 3.31m-13.03-4.48c4.44 1.56 10.29 3.37 13.44 5.03m.12.73s0 0 0 0m0 0s0 0 0 0"}))),(0,n.kt)("text",d({parentName:"svg"},{x:"38.85",fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"28",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(821.982 10)"}),"Saver"),(0,n.kt)("text",d({parentName:"svg"},{x:"47.124",fill:"#1e1e1e",dominantBaseline:"text-before-edge",fontFamily:"Virgil, Segoe UI Emoji",fontSize:"28",style:{whiteSpace:"pre"},textAnchor:"middle",transform:"translate(112.876 10)"}),"Loader")))),(0,n.kt)("p",null,"Indpendent of the socket type, the ",(0,n.kt)("inlineCode",{parentName:"p"},"zmq")," connector supports specfiying the\ndirection of connection establishment with ",(0,n.kt)("inlineCode",{parentName:"p"},"--listen")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"--connect"),". This can be\nhelpful to work around firewall restrictions and fit into broader set of\nexisting ZeroMQ applications."),(0,n.kt)("p",null,"With the ",(0,n.kt)("inlineCode",{parentName:"p"},"--monitor")," option, you can activate message buffering for TCP\nsockets that hold off sending messages until ",(0,n.kt)("em",{parentName:"p"},"at least one")," remote peer has\nconnected. This can be helpful when you want to delay publishing until you have\none connected subscriber, e.g., when the publisher spawns before any subscriber\nexists."),(0,n.kt)("p",null,"The default format for the ",(0,n.kt)("inlineCode",{parentName:"p"},"zmq")," connector is ",(0,n.kt)("a",d({parentName:"p"},{href:"/formats/json"}),(0,n.kt)("inlineCode",{parentName:"a"},"json")),"."),(0,n.kt)("h3",d({},{id:"-f--filter-prefix-loader"}),(0,n.kt)("inlineCode",{parentName:"h3"},"-f|--filter <prefix>")," (Loader)"),(0,n.kt)("p",null,"Installs a filter for the ZeroMQ ",(0,n.kt)("inlineCode",{parentName:"p"},"SUB")," socket at the source. Filting in ZeroMQ\nmeans performing a prefix-match on the raw bytes of the entire message."),(0,n.kt)("p",null,"Defaults to the empty string, which is equivalent to no filtering."),(0,n.kt)("h3",d({},{id:"-l--listen"}),(0,n.kt)("inlineCode",{parentName:"h3"},"-l|--listen")),(0,n.kt)("p",null,"Bind to the ZeroMQ socket."),(0,n.kt)("p",null,"By default, the loader connects and the saver listens."),(0,n.kt)("h3",d({},{id:"-c--connect"}),(0,n.kt)("inlineCode",{parentName:"h3"},"-c|--connect")),(0,n.kt)("p",null,"Connect to the ZeroMQ socket."),(0,n.kt)("p",null,"By default, the loader connects and the saver listens."),(0,n.kt)("h3",d({},{id:"-m--monitor"}),(0,n.kt)("inlineCode",{parentName:"h3"},"-m|--monitor")),(0,n.kt)("p",null,"Monitors a 0mq socket over TCP until the remote side establishes a connection."),(0,n.kt)("h3",d({},{id:"endpoint"}),(0,n.kt)("inlineCode",{parentName:"h3"},"<endpoint>")),(0,n.kt)("p",null,"The endpoint for connecting to or listening on a ZeroMQ socket."),(0,n.kt)("p",null,"Defaults to ",(0,n.kt)("inlineCode",{parentName:"p"},"tcp://127.0.0.1:5555"),"."),(0,n.kt)("h2",d({},{id:"examples"}),"Examples"),(0,n.kt)("p",null,"Publish query results to a ZeroMQ socket:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"export | where x == 42 | to zmq\n")),(0,n.kt)("p",null,"Publish the list of TQL operators as ",(0,n.kt)("a",d({parentName:"p"},{href:"/formats/csv"}),"CSV"),", also connect\ninstead of listening on the ZeroMQ socket:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"show operators | to zmq -c write csv\n")),(0,n.kt)("p",null,"Interpret ZeroMQ messages as ",(0,n.kt)("a",d({parentName:"p"},{href:"/formats/json"}),"JSON"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{}),"from zmq 1.2.3.4:56789 read json\n")),(0,n.kt)("p",null,"You could drop ",(0,n.kt)("inlineCode",{parentName:"p"},"read json")," above since ",(0,n.kt)("inlineCode",{parentName:"p"},"json")," is the default format for ",(0,n.kt)("inlineCode",{parentName:"p"},"zmq"),"."))}h.isMDXComponent=!0}}]);