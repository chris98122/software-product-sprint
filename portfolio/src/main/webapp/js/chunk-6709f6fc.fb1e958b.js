(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6709f6fc"],{"132d":function(t,e,a){"use strict";a("7db0"),a("caad"),a("c975"),a("fb6a"),a("45fc"),a("a9e3"),a("2532"),a("498a"),a("c96a");var i,n=a("5530"),s=(a("4804"),a("7e2b")),o=a("a9ad"),r=a("af2b"),c=a("7560"),l=a("80d2"),d=a("2b0e"),u=a("58df");function h(t){return["fas","far","fal","fab","fad"].some((function(e){return t.includes(e)}))}function v(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(function(t){t["xSmall"]="12px",t["small"]="16px",t["default"]="24px",t["medium"]="28px",t["large"]="36px",t["xLarge"]="40px"})(i||(i={}));var f=Object(u["a"])(s["a"],o["a"],r["a"],c["a"]).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(l["q"])(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(l["n"])(t).find((function(e){return t[e]}));return e&&i[e]||Object(l["d"])(this.size)},getDefaultData:function(){var t={staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:Object(n["a"])({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$};return t},applyColors:function(t){t.class=Object(n["a"])(Object(n["a"])({},t.class),this.themeClasses),this.setTextColor(this.color,t)},renderFontIcon:function(t,e){var a=[],i=this.getDefaultData(),n="material-icons",s=t.indexOf("-"),o=s<=-1;o?a.push(t):(n=t.slice(0,s),h(n)&&(n="")),i.class[n]=!0,i.class[t]=!o;var r=this.getSize();return r&&(i.style={fontSize:r}),this.applyColors(i),e(this.hasClickListener?"button":this.tag,i,a)},renderSvgIcon:function(t,e){var a=this.getSize(),i=Object(n["a"])(Object(n["a"])({},this.getDefaultData()),{},{style:a?{fontSize:a,height:a,width:a}:void 0});i.class["v-icon--svg"]=!0,this.applyColors(i);var s={attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:a||"24",width:a||"24",role:"img","aria-hidden":!0}};return e(this.hasClickListener?"button":"span",i,[e("svg",s,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var a=this.getDefaultData();a.class["v-icon--is-component"]=!0;var i=this.getSize();i&&(a.style={fontSize:i,height:i,width:i}),this.applyColors(a);var n=t.component;return a.props=t.props,a.nativeOn=a.on,e(n,a)}},render:function(t){var e=this.getIcon();return"string"===typeof e?v(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e["a"]=d["a"].extend({name:"v-icon",$_wrapperFor:f,functional:!0,render:function(t,e){var a=e.data,i=e.children,n="";return a.domProps&&(n=a.domProps.textContent||a.domProps.innerHTML||n,delete a.domProps.textContent,delete a.domProps.innerHTML),t(f,a,n?[n]:i)}})},"16b7":function(t,e,a){"use strict";a("a9e3");var i=a("2b0e");e["a"]=i["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(t,e){var a=this;this.clearDelay();var i=parseInt(this["".concat(t,"Delay")],10);this["".concat(t,"Timeout")]=setTimeout(e||function(){a.isActive={open:!0,close:!1}[t]},i)}}})},"3c68":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"overflow-hidden",attrs:{id:"get-in-touch"}},[i("v-container",[i("v-row",{staticClass:"info white--text",attrs:{"no-gutters":""}},[i("v-col",{staticClass:"hidden-sm-and-down",attrs:{md:"6"}},[i("v-img",{staticClass:"align-center ma-10",attrs:{src:a("f5cc"),contain:""}})],1),i("v-col",{staticClass:"pa-5",attrs:{cols:"12",md:"6"}},[i("base-bubble-1"),i("base-heading",{staticClass:"mb-5"},[t._v(" Get In Touch💬 ")]),i("v-card",{staticClass:"align-center ma-10",attrs:{color:"#26c6da",dark:"","max-width":"400"}},[i("v-card-title",[i("v-icon",{attrs:{large:"",left:""}},[t._v(" mdi-email ")]),i("span",{staticClass:"title font-weight-light"},[t._v("Mail")])],1),i("v-card-text",{staticClass:"headline font-weight-bold"},[t._v(" jzhou@sps-program.com ")])],1),i("v-card",{staticClass:"align-center ma-10",attrs:{color:"#26c6da",dark:"","max-width":"400"}},[i("v-card-title",[i("v-icon",{attrs:{large:""}},[t._v(" mdi-wechat ")]),i("span",{staticClass:"title font-weight-light"},[t._v("WeChat")])],1),i("v-img",{staticClass:"align-center ma-3",attrs:{src:a("ead3"),contain:""}})],1),i("v-hover",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.hover;return i("v-card",{staticClass:"align-center ma-10",attrs:{onclick:"window.open('https://www.linkedin.com/in/%E4%BD%B3%E6%87%BF-%E5%91%A8-b505221a0/')",color:"#26c6da",dark:"","max-width":"400"}},[i("v-card-title",[i("v-icon",{attrs:{large:""}},[t._v(" mdi-linkedin ")]),i("span",{staticClass:"title font-weight-light"},[t._v("LinkedIn")])],1),i("v-expand-transition",[a?i("div",{staticClass:"d-flex transition-fast-in-fast-out blue darken-2 v-card--reveal display-3 white--text",staticStyle:{height:"100%"}},[t._v(" LinkedIn👉 ")]):t._e()])],1)}}])})],1),i("base-bubble-1",{staticStyle:{transform:"rotate(180deg) translateY(65%)"}})],1)],1)],1)},n=[],s={name:"GetInTouch"},o=s,r=a("2877"),c=a("6544"),l=a.n(c),d=a("b0af"),u=a("99d9"),h=a("62ad"),v=a("a523"),f=a("0789"),m=a("ce87"),p=a("132d"),g=a("adda"),b=a("0fd9"),C=Object(r["a"])(o,i,n,!1,null,null,null);e["default"]=C.exports;l()(C,{VCard:d["a"],VCardText:u["a"],VCardTitle:u["b"],VCol:h["a"],VContainer:v["a"],VExpandTransition:f["a"],VHover:m["a"],VIcon:p["a"],VImg:g["a"],VRow:b["a"]})},4804:function(t,e,a){},"99d9":function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return c}));var i=a("b0af"),n=a("80d2"),s=Object(n["f"])("v-card__actions"),o=Object(n["f"])("v-card__subtitle"),r=Object(n["f"])("v-card__text"),c=Object(n["f"])("v-card__title");i["a"]},ce87:function(t,e,a){"use strict";var i=a("16b7"),n=a("f2e7"),s=a("58df"),o=a("d9bd");e["a"]=Object(s["a"])(i["a"],n["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){return this.$scopedSlots.default||void 0!==this.value?(this.$scopedSlots.default&&(t=this.$scopedSlots.default({hover:this.isActive})),Array.isArray(t)&&1===t.length&&(t=t[0]),t&&!Array.isArray(t)&&t.tag?(this.disabled||(t.data=t.data||{},this._g(t.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),t):(Object(o["c"])("v-hover should only contain a single element",this),t)):(Object(o["c"])("v-hover is missing a default scopedSlot or bound value",this),null);var t}})},ead3:function(t,e,a){t.exports=a.p+"img/wechat.0cdd96ae.png"},f5cc:function(t,e,a){t.exports=a.p+"img/face2.891856db.jpg"}}]);
//# sourceMappingURL=chunk-6709f6fc.fb1e958b.js.map