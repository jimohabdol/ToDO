(this.webpackJsonploan=this.webpackJsonploan||[]).push([[0],{34:function(e,t,a){e.exports=a(63)},39:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(30),c=a.n(r),i=(a(39),a(33)),d=a(11),l=a(12),u=a(14),m=a(13),s=a(9),p=a(15),f=a(10),h=a(6),v=function(e){var t,a=e.addTodo;return o.a.createElement("div",{id:"form"},o.a.createElement("input",{ref:function(e){return t=e},placeholder:"Add To Do..."}),o.a.createElement("button",{onClick:function(){a(t.value),t.value="",t.placeholder="Add To Do..."}},"+"))},b=function(e){var t=e.todo,a=e.remove,n=e.complete;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"todos"},o.a.createElement("p",{style:t.isCompleted?{fontStyle:"italic",color:"#cdcdcd",textDecoration:"line-through"}:null},t.text),o.a.createElement("span",{className:"removeBtn",onClick:function(){a(t.id)}},"x"),o.a.createElement("input",{type:"checkbox",key:t.id,onChange:function(){n(t.id)}})))},E=function(e){var t=e.todos,a=e.remove,n=e.complete,r=t.map((function(e,t){return o.a.createElement(o.a.Fragment,{key:Number(e.id)},o.a.createElement(b,{todo:e,remove:a,complete:n}))}));return o.a.createElement("div",{id:"list"},o.a.createElement("p",{id:"info"}," Your Todos: "),r)},k=function(e){function t(){return Object(d.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement("p",null,"Version 1.0.0"))}}]),t}(n.Component);var y=function(){return o.a.createElement("div",{id:"titleWrapper"},o.a.createElement("h3",{className:"textCenter"},"TO-DO List"),o.a.createElement(f.b,{to:"/"},"Home"),"|",o.a.createElement(f.b,{to:"/about"},"About"))},O=function(){return o.a.createElement("div",{id:"footer"},o.a.createElement("p",null,"Jimoh Abdulrahman to Kenny Ogunfuyi... I look forward to matching your personality!"))},j=a(16),T=a.n(j);a(62);window.id=0;var g=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).complete=function(e){console.log(e),a.setState((function(t){return{data:t.data.map((function(t){return t.id===e?Object(i.a)({},t,{isCompleted:!t.isCompleted}):t}))}}))},a.state={data:[]},a.apiURL="https://jsonplaceholder.typicode.com/todos",a.addTodo=a.addTodo.bind(Object(s.a)(a)),a.removeTodo=a.removeTodo.bind(Object(s.a)(a)),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"addTodo",value:function(e){var t=this,a={text:e,isCompleted:!1};T.a.post("https://5e4bbf9ca641ed0014b022d3.mockapi.io/api/todo",a).then((function(e){t.state.data.push(a),t.setState({data:t.state.data.sort((function(e,t){return t.id-e.id}))})}))}},{key:"removeTodo",value:function(e){T.a.delete("https://5e4bbf9ca641ed0014b022d3.mockapi.io/api/todo/".concat(e));var t=this.state.data.filter((function(t){if(t.id!==e)return t}));this.setState({data:t})}},{key:"componentDidMount",value:function(){var e=this;T()("https://5e4bbf9ca641ed0014b022d3.mockapi.io/api/todo").then((function(t){var a=t.data;a.sort((function(e,t){return t.id-e.id})),e.setState({data:a})}))}},{key:"render",value:function(){var e=this;return o.a.createElement(f.a,null,o.a.createElement("div",{id:"container"},o.a.createElement(y,null),o.a.createElement(h.a,{exact:!0,path:"/",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(v,{addTodo:e.addTodo}),o.a.createElement(E,{todos:e.state.data,remove:e.removeTodo,complete:e.complete}))}}),o.a.createElement(h.a,{path:"/about",component:k}),o.a.createElement(O,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.94cac727.chunk.js.map