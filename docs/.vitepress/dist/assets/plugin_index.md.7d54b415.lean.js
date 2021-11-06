import{_ as c,r as e,o as i,c as u,b as p,w as t,a,d as n,e as s}from"./app.e2658e45.js";var d="/docs/assets/logo.f29f794a.png";const S='{"title":"vitepress \u63D2\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"vitepress \u5FEB\u901F\u4F7F\u7528","slug":"vitepress-\u5FEB\u901F\u4F7F\u7528"},{"level":2,"title":"quick-plugin-md \u7EC4\u4EF6","slug":"quick-plugin-md-\u7EC4\u4EF6"},{"level":2,"title":"\u76EE\u5F55\u7ED3\u6784","slug":"\u76EE\u5F55\u7ED3\u6784"},{"level":2,"title":"vitepress config \u914D\u7F6E","slug":"vitepress-config-\u914D\u7F6E"},{"level":3,"title":"vitepress js head\u5F15\u5165","slug":"vitepress-js-head\u5F15\u5165"},{"level":2,"title":"markdown Line Numbers \u884C\u53F7","slug":"markdown-line-numbers-\u884C\u53F7"},{"level":2,"title":"\u4F7F\u7528\u7EC4\u4EF6 vue","slug":"\u4F7F\u7528\u7EC4\u4EF6-vue"},{"level":2,"title":"Usage \u7EC4\u4EF6\u5F15\u7528","slug":"usage-\u7EC4\u4EF6\u5F15\u7528"},{"level":2,"title":"\u56FE\u7247\u7EC4\u4EF6 Picture","slug":"\u56FE\u7247\u7EC4\u4EF6-picture"},{"level":2,"title":"CodeRun \u6267\u884C\u4EE3\u7801","slug":"coderun-\u6267\u884C\u4EE3\u7801"},{"level":2,"title":"CodeRun props \u5C5E\u6027","slug":"coderun-props-\u5C5E\u6027"},{"level":2,"title":"\u7ED8\u56FE\u7EC4\u4EF6 Mermaid","slug":"\u7ED8\u56FE\u7EC4\u4EF6-mermaid"}],"relativePath":"plugin/index.md","lastUpdated":1636215949454}',k={},b=a(`__VP_STATIC_START__<h1 id="vitepress-\u63D2\u4EF6" tabindex="-1">vitepress \u63D2\u4EF6 <a class="header-anchor" href="#vitepress-\u63D2\u4EF6" aria-hidden="true">#</a></h1><p>\u652F\u6301\u7AD9\u5185\u641C\u7D22,markdown \u4E2D\u8FD0\u884C vue3 \u7EC4\u4EF6\uFF0C\u4E0E\u753B\u7684\u65F6\u5E8F\u56FE\uFF0C\u56FE\u8868\u7EC4\u4EF6\uFF0C\u53EF\u5728\u7EBF\u5B9E\u65F6\u7F16\u8F91</p><ul><li><a href="./../guide/vscode.html">VSCode \u5F00\u53D1\u5DE5\u5177\u53CA\u5176\u63D2\u4EF6</a></li><li><a href="./vitepress.html">vitepress \u5B98\u65B9\u6587\u6863</a></li><li><a href="https://www.npmjs.com/package/quick-plugin-md" target="_blank" rel="noopener noreferrer">quick-plugin-md \u63D2\u4EF6</a></li><li><a href="https://markdown-it.docschina.org/" target="_blank" rel="noopener noreferrer">markdown-it</a></li><li><a href="https://mermaid-js.github.io/" target="_blank" rel="noopener noreferrer">mermaid \u56FE\u8868\u63D2\u4EF6</a></li></ul><h2 id="vitepress-\u5FEB\u901F\u4F7F\u7528" tabindex="-1">vitepress \u5FEB\u901F\u4F7F\u7528 <a class="header-anchor" href="#vitepress-\u5FEB\u901F\u4F7F\u7528" aria-hidden="true">#</a></h2><ul><li><p>\u4E0B\u8F7D\u5F00\u7BB1\u5373\u7528\u6587\u6863\u6A21\u677F <a href="https://gitee.com/qve/vitepress-template" target="_blank" rel="noopener noreferrer">vitepress-template </a></p></li><li><p>\u89E3\u538B\u5230\u6587\u4EF6\u5939\uFF0C\u5728\u7EC8\u7AEF\u4E2D\u6267\u884C</p></li></ul><div class="language-sh line-numbers-mode"><pre><code># \u5B89\u88C5

yarn

## \u6D4B\u8BD5

yarn docs:dev

## \u6253\u5305

yarn docs:build
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="warning custom-block"><p class="custom-block-title">\u7279\u522B\u6CE8\u610F</p><p>\u9996\u6B21\u8FD0\u884C\u6D4B\u8BD5\u6709\u53EF\u80FD\u4F1A\u62A5\u8DEF\u5F84\u9519\u8BEF\uFF0C\u8BF7\u591A\u5237\u65B0\u51E0\u6B21\uFF0C\u5373\u53EF\u6B63\u5E38\u8FD0\u884C\u3002</p></div><h2 id="quick-plugin-md-\u7EC4\u4EF6" tabindex="-1">quick-plugin-md \u7EC4\u4EF6 <a class="header-anchor" href="#quick-plugin-md-\u7EC4\u4EF6" aria-hidden="true">#</a></h2><ul><li>[x] <code>CodeRun</code> \u4EE3\u7801\u6267\u884C\u7EC4\u4EF6</li><li>[x] <code>SearchBar</code> \u641C\u7D22\u7EC4\u4EF6</li><li>[x] <code>Mermaid</code> \u6D41\u7A0B\u56FE\u7EC4\u4EF6</li><li>[x] <code>Picture</code> \u56FE\u7247\u7EC4\u4EF6</li><li>[ ] \u652F\u6301 i18n \u591A\u56FD\u8BED\u8A00</li></ul><h2 id="\u76EE\u5F55\u7ED3\u6784" tabindex="-1">\u76EE\u5F55\u7ED3\u6784 <a class="header-anchor" href="#\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a></h2><p>\u53EF\u4EE5\u4F7F\u7528\u76EE\u5F55\u751F\u6210\u63D2\u4EF6</p><div class="language-js line-numbers-mode"><pre><code><span class="token operator">|</span><span class="token operator">--</span> project               \u9879\u76EE\u6839\u76EE\u5F55
    <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>md          \u9996\u9875
    <span class="token operator">|</span><span class="token operator">--</span> keywords<span class="token punctuation">.</span>json     \u641C\u7D22\u6570\u636E\u6E90\uFF0C\u6839\u636E\u6587\u6863\u81EA\u52A8\u751F\u6210
    <span class="token operator">|</span><span class="token operator">--</span> <span class="token keyword">package</span><span class="token punctuation">.</span>json      \u914D\u7F6E\u6587\u4EF6
    <span class="token operator">|</span><span class="token operator">--</span> docs              \u6587\u6863\u76EE\u5F55
        <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>md         \u6587\u6863\u9996\u9875
        <span class="token operator">|</span><span class="token operator">--</span> <span class="token punctuation">.</span>vitepress       \u63D2\u4EF6\u76EE\u5F55
        <span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> config<span class="token punctuation">.</span>js    \u63D2\u4EF6\u914D\u7F6E\u6587\u4EF6
        <span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> plus<span class="token punctuation">.</span>js      \u5916\u6302\u63D2\u4EF6\u914D\u7F6E\u6587\u4EF6\uFF0C\u8DEF\u5F84\u914D\u7F6E
        <span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> theme             \u81EA\u5B9A\u4E49\u4E3B\u9898
        <span class="token operator">|</span>       <span class="token operator">|</span><span class="token operator">--</span> index<span class="token punctuation">.</span>js      \u542F\u52A8
        <span class="token operator">|</span>       <span class="token operator">|</span><span class="token operator">--</span> Layout<span class="token punctuation">.</span>vue    \u641C\u7D22\u4E3B\u9898\u5B9A\u4E49
        <span class="token operator">|</span>       <span class="token operator">|</span><span class="token operator">--</span> startup<span class="token punctuation">.</span>js    \u7EC4\u4EF6\u52A0\u8F7D
        <span class="token operator">|</span>       <span class="token operator">|</span><span class="token operator">--</span> vue<span class="token punctuation">.</span>api<span class="token punctuation">.</span>js    vue \u7EC4\u4EF6\u914D\u7F6E
        <span class="token operator">|</span><span class="token operator">--</span> <span class="token keyword">public</span>          \u516C\u5171\u6587\u4EF6\u5939
        <span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> favicon<span class="token punctuation">.</span>ico
        <span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> fonts       \u963F\u91CC\u5B57\u4F53\u6587\u4EF6\uFF0Ciconfont
        <span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> demo<span class="token punctuation">.</span>css
        <span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> demo_index<span class="token punctuation">.</span>html
        <span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> iconfont<span class="token punctuation">.</span>css
        <span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> iconfont<span class="token punctuation">.</span>eot
        <span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> iconfont<span class="token punctuation">.</span>js
        <span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> iconfont<span class="token punctuation">.</span>json
        <span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> iconfont<span class="token punctuation">.</span>svg
        <span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> iconfont<span class="token punctuation">.</span>ttf
        <span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> iconfont<span class="token punctuation">.</span>woff
        <span class="token operator">|</span>   <span class="token operator">|</span>   <span class="token operator">|</span><span class="token operator">--</span> iconfont<span class="token punctuation">.</span>woff2
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><h2 id="vitepress-config-\u914D\u7F6E" tabindex="-1">vitepress config \u914D\u7F6E <a class="header-anchor" href="#vitepress-config-\u914D\u7F6E" aria-hidden="true">#</a></h2><ul><li><a href="https://vitepress.vuejs.org/guide/global-computed.html" target="_blank" rel="noopener noreferrer">\u914D\u7F6E\u6587\u6863</a></li></ul><blockquote><p>.vitepress&gt;config.js</p></blockquote><div class="language-js line-numbers-mode"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  base<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
  title<span class="token operator">:</span> <span class="token string">&#39;Quick \u6587\u6863 &#39;</span> <span class="token operator">+</span> version<span class="token punctuation">,</span>
  description<span class="token operator">:</span> <span class="token string">&#39;quick net core \u9879\u76EE\u5F00\u53D1\u5E93&#39;</span><span class="token punctuation">,</span>
  alias<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;@&#39;</span><span class="token operator">:</span> root<span class="token punctuation">.</span>path<span class="token punctuation">,</span>
    vue<span class="token operator">:</span> <span class="token string">&#39;vue/dist/vue.esm-bundler.js&#39;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
   <span class="token comment">// \u5934\u90E8\u5F15\u5165\u7B2C\u4E09\u65B9\u6D41\u7A0B\u56FE\u811A\u672C</span>
  <span class="token comment">// head: [[&#39;script&#39;, { type: &#39;module&#39;, src: root.base + &#39;/js/mermaid.min.js&#39; }]],</span>
  locales<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
    docsDir<span class="token operator">:</span> <span class="token string">&#39;docs&#39;</span><span class="token punctuation">,</span>
    logo<span class="token operator">:</span> <span class="token string">&#39;img/logo.png&#39;</span><span class="token punctuation">,</span>
    lastUpdated<span class="token operator">:</span> <span class="token string">&#39;Last Updated&#39;</span><span class="token punctuation">,</span>
    editLinkText<span class="token operator">:</span> <span class="token string">&#39;Edit this page on Gitee&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// \u7F16\u8F91\u8FDE\u63A5</span>
    editLink<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    nextLinks<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    prevLinks<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token comment">// \u5BFC\u822A\u680F</span>
    sidebar<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// &#39;auto&#39;,</span>
    <span class="token comment">// \u5C42\u6B21</span>
    <span class="token comment">// sidebarDepth: 2,</span>
    <span class="token comment">// \u9876\u90E8\u5BFC\u822A</span>
    nav<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// \u4FA7\u8FB9\u680F</span>
    sidebar<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  markdown<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u63CF\u70B9 options for markdown-it-anchor</span>
    anchor<span class="token operator">:</span> <span class="token punctuation">{</span> permalink<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token comment">// \u76EE\u5F55 options for markdown-it-toc</span>
    toc<span class="token operator">:</span> <span class="token punctuation">{</span> includeLevel<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token function-variable function">config</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">md</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u81EA\u5B9A\u4E49\u5916\u6302 use more markdown-it plugins!</span>
      md<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;markdown-it-xxx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><h3 id="vitepress-js-head\u5F15\u5165" tabindex="-1">vitepress js head\u5F15\u5165 <a class="header-anchor" href="#vitepress-js-head\u5F15\u5165" aria-hidden="true">#</a></h3><p>\u9700\u8981\u5728<code>config</code>\u4E2D\u914D\u7F6Ehead</p><blockquote><p>.vitepress&gt;config.js</p></blockquote><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// \u5982\u9700\u53D1\u5E03\u5230\u4E8C\u7EA7\u76EE\u5F55</span>
<span class="token keyword">const</span> _base<span class="token operator">=</span><span class="token string">&#39;/net&#39;</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6587\u4EF6\u6839\u76EE\u5F55\u4E0E</span>
  base<span class="token operator">:</span> _base<span class="token punctuation">,</span>
   <span class="token comment">// \u5934\u90E8\u5F15\u5165public\u4E0B\u7B2C\u4E09\u65B9\u6D41\u7A0B\u56FE\u811A\u672C root.base</span>
  head<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;script&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&#39;module&#39;</span><span class="token punctuation">,</span> src<span class="token operator">:</span>_base <span class="token operator">+</span> <span class="token string">&#39;/js/mermaid.min.js&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="markdown-line-numbers-\u884C\u53F7" tabindex="-1">markdown Line Numbers \u884C\u53F7 <a class="header-anchor" href="#markdown-line-numbers-\u884C\u53F7" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><div class="highlight-lines"><br><br><div class="highlighted">\xA0</div><br><br><br><br></div><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  markdown<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u663E\u793A\u884C\u53F7</span>
    lineNumbers<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u4F7F\u7528\u7EC4\u4EF6-vue" tabindex="-1">\u4F7F\u7528\u7EC4\u4EF6 vue <a class="header-anchor" href="#\u4F7F\u7528\u7EC4\u4EF6-vue" aria-hidden="true">#</a></h2><p>Using Vue in Markdown</p><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// \u9ED8\u8BA4\u4E3B\u9898</span>
<span class="token keyword">import</span> DefaultTheme <span class="token keyword">from</span> <span class="token string">&#39;vitepress/theme&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>DefaultTheme<span class="token punctuation">,</span>
  <span class="token function">enhanceApp</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> app <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6CE8\u518C\u5168\u5C40\u7EC4\u4EF6</span>
    app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;VueClickAwayExample&#39;</span><span class="token punctuation">,</span> VueClickAwayExample<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li>markdown \u5168\u5C40\u4F7F\u7528\u7EC4\u4EF6</li></ul><div class="language-md line-numbers-mode"><pre><code><span class="token title important"><span class="token punctuation">#</span> Vue Click Away</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VueClickAwayExample</span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="usage-\u7EC4\u4EF6\u5F15\u7528" tabindex="-1">Usage \u7EC4\u4EF6\u5F15\u7528 <a class="header-anchor" href="#usage-\u7EC4\u4EF6\u5F15\u7528" aria-hidden="true">#</a></h2><ul><li>\u4E3B\u9898\u5F15\u5165\u5168\u5C40\u7EC4\u4EF6\u5E93</li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// .vitepress/theme/index.js</span>
<span class="token keyword">import</span> Layout <span class="token keyword">from</span> <span class="token string">&#39;./Layout.vue&#39;</span><span class="token punctuation">;</span>
<span class="token comment">//import DefaultTheme from &#39;vitepress/theme&#39;;</span>
<span class="token keyword">import</span> qm <span class="token keyword">from</span> <span class="token string">&#39;quick-plugin-md&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">//...DefaultTheme,</span>
  Layout<span class="token punctuation">,</span>
  <span class="token comment">// NotFound: () =&gt; &#39;custom 404&#39;, // &lt;- this is a Vue 3 functional component</span>
  <span class="token function">enhanceApp</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> app<span class="token punctuation">,</span> router<span class="token punctuation">,</span> siteData <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// app is the Vue 3 app instance from \`createApp()\`. router is VitePress&#39;</span>
    <span class="token comment">// custom router. \`siteData\`\` is a \`ref\`\` of current site-level metadata.</span>
    <span class="token comment">// \u6CE8\u518C\u5168\u5C40\u7EC4\u4EF6</span>
    app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>qm<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="\u56FE\u7247\u7EC4\u4EF6-picture" tabindex="-1">\u56FE\u7247\u7EC4\u4EF6 Picture <a class="header-anchor" href="#\u56FE\u7247\u7EC4\u4EF6-picture" aria-hidden="true">#</a></h2><p>\u516C\u5171\u6587\u4EF6\u5939\u9759\u6001\u8DEF\u5F84</p><ul><li>\u793A\u4F8B</li></ul>__VP_STATIC_END__`,33),m=n("p",null,[n("img",{src:d,alt:"Alt pic"})],-1),h=a(`__VP_STATIC_START__<ul><li>\u4F7F\u7528</li></ul><div class="language-md line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Picture</span> <span class="token attr-name">scale</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>50<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">width</span><span class="token punctuation">:</span>5rem</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
  <span class="token url"><span class="token operator">!</span>[<span class="token content">Alt pic</span>](<span class="token url">../public/img/logo.png</span>)</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Picture</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ul><li>props</li></ul><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>zoom</td><td>\u662F\u5426\u542F\u7528\u70B9\u51FB\u7F29\u653E</td><td>Boolean</td><td>true</td></tr><tr><td>scale</td><td>\u70B9\u51FB\u89E6\u53D1\u7684\u521D\u59CB\u7F29\u653E\u6BD4\u4F8B 100%</td><td>Number</td><td>100</td></tr></tbody></table><h2 id="coderun-\u6267\u884C\u4EE3\u7801" tabindex="-1">CodeRun \u6267\u884C\u4EE3\u7801 <a class="header-anchor" href="#coderun-\u6267\u884C\u4EE3\u7801" aria-hidden="true">#</a></h2><p>\u5728\u7EBF\u6267\u884C\u7F16\u8F91 <code>JS</code> \u4EE3\u7801\u3002</p><ul><li><a href="./../guide/vscode.html#\u7ED3\u5C3E\u52A0\u5206\u53F7">vscode \u63D2\u4EF6\u81EA\u52A8\u52A0\u5206\u53F7</a></li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>\u7279\u522B\u6CE8\u610F js \u4EE3\u7801\u884C\u7ED3\u675F\u9700\u8981\u52A0\u5206\u53F7\uFF0C\u5EFA\u8BAE\u4F7F\u7528 vscode \u63D2\u4EF6\u81EA\u52A8\u5904\u7406\u3002</p></div><ul><li>\u793A\u4F8B</li></ul>__VP_STATIC_END__`,9),g=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token comment"},"// js\u8BED\u8A00\u7C7B\u522B \u5728\u7EBF\u6D4B\u8BD5\u6267\u884C\u4EE3\u7801"),s(`
