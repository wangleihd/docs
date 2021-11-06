import{_ as s,o as a,c as n,a as e}from"./app.e2658e45.js";const h='{"title":"compositio-api","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7EC4\u5408\u5F0F compositio-api","slug":"\u7EC4\u5408\u5F0F-compositio-api"},{"level":2,"title":"vue 2.x \u8FC1\u79FB","slug":"vue-2-x-\u8FC1\u79FB"}],"relativePath":"guide/vue/compositio-api.md","lastUpdated":1636215949404}',o={},p=e(`<h1 id="compositio-api" tabindex="-1">compositio-api <a class="header-anchor" href="#compositio-api" aria-hidden="true">#</a></h1><p>\u5F53\u8FC1\u79FB\u5230 Vue 3 \u65F6\uFF0C\u53EA\u9700\u7B80\u5355\u7684\u5C06 @vue/composition-api \u66FF\u6362\u6210 vue \u5373\u53EF\u3002\u4F60\u73B0\u6709\u7684\u4EE3\u7801\u51E0\u4E4E\u65E0\u9700\u8FDB\u884C\u989D\u5916\u7684\u6539\u52A8\u3002</p><h2 id="\u7EC4\u5408\u5F0F-compositio-api" tabindex="-1">\u7EC4\u5408\u5F0F compositio-api <a class="header-anchor" href="#\u7EC4\u5408\u5F0F-compositio-api" aria-hidden="true">#</a></h2><ul><li><a href="https://github.com/vuejs/composition-api/blob/master/README.zh-CN.md" target="_blank" rel="noopener noreferrer">composition-api</a></li><li><a href="https://v3.cn.vuejs.org/guide/composition-api-introduction.html" target="_blank" rel="noopener noreferrer">\u5B98\u65B9\u6587\u6863</a></li></ul><h2 id="vue-2-x-\u8FC1\u79FB" tabindex="-1">vue 2.x \u8FC1\u79FB <a class="header-anchor" href="#vue-2-x-\u8FC1\u79FB" aria-hidden="true">#</a></h2><ul><li>\u5B89\u88C5 compositio-api</li></ul><div class="language-"><pre><code>npm i @vue/composition-api
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li>\u4F7F\u7528</li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> VueCompositionAPI <span class="token keyword">from</span> <span class="token string">&#39;@vue/composition-api&#39;</span><span class="token punctuation">;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueCompositionAPI<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue/composition-api&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,9),i=[p];function t(r,c,l,u,m,d){return a(),n("div",null,i)}var v=s(o,[["render",t]]);export{h as __pageData,v as default};
