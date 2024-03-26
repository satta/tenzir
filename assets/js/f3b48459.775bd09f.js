"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[35793],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},k="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),k=s(n),d=r,u=k["".concat(p,".").concat(d)]||k[d]||f[d]||o;return n?a.createElement(u,i(i({ref:t},c),{},{components:n})):a.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[k]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29470:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>m,default:()=>N,frontMatter:()=>u,metadata:()=>v,toc:()=>y});var a=n(3905),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&c(e,n,t[n]);return e},f=(e,t)=>o(e,i(t)),d=(e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n};const u={sidebar_custom_props:{connector:{loader:!0,saver:!0}}},m="kafka",v={unversionedId:"connectors/kafka",id:"connectors/kafka",title:"kafka",description:"Loads bytes from and saves bytes to Kafka.",source:"@site/docs/connectors/kafka.md",sourceDirName:"connectors",slug:"/connectors/kafka",permalink:"/next/connectors/kafka",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/connectors/kafka.md",tags:[],version:"current",frontMatter:{sidebar_custom_props:{connector:{loader:!0,saver:!0}}},sidebar:"docsSidebar",previous:{title:"https",permalink:"/next/connectors/https"},next:{title:"nic",permalink:"/next/connectors/nic"}},h={},y=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>-t|--topic &lt;topic&gt;</code> (Loader, Saver)",id:"-t--topic-topic-loader-saver",level:3},{value:"<code>-c|--count &lt;n&gt;</code> (Loader)",id:"-c--count-n-loader",level:3},{value:"<code>-e|--exit</code> (Loader)",id:"-e--exit-loader",level:3},{value:"<code>-o|--offset &lt;offset&gt;</code> (Loader)",id:"-o--offset-offset-loader",level:3},{value:"<code>-X|--set &lt;key=value&gt;</code> (Loader, Saver)",id:"-x--set-keyvalue-loader-saver",level:3},{value:"<code>-k|--key &lt;key&gt;</code> (Saver)",id:"-k--key-key-saver",level:3},{value:"<code>-T|--timestamp &lt;time&gt;</code> (Saver)",id:"-t--timestamp-time-saver",level:3},{value:"Examples",id:"examples",level:2}],b={toc:y},g="wrapper";function N(e){var t=e,{components:n}=t,r=d(t,["components"]);return(0,a.kt)(g,f(k(k({},b),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",k({},{id:"kafka"}),"kafka"),(0,a.kt)("p",null,"Loads bytes from and saves bytes to Kafka."),(0,a.kt)("h2",k({},{id:"synopsis"}),"Synopsis"),(0,a.kt)("p",null,"Loader:"),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{}),"kafka [-t <topic>] [-c|--count <n>] [-e|--exit] [-o|--offset <offset>]\n      [-X|--set <key=value>,...]\n")),(0,a.kt)("p",null,"Saver:"),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{}),"kafka [-t <topic>] [-k|--key <key>] [-T|--timestamp <time>]\n      [-X|--set <key=value>]\n\n")),(0,a.kt)("h2",k({},{id:"description"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"kafka")," loader reads bytes from a Kafka topic. The ",(0,a.kt)("inlineCode",{parentName:"p"},"kafka")," saver writes\nbytes to a Kafka topic."),(0,a.kt)("p",null,"The implementation uses the official ",(0,a.kt)("a",k({parentName:"p"},{href:"https://github.com/confluentinc/librdkafka"}),"librdkafka")," from Confluent and\nsupports all ",(0,a.kt)("a",k({parentName:"p"},{href:"https://github.com/confluentinc/librdkafka/blob/master/CONFIGURATION.md"}),"configuration options"),". You can specify them\nvia ",(0,a.kt)("inlineCode",{parentName:"p"},"-X <key=value>,..."),". We recommend putting your Kafka options into the\ndedicated ",(0,a.kt)("inlineCode",{parentName:"p"},"kafka.yaml")," ",(0,a.kt)("a",k({parentName:"p"},{href:"/next/configuration#load-plugins"}),"plugin config file"),".\nThis way you can configure your all your environment-specific options once,\nindependent of the per-connector invocations."),(0,a.kt)("p",null,"The connector injects the following default librdkafka configuration values in\ncase no configuration file is present, or when the configuration does not\ninclude them:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bootstrap.servers"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"localhost")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"client.id"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"tenzir")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"group.id"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"tenzir"))),(0,a.kt)("p",null,"The default format for the ",(0,a.kt)("inlineCode",{parentName:"p"},"kafka")," connector is ",(0,a.kt)("a",k({parentName:"p"},{href:"/next/formats/json"}),(0,a.kt)("inlineCode",{parentName:"a"},"json")),"."),(0,a.kt)("h3",k({},{id:"-t--topic-topic-loader-saver"}),(0,a.kt)("inlineCode",{parentName:"h3"},"-t|--topic <topic>")," (Loader, Saver)"),(0,a.kt)("p",null,"The Kafka topic use."),(0,a.kt)("p",null,"Defaults to ",(0,a.kt)("inlineCode",{parentName:"p"},"tenzir"),"."),(0,a.kt)("h3",k({},{id:"-c--count-n-loader"}),(0,a.kt)("inlineCode",{parentName:"h3"},"-c|--count <n>")," (Loader)"),(0,a.kt)("p",null,"Exit successfully after having consumed ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," messages."),(0,a.kt)("h3",k({},{id:"-e--exit-loader"}),(0,a.kt)("inlineCode",{parentName:"h3"},"-e|--exit")," (Loader)"),(0,a.kt)("p",null,"Exit successfully after having received the last message."),(0,a.kt)("p",null,"Without this option, the loader waits for new messages after having consumed the\nlast one."),(0,a.kt)("h3",k({},{id:"-o--offset-offset-loader"}),(0,a.kt)("inlineCode",{parentName:"h3"},"-o|--offset <offset>")," (Loader)"),(0,a.kt)("p",null,"The offset to start consuming from. Possible values are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"beginning"),": first offset"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"end"),": last offset"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"stored"),": stored offset"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<value>"),": absolute offset"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"-<value>"),": relative offset from end")),(0,a.kt)("h3",k({},{id:"-x--set-keyvalue-loader-saver"}),(0,a.kt)("inlineCode",{parentName:"h3"},"-X|--set <key=value>")," (Loader, Saver)"),(0,a.kt)("p",null,"A comma-separated list of key-value configuration options for\n",(0,a.kt)("a",k({parentName:"p"},{href:"https://github.com/confluentinc/librdkafka"}),"librdkafka"),", e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"-X\nauto.offset.reset=earliest,enable.partition.eof=true"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"kafka")," operator passes the key-value pairs directly to\n",(0,a.kt)("a",k({parentName:"p"},{href:"https://github.com/confluentinc/librdkafka"}),"librdkafka"),". Consult the list of available ",(0,a.kt)("a",k({parentName:"p"},{href:"https://github.com/confluentinc/librdkafka/blob/master/CONFIGURATION.md"}),"configuration\noptions")," to configure Kafka according to your needs."),(0,a.kt)("p",null,"We recommand factoring these options into the plugin-specific ",(0,a.kt)("inlineCode",{parentName:"p"},"kafka.yaml")," so\nthat they are indpendent of the ",(0,a.kt)("inlineCode",{parentName:"p"},"kafka")," connector arguments."),(0,a.kt)("h3",k({},{id:"-k--key-key-saver"}),(0,a.kt)("inlineCode",{parentName:"h3"},"-k|--key <key>")," (Saver)"),(0,a.kt)("p",null,"Sets a fixed key for all messages."),(0,a.kt)("h3",k({},{id:"-t--timestamp-time-saver"}),(0,a.kt)("inlineCode",{parentName:"h3"},"-T|--timestamp <time>")," (Saver)"),(0,a.kt)("p",null,"Sets a fixed timestamp for all messages."),(0,a.kt)("h2",k({},{id:"examples"}),"Examples"),(0,a.kt)("p",null,"Read 100 JSON messages from the topic ",(0,a.kt)("inlineCode",{parentName:"p"},"tenzir"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{}),"from kafka -c 100 read json\n")),(0,a.kt)("p",null,"Read Zeek Streaming JSON logs from topic ",(0,a.kt)("inlineCode",{parentName:"p"},"zeek")," starting at the beginning:"),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{}),"from kafka -t zeek -o beginning read zeek-json\n")),(0,a.kt)("p",null,"Write the Tenzir version to topic ",(0,a.kt)("inlineCode",{parentName:"p"},"tenzir")," with timestamp from the past:"),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{}),"version | to kafka -T 1984-01-01\n")),(0,a.kt)("p",null,"Follow a CSV file and publish it to topic ",(0,a.kt)("inlineCode",{parentName:"p"},"data"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",k({parentName:"pre"},{}),"from file -f /tmp/data.csv read csv | to kafka -t data\n")))}N.isMDXComponent=!0}}]);