(this["webpackJsonpcurrency-converter"]=this["webpackJsonpcurrency-converter"]||[]).push([[0],{17:function(e,t,n){e.exports=n(41)},22:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(16),u=n.n(r),l=(n(22),n(2)),o=function(){return c.a.createElement("header",null,c.a.createElement("h1",null,"Currency Converter"))},s=n(4),i=n.n(s),f=n(3),m=n(5),b=n(6),p=n.n(b),E="https://api.exchangeratesapi.io/latest",j=function(e){var t=e.setResult,n=(e.loading,e.setLoading),r=Object(a.useState)(""),u=Object(l.a)(r,2),o=u[0],s=u[1],b=Object(a.useState)(""),j=Object(l.a)(b,2),v=j[0],O=j[1],d=Object(a.useState)(0),h=Object(l.a)(d,2),g=h[0],y=h[1],S=Object(a.useState)([!1,!1]),N=Object(l.a)(S,2),k=N[0],w=N[1],x=Object(a.useState)([]),C=Object(l.a)(x,2),R=C[0],U=C[1],D=Object(a.useState)(null),F=Object(l.a)(D,2),L=F[0],A=F[1];return Object(a.useEffect)((function(){k.every((function(e){return!e}))&&!isNaN(g)&&L?t(function(e,t){switch(t){case"EUR":return"".concat(e," \u20ac");case"USD":return"$ ".concat(e);case"GBP":return"\xa3 ".concat(e);case"CZK":return"".concat(e,1===e?" koruna":2===e||3===e||4===e?" koruny":" korun");default:return"".concat(e," ").concat(t)}}(g*L[v],v)):t("")}),[v,o,g]),Object(a.useEffect)((function(){(function(){var e=Object(m.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),e.next=3,p.a.get(E);case 3:t=e.sent,U([t.data.base].concat(Object(f.a)(Object.keys(t.data.rates)))),n(!1),s("EUR"),O("USD");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.useEffect)((function(){var e=function(){var e=Object(m.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),e.next=3,p.a.get("".concat(E,"?base=").concat(t));case 3:a=e.sent,n(!1),A(a.data.rates);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t=R.filter((function(e){return e===o}));1===t.length?(w((function(e){return[!1].concat(Object(f.a)(e.slice(1,2)))})),e(t)):w((function(e){return[!0].concat(Object(f.a)(e.slice(1,2)))}))}),[o]),Object(a.useEffect)((function(){1===R.filter((function(e){return e===v})).length?w((function(e){return[].concat(Object(f.a)(e.slice(0,1)),[!1])})):w((function(e){return[].concat(Object(f.a)(e.slice(0,1)),[!0])}))}),[v]),c.a.createElement("form",null,c.a.createElement("div",{className:"form-control"},c.a.createElement("label",{htmlFor:"source-currency"},"Source currency"),c.a.createElement("input",{value:o,onChange:function(e){return s(e.target.value)},list:"currencies",className:k[0]?"red":"green"})),c.a.createElement("div",{className:"form-control"},c.a.createElement("label",{htmlFor:"amount"},"Amount"),c.a.createElement("input",{type:"number",step:".01",value:g,onChange:function(e){return y(e.target.value)}})),c.a.createElement("div",{className:"form-control"},c.a.createElement("label",{htmlFor:"dest-currency"},"Destination currency"),c.a.createElement("input",{value:v,onChange:function(e){return O(e.target.value)},list:"currencies",className:k[1]?"red":"green"})),R.length>0&&c.a.createElement("datalist",{id:"currencies"},R.map((function(e){return c.a.createElement("option",{value:e})}))))},v=function(e){var t=e.result;return c.a.createElement("div",null,c.a.createElement("p",{className:"Result"},t))},O=function(){return c.a.createElement("span",null,"Loading data ...")};var d=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],u=Object(a.useState)(!0),s=Object(l.a)(u,2),i=s[0],f=s[1];return c.a.createElement("div",{className:"App"},c.a.createElement(o,null),i&&c.a.createElement(O,null),c.a.createElement(j,{setResult:r,loading:i,setLoading:f}),c.a.createElement(v,{result:n}))};u.a.render(c.a.createElement(d,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.205db867.chunk.js.map