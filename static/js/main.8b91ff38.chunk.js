(this["webpackJsonptest-task"]=this["webpackJsonptest-task"]||[]).push([[0],{405:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(27),s=n.n(r),c=n(412),i=n(407),u=n(408),o=n(62),l=n(409),j=n(93),d=n(31),b=n(77),O=n.n(b),p=n(6),m=c.a.Title,x=function(){var e=Object(d.c)((function(e){return e.task.developer}));return Object(p.jsxs)(i.a,{children:[Object(p.jsx)(u.a,{span:6,offset:6,className:"gutter-row",style:{marginTop:10},children:Object(p.jsxs)(m,{level:2,children:["Test task by ",Object(p.jsx)("a",{href:"https://github.com/al4iii",children:"al4ii"})," "]})}),Object(p.jsx)(u.a,{span:6,offset:6,className:"gutter-row",children:"al4i"===e?Object(p.jsx)(o.a,{type:"primary",style:{marginTop:20},children:Object(p.jsx)(j.b,{to:"/login",children:"Login"})}):Object(p.jsxs)(O.a,{keyboard:!0,children:[" ",e]})}),Object(p.jsx)(l.a,{})]})},f=n(410),h=n(66),k=n.n(h),v=n(106),g=n(26),y=n(205),w=n.n(y).a.create({baseURL:"https://uxcandy.com/~shapoval/test-task-backend/v2",headers:{"Content-Type":"multipart/form-data"}}),T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return w.get("?developer=".concat(e,"&page=").concat(t)).then((function(e){return e}))},_=function(e,t){return w.post("/create?developer=".concat(t),e).then((function(e){return e}))},E=function(e,t){return w.post("/login?developer=".concat(t),e).then((function(e){return e}))},S=function(e,t,n){return w.post("edit/".concat(t,"?developer=").concat(n),e).then((function(e){return e}))},C="task/SET_TASKS",I="task/SET_TOTAL_TASK_COUNT",F="task/SET_CURRENT_PAGE",P="task/SET_SET_TOKEN",q="task/SET_DEVOLOPER",N="task/SET_EDIT",A={developer:"al4i",total_task_count:0,tasks:[],currentPage:1,token:null,id:null,isEdit:!1},D=function(e){return{type:C,tasks:e}},L=function(e){return{type:I,total_task_count:e}},U=function(e){return{type:F,currentPage:e}},R=function(e){return{type:N,isEdit:e}},$=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return function(){var n=Object(v.a)(k.a.mark((function n(a){var r;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,T(e,t);case 2:r=n.sent,a(U(t)),a(D(r.data.message.tasks)),a(L(+r.data.message.total_task_count));case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(g.a)(Object(g.a)({},e),{},{tasks:t.tasks});case I:return Object(g.a)(Object(g.a)({},e),{},{total_task_count:t.total_task_count});case F:return Object(g.a)(Object(g.a)({},e),{},{currentPage:t.currentPage});case P:return Object(g.a)(Object(g.a)({},e),{},{token:t.token});case q:return Object(g.a)(Object(g.a)({},e),{},{developer:t.developer});case N:return Object(g.a)(Object(g.a)({},e),{},{isEdit:t.isEdit});default:return e}},M=[{title:"User name",dataIndex:"username",key:"username",editable:!0,sorter:function(e,t){return e.username.length-t.username.length}},{title:"E-mail",dataIndex:"email",key:"email",sorter:function(e,t){return e.email.length-t.email.length}},{title:"Task",dataIndex:"text",key:"text",sorter:function(e,t){return e.text.length-t.text.length}},{title:"id",dataIndex:"id",key:"id",render:function(e){return Object(p.jsx)(o.a,{type:"primary",children:Object(p.jsx)(j.b,{to:"/edit/".concat(e),children:"Edit"})})}},{title:"Status",dataIndex:"status",key:"status",render:function(e){return 0===e?Object(p.jsx)(O.a,{type:"danger",children:"task not completed"}):1===e?Object(p.jsx)(O.a,{type:"danger",children:"task not completed, edited by admin"}):10===e?Object(p.jsx)(O.a,{type:"success",children:"task completed"}):11===e?Object(p.jsx)(O.a,{type:"success",children:"task edited by admin and completed"}):""}}],V=function(e){var t=e.rows,n=void 0===t?3:t,r=Object(d.c)((function(e){return e.task.tasks})),s=Object(d.c)((function(e){return e.task.total_task_count})),c=Object(d.c)((function(e){return e.task.currentPage})),i=Object(d.c)((function(e){return e.task.developer})),u=Object(d.b)();Object(a.useEffect)((function(){u($(i,1))}),[i]);return Object(p.jsx)(f.a,{dataSource:r,columns:M,pagination:{pageSize:n,total:s,current:c,onChange:function(e){u($(i,e))},defaultCurrent:1,showSizeChanger:!1}})},z=n(107),J=n(209),X=Object(z.b)({task:K}),B=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||z.c,G=Object(z.d)(X,B(Object(z.a)(J.a)));window.store=G;var H=G,Q=n(28),W=(n(148),n(411)),Y=n(413),Z={labelCol:{span:8},wrapperCol:{span:16}},ee=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.task.developer}));return Object(p.jsxs)(W.a,Object(g.a)(Object(g.a)({},Z),{},{name:"message",onFinish:function(n){e(function(e,t,n,a){return function(){var r=Object(v.a)(k.a.mark((function r(s){var c;return k.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(c=new FormData).set("username",t),c.set("email",e),c.set("text",n),r.next=6,_(c,a);case 6:s($(a,1));case 7:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}(n.user.email,n.user.name,n.user.text,t))},validateMessages:{required:"${label} is required!",types:{email:"${label} is not a valid email!",number:"${label} is not a valid number!"}},children:[Object(p.jsx)(W.a.Item,{name:["user","name"],label:"name",rules:[{required:!0}],children:Object(p.jsx)(Y.a,{})}),Object(p.jsx)(W.a.Item,{name:["user","email"],label:"email",rules:[{required:!0,type:"email"}],children:Object(p.jsx)(Y.a,{})}),Object(p.jsx)(W.a.Item,{name:["user","text"],label:"Text",rules:[{required:!0}],children:Object(p.jsx)(Y.a.TextArea,{})}),Object(p.jsx)(W.a.Item,{wrapperCol:Object(g.a)(Object(g.a)({},Z.wrapperCol),{},{offset:8}),children:Object(p.jsx)(o.a,{type:"primary",htmlType:"submit",children:"Submit"})})]}))},te=n(210),ne=n.n(te),ae=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(u.a,{span:6,offset:6,children:Object(p.jsx)(ne.a,{level:3,children:"Add new task"})}),Object(p.jsx)(u.a,{xs:24,md:{span:8,offset:4},children:Object(p.jsx)(ee,{})}),Object(p.jsx)(i.a,{children:Object(p.jsxs)(u.a,{xs:24,md:{span:12,offset:6},children:[Object(p.jsx)(c.a.Title,{level:4}),Object(p.jsx)(V,{})]})})]})},re={labelCol:{span:8},wrapperCol:{span:5}},se={wrapperCol:{offset:8,span:16}},ce=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.task.token}));return Object(p.jsx)(p.Fragment,{children:t?Object(p.jsx)(ae,{}):Object(p.jsxs)(W.a,Object(g.a)(Object(g.a)({},re),{},{offset:8,span:8,name:"basic",initialValues:{remember:!0},onFinish:function(t){var n,a;e((n=t.username,a=t.password,function(){var e=Object(v.a)(k.a.mark((function e(t){var r,s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=new FormData).set("username",n),r.set("password",a),e.next=5,E(r,n);case 5:s=e.sent,t((c=s.data.message.token,{type:P,token:c})),s.data.message.token&&(t({type:q,developer:n}),t($(n,1)));case 8:case"end":return e.stop()}var c}),e)})));return function(t){return e.apply(this,arguments)}}()))},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(p.jsx)(W.a.Item,{label:"Username",name:"username",rules:[{required:!0,message:"Please input your username!"}],children:Object(p.jsx)(Y.a,{})}),Object(p.jsx)(W.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}],children:Object(p.jsx)(Y.a.Password,{})}),Object(p.jsx)(W.a.Item,Object(g.a)(Object(g.a)({},se),{},{children:Object(p.jsx)(o.a,{type:"primary",htmlType:"submit",children:"Submit"})}))]}))})},ie=c.a.Title,ue={labelCol:{span:8},wrapperCol:{span:6}},oe=function(){var e=Object(d.c)((function(e){return e.task.isEdit})),t=Object(d.c)((function(e){return e.task.tasks})),n=Object(Q.g)().location.pathname.substr(6),a=t.find((function(e){return e.id===+n})).text,r=Object(d.c)((function(e){return e.task.developer})),s=Object(d.c)((function(e){return e.task.token})),c=Object(d.b)();return e?Object(p.jsx)(Q.a,{to:"/content"}):Object(p.jsx)(p.Fragment,{children:"al4i"===r?Object(p.jsxs)(u.a,{span:8,offset:6,className:"gutter-row",children:[Object(p.jsx)(ie,{level:3,type:"danger",children:"Only registered users can edit Tasks"}),Object(p.jsx)(ie,{level:4,children:"Login: admin"}),Object(p.jsx)(ie,{level:4,children:"password: 123"})]}):Object(p.jsxs)(W.a,Object(g.a)(Object(g.a)({},ue),{},{name:"message",onFinish:function(e){return c(function(e,t,n,a){return function(){var r=Object(v.a)(k.a.mark((function r(s){var c;return k.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(c=new FormData).set("text",e),c.set("token",a),r.next=5,S(c,t,n);case 5:(r.sent.data.status="ok")&&(s(R(!0)),s($(n,1)),s(R(!1)));case 7:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}(e.user.text,n,r,s))},validateMessages:{required:"${label} is required!"},children:[Object(p.jsx)(W.a.Item,{name:["user","text"],label:"Text",rules:[{required:!0}],children:Object(p.jsx)(Y.a.TextArea,{placeholder:a})}),Object(p.jsx)(W.a.Item,{wrapperCol:Object(g.a)(Object(g.a)({},ue.wrapperCol),{},{offset:8}),children:Object(p.jsx)(o.a,{type:"primary",htmlType:"submit",children:"Submit"})})]}))})},le=function(){return Object(p.jsx)(j.a,{children:Object(p.jsxs)(d.a,{store:H,children:[Object(p.jsx)(x,{}),Object(p.jsxs)(Q.d,{children:[Object(p.jsx)(Q.b,{exact:!0,path:"/",render:function(){return Object(p.jsx)(Q.a,{to:"/content"})}}),Object(p.jsx)(Q.b,{path:"/content",render:function(){return Object(p.jsx)(ae,{})}}),Object(p.jsx)(Q.b,{exact:!0,path:"/login",render:function(){return Object(p.jsx)(ce,{})}}),Object(p.jsx)(Q.b,{path:"/edit/:id?",render:function(){return Object(p.jsx)(oe,{})}})]})]})})};s.a.render(Object(p.jsx)(le,{}),document.getElementById("root"))}},[[405,1,2]]]);
//# sourceMappingURL=main.8b91ff38.chunk.js.map