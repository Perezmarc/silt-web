(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{215:function(t,e,n){t.exports=n.p+"img/screenshot_documentSelect_es.1105ef4.jpg"},216:function(t,e,n){t.exports=n.p+"img/screenshot_selfie_es.4434cef.jpg"},217:function(t,e,n){t.exports=n.p+"img/screenshot_finish_es.9610922.jpg"},228:function(t,e,n){var content=n(267);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(47).default)("23cbd26c",content,!0,{sourceMap:!1})},255:function(t,e,n){t.exports=n.p+"img/user_flow_diagram_es.fc7c8f7.png"},256:function(t,e,n){t.exports=n.p+"img/user_flow_diagram_en.f389671.png"},257:function(t,e,n){t.exports=n.p+"img/screenshot_blurry_es.8fa1a40.jpg"},258:function(t,e,n){t.exports=n.p+"img/screenshot_mask_es.9e54d35.jpg"},259:function(t,e,n){t.exports=n.p+"img/screenshot_blurry_en.ba56c60.jpg"},260:function(t,e,n){t.exports=n.p+"img/screenshot_mask_en.7700acc.jpg"},261:function(t,e,n){t.exports=n.p+"img/book-imac.063712d.svg"},262:function(t,e,n){t.exports=n.p+"img/hand-globe.f6281b8.svg"},263:function(t,e,n){t.exports=n.p+"img/drinks-user.d56f149.svg"},264:function(t,e,n){t.exports=n.p+"img/bulbrocket.8702854.svg"},265:function(t,e,n){t.exports=n.p+"img/meditation.6c6962d.svg"},266:function(t,e,n){"use strict";n(228)},267:function(t,e,n){var c=n(46)(!1);c.push([t.i,".scan-icon[data-v-0a686023]{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='none' stroke='%232963FFFF' stroke-width='7' stroke-dasharray='50%25, 50%25' stroke-dashoffset='14'/%3E%3C/svg%3E\");padding:10px;font-size:25px}.claim-container .claim-side-img.diagram[data-v-0a686023]{margin:0;padding:0}.claim-container .claim-side-img.diagram>img[data-v-0a686023]{min-width:300px;max-width:700px}.claim-info-wrapper.differences[data-v-0a686023]{display:flex;align-items:center}.fw-container[data-v-0a686023]{background:#fafafa;padding:30px;margin:-20px;width:calc(100% + 40px)}.fw-container section[data-v-0a686023]{padding:20px;margin:auto}",""]),t.exports=c},283:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(75),o=c.y.registerPlugin(r.a)||c.y,_=(o.core.Tween,{nuxtI18n:{paths:{en:"/",es:"/"}},data:function(){return{structuredData:{"@context":"https://getsilt.com","@type":"Organization",url:"https://getsilt.com",name:this.$t("silt_name"),email:"hello@getsilt.com",logo:"https://getsilt.com/silt_blue.png"},email:"hello@getsilt.com",differences:[{title:"business_differences_oneRegister_title",content:"business_differences_oneRegister_content",header:"business_friction_oneregister_header",headerDescription:"business_friction_oneregister_headerDescription",img:n(263)},{title:"business_differences_technology_title",content:"business_differences_technology_content",header:"business_friction_trust_header",headerDescription:"business_friction_trust_headerDescription",img:n(264)},{title:"business_differences_noManagement_title",content:"business_differences_noManagement_content",header:"business_friction_fast_header",headerDescription:"business_friction_fast_headerDescription",img:n(265)}],benefits:[{icon:"fa-funnel-dollar fa-2x",title:"business_benefits_cac_title",content:"business_benefits_cac_content"},{icon:"fa-rabbit-fast fa-3x",title:"business_benefits_time_title",content:"business_benefits_time_content"},{icon:"fa-sack-dollar fa-3x",title:"business_benefits_costs_title",content:"business_benefits_costs_content"}],highlights:[{title:"business_friction_automatic_title",content:"business_friction_automatic_content",header:"business_friction_automatic_header",headerDescription:"business_friction_automatic_headerDescription"},{title:"business_friction_trust_title",content:"business_friction_trust_content",header:"business_friction_trust_header",headerDescription:"business_friction_trust_headerDescription"},{title:"business_friction_fast_title",content:"business_friction_fast_content",header:"business_friction_fast_header",headerDescription:"business_friction_fast_headerDescription"}],techfeatures:[{icon:"fa-head-side scan-icon",title:"business_highlights_faceRecognition_title"},{icon:"fa-heartbeat",title:"business_highlights_liveness_title"},{icon:"fa-id-card scan-icon",title:"business_highlights_docscan_title"},{icon:"fa-badge-check",title:"business_highlights_authenticity_title"},{icon:"fa-user-check",title:"business_highlights_biometric_title"}],usecases:[{icon:"fa-university",title:"business_usecases_neobank"},{icon:"fa-expand-arrows",title:"business_usecases_sharing"},{icon:"fa-comments-alt-dollar",title:"business_usecases_p2p"},{icon:"fa-dice",title:"business_usecases_gaming"},{icon:"fa-arrows",title:"business_usecases_contract"}]}},mounted:function(){this.startFirstAnimationScene(this)},methods:{getEmail:function(){return this.email},startFirstAnimationScene:function(t){for(var e=0,n=["#assistedPictureQuality","#benefits","#usecases","#countries","#howto","#differences","#techfeatures","#producthighlights"];e<n.length;e++){var section=n[e];o.timeline({scrollTrigger:{trigger:section,start:"top 80%",scrub:!1,markers:!1}}).from(section,{duration:1,scale:1,y:100,opacity:0})}o.timeline({scrollTrigger:{trigger:"#techfeatures .features-container",start:"top 80%",scrub:!1,markers:!1}}).from("#techfeatures .features-item",{duration:1,scale:1,y:100,rotateY:0,opacity:0,stagger:.2,ease:"power2.out"}),o.timeline({scrollTrigger:{trigger:"#usecases .features-container",start:"top 80%",scrub:!1,markers:!1}}).from("#usecases .features-item",{duration:1,scale:1,y:100,rotateY:0,opacity:0,stagger:.2,ease:"power2.out"}),o.timeline({scrollTrigger:{trigger:"#assistedPictureQualityScreenshots",start:"top 80%",scrub:!1,markers:!1}}).from("#assistedPictureQualityScreenshots",{duration:.5,perspective:0,ease:"power2.out"}).from(".screenshotPictureQuality",{duration:1,scale:1,x:-100,rotateY:0,opacity:0,stagger:-.2,ease:"power2.out"})}}}),l=(n(266),n(17)),component=Object(l.a)(_,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",[c("section",{staticClass:"claim-container"},[c("div",{staticClass:"claim-info"},[c("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.$t("business_claim1"))}}),t._v(" "),c("h4",{staticClass:"subtitle",domProps:{innerHTML:t._s(t.$t("business_claim2"))}},[t._v("\n        "+t._s(t.$t("business_claim2"))+"\n      ")]),t._v(" "),c("a",{attrs:{href:"mailto:"+t.getEmail(),target:"_blank"}},[c("button",{staticClass:"primary"},[t._v(t._s(t.$t("btn_cta_contact")))])])]),t._v(" "),c("div",{staticClass:"claim-side-img screenshots-container"},[c("div",{staticClass:"screenshot-container"},[c("img",{staticClass:"screenshot login",attrs:{src:n(215),alt:t.$t("seo_2"),width:"180",height:"353"}})]),t._v(" "),c("div",{staticClass:"screenshot-container"},[c("img",{staticClass:"screenshot take-picture",attrs:{src:n(216),alt:t.$t("seo_3"),width:"180",height:"353"}})]),t._v(" "),c("div",{staticClass:"screenshot-container"},[c("img",{staticClass:"screenshot complete",attrs:{src:n(217),alt:t.$t("seo_4"),width:"180",height:"353"}})])])]),t._v(" "),c("div",{staticClass:"fw-container",attrs:{id:"benefits"}},[c("section",{staticClass:"highlights-wrapper"},[c("div",{staticClass:"section-headers"},[c("span",{staticClass:"tag"},[t._v(t._s(t.$t("business_benefits_section")))]),t._v(" "),c("h2",[t._v(t._s(t.$t("business_benefits_title")))])]),t._v(" "),c("div",{staticClass:"highlights-container pins"},t._l(t.benefits,(function(e){return c("article",{key:e.title},[c("div",{staticClass:"article-container"},[c("div",{staticClass:"article-icon-container"},[c("i",{staticClass:"fad",class:e.icon})]),t._v(" "),c("h4",[t._v(t._s(t.$t(e.title)))]),t._v(" "),c("p",[t._v(t._s(t.$t(e.content)))])])])})),0)])]),t._v(" "),c("section",{staticClass:"claim-wrapper",attrs:{id:"differences"}},[c("div",{staticClass:"claim-container left"},[c("div",{staticClass:"claim-side-img diagram",attrs:{id:"diagram"}},["es"===t.$root.$i18n.locale?[c("img",{attrs:{src:n(255),alt:t.$t("seo_3"),width:"709",height:"843"}})]:[c("img",{attrs:{src:n(256),alt:t.$t("seo_3"),width:"709",height:"843"}})]],2),t._v(" "),c("div",{staticClass:"claim-info-wrapper differences"},[c("div",{staticClass:"claim-info"},[c("h3",{staticClass:"title"},[t._v("\n            "+t._s(t.$t("business_differences_title"))+"\n          ")]),t._v(" "),c("p",{domProps:{innerHTML:t._s(t.$t("business_differences_oneRegister_content"))}},[t._v("\n            "+t._s(t.$t("business_differences_oneRegister_content"))+"\n          ")]),t._v(" "),c("nuxt-link",{attrs:{to:t.localePath({name:"demo"})}},[c("button",{staticClass:"primary"},[t._v(t._s(t.$t("btn_cta_demo")))])])],1)])])]),t._v(" "),c("section",{staticClass:"features-wrapper",attrs:{id:"techfeatures"}},[c("div",{staticClass:"section-headers"},[c("span",{staticClass:"tag"},[t._v(t._s(t.$t("business_highlights_vanguardTech_section")))]),t._v(" "),c("h2",[t._v(t._s(t.$t("business_highlights_vanguardTech_title")))]),t._v(" "),c("p",[t._v(t._s(t.$t("business_highlights_vanguardTech_content")))])]),t._v(" "),c("div",{staticClass:"features-container"},t._l(t.techfeatures,(function(e){return c("div",{key:e.title,staticClass:"features-item"},[c("i",{staticClass:"fad fa-2x",class:e.icon}),t._v(" "),c("h4",[t._v(t._s(t.$t(e.title)))])])})),0)]),t._v(" "),c("div",{staticClass:"fw-container"},[c("section",{staticClass:"claim-wrapper"},[c("div",{staticClass:"claim-container left"},[c("div",{staticClass:"claim-side-img screenshots-container",attrs:{id:"assistedPictureQualityScreenshots"}},["es"===t.$root.$i18n.locale?[c("div",{staticClass:"screenshot-container"},[c("img",{staticClass:"screenshot lg screenshotPictureQuality",attrs:{id:"screenshot-blurry",src:n(257),alt:t.$t("seo_1"),width:"220",height:"432"}})]),t._v(" "),c("div",{staticClass:"screenshot-container"},[c("img",{staticClass:"screenshot lg screenshotPictureQuality",attrs:{id:"screenshot-mask",src:n(258),alt:t.$t("seo_1"),width:"220",height:"432"}})])]:[c("div",{staticClass:"screenshot-container"},[c("img",{staticClass:"screenshot lg screenshotPictureQuality",attrs:{id:"screenshot-blurry",src:n(259),alt:t.$t("seo_1"),width:"220",height:"432"}})]),t._v(" "),c("div",{staticClass:"screenshot-container"},[c("img",{staticClass:"screenshot lg screenshotPictureQuality",attrs:{id:"screenshot-mask",src:n(260),alt:t.$t("seo_1"),width:"220",height:"432"}})])]],2),t._v(" "),c("div",{staticClass:"claim-info-wrapper",attrs:{id:"assistedPictureQuality"}},[c("div",{staticClass:"claim-info"},[c("h3",{staticClass:"title"},[t._v("\n              "+t._s(t.$t("business_differences_assistedPictureQuality_title"))+"\n            ")]),t._v(" "),c("p",{domProps:{innerHTML:t._s(t.$t("business_differences_assistedPictureQuality_content"))}},[t._v("\n              "+t._s(t.$t("business_differences_assistedPictureQuality_content"))+"\n            ")]),t._v(" "),c("p",{domProps:{innerHTML:t._s(t.$t("business_differences_assistedPictureQuality_content2"))}}),t._v(" "),c("nuxt-link",{attrs:{to:t.localePath({name:"demo"})}},[c("button",{staticClass:"primary"},[t._v(t._s(t.$t("btn_cta_demo")))])])],1)])])])]),t._v(" "),c("section",{staticClass:"claim-wrapper",attrs:{id:"howto"}},[c("div",{staticClass:"section-headers"},[c("span",{staticClass:"tag"},[t._v(t._s(t.$t("business_howto_section")))]),t._v(" "),c("h2",[t._v(t._s(t.$t("business_howto_title")))])]),t._v(" "),c("div",{staticClass:"claim-container"},[c("div",{staticClass:"claim-info"},[c("p",{domProps:{innerHTML:t._s(t.$t("business_howto_content"))}},[t._v("\n          "+t._s(t.$t("business_howto_content"))+"\n        ")]),t._v(" "),c("ol",[c("li",{domProps:{innerHTML:t._s(t.$t("business_howto_content1"))}},[t._v("\n            "+t._s(t.$t("business_howto_content1"))+"\n          ")]),t._v(" "),c("li",{domProps:{innerHTML:t._s(t.$t("business_howto_content2"))}},[t._v("\n            "+t._s(t.$t("business_howto_content2"))+"\n          ")]),t._v(" "),c("li",{domProps:{innerHTML:t._s(t.$t("business_howto_content3"))}},[t._v("\n            "+t._s(t.$t("business_howto_content3"))+"\n          ")])]),t._v(" "),c("span",{domProps:{innerHTML:t._s(t.$t("business_howto_content4"))}},[t._v(t._s(t.$t("business_howto_content4")))])]),t._v(" "),c("div",{staticClass:"claim-side-img"},[c("img",{attrs:{width:"400",height:"400",src:n(261),alt:t.$t("seo_7")}})])])]),t._v(" "),c("section",{staticClass:"claim-wrapper",attrs:{id:"countries"}},[c("div",{staticClass:"claim-container left"},[c("div",{staticClass:"claim-info-wrapper"},[c("div",{staticClass:"claim-info"},[c("h3",{staticClass:"title"},[t._v("\n            "+t._s(t.$t("business_highlights_countries_title"))+"\n          ")]),t._v(" "),c("p",[t._v("\n            "+t._s(t.$t("business_highlights_countries_content"))+"\n          ")]),t._v(" "),c("a",{attrs:{href:"mailto:"+t.getEmail(),target:"_blank"}},[c("button",{staticClass:"primary"},[t._v(t._s(t.$t("btn_cta_contact")))])])])]),t._v(" "),c("div",{staticClass:"claim-side-img"},[c("img",{attrs:{width:"400",height:"400",src:n(262),alt:t.$t("seo_8")}})])])]),t._v(" "),c("section",{staticClass:"features-wrapper",attrs:{id:"usecases"}},[c("div",{staticClass:"section-headers"},[c("span",{staticClass:"tag"},[t._v(t._s(t.$t("business_usecases_section")))]),t._v(" "),c("h2",[t._v(t._s(t.$t("business_usecases_title")))]),t._v(" "),c("p",[t._v(t._s(t.$t("business_usecases_content")))])]),t._v(" "),c("div",{staticClass:"features-container"},t._l(t.usecases,(function(e){return c("div",{key:e.title,staticClass:"features-item"},[c("i",{staticClass:"fad fa-2x",class:e.icon}),t._v(" "),c("h4",[t._v(t._s(t.$t(e.title)))])])})),0),t._v(" "),c("a",{attrs:{href:"mailto:"+t.getEmail(),target:"_blank"}},[c("button",{staticClass:"primary"},[t._v(t._s(t.$t("btn_cta_contact")))])])])])}),[],!1,null,"0a686023",null);e.default=component.exports}}]);