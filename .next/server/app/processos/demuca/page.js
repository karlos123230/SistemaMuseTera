(()=>{var e={};e.id=483,e.ids=[483],e.modules={47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},13239:(e,s,r)=>{"use strict";r.r(s),r.d(s,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>x,pages:()=>d,routeModule:()=>p,tree:()=>c});var t=r(50482),a=r(69108),n=r(62563),i=r.n(n),o=r(68300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);r.d(s,l);let c=["",{children:["processos",{children:["demuca",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,4500)),"c:\\Users\\karlos\\Desktop\\tera\\src\\app\\processos\\demuca\\page.tsx"]}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,3855)),"c:\\Users\\karlos\\Desktop\\tera\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,69361,23)),"next/dist/client/components/not-found-error"]}],d=["c:\\Users\\karlos\\Desktop\\tera\\src\\app\\processos\\demuca\\page.tsx"],x="/processos/demuca/page",m={require:r,loadChunk:()=>Promise.resolve()},p=new t.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/processos/demuca/page",pathname:"/processos/demuca",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},17333:(e,s,r)=>{Promise.resolve().then(r.t.bind(r,2583,23)),Promise.resolve().then(r.t.bind(r,26840,23)),Promise.resolve().then(r.t.bind(r,38771,23)),Promise.resolve().then(r.t.bind(r,13225,23)),Promise.resolve().then(r.t.bind(r,9295,23)),Promise.resolve().then(r.t.bind(r,43982,23))},62724:(e,s,r)=>{Promise.resolve().then(r.bind(r,22041)),Promise.resolve().then(r.bind(r,37212)),Promise.resolve().then(r.bind(r,55831))},32906:(e,s,r)=>{Promise.resolve().then(r.bind(r,78732))},78732:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>a});var t=r(95344);function a(){return t.jsx("div",{className:"max-w-4xl mx-auto py-6 px-4",children:t.jsx("h1",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Avalia\xe7\xe3o DEMUCA"})})}},22041:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>o});var t=r(95344),a=r(62701),n=r(36501),i=r(47674);function o(){let{data:e}=(0,i.useSession)(),s=async()=>{await (0,i.signOut)({callbackUrl:"/"})};return t.jsx("header",{className:"bg-white border-b border-gray-200 px-4 py-3",children:(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsxs)("div",{children:[t.jsx("h2",{className:"text-xl font-semibold text-gray-800",children:"MuseTera"}),(0,t.jsxs)("p",{className:"text-sm text-gray-500",children:["Bem-vindo, ",e?.user?.name||"Usu\xe1rio","!"]})]}),(0,t.jsxs)("div",{className:"flex items-center gap-4",children:[t.jsx("button",{className:"p-2 hover:bg-gray-100 rounded-full",children:t.jsx(a.Z,{className:"h-6 w-6 text-gray-600"})}),(0,t.jsxs)("div",{className:"flex items-center gap-3",children:[t.jsx("div",{className:"h-8 w-8 rounded-full bg-indigo-600 text-white flex items-center justify-center",children:e?.user?.name?.charAt(0)||"U"}),(0,t.jsxs)("div",{className:"text-sm",children:[t.jsx("p",{className:"font-medium text-gray-700",children:e?.user?.name||"Usu\xe1rio"}),t.jsx("p",{className:"text-gray-500",children:e?.user?.email})]}),t.jsx("div",{className:"h-8 border-l border-gray-200 mx-2"}),(0,t.jsxs)("button",{onClick:s,className:"flex items-center gap-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-red-50 hover:text-red-600 transition-all duration-200 ease-in-out group",title:"Sair do sistema",children:[t.jsx("span",{className:"text-sm font-medium",children:"Sair"}),t.jsx(n.Z,{className:"h-5 w-5 group-hover:translate-x-1 transition-transform duration-200"})]})]})]})]})})}},55831:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>u});var t=r(95344),a=r(20783),n=r.n(a),i=r(22254),o=r(81737),l=r(50749),c=r(16215),d=r(91184),x=r(43823),m=r(64104);let p=[{title:"Principal",items:[{name:"Dashboard",href:"/dashboard",icon:o.Z},{name:"Agenda",href:"/agenda",icon:l.Z}]},{title:"Terapia",items:[{name:"Pacientes",href:"/pacientes",icon:c.Z},{name:"Processos",href:"/processos",icon:d.Z}]},{title:"Recursos",items:[{name:"Biblioteca",href:"/biblioteca",icon:x.Z},{name:"Configura\xe7\xf5es",href:"/configuracoes",icon:m.Z}]}];function u(){let e=(0,i.usePathname)(),s=s=>e===s;return(0,t.jsxs)("aside",{className:"w-64 bg-indigo-800 text-white h-screen flex flex-col",children:[t.jsx("div",{className:"p-6",children:t.jsx("div",{className:"flex items-center px-4",children:t.jsx("span",{className:"text-xl font-semibold text-white",children:"MuseTera"})})}),t.jsx("nav",{className:"flex-1 px-4 space-y-8",children:p.map(e=>(0,t.jsxs)("div",{children:[t.jsx("h2",{className:"text-xs uppercase tracking-wider text-indigo-200 font-semibold mb-2",children:e.title}),t.jsx("ul",{className:"space-y-1",children:e.items.map(e=>t.jsx("li",{children:(0,t.jsxs)(n(),{href:e.href,className:`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${s(e.href)?"bg-indigo-700 text-white":"text-indigo-100 hover:bg-indigo-700"}`,children:[t.jsx(e.icon,{className:"h-5 w-5"}),t.jsx("span",{children:e.name})]})},e.name))})]},e.title))})]})}},37212:(e,s,r)=>{"use strict";r.r(s),r.d(s,{Providers:()=>n});var t=r(95344),a=r(47674);function n({children:e}){return t.jsx(a.SessionProvider,{children:e})}},3855:(e,s,r)=>{"use strict";r.r(s),r.d(s,{default:()=>j,metadata:()=>b});var t=r(25036),a=r(53640),n=r.n(a);r(5023);var i=r(86843);let o=(0,i.createProxy)(String.raw`c:\Users\karlos\Desktop\tera\src\components\Sidebar.tsx`),{__esModule:l,$$typeof:c}=o,d=o.default,x=(0,i.createProxy)(String.raw`c:\Users\karlos\Desktop\tera\src\components\Header.tsx`),{__esModule:m,$$typeof:p}=x,u=x.default,h=(0,i.createProxy)(String.raw`c:\Users\karlos\Desktop\tera\src\components\providers.tsx`),{__esModule:g,$$typeof:f}=h;h.default;let v=(0,i.createProxy)(String.raw`c:\Users\karlos\Desktop\tera\src\components\providers.tsx#Providers`),b={title:"MuseTera",description:"Sistema de Gest\xe3o para Musicoterapeutas"};function j({children:e}){return t.jsx("html",{lang:"pt-BR",children:t.jsx("body",{className:n().className,children:t.jsx(v,{children:(0,t.jsxs)("div",{className:"flex h-screen",children:[t.jsx(d,{}),(0,t.jsxs)("div",{className:"flex-1 flex flex-col",children:[t.jsx(u,{}),t.jsx("main",{className:"flex-1 p-6 bg-gray-50",children:e})]})]})})})})}},4500:(e,s,r)=>{"use strict";r.r(s),r.d(s,{$$typeof:()=>n,__esModule:()=>a,default:()=>i});let t=(0,r(86843).createProxy)(String.raw`c:\Users\karlos\Desktop\tera\src\app\processos\demuca\page.tsx`),{__esModule:a,$$typeof:n}=t,i=t.default},5023:()=>{}};var s=require("../../../webpack-runtime.js");s.C(e);var r=e=>s(s.s=e),t=s.X(0,[638,329],()=>r(13239));module.exports=t})();