import{W as k,r as _,j as e,Y as C,a as b,B as u,y}from"./app-CoGkC2bG.js";import{P as q}from"./Page-C1iDvIJ3.js";import{W as E}from"./Webmaster-DzaoiDW4.js";import{G as c}from"./Grid-xE7hdxDg.js";import{C as R}from"./CustomTextInput-5kihx-pm.js";import{C as v}from"./CustomTextarea-BIdTfW5z.js";import{C as i}from"./CustomSelect-Int7GhRW.js";import{h as F}from"./button-GRs9iaZu.js";import"./createLucideIcon-Cv6T-TrY.js";import"./facebook-Bpn1sDJL.js";import"./save-D4AydXgc.js";import"./transition-CuUARc3Z.js";import"./render-PL9Ty8zI.js";import"./disabled-CcWblPeO.js";const H=({menu:d,auth:p,categories:l,programsGroup:g,templatesGroup:h,pages:x})=>{const r=k({name:"",description:"",category:0,programs_group_id:0,templates_group_id:0,facebook_page_id:0}),[n,o]=_.useState(!1),t=s=>{const{name:a,value:j}=s.target;a in r.data&&r.setData(a,j)},f=async s=>{s.preventDefault(),o(!0),r.post(route("remarketings.store"),{onSuccess:()=>{u.success("Remarketing has been created successfully"),y.get(route("remarketings.index"))},onError:a=>{u.error("Error creating the remarketing"),console.error("Error:",a)},onFinish:()=>{o(!1)}})},m=e.jsx(F,{className:"btn btn-primary",disabled:n,onClick:f,children:n?"Creating":"Create"});return e.jsxs(e.Fragment,{children:[e.jsx(C,{title:"Create a remarketing"}),e.jsx(E,{user:p.user,menu:d,breadcrumb:e.jsxs(e.Fragment,{children:[e.jsx("li",{className:"breadcrumb-item","aria-current":"page",children:e.jsx(b,{href:route("remarketings.index"),children:"Remarketings"})}),e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Create"})]}),children:e.jsxs(q,{title:"Create a remarketing",header:e.jsx(e.Fragment,{}),children:[e.jsxs(c,{title:"Remarketing information",header:e.jsx(e.Fragment,{children:m}),children:[e.jsx(R,{title:"Name",value:r.data.name,name:"name",description:"Enter the name of the remarketing",required:!0,handleChange:t,instructions:"Minimum 5 caracters"}),e.jsx(i,{title:"Category",value:r.data.category,elements:l,name:"category",description:"Enter the category you want to affect the remarketing to",required:!0,handleChange:t,instructions:"Required"}),e.jsx(v,{title:"Description",value:r.data.description,name:"description",description:"Enter the description of the remarketing",required:!1,handleChange:t,instructions:"Not required"})]}),e.jsxs(c,{title:"Remarketing details",children:[e.jsx(i,{title:"Programs group",value:r.data.programs_group_id,elements:g,name:"programs_group_id",description:"Enter the group of programs you want to use",required:!0,handleChange:t,instructions:"Required"}),e.jsx(i,{title:"Templates group",value:r.data.templates_group_id,elements:h,name:"templates_group_id",description:"Enter the group of templates you want to use",required:!0,handleChange:t,instructions:"Required"}),e.jsx(i,{title:"Page",value:r.data.facebook_page_id,elements:x,name:"facebook_page_id",description:"Enter the page you want to use",required:!0,handleChange:t,instructions:"Required"}),m]})]})})]})};export{H as default};