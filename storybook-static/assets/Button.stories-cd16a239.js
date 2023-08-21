import{s as x}from"./styled-components.browser.esm-20549aa5.js";import{c as a}from"./colors-a39a8fe8.js";import{s as t}from"./spacing-292a1c0b.js";import"./tslib.es6-17d83084.js";import"./emotion-unitless.esm-7c38d562.js";import"./index-e03f90b5.js";import"./_commonjsHelpers-725317a4.js";const z=x.button`
  max-width: 300px;
  width: 100%;
  background-color: ${a.light.action.action200};
  color: ${a.light.background.background100};
  cursor: pointer;
  font-weight: 30;
  font-family: Arial,serif;
  border-radius: 8px;

  &:hover{
    background-color: ${a.light.action.action300};
  }

  ${r=>r.size==="big"&&`
    font-size: 32px;
    padding: ${t[3]};
  `}

  ${r=>r.size==="small"&&`
    font-size: 12px;
    padding: ${t[1]};
  `}

  ${r=>!r.big&&!r.small&&`
    font-size: 16px;
  `}
`;z.displayName="Button";const w={title:"Components/Button",component:z,tags:["autodocs"],args:{children:"Confirmar",size:"big",disable:"false"},argTypes:{label:{control:"teste"},disable:{control:{type:"boolean"}},size:{options:["small","big"],control:{type:"inline-radio"}},onClick:{action:"click"}}},o={args:{children:"Enviar",size:"small"}},e={},s={args:{size:"big",children:"Pagar"}};var i,n,c,d,l;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: 'Enviar',
    size: 'small'
  }
}`,...(c=(n=o.parameters)==null?void 0:n.docs)==null?void 0:c.source},description:{story:"Essa e uma forma de descrever o componente",...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.description}}};var p,m,g,u,b;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(g=(m=e.parameters)==null?void 0:m.docs)==null?void 0:g.source},description:{story:"Esse e o default Button",...(b=(u=e.parameters)==null?void 0:u.docs)==null?void 0:b.description}}};var f,h,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: 'big',
    children: 'Pagar'
  }
}`,...(y=(h=s.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const C=["Primary","Secondery","Big"];export{s as Big,o as Primary,e as Secondery,C as __namedExportsOrder,w as default};
//# sourceMappingURL=Button.stories-cd16a239.js.map
