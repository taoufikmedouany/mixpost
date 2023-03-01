import{r as p,o as w,m as v,w as t,b as s,a as e,f as r,d as h}from"./app.b3b20422.js";import{u as x}from"./useNotifications.6c8b84e4.js";import{a as V,_ as g}from"./PrimaryButton.98cb8c43.js";import{_ as c}from"./Input.6c383a39.js";import{T}from"./Facebook.b8b3d986.js";import{H as m}from"./HorizontalGroup.5b2c74f3.js";import{_ as k,a as d}from"./ReadDocHelp.e8d7194e.js";const y={class:"flex items-center"},S={class:"mr-xs"},$=s("span",null,"Twitter",-1),b=s("a",{href:"https://developer.twitter.com/en/portal/projects-and-apps",class:"link",target:"_blank"},"Create an App on Twitter",-1),A=r('. You will need to edit the App Permissions and allow "Read and Write". '),I=r("API Key"),N={class:"w-full"},B=r("API Secret"),C={class:"w-full"},P=r("Save"),G={__name:"TwitterServiceForm",props:{form:{required:!0,type:Object}},setup(o){const u=o,{notify:_}=x(),a=p({}),f=()=>{a.value={},h.Inertia.put(route("mixpost.services.update",{service:"twitter"}),u.form,{preserveScroll:!0,onSuccess(){_("success","Twitter credentials have been saved")},onError:n=>{a.value=n}})};return(n,l)=>(w(),v(g,null,{title:t(()=>[s("div",y,[s("span",S,[e(T,{class:"text-twitter"})]),$])]),description:t(()=>[b,A,e(k,{class:"mt-xs"})]),default:t(()=>[e(m,{class:"mt-lg"},{title:t(()=>[I]),default:t(()=>[s("div",N,[e(c,{modelValue:o.form.client_id,"onUpdate:modelValue":l[0]||(l[0]=i=>o.form.client_id=i),type:"text",autocomplete:"off"},null,8,["modelValue"]),e(d,{message:a.value.client_id},null,8,["message"])])]),_:1}),e(m,{class:"mt-lg"},{title:t(()=>[B]),default:t(()=>[s("div",C,[e(c,{modelValue:o.form.client_secret,"onUpdate:modelValue":l[1]||(l[1]=i=>o.form.client_secret=i),type:"password",autocomplete:"new-password"},null,8,["modelValue"]),e(d,{message:a.value.client_secret},null,8,["message"])])]),_:1}),e(V,{onClick:f,class:"mt-lg"},{default:t(()=>[P]),_:1})]),_:1}))}};export{G as default};