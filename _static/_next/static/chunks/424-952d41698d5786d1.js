(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[424],{9354:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return N}});var r=t(7568),l=t(6042),s=t(828),i=t(9815),o=t(655),a=t(5893),c=t(918),u=t(9072),d=t(9630),h=t(5084),f=t(2389),x=t(6777),Z=t(244),j=t(3978),p=t(9417),m=t(5605),g=t(5158),v=t(9807),C=t(562),b=t(3481),S=t(8114),_=t(3963),P=t(2416),y=t(2841),w=t(4181),D=t(9375),k=t(4870),E=t(7294),O=t(6540),z=t(4105),F=t(5503),T=t(813),X=t(9929),A=t(7484),M=t.n(A);function N(e){var n,t=(0,s.Z)(E.useState("desc"),2),l=t[0],i=t[1],_=(0,s.Z)(E.useState(null),2),P=(_[0],_[1]),y=(0,s.Z)(E.useState(null),2),w=y[0],D=y[1],k=(0,s.Z)(E.useState(null),2),A=k[0],N=k[1],L=(0,s.Z)(E.useState(null),2),U=L[0],Y=L[1],$=(0,s.Z)(E.useState(null),2),R=$[0];$[1];var B=(0,s.Z)(E.useState(null),2),H=B[0];B[1];var K=(0,s.Z)(E.useState({}),2),q=K[0];K[1];var G=(0,s.Z)(E.useState(10),2),J=G[0];G[1];var Q=(0,s.Z)(E.useState(1),2),V=Q[0],ee=Q[1],en=(0,s.Z)(E.useState([]),2),et=en[0],er=en[1],el=(0,s.Z)(E.useState(e.colum),2),es=el[0],ei=el[1],eo=(0,s.Z)(E.useState(e.selectedData?e.selectedData:[]),2),ea=eo[0],ec=eo[1],eu=(0,s.Z)(E.useState(e.singleSelectData?e.singleSelectData:null),2),ed=eu[0],eh=eu[1],ef=(0,s.Z)(E.useState(null),2),ex=ef[0],eZ=ef[1],ej=(0,s.Z)(E.useState(void 0==e.export||e.export),2);ej[0],ej[1],E.useEffect(function(){ei(e.colum)},[e.colum]),E.useEffect(function(){e.data&&eg()},[e]),E.useEffect(function(){console.log("props.data"),ee(V)},[e.data]),E.useEffect(function(){e.selectedData&&(ec([]),ec(e.selectedData))},[e.selectedData]);var ep,em=function(){var e=w.map(function(e){return e.CREATE_DTM=dateFormat(dbdateformat(e.CREATE_DTM)),null!=e.LAST_UPD_DTM&&(e.LAST_UPD_DTM=dateFormat(dbdateformat(e.LAST_UPD_DTM))),delete e.STATUS,delete e.action,e});console.log(e);var n=M()(new Date).format("YYYYMMDD_HHmmss");console.log(n);var t=z.P6.json_to_sheet(e),r=z.P6.book_new();z.P6.book_append_sheet(r,t,"New Sheet"),(0,z.cW)(r,{bookType:"xlsx",type:"buffer"}),(0,z.cW)(r,{bookType:"xlsx",type:"binary"}),(0,z.NC)(r,"ExportData"+n+".xlsx")},eg=function(){ee(1);var n=[];if(0===Object.keys(q).length)n=e.data;else for(var t in e.data){var r=0,l=Object.keys(q);for(var s in l)console.log(e.data[t][l[s]],"dataFilter"),"object"==typeof e.data[t][l[s]]&&void 0!=e.data[t][l[s]].$$typeof?q[l[s]].includes(e.data[t][l[s]].props.label)&&(r+=1):q[l[s]].includes(e.data[t][l[s]])&&(r+=1);r==Object.keys(q).length&&n.push(e.data[t])}D([]),D(n)};(0,r.Z)(function(e){return(0,o.__generator)(this,function(n){switch(n.label){case 0:return[4,P(e)];case 1:if(n.sent(),null!=l)return[3,3];return[4,i("asc")];case 2:return n.sent(),[3,7];case 3:if("asc"!=l)return[3,5];return[4,i("desc")];case 4:return n.sent(),eS(e,"desc"),[3,7];case 5:return[4,i("asc")];case 6:n.sent(),eS(e,"asc"),n.label=7;case 7:return[2]}})});var ev,eC,eb,eS=function(e,n){"asc"==n&&w.sort(function(n,t){return n[e]>t[e]?1:-1}),"desc"==n&&w.sort(function(n,t){return n[e]<t[e]?1:-1})},e_=function(e,n){ee(n)},eP=(ev=(0,r.Z)(function(n){return(0,o.__generator)(this,function(t){switch(t.label){case 0:return e.onSingleSelect&&e.onSingleSelect(n),[4,eh(n)];case 1:return t.sent(),[2]}})}),function(e){return ev.apply(this,arguments)}),ey=(eC=(0,r.Z)(function(n){var t,r,l,s,i;return(0,o.__generator)(this,function(o){switch(o.label){case 0:for(l in console.log(n),r=[],t=ea)r.push(l);s=0,o.label=1;case 1:if(!(s<r.length))return[3,5];if(!Object.is(n,t[i=r[s]]))return[3,4];return t.splice(i,1),[4,ec([])];case 2:case 6:return o.sent(),[4,ec(t)];case 3:return o.sent(),[2];case 4:return s++,[3,1];case 5:return t.push(n),[4,ec([])];case 7:return o.sent(),e.onSelect&&e.onSelect(t),[2]}})}),function(e){return eC.apply(this,arguments)}),ew=function(e){for(var n in ea)if(Object.is(e,ea[n]))return!0;return!1},eD=(eb=(0,r.Z)(function(n){return(0,o.__generator)(this,function(t){switch(t.label){case 0:return[4,er([])];case 1:return t.sent(),[4,er(n)];case 2:return t.sent(),eg(),[4,ei([])];case 3:return t.sent(),[4,ei(e.colum)];case 4:return t.sent(),e.colum,[2]}})}),function(e){return eb.apply(this,arguments)}),ek=function(e){Object.is(ex,e)?eZ(null):eZ(e)},eE={fontSize:"15px",fontFamily:"Kanit",fontWeight:"600"};return(0,a.jsx)("div",{children:(0,a.jsxs)(c.Z,{sx:{borderRadius:"10px"},children:[A&&(0,a.jsx)(I,{onChange:eg,data:e.data,filterColum:R,filterColumName:H,filterData:q,open:null!==A,anchorEl:A,onClose:function(){return N(null)}}),(0,a.jsx)(W,{excludeColum:et,colum:e.colum,open:null!==U,anchorEl:U,onChange:eD,onClose:function(){return Y(null)}}),(0,a.jsxs)(u.ZP,{container:!0,px:2,py:1,children:[(0,a.jsx)(u.ZP,{item:!0,children:(0,a.jsx)(d.Z,{variant:"h6",children:(0,a.jsx)("strong",{children:e.tableName})})}),(0,a.jsx)(u.ZP,{item:!0,xs:!0,children:(0,a.jsxs)(u.ZP,{container:!0,justifyContent:"flex-end",alignItems:"center",children:[(0,a.jsx)(u.ZP,{item:!0,children:e.add&&(0,a.jsx)(h.Z,{onClick:e.add,size:"small",variant:"contained",color:"success",startIcon:(0,a.jsx)(O.Z,{}),children:e.addname?e.addname:"เพิ่มข้อมูล"})}),e.export&&(0,a.jsx)(u.ZP,{item:!0,children:(0,a.jsx)(f.Z,{title:"ส่งออกข้อมูล",children:(0,a.jsxs)(h.Z,{size:"small",onClick:function(){em()},children:[(0,a.jsx)(X.Z,{})," Export"]})})})]})})]}),(0,a.jsx)(u.ZP,{container:!0,children:(0,a.jsx)(x.Z,{children:(0,a.jsxs)(Z.Z,{sx:{minWidth:"1100px",height:"auto"},children:[(0,a.jsx)(j.Z,{children:(0,a.jsxs)(p.Z,{sx:{backgroundColor:"#006E61"},children:[w&&(null===(n=w[0])||void 0===n?void 0:n.hasOwnProperty("collapse"))&&(0,a.jsx)(m.Z,{width:"2%"}),e.onSelect&&(0,a.jsx)(m.Z,{width:"5%",children:(0,a.jsx)(g.Z,{size:"small"})}),null==es?void 0:es.map(function(e,n){return!et.includes(e.listname)&&(0,a.jsx)(m.Z,{sortDirection:l,children:(0,a.jsx)(u.ZP,{container:!0,children:(0,a.jsx)(u.ZP,{item:!0,sx:{width:"100%",display:"flex"},children:(0,a.jsx)(d.Z,{variant:"text",sx:eE,color:"#FFFFFF",children:e.name})})})},n)}),(0,a.jsx)(m.Z,{style:{width:400},align:"center"})]})}),(0,a.jsx)(v.Z,{children:null==w?void 0:w.map(function(n,t){var r;return t>=(V-1)*J&&t<V*J&&(0,a.jsxs)(E.Fragment,{children:[(0,a.jsxs)(p.Z,{onClick:e.onSingleSelect?function(){return eP(n)}:null,sx:e.onSingleSelect?ed==n?{cursor:"pointer",backgroundColor:"#eff6ff"}:{cursor:"pointer","&:hover":{backgroundColor:"#eff6ff"}}:null,children:[n.collapse&&(0,a.jsx)(m.Z,{children:(0,a.jsx)(C.Z,{size:"small",onClick:function(){return ek(n)},children:n==ex?(0,a.jsx)(T.Z,{}):(0,a.jsx)(F.Z,{})})}),e.onSelect&&(0,a.jsx)(m.Z,{children:(0,a.jsx)(g.Z,{size:"medium",checked:ew(n),onClick:function(){return ey(n)},sx:{ml:1}})}),es.map(function(e,t){return!et.includes(e.listname)&&(0,a.jsx)(m.Z,{sx:eE,children:n[e.listname]},t)}),(null===(r=w[0])||void 0===r?void 0:r.hasOwnProperty("action"))&&(0,a.jsx)(m.Z,{children:n.action})]},t),n.collapse&&(0,a.jsx)(p.Z,{sx:{"& > *":{borderBottom:"unset"}},children:(0,a.jsx)(m.Z,{colSpan:es.length+2,style:{paddingBottom:0,paddingTop:0},children:(0,a.jsx)(b.Z,{in:Object.is(n,ex),children:Object.is(n,ex)&&n.collapse})})})]})})})]})})}),(0,a.jsx)(u.ZP,{container:!0,children:(0,a.jsx)(u.ZP,{item:!0,xs:12,py:1,children:(0,a.jsxs)(u.ZP,{container:!0,justifyContent:"flex-end",alignItems:"center",px:2,children:[(0,a.jsx)(u.ZP,{item:!0,xs:3,children:(0,a.jsx)(d.Z,{fontSize:14,sx:{fontSize:"15px",fontFamily:"Kanit",fontWeight:"600",color:"#AFAFAF"},children:(null==w?void 0:w.length)>0&&"จำนวนรายการทั้งหมด "+w.length+" รายการ"})}),(0,a.jsx)(u.ZP,{item:!0,children:(0,a.jsx)(S.Z,{page:V,onChange:e_,color:"primary",count:isNaN(Math.ceil((null==w?void 0:w.length)/J))?0:Math.ceil((null==w?void 0:w.length)/J)})})]})})})]})})}function W(e){var n,t=function(n,t){var r=e.excludeColum,l=[];if(r.includes(t)){var s=r.indexOf(t);-1!==s&&r.splice(s,1)}else r.push(t);l=r,e.onChange&&e.onChange(l)},r=function(){var n=[];for(var t in e.colum)n.push(e.colum[t].listname);e.onChange&&e.onChange(n)},l=function(){e.onChange&&e.onChange([])};return(0,a.jsx)(_.ZP,{open:e.open,anchorEl:e.anchorEl,onClose:e.onClose,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:(0,a.jsxs)(u.ZP,{container:!0,sx:{width:"300px"},p:1,children:[(0,a.jsx)(u.ZP,{item:!0,xs:12,children:(0,a.jsx)(d.Z,{fontWeight:600,children:" แสดงผลคอลลัมน์ "})}),null===(n=e.colum)||void 0===n?void 0:n.map(function(n,r){var l;return(0,a.jsx)(u.ZP,{item:!0,xs:12,children:(0,a.jsx)(P.Z,{children:(0,a.jsx)(y.Z,{control:(0,a.jsx)(w.Z,{checked:!(null===(l=e.excludeColum)||void 0===l?void 0:l.includes(n.listname)),onChange:function(e){return t(e,n.listname)}}),label:n.name})})},r)}),(0,a.jsx)(u.ZP,{item:!0,xs:12,children:(0,a.jsxs)(u.ZP,{container:!0,justifyContent:"flex-end",children:[(0,a.jsx)(h.Z,{size:"small",onClick:r,children:"ซ่อนทั้งหมด"}),(0,a.jsx)(h.Z,{size:"small",onClick:l,children:"แสดงทั้งหมด"})]})})]})})}function I(e){var n,t=(0,s.Z)(E.useState([]),2),c=t[0],h=t[1],f=(0,s.Z)(E.useState(e.filterData[e.filterColum]?e.filterData[e.filterColum]:[]),2),x=f[0],Z=f[1];E.useEffect(function(){console.log(e,"newObject_XXX"),p()},[e]);var j,p=(n=(0,r.Z)(function(){var n;return(0,o.__generator)(this,function(t){switch(t.label){case 0:n=[];try{for(var r in e.data)void 0!=e.data[r][e.filterColum].$$typeof?n.push(e.data[r][e.filterColum].props.label):n.push(e.data[r][e.filterColum])}catch(l){n.push(e.data[r][e.filterColum])}if(void 0!=(n=(0,i.Z)(new Set(n)))[0])return[3,2];return[4,h([])];case 1:return t.sent(),[3,4];case 2:return[4,h(n)];case 3:t.sent(),t.label=4;case 4:return[2]}})}),function(){return n.apply(this,arguments)}),m=(j=(0,r.Z)(function(n,t){var r;return(0,o.__generator)(this,function(n){switch(n.label){case 0:return r=e.filterData,console.log(r,"newObject_XXX"),console.log(t,"newObject_XXX"),0==t.length?delete r[e.filterColum]:r[e.filterColum]=t,[4,Z(t)];case 1:return n.sent(),e.onChange&&(console.log(r,"newObject_XXX2"),e.onChange(r)),[2]}})}),function(e,n){return j.apply(this,arguments)});return(0,a.jsx)(_.ZP,{open:e.open,anchorEl:e.anchorEl,onClose:e.onClose,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:(0,a.jsxs)(u.ZP,{container:!0,py:1,px:1,sx:{width:"300px"},children:[(0,a.jsx)(u.ZP,{item:!0,xs:12,children:(0,a.jsxs)(d.Z,{children:[" ","กรองข้อมูล ",(0,a.jsxs)("strong",{children:[" ",e.filterColumName]})," "]})}),(0,a.jsx)(u.ZP,{item:!0,xs:12,children:(0,a.jsx)(D.Z,{multiple:!0,getOptionLabel:function(e){return e||""},value:x,onChange:m,size:"small",options:c,renderInput:function(e){return(0,a.jsx)(k.Z,(0,l.Z)({},e))}})})]})})}},5103:function(){},2061:function(){}}]);