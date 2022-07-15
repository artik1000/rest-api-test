(function(){"use strict";var e={5698:function(e,t,r){var n=r(9242),s=r(3396);const o={class:"main__nav"},a=(0,s.Uk)("Users"),u=(0,s.Uk)("AddUser"),i=(0,s.Uk)("User Page");function l(e,t){const r=(0,s.up)("router-link"),n=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("nav",o,[(0,s.Wm)(r,{to:"/"},{default:(0,s.w5)((()=>[a])),_:1}),(0,s.Wm)(r,{to:"/adduser"},{default:(0,s.w5)((()=>[u])),_:1}),(0,s.Wm)(r,{to:"/userpage"},{default:(0,s.w5)((()=>[i])),_:1})]),(0,s.Wm)(n)],64)}var c=r(89);const d={},p=(0,c.Z)(d,[["render",l]]);var f=p,m=r(2483);const h=e=>((0,s.dD)("data-v-0695fdd0"),e=e(),(0,s.Cn)(),e),v={class:"home"},g=h((()=>(0,s._)("h1",{class:"page__description"},"Users Page",-1)));function y(e,t,r,n,o,a){const u=(0,s.up)("user-slider");return(0,s.wg)(),(0,s.iD)("main",v,[g,(0,s.Wm)(u,{users:e.sortByCity,buttonEnable:!1},null,8,["users"])])}var _=r(65),w=r(7139);const U=e=>((0,s.dD)("data-v-88541f92"),e=e(),(0,s.Cn)(),e),b={key:0},k={class:"users__wrapper"},S={class:"pagination__wrapper"},C={key:1,style:{"text-align":"center"}},T=U((()=>(0,s._)("h1",null,"Пользователей нет",-1))),I=[T];function M(e,t,r,n,o,a){const u=(0,s.up)("my-sort-group"),i=(0,s.up)("user-item"),l=(0,s.up)("user-pagination");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(u),this.users.length>0?((0,s.wg)(),(0,s.iD)("div",b,[(0,s._)("section",k,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.users.slice(o.pageFirst,o.pageLast),(e=>((0,s.wg)(),(0,s.j4)(i,{key:e.id,user:e,buttonEnable:!0},null,8,["user"])))),128))]),(0,s._)("div",S,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(e.totalPages,(e=>((0,s.wg)(),(0,s.j4)(l,{key:e,class:(0,w.C_)({pagination__active:o.page===e}),onClick:t=>a.changePage(e)},{default:(0,s.w5)((()=>[(0,s.Uk)((0,w.zw)(e),1)])),_:2},1032,["class","onClick"])))),128))])])):((0,s.wg)(),(0,s.iD)("div",C,I))],64)}var O=r(3164);const D={class:"pagination"},j={class:"pagination__number"};function A(e,t,r,n,o,a){return(0,s.wg)(),(0,s.iD)("div",D,[(0,s._)("div",j,[(0,s.WI)(e.$slots,"default",{},void 0,!0)])])}var P={name:"user-pagination"};const E=(0,c.Z)(P,[["render",A],["__scopeId","data-v-5af13153"]]);var Z=E;const V={class:"sort__group"};function Q(e,t,r,n,o,a){const u=(0,s.up)("my-select"),i=(0,s.up)("my-input");return(0,s.wg)(),(0,s.iD)("div",V,[(0,s.Wm)(u,{"model-value":e.selectedSort,"onUpdate:modelValue":e.setSortUsers,options:o.sortOptions},null,8,["model-value","onUpdate:modelValue","options"]),(0,s.Wm)(i,{modelValue:e.searchQuery,"onUpdate:modelValue":[t[0]||(t[0]=t=>e.searchQuery=t),e.setSearchQuery],class:"search__input",placeholder:"Укажите город"},null,8,["modelValue","onUpdate:modelValue"])])}const B=e=>((0,s.dD)("data-v-7ceca3de"),e=e(),(0,s.Cn)(),e),L=["value"],W=B((()=>(0,s._)("option",{class:"option",value:"",disabled:"",selected:""},"По умолчанию",-1))),N=["value"];function q(e,t,r,n,o,a){return(0,s.wg)(),(0,s.iD)("select",{value:r.modelValue,onChange:t[0]||(t[0]=(...e)=>a.updateInput&&a.updateInput(...e)),class:"select"},[W,((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.options,(e=>((0,s.wg)(),(0,s.iD)("option",{key:e.value,value:e.value},(0,w.zw)(e.name),9,N)))),128))],40,L)}var z={name:"my-select",props:{modelValue:{type:String},options:{type:Array,default:()=>[]}},methods:{updateInput(e){this.$emit("update:modelValue",e.target.value)}}};const F=(0,c.Z)(z,[["render",q],["__scopeId","data-v-7ceca3de"]]);var H=F,$=r(1210),x={name:"my-sort-group",components:{MySelect:H,MyInput:$.Z},data(){return{sortOptions:[{value:"toAlph",name:"A-Z"},{value:"reverseAlph",name:"Z-A"}]}},methods:{...(0,_.OI)({setSearchQuery:"TestModule/setSearchQuery",setSortUsers:"TestModule/setSortUsers"})},computed:{...(0,_.rn)({selectedSort:e=>e.TestModule.selectedSort,searchQuery:e=>e.TestModule.searchQuery}),...(0,_.Se)({sortByCity:"TestModule/sortByCity"})}};const Y=(0,c.Z)(x,[["render",Q],["__scopeId","data-v-e58c8c18"]]);var K=Y,G={name:"user-slider",components:{MySortGroup:K,UserPagination:Z,UserItem:O.Z},props:{users:{type:Array,required:{type:Boolean,default:!0}}},data(){return{page:1,pageFirst:0,pageLast:5}},methods:{...(0,_.OI)({setUsers:"TestModule/setUsers"}),...(0,_.nv)({fetchUsers:"TestModule/fetchUsers"}),changePage(e){this.page=e,this.pageFirst=5*this.page-5,this.pageLast=5*this.page}},computed:{...(0,_.rn)({selectedSort:e=>e.TestModule.selectedSort,totalPages:e=>e.TestModule.totalPages}),...(0,_.Se)({})},mounted(){this.fetchUsers()}};const R=(0,c.Z)(G,[["render",M],["__scopeId","data-v-88541f92"]]);var J=R,X={name:"HomeView",components:{UserSlider:J},computed:{...(0,_.rn)({users:e=>e.TestModule.users}),...(0,_.Se)({sortByCity:"TestModule/sortByCity"})}};const ee=(0,c.Z)(X,[["render",y],["__scopeId","data-v-0695fdd0"]]);var te=ee;const re=[{path:"/",name:"home",component:te},{path:"/adduser",name:"adduser",component:()=>r.e(443).then(r.bind(r,7046))},{path:"/userpage",name:"userpage",component:()=>r.e(361).then(r.bind(r,1361))}],ne=(0,m.p7)({history:(0,m.PO)("/"),routes:re});var se=ne,oe=(r(6699),r(6265)),ae=r.n(oe);const ue={state:()=>({users:[],selectedSort:"",searchQuery:"",thisUser:"",gotUser:"",totalPages:2}),getters:{sortByCity(e){return[...e.users].sort(((t,r)=>t[e.selectedSort]?.localeCompare(r[e.selectedSort]))).filter((t=>t.city.toLowerCase().includes(e.searchQuery.toLowerCase())))}},mutations:{setGotUser(e,t){e.gotUser=t},showUser(e,t){e.thisUser=t.id},setUsers(e,t){e.users=t},pushUser(e,t){e.users.push(t)},setSortUsers(e,t){e.selectedSort=t,"toAlph"===t?(e.users=e.users.sort(((e,t)=>e.name.localeCompare(t.name))),e.selectedSort=""):"reverseAlph"===t&&(e.users=e.users.sort(((e,t)=>e.name.localeCompare(t.name))).reverse(),e.selectedSort="")},setSearchQuery(e,t){e.searchQuery=t},addUser(e,t){e.users.push(t)},removeUser(e,t){e.users=e.users.filter((e=>e.id!==t.id))}},actions:{async fetchUsers({state:e,commit:t}){try{const r=await ae().get("/api/users",{headers:{"Content-Type":"application/json"}});t("setUsers",r.data),e.totalPages=Math.ceil(this.users.length/5)}catch(r){console.log(r)}},async fetchUser({state:e,commit:t}){try{const r=await ae().get(`/api/users/${e.thisUser}`,{headers:{"Content-Type":"application/json"}});t("setGotUser",r.data),e.thisUser=""}catch(r){console.log(r)}}},namespaced:!0};var ie=(0,_.MT)({state:{},getters:{},mutations:{},actions:{},modules:{TestModule:ue}}),le=[O.Z,J,Z];const ce=(0,n.ri)(f);le.forEach((e=>{ce.component(e.name,e)})),ce.use(ie).use(se).mount("#app")},1210:function(e,t,r){r.d(t,{Z:function(){return d}});var n=r(3396);const s=["typle","vlaue","placeholder"],o=["typle","vlaue","placeholder"];function a(e,t,r,a,u,i){const l=(0,n.Q2)("maska");return"tel"===r.typ?(0,n.wy)(((0,n.wg)(),(0,n.iD)("input",{key:0,typle:r.typ,class:"my__input",vlaue:r.modelValue,placeholder:r.placeholder,onInput:t[0]||(t[0]=(...e)=>i.updateInput&&i.updateInput(...e)),required:""},null,40,s)),[[l,"+7(###)###-##-##"]]):((0,n.wg)(),(0,n.iD)("input",{key:1,class:"my__input",typle:r.typ,vlaue:r.modelValue,placeholder:r.placeholder,onInput:t[1]||(t[1]=(...e)=>i.updateInput&&i.updateInput(...e)),required:""},null,40,o))}var u=r(9583),i={name:"my-input",directives:{maska:u.RY},props:{modelValue:[String,Number],placeholder:String,typ:String},methods:{updateInput(e){this.$emit("update:modelValue",e.target.value)}}},l=r(89);const c=(0,l.Z)(i,[["render",a],["__scopeId","data-v-aa548022"]]);var d=c},3164:function(e,t,r){r.d(t,{Z:function(){return y}});var n=r(3396),s=r(7139);const o={class:"card__user"},a={class:"img__user__block"},u=["src"],i={class:"contacts__user"},l=(0,n.Uk)("сайт: "),c=["href"];function d(e,t,r,d,p,f){return(0,n.wg)(),(0,n.iD)("article",o,[(0,n._)("div",a,[(0,n._)("img",{class:"img__user",src:r.user.avatar,onClick:t[0]||(t[0]=e=>f.openUser(r.user))},null,8,u)]),(0,n._)("div",null,[(0,n._)("h1",{onClick:t[1]||(t[1]=e=>f.openUser(r.user))},"имя: "+(0,s.zw)(r.user.name),1)]),(0,n._)("div",null,[(0,n._)("h1",null,"город: "+(0,s.zw)(r.user.city),1)]),(0,n._)("div",i,[(0,n._)("div",null,[(0,n._)("h5",null,"телефон: "+(0,s.zw)(r.user.phone),1)]),(0,n._)("div",null,[(0,n._)("h5",null,"email: "+(0,s.zw)(r.user.email),1)])]),(0,n._)("div",null,[(0,n._)("h5",null,[l,(0,n._)("a",{href:r.user.site},(0,s.zw)(r.user.site),9,c)])]),!0===r.buttonEnable?((0,n.wg)(),(0,n.iD)("button",{key:0,class:"btn__remove",onClick:t[2]||(t[2]=e=>f.removeUser(r.user))},"Удалить")):(0,n.kq)("",!0)])}var p=r(6265),f=r.n(p),m=r(65),h={name:"user-item",props:{user:{type:Object,required:!0},buttonEnable:Boolean},methods:{async removeUser(e){await f()["delete"](`/api/users/${e.id}`,{headers:{"Content-Type":"application/json"}}),this.$store.commit("TestModule/removeUser",e)},openUser(e){this.showUser(e),this.fetchUser(),this.$router.push("/userpage")},...(0,m.OI)({showUser:"TestModule/showUser"}),...(0,m.nv)({fetchUser:"TestModule/fetchUser"})}},v=r(89);const g=(0,v.Z)(h,[["render",d],["__scopeId","data-v-5f3e10a3"]]);var y=g}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.m=e,function(){var e=[];r.O=function(t,n,s,o){if(!n){var a=1/0;for(c=0;c<e.length;c++){n=e[c][0],s=e[c][1],o=e[c][2];for(var u=!0,i=0;i<n.length;i++)(!1&o||a>=o)&&Object.keys(r.O).every((function(e){return r.O[e](n[i])}))?n.splice(i--,1):(u=!1,o<a&&(a=o));if(u){e.splice(c--,1);var l=s();void 0!==l&&(t=l)}}return t}o=o||0;for(var c=e.length;c>0&&e[c-1][2]>o;c--)e[c]=e[c-1];e[c]=[n,s,o]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/"+(443===e?"about":e)+"."+{361:"0fd0c53c",443:"947c903a"}[e]+".js"}}(),function(){r.miniCssF=function(e){return"css/"+(443===e?"about":e)+"."+{361:"9d6c007f",443:"e8287a32"}[e]+".css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="front-end:";r.l=function(n,s,o,a){if(e[n])e[n].push(s);else{var u,i;if(void 0!==o)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+o){u=d;break}}u||(i=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.setAttribute("data-webpack",t+o),u.src=n),e[n]=[s];var p=function(t,r){u.onerror=u.onload=null,clearTimeout(f);var s=e[n];if(delete e[n],u.parentNode&&u.parentNode.removeChild(u),s&&s.forEach((function(e){return e(r)})),t)return t(r)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),i&&document.head.appendChild(u)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var e=function(e,t,r,n){var s=document.createElement("link");s.rel="stylesheet",s.type="text/css";var o=function(o){if(s.onerror=s.onload=null,"load"===o.type)r();else{var a=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.href||t,i=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");i.code="CSS_CHUNK_LOAD_FAILED",i.type=a,i.request=u,s.parentNode.removeChild(s),n(i)}};return s.onerror=s.onload=o,s.href=t,document.head.appendChild(s),s},t=function(e,t){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var s=r[n],o=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(o===e||o===t))return s}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){s=a[n],o=s.getAttribute("data-href");if(o===e||o===t)return s}},n=function(n){return new Promise((function(s,o){var a=r.miniCssF(n),u=r.p+a;if(t(a,u))return s();e(n,u,s,o)}))},s={143:0};r.f.miniCss=function(e,t){var r={361:1,443:1};s[e]?t.push(s[e]):0!==s[e]&&r[e]&&t.push(s[e]=n(e).then((function(){s[e]=0}),(function(t){throw delete s[e],t})))}}(),function(){var e={143:0};r.f.j=function(t,n){var s=r.o(e,t)?e[t]:void 0;if(0!==s)if(s)n.push(s[2]);else{var o=new Promise((function(r,n){s=e[t]=[r,n]}));n.push(s[2]=o);var a=r.p+r.u(t),u=new Error,i=function(n){if(r.o(e,t)&&(s=e[t],0!==s&&(e[t]=void 0),s)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",u.name="ChunkLoadError",u.type=o,u.request=a,s[1](u)}};r.l(a,i,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,o,a=n[0],u=n[1],i=n[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(s in u)r.o(u,s)&&(r.m[s]=u[s]);if(i)var c=i(r)}for(t&&t(n);l<a.length;l++)o=a[l],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(c)},n=self["webpackChunkfront_end"]=self["webpackChunkfront_end"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(5698)}));n=r.O(n)})();
//# sourceMappingURL=app.9917bf25.js.map