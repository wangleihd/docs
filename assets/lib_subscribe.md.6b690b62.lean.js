import{_ as p,r as c,o,c as l,b as e,w as t,a as u,d as n,e as s}from"./app.7408f20e.js";const x='{"title":"subscribe \u4E8B\u4EF6\u8BA2\u9605","description":"","frontmatter":{},"headers":[{"level":2,"title":"subscribe \u4F7F\u7528","slug":"subscribe-\u4F7F\u7528"},{"level":2,"title":"Vue \u7EC4\u4EF6\u8BA2\u9605","slug":"vue-\u7EC4\u4EF6\u8BA2\u9605"},{"level":2,"title":"subscribe \u4E8B\u4EF6\u8BA2\u9605","slug":"subscribe-\u4E8B\u4EF6\u8BA2\u9605-1"},{"level":2,"title":"subscribe \u8BA2\u9605\u540D","slug":"subscribe-\u8BA2\u9605\u540D"}],"relativePath":"lib/subscribe.md","lastUpdated":1636215949486}',r={},i=u(`__VP_STATIC_START__<h1 id="subscribe-\u4E8B\u4EF6\u8BA2\u9605" tabindex="-1">subscribe \u4E8B\u4EF6\u8BA2\u9605 <a class="header-anchor" href="#subscribe-\u4E8B\u4EF6\u8BA2\u9605" aria-hidden="true">#</a></h1><p>\u9002\u7528\u4E8E\u5355\u9875\u8DE8\u7EC4\u4EF6,\u5168\u5C40\u4E8B\u4EF6\u89E6\u53D1</p><h2 id="subscribe-\u4F7F\u7528" tabindex="-1">subscribe \u4F7F\u7528 <a class="header-anchor" href="#subscribe-\u4F7F\u7528" aria-hidden="true">#</a></h2><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>$on</code></td><td>\u8BA2\u9605\u76D1\u542C(\u8BA2\u9605 Id,\u89E6\u53D1\u4E8B\u4EF6)</td></tr><tr><td><code>$emit</code></td><td>\u53D1\u9001\u8BA2\u9605(\u8BA2\u9605 Id,\u53D1\u9001\u7684\u6570\u636E)</td></tr><tr><td><code>keys</code></td><td>\u6240\u6709\u8BA2\u9605\u7684\u4E8B\u4EF6 Id</td></tr></tbody></table><h2 id="vue-\u7EC4\u4EF6\u8BA2\u9605" tabindex="-1">Vue \u7EC4\u4EF6\u8BA2\u9605 <a class="header-anchor" href="#vue-\u7EC4\u4EF6\u8BA2\u9605" aria-hidden="true">#</a></h2><ul><li>\u76D1\u542C\u7EC4\u4EF6</li></ul><div class="language-js line-numbers-mode"><pre><code><span class="token keyword">import</span> onMounted <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> subscribe <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;quick.lib&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u63A5\u6536\u4E8B\u4EF6\u8BA2\u9605</span>
    <span class="token keyword">let</span> onId <span class="token operator">=</span> <span class="token string">&#39;on-form-item-add&#39;</span><span class="token punctuation">;</span>
    subscribe<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span>onId<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">resp</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u63A5\u6536\u8BA2\u9605\u540D\uFF1A&#39;</span><span class="token punctuation">,</span> onId<span class="token punctuation">,</span> resp<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">//\u8FD4\u56DE\u7ED9\u53D1\u9001\u4E8B\u4EF6</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span> finish<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> data<span class="token operator">:</span> <span class="token punctuation">{</span> named<span class="token operator">:</span> onId<span class="token punctuation">,</span> resp <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u7EC4\u4EF6\u52A0\u8F7D\u5B8C\u6BD5\u53D1\u9001\u4E8B\u4EF6</span>
      subscribe<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;on-form-item-add&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
        cmd<span class="token operator">:</span> <span class="token string">&#39;msg&#39;</span><span class="token punctuation">,</span>
        title<span class="token operator">:</span> <span class="token string">&#39;\u52A0\u8F7D\u5B8C\u4E86&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="subscribe-\u4E8B\u4EF6\u8BA2\u9605-1" tabindex="-1">subscribe \u4E8B\u4EF6\u8BA2\u9605 <a class="header-anchor" href="#subscribe-\u4E8B\u4EF6\u8BA2\u9605-1" aria-hidden="true">#</a></h2>__VP_STATIC_END__`,8),b=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token comment"},"// import { Subscribe } from 'quick.lib';"),s(`

