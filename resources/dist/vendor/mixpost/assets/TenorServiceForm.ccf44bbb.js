import{r as _,o as d,m as f,w as e,a as s,b as o,f as r,d as p}from"./app.b4464951.js";import{u as v}from"./useNotifications.2fb33d77.js";import{a as h,_ as x}from"./PrimaryButton.960a9bd1.js";import{_ as g}from"./Input.df0c9ffc.js";import{H as y}from"./HorizontalGroup.211fbd66.js";import{_ as V,a as k}from"./ReadDocHelp.48f27f8f.js";const T=o("div",{class:"flex items-center"}," Tenor ",-1),$=o("p",null,"With Tenor you can use GIF's directly in Mixpost.",-1),b=o("p",null,[o("a",{href:"https://console.cloud.google.com/",class:"link",target:"_blank"},"Create an App on Google Console"),r(". ")],-1),C=r("API Key"),N={class:"w-full"},S=r("Save"),H={__name:"TenorServiceForm",props:{form:{required:!0,type:Object}},setup(t){const c=t,{notify:i}=v(),a=_({}),m=()=>{a.value={},p.Inertia.put(route("mixpost.services.update",{service:"tenor"}),c.form,{preserveScroll:!0,onSuccess(){i("success","Tenor credentials have been saved")},onError:l=>{a.value=l}})};return(l,n)=>(d(),f(x,null,{title:e(()=>[T]),description:e(()=>[$,b,s(V,{class:"mt-xs"})]),default:e(()=>[s(y,{class:"mt-lg"},{title:e(()=>[C]),default:e(()=>[o("div",N,[s(g,{modelValue:t.form.client_id,"onUpdate:modelValue":n[0]||(n[0]=u=>t.form.client_id=u),type:"text",autocomplete:"off"},null,8,["modelValue"]),s(k,{message:a.value.client_id},null,8,["message"])])]),_:1}),s(h,{onClick:m,class:"mt-lg"},{default:e(()=>[S]),_:1})]),_:1}))}};export{H as default};