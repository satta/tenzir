"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[26382],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},15748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>f,default:()=>v,frontMatter:()=>h,metadata:()=>w,toc:()=>_});var a=n(3905),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&s(e,n,t[n]);return e},d=(e,t)=>i(e,o(t)),u=(e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n};const h={sidebar_position:10},f="Enrich with Threat Intel",w={unversionedId:"user-guides/enrich-with-threat-intel/README",id:"version-Tenzir v4.12/user-guides/enrich-with-threat-intel/README",title:"Enrich with Threat Intel",description:"Tenzir has a powerful contextualization framework for real-time enrichment of a",source:"@site/versioned_docs/version-Tenzir v4.12/user-guides/enrich-with-threat-intel/README.md",sourceDirName:"user-guides/enrich-with-threat-intel",slug:"/user-guides/enrich-with-threat-intel/",permalink:"/Tenzir v4.12/user-guides/enrich-with-threat-intel/",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.12/user-guides/enrich-with-threat-intel/README.md",tags:[],version:"Tenzir v4.12",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"docsSidebar",previous:{title:"Execute Sigma rules",permalink:"/Tenzir v4.12/user-guides/execute-sigma-rules/"},next:{title:"Deduplicate events",permalink:"/Tenzir v4.12/user-guides/deduplicate-events"}},y={},_=[{value:"Setup a context",id:"setup-a-context",level:2},{value:"Enrich with a context",id:"enrich-with-a-context",level:2}],k={toc:_},b="wrapper";function v(e){var t=e,{components:n}=t,r=u(t,["components"]);return(0,a.kt)(b,d(m(m({},k),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",m({},{id:"enrich-with-threat-intel"}),"Enrich with Threat Intel"),(0,a.kt)("p",null,"Tenzir has a powerful contextualization framework for real-time enrichment of a\ndataflow with a ",(0,a.kt)("a",m({parentName:"p"},{href:"/Tenzir%20v4.12/contexts/lookup-table"}),"lookup table"),", a GeoIP\ndatabase, or a custom ",(0,a.kt)("a",m({parentName:"p"},{href:"/Tenzir%20v4.12/architecture/plugins"}),"plugin"),". The heart of the\nframework is a ",(0,a.kt)("a",m({parentName:"p"},{href:"/Tenzir%20v4.12/contexts"}),"context"),"\u2014a stateful object that can be\nmanaged with the ",(0,a.kt)("a",m({parentName:"p"},{href:"/Tenzir%20v4.12/operators/context"}),(0,a.kt)("inlineCode",{parentName:"a"},"context"))," operator and used with\nthe ",(0,a.kt)("a",m({parentName:"p"},{href:"/Tenzir%20v4.12/operators/enrich"}),(0,a.kt)("inlineCode",{parentName:"a"},"enrich"))," operator."),(0,a.kt)("h2",m({},{id:"setup-a-context"}),"Setup a context"),(0,a.kt)("p",null,"Prior to enriching, you need to populate a context with data. First, let's a\ncreate a context called ",(0,a.kt)("inlineCode",{parentName:"p"},"threatfox")," that uses a ",(0,a.kt)("a",m({parentName:"p"},{href:"/Tenzir%20v4.12/contexts/lookup-table"}),"lookup\ntable"),", i.e., a key-value mapping where a key is\nused to perform the context lookup and the value can be any structured\nadditional data."),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"context create threatfox lookup-table\n")),(0,a.kt)("p",null,"This yields the following pipeline output:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "num_entries": 0,\n  "name": "threatfox"\n}\n')),(0,a.kt)("p",null,"After creating a context, we load data into the context. In our example, we load\ndata from the ",(0,a.kt)("a",m({parentName:"p"},{href:"https://threatfox.abuse.ch/"}),"ThreatFox")," API:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),'from https://threatfox-api.abuse.ch/api/v1/ query=get_iocs days:=1\n| yield data[]\n| where ioc_type == "domain"\n| context update threatfox --key ioc\n')),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Example data for context updating"),(0,a.kt)("p",null,"If we replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," operator in the above pipeline with ",(0,a.kt)("inlineCode",{parentName:"p"},"head 5"),", we get\noutput similar to the following, depending on the current state of the API:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "id": "1213056",\n  "ioc": "deletefateoow.pw",\n  "threat_type": "botnet_cc",\n  "threat_type_desc": "Indicator that identifies a botnet command&control server (C&C)",\n  "ioc_type": "domain",\n  "ioc_type_desc": "Domain that is used for botnet Command&control (C&C)",\n  "malware": "win.lumma",\n  "malware_printable": "Lumma Stealer",\n  "malware_alias": "LummaC2 Stealer",\n  "malware_malpedia": "https://malpedia.caad.fkie.fraunhofer.de/details/win.lumma",\n  "confidence_level": 75,\n  "first_seen": "2023-12-15 15:31:00 UTC",\n  "last_seen": null,\n  "reference": "",\n  "reporter": "stoerchl",\n  "tags": [\n    "LummaStealer"\n  ]\n}\n{\n  "id": "1213057",\n  "ioc": "perceivedomerusp.pw",\n  "threat_type": "botnet_cc",\n  "threat_type_desc": "Indicator that identifies a botnet command&control server (C&C)",\n  "ioc_type": "domain",\n  "ioc_type_desc": "Domain that is used for botnet Command&control (C&C)",\n  "malware": "win.lumma",\n  "malware_printable": "Lumma Stealer",\n  "malware_alias": "LummaC2 Stealer",\n  "malware_malpedia": "https://malpedia.caad.fkie.fraunhofer.de/details/win.lumma",\n  "confidence_level": 75,\n  "first_seen": "2023-12-15 15:31:00 UTC",\n  "last_seen": null,\n  "reference": "",\n  "reporter": "stoerchl",\n  "tags": [\n    "LummaStealer"\n  ]\n}\n{\n  "id": "1213058",\n  "ioc": "showerreigerniop.pw",\n  "threat_type": "botnet_cc",\n  "threat_type_desc": "Indicator that identifies a botnet command&control server (C&C)",\n  "ioc_type": "domain",\n  "ioc_type_desc": "Domain that is used for botnet Command&control (C&C)",\n  "malware": "win.lumma",\n  "malware_printable": "Lumma Stealer",\n  "malware_alias": "LummaC2 Stealer",\n  "malware_malpedia": "https://malpedia.caad.fkie.fraunhofer.de/details/win.lumma",\n  "confidence_level": 75,\n  "first_seen": "2023-12-15 15:31:00 UTC",\n  "last_seen": null,\n  "reference": "",\n  "reporter": "stoerchl",\n  "tags": [\n    "LummaStealer"\n  ]\n}\n{\n  "id": "1213059",\n  "ioc": "fortunedomerussea.pw",\n  "threat_type": "botnet_cc",\n  "threat_type_desc": "Indicator that identifies a botnet command&control server (C&C)",\n  "ioc_type": "domain",\n  "ioc_type_desc": "Domain that is used for botnet Command&control (C&C)",\n  "malware": "win.lumma",\n  "malware_printable": "Lumma Stealer",\n  "malware_alias": "LummaC2 Stealer",\n  "malware_malpedia": "https://malpedia.caad.fkie.fraunhofer.de/details/win.lumma",\n  "confidence_level": 75,\n  "first_seen": "2023-12-15 15:31:00 UTC",\n  "last_seen": null,\n  "reference": "",\n  "reporter": "stoerchl",\n  "tags": [\n    "LummaStealer"\n  ]\n}\n{\n  "id": "1213060",\n  "ioc": "offerdelicateros.pw",\n  "threat_type": "botnet_cc",\n  "threat_type_desc": "Indicator that identifies a botnet command&control server (C&C)",\n  "ioc_type": "domain",\n  "ioc_type_desc": "Domain that is used for botnet Command&control (C&C)",\n  "malware": "win.lumma",\n  "malware_printable": "Lumma Stealer",\n  "malware_alias": "LummaC2 Stealer",\n  "malware_malpedia": "https://malpedia.caad.fkie.fraunhofer.de/details/win.lumma",\n  "confidence_level": 75,\n  "first_seen": "2023-12-15 15:31:00 UTC",\n  "last_seen": null,\n  "reference": "",\n  "reporter": "stoerchl",\n  "tags": [\n    "LummaStealer"\n  ]\n}\n'))),(0,a.kt)("p",null,"The pipeline ",(0,a.kt)("inlineCode",{parentName:"p"},"context update")," may yield:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "num_entries": 57,\n  "name": "threatfox"\n}\n')),(0,a.kt)("p",null,"That is, 57 entries have been added successfully to the ",(0,a.kt)("inlineCode",{parentName:"p"},"threatfox")," context."),(0,a.kt)("h2",m({},{id:"enrich-with-a-context"}),"Enrich with a context"),(0,a.kt)("p",null,"Now that we loaded IoCs into the context, we can enrich with it in other\npipelines. Since we previously imported only domains, we would look for fields\nin the data of that type."),(0,a.kt)("p",null,"The following pipeline subscribes to the import feed of all data arriving at the\nnode via ",(0,a.kt)("inlineCode",{parentName:"p"},"export --live")," and applies the ",(0,a.kt)("inlineCode",{parentName:"p"},"threatfox")," context to Suricata DNS\nrequests in field ",(0,a.kt)("inlineCode",{parentName:"p"},"dns.rrname")," via ",(0,a.kt)("a",m({parentName:"p"},{href:"/Tenzir%20v4.12/operators/enrich"}),(0,a.kt)("inlineCode",{parentName:"a"},"enrich")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),'export --live\n| where #schema == "suricata.dns"\n| enrich threatfox --field dns.rrname\n')),(0,a.kt)("p",null,"Here is a sample of an event that the above pipeline yields:"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "timestamp": "2021-11-17T16:57:42.389824",\n  "flow_id": 1542499730911936,\n  "pcap_cnt": 3167,\n  "vlan": null,\n  "in_iface": null,\n  "src_ip": "45.85.90.164",\n  "src_port": 56462,\n  "dest_ip": "198.71.247.91",\n  "dest_port": 53,\n  "proto": "UDP",\n  "event_type": "dns",\n  "community_id": null,\n  "dns": {\n    "version": null,\n    "type": "query",\n    "id": 1,\n    "flags": null,\n    "qr": null,\n    "rd": null,\n    "ra": null,\n    "aa": null,\n    "tc": null,\n    "rrname": "bza.fartit.com",\n    "rrtype": "RRSIG",\n    "rcode": null,\n    "ttl": null,\n    "tx_id": 0,\n    "grouped": null,\n    "answers": null\n  },\n  "threatfox": {\n    "key": "bza.fartit.com",\n    "context": {\n      "id": "1209087",\n      "ioc": "bza.fartit.com",\n      "threat_type": "payload_delivery",\n      "threat_type_desc": "Indicator that identifies a malware distribution server (payload delivery)",\n      "ioc_type": "domain",\n      "ioc_type_desc": "Domain name that delivers a malware payload",\n      "malware": "apk.irata",\n      "malware_printable": "IRATA",\n      "malware_alias": null,\n      "malware_malpedia": "https://malpedia.caad.fkie.fraunhofer.de/details/apk.irata",\n      "confidence_level": 100,\n      "first_seen": "2023-12-03 14:05:20 UTC",\n      "last_seen": null,\n      "reference": "",\n      "reporter": "onecert_ir",\n      "tags": [\n        "irata"\n      ]\n    },\n    "timestamp": "2023-12-04T13:52:49.043157"\n  }\n}\n')),(0,a.kt)("p",null,"The sub-record ",(0,a.kt)("inlineCode",{parentName:"p"},"threatfox")," holds the enrichment details. The field ",(0,a.kt)("inlineCode",{parentName:"p"},"key"),"\ncontains the matching key. The field ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," is the row from the lookup table\nat key ",(0,a.kt)("inlineCode",{parentName:"p"},"bza.fartit.com"),". The field ",(0,a.kt)("inlineCode",{parentName:"p"},"timestamp")," is the time when the enrichment\noccurred."),(0,a.kt)("p",null,"For a more comprehensive discussion of contextualization, check out our blog\npost ",(0,a.kt)("a",m({parentName:"p"},{href:"/blog/contextualization-made-simple"}),"Contextualization Made Simple"),"."))}v.isMDXComponent=!0}}]);