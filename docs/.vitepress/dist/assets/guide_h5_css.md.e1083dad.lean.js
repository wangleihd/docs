import{_ as s,o as n,c as a,a as p}from"./app.e2658e45.js";const d='{"title":"Css \u6837\u5F0F","description":"","frontmatter":{},"headers":[{"level":2,"title":"css \u66FF\u6362 important","slug":"css-\u66FF\u6362-important"},{"level":2,"title":"flex \u517C\u5BB9","slug":"flex-\u517C\u5BB9"}],"relativePath":"guide/h5/css.md","lastUpdated":1636215949393}',e={},t=p(`__VP_STATIC_START__<h1 id="css-\u6837\u5F0F" tabindex="-1">Css \u6837\u5F0F <a class="header-anchor" href="#css-\u6837\u5F0F" aria-hidden="true">#</a></h1><h2 id="css-\u66FF\u6362-important" tabindex="-1">css \u66FF\u6362 important <a class="header-anchor" href="#css-\u66FF\u6362-important" aria-hidden="true">#</a></h2><p>\u9879\u76EE\u4E2D\uFF0C\u9700\u8981\u8986\u76D6\u539F\u6765\u7684 css \u6837\u5F0F\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>!important</code></p><div class="language-less line-numbers-mode"><pre><code><span class="token selector">.sidebar</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u539F\u6765\u5B9A\u4E49\u503C</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 20rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.sidebar</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4EE5\u65B0\u503C\u66FF\u6362</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 16rem <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="flex-\u517C\u5BB9" tabindex="-1">flex \u517C\u5BB9 <a class="header-anchor" href="#flex-\u517C\u5BB9" aria-hidden="true">#</a></h2><p>flex \u5E03\u5C40\u5206\u4E3A\u65E7\u7248\u672C dispaly: box;\uFF0C\u8FC7\u6E21\u7248\u672C dispaly: flex box;\uFF0C\u4EE5\u53CA\u73B0\u5728\u7684\u6807\u51C6\u7248\u672C display: flex;\u3002 \u6240\u4EE5\u53EA\u662F\u5199\u65B0\u7248\u672C\u7684\u8BED\u6CD5\u5F62\u5F0F\uFF0C\u662F\u80AF\u5B9A\u5B58\u5728\u517C\u5BB9\u6027\u95EE\u9898\u7684\u3002</p><ul><li><p>\u652F\u6301\u7248\u672C</p><ul><li>Android 2.3 \u5F00\u59CB\u5C31\u652F\u6301\u65E7\u7248\u672C display:-webkit-box; 4.4 \u5F00\u59CB\u652F\u6301\u6807\u51C6\u7248\u672C display: flex;</li><li>IOS 6.1 \u5F00\u59CB\u652F\u6301\u65E7\u7248\u672C display:-webkit-box; 7.1 \u5F00\u59CB\u652F\u6301\u6807\u51C6\u7248\u672C display: flex;</li><li>PC ie10 \u5F00\u59CB\u652F\u6301\uFF0C\u4F46\u662F IE10 \u7684\u662F-ms \u5F62\u5F0F\u7684\u3002</li></ul></li><li><p>\u76D2\u5B50\u7684\u517C\u5BB9\u6027\u5199\u6CD5</p></li></ul><p>\u5199\u6CD5\u7684\u987A\u5E8F\u4E00\u5B9A\u8981\u6309\u6700\u65B0\u5230\u6700\u65E7\u7684\u987A\u5E8F\uFF0C\u5426\u5219\u4E0D\u8D77\u4F5C\u7528</p><div class="language-less line-numbers-mode"><pre><code><span class="token comment">// \u90E8\u7F72\u517C\u5BB9</span>
<span class="token selector">.flex()</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> <span class="token operator">-</span>webkit<span class="token operator">-</span>flex<span class="token punctuation">;</span> <span class="token comment">// \u65B0\u7248\u672C\u8BED\u6CD5: Chrome 21+</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span> <span class="token comment">//  \u65B0\u7248\u672C\u8BED\u6CD5: Opera 12.1, Firefox 22+</span>
  <span class="token property">display</span><span class="token punctuation">:</span> <span class="token operator">-</span>webkit<span class="token operator">-</span>box<span class="token punctuation">;</span> <span class="token comment">// \u8001\u7248\u672C\u8BED\u6CD5: Safari, iOS, Android browser, older WebKit browsers.</span>
  <span class="token property">display</span><span class="token punctuation">:</span> <span class="token operator">-</span>moz<span class="token operator">-</span>box<span class="token punctuation">;</span> <span class="token comment">//  \u8001\u7248\u672C\u8BED\u6CD5: Firefox (buggy)</span>
  <span class="token property">display</span><span class="token punctuation">:</span> <span class="token operator">-</span>ms<span class="token operator">-</span>flexbox<span class="token punctuation">;</span> <span class="token comment">//  \u6DF7\u5408\u7248\u672C\u8BED\u6CD5: IE 10</span>
<span class="token punctuation">}</span>

<span class="token selector">.box</span> <span class="token punctuation">{</span>
  <span class="token mixin-usage function">.flex</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul><li>\u5B50\u5143\u7D20\u7684\u517C\u5BB9\u6027\u5199\u6CD5</li></ul><div class="language-css line-numbers-mode"><pre><code><span class="token selector">.flex1</span> <span class="token punctuation">{</span>
    <span class="token property">-webkit-flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>        <span class="token comment">/* Chrome */</span>
    <span class="token property">-ms-flex</span><span class="token punctuation">:</span> 1             <span class="token comment">/* IE 10 */</span>
    <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>                <span class="token comment">/* NEW, Spec - Opera 12.1, Firefox 20+ */</span>
    <span class="token property">-webkit-box-flex</span><span class="token punctuation">:</span> 1     <span class="token comment">/* OLD - iOS 6-, Safari 3.1-6 */</span>
    <span class="token property">-moz-box-flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>       <span class="token comment">/* OLD - Firefox 19- */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>__VP_STATIC_END__`,11),l=[t];function o(c,r,i,u,b,m){return n(),a("div",null,l)}var x=s(e,[["render",o]]);export{d as __pageData,x as default};
