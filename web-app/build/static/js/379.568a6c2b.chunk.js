"use strict";(self.webpackChunkweb_app=self.webpackChunkweb_app||[]).push([[379],{45902:(e,s,n)=>{n.d(s,{Z:()=>o});n(72791);var l=n(36314),t=n(80184);const o=e=>{let{label:s=null,value:n="-",orientation:o="column",stkProps:r={},lblProps:i={},valProps:a={}}=e;return(0,t.jsxs)(l.Z,{direction:{xs:"column",sm:o},...r,children:[(0,t.jsx)("label",{style:{marginRight:5,fontWeight:600},...i,children:s}),(0,t.jsx)("label",{style:{marginRight:5,fontWeight:500},...a,children:n})]})}},51379:(e,s,n)=>{n.r(s),n.d(s,{default:()=>k});var l=n(72791),t=n(78687),o=n(57689),r=n(11135),i=n(25787),a=n(23814),u=n(61889),d=n(41320),c=n(27391),x=n(63466),m=n(75952),v=n(3216),j=n(17238),p=n(27454),f=n(72455),h=n(45248),g=n(80184);const y=(0,f.Z)((e=>(0,r.Z)({...a.oZ,...a.OR,...a.VX,...a.Bz}))),b=e=>{let{setPoolDetailsView:s}=e;const n=(0,d.TL)(),r=(0,o.s0)(),i=y(),a=(0,t.v9)((e=>e.tenants.loadingTenant)),f=(0,t.v9)((e=>e.tenants.tenantInfo)),[b,Z]=(0,l.useState)([]),[C,A]=(0,l.useState)("");(0,l.useEffect)((()=>{if(f){const e=f.pools?f.pools:[];Z(e)}}),[f]);const P=b.filter((e=>{var s;return!(null===(s=e.name)||void 0===s||!s.toLowerCase().includes(C.toLowerCase()))})),N=[{type:"view",onClick:e=>{n((0,j.Lm)(e.name)),s()}}];return(0,g.jsxs)(l.Fragment,{children:[(0,g.jsxs)(u.ZP,{item:!0,xs:12,className:i.actionsTray,children:[(0,g.jsx)(c.Z,{placeholder:"Filter",className:i.searchField,id:"search-resource",label:"",onChange:e=>{A(e.target.value)},InputProps:{disableUnderline:!0,startAdornment:(0,g.jsx)(x.Z,{position:"start",children:(0,g.jsx)(m.W1M,{})})},variant:"standard"}),(0,g.jsx)(p.Z,{tooltip:"Expand Tenant",children:(0,g.jsx)(m.zxk,{id:"expand-tenant",label:"Expand Tenant",onClick:()=>{r("/namespaces/".concat((null===f||void 0===f?void 0:f.namespace)||"","/tenants/").concat((null===f||void 0===f?void 0:f.name)||"","/add-pool"))},icon:(0,g.jsx)(m.dtP,{}),variant:"callAction"})})]}),(0,g.jsx)(u.ZP,{item:!0,xs:12,className:i.tableBlock,children:(0,g.jsx)(v.Z,{itemActions:N,columns:[{label:"Name",elementKey:"name"},{label:"Total Capacity",elementKey:"capacity",renderFullObject:!0,renderFunction:e=>(0,h.l5)(e.volumes_per_server*e.servers*e.volume_configuration.size)},{label:"Servers",elementKey:"servers"},{label:"Volumes/Server",elementKey:"volumes_per_server"}],isLoading:a,records:P,entityName:"Servers",idField:"name",customEmptyMessage:"No Pools found"})})]})};var Z=n(64554),C=n(45902),A=n(36314);const P=e=>{let{children:s=null,...n}=e;return(0,g.jsx)(A.Z,{direction:{xs:"column",sm:"row"},justifyContent:"space-between",margin:"5px 0 5px 0",spacing:{xs:1,sm:2,md:4},...n,children:s})},N={border:"#EAEAEA 1px solid",borderRadius:"3px",padding:"0px 20px",position:"relative"},_={display:"grid",gridTemplateColumns:{xs:"1fr",sm:"2fr 1fr"},gridAutoFlow:{xs:"dense",sm:"row"},gap:2,padding:"15px"},F=()=>{var e,s,n,r,i,a,d,c,x,v,j;const p=(0,o.s0)(),f=(0,t.v9)((e=>e.tenants.tenantInfo)),y=(0,t.v9)((e=>e.tenants.selectedPool));if(null===f)return(0,g.jsx)(l.Fragment,{});const b=(null===(e=f.pools)||void 0===e?void 0:e.find((e=>e.name===y)))||null;if(null===b)return null;let A="None";b.affinity&&(A=b.affinity.nodeAffinity?"Node Selector":"Default (Pod Anti-Affinity)");const F=e=>{let{title:s}=e;return(0,g.jsx)(P,{sx:{borderBottom:"1px solid #eaeaea",margin:0,marginBottom:"20px"},children:(0,g.jsx)("h3",{children:s})})};return(0,g.jsx)(l.Fragment,{children:(0,g.jsxs)(u.ZP,{item:!0,xs:12,sx:{...N},children:[(0,g.jsx)("div",{style:{position:"absolute",right:20,top:18},children:(0,g.jsx)(m.zxk,{icon:(0,g.jsx)(m.Jpd,{}),onClick:()=>{p("/namespaces/".concat((null===f||void 0===f?void 0:f.namespace)||"","/tenants/").concat((null===f||void 0===f?void 0:f.name)||"","/edit-pool"))},label:"Edit Pool",id:"editPool"})}),(0,g.jsx)(F,{title:"Pool Configuration"}),(0,g.jsxs)(Z.Z,{sx:{..._},children:[(0,g.jsx)(C.Z,{label:"Pool Name",value:b.name}),(0,g.jsx)(C.Z,{label:"Total Volumes",value:b.volumes_per_server}),(0,g.jsx)(C.Z,{label:"Volumes per server",value:b.volumes_per_server}),(0,g.jsx)(C.Z,{label:"Capacity",value:(0,h.l5)(b.volumes_per_server*b.servers*b.volume_configuration.size)}),(0,g.jsx)(C.Z,{label:"Runtime Class Name",value:b.runtimeClassName})]}),(0,g.jsx)(F,{title:"Resources"}),(0,g.jsxs)(Z.Z,{sx:{..._},children:[b.resources&&(0,g.jsxs)(l.Fragment,{children:[(0,g.jsx)(C.Z,{label:"CPU",value:null===(s=b.resources)||void 0===s||null===(n=s.requests)||void 0===n?void 0:n.cpu}),(0,g.jsx)(C.Z,{label:"Memory",value:(0,h.l5)(null===(r=b.resources)||void 0===r||null===(i=r.requests)||void 0===i?void 0:i.memory)})]}),(0,g.jsx)(C.Z,{label:"Volume Size",value:(0,h.l5)(b.volume_configuration.size)}),(0,g.jsx)(C.Z,{label:"Storage Class Name",value:b.volume_configuration.storage_class_name})]}),b.securityContext&&(b.securityContext.runAsNonRoot||b.securityContext.runAsUser||b.securityContext.runAsGroup||b.securityContext.fsGroup)&&(0,g.jsxs)(l.Fragment,{children:[(0,g.jsx)(F,{title:"Security Context"}),(0,g.jsxs)(Z.Z,{children:[null!==b.securityContext.runAsNonRoot&&(0,g.jsx)(Z.Z,{sx:{..._},children:(0,g.jsx)(C.Z,{label:"Run as Non Root",value:b.securityContext.runAsNonRoot?"Yes":"No"})}),(0,g.jsxs)(Z.Z,{sx:{..._,gridTemplateColumns:{xs:"1fr",sm:"2fr 1fr",md:"1fr 1fr 1fr"}},children:[b.securityContext.runAsUser&&(0,g.jsx)(C.Z,{label:"Run as User",value:b.securityContext.runAsUser}),b.securityContext.runAsGroup&&(0,g.jsx)(C.Z,{label:"Run as Group",value:b.securityContext.runAsGroup}),b.securityContext.fsGroup&&(0,g.jsx)(C.Z,{label:"FsGroup",value:b.securityContext.fsGroup})]})]})]}),(0,g.jsx)(F,{title:"Affinity"}),(0,g.jsxs)(Z.Z,{children:[(0,g.jsxs)(Z.Z,{sx:{..._},children:[(0,g.jsx)(C.Z,{label:"Type",value:A}),null!==(a=b.affinity)&&void 0!==a&&a.nodeAffinity&&null!==(d=b.affinity)&&void 0!==d&&d.podAntiAffinity?(0,g.jsx)(C.Z,{label:"With Pod Anti affinity",value:"Yes"}):(0,g.jsx)("span",{})]}),(null===(c=b.affinity)||void 0===c?void 0:c.nodeAffinity)&&(0,g.jsxs)(l.Fragment,{children:[(0,g.jsx)(F,{title:"Labels"}),(0,g.jsx)("ul",{children:null===(x=b.affinity)||void 0===x||null===(v=x.nodeAffinity)||void 0===v||null===(j=v.requiredDuringSchedulingIgnoredDuringExecution)||void 0===j?void 0:j.nodeSelectorTerms.map((e=>{var s;return null===(s=e.matchExpressions)||void 0===s?void 0:s.map((e=>{var s;return(0,g.jsxs)("li",{children:[e.key," - ",null===(s=e.values)||void 0===s?void 0:s.join(", ")]})}))}))})]})]}),b.tolerations&&b.tolerations.length>0&&(0,g.jsxs)(l.Fragment,{children:[(0,g.jsx)(F,{title:"Tolerations"}),(0,g.jsx)(Z.Z,{children:(0,g.jsx)("ul",{children:b.tolerations.map((e=>{var s,n;return(0,g.jsx)("li",{children:"Equal"===e.operator?(0,g.jsxs)(l.Fragment,{children:["If ",(0,g.jsx)("strong",{children:e.key})," is equal to"," ",(0,g.jsx)("strong",{children:e.value})," then"," ",(0,g.jsx)("strong",{children:e.effect})," after"," ",(0,g.jsx)("strong",{children:(null===(s=e.tolerationSeconds)||void 0===s?void 0:s.seconds)||0})," ","seconds"]}):(0,g.jsxs)(l.Fragment,{children:["If ",(0,g.jsx)("strong",{children:e.key})," exists then"," ",(0,g.jsx)("strong",{children:e.effect})," after"," ",(0,g.jsx)("strong",{children:(null===(n=e.tolerationSeconds)||void 0===n?void 0:n.seconds)||0})," ","seconds"]})})}))})})]})]})})},k=(0,i.Z)((e=>(0,r.Z)({...a.oZ,...a.OR,...a.VX,...a.Bz})))((e=>{let{classes:s}=e;const n=(0,d.TL)(),r=(0,o.s0)(),{pathname:i=""}=(0,o.TH)(),a=(0,t.v9)((e=>e.tenants.selectedPool)),c=(0,t.v9)((e=>e.tenants.poolDetailsOpen));return(0,g.jsxs)(l.Fragment,{children:[c&&(0,g.jsx)(u.ZP,{item:!0,xs:12,children:(0,g.jsx)(m.hbI,{label:"Pools list",onClick:()=>{r(i),n((0,j.AH)(!1))}})}),(0,g.jsx)("h1",{className:s.sectionTitle,children:c?"Pool Details - ".concat(a||""):"Pools"}),(0,g.jsx)(u.ZP,{container:!0,children:c?(0,g.jsx)(F,{}):(0,g.jsx)(b,{setPoolDetailsView:()=>{n((0,j.AH)(!0))}})})]})}))}}]);
//# sourceMappingURL=379.568a6c2b.chunk.js.map