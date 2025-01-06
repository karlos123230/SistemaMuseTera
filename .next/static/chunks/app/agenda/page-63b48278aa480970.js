(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7922],{73983:function(e,t,a){Promise.resolve().then(a.bind(a,3451))},24930:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}});let n=a(21024);a(2265);let l=n._(a(84795));function s(e){return{default:(null==e?void 0:e.default)||e}}function r(e,t){let a=l.default,n={loading:e=>{let{error:t,isLoading:a,pastDelay:n}=e;return null}};"function"==typeof e&&(n.loader=e),Object.assign(n,t);let r=n.loader;return a({...n,loader:()=>null!=r?r().then(s):Promise.resolve(s(()=>null))})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},16005:function(e,t,a){"use strict";function n(e){let{children:t}=e;return t}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"NoSSR",{enumerable:!0,get:function(){return n}}),a(46491)},84795:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return s}});let n=a(21024)._(a(2265)),l=a(16005),s=function(e){let t=Object.assign({loader:null,loading:null,ssr:!0},e);function a(e){let a=t.loading,s=n.default.createElement(a,{isLoading:!0,pastDelay:!0,error:null}),r=t.ssr?n.default.Fragment:l.NoSSR,i=t.lazy;return n.default.createElement(n.default.Suspense,{fallback:s},n.default.createElement(r,null,n.default.createElement(i,e)))}return t.lazy=n.default.lazy(t.loader),a.displayName="LoadableComponent",a}},3451:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var n=a(57437),l=a(2265),s=a(24930),r=a.n(s),i=a(57418),o=a(19753),d=a(34170);function c(e){let{isOpen:t,onClose:a,selectedDate:s,selectedEvent:r,onSave:i,onUpdate:c}=e,[u,m]=(0,l.useState)(null),[f,g]=(0,l.useState)({patientId:"",data:"",horario:"",duracao:50,tipo:"sessao",observacoes:""});return(0,l.useEffect)(()=>{s&&g(e=>({...e,data:s.toISOString().split("T")[0],horario:s.toTimeString().slice(0,5)}))},[s]),(0,l.useEffect)(()=>{r&&g({patientId:r.patientId,data:r.start.toISOString().split("T")[0],horario:r.start.toTimeString().slice(0,5),duracao:(r.end.getTime()-r.start.getTime())/6e4,tipo:r.tipo,observacoes:r.observacoes||""})},[r]),(0,n.jsxs)(o.V,{open:t,onClose:a,className:"relative z-50",children:[(0,n.jsx)("div",{className:"fixed inset-0 bg-black/30","aria-hidden":"true"}),(0,n.jsx)("div",{className:"fixed inset-0 flex items-center justify-center p-4",children:(0,n.jsx)(o.V.Panel,{className:"mx-auto max-w-lg w-full bg-white rounded-lg shadow-xl",children:(0,n.jsxs)("div",{className:"p-6",children:[(0,n.jsx)(o.V.Title,{className:"text-lg font-semibold mb-4",children:r?"Editar Agendamento":"Novo Agendamento"}),(0,n.jsxs)("form",{onSubmit:e=>{e.preventDefault(),r?c(r.id,{start:new Date("".concat(f.data,"T").concat(f.horario)),end:new Date(new Date("".concat(f.data,"T").concat(f.horario)).getTime()+6e4*f.duracao),tipo:f.tipo,observacoes:f.observacoes}):i(f),a()},className:"space-y-4",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Paciente"}),(0,n.jsx)(d.j,{onSelect:e=>{m(e),g(t=>({...t,patientId:(null==e?void 0:e.id)||""}))},selectedId:f.patientId})]}),(0,n.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Data"}),(0,n.jsx)("input",{type:"date",value:f.data,onChange:e=>g(t=>({...t,data:e.target.value})),className:"w-full p-2 border rounded-lg",required:!0})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Hor\xe1rio"}),(0,n.jsx)("input",{type:"time",value:f.horario,onChange:e=>g(t=>({...t,horario:e.target.value})),className:"w-full p-2 border rounded-lg",required:!0})]})]}),(0,n.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Tipo"}),(0,n.jsxs)("select",{value:f.tipo,onChange:e=>g(t=>({...t,tipo:e.target.value})),className:"w-full p-2 border rounded-lg",required:!0,children:[(0,n.jsx)("option",{value:"sessao",children:"Sess\xe3o"}),(0,n.jsx)("option",{value:"avaliacao",children:"Avalia\xe7\xe3o"}),(0,n.jsx)("option",{value:"reavaliacao",children:"Reavalia\xe7\xe3o"})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Dura\xe7\xe3o (minutos)"}),(0,n.jsx)("input",{type:"number",value:f.duracao,onChange:e=>g(t=>({...t,duracao:Number(e.target.value)})),className:"w-full p-2 border rounded-lg",min:"15",max:"180",step:"5",required:!0})]})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Observa\xe7\xf5es"}),(0,n.jsx)("textarea",{value:f.observacoes,onChange:e=>g(t=>({...t,observacoes:e.target.value})),className:"w-full p-2 border rounded-lg",rows:3})]}),(0,n.jsxs)("div",{className:"flex justify-end gap-3",children:[(0,n.jsx)("button",{type:"button",onClick:a,className:"px-4 py-2 text-sm border rounded-lg hover:bg-gray-50",children:"Cancelar"}),(0,n.jsx)("button",{type:"submit",className:"px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700",children:r?"Atualizar":"Agendar"})]})]})]})})})]})}let u=r()(()=>Promise.all([a.e(2856),a.e(6990),a.e(5467),a.e(9096),a.e(7343)]).then(a.bind(a,25964)).then(e=>e.Calendario),{loadableGenerated:{webpack:()=>[25964]},ssr:!1});function m(){let{agendamentos:e,addAgendamento:t,updateAgendamento:a}=function(){let[e,t]=(0,l.useState)([]);return(0,l.useEffect)(()=>{t(JSON.parse(localStorage.getItem("agendamentos")||"[]").map(e=>({...e,start:new Date(e.start),end:new Date(e.end)})))},[]),{agendamentos:e,addAgendamento:a=>{let n=new Date("".concat(a.data,"T").concat(a.horario)),l=new Date(n.getTime()+6e4*a.duracao),s=[...e,{id:crypto.randomUUID(),patientId:a.patientId,title:"".concat(a.tipo.charAt(0).toUpperCase()+a.tipo.slice(1)),start:n,end:l,status:"agendado",observacoes:a.observacoes,tipo:a.tipo}];localStorage.setItem("agendamentos",JSON.stringify(s)),t(s)},updateAgendamento:(a,n)=>{let l=e.map(e=>e.id===a?{...e,...n}:e);localStorage.setItem("agendamentos",JSON.stringify(l)),t(l)},deleteAgendamento:a=>{let n=e.filter(e=>e.id!==a);localStorage.setItem("agendamentos",JSON.stringify(n)),t(n)}}}(),[s,r]=(0,l.useState)(null),[o,d]=(0,l.useState)(null),[m,f]=(0,l.useState)(!1);return(0,n.jsxs)("div",{className:"p-6",children:[(0,n.jsx)(i.Z,{children:(0,n.jsxs)("div",{className:"p-6",children:[(0,n.jsx)("h1",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Agenda"}),(0,n.jsx)("div",{style:{height:"calc(100vh - 250px)"},children:(0,n.jsx)(u,{agendamentos:e,onSelectSlot:e=>{let{start:t}=e;r(t),d(null),f(!0)},onSelectEvent:e=>{d(e),r(null),f(!0)}})})]})}),(0,n.jsx)(c,{isOpen:m,onClose:()=>{f(!1),r(null),d(null)},selectedDate:s,selectedEvent:o,onSave:t,onUpdate:a})]})}},34170:function(e,t,a){"use strict";a.d(t,{j:function(){return s}});var n=a(57437),l=a(38041);function s(e){let{onSelect:t,selectedId:a,disabled:s,className:r=""}=e,{patients:i,loading:o}=(0,l.w)();return o?(0,n.jsx)("div",{className:"w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-500 text-sm text-center",children:"Carregando pacientes..."}):(0,n.jsxs)("div",{className:"w-full space-y-1",children:[(0,n.jsx)("label",{className:"block text-xs sm:text-sm font-medium text-gray-700",children:"Selecione o Paciente"}),(0,n.jsxs)("select",{value:a||"",onChange:e=>{let a=e.target.value;t((a?i.find(e=>e.id===a):null)||null)},disabled:s,className:"\n          block w-full rounded-lg border-gray-300 \n          py-2 sm:py-2.5 \n          pl-3 pr-10 \n          text-sm text-gray-900 \n          focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 \n          ".concat(r,"\n        "),children:[(0,n.jsx)("option",{value:"",className:"text-xs sm:text-sm",children:"Selecione um paciente"}),i.map(e=>(0,n.jsxs)("option",{value:e.id,className:"text-xs sm:text-sm",children:[e.name," (",new Date(e.dateOfBirth).toLocaleDateString(),")"]},e.id))]})]})}},57418:function(e,t,a){"use strict";a.d(t,{Z:function(){return l}});var n=a(57437);function l(e){let{children:t,className:a=""}=e;return(0,n.jsx)("div",{className:"bg-white rounded-xl shadow-lg ring-1 ring-gray-900/5 ".concat(a),children:t})}},38041:function(e,t,a){"use strict";a.d(t,{w:function(){return l}});var n=a(2265);function l(){let[e,t]=(0,n.useState)([]),[a,l]=(0,n.useState)(!0),s=()=>{t(JSON.parse(localStorage.getItem("patients")||"[]").map(e=>({...e,dateOfBirth:new Date(e.dateOfBirth),createdAt:new Date(e.createdAt)}))),l(!1)};return(0,n.useEffect)(()=>(s(),window.addEventListener("patientsUpdated",s),()=>window.removeEventListener("patientsUpdated",s)),[]),{patients:e,loading:a,addPatient:t=>{let a=[...e,t];localStorage.setItem("patients",JSON.stringify(a)),window.dispatchEvent(new Event("patientsUpdated"))},updatePatient:t=>{let a=[...e],n=a.findIndex(e=>e.id===t.id);-1!==n&&(a[n]=t,localStorage.setItem("patients",JSON.stringify(a)),window.dispatchEvent(new Event("patientsUpdated")))},deletePatient:t=>{let a=e.filter(e=>e.id!==t);localStorage.setItem("patients",JSON.stringify(a)),window.dispatchEvent(new Event("patientsUpdated"))},refreshPatients:s}}}},function(e){e.O(0,[1466,2971,4938,1744],function(){return e(e.s=73983)}),_N_E=e.O()}]);