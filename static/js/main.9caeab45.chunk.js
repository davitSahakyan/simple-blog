(this["webpackJsonpsimple-blog"]=this["webpackJsonpsimple-blog"]||[]).push([[0],{100:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(9),r=a.n(o),i=(a(87),a(18)),l=a(30),c=a(11),u=a(7),m=a(13),d=a(14),p=a(15),g=(a(88),a(28)),h=(a(89),function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return this.props.isLoggedIn?s.a.createElement("div",{className:"registartion"},s.a.createElement("div",{className:"registartion-box"},s.a.createElement("span",{className:"log-in-btn",onClick:function(){return e.props.history.push("/simple-blog/create")}},"Create post"," "),"and tell us your story!!!")):s.a.createElement("div",{className:"registartion"},s.a.createElement("div",{className:"registartion-box"},s.a.createElement("span",{className:"log-in-btn",onClick:function(){return e.props.history.push("/simple-blog/verify")}},"Log in"," "),"and tell us your story!!!"))}}]),t}(s.a.Component)),b=Object(g.g)(h),f=(a(95),a(17)),E=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"navigation-container"},s.a.createElement("div",{className:"navigation"},s.a.createElement("div",{className:"left-nav"},s.a.createElement("div",null,s.a.createElement(f.b,{to:"/simple-blog"},s.a.createElement("span",{className:"icon"},s.a.createElement("i",{className:"fas fa-blog"}),"Blog"))),s.a.createElement(f.b,{to:"/simple-blog/create"},s.a.createElement("div",{className:"create-post-btn"},"create post"))),!0===this.props.isLoggedIn||"true"===this.props.isLoggedIn?s.a.createElement("div",{className:"right-nav",onClick:function(){return e.props.history.push("/simple-blog/log-out-modal")}},s.a.createElement("div",{type:"button"},"Log out")):s.a.createElement("div",{className:"right-nav",onClick:function(){return e.props.history.push("/simple-blog/verify")}},s.a.createElement("div",{type:"button"},"Log in"))))}}]),t}(s.a.Component),v=Object(g.g)(E),O=(a(96),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).showValidationError=function(e,t){a.setState((function(a){return{errors:[].concat(Object(i.a)(a.errors),[{element:e,message:t}])}}))},a.clearValidationError=function(e){a.setState((function(t){var a=[],n=!0,s=!1,o=void 0;try{for(var r,i=t.errors[Symbol.iterator]();!(n=(r=i.next()).done);n=!0){var l=r.value;e!==l.element&&a.push(l)}}catch(l){s=!0,o=l}finally{try{n||null==i.return||i.return()}finally{if(s)throw o}}return{errors:a}}))},a.handleChange=function(e){"username"===e.target.id?(a.setState({username:e.target.value}),a.clearValidationError("username")):"password"===e.target.id&&(a.setState({password:e.target.value}),a.clearValidationError("password"))},a.submitRegistration=function(){var e=a.state,t=e.username,n=e.password;""===t&&a.showValidationError("username","Username can't be empty"),""===n&&a.showValidationError("password","Password can't be empty");var s=a.props.users.find((function(e){return e.username===t&&e.password===n}));s?a.setState({isLoggedIn:!0,isOnline:!0},(function(){return a.give(s)})):t&&n&&a.setState({isLoggedIn:!0,isOnline:!0},(function(){return a.createNewUser()}))},a.give=function(e){a.props.changeLoggedUserStatusToOnline(e),a.props.history.push("/simple-blog")},a.createNewUser=function(){a.props.history.push("/simple-blog"),a.props.handleUserInfo(a.state.username,a.state.password,a.state.isOnline)},a.state={username:"",password:"",isOnline:!1,errors:[],isLoggedIn:!1},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=null,t=null,a=!0,n=!1,o=void 0;try{for(var r,i=this.state.errors[Symbol.iterator]();!(a=(r=i.next()).done);a=!0){var l=r.value;"username"===l.element&&(e=l.message),"password"===l.element&&(t=l.message)}}catch(l){n=!0,o=l}finally{try{a||null==i.return||i.return()}finally{if(n)throw o}}return s.a.createElement("div",{className:"login-container"},s.a.createElement("div",{className:"login-title-container"},s.a.createElement("h2",{className:"login-title"},"Log in")),s.a.createElement("div",{className:"login"},s.a.createElement("input",{type:"text",placeholder:"Name *",id:"username",className:"login-input",onChange:this.handleChange}),s.a.createElement("sub",{className:"error"}," ",e||""," "),s.a.createElement("input",{type:"password",placeholder:"Password *",id:"password",className:"login-input",onChange:this.handleChange}),s.a.createElement("sub",{className:"error"}," ",t||""," "),s.a.createElement("button",{className:"login-btn",onClick:this.submitRegistration},"log in")))}}]),t}(s.a.Component)),C=Object(g.g)(O),S=(a(97),a(133)),y=a(126),j=a(4),I=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).handleGreetingStatusChange=function(){a.setState({isShowingGreeting:!1})},a.handleTitleValueChange=function(e){a.setState({titleValue:e.target.value})},a.handlePostValueChange=function(e){a.setState({postValue:e.target.value})},a.callback=function(){a.props.history.push("/simple-blog/"),a.props.handleAddPost({titleValue:a.state.titleValue,postValue:a.state.postValue,username:a.props.users.find((function(e){return!0===e.isOnline})).username,time:a.time(),comments:[]})},a.givePostToApp=function(){a.setState((function(e){return{postId:e.postId+1}}),(function(){return a.callback()}))},a.time=function(){return(new Date).toLocaleTimeString()},a.state={isShowingGreeting:!0,titleValue:"",postValue:"",postId:0},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.classes;return s.a.createElement("div",{className:"input-global-container"},s.a.createElement("form",{className:e.root,noValidate:!0,autoComplete:"off"},s.a.createElement(S.a,{className:e.title,id:"standard-basic",label:"Write a title",onChange:this.handleTitleValueChange}),s.a.createElement(S.a,{id:"outlined-basic",label:"Write a post",variant:"outlined",onChange:this.handlePostValueChange}),s.a.createElement(y.a,{variant:"contained",color:"primary",onClick:this.givePostToApp},s.a.createElement("span",null,s.a.createElement("i",{className:"fas fa-check fa-2x"})))))}}]),t}(s.a.Component),V=Object(j.a)((function(e){return{root:{width:"80%","& > *":{margin:e.spacing(1),width:"100%"}}}}))(Object(g.g)(I)),w=a(127),N=a(128),P=a(129),k=a(130),L=a(131),T=a(135),U=a(132),x=a(48),A=(a(98),Object(w.a)((function(e){return{root:{width:"80%",margin:"auto",marginTop:"5px"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",margin:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:"lightskyblue"}}})));var D=Object(g.g)((function(e){var t=A();return e.posts.map((function(a,n){return s.a.createElement(N.a,{className:t.root,key:n},s.a.createElement("div",{className:"card-container"},s.a.createElement(P.a,{avatar:s.a.createElement(T.a,{"aria-label":"recipe",className:t.avatar},a.username[0].toUpperCase()),title:"".concat(a.titleValue," writed by ").concat(a.username," "),subheader:a.edited?"".concat(a.time," edited at ").concat(a.edited):a.time}),s.a.createElement(k.a,null,s.a.createElement(x.a,{variant:"body2",color:"textSecondary",component:"p"},a.postValue)),s.a.createElement(L.a,{disableSpacing:!0},s.a.createElement(U.a,{"aria-label":"share",color:"primary",disabled:!1===e.isLoggedIn,onClick:function(){return e.history.push("/simple-blog/post/edit:".concat(a.postId))}},"Edit"))))}))})),J=a(44),M=a.n(J),W=a(45),F=a.n(W),R=a(71),G=a.n(R),q=a(47),B=a(46),H=(a(65),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).changeEditStatus=function(){a.setState({isCommentEditing:!a.state.isCommentEditing},a.props.changeCommentValue(a.props.item.id,a.state.commentValue))},a.handleCommentOnChange=function(e){a.setState({commentValue:e.target.value})},a.state={isCommentEditing:!1,commentValue:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=(e.post,e.item),n=(e.loginedUser,this.state),o=n.isCommentEditing,r=n.commentValue;return console.log("new commentValue --",r),s.a.createElement(N.a,{className:t.root},s.a.createElement("div",{className:t.mainCard},s.a.createElement("div",null,s.a.createElement(P.a,{avatar:s.a.createElement(T.a,{"aria-label":"recipe",style:{backgroundColor:q.a[300]}},a.username[0].toUpperCase()),title:"".concat(a.commentTime," writed by ").concat(a.username," ")}),s.a.createElement(k.a,null,o?s.a.createElement(S.a,{id:"outlined-basic",label:"Write a post",variant:"outlined",defaultValue:a.commentValue,onChange:this.handleCommentOnChange}):s.a.createElement(x.a,{variant:"body2",color:"textSecondary",component:"p"},r||a.commentValue))),s.a.createElement("div",null,s.a.createElement(L.a,{disableSpacing:!0},s.a.createElement(U.a,{"aria-label":"share",onClick:this.changeEditStatus},s.a.createElement(M.a,{style:{color:q.a[500]}}))),s.a.createElement(L.a,{disableSpacing:!0},s.a.createElement(U.a,{"aria-label":"share"},s.a.createElement(F.a,{style:{color:B.a[500]}}))))))}}]),t}(s.a.Component)),_=Object(j.a)((function(e){return{root:{width:"60%",margin:"1rem auto",height:150,backgroundColor:"#f2f2f2","& > *":{margin:e.spacing(1),width:"100%"}},mainCard:{width:"80%",margin:"auto",display:"flex",justifyContent:"space-between"}}}))(Object(g.g)(H)),z=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).addComment=function(){var e={commentValue:a.state.commentValue,commentTime:a.state.commentTime(),username:a.props.loginedUser[0].username,password:a.props.loginedUser[0].password,id:a.uniqueId()};a.setState({comments:[].concat(Object(i.a)(a.state.comments),[e])},(function(){return a.addCommentToPostst(a.state.comments)}))},a.addCommentToPostst=function(e){console.log(" COMMENTS ",e),a.props.handleAddCommentToPost(a.props.post.postId,e)},a.changeCommentValue=function(e,t){var n=a.state.comments.map((function(a){return a.id===e?Object(l.a)({},a,{commentValue:t}):a}));a.props.handleAddCommentToPost(a.props.post.postId,n)},a.handleOnchange=function(e){a.setState({commentValue:e.target.value})},a.time=function(){return(new Date).toLocaleTimeString()},a.uniqueId=function(){return"_"+Math.random().toString(36).substr(2,9)},a.state={comments:a.props.post.comments,commentValue:"",commentTime:a.time},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state.comments;return console.log("POST WITH COMMENTS ---",this.state.comments),s.a.createElement("section",null,s.a.createElement("h2",{style:{marginLeft:"4rem"}},"Comment"),s.a.createElement("form",{className:t.root,noValidate:!0,autoComplete:"off"},s.a.createElement(S.a,{className:t.title,id:"standard-basic",label:"Write a Comment",onChange:this.handleOnchange}),s.a.createElement(y.a,{className:t.button,variant:"contained",color:"primary",onClick:this.addComment},"Comment")),a.map((function(t,a){return s.a.createElement(_,{post:e.props.post,item:t,key:t.id,loginedUser:e.props.loginedUser,changeCommentValue:e.changeCommentValue})})))}}]),t}(s.a.Component),K=Object(j.a)((function(e){return{root:{width:"80%",display:"flex",justifyContent:"center",margin:"1rem auto","& > *":{margin:e.spacing(3),width:"100%"}},button:{width:"auto"}}}))(Object(g.g)(z)),Q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).editPostValue=function(){a.setState({isPostValueChanging:!a.state.isPostValueChanging});var e=a.state,t=e.post,n=e.newPostValue;a.props.handleNewPostValue(t.postId,n||t.postValue)},a.onPostValueChange=function(e){a.setState({newPostValue:e.target.value?e.target.value:a.state.post.postValue})},a.handleDoneIconClick=function(){var e=a.state,t=e.post,n=e.newPostValue;a.setState({isPostValueChanging:!1}),a.props.handleNewPostValue(t.postId,n||t.postValue)},a.handleDeleteIconClick=function(){var e=a.state.post;a.props.history.push("/simple-blog/"),a.props.handlePostsFilter(e.postId)},a.state={post:a.props.posts.find((function(e){return":".concat(e.postId)===a.props.match.params.id})),isPostValueChanging:!1,newPostValue:"",loginedUser:{},buttonDisabled:!1},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.users.find((function(e){return!0===e.isOnline})),t=e.username!==this.state.post.username&&e.password!==this.state.post.password;this.setState({loginedUser:e,buttonDisabled:t})}},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.post,n=t.isPostValueChanging,o=t.newPostValue;return s.a.createElement(s.a.Fragment,null,s.a.createElement(N.a,{className:e.root},s.a.createElement("div",{className:e.mainCard},s.a.createElement(P.a,{avatar:s.a.createElement(T.a,{"aria-label":"recipe",style:{backgroundColor:q.a[300]}},a.username[0].toUpperCase()),title:"".concat(a.titleValue," writed by ").concat(a.username," "),subheader:a.time}),s.a.createElement(k.a,null,n?s.a.createElement(S.a,{id:"outlined-basic",label:"Write a post",variant:"outlined",defaultValue:o||a.postValue,onChange:this.onPostValueChange}):s.a.createElement(x.a,{variant:"body2",color:"textSecondary",component:"p"},o||a.postValue)),s.a.createElement("div",{className:"edit-btn-container"},s.a.createElement(L.a,{disableSpacing:!0},s.a.createElement(U.a,{"aria-label":"share",onClick:this.editPostValue,disabled:this.state.buttonDisabled},s.a.createElement(M.a,{style:{color:q.a[500]}}))),s.a.createElement(L.a,{disableSpacing:!0},s.a.createElement(U.a,{"aria-label":"share",onClick:this.handleDeleteIconClick,disabled:this.state.buttonDisabled},s.a.createElement(F.a,{style:{color:B.a[500]}}))),s.a.createElement(L.a,{disableSpacing:!0},s.a.createElement(U.a,{"aria-label":"share",onClick:this.handleDoneIconClick},s.a.createElement(G.a,{color:"primary"})))))),s.a.createElement(K,{post:a,loginedUser:this.props.loginedUser,handleAddCommentToPost:this.props.handleAddCommentToPost}))}}]),t}(s.a.Component),X=Object(j.a)((function(e){return{root:{width:"80%",margin:"auto","& > *":{margin:e.spacing(1),width:"100%"}},mainCard:{width:"80%",margin:"auto"}}}))(Object(g.g)(Q)),Y=a(36),Z=a(134);function $(){return Math.round(20*Math.random())-10}function ee(){var e=50+$(),t=50+$();return{top:"".concat(e,"%"),left:"".concat(t,"%"),transform:"translate(-".concat(e,"%, -").concat(t,"%)")}}var te=Object(w.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)}}}));var ae=Object(g.g)((function(e){var t=te(),a=s.a.useState(ee),n=Object(Y.a)(a,1)[0],o=s.a.useState(!0),r=Object(Y.a)(o,2),i=r[0],l=r[1],c=function(){l(!1)};return s.a.createElement("div",null,s.a.createElement(Z.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:i,onClose:c},s.a.createElement("div",{style:n,className:t.paper},s.a.createElement("h2",{id:"simple-modal-title"},"Log Out"),s.a.createElement("p",{id:"simple-modal-description"},"Are you sure ?"),s.a.createElement(y.a,{variant:"contained",color:"primary",onClick:function(){e.changeAllUsersStatusToOffline(),c(),e.history.push("/simple-blog/verify")}},"Log out"))))})),ne=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).time=function(){return(new Date).toLocaleTimeString()},e.handleAddPost=function(t){var a=[Object(l.a)({},t,{postId:e.state.postId+1})].concat(Object(i.a)(e.state.posts));e.setState({posts:a,postId:e.state.postId+1}),localStorage.setItem("postId",e.state.postId),localStorage.setItem("posts",JSON.stringify(a))},e.changeLoginStatus=function(){localStorage.setItem("users",JSON.stringify(e.state.users));var t=e.state.users.some((function(e){return!0===e.isOnline}));e.setState({isLoggedIn:t}),localStorage.setItem("isLoggedIn",t)},e.changeAllUsersStatusToOffline=function(){e.setState({users:e.state.users.map((function(e){return Object(l.a)({},e,{isOnline:!1})}))},(function(){return e.changeLoginStatus()}))},e.changeLoggedUserStatusToOnline=function(t){e.setState({users:e.state.users.map((function(e){return e.username===t.username?Object(l.a)({},e,{isOnline:!0}):e})),isLoggedIn:!0})},e.handleUserInfo=function(t,a,n){e.setState((function(e){return{isLoggedIn:!0,users:[].concat(Object(i.a)(e.users),[{username:t,password:a,isOnline:n}])}}),(function(){return localStorage.setItem("users",JSON.stringify(e.state.users),e.changeLoginStatus())}),localStorage.setItem("isLoggedIn",e.state.isLoggedIn))},e.handleNewPostValue=function(t,a){var n=e.state.posts.map((function(n){return n.postId===t?(console.log("yes"),Object(l.a)({},n,{postValue:a,edited:e.time()})):n}));localStorage.setItem("posts",JSON.stringify(n)),e.setState({posts:n})},e.handlePostsFilter=function(t){e.setState((function(e){return{posts:e.posts.filter((function(e){return e.postId!==t}))}}),(function(){return localStorage.setItem("posts",JSON.stringify(e.state.posts))}))},e.handleAddCommentToPost=function(t,a){var n=e.state.posts.map((function(e){return e.postId==t&&(e.comments=a),e}));e.setState({posts:n}),localStorage.setItem("posts",JSON.stringify(n))},e.state={isLoggedIn:localStorage.getItem("isLoggedIn")||!1,posts:JSON.parse(localStorage.getItem("posts")||"[]"),users:JSON.parse(localStorage.getItem("users")||"[]"),postId:+localStorage.getItem("postId")||0},e}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isLoggedIn,a=e.posts,n=e.users,o=n.filter((function(e){return!0===e.isOnline}));return s.a.createElement("div",{className:"app"},s.a.createElement(v,{isLoggedIn:this.state.isLoggedIn,changeRegistrationStatus:this.changeRegistrationStatus}),s.a.createElement(g.d,null,s.a.createElement(g.b,{path:"/simple-blog/log-out-modal",exact:!0},s.a.createElement(ae,{changeAllUsersStatusToOffline:this.changeAllUsersStatusToOffline,changeLoginStatus:this.changeLoginStatus})),s.a.createElement(g.b,{path:"/simple-blog/verify"},s.a.createElement(C,{users:this.state.users,changeLoggedUserStatusToOnline:this.changeLoggedUserStatusToOnline,handleUserInfo:this.handleUserInfo})),s.a.createElement(g.b,{path:"/simple-blog/create"},t?s.a.createElement(V,{handleAddPost:this.handleAddPost,users:n}):s.a.createElement(g.a,{to:"/simple-blog/verify"})),s.a.createElement(g.b,{path:"/simple-blog",exact:!0},a.length?s.a.createElement(D,{posts:a,isLoggedIn:this.state.isLoggedIn}):s.a.createElement(b,{isLoggedIn:t})),s.a.createElement(g.b,{path:"/simple-blog/post/edit:id",exact:!0},s.a.createElement(X,{users:n,posts:a,handleNewPostValue:this.handleNewPostValue,handlePostsFilter:this.handlePostsFilter,loginedUser:o,handleAddCommentToPost:this.handleAddCommentToPost}))))}}]),t}(s.a.Component);r.a.render(s.a.createElement(f.a,null,s.a.createElement(ne,null)),document.getElementById("root"))},65:function(e,t,a){},82:function(e,t,a){e.exports=a(100)},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},95:function(e,t,a){},96:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.9caeab45.chunk.js.map