"use strict";(self.webpackChunkproject_team_developer_007_react=self.webpackChunkproject_team_developer_007_react||[]).push([[937],{1556:function(e,t,n){n.d(t,{e:function(){return o}});var a="mainPage_title__NkTqx",c="mainPage_firstGreen__OVjdr",s="mainPage_black__JMHNO",i="mainPage_lastGreen__7VLZZ",r=n(184),o=function(e){var t=e.text;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{className:a,children:t}),(0,r.jsx)("svg",{className:c,width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("rect",{y:"2.84525",width:"8",height:"8",rx:"3",transform:"rotate(-25 0 2.84525)",fill:"#8BAA36"})}),(0,r.jsx)("svg",{className:s,width:"7",height:"7",viewBox:"0 0 7 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("rect",{y:"2",width:"6",height:"6",rx:"3",transform:"rotate(-25 0 2)",fill:"#22252A"})}),(0,r.jsx)("svg",{className:i,width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("rect",{y:"2.84525",width:"8",height:"8",rx:"3",transform:"rotate(-25 0 2.84525)",fill:"#8BAA36"})})]})}},937:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var a=n(9434),c=n(1556),s=n(9033),i="MyRecipesPage_container__ADU+x",r="MyRecipesPage_wrapper__nXhQO",o="MyRecipesPage_pagin_container__QqObu",l="MyRecipesPage_wrapper_leaf__DH4di",_="MyRecipesPage_leaf_bg__aCsYC",h=n(9439),d=n(2791),p=n(1087),m="MyRecipesItem_card_container__cFrU8",u="MyRecipesItem_wrapper__y6Dfj",g="MyRecipesItem_top_wrapper__22mnu",x="MyRecipesItem_card_title__Sds+O",f="MyRecipesItem_card_text__Q4PeA",j="MyRecipesItem_delete_btn__nKPjV",v="MyRecipesItem_bottom_wrapper__Bo9x6",N="MyRecipesItem_card_time__GO1FQ",w="MyRecipesItem_card_btn__zoIdt",y="MyRecipesItem_img_wrapper__hP5Vl",b="MyRecipesItem_img__A60ng",R=n(8816),P=n(5125),M=n(5264),Z=n(184),I=function(e){var t=e.recipe,n=e.page,c=(0,d.useState)(),s=(0,h.Z)(c,2),i=s[0],r=s[1],o=(0,a.I0)(),l=(0,p.lr)(),_=(0,h.Z)(l,2)[1];return(0,Z.jsxs)("li",{className:m,children:[(0,Z.jsx)("div",{className:y,children:(0,Z.jsx)("img",{src:"".concat(t.preview),alt:"".concat(t.title),className:b})}),(0,Z.jsx)("button",{className:j,type:"button",onClick:function(){return e=t._id,r(e),o((0,R.v9)(e)),_({page:n}),o((0,R.TR)(n)),M.Notify.success("Recipe deleted successfully");var e},disabled:i===t._id,children:(0,Z.jsx)("svg",{children:(0,Z.jsx)("use",{href:P.Z+"#trash"})})}),(0,Z.jsxs)("div",{className:u,children:[(0,Z.jsxs)("div",{className:g,children:[(0,Z.jsx)("h2",{className:x,children:t.title}),(0,Z.jsx)("p",{className:f,children:t.description})]}),(0,Z.jsxs)("div",{className:v,children:[(0,Z.jsx)("span",{className:N,children:t.time}),(0,Z.jsxs)(p.rU,{to:"/recipe/".concat(t._id),state:{from:"/my"},className:w,children:["See recipe ",t.id]})]})]})]})},C="MyRecipesList_list__Ouxou",k=function(e){return e.myRecipes.availableRecipes.recipes},T=function(e){return e.myRecipes.isLoading},A=function(e){return e.myRecipes.error},B=function(e){return e.myRecipes.availableRecipes.total},O=function(){var e=(0,p.lr)(),t=(0,h.Z)(e,1)[0],n=(0,d.useState)(Number(t.get("page")||1)),c=(0,h.Z)(n,1)[0],s=(0,a.v9)(k);return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)("ul",{className:C,children:null===s||void 0===s?void 0:s.map((function(e){return(0,Z.jsx)(I,{recipe:e,page:c},e._id)}))})})},F=n(7710),H="Paginator_pagination_list__lS-DI",Q="Paginator_pagination_item__WJnFB",S="Paginator_pagination_btn__rQZd5",D="Paginator_active__H3Kos",U="Paginator_left_btn__c1lCn",E="Paginator_right_btn__BKI+h",L=n(7689),V=function(){var e=(0,p.lr)(),t=(0,h.Z)(e,2),n=t[0],c=t[1],s=(0,L.TH)(),i=(0,L.s0)(),r=(0,d.useState)(1),o=(0,h.Z)(r,2),l=o[0],_=o[1],m=n.get("page")||l,u=(0,a.I0)(),g=(0,a.v9)(B),x=Math.ceil(g/4);(0,d.useEffect)((function(){c({page:m});var e=s.search||"?page=".concat(m);i({search:e})}),[i,s.search,c,m]),(0,d.useEffect)((function(){u((0,R.TR)(m)),_(Number(m))}),[m,u]);var f=function(){for(var e=[],t=1;t<=x;t++)e.push(t);return e}();return(0,Z.jsx)(Z.Fragment,{children:x>1&&(0,Z.jsxs)("ul",{className:"".concat(H),children:[(0,Z.jsx)("li",{className:"".concat(Q),children:(0,Z.jsx)("button",{className:"".concat(U," ").concat(S),onClick:function(){var e=l-1;console.log("prevPage :>> ",e),_(e),c({page:e}),u((0,R.TR)(e))},disabled:1===l,children:(0,Z.jsx)("svg",{children:(0,Z.jsx)("use",{href:P.Z+"#leftbolt"})})})}),f.map((function(e){return(0,Z.jsx)("li",{className:"".concat(Q),children:(0,Z.jsx)("button",{onClick:function(){!function(e){_(e),c({page:e}),u((0,R.TR)(e))}(e),_(e)},className:"".concat(S," ").concat(l===e?D:""),children:e})},e)})),(0,Z.jsx)("li",{className:"".concat(Q),children:(0,Z.jsx)("button",{className:"".concat(E," ").concat(S),onClick:function(){var e=l+1;_(e),c({page:e}),u((0,R.TR)(e))},disabled:l===x,children:(0,Z.jsx)("svg",{children:(0,Z.jsx)("use",{href:P.Z+"#rightbolt"})})})})]})})},q=n(6784),G=function(){var e=(0,a.v9)(T),t=(0,a.v9)(A),n=(0,L.TH)().pathname;return(0,d.useEffect)((function(){window.scrollTo(0,0)}),[n]),(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)("div",{className:"".concat(l),children:[(0,Z.jsx)("div",{className:_}),(0,Z.jsxs)("div",{className:s.Z.section,children:[e&&!t&&(0,Z.jsx)(q.Z,{}),t&&(0,Z.jsx)("p",{children:t}),(0,Z.jsx)("div",{className:"".concat(s.Z.container," ").concat(F.Z.container),children:(0,Z.jsx)(c.e,{text:"My recipes"})}),(0,Z.jsx)("div",{className:"".concat(s.Z.container," ").concat(r," "),children:(0,Z.jsx)(O,{})}),(0,Z.jsx)("div",{className:"".concat(i," ").concat(o),children:(0,Z.jsx)(V,{})})]})]})})}},7710:function(e,t){t.Z={tabPhoto:"searchContainer_tabPhoto__EAn5a",paginationWrap:"searchContainer_paginationWrap__TOQqD",text:"searchContainer_text__tNIrt",center:"searchContainer_center__HHt3g",container:"searchContainer_container__U-YtM",mobPhoto:"searchContainer_mobPhoto__se0nS"}},9033:function(e,t){t.Z={section:"pages_section__mNUz7",container:"pages_container__-MxLQ"}}}]);
//# sourceMappingURL=937.c723d5eb.chunk.js.map