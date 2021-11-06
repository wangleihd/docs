import{_ as o,r as c,o as p,c as l,b as t,w as e,a as u,d as n,e as s}from"./app.e2658e45.js";const x='{"title":"Date \u65E5\u671F\u51FD\u6570","description":"","frontmatter":{},"headers":[{"level":2,"title":"Invalid Date","slug":"invalid-date"},{"level":2,"title":"Date \u65E5\u671F\u517C\u5BB9","slug":"date-\u65E5\u671F\u517C\u5BB9"}],"relativePath":"guide/h5/date.md","lastUpdated":1636215949389}',k={},r=u('<h1 id="date-\u65E5\u671F\u51FD\u6570" tabindex="-1">Date \u65E5\u671F\u51FD\u6570 <a class="header-anchor" href="#date-\u65E5\u671F\u51FD\u6570" aria-hidden="true">#</a></h1><ul><li><a href="./../../lib/init.html#date-\u65E5\u671F\u6269\u5C55">\u65E5\u671F\u6269\u5C55\u51FD\u6570</a></li><li><a href="./../../lib/bll.html#format-\u65E5\u671F\u65F6\u95F4\u683C\u5F0F\u5316">bll.format \u65E5\u671F\u51FD\u6570</a></li></ul><h2 id="invalid-date" tabindex="-1">Invalid Date <a class="header-anchor" href="#invalid-date" aria-hidden="true">#</a></h2><p><code>new Date()</code> \u53C2\u4E0E\u8BA1\u7B97\u4F1A\u81EA\u52A8\u8F6C\u6362\u4E3A\u4ECE 1970.1.1 \u5F00\u59CB\u7684\u6BEB\u79D2\u6570 \u89E3\u51B3 IE\u3001firefox \u6D4F\u89C8\u5668\u4E0B JS \u7684 new Date()\u7684\u503C\u4E3A Invalid Date\u3001NaN-NaN \u7684\u95EE\u9898</p>',4),i=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"let"),s(" _date "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
_date`),n("span",{class:"token punctuation"},"."),s("sa "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'2016-01-01 00:00:00'"),n("span",{class:"token punctuation"},";"),s(`

_date`),n("span",{class:"token punctuation"},"."),s("sar "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),s("_date"),n("span",{class:"token punctuation"},"."),s("sa"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"replace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"RegExp"),n("span",{class:"token punctuation"},"("),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"-"),n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-flags"},"gm")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'/'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"//\u5C06\u6240\u6709\u7684'-'\u8F6C\u4E3A'/'\u5373\u53EF"),s(`

_date`),n("span",{class:"token punctuation"},"."),s("sc "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"format"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'yyyy-MM-dd HH:mm:ss.S'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"//\u6269\u5C55\u8F6C\u6362 \u8FD4\u56DE\u8FD9\u4E2A\u503CInvalid Date\uFF0C\u8F6C\u6362\u5931\u8D25"),s(`

_date`),n("span",{class:"token punctuation"},"."),s("scr "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),s("_date"),n("span",{class:"token punctuation"},"."),s("sc"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"//Date Fri Jan 01 2016 00:00:00 GMT+0800 (\u4E2D\u56FD\u6807\u51C6\u65F6\u95F4)"),s(`
console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'\u8F6C\u6362'"),n("span",{class:"token punctuation"},","),s(" _date"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"return"),s(" _date"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br")])],-1),m=n("h2",{id:"date-\u65E5\u671F\u517C\u5BB9",tabindex:"-1"},[s("Date \u65E5\u671F\u517C\u5BB9 "),n("a",{class:"header-anchor",href:"#date-\u65E5\u671F\u517C\u5BB9","aria-hidden":"true"},"#")],-1),b=n("p",null,"\u4E0D\u540C\u7684\u6D4F\u89C8\u5668\u8FD8\u662F\u5B58\u5728\u5DEE\u5F02\u7684\uFF0C\u4EE5\u4E0B\u5217\u51FA\u4E86\u6240\u6709\u6D4F\u89C8\u5668\u90FD\u652F\u6301\u7684\u65B9\u5F0F\u3002",-1),d=n("div",{class:"language-js line-numbers-mode"},[n("pre",null,[n("code",null,[n("span",{class:"token keyword"},"let"),s(" _date "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

_date`),n("span",{class:"token punctuation"},"."),s("sb "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toISOString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// '2021-03-13T04:07:03.972Z' //ISO \u65F6\u95F4\u683C\u5F0F"),s(`
_date`),n("span",{class:"token punctuation"},"."),s("sl "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLocaleTimeString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"//\u83B7\u53D6\u5F53\u524D\u65F6\u95F4"),s(`

_date`),n("span",{class:"token punctuation"},"."),s("a "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2011"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"01"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"07"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// yyyy, mm-1, dd"),s(`
_date`),n("span",{class:"token punctuation"},"."),s("b "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2011"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"01"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"07"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"11"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"05"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"00"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// yyyy, mm-1, dd, hh, mm, ss"),s(`
_date`),n("span",{class:"token punctuation"},"."),s("c "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'02/07/2011'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},'// "mm/dd/yyyy"'),s(`
_date`),n("span",{class:"token punctuation"},"."),s("d "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'02/07/2011 11:05:00'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},'// "mm/dd/yyyy hh:mm:ss"'),s(`
_date`),n("span",{class:"token punctuation"},"."),s("e "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1297076700000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// milliseconds"),s(`
_date`),n("span",{class:"token punctuation"},"."),s("f "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Mon Feb 07 2011 11:05:00 GMT'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},'// ""Day Mon dd yyyy hh:mm:ss GMT/UTC'),s(`

`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getYearWeek"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"_time"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" d1 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),s("_time"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" d2 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),s("_time"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  d2`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setMonth"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  d2`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"setDate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" rq "),n("span",{class:"token operator"},"="),s(" d1 "),n("span",{class:"token operator"},"-"),s(" d2"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" days "),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ceil"),n("span",{class:"token punctuation"},"("),s("rq "),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"24"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"60"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"60"),s(),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"1000"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" num "),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ceil"),n("span",{class:"token punctuation"},"("),s("days "),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" num"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token comment"},`/*
    date1\u662F\u5F53\u524D\u65E5\u671F
    date2\u662F\u5F53\u5E74\u7B2C\u4E00\u5929
    d\u662F\u5F53\u524D\u65E5\u671F\u662F\u4ECA\u5E74\u7B2C\u591A\u5C11\u5929
    \u7528d + \u5F53\u524D\u5E74\u7684\u7B2C\u4E00\u5929\u7684\u5468\u5DEE\u8DDD\u7684\u548C\u5728\u9664\u4EE57\u5C31\u662F\u672C\u5E74\u7B2C\u51E0\u5468
    */`),s(`

  `),n("span",{class:"token keyword"},"let"),s(" _args "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
    y`),n("span",{class:"token operator"},":"),s(" _time"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getFullYear"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//\u5E74"),s(`
    m`),n("span",{class:"token operator"},":"),s(" _time"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getMonth"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//\u6708\u4EFD"),s(`
    d`),n("span",{class:"token operator"},":"),s(" _time"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getDate"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"//\u65E5"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

  _args`),n("span",{class:"token punctuation"},"."),s("end "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),s("_args"),n("span",{class:"token punctuation"},"."),s("y"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"parseInt"),n("span",{class:"token punctuation"},"("),s("_args"),n("span",{class:"token punctuation"},"."),s("m"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" _args"),n("span",{class:"token punctuation"},"."),s("d"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  _args`),n("span",{class:"token punctuation"},"."),s("start "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),s("_args"),n("span",{class:"token punctuation"},"."),s("y"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  _args`),n("span",{class:"token punctuation"},"."),s("diff "),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"round"),n("span",{class:"token punctuation"},"("),s(`
    `),n("span",{class:"token punctuation"},"("),s("_args"),n("span",{class:"token punctuation"},"."),s("end"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"valueOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s(" _args"),n("span",{class:"token punctuation"},"."),s("start"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"valueOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"86400000"),s(`
  `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  _args`),n("span",{class:"token punctuation"},"."),s("ww "),n("span",{class:"token operator"},"="),s(" _args"),n("span",{class:"token punctuation"},"."),s("diff "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token punctuation"},"("),s("_args"),n("span",{class:"token punctuation"},"."),s("start"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getDay"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'getYearWeek'"),n("span",{class:"token punctuation"},","),s(" _args"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

  `),n("span",{class:"token keyword"},"return"),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"ceil"),n("span",{class:"token punctuation"},"("),s("_args"),n("span",{class:"token punctuation"},"."),s("ww "),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

_date`),n("span",{class:"token punctuation"},"."),s("w "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"getYearWeek"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Date"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"return"),s(" _date"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers-wrapper"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br"),n("span",{class:"line-number"},"9"),n("br"),n("span",{class:"line-number"},"10"),n("br"),n("span",{class:"line-number"},"11"),n("br"),n("span",{class:"line-number"},"12"),n("br"),n("span",{class:"line-number"},"13"),n("br"),n("span",{class:"line-number"},"14"),n("br"),n("span",{class:"line-number"},"15"),n("br"),n("span",{class:"line-number"},"16"),n("br"),n("span",{class:"line-number"},"17"),n("br"),n("span",{class:"line-number"},"18"),n("br"),n("span",{class:"line-number"},"19"),n("br"),n("span",{class:"line-number"},"20"),n("br"),n("span",{class:"line-number"},"21"),n("br"),n("span",{class:"line-number"},"22"),n("br"),n("span",{class:"line-number"},"23"),n("br"),n("span",{class:"line-number"},"24"),n("br"),n("span",{class:"line-number"},"25"),n("br"),n("span",{class:"line-number"},"26"),n("br"),n("span",{class:"line-number"},"27"),n("br"),n("span",{class:"line-number"},"28"),n("br"),n("span",{class:"line-number"},"29"),n("br"),n("span",{class:"line-number"},"30"),n("br"),n("span",{class:"line-number"},"31"),n("br"),n("span",{class:"line-number"},"32"),n("br"),n("span",{class:"line-number"},"33"),n("br"),n("span",{class:"line-number"},"34"),n("br"),n("span",{class:"line-number"},"35"),n("br"),n("span",{class:"line-number"},"36"),n("br"),n("span",{class:"line-number"},"37"),n("br"),n("span",{class:"line-number"},"38"),n("br"),n("span",{class:"line-number"},"39"),n("br"),n("span",{class:"line-number"},"40"),n("br"),n("span",{class:"line-number"},"41"),n("br"),n("span",{class:"line-number"},"42"),n("br"),n("span",{class:"line-number"},"43"),n("br"),n("span",{class:"line-number"},"44"),n("br"),n("span",{class:"line-number"},"45"),n("br"),n("span",{class:"line-number"},"46"),n("br"),n("span",{class:"line-number"},"47"),n("br"),n("span",{class:"line-number"},"48"),n("br"),n("span",{class:"line-number"},"49"),n("br"),n("span",{class:"line-number"},"50"),n("br"),n("span",{class:"line-number"},"51"),n("br"),n("span",{class:"line-number"},"52"),n("br")])],-1);function _(y,w,g,f,h,D){const a=c("CodeRun");return p(),l("div",null,[r,t(a,{editable:""},{default:e(()=>[i]),_:1}),m,b,t(a,{editable:""},{default:e(()=>[d]),_:1})])}var M=o(k,[["render",_]]);export{x as __pageData,M as default};
