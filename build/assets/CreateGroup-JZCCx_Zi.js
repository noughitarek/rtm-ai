import{W as u,r as d,j as e,Y as h,a as f,B as n,y as x}from"./app-sPHp3G4S.js";import{P as g}from"./Page-BA3iDHqV.js";import{W as j}from"./Webmaster-CdSeszNx.js";import{G as b}from"./Grid-CsHMcWqF.js";import{C}from"./CustomTextInput-CdGwef30.js";import{C as E}from"./CustomTextarea-BUz7k043.js";import{h as G}from"./button-CgMIfrY9.js";import"./createLucideIcon-B8V0A6r4.js";import"./facebook-DPBV-q3I.js";import"./save-DMilDLG5.js";import"./transition-CK8VNkAB.js";import"./render-BG-RrTOg.js";import"./disabled-iinq6otB.js";const M=({auth:m,menu:c})=>{const r=u({name:"",description:""}),[s,i]=d.useState(!1),o=a=>{const{name:t,value:l}=a.target;t in r.data&&r.setData(t,l)},p=async a=>{a.preventDefault(),i(!0),r.post(route("templates.groups.store"),{onSuccess:()=>{n.success("Group of templates has been created successfully"),x.get(route("templates.index"))},onError:t=>{n.error("Error creating the group of templates"),console.error("Error:",t)},onFinish:()=>{i(!1)}})};return e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Create a group of templates"}),e.jsx(j,{user:m.user,menu:c,breadcrumb:e.jsxs(e.Fragment,{children:[e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(f,{href:route("templates.index"),children:"Templates"})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:"Groups"}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]}),children:e.jsx(g,{title:"Create a group of templates",header:e.jsx(e.Fragment,{}),children:e.jsxs(b,{title:"Groups information",children:[e.jsx(C,{title:"Name",value:r.data.name,name:"name",description:"Enter the name of the group",required:!0,handleChange:o,instructions:"Minimum 5 caracters"}),e.jsx(E,{title:"Description",value:r.data.description,name:"description",description:"Enter the description of the group",required:!1,handleChange:o,instructions:"Not required"}),e.jsx(G,{className:"btn btn-primary",disabled:s,onClick:p,children:s?"Creating":"Create"})]})})})]})};export{M as default};