import{j as i}from"./jsx-runtime-vNq4Oc-g.js";import{r as t}from"./index-4g5l5LRQ.js";import{u as c}from"./styled-components.browser.esm-97Fi_FB5.js";import{B as u}from"./radius-ut5Qfu_P.js";import{C as d}from"./colors-2IJz2qa0.js";import{S as h}from"./spacing-JiOYZ-f-.js";const W=t.createContext({open:!1,fullscreen:!1}),f=({children:e,onOpenChange:a,open:n,fullscreen:r,minWidth:o,maxWidth:l})=>{const[p,s]=t.useState(n??!1),[y,C]=t.useState(l??"80%"),[_,k]=t.useState(o??"100px"),[S,$]=t.useState(r??!1),[P,g]=t.useTransition(),b=t.useCallback(()=>{g(()=>{s(!0),a==null||a(!0)})},[s,a]),x=t.useCallback(()=>{g(()=>{s(!1),a==null||a(!1)})},[s,a]);t.useEffect(()=>{n!==void 0&&s(n),r!==void 0&&$(r),o&&k(o),l&&C(l)},[n,r,o,l]);const I=t.useMemo(()=>({open:p,openPanel:b,closePanel:x,fullscreen:S,minWidth:_,maxWidth:y,isOpening:P}),[p,b,x,S,_,y,P]);return i.jsx(W.Provider,{value:I,children:e})};try{f.displayName="SidePanelProvider",f.__docgenInfo={description:"",displayName:"SidePanelProvider",props:{onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},fullscreen:{defaultValue:null,description:"",name:"fullscreen",required:!1,type:{name:"boolean"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"SidePanelMeasures"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"SidePanelMeasures"}}}}}catch{}const m=()=>[t.useContext(W),f],w=c.aside`
  background-color: ${d.light.neutral.neutral100};
  border-color: ${d.light.neutral.neutral200};
  border-style: solid;
  border-width: 1px;
  border-radius: ${u[3]} 0px 0px ${u[3]};

  margin: 0;
  padding: ${h[6]} ${h[4]};

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  min-width: ${({minWidth:e})=>e};
  max-width: ${({maxWidth:e,fullscreen:a})=>a?"100%":e};
  width: ${({fullscreen:e})=>e?"100%":"inherit"};

  z-index: 999;
  pointer-events: all;
  box-shadow:
    -1px 0px 8px 2px #3c3c3c09,
    -1px 0px 8px 4px #3c3c3c09,
    -1px 0px 8px 16px #3c3c3c09;

  /* ANIMATIONS  */
  @keyframes openPanel {
    0% {
      transform: scaleX(1);
      right: -100%;
    }
    100% {
      transform: scaleX(1);
      right: 0;
    }
  }

  @keyframes closePanel {
    0% {
      transform: scaleX(1);
      right: 0;
    }
    100% {
      transform: scaleX(1);
      right: -100%;
    }
  }

  &[data-state='open'] {
    animation: openPanel 300ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  &[data-state='closed'] {
    animation: closePanel 200ms ease-in;
  }
`,T=c.div`
  overflow-y: auto;
  background-color: transparent;
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #e6e6e6;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #999999;
    border-radius: 12px;
    border: none;

    &:hover {
      background-color: #888888;
    }
  }
`,N=({children:e})=>{const[a]=m(),{open:n,minWidth:r,maxWidth:o,fullscreen:l}=a;return n?i.jsx(w,{"data-state":n?"open":"closed",maxWidth:o,minWidth:r,fullscreen:l,children:i.jsx(T,{children:e})}):null};try{N.displayName="SidePanelContent",N.__docgenInfo={description:"",displayName:"SidePanelContent",props:{minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"SidePanelMeasures"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"SidePanelMeasures"}},fullscreen:{defaultValue:null,description:"",name:"fullscreen",required:!1,type:{name:"boolean"}}}}}catch{}const D=c.div`
  background-color: ${d.light.neutral.neutral500};
  opacity: 0.3;
  position: fixed;
  display: flex;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  pointer-events: all;

  /** ANIMATIONS */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 0.3;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 0.3;
    }
    to {
      opacity: 0;
    }
  }

  &[data-state='open'] {
    animation: fadeIn 400ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  &[data-state='closed'] {
    animation: fadeOut 400ms cubic-bezier(0.16, 1, 0.3, 1);
  }
`,q=({children:e,onOpenChange:a,open:n,fullscreen:r,maxWidth:o,minWidth:l})=>{const[,p]=m();return i.jsx(p,{maxWidth:o,minWidth:l,fullscreen:r,open:n,onOpenChange:a,children:e})};try{q.displayName="SidePanelRoot",q.__docgenInfo={description:"",displayName:"SidePanelRoot",props:{onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},fullscreen:{defaultValue:null,description:"",name:"fullscreen",required:!1,type:{name:"boolean"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"SidePanelMeasures"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"SidePanelMeasures"}}}}}catch{}const M=c.button`
  background-color: transparent;
  border: none;
  border-color: transparent;
  outline: none;
  margin: 0;
  padding: 0;
  cursor: pointer;

  &:focus {
    border: 1px solid ${d.light.neutral.neutral400};

    border-radius: ${u[3]};
  }
`,V=({children:e,className:a=""})=>{const[n]=m(),{openPanel:r}=n;return i.jsx(M,{className:a,onClick:r,children:e})};try{V.displayName="SidePanelTrigger",V.__docgenInfo={description:"",displayName:"SidePanelTrigger",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const R=c.button`
  background-color: transparent;
  border: none;
  border-color: transparent;
  outline: none;
  margin: 0;
  padding: 0;
  cursor: pointer;

  &:focus {
    border: 1px solid ${d.light.neutral.neutral400};

    border-radius: ${u[3]};
  }
`,v=({children:e,className:a=""})=>{const[n]=m(),{closePanel:r}=n;return i.jsx(R,{className:a,onClick:r,children:e})};try{v.displayName="SidePanelClose",v.__docgenInfo={description:"",displayName:"SidePanelClose",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{SidePanelContent.displayName="SidePanelContent",SidePanelContent.__docgenInfo={description:"",displayName:"SidePanelContent",props:{minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"SidePanelMeasures"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"SidePanelMeasures"}},fullscreen:{defaultValue:null,description:"",name:"fullscreen",required:!1,type:{name:"boolean"}}}}}catch{}try{SidePanelRoot.displayName="SidePanelRoot",SidePanelRoot.__docgenInfo={description:"",displayName:"SidePanelRoot",props:{onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},fullscreen:{defaultValue:null,description:"",name:"fullscreen",required:!1,type:{name:"boolean"}},minWidth:{defaultValue:null,description:"",name:"minWidth",required:!1,type:{name:"SidePanelMeasures"}},maxWidth:{defaultValue:null,description:"",name:"maxWidth",required:!1,type:{name:"SidePanelMeasures"}}}}}catch{}try{SidePanelTrigger.displayName="SidePanelTrigger",SidePanelTrigger.__docgenInfo={description:"",displayName:"SidePanelTrigger",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{SidePanelClose.displayName="SidePanelClose",SidePanelClose.__docgenInfo={description:"",displayName:"SidePanelClose",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{D as S,q as a,V as b,N as c,v as d,m as u};
