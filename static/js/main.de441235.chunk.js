(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(8),i=a.n(n),r=a(9),o=a(2),c=a(7),s=a(5),l=a(1),d=(a(14),a(0)),u=function(e){var t=e.user;return Object(d.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},m=function(e){var t=e.todo;return Object(d.jsxs)("article",{className:"TodoInfo ".concat(t.completed&&"TodoInfo--completed"),"data-id":t.id,children:[Object(d.jsx)("h2",{className:"TodoInfo__title",children:t.title}),t.user&&Object(d.jsx)(u,{user:t.user})]})},j=function(e){var t=e.todos;return Object(d.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(d.jsx)(m,{todo:e},e.id)}))})},b=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];function h(e){return b.find((function(t){return t.id===e}))||null}var O=function(e){var t=e.onSubmit,a=Object(l.useState)(""),n=Object(o.a)(a,2),i=n[0],r=n[1],c=Object(l.useState)(!1),s=Object(o.a)(c,2),u=s[0],m=s[1],j=Object(l.useState)(0),O=Object(o.a)(j,2),f=O[0],p=O[1],x=Object(l.useState)(!1),v=Object(o.a)(x,2),S=v[0],y=v[1];return Object(d.jsxs)("form",{action:"/api/todos",method:"POST",className:"TodoForm",onSubmit:function(e){e.preventDefault(),m(!i),y(!f),i&&f&&(t({id:0,title:i,completed:!1,userId:f,user:h(f)}),r(""),p(0))},children:[Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{className:"label",htmlFor:"todo-title",children:"Title:\xa0"}),Object(d.jsx)("input",{id:"todo-title",type:"text",autoComplete:"off",value:i,"data-cy":"titleInput",placeholder:"Enter a title",onChange:function(e){r(e.target.value),m(!1)}}),u&&Object(d.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{className:"label",htmlFor:"todo-user",children:"User:\xa0"}),Object(d.jsxs)("select",{id:"todo-user","data-cy":"userSelect",value:f,onChange:function(e){p(+e.target.value),y(!1)},children:[Object(d.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),b.map((function(e){return Object(d.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),S&&Object(d.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(d.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]})},f=["id"],p=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:h(e.userId)})}));var x=function(){var e=Object(l.useState)(p),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Add todo form"}),Object(d.jsx)(O,{onSubmit:function(e){e.id;var t,i=Object(r.a)(e,f),o=Object(s.a)({id:(t=a,Math.max.apply(Math,Object(c.a)(t.map((function(e){return e.id}))))+1)},i);n((function(e){return[].concat(Object(c.a)(e),[o])}))}}),Object(d.jsx)(j,{todos:a})]})};i.a.render(Object(d.jsx)(x,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.de441235.chunk.js.map