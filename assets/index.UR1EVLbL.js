import{_ as v}from"./ValaxyMain.vue_vue_type_style_index_0_lang.Buyxxp3R.js";import{u as $}from"./chunks/@vueuse/motion.D6rQsSfL.js";import{o as b}from"./index.Clr5FEFC.js";import{f as k,e as z,Q as f,P as u,$ as j,U as r,W as p,F as w,a0 as I,O as _,u as h,a4 as t,V as a,y as B,A as L}from"./framework.DntyxCiH.js";import{E as R}from"./app.C7VTKl8W.js";import"./chunks/dayjs.CCYrSalk.js";import{f as Y,a as D,u as E}from"./chunks/vue-router.BtJJQj-N.js";import"./YunComment.vue_vue_type_style_index_0_lang.BspCFL1X.js";import"./index.C5okkQwF.js";import"./chunks/vue-i18n.CrruEPAC.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.CgGBEkNu.js";import"./post.BEd9R_46.js";import"./animation.C_ru2laA.js";import"./chunks/pinia.NfdmkE6C.js";import"./chunks/nprogress.BahbDzmd.js";const S=["href","title"],V={class:"yun-link-left"},N={class:"yun-link-avatar size-16 overflow-hidden flex-center"},O=["src","alt"],P={class:"yun-link-info",m:"l-2"},C={class:"yun-link-blog",font:"serif black"},F={class:"yun-link-desc"},M=k({__name:"YunLinkItem",props:{i:{},errorImg:{},link:{}},setup(s){const o=s;function l(e){b(e,o.errorImg)}const m=z();return $(m,{initial:{opacity:0,translateY:40},enter:{opacity:1,translateY:0,transition:{type:"spring",duration:400,damping:8,delay:o.i*50}}}),(e,i)=>(u(),f("li",{ref_key:"itemRef",ref:m,class:"yun-link-item inline-flex",style:j({"--primary-color":e.link.color})},[r("a",{class:"yun-link-url",p:"x-4 y-2",href:e.link.url,title:e.link.name,alt:"portrait",rel:"friend",target:"_blank"},[r("div",V,[r("div",N,[r("img",{class:"size-full object-center object-cover m-0! max-w-unset!",loading:"lazy",src:e.link.avatar,alt:e.link.name,onError:l},null,40,O)])]),r("div",P,[r("div",C,p(e.link.blog),1),r("div",F,p(e.link.desc),1)])],8,S)],4))}}),U={class:"yun-links"},A={class:"yun-link-items",flex:"center wrap"},J=k({__name:"YunLinks",props:{links:{},random:{type:Boolean},errorImg:{}},setup(s){const o=s,{data:l}=R(o.links,o.random);return(m,e)=>{const i=M;return u(),f("div",U,[r("ul",A,[(u(!0),f(w,null,I(h(l),(c,d)=>(u(),_(i,{key:d,i:d,link:c,"error-img":m.errorImg},null,8,["i","link","error-img"]))),128))])])}}}),Q=Y("/links",async s=>JSON.parse('{"title":"我的小伙伴们","description":"小林的小伙伴们","frontmatter":{"title":"我的小伙伴们","keywords":"链接","description":"小林的小伙伴们","links":"https://raw.githubusercontent.com/djzzlim/djzzlim.github.io/main/links.json","random":true},"headers":[],"relativePath":"pages/links/index.md","lastUpdated":1743510221000}'),{lazy:(s,o)=>s.name===o.name}),it={__name:"index",setup(s,{expose:o}){var d;const{data:l}=Q(),m=E(),e=D(),i=Object.assign(e.meta.frontmatter||{},((d=l.value)==null?void 0:d.frontmatter)||{});e.meta.frontmatter=i,m.currentRoute.value.data=l.value,L("valaxy:frontmatter",i),globalThis.$frontmatter=i;const c={title:"我的小伙伴们",keywords:"链接",description:"小林的小伙伴们",links:"https://raw.githubusercontent.com/djzzlim/djzzlim.github.io/main/links.json",random:!0};return o({frontmatter:c}),(n,T)=>{const y=J,g=v;return u(),_(g,{frontmatter:h(i)},{"main-content-md":t(()=>[B(y,{links:c.links,random:c.random},null,8,["links","random"])]),"main-header":t(()=>[a(n.$slots,"main-header")]),"main-header-after":t(()=>[a(n.$slots,"main-header-after")]),"main-nav":t(()=>[a(n.$slots,"main-nav")]),"main-content-before":t(()=>[a(n.$slots,"main-content-before")]),"main-content":t(()=>[a(n.$slots,"main-content")]),"main-content-after":t(()=>[a(n.$slots,"main-content-after")]),"main-nav-before":t(()=>[a(n.$slots,"main-nav-before")]),"main-nav-after":t(()=>[a(n.$slots,"main-nav-after")]),comment:t(()=>[a(n.$slots,"comment")]),footer:t(()=>[a(n.$slots,"footer")]),aside:t(()=>[a(n.$slots,"aside")]),"aside-custom":t(()=>[a(n.$slots,"aside-custom")]),default:t(()=>[a(n.$slots,"default")]),_:3},8,["frontmatter"])}}};export{it as default,Q as usePageData};
