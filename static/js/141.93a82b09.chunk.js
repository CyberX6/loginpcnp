(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[141],{1537:function(e,s,t){"use strict";t.r(s);var a=t(33),c=t(1),r=t(5),n=t.n(r),l=t(880),d=t(920),i=t(472),j=t(92),b=t(9);s.default=function(){var e=Object(c.useState)(null),s=Object(a.a)(e,2),t=s[0],r=s[1];Object(c.useEffect)((function(){n.a.get("/faq/data/question").then((function(e){return r(e.data)}))}),[]);return Object(b.jsxs)(c.Fragment,{children:[Object(b.jsx)(i.a,{breadCrumbTitle:"Knowledge Base",breadCrumbParent:"Pages",breadCrumbParent2:"Knowledge Base",breadCrumbParent3:"Category",breadCrumbActive:"Question"}),null!==t?Object(b.jsx)("div",{id:"knowledge-base-question",children:Object(b.jsxs)(j.ib,{children:[Object(b.jsx)(j.B,{lg:"3",md:{size:5,order:1},sm:{size:12},xs:{order:2},children:Object(b.jsx)(j.l,{children:Object(b.jsxs)(j.m,{children:[Object(b.jsxs)("h6",{className:"kb-title",children:[Object(b.jsx)(l.a,{size:20,className:"me-50"}),Object(b.jsx)("span",{children:"Related Questions"})]}),Object(b.jsx)(j.O,{className:"list-group-circle mt-1",children:t.relatedQuestions.map((function(e){return Object(b.jsx)(j.P,{className:"text-body",tag:"a",href:"/",onClick:function(e){return e.preventDefault()},children:e.question},e.id)}))})]})})}),Object(b.jsx)(j.B,{lg:"9",md:{size:7,order:2},sm:{size:12},xs:{order:1},children:Object(b.jsx)(j.l,{children:Object(b.jsxs)(j.m,{children:[Object(b.jsxs)(j.v,{className:"mb-1",children:[Object(b.jsx)(d.a,{className:"font-medium-5  me-25"})," ",Object(b.jsx)("span",{children:t.title})]}),Object(b.jsxs)("p",{className:"mb-2",children:["Last updated on ",t.lastUpdated]}),Object(b.jsx)("div",{dangerouslySetInnerHTML:{__html:t.content}})]})})})]})}):null]})}},472:function(e,s,t){"use strict";var a=t(473),c=t(875),r=t(808),n=t(809),l=t(807),d=t(833),i=t(92),j=t(9);s.a=function(e){var s=e.breadCrumbTitle,t=e.breadCrumbParent,b=e.breadCrumbParent2,m=e.breadCrumbParent3,o=e.breadCrumbActive;return Object(j.jsxs)("div",{className:"content-header row",children:[Object(j.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(j.jsx)("div",{className:"row breadcrumbs-top",children:Object(j.jsxs)("div",{className:"col-12",children:[s?Object(j.jsx)("h2",{className:"content-header-title float-start mb-0",children:s}):"",Object(j.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(j.jsxs)(i.g,{children:[Object(j.jsx)(i.h,{tag:"li",children:Object(j.jsx)(a.b,{to:"/",children:"Home"})}),Object(j.jsx)(i.h,{tag:"li",className:"text-primary",children:t}),b?Object(j.jsx)(i.h,{tag:"li",className:"text-primary",children:b}):"",m?Object(j.jsx)(i.h,{tag:"li",className:"text-primary",children:m}):"",Object(j.jsx)(i.h,{tag:"li",active:!0,children:o})]})})]})})}),Object(j.jsx)("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:Object(j.jsx)("div",{className:"breadcrumb-right dropdown",children:Object(j.jsxs)(i.tb,{children:[Object(j.jsx)(i.G,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(j.jsx)(c.a,{size:14})}),Object(j.jsxs)(i.F,{tag:"ul",end:!0,children:[Object(j.jsxs)(i.E,{tag:a.b,to:"/apps/todo",children:[Object(j.jsx)(r.a,{className:"me-1",size:14}),Object(j.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(j.jsxs)(i.E,{tag:a.b,to:"/apps/chat",children:[Object(j.jsx)(n.a,{className:"me-1",size:14}),Object(j.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(j.jsxs)(i.E,{tag:a.b,to:"/apps/email",children:[Object(j.jsx)(l.a,{className:"me-1",size:14}),Object(j.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(j.jsxs)(i.E,{tag:a.b,to:"/apps/calendar",children:[Object(j.jsx)(d.a,{className:"me-1",size:14}),Object(j.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}}}]);
//# sourceMappingURL=141.93a82b09.chunk.js.map