"use strict";(self.webpackChunkproject_team_developer_007_react=self.webpackChunkproject_team_developer_007_react||[]).push([[215],{4635:function(e,i,t){t.d(i,{N:function(){return _}});var n="mainPage_title__NkTqx",s="mainPage_firstGreen__OVjdr",r="mainPage_black__JMHNO",a="mainPage_lastGreen__7VLZZ",c=t(184),o=function(e){var i=e.text;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h1",{className:n,children:i}),(0,c.jsx)("svg",{className:s,width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("rect",{y:"2.84525",width:"8",height:"8",rx:"3",transform:"rotate(-25 0 2.84525)",fill:"#8BAA36"})}),(0,c.jsx)("svg",{className:r,width:"7",height:"7",viewBox:"0 0 7 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("rect",{y:"2",width:"6",height:"6",rx:"3",transform:"rotate(-25 0 2)",fill:"#22252A"})}),(0,c.jsx)("svg",{className:a,width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("rect",{y:"2.84525",width:"8",height:"8",rx:"3",transform:"rotate(-25 0 2.84525)",fill:"#8BAA36"})})]})},l="SectionTitle_container__zSlOi",_=function(e){var i=e.text;return(0,c.jsx)("div",{className:l,children:(0,c.jsx)(o,{text:i})})}},9215:function(e,i,t){t.r(i),t.d(i,{default:function(){return A}});var n=t(9033),s="shopingContainer_container__cdVfX",r="shopingContainer_sahopingConteiner__VlvZt",a="ShopingHeader_text__BrAIw",c="ShopingHeader_wrap__HO243",o="ShopingHeader_textWrap__tMg8U",l=t(184),_=function(){return(0,l.jsxs)("div",{className:c,children:[(0,l.jsx)("p",{className:a,children:"Product"}),(0,l.jsxs)("div",{className:o,children:[(0,l.jsx)("p",{className:a,children:"Number"}),(0,l.jsx)("p",{className:a,children:"Remove"})]})]})},d=t(9439),h="ShopingItem_container__Gq9+j",g="ShopingItem_wrapper_img__7E0BN",m="ShopingItem_wrapper_ingridient_title__bBRU0",p="ShopingItem_ingridient_title__+hdO9",x="ShopingItem_wrapper_ingridient_quantity__7BRoF",u="ShopingItem_wrapper_img_text__6WEU1",j="ShopingItem_icon__4vPDF",v="ShopingItem_delete_wraper__iHci6",f="ShopingItem_text_ingridient_quantity__O3kiG",w="ShopingItem_ingredient_img__2wDbA",N=function(e){var i=e.title,t=e.img,n=e.quantity,s=e.deleteItem,r=e.id,a=h,c=g,o=m,_=p,d=x,N=f,S=u,k=j,I=w,B=v;return(0,l.jsxs)("li",{className:a,onClick:s,id:r,children:[(0,l.jsxs)("div",{className:S,children:[(0,l.jsx)("div",{className:c,children:(0,l.jsx)("img",{className:I,src:t,alt:i})}),(0,l.jsx)("div",{className:o,children:(0,l.jsx)("p",{className:_,children:i})})]}),(0,l.jsx)("div",{className:d,children:(0,l.jsx)("p",{className:N,children:n})}),(0,l.jsx)("div",{className:B,id:"delete",children:(0,l.jsxs)("svg",{className:k,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{id:"delete",d:"M10.9375 3.0625L3.0625 10.9375",stroke:"#333333",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),(0,l.jsx)("path",{d:"M10.9375 10.9375L3.0625 3.0625",stroke:"#333333",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})})]})},S={container:"ShipongList_container__8Xp-W",list:"ShipongList_list__I4jMF",deleteBtn:"ShipongList_deleteBtn__d3uaR",deleteBtnIcon:"ShipongList_deleteBtnIcon__REkD7"},k=t(9434),I=t(2791),B=t(3966),L=t(3175),Z=function(){var e=(0,k.I0)(),i=(0,k.v9)(B.Zx),t=(0,I.useState)(""),n=(0,d.Z)(t,2),s=n[0],r=n[1];(0,I.useEffect)((function(){e((0,L.uQ)())}),[e,i.length]);var a=function(e){var i=e.currentTarget;r(i.id)};return(0,I.useEffect)((function(){s&&e((0,L.$H)(s))}),[e,s]),(0,l.jsx)("div",{className:S.wrap,children:(0,l.jsx)("ul",{className:S.list,children:null===i||void 0===i?void 0:i.map((function(e){return(0,l.jsx)(N,{title:e.ingredient.name,img:e.ingredient.img,quantity:e.measure,id:e.ingredient._id,deleteItem:a},e.ingredient._id)}))})})},H=t(7689),y=t(4635),A=function(){var e=(0,H.TH)().pathname;return(0,I.useEffect)((function(){window.scrollTo(0,0)}),[e]),(0,l.jsxs)("div",{className:n.Z.sectionSearch,children:[(0,l.jsx)(y.N,{text:"Shopping list"}),(0,l.jsx)("div",{className:"".concat(n.Z.container," ").concat(s),children:(0,l.jsx)(_,{})}),(0,l.jsx)("div",{className:"".concat(n.Z.container," ").concat(r),children:(0,l.jsx)(Z,{})})]})}},3966:function(e,i,t){t.d(i,{Zx:function(){return n}});var n=function(e){return e.shopingList.list}},9033:function(e,i){i.Z={section:"pages_section__mNUz7",sectionSearch:"pages_sectionSearch__ECjBr",container:"pages_container__-MxLQ"}}}]);
//# sourceMappingURL=215.77df149a.chunk.js.map