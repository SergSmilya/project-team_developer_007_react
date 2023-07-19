"use strict";(self.webpackChunkproject_team_developer_007_react=self.webpackChunkproject_team_developer_007_react||[]).push([[671],{1556:function(e,n,i){i.d(n,{e:function(){return d}});var t="mainPage_title__NkTqx",r="mainPage_firstGreen__OVjdr",s="mainPage_black__JMHNO",a="mainPage_lastGreen__7VLZZ",c=i(184),d=function(e){var n=e.text;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("h1",{className:t,children:n}),(0,c.jsx)("svg",{className:r,width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("rect",{y:"2.84525",width:"8",height:"8",rx:"3",transform:"rotate(-25 0 2.84525)",fill:"#8BAA36"})}),(0,c.jsx)("svg",{className:s,width:"7",height:"7",viewBox:"0 0 7 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("rect",{y:"2",width:"6",height:"6",rx:"3",transform:"rotate(-25 0 2)",fill:"#22252A"})}),(0,c.jsx)("svg",{className:a,width:"10",height:"10",viewBox:"0 0 10 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("rect",{y:"2.84525",width:"8",height:"8",rx:"3",transform:"rotate(-25 0 2.84525)",fill:"#8BAA36"})})]})}},8671:function(e,n,i){i.r(n),i.d(n,{default:function(){return me}});var t=i(4942),r=i(1413),s=i(3433),a=i(9439),c=i(2791),d=i(7689),l=i(9434),o=i(8816),u=i(5984),p=i(5264),g=i(8007),_=g.Ry().shape({img:g.Z_().required("Image is required"),title:g.Z_().typeError("Should be a string").required("Title is required"),description:g.Z_().typeError("Should be a string").required("Description is required"),cookingTime:g.Z_(),category:g.Z_(),ingredients:g.IX().of(g.Ry({name:g.Z_().required("Ingredient name is required"),ingredientsQuantity:g.Z_().required("Ingredient quantity is required"),ingredientsQuantityMeasure:g.Z_(),id:g.Z_()})).required("Ingredients is required"),preparation:g.Z_().required("Preparation text is required")}),m="RecipeDescriptionFields_descriptionFieldWrapper__OllyZ",A="RecipeDescriptionFields_imgWrapper__PThwi",f="RecipeDescriptionFields_imgInput__hs24V",h="RecipeDescriptionFields_mockImg__LkiOa",x="RecipeDescriptionFields_recipeImg__NeH-m",v="RecipeDescriptionFields_inputBox__S5ETY",j="RecipeDescriptionFields_inputRaw__4EWRb",I="RecipeDescriptionFields_selectBox__Zi2-P",N="RecipeDescriptionFields_selectLabel__Hx9Qt",R="RecipeDescriptionFields_selectVariantsBox__M1-9-",F="RecipeDescriptionFields_arrow__s+6oQ",C="RecipeDescriptionFields_selectVariants__xv5ae",y="RecipeDescriptionFields_selectList__nuUTP",w="RecipeDescriptionFields_selectItem__rRTPj",B="RecipeDescriptionFields_errorMsg__JCF6Y",Q="RecipeDescriptionFields_inputsWrapper__Jv0zK",Z=i(6856),b=i(2530),k=i(4666),P=i(184),T=function(){for(var e=[],n=5;n<=120;n+=5)e.push(n);return e}(),E=function(e){var n=e.title,i=e.description,t=e.time,r=e.category,s=e.onInputImgUpload,d=e.onTitleChange,o=e.onDescriptionChange,u=e.onTimeChange,p=e.onCategoryChange,g=e.errors,_=(0,l.I0)(),E=(0,l.v9)(b.us);(0,c.useEffect)((function(){_((0,k.p)())}),[_]);var U=(0,c.useState)(""),S=(0,a.Z)(U,2),D=S[0],L=S[1],M=(0,c.useState)(!1),q=(0,a.Z)(M,2),H=q[0],G=q[1],J=(0,c.useState)(!1),O=(0,a.Z)(J,2),V=O[0],z=O[1];return(0,P.jsxs)("div",{className:m,children:[(0,P.jsxs)("div",{className:A,onChange:function(e){return function(e){var n=e.target.files[0],i=new FileReader;i.addEventListener("load",(function(e){var i=e.target.result,t=new File([i],{type:n.type}),r=URL.createObjectURL(t);L(r)})),i.readAsArrayBuffer(n),s(e)}(e)},children:[(0,P.jsx)("label",{htmlFor:"dishImg",children:(0,P.jsx)("img",{className:h,src:"".concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAABaUExURUdwTP////r6+vj4+Pf39/v7+/r6+vr6+vf39/r6+vn5+fr6+vn5+fn5+fT09Pr6+vf39/r6+vr6+vr6+vn5+fz8/Pr6+vb29vn5+fn5+fj4+Pn5+fr6+vr6+pqn3MYAAAAddFJOUwAQ73AgQN/AQL9Qn6DfMGBgz1+Qf1AwcICvsLDQwKQItQAAAgtJREFUeNrtmtt24yAMRTGoOIAvcZyktzn//5vzkLW67NoxclugM9F5dYR2AMtISCmRSCQSiUTrOpjgbrJTPcctzczA3gZ5Nd0u973DukLcdrxj2h7Z7rsB0GP/dBNNxTGfGdBtkEtjgZZ4/k96Dy1/Vi30ieUfGKsU26oaAQYBabyk2tkv0PFVsBjTvVsjXHSl0FbpACqLY3QCjinDSx+bgivatAFOYzsiGU6o+Y4amG89/4E12P6HDk9pATzqsgAHARAAARAAARAAARAAAYgA+Hf2UOdp7n1mpybNT516zTz7f1aZdfpcfzjl9d8tKyCHHH7JacTkKKH/uHuAUwP4qhxYcskAeP6hSwNAALIB1BdS6nppCgEMH8UWsiUA3KSaVrn8APNqXjVkB6CNj0MOgLAVJXMA+GX1KS/AotxImQF2PvwPARbf/OujbcLFoaPJHYi6+y9BHoBhHort432MpveQ3VDoQBJ8pxR5J2fCxwHQpQGYqVn9LyenJmzeHFMdd19v+3/1UiUTAAEQAAEQAAEQAAH47QC+LEDyZrZYu17xdj6CrpICWFAs+Unc0jlEf1G4qVW5lLugYbSskuZfhe/VmZU3eiCkae0O4EUZn6S5veotNDPKkQXaYA4r4nhaMfMmaKDm5+39nzvJ9xtno90pW+ybVTJNvSLGHJo1u8aQEolEIpFItK6/PiSfvUakTWYAAAAASUVORK5CYII="),alt:"addphoto"})}),(0,P.jsx)("input",{className:f,type:"file",accept:".jpg, .jpeg, .png",id:"dishImg",name:"img"}),D&&(0,P.jsx)("img",{className:x,src:D,alt:"recipeImage"}),g.imgs&&(0,P.jsx)("p",{className:B,children:g.imgs})]}),(0,P.jsxs)("div",{className:Q,children:[(0,P.jsxs)("div",{className:v,children:[(0,P.jsx)("input",{className:j,type:"text",id:"title",name:"title",placeholder:"Enter item title",onChange:function(e){return d(e.target.value)},value:n}),g.title&&(0,P.jsx)("p",{className:B,children:g.title})]}),(0,P.jsxs)("div",{className:v,children:[(0,P.jsx)("input",{className:j,type:"text",id:"about",name:"description",placeholder:"Enter about recipe",onChange:function(e){return o(e.target.value)},value:i}),g.description&&(0,P.jsx)("p",{className:B,children:g.description})]}),(0,P.jsxs)("div",{className:I,onClick:function(){z(!V)},children:[(0,P.jsx)("div",{className:N,children:"Category"}),(0,P.jsxs)("div",{className:R,children:[(0,P.jsx)("span",{className:C,children:r}),(0,P.jsx)(Z.Ix0,{className:F,size:"18"})]}),V&&(0,P.jsx)("ul",{className:y,children:E.map((function(e,n){return(0,P.jsx)("li",{className:w,onClick:function(){return n=e.name,p(n),void z(!1);var n},children:e.name},e._id)}))})]}),(0,P.jsxs)("div",{className:I,onClick:function(){G(!H)},children:[(0,P.jsx)("div",{className:N,children:"Cooking time"}),(0,P.jsxs)("div",{className:R,children:[(0,P.jsxs)("span",{className:C,children:[t," min"]}),(0,P.jsx)(Z.Ix0,{className:F,size:"18"})]}),H&&(0,P.jsx)("ul",{className:y,children:T.map((function(e){return(0,P.jsx)("li",{className:w,onClick:function(){return n="".concat(e),u(n),void G(!1);var n},children:e},e)}))})]})]})]})},U=function(e){return e.ingredients.ingredientsList},S=i(7260),D={ingredientsFieldWrapper:"RecipeIngredientsFields_ingredientsFieldWrapper__7nfJt",subtitle:"RecipeIngredientsFields_subtitle__1ZGFR",subtitleWrapper:"RecipeIngredientsFields_subtitleWrapper__SfGmt",ingredientsCounter:"RecipeIngredientsFields_ingredientsCounter__nN9uc",counterBtn:"RecipeIngredientsFields_counterBtn__IkHfo",counterBtnIcon:"RecipeIngredientsFields_counterBtnIcon__qPiY0",counterValue:"RecipeIngredientsFields_counterValue__OM8mo",ingredientItem:"RecipeIngredientsFields_ingredientItem__HjtdF",ingredientNameField:"RecipeIngredientsFields_ingredientNameField__srmHQ",ingredientInputBox:"RecipeIngredientsFields_ingredientInputBox__5j0ek",ingredientNameInput:"RecipeIngredientsFields_ingredientNameInput__t8j40",selectIngredients:"RecipeIngredientsFields_selectIngredients__cTPG+",selectIngredientItem:"RecipeIngredientsFields_selectIngredientItem__IYGbG",ingredientQuantityField:"RecipeIngredientsFields_ingredientQuantityField__vGfAg",ingredientQuantityInput:"RecipeIngredientsFields_ingredientQuantityInput__4ivy3",selectBox:"RecipeIngredientsFields_selectBox__wSTHA",arrow:"RecipeIngredientsFields_arrow__0afm7",arrowIngr:"RecipeIngredientsFields_arrowIngr__2RFdn",selectLabel:"RecipeIngredientsFields_selectLabel__paEGl",selectQuantityList:"RecipeIngredientsFields_selectQuantityList__s8IwP",selectQuantityItem:"RecipeIngredientsFields_selectQuantityItem__qidO3",deleteBtn:"RecipeIngredientsFields_deleteBtn__dOAYE",deleteBtnIcon:"RecipeIngredientsFields_deleteBtnIcon__Yxm5n",errorMsg:"RecipeIngredientsFields_errorMsg__k3PKf"},L=function(e){var n=e.ingredients,i=e.incrIngredientFields,t=e.decrIngredientFields,r=e.deleteIngredient,d=e.updateIngredient,o=e.updateErrors,u=e.errors,p=(0,l.I0)(),g=(0,l.v9)(U);(0,c.useEffect)((function(){p((0,S.D)())}),[p]);var _=(0,c.useState)(g),m=(0,a.Z)(_,2),A=m[0],f=m[1],h=["tbs","tsp","kg","g","ml","pcs","to taste"],x=(0,c.useState)(1),v=(0,a.Z)(x,2),j=v[0],I=v[1],N=(0,c.useState)(new Array(n.length).fill("")),R=(0,a.Z)(N,2),F=R[0],C=R[1],y=(0,c.useState)(new Array(n.length).fill("")),w=(0,a.Z)(y,2),B=w[0],Q=w[1];return(0,P.jsxs)("div",{className:D.ingredientsFieldWrapper,children:[(0,P.jsxs)("div",{className:D.subtitleWrapper,children:[(0,P.jsx)("h3",{className:D.subtitle,children:"Ingredients"}),(0,P.jsxs)("div",{className:D.ingredientsCounter,children:[(0,P.jsx)("button",{className:D.counterBtn,type:"button",onClick:function(){0!==j&&(t(),I((function(e){return e-1})))},children:(0,P.jsx)(Z.eqC,{className:D.counterBtnIcon,size:"14"})}),(0,P.jsx)("p",{className:D.counterValue,children:j}),(0,P.jsx)("button",{className:D.counterBtn,type:"button",onClick:function(){i(),I((function(e){return e+1}))},children:(0,P.jsx)(Z.x06,{className:D.counterBtnIcon,size:"14"})})]})]}),(0,P.jsx)("ul",{className:D.ingredientsList,children:n.map((function(e,n){return(0,P.jsxs)("li",{className:D.ingredientItem,children:[(0,P.jsxs)("div",{className:D.ingredientNameField,children:[(0,P.jsxs)("div",{children:[(0,P.jsxs)("div",{className:D.ingredientInputBox,children:[(0,P.jsx)("input",{name:"ingredients",className:D.ingredientNameInput,autoFocus:!0,value:e.name,onChange:function(e){return function(e,n,i){Q((function(n){var i=(0,s.Z)(n);return i[e]=!0,i})),f(g.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})).map((function(e){return e.name}))),d(e,n,i,"name"),o(["ingredients[".concat(e,"]")])}(n,e.target.value,g[n]._id)}}),(0,P.jsx)(Z.Ix0,{className:D.arrowIngr,size:"18"})]}),u["ingredients[".concat(n,"]")]&&(0,P.jsx)("p",{className:D.errorMsg,children:u["ingredients[".concat(n,"]")]}),B[n]&&(0,P.jsx)("ul",{className:D.selectIngredients,children:A.map((function(i){return(0,P.jsx)("li",{className:D.selectIngredientItem,onClick:function(){return function(e,n,i){var t=g.find((function(e){return e.name===n}));d(e,n,t._id,"name"),Q((function(n){var i=(0,s.Z)(n);return i[e]=!1,i}))}(n,i,e._id)},children:i},i)}))})]}),(0,P.jsxs)("div",{className:D.ingredientQuantityField,children:[(0,P.jsx)("input",{className:D.ingredientQuantityInput,type:"number",value:e.ingredientsQuantity,onChange:function(i){return function(e,n,i){d(e,n,i,"ingredientsQuantity"),o(["ingredients[".concat(e,"].ingredientQuantity")])}(n,i.target.value,e.id)}}),(0,P.jsxs)("div",{className:D.selectBox,onClick:function(){return function(e){C((function(n){var i=(0,s.Z)(n);return i[e]=!i[e],i}))}(n)},children:[(0,P.jsx)("span",{className:D.selectLabel,children:e.ingredientsQuantityMeasure}),(0,P.jsx)(Z.Ix0,{className:D.arrow,size:"18"})]}),F[n]&&(0,P.jsx)("ul",{className:D.selectQuantityList,children:h.map((function(i){return(0,P.jsx)("li",{className:D.selectQuantityItem,onClick:function(){return function(e,n,i){C((function(n){var i=(0,s.Z)(n);return i[e]=!i[e],i})),d(e,n,i,"ingredientsQuantityMeasure")}(n,i,e.id)},children:i},i)}))}),u["ingredients[".concat(n,"].ingredientsQuantity")]&&(0,P.jsxs)("p",{className:D.errorMsg,children:[" ",u["ingredients[".concat(n,"].ingredientsQuantity")]," "]})]})]}),(0,P.jsx)("button",{className:D.deleteBtn,type:"button",onClick:function(){return function(e,n){r(e),I((function(e){return e-1})),Q((function(e){var i=(0,s.Z)(e);return i[n]=!1,i}))}(e._id,n)},children:(0,P.jsx)(Z.lTq,{className:D.deleteBtnIcon,size:"18px"})})]},e.id)}))})]})},M={subtitle:"RecipePreparationFields_subtitle__5jg8a",recipeTextarea:"RecipePreparationFields_recipeTextarea__gE981",errorText:"RecipePreparationFields_errorText__viRuP"},q=function(e){var n=e.onPreparationTextChange,i=(e.preparation,e.errors),t=(0,c.useState)(""),r=(0,a.Z)(t,2),s=r[0],d=r[1];return(0,P.jsxs)("div",{className:M.preparationFieldWrapper,children:[(0,P.jsx)("h3",{className:M.subtitle,children:"Recipe Preparation"}),(0,P.jsx)("textarea",{className:M.recipeTextarea,name:"instructions",id:"instructions",placeholder:"Enter recipe",onKeyDown:function(e){var i=s;"Enter"===e.key&&(i=s.split("\n").join(", ")),n(i)},onChange:function(e){d(e.target.value)},value:s}),i.preparation&&(0,P.jsx)("p",{className:M.errorText,children:i.preparation})]})},H="AddRecipeComponents_addSectionWrap__cl+na",G="AddRecipeComponents_addRecipeForm__VEcmL",J="AddRecipeComponents_addButton__caTT4",O="AddRecipeComponents_socialsWrapper__aanky",V="AddRecipeComponents_subtitle__Qt+Kw",z="AddRecipeComponents_popularRecipesList__TrCDl",Y="AddRecipeComponents_popularRecipesItem__Q2PZK",W="AddRecipeComponents_popularRecipesLink__I+PD+",K="AddRecipeComponents_recipePreview__H0kJa",X="AddRecipeComponents_popularRecipeSubtitle__8ngnR",$="AddRecipeComponents_popularRecipeText__OtUqX",ee="AddRecipeComponents_notFoundText__HsX5I",ne="AddRecipeComponents_followUsBlock__Sg535",ie=function(){var e=(0,c.useState)(""),n=(0,a.Z)(e,2),i=n[0],g=n[1],m=(0,c.useState)(""),A=(0,a.Z)(m,2),f=A[0],h=A[1],x=(0,c.useState)(""),v=(0,a.Z)(x,2),j=v[0],I=v[1],N=(0,c.useState)("Breakfast"),R=(0,a.Z)(N,2),F=R[0],C=R[1],y=(0,c.useState)("30"),w=(0,a.Z)(y,2),B=w[0],Q=w[1],Z=(0,c.useState)([{id:(0,u.x0)(),ingredientsQuantity:0,ingredientsQuantityMeasure:"tbs",name:""}]),b=(0,a.Z)(Z,2),k=b[0],T=b[1],U=(0,c.useState)(""),S=(0,a.Z)(U,2),D=S[0],M=S[1],O=(0,c.useState)({}),V=(0,a.Z)(O,2),z=V[0],Y=V[1],W=(0,d.s0)(),K=(0,c.useMemo)((function(){return k.map((function(e){var n=e.id,i=e.ingredientsQuantity,t=e.ingredientsQuantityMeasure;return{measure:"".concat(i," ").concat(t),_id:n}}))}),[k]),X={img:i,title:f,description:j,cookingTime:B,category:F,ingredients:k,preparation:D},$=new FormData;$.append("preview",i),$.append("title",f),$.append("description",j),$.append("category",F),$.append("time","".concat(B)),$.append("ingredients",JSON.stringify(K)),$.append("instructions",D);var ee=(0,l.I0)(),ne=function(e){Y((function(n){return(0,r.Z)((0,r.Z)({},n),{},(0,t.Z)({},e,""))}))};return(0,P.jsx)("div",{className:H,children:(0,P.jsxs)("form",{className:G,onSubmit:function(e){e.preventDefault(),_.validate(X,{abortEarly:!1}).then((function(){ee((0,o.C0)($)).unwrap().then((function(e){W("/my",{replace:!0}),p.Notify.success("Hooray! The recipe was successfully added")})).catch((function(e){p.Notify.error("Ooops, smth is going wrong... Try again!")}))})).catch((function(e){var n=e.inner.reduce((function(e,n){return(0,r.Z)((0,r.Z)({},e),{},(0,t.Z)({},n.path,n.message))}),{});Y(n)}))},children:[(0,P.jsx)(E,{title:f,description:j,time:B,category:F,onInputImgUpload:function(e){g(e.target.files[0]),ne("img")},onTitleChange:function(e){h(e),ne("title")},onDescriptionChange:function(e){I(e),ne("description")},onCategoryChange:function(e){C(e)},onTimeChange:function(e){Q("".concat(e))},errors:z}),(0,P.jsx)(L,{ingredients:k,incrIngredientFields:function(){T((function(e){return[].concat((0,s.Z)(e),[{id:(0,u.x0)(),ingredientsQuantity:0,ingredientsQuantityMeasure:"tbs",name:""}])}))},decrIngredientFields:function(){var e=k[k.length-1];T((function(n){return n.filter((function(n){return n.id!==e.id}))}))},deleteIngredient:function(e){T(k.filter((function(n){return n.id!==e})))},updateIngredient:function(e,n,i,t){T((function(r){var a=(0,s.Z)(r);return a[e][t]=n,a[e].id=i,a}))},updateErrors:ne,errors:z}),(0,P.jsx)(q,{onPreparationTextChange:function(e){M(e),ne("preparation")},preparation:D,errors:z}),(0,P.jsx)("button",{className:J,type:"submit",children:"Add"})]})})},te=i(3),re=function(){return(0,P.jsxs)("div",{className:O,children:[(0,P.jsx)("h3",{className:V,children:" Follow us "}),(0,P.jsx)("div",{className:ne,children:(0,P.jsx)(te.L,{})})]})},se=i(1556),ae=function(e){return e.popularRecipes.popularRecipes},ce=i(3397),de=i(1087);function le(){var e=(0,l.I0)(),n=(0,l.v9)(ae),i=(null===n||void 0===n?void 0:n.recipes)||[];return(0,c.useEffect)((function(){e((0,ce.T)())}),[e]),(0,P.jsxs)("div",{children:[(0,P.jsx)("h3",{className:V,children:"Popular recipe"}),i.length>0?(0,P.jsx)("ul",{className:z,children:i.map((function(e){return(0,P.jsx)("li",{className:Y,children:(0,P.jsxs)(de.rU,{to:"/recipe/".concat(e._id),className:W,children:[(0,P.jsx)("img",{src:e.preview||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAACxMAAAsTAQCanBgAAABFUExURUdwTPn5+fr6+vj4+Pf39/r6+vr6+vf39/r6+vn5+fn5+fr6+vv7+/f39/////n5+fn5+fb29vr6+vr6+vn5+fz8/Pr6+n8EUKgAAAAWdFJOUwCAkHBA778g3+DfwEBgEFB/cF+foFAThhDgAAAA/UlEQVRYw+2X6w7CIAyFBVrKYOyqvP+jaoxhEUhcISbGcP6Nwpe1sO5wuXT9l6ZFmyhIo/MR05JK65URI0Xl8SM2XnEtrLd0/mXJZARC4qRLdkpGxM4rmBTJgB55ANDJwEA8AJkO6IBvAG6lWUt4ainFzhx9FV5a+d1pw5DIbiyACZmQBQgFVQGcFK4BgM9SA1YDXlsFtQAX+10lIPZNWQmQsWVXAnRrCgEaixgQGrfxkYWQuukkVh9lzNfbD/+690effY7oE8PRu3IH/CRAA9PmudRoSh7gqlKrbplWN5vueWZblez+DufsPkjji1jlhqg5q9oRc2Lq17M/0x1koh1YeifJIwAAAABJRU5ErkJggg==",alt:"popularDish",className:K}),(0,P.jsxs)("div",{children:[(0,P.jsx)("h5",{className:X,children:e.title}),(0,P.jsx)("p",{className:$,children:e.instructions})]})]})},e._id)}))}):(0,P.jsx)("p",{className:ee,children:"There are no popular recipes yet"})]})}var oe="AddRecipePage_wrapper__8rLIM",ue="AddRecipePage_titleWrapper__e9A83",pe="AddRecipePage_pageContent__6accz",ge="AddRecipePage_formContainer__TEeEs",_e="AddRecipePage_sidebar__1uoTZ",me=function(){var e=(0,d.TH)().pathname;return(0,c.useEffect)((function(){window.scrollTo(0,0)}),[e]),(0,P.jsxs)("div",{className:oe,children:[(0,P.jsx)("div",{className:ue,children:(0,P.jsx)(se.e,{text:"Add recipe"})}),(0,P.jsx)("section",{className:pe,children:(0,P.jsxs)("div",{className:ge,children:[(0,P.jsx)(ie,{}),(0,P.jsxs)("div",{className:_e,children:[(0,P.jsx)(re,{}),(0,P.jsx)(le,{})]})]})})]})}}}]);
//# sourceMappingURL=671.609d565b.chunk.js.map