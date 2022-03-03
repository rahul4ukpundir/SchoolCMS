/*! For license information please see 8.0e88d9f3.chunk.js.LICENSE.txt */
(this["webpackJsonpschool-cms"]=this["webpackJsonpschool-cms"]||[]).push([[8],{313:function(e,t,r){"use strict";var n=r(327),a=r(7),o=r(281),c=r(1),i=Object(a.a)(o.a)((function(e){var t=e.theme;return"\n        padding: ".concat(t.spacing(4,0),";\n")}));t.a=function(e){var t=e.children;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(i,{children:Object(c.jsx)(n.a,{maxWidth:"lg",children:t})})})}},341:function(e,t,r){"use strict";var n=r(50),a=r(135),o=r(7),c=r(1),i=["className","color","children"],l=Object(o.a)("span")((function(e){var t=e.theme;return"\n      background-color: ".concat(t.colors.alpha.black[5],";\n      padding: ").concat(t.spacing(.5,1),";\n      font-size: ").concat(t.typography.pxToRem(13),";\n      border-radius: ").concat(t.general.borderRadius,";\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      max-height: ").concat(t.spacing(3),";\n      \n      &.MuiLabel {\n        &-primary {\n          background-color: ").concat(t.colors.primary.lighter,";\n          color: ").concat(t.palette.primary.main,"\n        }\n        \n        &-secondary {\n          background-color: ").concat(t.colors.secondary.lighter,";\n          color: ").concat(t.palette.secondary.main,"\n        }\n        \n        &-success {\n          background-color: ").concat(t.colors.success.lighter,";\n          color: ").concat(t.palette.success.main,"\n        }\n        \n        &-warning {\n          background-color: ").concat(t.colors.warning.lighter,";\n          color: ").concat(t.palette.warning.main,"\n        }\n              \n        &-error {\n          background-color: ").concat(t.colors.error.lighter,";\n          color: ").concat(t.palette.error.main,"\n        }\n        \n        &-info {\n          background-color: ").concat(t.colors.info.lighter,";\n          color: ").concat(t.palette.info.main,"\n        }\n      }\n")}));t.a=function(e){e.className;var t=e.color,r=void 0===t?"secondary":t,o=e.children,s=Object(a.a)(e,i);return Object(c.jsx)(l,Object(n.a)(Object(n.a)({className:"MuiLabel-"+r},s),{},{children:o}))}},516:function(e,t,r){var n,a;n=function(){var e,t,r="2.0.6",n={},a={},o={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},c={currentLocale:o.currentLocale,zeroFormat:o.zeroFormat,nullFormat:o.nullFormat,defaultFormat:o.defaultFormat,scalePercentBy100:o.scalePercentBy100};function i(e,t){this._input=e,this._value=t}return(e=function(r){var a,o,l,s;if(e.isNumeral(r))a=r.value();else if(0===r||"undefined"===typeof r)a=0;else if(null===r||t.isNaN(r))a=null;else if("string"===typeof r)if(c.zeroFormat&&r===c.zeroFormat)a=0;else if(c.nullFormat&&r===c.nullFormat||!r.replace(/[^0-9]+/g,"").length)a=null;else{for(o in n)if((s="function"===typeof n[o].regexps.unformat?n[o].regexps.unformat():n[o].regexps.unformat)&&r.match(s)){l=n[o].unformat;break}a=(l=l||e._.stringToNumber)(r)}else a=Number(r)||null;return new i(r,a)}).version=r,e.isNumeral=function(e){return e instanceof i},e._=t={numberToFormat:function(t,r,n){var o,c,i,l,s,u,d,m=a[e.options.currentLocale],f=!1,b=!1,h=0,p="",j=1e12,g=1e9,x=1e6,y=1e3,O="",v=!1;if(t=t||0,c=Math.abs(t),e._.includes(r,"(")?(f=!0,r=r.replace(/[\(|\)]/g,"")):(e._.includes(r,"+")||e._.includes(r,"-"))&&(s=e._.includes(r,"+")?r.indexOf("+"):t<0?r.indexOf("-"):-1,r=r.replace(/[\+|\-]/g,"")),e._.includes(r,"a")&&(o=!!(o=r.match(/a(k|m|b|t)?/))&&o[1],e._.includes(r," a")&&(p=" "),r=r.replace(new RegExp(p+"a[kmbt]?"),""),c>=j&&!o||"t"===o?(p+=m.abbreviations.trillion,t/=j):c<j&&c>=g&&!o||"b"===o?(p+=m.abbreviations.billion,t/=g):c<g&&c>=x&&!o||"m"===o?(p+=m.abbreviations.million,t/=x):(c<x&&c>=y&&!o||"k"===o)&&(p+=m.abbreviations.thousand,t/=y)),e._.includes(r,"[.]")&&(b=!0,r=r.replace("[.]",".")),i=t.toString().split(".")[0],l=r.split(".")[1],u=r.indexOf(","),h=(r.split(".")[0].split(",")[0].match(/0/g)||[]).length,l?(e._.includes(l,"[")?(l=(l=l.replace("]","")).split("["),O=e._.toFixed(t,l[0].length+l[1].length,n,l[1].length)):O=e._.toFixed(t,l.length,n),i=O.split(".")[0],O=e._.includes(O,".")?m.delimiters.decimal+O.split(".")[1]:"",b&&0===Number(O.slice(1))&&(O="")):i=e._.toFixed(t,0,n),p&&!o&&Number(i)>=1e3&&p!==m.abbreviations.trillion)switch(i=String(Number(i)/1e3),p){case m.abbreviations.thousand:p=m.abbreviations.million;break;case m.abbreviations.million:p=m.abbreviations.billion;break;case m.abbreviations.billion:p=m.abbreviations.trillion}if(e._.includes(i,"-")&&(i=i.slice(1),v=!0),i.length<h)for(var D=h-i.length;D>0;D--)i="0"+i;return u>-1&&(i=i.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+m.delimiters.thousands)),0===r.indexOf(".")&&(i=""),d=i+O+(p||""),f?d=(f&&v?"(":"")+d+(f&&v?")":""):s>=0?d=0===s?(v?"-":"+")+d:d+(v?"-":"+"):v&&(d="-"+d),d},stringToNumber:function(e){var t,r,n,o=a[c.currentLocale],i=e,l={thousand:3,million:6,billion:9,trillion:12};if(c.zeroFormat&&e===c.zeroFormat)r=0;else if(c.nullFormat&&e===c.nullFormat||!e.replace(/[^0-9]+/g,"").length)r=null;else{for(t in r=1,"."!==o.delimiters.decimal&&(e=e.replace(/\./g,"").replace(o.delimiters.decimal,".")),l)if(n=new RegExp("[^a-zA-Z]"+o.abbreviations[t]+"(?:\\)|(\\"+o.currency.symbol+")?(?:\\))?)?$"),i.match(n)){r*=Math.pow(10,l[t]);break}r*=(e.split("-").length+Math.min(e.split("(").length-1,e.split(")").length-1))%2?1:-1,e=e.replace(/[^0-9\.]+/g,""),r*=Number(e)}return r},isNaN:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return"number"===typeof e&&isNaN(e)})),includes:function(e,t){return-1!==e.indexOf(t)},insert:function(e,t,r){return e.slice(0,r)+t+e.slice(r)},reduce:function(e,t){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!==typeof t)throw new TypeError(t+" is not a function");var r,n=Object(e),a=n.length>>>0,o=0;if(3===arguments.length)r=arguments[2];else{for(;o<a&&!(o in n);)o++;if(o>=a)throw new TypeError("Reduce of empty array with no initial value");r=n[o++]}for(;o<a;o++)o in n&&(r=t(r,n[o],o,n));return r},multiplier:function(e){var t=e.toString().split(".");return t.length<2?1:Math.pow(10,t[1].length)},correctionFactor:function(){return Array.prototype.slice.call(arguments).reduce((function(e,r){var n=t.multiplier(r);return e>n?e:n}),1)},toFixed:function(e,t,r,n){var a,o,c,i,l=e.toString().split("."),s=t-(n||0);return a=2===l.length?Math.min(Math.max(l[1].length,s),t):s,c=Math.pow(10,a),i=(r(e+"e+"+a)/c).toFixed(a),n>t-a&&(o=new RegExp("\\.?0{1,"+(n-(t-a))+"}$"),i=i.replace(o,"")),i}},e.options=c,e.formats=n,e.locales=a,e.locale=function(e){return e&&(c.currentLocale=e.toLowerCase()),c.currentLocale},e.localeData=function(e){if(!e)return a[c.currentLocale];if(e=e.toLowerCase(),!a[e])throw new Error("Unknown locale : "+e);return a[e]},e.reset=function(){for(var e in o)c[e]=o[e]},e.zeroFormat=function(e){c.zeroFormat="string"===typeof e?e:null},e.nullFormat=function(e){c.nullFormat="string"===typeof e?e:null},e.defaultFormat=function(e){c.defaultFormat="string"===typeof e?e:"0.0"},e.register=function(e,t,r){if(t=t.toLowerCase(),this[e+"s"][t])throw new TypeError(t+" "+e+" already registered.");return this[e+"s"][t]=r,r},e.validate=function(t,r){var n,a,o,c,i,l,s,u;if("string"!==typeof t&&(t+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",t)),(t=t.trim()).match(/^\d+$/))return!0;if(""===t)return!1;try{s=e.localeData(r)}catch(d){s=e.localeData(e.locale())}return o=s.currency.symbol,i=s.abbreviations,n=s.delimiters.decimal,a="."===s.delimiters.thousands?"\\.":s.delimiters.thousands,(null===(u=t.match(/^[^\d]+/))||(t=t.substr(1),u[0]===o))&&(null===(u=t.match(/[^\d]+$/))||(t=t.slice(0,-1),u[0]===i.thousand||u[0]===i.million||u[0]===i.billion||u[0]===i.trillion))&&(l=new RegExp(a+"{2}"),!t.match(/[^\d.,]/g)&&!((c=t.split(n)).length>2)&&(c.length<2?!!c[0].match(/^\d+.*\d$/)&&!c[0].match(l):1===c[0].length?!!c[0].match(/^\d+$/)&&!c[0].match(l)&&!!c[1].match(/^\d+$/):!!c[0].match(/^\d+.*\d$/)&&!c[0].match(l)&&!!c[1].match(/^\d+$/)))},e.fn=i.prototype={clone:function(){return e(this)},format:function(t,r){var a,o,i,l=this._value,s=t||c.defaultFormat;if(r=r||Math.round,0===l&&null!==c.zeroFormat)o=c.zeroFormat;else if(null===l&&null!==c.nullFormat)o=c.nullFormat;else{for(a in n)if(s.match(n[a].regexps.format)){i=n[a].format;break}o=(i=i||e._.numberToFormat)(l,s,r)}return o},value:function(){return this._value},input:function(){return this._input},set:function(e){return this._value=Number(e),this},add:function(e){var r=t.correctionFactor.call(null,this._value,e);function n(e,t,n,a){return e+Math.round(r*t)}return this._value=t.reduce([this._value,e],n,0)/r,this},subtract:function(e){var r=t.correctionFactor.call(null,this._value,e);function n(e,t,n,a){return e-Math.round(r*t)}return this._value=t.reduce([e],n,Math.round(this._value*r))/r,this},multiply:function(e){function r(e,r,n,a){var o=t.correctionFactor(e,r);return Math.round(e*o)*Math.round(r*o)/Math.round(o*o)}return this._value=t.reduce([this._value,e],r,1),this},divide:function(e){function r(e,r,n,a){var o=t.correctionFactor(e,r);return Math.round(e*o)/Math.round(r*o)}return this._value=t.reduce([this._value,e],r),this},difference:function(t){return Math.abs(e(this._value).subtract(t).value())}},e.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var t=e%10;return 1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"},currency:{symbol:"$"}}),e.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(t,r,n){var a,o=e._.includes(r," BPS")?" ":"";return t*=1e4,r=r.replace(/\s?BPS/,""),a=e._.numberToFormat(t,r,n),e._.includes(a,")")?((a=a.split("")).splice(-1,0,o+"BPS"),a=a.join("")):a=a+o+"BPS",a},unformat:function(t){return+(1e-4*e._.stringToNumber(t)).toFixed(15)}}),function(){var t={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]},r={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},n=t.suffixes.concat(r.suffixes.filter((function(e){return t.suffixes.indexOf(e)<0}))).join("|");n="("+n.replace("B","B(?!PS)")+")",e.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(n)},format:function(n,a,o){var c,i,l,s=e._.includes(a,"ib")?r:t,u=e._.includes(a," b")||e._.includes(a," ib")?" ":"";for(a=a.replace(/\s?i?b/,""),c=0;c<=s.suffixes.length;c++)if(i=Math.pow(s.base,c),l=Math.pow(s.base,c+1),null===n||0===n||n>=i&&n<l){u+=s.suffixes[c],i>0&&(n/=i);break}return e._.numberToFormat(n,a,o)+u},unformat:function(n){var a,o,c=e._.stringToNumber(n);if(c){for(a=t.suffixes.length-1;a>=0;a--){if(e._.includes(n,t.suffixes[a])){o=Math.pow(t.base,a);break}if(e._.includes(n,r.suffixes[a])){o=Math.pow(r.base,a);break}}c*=o||1}return c}})}(),e.register("format","currency",{regexps:{format:/(\$)/},format:function(t,r,n){var a,o,c=e.locales[e.options.currentLocale],i={before:r.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:r.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(r=r.replace(/\s?\$\s?/,""),a=e._.numberToFormat(t,r,n),t>=0?(i.before=i.before.replace(/[\-\(]/,""),i.after=i.after.replace(/[\-\)]/,"")):t<0&&!e._.includes(i.before,"-")&&!e._.includes(i.before,"(")&&(i.before="-"+i.before),o=0;o<i.before.length;o++)switch(i.before[o]){case"$":a=e._.insert(a,c.currency.symbol,o);break;case" ":a=e._.insert(a," ",o+c.currency.symbol.length-1)}for(o=i.after.length-1;o>=0;o--)switch(i.after[o]){case"$":a=o===i.after.length-1?a+c.currency.symbol:e._.insert(a,c.currency.symbol,-(i.after.length-(1+o)));break;case" ":a=o===i.after.length-1?a+" ":e._.insert(a," ",-(i.after.length-(1+o)+c.currency.symbol.length-1))}return a}}),e.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(t,r,n){var a=("number"!==typeof t||e._.isNaN(t)?"0e+0":t.toExponential()).split("e");return r=r.replace(/e[\+|\-]{1}0/,""),e._.numberToFormat(Number(a[0]),r,n)+"e"+a[1]},unformat:function(t){var r=e._.includes(t,"e+")?t.split("e+"):t.split("e-"),n=Number(r[0]),a=Number(r[1]);function o(t,r,n,a){var o=e._.correctionFactor(t,r);return t*o*(r*o)/(o*o)}return a=e._.includes(t,"e-")?a*=-1:a,e._.reduce([n,Math.pow(10,a)],o,1)}}),e.register("format","ordinal",{regexps:{format:/(o)/},format:function(t,r,n){var a=e.locales[e.options.currentLocale],o=e._.includes(r," o")?" ":"";return r=r.replace(/\s?o/,""),o+=a.ordinal(t),e._.numberToFormat(t,r,n)+o}}),e.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(t,r,n){var a,o=e._.includes(r," %")?" ":"";return e.options.scalePercentBy100&&(t*=100),r=r.replace(/\s?\%/,""),a=e._.numberToFormat(t,r,n),e._.includes(a,")")?((a=a.split("")).splice(-1,0,o+"%"),a=a.join("")):a=a+o+"%",a},unformat:function(t){var r=e._.stringToNumber(t);return e.options.scalePercentBy100?.01*r:r}}),e.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(e,t,r){var n=Math.floor(e/60/60),a=Math.floor((e-60*n*60)/60),o=Math.round(e-60*n*60-60*a);return n+":"+(a<10?"0"+a:a)+":"+(o<10?"0"+o:o)},unformat:function(e){var t=e.split(":"),r=0;return 3===t.length?(r+=60*Number(t[0])*60,r+=60*Number(t[1]),r+=Number(t[2])):2===t.length&&(r+=60*Number(t[0]),r+=Number(t[1])),Number(r)}}),e},void 0===(a="function"===typeof n?n.call(t,r,t,e):n)||(e.exports=a)},517:function(e,t,r){"use strict";var n=r(32);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(33)),o=r(1),c=(0,a.default)((0,o.jsx)("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreVertTwoTone");t.default=c},552:function(e,t,r){"use strict";r.r(t);var n=r(133),a=r(522),o=r(112),c=r(282),i=r(329),l=r.n(i),s=r(1);var u=function(){return Object(s.jsxs)(a.a,{container:!0,justifyContent:"space-between",alignItems:"center",children:[Object(s.jsxs)(a.a,{item:!0,children:[Object(s.jsx)(o.a,{variant:"h3",component:"h3",gutterBottom:!0,children:"Transactions"}),Object(s.jsxs)(o.a,{variant:"subtitle2",children:["Catherine Pike",", these are your recent transactions"]})]}),Object(s.jsx)(a.a,{item:!0,children:Object(s.jsx)(c.a,{sx:{mt:{xs:2,md:0}},variant:"contained",startIcon:Object(s.jsx)(l.a,{fontSize:"small"}),children:"Create transaction"})})]})},d=r(313),m=r(327);var f=function(){return null},b=r(523),h=r(21),p=r(50),j=r(16),g=r(0),x=r(162),y=r(516),O=r.n(y),v=r(20),D=r(281),F=r(559),_=r(290),w=r(291),B=r(273),C=r(556),k=r(265),T=r(560),N=r(561),M=r(562),S=r(563),P=r(564),$=r(554),z=r(565),I=r(278),W=r(295),A=r(551),E=r(341),L=r(347),R=r.n(L),K=r(330),J=r.n(K),G=r(161),Y=r(284),H=r(275),V=r(267),Z=r(7),U=r(517),Q=r.n(U),X=Object(Z.a)(c.a)((function(e){var t=e.theme;return"\n     background: ".concat(t.colors.error.main,";\n     color: ").concat(t.palette.error.contrastText,";\n\n     &:hover {\n        background: ").concat(t.colors.error.dark,";\n     }\n    ")}));var q=function(){var e=Object(g.useState)(!1),t=Object(j.a)(e,2),r=t[0],n=t[1],a=Object(g.useRef)(null);return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)(D.a,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[Object(s.jsxs)(D.a,{display:"flex",alignItems:"center",children:[Object(s.jsx)(o.a,{variant:"h5",color:"text.secondary",children:"Bulk actions:"}),Object(s.jsx)(X,{sx:{ml:1},startIcon:Object(s.jsx)(J.a,{}),variant:"contained",children:"Delete"})]}),Object(s.jsx)(W.a,{color:"primary",onClick:function(){n(!0)},ref:a,sx:{ml:2,p:1},children:Object(s.jsx)(Q.a,{})})]}),Object(s.jsx)(G.a,{keepMounted:!0,anchorEl:a.current,open:r,onClose:function(){n(!1)},anchorOrigin:{vertical:"center",horizontal:"center"},transformOrigin:{vertical:"center",horizontal:"center"},children:Object(s.jsxs)(Y.a,{sx:{p:1},component:"nav",children:[Object(s.jsx)(H.a,{button:!0,children:Object(s.jsx)(V.a,{primary:"Bulk delete selected"})}),Object(s.jsx)(H.a,{button:!0,children:Object(s.jsx)(V.a,{primary:"Bulk edit selected"})})]})})]})},ee=function(e){var t={failed:{text:"Failed",color:"error"},completed:{text:"Completed",color:"success"},pending:{text:"Pending",color:"warning"}}[e],r=t.text,n=t.color;return Object(s.jsx)(E.a,{color:n,children:r})},te=function(e){var t=e.cryptoOrders,r=Object(g.useState)([]),n=Object(j.a)(r,2),a=n[0],c=n[1],i=a.length>0,l=Object(g.useState)(0),u=Object(j.a)(l,2),d=u[0],m=u[1],f=Object(g.useState)(5),y=Object(j.a)(f,2),E=y[0],L=y[1],K=Object(g.useState)({status:null}),G=Object(j.a)(K,2),Y=G[0],H=G[1],V=function(e,t){return e.filter((function(e){var r=!0;return t.status&&e.status!==t.status&&(r=!1),r}))}(t,Y),Z=function(e,t,r){return e.slice(t*r,t*r+r)}(V,d,E),U=a.length>0&&a.length<t.length,Q=a.length===t.length,X=Object(v.a)();return Object(s.jsxs)(b.a,{children:[i&&Object(s.jsx)(D.a,{flex:1,p:2,children:Object(s.jsx)(q,{})}),!i&&Object(s.jsx)(F.a,{action:Object(s.jsx)(D.a,{width:150,children:Object(s.jsxs)(_.a,{fullWidth:!0,variant:"outlined",children:[Object(s.jsx)(w.a,{children:"Status"}),Object(s.jsx)(B.a,{value:Y.status||"all",onChange:function(e){var t=null;"all"!==e.target.value&&(t=e.target.value),H((function(e){return Object(p.a)(Object(p.a)({},e),{},{status:t})}))},label:"Status",autoWidth:!0,children:[{id:"all",name:"All"},{id:"completed",name:"Completed"},{id:"pending",name:"Pending"},{id:"failed",name:"Failed"}].map((function(e){return Object(s.jsx)(C.a,{value:e.id,children:e.name},e.id)}))})]})}),title:"Recent Orders"}),Object(s.jsx)(k.a,{}),Object(s.jsx)(T.a,{children:Object(s.jsxs)(N.a,{children:[Object(s.jsx)(M.a,{children:Object(s.jsxs)(S.a,{children:[Object(s.jsx)(P.a,{padding:"checkbox",children:Object(s.jsx)($.a,{color:"primary",checked:Q,indeterminate:U,onChange:function(e){c(e.target.checked?t.map((function(e){return e.id})):[])}})}),Object(s.jsx)(P.a,{children:"Order Details"}),Object(s.jsx)(P.a,{children:"Order ID"}),Object(s.jsx)(P.a,{children:"Source"}),Object(s.jsx)(P.a,{align:"right",children:"Amount"}),Object(s.jsx)(P.a,{align:"right",children:"Status"}),Object(s.jsx)(P.a,{align:"right",children:"Actions"})]})}),Object(s.jsx)(z.a,{children:Z.map((function(e){var t=a.includes(e.id);return Object(s.jsxs)(S.a,{hover:!0,selected:t,children:[Object(s.jsx)(P.a,{padding:"checkbox",children:Object(s.jsx)($.a,{color:"primary",checked:t,onChange:function(t){return r=e.id,void(a.includes(r)?c((function(e){return e.filter((function(e){return e!==r}))})):c((function(e){return[].concat(Object(h.a)(e),[r])})));var r},value:t})}),Object(s.jsxs)(P.a,{children:[Object(s.jsx)(o.a,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:e.orderDetails}),Object(s.jsx)(o.a,{variant:"body2",color:"text.secondary",noWrap:!0,children:Object(x.a)(e.orderDate,"MMMM dd yyyy")})]}),Object(s.jsx)(P.a,{children:Object(s.jsx)(o.a,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:e.orderID})}),Object(s.jsxs)(P.a,{children:[Object(s.jsx)(o.a,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:e.sourceName}),Object(s.jsx)(o.a,{variant:"body2",color:"text.secondary",noWrap:!0,children:e.sourceDesc})]}),Object(s.jsxs)(P.a,{align:"right",children:[Object(s.jsxs)(o.a,{variant:"body1",fontWeight:"bold",color:"text.primary",gutterBottom:!0,noWrap:!0,children:[e.amountCrypto,e.cryptoCurrency]}),Object(s.jsx)(o.a,{variant:"body2",color:"text.secondary",noWrap:!0,children:O()(e.amount).format("".concat(e.currency,"0,0.00"))})]}),Object(s.jsx)(P.a,{align:"right",children:ee(e.status)}),Object(s.jsxs)(P.a,{align:"right",children:[Object(s.jsx)(I.a,{title:"Edit Order",arrow:!0,children:Object(s.jsx)(W.a,{sx:{"&:hover":{background:X.colors.primary.lighter},color:X.palette.primary.main},color:"inherit",size:"small",children:Object(s.jsx)(R.a,{fontSize:"small"})})}),Object(s.jsx)(I.a,{title:"Delete Order",arrow:!0,children:Object(s.jsx)(W.a,{sx:{"&:hover":{background:X.colors.error.lighter},color:X.palette.error.main},color:"inherit",size:"small",children:Object(s.jsx)(J.a,{fontSize:"small"})})})]})]},e.id)}))})]})}),Object(s.jsx)(D.a,{p:2,children:Object(s.jsx)(A.a,{component:"div",count:V.length,onPageChange:function(e,t){m(t)},onRowsPerPageChange:function(e){L(parseInt(e.target.value))},page:d,rowsPerPage:E,rowsPerPageOptions:[5,10,25,30]})})]})};te.defaultProps={cryptoOrders:[]};var re=te,ne=r(266);var ae=function(){var e=[{id:"1",orderDetails:"Fiat Deposit",orderDate:(new Date).getTime(),status:"completed",orderID:"VUVX709ET7BY",sourceName:"Bank Account",sourceDesc:"*** 1111",amountCrypto:34.4565,amount:56787,cryptoCurrency:"ETH",currency:"$"},{id:"2",orderDetails:"Fiat Deposit",orderDate:Object(ne.a)(new Date,1).getTime(),status:"completed",orderID:"23M3UOG65G8K",sourceName:"Bank Account",sourceDesc:"*** 1111",amountCrypto:6.58454334,amount:8734587,cryptoCurrency:"BTC",currency:"$"},{id:"3",orderDetails:"Fiat Deposit",orderDate:Object(ne.a)(new Date,5).getTime(),status:"failed",orderID:"F6JHK65MS818",sourceName:"Bank Account",sourceDesc:"*** 1111",amountCrypto:6.58454334,amount:8734587,cryptoCurrency:"BTC",currency:"$"},{id:"4",orderDetails:"Fiat Deposit",orderDate:Object(ne.a)(new Date,55).getTime(),status:"completed",orderID:"QJFAI7N84LGM",sourceName:"Bank Account",sourceDesc:"*** 1111",amountCrypto:6.58454334,amount:8734587,cryptoCurrency:"BTC",currency:"$"},{id:"5",orderDetails:"Fiat Deposit",orderDate:Object(ne.a)(new Date,56).getTime(),status:"pending",orderID:"BO5KFSYGC0YW",sourceName:"Bank Account",sourceDesc:"*** 1111",amountCrypto:6.58454334,amount:8734587,cryptoCurrency:"BTC",currency:"$"},{id:"6",orderDetails:"Fiat Deposit",orderDate:Object(ne.a)(new Date,33).getTime(),status:"completed",orderID:"6RS606CBMKVQ",sourceName:"Bank Account",sourceDesc:"*** 1111",amountCrypto:6.58454334,amount:8734587,cryptoCurrency:"BTC",currency:"$"},{id:"7",orderDetails:"Fiat Deposit",orderDate:(new Date).getTime(),status:"pending",orderID:"479KUYHOBMJS",sourceName:"Bank Account",sourceDesc:"*** 1212",amountCrypto:2.346546,amount:234234,cryptoCurrency:"BTC",currency:"$"},{id:"8",orderDetails:"Paypal Withdraw",orderDate:Object(ne.a)(new Date,22).getTime(),status:"completed",orderID:"W67CFZNT71KR",sourceName:"Paypal Account",sourceDesc:"*** 1111",amountCrypto:3.345456,amount:34544,cryptoCurrency:"BTC",currency:"$"},{id:"9",orderDetails:"Fiat Deposit",orderDate:Object(ne.a)(new Date,11).getTime(),status:"completed",orderID:"63GJ5DJFKS4H",sourceName:"Bank Account",sourceDesc:"*** 2222",amountCrypto:1.4389567945,amount:123843,cryptoCurrency:"BTC",currency:"$"},{id:"10",orderDetails:"Wallet Transfer",orderDate:Object(ne.a)(new Date,123).getTime(),status:"failed",orderID:"17KRZHY8T05M",sourceName:"Wallet Transfer",sourceDesc:"John's Cardano Wallet",amountCrypto:765.5695,amount:7567,cryptoCurrency:"ADA",currency:"$"}];return Object(s.jsx)(b.a,{children:Object(s.jsx)(re,{cryptoOrders:e})})};t.default=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(n.a,{children:Object(s.jsx)("title",{children:"Transactions - Applications"})}),Object(s.jsx)(d.a,{children:Object(s.jsx)(u,{})}),Object(s.jsx)(m.a,{maxWidth:"lg",children:Object(s.jsx)(a.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:3,children:Object(s.jsx)(a.a,{item:!0,xs:12,children:Object(s.jsx)(ae,{})})})}),Object(s.jsx)(f,{})]})}}}]);
//# sourceMappingURL=8.0e88d9f3.chunk.js.map