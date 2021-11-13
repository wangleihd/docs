import{_ as e,o as r,c as i,a as t}from"./app.7408f20e.js";const f='{"title":"vue 3","description":"","frontmatter":{},"headers":[{"level":2,"title":"Vue Electron \u811A\u624B\u67B6","slug":"vue-electron-\u811A\u624B\u67B6"},{"level":2,"title":"vue 2.x \u517C\u5BB9","slug":"vue-2-x-\u517C\u5BB9"},{"level":2,"title":"vue2 click","slug":"vue2-click"},{"level":3,"title":"script error \u8DE8\u57DF\u9519\u8BEF","slug":"script-error-\u8DE8\u57DF\u9519\u8BEF"},{"level":3,"title":"ios wifi Error DOM Exception 18","slug":"ios-wifi-error-dom-exception-18"}],"relativePath":"guide/vue/index.md","lastUpdated":1636215949410}',o={},a=t('<h1 id="vue-3" tabindex="-1">vue 3 <a class="header-anchor" href="#vue-3" aria-hidden="true">#</a></h1><p>vue 3.x \u6B63\u5F0F\u7248\u672C\u5DF2\u7ECF\u53D1\u5E03\uFF0C\u66F4\u5FEB\uFF0C\u66F4\u5C0F\uFF01</p><ul><li><a href="https://v3.cn.vuejs.org/" target="_blank" rel="noopener noreferrer">vue 3.x \u4E2D\u6587\u6587\u6863</a></li><li><a href="https://github.com/vuejs/vue-next" target="_blank" rel="noopener noreferrer">vue 3.x</a></li><li><a href="https://github.com/vuejs/vue-next/blob/master/CHANGELOG.md" target="_blank" rel="noopener noreferrer">vue 3.x \u66F4\u65B0\u8BF4\u660E</a></li></ul><h2 id="vue-electron-\u811A\u624B\u67B6" tabindex="-1">Vue Electron \u811A\u624B\u67B6 <a class="header-anchor" href="#vue-electron-\u811A\u624B\u67B6" aria-hidden="true">#</a></h2><ul><li><a href="https://www.debugger.wiki/article/html/1606895640411576" target="_blank" rel="noopener noreferrer">Electron \u6587\u6863</a></li></ul><h2 id="vue-2-x-\u517C\u5BB9" tabindex="-1">vue 2.x \u517C\u5BB9 <a class="header-anchor" href="#vue-2-x-\u517C\u5BB9" aria-hidden="true">#</a></h2><ul><li><a href="https://cli.vuejs.org/config/" target="_blank" rel="noopener noreferrer">vue.config \u914D\u7F6E</a>.</li></ul><h2 id="vue2-click" tabindex="-1">vue2 click <a class="header-anchor" href="#vue2-click" aria-hidden="true">#</a></h2><p>vue 3.x \u4E0E vue 2.x \u5DEE\u5F02 Vue2.x \u5B98\u65B9\u6587\u6863\u5173\u4E8E\u7236\u5B50\u7EC4\u4EF6\u901A\u8BAF\u7684\u539F\u5219\uFF0C\u7236\u7EC4\u4EF6\u901A\u8FC7 prop \u4F20\u9012\u6570\u636E\u7ED9\u5B50\u7EC4\u4EF6\uFF0C\u5B50\u7EC4\u4EF6\u89E6\u53D1\u4E8B\u4EF6\u7ED9\u7236\u7EC4\u4EF6\u3002 \u4F46\u7236\u7EC4\u4EF6\u60F3\u5728\u5B50\u7EC4\u4EF6\u4E0A\u76D1\u542C\u81EA\u5DF1\u7684 click \u7684\u8BDD\uFF0C\u9700\u8981\u52A0\u4E0A native \u4FEE\u9970\u7B26</p><ul><li><code>@click.native</code> \u662F\u7ED9\u7EC4\u4EF6\u7ED1\u5B9A\u539F\u751F\u4E8B\u4EF6</li></ul><p>vue 2.x \u7EC4\u4EF6\u9700\u8981\u4FEE\u9970\u7B26\u53F7</p><p><code>&lt;Icon type=&quot;icon-mima&quot; @click.native=&quot;btnEvent&quot; /&gt;</code></p><h3 id="script-error-\u8DE8\u57DF\u9519\u8BEF" tabindex="-1">script error \u8DE8\u57DF\u9519\u8BEF <a class="header-anchor" href="#script-error-\u8DE8\u57DF\u9519\u8BEF" aria-hidden="true">#</a></h3><p><code>script error.</code>\u6709\u65F6\u4E5F\u88AB\u79F0\u4E3A\u8DE8\u57DF\u9519\u8BEF\u3002 \u5F53\u7F51\u7AD9\u8BF7\u6C42\u5E76\u6267\u884C\u4E00\u4E2A\u6258\u7BA1\u5728\u7B2C\u4E09\u65B9\u57DF\u540D\u4E0B\u7684\u811A\u672C\u65F6\uFF0C\u5C31\u53EF\u80FD\u9047\u5230\u8BE5\u9519\u8BEF\u3002 \u6700\u5E38\u89C1\u7684\u60C5\u5F62\u662F\u4F7F\u7528 CDN \u6258\u7BA1 JS \u8D44\u6E90\u3002 \u51FA\u4E8E\u5B89\u5168\u8003\u8651\uFF0C\u6D4F\u89C8\u5668\u4F1A\u523B\u610F\u9690\u85CF\u5176\u4ED6\u57DF\u7684 JS \u6587\u4EF6\u629B\u51FA\u7684\u5177\u4F53\u9519\u8BEF\u4FE1\u606F\uFF0C\u8FD9\u6837\u505A\u53EF\u4EE5\u6709\u6548\u907F\u514D\u654F\u611F\u4FE1\u606F\u65E0\u610F\u4E2D\u88AB\u4E0D\u53D7\u63A7\u5236\u7684\u7B2C\u4E09\u65B9\u811A\u672C\u6355\u83B7\u3002</p><ul><li><p>\u65B9\u6CD5 1 \u6DFB\u52A0\u5C5E\u6027 crossorigin=&quot;anonymous&quot; \u4E0D\u5EFA\u8BAE,\u6B64\u65B9\u6CD5\u517C\u5BB9\u6027\u95EE\u9898</p><p>\u6B64\u6B65\u9AA4\u7684\u4F5C\u7528\u662F\u544A\u77E5\u6D4F\u89C8\u5668\u4EE5\u533F\u540D\u65B9\u5F0F\u83B7\u53D6\u76EE\u6807\u811A\u672C\u3002\u8FD9\u610F\u5473\u7740\u8BF7\u6C42\u811A\u672C\u65F6\u4E0D\u4F1A\u5411\u670D\u52A1\u7AEF\u53D1\u9001\u6F5C\u5728\u7684\u7528\u6237\u8EAB\u4EFD\u4FE1\u606F\uFF08\u4F8B\u5982 Cookies\u3001HTTP \u8BC1\u4E66\u7B49\uFF09\u3002 <code>&lt;script src=&quot;http://another-domain.com/app.js&quot; crossorigin=&quot;anonymous&quot;&gt;&lt;/script&gt;</code></p></li><li><p>\u65B9\u6CD5 2 \u6DFB\u52A0\u8DE8\u57DF HTTP \u54CD\u5E94\u5934\uFF1A \u6CE8\u610F\uFF1A\u5927\u90E8\u5206\u4E3B\u6D41 CDN \u9ED8\u8BA4\u6DFB\u52A0\u4E86 Access-Control-Allow-Origin \u5C5E\u6027\u3002 \u5B8C\u6210\u4E0A\u8FF0\u4E24\u6B65\u4E4B\u540E\uFF0C\u5373\u53EF\u901A\u8FC7 window.onerror \u6355\u83B7\u8DE8\u57DF\u811A\u672C\u7684\u62A5\u9519\u4FE1\u606F</p></li></ul><h3 id="ios-wifi-error-dom-exception-18" tabindex="-1">ios wifi Error DOM Exception 18 <a class="header-anchor" href="#ios-wifi-error-dom-exception-18" aria-hidden="true">#</a></h3><ul><li><p>vue \u8DEF\u7531\u95EE\u9898\u5BFC\u81F4\uFF0Cwifi \u5F39\u51FA ios \u6D4F\u89C8\u5668\uFF0C\u4E0D\u652F\u6301\u62A5\u9519 history.pushState &amp; DOM Exception 18</p><p><a href="https://github.com/vuejs/vue-router/issues/564" target="_blank" rel="noopener noreferrer">https://github.com/vuejs/vue-router/issues/564</a><code>This is a bug related to Safari. Using history: false should fix your issue. I&#39;m closing because of inactivity. If you&#39;re still facing this problem consider opening a new issue with a reproduction</code></p></li><li><p>iPhone6 \u6D4F\u89C8\u5668\u6D4B\u8BD5 log \u4E2D\u63D0\u793A SecurityError (DOM Exception 18)</p></li><li><p>HTML5 Web Demo \u62A5\u9519 (Uncaught Error: SECURITY_ERR: DOM Exception 18) \u9519\u8BEF\u6307\u5411\u6B64\u884C: History.replaceState({location:href}, &quot;&quot;, href);</p></li><li><p>DOM Exception 18 \u901A\u5E38\u610F\u5473\u7740\u4F60\u8D85\u8FC7\u4E86\u8BBE\u5907\u5141\u8BB8\u7684\u914D\u989D(50MB),\u5C3D\u7BA1\u5728\u67D0\u4E9B\u73AF\u5883\u4E2D\u5B83\u662F\u56E0\u4E3A Apple \u5220\u9664\u4E86 WebSQL \u652F\u6301(\u4F8B\u5982 WKWebView).</p></li><li><p><a href="https://github.com/pouchdb/pouchdb/issues/4234" target="_blank" rel="noopener noreferrer">https://github.com/pouchdb/pouchdb/issues/4234</a></p></li></ul>',17),l=[a];function n(c,u,s,p,h,d){return r(),i("div",null,l)}var g=e(o,[["render",n]]);export{f as __pageData,g as default};
