import{u as n,T as t,h as i,j as a,L as u}from"./index-cc644e96.js";import{G as d}from"./GridContainer-5335f2b8.js";import{M as m}from"./MovieCard-b38f470e.js";function c(e){const{data:r,isLoading:s}=n({queryKey:["moviesByGenre",e],queryFn:()=>t(e)});return{data:r,isLoading:s}}function x(){const{genreId:e}=i(),{data:r,isLoading:s}=c(e);return a.jsx(d,{children:s?a.jsx(u,{}):r.map(o=>a.jsx(m,{movie:o,children:o.title},o.title))})}export{x as default};
