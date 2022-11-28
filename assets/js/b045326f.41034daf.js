"use strict";(self.webpackChunkheynky=self.webpackChunkheynky||[]).push([[851],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>p});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(n),p=r,h=m["".concat(i,".").concat(p)]||m[p]||d[p]||o;return n?a.createElement(h,l(l({ref:t},s),{},{components:n})):a.createElement(h,l({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(4334);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(7462),r=n(7294),o=n(4334),l=n(2389),c=n(7392),i=n(7094),u=n(2466);const s="tabList__CuJ",d="tabItem_LNqP";function m(e){var t;const{lazy:n,block:l,defaultValue:m,values:p,groupId:h,className:g}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=p??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,c.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:w}=(0,i.U)(),[N,C]=(0,r.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=h){const e=b[h];null!=e&&e!==N&&k.some((t=>t.value===e))&&C(e)}const O=e=>{const t=e.currentTarget,n=T.indexOf(t),a=k[n].value;a!==N&&(E(t),C(a),null!=h&&w(h,String(a)))},x=e=>{var t;let n=null;switch(e.key){case"Enter":O(e);break;case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},g)},k.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>T.push(e),onKeyDown:x,onClick:O},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function p(e){const t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},1007:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(7294),r=n(6010);const o="browserWindow_my1Q",l="browserWindowHeader_jXSR",c="buttons_uHc7",i="browserWindowAddressBar_Pd8y",u="dot_giz1",s="browserWindowMenuIcon_Vhuh",d="bar_rrRL",m="browserWindowBody_Idgs";function p(e){let{children:t,minHeight:n,url:p="http://localhost:3000"}=e;return a.createElement("div",{className:o,style:{minHeight:n}},a.createElement("div",{className:l},a.createElement("div",{className:c},a.createElement("span",{className:u,style:{background:"#f25f58"}}),a.createElement("span",{className:u,style:{background:"#fbbe3c"}}),a.createElement("span",{className:u,style:{background:"#58cb42"}})),a.createElement("div",{className:(0,r.Z)(i,"text--truncate")},p),a.createElement("div",{className:s},a.createElement("div",null,a.createElement("span",{className:d}),a.createElement("span",{className:d}),a.createElement("span",{className:d})))),a.createElement("div",{className:m},t))}},5695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),o=n(5488),l=n(5162),c=n(1007);const i={sidebar_label:"Contract Documentation"},u="Claridoc - Contract Documentation",s={unversionedId:"documentation",id:"documentation",title:"Claridoc - Contract Documentation",description:'Clarigen\'s contract documentation generator is still "experimental", and does not have feature depth of mainstream docblock parsers.',source:"@site/docs/documentation.mdx",sourceDirName:".",slug:"/documentation",permalink:"/docs/documentation",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Contract Documentation"},sidebar:"clarigen",previous:{title:"CLI",permalink:"/docs/cli"}},d={},m=[{value:"Getting started",id:"getting-started",level:2},{value:"Documentation output",id:"documentation-output",level:2},{value:"How to document your contracts",id:"how-to-document-your-contracts",level:2},{value:"Functions",id:"functions",level:4},{value:"get-counter",id:"get-counter",level:5},{value:"increment",id:"increment",level:5},{value:"High-level contract description",id:"high-level-contract-description",level:3},{value:"Documenting Functions",id:"documenting-functions",level:3},{value:"Tips for documenting contracts",id:"tips-for-documenting-contracts",level:3}],p={toc:m};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"claridoc---contract-documentation"},"Claridoc - Contract Documentation"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'Clarigen\'s contract documentation generator is still "experimental", and does not have feature depth of mainstream docblock parsers.'),(0,r.kt)("p",{parentName:"admonition"},"Clarity doesn't have a formalized docblock standard. This package utilizes a standard proposed in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stacksgov/sips/pull/32"},"SIPS#32"),", along with implicit documentation standards used by existing Stacks contracts.")),(0,r.kt)("p",null,"Clarigen can automatically generate contract documentation for you. By default, it includes type definitions for everything in your contract. If your contract includes comments and tags that further describe your contract, that will be included alongside the auto-generated type documentation."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"tl;dr:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Terminal"',title:'"Terminal"'},"clarigen docs\n")),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("p",null,"First, you'll need to ",(0,r.kt)("a",{parentName:"p",href:"./configuration#docs"},"configure your ",(0,r.kt)("inlineCode",{parentName:"a"},"docs")," output"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Clarigen.toml"',title:'"Clarigen.toml"'},'[docs]\n# docs will be generated at `./docs/$file.md`\noutput = "docs"\n')),(0,r.kt)("p",null,"Once configured, just run ",(0,r.kt)("inlineCode",{parentName:"p"},"clarigen docs"),", and Clarigen will generate documentation files for you."),(0,r.kt)("h2",{id:"documentation-output"},"Documentation output"),(0,r.kt)("p",null,"Claridoc will generate a markdown file for each of your contracts under your configured ",(0,r.kt)("inlineCode",{parentName:"p"},"docs.output")," folder. If your contract name is ",(0,r.kt)("inlineCode",{parentName:"p"},"counter.clar"),", the file will be ",(0,r.kt)("inlineCode",{parentName:"p"},"counter.md"),"."),(0,r.kt)("p",null,"You'll also get a ",(0,r.kt)("inlineCode",{parentName:"p"},"README.md")," file in your docs folder, which is a table of contents with links to each of your contracts."),(0,r.kt)("h2",{id:"how-to-document-your-contracts"},"How to document your contracts"),(0,r.kt)("p",null,"Claridoc assumes a certain format for how you use comments to document your contracts."),(0,r.kt)("p",null,"Here's an example:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"contract",label:"Contract",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clarity"},';; The counter contract maintains a single global counter\n;; variable. Users can change the counter by calling\n;; `increment` and `decrement`.\n\n;; The variable used to hold the global counter.\n(define-data-var counter uint u1)\n\n;; Get the current counter\n(define-read-only (get-counter)\n  (var-get counter)\n)\n\n;; Increment the counter.\n;;\n;; @returns the new value of the counter\n;;\n;; @param step; The interval to increase the counter by\n(define-public (increment (step uint))\n  (let (\n    (new-val (+ step (var-get counter)))\n  )\n  ;; #[allow(unchecked_data)]\n  (var-set counter new-val)\n  (print { object: "counter", action: "incremented", value: new-val })\n  (ok new-val))\n)\n\n'))),(0,r.kt)(l.Z,{value:"documentation",label:"Documentation",mdxType:"TabItem"},(0,r.kt)("p",null,"(partially omitted for brevity)"),(0,r.kt)(c.Z,{url:"docs/counter.md",mdxType:"BrowserWindow"},(0,r.kt)("p",null,"The counter contract maintains a single global counter variable. Users can\nchange the counter by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"increment")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"decrement"),"."),(0,r.kt)("h4",{id:"functions"},"Functions"),(0,r.kt)("h5",{id:"get-counter"},"get-counter"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"(define-read-only (get-counter () uint)")),(0,r.kt)("p",null,"Get the current counter"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Source code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clarity"},"(define-read-only (get-counter)\n  (var-get counter)\n)\n"))),(0,r.kt)("h5",{id:"increment"},"increment"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"(define-public (increment ((step uint)) (response uint none))")),(0,r.kt)("p",null,"Increment the counter."),(0,r.kt)("p",null,"@returns the new value of the counter"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Source code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clarity"},'(define-public (increment (step uint))\n  (let (\n    (new-val (+ step (var-get counter)))\n  )\n  ;; #[allow(unchecked_data)]\n  (var-set counter new-val)\n  (print { object: "counter", action: "incremented", value: new-val })\n  (ok new-val))\n)\n'))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"step"),(0,r.kt)("td",{parentName:"tr",align:null},"uint"),(0,r.kt)("td",{parentName:"tr",align:null},"The interval to increase the counter by"))))))),(0,r.kt)("h3",{id:"high-level-contract-description"},"High-level contract description"),(0,r.kt)("p",null,"Adding comments to the top of your contract allow you to provide a description of the contract. Use this area to describe the overall purpose of the contract."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clarity",metastring:'title="counter.clar" showLineNumbers',title:'"counter.clar"',showLineNumbers:!0},";; The counter contract maintains a single global counter\n;; variable. Users can change the counter by calling\n;; `increment` and `decrement`.\n")),(0,r.kt)("h3",{id:"documenting-functions"},"Documenting Functions"),(0,r.kt)("p",null,'Add comments right above a function to document that function. Any un-tagged comments will be used to show a "description" of the function.'),(0,r.kt)("p",null,"Start a line with ",(0,r.kt)("inlineCode",{parentName:"p"},"@param")," to document a parameter. The syntax for documenting params is:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"@param [param-name]; param description")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clarity"},';; Increment the counter.\n;;\n;; @returns the new value of the counter\n;;\n;; @param step; The interval to increase the counter by\n(define-public (increment (step uint))\n  (let (\n    (new-val (+ step (var-get counter)))\n  )\n  ;; #[allow(unchecked_data)]\n  (var-set counter new-val)\n  (print { object: "counter", action: "incremented", value: new-val })\n  (ok new-val))\n)\n')),(0,r.kt)("h3",{id:"tips-for-documenting-contracts"},"Tips for documenting contracts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Use "vanilla" markdown inside of your comments. Claridoc will simply output the "raw" content, which will render as expected in markdown.'),(0,r.kt)("li",{parentName:"ul"},"Don't manually add type hints in your documentation. Claridoc will automatically extract types for everything in your contract."),(0,r.kt)("li",{parentName:"ul"},"At the moment, Claridoc has very limited support for tags that you might expect from other documentation generators. Currently, ",(0,r.kt)("inlineCode",{parentName:"li"},"@param")," is the only tag that is used to generate custom documentation.")),(0,r.kt)("p",null,"Use markdown links to link to other methods and contracts. To link to a function within a contract, use an anchor link."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clarity"},";; For more info, see [`.staking#stake`](`./staking.md#stake`)\n")))}h.isMDXComponent=!0},6010:(e,t,n)=>{function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:()=>r})}}]);