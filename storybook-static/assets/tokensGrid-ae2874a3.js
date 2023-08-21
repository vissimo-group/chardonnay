import{a,j as e}from"./jsx-runtime-9d752963.js";import{s as l}from"./styled-components.browser.esm-20549aa5.js";function c({tokens:r,hasRemValue:n=!1}){return a(d,{children:[e(t,{children:a("tr",{children:[e("th",{children:"Name"}),e("th",{children:"Value"}),n&&e("th",{children:"Pixels"})]})}),e(i,{children:Object.entries(r).map(([o,s])=>a("tr",{children:[e("td",{children:o}),e("td",{children:s}),n&&a("td",{children:[Number(s.replace("rem",""))*16,"px"]})]},o))})]})}const d=l.table`
  width: 100%;
  font-family: sans-serif;
  color: #FFF;
  border-collapse: collapse;
`,t=l.thead`
  th {
    padding: 0.75rem 1rem;
    text-align: left;
  }
`,i=l.tbody`
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
`;try{c.displayName="TokensGrid",c.__docgenInfo={description:"",displayName:"TokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Record<string, string>"}},hasRemValue:{defaultValue:{value:"false"},description:"",name:"hasRemValue",required:!1,type:{name:"boolean"}}}}}catch{}try{d.displayName="TableGrid",d.__docgenInfo={description:"",displayName:"TableGrid",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{t.displayName="TokensGridHeader",t.__docgenInfo={description:"",displayName:"TokensGridHeader",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}try{i.displayName="TokensGridBody",i.__docgenInfo={description:"",displayName:"TokensGridBody",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}}}catch{}export{c as T};
//# sourceMappingURL=tokensGrid-ae2874a3.js.map
