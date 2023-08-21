import{s as Q}from"./index-d475d2ea.js";import{r as X,$ as D}from"./index-e03f90b5.js";const{logger:Z}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var V=Object.create,N=Object.defineProperty,ee=Object.getOwnPropertyDescriptor,L=Object.getOwnPropertyNames,te=Object.getPrototypeOf,re=Object.prototype.hasOwnProperty,Qe=(e,t)=>function(){return t||(0,e[L(e)[0]])((t={exports:{}}).exports,t),t.exports},ae=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of L(t))!re.call(e,n)&&n!==r&&N(e,n,{get:()=>t[n],enumerable:!(a=ee(t,n))||a.enumerable});return e},Xe=(e,t,r)=>(r=e!=null?V(te(e)):{},ae(t||!e||!e.__esModule?N(r,"default",{value:e,enumerable:!0}):r,e));function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},m.apply(this,arguments)}function ne(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,a){return r.__proto__=a,r},h(e,t)}function oe(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,h(e,t)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},B(e)}function ie(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function se(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function x(e,t,r){return se()?x=Reflect.construct.bind():x=function(a,n,o){var i=[null];i.push.apply(i,n);var p=Function.bind.apply(a,i),f=new p;return o&&h(f,o.prototype),f},x.apply(null,arguments)}function R(e){var t=typeof Map=="function"?new Map:void 0;return R=function(r){if(r===null||!ie(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t<"u"){if(t.has(r))return t.get(r);t.set(r,a)}function a(){return x(r,arguments,B(this).constructor)}return a.prototype=Object.create(r.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),h(a,r)},R(e)}var pe={1:`Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).

`,2:`Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).

`,3:`Passed an incorrect argument to a color function, please pass a string representation of a color.

`,4:`Couldn't generate valid rgb string from %s, it returned %s.

`,5:`Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.

`,6:`Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).

`,7:`Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).

`,8:`Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.

`,9:`Please provide a number of steps to the modularScale helper.

`,10:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,11:`Invalid value passed as base to modularScale, expected number or em string but got "%s"

`,12:`Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.

`,13:`Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.

`,14:`Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.

`,15:`Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.

`,16:`You must provide a template to this method.

`,17:`You passed an unsupported selector state to this method.

`,18:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,19:`fromSize and toSize must be provided as stringified numbers with the same units.

`,20:`expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,21:"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",22:"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",23:`fontFace expects a name of a font-family.

`,24:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,25:`fontFace expects localFonts to be an array.

`,26:`fontFace expects fileFormats to be an array.

`,27:`radialGradient requries at least 2 color-stops to properly render.

`,28:`Please supply a filename to retinaImage() as the first argument.

`,29:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,30:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",31:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation

`,32:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])
To pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')

`,33:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation

`,34:`borderRadius expects a radius value as a string or number as the second argument.

`,35:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,36:`Property must be a string value.

`,37:`Syntax Error at %s.

`,38:`Formula contains a function that needs parentheses at %s.

`,39:`Formula is missing closing parenthesis at %s.

`,40:`Formula has too many closing parentheses at %s.

`,41:`All values in a formula must have the same unit or be unitless.

`,42:`Please provide a number of steps to the modularScale helper.

`,43:`Please pass a number or one of the predefined scales to the modularScale helper as the ratio.

`,44:`Invalid value passed as base to modularScale, expected number or em/rem string but got %s.

`,45:`Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.

`,46:`Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.

`,47:`minScreen and maxScreen must be provided as stringified numbers with the same units.

`,48:`fromSize and toSize must be provided as stringified numbers with the same units.

`,49:`Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.

`,50:`Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.

`,51:`Expects the first argument object to have the properties prop, fromSize, and toSize.

`,52:`fontFace expects either the path to the font file(s) or a name of a local copy.

`,53:`fontFace expects localFonts to be an array.

`,54:`fontFace expects fileFormats to be an array.

`,55:`fontFace expects a name of a font-family.

`,56:`linearGradient requries at least 2 color-stops to properly render.

`,57:`radialGradient requries at least 2 color-stops to properly render.

`,58:`Please supply a filename to retinaImage() as the first argument.

`,59:`Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.

`,60:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",61:`Property must be a string value.

`,62:`borderRadius expects a radius value as a string or number as the second argument.

`,63:`borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.

`,64:`The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.

`,65:`To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').

`,66:`The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.

`,67:`You must provide a template to this method.

`,68:`You passed an unsupported selector state to this method.

`,69:`Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.

`,70:`Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.

`,71:`Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.

`,72:`Passed invalid base value %s to %s(), please pass a value like "12px" or 12.

`,73:`Please provide a valid CSS variable.

`,74:`CSS variable not found and no default was provided.

`,75:`important requires a valid style object, got a %s instead.

`,76:`fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.

`,77:`remToPx expects a value in "rem" but you provided it in "%s".

`,78:`base must be set in "px" or "%" but you set it in "%s".
`};function fe(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=t[0],n=[],o;for(o=1;o<t.length;o+=1)n.push(t[o]);return n.forEach(function(i){a=a.replace(/%[a-z]/,i)}),a}var l=function(e){oe(t,e);function t(r){for(var a,n=arguments.length,o=new Array(n>1?n-1:0),i=1;i<n;i++)o[i-1]=arguments[i];return a=e.call(this,fe.apply(void 0,[pe[r]].concat(o)))||this,ne(a)}return t}(R(Error));function O(e){return Math.round(e*255)}function ue(e,t,r){return O(e)+","+O(t)+","+O(r)}function y(e,t,r,a){if(a===void 0&&(a=ue),t===0)return a(r,r,r);var n=(e%360+360)%360/60,o=(1-Math.abs(2*r-1))*t,i=o*(1-Math.abs(n%2-1)),p=0,f=0,u=0;n>=0&&n<1?(p=o,f=i):n>=1&&n<2?(p=i,f=o):n>=2&&n<3?(f=o,u=i):n>=3&&n<4?(f=i,u=o):n>=4&&n<5?(p=i,u=o):n>=5&&n<6&&(p=o,u=i);var g=r-o/2,b=p+g,d=f+g,I=u+g;return a(b,d,I)}var $={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function le(e){if(typeof e!="string")return e;var t=e.toLowerCase();return $[t]?"#"+$[t]:e}var de=/^#[a-fA-F0-9]{6}$/,ce=/^#[a-fA-F0-9]{8}$/,ge=/^#[a-fA-F0-9]{3}$/,be=/^#[a-fA-F0-9]{4}$/,j=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,me=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,he=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,ye=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function C(e){if(typeof e!="string")throw new l(3);var t=le(e);if(t.match(de))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(ce)){var r=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:r}}if(t.match(ge))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(be)){var a=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:a}}var n=j.exec(t);if(n)return{red:parseInt(""+n[1],10),green:parseInt(""+n[2],10),blue:parseInt(""+n[3],10)};var o=me.exec(t.substring(0,50));if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])>1?parseFloat(""+o[4])/100:parseFloat(""+o[4])};var i=he.exec(t);if(i){var p=parseInt(""+i[1],10),f=parseInt(""+i[2],10)/100,u=parseInt(""+i[3],10)/100,g="rgb("+y(p,f,u)+")",b=j.exec(g);if(!b)throw new l(4,t,g);return{red:parseInt(""+b[1],10),green:parseInt(""+b[2],10),blue:parseInt(""+b[3],10)}}var d=ye.exec(t.substring(0,50));if(d){var I=parseInt(""+d[1],10),J=parseInt(""+d[2],10)/100,K=parseInt(""+d[3],10)/100,M="rgb("+y(I,J,K)+")",F=j.exec(M);if(!F)throw new l(4,t,M);return{red:parseInt(""+F[1],10),green:parseInt(""+F[2],10),blue:parseInt(""+F[3],10),alpha:parseFloat(""+d[4])>1?parseFloat(""+d[4])/100:parseFloat(""+d[4])}}throw new l(5)}function ve(e){var t=e.red/255,r=e.green/255,a=e.blue/255,n=Math.max(t,r,a),o=Math.min(t,r,a),i=(n+o)/2;if(n===o)return e.alpha!==void 0?{hue:0,saturation:0,lightness:i,alpha:e.alpha}:{hue:0,saturation:0,lightness:i};var p,f=n-o,u=i>.5?f/(2-n-o):f/(n+o);switch(n){case t:p=(r-a)/f+(r<a?6:0);break;case r:p=(a-t)/f+2;break;default:p=(t-r)/f+4;break}return p*=60,e.alpha!==void 0?{hue:p,saturation:u,lightness:i,alpha:e.alpha}:{hue:p,saturation:u,lightness:i}}function G(e){return ve(C(e))}var Fe=function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},_=Fe;function c(e){var t=e.toString(16);return t.length===1?"0"+t:t}function E(e){return c(Math.round(e*255))}function xe(e,t,r){return _("#"+E(e)+E(t)+E(r))}function w(e,t,r){return y(e,t,r,xe)}function we(e,t,r){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number")return w(e,t,r);if(typeof e=="object"&&t===void 0&&r===void 0)return w(e.hue,e.saturation,e.lightness);throw new l(1)}function Se(e,t,r,a){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number"&&typeof a=="number")return a>=1?w(e,t,r):"rgba("+y(e,t,r)+","+a+")";if(typeof e=="object"&&t===void 0&&r===void 0&&a===void 0)return e.alpha>=1?w(e.hue,e.saturation,e.lightness):"rgba("+y(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new l(2)}function z(e,t,r){if(typeof e=="number"&&typeof t=="number"&&typeof r=="number")return _("#"+c(e)+c(t)+c(r));if(typeof e=="object"&&t===void 0&&r===void 0)return _("#"+c(e.red)+c(e.green)+c(e.blue));throw new l(6)}function v(e,t,r,a){if(typeof e=="string"&&typeof t=="number"){var n=C(e);return"rgba("+n.red+","+n.green+","+n.blue+","+t+")"}else{if(typeof e=="number"&&typeof t=="number"&&typeof r=="number"&&typeof a=="number")return a>=1?z(e,t,r):"rgba("+e+","+t+","+r+","+a+")";if(typeof e=="object"&&t===void 0&&r===void 0&&a===void 0)return e.alpha>=1?z(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")"}throw new l(7)}var Ce=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},Pe=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&typeof e.alpha=="number"},ke=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},Ie=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&typeof e.alpha=="number"};function W(e){if(typeof e!="object")throw new l(8);if(Pe(e))return v(e);if(Ce(e))return z(e);if(Ie(e))return Se(e);if(ke(e))return we(e);throw new l(8)}function Y(e,t,r){return function(){var a=r.concat(Array.prototype.slice.call(arguments));return a.length>=t?e.apply(this,a):Y(e,t,a)}}function P(e){return Y(e,e.length,[])}function k(e,t,r){return Math.max(e,Math.min(t,r))}function Oe(e,t){if(t==="transparent")return t;var r=G(t);return W(m({},r,{lightness:k(0,1,r.lightness-parseFloat(e))}))}var je=P(Oe),Ee=je;function Te(e,t){if(t==="transparent")return t;var r=G(t);return W(m({},r,{lightness:k(0,1,r.lightness+parseFloat(e))}))}var Be=P(Te),Re=Be;function _e(e,t){if(t==="transparent")return t;var r=C(t),a=typeof r.alpha=="number"?r.alpha:1,n=m({},r,{alpha:k(0,1,(a*100+parseFloat(e)*100)/100)});return v(n)}var ze=P(_e),Ze=ze;function Me(e,t){if(t==="transparent")return t;var r=C(t),a=typeof r.alpha=="number"?r.alpha:1,n=m({},r,{alpha:k(0,1,+(a*100-parseFloat(e)*100).toFixed(2)/100)});return v(n)}var De=P(Me),$e=De,s={primary:"#FF4785",secondary:"#029CFD",tertiary:"#FAFBFC",ancillary:"#22a699",orange:"#FC521F",gold:"#FFAE00",green:"#66BF3C",seafoam:"#37D5D3",purple:"#6F2CAC",ultraviolet:"#2A0481",lightest:"#FFFFFF",lighter:"#F7FAFC",light:"#EEF3F6",mediumlight:"#ECF4F9",medium:"#D9E8F2",mediumdark:"#73828C",dark:"#5C6870",darker:"#454E54",darkest:"#2E3438",border:"hsla(203, 50%, 30%, 0.15)",positive:"#66BF3C",negative:"#FF4400",warning:"#E69D00",critical:"#FFFFFF",defaultText:"#2E3438",inverseText:"#FFFFFF",positiveText:"#448028",negativeText:"#D43900",warningText:"#A15C20"},A={app:"#F6F9FC",bar:s.lightest,content:s.lightest,gridCellSize:10,hoverable:$e(.93,s.secondary),positive:"#E1FFD4",negative:"#FEDED2",warning:"#FFF5CF",critical:"#FF4400"},S={fonts:{base:['"Nunito Sans"',"-apple-system",'".SFNSText-Regular"','"San Francisco"',"BlinkMacSystemFont",'"Segoe UI"','"Helvetica Neue"',"Helvetica","Arial","sans-serif"].join(", "),mono:["ui-monospace","Menlo","Monaco",'"Roboto Mono"','"Oxygen Mono"','"Ubuntu Monospace"','"Source Code Pro"','"Droid Sans Mono"','"Courier New"',"monospace"].join(", ")},weight:{regular:400,bold:700},size:{s1:12,s2:14,s3:16,m1:20,m2:24,m3:28,l1:32,l2:40,l3:48,code:90}},Ae={base:"light",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:A.app,appContentBg:s.lightest,appBorderColor:s.border,appBorderRadius:4,fontBase:S.fonts.base,fontCode:S.fonts.mono,textColor:s.darkest,textInverseColor:s.lightest,textMutedColor:s.mediumdark,barTextColor:s.mediumdark,barSelectedColor:s.secondary,barBg:s.lightest,buttonBg:A.app,buttonBorder:s.medium,booleanBg:s.mediumlight,booleanSelectedBg:s.lightest,inputBg:s.lightest,inputBorder:s.border,inputTextColor:s.darkest,inputBorderRadius:4},H=Ae,He={base:"dark",colorPrimary:"#FF4785",colorSecondary:"#029CFD",appBg:"#222425",appContentBg:"#1B1C1D",appBorderColor:"rgba(255,255,255,.1)",appBorderRadius:4,fontBase:S.fonts.base,fontCode:S.fonts.mono,textColor:"#C9CDCF",textInverseColor:"#222425",textMutedColor:"#798186",barTextColor:"#798186",barSelectedColor:s.secondary,barBg:"#292C2E",buttonBg:"#222425",buttonBorder:"rgba(255,255,255,.1)",booleanBg:"#222425",booleanSelectedBg:"#2E3438",inputBg:"#1B1C1D",inputBorder:"rgba(255,255,255,.1)",inputTextColor:s.lightest,inputBorderRadius:4},qe=He,{window:T}=Q,Ve=e=>({color:e}),Ne=e=>typeof e!="string"?(Z.warn(`Color passed to theme object should be a string. Instead ${e}(${typeof e}) was passed.`),!1):!0,Le=e=>!/(gradient|var|calc)/.test(e),Ge=(e,t)=>e==="darken"?v(`${Ee(1,t)}`,.95):e==="lighten"?v(`${Re(1,t)}`,.95):t,We=e=>t=>{if(!Ne(t)||!Le(t))return t;try{return Ge(e,t)}catch{return t}},et=We("lighten"),Ye=()=>!T||!T.matchMedia?"light":T.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",tt={light:H,dark:qe,normal:H};Ye();var Ue=function(t){return t()},U=D["useInsertionEffect"]?D["useInsertionEffect"]:!1,rt=U||Ue,at=U||X.useLayoutEffect;function q(){return q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},q.apply(this,arguments)}export{q as _,Xe as a,Qe as b,m as c,A as d,S as e,Ze as f,Ye as g,rt as h,s as i,et as j,H as l,Ve as m,tt as t,at as u};
//# sourceMappingURL=extends-7bcc7a57.js.map
