"use strict";(self.webpackChunkproject_team_developer_007_react=self.webpackChunkproject_team_developer_007_react||[]).push([[949],{9949:function(s,e,i){i.r(e),i.d(e,{default:function(){return w}});var t=i(5705),r=i(1087),a=i(8007),_=i(9434),n=i(9273),o=i(5125),c=i(3877),g="LogInForm_LogIn__title__M5f1N",l="LogInForm_LogIn__label__1EEEB",p=i(184),m={email:"",password:""},u=/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,d=a.Ry().shape({email:a.Z_().matches(u,"Email is not valid").required(),password:a.Z_().min(6).required()}),R=function(){var s=(0,_.I0)();return(0,p.jsx)("section",{className:c.Z.Registration__Section,children:(0,p.jsxs)("div",{className:c.Z.Registration__container,children:[(0,p.jsx)(t.J9,{initialValues:m,validationSchema:d,validateOnChange:!1,validateOnBlur:!1,onSubmit:function(e,i){var t=i.resetForm;s((0,n.Ib)(e)),t()},children:function(s){var e=s.errors,i=s.touched,r=s.values;return(0,p.jsxs)(t.l0,{className:c.Z.Registration__form,children:[(0,p.jsx)("b",{className:g,children:"Sign In"}),(0,p.jsx)("label",{className:l,children:(0,p.jsxs)("div",{className:c.Z.Registration__inputwrapper,children:[(0,p.jsx)(t.gN,{className:"".concat(c.Z.Registration__input," ").concat(i.email&&e.email?"".concat(c.Z.Registration__input_error):i.email&&!e.email&&u.test(r.email)?"".concat(c.Z.Registration__input_success):""),type:"email",name:"email",placeholder:"Email",required:!0}),(0,p.jsx)(t.Bc,{name:"email",render:function(s){return(0,p.jsx)("p",{className:c.Z.Registration__error,children:s})}}),(0,p.jsx)("svg",{width:18,height:18,className:"".concat(c.Z.Registration__svg," ").concat(i.email&&e.email?"".concat(c.Z.Registration__svg_error):i.email&&!e.email&&u.test(r.email)?"".concat(c.Z.Registration__svg_success):""),children:(0,p.jsx)("use",{href:o.Z+"#reg-email"})}),(0,p.jsx)("svg",{width:20,height:20,className:"".concat(c.Z.Registration__svg_succ," ").concat(i.email&&e.email?"".concat(c.Z.Registration__svg_error):i.email&&!e.email&&u.test(r.email)?"".concat(c.Z.Registration__svg_success):""),children:(0,p.jsx)("use",{href:o.Z+"#input-succ"})}),(0,p.jsx)("svg",{width:20,height:20,className:"".concat(c.Z.Registration__svg_err," ").concat(i.email&&e.email?"".concat(c.Z.Registration__svg_error):i.email&&!e.email&&u.test(r.email)?"".concat(c.Z.Registration__svg_success):""),children:(0,p.jsx)("use",{href:o.Z+"#input-err"})})]})}),(0,p.jsx)("label",{className:l,children:(0,p.jsxs)("div",{className:c.Z.Registration__inputwrapper,children:[(0,p.jsx)(t.gN,{className:"".concat(c.Z.Registration__input," ").concat(i.password&&e.password?"".concat(c.Z.Registration__input_error):i.password&&!e.password&&r.password.length>=6?"".concat(c.Z.Registration__input_success):""),type:"password",name:"password",placeholder:"Password",required:!0}),(0,p.jsx)(t.Bc,{name:"password",render:function(s){return(0,p.jsx)("p",{className:c.Z.Registration__error,children:"Enter a valid Password"})}}),(0,p.jsx)("svg",{width:18,height:18,className:"".concat(c.Z.Registration__svg," ").concat(i.password&&e.password?"".concat(c.Z.Registration__svg_error):i.password&&!e.password&&r.password.length>=6?"".concat(c.Z.Registration__svg_success):""),children:(0,p.jsx)("use",{href:o.Z+"#reg-pass"})}),(0,p.jsx)("svg",{width:20,height:20,className:"".concat(c.Z.Registration__svg_succ," ").concat(i.password&&e.password?"".concat(c.Z.Registration__svg_error):i.password&&!e.password&&r.password.length>=6?"".concat(c.Z.Registration__svg_success):""),children:(0,p.jsx)("use",{href:o.Z+"#input-succ"})}),(0,p.jsx)("svg",{width:20,height:20,className:"".concat(c.Z.Registration__svg_err," ").concat(i.password&&e.password?"".concat(c.Z.Registration__svg_error):i.password&&!e.password&&r.password.length>=6?"".concat(c.Z.Registration__svg_success):""),children:(0,p.jsx)("use",{href:o.Z+"#input-err"})})]})}),(0,p.jsx)("button",{className:c.Z.Registration__button,type:"submit",children:"Sign In"})]})}}),(0,p.jsx)(r.rU,{className:c.Z.Registration__link,to:"/register",children:"Registration"})]})})},h=i(4217),v=i(5264),w=function(){var s=(0,_.v9)(h.Hn),e=(0,_.v9)(h.rT);return"Unable to fetch user"!==s&&null!==s&&v.Notify.failure(s),e&&v.Notify.success(e),(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(R,{})})}},3877:function(s,e){e.Z={Registration__Section:"SignUpForm_Registration__Section__My4Ys",Registration__container:"SignUpForm_Registration__container__ou-63",Registration__form:"SignUpForm_Registration__form__vYYLk",Registration__title:"SignUpForm_Registration__title__Q8P7x",Registration__label:"SignUpForm_Registration__label__BIh-q",Registration__input:"SignUpForm_Registration__input__woy2a",Registration__button:"SignUpForm_Registration__button__K3mhK",Registration__link:"SignUpForm_Registration__link__DIztg",Registration__error:"SignUpForm_Registration__error__rF721",Registration__input_success:"SignUpForm_Registration__input_success__OycYd",Registration__input_error:"SignUpForm_Registration__input_error__9kTvw",Registration__inputwrapper:"SignUpForm_Registration__inputwrapper__M5hn7",Registration__svg:"SignUpForm_Registration__svg__XohDY",Registration__svg_succ:"SignUpForm_Registration__svg_succ__baGe9",Registration__svg_err:"SignUpForm_Registration__svg_err__41yln",Registration__svg_success:"SignUpForm_Registration__svg_success__4+Cq3",Registration__svg_error:"SignUpForm_Registration__svg_error__gGuSA"}}}]);
//# sourceMappingURL=949.f0d2ae9e.chunk.js.map