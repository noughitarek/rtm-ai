import{r as i,j as e,W as P,a as $,B as C,y as I,Y as M}from"./app-CoB9Ziz0.js";import{H as T,C as k,B,A as _,b as S,U as H,j as A,k as G,W,e as Y}from"./Webmaster-DOCAQRAo.js";import{P as q}from"./Page-B5eJ1SFU.js";import{D as J}from"./DeleteModal-Ge6O62_B.js";import{$ as O,b as R,h as z}from"./button-DwrqIkt4.js";import{a as D}from"./disabled-Dqoc_taz.js";import{W as E,n as K,o as Q,H as L,D as V}from"./render-C81f1NV3.js";import{G as X}from"./Modal-DR_0QPnR.js";import{y as Z}from"./transition-CuWQUnR_.js";import"./createLucideIcon-ci5mlzAZ.js";import"./facebook-Q5BwZqPT.js";import"./save-BG1Ty0ow.js";let ee=i.createContext(void 0);function U(){return i.useContext(ee)}let y=i.createContext(null);y.displayName="LabelContext";function F(){let r=i.useContext(y);if(r===null){let a=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(a,F),a}return r}function se(r){var a,n,c;let t=(n=(a=i.useContext(y))==null?void 0:a.value)!=null?n:void 0;return((c=void 0)!=null?c:0)>0?[t,...r].filter(Boolean).join(" "):t}let te="label";function ae(r,a){var n;let c=i.useId(),t=F(),h=U(),o=D(),{id:d=`headlessui-label-${c}`,htmlFor:x=h??((n=t.props)==null?void 0:n.htmlFor),passive:p=!1,...u}=r,N=Z(a);K(()=>t.register(d),[d,t.register]);let f=Q(g=>{let b=g.currentTarget;if(b instanceof HTMLLabelElement&&g.preventDefault(),t.props&&"onClick"in t.props&&typeof t.props.onClick=="function"&&t.props.onClick(g),b instanceof HTMLLabelElement){let m=document.getElementById(b.htmlFor);if(m){let v=m.getAttribute("disabled");if(v==="true"||v==="")return;let w=m.getAttribute("aria-disabled");if(w==="true"||w==="")return;(m instanceof HTMLInputElement&&(m.type==="radio"||m.type==="checkbox")||m.role==="radio"||m.role==="checkbox"||m.role==="switch")&&m.click(),m.focus({preventScroll:!0})}}}),j=o||!1,s=i.useMemo(()=>({...t.slot,disabled:j}),[t.slot,j]),l={ref:N,...t.props,id:d,htmlFor:x,onClick:f};return p&&("onClick"in l&&(delete l.htmlFor,delete l.onClick),"onClick"in u&&delete u.onClick),L({ourProps:l,theirProps:u,slot:s,defaultTag:x?te:"div",name:t.name||"Label"})}let re=E(ae);Object.assign(re,{});let le="input";function ie(r,a){let n=i.useId(),c=U(),t=D(),{id:h=c||`headlessui-input-${n}`,disabled:o=t||!1,autoFocus:d=!1,invalid:x=!1,...p}=r,u=se(),N=X(),{isFocused:f,focusProps:j}=O({autoFocus:d}),{isHovered:s,hoverProps:l}=R({isDisabled:o}),g=V({ref:a,id:h,"aria-labelledby":u,"aria-describedby":N,"aria-invalid":x?"":void 0,disabled:o||void 0,autoFocus:d},j,l),b=i.useMemo(()=>({disabled:o,invalid:x,hover:s,focus:f,autofocus:d}),[o,x,s,f,d]);return L({ourProps:g,theirProps:p,slot:b,defaultTag:le,name:"Input"})}let ne=E(ie);const ce=({start:r,end:a,total:n})=>e.jsxs("div",{className:"hidden xl:block mx-auto text-slate-500",children:["Showing ",r," to ",a," on ",n," entries"]}),oe=({users:r,searchTerm:a})=>{const[n,c]=i.useState(!1),[t,h]=i.useState(!1),{data:o,setData:d,delete:x}=P({user:0}),[p,u]=i.useState(r);i.useEffect(()=>{if(a){const s=r.filter(l=>l.name&&l.name.toLowerCase().includes(a.toLowerCase())||l.role&&l.role.toLowerCase().includes(a.toLowerCase())||l.created_by&&l.created_by.name.toLowerCase().includes(a.toLowerCase()));u(s)}else u(r)},[r,a]);const N=(s,l)=>{s.preventDefault(),d({user:l}),c(!0)},f=()=>{h(!0),x(route("users.destroy",{user:o.user}),{data:{user:o.user},onSuccess:()=>{C.success("Utilisateur supprimé avec succès"),I.get(route("users.index"))},onError:s=>{C.error("Erreur lors de la suppression de l'utilisateur"),h(!1),console.error("Error:",s)}}),c(!1)},j=()=>{c(!1)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"intro-y col-span-12 overflow-auto 2xl:overflow-visible",children:[e.jsxs("table",{className:"table table-report -mt-2",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"whitespace-nowrap",children:e.jsx("input",{className:"form-check-input",type:"checkbox"})}),e.jsx("th",{className:"whitespace-nowrap",children:"#"}),e.jsx("th",{className:"text-center whitespace-nowrap",children:"Information"}),e.jsx("th",{className:"text-center whitespace-nowrap",children:"Permissions"}),e.jsx("th",{className:"text-center whitespace-nowrap",children:"Created"}),e.jsx("th",{className:"text-center whitespace-nowrap",children:"Action"})]})}),e.jsx("tbody",{children:p.map(s=>e.jsxs("tr",{className:"intro-x",children:[e.jsx("td",{className:"w-10",children:e.jsx("input",{className:"form-check-input",type:"checkbox"})}),e.jsx("td",{className:"!py-3.5",children:e.jsx("div",{className:"flex items-center",children:e.jsxs("div",{className:"ml-4",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(T,{className:"h-4 w-4 text-gray-500 mr-1"}),e.jsx("span",{className:"text-gray-500",children:s.id})]}),e.jsxs("div",{className:"flex items-center mt-1",children:[e.jsx(k,{className:"h-4 w-4 text-gray-500 mr-1"}),e.jsx("span",{className:"text-gray-500",children:new Date(s.updated_at).toLocaleString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})})]})]})})}),e.jsx("td",{className:"py-3.5",children:e.jsx("div",{className:"flex items-center",children:e.jsxs("div",{className:"ml-4",children:[e.jsxs("div",{className:"flex items-center mt-1",children:[e.jsx(B,{className:"h-4 w-4 text-gray-500 mr-1"}),e.jsx("span",{className:"text-gray-500",children:s.name})]}),e.jsxs("div",{className:"flex items-center mt-1",children:[e.jsx(_,{className:"h-4 w-4 text-gray-500 mr-1"}),e.jsx("span",{className:"text-gray-500",children:s.email})]})]})})}),e.jsx("td",{className:"!py-3.5",children:e.jsx("div",{className:"flex items-center",children:e.jsxs("div",{className:"ml-4",children:[e.jsxs("div",{className:"flex items-center mt-1",children:[e.jsx(S,{className:"h-4 w-4 text-gray-500 mr-1"}),e.jsx("span",{className:"text-gray-500",children:s.role})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(S,{className:"h-4 w-4 text-gray-500 mr-1"}),e.jsx("span",{className:"text-gray-500",children:s.permissions})]})]})})}),e.jsx("td",{className:"py-3.5",children:e.jsx("div",{className:"flex items-center",children:e.jsxs("div",{className:"ml-4",children:[e.jsxs("div",{className:"flex items-center mt-1",children:[e.jsx(H,{className:"h-4 w-4 text-gray-500 mr-1"}),e.jsx("span",{className:"text-gray-500",children:s.created_by?s.created_by.name:"System"})]}),e.jsxs("div",{className:"flex items-center mt-1",children:[e.jsx(k,{className:"h-4 w-4 text-gray-500 mr-1"}),e.jsx("span",{className:"text-gray-500",children:new Date(s.created_at).toLocaleString("en-GB",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})})]})]})})}),e.jsx("td",{className:"table-report__action w-56",children:e.jsxs("div",{className:"flex justify-center items-center",children:[e.jsxs($,{className:"flex items-center mr-3",href:route("users.edit",{user:s.id}),children:[e.jsx(A,{className:"w-4 h-4 mr-1"})," Modifier"]}),e.jsxs(z,{className:"flex items-center text-danger",onClick:l=>N(l,s.id),children:[e.jsx(G,{className:"w-4 h-4 mr-1"})," Supprimer"]})]})})]},s.id))})]}),e.jsx(J,{showDeleteModal:n,handleDeleteCancel:j,handleDeleteConfirm:f,deleting:t})]})})},ve=({auth:r,menu:a,users:n,from:c,to:t,total:h})=>{const[o,d]=i.useState(""),x=p=>{d(p.target.value)};return e.jsxs(e.Fragment,{children:[e.jsx(M,{title:"Users"}),e.jsx(W,{user:r.user,menu:a,breadcrumb:e.jsx("li",{className:"breadcrumb-item active","aria-current":"page",children:"Users"}),children:e.jsx(q,{title:"Users",header:e.jsxs(e.Fragment,{children:[e.jsx($,{className:"btn btn-primary",href:route("users.create"),children:"Create a user"}),e.jsx(ce,{start:c,end:t,total:h}),e.jsx("div",{className:"w-full xl:w-auto flex items-center mt-3 xl:mt-0",children:e.jsxs("div",{className:"w-56 relative text-slate-500",children:[e.jsx(ne,{type:"text",className:"form-control w-56 box pr-10",placeholder:"Search...",value:o,onChange:x}),e.jsx(Y,{className:"w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0"})]})})]}),children:e.jsx(oe,{users:n,searchTerm:o})})})]})};export{ve as default};