import{_ as n,o as s,c as a,a as p}from"./app.e2658e45.js";const b='{"title":"ES6","description":"","frontmatter":{},"headers":[{"level":2,"title":"Symbol","slug":"symbol"},{"level":2,"title":"import \u52A0\u8F7D","slug":"import-\u52A0\u8F7D"}],"relativePath":"guide/h5/es6.md","lastUpdated":1636215949388}',e={},t=p(`<h1 id="es6" tabindex="-1">ES6 <a class="header-anchor" href="#es6" aria-hidden="true">#</a></h1><h2 id="symbol" tabindex="-1">Symbol <a class="header-anchor" href="#symbol" aria-hidden="true">#</a></h2><ul><li><p>ES6 \u5F15\u5165\u4E86\u4E00\u79CD\u65B0\u7684\u539F\u59CB\u6570\u636E\u7C7B\u578B Symbol\uFF0C\u8868\u793A\u72EC\u4E00\u65E0\u4E8C\u7684\u503C\u3002\u5B83\u662F JavaScript \u8BED\u8A00\u7684\u7B2C\u4E03\u79CD\u6570\u636E\u7C7B\u578B\uFF0C\u524D\u516D\u79CD\u662F\uFF1AUndefined\u3001Null\u3001\u5E03\u5C14\u503C\uFF08Boolean\uFF09\u3001\u5B57\u7B26\u4E32\uFF08String\uFF09\u3001\u6570\u503C\uFF08Number\uFF09\u3001\u5BF9\u8C61\uFF08Object\uFF09\u3002</p></li><li><p>Symbol \u503C\u901A\u8FC7 Symbol \u51FD\u6570\u751F\u6210\u3002\u8FD9\u5C31\u662F\u8BF4\uFF0C\u5BF9\u8C61\u7684\u5C5E\u6027\u540D\u73B0\u5728\u53EF\u4EE5\u6709\u4E24\u79CD\u7C7B\u578B\uFF0C\u4E00\u79CD\u662F\u539F\u6765\u5C31\u6709\u7684\u5B57\u7B26\u4E32\uFF0C\u53E6\u4E00\u79CD\u5C31\u662F\u65B0\u589E\u7684 Symbol \u7C7B\u578B\u3002\u51E1\u662F\u5C5E\u6027\u540D\u5C5E\u4E8E Symbol \u7C7B\u578B\uFF0C\u5C31\u90FD\u662F\u72EC\u4E00\u65E0\u4E8C\u7684\uFF0C\u53EF\u4EE5\u4FDD\u8BC1\u4E0D\u4F1A\u4E0E\u5176\u4ED6\u5C5E\u6027\u540D\u4EA7\u751F\u51B2\u7A81\u3002</p></li><li><p>\u6CE8\u610F\uFF0CSymbol \u51FD\u6570\u524D\u4E0D\u80FD\u4F7F\u7528 new \u547D\u4EE4\uFF0C\u5426\u5219\u4F1A\u62A5\u9519\u3002\u8FD9\u662F\u56E0\u4E3A\u751F\u6210\u7684 Symbol \u662F\u4E00\u4E2A\u539F\u59CB\u7C7B\u578B\u7684\u503C\uFF0C\u4E0D\u662F\u5BF9\u8C61\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u7531\u4E8E Symbol \u503C\u4E0D\u662F\u5BF9\u8C61\uFF0C\u6240\u4EE5\u4E0D\u80FD\u6DFB\u52A0\u5C5E\u6027\u3002\u57FA\u672C\u4E0A\uFF0C\u5B83\u662F\u4E00\u79CD\u7C7B\u4F3C\u4E8E\u5B57\u7B26\u4E32\u7684\u6570\u636E\u7C7B\u578B\u3002</p></li></ul><p>Symbol \u51FD\u6570\u53EF\u4EE5\u63A5\u53D7\u4E00\u4E2A\u5B57\u7B26\u4E32\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8868\u793A\u5BF9 Symbol \u5B9E\u4F8B\u7684\u63CF\u8FF0\uFF0C\u4E3B\u8981\u662F\u4E3A\u4E86\u5728\u63A7\u5236\u53F0\u663E\u793A\uFF0C\u6216\u8005\u8F6C\u4E3A\u5B57\u7B26\u4E32\u65F6\uFF0C\u6BD4\u8F83\u5BB9\u6613\u533A\u5206\u3002</p><ul><li><p>\u7531\u4E8E\u6BCF\u4E00\u4E2A Symbol \u503C\u90FD\u662F\u4E0D\u76F8\u7B49\u7684\uFF0C\u8FD9\u610F\u5473\u7740 Symbol \u503C\u53EF\u4EE5\u4F5C\u4E3A\u6807\u8BC6\u7B26\uFF0C\u7528\u4E8E\u5BF9\u8C61\u7684\u5C5E\u6027\u540D\uFF0C\u5C31\u80FD\u4FDD\u8BC1\u4E0D\u4F1A\u51FA\u73B0\u540C\u540D\u7684\u5C5E\u6027\u3002\u8FD9\u5BF9\u4E8E\u4E00\u4E2A\u5BF9\u8C61\u7531\u591A\u4E2A\u6A21\u5757\u6784\u6210\u7684\u60C5\u51B5\u975E\u5E38\u6709\u7528\uFF0C\u80FD\u9632\u6B62\u67D0\u4E00\u4E2A\u952E\u88AB\u4E0D\u5C0F\u5FC3\u6539\u5199\u6216\u8986\u76D6\u3002Symbol \u503C\u4F5C\u4E3A\u5BF9\u8C61\u5C5E\u6027\u540D\u65F6\uFF0C\u4E0D\u80FD\u7528\u70B9\u8FD0\u7B97\u7B26\u3002\u5728\u5BF9\u8C61\u7684\u5185\u90E8\uFF0C\u4F7F\u7528 Symbol \u503C\u5B9A\u4E49\u5C5E\u6027\u65F6\uFF0CSymbol \u503C\u5FC5\u987B\u653E\u5728\u65B9\u62EC\u53F7\u4E4B\u4E2D\u3002</p></li><li><p>Symbol \u5B9E\u4F8B\uFF1A\u6D88\u9664\u9B54\u672F\u5B57\u7B26\u4E32</p></li></ul><p>\u9B54\u672F\u5B57\u7B26\u4E32\u6307\u7684\u662F\uFF0C\u5728\u4EE3\u7801\u4E4B\u4E2D\u591A\u6B21\u51FA\u73B0\u3001\u4E0E\u4EE3\u7801\u5F62\u6210\u5F3A\u8026\u5408\u7684\u67D0\u4E00\u4E2A\u5177\u4F53\u7684\u5B57\u7B26\u4E32\u6216\u8005\u6570\u503C\u3002\u98CE\u683C\u826F\u597D\u7684\u4EE3\u7801\uFF0C\u5E94\u8BE5\u5C3D\u91CF\u6D88\u9664\u9B54\u672F\u5B57\u7B26\u4E32\uFF0C\u8BE5\u7531\u542B\u4E49\u6E05\u6670\u7684\u53D8\u91CF\u4EE3\u66FF\u3002</p><h2 id="import-\u52A0\u8F7D" tabindex="-1">import \u52A0\u8F7D <a class="header-anchor" href="#import-\u52A0\u8F7D" aria-hidden="true">#</a></h2><ul><li>\u52A0\u8F7D\u9ED8\u8BA4\u8F93\u51FA</li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> quick <span class="token keyword">from</span> <span class="token string">&#39;quick.lib&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li>\u6309\u9700\u52A0\u8F7D</li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> <span class="token punctuation">{</span> bll <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;quick.lib&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><ul><li>\u5F02\u6B65\u52A0\u8F7D</li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;quick.lib&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_quick</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// _quick.bll</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;import.mermaid.min&#39;</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,13),l=[t];function o(c,i,r,u,m,d){return s(),a("div",null,l)}var _=n(e,[["render",o]]);export{b as __pageData,_ as default};
