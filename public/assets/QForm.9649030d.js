import{l as E,r as P,a0 as A,az as q,aA as B,t as I,n as R,p as V,z as O,bg as Q,O as S,y as j,aT as z,bh as D}from"./index.9c5c742c.js";var K=E({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(r,{slots:F,emit:f}){const C=O(),u=P(null);let i=0;const s=[];function d(e){const a=typeof e=="boolean"?e:r.noErrorFocus!==!0,l=++i,h=(t,o)=>{f("validation"+(t===!0?"Success":"Error"),o)},x=t=>{const o=t.validate();return typeof o.then=="function"?o.then(n=>({valid:n,comp:t}),n=>({valid:!1,comp:t,err:n})):Promise.resolve({valid:o,comp:t})};return(r.greedy===!0?Promise.all(s.map(x)).then(t=>t.filter(o=>o.valid!==!0)):s.reduce((t,o)=>t.then(()=>x(o).then(n=>{if(n.valid===!1)return Promise.reject(n)})),Promise.resolve()).catch(t=>[t])).then(t=>{if(t===void 0||t.length===0)return l===i&&h(!0),!0;if(l===i){const{comp:o,err:n}=t[0];if(n!==void 0&&console.error(n),h(!1,o),a===!0){const g=t.find(({comp:p})=>typeof p.focus=="function"&&Q(p.$)===!1);g!==void 0&&g.comp.focus()}}return!1})}function v(){i++,s.forEach(e=>{typeof e.resetValidation=="function"&&e.resetValidation()})}function m(e){e!==void 0&&S(e);const a=i+1;d().then(l=>{a===i&&l===!0&&(r.onSubmit!==void 0?f("submit",e):e!==void 0&&e.target!==void 0&&typeof e.target.submit=="function"&&e.target.submit())})}function b(e){e!==void 0&&S(e),f("reset"),j(()=>{v(),r.autofocus===!0&&r.noResetFocus!==!0&&c()})}function c(){z(()=>{if(u.value===null)return;const e=u.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||u.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||u.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(u.value.querySelectorAll("[tabindex]"),a=>a.tabIndex>-1);e!=null&&e.focus({preventScroll:!0})})}A(D,{bindComponent(e){s.push(e)},unbindComponent(e){const a=s.indexOf(e);a>-1&&s.splice(a,1)}});let y=!1;return q(()=>{y=!0}),B(()=>{y===!0&&r.autofocus===!0&&c()}),I(()=>{r.autofocus===!0&&c()}),Object.assign(C.proxy,{validate:d,resetValidation:v,submit:m,reset:b,focus:c,getValidationComponents:()=>s}),()=>R("form",{class:"q-form",ref:u,onSubmit:m,onReset:b},V(F.default))}});export{K as Q};