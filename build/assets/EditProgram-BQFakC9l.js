import{W as q,r as S,j as e,Y as w,a as D,B as v,y as P}from"./app-CJlbE-LF.js";import{P as k}from"./Page-yreOlTT-.js";import{W as F}from"./Webmaster-DrX7rw6O.js";import{G as c,C as M}from"./CustomTextarea-DZCPOzLv.js";import{C as U}from"./CustomTextInput-rk9wK1ad.js";import{C as N}from"./CustomSelect-BDqCOK27.js";import{C as W}from"./CustomNumber-ItUGFHPb.js";import{h as u}from"./button-Bh2k_5J8.js";import"./createLucideIcon-jxw-JyEv.js";import"./facebook-DXNOz92s.js";import"./save-DB3l4sw9.js";import"./transition-NcVCD9Y2.js";import"./render-BcGX6XVe.js";import"./disabled-BPakW4IL.js";const X=({menu:b,auth:_,groups:C,templates_groups:p,program:n})=>{console.log(n.records);const a=q({name:n.name,description:n.description,group_id:n.group.id,reuse_after:n.reuse_after,unit_of_time:1,program_records:n.records});console.log(a.data);const[h,x]=S.useState(!1),l=t=>{const{name:s,value:o}=t.target;a.setData(s,o)},f=[{id:1,name:"Seconds"},{id:60,name:"Minutes"},{id:3600,name:"Hours"},{id:86400,name:"Days"}],E=async t=>{t.preventDefault(),x(!0),a.post(route("programs.update",{program:n}),{forceFormData:!0,onSuccess:()=>{v.success("Program has been edited successfully"),P.get(route("programs.index"))},onError:s=>{v.error("Error editing the program"),console.error("Error:",s)},onFinish:()=>{x(!1)}})},y=t=>{t.preventDefault();const s=[{id:Date.now(),group:0,template:0,send_after:0,unit_of_time:0}];a.setData(o=>({...o,program_records:[...o.program_records,...s]}))},R=t=>{a.setData(s=>({...s,program_records:s.program_records.filter((o,i)=>i!==t)}))},m=(t,s,o)=>{if(s=="group"&&o===0){const i=[...a.data.program_records],{template:d,...r}=i[t];i[t]={...r},i[t]={...i[t],[s]:o},a.setData("program_records",i)}else{const i=[...a.data.program_records];i[t]={...i[t],[s]:o},a.setData("program_records",i)}},g=e.jsx(u,{className:"btn btn-primary mt-4",disabled:h,onClick:E,children:h?"Editing":"Edit"});return console.log(n),e.jsxs(e.Fragment,{children:[e.jsx(w,{title:"Edit a program"}),e.jsx(F,{user:_.user,menu:b,breadcrumb:e.jsxs(e.Fragment,{children:[e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(D,{href:route("programs.index"),children:"Programs"})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:n.group.name}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:n.name}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]}),children:e.jsxs(k,{title:"Edit a program",header:e.jsx(e.Fragment,{}),children:[e.jsxs(c,{title:"Program's information",header:g,children:[e.jsx(U,{title:"Name",value:a.data.name,name:"name",description:"Enter the name of the program",required:!0,handleChange:l,instructions:"Minimum 5 characters"}),e.jsx(M,{title:"Description",value:a.data.description,name:"description",description:"Enter the description of the program",required:!1,handleChange:l,instructions:"Not required"}),e.jsx(N,{title:"Programs group",elements:C,value:a.data.group_id,name:"group_id",description:"Enter the group you want to assign the program to",required:!0,handleChange:l,instructions:"Required"})]}),e.jsxs(c,{title:"Reuse after",children:[e.jsx(W,{title:"Reuse after",value:a.data.reuse_after,name:"reuse_after",description:"Enter the time you want to reuse the program after",required:!0,handleChange:l,instructions:"Required"}),e.jsx(N,{title:"Unit of time",elements:f,value:a.data.unit_of_time,name:"unit_of_time",description:"Enter the unit of time",required:!0,handleChange:l,instructions:"Required"})]}),e.jsxs(c,{title:"Program's schedule",header:e.jsx(u,{className:"btn btn-primary",onClick:y,children:"More records"}),children:[a.data.program_records.map((t,s)=>{var o,i,d;return e.jsxs("div",{className:"form-inline items-start flex-col xl:flex-row mt-5 pt-5 first:mt-0 first:pt-0 pb-4",children:[e.jsx("div",{className:"form-label xl:w-64 xl:!mr-10",children:e.jsxs("div",{className:"text-left",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsxs("div",{className:"font-medium",children:["Schedule ",s+1]}),e.jsx("div",{className:"ml-2 px-2 py-0.5 bg-slate-200 text-slate-600 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md",children:"Required"})]}),e.jsx("div",{className:"leading-relaxed text-slate-500 text-xs mt-3",children:"description"})]})}),e.jsxs("div",{className:"w-full mt-3 xl:mt-0 flex-1",children:[e.jsx("input",{type:"number",className:"form-control",value:t.send_after||"",onChange:r=>m(s,"send_after",+r.target.value)}),e.jsx("div",{className:"form-help text-right mt-2",children:"Send after"})]}),e.jsxs("div",{className:"w-full mt-3 xl:mt-0 flex-1 ms-2",children:[e.jsxs("select",{className:"form-control",value:1,onChange:r=>m(s,"unit_of_time",+r.target.value),children:[e.jsx("option",{value:"",children:"Select the unit of time"}),f.map(r=>e.jsx("option",{value:r.id,children:r.name},r.id))]}),e.jsx("div",{className:"form-help text-right mt-2",children:"Unit of time"})]}),e.jsxs("div",{className:"w-full mt-3 xl:mt-0 flex-1 ms-2",children:[e.jsxs("select",{className:"form-control",defaultValue:typeof t.group=="number"?t.group:((o=t.group)==null?void 0:o.id)||"",onChange:r=>m(s,"group",+r.target.value),children:[e.jsx("option",{value:"",children:"Select the group of templates"}),p.map(r=>e.jsx("option",{value:r.id,children:r.name},r.id))]}),e.jsx("div",{className:"form-help text-right mt-2",children:"Optional"})]}),e.jsxs("div",{className:"w-full mt-3 xl:mt-0 flex-1 ms-2",children:[e.jsxs("select",{className:"form-control",defaultValue:typeof t.template=="number"?t.template:((i=t.template)==null?void 0:i.id)||"",onChange:r=>m(s,"template",+r.target.value),children:[e.jsx("option",{value:"",children:"Select the templates"}),(d=p.find(r=>{var j;return r.id===(typeof t.group=="number"?t.group:(j=t.group)==null?void 0:j.id)}))==null?void 0:d.templates.map(r=>e.jsx("option",{value:r.id,children:r.name},r.id))]}),e.jsx("div",{className:"form-help text-right mt-2",children:"Optional"})]}),e.jsx("div",{className:"mt-3 xl:mt-0 ms-2",children:e.jsx(u,{className:"btn btn-primary",onClick:()=>R(s),children:"-"})})]},t.id)}),g]})]})})]})};export{X as default};