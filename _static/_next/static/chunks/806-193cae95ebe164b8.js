"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[806],{4806:function(n,e,t){t.r(e),t.d(e,{default:function(){return F}});var r=t(7568),o=t(6042),s=t(9396),i=t(828),c=t(655),a=t(5893),l=t(1953),u=t(9072),d=t(9630),x=t(9375),h=t(4870),f=t(5084),p=t(562),Z=t(9211),j=t(7294),_=t(9354),S=t(2665),D=t(1523),E=t(3147),m=t(2019),O=t.n(m),g=t(7484),v=t.n(g),T=t(2359),A=t(4130),R=t(4597),C=t(2761),P=t(3592),b=t(4111),I=t(1438),N=t(4924),w=t(8029),y=t(460),M=t(683),Y=t.n(M),B=t(1770);v().extend(Y());var k=function(n){(0,w.Z)(t,n);var e=(0,y.Z)(t);function t(n){var r,o=n.locale,s=n.formats,i=n.instance;return(0,I.Z)(this,t),r=e.call(this,{locale:o,formats:s,instance:i}),(0,N.Z)((0,b.Z)(r),"formatByString",function(n,e){return"YYYY"===e&&(e="BBBB"),r.dayjs(n).format(e)}),r}return t}(B.Z),L=t(6388),V=t.n(L);t(8068);var U=t(4379);t(8726);var z={marginLeft:10,marginRight:10,borderRadius:"6px",boxShadow:"4px 5px 18px rgba(0, 0, 0, 0.25)",mt:"3%",maxwidth:"1200px"},W={marginLeft:60,marginRight:60,borderRadius:"6px",boxShadow:"4px 5px 18px rgba(0, 0, 0, 0.25)",mt:"3%",maxwidth:"1200px"},H={bgcolor:"#006E61",padding:"1%",color:"white",borderTopLeftRadius:"6px",borderTopRightRadius:"6px"};function F(){var n,e,t,p=(0,i.Z)(j.useState([]),2),S=p[0],D=p[1],m=(0,i.Z)(j.useState([]),2),g=m[0],b=m[1],I=(0,i.Z)(j.useState(null),2),N=I[0],w=I[1],y=(0,i.Z)(j.useState(null),2),M=y[0],Y=y[1],B=(0,i.Z)(j.useState(null),2),L=B[0],F=B[1],q=(0,i.Z)(j.useState(null),2),J=q[0],K=q[1],Q=(0,i.Z)(j.useState([]),2),$=Q[0],nn=Q[1],ne=(0,i.Z)(j.useState(!1),2),nt=ne[0],nr=ne[1],no=(0,i.Z)(j.useState(!1),2),ns=no[0],ni=no[1],nc=(n=(0,r.Z)(function(){var n,e,t;return(0,c.__generator)(this,function(n){switch(n.label){case 0:return n.trys.push([0,4,,5]),[4,fetch("".concat("http://192.168.41.123:8094","/MAS/province"))];case 1:return[4,n.sent().json()];case 2:return[4,b(n.sent())];case 3:return n.sent(),[3,5];case 4:return t=n.sent(),console.log(t),[3,5];case 5:return[2]}})}),function(){return n.apply(this,arguments)}),na=function(n,e){console.log(e),w(e),nr(!1)},nl=function(n){Y(n),ni(!1)},nu=function(n){F(n),console.log(n),ni(!1)},nd=(e=(0,r.Z)(function(n){var e,t,r,o,s,i;return(0,c.__generator)(this,function(r){switch(r.label){case 0:e="".concat("http://localhost:8093","/condo/condoExportByProvinceId"),r.label=1;case 1:return r.trys.push([1,4,,5]),t=function(n){var e=o[n];e.STATUS_VAL="","4"==e.ORDER_STATUS&&(e.STATUS_VAL="รอลงนาม"),"2"==e.ORDER_STATUS&&(e.STATUS_VAL="อยู่ระห่วางลงนาม"),"1"==e.ORDER_STATUS&&(e.STATUS_VAL="ลงนามเรียบร้อยแล้ว");var t=(0,a.jsx)(G,{handleDownLoad:function(){return nj(e)},data:e}),r=(0,a.jsx)(X,{condo_s_id:function(){return nf(e.CONDO_S_ID)}});e.action=t,e.DETAIL=r,s.push(e)},[4,V().post(e,n)];case 2:for(var c in o=r.sent().data,console.log(o,"sel_condoExportByProvinceId"),s=[],o)t(c);return[4,D(s)];case 3:return r.sent(),[3,5];case 4:return i=r.sent(),console.log(i),[3,5];case 5:return[2]}})}),function(n){return e.apply(this,arguments)}),nx=function(){var n={};if(null!=N)n.PROVINCE_ID=N.PROVINCE_ID;else{n.PROVINCE_ID=null,nr(!0),U.fn.error("กรุณาเลือกจังหวัด","",5e3,function(){alert("callback")});return}nd(n)},nh=function(n){console.log(n,"handleOnSelect"),nn(n)},nf=function(n){K(n)},np=function(){K(null)},nZ=function(){if(null==M||null==L)return ni(!0),U.fn.error("","กรุณากรอกกันที่ทั้งหมด !",5e3,function(){alert("callback")}),!1;n_()},nj=function(n){if(console.log(n),null!=n){var e="http://reportassessprice.treasury.go.th/"+(n.EXPORT_ADDRESS+n.EXPORT_NAME).replace(/\\/g,"/");console.log(e),window.open(e)}},n_=(t=(0,r.Z)(function(){var n,e,t,r,o,s,i,a,l;return(0,c.__generator)(this,function(i){switch(i.label){case 0:if(console.log($,"valueOnselect"),""==$)return U.fn.error("","กรุณารายการคอนโด !",5e3,function(){alert("callback")}),[2,!1];for(e in n=[],$)n.push(e);t=0,i.label=1;case 1:if(!(t<n.length))return[3,6];r=n[t],o={CHANGWAT_CODE:N.PROVINCE_ID,BRANCH_CODE:$[r].BRANCH,PERIODS_ID:"7",CONDO_S_ID:$[r].CONDO_S_ID,REGIST_NO:$[r].REGIST_NO,CONDO_NAME:$[r].CONDO_NAME,ORDER_TYPE:"1",ORDER_STATUS:"4",CREATE_BY:"1111111111",PUBLIC_DATE:null,APPROVE_DATE:v()(M).format("YYYY-MM-DD"),ENFORCE_DATE:v()(L).format("YYYY-MM-DD")},i.label=2;case 2:return i.trys.push([2,4,,5]),s="".concat("http://localhost:8093","/condo/insOrderVal"),[4,V().post(s,o)];case 3:return i.sent().data&&U.fn.success("","อนุมัติลงนามเรียบร้อย",5e3,function(){alert("callback")}),nd(),[3,5];case 4:return l=i.sent(),console.log(l),[3,5];case 5:return t++,[3,1];case 6:return[2]}})}),function(){return t.apply(this,arguments)});return j.useEffect(function(){nc()},[]),(0,a.jsxs)("div",{children:[(0,a.jsx)(U.mh,{}),J&&(0,a.jsx)(R.default,{condoSID:J,open:null!==J,onclose:np}),(0,a.jsxs)(l.Z,{children:[(0,a.jsxs)(u.ZP,{container:!0,children:[(0,a.jsxs)(u.ZP,{item:!0,xs:12,sx:z,children:[(0,a.jsx)(u.ZP,{container:!0,sx:H,children:(0,a.jsx)(d.Z,{variant:"text",sx:{ml:"2%"},children:"กรุณาระบุรายละเอียดเพื่อค้นหา"})}),(0,a.jsx)(u.ZP,{container:!0,sx:{pt:"2%"},children:(0,a.jsx)(u.ZP,{item:!0,xs:12,children:(0,a.jsxs)(Z.Z,{direction:"row",justifyContent:"center",py:2,spacing:2,children:[(0,a.jsx)(x.Z,{id:"Province",options:g,onChange:na,getOptionLabel:function(n){return n.PROVINCE_NAME_TH},value:N,sx:{width:"50%"},renderInput:function(n){return(0,a.jsx)(h.Z,(0,s.Z)((0,o.Z)({},n),{label:(0,a.jsxs)("div",{children:[(0,a.jsx)(d.Z,{variant:"text",children:"จังหวัด"}),(0,a.jsx)(d.Z,{variant:"text",color:"#d50000",children:" *"})]}),size:"small",error:nt}))}}),(0,a.jsxs)(f.Z,{onClick:nx,variant:"contained",size:"small",children:[(0,a.jsx)(C.Z,{}),"ค้นหา"]}),(0,a.jsxs)(f.Z,{variant:"contained",color:"error",size:"small",children:[(0,a.jsx)(P.Z,{}),"ล้างค่า"]})]})})})]}),(0,a.jsxs)(u.ZP,{xs:12,sx:W,children:[(0,a.jsxs)(u.ZP,{container:!0,sx:H,children:[(0,a.jsx)(E.Z,{})," ","บันทึกวันที่ (ถ้ายังไม่ได้กำหนด หรือต้องการแก้ไข)"]}),(0,a.jsx)(u.ZP,{container:!0,children:(0,a.jsx)(u.ZP,{item:!0,xs:12,py:2,px:3,children:(0,a.jsxs)(Z.Z,{direction:"row",justifyContent:"center",spacing:5,children:[(0,a.jsx)(T._,{dateAdapter:k,locale:O(),children:(0,a.jsx)(A.O,{openTo:"year",inputFormat:"DD MMMM BBBB",disableMaskedInput:!0,views:["year","month","day"],label:"เมื่อวันที่",value:M,error:null==M,onChange:nl,renderInput:function(n){return(0,a.jsx)(h.Z,(0,s.Z)((0,o.Z)((0,s.Z)((0,o.Z)({},n),{id:"bootstrap-input"}),n),{size:"small",fullWidth:!0,error:ns}))}})}),(0,a.jsx)(T._,{dateAdapter:k,locale:O(),children:(0,a.jsx)(A.O,{openTo:"year",inputFormat:"DD MMMM YYYY",disableMaskedInput:!0,views:["year","month","day"],label:"ทั้งนี้ตั้งแต่วันที่",value:L,error:null==L,onChange:nu,renderInput:function(n){return(0,a.jsx)(h.Z,(0,s.Z)((0,o.Z)((0,s.Z)((0,o.Z)({},n),{id:"bootstrap-input"}),n),{size:"small",fullWidth:!0,error:ns}))}})})]})})})]})]}),(0,a.jsx)(u.ZP,{container:!0,sx:{padding:5},children:(0,a.jsx)(u.ZP,{item:!0,xs:12,children:(0,a.jsx)(_.default,{data:S,colum:[{name:"ตัวอย่าง",listname:"DETAIL"},{name:"ชื่อคอนโด",listname:"CONDO_NAME"}],onSelect:nh,add:nZ,addname:"อนุมัติลงนามเล่มที่เลือก"})})})]})]})}function G(n){return n.data,(0,a.jsxs)(u.ZP,{container:!0,children:[(0,a.jsx)(u.ZP,{item:!0,xs:12,children:(0,a.jsx)(Z.Z,{direction:"row",justifyContent:"center",children:(0,a.jsx)(d.Z,{children:n.data.STATUS_VAL})})}),(0,a.jsx)(u.ZP,{item:!0,xs:12,children:"1"==n.data.ORDER_STATUS&&(0,a.jsx)(Z.Z,{direction:"row",justifyContent:"center",children:(0,a.jsx)(p.Z,{onClick:n.handleDownLoad,children:(0,a.jsx)(S.Z,{color:"error"})})})})]})}function X(n){return(0,a.jsx)(u.ZP,{container:!0,children:(0,a.jsx)(p.Z,{onClick:n.condo_s_id,children:(0,a.jsx)(D.Z,{color:"success"})})})}},4597:function(n,e,t){t.r(e),t.d(e,{default:function(){return u}});var r=t(5893),o=t(9620),s=t(7745),i=t(5398),c=t(9072),a=t(6779),l=t(5084);function u(n){var e="http://".concat("192.168.41.14/CONDO")+"/report_condo.php?condo_s_id="+n.condoSID;return console.log(e,"urlurlurl"),(0,r.jsx)("div",{children:(0,r.jsxs)(o.Z,{open:n.open,maxWidth:"xl",fullWidth:!0,children:[(0,r.jsx)(s.Z,{children:"ตัวอย่าง"}),(0,r.jsx)(i.Z,{children:(0,r.jsx)(c.ZP,{container:!0,children:(0,r.jsx)(c.ZP,{item:!0,xs:12,children:(0,r.jsx)(c.ZP,{container:!0,justifyContent:"center",children:(0,r.jsx)(c.ZP,{item:!0,xs:12,sx:{height:"calc(100vh - 150px)",width:"100%",overflow:"hidden"},children:(0,r.jsx)("object",{id:"print",data:e,width:"100%",height:"100%"})})})})})}),(0,r.jsx)(a.Z,{children:(0,r.jsx)(l.Z,{variant:"contained",color:"error",onClick:n.onclose,children:"ปิด"})})]})})}t(7294)}}]);