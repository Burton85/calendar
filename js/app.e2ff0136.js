(function(t){function e(e){for(var r,s,i=e[0],c=e[1],l=e[2],d=0,v=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&v.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(v.length)v.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"1bb1":function(t,e){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=(n("d3b7"),n("bc3a")),o=n.n(a),s={},i=o.a.create(s);i.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),i.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t,e){t.axios=i,window.axios=i,Object.defineProperties(t.prototype,{axios:{get:function(){return i}},$axios:{get:function(){return i}}})},r["a"].use(Plugin);Plugin,n("1bb1");var c,l,u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},d=[],v=n("2877"),p={},f=Object(v["a"])(p,u,d,!1,null,null,null),h=f.exports,m=n("8c4f"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-row",{staticClass:"fill-height"},[n("v-col",[n("v-sheet",{attrs:{height:"64"}},[n("v-toolbar",{attrs:{flat:""}},["day"==t.type?n("v-toolbar-title",{staticClass:"ml-5"},[n("v-btn",{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:t.prev}},[n("v-icon",{staticClass:"rounded-circle grey white--text",attrs:{small:""}},[t._v(" mdi-chevron-left ")])],1),t._v(" "+t._s(t.$refs.calendar.title)+" "),n("v-btn",{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:t.next}},[n("v-icon",{staticClass:"rounded-circle grey white--text",attrs:{small:""}},[t._v(" mdi-chevron-right ")])],1)],1):n("v-toolbar-title",{staticClass:"ml-5"},[t._v(" 預約行事曆 ")]),n("v-spacer"),n("v-menu",{attrs:{bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,a=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"mr-4 rounded-pill primary"},"v-btn",a,!1),r),[n("span",{staticClass:"secondary--text"},[t._v(t._s(t.typeToLabel[t.type]))]),n("v-icon",{attrs:{right:"",color:"secondary"}},[t._v(" mdi-menu-down ")])],1)]}}])},[n("v-list",{staticClass:"primary"},[n("v-list-item",{on:{click:function(e){t.type="day"}}},[n("v-list-item-title",{staticClass:"secondary--text"},[t._v("日檢視")])],1),n("v-list-item",{on:{click:function(e){t.type="week"}}},[n("v-list-item-title",{staticClass:"secondary--text"},[t._v("周檢視")])],1)],1)],1),n("v-menu",{attrs:{bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,a=e.attrs;return[n("v-btn",t._g(t._b({staticClass:"rounded-pill primary"},"v-btn",a,!1),r),[n("span",{staticClass:"secondary--text"},[t._v("莉")]),n("v-icon",{attrs:{right:"",color:"secondary"}},[t._v(" mdi-menu-down ")])],1)]}}])},[n("v-list",{staticClass:"primary"},[n("v-list-item",[n("v-list-item-title",{staticClass:"secondary--text"},[t._v("莉")])],1)],1)],1)],1)],1),n("v-sheet",{attrs:{height:"600"}},[n("v-calendar",{ref:"calendar",attrs:{color:"primary",events:t.events,"event-color":t.getEventColor,type:t.type},on:{"click:event":t.showEvent,"click:more":t.viewDay,"click:date":t.viewDay,change:t.updateRange},model:{value:t.focus,callback:function(e){t.focus=e},expression:"focus"}}),n("v-menu",{attrs:{"close-on-content-click":!1,activator:t.selectedElement,"offset-x":""},model:{value:t.selectedOpen,callback:function(e){t.selectedOpen=e},expression:"selectedOpen"}},[n("v-card",{attrs:{color:"purple bg-purple lighten-4","min-width":"350px",flat:""}},[n("v-toolbar",{attrs:{color:t.selectedEvent.color,dark:""}},[n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-pencil")])],1),n("v-toolbar-title",{domProps:{innerHTML:t._s(t.selectedEvent.name)}}),n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-heart")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-dots-vertical")])],1)],1),n("v-card-text",[n("span",{domProps:{innerHTML:t._s(t.selectedEvent.details)}})]),n("v-card-actions",[n("v-btn",{attrs:{text:"",color:"secondary"},on:{click:function(e){t.selectedOpen=!1}}},[t._v(" Cancel ")])],1)],1)],1)],1),n("v-row",{staticClass:"d-flex justify-center mt-6"},[n("v-btn",{staticClass:"secondary pa-6",attrs:{elevation:"7"}},[t._v("+新增預約")])],1)],1)],1)],1)},y=[],g=n("d4ec"),w=n("262e"),_=n("2caf"),x=n("1b40"),O=(c=Object(x["a"])({data:function(){return{focus:"",type:"week",typeToLabel:{week:"周檢視",day:"日檢視"},selectedEvent:{},selectedElement:null,selectedOpen:!1,events:[],colors:["grey","grey","grey","grey"],names:["美甲保養","美甲保養","美甲保養","美甲保養"]}},mounted:function(){this.$refs.calendar.checkChange()},methods:{viewDay:function(t){var e=t.date;this.focus=e,this.type="day"},getEventColor:function(t){return t.color},setToday:function(){this.focus=""},prev:function(){this.$refs.calendar.prev()},next:function(){this.$refs.calendar.next()},showEvent:function(t){var e=this,n=t.nativeEvent,r=t.event,a=function(){e.selectedEvent=r,e.selectedElement=n.target,setTimeout((function(){e.selectedOpen=!0}),10)};this.selectedOpen?(this.selectedOpen=!1,setTimeout(a,10)):a(),n.stopPropagation()},updateRange:function(t){for(var e=t.start,n=t.end,r=[],a=new Date("".concat(e.date,"T00:00:00")),o=new Date("".concat(n.date,"T23:59:59")),s=(o.getTime()-a.getTime())/864e5,i=this.rnd(s,s+20),c=0;c<i;c++){var l=0===this.rnd(0,3),u=this.rnd(a.getTime(),o.getTime()),d=new Date(u-u%9e5),v=9e5*this.rnd(2,l?288:8),p=new Date(d.getTime()+v);r.push({name:this.names[this.rnd(0,this.names.length-1)],start:d,end:p,color:this.colors[this.rnd(0,this.colors.length-1)],timed:!l})}this.events=r},rnd:function(t,e){return Math.floor((e-t+1)*Math.random())+t}}}),c(l=function(t){Object(w["a"])(n,t);var e=Object(_["a"])(n);function n(){return Object(g["a"])(this,n),e.apply(this,arguments)}return n}(x["b"]))||l),C=O,k=n("6544"),T=n.n(k),j=n("7496"),V=n("8336"),E=n("a4f6"),P=n("b0af"),S=n("99d9"),D=n("62ad"),M=n("132d"),$=n("8860"),L=n("da13"),A=n("5d23"),H=n("e449"),I=n("0fd9"),R=n("8dd9"),B=n("2fa4"),F=n("71d9"),J=n("2a7f"),q=Object(v["a"])(C,b,y,!1,null,null,null),z=q.exports;T()(q,{VApp:j["a"],VBtn:V["a"],VCalendar:E["a"],VCard:P["a"],VCardActions:S["a"],VCardText:S["b"],VCol:D["a"],VIcon:M["a"],VList:$["a"],VListItem:L["a"],VListItemTitle:A["a"],VMenu:H["a"],VRow:I["a"],VSheet:R["a"],VSpacer:B["a"],VToolbar:F["a"],VToolbarTitle:J["a"]}),r["a"].use(m["a"]);var G=[{path:"*",redirect:"/"},{path:"/",name:"Home",component:z}],K=new m["a"]({routes:G}),N=K,Q=n("2f62");r["a"].use(Q["a"]);var U=new Q["a"].Store({}),W=n("f309");r["a"].use(W["a"]);var X=new W["a"]({theme:{themes:{light:{primary:"#DEDAF4",secondary:"#7F74B4"}}}});r["a"].config.productionTip=!1,new r["a"]({router:N,store:U,vuetify:X,render:function(t){return t(h)}}).$mount("#app")}});
//# sourceMappingURL=app.e2ff0136.js.map