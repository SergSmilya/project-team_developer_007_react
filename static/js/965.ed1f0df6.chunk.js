"use strict";(self.webpackChunkproject_team_developer_007_react=self.webpackChunkproject_team_developer_007_react||[]).push([[965],{4635:function(e,t,a){a.d(t,{N:function(){return o}});var n="mainPage_title__NkTqx",c="mainPage_firstGreen__OVjdr",i="mainPage_black__JMHNO",s="mainPage_lastGreen__7VLZZ",r=a(184),l=function(e){var t=e.text;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{className:n,children:t}),(0,r.jsx)("svg",{className:c,width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("rect",{y:"2.84525",width:"8",height:"8",rx:"3",transform:"rotate(-25 0 2.84525)",fill:"#8BAA36"})}),(0,r.jsx)("svg",{className:i,width:"7",height:"7",viewBox:"0 0 7 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("rect",{y:"2",width:"6",height:"6",rx:"3",transform:"rotate(-25 0 2)",fill:"#22252A"})}),(0,r.jsx)("svg",{className:s,width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("rect",{y:"2.84525",width:"8",height:"8",rx:"3",transform:"rotate(-25 0 2.84525)",fill:"#8BAA36"})})]})},_="SectionTitle_container__zSlOi",o=function(e){var t=e.text;return(0,r.jsx)("div",{className:_,children:(0,r.jsx)(l,{text:t})})}},7965:function(e,t,a){a.r(t),a.d(t,{default:function(){return D}});var n=a(9434),c=a(9033),i=a(6883),s=a(9439),r=a(2791),l=a(1087),_="MyRecipesItem_card_container__cFrU8",o="MyRecipesItem_wrapper__y6Dfj",p="MyRecipesItem_top_wrapper__22mnu",d="MyRecipesItem_card_title__Sds+O",h="MyRecipesItem_card_text__Q4PeA",u="MyRecipesItem_delete_btn__nKPjV",g="MyRecipesItem_bottom_wrapper__Bo9x6",m="MyRecipesItem_card_time__GO1FQ",x="MyRecipesItem_card_btn__zoIdt",f="MyRecipesItem_img_wrapper__hP5Vl",j="MyRecipesItem_img__A60ng",v=a(8816),w=a(5125),N=a(5264),R=a(184),y=function(e){var t=e.recipe,a=e.page,c=(0,r.useState)(),i=(0,s.Z)(c,2),y=i[0],b=i[1],Z=(0,n.I0)(),P=(0,l.lr)(),M=(0,s.Z)(P,2)[1];return(0,R.jsxs)("li",{className:_,children:[(0,R.jsx)("div",{className:f,children:(0,R.jsx)("img",{src:"".concat(t.preview),alt:"".concat(t.title),className:j})}),(0,R.jsx)("button",{className:u,type:"button",onClick:function(){return e=t._id,b(e),Z((0,v.v9)(e)),M({page:a}),Z((0,v.TR)(a)),N.Notify.success("Recipe deleted successfully");var e},disabled:y===t._id,children:(0,R.jsx)("svg",{children:(0,R.jsx)("use",{href:w.Z+"#trash"})})}),(0,R.jsxs)("div",{className:o,children:[(0,R.jsxs)("div",{className:p,children:[(0,R.jsx)("h2",{className:d,children:t.title}),(0,R.jsx)("p",{className:h,children:t.description})]}),(0,R.jsxs)("div",{className:g,children:[(0,R.jsxs)("span",{className:m,children:[t.time," min"]}),(0,R.jsxs)(l.rU,{to:"/recipe/".concat(t._id),state:{from:"/my"},className:x,children:["See recipe ",t.id]})]})]})]})},b="MyRecipesList_list__Ouxou",Z=function(e){return e.myRecipes.availableRecipes.recipes},P=function(e){return e.myRecipes.isLoading},M=function(e){return e.myRecipes.error},I=function(e){return e.myRecipes.availableRecipes.total},k=function(){var e=(0,l.lr)(),t=(0,s.Z)(e,1)[0],a=(0,r.useState)(Number(t.get("page")||1)),c=(0,s.Z)(a,1)[0],i=(0,n.v9)(Z);return(0,R.jsx)(R.Fragment,{children:(0,R.jsx)("ul",{className:b,children:null===i||void 0===i?void 0:i.map((function(e){return(0,R.jsx)(y,{recipe:e,page:c},e._id)}))})})},C="Paginator_pagination_list__lS-DI",S="Paginator_pagination_item__WJnFB",T="Paginator_pagination_btn__rQZd5",B="Paginator_active__H3Kos",O="Paginator_left_btn__c1lCn",A="Paginator_right_btn__BKI+h",F=a(7689),Q=function(){var e=(0,l.lr)(),t=(0,s.Z)(e,2),a=t[0],c=t[1],i=(0,F.TH)(),_=(0,F.s0)(),o=(0,r.useState)(1),p=(0,s.Z)(o,2),d=p[0],h=p[1],u=a.get("page")||d,g=(0,n.I0)(),m=(0,n.v9)(I),x=Math.ceil(m/4);(0,r.useEffect)((function(){c({page:u});var e=i.search||"?page=".concat(u);_({search:e})}),[_,i.search,c,u]),(0,r.useEffect)((function(){g((0,v.TR)(u)),h(Number(u))}),[u,g]);var f=function(){for(var e=[],t=1;t<=x;t++)e.push(t);return e}();return(0,R.jsx)(R.Fragment,{children:x>1&&(0,R.jsxs)("ul",{className:"".concat(C),children:[(0,R.jsx)("li",{className:"".concat(S),children:(0,R.jsx)("button",{className:"".concat(O," ").concat(T),onClick:function(){var e=d-1;h(e),c({page:e}),g((0,v.TR)(e))},disabled:1===d,children:(0,R.jsx)("svg",{children:(0,R.jsx)("use",{href:w.Z+"#leftbolt"})})})}),f.map((function(e){return(0,R.jsx)("li",{className:"".concat(S),children:(0,R.jsx)("button",{onClick:function(){!function(e){h(e),c({page:e}),g((0,v.TR)(e))}(e),h(e)},className:"".concat(T," ").concat(d===e?B:""),children:e})},e)})),(0,R.jsx)("li",{className:"".concat(S),children:(0,R.jsx)("button",{className:"".concat(A," ").concat(T),onClick:function(){var e=d+1;h(e),c({page:e}),g((0,v.TR)(e))},disabled:d===x,children:(0,R.jsx)("svg",{children:(0,R.jsx)("use",{href:w.Z+"#rightbolt"})})})})]})})},E=a(6784),H=a(4635),L=a(7425),U=function(e){var t=e.text,a=void 0===t?"but the page you were looking for can\u2019t be found..":t;return(0,R.jsxs)("div",{className:L.Z.wrapper,children:[(0,R.jsx)("div",{className:L.Z.bg_wrapper}),(0,R.jsxs)("div",{className:L.Z.text_wrapper,children:[(0,R.jsx)("h1",{className:L.Z.heading,children:"We are sorry,"}),(0,R.jsx)("p",{className:L.Z.text,children:a})]})]})},D=function(){var e=(0,n.v9)(P),t=(0,n.v9)(M),a=(0,n.v9)(Z),s=(0,F.TH)().pathname;return(0,r.useEffect)((function(){window.scrollTo(0,0)}),[s]),(0,R.jsx)(R.Fragment,{children:(0,R.jsxs)("div",{className:c.Z.section,children:[e&&!t&&(0,R.jsx)(E.Z,{}),(0,R.jsx)(H.N,{text:"My recipes"}),(0,R.jsx)("div",{className:"".concat(c.Z.container," ").concat(i.Z.wrapper," "),children:0!==a.length?(0,R.jsx)(k,{}):(0,R.jsx)(U,{text:"you have no personal recipes"})}),(0,R.jsx)("div",{className:"".concat(i.Z.container," ").concat(i.Z.pagin_container),children:(0,R.jsx)(Q,{})})]})})}},6883:function(e,t){t.Z={container:"MyRecipesPage_container__ADU+x",wrapper:"MyRecipesPage_wrapper__nXhQO",pagin_container:"MyRecipesPage_pagin_container__QqObu",wrapper_leaf:"MyRecipesPage_wrapper_leaf__DH4di",leaf_bg:"MyRecipesPage_leaf_bg__aCsYC"}},7425:function(e,t){t.Z={wrapper:"NoRecipesPlug_wrapper__OxX1N",bg_wrapper:"NoRecipesPlug_bg_wrapper__UwdP+",heading:"NoRecipesPlug_heading__C8L3n",text_wrapper:"NoRecipesPlug_text_wrapper__R7hiZ",text:"NoRecipesPlug_text__ZZuEW"}},9033:function(e,t){t.Z={section:"pages_section__mNUz7",sectionSearch:"pages_sectionSearch__ECjBr",container:"pages_container__-MxLQ"}}}]);
//# sourceMappingURL=965.ed1f0df6.chunk.js.map