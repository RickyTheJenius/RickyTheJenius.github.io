(function(){"use strict";var n={9754:function(n,e,t){var a=t(9242),r=t(3396);const o=(0,r._)("nav",{class:"navbar navbar-expand-lg bg-body-tertiary"},[(0,r._)("div",{class:"container-fluid"},[(0,r._)("a",{class:"navbar-brand",href:"#"},"Navbar"),(0,r._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,r._)("span",{class:"navbar-toggler-icon"})]),(0,r._)("div",{class:"collapse navbar-collapse",id:"navbarSupportedContent"},[(0,r._)("ul",{class:"navbar-nav me-auto mb-2 mb-lg-0"},[(0,r._)("li",{class:"nav-item"},[(0,r._)("a",{class:"nav-link active","aria-current":"page",href:"#"},"Home")]),(0,r._)("li",{class:"nav-item"},[(0,r._)("a",{class:"nav-link",href:"#"},"Link")]),(0,r._)("li",{class:"nav-item dropdown"},[(0,r._)("a",{class:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," Dropdown "),(0,r._)("ul",{class:"dropdown-menu"},[(0,r._)("li",null,[(0,r._)("a",{class:"dropdown-item",href:"#"},"Action")]),(0,r._)("li",null,[(0,r._)("a",{class:"dropdown-item",href:"#"},"Another action")]),(0,r._)("li",null,[(0,r._)("hr",{class:"dropdown-divider"})]),(0,r._)("li",null,[(0,r._)("a",{class:"dropdown-item",href:"#"},"Something else here")])])]),(0,r._)("li",{class:"nav-item"},[(0,r._)("a",{class:"nav-link disabled"},"Disabled")])]),(0,r._)("form",{class:"d-flex",role:"search"},[(0,r._)("input",{class:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),(0,r._)("button",{class:"btn btn-outline-success",type:"submit"},"Search")])])])],-1);function l(n,e,t,a,l,i){const c=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",null,[o,(0,r.Wm)(c,{data:l.data},null,8,["data"])])}var i=[{title:"first project : Professional rental app",content:"Using vue we can make smooth app like a soap",date:"September 24, 2023",number:0},{title:"Second project : Premium sushi delivery app",content:"We are delivery chef",date:"October 20, 2022",number:1},{title:"Third project : Boxing gym app",content:"After set the location, we will introduce boxer to fight",date:"April 24, 2021",number:2}],c={name:"App",components:{},data(){return{data:i}}},s=t(89);const u=(0,s.Z)(c,[["render",l]]);var d=u,p=(t(2166),t(2483)),f=(t(7658),t(7139));const v=["onClick"];function b(n,e,t,a,o,l){return(0,r.wg)(),(0,r.iD)("div",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(t.data,((e,t)=>((0,r.wg)(),(0,r.iD)("div",{key:t},[(0,r._)("h4",{onClick:e=>n.$router.push("detail/"+t)},(0,f.zw)(e.title),9,v),(0,r._)("p",null,(0,f.zw)(e.content),1)])))),128))])}var m={name:"listCompo",props:{data:Array}};const h=(0,s.Z)(m,[["render",b]]);var g=h;function _(n,e,t,a,o,l){return(0,r.wg)(),(0,r.iD)("h1",null,"home compo")}var w={name:"homeCompo"};const y=(0,s.Z)(w,[["render",_]]);var k=y;const O=(0,r._)("p",null,null,-1);function S(n,e,t,a,o,l){return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("h3",null,(0,f.zw)(t.data[n.$route.params.id].title),1),(0,r._)("h5",null,(0,f.zw)(t.data[n.$route.params.id].content),1),O])}var j={props:{data:Array},name:"detailCompo"};const x=(0,s.Z)(j,[["render",S]]);var C=x;const D=[{path:"/",component:k},{path:"/list",component:g},{path:"/detail/:id",component:C},{path:"/:anything(.*)",component:k}],A=(0,p.p7)({history:(0,p.PO)(),routes:D});var P=A;(0,a.ri)(d).use(P).mount("#app")}},e={};function t(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={exports:{}};return n[a](o,o.exports,t),o.exports}t.m=n,function(){var n=[];t.O=function(e,a,r,o){if(!a){var l=1/0;for(u=0;u<n.length;u++){a=n[u][0],r=n[u][1],o=n[u][2];for(var i=!0,c=0;c<a.length;c++)(!1&o||l>=o)&&Object.keys(t.O).every((function(n){return t.O[n](a[c])}))?a.splice(c--,1):(i=!1,o<l&&(l=o));if(i){n.splice(u--,1);var s=r();void 0!==s&&(e=s)}}return e}o=o||0;for(var u=n.length;u>0&&n[u-1][2]>o;u--)n[u]=n[u-1];n[u]=[a,r,o]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,a){var r,o,l=a[0],i=a[1],c=a[2],s=0;if(l.some((function(e){return 0!==n[e]}))){for(r in i)t.o(i,r)&&(t.m[r]=i[r]);if(c)var u=c(t)}for(e&&e(a);s<l.length;s++)o=l[s],t.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return t.O(u)},a=self["webpackChunkblog_vue"]=self["webpackChunkblog_vue"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(9754)}));a=t.O(a)})();
//# sourceMappingURL=app.fd1b5780.js.map