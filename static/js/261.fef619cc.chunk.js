"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[261],{261:(s,e,a)=>{a.r(e),a.d(e,{default:()=>b});var i=a(762);const l="Dialogs_dialogs__OdHi8",t="Dialogs_dialogsItem__uhvVb",g="Dialogs_dialog__y5SGO",d="Dialogs_dialogAvatar__dOaUY",o="Dialogs_messages__aftbj",n="Dialogs_message__9Blio",m="Dialogs_error__MUHme";var r=a(475),c=a(579);const h=s=>{let e="/dialogs/"+s.id;return(0,c.jsxs)("div",{className:g,children:[(0,c.jsx)("img",{src:"https://img.freepik.com/free-photo/the-adorable-illustration-of-kittens-playing-in-the-forest-generative-ai_260559-483.jpg?size=338&ext=jpg&ga=GA1.1.632798143.1713225600&semt=ais",className:d}),(0,c.jsx)(r.k2,{to:e,children:s.name})]})},_=s=>(0,c.jsx)("div",{className:n,children:s.message});var x=a(892),j=a(617);const p=s=>{let e=s.dialogs.map((s=>(0,c.jsx)(h,{name:s.name,id:s.id}))),a=s.messages.map((s=>(0,c.jsx)(_,{message:s.message})));return(0,c.jsxs)("div",{className:l,children:[(0,c.jsx)("div",{className:t,children:e}),(0,c.jsxs)("div",{className:o,children:[a,(0,c.jsx)(x.l1,{initialValues:{message:""},validationSchema:j._,onSubmit:(e,a)=>{let{setSubmitting:i}=a;console.log(e),s.addMessage(e.message),i(!1)},children:s=>{let{isSubmitting:e}=s;return(0,c.jsxs)(x.lV,{children:[(0,c.jsxs)("div",{children:[(0,c.jsx)(x.D0,{type:"textarea",name:"message",placeholder:"enter message here"}),(0,c.jsx)(x.Kw,{name:"message",component:"div",className:m})]}),(0,c.jsx)("div",{children:(0,c.jsx)("button",{type:"submit",disabled:e,children:"Add post"})})]})}})]})]})};var u=a(3),v=a(216);a(43);const b=(0,a(923).Zz)((0,u.Ng)((s=>({dialogs:s.dialogsPage.dialogs,messages:s.dialogsPage.messages,newMessageText:s.dialogsPage.newMessageText,isAuth:s.auth.isAuth})),(s=>({addMessage:e=>{s((0,i.z)(e))}}))),(s=>e=>e.isAuth?(0,c.jsx)(s,{...e}):(0,c.jsx)(v.C5,{to:"/login"})))(p)}}]);
//# sourceMappingURL=261.fef619cc.chunk.js.map