"use strict";(self.webpackChunkproject_team_developer_007_react=self.webpackChunkproject_team_developer_007_react||[]).push([[894],{3894:function(e,s,t){t.r(s),t.d(s,{default:function(){return F}});var a=t(9434),r=t(9439),n=t(1087),c="ChooseYourBreakfast_container__C3LX-",i="ChooseYourBreakfast_text__OKIc7",l="ChooseYourBreakfast_text_active__W10JZ",o="ChooseYourBreakfast_btn__C4J3a",_=t(184),h=function(){return(0,_.jsxs)("div",{className:c,children:[(0,_.jsxs)("p",{className:i,children:[(0,_.jsx)("span",{className:l,children:" Delicious and healthy \xa0"}),"way to enjoy a variety of fresh ingredients in one satisfying meal"]}),(0,_.jsx)(n.rU,{to:"/categories",children:(0,_.jsx)("button",{type:"button",className:o,children:" See recipes"})})]})},u=t(2791),d="Search_form__H6ZBx",m="Search_input__XY4Y+",x="Search_btn__caGzV",j=function(e){var s=e.onSubmit,t=(0,u.useState)(""),a=(0,r.Z)(t,2),c=a[0],i=a[1];return(0,_.jsxs)("form",{className:d,onSubmit:function(e){if(e.preventDefault(),""===c.trim())return alert("Enter the name of the recipe");s(c)},children:[(0,_.jsx)("input",{className:m,type:"text",autoComplete:"off",autoFocus:!0,value:c,onChange:function(e){return i(e.currentTarget.value.toLowerCase())},placeholder:"Enter the text"}),(0,_.jsx)(n.rU,{to:"/search/?".concat(c),data:c,children:(0,_.jsx)("button",{className:x,type:"submit",children:"Search"})})]})},f="RecipeList_list__vNNkD",p="RecipeList_list_item__39mnX",N="RecipeList_list_title__0UpHV",v="RecipeList_img__xYgff";function g(e){var s=e.data;return(0,_.jsx)(_.Fragment,{children:s&&(0,_.jsx)("ul",{className:f,children:s.map((function(e){return(0,_.jsx)("li",{className:p,children:(0,_.jsxs)(n.rU,{to:"/recipe/:".concat(e._id),children:[(0,_.jsx)("h3",{className:N,children:e.title}),(0,_.jsx)("img",{className:v,src:e.thumb,alt:"recipe"})]})},e._id)}))})})}var b="PreviewCategories_container__w3by+",y="PreviewCategories_section__8YBe6",C="PreviewCategories_title__U0oOr",k="PreviewCategories_btn__7oh9X",S="PreviewCategories_btn_other__7puN+",w=t(6112),P=function(){var e=(0,a.v9)(w.O2);return console.log(e),(0,_.jsxs)("div",{className:b,children:[(0,_.jsxs)("section",{className:y,children:[(0,_.jsx)("h2",{className:C,children:"Breakfast"}),(0,_.jsx)(g,{data:e.Breakfast}),(0,_.jsx)(n.rU,{to:"/categories/:breakfast",children:(0,_.jsx)("button",{className:k,type:"button",children:"See all"})})]}),(0,_.jsxs)("section",{className:y,children:[(0,_.jsx)("h2",{className:C,children:"Miscellaneous"}),(0,_.jsx)(g,{data:e.Miscellaneous}),(0,_.jsx)(n.rU,{to:"/categories/:miscellaneous",children:(0,_.jsx)("button",{className:k,type:"button",children:"See all"})})]}),(0,_.jsxs)("section",{className:y,children:[(0,_.jsx)("h2",{className:C,children:"Chicken"}),(0,_.jsx)(g,{data:e.Chicken}),(0,_.jsx)(n.rU,{to:"/categories/:chicken",children:(0,_.jsx)("button",{className:k,type:"button",children:"See all"})})]}),(0,_.jsxs)("section",{className:y,children:[(0,_.jsx)("h2",{className:C,children:"Deserts"}),(0,_.jsx)(g,{data:e.Deserts}),(0,_.jsx)(n.rU,{to:"/categories/:deserts",children:(0,_.jsx)("button",{className:k,type:"button",children:"See all"})})]}),(0,_.jsx)(n.rU,{className:S,to:"/categories",children:"Other categories"})]})},U="Main_container__uzGJG",Y=function(){var e=(0,n.lr)(),s=(0,r.Z)(e,2),t=s[0],a=s[1],c=(0,u.useState)(""),i=(0,r.Z)(c,2),l=i[0],o=i[1],d=t.get("query");(0,u.useEffect)((function(){d&&o("query")}),[d]);return(0,_.jsxs)("div",{children:[(0,_.jsxs)("div",{className:U,children:[(0,_.jsx)(h,{}),(0,_.jsx)(j,{onSubmit:function(e){a({query:e})},data:l})]}),(0,_.jsx)(P,{})]})},M="MainPage_wrapper__JFbZh",B="MainPage_wrapper_leaf__CTIKY",L="MainPage_container__Lm-lH",O="MainPage_title_start__shOLn",Z="MainPage_title__goIOM",D="MainPage_text__eh1lt",q=t(4217),E=t(6071),F=function(){var e=(0,a.I0)(),s=(0,a.v9)(q.Qb),t=(0,a.v9)(q.wU);return(0,u.useEffect)((function(){t||e((0,E.Hq)())}),[e,t]),(0,_.jsx)(_.Fragment,{children:s&&!t&&(0,_.jsx)("div",{className:M,children:(0,_.jsx)("div",{className:B,children:(0,_.jsxs)("div",{className:L,children:[(0,_.jsxs)("h1",{className:Z,children:[(0,_.jsx)("span",{className:O,children:"So"}),"Yummy"]}),(0,_.jsx)("p",{className:D,children:'"What to cook?" is not only a recipe app, it is, in fact, your cookbook. You can add your own recipes to save them for the future.'}),(0,_.jsx)(Y,{})]})})})})}}}]);
//# sourceMappingURL=894.5452e976.chunk.js.map