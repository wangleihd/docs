import{_ as n,o as s,c as a,a as e}from"./app.7408f20e.js";const k='{"title":"vite","description":"","frontmatter":{},"headers":[{"level":2,"title":"vite.config \u914D\u7F6E","slug":"vite-config-\u914D\u7F6E"},{"level":2,"title":"vue2.x","slug":"vue2-x"},{"level":3,"title":"\u517C\u5BB9 IE","slug":"\u517C\u5BB9-ie"},{"level":3,"title":"esbuild","slug":"esbuild"}],"relativePath":"guide/vue/vite.md","lastUpdated":1636215949409}',p={},t=e(`<h1 id="vite" tabindex="-1">vite <a class="header-anchor" href="#vite" aria-hidden="true">#</a></h1><p>\u65B0\u4E00\u4EE3\u5FEB\u901F\u6253\u5305\u5DE5\u5177</p><h2 id="vite-config-\u914D\u7F6E" tabindex="-1">vite.config \u914D\u7F6E <a class="header-anchor" href="#vite-config-\u914D\u7F6E" aria-hidden="true">#</a></h2><ul><li><a href="https://cn.vitejs.dev/guide/build.html" target="_blank" rel="noopener noreferrer">\u6253\u5305\u914D\u7F6E</a></li></ul><p>Vue \u6253\u5305\u540E\u51FA\u73B0\u4E00\u4E9B map \u6587\u4EF6,\u4FEE\u6539\u9879\u76EE\u4E0B</p><ul><li>vite.config.js</li></ul><div class="language-js line-numbers-mode"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u670D\u52A1</span>
  server<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u542F\u52A8\u7AEF\u53E3</span>
    port<span class="token operator">:</span> <span class="token number">8080</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u522B\u540D</span>
  alias<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u672C\u5730\u8DEF\u5F84\u5B9A\u4E49</span>
    <span class="token string">&#39;@&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5E26\u5B8C\u6574\u7EC4\u4EF6\u7F16\u8BD1\u6267\u884C, 3.x \u8DEF\u5F84</span>
    <span class="token comment">//vue: &#39;vue/dist/vue.esm-bundler.js&#39;,</span>
     <span class="token comment">// \u5E26\u5B8C\u6574\u7EC4\u4EF6\u7F16\u8BD1\u6267\u884C, 2.x \u8DEF\u5F84</span>
    <span class="token comment">// vue: &#39;vue/dist/vue.esm.js&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u6269\u5C55</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token comment">// \u751F\u6210\u4FDD\u7559 map \u6E90\u6587\u4EF6</span>
  productionSourceMap<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="vue2-x" tabindex="-1">vue2.x <a class="header-anchor" href="#vue2-x" aria-hidden="true">#</a></h2><h3 id="\u517C\u5BB9-ie" tabindex="-1">\u517C\u5BB9 IE <a class="header-anchor" href="#\u517C\u5BB9-ie" aria-hidden="true">#</a></h3><p>IE \u4E0D\u652F\u6301 Promise \u89E3\u51B3\u529E\u6CD5\uFF08\u53EF\u641C\u7D22 polyfill\uFF09 \u5F15\u5165 <code>&lt;script type=&quot;text/javascript&quot; src = &quot;https://cdn.polyfill.io/v2/polyfill.min.js?features=es6&quot;&gt;&lt;/script&gt;</code></p><h3 id="esbuild" tabindex="-1">esbuild <a class="header-anchor" href="#esbuild" aria-hidden="true">#</a></h3><ul><li><p>\u7F16\u8BD1\u62A5\u9519</p><p>\u5F53\u9488\u5BF9\u65E7\u7248\u6D4F\u89C8\u5668\u65F6\uFF0C\u65E0\u6CD5\u4F7F\u7528 esbuild \u4F5C\u4E3A\u7F29\u5C0F\u5668\uFF0C\u56E0\u4E3A esbuild \u7F29\u5C0F\u4E0D\u662F\u65E7\u7248\u5B89\u5168\u7684 <code>Can&#39;t use esbuild as the minifier when targeting legacy browsers because esbuild minification is not legacy safe</code> \u9700\u8981\u5173\u95ED\u538B\u7F29\uFF0C\u4EE5\u517C\u5BB9 IE</p></li></ul><div class="language-js line-numbers-mode"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u672C\u5730\u8DEF\u5F84</span>

  build<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u517C\u5BB9IE \u6D4B\u8BD5</span>
    target<span class="token operator">:</span> <span class="token string">&#39;es2015&#39;</span>
    <span class="token comment">// \u5173\u95ED\u538B\u7F29</span>
    minify<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token comment">// minify: &#39;esbuild&#39;,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div>`,13),l=[t];function o(c,i,r,u,b,m){return s(),a("div",null,l)}var v=n(p,[["render",o]]);export{k as __pageData,v as default};
