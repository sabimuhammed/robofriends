(this.webpackJsonprobofreinds=this.webpackJsonprobofreinds||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),c=n.n(s),o=n(7),a=n.n(o),i=(n(13),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),s(e),c(e),o(e)}))}),h=(n(14),n(2)),l=n(3),b=n(5),d=n(4),j=function(e){var t=e.name,n=e.email,s=e.id;return Object(r.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(r.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(s)}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:t}),Object(r.jsx)("p",{children:n})]})]})},u=function(e){var t=e.robots;return Object(r.jsx)("div",{children:t.map((function(e,n){return Object(r.jsx)(j,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},f=function(e){var t=e.searchChange;return Object(r.jsx)("div",{className:"",children:Object(r.jsx)("input",{className:"pa3 ba3 b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},O=(n(15),function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(h.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(l.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(r.jsx)("h1",{children:"ooops that is not good"}):this.props.children}}]),n}(s.Component)),g=function(e){return Object(r.jsx)("div",{style:{overflow:"scroll",border:"1px solid black",height:"800px",margin:7,borderColor:"#0ccac4",marginTop:9},children:e.children})},p=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfeild:t.target.value})},e.state={robots:[],searchfeild:""},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfeild.toLowerCase())})),n=this.state.robots.filter((function(t){return t.email.toLowerCase().includes(e.state.searchfeild.toLowerCase())}));return 0===this.state.robots.length?Object(r.jsx)("h1",{style:{textAlign:"center",paddingTop:"25%"},children:"Loading...."}):Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{className:"f2",children:"Robo Freinds"}),Object(r.jsx)(f,{searchChange:this.onSearchChange})]}),Object(r.jsx)(g,{children:Object(r.jsxs)(O,{children:[Object(r.jsx)(u,{robots:t}),Object(r.jsx)(u,{robots:n})]})})]})}}]),n}(s.Component);a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root")),i()}},[[16,1,2]]]);
//# sourceMappingURL=main.656b7260.chunk.js.map