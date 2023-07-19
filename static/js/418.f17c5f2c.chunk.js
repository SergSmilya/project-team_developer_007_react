"use strict";(self.webpackChunkproject_team_developer_007_react=self.webpackChunkproject_team_developer_007_react||[]).push([[418],{8418:function(s,e,t){t.r(e),t.d(e,{default:function(){return w}});var i=t(9439),a=t(5705),r=t(8007),n=t(9434),_=t(7689),o=t(1087),c=t(2791),g=t(9273),l=t(5125),m=t(3877),u=t(184),p={name:"",email:"",password:""},d=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,h=r.Ry().shape({email:r.Z_().matches(d,"Email is not valid").required(),password:r.Z_().min(6).required()}),R=function(){var s=(0,n.I0)(),e=(0,_.TH)().pathname,t=(0,_.s0)(),r=(0,c.useState)(!0),R=(0,i.Z)(r,2),v=R[0],Z=R[1];(0,c.useEffect)((function(){"/signin"===e&&Z(!1)}),[e]);var w=(0,c.useCallback)((function(){t(v?"/signin":"/register")}),[t,v]);return(0,u.jsx)("section",{className:m.Z.Registration__Section,children:(0,u.jsxs)("div",{className:m.Z.Registration__container,children:[(0,u.jsx)(a.J9,{initialValues:p,validationSchema:h,validateOnChange:!1,validateOnBlur:!1,onSubmit:function(e,t){var i=t.resetForm;s((0,g.z2)(e)),i(),w()},children:function(s){var e=s.errors,t=s.touched,i=s.values;return(0,u.jsxs)(a.l0,{className:m.Z.Registration__form,children:[(0,u.jsx)("b",{className:m.Z.Registration__title,children:"Registration"}),(0,u.jsx)("label",{className:m.Z.Registration__label,children:(0,u.jsxs)("div",{className:m.Z.Registration__inputwrapper,children:[(0,u.jsx)(a.gN,{className:"".concat(m.Z.Registration__input," ").concat(t.name&&e.name?"".concat(m.Z.Registration__input_error):t.name&&!e.name&&i.name.length>=1?"".concat(m.Z.Registration__input_success):""),type:"text",name:"name",placeholder:"Name",required:!0}),(0,u.jsx)("svg",{width:18,height:18,className:"".concat(m.Z.Registration__svg," ").concat(t.name&&e.name?"".concat(m.Z.Registration__svg_error):t.name&&!e.name&&i.name.length>=1?"".concat(m.Z.Registration__svg_success):""),children:(0,u.jsx)("use",{href:l.Z+"#reg-name"})}),(0,u.jsx)("svg",{width:20,height:20,className:"".concat(m.Z.Registration__svg_succ," ").concat(t.name&&e.name?"".concat(m.Z.Registration__svg_error):t.name&&!e.name&&i.name.length>=1?"".concat(m.Z.Registration__svg_success):""),children:(0,u.jsx)("use",{href:l.Z+"#input-succ"})}),(0,u.jsx)("svg",{width:20,height:20,className:"".concat(m.Z.Registration__svg_err," ").concat(t.name&&e.name?"".concat(m.Z.Registration__svg_error):t.name&&!e.name&&i.name.length>=1?"".concat(m.Z.Registration__svg_success):""),children:(0,u.jsx)("use",{href:l.Z+"#input-err"})})]})}),(0,u.jsx)("label",{className:m.Z.Registration__label,children:(0,u.jsxs)("div",{className:m.Z.Registration__inputwrapper,children:[(0,u.jsx)(a.gN,{className:"".concat(m.Z.Registration__input," ").concat(t.email&&e.email?"".concat(m.Z.Registration__input_error):t.email&&!e.email&&d.test(i.email)?"".concat(m.Z.Registration__input_success):""),type:"email",name:"email",placeholder:"Email",required:!0}),(0,u.jsx)(a.Bc,{name:"email",render:function(s){return(0,u.jsx)("p",{className:m.Z.Registration__error,children:s})}}),(0,u.jsx)("svg",{width:18,height:18,className:"".concat(m.Z.Registration__svg," ").concat(t.email&&e.email?"".concat(m.Z.Registration__svg_error):t.email&&!e.email&&d.test(i.email)?"".concat(m.Z.Registration__svg_success):""),children:(0,u.jsx)("use",{href:l.Z+"#reg-email"})}),(0,u.jsx)("svg",{width:20,height:20,className:"".concat(m.Z.Registration__svg_succ," ").concat(t.email&&e.email?"".concat(m.Z.Registration__svg_error):t.email&&!e.email&&d.test(i.email)?"".concat(m.Z.Registration__svg_success):""),children:(0,u.jsx)("use",{href:l.Z+"#input-succ"})}),(0,u.jsx)("svg",{width:20,height:20,className:"".concat(m.Z.Registration__svg_err," ").concat(t.email&&e.email?"".concat(m.Z.Registration__svg_error):t.email&&!e.email&&d.test(i.email)?"".concat(m.Z.Registration__svg_success):""),children:(0,u.jsx)("use",{href:l.Z+"#input-err"})})]})}),(0,u.jsx)("label",{className:m.Z.Registration__label,children:(0,u.jsxs)("div",{className:m.Z.Registration__inputwrapper,children:[(0,u.jsx)(a.gN,{className:"".concat(m.Z.Registration__input," ").concat(t.password&&e.password?"".concat(m.Z.Registration__input_error):t.password&&!e.password&&i.password.length>=6?"".concat(m.Z.Registration__input_success):""),type:"password",name:"password",placeholder:"Password",required:!0}),(0,u.jsx)(a.Bc,{name:"password",render:function(s){return(0,u.jsx)("p",{className:m.Z.Registration__error,children:"Enter a valid Password"})}}),(0,u.jsx)("svg",{width:18,height:18,className:"".concat(m.Z.Registration__svg," ").concat(t.password&&e.password?"".concat(m.Z.Registration__svg_error):t.password&&!e.password&&i.password.length>=6?"".concat(m.Z.Registration__svg_success):""),children:(0,u.jsx)("use",{href:l.Z+"#reg-pass"})}),(0,u.jsx)("svg",{width:20,height:20,className:"".concat(m.Z.Registration__svg_succ," ").concat(t.password&&e.password?"".concat(m.Z.Registration__svg_error):t.password&&!e.password&&i.password.length>=6?"".concat(m.Z.Registration__svg_success):""),children:(0,u.jsx)("use",{href:l.Z+"#input-succ"})}),(0,u.jsx)("svg",{width:20,height:20,className:"".concat(m.Z.Registration__svg_err," ").concat(t.password&&e.password?"".concat(m.Z.Registration__svg_error):t.password&&!e.password&&i.password.length>=6?"".concat(m.Z.Registration__svg_success):""),children:(0,u.jsx)("use",{href:l.Z+"#input-err"})})]})}),(0,u.jsx)("button",{className:m.Z.Registration__button,type:"submit",children:"Sign up"})]})}}),(0,u.jsx)(o.rU,{className:m.Z.Registration__link,to:"/signin",children:"Sign In"})]})})},v=t(4217),Z=t(5264),w=function(){var s=(0,n.v9)(v.Hn);return"Unable to fetch user"!==s&&Z.Notify.failure(s),(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(R,{})})}},3877:function(s,e){e.Z={Registration__Section:"SignUpForm_Registration__Section__My4Ys",Registration__container:"SignUpForm_Registration__container__ou-63",Registration__form:"SignUpForm_Registration__form__vYYLk",Registration__title:"SignUpForm_Registration__title__Q8P7x",Registration__label:"SignUpForm_Registration__label__BIh-q",Registration__input:"SignUpForm_Registration__input__woy2a",Registration__button:"SignUpForm_Registration__button__K3mhK",Registration__link:"SignUpForm_Registration__link__DIztg",Registration__error:"SignUpForm_Registration__error__rF721",Registration__input_success:"SignUpForm_Registration__input_success__OycYd",Registration__input_error:"SignUpForm_Registration__input_error__9kTvw",Registration__inputwrapper:"SignUpForm_Registration__inputwrapper__M5hn7",Registration__svg:"SignUpForm_Registration__svg__XohDY",Registration__svg_succ:"SignUpForm_Registration__svg_succ__baGe9",Registration__svg_err:"SignUpForm_Registration__svg_err__41yln",Registration__svg_success:"SignUpForm_Registration__svg_success__4+Cq3",Registration__svg_error:"SignUpForm_Registration__svg_error__gGuSA"}}}]);
//# sourceMappingURL=418.f17c5f2c.chunk.js.map