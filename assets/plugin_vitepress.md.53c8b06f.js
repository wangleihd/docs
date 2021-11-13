import{_ as n,o as s,c as a,a as p}from"./app.7408f20e.js";const d='{"title":"Hello VitePress","description":"","frontmatter":{},"headers":[{"level":2,"title":"VitePress \u5168\u5C40\u914D\u7F6E","slug":"vitepress-\u5168\u5C40\u914D\u7F6E"},{"level":2,"title":"\u663E\u793A\u884C\u53F7 Line Numbers","slug":"\u663E\u793A\u884C\u53F7-line-numbers"},{"level":2,"title":"\u914D\u7F6E markdown","slug":"\u914D\u7F6E-markdown"},{"level":2,"title":"\u6CE8\u518C\u7EC4\u4EF6 vue","slug":"\u6CE8\u518C\u7EC4\u4EF6-vue"},{"level":2,"title":"\u63D2\u4EF6 markdown-it","slug":"\u63D2\u4EF6-markdown-it"},{"level":2,"title":"\u63D2\u4EF6 markdown-it \u4F7F\u7528 Vue","slug":"\u63D2\u4EF6-markdown-it-\u4F7F\u7528-vue"},{"level":2,"title":"\u4E3B\u9898 themeConfig","slug":"\u4E3B\u9898-themeconfig"}],"relativePath":"plugin/vitepress.md","lastUpdated":1636215949450}',e={},t=p(`<h1 id="hello-vitepress" tabindex="-1">Hello VitePress <a class="header-anchor" href="#hello-vitepress" aria-hidden="true">#</a></h1><ul><li><a href="https://vitepress.vuejs.org/" target="_blank" rel="noopener noreferrer">vitepress \u5B98\u7F51</a></li></ul><h2 id="vitepress-\u5168\u5C40\u914D\u7F6E" tabindex="-1">VitePress \u5168\u5C40\u914D\u7F6E <a class="header-anchor" href="#vitepress-\u5168\u5C40\u914D\u7F6E" aria-hidden="true">#</a></h2><ul><li><a href="https://vitepress.vuejs.org/guide/global-computed.html" target="_blank" rel="noopener noreferrer">\u914D\u7F6E\u6587\u6863</a></li></ul><blockquote><p>.vitepress&gt;config.js</p></blockquote><div class="language-js line-numbers-mode"><pre><code><span class="token punctuation">{</span>
  base<span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
  lang<span class="token operator">:</span> <span class="token string">&#39;en-US&#39;</span><span class="token punctuation">,</span>
  title<span class="token operator">:</span> <span class="token string">&#39;VitePress&#39;</span><span class="token punctuation">,</span>
  description<span class="token operator">:</span> <span class="token string">&#39;Vite &amp; Vue powered static site generator.&#39;</span><span class="token punctuation">,</span>
  head<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  locales<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  themeConfig<span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="\u663E\u793A\u884C\u53F7-line-numbers" tabindex="-1">\u663E\u793A\u884C\u53F7 Line Numbers <a class="header-anchor" href="#\u663E\u793A\u884C\u53F7-line-numbers" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><div class="highlight-lines"><br><br><div class="highlighted">\xA0</div><br><br><br></div><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  markdown<span class="token operator">:</span> <span class="token punctuation">{</span>
    lineNumbers<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u914D\u7F6E-markdown" tabindex="-1">\u914D\u7F6E markdown <a class="header-anchor" href="#\u914D\u7F6E-markdown" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="\u6CE8\u518C\u7EC4\u4EF6-vue" tabindex="-1">\u6CE8\u518C\u7EC4\u4EF6 vue <a class="header-anchor" href="#\u6CE8\u518C\u7EC4\u4EF6-vue" aria-hidden="true">#</a></h2><p>Using Vue in Markdown</p><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// \u9ED8\u8BA4\u4E3B\u9898</span>
<span class="token keyword">import</span> DefaultTheme <span class="token keyword">from</span> <span class="token string">&#39;vitepress/theme&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>DefaultTheme<span class="token punctuation">,</span>
  <span class="token function">enhanceApp</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> app <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6CE8\u518C\u5168\u5C40\u7EC4\u4EF6</span>
    app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;VueExample&#39;</span><span class="token punctuation">,</span> VueExample<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><ul><li>markdown \u5168\u5C40\u4F7F\u7528\u7EC4\u4EF6</li></ul><div class="language-md line-numbers-mode"><pre><code><span class="token title important"><span class="token punctuation">#</span> Vue Click Away</span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VueClickAwayExample</span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u63D2\u4EF6-markdown-it" tabindex="-1">\u63D2\u4EF6 markdown-it <a class="header-anchor" href="#\u63D2\u4EF6-markdown-it" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  markdown<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">config</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">md</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u7B2C\u4E09\u65B9\u8BED\u8A00\u5904\u7406\u63D2\u4EF6</span>
      md<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;quick-plugin-md/language/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u63D2\u4EF6-markdown-it-\u4F7F\u7528-vue" tabindex="-1">\u63D2\u4EF6 markdown-it \u4F7F\u7528 Vue <a class="header-anchor" href="#\u63D2\u4EF6-markdown-it-\u4F7F\u7528-vue" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><pre><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  markdown<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">config</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">md</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u7B2C\u4E09\u65B9\u8BED\u8A00\u5904\u7406\u63D2\u4EF6</span>
      md<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;quick-plugin-md/language/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u63D2\u4EF6\u914D\u7F6E\u53C2\u6570</span>
        <span class="token comment">// \u65E0\u9700\u6807\u7B7E\u6839\u636E\u7B2C\u4E00\u884C\u4EE3\u7801\u81EA\u52A8\u8F6C\u4E3A\u56FE\u5F62\u7EC4\u4EF6</span>
        tags<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;gitGraph&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;classDiagram&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;sequenceDiagram&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;gantt&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token comment">//\u9ED8\u8BA4\u6807\u7B7E</span>
        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">&#39;mermaid&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u8F93\u51FA\u65E5\u5FD7</span>
        log<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">// \u81EA\u5B9A\u4E49markdown\u6807\u7B7E\u5BF9\u5E94\u8F6C\u6362\u7684\u6A21\u677F\u7EC4\u4EF6\u540D</span>
        template<span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token comment">// mermaid \u6807\u7B7E\u8F6C\u4E3A \u7EC4\u4EF6\u5B9A\u4E49\u5E76\u4F20\u53C2\uFF0C\u9700\u8981\u6CE8\u610F\u4F20\u5165\u5185\u5BB9\u8F6C\u7801</span>
          <span class="token comment">// mermaid: &#39;&lt;mermaid code=&quot;{code}&quot;&gt;&lt;/mermaid&gt;&#39;,</span>
          mermaid<span class="token operator">:</span> <span class="token string">&#39;&lt;mermaid&gt;{code}&lt;/mermaid&gt;&#39;</span><span class="token punctuation">,</span>
          <span class="token comment">// Vue \u7EC4\u4EF6\u540D\u5BF9\u5E94 \u6807\u7B7E\u8BED\u8A00\u540D\uFF0Ccode \u4E3A\u5185\u5BB9</span>
          VueExample<span class="token operator">:</span> <span class="token string">&#39;&lt;VueExample&gt;{code}&lt;/VueExample&gt;&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><h2 id="\u4E3B\u9898-themeconfig" tabindex="-1">\u4E3B\u9898 themeConfig <a class="header-anchor" href="#\u4E3B\u9898-themeconfig" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><pre><code>
<span class="token punctuation">{</span>
  locales<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  repo<span class="token operator">:</span> <span class="token string">&#39;vuejs/vitepress&#39;</span><span class="token punctuation">,</span>
  docsDir<span class="token operator">:</span> <span class="token string">&#39;docs&#39;</span><span class="token punctuation">,</span>
  editLinks<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  editLinkText<span class="token operator">:</span> <span class="token string">&#39;Edit this page on GitHub&#39;</span><span class="token punctuation">,</span>
  lastUpdated<span class="token operator">:</span> <span class="token string">&#39;Last Updated&#39;</span><span class="token punctuation">,</span>
  nav<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  sidebar<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,21),o=[t];function c(l,r,u,i,k,m){return s(),a("div",null,o)}var g=n(e,[["render",c]]);export{d as __pageData,g as default};
