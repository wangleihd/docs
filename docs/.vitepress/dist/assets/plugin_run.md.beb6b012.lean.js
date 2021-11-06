import{_ as c,r as l,o as p,c as u,b as t,w as e,a as o,d as n,e as s}from"./app.e2658e45.js";const T='{"title":"CodeRun \u4EE3\u7801\u8FD0\u884C\u7EC4\u4EF6","description":"","frontmatter":{},"headers":[{"level":2,"title":"JS \u8FD0\u884C\u53EF\u7F16\u8F91\u4EE3\u7801","slug":"js-\u8FD0\u884C\u53EF\u7F16\u8F91\u4EE3\u7801"},{"level":2,"title":"Vue \u8FD0\u884C\u7F16\u8F91\u7EC4\u4EF6","slug":"vue-\u8FD0\u884C\u7F16\u8F91\u7EC4\u4EF6"},{"level":2,"title":"CodeRun \u5C5E\u6027","slug":"coderun-\u5C5E\u6027"}],"relativePath":"plugin/run.md","lastUpdated":1636215949451}',r={},i=o('',5),d=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"let"),s(" resp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  test`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"'testjs'"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"return"),s(" resp"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br")])],-1),k=n("h2",{id:"vue-\u8FD0\u884C\u7F16\u8F91\u7EC4\u4EF6",tabindex:"-1"},[s("Vue \u8FD0\u884C\u7F16\u8F91\u7EC4\u4EF6 "),n("a",{class:"header-anchor",href:"#vue-\u8FD0\u884C\u7F16\u8F91\u7EC4\u4EF6","aria-hidden":"true"},"#")],-1),b=n("div",{class:"language-vue line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("div")]),s(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("code-index-page"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("button")]),s(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("onTagEvent"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),s("\u70B9\u51FB\u52A0\u6D88\u606F\u6570"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("button")]),n("span",{class:"token punctuation"},">")]),s(` {{ the.tag.text }}
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("div")]),n("span",{class:"token punctuation"},">")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token comment"},"// \u5728\u7EBF\u8C03\u8BD5\u4E0D\u652F\u6301\u5F15\u5165"),s(`
`),n("span",{class:"token comment"},"//import { reactive } from 'vue';"),s(`

`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// \u4F7F\u7528\u5916\u6302\u65B9\u5F0F\u5F15\u5165\uFF0C\u5177\u4F53\u67E5\u770Bdemo"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" $plus "),n("span",{class:"token operator"},"="),s(" window"),n("span",{class:"token punctuation"},"."),s("$plus"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" reactive "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" $plus"),n("span",{class:"token punctuation"},"."),s("vue"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"// \u7EC4\u4EF6\u53D8\u91CF"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" the "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      tag`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        text`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"9"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token comment"},"/** \u6807\u7B7E\u4E8B\u4EF6 */"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"onTagEvent"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'onTagEvent:'"),n("span",{class:"token punctuation"},","),s(" the"),n("span",{class:"token punctuation"},"."),s("tag"),n("span",{class:"token punctuation"},"."),s("text"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      the`),n("span",{class:"token punctuation"},"."),s("tag"),n("span",{class:"token punctuation"},"."),s("text "),n("span",{class:"token operator"},"="),s(" the"),n("span",{class:"token punctuation"},"."),s("tag"),n("span",{class:"token punctuation"},"."),s("text "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(" the"),n("span",{class:"token punctuation"},","),s(" onTagEvent "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("style")]),s(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("less"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[s(`
`),n("span",{class:"token selector"},".code-index-page"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token selector"},"button"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),s(" 0.5rem"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("style")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br")])],-1),m=o('',4);function g(h,_,v,f,w,x){const a=l("CodeRun");return p(),u("div",null,[i,t(a,{lang:"js",auto:"",editable:""},{default:e(()=>[d]),_:1}),k,t(a,{auto:"",editable:""},{default:e(()=>[b]),_:1}),m])}var j=c(r,[["render",g]]);export{T as __pageData,j as default};
