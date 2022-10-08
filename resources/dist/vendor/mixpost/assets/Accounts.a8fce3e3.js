import{e as F,c as k,o as l,a as w,w as s,b as e,n as y,u as h,d as t,E as S,r as v,L as j,f as u,_ as g,g as x,F as C,h as T,H as z,t as A,P as H,i as d,j as I}from"./app.60d19623.js";import{_ as V,T as L,F as N,a as E,b as P,c as M,d as B,e as R,f as W,M as q,g as G}from"./DropdownItem.eb4f6081.js";const J=()=>({notify:(o,a)=>{F.emit("notify",{variant:o,message:a})}}),K={class:"sm:flex sm:items-start"},O={class:"flex flex-col text-center sm:mt-0 sm:ml-4 mt-4 sm:mt-0 sm:text-left"},Q={class:"text-lg"},U={class:"mt-2"},X={__name:"ConfirmationModal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"md"},closeable:{type:Boolean,default:!0},variant:{type:String,default:"warning"}},emits:["close"],setup(n,{emit:o}){const a=n,_=k(()=>({warning:"bg-orange-100",danger:"bg-red-100"})[a.variant]),r=k(()=>({warning:"text-orange-600",danger:"text-red-600"})[a.variant]),i=()=>{o("close")};return(m,b)=>(l(),w(V,{show:n.show,"max-width":n.maxWidth,closeable:n.closeable,onClose:i},{body:s(()=>[e("div",K,[e("div",{class:y([h(_),"mx-auto shrink-0 flex items-center justify-center h-12 w-12 rounded-full sm:mx-0 sm:h-10 sm:w-10"])},[t(S,{class:y(h(r))},null,8,["class"])],2),e("div",O,[e("div",Q,[v(m.$slots,"header")]),e("div",U,[v(m.$slots,"body")])])])]),footer:s(()=>[v(m.$slots,"footer")]),_:3},8,["show","max-width","closeable"]))}},Y={class:"flex mr-4"},Z=e("span",{class:"flex flex-col items-start"},[e("span",{class:"font-semibold"},"Twitter"),e("span",null,"Connect a new Twitter profile")],-1),ee={__name:"AddTwitterAccount",setup(n){return(o,a)=>(l(),w(h(j),{href:o.route("mixpost.accounts.add",{provider:"twitter"}),method:"post",as:"button",type:"button",class:"w-full flex items-center px-6 py-4 hover:bg-twitter hover:bg-opacity-20 ease-in-out duration-200"},{default:s(()=>[e("span",Y,[t(L,{class:"text-twitter"})]),Z]),_:1},8,["href"]))}},te={class:"w-full flex items-center px-6 py-4 hover:bg-facebook hover:bg-opacity-20 ease-in-out duration-200"},se={class:"flex mr-4"},oe=e("span",{class:"flex flex-col items-start"},[e("span",{class:"font-semibold"},"Facebook"),e("span",null,"Connect a new Facebook profile")],-1),ne={__name:"AddFacebookAccount",setup(n){return(o,a)=>(l(),u("button",te,[e("span",se,[t(N,{class:"text-facebook"})]),oe]))}},ae={},ce={xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},le=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"},null,-1),ie=[le];function re(n,o){return l(),u("svg",ce,ie)}const de=g(ae,[["render",re]]),ue={},_e={xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},me=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"},null,-1),fe=[me];function he(n,o){return l(),u("svg",_e,fe)}const pe=g(ue,[["render",he]]),ve={},xe={xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},we=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"},null,-1),ge=[we];function be(n,o){return l(),u("svg",xe,ge)}const $e=g(ve,[["render",be]]),ke={class:"max-w-5xl mx-auto default-y-padding"},ye=d(" Connect a social account you'd like to manage. "),Ce={class:"mt-6 default-x-padding"},Ae={class:"grid grid-cols-4 gap-6"},Ie={class:"absolute top-0 right-0 mt-3 mr-3"},Me=d(" Refresh "),Be=d(" Delete "),De={class:"flex flex-col justify-center"},Fe={class:"mt-3 font-semibold text-center"},Se={class:"mt-1 text-center text-stone-800"},je={class:"block p-6"},Te={class:"flex flex-col justify-center items-center"},ze=e("span",{class:"mt-2 text-lg"},"Add account",-1),He={class:"flex flex-col"},Ve=d(" Delete account "),Le=d(" Are you sure you would like to delete this account? "),Ne=d("Cancel "),Ee=d("Delete "),We={__name:"Accounts",setup(n){const o="Social Accounts",{notify:a}=J(),_=x(!1),r=x(null),i=x(!1),m=p=>{I.Inertia.put(route("mixpost.accounts.update",{account:p}),{},{onSuccess(){a("success","Account has been refreshed")}})},b=()=>{I.Inertia.delete(route("mixpost.accounts.delete",{account:r.value}),{onStart(){i.value=!0},onSuccess(){r.value=null,a("success","Account deleted")},onFinish(){i.value=!1}})},$=()=>{i.value||(r.value=null)};return(p,f)=>(l(),u(C,null,[t(h(z),{title:o}),e("div",ke,[t(E,{title:o},{description:s(()=>[ye]),_:1}),e("div",Ce,[e("div",Ae,[(l(!0),u(C,null,T(p.$page.props.accounts,c=>(l(),w(q,{key:c.id,class:"relative"},{default:s(()=>[e("div",Ie,[t(R,{"width-classes":"w-32"},{trigger:s(()=>[t(M,{size:"xs"},{default:s(()=>[t(de)]),_:1})]),content:s(()=>[t(B,{onClick:D=>m(c.id),as:"button"},{default:s(()=>[t(pe,{class:"!w-4 !h-4 mr-1"}),Me]),_:2},1032,["onClick"]),t(B,{onClick:D=>r.value=c.id,as:"button"},{default:s(()=>[t($e,{class:"!w-4 !h-4 mr-1 text-red-500"}),Be]),_:2},1032,["onClick"])]),_:2},1024)]),e("div",De,[t(W,{size:"lg","img-url":c.image,provider:c.provider,active:!0},null,8,["img-url","provider"]),e("div",Fe,A(c.name),1),e("div",Se,"Added: "+A(c.created_at),1)])]),_:2},1024))),128)),e("button",{onClick:f[0]||(f[0]=c=>_.value=!0),class:"border border-indigo-800 rounded-lg hover:border-indigo-500 hover:text-indigo-500 transition-colors ease-in-out duration-200"},[e("span",je,[e("span",Te,[t(H,{class:"w-7 h-7"}),ze])])])])])]),t(P,{show:_.value,closeable:!0,onClose:f[1]||(f[1]=c=>_.value=!1)},{default:s(()=>[e("div",He,[t(ee),t(ne)])]),_:1},8,["show"]),t(X,{show:r.value!==null,onClose:$,variant:"danger"},{header:s(()=>[Ve]),body:s(()=>[Le]),footer:s(()=>[t(M,{onClick:$,disabled:i.value,class:"mr-2"},{default:s(()=>[Ne]),_:1},8,["disabled"]),t(G,{onClick:b,"is-loading":i.value,disabled:i.value},{default:s(()=>[Ee]),_:1},8,["is-loading","disabled"])]),_:1},8,["show"])],64))}};export{We as default};