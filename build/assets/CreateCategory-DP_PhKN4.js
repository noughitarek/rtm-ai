import{W as u,r as g,j as e,Y as p,a as h,B as o,y as f}from"./app-CoB9Ziz0.js";import{P as x}from"./Page-B5eJ1SFU.js";import{W as C}from"./Webmaster-DOCAQRAo.js";import{G as j}from"./Grid-Dwvxd1W6.js";import{C as b}from"./CustomTextInput-BhUePAyn.js";import{C as y}from"./CustomTextarea-D029gKod.js";import{h as k}from"./button-DwrqIkt4.js";import"./createLucideIcon-ci5mlzAZ.js";import"./facebook-Q5BwZqPT.js";import"./save-BG1Ty0ow.js";import"./transition-CuWQUnR_.js";import"./render-C81f1NV3.js";import"./disabled-Dqoc_taz.js";const I=({auth:m,menu:c})=>{const r=u({name:"",description:""}),[s,i]=g.useState(!1),n=a=>{const{name:t,value:d}=a.target;t in r.data&&r.setData(t,d)},l=async a=>{a.preventDefault(),i(!0),r.post(route("remarketings.categories.store"),{onSuccess:()=>{o.success("Category of remarketings has been created successfully"),f.get(route("remarketings.index"))},onError:t=>{o.error("Error creating the category of remarketings"),console.error("Error:",t)},onFinish:()=>{i(!1)}})};return e.jsxs(e.Fragment,{children:[e.jsx(p,{title:"Create a category of remarketings"}),e.jsx(C,{user:m.user,menu:c,breadcrumb:e.jsxs(e.Fragment,{children:[e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(h,{href:route("remarketings.index"),children:"Remarketings"})}),e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:"Categories"}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]}),children:e.jsx(x,{title:"Create a category of remarketings",header:e.jsx(e.Fragment,{}),children:e.jsxs(j,{title:"Categories information",children:[e.jsx(b,{title:"Name",value:r.data.name,name:"name",description:"Enter the name of the category",required:!0,handleChange:n,instructions:"Minimum 5 caracters"}),e.jsx(y,{title:"Description",value:r.data.description,name:"description",description:"Enter the description of the category",required:!1,handleChange:n,instructions:"Not required"}),e.jsx(k,{className:"btn btn-primary",disabled:s,onClick:l,children:s?"Creating":"Create"})]})})})]})};export{I as default};