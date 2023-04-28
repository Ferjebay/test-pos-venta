import{d as C,r as u,C as N,_ as q,o as p,a9 as g,g as t,f as o,ap as y,e as s,Q as b,h as V,ar as U,ad as E,c as Q,au as D,af as z,bj as B,aa as w,ao as L,i as h,ab as O,ac as R}from"./index.9c5c742c.js";import{Q as T}from"./QSpace.6c16747b.js";import{a as F,b as k}from"./QTable.28ce5880.js";import{Q as S}from"./QBadge.1183cf7c.js";import{u as M,Q as G}from"./useRolPermisos.8610c2bb.js";import{Q as H}from"./QPage.27f1013e.js";import{a as I,A as _,u as J}from"./Api.dae86ed2.js";import{Q as j}from"./QForm.9649030d.js";import"./format.bda3f914.js";import"./auth-user.39da1b8c.js";import"./index.2cf0d985.js";const K=C({name:"AgregarProveedor",setup(e,{emit:a}){const r=u(!1),i=u({nombre:"",direccion:"",punto_emision:""}),m=I(),c=async()=>{try{r.value=!0,await _.post("/puntos_ventas",i.value),a("actualizarLista"),m.notify({color:"positive",message:"Proveedor Agregado Exitosamente",icon:"done"}),r.value=!1}catch(n){console.log(n),r.value=!1}};return N(i.value,(n,d)=>{i.value.nombre=n.nombre.toUpperCase()}),{formPV:i,loading:r,onSubmit:c}}}),W=s("div",{class:"text-h6"},"Agregar Punto de Venta",-1),X={class:"row q-gutter-sm justify-around"},Y={class:"col-xs-12 col-sm-11"},Z=s("label",null,"Nombre:",-1),ee={class:"col-xs-12 col-sm-11"},oe=s("label",null,"Direcci\xF3n:",-1),ae={class:"col-xs-6 col-sm-5"},le=s("label",null,"Punto de Emisi\xF3n:",-1),se={class:"col-xs-9 col-sm-12 flex justify-center"};function ne(e,a,r,i,m,c){return p(),g(U,{style:{width:"500px","max-width":"80vw"}},{default:t(()=>[o(y,null,{default:t(()=>[W]),_:1}),o(y,null,{default:t(()=>[o(j,{onSubmit:e.onSubmit},{default:t(()=>[s("div",X,[s("div",Y,[Z,o(b,{modelValue:e.formPV.nombre,"onUpdate:modelValue":a[0]||(a[0]=n=>e.formPV.nombre=n),dense:"",filled:"",required:""},null,8,["modelValue"])]),s("div",ee,[oe,o(b,{modelValue:e.formPV.direccion,"onUpdate:modelValue":a[1]||(a[1]=n=>e.formPV.direccion=n),dense:"",filled:"",required:""},null,8,["modelValue"])]),s("div",ae,[le,o(b,{modelValue:e.formPV.punto_emision,"onUpdate:modelValue":a[2]||(a[2]=n=>e.formPV.punto_emision=n),"input-class":"text-center",dense:"",filled:"",required:""},null,8,["modelValue"])]),s("div",se,[o(V,{label:"Guardar",class:"q-px-xl",loading:e.loading,type:"submit",color:"green-9"},null,8,["loading"])])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})}var te=q(K,[["render",ne]]);const re=C({name:"EditarPV",props:["pvData"],setup(e,{emit:a}){const{id:r,nombre:i,direccion:m,punto_emision:c}=e.pvData,n=u(!1),d=u({id:r,nombre:i,direccion:m,punto_emision:c}),l=I(),f=async()=>{try{n.value=!0,await _.put("/puntos_ventas",d.value),a("actualizarLista"),l.notify({color:"positive",message:"Punto de Venta Editado Exitosamente",icon:"done"}),n.value=!1}catch(P){console.log(P),n.value=!1}};return N(d.value,(P,A)=>{d.value.nombre=P.nombre.toUpperCase()}),{formPV:d,loading:n,onSubmit:f}}}),ie=s("div",{class:"text-h6"},"Editar Punto de Venta",-1),de={class:"row q-gutter-sm justify-around"},ue={class:"col-xs-12 col-sm-11"},me=s("label",null,"Nombre:",-1),ce={class:"col-xs-12 col-sm-11"},pe=s("label",null,"Direcci\xF3n:",-1),fe={class:"col-xs-6 col-sm-5"},ve=s("label",null,"Punto de Emisi\xF3n:",-1),ge={class:"col-xs-9 col-sm-12 flex justify-center"};function Ve(e,a,r,i,m,c){return p(),g(U,{style:{width:"500px","max-width":"80vw"}},{default:t(()=>[o(y,null,{default:t(()=>[ie]),_:1}),o(y,null,{default:t(()=>[o(j,{onSubmit:e.onSubmit},{default:t(()=>[s("div",de,[s("div",ue,[me,o(b,{modelValue:e.formPV.nombre,"onUpdate:modelValue":a[0]||(a[0]=n=>e.formPV.nombre=n),dense:"",filled:"",required:""},null,8,["modelValue"])]),s("div",ce,[pe,o(b,{modelValue:e.formPV.direccion,"onUpdate:modelValue":a[1]||(a[1]=n=>e.formPV.direccion=n),dense:"",filled:"",required:""},null,8,["modelValue"])]),s("div",fe,[ve,o(b,{modelValue:e.formPV.punto_emision,"onUpdate:modelValue":a[2]||(a[2]=n=>e.formPV.punto_emision=n),"input-class":"text-center",dense:"",filled:"",required:""},null,8,["modelValue"])]),s("div",ge,[o(V,{loading:e.loading,label:"Editar",class:"q-px-xl",type:"submit",color:"green-9"},null,8,["loading"])])])]),_:1},8,["onSubmit"])]),_:1})]),_:1})}var be=q(re,[["render",Ve]]);const Pe=[{name:"id",label:"#",align:"left",field:"id",sortable:!0},{name:"nombre",align:"center",label:"NOMBRE",field:"nombre",sortable:!0},{name:"punto_emision",align:"center",label:"PUNTO DE EMISION",field:"punto_emision"},{name:"direccion",align:"center",label:"DIRECCION",field:"direccion"},{name:"acciones",label:"ACCIONES",align:"center"}],_e=C({name:"IndexPV",components:{Add:te,Editar:be},setup(){const{validarPermisos:e}=M(),a=u(""),r=u([]),i=u(!1),m=u(!1),c=u(!1),n=u({}),{mostrarNotify:d}=J(),l=async()=>{i.value=!1,m.value=!1,c.value=!0;try{const{data:{puntos_ventas:v}}=await _.get("/puntos_ventas");r.value=v}catch(v){console.log(v)}c.value=!1},f=async(v,$)=>{try{await _.delete(`/puntos_ventas/${v}/${$}`),d("positive","Punto de Venta actualizado exitosamente"),l()}catch(x){console.log(x)}},P=async v=>{B.create({title:"\xBFDeseas Eliminar este punto de venta?",message:"Una vez eliminado no podra recuperarse...!",ok:{push:!0,label:"Eliminar",color:"teal-7"},cancel:{push:!0,color:"blue-grey-8",label:"Cancelar"}}).onOk(async()=>{try{await _.delete(`/puntos_ventas/${v}`),d("positive","Punto de Venta eliminado exitosamente"),l()}catch($){d("negative",$.response.data.message)}})},A=v=>{n.value=v,m.value=!0};return l(),{editarProveedor:A,eliminarPV:P,modalAgregarPV:i,modalEditarPV:m,activarDesactivarPV:f,columns:Pe,loading:c,filter:a,getPV:l,isPwd:u(!0),rows:r,pvData:n,validarPermisos:e}}}),ye=s("div",{class:"col-md-6"},[s("label",{class:"text-h6"},"Listado de Puntos de Ventas")],-1),$e={class:"col-md-6 flex justify-end"},we={class:"row"},he={class:"col-md-12 col-xs-12"},ke={class:"q-pa-md"},Ce={class:"full-width row flex-center text-lime-10 q-gutter-sm"},qe=s("span",{class:"text-subtitle1"}," No se encontr\xF3 ningun Resultado ",-1);function Ae(e,a,r,i,m,c){const n=E("Add"),d=E("Editar");return p(),Q(z,null,[o(H,null,{default:t(()=>[s("div",{class:L(["row q-py-lg q-pl-md",e.$q.screen.xs?"justify-center":"justify-between"])},[ye,s("div",$e,[e.validarPermisos("Agregar PV")&&!e.$q.screen.xs?(p(),g(V,{key:0,color:"secondary","icon-right":"add_circle",label:"Agregar Punto de Venta",class:"q-mr-md",onClick:a[0]||(a[0]=l=>e.modalAgregarPV=!e.modalAgregarPV)})):w("",!0)])],2),s("div",we,[s("div",he,[s("div",ke,[o(F,{class:"my-sticky-header-table",rows:e.rows,columns:e.columns,loading:e.loading,filter:e.filter,"row-key":"name"},{top:t(()=>[o(T),o(b,{dense:"",debounce:"300",color:"primary",modelValue:e.filter,"onUpdate:modelValue":a[1]||(a[1]=l=>e.filter=l)},{append:t(()=>[o(h,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-id":t(l=>[o(k,{props:l},{default:t(()=>[O(R(l.pageIndex+1),1)]),_:2},1032,["props"])]),"body-cell-estado":t(l=>[o(k,{props:l},{default:t(()=>[l.value?(p(),g(S,{key:0,outline:"",color:"positive",label:"Activo",class:"q-pa-sm"})):(p(),g(S,{key:1,outline:"",color:"red",label:"Inactivo",class:"q-pa-sm"}))]),_:2},1032,["props"])]),"body-cell-acciones":t(l=>[o(k,{props:l},{default:t(()=>[e.validarPermisos("Editar PV")?(p(),g(V,{key:0,round:"",color:"primary",onClick:f=>e.editarProveedor(l.row),icon:"edit",class:"q-mr-sm",size:"11px"},null,8,["onClick"])):w("",!0),l.row.estado?(p(),g(V,{key:1,round:"",color:"blue-grey",icon:"close",onClick:f=>e.activarDesactivarPV(l.row.id,!1),size:"11px"},null,8,["onClick"])):(p(),Q(z,{key:2},[o(V,{round:"",color:"positive",class:"q-mr-sm",icon:"done",onClick:f=>e.activarDesactivarPV(l.row.id,!0),size:"11px"},null,8,["onClick"]),o(V,{round:"",color:"deep-orange",icon:"delete",onClick:f=>e.eliminarPV(l.row.id),size:"11px"},null,8,["onClick"])],64))]),_:2},1032,["props"])]),"no-data":t(({icon:l,filter:f})=>[s("div",Ce,[o(h,{size:"2em",name:"sentiment_dissatisfied"}),qe,o(h,{size:"2em",name:f?"filter_b_and_w":l},null,8,["name"])])]),_:1},8,["rows","columns","loading","filter"])])])]),e.$q.screen.xs&&e.validarPermisos("Agregar PV")?(p(),g(G,{key:0,position:"bottom-right",offset:[18,18]},{default:t(()=>[o(V,{round:"",color:"secondary",size:"lg",icon:"add",onClick:a[2]||(a[2]=l=>e.modalAgregarPV=!e.modalAgregarPV)})]),_:1})):w("",!0)]),_:1}),o(D,{modelValue:e.modalAgregarPV,"onUpdate:modelValue":a[3]||(a[3]=l=>e.modalAgregarPV=l)},{default:t(()=>[o(n,{onActualizarLista:e.getPV},null,8,["onActualizarLista"])]),_:1},8,["modelValue"]),o(D,{modelValue:e.modalEditarPV,"onUpdate:modelValue":a[4]||(a[4]=l=>e.modalEditarPV=l)},{default:t(()=>[o(d,{pvData:e.pvData,onActualizarLista:e.getPV},null,8,["pvData","onActualizarLista"])]),_:1},8,["modelValue"])],64)}var Le=q(_e,[["render",Ae]]);export{Le as default};
