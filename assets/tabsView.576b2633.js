import{q as s}from"./vendor.75aebe02.js";import{R as t,L as a,P as e,r as i,a as l,T as o}from"./index.cbbca19b.js";const n=[t,a,e],b=s({id:"tabs-view",state:()=>({tabsList:[]}),getters:{getTabsList:s=>s.tabsList.filter((s=>{var t;return!(null==(t=s.meta)?void 0:t.hideInTabs)&&i.hasRoute(s.name)}))},actions:{delCompFormClosedTabs(s){const t=l(),a=i.getRoutes(),e=s.reduce(((s,t)=>{var e,l,o;if(t.name&&i.hasRoute(t.name)){const i=null==(o=null==(l=null==(e=a.find((s=>s.name===t.name)))?void 0:e.components)?void 0:l.default)?void 0:o.name;i&&s.push(i)}return s}),[]);t.remove(e)},initTabs(s){this.tabsList=s},addTabs(s){if(n.includes(s.name))return!1;return this.tabsList.some((t=>t.fullPath==s.fullPath))||this.tabsList.push(s),!0},closeLeftTabs(s){const t=this.tabsList.findIndex((t=>t.fullPath==s.fullPath));this.delCompFormClosedTabs(this.tabsList.splice(0,t))},closeRightTabs(s){const t=this.tabsList.findIndex((t=>t.fullPath==s.fullPath));this.delCompFormClosedTabs(this.tabsList.splice(t+1))},closeOtherTabs(s){const t=this.tabsList.findIndex((t=>t.fullPath===s.fullPath));if(-1!==t){const s=this.tabsList.splice(t,1);this.delCompFormClosedTabs(this.tabsList),this.tabsList=s}},closeCurrentTab(s){const t=this.tabsList.findIndex((t=>t.fullPath==s.fullPath));this.delCompFormClosedTabs(this.tabsList.splice(t,1))},closeAllTabs(){this.delCompFormClosedTabs(this.tabsList),this.tabsList=[],localStorage.removeItem(o)},updateTabTitle(s){const t=i.currentRoute.value,a=this.tabsList.find((s=>s.fullPath===t.fullPath));a&&(a.meta.title=s)}}});export{n as b,b as u};
