"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[70833],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>T,contentTitle:()=>f,default:()=>k,frontMatter:()=>h,metadata:()=>g,toc:()=>b});var o=n(3905),r=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&c(e,n,t[n]);return e},m=(e,t)=>a(e,i(t)),d=(e,t)=>{var n={};for(var o in e)p.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&l)for(var o of l(e))t.indexOf(o)<0&&s.call(e,o)&&(n[o]=e[o]);return n};const h={sidebar_position:5},f="Deploy the platform",g={unversionedId:"setup-guides/deploy-the-platform",id:"setup-guides/deploy-the-platform",title:"Deploy the platform",description:"The Tenzir Platform manages nodes and the pipelines running on them, offering",source:"@site/docs/setup-guides/deploy-the-platform.md",sourceDirName:"setup-guides",slug:"/setup-guides/deploy-the-platform",permalink:"/next/setup-guides/deploy-the-platform",draft:!1,editUrl:"https://github.com/tenzir/tenzir/tree/main/web/docs/setup-guides/deploy-the-platform.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Update a node",permalink:"/next/setup-guides/update-a-node"},next:{title:"Tune performance",permalink:"/next/setup-guides/tune-performance/"}},T={},b=[{value:"Configuration",id:"configuration",level:2},{value:"HTTP Reverse Proxy",id:"http-reverse-proxy",level:3},{value:"Identity Provider (IdP)",id:"identity-provider-idp",level:3},{value:"PostgreSQL Database",id:"postgresql-database",level:3},{value:"Docker",id:"docker",level:3},{value:"Run the Platform",id:"run-the-platform",level:2},{value:"Manage the Platform",id:"manage-the-platform",level:2}],_={toc:b},O="wrapper";function k(e){var t=e,{components:n}=t,r=d(t,["components"]);return(0,o.kt)(O,m(u(u({},_),r),{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",u({},{id:"deploy-the-platform"}),"Deploy the platform"),(0,o.kt)("p",null,"The ",(0,o.kt)("em",{parentName:"p"},"Tenzir Platform")," manages nodes and the pipelines running on them, offering\na visual interface to explore data, manage nodes, and pipelines, and create\ndashboards."),(0,o.kt)("admonition",u({},{title:"Sovereign Edition Required",type:"warning"}),(0,o.kt)("p",{parentName:"admonition"},"Tenzir offers a free and cloud-hosted version of the Tenzir Platform on\n",(0,o.kt)("a",u({parentName:"p"},{href:"https://app.tenzir.com"}),"app.tenzir.com")," for all users of the Community Edition.\nThis guide explains how to run the platform on your own premises as a user of\nthe ",(0,o.kt)("a",u({parentName:"p"},{href:"https://tenzir.com/pricing"}),"Sovereign Edition"),".")),(0,o.kt)("h2",u({},{id:"configuration"}),"Configuration"),(0,o.kt)("p",null,"The platform requires some external infrastructure that must be installed and\nconfigured separately."),(0,o.kt)("h3",u({},{id:"http-reverse-proxy"}),"HTTP Reverse Proxy"),(0,o.kt)("p",null,"The platform uses four URLs that require a HTTP reverse proxy to be set\nup. These URLs may be mapped to the same or different hostnames."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The URL that the user's browser connects to, e.g.,\n",(0,o.kt)("inlineCode",{parentName:"li"},"app.platform.example.org"),". This serves a web frontend where the user can\ninteract with the platform."),(0,o.kt)("li",{parentName:"ol"},"The URL that the nodes connect to, e.g., ",(0,o.kt)("inlineCode",{parentName:"li"},"nodes.platform.example.org"),". Tenzir\nNodes connect to this URL to establish long-running WebSocket connections."),(0,o.kt)("li",{parentName:"ol"},"The URL that the platform's S3-compatible blob storage is accessible at,\ne.g., ",(0,o.kt)("inlineCode",{parentName:"li"},"downloads.platform.example.org"),". When using the 'Download' button\nthe platform generates download links under this URL."),(0,o.kt)("li",{parentName:"ol"},"The URL that the Tenzir Platform CLI connects to, e.g.,\n",(0,o.kt)("inlineCode",{parentName:"li"},"api.platform.example.org"),".")),(0,o.kt)("p",null,"You must provide the following environment variables for the platform:"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# The domain under which the platform frontend is reachable. Must include the\n# `http://` or `https://` scheme.\nTENZIR_PLATFORM_DOMAIN=https://app.platform.example.org\n\n# The endpoint to which Tenzir nodes should connect. Must include the `ws://`\n# or `wss://` scheme.\nTENZIR_PLATFORM_CONTROL_ENDPOINT=wss://nodes.platform.example.org\n\n# The URL at which the platform's S3-compatible blob storage is accessible at.\nTENZIR_PLATFORM_BLOBS_ENDPOINT=https://downloads.platform.example.org\n\n# The URL at which the platform's S3-compatible blob storage is accessible at.\nTENZIR_PLATFORM_API_ENDPOINT=https://api.platform.example.org\n")),(0,o.kt)("h3",u({},{id:"identity-provider-idp"}),"Identity Provider (IdP)"),(0,o.kt)("p",null,"The platform requires an external Identity Provider (IdP) supporting the OIDC\nprotocol. The IdP must provide valid RS256 ID tokens. The platform must be able\nto access the IdP's issuer URL."),(0,o.kt)("p",null,"You must provide the following environment variables for the OIDC provider\nconfiguration used for logging into the platform:"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"TENZIR_PLATFORM_OIDC_PROVIDER_NAME=YOUR_OIDC_PROVIDER_NAME\nTENZIR_PLATFORM_OIDC_PROVIDER_CLIENT_ID=YOUR_OIDC_PROVIDER_CLIENT_ID\nTENZIR_PLATFORM_OIDC_PROVIDER_CLIENT_SECRET=YOUR_OIDC_PROVIDER_CLIENT_SECRET\nTENZIR_PLATFORM_OIDC_PROVIDER_ISSUER_URL=YOUR_OIDC_PROVIDER_ISSUER_URL\n")),(0,o.kt)("p",null,"You must provide the following environment variable containing a JSON object\ncontaining the OIDC issuer and audiences that should be accepted by the\nplatform."),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'TENZIR_PLATFORM_OIDC_TRUSTED_AUDIENCES=\'{"keycloak.example.org": ["tenzir_platform"]}\'\n')),(0,o.kt)("p",null,"You must provide the following environment variable containing a JSON list of\nrules granting access to the admin API. The example rule grants admin access to\nall users with a valid and signed ",(0,o.kt)("inlineCode",{parentName:"p"},"id_token")," containing the fields\n",(0,o.kt)("inlineCode",{parentName:"p"},'{"connection": "google-oauth2", "tenzir/org": "TenzirPlatformAdmins"}'),"."),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'TENZIR_PLATFORM_OIDC_ADMIN_RULES=\'[{"connection": "google-oauth2", "organization_claim": "tenzir/org", "organization": "TenzirPlatformAdmins", "auth_fn": "auth_organization"}]\'\n')),(0,o.kt)("h3",u({},{id:"postgresql-database"}),"PostgreSQL Database"),(0,o.kt)("p",null,"A PostgreSQL database for storing the state of the platform."),(0,o.kt)("p",null,"You must provide the following environment variables:"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"TENZIR_PLATFORM_POSTGRES_USER=YOUR_POSTGRES_USER\nTENZIR_PLATFORM_POSTGRES_PASSWORD=YOUR_POSTGRES_PASSWORD\nTENZIR_PLATFORM_POSTGRES_DB=YOUR_POSTGRES_DB\nTENZIR_PLATFORM_POSTGRES_HOSTNAME=YOUR_POSTGRES_HOSTNAME\n")),(0,o.kt)("h3",u({},{id:"docker"}),"Docker"),(0,o.kt)("p",null,"The Tenzir Platform is shipped as a Docker Compose file. To run it, Docker and\nDocker Compose must be installed."),(0,o.kt)("p",null,"As part of your distribution, you were provided an authentication token to be\nable to fetch the Docker images. On the machine on which you want to run the\nDocker Compose stack, log in with the token like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"echo YOUR_DOCKER_TOKEN | docker login ghcr.io -u tenzir-distribution --password-stdin\n")),(0,o.kt)("h2",u({},{id:"run-the-platform"}),"Run the Platform"),(0,o.kt)("p",null,"Once you went through all the prerequisites, and have filled in the required\nvariables in your ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file, you should be in a directory with the following\nfiles:"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-text",metastring:'{0} title="\u276f tree"',"{0}":!0,title:'"\u276f','tree"':!0}),".\n\u251c\u2500\u2500 .env\n\u251c\u2500\u2500 config\n\u2502\xa0\xa0 \u2514\u2500\u2500 seaweed.tenzir-entrypoint.sh\n\u2514\u2500\u2500 docker-compose.yaml\n")),(0,o.kt)("p",null,"From this directory, run ",(0,o.kt)("inlineCode",{parentName:"p"},"docker compose up")," to start the platform in the\nforeground, or ",(0,o.kt)("inlineCode",{parentName:"p"},"docker compose up --detach")," to run it in the background:"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-text",metastring:'{0} title="\u276f docker compose up"',"{0}":!0,title:'"\u276f',docker:!0,compose:!0,'up"':!0}),'[+] Running 5/5\n \u2714 Container compose-app-1                Running\n \u2714 Container compose-websocket-gateway-1  Running\n \u2714 Container compose-seaweed-1            Running\n \u2714 Container compose-platform-1           Running\nAttaching to app-1, platform-1, postgres-1, seaweed-1, websocket-gateway-1\nplatform-1           | {"event": "connecting to postgres", "level": "debug", "ts": "2024-04-10T10:13:20.205616Z"}\nplatform-1           | {"event": "connected to postgres", "level": "debug", "ts": "2024-04-10T10:13:20.210667Z"}\nplatform-1           | {"event": "created table", "level": "info", "ts": "2024-04-10T10:13:20.210883Z"}\nplatform-1           | {"event": "connecting to postgres", "level": "debug", "ts": "2024-04-10T10:13:20.217700Z"}\nplatform-1           | {"event": "connected to postgres", "level": "debug", "ts": "2024-04-10T10:13:20.221194Z"}\nplatform-1           | {"event": "creating a table", "level": "info", "ts": "2024-04-10T10:13:20.221248Z"}\nplatform-1           | {"event": "connecting to postgres", "level": "debug", "ts": "2024-04-10T10:13:20.221464Z"}\nplatform-1           | {"event": "connected to postgres", "level": "debug", "ts": "2024-04-10T10:13:20.224226Z"}\napp-1                | Listening on 0.0.0.0:3000\nwebsocket-gateway-1  | {"event": "connecting to postgres", "level": "debug", "ts": "2024-04-10T10:15:37.033632Z"}\nwebsocket-gateway-1  | {"event": "connected to postgres", "level": "debug", "ts": "2024-04-10T10:15:37.038510Z"}\nwebsocket-gateway-1  | {"event": "created table", "level": "info", "ts": "2024-04-10T10:15:37.042555Z"}\nwebsocket-gateway-1  | {"host": "0.0.0.0", "port": 5000, "common_env": {"base_path": "", "tenzir_proxy_timeout": 60.0}, "local_env": {"store": {"postgres_uri": "postgresql://postgres:postgres@postgres:5432/platform"}, "tenant_manager_app_api_key": "d3d185cc4d9a1bde0e07e24c2eb0bfe9d2726acb3a386f8882113727ac6e90cf", "tenant_manager_tenant_token_encryption_key": "CBOXE4x37RKRLHyUNKeAsfg8Tbejm2N251aKnBXakpU="}, "event": "HTTP server running", "level": "info", "ts": "2024-04-10T10:15:37.045244Z"}\n...\n')),(0,o.kt)("p",null,"It takes up to a minute for all services to be fully available."),(0,o.kt)("h2",u({},{id:"manage-the-platform"}),"Manage the Platform"),(0,o.kt)("p",null,"Install the ",(0,o.kt)("a",u({parentName:"p"},{href:"https://pypi.org/project/tenzir-platform/"}),(0,o.kt)("inlineCode",{parentName:"a"},"tenzir-platform")),"\npackage from PyPI."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"tenzir-platform")," command-line utility makes it simple to manage users,\norganizations, and their workspaces and nodes."),(0,o.kt)("p",null,"You must provide the following environment variables for interacting with the\nplatform through the CLI:"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"TENZIR_PLATFORM_CLI_API_ENDPOINT=api.platform.example.org:5000\nTENZIR_PLATFORM_CLI_OIDC_ISSUER_URL=YOUR_OIDC_ISSUER_URL\nTENZIR_PLATFORM_CLI_OIDC_CLIENT_ID=YOUR_OIDC_CLIENT_ID\nTENZIR_PLATFORM_CLI_OIDC_AUDIENCE=YOUR_OIDC_AUDIENCE\n")),(0,o.kt)("p",null,"Read our documentation on the ",(0,o.kt)("a",u({parentName:"p"},{href:"/next/platform-cli"}),"Tenzir Platform CLI")," to learn\nmore about managing your platform deployment."))}k.isMDXComponent=!0}}]);