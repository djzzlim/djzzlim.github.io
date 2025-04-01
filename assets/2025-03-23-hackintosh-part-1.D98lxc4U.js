import{_ as g}from"./ValaxyMain.vue_vue_type_style_index_0_lang.Buyxxp3R.js";import{f,a as O,u as S}from"./chunks/vue-router.BtJJQj-N.js";import{O as k,a4 as a,V as t,U as l,X as n,u as v,P as b,A as y}from"./framework.DntyxCiH.js";import"./app.C7VTKl8W.js";import"./chunks/dayjs.CCYrSalk.js";import"./chunks/vue-i18n.CrruEPAC.js";import"./chunks/pinia.NfdmkE6C.js";import"./chunks/@vueuse/motion.D6rQsSfL.js";import"./chunks/nprogress.BahbDzmd.js";import"./YunComment.vue_vue_type_style_index_0_lang.BspCFL1X.js";import"./index.C5okkQwF.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang.CgGBEkNu.js";import"./post.BEd9R_46.js";const h="/assets/ei.BdzQ-Vu1.gif",w=f("/posts/2025-03-23-hackintosh-part-1",async i=>JSON.parse('{"title":"How to Run macOS on a PC? – Hackintosh Guide Part 1","description":"","frontmatter":{"title":"How to Run macOS on a PC? – Hackintosh Guide Part 1","title_zh":"如何在电脑上运行 macOS？—— 黑苹果指南 Part 1","date":"2025-03-23","updated":"2025-03-23","categories":"技术教程","tags":["黑苹果","macOS","Hackintosh","开发环境","iOS开发"]},"headers":[],"relativePath":"pages/posts/2025-03-23-hackintosh-part-1.md","lastUpdated":1743510221000}'),{lazy:(i,r)=>i.name===r.name}),X={__name:"2025-03-23-hackintosh-part-1",setup(i,{expose:r}){var c;const{data:s}=w(),m=S(),u=O(),o=Object.assign(u.meta.frontmatter||{},((c=s.value)==null?void 0:c.frontmatter)||{});return u.meta.frontmatter=o,m.currentRoute.value.data=s.value,y("valaxy:frontmatter",o),globalThis.$frontmatter=o,r({frontmatter:{title:"How to Run macOS on a PC? – Hackintosh Guide Part 1",title_zh:"如何在电脑上运行 macOS？—— 黑苹果指南 Part 1",date:"2025-03-23",updated:"2025-03-23",categories:"技术教程",tags:["黑苹果","macOS","Hackintosh","开发环境","iOS开发"]}}),(e,d)=>{const p=g;return b(),k(p,{frontmatter:v(o)},{"main-content-md":a(()=>d[0]||(d[0]=[l("div",{lang:"zh-CN"},[l("p",null,"小时候看苹果发布会，总觉得 Mac 电脑又流畅又先进，对比自己笨重的 Windows 设备，心里难免有点羡慕。而且如果想要开发 iOS App，必须要用 Xcode，而 Xcode 只能在 macOS 上运行。可是当你打开苹果官网，看看 Mac 电脑的价格："),l("blockquote",null,[l("p",null,[n("“个，十，百，千……”"),l("br"),n(" “太贵了！”")])]),l("p",null,"那有没有其他方法呢？"),l("figure",null,[l("img",{src:h,alt:"啊有了",width:"300",loading:"lazy",decoding:"async"})]),l("p",null,[l("strong",null,"有！"),n(" 这时候就轮到 "),l("strong",null,"黑苹果（Hackintosh）"),n(" 闪亮登场了。")]),l("hr"),l("h3",{lang:"zh-CN",id:"什么是黑苹果",tabindex:"-1"},[n("什么是黑苹果？ "),l("a",{class:"header-anchor",href:"#什么是黑苹果","aria-label":'Permalink to "什么是黑苹果？{lang="zh-CN"}"'},"​")]),l("p",null,[l("strong",null,"黑苹果（Hackintosh）"),n("，简单来说就是让 macOS 运行在非苹果硬件上。通过修改 EFI 引导、配置内核补丁等方式，可以让 PC 电脑成功运行 macOS，并且在某些情况下，黑苹果的性能甚至可以超过某些官方 Mac 设备。")]),l("p",null,"你可能会问："),l("blockquote",null,[l("p",null,"“为什么不用 VMware、VirtualBox 或 QEMU 直接虚拟 macOS？”")]),l("p",null,[n("答案是：虚拟机无法提供完整的 macOS 体验，特别是"),l("strong",null,"没有 3D 硬件加速"),n("，导致 Xcode 编译速度慢、动画掉帧，甚至某些应用无法运行。所以，如果想要稳定使用 macOS，"),l("strong",null,"只能选择物理机安装"),n("。")]),l("hr"),l("h3",{lang:"zh-CN",id:"黑苹果-vs-linux",tabindex:"-1"},[n("黑苹果 vs. Linux "),l("a",{class:"header-anchor",href:"#黑苹果-vs-linux","aria-label":'Permalink to "黑苹果 vs. Linux {lang="zh-CN"}"'},"​")]),l("p",null,"有人可能会想："),l("blockquote",null,[l("p",null,"“那为什么不直接用 Linux 呢？Linux 不是比 macOS 更开放、更自由吗？”")]),l("p",null,"的确，Linux 很香，特别是对于开发者来说，Linux 生态强大，命令行体验优秀。但是 macOS 依然有一些独特的优势："),l("ol",null,[l("li",null,[l("strong",null,"Xcode 只能在 macOS 上运行"),n("（开发 iOS / macOS 必备）。")]),l("li",null,[l("strong",null,"Final Cut Pro、Logic Pro 等专业软件"),n(" 只有 macOS 版本。")]),l("li",null,[l("strong",null,"macOS 原生支持 Adobe 系列软件"),n("（虽然 Linux 也能用替代品，但体验还是不一样）。")]),l("li",null,[l("strong",null,"macOS 更适合 UI 设计师"),n("（Sketch、Figma 等工具在 macOS 上体验更好）。")])]),l("p",null,"所以，如果你是开发者、设计师或者剪辑师，macOS 可能是绕不开的选择。"),l("hr"),l("h3",{lang:"zh-CN",id:"黑苹果的安装流程概述",tabindex:"-1"},[n("黑苹果的安装流程概述 "),l("a",{class:"header-anchor",href:"#黑苹果的安装流程概述","aria-label":'Permalink to "黑苹果的安装流程概述 {lang="zh-CN"}"'},"​")]),l("p",null,"黑苹果的安装不是一键搞定的，需要一定的技术门槛。大致流程如下："),l("ol",null,[l("li",null,[l("p",null,[l("strong",null,"检查硬件兼容性")]),l("ul",null,[l("li",null,"Intel CPU（10 代及以下兼容性较好）"),l("li",null,"AMD Ryzen 需要特殊补丁（不建议新手尝试）"),l("li",null,"兼容的主板（推荐使用 Intel 芯片组，如 B460、Z490）"),l("li",null,[n("AMD / Nvidia 独显在 macOS 支持有限，"),l("strong",null,"推荐使用核显（如 Intel UHD 630）"),n(" 或 "),l("strong",null,"RX 580 / 6600 XT")]),l("li",null,[n("于详细的GPU兼容性，请查看 "),l("a",{href:"https://dortania.github.io/GPU-Buyers-Guide/",target:"_blank",rel:"noreferrer"},"Dortania GPU 购买指南")])])]),l("li",null,[l("p",null,[l("strong",null,"制作 macOS 启动盘")]),l("ul",null,[l("li",null,"需要一个 16GB 以上的 U 盘"),l("li",null,"使用 macOS / Windows 制作 OpenCore / Clover 引导")])]),l("li",null,[l("p",null,[l("strong",null,"引导并安装 macOS")]),l("ul",null,[l("li",null,"进入 OpenCore / Clover 选择安装 macOS"),l("li",null,"格式化磁盘，安装 macOS")])]),l("li",null,[l("p",null,[l("strong",null,"驱动修复")]),l("ul",null,[l("li",null,"修复显卡驱动、声卡、网卡等"),l("li",null,"调整 USB 映射，优化电源管理")])]),l("li",null,[l("p",null,[l("strong",null,"优化体验")]),l("ul",null,[l("li",null,"安装 Xcode、Adobe 软件等"),l("li",null,"配置 iCloud、Handoff 等功能")])])]),l("hr"),l("h3",{lang:"zh-CN",id:"黑苹果的优缺点",tabindex:"-1"},[n("黑苹果的优缺点 "),l("a",{class:"header-anchor",href:"#黑苹果的优缺点","aria-label":'Permalink to "黑苹果的优缺点 {lang="zh-CN"}"'},"​")]),l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"优点"),l("th",null,"缺点")])]),l("tbody",null,[l("tr",null,[l("td",null,"省钱，不用买昂贵的 Mac"),l("td",null,"安装过程复杂，需要折腾")]),l("tr",null,[l("td",null,"硬件可选，性能可以更强"),l("td",null,"不是所有硬件都兼容")]),l("tr",null,[l("td",null,"可运行 macOS 专属软件"),l("td",null,"macOS 更新可能会导致系统损坏")])])]),l("hr"),l("h3",{lang:"zh-CN",id:"结语",tabindex:"-1"},[n("结语 "),l("a",{class:"header-anchor",href:"#结语","aria-label":'Permalink to "结语 {lang="zh-CN"}"'},"​")]),l("p",null,"黑苹果是一个有趣且实用的方案，特别是对于想开发 iOS App 但买不起 Mac 的开发者来说，是一个不错的选择。当然，安装黑苹果并不简单，需要不断调整和优化，但当你看到 macOS 在自己的 PC 上流畅运行时，那种成就感是无与伦比的！"),l("p",null,"如果你对黑苹果感兴趣，不妨试试看！")],-1),l("div",{lang:"en"},[l("p",null,"As a kid watching Apple keynotes, I always thought Mac computers were smooth and advanced. Comparing them to my clunky Windows device, I couldn’t help feeling envious. Plus, if you want to develop iOS apps, you need Xcode, which only runs on macOS. But when you open Apple’s website and look at Mac prices:"),l("blockquote",null,[l("p",null,'"Hundreds, thousands…" "Too expensive!"')]),l("p",null,"Is there another way?"),l("figure",null,[l("img",{src:h,alt:"Aha, got it!",width:"300",loading:"lazy",decoding:"async"})]),l("p",null,[l("strong",null,"Yes!")]),l("p",null,[n("This is where "),l("strong",null,"Hackintosh"),n(" comes into play.")]),l("hr"),l("h3",{lang:"en",id:"what-is-a-hackintosh",tabindex:"-1"},[n("What is a Hackintosh? "),l("a",{class:"header-anchor",href:"#what-is-a-hackintosh","aria-label":'Permalink to "What is a Hackintosh? {lang="en"}"'},"​")]),l("p",null,[n("A "),l("strong",null,"Hackintosh"),n(" is simply running macOS on non-Apple hardware. By modifying the EFI boot system and configuring kernel patches, you can get a PC to successfully run macOS. In some cases, a Hackintosh can even outperform certain official Mac devices.")]),l("p",null,"You might ask:"),l("blockquote",null,[l("p",null,'"Why not just use VMware, VirtualBox, or QEMU to virtualize macOS?"')]),l("p",null,[n("The answer is: virtual machines can’t provide a complete macOS experience, especially without "),l("strong",null,"3D hardware acceleration"),n(", leading to slow Xcode compilation, dropped animation frames, and some applications not running at all. So, if you want stable macOS usage, "),l("strong",null,"physical installation is the only option"),n(".")]),l("hr"),l("h3",{lang:"en",id:"hackintosh-vs-linux",tabindex:"-1"},[n("Hackintosh vs. Linux "),l("a",{class:"header-anchor",href:"#hackintosh-vs-linux","aria-label":'Permalink to "Hackintosh vs. Linux {lang="en"}"'},"​")]),l("p",null,"Some might wonder:"),l("blockquote",null,[l("p",null,'"Why not just use Linux? Isn’t Linux more open and free than macOS?"')]),l("p",null,"Indeed, Linux is great, especially for developers with its powerful ecosystem and excellent command-line experience. But macOS still has some unique advantages:"),l("ol",null,[l("li",null,[l("strong",null,"Xcode only runs on macOS"),n(" (essential for iOS/macOS development).")]),l("li",null,[l("strong",null,"Professional software like Final Cut Pro and Logic Pro"),n(" only have macOS versions.")]),l("li",null,[l("strong",null,"macOS natively supports Adobe software"),n(" (while Linux can use alternatives, the experience is different).")]),l("li",null,[l("strong",null,"macOS is better suited for UI designers"),n(" (tools like Sketch and Figma have better experiences on macOS).")])]),l("p",null,"So, if you’re a developer, designer, or video editor, macOS might be unavoidable."),l("hr"),l("h3",{lang:"en",id:"hackintosh-installation-process-overview",tabindex:"-1"},[n("Hackintosh Installation Process Overview "),l("a",{class:"header-anchor",href:"#hackintosh-installation-process-overview","aria-label":'Permalink to "Hackintosh Installation Process Overview {lang="en"}"'},"​")]),l("p",null,"Installing a Hackintosh isn’t a one-click solution; it requires some technical knowledge. The general process is:"),l("ol",null,[l("li",null,[l("p",null,[l("strong",null,"Check hardware compatibility")]),l("ul",null,[l("li",null,"Intel CPUs (10th generation and below have better compatibility)"),l("li",null,"AMD Ryzen requires special patches (not recommended for beginners)"),l("li",null,"Compatible motherboards (Intel chipsets recommended, like B460, Z490)"),l("li",null,[n("AMD/Nvidia GPUs have limited support in macOS, "),l("strong",null,"integrated graphics (like Intel UHD 630)"),n(" or "),l("strong",null,"RX 580/6600 XT"),n(" are recommended")]),l("li",null,[n("For detailed GPU compatibility, check the "),l("a",{href:"https://dortania.github.io/GPU-Buyers-Guide/",target:"_blank",rel:"noreferrer"},"Dortania GPU Buyers Guide")])])]),l("li",null,[l("p",null,[l("strong",null,"Create a macOS boot drive")]),l("ul",null,[l("li",null,"Requires a 16GB+ USB drive"),l("li",null,"Use macOS/Windows to create OpenCore/Clover boot")])]),l("li",null,[l("p",null,[l("strong",null,"Boot and install macOS")]),l("ul",null,[l("li",null,"Enter OpenCore/Clover to select macOS installation"),l("li",null,"Format disk, install macOS")])]),l("li",null,[l("p",null,[l("strong",null,"Fix drivers")]),l("ul",null,[l("li",null,"Fix graphics, audio, network card drivers"),l("li",null,"Adjust USB mapping, optimize power management")])]),l("li",null,[l("p",null,[l("strong",null,"Optimize experience")]),l("ul",null,[l("li",null,"Install Xcode, Adobe software, etc."),l("li",null,"Configure iCloud, Handoff, and other features")])])]),l("hr"),l("h3",{lang:"en",id:"pros-and-cons-of-hackintosh",tabindex:"-1"},[n("Pros and Cons of Hackintosh "),l("a",{class:"header-anchor",href:"#pros-and-cons-of-hackintosh","aria-label":'Permalink to "Pros and Cons of Hackintosh {lang="en"}"'},"​")]),l("table",null,[l("thead",null,[l("tr",null,[l("th",null,"Pros"),l("th",null,"Cons")])]),l("tbody",null,[l("tr",null,[l("td",null,"Save money, no need to buy expensive Macs"),l("td",null,"Complex installation process, requires tinkering")]),l("tr",null,[l("td",null,"Hardware choices, can have stronger performance"),l("td",null,"Not all hardware is compatible")]),l("tr",null,[l("td",null,"Can run macOS-exclusive software"),l("td",null,"macOS updates may damage the system")])])]),l("hr"),l("h3",{lang:"en",id:"conclusion",tabindex:"-1"},[n("Conclusion "),l("a",{class:"header-anchor",href:"#conclusion","aria-label":'Permalink to "Conclusion {lang="en"}"'},"​")]),l("p",null,"Hackintosh is an interesting and practical solution, especially for developers who want to develop iOS apps but can’t afford a Mac. Of course, installing a Hackintosh isn’t simple and requires constant adjustment and optimization, but when you see macOS running smoothly on your PC, that sense of achievement is incomparable!"),l("p",null,"If you’re interested in Hackintosh, why not give it a try!")],-1)])),"main-header":a(()=>[t(e.$slots,"main-header")]),"main-header-after":a(()=>[t(e.$slots,"main-header-after")]),"main-nav":a(()=>[t(e.$slots,"main-nav")]),"main-content-before":a(()=>[t(e.$slots,"main-content-before")]),"main-content":a(()=>[t(e.$slots,"main-content")]),"main-content-after":a(()=>[t(e.$slots,"main-content-after")]),"main-nav-before":a(()=>[t(e.$slots,"main-nav-before")]),"main-nav-after":a(()=>[t(e.$slots,"main-nav-after")]),comment:a(()=>[t(e.$slots,"comment")]),footer:a(()=>[t(e.$slots,"footer")]),aside:a(()=>[t(e.$slots,"aside")]),"aside-custom":a(()=>[t(e.$slots,"aside-custom")]),default:a(()=>[t(e.$slots,"default")]),_:3},8,["frontmatter"])}}};export{X as default,w as usePageData};
