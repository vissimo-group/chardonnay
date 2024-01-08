import{j as n}from"./jsx-runtime-vNq4Oc-g.js";import{u as d}from"./styled-components.browser.esm-97Fi_FB5.js";import{B as G}from"./radius-ut5Qfu_P.js";import{C as h}from"./colors-2IJz2qa0.js";import{S as t}from"./spacing-JiOYZ-f-.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";const g=d.section`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  width: 100%;
  max-width: ${({maxWidth:r})=>r?`${r}px`:"100%"};
  gap: ${t[4]};
`,l=d.div`
  position: relative;
  display: grid;
  grid-template-columns: ${({amount:r})=>`repeat(${r}, 1fr)`};
  gap: ${t[4]};
  margin: 0;
`,e=d.span`
  position: relative;
  padding: 0;
  margin: 0;
  width: 100%;
  grid-column: ${({span:r,size:s})=>r&&s?`span ${s}`:""};
`,w=d.div`
  display: flex;
  position: relative;
  width: 600px;
  padding: ${t[5]};
  border-radius: ${G[3]};
  border: 1px solid ${h.light.neutral.neutral200};
`,i=d.div`
  color: ${h.light.neutral.neutral400};
  padding: ${t[1]};
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 100%;
  text-align: center;
  border: 1px solid ${h.light.brand.brand200};
  border-radius: ${G[3]};
`,b={title:"Components/Grid",tags:["autodocs"],decorators:[r=>n.jsx(w,{children:n.jsx(r,{})})],parameters:{layout:"centered"}},o={name:"Single Row Grid",args:{maxWidth:500,amount:3},argTypes:{amount:{type:"number"},maxWidth:{type:"number",description:'max width for grid. If "0" then max-width property is 100%'}},render:({amount:r,maxWidth:s})=>n.jsx(g,{maxWidth:s,children:n.jsxs(l,{amount:r,children:[n.jsx(e,{children:n.jsx(i,{children:n.jsx("h1",{children:"1"})})}),n.jsx(e,{children:n.jsx(i,{children:n.jsx("h1",{children:"2"})})}),n.jsx(e,{children:n.jsx(i,{children:n.jsx("h1",{children:"3"})})})]})})},a={name:"Multiple Rows Grid",argTypes:{maxWidth:{type:"number",description:'max width for grid. If "0" then max-width property is 100%'}},render:({maxWidth:r})=>n.jsxs(g,{maxWidth:r,children:[n.jsxs(l,{amount:6,children:[n.jsx(e,{size:2,span:!0,children:n.jsx(i,{children:n.jsx("h1",{children:"1"})})}),n.jsx(e,{children:n.jsx(i,{children:n.jsx("h1",{children:"2"})})}),n.jsx(e,{size:3,span:!0,children:n.jsx(i,{children:n.jsx("h1",{children:"3"})})})]}),n.jsxs(l,{amount:6,children:[n.jsx(e,{size:4,span:!0,children:n.jsx(i,{children:n.jsx("h1",{children:"1"})})}),n.jsx(e,{size:2,span:!0,children:n.jsx(i,{children:n.jsx("h1",{children:"2"})})})]}),n.jsxs(l,{amount:8,children:[n.jsx(e,{size:3,span:!0,children:n.jsx(i,{children:n.jsx("h1",{children:"1"})})}),n.jsx(e,{size:2,span:!0,children:n.jsx(i,{children:n.jsx("h1",{children:"2"})})}),n.jsx(e,{size:3,span:!0,children:n.jsx(i,{children:n.jsx("h1",{children:"2"})})})]})]})};var p,x,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Single Row Grid',
  args: {
    maxWidth: 500,
    amount: 3
  },
  argTypes: {
    amount: {
      type: 'number'
    },
    maxWidth: {
      type: 'number',
      description: 'max width for grid. If "0" then max-width property is 100%'
    }
  },
  render: ({
    amount,
    maxWidth
  }) => <Grid.Root maxWidth={maxWidth}>
      <Grid.Row amount={amount}>
        <Grid.Col>
          <Example>
            <h1>1</h1>
          </Example>
        </Grid.Col>

        <Grid.Col>
          <Example>
            <h1>2</h1>
          </Example>
        </Grid.Col>

        <Grid.Col>
          <Example>
            <h1>3</h1>
          </Example>
        </Grid.Col>
      </Grid.Row>
    </Grid.Root>
}`,...(m=(x=o.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};var c,u,j;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Multiple Rows Grid',
  argTypes: {
    maxWidth: {
      type: 'number',
      description: 'max width for grid. If "0" then max-width property is 100%'
    }
  },
  render: ({
    maxWidth
  }) => <Grid.Root maxWidth={maxWidth}>
      <Grid.Row amount={6}>
        <Grid.Col size={2} span>
          <Example>
            <h1>1</h1>
          </Example>
        </Grid.Col>
        <Grid.Col>
          <Example>
            <h1>2</h1>
          </Example>
        </Grid.Col>
        <Grid.Col size={3} span>
          <Example>
            <h1>3</h1>
          </Example>
        </Grid.Col>
      </Grid.Row>

      <Grid.Row amount={6}>
        <Grid.Col size={4} span>
          <Example>
            <h1>1</h1>
          </Example>
        </Grid.Col>
        <Grid.Col size={2} span>
          <Example>
            <h1>2</h1>
          </Example>
        </Grid.Col>
      </Grid.Row>

      <Grid.Row amount={8}>
        <Grid.Col size={3} span>
          <Example>
            <h1>1</h1>
          </Example>
        </Grid.Col>
        <Grid.Col size={2} span>
          <Example>
            <h1>2</h1>
          </Example>
        </Grid.Col>
        <Grid.Col size={3} span>
          <Example>
            <h1>2</h1>
          </Example>
        </Grid.Col>
      </Grid.Row>
    </Grid.Root>
}`,...(j=(u=a.parameters)==null?void 0:u.docs)==null?void 0:j.source}}};const W=["SingleRow","MultipleRows"];export{a as MultipleRows,o as SingleRow,W as __namedExportsOrder,b as default};
