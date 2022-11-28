"use strict";(self.webpackChunkheynky=self.webpackChunkheynky||[]).push([[4],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_label:"Configuration"},i="Configuration",l={unversionedId:"configuration",id:"configuration",title:"Configuration",description:"Clarigen relies on a Clarigen.toml file at the root-level of your repository. That file determines which files to generate, where to put them, and more.",source:"@site/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/docs/configuration",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Configuration"},sidebar:"clarigen",previous:{title:"Deno (Clarinet tests)",permalink:"/docs/deno"},next:{title:"CLI",permalink:"/docs/cli"}},c={},s=[{value:"<code>clarinet</code>",id:"clarinet",level:2},{value:"<code>deno</code>",id:"deno",level:2},{value:"<code>esm</code>",id:"esm",level:2},{value:"<code>esm.output</code>",id:"esmoutput",level:3},{value:"<code>esm.after</code>",id:"esmafter",level:3},{value:"<code>docs</code>",id:"docs",level:2},{value:"<code>docs.output</code>",id:"docsoutput",level:3}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"Clarigen relies on a ",(0,o.kt)("inlineCode",{parentName:"p"},"Clarigen.toml")," file at the root-level of your repository. That file determines which files to generate, where to put them, and more."),(0,o.kt)("h2",{id:"clarinet"},(0,o.kt)("inlineCode",{parentName:"h2"},"clarinet")),(0,o.kt)("p",null,"The only mandatory configuration you need to set is ",(0,o.kt)("inlineCode",{parentName:"p"},"clarinet"),", which needs to point to your ",(0,o.kt)("inlineCode",{parentName:"p"},"Clarinet.toml")," file. For most projects, your ",(0,o.kt)("inlineCode",{parentName:"p"},"Clarinet.toml")," will also be at the root of your project. If you have a Clarinet project as a sub-directory, specify where the TOML file is."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Clarigen.toml"',title:'"Clarigen.toml"'},'# for most projects:\nclarinet = "./Clarinet.toml"\n\n# or if a sub-directory\nclarinet = "clarinet/Clarinet.toml"\n')),(0,o.kt)("h2",{id:"deno"},(0,o.kt)("inlineCode",{parentName:"h2"},"deno")),(0,o.kt)("p",null,"If you're writing Clarinet tests with Deno, specify where you'd like your Clarigen types to be generated. You can specify either a filename (ending in ",(0,o.kt)("inlineCode",{parentName:"p"},".ts"),") or a directory. If you specify a directly, the generated file will be ",(0,o.kt)("inlineCode",{parentName:"p"},"$dir/index.ts"),"."),(0,o.kt)("p",null,"To disable Deno generation, comment out the ",(0,o.kt)("inlineCode",{parentName:"p"},"output")," field."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Clarigen.toml"',title:'"Clarigen.toml"'},'[deno]\noutput = "artifacts/" # will generate ./artifacts/index.ts\n\n# or specify a file:\noutput = "tests/clarigen.ts"\n\n# or disable:\n# output = "clarigen.ts"\n')),(0,o.kt)("h2",{id:"esm"},(0,o.kt)("inlineCode",{parentName:"h2"},"esm")),(0,o.kt)("p",null,'The "ESM" output is for environments that utilize NPM (or yarn, pnpm, etc) packages. This mostly refers to Node.js or web projects.'),(0,o.kt)("h3",{id:"esmoutput"},(0,o.kt)("inlineCode",{parentName:"h3"},"esm.output")),(0,o.kt)("p",null,"Just like Deno, set where you'd like the generated code. You can specify a file or a directory."),(0,o.kt)("p",null,"To disable ESM generation, disable the ",(0,o.kt)("inlineCode",{parentName:"p"},"output")," field"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Clarigen.toml"',title:'"Clarigen.toml"'},'[esm]\noutput = "common/clarigen.ts"\n\n# or disable:\n# output = "common/clarigen.ts"\n')),(0,o.kt)("h3",{id:"esmafter"},(0,o.kt)("inlineCode",{parentName:"h3"},"esm.after")),(0,o.kt)("p",null,"The code generated for ESM is not formatted, so it'll fail any linting you have. Use this field to specify a script you want ran after code is generated."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Clarigen.toml"',title:'"Clarigen.toml"'},'[esm]\noutput = "src/clarigen.ts"\n// highlight-next-line\nafter = "yarn prettier -w src/clarigen.ts"\n')),(0,o.kt)("h2",{id:"docs"},(0,o.kt)("inlineCode",{parentName:"h2"},"docs")),(0,o.kt)("p",null,"Clarigen can ",(0,o.kt)("a",{parentName:"p",href:"./documentation"},"automatically generate contract documentation")," for you."),(0,o.kt)("h3",{id:"docsoutput"},(0,o.kt)("inlineCode",{parentName:"h3"},"docs.output")),(0,o.kt)("p",null,"Specify the folder where you'd like markdown files generated. A markdown file will be generated for each of your contracts, along with a ",(0,o.kt)("inlineCode",{parentName:"p"},"README.md")," file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Clarigen.toml"',title:'"Clarigen.toml"'},'[docs]\n# docs will be generated at `./docs/$file.md`\noutput = "docs"\n')))}p.isMDXComponent=!0}}]);