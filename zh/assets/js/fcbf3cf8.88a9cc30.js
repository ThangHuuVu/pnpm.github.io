"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5639],{9613:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>v});var n=t(9496);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,l=function(e,r){if(null==e)return{};var t,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(l[t]=e[t]);return l}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=c(t),v=l,m=d["".concat(p,".").concat(v)]||d[v]||u[v]||o;return t?n.createElement(m,i(i({ref:r},s),{},{components:t})):n.createElement(m,i({ref:r},s))}));function v(e,r){var t=arguments,l=r&&r.mdxType;if("string"==typeof e||l){var o=t.length,i=new Array(o);i[0]=d;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:l,i[1]=a;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8294:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>a,contentTitle:()=>p,metadata:()=>c,toc:()=>s,default:()=>d});var n=t(2245),l=t(5903),o=(t(9496),t(9613)),i=["components"],a={id:"remove",title:"pnpm remove"},p=void 0,c={unversionedId:"cli/remove",id:"version-6.x/cli/remove",isDocsHomePage:!1,title:"pnpm remove",description:"\u522b\u540d: rm, uninstall, un",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-6.x/cli/remove.md",sourceDirName:"cli",slug:"/cli/remove",permalink:"/zh/cli/remove",editUrl:"https://crowdin.com/project/pnpm/zh-CN",tags:[],version:"6.x",frontMatter:{id:"remove",title:"pnpm remove"},sidebar:"version-6.x/docs",previous:{title:"pnpm update",permalink:"/zh/cli/update"},next:{title:"pnpm link",permalink:"/zh/cli/link"}},s=[{value:"\u914d\u7f6e\u9879",id:"\u914d\u7f6e\u9879",children:[{value:"--recursive, -r",id:"--recursive--r",children:[],level:3},{value:"--global",id:"--global",children:[],level:3},{value:"--save-dev, -D",id:"--save-dev--d",children:[],level:3},{value:"--save-optional, -O",id:"--save-optional--o",children:[],level:3},{value:"--save-prod, -P",id:"--save-prod--p",children:[],level:3},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[],level:3}],level:2}],u={toc:s};function d(e){var r=e.components,t=(0,l.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u522b\u540d: rm, uninstall, un"),(0,o.kt)("p",null,"Removes packages from ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," and from the project's ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"."),(0,o.kt)("h2",{id:"\u914d\u7f6e\u9879"},"\u914d\u7f6e\u9879"),(0,o.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,o.kt)("p",null,"\u5f53\u5728 ",(0,o.kt)("a",{parentName:"p",href:"/zh/workspaces"},"\u5de5\u4f5c\u533a")," \u4e2d\u4f7f\u7528\u6b64\u547d\u4ee4\u65f6\uff0c\u5c06\u4ece\u6bcf\u4e2a\u5de5\u4f5c\u533a\u7684\u5305\u4e2d\u79fb\u9664\u76f8\u5173\u4f9d\u8d56(\u6216 \u591a\u4e2a\u4f9d\u8d56)\u3002"),(0,o.kt)("p",null,"\u5f53\u4e0d\u5728\u5de5\u4f5c\u533a\u5185\u4f7f\u7528\u65f6\uff0c\u5c06\u5220\u9664\u76f8\u5173\u4f9d\u8d56\u9879 (\u6216\u591a\u4e2a\u4f9d\u8d56), \u4e5f\u5305\u542b\u5b50\u76ee\u5f55\u4e2d\u5bf9\u5e94\u7684\u5305 \u3002"),(0,o.kt)("h3",{id:"--global"},"--global"),(0,o.kt)("p",null,"\u4ece\u5168\u5c40\u5220\u9664\u4e00\u4e2a\u4f9d\u8d56\u5305\u3002"),(0,o.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,o.kt)("p",null,"\u4ec5\u5220\u9664\u5f00\u53d1\u73af\u5883 ",(0,o.kt)("inlineCode",{parentName:"p"},"devDependencies")," \u4e2d\u7684\u4f9d\u8d56\u9879\u3002"),(0,o.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,o.kt)("p",null,"\u4ec5\u79fb\u9664 ",(0,o.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," \u4e2d\u7684\u4f9d\u8d56\u9879\u3002"),(0,o.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,o.kt)("p",null,"\u4ec5\u4ece ",(0,o.kt)("inlineCode",{parentName:"p"},"devDependencies")," \u4e2d\u5220\u9664\u76f8\u5173\u4f9d\u8d56\u9879\u3002"),(0,o.kt)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/zh/filtering"},"\u9605\u8bfb\u66f4\u591a\u6709\u5173 filter \u7684\u5185\u5bb9\u3002")))}d.isMDXComponent=!0}}]);