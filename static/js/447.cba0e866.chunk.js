"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[447],{7006:function(n,e,t){t.d(e,{Z:function(){return f}});t(2791);var r,o,a,i=t(7596),c=(t(5462),t(168)),s=t(7109),u=s.Z.div(r||(r=(0,c.Z)(["\n  text-align: center;\n"]))),p=s.Z.h1(o||(o=(0,c.Z)(["\n  font-size: 24px;\n  font-weight: bold;\n  margin-top: 40px;\n  margin-bottom: 16px;\n"]))),l=s.Z.button(a||(a=(0,c.Z)(["\n  padding: 8px 16px;\n  background-color: #ff4d4f;\n  color: #ffffff;\n  border: none;\n  border-radius: 4px;\n  font-size: 16px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n\n  &:hover {\n    background-color: #d63031;\n  }\n"]))),d=t(184),f=function(n){var e=n.error;return(0,d.jsxs)(u,{style:{textAlign:"center"},children:[(0,d.jsx)(p,{children:"Something went wrong!"}),(0,d.jsx)(l,{onClick:function(){i.Am.error((0,d.jsxs)(d.Fragment,{children:["Oops, an error occurred.",(0,d.jsx)("br",{}),"Please try again later.",(0,d.jsx)("br",{}),"Error: ",e]}),{position:i.Am.POSITION.TOP_CENTER,autoClose:3e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,toastId:"error-toast"})},children:"Show Error Toast"})]})}},3149:function(n,e,t){t.d(e,{Z:function(){return o}});var r=t(184),o=function(n){var e=n.img,t=null!==e&&void 0!==e?"https://image.tmdb.org/t/p/original".concat(e):"https://www.tgv.com.my/assets/images/404/movie-poster.jpg";return(0,r.jsx)("img",{src:t,alt:"Movie Poster"})}},2233:function(n,e,t){t.d(e,{Z:function(){return z}});var r,o,a,i,c,s,u,p,l=t(9439),d=t(7689),f=t(168),x=t(7109),h=t(1087),g=t(3149),v=x.Z.ul(r||(r=(0,f.Z)(["\n  display: grid;\n  width: 100%;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 16px;\n  list-style: none;\n  padding: 0;\n  margin-top: 30px;\n"]))),Z=x.Z.div(o||(o=(0,f.Z)(["\n  position: relative;\n  box-shadow: 0 2px 0 0 rgba(20, 1, 100, 0.6);\n"]))),m=(0,x.Z)(h.rU)(a||(a=(0,f.Z)(["\n  text-decoration: none;\n  color: black;\n  font-weight: bold;\n\n  &:hover {\n    color: purple;\n  }\n"]))),b=x.Z.li(i||(i=(0,f.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  transition: transform 0.3s, box-shadow 0.3s;\n  overflow: hidden;\n  border-radius: 10px;\n\n  &:hover {\n    transform: scale(1.05);\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n  }\n"]))),w=(0,x.Z)(g.Z)(c||(c=(0,f.Z)(["\n  width: 100%;\n  height: auto;\n  object-fit: cover;\n"]))),j=x.Z.h2(s||(s=(0,f.Z)(["\n  text-decoration: none;\n  color: white;\n  font-size: 14px;\n  padding: 5px;\n"]))),k=x.Z.div(u||(u=(0,f.Z)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 60px;\n  background-color: rgba(0, 0, 0, 0.4);\n\n"]))),y=x.Z.div(p||(p=(0,f.Z)(["\n  text-align: start;\n  margin-top: 8px;\n"]))),S=t(4062),_=t(2791),C=t(184),E=function(){var n=(0,_.useState)(!1),e=(0,l.Z)(n,2),t=e[0],r=e[1];(0,_.useEffect)((function(){var n=function(){r(window.scrollY>200)};return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}),[]);return(0,C.jsx)(C.Fragment,{children:t&&(0,C.jsx)("button",{style:{position:"fixed",bottom:"50px",right:"50px",width:"50px",height:"50px",borderRadius:"50%",background:"plum",border:"none",cursor:"pointer",boxShadow:"0 2px 4px 2px purple",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:"24px",fontWeight:"bold"},onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:"\u2b06"})})},z=function(n){var e=n.movies,t=(0,d.TH)(),r=(0,_.useState)(!1);return(0,l.Z)(r,1)[0]?(0,C.jsx)(S.Z,{}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(v,{children:e.map((function(n){return(0,C.jsx)(m,{state:{from:t},to:"/movies/".concat(n.id),children:(0,C.jsx)(b,{children:(0,C.jsxs)(Z,{children:[(0,C.jsx)(w,{img:n.poster_path,alt:n.title}),(0,C.jsx)(k,{children:(0,C.jsx)(y,{children:(0,C.jsx)(j,{children:n.original_title})})})]})})},n.id)}))}),(0,C.jsx)(E,{})]})}},6447:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r,o,a,i,c=t(4165),s=t(5861),u=t(9439),p=t(2791),l=t(1087),d=t(4635),f=t(2233),x=t(7006),h=t(168),g=t(7109),v=g.Z.form(r||(r=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n"]))),Z=g.Z.input(o||(o=(0,h.Z)(["\n  padding: 10px;\n  font-size: 20px;\n  border: 1px solid gray;\n  border-radius: 4px;\n  width: 50%;\n  margin-right: 10px;\n  box-shadow: 0 2px 4px 2px purple;\n\n  &:focus {\n    outline: none;\n    border: 1px solid plum;\n    box-shadow: 0 2px 4px 2px plum;\n  }\n"]))),m=g.Z.button(a||(a=(0,h.Z)(["\n  padding: 5px;\n  width: 50px;\n  font-size: 21px;\n  background-color: palegoldenrod;\n  color: black;\n  border: none;\n  border-radius: 4px;\n  transition: background-color 0.3s ease;\n  box-shadow: 0 2px 4px 2px purple;\n\n  &:hover {\n    background-color: plum;\n    color: white;\n\n  }\n  "]))),b=g.Z.span(i||(i=(0,h.Z)(["\n    font-size: 25px;\n  "]))),w=t(184),j=function(){var n=(0,p.useState)(""),e=(0,u.Z)(n,2),t=e[0],r=e[1],o=(0,l.lr)(),a=(0,u.Z)(o,2)[1];return(0,w.jsxs)(v,{onSubmit:function(n){n.preventDefault(),t.trim().length>2&&a({query:t})},children:[(0,w.jsx)(Z,{type:"text",name:"search",placeholder:"Enter movie title...",value:t,onChange:function(n){r(n.target.value)},required:!0,minLength:2}),(0,w.jsx)(m,{type:"submit",children:(0,w.jsx)(b,{children:"\ud83d\udd0d"})})]})},k=function(){var n=(0,l.lr)(),e=(0,u.Z)(n,2),t=e[0],r=e[1],o=t.get("query"),a=(0,p.useState)([]),i=(0,u.Z)(a,2),h=i[0],g=i[1],v=(0,p.useState)(!1),Z=(0,u.Z)(v,2)[1],m=(0,p.useState)(null),b=(0,u.Z)(m,2),k=b[0],y=b[1];(0,p.useEffect)((function(){if(o){var n=function(){var n=(0,s.Z)((0,c.Z)().mark((function n(){var e;return(0,c.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,Z(!0),n.next=4,(0,d.I2)(o);case 4:e=n.sent,g(e.results),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),y(n.t0.message);case 11:return n.prev=11,Z(!1),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}}),[o]);return(0,w.jsxs)("div",{children:[(0,w.jsx)(j,{onSubmit:function(n){n.preventDefault();var e=n.target.children.search.value;e.trim().length>2&&r({query:e})}}),null!==k&&(0,w.jsx)(x.Z,{error:k}),h.length>0&&(0,w.jsx)(f.Z,{movies:h})]})}},4635:function(n,e,t){t.d(e,{Hx:function(){return d},I2:function(){return p},Y5:function(){return u},uV:function(){return l},vw:function(){return s}});var r=t(4165),o=t(5861),a=t(1243),i="97fe01addf81f73693338979426ece1e",c="https://api.themoviedb.org/3/",s=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(){var e,t,o,s=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=s.length>0&&void 0!==s[0]?s[0]:1,s.length>1&&void 0!==s[1]?s[1]:12,n.next=4,a.Z.get("".concat(c,"trending/movie/day?language=en-US&api_key=").concat(i,"&page=").concat(e));case 4:return t=n.sent,o=t.data,n.abrupt("return",o);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat(c,"/movie/").concat(e,"?language=en-US&api_key=").concat(i));case 2:return t=n.sent,o=t.data,n.abrupt("return",o);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat(c,"/search/movie?query=").concat(e,"&include_adult=false&language=en-US&api_key=").concat(i,"&page=1"));case 2:return t=n.sent,o=t.data,n.abrupt("return",o);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat(c,"/movie/").concat(e,"/credits?language=en-US&api_key=").concat(i));case 2:return t=n.sent,o=t.data,n.abrupt("return",o);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,o.Z)((0,r.Z)().mark((function n(e){var t,o;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("".concat(c,"/movie/").concat(e,"/reviews?language=en-US&api_key=").concat(i));case 2:return t=n.sent,o=t.data,n.abrupt("return",o);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=447.cba0e866.chunk.js.map