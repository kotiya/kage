
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports=webpackJsonp([2],{132:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),r=a(l),u=n(11),o=n(18),i=a(o),d=n(10),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(d),c=n(7),f=function(e){var t=e.signInWithGithub,n=e.signInWithGoogle;e.signInWithTwitter;return r.default.createElement("div",null,r.default.createElement(h,null,r.default.createElement(g,null,"or")),r.default.createElement(c.FlexRow,{center:!0},r.default.createElement("div",null,r.default.createElement(p,{onClick:t},r.default.createElement(m,{alt:"",height:"18",width:"18",src:"/static/github-icon.svg"}),"Sign in with Github"),r.default.createElement(p,{onClick:n},r.default.createElement(m,{alt:"",height:"18",width:"18",src:"/static/google-icon.svg"}),"Sign in with Google"))))},p=(0,i.default)(c.Button).withConfig({displayName:"SignInWithProviderContainer__Button",componentId:"vs2kzn-0"})(["margin:15px 15px 5px 0;padding-bottom:7px;padding-top:9px;"]),m=i.default.img.withConfig({displayName:"SignInWithProviderContainer__Icon",componentId:"vs2kzn-1"})(["margin:-3px 14px 0 -4px;"]),g=i.default.span.withConfig({displayName:"SignInWithProviderContainer__Or",componentId:"vs2kzn-2"})(["background-color:white;padding:0 10px;position:absolute;left:calc(50% - 20px);top:-13px;"]),h=i.default.div.withConfig({displayName:"SignInWithProviderContainer__Separator",componentId:"vs2kzn-3"})(["border-bottom:1px solid #ccc;margin-bottom:10px;margin-top:20px;position:relative;"]);t.default=(0,u.connect)(function(e){return{}},{signInWithGithub:s.signInWithGithub,signInWithGoogle:s.signInWithGoogle,signInWithTwitter:s.signInWithTwitter})(f)},133:function(e,t,n){"use strict";function a(e){switch(e.arrayFormat){case"index":return function(t,n,a){return null===n?[r(t,e),"[",a,"]"].join(""):[r(t,e),"[",r(a,e),"]=",r(n,e)].join("")};case"bracket":return function(t,n){return null===n?r(t,e):[r(t,e),"[]=",r(n,e)].join("")};default:return function(t,n){return null===n?r(t,e):[r(t,e),"=",r(n,e)].join("")}}}function l(e){var t;switch(e.arrayFormat){case"index":return function(e,n,a){if(t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),!t)return void(a[e]=n);void 0===a[e]&&(a[e]={}),a[e][t[1]]=n};case"bracket":return function(e,n,a){return t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0===a[e]?void(a[e]=[n]):void(a[e]=[].concat(a[e],n)):void(a[e]=n);};default:return function(e,t,n){if(void 0===n[e])return void(n[e]=t);n[e]=[].concat(n[e],t)}}}function r(e,t){return t.encode?t.strict?o(e):encodeURIComponent(e):e}function u(e){return Array.isArray(e)?e.sort():"object"==typeof e?u(Object.keys(e)).sort(function(e,t){return Number(e)-Number(t)}).map(function(t){return e[t]}):e}var o=n(321),i=n(86);t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){t=i({arrayFormat:"none"},t);var n=l(t),a=Object.create(null);return "string"!=typeof e?a:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach(function(e){var t=e.replace(/\+/g," ").split("="),l=t.shift(),r=t.length>0?t.join("="):void 0;r=void 0===r?null:decodeURIComponent(r),n(decodeURIComponent(l),r,a)}),Object.keys(a).sort().reduce(function(e,t){var n=a[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=u(n):e[t]=n,e},Object.create(null))):a;},t.stringify=function(e,t){t=i({encode:!0,strict:!0,arrayFormat:"none"},t);var n=a(t);return e?Object.keys(e).sort().map(function(a){var l=e[a];if(void 0===l)return"";if(null===l)return r(a,t);if(Array.isArray(l)){var u=[];return l.slice().forEach(function(e){void 0!==e&&u.push(n(a,e,u.length))}),u.join("&")}return r(a,t)+"="+r(l,t)}).filter(function(e){return e.length>0}).join("&"):""}},134:function(e,t,n){"use strict";function a(e){var t=e.split("-").map(function(e){return parseInt(e,10)}),n=(0,o.default)(t,3),a=n[0],l=n[1],r=n[2];return new Date(a,l-1,r).getTime()}function l(e){var t=new Date(e);return t.getFullYear()+"/"+(t.getMonth()+1)+"/"+t.getDate()}function r(e){var t=new Date(e),n=t.getFullYear(),a=t.getMonth()+1,l=t.getDate();return n+"-"+(a<10?"0":"")+a+"-"+(l<10?"0":"")+l}Object.defineProperty(t,"__esModule",{value:!0}),t.getTimestamp=a,t.formatDate=l,t.formatInputDate=r;var u=n(28),o=function(e){return e&&e.__esModule?e:{default:e}}(u)},135:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(9),r=a(l),u=n(0),o=a(u),i=n(66),d=function(e){var t=e.checked,n=e.children,a=e.color,l=e.onClick,u=e.style,d=void 0===u?{}:u,s=e.tabIndex;return o.default.createElement("div",{style:(0,r.default)({position:"relative"},d)},o.default.createElement("div",{onClick:l,onKeyUp:function(e){return 32===e.keyCode&&l(e)},style:{position:"absolute",top:1,left:0},tabIndex:s},t?o.default.createElement(i.CheckboxIcon,{fill:a}):o.default.createElement(i.BoxIcon,{stroke:a})),o.default.createElement("div",{style:{marginLeft:20}},n))};t.default=d},313:function(e,t,n){e.exports=n(314)},314:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(9),r=a(l),u=n(3),o=a(u),i=n(1),d=a(i),s=n(2),c=a(s),f=n(4),p=a(f),m=n(5),g=a(m),h=n(0),v=a(h),y=n(44),E=a(y),_=n(315),b=a(_),k=n(317),C=a(k),x=n(318),w=a(x),I=n(319),S=a(I),T=n(320),M=a(T),j=n(323),O=a(j),A=n(327),D=a(A),P=n(7),N=n(45),F=a(N),U={sort:"updatedAt:desc",status:"all",tag:"all"},R=function(e){function t(){return(0,d.default)(this,t),(0,p.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,g.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=(0,r.default)({},U,this.props.url.query);return v.default.createElement(E.default,{isIndex:!0},v.default.createElement(b.default,null),v.default.createElement(C.default,null),v.default.createElement(w.default,null),v.default.createElement(M.default,{query:e}),v.default.createElement(P.FlexRow,{between:!0,vbottom:!0,mb:5},v.default.createElement(S.default,{query:e}),v.default.createElement(D.default,{query:e})),v.default.createElement(O.default,{query:e}))}}]),t}(v.default.Component);t.default=(0,F.default)(R)},315:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(12),u=l(r),o=n(13),i=l(o),d=n(21),s=l(d),c=n(3),f=l(c),p=n(1),m=l(p),g=n(2),h=l(g),v=n(4),y=l(v),E=n(5),_=l(E),b=n(0),k=l(b),C=n(11),x=n(10),w=a(x),I=n(16),S=a(I),T=n(64),M=l(T),j=n(132),O=l(j),A=n(33),D=l(A),P=n(7),N=function(e){function t(){var e,n,a,l,r=this;(0,m.default)(this,t);for(var o=arguments.length,d=Array(o),c=0;c<o;c++)d[c]=arguments[c];return n=a=(0,y.default)(this,(e=t.__proto__||(0,f.default)(t)).call.apply(e,[this].concat(d))),a.state={email:"",password:""},a.handleChange=function(e){return a.setState((0,s.default)({},e.target.name,e.target.value))},a.handleSignIn=function(){var e=(0,i.default)(u.default.mark(function e(t){var n,l,o,i,d;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.props.signIn,l=a.state,o=l.email,i=l.password,e.next=5,n(o,i);case 5:d=e.sent,d&&a.setState({email:"",password:""});case 7:case"end":return e.stop()}},e,r)}));return function(t){return e.apply(this,arguments)}}(),l=n,(0,y.default)(a,l)}return(0,_.default)(t,e),(0,h.default)(t,[{key:"componentDidUpdate",value:function(e){"signin"===this.props.selectedModal&&"signin"!==e.selectedModal&&this.email.focus()}},{key:"render",value:function(){var e=this,t=this.props,n=t.hideModal,a=t.selectedModal,l=t.status,r=this.state,u=r.email,o=r.password;return k.default.createElement(P.Modal,{isOpen:"signin"===a,toggle:n},k.default.createElement(P.ModalHeader,{toggle:n},"Sign In"),k.default.createElement(P.ModalBody,null,k.default.createElement(P.Form,{onSubmit:this.handleSignIn},k.default.createElement(P.FormGroup,null,k.default.createElement(P.AuthLabel,null,"Email"),k.default.createElement(P.Input,{name:"email",onChange:this.handleChange,getRef:function(t){return e.email=t},type:"email",value:u})),k.default.createElement(P.FormGroup,null,k.default.createElement(P.AuthLabel,null,"Password"),k.default.createElement(P.Input,{name:"password",onChange:this.handleChange,type:"password",value:o})),k.default.createElement("p",null,k.default.createElement(M.default,{href:"/password-reset"},k.default.createElement(P.A,null,"Forgot password?"))),k.default.createElement(P.FlexRow,null,k.default.createElement(P.ButtonPrimary,{disabled:l.loading,color:"primary"},"Sign in"),k.default.createElement(D.default,{status:l,messages:{loading:"Signing in...",success:"Signed in"}})),k.default.createElement(O.default,null))))}}]),t}(k.default.Component);t.default=(0,C.connect)(function(e){return{selectedModal:S.getSelectedModal(e),status:S.getSignInStatus(e)}},{hideModal:w.hideModal,signIn:w.signIn})(N)},317:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(12),u=l(r),o=n(13),i=l(o),d=n(21),s=l(d),c=n(3),f=l(c),p=n(1),m=l(p),g=n(2),h=l(g),v=n(4),y=l(v),E=n(5),_=l(E),b=n(0),k=l(b),C=n(11),x=n(10),w=a(x),I=n(16),S=a(I),T=n(132),M=l(T),j=n(33),O=l(j),A=n(7),D=function(e){function t(){var e,n,a,l,r=this;(0,m.default)(this,t);for(var o=arguments.length,d=Array(o),c=0;c<o;c++)d[c]=arguments[c];return n=a=(0,y.default)(this,(e=t.__proto__||(0,f.default)(t)).call.apply(e,[this].concat(d))),a.state={email:"",password:"",username:""},a.handleChange=function(e){return a.setState((0,s.default)({},e.target.name,e.target.value))},a.handleSubmit=function(){var e=(0,i.default)(u.default.mark(function e(t){var n,l,o,i,d,s,c,f,p,m,g,h,v;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=a.props,l=n.createUser,o=n.currentUser,i=n.linkAnonymousUser,d=n.retrieveTasks,s=n.signUp,c=n.storeAuth,f=a.state,p=f.email,m=f.password,g=void 0,!o){e.next=14;break}return e.next=7,i(p,m);case 7:return g=e.sent,e.next=10,c(g);case 10:h=e.sent,d(h),e.next=17;break;case 14:return e.next=16,s(p,m);case 16:g=e.sent;case 17:g&&(v="user"+Date.now().toString(),l(g,v),a.setState({email:"",password:""}));case 18:case"end":return e.stop()}},e,r)}));return function(t){return e.apply(this,arguments)}}(),l=n,(0,y.default)(a,l)}return(0,_.default)(t,e),(0,h.default)(t,[{key:"componentDidUpdate",value:function(e){"signup"===this.props.selectedModal&&"signup"!==e.selectedModal&&this.email.focus()}},{key:"render",value:function(){var e=this,t=this.props,n=t.hideModal,a=t.selectedModal,l=t.status,r=this.state,u=r.email,o=r.password;r.username;return k.default.createElement(A.Modal,{isOpen:"signup"===a,toggle:n},k.default.createElement(A.ModalHeader,{toggle:n},"Sign Up"),k.default.createElement(A.ModalBody,null,k.default.createElement(A.Form,{onSubmit:this.handleSubmit},k.default.createElement(A.FormGroup,null,k.default.createElement(A.AuthLabel,null,"Email"),k.default.createElement(A.Input,{name:"email",getRef:function(t){return e.email=t},onChange:this.handleChange,type:"email",value:u})),!1,k.default.createElement(A.FormGroup,null,k.default.createElement(A.AuthLabel,null,"Password"),k.default.createElement(A.Input,{name:"password",type:"password",value:o,onChange:this.handleChange})),k.default.createElement(A.FlexRow,null,k.default.createElement(A.ButtonPrimary,{disabled:l.loading},"Submit"),k.default.createElement(O.default,{status:l,messages:{loading:"Signing up...",success:"Signed up"}})),k.default.createElement(M.default,null))))}}]),t}(k.default.Component);t.default=(0,C.connect)(function(e){return{currentUser:S.getCurrentUser(e),selectedModal:S.getSelectedModal(e),status:S.getSignUpStatus(e)}},{createUser:w.createUser,hideModal:w.hideModal,linkAnonymousUser:w.linkAnonymousUser,retrieveTasks:w.retrieveTasks,signUp:w.signUp,storeAuth:w.storeAuth})(D)},318:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function l(e){return e&&e.__esModule?e:{default:e}}function r(e){return!!e}Object.defineProperty(t,"__esModule",{value:!0});var u=n(12),o=l(u),i=n(13),d=l(i),s=n(21),c=l(s),f=n(3),p=l(f),m=n(1),g=l(m),h=n(2),v=l(h),y=n(4),E=l(y),_=n(5),b=l(_),k=n(0),C=l(k),x=n(11),w=n(18),I=l(w),S=n(10),T=a(S),M=n(16),j=a(M),O=n(33),A=l(O),D=n(7),P=function(e){function t(){var e,n,a,l,u=this;(0,g.default)(this,t);for(var i=arguments.length,s=Array(i),f=0;f<i;f++)s[f]=arguments[f];return n=a=(0,E.default)(this,(e=t.__proto__||(0,p.default)(t)).call.apply(e,[this].concat(s))),a.state={isValid:!0,tagsString:"",text:""},a.handleTextChange=function(e){return a.setState((0,c.default)({},e.target.name,e.target.value))},a.handleSubmit=function(){var e=(0,d.default)(o.default.mark(function e(t){var n,l,i,d,s,c,f;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n=a.props,l=n.auth,i=n.createTask,d=a.state,s=d.tagsString,c=d.text,f=s.trim()?s.trim().split(" "):[],!r(c)){e.next=11;break}return e.next=7,i(c,f,l);case 7:a.setState({tagsString:"",text:""}),a.textInput.focus(),e.next=12;break;case 11:a.setState({isValid:!1});case 12:case"end":return e.stop()}},e,u)}));return function(t){return e.apply(this,arguments)}}(),l=n,(0,E.default)(a,l)}return(0,b.default)(t,e),(0,v.default)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.auth,a=t.createStatus,l=t.signInStatus,r=this.state,u=r.isValid,o=r.tagsString,i=r.text;return C.default.createElement(D.Form,{onSubmit:this.handleSubmit},C.default.createElement(D.Row,null,C.default.createElement(D.Col,{sm:9},C.default.createElement(F,{color:u?null:"danger"},C.default.createElement(N,{autoFocus:!0,getRef:function(t){return e.textInput=t},onChange:function(t){return e.setState({text:t.target.value})},onFocus:function(){return e.setState({isValid:!0})},type:"textarea",value:i}))),C.default.createElement(D.Col,{sm:3,xs:12},C.default.createElement(F,null,C.default.createElement(D.TaskLabel,null,"tags ",C.default.createElement(U,null,"(optional)")),C.default.createElement(N,{name:"tagsString",onChange:this.handleTextChange,type:"text",value:o})))),C.default.createElement(D.FlexRow,null,C.default.createElement(D.ButtonPrimary,{disabled:l.loading||a.loading},"Add task"),C.default.createElement("div",null,!n.uid&&C.default.createElement(A.default,{status:l,messages:{loading:"Creating temporary account...",success:"Account created"}}),C.default.createElement(A.default,{status:a,messages:{loading:"Saving...",success:"Task added"}}))))}}]),t}(C.default.Component),N=(0,I.default)(D.Input).withConfig({displayName:"TaskAddContainer__Input",componentId:"s14uh9y7-0"})(["margin-bottom:10px;"]),F=(0,I.default)(D.FormGroup).withConfig({displayName:"TaskAddContainer__FormGroup",componentId:"s14uh9y7-1"})(["margin-bottom:0;"]),U=I.default.span.withConfig({displayName:"TaskAddContainer__Optional",componentId:"s14uh9y7-2"})(["color:#999;font-weight:normal;font-style:italic;"]);t.default=(0,x.connect)(function(e){return{auth:j.getAuth(e),createStatus:j.getCreateTaskStatus(e),signInStatus:j.getSignInAnonymouslyStatus(e),token:j.getToken(e)}},{createTask:T.createTask})(P)},319:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(0),r=a(l),u=n(11),o=n(16),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(o),d=n(18),s=a(d),c=function(e){var t=e.count,n=e.totalCount,a=r.default.createElement("span",null,"showing ",r.default.createElement("b",null,t)," of ",r.default.createElement("b",null,n)," items");return 0===n?a=null:1===n&&1===t?a=r.default.createElement("span",null,"showing the ",r.default.createElement("b",null,"1")," and only item"):t===n&&(a=r.default.createElement("span",null,"showing all ",r.default.createElement("b",null,t)," items")),r.default.createElement(f,null,a)},f=s.default.div.withConfig({displayName:"TaskCountContainer__Container",componentId:"s1o2zae3-0"})(["font-size:12px;text-align:center;"]);t.default=(0,u.connect)(function(e,t){return{count:i.getFilteredTasks(e,t).length,totalCount:i.getTotalCount(e)}})(c)},320:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return function(n){var a=(0,i.default)({},e,(0,u.default)({},t,n));f.default.push("/?"+m.default.stringify(a))}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(21),u=a(r),o=n(9),i=a(o),d=n(43),s=a(d),c=n(27),f=a(c),p=n(133),m=a(p),g=n(0),h=a(g),v=n(11),y=n(16),E=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(y),_=n(64),b=a(_),k=n(322),C=a(k),x=n(7),w=function(e){var t=e.query,n=e.query,a=n.status,r=n.tag,u=e.tags;return 0===e.totalCount?null:h.default.createElement("div",null,h.default.createElement("hr",null),h.default.createElement(x.FlexRow,{center:!0,vbottom:!0,wrap:!0,mb:10},h.default.createElement(x.Div,{mx:10,pb:5},h.default.createElement(x.TaskLabel,null,"status"),h.default.createElement(C.default,{onChange:l(t,"status"),options:["all","active","completed"].map(function(e){return[e,e]}),selected:a})),h.default.createElement(x.Div,{mx:10,pb:5},h.default.createElement(x.TaskLabel,null,"tag"),h.default.createElement(C.default,{onChange:l(t,"tag"),options:["all"].concat((0,s.default)(u)).map(function(e){return[e,e]}),selected:r})),h.default.createElement(x.Div,{mx:10,pb:20},h.default.createElement(b.default,{href:"/"},h.default.createElement(x.A,null,h.default.createElement(x.Span,{bold:!0,fs:12},"reset all"))))))};t.default=(0,v.connect)(function(e){return{tags:E.getTags(e),totalCount:E.getTotalCount(e)}})(w)},321:function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()});}},322:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(28),r=a(l),u=n(3),o=a(u),i=n(1),d=a(i),s=n(2),c=a(s),f=n(4),p=a(f),m=n(5),g=a(m),h=n(0),v=a(h),y=n(18),E=a(y),_=n(65),b=n(7),k=function(e){function t(){return(0,d.default)(this,t),(0,p.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,g.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){var e=this.props,t=e.onChange,n=e.options,a=e.selected;return v.default.createElement("div",null,n.map(function(e){var n=(0,r.default)(e,2),l=n[0],u=n[1];return v.default.createElement(C,{key:l,onClick:function(){return t(l)},size:"sm",style:a===l?{border:"2px solid "+_.COLORS.primary,zIndex:1}:{}},u)}))}}]),t}(v.default.Component);t.default=k;var C=(0,E.default)(b.Button).withConfig({displayName:"RadioButtons__Button",componentId:"s1qfvbyu-0"})(["margin-left:-1px;margin-bottom:10px;position:relative;"])},323:function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.TaskListContainer=void 0;var r=n(0),u=l(r),o=n(11),i=n(10),d=a(i),s=n(16),c=a(s),f=n(324),p=l(f),m=n(325),g=l(m),h=n(326),v=l(h),y=n(33),E=l(y),_=t.TaskListContainer=function(e){var t=e.auth,n=e.clearAllStatus,a=e.deleteTask,l=e.editTask,r=e.editingId,o=e.tasks,i=(e.query,e.status),d=e.updateTask,s=e.updatingId;return u.default.createElement("div",null,o.map(function(e){return u.default.createElement("div",{key:e.id,style:{position:"relative"}},e.id===s&&u.default.createElement(E.default,{messages:{loading:"Saving...",success:"Saved!"},minWidth:"90px",onHide:n,status:i,style:{position:"absolute",top:5,left:9,zIndex:3}}),u.default.createElement(p.default,{onClick:function(){return l(null)},style:{zIndex:1},show:e.id===r}),u.default.createElement(v.default,{task:e,onCancel:function(){return l(null)},onDelete:function(){return a(e.id,t)},onSubmit:function(n){return d(e.id,n,t)},show:e.id===r,status:i}),u.default.createElement(g.default,{task:e,onBump:function(){return d(e.id,{},t)},onDelete:function(){return a(e.id,t)},onEdit:function(){return l(e.id)},onToggle:function(){return d(e.id,{completed:!e.completed},t)},show:e.id!==r}))}))};t.default=(0,o.connect)(function(e,t){return{auth:c.getAuth(e),editingId:c.getEditingId(e),tasks:c.getFilteredTasks(e,t),status:c.getUpdateTaskStatus(e),updatingId:c.getUpdatingId(e)}},{clearAllStatus:d.clearAllStatus,deleteTask:d.deleteTask,editTask:d.editTask,updateTask:d.updateTask})(_)},324:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(9),r=a(l),u=n(3),o=a(u),i=n(1),d=a(i),s=n(2),c=a(s),f=n(4),p=a(f),m=n(5),g=a(m),h=n(0),v=a(h),y=function(e){function t(){var e,n,a,l;(0,d.default)(this,t);for(var r=arguments.length,u=Array(r),i=0;i<r;i++)u[i]=arguments[i];return n=a=(0,p.default)(this,(e=t.__proto__||(0,o.default)(t)).call.apply(e,[this].concat(u))),a.state={mounted:!1,opacity:0},a.DURATION=300,l=n,(0,p.default)(a,l)}return(0,g.default)(t,e),(0,c.default)(t,[{key:"componentWillReceiveProps",value:function(e){var t=this;e.show!==this.props.show&&(e.show?(this.setState({mounted:!0,opacity:0}),window.setTimeout(function(){t.setState({opacity:.4})},0)):(this.setState({opacity:0}),window.setTimeout(function(){t.setState({mounted:!1})},this.DURATION)))}},{key:"render",value:function(){var e=this.props,t=e.onClick,n=e.style,a=void 0===n?{}:n,l=this.state,u=l.mounted,o=l.opacity;return u?v.default.createElement("div",{onClick:t,style:(0,r.default)({position:"fixed",top:0,bottom:0,left:0,right:0,backgroundColor:"#000",opacity:o,transition:"opacity "+this.DURATION+"ms",zIndex:1},a)}):null}}]),t}(v.default.Component);t.default=y},325:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e){var t=e.match(/(.*)(https?:\/\/\S*)( |$)(.*)/);if(!t)return e;var n=(0,u.default)(t,5),a=n[1],l=n[2],r=n[3],o=n[4];return i.default.createElement("span",null,a,i.default.createElement(y,{href:l,target:"_blank"},l),r,o)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(28),u=a(r),o=n(0),i=a(o),d=n(18),s=a(d),c=n(65),f=n(134),p=n(135),m=a(p),g=n(7),h=n(66),v=function(e){var t=e.onBump,n=e.onDelete,a=e.onEdit,r=e.onToggle,u=e.show,o=e.task;return u?i.default.createElement(d.ThemeProvider,{theme:{isDeleted:o.isDeleted}},i.default.createElement(C,{onDoubleClick:function(e){e.preventDefault(),a()}},i.default.createElement(E,null,i.default.createElement(g.FlexRow,{between:!0,vtop:!0},i.default.createElement(b,null,"Created: ",(0,f.formatDate)(o.createdAt),o.completedAt&&i.default.createElement(g.Span,{ml:20},"Completed: ",(0,f.formatDate)(o.completedAt))),i.default.createElement("div",null,i.default.createElement(w,{onClick:t,title:"bump the updated timestamp for sorting purposes"},"Bump"),i.default.createElement(_,{title:"edit (or double-click task)"},i.default.createElement(h.PencilIcon,{onClick:a})),i.default.createElement(_,{title:"delete"},i.default.createElement(h.XIcon,{onClick:n})))),i.default.createElement(m.default,{checked:o.completed,color:o.isDeleted?"red":void 0,onClick:r},o.tags&&i.default.createElement(k,null,o.tags.join(" ")," - "),i.default.createElement(x,null,l(o.text)))))):null},y=(0,s.default)(g.A).withConfig({displayName:"Task__A",componentId:"s1kh7x7c-0"})(["",";"],function(e){return e.theme.isDeleted&&"color: rgba(255, 0, 0, 0.8) !important;"}),E=(0,s.default)(g.CardBlock).withConfig({displayName:"Task__CardBlock",componentId:"s1kh7x7c-1"})(["padding:12px 5px 15px 20px;"]),_=s.default.span.withConfig({displayName:"Task__IconWrapper",componentId:"s1kh7x7c-2"})(["margin-right:15px;"]),b=s.default.div.withConfig({displayName:"Task__Metadata",componentId:"s1kh7x7c-3"})(["color:",";font-size:10px;"],function(e){return e.theme.isDeleted?"rgba(255, 0, 0, 0.8)":"#999"}),k=s.default.span.withConfig({displayName:"Task__Tags",componentId:"s1kh7x7c-4"})(["color:",";font-size:12px;font-weight:400;text-transform:uppercase;"],function(e){return e.theme.isDeleted?"rgba(255, 0, 0, 0.8)":"#292b2c"}),C=(0,s.default)(g.Card).withConfig({displayName:"Task__TaskCard",componentId:"s1kh7x7c-5"})(["background-color:",";border-color:",";margin-bottom:15px;"],function(e){return e.theme.isDeleted?"rgba(255, 0, 0, 0.04)":"white"},function(e){return e.theme.isDeleted?"rgba(255, 0, 0, 0.8)":"rgba(0, 0, 0, 0.121569)"}),x=s.default.span.withConfig({displayName:"Task__Text",componentId:"s1kh7x7c-6"})(["color:",";font-weight:200;overflow-wrap:break-word;white-space:pre-line;"],function(e){return e.theme.isDeleted?"rgba(255, 0, 0, 0.8)":"#292b2c"}),w=s.default.span.withConfig({displayName:"Task__ToBeIcon",componentId:"s1kh7x7c-7"})(["color:",";cursor:pointer;font-size:12px;font-weight:600;margin-right:20px;vertical-align:2px;"],function(e){return e.theme.isDeleted?"rgba(255, 0, 0, 0.8)":c.COLORS.primary});t.default=v},326:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(21),r=a(l),u=n(3),o=a(u),i=n(1),d=a(i),s=n(2),c=a(s),f=n(4),p=a(f),m=n(5),g=a(m),h=n(0),v=a(h),y=n(18),E=a(y),_=n(134),b=n(135),k=a(b),C=n(7),x=function(e){function t(){var e,n,a,l;(0,d.default)(this,t);for(var u=arguments.length,i=Array(u),s=0;s<u;s++)i[s]=arguments[s];return n=a=(0,p.default)(this,(e=t.__proto__||(0,o.default)(t)).call.apply(e,[this].concat(i))),a.state={},a.handleTextChange=function(e){return a.setState((0,r.default)({},e.target.name,e.target.value))},a.handleCheckboxClick=function(){var e=a.state,t=e.completed,n=e.completedAt;n=n||Date.now(),a.setState({completed:!t,completedAt:t?null:n})},a.handleDateChange=function(e){var t=(0,_.getTimestamp)(e.target.value);a.setState({completed:!!t,completedAt:t})},a.handleSubmit=function(e){e.preventDefault();var t=a.props.onSubmit,n=a.state,l=n.completed,r=n.completedAt,u=n.tagsString,o=n.text,i=u.trim()?u.trim().split(" "):[];t({completed:l,completedAt:r||null,tags:i,text:o})},l=n,(0,p.default)(a,l)}return(0,g.default)(t,e),(0,c.default)(t,[{key:"componentWillReceiveProps",value:function(e){if(!this.props.show&&e.show){var t=e.task.tags;this.setState({completed:!!e.task.completed,completedAt:e.task.completedAt||null,tagsString:t?t.join(" "):"",text:e.task.text})}}},{key:"render",value:function(){var e=this.props,t=e.onCancel,n=e.onDelete,a=e.show,l=e.status,r=this.state,u=r.completed,o=r.completedAt,i=r.tagsString,d=r.text;return a?v.default.createElement(w,null,v.default.createElement(I,null,v.default.createElement(M,null,"EDITING"),v.default.createElement(C.Form,{onSubmit:this.handleSubmit},v.default.createElement(T,{autoFocus:!0,name:"text",type:"textarea",value:d,onChange:this.handleTextChange}),v.default.createElement(C.FormGroup,{row:!0},v.default.createElement(C.Col,{md:6},v.default.createElement(C.TaskLabel,null,"completed on"),v.default.createElement(k.default,{checked:u,onClick:this.handleCheckboxClick,style:{top:5},tabIndex:"0"}),v.default.createElement(S,{onChange:this.handleDateChange,tabIndex:"-1",type:"date",value:o?(0,_.formatInputDate)(o):""})),v.default.createElement(C.Col,{md:6},v.default.createElement(C.TaskLabel,null,"tags"),v.default.createElement(C.Input,{name:"tagsString",onChange:this.handleTextChange,type:"text",value:i}))),v.default.createElement(C.FlexRow,{between:!0},v.default.createElement(C.Button,{children:"Delete",color:"danger",onClick:n,tabIndex:"-1",type:"button"}),v.default.createElement("span",null,v.default.createElement(C.Button,{children:"Cancel",onClick:t,type:"button"}),v.default.createElement(C.Span,{mr:10}),v.default.createElement(C.ButtonPrimary,{children:"Save",disabled:l.loading})))))):null}}]),t}(v.default.Component);t.default=x;var w=(0,E.default)(C.Card).withConfig({displayName:"TaskEdit__TaskEditCard",componentId:"s1u3u8sj-0"})(["margin-bottom:10px;z-index:2;"]),I=(0,E.default)(C.CardBlock).withConfig({displayName:"TaskEdit__CardBlock",componentId:"s1u3u8sj-1"})(["padding-top:10px;"]),S=(0,E.default)(C.Input).withConfig({displayName:"TaskEdit__DateInput",componentId:"s1u3u8sj-2"})(["height:38px;margin-left:30px;width:calc(100% - 30px);"]),T=(0,E.default)(C.Input).withConfig({displayName:"TaskEdit__TextInput",componentId:"s1u3u8sj-3"})(["margin-bottom:10px;"]),M=E.default.p.withConfig({displayName:"TaskEdit__Title",componentId:"s1u3u8sj-4"})(["font-weight:600;"])},327:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){var n=(0,u.default)({},t,{sort:e.target.value});i.default.push("/?"+s.default.stringify(n))}Object.defineProperty(t,"__esModule",{value:!0});var r=n(9),u=a(r),o=n(27),i=a(o),d=n(133),s=a(d),c=n(0),f=a(c),p=n(11),m=n(18),g=a(m),h=n(16),v=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(h),y=n(328),E=a(y),_=n(7),b=function(e){var t=e.count,n=e.query,a=e.query.sort;return t<2?f.default.createElement(C,null):f.default.createElement(k,null,f.default.createElement(_.FlexRow,{right:!0},f.default.createElement(_.TaskLabel,null,"sort by")),f.default.createElement(E.default,{onChange:function(e){return l(e,n)},value:a},f.default.createElement("option",{value:"createdAt:asc"},"created (ascending)"),f.default.createElement("option",{value:"createdAt:desc"},"created (descending)"),f.default.createElement("option",{value:"completedAt:asc"},"completed (ascending)"),f.default.createElement("option",{value:"completedAt:desc"},"completed (descending)"),f.default.createElement("option",{value:"updatedAt:asc"},"updated (ascending)"),f.default.createElement("option",{value:"updatedAt:desc"},"updated (descending)")))},k=g.default.div.withConfig({displayName:"TaskSorterContainer__Container",componentId:"s1pniztl-0"})(["margin-bottom:4px;"]),C=g.default.div.withConfig({displayName:"TaskSorterContainer__Spacer",componentId:"s1pniztl-1"})(["height:40px;width:100px;"]);t.default=(0,p.connect)(function(e,t){return{count:v.getFilteredTasks(e,t).length}})(b)},328:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n(9),r=a(l),u=n(0),o=a(u),i=n(18),d=a(i),s=n(7),c=n(66),f=function(e){return o.default.createElement(p,null,o.default.createElement(m,null,o.default.createElement(c.ChevronDownIcon,null)),o.default.createElement(g,(0,r.default)({size:"sm",type:"select"},e)))},p=d.default.div.withConfig({displayName:"SelectInput__Container",componentId:"bngjnk-0"})(["position:relative;"]),m=d.default.div.withConfig({displayName:"SelectInput__IconWrapper",componentId:"bngjnk-1"})(["pointer-events:none;position:absolute;right:7px;top:3px;"]),g=(0,d.default)(s.Input).withConfig({displayName:"SelectInput__Input",componentId:"bngjnk-2"})(["-webkit-appearance:none;padding-right:26px;"]);t.default=f},86:function(e,t,n){"use strict";function a(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach(function(e){a[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,o,i=a(e),d=1;d<arguments.length;d++){n=Object(arguments[d]);for(var s in n)r.call(n,s)&&(i[s]=n[s]);if(l){o=l(n);for(var c=0;c<o.length;c++)u.call(n,o[c])&&(i[o[c]]=n[o[c]])}}return i}}},[313]);
            return { page: comp.default }
          })
        