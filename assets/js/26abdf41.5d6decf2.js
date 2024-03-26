"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74569],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(t),f=a,m=c["".concat(s,".").concat(f)]||c[f]||u[f]||o;return t?r.createElement(m,l(l({ref:n},d),{},{components:t})):r.createElement(m,l({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4108:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>k,default:()=>h,frontMatter:()=>m,metadata:()=>y,toc:()=>v});var r=t(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,c=(e,n)=>{for(var t in n||(n={}))s.call(n,t)&&d(e,t,n[t]);if(i)for(var t of i(n))p.call(n,t)&&d(e,t,n[t]);return e},u=(e,n)=>o(e,l(n)),f=(e,n)=>{var t={};for(var r in e)s.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&i)for(var r of i(e))n.indexOf(r)<0&&p.call(e,r)&&(t[r]=e[r]);return t};const m={sidebar_custom_props:{operator:{transformation:!0}}},k="flatten",y={unversionedId:"operators/flatten",id:"version-Tenzir v4.10/operators/flatten",title:"flatten",description:"Flattens nested data.",source:"@site/versioned_docs/version-Tenzir v4.10/operators/flatten.md",sourceDirName:"operators",slug:"/operators/flatten",permalink:"/Tenzir v4.10/operators/flatten",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.10/operators/flatten.md",tags:[],version:"Tenzir v4.10",frontMatter:{sidebar_custom_props:{operator:{transformation:!0}}},sidebar:"docsSidebar",previous:{title:"extend",permalink:"/Tenzir v4.10/operators/extend"},next:{title:"fluent-bit",permalink:"/Tenzir v4.10/operators/fluent-bit"}},b={},v=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;separator&gt;</code>",id:"separator",level:3},{value:"Examples",id:"examples",level:2}],g={toc:v},N="wrapper";function h(e){var n=e,{components:t}=n,a=f(n,["components"]);return(0,r.kt)(N,u(c(c({},g),a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"flatten"}),"flatten"),(0,r.kt)("p",null,"Flattens nested data."),(0,r.kt)("h2",c({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"flatten [<separator>]\n")),(0,r.kt)("h2",c({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"flatten")," operator acts on ",(0,r.kt)("a",c({parentName:"p"},{href:"/Tenzir%20v4.10/data-model/type-system"}),"container types"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Records"),": Join nested records with a separator (",(0,r.kt)("inlineCode",{parentName:"li"},".")," by default). For\nexample, if a field named ",(0,r.kt)("inlineCode",{parentName:"li"},"x")," is a record with fields ",(0,r.kt)("inlineCode",{parentName:"li"},"a")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"b"),", flattening\nwill lift the nested record into the parent scope by creating two new fields\n",(0,r.kt)("inlineCode",{parentName:"li"},"x.a")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"x.b"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Lists"),": Merge nested lists into a single (flat) list. For example,\n",(0,r.kt)("inlineCode",{parentName:"li"},"[[[2]], [[3, 1]], [[4]]]")," becomes ",(0,r.kt)("inlineCode",{parentName:"li"},"[2, 3, 1, 4]"),".")),(0,r.kt)("p",null,"For records inside lists, ",(0,r.kt)("inlineCode",{parentName:"p"},"flatten"),' "pushes lists down" into one list per record\nfield. For example, the record'),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "foo": [\n    {\n      "a": 2,\n      "b": 1\n    },\n    {\n      "a": 4\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"becomes"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "foo.a": [2, 4],\n  "foo.b": [1, null]\n}\n')),(0,r.kt)("p",null,"Lists nested in records that are nested in lists will also be flattened. For\nexample, the record"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "foo": [\n    {\n      "a": [\n        [2, 23],\n        [1,16]\n      ],\n      "b": [1]\n    },\n    {\n      "a": [[4]]\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"becomes"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "foo.a": [\n    2,\n    23,\n    1,\n    16,\n    4\n  ],\n  "foo.b": [\n    1\n  ]\n}\n')),(0,r.kt)("p",null,"As you can see from the above examples, flattening also removes ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," values."),(0,r.kt)("h3",c({},{id:"separator"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<separator>")),(0,r.kt)("p",null,"The separator string to join the field names of nested records."),(0,r.kt)("p",null,"Defaults to ",(0,r.kt)("inlineCode",{parentName:"p"},"."),"."),(0,r.kt)("h2",c({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Consider the following record:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "src_ip": "147.32.84.165",\n  "src_port": 1141,\n  "dest_ip": "147.32.80.9",\n  "dest_port": 53,\n  "event_type": "dns",\n  "dns": {\n    "type": "query",\n    "id": 553,\n    "rrname": "irc.freenode.net",\n    "rrtype": "A",\n    "tx_id": 0,\n    "grouped": {\n      "A": ["tenzir.com", null]\n    }\n  }\n}\n')),(0,r.kt)("p",null,"After ",(0,r.kt)("inlineCode",{parentName:"p"},"flatten")," the record looks as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "src_ip": "147.32.84.165",\n  "src_port": 1141,\n  "dest_ip": "147.32.80.9",\n  "dest_port": 53,\n  "event_type": "dns",\n  "dns.type": "query",\n  "dns.id": 553,\n  "dns.rrname": "irc.freenode.net",\n  "dns.rrtype": "A",\n  "dns.tx_id": 0,\n  "dns.grouped.A": ["tenzir.com"]\n}\n')),(0,r.kt)("p",null," Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"dns.grouped.A")," no longer contains a ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," value."))}h.isMDXComponent=!0}}]);