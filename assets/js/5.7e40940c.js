(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{238:function(t,e,a){"use strict";var s=a(92);a.n(s).a},239:function(t,e,a){"use strict";var s=a(93);a.n(s).a},250:function(t,e,a){"use strict";a.r(e);var s=a(97),n=a(96),i=a(95),o=a(99),r=a(98),h=a(12),c={components:{Home:s.a,Page:i.a,Sidebar:o.a,Navbar:n.a,Footer:r.a},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(h.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,a=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(a)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},u=(a(238),a(239),a(0)),d=Object(u.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"theme-container sectionLayout",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?a("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),a("section",{staticClass:"hero"}),t._v(" "),a("section",{staticClass:"container post"},[a("article",{staticClass:"content"},[a("Content")],1)]),t._v(" "),t.$frontmatter.sidebar?a("section",{staticClass:"sidebar"},[a("Content",{attrs:{"slot-key":"sidebar"}})],1):t._e(),t._v(" "),a("Footer")],1)}),[],!1,null,"26f0efe2",null);e.default=d.exports},92:function(t,e,a){},93:function(t,e,a){}}]);