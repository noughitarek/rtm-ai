import{r as s,j as e,B as l}from"./app-sPHp3G4S.js";import{C as d}from"./CustomTextInput-CdGwef30.js";import{d as b}from"./index-Cdw8x7oD.js";import{R as f}from"./react-loading-LsYDxsTW.js";import{C as c}from"./CustomNumber-CGGWeL9m.js";import{S as j}from"./save-DMilDLG5.js";import"./createLucideIcon-B8V0A6r4.js";const A=({settings:i})=>{const[a,p]=s.useState(i.id),[m,g]=s.useState(i.title),[o,x]=s.useState(i.minimum_pourcentage),[u,h]=s.useState(i.max_per_minute),[r,n]=s.useState(!1),v=async()=>{n(!0),b.Inertia.post(route("settings.save"),{"settings.id":a,"settings.title":m,"settings.minimum_pourcentage":o,"settings.max_per_minute":u},{onSuccess:()=>{l.success("Settings saved successfully"),n(!1)},onError:t=>{l.error("Failed to save settings",t),n(!1)}})};return e.jsx("div",{className:"grid grid-cols-12 gap-6",children:e.jsxs("div",{className:"intro-y box col-span-12 2xl:col-span-6",children:[e.jsxs("div",{className:"flex items-center px-5 py-5 sm:py-3 border-b border-slate-200/60 dark:border-darkmode-400",children:[e.jsx("h2",{className:"font-medium text-base mr-auto",children:"General settings"}),e.jsxs("button",{onClick:v,disabled:r,className:"btn btn-outline-secondary hidden sm:flex",children:[!r&&e.jsxs(e.Fragment,{children:[e.jsx(j,{className:"w-4 h-4 mr-2"})," Save"]}),r&&e.jsxs(e.Fragment,{children:[e.jsx(f,{type:"spin",color:"green",height:18,width:18}),"  Saving"]})]})]}),e.jsxs("div",{className:"p-5",children:[e.jsx(d,{title:"Id",description:"An id for this website",instructions:"required",name:"settings.id",value:a,handleChange:t=>p(t.target.value),required:!0}),e.jsx(d,{title:"Title",description:"A title for this website",instructions:"required",name:"settings.title",value:m,handleChange:t=>g(t.target.value),required:!0}),e.jsx(c,{title:"Minimum pourcentage",description:"A title for this website",instructions:"required",name:"settings.minimum_pourcentage",value:Number(o),handleChange:t=>x(t.target.value),required:!0}),e.jsx(c,{title:"Max messages per minute",description:"A title for this website",instructions:"required",name:"settings.max_per_minute",value:Number(u),handleChange:t=>h(t.target.value),required:!0})]})]})})};export{A as default};