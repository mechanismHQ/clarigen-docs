"use strict";(self.webpackChunkheynky=self.webpackChunkheynky||[]).push([[468],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=l,g=u["".concat(c,".").concat(m)]||u[m]||s[m]||a;return t?r.createElement(g,i(i({ref:n},d),{},{components:t})):r.createElement(g,i({ref:n},d))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},7905:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=t(7462),l=(t(7294),t(3905));const a={sidebar_label:"CLI"},i="Clarigen CLI",o={unversionedId:"cli",id:"cli",title:"Clarigen CLI",description:"The Clarigen CLI is the interface you'll use to generate Clarigen types. The CLI is a Deno project - so you'll need Deno installed in order to install it.",source:"@site/docs/cli.md",sourceDirName:".",slug:"/cli",permalink:"/docs/cli",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"CLI"},sidebar:"clarigen",previous:{title:"Configuration",permalink:"/docs/configuration"},next:{title:"Contract Documentation",permalink:"/docs/documentation"}},c={},p=[{value:"Commands",id:"commands",level:2},{value:"<code>clarigen</code>",id:"command-clarigen",level:3},{value:"Watch mode",id:"watch-mode",level:4},{value:"<code>clarigen docs</code>",id:"command-docs",level:3},{value:"<code>clarigen init</code>",id:"command-init",level:3},{value:"<code>clarigen upgrade</code>",id:"command-upgrade",level:3},{value:"Log levels",id:"log-levels",level:2}],d={toc:p};function s(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"clarigen-cli"},"Clarigen CLI"),(0,l.kt)("p",null,"The Clarigen CLI is the interface you'll use to generate Clarigen types. The CLI is a Deno project - so you'll need Deno installed in order to install it."),(0,l.kt)("p",null,"To install:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"deno install -qAfn clarigen https://deno.land/x/clarigen/cli.ts\n")),(0,l.kt)("p",null,"After being installed, you can run ",(0,l.kt)("inlineCode",{parentName:"p"},"clarigen")," in your terminal."),(0,l.kt)("h2",{id:"commands"},"Commands"),(0,l.kt)("h3",{id:"command-clarigen"},(0,l.kt)("inlineCode",{parentName:"h3"},"clarigen")),(0,l.kt)("p",null,"Running ",(0,l.kt)("inlineCode",{parentName:"p"},"clarigen")," on its own will generate type files for you."),(0,l.kt)("h4",{id:"watch-mode"},"Watch mode"),(0,l.kt)("p",null,"Running ",(0,l.kt)("inlineCode",{parentName:"p"},"clarigen --watch")," will keep the process open and watch for specific file changes. When a file change is detected, your types will be re-generated. This is helpful for actively developing tests or an app."),(0,l.kt)("p",null,"The files watched are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Clarigen.toml")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Clarinet.toml")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"contracts/*.clar"))),(0,l.kt)("h3",{id:"command-docs"},(0,l.kt)("inlineCode",{parentName:"h3"},"clarigen docs")),(0,l.kt)("p",null,"Generate documentation from comments in your contracts. Check out the ",(0,l.kt)("a",{parentName:"p",href:"./documentation"},"documentation")," docs for more information."),(0,l.kt)("h3",{id:"command-init"},(0,l.kt)("inlineCode",{parentName:"h3"},"clarigen init")),(0,l.kt)("p",null,"Generate a ",(0,l.kt)("inlineCode",{parentName:"p"},"Clarigen.toml")," file."),(0,l.kt)("h3",{id:"command-upgrade"},(0,l.kt)("inlineCode",{parentName:"h3"},"clarigen upgrade")),(0,l.kt)("p",null,"Update your locally installed version of the ",(0,l.kt)("inlineCode",{parentName:"p"},"clarigen")," CLI."),(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"clarigen upgrade -l")," to list available versions."),(0,l.kt)("p",null,"Run ",(0,l.kt)("inlineCode",{parentName:"p"},"clarigen upgrade --version $version")," to install a specific version."),(0,l.kt)("h2",{id:"log-levels"},"Log levels"),(0,l.kt)("p",null,"To change the default logging, each command accepts either ",(0,l.kt)("inlineCode",{parentName:"p"},"--quiet")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"--verbose")," flags, which changes the default log level used."))}s.isMDXComponent=!0}}]);