import{W as l,r as d,j as r,Y as g,a as h,B as n,y as f}from"./app-iSaceW-w.js";import{P as x}from"./Page-D3-6yXQQ.js";import{W as j}from"./Webmaster-BDRuIyCP.js";import{G as b}from"./Grid-_pNbO1TJ.js";import{C}from"./CustomTextInput-CSUVomlM.js";import{C as E}from"./CustomTextarea-BxqmGhCO.js";import{h as G}from"./button-CKaYqt4E.js";import"./createLucideIcon-DYftpbR_.js";import"./facebook-Bs4KOaz3.js";import"./save-B3pCxu4h.js";import"./transition-Dt4_TdKA.js";import"./render-BuZh8UEy.js";import"./disabled-CQAS_IKZ.js";const M=({auth:m,menu:c})=>{const e=l({name:"",description:""}),[s,o]=d.useState(!1),i=a=>{const{name:t,value:u}=a.target;t in e.data&&e.setData(t,u)},p=async a=>{a.preventDefault(),o(!0),e.post(route("programs.groups.store"),{onSuccess:()=>{n.success("Group of programs has been created successfully"),f.get(route("programs.index"))},onError:t=>{n.error("Error creating the group of programs"),console.error("Error:",t)},onFinish:()=>{o(!1)}})};return r.jsxs(r.Fragment,{children:[r.jsx(g,{title:"Create a group of programs"}),r.jsx(j,{user:m.user,menu:c,breadcrumb:r.jsxs(r.Fragment,{children:[r.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:r.jsx(h,{href:route("programs.index"),children:"Programs"})}),r.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:"Groups"}),r.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]}),children:r.jsx(x,{title:"Create a group of programs",header:r.jsx(r.Fragment,{}),children:r.jsxs(b,{title:"Groups information",children:[r.jsx(C,{title:"Name",value:e.data.name,name:"name",description:"Enter the name of the group",required:!0,handleChange:i,instructions:"Minimum 5 caracters"}),r.jsx(E,{title:"Description",value:e.data.description,name:"description",description:"Enter the description of the group",required:!1,handleChange:i,instructions:"Not required"}),r.jsx(G,{className:"btn btn-primary",disabled:s,onClick:p,children:s?"Creating":"Create"})]})})})]})};export{M as default};