import{W as q,r as R,j as e,Y as E,a as S,B as g,y as w}from"./app-Dv4x750U.js";import{P}from"./Page-CpGT0mBr.js";import{W as D}from"./Webmaster-B2ZlsisC.js";import{G as m}from"./Grid-kjG5VI4E.js";import{C as k}from"./CustomTextInput-CBarfxLU.js";import{C as F}from"./CustomTextarea-CVhyNFbK.js";import{C as j}from"./CustomSelect-B_TWCTtL.js";import{C as M}from"./CustomNumber-Cwp5QNyh.js";import{h as c}from"./button-BHb-dNEz.js";import"./createLucideIcon-CAQfqdLI.js";import"./facebook-DtKD0-Su.js";import"./save-CWOh1M9R.js";import"./transition-hAnje8nX.js";import"./render-DwPfs_u0.js";import"./disabled-CQEnSM79.js";const V=({auth:v,groups:N,templates_groups:d,menu:_})=>{const a=q({name:"",description:"",group_id:0,reuse_after:0,unit_of_time:0,program_records:[]}),[u,p]=R.useState(!1),n=t=>{const{name:s,value:i}=t.target;a.setData(s,i)},h=[{id:1,name:"Seconds"},{id:60,name:"Minutes"},{id:3600,name:"Hours"},{id:86400,name:"Days"}],b=async t=>{t.preventDefault(),p(!0),a.post(route("programs.store"),{forceFormData:!0,onSuccess:()=>{g.success("Program has been created successfully"),w.get(route("programs.index"))},onError:s=>{g.error("Error creating the program"),console.error("Error:",s)},onFinish:()=>{p(!1)}})},C=t=>{t.preventDefault();const s=[{id:Date.now(),group:0,template:0,send_after:0,unit_of_time:0}];a.setData(i=>({...i,program_records:[...i.program_records,...s]}))},y=t=>{a.setData(s=>({...s,program_records:s.program_records.filter((i,o)=>o!==t)}))},l=(t,s,i)=>{const o=[...a.data.program_records];o[t]={...o[t],[s]:i},a.setData("program_records",o)},x=e.jsx(c,{className:"btn btn-primary mt-4",disabled:u,onClick:b,children:u?"Creating":"Create"});return e.jsxs(e.Fragment,{children:[e.jsx(E,{title:"Create a program"}),e.jsx(D,{user:v.user,menu:_,breadcrumb:e.jsxs(e.Fragment,{children:[e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(S,{href:route("programs.index"),children:"Programs"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]}),children:e.jsxs(P,{title:"Create a program",header:e.jsx(e.Fragment,{}),children:[e.jsxs(m,{title:"Program's information",header:x,children:[e.jsx(k,{title:"Name",value:a.data.name,name:"name",description:"Enter the name of the program",required:!0,handleChange:n,instructions:"Minimum 5 characters"}),e.jsx(F,{title:"Description",value:a.data.description,name:"description",description:"Enter the description of the program",required:!1,handleChange:n,instructions:"Not required"}),e.jsx(j,{title:"Programs group",elements:N,value:a.data.group_id,name:"group_id",description:"Enter the group you want to assign the program to",required:!0,handleChange:n,instructions:"Required"})]}),e.jsxs(m,{title:"Reuse after",children:[e.jsx(M,{title:"Reuse after",value:a.data.reuse_after,name:"reuse_after",description:"Enter the time you want to reuse the program after",required:!1,handleChange:n,instructions:"Required"}),e.jsx(j,{title:"Unit of time",elements:h,value:a.data.unit_of_time,name:"unit_of_time",description:"Enter the unit of time",required:!1,handleChange:n,instructions:"Not required"})]}),e.jsxs(m,{title:"Program's schedule",header:e.jsx(c,{className:"btn btn-primary",onClick:C,children:"More records"}),children:[a.data.program_records.map((t,s)=>{var i,o,f;return e.jsxs("div",{className:"form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0 pb-4",children:[e.jsx("div",{className:"form-label xl:w-64 xl:!mr-10",children:e.jsxs("div",{className:"text-left",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsxs("div",{className:"font-medium",children:["Schedule ",s+1]}),e.jsx("div",{className:"ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md",children:"Required"})]}),e.jsx("div",{className:"leading-relaxed text-slate-500 text-xs mt-3",children:"description"})]})}),e.jsxs("div",{className:"w-full mt-3 xl:mt-0 flex-1",children:[e.jsx("input",{type:"number",required:!0,className:"form-control",value:t.send_after||"",onChange:r=>l(s,"send_after",+r.target.value)}),e.jsx("div",{className:"form-help text-right mt-2",children:"Send after"})]}),e.jsxs("div",{className:"w-full mt-3 xl:mt-0 flex-1 ms-2",children:[e.jsxs("select",{className:"form-control",value:t.unit_of_time||"",required:!0,onChange:r=>l(s,"unit_of_time",+r.target.value),children:[e.jsx("option",{value:"",children:"Select the unit of time"}),h.map(r=>e.jsx("option",{value:r.id,children:r.name},r.id))]}),e.jsx("div",{className:"form-help text-right mt-2",children:"Unit of time"})]}),e.jsxs("div",{className:"w-full mt-3 xl:mt-0 flex-1 ms-2",children:[e.jsxs("select",{className:"form-control",value:typeof t.group=="number"?t.group:((i=t.group)==null?void 0:i.id)||"",onChange:r=>l(s,"group",+r.target.value),children:[e.jsx("option",{value:"",children:"Select the group of templates"}),d.map(r=>e.jsx("option",{value:r.id,children:r.name},r.id))]}),e.jsx("div",{className:"form-help text-right mt-2",children:"Optional"})]}),e.jsxs("div",{className:"w-full mt-3 xl:mt-0 flex-1 ms-2",children:[e.jsxs("select",{className:"form-control",value:typeof t.template=="number"?t.template:((o=t.template)==null?void 0:o.id)||"",onChange:r=>l(s,"template",+r.target.value),children:[e.jsx("option",{value:"",children:"Select the templates"}),(f=d.find(r=>r.id===t.group))==null?void 0:f.templates.map(r=>e.jsx("option",{value:r.id,children:r.name},r.id))]}),e.jsx("div",{className:"form-help text-right mt-2",children:"Optional"})]}),e.jsx("div",{className:"mt-3 xl:mt-0 ms-2",children:e.jsx(c,{className:"btn btn-primary",onClick:()=>y(s),children:"-"})})]},t.id)}),x]})]})})]})};export{V as default};