import{l as k,u as N,x as R,b as T,y as w,c as z,h as D,e as M,f as A}from"./app.C7VTKl8W.js";import{f as y,c as h,Q as _,P as s,U as a,S as i,W as u,u as o,O as m,N as H,y as r,a4 as p,a8 as x,V as I,F as O}from"./framework.DntyxCiH.js";import{u as W}from"./chunks/vue-i18n.CrruEPAC.js";import{_ as j}from"./YunSponsor.vue_vue_type_style_index_0_lang.DTCNPkGV.js";import{_ as E,a as Q,b as q}from"./YunPostMeta.vue_vue_type_style_index_0_lang.DvxVi_b4.js";import{d as C}from"./chunks/dayjs.CCYrSalk.js";import"./chunks/vue-router.BtJJQj-N.js";import"./chunks/pinia.NfdmkE6C.js";import"./chunks/@vueuse/motion.D6rQsSfL.js";import"./chunks/nprogress.BahbDzmd.js";import"./index.Clr5FEFC.js";import"./animation.C_ru2laA.js";const G={class:"post-copyright"},J={class:"post-copyright-author"},K={key:0,class:"post-copyright-link"},X=["href","title"],Z={class:"post-copyright-license"},ee=["innerHTML"],te=y({__name:"ValaxyCopyright",props:{url:{default:""}},setup(v){const{t:e,locale:t}=W(),n=k(),l=n.value.license.type==="zero"?"1.0":"4.0",f=n.value.license.type==="zero"?"publicdomain":"licenses",g=h(()=>{const c=n.value.license.language?n.value.license.language:t.value==="zh-CN"?"zh":"en";return`https://creativecommons.org/${f}/${n.value.license.type}/${l}/deed.${c}`}),d=h(()=>e("post.copyright.license_content",[`<a href="${g.value}" target="_blank" rel="noopener" title="CC ${`${n.value.license.type.toUpperCase()} ${l}`} ">CC ${n.value.license.type.toUpperCase()}</a>`]));return(c,$)=>(s(),_("ul",G,[a("li",J,[a("strong",null,u(o(e)("post.copyright.author")+o(e)("symbol.colon")),1),a("span",null,u(o(n).author.name),1)]),c.url?(s(),_("li",K,[a("strong",null,u(o(e)("post.copyright.link")+o(e)("symbol.colon")),1),a("a",{href:c.url,target:"_blank",title:o(e)("post.copyright.link")},u(decodeURI(c.url)),9,X)])):i("v-if",!0),a("li",Z,[a("strong",null,u(o(e)("post.copyright.license_title")+o(e)("symbol.colon")),1),a("span",{innerHTML:d.value},null,8,ee)])]))}}),oe={class:"inline-flex",text:"sm",py:"1"},ne={key:1,mx:"2"},se=y({__name:"YunPostCategoriesAndTags",props:{frontmatter:{}},setup(v){return(e,t)=>{const n=E,l=Q;return s(),_("div",oe,[e.frontmatter.categories?(s(),m(n,{key:0,categories:e.frontmatter.categories},null,8,["categories"])):i("v-if",!0),e.frontmatter.categories&&e.frontmatter.tags?(s(),_("span",ne)):i("v-if",!0),e.frontmatter.tags?(s(),m(l,{key:2,tags:e.frontmatter.tags},null,8,["tags"])):i("v-if",!0)])}}}),he=y({__name:"post",setup(v){const e=k(),t=N(),n=R(),l=h(()=>typeof t.value.sponsor=="boolean"?t.value.sponsor:e.value.sponsor.enable),f={"@type":"BlogPosting",headline:t.value.title,description:t.value.description,author:[{name:e.value.author.name,url:e.value.author.link}],datePublished:C(t.value.date||"").toDate(),dateModified:C(t.value.updated||"").toDate()},g=t.value.image||t.value.cover;return g&&(f.image=g),T(w(f)),(d,c)=>{const $=z,b=q,Y=se,P=j,V=te,L=H("RouterView"),S=D,U=M,B=A;return s(),_(O,null,[r(U,null,{default:p(()=>[r($),r(L,null,{default:p(({Component:F})=>[(s(),m(x(F),null,{"main-header-after":p(()=>[r(b,{frontmatter:o(t)},null,8,["frontmatter"]),r(Y,{class:"mt-2",frontmatter:o(t)},null,8,["frontmatter"])]),"main-content-after":p(()=>[l.value?(s(),m(P,{key:0,m:"t-6"})):i("v-if",!0),o(t).copyright||o(t).copyright!==!1&&o(e).license.enabled?(s(),m(V,{key:1,url:o(n),m:"y-4"},null,8,["url"])):i("v-if",!0)]),"aside-custom":p(()=>[I(d.$slots,"aside-custom")]),_:2},1024))]),_:3}),r(S)]),_:3}),r(B)],64)}}});export{he as default};
