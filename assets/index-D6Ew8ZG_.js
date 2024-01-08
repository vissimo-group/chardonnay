import{j as r}from"./jsx-runtime-vNq4Oc-g.js";import{u as i}from"./styled-components.browser.esm-97Fi_FB5.js";import{C as a}from"./colors-2IJz2qa0.js";import{m as g}from"./mediaQueries-Bu9ZkGF-.js";import{P as u}from"./index-0-wybW3p.js";const m={info:e=>a[e.theme].background.backgroundInfo,warning:e=>a[e.theme].background.backgroundWarning,error:e=>a[e.theme].background.backgroundError},f=i.div`
  display: inline-flex;
  align-items: center;
  color: ${e=>a[e.theme].neutral.neutral100};
  background-color: ${e=>m[e.severity](e)};
  width: fit-content;
  height: 24px;
  padding: 0 8px;
  border-radius: 8px;
  gap: 8px;
`,n=({theme:e,icon:s,severity:l,value:p,...c})=>r.jsxs(f,{severity:l||"info",theme:e||"light",...c,children:[s,p]});n.displayName="Tag";const j=n;try{n.displayName="Tag",n.__docgenInfo={description:"",displayName:"Tag",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},severity:{defaultValue:null,description:"",name:"severity",required:!1,type:{name:"enum",value:[{value:'"info"'},{value:'"warning"'},{value:'"error"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}}}}}catch{}const h=i.div`
  height: 40px;
  background-color: ${a.light.brand.brand100};
  color: ${a.light.background.background100};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 8px 32px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  white-space: nowrap;
  align-content: center;

  position: fixed;
  width: 100%;
  z-index: 2;

  > :nth-child(2) {
    justify-self: center;
    align-self: center;
  }

  > :nth-child(3) {
    justify-self: end;
  }

  @media screen and (max-width: ${g.screenMd}) {
    height: 10px;
    overflow: hidden;
    padding: 0;
    grid-template-columns: 1fr;

    > * {
      visibility: hidden;
    }
  }
`,t=({children:e})=>r.jsx(h,{children:e});t.displayName="TopBar";const N=t;try{t.displayName="TopBar",t.__docgenInfo={description:"",displayName:"TopBar",props:{}}}catch{}const y=i.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`,o=({cepText:e})=>r.jsxs(y,{children:[r.jsx(u,{size:26}),r.jsx("p",{children:e})]});try{o.displayName="TagCep",o.__docgenInfo={description:"",displayName:"TagCep",props:{cepText:{defaultValue:null,description:"",name:"cepText",required:!1,type:{name:"string"}}}}}catch{}const _=i.div`
  display: flex;
  gap: 30px;

  & > * {
    margin: 0;
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background: none;
    cursor: pointer;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: -0.0025em;
    text-align: left;
  }
`,d=({children:e})=>r.jsx(_,{children:e});try{d.displayName="InfoTopBar",d.__docgenInfo={description:"",displayName:"InfoTopBar",props:{}}}catch{}export{d as I,j as T,N as a,o as b};
