import{_ as t,r as p,o,c,b as l,w as i,a,d as n,e as s}from"./app.e2658e45.js";const y='{"title":"quick.cookie","description":"","frontmatter":{},"headers":[{"level":2,"title":"quick.cookie \u4F7F\u7528","slug":"quick-cookie-\u4F7F\u7528"},{"level":2,"title":"setJson \u4FDD\u5B58\u5BF9\u8C61","slug":"setjson-\u4FDD\u5B58\u5BF9\u8C61"},{"level":2,"title":"getJson \u83B7\u53D6\u5168\u90E8\u5BF9\u8C61","slug":"getjson-\u83B7\u53D6\u5168\u90E8\u5BF9\u8C61"},{"level":2,"title":"setItem \u5199\u5165\u5B58\u50A8\u5BF9\u8C61","slug":"setitem-\u5199\u5165\u5B58\u50A8\u5BF9\u8C61"},{"level":2,"title":"getItem \u8BFB\u53D6\u6307\u5B9A\u5BF9\u8C61","slug":"getitem-\u8BFB\u53D6\u6307\u5B9A\u5BF9\u8C61"},{"level":2,"title":"removeItem \u5220\u9664\u6307\u5B9A\u5BF9\u8C61","slug":"removeitem-\u5220\u9664\u6307\u5B9A\u5BF9\u8C61"},{"level":2,"title":"clear \u5220\u9664\u6240\u6709\u5BF9\u8C61","slug":"clear-\u5220\u9664\u6240\u6709\u5BF9\u8C61"},{"level":2,"title":"keys \u8BFB\u53D6\u6240\u6709\u5BF9\u8C61\u540D\u79F0","slug":"keys-\u8BFB\u53D6\u6240\u6709\u5BF9\u8C61\u540D\u79F0"}],"relativePath":"lib/cookie.md","lastUpdated":1636215949482}',r={},u=a(`__VP_STATIC_START__<h1 id="quick-cookie" tabindex="-1">quick.cookie <a class="header-anchor" href="#quick-cookie" aria-hidden="true">#</a></h1><p>Cookie \u662F\u5C0F\u751C\u997C\u7684\u610F\u601D\u3002\u987E\u540D\u601D\u4E49\uFF0Ccookie \u786E\u5B9E\u975E\u5E38\u5C0F\uFF0C\u5B83\u7684\u5927\u5C0F\u9650\u5236\u4E3A 4KB \u5DE6\u53F3\u3002\u5B83\u7684\u4E3B\u8981\u7528\u9014\u6709\u4FDD\u5B58\u767B\u5F55\u4FE1\u606F\uFF0C\u6BD4\u5982\u4F60\u767B\u5F55\u67D0\u4E2A\u7F51\u7AD9\u5E02\u573A\u53EF\u4EE5\u770B\u5230\u201C\u8BB0\u4F4F\u5BC6\u7801\u201D\uFF0C\u8FD9\u901A\u5E38\u5C31\u662F\u901A\u8FC7\u5728 Cookie \u4E2D\u5B58\u5165\u4E00\u6BB5\u8FA8\u522B\u7528\u6237\u8EAB\u4EFD\u7684\u6570\u636E\u6765\u5B9E\u73B0\u7684\u3002</p><ul><li><a href="./cache.html">\u5EFA\u8BAE\u4F7F\u7528\u5C01\u88C5\u5E93 cache</a></li></ul><h2 id="quick-cookie-\u4F7F\u7528" tabindex="-1">quick.cookie \u4F7F\u7528 <a class="header-anchor" href="#quick-cookie-\u4F7F\u7528" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// \u9879\u76EE\u5F15\u5165</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> cookie <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;quick.lib&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>__VP_STATIC_END__`,5),k=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"let"),s(" data "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  id`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"999"),n("span",{class:"token punctuation"},","),s(`
  name`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6D4B\u8BD5\u5B58\u50A8'"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"let"),s(" _key "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'lib_test'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"let"),s(" obj "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  setJson`),n("span",{class:"token operator"},":"),s(" cookie"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setJson"),n("span",{class:"token punctuation"},"("),s("_key "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token string"},"'_json'"),n("span",{class:"token punctuation"},","),s(" data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  getJson`),n("span",{class:"token operator"},":"),s(" cookie"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getJson"),n("span",{class:"token punctuation"},"("),s("_key "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token string"},"'_json'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  setItem`),n("span",{class:"token operator"},":"),s(" cookie"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setItem"),n("span",{class:"token punctuation"},"("),s("_key"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
  getItem`),n("span",{class:"token operator"},":"),s(" cookie"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getItem"),n("span",{class:"token punctuation"},"("),s("_key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// \u53D6\u51FA\u6240\u6709\u7F13\u5B58\u7684\u540D\u79F0"),s(`
obj`),n("span",{class:"token punctuation"},"."),s("keys "),n("span",{class:"token operator"},"="),s(" cookie"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"keys"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// cookie.clear();"),s(`
`),n("span",{class:"token comment"},"// cookie.removeItem(_key);"),s(`

`),n("span",{class:"token keyword"},"return"),s(" obj"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br")])],-1),m=a(`__VP_STATIC_START__<h2 id="setjson-\u4FDD\u5B58\u5BF9\u8C61" tabindex="-1"><code>setJson</code> \u4FDD\u5B58\u5BF9\u8C61 <a class="header-anchor" href="#setjson-\u4FDD\u5B58\u5BF9\u8C61" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><pre><code>  <span class="token comment">/**
   * \u4FDD\u5B58\u5BF9\u8C61(\u540D\u79F0,\u503C,\u53C2\u6570)
   * @param {*} name \u540D\u79F0
   * @param {*} value \u5185\u5BB9
   * @param {object} opts \u53C2\u6570
   * {maxAge:&#39;\u8FC7\u671F\u4EE5\u79D2\u6570&#39;,path:&#39;\u5B50\u76EE\u5F55\u8BBF\u95EE\u6743\u9650&#39;,domain:&#39;\u8BBF\u95EE\u57DF&#39;,secure:&#39;\u4EC5\u7528\u4E8E https \u4F20\u8F93&#39;}
   */</span>
  <span class="token function">setJson</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> value<span class="token punctuation">,</span> opts</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="getjson-\u83B7\u53D6\u5168\u90E8\u5BF9\u8C61" tabindex="-1"><code>getJson</code> \u83B7\u53D6\u5168\u90E8\u5BF9\u8C61 <a class="header-anchor" href="#getjson-\u83B7\u53D6\u5168\u90E8\u5BF9\u8C61" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><pre><code> <span class="token comment">/**
   * \u83B7\u53D6cookie \u5168\u90E8\u5BF9\u8C61
   */</span>
  <span class="token function">getJson</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="setitem-\u5199\u5165\u5B58\u50A8\u5BF9\u8C61" tabindex="-1"><code>setItem</code> \u5199\u5165\u5B58\u50A8\u5BF9\u8C61 <a class="header-anchor" href="#setitem-\u5199\u5165\u5B58\u50A8\u5BF9\u8C61" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><pre><code>  <span class="token comment">/**
   * \u5B58\u50A8
   * @param {*} name \u540D\u79F0
   * @param {*} value \u5185\u5BB9
   * @param {*} maxAgeMinute \u8FC7\u671F\u5206\u949F\u6570,\u9ED8\u8BA4\u7A7A\u4E3Aconfig.cookie.maxAgeMinute
   */</span>
  <span class="token function">setItem</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> value<span class="token punctuation">,</span> maxAgeMinute</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="getitem-\u8BFB\u53D6\u6307\u5B9A\u5BF9\u8C61" tabindex="-1"><code>getItem</code> \u8BFB\u53D6\u6307\u5B9A\u5BF9\u8C61 <a class="header-anchor" href="#getitem-\u8BFB\u53D6\u6307\u5B9A\u5BF9\u8C61" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><pre><code>  <span class="token comment">/**
   * \u83B7\u53D6cookie \u6307\u5B9A\u5185\u5BB9\u540D\u79F0
   * @param {*} name \u540D\u79F0
   */</span>
  <span class="token function">getItem</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="removeitem-\u5220\u9664\u6307\u5B9A\u5BF9\u8C61" tabindex="-1"><code>removeItem</code> \u5220\u9664\u6307\u5B9A\u5BF9\u8C61 <a class="header-anchor" href="#removeitem-\u5220\u9664\u6307\u5B9A\u5BF9\u8C61" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><pre><code>  <span class="token comment">/**
   * \u79FB\u9664cookie
   * @param {*} name \u5B58\u50A8\u503C\u540D
   * @param {*} encode \u662F\u5426\u9700\u8981\u89E3\u7801
   */</span>
  <span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> encode <span class="token operator">=</span> <span class="token boolean">true</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="clear-\u5220\u9664\u6240\u6709\u5BF9\u8C61" tabindex="-1"><code>clear</code> \u5220\u9664\u6240\u6709\u5BF9\u8C61 <a class="header-anchor" href="#clear-\u5220\u9664\u6240\u6709\u5BF9\u8C61" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><pre><code> <span class="token comment">/**
   * \u6E05\u9664cookie\u6240\u6709\u5BF9\u8C61
   */</span>
  <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="keys-\u8BFB\u53D6\u6240\u6709\u5BF9\u8C61\u540D\u79F0" tabindex="-1"><code>keys</code> \u8BFB\u53D6\u6240\u6709\u5BF9\u8C61\u540D\u79F0 <a class="header-anchor" href="#keys-\u8BFB\u53D6\u6240\u6709\u5BF9\u8C61\u540D\u79F0" aria-hidden="true">#</a></h2><div class="language-js line-numbers-mode"><pre><code>  <span class="token comment">/**
   * \u53D6\u51FA\u6240\u6709\u7F13\u5B58\u7684\u540D\u79F0
   */</span>
  <span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>__VP_STATIC_END__`,14);function b(d,h,v,g,_,f){const e=p("CodeRun");return o(),c("div",null,[u,l(e,{dll:"cookie",editable:""},{default:i(()=>[k]),_:1}),m])}var x=t(r,[["render",b]]);export{y as __pageData,x as default};
