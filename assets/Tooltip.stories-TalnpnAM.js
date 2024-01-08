import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as m}from"./index-4g5l5LRQ.js";import{u}from"./styled-components.browser.esm-97Fi_FB5.js";import{T as i}from"./index-_SNnpeX8.js";import"./index-D6Ew8ZG_.js";import"./index-NSA-2l6d.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-0-wybW3p.js";import"./polished.esm-izdHNZsJ.js";import"./extends-dGVwEr9R.js";import"./radius-ut5Qfu_P.js";import"./colors-2IJz2qa0.js";import"./spacing-JiOYZ-f-.js";import"./mediaQueries-Bu9ZkGF-.js";const b={title:"Components/Tooltip",component:i,tags:["autodocs"],argTypes:{position:{control:{type:"select"},options:["top-start","top-end","bottom-start","bottom-end"]}}},h=u.u`
  cursor: pointer;
`,v=a=>{const[l,t]=m.useState(!0),p=()=>{t(!0)},c=()=>{t(!1)},d=()=>{console.log("Link clicado!")};return e.jsx("div",{style:{margin:"100px"},children:e.jsx(i,{position:"top-start",handleMouseEnter:p,handleMouseLeave:c,severity:"info",theme:"light",isHovered:l,content:e.jsxs("p",{children:["Informe seu CEP e veja as"," ",e.jsx("strong",{children:e.jsx(h,{onClick:d,children:"melhores ofertas e prazos"})})," ","para sua região!"]}),...a,children:e.jsx("h1",{children:"Tooltip"})})})},o=v.bind({});var n,s,r;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`(args: TooltipProps) => {
  const [isHovered, setIsHovered] = useState(true);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleClick = () => {
    // delete this line
    // eslint-disable-next-line no-console
    console.log('Link clicado!');
  };
  return <div style={{
    margin: '100px'
  }}>
      <Tooltip position="top-start" handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} severity="info" theme="light" isHovered={isHovered} content={<p>
            Informe seu CEP e veja as{' '}
            <strong>
              <StyledLink onClick={handleClick}>
                melhores ofertas e prazos
              </StyledLink>
            </strong>{' '}
            para sua região!
          </p>} {...args}>
        <h1>Tooltip</h1>
      </Tooltip>
    </div>;
}`,...(r=(s=o.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const P=["ToolTip"];export{o as ToolTip,P as __namedExportsOrder,b as default};
