var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;import{D as c}from"./dynamic-table.60ab9d56.js";import{b as o}from"./index.9baefb5e.js";import{d,b as i,A as u,Q as b,y as p,F as m,h as f,bu as y,bH as g}from"./vendor.75aebe02.js";import"./index.cbbca19b.js";var j,O=d((j=((e,t)=>{for(var a in t||(t={}))n.call(t,a)&&s(e,a,t[a]);if(r)for(var a of r(t))l.call(t,a)&&s(e,a,t[a]);return e})({},{name:"SystemScheduleTaskLog"}),t(j,a({setup(e){const t=e=>{switch(e){case 0:return"danger";case 1:return"success"}},a=[{title:"#",dataIndex:"id",width:80,align:"center",hideInSearch:!0},{title:"任务编号",dataIndex:"taskId",align:"center"},{title:"任务名称",dataIndex:"name",align:"center"},{title:"异常信息",dataIndex:"detail",align:"center",bodyCell:({record:e})=>{var t;return p(m,null,[null!=(t=e.detail)?t:"无"])}},{title:"耗时",dataIndex:"consumeTime",align:"center",bodyCell:({record:e})=>p(y,null,{default:()=>[e.consumeTime,f("ms")]})},{title:"状态",dataIndex:"status",align:"center",bodyCell:({record:e})=>{let a;return p(y,{color:t(e.status)},"function"==typeof(r=a=(e=>{switch(e){case 0:return"失败";case 1:return"成功"}})(e.status))||"[object Object]"===Object.prototype.toString.call(r)&&!g(r)?a:{default:()=>[a]});var r}},{title:"执行时间",dataIndex:"createdAt",align:"center"}];return(e,t)=>(i(),u(b(c),{"header-title":"任务日志","data-request":b(o),search:!1,columns:a},null,8,["data-request"]))}}))));export{O as default};
