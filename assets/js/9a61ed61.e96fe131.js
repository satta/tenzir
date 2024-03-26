"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8374],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95286:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>k,default:()=>O,frontMatter:()=>f,metadata:()=>y,toc:()=>v});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))c.call(t,n)&&p(e,n,t[n]);return e},d=(e,t)=>a(e,i(t)),m=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const f={sidebar_custom_props:{connector:{loader:!0,saver:!0}}},k="s3",y={unversionedId:"connectors/s3",id:"version-Tenzir v4.11/connectors/s3",title:"s3",description:"Loads from and saves to an Amazon S3 object.",source:"@site/versioned_docs/version-Tenzir v4.11/connectors/s3.md",sourceDirName:"connectors",slug:"/connectors/s3",permalink:"/connectors/s3",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/versioned_docs/version-Tenzir v4.11/connectors/s3.md",tags:[],version:"Tenzir v4.11",frontMatter:{sidebar_custom_props:{connector:{loader:!0,saver:!0}}},sidebar:"docsSidebar",previous:{title:"nic",permalink:"/connectors/nic"},next:{title:"sqs",permalink:"/connectors/sqs"}},b={},v=[{value:"Synopsis",id:"synopsis",level:2},{value:"Description",id:"description",level:2},{value:"<code>&lt;uri&gt;</code> (Loader, Saver)",id:"uri-loader-saver",level:3},{value:"<code>--anonymous</code> (Loader, Saver)",id:"--anonymous-loader-saver",level:3},{value:"Examples",id:"examples",level:2}],h={toc:v},g="wrapper";function O(e){var t=e,{components:n}=t,o=m(t,["components"]);return(0,r.kt)(g,d(u(u({},h),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"s3"}),"s3"),(0,r.kt)("p",null,"Loads from and saves to an Amazon S3 object."),(0,r.kt)("h2",u({},{id:"synopsis"}),"Synopsis"),(0,r.kt)("p",null,"Loader:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"s3 [--anonymous] <uri>\n")),(0,r.kt)("p",null,"Saver:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"s3 [--anonymous] <uri>\n")),(0,r.kt)("h2",u({},{id:"description"}),"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"s3")," loader connects to an S3 bucket to acquire raw bytes from an S3\nobject. The ",(0,r.kt)("inlineCode",{parentName:"p"},"s3")," saver writes bytes to an S3 object in an S3 bucket."),(0,r.kt)("p",null,"The connector tries to retrieve the appropriate credentials using AWS's\n",(0,r.kt)("a",u({parentName:"p"},{href:"https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html"}),"default credentials provider\nchain"),"."),(0,r.kt)("admonition",u({},{type:"info"}),(0,r.kt)("p",{parentName:"admonition"},"Make sure to configure AWS credentials for the same user account that runs\n",(0,r.kt)("inlineCode",{parentName:"p"},"tenzir")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"tenzir-node"),". The AWS CLI creates configuration files for the\ncurrent user under ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.aws"),", which can only be read by the same user account."),(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"tenzir-node")," systemd unit by default creates a ",(0,r.kt)("inlineCode",{parentName:"p"},"tenzir")," user and runs as\nthat user, meaning that the AWS credentials must also be configured for that\nuser. The directory ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.aws")," must be readable for the ",(0,r.kt)("inlineCode",{parentName:"p"},"tenzir")," user.")),(0,r.kt)("p",null,"If a config file ",(0,r.kt)("inlineCode",{parentName:"p"},"<prefix>/etc/tenzir/plugin/s3.yaml")," or\n",(0,r.kt)("inlineCode",{parentName:"p"},"~/.config/tenzir/plugin/s3.yaml")," exists, it is always preferred over the\ndefault AWS credentials. The configuration file must have the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),"access-key: your-access-key\nsecret-key: your-secret-key\nsession-token: your-session-token (optional)\n")),(0,r.kt)("h3",u({},{id:"uri-loader-saver"}),(0,r.kt)("inlineCode",{parentName:"h3"},"<uri>")," (Loader, Saver)"),(0,r.kt)("p",null,"The path to the S3 object."),(0,r.kt)("p",null,"The syntax is\n",(0,r.kt)("inlineCode",{parentName:"p"},"s3://[<access-key>:secret-key>@]<bucket-name>/<full-path-to-object>(?<options>)"),"."),(0,r.kt)("p",null,"Options can be appended to the path as query parameters, as per\n",(0,r.kt)("a",u({parentName:"p"},{href:"https://arrow.apache.org/docs/r/articles/fs.html#connecting-directly-with-a-uri"}),"Arrow"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For S3, the options that can be included in the URI as query parameters are\n",(0,r.kt)("inlineCode",{parentName:"p"},"region"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"scheme"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoint_override"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"allow_bucket_creation"),", and\n",(0,r.kt)("inlineCode",{parentName:"p"},"allow_bucket_deletion"),".")),(0,r.kt)("h3",u({},{id:"--anonymous-loader-saver"}),(0,r.kt)("inlineCode",{parentName:"h3"},"--anonymous")," (Loader, Saver)"),(0,r.kt)("p",null,"Ignore any predefined credentials and try to load/save with anonymous\ncredentials."),(0,r.kt)("h2",u({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Read CSV from an object ",(0,r.kt)("inlineCode",{parentName:"p"},"obj.csv")," in the bucket ",(0,r.kt)("inlineCode",{parentName:"p"},"examplebucket"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"from s3 s3://examplebucket/obj.csv read csv\n")),(0,r.kt)("p",null,"Read JSON from an object ",(0,r.kt)("inlineCode",{parentName:"p"},"test.json")," in the bucket ",(0,r.kt)("inlineCode",{parentName:"p"},"examplebucket"),", but using a\ndifferent, S3-compatible endpoint:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{}),"from s3 s3://examplebucket/test.json?endpoint_override=s3.us-west.mycloudservice.com\n")))}O.isMDXComponent=!0}}]);