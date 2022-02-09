var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,r=(e,t)=>{for(var a in t||(t={}))n.call(t,a)&&d(e,a,t[a]);if(l)for(var a of l(t))s.call(t,a)&&d(e,a,t[a]);return e},o=(e,l)=>t(e,a(l));import{d as i,r as u,au as c,b as p,c as m,e as y,a8 as f,h as b,y as h,X as v,bu as w,bH as I,ap as g,k as x,l as k,x as P,A as S,z as C,Q as j,aH as K,bN as T,C as _,bO as E,aX as O,ac as q,bP as N,bQ as R,t as $,az as D,a5 as F,bt as M,bR as V,N as A,bS as L}from"./vendor.75aebe02.js";/* empty css               */import{D as W}from"./dynamic-table.60ab9d56.js";import{y as X,B as z}from"./index.cbbca19b.js";import{g as H,u as Q,c as U,t as B,d as G,a as J}from"./index.2e5465d0.js";import{u as Y}from"./useFormModal.48bf546c.js";import{f as Z,a as ee}from"./utils.1ab06744.js";const te={class:"split-wrapper"},ae={class:"left-content"},le=b(" 右边内容区 "),ne=[y("i",null,null,-1),y("i",null,null,-1)],se={class:"right-content"},de=b(" 右边内容区 ");var re=i({setup(e){const t=u();let a,l;const n=c((function(e){t.value&&(t.value.style.width=l+e.clientX-a+"px")}),20),s=()=>{document.documentElement.style.userSelect="unset",document.documentElement.removeEventListener("mousemove",n),document.documentElement.removeEventListener("mouseup",s)},d=e=>{a=e.clientX,t.value&&(l=parseInt(window.getComputedStyle(t.value).width,10)),document.documentElement.style.userSelect="none",document.documentElement.addEventListener("mousemove",n),document.documentElement.addEventListener("mouseup",s)};return(e,a)=>(p(),m("div",te,[y("div",{ref_key:"scalable",ref:t,class:"scalable"},[y("div",ae,[f(e.$slots,"left-content",{},(()=>[le]))]),y("div",{ref:"separator",class:"separator",onMousedown:d},ne,544)],512),y("div",se,[f(e.$slots,"right-content",{},(()=>[de]))])]))}});function oe(e){return X({url:z.add,method:"post",data:e},{successMsg:"创建用户成功"})}function ie(e){return X({url:z.update,method:"post",data:e},{successMsg:"修改用户成功"})}function ue(e){return X({url:z.delete,method:"post",data:e})}const ce=[{field:"name",component:"Input",label:"部门名称",rules:[{required:!0,type:"string"}]},{field:"parentId",component:"TreeSelect",label:"上级部门",componentProps:{getPopupContainer:()=>document.body},rules:[{required:!0,type:"number"}]},{field:"orderNum",component:"InputNumber",label:"排序号",defaultValue:255,componentProps:{style:{width:"100%"}}}],pe=[{field:"departmentId",component:"TreeSelect",label:"所属部门",componentProps:{getPopupContainer:()=>document.body},rules:[{required:!0,type:"number"}]},{field:"roles",component:"Select",label:"所属角色",rules:[{required:!0,type:"array"}],componentProps:{mode:"multiple",request:async()=>(await H()).map((e=>({label:e.name,value:e.id})))}},{field:"username",component:"Input",label:"用户名",rules:[{required:!0}]},{field:"name",component:"Input",label:"姓名",colProps:{span:12},rules:[{required:!0}]},{field:"nickName",component:"Input",label:"呢称",colProps:{span:12}},{field:"email",component:"Input",label:"邮箱",colProps:{span:12}},{field:"phone",component:"Input",label:"手机",colProps:{span:12}},{field:"remark",component:"InputTextArea",label:"备注"},{field:"status",component:"RadioGroup",label:"状态",defaultValue:1,componentProps:{options:[{label:"启用",value:1},{label:"禁用",value:0}]}}],me=[{field:"password",component:"Input",label:"新密码",rules:[{required:!0,type:"string"}]}],ye=[{field:"departmentId",component:"TreeSelect",label:"转移至",rules:[{required:!0,type:"number"}]}];function fe(e){return"function"==typeof e||"[object Object]"===Object.prototype.toString.call(e)&&!I(e)}const be=[{title:"头像",width:80,dataIndex:"headImg",hideInSearch:!0,bodyCell:({record:e})=>h(v,{src:e.headImg},null)},{title:"姓名",width:120,dataIndex:"name",align:"center"},{title:"用户名",width:120,align:"center",dataIndex:"username"},{title:"所在部门",dataIndex:"departmentName",hideInSearch:!0,align:"center",width:180},{title:"所属角色",dataIndex:"roleNames",align:"center",hideInSearch:!0,width:220,bodyCell:({record:e})=>{let t;return h(g,null,fe(t=e.roleNames.map((e=>h(w,{color:"success",key:e},fe(e)?e:{default:()=>[e]}))))?t:{default:()=>[t]})}},{title:"呢称",width:120,align:"center",dataIndex:"nickName"},{title:"邮箱",width:120,align:"center",dataIndex:"email"},{title:"手机",width:120,align:"center",dataIndex:"phone"},{title:"备注",width:120,align:"center",dataIndex:"remark"},{title:"状态",dataIndex:"status",width:100,formItemProps:{component:"Select",componentProps:{options:[{label:"启用",value:1},{label:"禁用",value:0}]}},bodyCell:({record:e})=>{const t=1===e.status;return h(w,{color:t?"success":"red"},{default:()=>[t?"启用":"禁用"]})}}],he={class:"flex justify-between"},ve=y("div",null,"组织架构",-1),we=b("新增部门 "),Ie=b("刷新 "),ge=b(" 编辑 "),xe=b(" 删除 "),ke=b("取消选择"),Pe=b(" 新增 "),Se=b(" 转移 "),Ce=b(" 删除 ");var je=i(o(r({},{name:"SystemUser"}),{setup(e){const[t]=Y(),a=u(!1),l=u(),n=x({expandedKeys:[],departmentIds:[],deptTree:[]}),s=u({selectedRowKeys:[],onChange:(e,t)=>{s.value.selectedRowKeys=e}}),d=k((()=>s.value.selectedRowKeys.length)),i=async(e={})=>{var a,l,s;const[d]=await t({modalProps:{title:(e.id?"编辑":"新增")+"部门",width:700,onFinish:async t=>{t.id=e.id,await(e.id?Q:U)(t),v()}},formSchema:{labelWidth:100,layout:"vertical",schemas:ce}});null==(a=d.value)||a.updateSchema([{field:"parentId",componentProps:{treeDefaultExpandedKeys:[-1].concat((null==e?void 0:e.keyPath)||[]),treeData:[{value:-1,title:"#",children:n.deptTree}]}}]),null==(s=d.value)||s.setFieldsValue(o(r({},e),{parentId:null!=(l=e.parentId)?l:-1}))},c=async()=>{var e;const[a]=await t({modalProps:{title:"转移部门",width:700,onFinish:async e=>{await B({departmentId:e.departmentId,userIds:s.value.selectedRowKeys.map((e=>e))})}},formSchema:{labelWidth:100,layout:"vertical",schemas:ye}});null==(e=a.value)||e.updateSchema([{field:"departmentId",componentProps:{treeData:n.deptTree}}])},m=async(e={})=>{var a,s,d,r;const[o]=await t({modalProps:{title:(e.id?"编辑":"新增")+"用户",width:700,onFinish:async t=>{var a;t.id=e.id,await(e.id?ie:oe)(t),null==(a=l.value)||a.refreshTable()}},formSchema:{labelWidth:100,layout:"vertical",schemas:pe}});if(null==(s=o.value)||s.updateSchema([{field:"departmentId",componentProps:{treeDefaultExpandedKeys:(null==(a=Z(null==e?void 0:e.departmentId,n.deptTree))?void 0:a.keyPath)||[],treeData:n.deptTree}}]),null==(d=o.value)||d.setFieldsValue(e),null==e?void 0:e.id){const{roles:t}=await(i={userId:e.id},X({url:z.info,method:"get",params:i}));null==(r=o.value)||r.setFieldsValue({roles:t})}var i},f=async e=>{await t({modalProps:{title:`修改密码(${e.username})`,width:700,onFinish:async t=>{var a;await(a={userId:e.id,password:t.password},X({url:z.password,method:"post",data:a},{successMsg:"操作成功"}))}},formSchema:{labelWidth:100,layout:"vertical",schemas:me}})},v=async()=>{a.value=!0;const e=await J().finally((()=>a.value=!1));n.deptTree=ee(e),n.expandedKeys=[...n.expandedKeys,...n.deptTree.map((e=>Number(e.key)))]};v();const w=async e=>{var t;Array.isArray(e)?A.confirm({title:"确定要删除所选的用户吗?",icon:h(L,null,null),centered:!0,onOk:async()=>{await ue({userIds:e}),v()}}):await ue({userIds:[e]}).finally(null==(t=l.value)?void 0:t.refreshTable)},I=e=>{var t,a;n.departmentIds=e,null==(a=null==(t=null==l?void 0:l.value)?void 0:t.refreshTable)||a.call(t)},H=async({page:e,limit:t})=>{const a=await function(e){return X({url:z.page,method:"post",data:e})}({page:e,limit:t,departmentIds:n.departmentIds.length?n.departmentIds:void 0});return s.value.selectedRowKeys=[],a},te=[...be,{title:"操作",width:220,dataIndex:"$action",align:"center",fixed:"right",actions:({record:e})=>[{label:"编辑",auth:{perm:"sys.user.update",effect:"disable"},onClick:()=>m(e)},{label:"改密",auth:"sys.user.password",onClick:()=>f(e)},{label:"删除",auth:"sys.user.delete",popConfirm:{title:"你确定要删除吗？",onConfirm:()=>w(e.id)}}]}];return(e,t)=>{const r=P("a-button");return p(),S(j(re),null,{"left-content":C((()=>[y("div",he,[ve,h(j(g),null,{default:C((()=>[e.$auth("sys.dept.add")?(p(),S(j(K),{key:0,placement:"top"},{title:C((()=>[we])),default:C((()=>[h(j(T),{onClick:t[0]||(t[0]=e=>i({}))})])),_:1})):_("",!0),h(j(K),{placement:"top"},{title:C((()=>[Ie])),default:C((()=>[h(j(E),{spin:a.value,onClick:v},null,8,["spin"])])),_:1})])),_:1})]),h(j(D),{expandedKeys:j(n).expandedKeys,"onUpdate:expandedKeys":t[1]||(t[1]=e=>j(n).expandedKeys=e),autoExpandParent:"","tree-data":j(n).deptTree,onSelect:I},{title:C((({key:t,title:a,formData:l})=>[h(j(O),{trigger:["contextmenu"]},{overlay:C((()=>[h(j(q),null,{default:C((()=>[h(j(q).Item,{key:"1",disabled:!e.$auth("sys.dept.update"),onClick:e=>i(l)},{default:C((()=>[ge,h(j(N))])),_:2},1032,["disabled","onClick"]),h(j(q).Item,{key:"2",disabled:!e.$auth("sys.dept.delete"),onClick:e=>{return a=t,void A.confirm({title:"确定要删除该部门吗?",icon:h(L,null,null),centered:!0,onOk:async()=>{await G({departmentId:a}),v()}});var a}},{default:C((()=>[xe,h(j(R))])),_:2},1032,["disabled","onClick"])])),_:2},1024)])),default:C((()=>[y("span",null,$(a),1)])),_:2},1024)])),_:1},8,["expandedKeys","tree-data"])])),"right-content":C((()=>[h(j(W),{ref_key:"dynamicTableRef",ref:l,"header-title":"用户管理","show-index":"",titleTooltip:"请不要随意删除用户，避免到影响其他用户的使用。","data-request":H,columns:te,scroll:{x:2e3},"row-selection":s.value},F({toolbar:C((()=>[h(r,{type:"primary",disabled:!e.$auth("sys.user.add"),onClick:t[3]||(t[3]=e=>m({}))},{default:C((()=>[h(j(T)),Pe])),_:1},8,["disabled"]),h(r,{type:"success",disabled:!j(d)||!e.$auth("sys.dept.transfer"),onClick:c},{default:C((()=>[h(j(V)),Se])),_:1},8,["disabled"]),h(r,{type:"danger",disabled:!j(d)||!e.$auth("sys.user.delete"),onClick:t[4]||(t[4]=e=>w(s.value.selectedRowKeys))},{default:C((()=>[h(j(R)),Ce])),_:1},8,["disabled"])])),_:2},[j(d)?{name:"title",fn:C((()=>[h(j(M),{class:"w-full",type:"info","show-icon":""},{message:C((()=>[b(" 已选 "+$(j(d))+" 项 ",1),h(r,{type:"link",onClick:t[2]||(t[2]=e=>s.value.selectedRowKeys=[])},{default:C((()=>[ke])),_:1})])),_:1})]))}:void 0]),1032,["row-selection"])])),_:1})}}}));export{je as default};