System.register(["./dynamic-table-legacy.6b219129.js","./vendor-legacy.5dcc4181.js","./index-legacy.e71e91b3.js","./index-legacy.3848137e.js"],(function(e){"use strict";var t,n,a,r,i,d,l,c;return{setters:[function(e){t=e.D},function(e){n=e.d,a=e.b,r=e.A,i=e.Q,d=e.y,l=e.bu},function(e){c=e.g},function(){}],execute:function(){e("default",n({name:"SystemMonitorReqLog",setup(e){const n=[{title:"请求IP",dataIndex:"ip",width:150,align:"center"},{title:"操作人ID",dataIndex:"userId",align:"center",width:100},{title:"请求方式",dataIndex:"method",align:"center",bodyCell:({record:e})=>d(l,{color:"processing"},{default:()=>[e.method]})},{title:"请求参数",dataIndex:"params",align:"center",ellipsis:!0,width:150},{title:"请求地址",dataIndex:"action",align:"center"},{title:"响应状态",dataIndex:"status",align:"center",width:120,bodyCell:({record:e})=>{return d(l,{color:(t=e.status,t>=200&&t<300?"success":t>=300&&t<400?"default":t>=400&&t<500?"warning":t>=500?"error":"default")},{default:()=>[e.status]});var t}},{title:"耗时",dataIndex:"consumeTime",align:"center",width:120,bodyCell:({record:e})=>{return d(l,{color:(t=e.consumeTime,t<=20?"success":t<=40?"warning":"error")},{default:()=>[`${e.consumeTime}ms`]});var t}},{title:"操作时间",dataIndex:"createTime",align:"center",width:220}];return(e,d)=>(a(),r(i(t),{"header-title":"请求日志","title-tooltip":"这是mock数据","data-request":i(c),columns:n},null,8,["data-request"]))}}))}}}));
