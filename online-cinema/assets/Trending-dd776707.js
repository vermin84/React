import{u as c,i as m,l as g,a as l,j as r,H as o,L as n}from"./index-f9467390.js";import{A as x}from"./ActorCard-37112683.js";import{G as t}from"./GridContainer-c82f3b7f.js";import{M as j}from"./MovieCard-c777be8b.js";import"./useFetchActorInfo-7b887b7d.js";function h(){const{data:a,isLoading:s}=c({queryKey:["popular_actors"],queryFn:m});return{data:a,isLoading:s}}function y(){const{data:a,isLoading:s}=c({queryKey:["popular_movies"],queryFn:g});return{data:a,isLoading:s}}const d=l.div`
  display: grid;
  gap: 3rem;
`,u=l.div`
  display: grid;
  gap: 2rem;
`;function q(){const{data:a,isLoading:s}=y(),{data:p,isLoading:e}=h();return s&&e?r.jsx(d,{children:"Loading..."}):r.jsxs(d,{children:[r.jsx(o,{as:"h2",children:"Trending Now"}),s?r.jsx(n,{}):r.jsxs(u,{children:[r.jsx(o,{as:"h3",children:"Popular movies"}),r.jsx(t,{children:a.map(i=>r.jsx(j,{movie:i},i.title))})]}),e?r.jsx(n,{}):r.jsxs(u,{children:[r.jsx(o,{as:"h3",children:"Popular actors"}),r.jsx(t,{children:p.map(i=>r.jsx(x,{actor:i},i.name))})]})]})}export{q as default};
