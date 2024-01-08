import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{u as i}from"./styled-components.browser.esm-97Fi_FB5.js";const a=i.table`
  width: 100%;
  font-family: sans-serif;
  color: #fff;
  border-collapse: collapse;
`,d=i.thead`
  th {
    padding: 0.75rem 1rem;
    text-align: left;
  }
`,t=i.tbody`
  td {
    padding: 0.75rem 1rem;
    color: #ccc;
  }

  td:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  td:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  tr:nth-child(even) td {
    background: #444;
  }
`;function o({tokens:r,hasRemValue:s=!1}){return e.jsxs(a,{children:[e.jsx(d,{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Value"}),s&&e.jsx("th",{children:"Pixels"})]})}),e.jsx(t,{children:Object.entries(r).map(([l,n])=>e.jsxs("tr",{children:[e.jsx("td",{children:l}),e.jsx("td",{children:n}),s&&e.jsxs("td",{children:[Number(n.replace("rem",""))*16,"px"]})]},l))})]})}try{o.displayName="TokensGrid",o.__docgenInfo={description:"",displayName:"TokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string>"}},hasRemValue:{defaultValue:{value:"false"},description:"",name:"hasRemValue",required:!1,type:{name:"boolean"}}}}}catch{}try{a.displayName="TableGrid",a.__docgenInfo={description:"",displayName:"TableGrid",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{d.displayName="TokensGridHeader",d.__docgenInfo={description:"",displayName:"TokensGridHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{t.displayName="TokensGridBody",t.__docgenInfo={description:"",displayName:"TokensGridBody",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}export{o as T};
