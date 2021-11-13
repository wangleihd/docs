import{_ as e,r as p,o as c,c as o,b as l,w as u,a,d as n,e as s}from"./app.7408f20e.js";const w='{"title":"Paged \u5206\u9875","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u8BF4\u660E","slug":"\u8BF4\u660E"},{"level":2,"title":"\u4EE3\u7801\u793A\u4F8B","slug":"\u4EE3\u7801\u793A\u4F8B"},{"level":2,"title":"API","slug":"api"},{"level":3,"title":"Paged props","slug":"paged-props"}],"relativePath":"ui/paged.md","lastUpdated":1636215949368}',r={},i=a('<h1 id="paged-\u5206\u9875" tabindex="-1">Paged \u5206\u9875 <a class="header-anchor" href="#paged-\u5206\u9875" aria-hidden="true">#</a></h1><h2 id="\u8BF4\u660E" tabindex="-1">\u8BF4\u660E <a class="header-anchor" href="#\u8BF4\u660E" aria-hidden="true">#</a></h2><p>\u6709\u5927\u91CF\u6570\u636E\u65F6\u9700\u8981\u5206\u9875\u5207\u6362\u5C55\u793A</p><h2 id="\u4EE3\u7801\u793A\u4F8B" tabindex="-1">\u4EE3\u7801\u793A\u4F8B <a class="header-anchor" href="#\u4EE3\u7801\u793A\u4F8B" aria-hidden="true">#</a></h2>',4),k=n("div",{class:"language-vue line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("Paged")]),s(`
    `),n("span",{class:"token attr-name"},":count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("the.paged.count"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":current"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("the.paged.index"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":page-size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("the.paged.size"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":page-size-opts"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("the.paged.sizes"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":pre-length"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("2"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},":next-length"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("2"),n("span",{class:"token punctuation"},'"')]),s(`
    `),n("span",{class:"token attr-name"},"@onEvent"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),s("pagedEvent"),n("span",{class:"token punctuation"},'"')]),s(`
  `),n("span",{class:"token punctuation"},"/>")]),s(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("template")]),n("span",{class:"token punctuation"},">")]),s(`

`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),s("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"default"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// \u4F7F\u7528\u5916\u6302\u65B9\u5F0F\u5F15\u5165\uFF0C\u5177\u4F53\u67E5\u770Bdemo"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"{"),s(" reactive "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"="),s(" window"),n("span",{class:"token punctuation"},"."),s("$plus"),n("span",{class:"token punctuation"},"."),s("vue"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"const"),s(" the "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"reactive"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      paged`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token comment"},"// \u67E5\u8BE2\u5730\u5740"),s(`
        api`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// \u67E5\u8BE2\u6A21\u677F\u7C7B\u578B 1:\u63A5\u53E3\u5C5E\u6027,2:\u53EA\u67E5\u8BE2\u6570\u636E\uFF0C\u4E0D\u8FD4\u56DE\u5C5E\u6027,\u5176\u5B83\u81EA\u5B9A\u4E49"),s(`
        tpl`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// \u67E5\u8BE2\u6761\u4EF6"),s(`
        where`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// \u67E5\u8BE2\u6269\u5C55\u53C2\u6570"),s(`
        par`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// \u6269\u5C55\u5916\u952E\u67E5\u8BE2"),s(`
        join`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// \u5F53\u524D\u9875\u7801"),s(`
        index`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// \u6BCF\u9875\u53D6\u6570\u636E\u6761\u6570"),s(`
        size`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// \u5206\u9875\u6570"),s(`
        sizes`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"10"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"30"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"100"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"/** \u603B\u6761\u6570 */"),s(`
        count`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"21"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token comment"},"// \u662F\u5426\u5C0F\u578B\u5206\u9875"),s(`
        `),n("span",{class:"token comment"},"// small: true,"),s(`
        `),n("span",{class:"token comment"},"// \u6700\u5927\u9875\u7801\u6309\u94AE\u6570"),s(`
        `),n("span",{class:"token comment"},"// max: 4,"),s(`
        `),n("span",{class:"token comment"},"// \u9875\u7801\u6309\u94AE"),s(`
        `),n("span",{class:"token comment"},"// layout: 'count, sizes, prev, pager, next, jumper',"),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token comment"},"/** \u5206\u9875\u89E6\u53D1\u4E8B\u4EF6 */"),s(`
    `),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"pagedEvent"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"val"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'paged'"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token constant"},"JSON"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"stringify"),n("span",{class:"token punctuation"},"("),s("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token keyword"},"switch"),s(),n("span",{class:"token punctuation"},"("),s("val"),n("span",{class:"token punctuation"},"."),s("cmd"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token string"},"'change'"),n("span",{class:"token operator"},":"),s(`
          the`),n("span",{class:"token punctuation"},"."),s("paged"),n("span",{class:"token punctuation"},"."),s("index "),n("span",{class:"token operator"},"="),s(" val"),n("span",{class:"token punctuation"},"."),s("index"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
        `),n("span",{class:"token keyword"},"case"),s(),n("span",{class:"token string"},"'size'"),n("span",{class:"token operator"},":"),s(`
          the`),n("span",{class:"token punctuation"},"."),s("paged"),n("span",{class:"token punctuation"},"."),s("size "),n("span",{class:"token operator"},"="),s(" val"),n("span",{class:"token punctuation"},"."),s("data"),n("span",{class:"token punctuation"},";"),s(`
          `),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

    `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"{"),s(" the"),n("span",{class:"token punctuation"},","),s(" pagedEvent "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),s("script")]),n("span",{class:"token punctuation"},">")]),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br"),n("span",{class:"line-number"},"48"),n("br"),n("span",{class:"line-number"},"49"),n("br"),n("span",{class:"line-number"},"50"),n("br"),n("span",{class:"line-number"},"51"),n("br"),n("span",{class:"line-number"},"52"),n("br"),n("span",{class:"line-number"},"53"),n("br"),n("span",{class:"line-number"},"54"),n("br"),n("span",{class:"line-number"},"55"),n("br"),n("span",{class:"line-number"},"56"),n("br"),n("span",{class:"line-number"},"57"),n("br"),n("span",{class:"line-number"},"58"),n("br"),n("span",{class:"line-number"},"59"),n("br"),n("span",{class:"line-number"},"60"),n("br"),n("span",{class:"line-number"},"61"),n("br"),n("span",{class:"line-number"},"62"),n("br"),n("span",{class:"line-number"},"63"),n("br"),n("span",{class:"line-number"},"64"),n("br")])],-1),d=a('<h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-hidden="true">#</a></h2><h3 id="paged-props" tabindex="-1">Paged props <a class="header-anchor" href="#paged-props" aria-hidden="true">#</a></h3><table><thead><tr><th>\u5C5E\u6027</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>named</td><td>\u7EC4\u4EF6\u547D\u540D</td><td>String</td><td>paged</td></tr><tr><td>count</td><td>\u603B\u6761\u6570</td><td>Number</td><td>0</td></tr><tr><td>pageSize</td><td>\u6BCF\u9875\u6761\u6570</td><td>Number</td><td>5</td></tr><tr><td>pageSizeOpts</td><td>\u591A\u6761\u9875\u6570</td><td>Array</td><td>[5, 10, 20, 30, 40]</td></tr><tr><td>current</td><td>\u5F53\u524D\u9875\u7801</td><td>Number</td><td>1</td></tr><tr><td>preText</td><td>\u524D\u7FFB\u6587\u5B57</td><td>String</td><td>-</td></tr><tr><td>preLength <code>0.4.1</code></td><td>\u5411\u524D\u663E\u793A\u591A\u5C11\u9875</td><td>Number</td><td>4</td></tr><tr><td>nextLength <code>0.4.1</code></td><td>\u5411\u540E\u663E\u793A\u591A\u5C11\u9875</td><td>Number</td><td>4</td></tr><tr><td>nextText</td><td>\u540E\u7FFB\u6587\u5B57</td><td>String</td><td>-</td></tr><tr><td>disabled</td><td>\u7981\u6B62\u6309\u94AE\u4E8B\u4EF6\u89E6\u53D1</td><td>Boolean</td><td>false</td></tr></tbody></table>',3);function b(m,g,h,_,v,f){const t=p("CodeRun");return c(),o("div",null,[i,l(t,{auto:"",editable:""},{default:u(()=>[k]),_:1}),d])}var y=e(r,[["render",b]]);export{w as __pageData,y as default};
