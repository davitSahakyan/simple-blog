(this["webpackJsonpsimple-blog"]=this["webpackJsonpsimple-blog"]||[]).push([[0],{80:function(e,t,a){e.exports=a(99)},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(8),r=a.n(o),l=(a(85),a(17)),i=a(36),c=a(14),u=a(10),m=a(19),p=a(20),d=a(21),g=(a(86),a(28)),h=(a(87),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(p.a)(t).call(this))).state={},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"registartion"},s.a.createElement("div",{className:"registartion-box"},s.a.createElement("span",{className:"log-in-btn",onClick:function(){return e.props.history.push("/simple-blog/verify")}},"Log in"," "),"and tell us your story!!!"))}}]),t}(s.a.Component)),f=Object(g.g)(h),b=(a(93),a(16)),v=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).clearLocalStotage=function(){localStorage.clear(),window.location.reload()},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return console.log(this.props.isLoggedIn),s.a.createElement("div",{className:"navigation-container"},s.a.createElement("div",{className:"navigation"},s.a.createElement("div",{className:"left-nav"},s.a.createElement("div",null,s.a.createElement(b.b,{to:"/simple-blog"},s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fas fa-blog"}),"Blog"))),s.a.createElement(b.b,{to:"/simple-blog/create"},s.a.createElement("div",{className:"create-post-btn"},"create post"))),s.a.createElement("div",{onClick:this.clearLocalStotage}," Clear Memory "),this.props.isLoggedIn?s.a.createElement("div",{className:"right-nav",onClick:function(){return e.props.history.push("/simple-blog/log-out-modal")}},s.a.createElement("div",{type:"button"},"Log out")):s.a.createElement("div",{className:"right-nav",onClick:function(){return e.props.history.push("/simple-blog/verify")}},s.a.createElement("div",{type:"button"},"Log in"))))}}]),t}(s.a.Component),E=Object(g.g)(v),S=(a(94),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).showValidationError=function(e,t){a.setState((function(a){return{errors:[].concat(Object(l.a)(a.errors),[{element:e,message:t}])}}))},a.clearValidationError=function(e){a.setState((function(t){var a=[],n=!0,s=!1,o=void 0;try{for(var r,l=t.errors[Symbol.iterator]();!(n=(r=l.next()).done);n=!0){var i=r.value;e!==i.element&&a.push(i)}}catch(i){s=!0,o=i}finally{try{n||null==l.return||l.return()}finally{if(s)throw o}}return{errors:a}}))},a.handleChange=function(e){"username"===e.target.id?(a.setState({username:e.target.value}),a.clearValidationError("username")):"password"===e.target.id&&(a.setState({password:e.target.value}),a.clearValidationError("password"))},a.submitRegistration=function(){var e=a.state,t=e.username,n=e.password;""===t&&a.showValidationError("username","Username can't be empty"),""===n&&a.showValidationError("password","Password can't be empty");var s=a.props.users.find((function(e){return e.username===t&&e.password===n}));s?a.setState({isLoggedIn:!0,isOnline:!0},(function(){return a.give(s)})):t&&n&&a.setState({isLoggedIn:!0,isOnline:!0},(function(){return a.createNewUser()}))},a.give=function(e){a.props.changeLoggedUserStatusToOnline(e),a.props.history.push("/simple-blog/create")},a.createNewUser=function(){a.props.history.push("/simple-blog/create"),a.props.handleUserInfo(a.state.username,a.state.password,a.state.isOnline)},a.state={username:"",password:"",isOnline:!1,errors:[],isLoggedIn:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=null,t=null,a=!0,n=!1,o=void 0;try{for(var r,l=this.state.errors[Symbol.iterator]();!(a=(r=l.next()).done);a=!0){var i=r.value;"username"===i.element&&(e=i.message),"password"===i.element&&(t=i.message)}}catch(i){n=!0,o=i}finally{try{a||null==l.return||l.return()}finally{if(n)throw o}}return s.a.createElement("div",{className:"login-container"},s.a.createElement("div",{className:"login-title-container"},s.a.createElement("h2",{className:"login-title"},"Log in")),s.a.createElement("div",{className:"login"},s.a.createElement("input",{type:"text",placeholder:"Name *",id:"username",className:"login-input",onChange:this.handleChange}),s.a.createElement("sub",{className:"error"}," ",e||""," "),s.a.createElement("input",{type:"password",placeholder:"Password *",id:"password",className:"login-input",onChange:this.handleChange}),s.a.createElement("sub",{className:"error"}," ",t||""," "),s.a.createElement("button",{className:"login-btn",onClick:this.submitRegistration},"log in")))}}]),t}(s.a.Component)),O=Object(g.g)(S),y=(a(95),a(133)),I=a(126),w=a(4),j=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).handleGreetingStatusChange=function(){a.setState({isShowingGreeting:!1})},a.handleTitleValueChange=function(e){a.setState({titleValue:e.target.value})},a.handlePostValueChange=function(e){a.setState({postValue:e.target.value})},a.callback=function(){a.props.history.push("/simple-blog/"),a.props.handleAddPost({titleValue:a.state.titleValue,postValue:a.state.postValue,username:a.props.users[a.props.users.length-1].username,time:a.time()})},a.givePostToApp=function(){a.setState((function(e){return{postId:e.postId+1}}),(function(){return a.callback()}))},a.time=function(){return(new Date).toLocaleTimeString()},a.state={isShowingGreeting:!0,titleValue:"",postValue:"",postId:0},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.classes;return s.a.createElement("div",{className:"input-global-container"},s.a.createElement("form",{className:e.root,noValidate:!0,autoComplete:"off"},s.a.createElement(y.a,{className:e.title,id:"standard-basic",label:"Write a title",onChange:this.handleTitleValueChange}),s.a.createElement(y.a,{id:"outlined-basic",label:"Write a post",variant:"outlined",onChange:this.handlePostValueChange}),s.a.createElement(I.a,{variant:"contained",color:"primary",onClick:this.givePostToApp},s.a.createElement("span",null,s.a.createElement("i",{className:"fas fa-check fa-2x"})))))}}]),t}(s.a.Component),C=Object(w.a)((function(e){return{root:{width:"80%","& > *":{margin:e.spacing(1),width:"100%"}}}}))(Object(g.g)(j)),N=a(127),V=a(128),L=a(129),k=a(130),P=a(131),T=a(136),U=a(132),x=a(46),A=(a(96),Object(N.a)((function(e){return{root:{width:"80%",margin:"auto",marginTop:"5px"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",margin:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:"lightskyblue"}}})));var D=Object(g.g)((function(e){var t=A();return e.posts.map((function(a,n){return s.a.createElement(V.a,{className:t.root,key:n},s.a.createElement("div",{className:"card-container"},s.a.createElement(L.a,{avatar:s.a.createElement(T.a,{"aria-label":"recipe",className:t.avatar},a.username),title:"".concat(a.titleValue," writed by ").concat(a.username," "),subheader:a.edited?"".concat(a.time," edited at ").concat(a.edited):a.time}),s.a.createElement(k.a,null,s.a.createElement(x.a,{variant:"body2",color:"textSecondary",component:"p"},a.postValue)),s.a.createElement(P.a,{disableSpacing:!0},s.a.createElement(U.a,{"aria-label":"share",color:"primary",onClick:function(){return e.history.push("/simple-blog/post/edit:".concat(a.postId))}},"Edit"))))}))})),J=a(59),R=a.n(J),G=a(60),F=a.n(G),M=a(61),W=a.n(M),B=a(45),H=a(44),q=(a(97),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).editPostValue=function(){a.setState({isPostValueChanging:!0})},a.onPostValueChange=function(e){a.setState({newPostValue:e.target.value})},a.handleDoneIconClick=function(){var e=a.state,t=e.post,n=e.newPostValue;a.props.history.push("/simple-blog/"),a.props.handleNewPostValue(t.postId,n)},a.handleDeleteIconClick=function(){var e=a.state.post;a.props.history.push("/simple-blog/"),a.props.handlePostsFilter(e.postId)},a.state={post:{},isPostValueChanging:!1,newPostValue:""},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.posts.find((function(t){return":".concat(t.postId)===e.props.match.params.id}));this.setState({post:t})}},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.post,n=t.isPostValueChanging,o=t.newPostValue;return console.log("POSTS --",this.props.posts),console.log("POST --",a),console.log("CHANGED VALUE --",o),s.a.createElement(V.a,{className:e.root},s.a.createElement("div",{className:e.mainCard},s.a.createElement(L.a,{avatar:s.a.createElement(T.a,{"aria-label":"recipe",style:{backgroundColor:B.a[300]}},a.username),title:"".concat(a.titleValue," writed by ").concat(a.username," "),subheader:a.time}),s.a.createElement(k.a,null,n?s.a.createElement(y.a,{id:"outlined-basic",label:"Write a post",variant:"outlined",defaultValue:a.postValue,onChange:this.onPostValueChange}):s.a.createElement(x.a,{variant:"body2",color:"textSecondary",component:"p"},a.postValue)),s.a.createElement("div",{className:"edit-btn-container"},s.a.createElement(P.a,{disableSpacing:!0},s.a.createElement(U.a,{"aria-label":"share",onClick:this.editPostValue},s.a.createElement(R.a,{style:{color:B.a[500]}}))),s.a.createElement(P.a,{disableSpacing:!0},s.a.createElement(U.a,{"aria-label":"share",onClick:this.handleDeleteIconClick},s.a.createElement(F.a,{style:{color:H.a[500]}}))),s.a.createElement(P.a,{disableSpacing:!0},s.a.createElement(U.a,{"aria-label":"share",onClick:this.handleDoneIconClick},s.a.createElement(W.a,{color:"primary"}))))))}}]),t}(s.a.Component)),z=Object(w.a)((function(e){return{root:{width:"80%",margin:"auto","& > *":{margin:e.spacing(1),width:"100%"}},mainCard:{width:"80%",margin:"auto"}}}))(Object(g.g)(q)),K=a(35),Q=a(134);function X(){return Math.round(20*Math.random())-10}function Y(){var e=50+X(),t=50+X();return{top:"".concat(e,"%"),left:"".concat(t,"%"),transform:"translate(-".concat(e,"%, -").concat(t,"%)")}}var Z=Object(N.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var $=Object(g.g)((function(e){var t=Z(),a=s.a.useState(Y),n=Object(K.a)(a,1)[0],o=s.a.useState(!0),r=Object(K.a)(o,2),l=r[0],i=r[1],c=function(){i(!1)};return s.a.createElement("div",null,s.a.createElement(Q.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:l,onClose:c},s.a.createElement("div",{style:n,className:t.paper},s.a.createElement("h2",{id:"simple-modal-title"},"Log Out"),s.a.createElement("p",{id:"simple-modal-description"},"Are you sure ?"),s.a.createElement(I.a,{variant:"contained",color:"primary",onClick:function(){e.changeAllUsersStatusToOffline(),c(),e.changeLoginStatus(),e.history.push("/simple-blog/verify")}},"Log out"))))})),_=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(p.a)(t).call(this))).time=function(){return(new Date).toLocaleTimeString()},e.handleAddPost=function(t){var a=[Object(i.a)({},t,{postId:e.state.postId+1})].concat(Object(l.a)(e.state.posts));e.setState({posts:a,postId:e.state.postId+1}),localStorage.setItem("postId",e.state.postId),localStorage.setItem("posts",JSON.stringify(a))},e.changeLoginStatus=function(){var t=e.state.users.some((function(e){return!0===e.isOnline}));console.log("wefewf",t),e.setState({isLoggedIn:!t},(function(){return localStorage.setItem("isLoggedIn",t)}))},e.changeAllUsersStatusToOffline=function(){e.setState({users:e.state.users.map((function(e){return Object(i.a)({},e,{isOnline:!1})}))}),localStorage.setItem("isLoggedIn",e.state.isLoggedIn)},e.changeLoggedUserStatusToOnline=function(t){e.setState({users:e.state.users.map((function(e){return e.username===t.username?Object(i.a)({},e,{isOnline:!0}):e}))}),localStorage.setItem("isLoggedIn",e.state.isLoggedIn)},e.handleUserInfo=function(t,a,n){e.setState((function(e){return{isLoggedIn:!0,users:[].concat(Object(l.a)(e.users),[{username:t,password:a,isOnline:n}])}}),(function(){return localStorage.setItem("users",JSON.stringify(e.state.users))}),(function(){return e.changeLoginStatus()}))},e.handleNewPostValue=function(t,a){var n=e.state.posts.map((function(n){return n.postId===t?(console.log("yes"),Object(i.a)({},n,{postValue:a,edited:e.time()})):n}));localStorage.setItem("posts",JSON.stringify(n)),e.setState({posts:n})},e.handlePostsFilter=function(t){e.setState((function(e){return{posts:e.posts.filter((function(e){return e.postId!==t}))}}),(function(){return localStorage.setItem("posts",JSON.stringify(e.state.posts))}))},e.state={isLoggedIn:localStorage.getItem("isLoggedIn")||!1,posts:JSON.parse(localStorage.getItem("posts")||"[]"),users:JSON.parse(localStorage.getItem("users")||"[]"),postId:localStorage.getItem("postId")||0},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isLoggedIn,a=e.posts,n=e.users;return console.log("POSTS---",a),console.log("LOCALSTORAGE---",localStorage),console.log("USERS --",n),console.log("IsLoggedIn --",this.state.isLoggedIn),s.a.createElement("div",{className:"app"},s.a.createElement(E,{isLoggedIn:this.state.isLoggedIn,changeRegistrationStatus:this.changeRegistrationStatus}),s.a.createElement(g.d,null,s.a.createElement(g.b,{path:"/simple-blog/log-out-modal",exact:!0},s.a.createElement($,{changeAllUsersStatusToOffline:this.changeAllUsersStatusToOffline,changeLoginStatus:this.changeLoginStatus})),s.a.createElement(g.b,{path:"/simple-blog/verify"},s.a.createElement(O,{users:this.state.users,changeLoggedUserStatusToOnline:this.changeLoggedUserStatusToOnline,handleUserInfo:this.handleUserInfo})),s.a.createElement(g.b,{path:"/simple-blog/create"},t?s.a.createElement(C,{handleAddPost:this.handleAddPost,users:n}):s.a.createElement(g.a,{to:"/simple-blog/verify"})),s.a.createElement(g.b,{path:"/simple-blog",exact:!0},void 0!==a[0]?s.a.createElement(D,{posts:a}):s.a.createElement(f,null)),s.a.createElement(g.b,{path:"/simple-blog/post/edit:id",exact:!0},s.a.createElement(z,{posts:a,handleNewPostValue:this.handleNewPostValue,handlePostsFilter:this.handlePostsFilter}))))}}]),t}(s.a.Component);r.a.render(s.a.createElement(b.a,null,s.a.createElement(_,null)),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.4593768e.chunk.js.map