`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br")])],-1),v=a(`__VP_STATIC_START__<ul><li>\u4F7F\u7528</li></ul><div class="language-md line-numbers-mode"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CodeRun</span> <span class="token attr-name">editable</span><span class="token punctuation">&gt;</span></span>

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js"><span class="token comment">// \u8F93\u51FA\u6267\u884C\u7ED3\u679C</span>
<span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CodeRun</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="coderun-props-\u5C5E\u6027" tabindex="-1">CodeRun props \u5C5E\u6027 <a class="header-anchor" href="#coderun-props-\u5C5E\u6027" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>editable</td><td>\u53EF\u7F16\u8F91\u6A21\u5F0F</td><td>Boolean</td><td>false</td></tr><tr><td>auto</td><td>\u81EA\u52A8\u8F93\u51FA\u7ED3\u679C</td><td>Boolean</td><td>false</td></tr><tr><td>mini</td><td>\u4E0D\u538B\u7F29 js \u4EE3\u7801\uFF0C\u7528\u4E8E\u8C03\u8BD5</td><td>Boolean</td><td>false</td></tr><tr><td>ubb</td><td>\u4E0D\u5BF9\u5185\u5BB9\u8FDB\u884C ubb \u89E3\u7801\uFF0C\u7528\u4E8E\u8C03\u8BD5</td><td>Boolean</td><td>false</td></tr><tr><td>test</td><td>\u8F93\u51FA\u8C03\u8BD5\u4FE1\u606F\uFF0C\u7528\u4E8E\u8C03\u8BD5</td><td>Boolean</td><td>false</td></tr><tr><td>styled</td><td>class=&quot;Code&quot; \u6837\u5F0F\u5B9A\u4E49</td><td>String</td><td></td></tr><tr><td>pars</td><td>\u4F20\u5165\u7ED1\u5B9A\u7EC4\u4EF6\u7684\u53C2\u6570 props \u7684\u521D\u59CB\u503C,</td><td>String, Object, Array, Number</td><td></td></tr><tr><td>dll</td><td>\u4F20\u5165\u7684\u5916\u90E8\u51FD\u6570\u5E93\u540D<code>json,htmll</code></td><td>String</td><td></td></tr></tbody></table><h2 id="\u7ED8\u56FE\u7EC4\u4EF6-mermaid" tabindex="-1">\u7ED8\u56FE\u7EC4\u4EF6 Mermaid <a class="header-anchor" href="#\u7ED8\u56FE\u7EC4\u4EF6-mermaid" aria-hidden="true">#</a></h2><p>\u4F7F\u7528\u7ED8\u56FE\u7EC4\u4EF6</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><ol><li><p>\u9700\u8981\u590D\u5236<code>node_modules&gt;quick-plugin-md&gt;dist&gt;js</code>\u6587\u4EF6\u5939\u5230<code>docs</code>&gt;<code>public</code></p></li><li><p>\u9700\u8981\u5728 <code>config.head</code> \u4E2D\u5F15\u5165<code>/js/mermaid.min.js</code></p></li></ol></div><ul><li>\u793A\u4F8B \u5B9E\u4F53\u5173\u7CFB\u56FE erDiagram</li></ul>__VP_STATIC_END__`,8),f=s('"erDiagram\\n\xA0\xA0CUSTOMER ||--o{ ORDER : places\\n\xA0\xA0ORDER ||--|{ LINE-ITEM : contains\\n\xA0\xA0CUSTOMER }|..|{ DELIVERY-ADDRESS : uses"'),_=a("",2);function w(j,x,y,T,C,q){const o=e("Picture"),l=e("CodeRun"),r=e("mermaid");return i(),u("div",null,[b,p(o,{scale:"50",style:{width:"5rem"}},{default:t(()=>[m]),_:1}),h,p(l,{editable:""},{default:t(()=>[g]),_:1}),v,p(r,null,{default:t(()=>[f]),_:1}),_])}var R=c(k,[["render",w]]);export{S as __pageData,R as default};
