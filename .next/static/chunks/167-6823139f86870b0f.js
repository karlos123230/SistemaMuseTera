"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[167],{34170:function(e,a,i){i.d(a,{j:function(){return s}});var o=i(57437),t=i(38041);function s(e){let{onSelect:a,selectedId:i,disabled:s,className:r=""}=e,{patients:n,loading:c}=(0,t.w)();return c?(0,o.jsx)("div",{className:"w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-500 text-sm text-center",children:"Carregando pacientes..."}):(0,o.jsxs)("div",{className:"w-full space-y-1",children:[(0,o.jsx)("label",{className:"block text-xs sm:text-sm font-medium text-gray-700",children:"Selecione o Paciente"}),(0,o.jsxs)("select",{value:i||"",onChange:e=>{let i=e.target.value;a((i?n.find(e=>e.id===i):null)||null)},disabled:s,className:"\n          block w-full rounded-lg border-gray-300 \n          py-2 sm:py-2.5 \n          pl-3 pr-10 \n          text-sm text-gray-900 \n          focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 \n          ".concat(r,"\n        "),children:[(0,o.jsx)("option",{value:"",className:"text-xs sm:text-sm",children:"Selecione um paciente"}),n.map(e=>(0,o.jsxs)("option",{value:e.id,className:"text-xs sm:text-sm",children:[e.name," (",new Date(e.dateOfBirth).toLocaleDateString(),")"]},e.id))]})]})}},10167:function(e,a,i){i.d(a,{m:function(){return m}});var o=i(57437),t=i(2265),s=i(48475),r=i.n(s),n=i(57418),c=i(34170);let d=[{id:"1",texto:"Promover o desenvolvimento emocional, social e cognitivo atrav\xe9s da m\xfasica",diagnosticos:["TEA","Sindrome_Down","Deficiencia_Intelectual"],categoria:"desenvolvimento"},{id:"2",texto:"Melhorar a comunica\xe7\xe3o verbal e n\xe3o verbal",diagnosticos:["TEA","DPAC","Deficiencia_Auditiva"],categoria:"comunicacao"},{id:"3",texto:"Reduzir comportamentos restritivos e estereotipados",diagnosticos:["TEA"],categoria:"comportamento"},{id:"4",texto:"Desenvolver capacidade de foco e aten\xe7\xe3o",diagnosticos:["TDAH","TEA"],categoria:"desenvolvimento"},{id:"5",texto:"Melhorar controle de impulsos atrav\xe9s de atividades r\xedtmicas",diagnosticos:["TDAH"],categoria:"comportamento"},{id:"6",texto:"Estimular mem\xf3ria atrav\xe9s de m\xfasicas familiares",diagnosticos:["Alzheimer","Demencia"],categoria:"desenvolvimento"},{id:"7",texto:"Manter conex\xf5es emocionais atrav\xe9s de m\xfasicas biogr\xe1ficas",diagnosticos:["Alzheimer","Demencia"],categoria:"emocional"},{id:"8",texto:"Desenvolver controle motor atrav\xe9s de instrumentos adaptados",diagnosticos:["Paralisia_Cerebral","AVE"],categoria:"motor"},{id:"9",texto:"Estimular coordena\xe7\xe3o motora atrav\xe9s de atividades r\xedtmicas",diagnosticos:["Paralisia_Cerebral","Parkinson","AVE"],categoria:"motor"},{id:"10",texto:"Desenvolver habilidades de linguagem atrav\xe9s do canto",diagnosticos:["Sindrome_Down","Deficiencia_Intelectual"],categoria:"comunicacao"},{id:"11",texto:"Melhorar articula\xe7\xe3o e dic\xe7\xe3o",diagnosticos:["Sindrome_Down","Deficiencia_Intelectual","DPAC"],categoria:"comunicacao"},{id:"12",texto:"Reabilitar fun\xe7\xf5es motoras atrav\xe9s da m\xfasica",diagnosticos:["AVE","Paralisia_Cerebral"],categoria:"motor"},{id:"13",texto:"Estimular recupera\xe7\xe3o da fala atrav\xe9s do canto",diagnosticos:["AVE"],categoria:"comunicacao"},{id:"14",texto:"Melhorar controle motor atrav\xe9s de exerc\xedcios r\xedtmicos",diagnosticos:["Parkinson"],categoria:"motor"},{id:"15",texto:"Desenvolver estrat\xe9gias para marcha e movimento",diagnosticos:["Parkinson","AVE"],categoria:"motor"},{id:"16",texto:"Reduzir sintomas de ansiedade atrav\xe9s da m\xfasica",diagnosticos:["Ansiedade","Depress\xe3o"],categoria:"emocional"},{id:"17",texto:"Promover express\xe3o emocional atrav\xe9s da improvisa\xe7\xe3o musical",diagnosticos:["Depress\xe3o","Esquizofrenia"],categoria:"emocional"},{id:"18",texto:"Desenvolver habilidades de socializa\xe7\xe3o",diagnosticos:["Esquizofrenia","Depress\xe3o"],categoria:"social"},{id:"19",texto:"Desenvolver percep\xe7\xe3o vibrot\xe1til da m\xfasica",diagnosticos:["Deficiencia_Auditiva"],categoria:"percepcao"},{id:"20",texto:"Estimular orienta\xe7\xe3o espacial atrav\xe9s do som",diagnosticos:["Deficiencia_Visual"],categoria:"percepcao"},{id:"21",texto:"Desenvolver habilidades de imita\xe7\xe3o musical e motora",diagnosticos:["TEA","Sindrome_Down"],categoria:"desenvolvimento"},{id:"22",texto:"Estabelecer contato visual durante atividades musicais interativas",diagnosticos:["TEA","Deficiencia_Intelectual"],categoria:"social"},{id:"23",texto:"Desenvolver discrimina\xe7\xe3o de timbres e intensidades sonoras",diagnosticos:["DPAC","Deficiencia_Auditiva","TEA"],categoria:"percepcao"},{id:"24",texto:"Aprimorar localiza\xe7\xe3o espacial atrav\xe9s de est\xedmulos sonoros",diagnosticos:["Deficiencia_Visual","DPAC"],categoria:"percepcao"},{id:"25",texto:"Estimular mem\xf3ria de curto prazo atrav\xe9s de sequ\xeancias musicais",diagnosticos:["Alzheimer","Demencia","AVE"],categoria:"desenvolvimento"},{id:"26",texto:"Melhorar flu\xeancia verbal atrav\xe9s do canto terap\xeautico",diagnosticos:["Parkinson","AVE","Sindrome_Down"],categoria:"comunicacao"},{id:"27",texto:"Desenvolver consci\xeancia corporal atrav\xe9s de atividades musicais",diagnosticos:["TEA","Paralisia_Cerebral","Sindrome_Down"],categoria:"motor"},{id:"28",texto:"Estimular express\xe3o de emo\xe7\xf5es atrav\xe9s da m\xfasica",diagnosticos:["TEA","Depress\xe3o","Esquizofrenia"],categoria:"emocional"},{id:"29",texto:"Desenvolver habilidades de planejamento motor",diagnosticos:["TEA","TDAH","Paralisia_Cerebral"],categoria:"motor"},{id:"30",texto:"Desenvolver reconhecimento de padr\xf5es sonoros",diagnosticos:["DPAC","Deficiencia_Auditiva","TEA"],categoria:"percepcao"},{id:"31",texto:"Estimular integra\xe7\xe3o sensorial atrav\xe9s da m\xfasica",diagnosticos:["Deficiencia_Visual","TEA","DPAC"],categoria:"percepcao"},{id:"32",texto:"Desenvolver orienta\xe7\xe3o espacial atrav\xe9s de pistas sonoras",diagnosticos:["Deficiencia_Visual","Deficiencia_Auditiva"],categoria:"percepcao"},{id:"33",texto:"Estimular fun\xe7\xf5es executivas atrav\xe9s de atividades musicais",diagnosticos:["Alzheimer","Demencia","Parkinson"],categoria:"desenvolvimento"},{id:"34",texto:"Manter habilidades cognitivas atrav\xe9s de exerc\xedcios musicais",diagnosticos:["Alzheimer","Demencia","AVE"],categoria:"desenvolvimento"},{id:"35",texto:"Desenvolver estrat\xe9gias compensat\xf3rias atrav\xe9s da m\xfasica",diagnosticos:["Parkinson","AVE","Paralisia_Cerebral"],categoria:"motor"},{id:"36",texto:"Desenvolver regula\xe7\xe3o emocional atrav\xe9s da m\xfasica",diagnosticos:["Ansiedade","Depress\xe3o","Esquizofrenia"],categoria:"emocional"},{id:"37",texto:"Estimular intera\xe7\xe3o social atrav\xe9s de atividades musicais em grupo",diagnosticos:["Depress\xe3o","Esquizofrenia","TEA"],categoria:"social"},{id:"38",texto:"Desenvolver estrat\xe9gias de enfrentamento atrav\xe9s da express\xe3o musical",diagnosticos:["Ansiedade","Depress\xe3o","Esquizofrenia"],categoria:"emocional"},{id:"39",texto:"Desenvolver autorregula\xe7\xe3o atrav\xe9s de atividades r\xedtmicas",diagnosticos:["TDAH","TEA","Sindrome_Down"],categoria:"comportamento"},{id:"40",texto:"Estimular mem\xf3ria operacional atrav\xe9s de sequ\xeancias musicais",diagnosticos:["TDAH","Alzheimer","Demencia"],categoria:"desenvolvimento"},{id:"41",texto:"Melhorar organiza\xe7\xe3o temporal atrav\xe9s da m\xfasica",diagnosticos:["TDAH","TEA","Deficiencia_Intelectual"],categoria:"desenvolvimento"},{id:"42",texto:"Desenvolver coordena\xe7\xe3o motora fina atrav\xe9s de instrumentos musicais",diagnosticos:["Sindrome_Down","Paralisia_Cerebral","TEA"],categoria:"motor"},{id:"43",texto:"Estimular mem\xf3ria sequencial atrav\xe9s de can\xe7\xf5es",diagnosticos:["Sindrome_Down","Deficiencia_Intelectual","TDAH"],categoria:"desenvolvimento"},{id:"44",texto:"Desenvolver habilidades sociais atrav\xe9s de atividades musicais em grupo",diagnosticos:["Sindrome_Down","TEA","Deficiencia_Intelectual"],categoria:"social"}],l=[{id:"1",nome:"Roda Musical",objetivo:"Favorecer a intera\xe7\xe3o social e o turn-taking",descricao:"Utilizar instrumentos de percuss\xe3o para criar uma roda de m\xfasica onde cada participante tem sua vez de tocar",diagnosticos:["TEA","TDAH","Sindrome_Down"],categoria:"interacao"},{id:"2",nome:"Banda R\xedtmica",objetivo:"Desenvolver coordena\xe7\xe3o e trabalho em grupo",descricao:"Formar uma banda com diferentes instrumentos, trabalhando ritmos simples e coordena\xe7\xe3o coletiva",diagnosticos:["Paralisia_Cerebral","Sindrome_Down","TDAH"],categoria:"movimento"},{id:"3",nome:"Recorda\xe7\xe3o Musical",objetivo:"Estimular mem\xf3ria autobiogr\xe1fica",descricao:"Utilizar m\xfasicas significativas da hist\xf3ria do paciente para evocar mem\xf3rias e emo\xe7\xf5es",diagnosticos:["Alzheimer","Demencia"],categoria:"percepcao"},{id:"4",nome:"Dan\xe7a R\xedtmica",objetivo:"Melhorar coordena\xe7\xe3o e equil\xedbrio",descricao:"Movimentos corporais sincronizados com m\xfasica, adaptados \xe0s capacidades do paciente",diagnosticos:["Parkinson","AVE","Paralisia_Cerebral"],categoria:"movimento"},{id:"5",nome:"Canto Terap\xeautico",objetivo:"Desenvolver habilidades de fala e articula\xe7\xe3o",descricao:"Exerc\xedcios vocais e m\xfasicas espec\xedficas para trabalhar aspectos da fala",diagnosticos:["AVE","Sindrome_Down","DPAC"],categoria:"vocal"},{id:"6",nome:"Explora\xe7\xe3o Sonora",objetivo:"Desenvolver consci\xeancia sensorial",descricao:"Explora\xe7\xe3o de diferentes timbres e texturas sonoras com instrumentos variados",diagnosticos:["Deficiencia_Visual","Deficiencia_Auditiva","TEA"],categoria:"percepcao"}];function m(){let[e,a]=(0,t.useState)(null),[i,s]=(0,t.useState)("TEA"),m=d.filter(e=>e.diagnosticos.includes(i)),u=l.filter(e=>e.diagnosticos.includes(i)),[v,p]=(0,t.useState)({id:"",patientId:(null==e?void 0:e.id)||"",identificacao:{nome:(null==e?void 0:e.name)||"",idade:e?g(new Date(e.dateOfBirth)):0,diagnostico:i,dataInicio:new Date,dataReavaliacao:new Date},objetivosGerais:[],objetivosEspecificos:{interacaoSocial:[],exploracaoSonora:[],movimentacaoCorporal:[],exploracaoVocal:[],comportamentosRestritivos:[]},atividades:u.map(e=>({id:e.id,nome:e.nome,objetivo:e.objetivo,descricao:e.descricao,categoria:e.categoria})),cronograma:[{semana:"1-2",atividades:["Roda Musical"],objetivos:["Intera\xe7\xe3o Social"]}],avaliacoes:[],observacoesGerais:"",status:"ativo",createdAt:new Date,updatedAt:new Date}),[x,f]=(0,t.useState)(!1),[h,D]=(0,t.useState)(!1),b=e=>{s(e);let a=l.filter(a=>a.diagnosticos.includes(e));p(i=>({...i,identificacao:{...i.identificacao,diagnostico:e},atividades:a.map(e=>({id:e.id,nome:e.nome,objetivo:e.objetivo,descricao:e.descricao,categoria:e.categoria}))}))},j=e=>{p(a=>({...a,objetivosGerais:a.objetivosGerais.includes(e.texto)?a.objetivosGerais.filter(a=>a!==e.texto):[...a.objetivosGerais,e.texto]}))};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r(),{src:"https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",strategy:"lazyOnload",onLoad:()=>{console.log("jsPDF carregado"),f(!0)},onError:()=>{console.error("Erro ao carregar jsPDF"),f(!1)}}),(0,o.jsx)(r(),{src:"https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.5.15/jspdf.plugin.autotable.min.js",strategy:"lazyOnload",onLoad:()=>{console.log("jsPDF AutoTable carregado"),D(!0)},onError:()=>{console.error("Erro ao carregar jsPDF AutoTable"),D(!1)}}),(0,o.jsxs)("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8 space-y-6",children:[(0,o.jsx)("div",{className:"flex flex-col sm:flex-row justify-between items-center",children:(0,o.jsx)("h1",{className:"text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-0",children:"MuseTera - Plano Terap\xeautico"})}),(0,o.jsx)(n.Z,{className:"w-full",children:(0,o.jsxs)("div",{className:"p-4 sm:p-6 space-y-4",children:[(0,o.jsx)(c.j,{onSelect:a,selectedId:null==e?void 0:e.id,className:"w-full"}),e&&(0,o.jsxs)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Diagn\xf3stico Principal"}),(0,o.jsxs)("select",{className:"w-full p-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",value:i,onChange:e=>b(e.target.value),children:[(0,o.jsxs)("optgroup",{label:"Transtornos do Neurodesenvolvimento",className:"font-semibold",children:[(0,o.jsx)("option",{value:"TEA",children:"Transtorno do Espectro Autista (TEA)"}),(0,o.jsx)("option",{value:"TDAH",children:"TDAH"}),(0,o.jsx)("option",{value:"Deficiencia_Intelectual",children:"Defici\xeancia Intelectual"})]}),(0,o.jsx)("optgroup",{label:"S\xedndromes Gen\xe9ticas",className:"font-semibold",children:(0,o.jsx)("option",{value:"Sindrome_Down",children:"S\xedndrome de Down"})}),(0,o.jsxs)("optgroup",{label:"Condi\xe7\xf5es Neurol\xf3gicas",className:"font-semibold",children:[(0,o.jsx)("option",{value:"Paralisia_Cerebral",children:"Paralisia Cerebral"}),(0,o.jsx)("option",{value:"AVE",children:"AVE/AVC"}),(0,o.jsx)("option",{value:"Parkinson",children:"Doen\xe7a de Parkinson"}),(0,o.jsx)("option",{value:"Alzheimer",children:"Doen\xe7a de Alzheimer"}),(0,o.jsx)("option",{value:"Demencia",children:"Outras Dem\xeancias"})]}),(0,o.jsxs)("optgroup",{label:"Sa\xfade Mental",className:"font-semibold",children:[(0,o.jsx)("option",{value:"Depress\xe3o",children:"Depress\xe3o"}),(0,o.jsx)("option",{value:"Ansiedade",children:"Ansiedade"}),(0,o.jsx)("option",{value:"Esquizofrenia",children:"Esquizofrenia"})]}),(0,o.jsxs)("optgroup",{label:"Defici\xeancias Sensoriais",className:"font-semibold",children:[(0,o.jsx)("option",{value:"Deficiencia_Auditiva",children:"Defici\xeancia Auditiva"}),(0,o.jsx)("option",{value:"Deficiencia_Visual",children:"Defici\xeancia Visual"}),(0,o.jsx)("option",{value:"DPAC",children:"Dist\xfarbio do Processamento Auditivo Central"})]}),(0,o.jsx)("option",{value:"Outro",children:"Outro"})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Data de In\xedcio"}),(0,o.jsx)("input",{type:"date",className:"w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",value:v.identificacao.dataInicio.toISOString().split("T")[0],onChange:e=>p(a=>({...a,identificacao:{...a.identificacao,dataInicio:new Date(e.target.value)}}))})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"Data Prevista para Reavalia\xe7\xe3o"}),(0,o.jsx)("input",{type:"date",className:"w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",value:v.identificacao.dataReavaliacao.toISOString().split("T")[0],onChange:e=>p(a=>({...a,identificacao:{...a.identificacao,dataReavaliacao:new Date(e.target.value)}}))})]})]})]})}),e&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.Z,{className:"w-full",children:(0,o.jsxs)("div",{className:"p-4 sm:p-6",children:[(0,o.jsx)("h3",{className:"text-md sm:text-lg font-semibold mb-4",children:"Objetivos Dispon\xedveis"}),(0,o.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3",children:m.map(e=>(0,o.jsxs)("label",{className:"flex items-start gap-3 p-2 rounded hover:bg-gray-50 cursor-pointer border border-transparent hover:border-gray-200 transition-all",children:[(0,o.jsx)("div",{className:"flex items-center h-5 mt-0.5",children:(0,o.jsx)("input",{type:"checkbox",checked:v.objetivosGerais.includes(e.texto),onChange:()=>j(e),className:"h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"})}),(0,o.jsxs)("div",{className:"flex-1",children:[(0,o.jsx)("p",{className:"text-sm text-gray-700",children:e.texto}),(0,o.jsxs)("span",{className:"text-xs text-gray-500 mt-1",children:["Categoria: ",e.categoria.charAt(0).toUpperCase()+e.categoria.slice(1)]})]})]},e.id))}),(0,o.jsxs)("div",{className:"mt-4 text-sm text-gray-600 text-center sm:text-left",children:[v.objetivosGerais.length," objetivo(s) selecionado(s)"]})]})}),(0,o.jsx)("div",{className:"flex justify-center sm:justify-end",children:(0,o.jsx)("button",{onClick:()=>{try{if(!x||!h)throw Error("Bibliotecas de PDF n\xe3o carregadas. Aguarde e tente novamente.");if(console.log("Dados para gera\xe7\xe3o de PDF:",{selectedPatient:e,diagnostico:i,plano:{identificacao:v.identificacao,objetivosGerais:v.objetivosGerais}}),!window.jspdf||!window.jspdf.jsPDF)throw Error("Biblioteca jsPDF n\xe3o carregada");let a=new window.jspdf.jsPDF;if(!e)throw Error("Nenhum paciente selecionado");a.setFontSize(20),a.text("Plano Terap\xeautico Musicoterap\xeautico",a.internal.pageSize.getWidth()/2,20,{align:"center"}),a.setFontSize(16),a.text("Identifica\xe7\xe3o do Paciente",20,40),a.setFontSize(12),a.text("Nome: ".concat(e.name||"N\xe3o informado"),20,50);let o=e.dateOfBirth?g(new Date(e.dateOfBirth)):"N\xe3o informada";a.text("Idade: ".concat(o," anos"),20,57),a.text("Diagn\xf3stico: ".concat(i||"N\xe3o informado"),20,64);let t=v.identificacao.dataInicio?v.identificacao.dataInicio.toLocaleDateString("pt-BR"):"N\xe3o informada";a.text("Data de In\xedcio: ".concat(t),20,71),v.identificacao.dataReavaliacao&&a.text("Reavalia\xe7\xe3o: ".concat(v.identificacao.dataReavaliacao.toLocaleDateString("pt-BR")),20,78),a.setFontSize(16),a.text("Objetivos Terap\xeauticos",20,95);let s=105;a.setFontSize(12),v.objetivosGerais&&0!==v.objetivosGerais.length?v.objetivosGerais.forEach(e=>{let i=d.find(a=>a.texto===e),o="Categoria: ".concat((null==i?void 0:i.categoria)||"N\xe3o categorizado"),t=a.splitTextToSize("• ".concat(e),170);s>250&&(a.addPage(),s=20),a.text(t,20,s),s+=7*t.length,a.setFontSize(10),a.text(o,25,s),a.setFontSize(12),s+=10}):(a.text("Nenhum objetivo geral definido",20,s),s+=10);let r=a.getNumberOfPages();for(let e=1;e<=r;e++)a.setPage(e),a.setFontSize(8),a.text("P\xe1gina ".concat(e," de ").concat(r),a.internal.pageSize.getWidth()/2,a.internal.pageSize.getHeight()-10,{align:"center"});let n=e.name?e.name.toLowerCase().replace(/\s+/g,"_"):"plano_terapeutico";a.save("plano_terapeutico_".concat(n,".pdf"))}catch(e){console.error("Erro detalhado ao gerar PDF:",{errorMessage:e instanceof Error?e.message:"Erro desconhecido",errorStack:e instanceof Error?e.stack:"Sem stack trace"}),alert("Erro ao gerar o PDF: ".concat(e instanceof Error?e.message:"Erro desconhecido"))}},disabled:!x||!h,className:"\n                  w-full sm:w-auto max-w-xs\n                  ".concat(x&&h?"bg-blue-500 hover:bg-blue-600":"bg-gray-300 cursor-not-allowed"," \n                  text-white font-bold py-2 px-4 rounded transition-colors\n                "),children:x&&h?"Gerar PDF":"Carregando bibliotecas..."})})]})]})]})}function g(e){let a=new Date,i=a.getFullYear()-e.getFullYear(),o=a.getMonth()-e.getMonth();return(o<0||0===o&&a.getDate()<e.getDate())&&i--,i}},57418:function(e,a,i){i.d(a,{Z:function(){return t}});var o=i(57437);function t(e){let{children:a,className:i=""}=e;return(0,o.jsx)("div",{className:"bg-white rounded-xl shadow-lg ring-1 ring-gray-900/5 ".concat(i),children:a})}},38041:function(e,a,i){i.d(a,{w:function(){return t}});var o=i(2265);function t(){let[e,a]=(0,o.useState)([]),[i,t]=(0,o.useState)(!0),s=()=>{a(JSON.parse(localStorage.getItem("patients")||"[]").map(e=>({...e,dateOfBirth:new Date(e.dateOfBirth),createdAt:new Date(e.createdAt)}))),t(!1)};return(0,o.useEffect)(()=>(s(),window.addEventListener("patientsUpdated",s),()=>window.removeEventListener("patientsUpdated",s)),[]),{patients:e,loading:i,addPatient:a=>{let i=[...e,a];localStorage.setItem("patients",JSON.stringify(i)),window.dispatchEvent(new Event("patientsUpdated"))},updatePatient:a=>{let i=[...e],o=i.findIndex(e=>e.id===a.id);-1!==o&&(i[o]=a,localStorage.setItem("patients",JSON.stringify(i)),window.dispatchEvent(new Event("patientsUpdated")))},deletePatient:a=>{let i=e.filter(e=>e.id!==a);localStorage.setItem("patients",JSON.stringify(i)),window.dispatchEvent(new Event("patientsUpdated"))},refreshPatients:s}}}}]);