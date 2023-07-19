"use strict";(self.webpackChunkproject_team_developer_007_react=self.webpackChunkproject_team_developer_007_react||[]).push([[937,154],{1556:function(e,t,n){n.d(t,{e:function(){return o}});var a="mainPage_title__NkTqx",c="mainPage_firstGreen__OVjdr",r="mainPage_black__JMHNO",s="mainPage_lastGreen__7VLZZ",i=n(184),o=function(e){var t=e.text;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{className:a,children:t}),(0,i.jsx)("svg",{className:c,width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("rect",{y:"2.84525",width:"8",height:"8",rx:"3",transform:"rotate(-25 0 2.84525)",fill:"#8BAA36"})}),(0,i.jsx)("svg",{className:r,width:"7",height:"7",viewBox:"0 0 7 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("rect",{y:"2",width:"6",height:"6",rx:"3",transform:"rotate(-25 0 2)",fill:"#22252A"})}),(0,i.jsx)("svg",{className:s,width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("rect",{y:"2.84525",width:"8",height:"8",rx:"3",transform:"rotate(-25 0 2.84525)",fill:"#8BAA36"})})]})}},937:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var a=n(9434),c=n(1556),r=n(9033),s="MyRecipesPage_container__ADU+x",i="MyRecipesPage_wrapper__nXhQO",o="MyRecipesPage_pagin_container__QqObu",_=n(9439),l=n(2791),d=n(1087),h="MyRecipesItem_card_container__cFrU8",u="MyRecipesItem_wrapper__y6Dfj",p="MyRecipesItem_top_wrapper__22mnu",m="MyRecipesItem_card_title__Sds+O",x="MyRecipesItem_card_text__Q4PeA",g="MyRecipesItem_delete_btn__nKPjV",f="MyRecipesItem_bottom_wrapper__Bo9x6",j="MyRecipesItem_card_time__GO1FQ",v="MyRecipesItem_card_btn__zoIdt",N="MyRecipesItem_img_wrapper__hP5Vl",w="MyRecipesItem_img__A60ng",b=n(8816),y=n(5125),R=n(5264),P=n(184),M=function(e){var t=e.recipe,n=e.page,c=(0,l.useState)(),r=(0,_.Z)(c,2),s=r[0],i=r[1],o=(0,a.I0)(),M=(0,d.lr)(),Z=(0,_.Z)(M,2)[1];return(0,P.jsxs)("li",{className:h,children:[(0,P.jsx)("div",{className:N,children:(0,P.jsx)("img",{src:"".concat(t.preview),alt:"".concat(t.title),className:w})}),(0,P.jsx)("button",{className:g,type:"button",onClick:function(){return e=t._id,i(e),o((0,b.v9)(e)),Z({page:n}),o((0,b.TR)(n)),R.Notify.success("Recipe deleted successfully");var e},disabled:s===t._id,children:(0,P.jsx)("svg",{children:(0,P.jsx)("use",{href:y.Z+"#trash"})})}),(0,P.jsxs)("div",{className:u,children:[(0,P.jsxs)("div",{className:p,children:[(0,P.jsx)("h2",{className:m,children:t.title}),(0,P.jsx)("p",{className:x,children:t.description})]}),(0,P.jsxs)("div",{className:f,children:[(0,P.jsxs)("span",{className:j,children:[t.time," min"]}),(0,P.jsxs)(d.rU,{to:"/recipe/".concat(t._id),state:{from:"/my"},className:v,children:["See recipe ",t.id]})]})]})]})},Z="MyRecipesList_list__Ouxou",I=function(e){return e.myRecipes.availableRecipes.recipes},C=function(e){return e.myRecipes.isLoading},T=function(e){return e.myRecipes.error},k=function(e){return e.myRecipes.availableRecipes.total},F=function(){var e=(0,d.lr)(),t=(0,_.Z)(e,1)[0],n=(0,l.useState)(Number(t.get("page")||1)),c=(0,_.Z)(n,1)[0],r=(0,a.v9)(I);return(0,P.jsx)(P.Fragment,{children:(0,P.jsx)("ul",{className:Z,children:null===r||void 0===r?void 0:r.map((function(e){return(0,P.jsx)(M,{recipe:e,page:c},e._id)}))})})},A=n(7710),E="Paginator_pagination_list__lS-DI",B="Paginator_pagination_item__WJnFB",O="Paginator_pagination_btn__rQZd5",H="Paginator_active__H3Kos",Q="Paginator_left_btn__c1lCn",S="Paginator_right_btn__BKI+h",U=n(7689),V=function(){var e=(0,d.lr)(),t=(0,_.Z)(e,2),n=t[0],c=t[1],r=(0,U.TH)(),s=(0,U.s0)(),i=(0,l.useState)(1),o=(0,_.Z)(i,2),h=o[0],u=o[1],p=n.get("page")||h,m=(0,a.I0)(),x=(0,a.v9)(k),g=Math.ceil(x/4);(0,l.useEffect)((function(){c({page:p});var e=r.search||"?page=".concat(p);s({search:e})}),[s,r.search,c,p]),(0,l.useEffect)((function(){m((0,b.TR)(p)),u(Number(p))}),[p,m]);var f=function(){for(var e=[],t=1;t<=g;t++)e.push(t);return e}();return(0,P.jsx)(P.Fragment,{children:g>1&&(0,P.jsxs)("ul",{className:"".concat(E),children:[(0,P.jsx)("li",{className:"".concat(B),children:(0,P.jsx)("button",{className:"".concat(Q," ").concat(O),onClick:function(){var e=h-1;console.log("prevPage :>> ",e),u(e),c({page:e}),m((0,b.TR)(e))},disabled:1===h,children:(0,P.jsx)("svg",{children:(0,P.jsx)("use",{href:y.Z+"#leftbolt"})})})}),f.map((function(e){return(0,P.jsx)("li",{className:"".concat(B),children:(0,P.jsx)("button",{onClick:function(){!function(e){u(e),c({page:e}),m((0,b.TR)(e))}(e),u(e)},className:"".concat(O," ").concat(h===e?H:""),children:e})},e)})),(0,P.jsx)("li",{className:"".concat(B),children:(0,P.jsx)("button",{className:"".concat(S," ").concat(O),onClick:function(){var e=h+1;u(e),c({page:e}),m((0,b.TR)(e))},disabled:h===g,children:(0,P.jsx)("svg",{children:(0,P.jsx)("use",{href:y.Z+"#rightbolt"})})})})]})})},D=n(6784),G=n(9154),L=function(){var e=(0,a.v9)(C),t=(0,a.v9)(T),n=(0,a.v9)(I),_=(0,U.TH)().pathname;return(0,l.useEffect)((function(){window.scrollTo(0,0)}),[_]),(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)("div",{className:r.Z.section,children:[e&&!t&&(0,P.jsx)(D.Z,{}),(0,P.jsx)("div",{className:"".concat(r.Z.container," ").concat(A.Z.container),children:(0,P.jsx)(c.e,{text:"My recipes"})}),(0,P.jsxs)("div",{className:"".concat(r.Z.container," ").concat(i," "),children:[!n&&(0,P.jsx)(G.default,{text:"you have no personal recipes"}),(0,P.jsx)(F,{})]}),(0,P.jsx)("div",{className:"".concat(s," ").concat(o),children:(0,P.jsx)(V,{})})]})})}},9154:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var a=n(7689),c="NotFoundPage_Error__section__oG+hu",r="NotFoundPage_Error__txt_wrapper__x8bIb",s="NotFoundPage_Error__main_txt__5xV3i",i="NotFoundPage_Error__descr_txt__aU8-1",o=n(2791),_=n(184),l=function(e){var t=e.text,n=void 0===t?"but the page you were looking for can\u2019t be found..":t,l=(0,a.TH)().pathname;return(0,o.useEffect)((function(){window.scrollTo(0,0)}),[l]),(0,_.jsx)("div",{className:c,children:(0,_.jsxs)("div",{className:r,children:[(0,_.jsx)("p",{className:s,children:"We are sorry,"}),(0,_.jsx)("p",{className:i,children:n})]})})}},7710:function(e,t){t.Z={tabPhoto:"searchContainer_tabPhoto__EAn5a",paginationWrap:"searchContainer_paginationWrap__TOQqD",text:"searchContainer_text__tNIrt",center:"searchContainer_center__HHt3g",container:"searchContainer_container__U-YtM",mobPhoto:"searchContainer_mobPhoto__se0nS"}},9033:function(e,t){t.Z={section:"pages_section__mNUz7",container:"pages_container__-MxLQ"}}}]);
//# sourceMappingURL=937.dcf9d81f.chunk.js.map