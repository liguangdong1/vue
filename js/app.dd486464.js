(function(e){function t(t){for(var r,a,c=t[0],u=t[1],f=t[2],i=0,d=[];i<c.length;i++)a=c[i],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,f||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==s[c]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},s={app:0},o=[];function c(e){return u.p+"js/"+({dashboard:"dashboard",form:"form",layout:"layout",user:"user"}[e]||e)+"."+{dashboard:"fc12e3c6",form:"c191f502",layout:"57998cb1",user:"b221ee52"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={layout:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({dashboard:"dashboard",form:"form",layout:"layout",user:"user"}[e]||e)+"."+{dashboard:"31d6cfe0",form:"31d6cfe0",layout:"e587d281",user:"31d6cfe0"}[e]+".css",s=u.p+r,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var f=o[c],i=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(i===r||i===s))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){f=d[c],i=f.getAttribute("data-href");if(i===r||i===s)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var r=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete a[e],l.parentNode.removeChild(l),n(o)},l.href=s;var b=document.getElementsByTagName("head")[0];b.appendChild(l)})).then((function(){a[e]=0})));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=s[e]=[t,n]}));t.push(r[2]=o);var f,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=c(e);var d=new Error;f=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=s[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}s[e]=void 0}};var l=setTimeout((function(){f({type:"timeout",target:i})}),12e4);i.onerror=i.onload=f,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vue/",u.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],i=f.push.bind(f);f.push=t,f=f.slice();for(var d=0;d<f.length;d++)t(f[d]);var l=i;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4678:function(e,t,n){var r={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=s,e.exports=a,a.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("5704");var r=n("b558"),a=(n("f2ef"),n("3af3")),s=(n("5783"),n("59a5")),o=(n("6d2a"),n("9571")),c=(n("8fb1"),n("0c63")),u=(n("fbd8"),n("55f1")),f=(n("1a62"),n("98c5")),i=(n("6ba6"),n("5efb")),d=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},b=[],j=n("2877"),h={},m=Object(j["a"])(h,l,b,!1,null,null,null),p=m.exports,v=(n("d3b7"),n("dc5a"),n("56cd")),y=n("8c4f"),g=n("323e"),k=n.n(g),w=(n("a5d8"),n("995c")),z=n.n(w),O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" NotFound ")])},_=[],x={},E=Object(j["a"])(x,O,_,!1,null,null,null),T=E.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" 403 ")])},S=[],C={},P=Object(j["a"])(C,N,S,!1,null,null,null),M=P.exports,A=n("5f87"),L=y["a"].prototype.push;y["a"].prototype.push=function(e){return L.call(this,e).catch((function(e){return e}))},d["a"].use(y["a"]);var q=[{path:"/user",hideInMenu:!0,component:function(){return n.e("layout").then(n.bind(null,"3edf"))},children:[{path:"/user",redirect:"/user/login"},{path:"/user/login",name:"login",component:function(){return n.e("user").then(n.bind(null,"0866"))}},{path:"/user/register",name:"register",component:function(){return n.e("user").then(n.bind(null,"04e9"))}}]},{path:"/",meta:{authority:["user","admin"]},component:function(){return n.e("layout").then(n.bind(null,"25d6"))},children:[{path:"/",redirect:"/dashboard/analysis"},{path:"/dashboard",name:"dashboard",meta:{icon:"dashboard",title:"仪表盘"},component:{render:function(e){return e("router-view")}},children:[{path:"/dashboard/analysis",name:"analysis",meta:{title:"分析页"},component:function(){return n.e("dashboard").then(n.bind(null,"81c0"))}}]},{path:"/form",name:"form",meta:{icon:"form",title:"表单",authority:["admin"]},component:{render:function(e){return e("router-view")}},children:[{path:"/form/basic-form",name:"basicForm",meta:{title:"基础表单"},component:function(){return n.e("form").then(n.bind(null,"85ef"))}},{path:"/form/step-form",name:"stepForm",meta:{title:"分布表单"},hideChildrenInMenu:!0,component:function(){return n.e("form").then(n.bind(null,"d14d"))},children:[{path:"/form/step-form",redirect:"/form/step-form/info"},{path:"/form/step-form/info",name:"info",component:function(){return n.e("form").then(n.bind(null,"3727"))}},{path:"/form/step-form/confirm",name:"confirm",component:function(){return n.e("form").then(n.bind(null,"62b9"))}},{path:"/form/step-form/result",name:"result",component:function(){return n.e("form").then(n.bind(null,"77ee"))}}]}]}]},{path:"/403",name:"403",hideInMenu:!0,component:M},{path:"*",name:"404",hideInMenu:!0,component:T}],F=new y["a"]({routes:q});F.beforeEach((function(e,t,n){e.path!==t.path&&k.a.start();var r=z()(e.matched,(function(e){return e.meta.authority}));r&&!Object(A["a"])(r.meta.authority)&&(Object(A["b"])()||"/user/login"===e.path?"/403"!==e.path&&(v["a"].error({message:"Notification Title",description:"This is the content of the notification. This is the content of the notification. This is the content of the notification."}),n({path:"/403"})):n({path:"/user/login"}),k.a.done()),n()})),F.afterEach((function(){k.a.done()}));var I=F,D=n("2f62");d["a"].use(D["a"]);var $,B,U=new D["a"].Store({state:{},mutations:{},actions:{},modules:{}}),J={props:{authority:{type:Array,required:!0}},functional:!0,render:function(e,t){var n=t.props,r=t.scopedSlots;return Object(A["a"])(n.authority)?r.default():null}},H=J,K=Object(j["a"])(H,$,B,!1,null,null,null),G=K.exports;n("b0c0");function Q(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.directive(t.name||"auth",{inserted:function(e,t){console.log(t.value,"binding"),Object(A["a"])(t.value)||e.parentNode&&e.parentNode.removeChild(e)}})}var R={install:Q};d["a"].config.productionTip=!1,d["a"].use(i["a"]),d["a"].use(f["a"]),d["a"].use(u["a"]),d["a"].use(c["a"]),d["a"].use(o["a"]),d["a"].use(s["a"]),d["a"].use(a["a"]),d["a"].use(r["a"]),d["a"].component("Authorized",G),d["a"].use(R),new d["a"]({router:I,store:U,render:function(e){return e(p)}}).$mount("#app")},"5f87":function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return s}));n("caad"),n("45fc"),n("2532");function r(){return["admin"]}function a(e){var t=r();return t.some((function(t){return e.includes(t)}))}function s(){var e=r();return e[0]&&"guest"!==e[0]}}});
//# sourceMappingURL=app.dd486464.js.map