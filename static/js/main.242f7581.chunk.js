(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{127:function(e,t,c){},128:function(e,t,c){},200:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(15),i=c.n(s),o=(c(127),c(6)),r=c(5),l=(c(128),c(204)),d=c(11),j=function(e){var t=e.addTask,c=Object(n.useState)(""),a=Object(r.a)(c,2),s=a[0],i=a[1];return Object(d.jsx)("form",{onSubmit:function(e){e.preventDefault(),s&&(t(s),i(""))},children:Object(d.jsx)(l.a,{type:"text",className:"input",value:s,placeholder:"Th\xeam task m\u1edbi",onChange:function(e){return i(e.target.value)}})})},u=c(117),b=c(203),h=c(122),O=c(121),f=b.a.Text,m=function(e){var t=e.task,c=e.index,n=e.completeTask,a=e.removeTask;return Object(d.jsxs)("div",{className:"task",style:{textDecoration:t.completed?"line-through red":""},children:[t.title,Object(d.jsx)(u.a,{icon:Object(d.jsx)(h.a,{}),style:{background:"red"},onClick:function(){return a(c)}}),Object(d.jsx)(u.a,{icon:Object(d.jsx)(O.a,{}),onClick:function(){return n(c)}})]})},x=function(){var e=Object(n.useState)(0),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(0),i=Object(r.a)(s,2),l=i[0],u=i[1],b=Object(n.useState)([{id:1,title:"Task 1",completed:!0,timeline:-2028},{id:2,title:"Tast 2",completed:!1},{id:3,title:"Task 3",completed:!1}]),h=Object(r.a)(b,2),O=h[0],x=h[1];Object(n.useEffect)((function(){a(O.filter((function(e){return!e.completed})).length)})),Object(n.useEffect)((function(){u(O.filter((function(e){return e.completed})).length)}));var k=function(e){var t=Object(o.a)(O);t[e].completed=!0,x(t)},p=function(e){var t=Object(o.a)(O);t.splice(e,1),x(t)};return Object(d.jsxs)("div",{className:"todo-container",children:[Object(d.jsxs)("div",{className:"header",children:[Object(d.jsx)("div",{className:"header-1",children:Object(d.jsxs)(f,{code:!0,children:["Task ch\u01b0a ho\xe0n th\xe0nh(",c,")"]})}),Object(d.jsx)("div",{className:"header-2",children:Object(d.jsxs)(f,{code:!0,children:["Task \u0111\xe3 ho\xe0n th\xe0nh(",l,")"]})})]}),Object(d.jsx)("div",{className:"tasks",children:O.map((function(e,t){return Object(d.jsx)(m,{task:e,index:t,completeTask:k,removeTask:p},t)}))}),Object(d.jsx)("div",{className:"create-task",children:Object(d.jsx)(j,{addTask:function(e){var t=[].concat(Object(o.a)(O),[{title:e,completed:!1}]);x(t)}})})]})},k=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,205)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root")),k()}},[[200,1,2]]]);
//# sourceMappingURL=main.242f7581.chunk.js.map