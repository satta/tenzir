"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[80124],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},k=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),c=s(n),u=r,g=c["".concat(p,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(g,i(i({ref:t},k),{},{components:n})):a.createElement(g,i({ref:t},k))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},88031:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>h,default:()=>N,frontMatter:()=>g,metadata:()=>d,toc:()=>z});var a=n(3905),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,k=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&k(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&k(e,n,t[n]);return e},m=(e,t)=>o(e,i(t)),u=(e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n};const g={},h="Zeek",d={unversionedId:"integrations/zeek",id:"version-v4.18/integrations/zeek",title:"Zeek",description:"The Zeek network monitor translates raw packets into",source:"@site/versioned_docs/version-v4.18/integrations/zeek.md",sourceDirName:"integrations",slug:"/integrations/zeek",permalink:"/integrations/zeek",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-v4.18/integrations/zeek.md",tags:[],version:"v4.18",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Windows Event Logs",permalink:"/integrations/windows-event-logs"},next:{title:"Troubleshooting",permalink:"/troubleshooting"}},f={},z=[{value:"Ingest logs into a node",id:"ingest-logs-into-a-node",level:2},{value:"Easy-button import with the official Zeek package",id:"easy-button-import-with-the-official-zeek-package",level:3},{value:"Run an import pipeline when rotating logs",id:"run-an-import-pipeline-when-rotating-logs",level:3},{value:"Run Zeek on a packet pipeline",id:"run-zeek-on-a-packet-pipeline",level:2},{value:"Process logs with a pipeline on the command line",id:"process-logs-with-a-pipeline-on-the-command-line",level:2},{value:"Generate Zeek TSV from arbitrary data",id:"generate-zeek-tsv-from-arbitrary-data",level:2}],v={toc:z},b="wrapper";function N(e){var t=e,{components:n}=t,r=u(t,["components"]);return(0,a.kt)(b,m(c(c({},v),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",c({},{id:"zeek"}),"Zeek"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",c({parentName:"p"},{href:"https://zeek.org"}),"Zeek")," network monitor translates raw packets into\nstructured logs."),(0,a.kt)("p",null,"Tenzir supports various Zeek use cases, such as continuous ingestion, ad-hoc log\nfile processing, and even generating Zeek logs."),(0,a.kt)("admonition",c({},{title:"Zeek Blog Post Series",type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"We wrote several Zeek blog posts in the past that cover various aspects of the\nZeek integration in much more detail."),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"/blog/mobilizing-zeek-logs"}),"Mobilizing Zeek Logs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"/blog/zeek-and-ye-shall-pipe"}),"Zeek and Ye Shall Pipe")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"/blog/shell-yeah-supercharging-zeek-and-suricata-with-tenzir"}),"Shell Yeah! Supercharging Zeek and Suricata with Tenzir")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"/blog/native-zeek-log-rotation-and-shipping"}),"Native Zeek Log Rotation & Shipping")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"/blog/tenzir-for-splunk-users"}),"Tenzir for Splunk Users")))),(0,a.kt)("p",null,"Zeek logs come in ",(0,a.kt)("a",c({parentName:"p"},{href:"/blog/mobilizing-zeek-logs"}),"three forms")," in practice, all of\nwhich Tenzir can parse natively:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",c({parentName:"li"},{href:"/formats/zeek-tsv"}),(0,a.kt)("inlineCode",{parentName:"a"},"zeek-tsv")),": Tab-Separated Values (TSV) with a\ncustom header."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",c({parentName:"li"},{href:"/formats/zeek-tsv"}),(0,a.kt)("inlineCode",{parentName:"a"},"zeek-json")),": One NDJSON file for all log types\n(aka. ",(0,a.kt)("em",{parentName:"li"},"JSON Streaming"),") including an extra ",(0,a.kt)("inlineCode",{parentName:"li"},"_path")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"_write_ts")," field."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",c({parentName:"li"},{href:"/formats/json"}),(0,a.kt)("inlineCode",{parentName:"a"},"json")),": One NDJSON file per log type.")),(0,a.kt)("h2",c({},{id:"ingest-logs-into-a-node"}),"Ingest logs into a node"),(0,a.kt)("p",null,"To ingest Zeek logs into a Tenzir node, you have multiple options."),(0,a.kt)("h3",c({},{id:"easy-button-import-with-the-official-zeek-package"}),"Easy-button import with the official Zeek package"),(0,a.kt)("p",null,"Our official ",(0,a.kt)("a",c({parentName:"p"},{href:"https://github.com/tenzir/zeek-tenzir"}),"Zeek package")," makes it easy\nto ship your Zeek logs to a Tenzir node. Install the package first:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"zkg install zeek-tenzir\n")),(0,a.kt)("p",null,"Then add this to your ",(0,a.kt)("inlineCode",{parentName:"p"},"$PREFIX/share/zeek/site/local.zeek")," to send all logs that\nZeek produces to a Tenzir node:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-zeek"}),"@load tenzir/import\n\n# Uncomment to keep the original Zeek logs.\n# redef Tenzir::delete_after_postprocesing=F;\n")),(0,a.kt)("p",null,"For ad-hoc command line processing you can also pass ",(0,a.kt)("inlineCode",{parentName:"p"},"tenzir/import")," to a Zeek\ninvocation:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# Ship logs to it and delete the original files.\nzeek -r trace.pcap tenzir/import\n\n# Ship logs to it and keep the original files.\nzeek -r trace.pcap tenzir/import Tenzir::delete_after_postprocesing=F\n")),(0,a.kt)("p",null,"For further details on how to use our Zeek package read our blog post ",(0,a.kt)("a",c({parentName:"p"},{href:"/blog/native-zeek-log-rotation-and-shipping"}),"Native\nZeek Log Rotation & Shipping"),"."),(0,a.kt)("h3",c({},{id:"run-an-import-pipeline-when-rotating-logs"}),"Run an import pipeline when rotating logs"),(0,a.kt)("p",null,"If you cannot use our Zeek package, it is still possible to let Zeek trigger an\nimport pipeline upon rotation. Zeek's ",(0,a.kt)("a",c({parentName:"p"},{href:"https://docs.zeek.org/en/master/frameworks/logging.html"}),"logging\nframework")," can execute\na shell script whenever it rotates a log file."),(0,a.kt)("p",null,"This requires setting ",(0,a.kt)("inlineCode",{parentName:"p"},"Log::default_rotation_interval")," to a non-zero value. The\ndefault of ",(0,a.kt)("inlineCode",{parentName:"p"},"0 secs")," means that log rotation is disabled. Add this to\n",(0,a.kt)("inlineCode",{parentName:"p"},"$PREFIX/share/zeek/site/local.zeek"),", which is the place for local configuration\nchanges:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{}),"redef Log::default_rotation_interval = 1 day;\n")),(0,a.kt)("p",null,"Then redefine\n",(0,a.kt)("a",c({parentName:"p"},{href:"https://docs.zeek.org/en/master/scripts/base/frameworks/logging/main.zeek.html#id-Log::default_rotation_postprocessor_cmd"}),(0,a.kt)("inlineCode",{parentName:"a"},"Log::default_rotation_postprocessor_cmd")),"\nto point to your shell script, e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/ingest"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{}),"redef Log::default_rotation_postprocessor_cmd=/usr/local/bin/ingest;\n")),(0,a.kt)("p",null,"Here is an example ",(0,a.kt)("inlineCode",{parentName:"p"},"ingest")," script that imports all files into a Tenzir node:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash",metastring:'title="ingest"',title:'"ingest"'}),'#!/bin/sh\n\nfile_name="$1"\nbase_name="$2"\nfrom="$3"\nto="$4"\nterminating="$5"\nwriter="$6"\n\nif [ "$writer" = "ascii" ]; then\n  format="zeek-tsv"\nelif [ "$writer" = "json" ]; then\n  format="json --schema zeek.$base_name"\nelse\n  echo "unsupported Zeek writer: $writer"\n  exit 1\nfi\n\npipeline="from file \\"$file_name\\" read $format | import"\n\ntenzir "$pipeline"\n')),(0,a.kt)("p",null,"Our blog post ",(0,a.kt)("a",c({parentName:"p"},{href:"/blog/native-zeek-log-rotation-and-shipping"}),"Native Zeek Log Rotation &\nShipping")," provides further details\non this method."),(0,a.kt)("h2",c({},{id:"run-zeek-on-a-packet-pipeline"}),"Run Zeek on a packet pipeline"),(0,a.kt)("p",null,"You can run Zeek on a pipeline of PCAP packets and continue processing the logs\nin the same pipeline. A stock Tenzir installation comes with a\n",(0,a.kt)("a",c({parentName:"p"},{href:"/language/user-defined-operators"}),"user-defined")," ",(0,a.kt)("inlineCode",{parentName:"p"},"zeek")," operator that looks\nas follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-yaml",metastring:"title=tenzir.yaml",title:"tenzir.yaml"}),'tenzir:\n  operators:\n    zeek:\n      shell "eval \\"$(zkg env)\\" &&\n             zeek -r - LogAscii::output_to_stdout=T\n             JSONStreaming::disable_default_logs=T\n             JSONStreaming::enable_log_rotation=F\n             json-streaming-logs"\n      | read zeek-json\n')),(0,a.kt)("p",null,"This allows you run Zeek on a packet trace as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"tenzir 'load /path/to/trace.pcap | zeek'\n")),(0,a.kt)("p",null,"You can also perform more elaborate packet filtering by going through the\n",(0,a.kt)("a",c({parentName:"p"},{href:"/formats/pcap"}),(0,a.kt)("inlineCode",{parentName:"a"},"pcap"))," parser:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"tenzir 'from /path/to/trace.pcap\n       | decapsulate\n       | where 10.0.0.0/8 || community == \"1:YXWfTYEyYLKVv5Ge4WqijUnKTrM=\"\n       | write pcap\n       | zeek'\n")),(0,a.kt)("p",null,"Read the ",(0,a.kt)("a",c({parentName:"p"},{href:"/blog/shell-yeah-supercharging-zeek-and-suricata-with-tenzir"}),"in-depth blog\npost")," for more\ndetails about the inner workings of the ",(0,a.kt)("a",c({parentName:"p"},{href:"/operators/shell"}),(0,a.kt)("inlineCode",{parentName:"a"},"shell")),"\noperator."),(0,a.kt)("h2",c({},{id:"process-logs-with-a-pipeline-on-the-command-line"}),"Process logs with a pipeline on the command line"),(0,a.kt)("p",null,"Zeek ships with a helper utility ",(0,a.kt)("inlineCode",{parentName:"p"},"zeek-cut")," that operators on Zeek's\ntab-separated logs. For example, to extract the host pairs from a conn log:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"zeek-cut id.orig_h id.resp_h < conn.log\n")),(0,a.kt)("p",null,"The list of arguments to ",(0,a.kt)("inlineCode",{parentName:"p"},"zeek-cut")," are the column names of the log. The\n",(0,a.kt)("a",c({parentName:"p"},{href:"/operators/select"}),(0,a.kt)("inlineCode",{parentName:"a"},"select"))," operator performs the equivalent in Tenzir\nafter we parse the logs as ",(0,a.kt)("a",c({parentName:"p"},{href:"/formats/zeek-tsv"}),(0,a.kt)("inlineCode",{parentName:"a"},"zeek-tsv")),":"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"tenzir 'read zeek-tsv | select zeek-cut id.orig_h id.resp_h' < conn.log\n")),(0,a.kt)("p",null,"Since pipelines are ",(0,a.kt)("em",{parentName:"p"},"multi-schema")," and the Zeek TSV parser is aware of log\nboundaries, you can also concatenate logs of various types:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"cat *.log | tenzir 'read zeek-tsv | select zeek-cut id.orig_h id.resp_h'\n")),(0,a.kt)("h2",c({},{id:"generate-zeek-tsv-from-arbitrary-data"}),"Generate Zeek TSV from arbitrary data"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",c({parentName:"p"},{href:"/formats/zeek-tsv"}),(0,a.kt)("inlineCode",{parentName:"a"},"zeek-tsv"))," is not only a parser, but also a\nprinter. This means you can render any data as Zeek TSV log."),(0,a.kt)("p",null,"For example, print the Tenzir version as Zeek TSV log:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"tenzir 'show version | write zeek-tsv'\n")),(0,a.kt)("p",null,"This yields the following output:"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{}),"#separator \\x09\n#set_separator  ,\n#empty_field    (empty)\n#unset_field    -\n#path   tenzir.version\n#open   2023-12-16-08-47-12.372511\n#fields version major   minor   patch   tweak\n#types  string  count   count   count   count\nv4.6.4-155-g0b75e93026  4   6   4   155\n#close  2023-12-16-08-47-12.372736\n")))}N.isMDXComponent=!0}}]);