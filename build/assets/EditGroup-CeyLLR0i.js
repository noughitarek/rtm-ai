import{W as u,r as h,j as e,Y as x,a as f,B as m,y as g}from"./app-Dv4x750U.js";import{P as j}from"./Page-CpGT0mBr.js";import{W as b}from"./Webmaster-B2ZlsisC.js";import{G as E}from"./Grid-kjG5VI4E.js";import{C as G}from"./CustomTextInput-CBarfxLU.js";import{C as N}from"./CustomTextarea-CVhyNFbK.js";import{h as C}from"./button-BHb-dNEz.js";import"./createLucideIcon-CAQfqdLI.js";import"./facebook-DtKD0-Su.js";import"./save-CWOh1M9R.js";import"./transition-hAnje8nX.js";import"./render-DwPfs_u0.js";import"./disabled-CQEnSM79.js";const R=({auth:c,group:r,menu:p})=>{const t=u({name:r.name,description:r.description}),[i,n]=h.useState(!1),o=s=>{const{name:a,value:d}=s.target;a in t.data&&t.setData(a,d),console.log(t.data)},l=async s=>{s.preventDefault(),n(!0),t.put(route("templates.groups.update",{group:r}),{onSuccess:()=>{m.success("Group of templates has been updated successfully"),g.get(route("templates.index"))},onError:a=>{m.error("Error updating the group of templates"),console.error("Error:",a)},onFinish:()=>{n(!1)}})};return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"Edit a group of templates"}),e.jsx(b,{user:c.user,menu:p,breadcrumb:e.jsxs(e.Fragment,{children:[e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(f,{href:route("templates.index"),children:"Templates"})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:"Groups"}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:r.name}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Edit"})]}),children:e.jsx(j,{title:"Editing a group of templates",header:e.jsx(e.Fragment,{}),children:e.jsxs(E,{title:"Groups information",children:[e.jsx(G,{title:"Name",value:t.data.name,name:"name",description:"Enter the name of the group",required:!0,handleChange:o,instructions:"Minimum 5 caracters"}),e.jsx(N,{title:"Description",value:t.data.description,name:"description",description:"Enter the description of the group",required:!1,handleChange:o,instructions:"Not required"}),e.jsx(C,{className:"btn btn-primary",disabled:i,onClick:l,children:i?"Editing":"Edit"})]})})})]})};export{R as default};