(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[82],{1596:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a(92),r=a(33),n=a(484),l=a.n(n),i=a(9),j=function(){var e=Object(c.useState)(new Date),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)(s.N,{className:"form-label",id:"timepicker",children:"Basic 24hrs"}),Object(i.jsx)(l.a,{className:"form-control",value:a,id:"timepicker",options:{enableTime:!0,noCalendar:!0,dateFormat:"H:i",time_24hr:!0},onChange:function(e){return n(e)}})]})},b=function(){var e=Object(c.useState)(new Date),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)(s.N,{className:"form-label",for:"range-picker",children:"Range"}),Object(i.jsx)(l.a,{value:a,id:"range-picker",className:"form-control",onChange:function(e){return n(e)},options:{mode:"range",defaultDate:["2020-02-01","2020-02-15"]}})]})},m=function(){var e=Object(c.useState)(new Date),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)(s.N,{className:"form-label",for:"inline-picker",children:"Inline"}),Object(i.jsx)(l.a,{className:"form-control",value:a,options:{inline:!0},onChange:function(e){return n(e)}})]})},d=function(){var e=Object(c.useState)(new Date),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)(s.N,{className:"form-label",for:"default-picker",children:"Default"}),Object(i.jsx)(l.a,{className:"form-control",value:a,onChange:function(e){return n(e)},id:"default-picker"})]})},o=function(){var e=Object(c.useState)(new Date),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)(s.N,{className:"form-label",for:"date-time-picker",children:"Date & Time"}),Object(i.jsx)(l.a,{value:a,"data-enable-time":!0,id:"date-time-picker",className:"form-control",onChange:function(e){return n(e)}})]})},O=function(){var e=Object(c.useState)(new Date),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)(s.N,{className:"form-label",for:"multi-dates-picker",children:"Multiple Dates"}),Object(i.jsx)(l.a,{value:a,id:"multi-dates-picker",className:"form-control",options:{mode:"multiple"},onChange:function(e){return n(e)}})]})},h=function(){var e=Object(c.useState)(new Date),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)(s.N,{className:"form-label",for:"hf-picker",children:"Human Friendly"}),Object(i.jsx)(l.a,{value:a,id:"hf-picker",className:"form-control",onChange:function(e){return n(e)},options:{altInput:!0,altFormat:"F j, Y",dateFormat:"Y-m-d"}})]})},u=function(){var e=Object(c.useState)(new Date),t=Object(r.a)(e,2),a=t[0],n=t[1];return Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)(s.N,{className:"form-label",for:"disabled-picker",children:"Disabled Range"}),Object(i.jsx)(l.a,{value:a,id:"disabled-picker",className:"form-control",onChange:function(e){return n(e)},options:{dateFormat:"Y-m-d",disable:[{from:new Date,to:new Date((new Date).getTime()+432e6)}]}})]})},x=a(472);a(488),t.default=function(){return Object(i.jsxs)(c.Fragment,{children:[Object(i.jsx)(x.a,{breadCrumbTitle:"Date & Time Picker",breadCrumbParent:"Form Elements",breadCrumbActive:"Date & Time Picker"}),Object(i.jsxs)(s.l,{children:[Object(i.jsx)(s.p,{children:Object(i.jsx)(s.v,{tag:"h4",children:"Flatpickr"})}),Object(i.jsx)(s.m,{children:Object(i.jsxs)(s.ib,{children:[Object(i.jsx)(s.B,{md:"6",sm:"12",className:"mb-1",children:Object(i.jsx)(d,{})}),Object(i.jsx)(s.B,{md:"6",sm:"12",className:"mb-1",children:Object(i.jsx)(j,{})}),Object(i.jsx)(s.B,{md:"6",sm:"12",className:"mb-1",children:Object(i.jsx)(o,{})}),Object(i.jsx)(s.B,{md:"6",sm:"12",className:"mb-1",children:Object(i.jsx)(O,{})}),Object(i.jsx)(s.B,{md:"6",sm:"12",className:"mb-1",children:Object(i.jsx)(b,{})}),Object(i.jsx)(s.B,{md:"6",sm:"12",className:"mb-1",children:Object(i.jsx)(h,{})}),Object(i.jsx)(s.B,{md:"6",sm:"12",className:"mb-1",children:Object(i.jsx)(u,{})}),Object(i.jsx)(s.B,{md:"6",sm:"12",className:"mb-1",children:Object(i.jsx)(m,{})})]})})]})]})}},472:function(e,t,a){"use strict";var c=a(473),s=a(875),r=a(808),n=a(809),l=a(807),i=a(833),j=a(92),b=a(9);t.a=function(e){var t=e.breadCrumbTitle,a=e.breadCrumbParent,m=e.breadCrumbParent2,d=e.breadCrumbParent3,o=e.breadCrumbActive;return Object(b.jsxs)("div",{className:"content-header row",children:[Object(b.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(b.jsx)("div",{className:"row breadcrumbs-top",children:Object(b.jsxs)("div",{className:"col-12",children:[t?Object(b.jsx)("h2",{className:"content-header-title float-start mb-0",children:t}):"",Object(b.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(b.jsxs)(j.g,{children:[Object(b.jsx)(j.h,{tag:"li",children:Object(b.jsx)(c.b,{to:"/",children:"Home"})}),Object(b.jsx)(j.h,{tag:"li",className:"text-primary",children:a}),m?Object(b.jsx)(j.h,{tag:"li",className:"text-primary",children:m}):"",d?Object(b.jsx)(j.h,{tag:"li",className:"text-primary",children:d}):"",Object(b.jsx)(j.h,{tag:"li",active:!0,children:o})]})})]})})}),Object(b.jsx)("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:Object(b.jsx)("div",{className:"breadcrumb-right dropdown",children:Object(b.jsxs)(j.tb,{children:[Object(b.jsx)(j.G,{color:"primary",size:"sm",className:"btn-icon btn-round dropdown-toggle",children:Object(b.jsx)(s.a,{size:14})}),Object(b.jsxs)(j.F,{tag:"ul",end:!0,children:[Object(b.jsxs)(j.E,{tag:c.b,to:"/apps/todo",children:[Object(b.jsx)(r.a,{className:"me-1",size:14}),Object(b.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(b.jsxs)(j.E,{tag:c.b,to:"/apps/chat",children:[Object(b.jsx)(n.a,{className:"me-1",size:14}),Object(b.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(b.jsxs)(j.E,{tag:c.b,to:"/apps/email",children:[Object(b.jsx)(l.a,{className:"me-1",size:14}),Object(b.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(b.jsxs)(j.E,{tag:c.b,to:"/apps/calendar",children:[Object(b.jsx)(i.a,{className:"me-1",size:14}),Object(b.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}},488:function(e,t,a){}}]);
//# sourceMappingURL=82.419007d6.chunk.js.map