import{r as n,j as e,Y as m}from"./app-CoB9Ziz0.js";import{P as x}from"./Page-B5eJ1SFU.js";import{W as h,C as a}from"./Webmaster-DOCAQRAo.js";import{G as j}from"./Grid-Dwvxd1W6.js";import"./createLucideIcon-ci5mlzAZ.js";import"./button-DwrqIkt4.js";import"./disabled-Dqoc_taz.js";import"./render-C81f1NV3.js";import"./facebook-Q5BwZqPT.js";import"./save-BG1Ty0ow.js";import"./transition-CuWQUnR_.js";const i=r=>new Date(r).toLocaleString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}),E=({auth:r,menu:l,conversation:s})=>{var c,d;return n.useState(!1),e.jsxs(e.Fragment,{children:[e.jsx(m,{title:"Pages"}),e.jsx(h,{user:r.user,menu:l,breadcrumb:e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Pages"}),children:e.jsx(x,{title:"Pages",header:e.jsx(e.Fragment,{}),children:e.jsxs(j,{title:"Assignments for",header:e.jsx(e.Fragment,{children:s.name}),children:[((c=s.remarketing_messages)==null?void 0:c.length)==0?"No program is assigned to this conversation":"",((d=s.remarketing_messages)==null?void 0:d.length)!=0?e.jsxs("table",{className:"table table-report -mt-2",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"whitespace-nowrap",children:e.jsx("input",{className:"form-check-input",type:"checkbox"})}),e.jsx("th",{children:"Event"}),e.jsx("th",{children:"Expected sending date"}),e.jsx("th",{children:"Sent at"}),e.jsx("th",{children:"Group of Templates"}),e.jsx("th",{children:"Template"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{className:"w-10",children:e.jsx("input",{className:"form-check-input",type:"checkbox"})}),e.jsx("td",{children:"Starting:"}),e.jsx("td",{children:e.jsxs("div",{className:"flex items-center mt-1",children:[e.jsx(a,{className:"h-4 w-4 text-gray-500 mr-1"}),e.jsx("span",{className:"text-gray-500",children:i(s.started_at)})]})}),e.jsx("td",{}),e.jsx("td",{}),e.jsx("td",{})]}),s.remarketing_messages&&s.remarketing_messages.map(t=>e.jsxs("tr",{children:[e.jsx("td",{className:"w-10",children:e.jsx("input",{className:"form-check-input",type:"checkbox"})}),e.jsx("td",{children:"Remarketing message:"}),e.jsx("td",{children:e.jsxs("div",{className:"flex items-center mt-1",children:[e.jsx(a,{className:"h-4 w-4 text-gray-500 mr-1"}),e.jsx("span",{className:"text-gray-500",children:i(t.send_at)})]})}),e.jsx("td",{children:e.jsx("div",{className:"flex items-center mt-1",children:t.sent_at?e.jsxs(e.Fragment,{children:[e.jsx(a,{className:"h-4 w-4 text-gray-500 mr-1"}),e.jsx("span",{className:"text-gray-500",children:i(t.sent_at)})]}):"Not yet"})}),e.jsx("td",{children:t.templates_group&&t.templates_group.name}),e.jsx("td",{children:t.template&&t.template.name})]},t.id))]})]}):""]})})})]})};export{E as default};