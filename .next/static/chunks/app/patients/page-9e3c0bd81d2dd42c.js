(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[333],{25992:function(e,t,s){Promise.resolve().then(s.bind(s,49509))},49509:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return c}});var a=s(57437),n=s(2265),r=s(61396),l=s.n(r),i=s(95255),o=s(49863);function c(e){let{patients:t}=e,[s,r]=(0,n.useState)(""),c=t.filter(e=>e.name.toLowerCase().includes(s.toLowerCase()));return(0,a.jsxs)("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8",children:[(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row gap-4 mb-6",children:[(0,a.jsx)("input",{type:"text",placeholder:"Buscar pacientes...",className:"flex-1 p-2 border rounded-lg w-full sm:w-auto text-sm",value:s,onChange:e=>r(e.target.value)}),(0,a.jsxs)(l(),{href:"/patients/new",className:"bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-600 w-full sm:w-auto",children:[(0,a.jsx)(i.Z,{className:"w-4 h-4 sm:w-5 sm:h-5"}),(0,a.jsx)("span",{className:"text-xs sm:text-sm",children:"Novo Paciente"})]})]}),(0,a.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:c.map(e=>(0,a.jsxs)(l(),{href:"/patients/".concat(e.id),className:"block p-4 border rounded-lg hover:border-blue-500 transition-colors hover:shadow-sm",children:[(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[(0,a.jsx)(o.Z,{className:"w-8 sm:w-10 h-8 sm:h-10 text-gray-400"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"font-semibold text-sm sm:text-base",children:e.name}),(0,a.jsx)("p",{className:"text-xs sm:text-sm text-gray-500",children:new Date(e.date_of_birth).toLocaleDateString()})]})]}),(0,a.jsx)("div",{className:"mt-2",children:(0,a.jsx)("span",{className:"\n                text-xs sm:text-sm \n                px-2 py-1 rounded-full \n                ".concat("active"===e.status?"bg-green-100 text-green-800":"bg-gray-100 text-gray-800","\n              "),children:"active"===e.status?"Ativo":"Inativo"})})]},e.id))}),0===c.length&&(0,a.jsx)("div",{className:"text-center py-8 text-gray-500 text-sm sm:text-base",children:s?"Nenhum paciente encontrado com este termo de busca":"Nenhum paciente cadastrado ainda"})]})}},95255:function(e,t,s){"use strict";var a=s(2265);let n=a.forwardRef(function({title:e,titleId:t,...s},n){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":t},s),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"}))});t.Z=n},49863:function(e,t,s){"use strict";var a=s(2265);let n=a.forwardRef(function({title:e,titleId:t,...s},n){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":t},s),e?a.createElement("title",{id:t},e):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}))});t.Z=n}},function(e){e.O(0,[1176,2971,4938,1744],function(){return e(e.s=25992)}),_N_E=e.O()}]);