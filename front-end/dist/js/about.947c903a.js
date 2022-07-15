"use strict";(self["webpackChunkfront_end"]=self["webpackChunkfront_end"]||[]).push([[443],{7046:function(a,e,l){l.r(e),l.d(e,{default:function(){return Z}});var t=l(3396);const o=a=>((0,t.dD)("data-v-96dba9ce"),a=a(),(0,t.Cn)(),a),m={class:"add__user__page"},n=o((()=>(0,t._)("h1",{class:"page__description"},"Add User",-1)));function r(a,e,l,o,r,s){const _=(0,t.up)("my-form");return(0,t.wg)(),(0,t.iD)("div",m,[n,(0,t.Wm)(_)])}const s=a=>((0,t.dD)("data-v-18646092"),a=a(),(0,t.Cn)(),a),_={class:"my__form",id:"my__form",onsubmit:"return false"},i=s((()=>(0,t._)("div",{class:"my__form__label__container"},[(0,t._)("label",{class:"my__form__label"},"Name")],-1))),d=s((()=>(0,t._)("div",{class:"my__form__label__container"},[(0,t._)("label",{class:"my__form__label"},"Avatar Link")],-1))),u=s((()=>(0,t._)("div",{class:"my__form__label__container"},[(0,t._)("label",{class:"my__form__label"},"City")],-1))),c=s((()=>(0,t._)("div",{class:"my__form__label__container"},[(0,t._)("label",{class:"my__form__label"},"Email")],-1))),y=s((()=>(0,t._)("div",{class:"my__form__label__container"},[(0,t._)("label",{class:"my__form__label"},"Phone")],-1))),p=s((()=>(0,t._)("div",{class:"my__form__label__container"},[(0,t._)("label",{class:"my__form__label"},"Site")],-1))),h=(0,t.Uk)(" Создать ");function v(a,e,l,o,m,n){const r=(0,t.up)("my-input"),s=(0,t.up)("my-button");return(0,t.wg)(),(0,t.iD)("form",_,[(0,t._)("div",null,[i,(0,t._)("div",null,[(0,t.Wm)(r,{modelValue:m.myFormData.name,"onUpdate:modelValue":e[0]||(e[0]=a=>m.myFormData.name=a),placeholder:"Boris"},null,8,["modelValue"])])]),(0,t._)("div",null,[d,(0,t._)("div",null,[(0,t.Wm)(r,{modelValue:m.myFormData.avatar,"onUpdate:modelValue":e[1]||(e[1]=a=>m.myFormData.avatar=a),placeholder:"https://somelink",typ:"url"},null,8,["modelValue"])])]),(0,t._)("div",null,[u,(0,t._)("div",null,[(0,t.Wm)(r,{modelValue:m.myFormData.city,"onUpdate:modelValue":e[2]||(e[2]=a=>m.myFormData.city=a),placeholder:"Москва",typ:"text"},null,8,["modelValue"])])]),(0,t._)("div",null,[c,(0,t._)("div",null,[(0,t.Wm)(r,{modelValue:m.myFormData.email,"onUpdate:modelValue":e[3]||(e[3]=a=>m.myFormData.email=a),placeholder:"yandex@mail.ru",typ:"email"},null,8,["modelValue","placeholder"])])]),(0,t._)("div",null,[y,(0,t._)("div",null,[(0,t.Wm)(r,{modelValue:m.myFormData.phone,"onUpdate:modelValue":e[4]||(e[4]=a=>m.myFormData.phone=a),placeholder:"+7(976)-999-00-00",typ:"tel"},null,8,["modelValue","placeholder"])])]),(0,t._)("div",null,[p,(0,t._)("div",null,[(0,t.Wm)(r,{modelValue:m.myFormData.site,"onUpdate:modelValue":e[5]||(e[5]=a=>m.myFormData.site=a),placeholder:"https://somelink",typ:"url"},null,8,["modelValue"])])]),(0,t.Wm)(s,{onClick:n.postRequest,style:{"align-self":"flex-start"},disableBtn:!n.canCreate},{default:(0,t.w5)((()=>[h])),_:1},8,["onClick","disableBtn"])])}l(6699);var f=l(6265),b=l.n(f),D=l(1210);const F=["disabled"];function V(a,e,l,o,m,n){return(0,t.wg)(),(0,t.iD)("button",{class:"my__button",disabled:!0===l.disableBtn},[(0,t.WI)(a.$slots,"default",{},void 0,!0)],8,F)}var g={name:"my-button",props:{disableBtn:{type:Boolean,required:!1}}},k=l(89);const C=(0,k.Z)(g,[["render",V],["__scopeId","data-v-f3a281da"]]);var U=C,W={name:"my-form",components:{MyInput:D.Z,MyButton:U},data(){return{myFormData:{name:"",avatar:"",email:"",city:"",phone:"",site:""}}},methods:{async postRequest(){await b()({method:"post",url:"/api/users",data:{name:this.myFormData.name,avatar:this.myFormData.avatar,email:this.myFormData.email,city:this.myFormData.city,phone:this.myFormData.phone,site:this.myFormData.site},headers:{"Content-Type":"application/json"}}).then((function(a){console.log("Ответ сервера успешно получен!"),console.log(a.data)})).catch((function(a){console.log(a)}));const a=this.myFormData;this.$store.commit("TestModule/pushUser",a),this.myFormData={name:"",avatar:"",email:"",city:"",phone:"",site:""},document.getElementById("my__form").reset()}},computed:{canCreate(){return this.myFormData.avatar&&this.myFormData.name&&this.myFormData.email.includes("@")&&this.myFormData.city&&16===this.myFormData.phone.length&&this.myFormData.site}}};const B=(0,k.Z)(W,[["render",v],["__scopeId","data-v-18646092"]]);var w=B,I={components:{MyForm:w}};const M=(0,k.Z)(I,[["render",r],["__scopeId","data-v-96dba9ce"]]);var Z=M}}]);
//# sourceMappingURL=about.947c903a.js.map