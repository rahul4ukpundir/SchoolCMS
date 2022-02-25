(this["webpackJsonpschool-cms"]=this["webpackJsonpschool-cms"]||[]).push([[11],{295:function(t,e,a){"use strict";var n=a(8),i=a(3),r=a(2),o=a(0),c=(a(6),a(9)),s=a(155),d=a(11),u=a(7),b=a(122),h=a(156);function l(t){return Object(b.a)("MuiContainer",t)}Object(h.a)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var j=a(10),x=a(1),m=["className","component","disableGutters","fixed","maxWidth"],f=Object(u.a)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(t,e){var a=t.ownerState;return[e.root,e["maxWidth".concat(Object(j.a)(String(a.maxWidth)))],a.fixed&&e.fixed,a.disableGutters&&e.disableGutters]}})((function(t){var e=t.theme,a=t.ownerState;return Object(r.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!a.disableGutters&&Object(n.a)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}))}),(function(t){var e=t.theme;return t.ownerState.fixed&&Object.keys(e.breakpoints.values).reduce((function(t,a){var n=e.breakpoints.values[a];return 0!==n&&(t[e.breakpoints.up(a)]={maxWidth:"".concat(n).concat(e.breakpoints.unit)}),t}),{})}),(function(t){var e=t.theme,a=t.ownerState;return Object(r.a)({},"xs"===a.maxWidth&&Object(n.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),a.maxWidth&&"xs"!==a.maxWidth&&Object(n.a)({},e.breakpoints.up(a.maxWidth),{maxWidth:"".concat(e.breakpoints.values[a.maxWidth]).concat(e.breakpoints.unit)}))})),O=o.forwardRef((function(t,e){var a=Object(d.a)({props:t,name:"MuiContainer"}),n=a.className,o=a.component,u=void 0===o?"div":o,b=a.disableGutters,h=void 0!==b&&b,O=a.fixed,p=void 0!==O&&O,v=a.maxWidth,g=void 0===v?"lg":v,W=Object(i.a)(a,m),w=Object(r.a)({},a,{component:u,disableGutters:h,fixed:p,maxWidth:g}),k=function(t){var e=t.classes,a=t.fixed,n=t.disableGutters,i=t.maxWidth,r={root:["root",i&&"maxWidth".concat(Object(j.a)(String(i))),a&&"fixed",n&&"disableGutters"]};return Object(s.a)(r,l,e)}(w);return Object(x.jsx)(f,Object(r.a)({as:u,ownerState:w,className:Object(c.a)(k.root,n),ref:e},W))}));e.a=O},311:function(t,e,a){"use strict";var n=a(2),i=a(3),r=a(0),o=(a(6),a(9)),c=a(155),s=a(7),d=a(11),u=a(276),b=a(122),h=a(156);function l(t){return Object(b.a)("MuiCard",t)}Object(h.a)("MuiCard",["root"]);var j=a(1),x=["className","raised"],m=Object(s.a)(u.a,{name:"MuiCard",slot:"Root",overridesResolver:function(t,e){return e.root}})((function(){return{overflow:"hidden"}})),f=r.forwardRef((function(t,e){var a=Object(d.a)({props:t,name:"MuiCard"}),r=a.className,s=a.raised,u=void 0!==s&&s,b=Object(i.a)(a,x),h=Object(n.a)({},a,{raised:u}),f=function(t){var e=t.classes;return Object(c.a)({root:["root"]},l,e)}(h);return Object(j.jsx)(m,Object(n.a)({className:Object(o.a)(f.root,r),elevation:u?8:void 0,ref:e,ownerState:h},b))}));e.a=f},323:function(t,e,a){"use strict";a.r(e);var n=a(270),i=a(268),r=a(271),o=a(295),c=a(105),s=a(311),d=a(281),u=a(286),b=a(252),h=a(124),l=a(115),j=a.n(l),x=a(7),m=a(1),f=Object(x.a)(n.a)((function(t){t.theme;return"\n    height: 100%;\n    display: flex;\n    flex: 1;\n    overflow: auto;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n"})),O=Object(x.a)(i.a)((function(t){var e=t.theme;return"\n    background-color: ".concat(e.colors.alpha.white[100],";\n")})),p=Object(x.a)(r.a)((function(t){var e=t.theme;return"\n    margin-right: -".concat(e.spacing(1),";\n")}));e.default=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(h.a,{children:Object(m.jsx)("title",{children:"Status - 404"})}),Object(m.jsx)(f,{children:Object(m.jsxs)(o.a,{maxWidth:"md",children:[Object(m.jsxs)(n.a,{textAlign:"center",children:[Object(m.jsx)("img",{alt:"404",height:180,src:"/static/images/status/404.svg"}),Object(m.jsx)(c.a,{variant:"h2",sx:{my:2},children:"The page you were looking for doesn't exist."}),Object(m.jsx)(c.a,{variant:"h4",color:"text.secondary",fontWeight:"normal",sx:{mb:4},children:"It's on us, we moved the content to a different page. The search below should help!"})]}),Object(m.jsx)(o.a,{maxWidth:"sm",children:Object(m.jsxs)(s.a,{sx:{textAlign:"center",mt:3,p:4},children:[Object(m.jsx)(d.a,{variant:"outlined",fullWidth:!0,children:Object(m.jsx)(O,{type:"text",placeholder:"Search terms here...",endAdornment:Object(m.jsx)(u.a,{position:"end",children:Object(m.jsx)(p,{variant:"contained",size:"small",children:"Search"})}),startAdornment:Object(m.jsx)(u.a,{position:"start",children:Object(m.jsx)(j.a,{})})})}),Object(m.jsx)(b.a,{sx:{my:4},children:"OR"}),Object(m.jsx)(r.a,{href:"/overview",variant:"outlined",children:"Go to homepage"})]})})]})})]})}}}]);
//# sourceMappingURL=11.610f5003.chunk.js.map