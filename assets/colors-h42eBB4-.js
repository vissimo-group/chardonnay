import{j as t}from"./jsx-runtime-vNq4Oc-g.js";import{M as m}from"./index-SViquzKV.js";import{g as c}from"./polished.esm-izdHNZsJ.js";import{C as d}from"./colors-2IJz2qa0.js";import{useMDXComponents as i}from"./index-_VGcpBFS.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./iframe-eo3-EV-v.js";import"../sb-preview/runtime.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-zALrzNiZ.js";import"./index-jmm5gWkb.js";import"./index-ogXoivrg.js";import"./index-MVbLLYTZ.js";import"./index-PPLHz8o0.js";import"./extends-dGVwEr9R.js";function l(r){return Object.entries(r).map(([e,s])=>{if(typeof s!="string")throw new Error(`Color '${e}' is not a valid string.`);return t.jsx("div",{style:{backgroundColor:s,padding:"1rem",marginBottom:"0.5rem"},children:t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",fontFamily:"monospace",color:c(s,"#FFF")<3.5?"#000":"#FFF"},children:[t.jsx("strong",{children:e}),t.jsx("span",{children:s})]})},e)})}function n(r){const e=d[r];return Object.entries(e).map(([s,a])=>t.jsxs("div",{children:[t.jsx("h3",{style:{textAlign:"center"},children:s}),l(a)]},s))}function h(){return t.jsxs(t.Fragment,{children:[t.jsx("h1",{children:"Light Theme"}),n("light"),t.jsx("h1",{children:"Dark Theme"}),n("dark")]})}function o(r){const e=Object.assign({h1:"h1",h2:"h2"},i(),r.components);return t.jsxs(t.Fragment,{children:[t.jsx(m,{title:"Tokens/Cores"}),`
`,t.jsx(e.h1,{id:"cores",children:"Cores"}),`
`,t.jsx(e.h2,{id:"essas-são-as-cores-utilizadas",children:"Essas são as cores utilizadas"}),`
`,t.jsx(h,{})]})}function E(r={}){const{wrapper:e}=Object.assign({},i(),r.components);return e?t.jsx(e,Object.assign({},r,{children:t.jsx(o,r)})):o(r)}export{E as default};
