!function(){var e=document.createElement("style");e.innerHTML=".login-box[data-v-d2d41128]{display:flex;width:100vw;height:100vh;padding-top:240px;background:url(/vite-vue3-admin/assets/login.dbbe1096.svg);background-size:100%;flex-direction:column;align-items:center}.login-box .login-logo[data-v-d2d41128]{display:flex;margin-bottom:30px;align-items:center}.login-box .login-logo .svg-icon[data-v-d2d41128]{font-size:48px}.login-box[data-v-d2d41128] .ant-form{width:400px}.login-box[data-v-d2d41128] .ant-form .ant-col{width:100%}.login-box[data-v-d2d41128] .ant-form .ant-form-item-label{padding-right:6px}\n",document.head.appendChild(e),System.register(["./vendor-legacy.5dcc4181.js","./index-legacy.3848137e.js"],(function(e){"use strict";var n,a,t,o,l,i,r,d,s,u,c,m,g,f,p,v,h,x,b,y,w,I,_,z;return{setters:[function(e){n=e.d,a=e.k,t=e.P,o=e.O,l=e.x,i=e.b,r=e.c,d=e.e,s=e.y,u=e.Q,c=e.z,m=e.W,g=e.U,f=e.bq,p=e.a1,v=e.p,h=e.g,x=e.h,b=e.u,y=e.N},function(e){w=e._,I=e.b,_=e.e,z=e.h}],execute:function(){const C={class:"login-box"},k={class:"login-logo"},U=(e=>(v("data-v-d2d41128"),e=e(),h(),e))((()=>d("h1",{class:"mb-0 ml-2 text-3xl font-bold"},"Antd Admin",-1))),S=["src"],j=x(" 登录 ");e("default",w(n({setup(e){const n=a({loading:!1,captcha:"",formInline:{username:"",password:"",verifyCode:"",captchaId:""}}),v=t(),h=o(),x=I(),w=async()=>{const{id:e,img:a}=await z({width:100,height:50});n.captcha=a,n.formInline.captchaId=e};w();const q=async()=>{const{username:e,password:a,verifyCode:t}=n.formInline;if(""==e.trim()||""==a.trim())return b.warning("用户名或密码不能为空！");if(!t)return b.warning("请输入验证码！");b.loading("登录中...",0),n.loading=!0;try{await x.login(n.formInline).finally((()=>{n.loading=!1,b.destroy()})),b.success("登录成功！"),setTimeout((()=>{var e;return h.replace(null!==(e=v.query.redirect)&&void 0!==e?e:"/")}))}catch(o){y.error({title:()=>"提示",content:()=>o.message}),w()}};return(e,a)=>{const t=l("a-input"),o=l("a-form-item"),v=l("a-button"),h=l("a-form");return i(),r("div",C,[d("div",k,[s(u(_),{name:"logo",size:45}),U]),s(h,{layout:"horizontal",model:u(n).formInline,onSubmit:p(q,["prevent"])},{default:c((()=>[s(o,null,{default:c((()=>[s(t,{value:u(n).formInline.username,"onUpdate:value":a[0]||(a[0]=e=>u(n).formInline.username=e),size:"large",placeholder:"rootadmin"},{prefix:c((()=>[s(u(m),{type:"user"})])),_:1},8,["value"])])),_:1}),s(o,null,{default:c((()=>[s(t,{value:u(n).formInline.password,"onUpdate:value":a[1]||(a[1]=e=>u(n).formInline.password=e),size:"large",type:"password",placeholder:"123456",autocomplete:"new-password"},{prefix:c((()=>[s(u(g),{type:"user"})])),_:1},8,["value"])])),_:1}),s(o,null,{default:c((()=>[s(t,{value:u(n).formInline.verifyCode,"onUpdate:value":a[2]||(a[2]=e=>u(n).formInline.verifyCode=e),placeholder:"验证码",maxlength:4,size:"large"},{prefix:c((()=>[s(u(f))])),suffix:c((()=>[d("img",{src:u(n).captcha,class:"absolute right-0 h-full cursor-pointer",onClick:w},null,8,S)])),_:1},8,["value"])])),_:1}),s(o,null,{default:c((()=>[s(v,{type:"primary","html-type":"submit",size:"large",loading:u(n).loading,block:""},{default:c((()=>[j])),_:1},8,["loading"])])),_:1})])),_:1},8,["model","onSubmit"])])}}}),[["__scopeId","data-v-d2d41128"]]))}}}))}();