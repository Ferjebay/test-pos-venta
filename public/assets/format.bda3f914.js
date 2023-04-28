import{l as d,m as u,n as o,p as v,S as g,ai as Q,U as k,aj as R,r as q,z as y,ak as A,O as E,D as p,al as j}from"./index.9c5c742c.js";var K=d({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const n=u(()=>parseInt(e.lines,10)),l=u(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),i=u(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>o("div",{style:i.value,class:l.value},v(t.default))}}),$=d({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const n=u(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>o("div",{class:n.value},v(t.default))}}),z=d({name:"QItem",props:{...g,...Q,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:n}){const{proxy:{$q:l}}=y(),i=k(e,l),{hasLink:m,linkAttrs:h,linkClass:_,linkTag:B,navigateOnClick:w}=R(),r=q(null),c=q(null),f=u(()=>e.clickable===!0||m.value===!0||e.tag==="label"),s=u(()=>e.disable!==!0&&f.value===!0),x=u(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(i.value===!0?" q-item--dark":"")+(m.value===!0&&e.active===null?_.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(s.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),L=u(()=>{if(e.insetLevel===void 0)return null;const a=l.lang.rtl===!0?"Right":"Left";return{["padding"+a]:16+e.insetLevel*56+"px"}});function S(a){s.value===!0&&(c.value!==null&&(a.qKeyEvent!==!0&&document.activeElement===r.value?c.value.focus():document.activeElement===c.value&&r.value.focus()),w(a))}function C(a){if(s.value===!0&&A(a,13)===!0){E(a),a.qKeyEvent=!0;const b=new MouseEvent("click",a);b.qKeyEvent=!0,r.value.dispatchEvent(b)}n("keyup",a)}function I(){const a=p(t.default,[]);return s.value===!0&&a.unshift(o("div",{class:"q-focus-helper",tabindex:-1,ref:c})),a}return()=>{const a={ref:r,class:x.value,style:L.value,role:"listitem",onClick:S,onKeyup:C};return s.value===!0?(a.tabindex=e.tabindex||"0",Object.assign(a,h.value)):f.value===!0&&(a["aria-disabled"]="true"),o(B.value,a,I())}}}),P=d({name:"QList",props:{...g,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const n=y(),l=k(e,n.proxy.$q),i=u(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(l.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>o(e.tag,{class:i.value},v(t.default))}});function M(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),j.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function N(e){return e.charAt(0).toUpperCase()+e.slice(1)}function O(e,t,n){return n<=t?t:Math.min(n,Math.max(t,e))}function T(e,t,n){if(n<=t)return t;const l=n-t+1;let i=t+(e-t)%l;return i<t&&(i=l+i),i===0?0:i}function U(e,t=2,n="0"){if(e==null)return e;const l=""+e;return l.length>=t?l:new Array(t-l.length+1).join(n)+l}export{$ as Q,K as a,O as b,M as c,z as d,P as e,N as f,T as n,U as p};
