import{h as o,u as i,j as s,L as n,M as u}from"./index-cc644e96.js";import{G as m}from"./GridContainer-5335f2b8.js";import{M as d}from"./MovieCard-b38f470e.js";function p(){const{results:r}=o(),{data:e,isLoading:t}=i(["search all movie list",r],()=>u(r));return t?s.jsx(n,{}):s.jsx(m,{children:e.map(a=>s.jsx(d,{movie:a},a.id))})}export{p as default};