(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9554],{69234:function(e,s,a){Promise.resolve().then(a.bind(a,55983))},55983:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return d}});var r=a(57437),n=a(2265),t=a(24033),i=a(61396),l=a.n(i),o=a(57418),c=a(78980);function d(){let e=(0,t.useRouter)(),[s,a]=(0,n.useState)(null),[i,d]=(0,n.useState)(!1),[m,u]=(0,n.useState)({name:"",email:"",password:"",confirmPassword:"",professionalRegister:""}),x=e=>{let{name:s,value:r}=e.target;u(e=>({...e,[s]:r})),a(null)},p=()=>m.password!==m.confirmPassword?(a("As senhas n\xe3o coincidem"),!1):!(m.password.length<6)||(a("A senha deve ter pelo menos 6 caracteres"),!1),g=async s=>{if(s.preventDefault(),!p())return;a(null),d(!0);let r={name:m.name,email:m.email,password:m.password,professionalRegister:m.professionalRegister||void 0};try{let s=await fetch("/api/auth/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(!s.ok){let e=await s.json();throw Error(e.message)}e.push("/login?registered=true")}catch(e){a(e.message||"Ocorreu um erro ao criar a conta")}finally{d(!1)}};return(0,r.jsx)("div",{className:"min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8",children:(0,r.jsxs)(o.Z,{className:"max-w-md w-full space-y-8 p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300",children:[(0,r.jsxs)("div",{className:"text-center",children:[(0,r.jsx)("h2",{className:"text-3xl font-extrabold text-gray-900 tracking-tight",children:"Criar nova conta"}),(0,r.jsx)("p",{className:"mt-2 text-sm text-gray-600",children:"Preencha os dados abaixo para come\xe7ar"})]}),(0,r.jsxs)("form",{className:"mt-8 space-y-6",onSubmit:g,children:[s&&(0,r.jsxs)("div",{className:"bg-red-50 text-red-500 p-4 rounded-lg flex items-center gap-2 text-sm animate-shake",children:[(0,r.jsx)(c.bcx,{className:"h-5 w-5"}),s]}),(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-1",children:"Nome Completo"}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:(0,r.jsx)(c.fzv,{className:"h-5 w-5 text-gray-400"})}),(0,r.jsx)("input",{id:"name",name:"name",type:"text",value:m.name,onChange:x,required:!0,className:"pl-10 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 ease-in-out",placeholder:"Jo\xe3o Silva"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-1",children:"Email"}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:(0,r.jsx)(c.Imn,{className:"h-5 w-5 text-gray-400"})}),(0,r.jsx)("input",{id:"email",name:"email",type:"email",value:m.email,onChange:x,required:!0,className:"pl-10 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 ease-in-out",placeholder:"seu@email.com"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700 mb-1",children:"Senha"}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:(0,r.jsx)(c.UIZ,{className:"h-5 w-5 text-gray-400"})}),(0,r.jsx)("input",{id:"password",name:"password",type:"password",value:m.password,onChange:x,required:!0,className:"pl-10 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 ease-in-out",placeholder:"••••••••"})]}),(0,r.jsx)("p",{className:"mt-1 text-xs text-gray-500",children:"M\xednimo de 6 caracteres"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"confirmPassword",className:"block text-sm font-medium text-gray-700 mb-1",children:"Confirmar Senha"}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:(0,r.jsx)(c.UIZ,{className:"h-5 w-5 text-gray-400"})}),(0,r.jsx)("input",{id:"confirmPassword",name:"confirmPassword",type:"password",value:m.confirmPassword,onChange:x,required:!0,className:"pl-10 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 ease-in-out",placeholder:"••••••••"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{htmlFor:"professionalRegister",className:"block text-sm font-medium text-gray-700 mb-1",children:"Registro Profissional (Opcional)"}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:(0,r.jsx)(c.XiQ,{className:"h-5 w-5 text-gray-400"})}),(0,r.jsx)("input",{id:"professionalRegister",name:"professionalRegister",type:"text",value:m.professionalRegister,onChange:x,className:"pl-10 appearance-none relative block w-full px-3 py-2 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 ease-in-out",placeholder:"CRP, CRM, etc"})]})]})]}),(0,r.jsx)("div",{children:(0,r.jsx)("button",{type:"submit",disabled:i,className:"group relative w-full flex justify-center py-2.5 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed",children:i?(0,r.jsxs)("span",{className:"flex items-center",children:[(0,r.jsxs)("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[(0,r.jsx)("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),(0,r.jsx)("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Criando conta..."]}):"Criar conta"})}),(0,r.jsx)("div",{className:"flex items-center justify-center",children:(0,r.jsx)("div",{className:"text-sm",children:(0,r.jsx)(l(),{href:"/login",className:"font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-300",children:"J\xe1 tem uma conta? Fa\xe7a login"})})})]})]})})}},57418:function(e,s,a){"use strict";a.d(s,{Z:function(){return n}});var r=a(57437);function n(e){let{children:s,className:a=""}=e;return(0,r.jsx)("div",{className:"bg-white rounded-xl shadow-lg ring-1 ring-gray-900/5 ".concat(a),children:s})}},24033:function(e,s,a){e.exports=a(15313)}},function(e){e.O(0,[1176,8980,2971,4938,1744],function(){return e(e.s=69234)}),_N_E=e.O()}]);