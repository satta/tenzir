"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[60033],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=i,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},43881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>g,frontMatter:()=>m,metadata:()=>k,toc:()=>y});var r=n(3905),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&c(e,n,t[n]);return e},d=(e,t)=>a(e,o(t)),h=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const m={sidebar_position:11},f="Enrich with Network Inventory",k={unversionedId:"user-guides/enrich-with-network-inventory/README",id:"user-guides/enrich-with-network-inventory/README",title:"Enrich with Network Inventory",description:"Tenzir's contextualization framework features [lookup",source:"@site/docs/user-guides/enrich-with-network-inventory/README.md",sourceDirName:"user-guides/enrich-with-network-inventory",slug:"/user-guides/enrich-with-network-inventory/",permalink:"/next/user-guides/enrich-with-network-inventory/",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/user-guides/enrich-with-network-inventory/README.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"docsSidebar",previous:{title:"Enrich with Threat Intel",permalink:"/next/user-guides/enrich-with-threat-intel/"},next:{title:"Deduplicate events",permalink:"/next/user-guides/deduplicate-events"}},b={},y=[{value:"Populate subnet mappings from a CSV file",id:"populate-subnet-mappings-from-a-csv-file",level:2},{value:"Enrich IP addresses with the subnet table",id:"enrich-ip-addresses-with-the-subnet-table",level:2}],v={toc:y},w="wrapper";function g(e){var t=e,{components:n}=t,i=h(t,["components"]);return(0,r.kt)(w,d(u(u({},v),i),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"enrich-with-network-inventory"}),"Enrich with Network Inventory"),(0,r.kt)("p",null,"Tenzir's contextualization framework features ",(0,r.kt)("a",u({parentName:"p"},{href:"/next/contexts/lookup-table"}),"lookup\ntables")," that you can use to\n",(0,r.kt)("a",u({parentName:"p"},{href:"/next/operators/enrich"}),(0,r.kt)("inlineCode",{parentName:"a"},"enrich"))," your pipelines. Lookup tables have one\nunique property that makes them attractive for tracking information associated\nwith CIDR subnets: when you use ",(0,r.kt)("inlineCode",{parentName:"p"},"subnet")," values as keys, you can probe the\nlookup table with ",(0,r.kt)("inlineCode",{parentName:"p"},"ip")," values and will get a longest-prefix match."),(0,r.kt)("p",null,"To illustrate, consider this lookup table:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"10.0.0.0/22 \u2192 Machines\n10.0.0.0/24 \u2192 Servers\n10.0.1.0/24 \u2192 Clients\n")),(0,r.kt)("p",null,"When you have subnets as keys as above, you can query them with an IP address\nduring enrichment. Say you want to enrich IP address ",(0,r.kt)("inlineCode",{parentName:"p"},"10.0.0.1"),". Since the\nlongest (bitwise) prefix match is ",(0,r.kt)("inlineCode",{parentName:"p"},"10.0.0.0/24"),", you will get ",(0,r.kt)("inlineCode",{parentName:"p"},"Servers")," as a\nresult. The same goes for IP address ",(0,r.kt)("inlineCode",{parentName:"p"},"10.0.0.255"),", but ",(0,r.kt)("inlineCode",{parentName:"p"},"10.0.1.1")," will yield\n",(0,r.kt)("inlineCode",{parentName:"p"},"Clients"),". The IP address ",(0,r.kt)("inlineCode",{parentName:"p"},"10.0.2.1")," yields Machines, since it is neither in\n",(0,r.kt)("inlineCode",{parentName:"p"},"10.0.0.0/24")," nor ",(0,r.kt)("inlineCode",{parentName:"p"},"10.0.1.0/24"),", but ",(0,r.kt)("inlineCode",{parentName:"p"},"10.0.0.0/21"),". The IP adress ",(0,r.kt)("inlineCode",{parentName:"p"},"10.0.4.1"),"\nwon't match at all, because it's not any of the three subnets."),(0,r.kt)("h2",u({},{id:"populate-subnet-mappings-from-a-csv-file"}),"Populate subnet mappings from a CSV file"),(0,r.kt)("p",null,"It's common to have Excel sheets or exported CSV files of inventory data. Let's\nconsider this example:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-csv",metastring:"title=inventory.csv",title:"inventory.csv"}),"subnet,owner,function\n10.0.0.0/22,John,machines\n10.0.0.0/24,Derek,servers\n10.0.1.0/24,Peter,clients\n")),(0,r.kt)("p",null,"First, create the context:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"context create subnets lookup-table\n")),(0,r.kt)("p",null,"Then populate it:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"from inventory.csv\n| context update subnets --key subnet\n")),(0,r.kt)("h2",u({},{id:"enrich-ip-addresses-with-the-subnet-table"}),"Enrich IP addresses with the subnet table"),(0,r.kt)("p",null,"Now that we have a lookup table with subnet keys, we can\n",(0,r.kt)("a",u({parentName:"p"},{href:"/next/operators/enrich"}),(0,r.kt)("inlineCode",{parentName:"a"},"enrich"))," any data containing IP addresses with it.\nFor example, let's consider this simplified Suricata flow record:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-json",metastring:"title=sample.json",title:"sample.json"}),'{\n  "timestamp": "2021-11-17T13:32:43.237882",\n  "src_ip": "10.0.0.1",\n  "src_port": 54402,\n  "dest_ip": "10.1.1.254",\n  "dest_port": 53,\n  "proto": "UDP",\n  "event_type": "flow",\n  "app_proto": "dns",\n}\n')),(0,r.kt)("p",null,"Let's use the ",(0,r.kt)("inlineCode",{parentName:"p"},"enrich")," operator to add the subnet context to all IP address\nfields:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"from /tmp/sample.json\n| enrich subnets --field :ip\n")),(0,r.kt)("p",null,"This yields the following output:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-json"}),'{\n  "timestamp": "2021-11-17T13:32:43.237882",\n  "src_ip": "10.0.0.1",\n  "src_port": 54402,\n  "dest_ip": "10.1.1.254",\n  "dest_port": 53,\n  "proto": "UDP",\n  "event_type": "flow",\n  "app_proto": "dns",\n  "subnets": {\n    "src_ip": {\n      "value": "10.0.0.1",\n      "timestamp": "2024-05-29T13:02:56.368882",\n      "mode": "enrich",\n      "context": {\n        "subnet": "10.0.0.0/24",\n        "owner": "Derek",\n        "function": "servers"\n      }\n    },\n    "dest_ip": {\n      "value": "10.1.1.254",\n      "timestamp": "2024-05-29T13:02:56.368882",\n      "mode": "enrich",\n      "context": null\n    }\n  }\n}\n')),(0,r.kt)("p",null,"We have enriched all IP addresses in the flow event with the ",(0,r.kt)("inlineCode",{parentName:"p"},"subnets")," context.\nNow go hunt down Derek!"))}g.isMDXComponent=!0}}]);