`),n("span",{class:"token comment"},`/**
 * \u5168\u5C40\u7EC4\u4EF6\u4E8B\u4EF6\u8BA2\u9605
 */`),s(`
`),n("span",{class:"token keyword"},"const"),s(" subscribe "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Subscribe"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// \u81EA\u5B9A\u4E49\u4E8B\u4EF6\u8BA2\u9605\u540D"),s(`
`),n("span",{class:"token keyword"},"const"),s(" subscribeNamed "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'on-sub-test'"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// \u8BA2\u9605\u4E8B\u4EF6\u4E8B\u4EF6\u76D1\u542C"),s(`
subscribe`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"$on"),n("span",{class:"token punctuation"},"("),s("subscribeNamed"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"resp"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"//console.log('ubb', resp);"),s(`
  `),n("span",{class:"token function"},"alert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u6536\u5230\u6D88\u606F\\r\\n'"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),s("resp"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"switch"),s(),n("span",{class:"token punctuation"},"("),s("resp"),n("span",{class:"token punctuation"},"."),s("cmd"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token string"},"'clear'"),n("span",{class:"token operator"},":"),s(`
      `),n("span",{class:"token comment"},"// \u6E05\u9664\u5168\u90E8\u4E8B\u4EF6"),s(`
      subscribe`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"clear"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token comment"},"//\u8FD4\u56DE\u7ED9\u53D1\u9001\u4E8B\u4EF6"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(" finish"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(" data"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(" named"),n("span",{class:"token operator"},":"),s(" subscribeNamed"),n("span",{class:"token punctuation"},","),s(" resp "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// \u5168\u5C40\u7EC4\u4EF6keys"),s(`
`),n("span",{class:"token keyword"},"let"),s(" resp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(" keys"),n("span",{class:"token operator"},":"),s(" subscribe"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"keys"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// \u53D1\u9001\u4E8B\u4EF6"),s(`
resp`),n("span",{class:"token punctuation"},"."),s("send "),n("span",{class:"token operator"},"="),s(" subscribe"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"$emit"),n("span",{class:"token punctuation"},"("),s("subscribeNamed"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"{"),s(`
  cmd`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'msg'"),n("span",{class:"token punctuation"},","),s(`
  title`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'\u6E05\u9664\u6240\u6709\u76D1\u542C'"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// resp.send = subscribe.$emit(subscribeNamed, {"),s(`
`),n("span",{class:"token comment"},"//   cmd: 'clear',"),s(`
`),n("span",{class:"token comment"},"//   title: '\u6E05\u9664\u6240\u6709\u76D1\u542C',"),s(`
`),n("span",{class:"token comment"},"// });"),s(`

`),n("span",{class:"token keyword"},"return"),s(" resp"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br")])],-1),k=n("h2",{id:"subscribe-\u8BA2\u9605\u540D",tabindex:"-1"},[s("subscribe \u8BA2\u9605\u540D "),n("a",{class:"header-anchor",href:"#subscribe-\u8BA2\u9605\u540D","aria-hidden":"true"},"#")],-1),m=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token comment"},"/** \u4E8B\u4EF6\u8BA2\u9605 */"),s(`
`),n("span",{class:"token comment"},"// import { Subscribe } from 'quick.lib';"),s(`
`),n("span",{class:"token comment"},`/**
 * \u5168\u5C40\u7EC4\u4EF6\u4E8B\u4EF6\u8BA2\u9605
 */`),s(`
`),n("span",{class:"token keyword"},"const"),s(" subscribe "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Subscribe"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// \u5168\u5C40\u7EC4\u4EF6keys"),s(`
`),n("span",{class:"token keyword"},"let"),s(" _keys "),n("span",{class:"token operator"},"="),s(" subscribe"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"keys"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"return"),s(" _keys"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br")])],-1);function d(h,f,_,y,g,w){const a=c("CodeRun");return o(),l("div",null,[i,e(a,{dll:"Subscribe",editable:""},{default:t(()=>[b]),_:1}),k,e(a,{dll:"Subscribe",editable:""},{default:t(()=>[m]),_:1})])}var N=p(r,[["render",d]]);export{x as __pageData,N as default};
