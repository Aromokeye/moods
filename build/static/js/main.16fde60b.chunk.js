(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),l=a.n(c),s=a(3),o=a(4),i=a(6),m=a(5),d=a(7),u=function(e){return r.a.createElement("div",{className:"w-100"},r.a.createElement("div",{className:" shadow-2 ba bw2 truncate fl grow br3 w-50 w-third-m w-20-l gold bg-dark-gray b--near-white"},r.a.createElement("img",{src:"https://api.adorable.io/avatars/200/".concat(e.id,".png"),alt:"every-day people",className:" db w-100 f4"}),r.a.createElement("span",{className:" db tc w-100 f6"},r.a.createElement("h1",{className:" db tc w-100 f6"},e.name),r.a.createElement("p",{className:" db tc w-100 f6"},e.email),r.a.createElement("p",null,e.street1,r.a.createElement("br",null),e.street2,r.a.createElement("br",null),e.street3))))},h=function(e){var t=e.people,a=t.map(function(e,a){return r.a.createElement(u,{key:a,id:t[a].id,name:t[a].name,email:t[a].email,street1:t[a].address.street,street2:t[a].address.suite,street3:t[a].address.city})});return r.a.createElement("div",null,a)},p=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"5px solid pink",height:"400px"}},e.children)},f=function(e){return r.a.createElement("div",{className:"mb2"},r.a.createElement("input",{className:"ph5 pv3 ba b--dark-pink bg-light-pink br2 fw6 athelas",type:"search",placeholder:"Find face",onChange:e.searchChange}))},w=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={people:[],searchField:""},e}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e.setState({people:t})})}},{key:"render",value:function(){var e=this,t=this.state.people.filter(function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())});return r.a.createElement("div",{className:"tc"},r.a.createElement("div",null,r.a.createElement("h1",{className:" georgia f2"},"Passionate Moods")),r.a.createElement(f,{searchChange:this.onSearchChange}),r.a.createElement(p,null,r.a.createElement(h,{people:t})))}}]),t}(n.Component);a(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(15);l.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.16fde60b.chunk.js.map