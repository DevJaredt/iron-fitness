import{j as i}from"./index-4b41b879.js";import{s as n}from"./toast-acb5ef95.js";const r=(t,a)=>{localStorage.setItem(t,JSON.stringify(a))},s=t=>JSON.parse(localStorage.getItem(t)),o=t=>{let a=s("cart");a||(a=[]);const e=a.findIndex(c=>c.id===t.id);if(e>=0){const c=a[e].amount+1;a[e]={...a[e],amount:c},r("cart",a)}else a.push({...t,amount:1}),r("cart",a)};const l=t=>{o(t),n("Item agregado con exito")},d=({id:t,img:a,title:e,description:c})=>i.jsxs("div",{className:"card",style:{width:"18rem"},children:[i.jsx("img",{src:a,className:"card-img-top",alt:"..."}),i.jsxs("div",{className:"card-body",children:[i.jsx("h5",{className:"card-title",children:e}),i.jsx("p",{className:"card-text",children:c}),i.jsx("button",{onClick:()=>l({id:t,img:a,title:e,description:c}),children:"+"})]})]}),p=()=>{const t=[{id:1,title:"Creatina",description:"Te ayuda a la recuperacion muscular",img:"bipro-3lb-nueva-presentacion.webp"},{id:2,title:"Creatina1",description:"Te ayuda a la recuperacion muscular",img:"http://placekitten.com/200/300"},{id:3,title:"Creatina2",description:"Te ayuda a la recuperacion muscular",img:"http://placekitten.com/200/300"},{id:4,title:"Creatina2",description:"Te ayuda a la recuperacion muscular",img:"http://placekitten.com/200/300"},{id:5,title:"Creatina2",description:"Te ayuda a la recuperacion muscular",img:"http://placekitten.com/200/300"},{id:6,title:"Creatina2",description:"Te ayuda a la recuperacion muscular",img:"http://placekitten.com/200/300"},{id:7,title:"Creatina2",description:"Te ayuda a la recuperacion muscular",img:"http://placekitten.com/200/300"},{id:8,title:"Creatina2",description:"Te ayuda a la recuperacion muscular",img:"http://placekitten.com/200/300"},{id:9,title:"Creatina2",description:"Te ayuda a la recuperacion muscular",img:"http://placekitten.com/200/300"}];return i.jsx("div",{className:"card-container",children:t.map((a,e)=>i.jsx(d,{id:a.id,img:a.img,description:a.description,title:a.title},e))})};export{p as default};