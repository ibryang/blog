import{_ as s,c as n,o as a,d as l}from"./app.08085cfa.js";const i=JSON.parse('{"title":"\u83B7\u53D6\u6587\u672C\u5185\u5BB9\u5B9E\u9645\u6240\u5360\u5BBD\u9AD8","description":"","frontmatter":{},"headers":[{"level":2,"title":"1. \u7B80\u4ECB","slug":"_1-\u7B80\u4ECB"},{"level":2,"title":"2. \u51FD\u6570\u5B9E\u73B0","slug":"_2-\u51FD\u6570\u5B9E\u73B0"},{"level":2,"title":"3. \u4F7F\u7528\u793A\u4F8B","slug":"_3-\u4F7F\u7528\u793A\u4F8B"}],"relativePath":"golang/learn/\u83B7\u53D6\u6587\u672C\u5177\u4F53\u5BBD\u9AD8.md","lastUpdated":1661506546000}'),p={name:"golang/learn/\u83B7\u53D6\u6587\u672C\u5177\u4F53\u5BBD\u9AD8.md"},o=l(`<h1 id="\u83B7\u53D6\u6587\u672C\u5185\u5BB9\u5B9E\u9645\u6240\u5360\u5BBD\u9AD8" tabindex="-1">\u83B7\u53D6\u6587\u672C\u5185\u5BB9\u5B9E\u9645\u6240\u5360\u5BBD\u9AD8 <a class="header-anchor" href="#\u83B7\u53D6\u6587\u672C\u5185\u5BB9\u5B9E\u9645\u6240\u5360\u5BBD\u9AD8" aria-hidden="true">#</a></h1><h2 id="_1-\u7B80\u4ECB" tabindex="-1">1. \u7B80\u4ECB <a class="header-anchor" href="#_1-\u7B80\u4ECB" aria-hidden="true">#</a></h2><blockquote><p>\u6709\u65F6\u5019\u6211\u4EEC\u9700\u8981\u83B7\u53D6\u6587\u672C\u5185\u5BB9\u5B9E\u9645\u6240\u5360\u5BBD\u9AD8\uFF0C\u6BD4\u5982\u5728\u7ED8\u5236\u56FE\u5F62\u65F6\uFF0C\u9700\u8981\u6839\u636E\u6587\u672C\u5185\u5BB9\u7684\u5B9E\u9645\u5BBD\u9AD8\u6765\u7ED8\u5236\u56FE\u5F62\uFF0C\u800C\u4E0D\u662F\u6839\u636E\u6587\u672C\u5185\u5BB9\u7684\u5B57\u6570\u6765\u7ED8\u5236\u56FE\u5F62, \u8FD9\u65F6\u5019\u5C31\u9700\u8981\u83B7\u53D6\u6587\u672C\u5185\u5BB9\u5B9E\u9645\u6240\u5360\u5BBD\u9AD8, \u672C\u6587\u5C06\u7528\u4E00\u4E2A\u51FD\u6570\u5B9E\u73B0\u4ECB\u7ECD\u5982\u4F55\u83B7\u53D6\u6587\u672C\u5185\u5BB9\u5B9E\u9645\u6240\u5360\u5BBD\u9AD8</p></blockquote><h2 id="_2-\u51FD\u6570\u5B9E\u73B0" tabindex="-1">2. \u51FD\u6570\u5B9E\u73B0 <a class="header-anchor" href="#_2-\u51FD\u6570\u5B9E\u73B0" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">GetContentWidthAndHeight</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">content</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> fontPath </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> fontSize</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> fontDpi </span><span style="color:#C792EA;">int64</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">width</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> height </span><span style="color:#C792EA;">float64</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// \u8BFB\u53D6\u5B57\u4F53\u6587\u4EF6</span></span>
<span class="line"><span style="color:#A6ACCD;">    fontBytes</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> ioutil</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ReadFile</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">fontPath</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">panic</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// \u521B\u5EFA\u5B57\u4F53</span></span>
<span class="line"><span style="color:#A6ACCD;">    font</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> freetype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ParseFont</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">fontBytes</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">if</span><span style="color:#A6ACCD;"> err </span><span style="color:#89DDFF;">!=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">nil</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">panic</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">err</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// \u521B\u5EFA\u5B57\u4F53, \u5E76\u8BBE\u7F6E\u5B9A\u4E49\u7684\u5C5E\u6027</span></span>
<span class="line"><span style="color:#A6ACCD;">    face </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> truetype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">NewFace</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">font</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">truetype</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Options</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        Size</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">float64</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">fontSize</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">        DPI</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">     </span><span style="color:#82AAFF;">float64</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">fontDpi</span><span style="color:#89DDFF;">),</span></span>
<span class="line"><span style="color:#A6ACCD;">        Hinting</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> font</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">HintingFull</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// \u83B7\u53D6\u6587\u672C\u5185\u5BB9\u7684\u5BBD\u5EA6\u4E0E\u9AD8\u5EA6</span></span>
<span class="line"><span style="color:#A6ACCD;">    width </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> font</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">MeasureString</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">face</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> textContent</span><span style="color:#89DDFF;">).</span><span style="color:#82AAFF;">Ceil</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    height </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> font</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Metrics</span><span style="color:#89DDFF;">().</span><span style="color:#A6ACCD;">Height</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Ceil</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// \u8FD4\u56DE</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">return</span><span style="color:#A6ACCD;"> width</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> height</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h2 id="_3-\u4F7F\u7528\u793A\u4F8B" tabindex="-1">3. \u4F7F\u7528\u793A\u4F8B <a class="header-anchor" href="#_3-\u4F7F\u7528\u793A\u4F8B" aria-hidden="true">#</a></h2><div class="language-go line-numbers-mode"><button class="copy"></button><span class="lang">go</span><pre><code><span class="line"><span style="color:#89DDFF;">func</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">main</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> text </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Hello World</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">        </span><span style="color:#676E95;">// \u6587\u672C\u5185\u5BB9</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> fontPath </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">/simsun.ttf</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// \u5B57\u4F53\u8DEF\u5F84</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> fontSize </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20</span><span style="color:#A6ACCD;">               </span><span style="color:#676E95;">// \u5B57\u4F53\u5927\u5C0F</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">var</span><span style="color:#A6ACCD;"> fontDpi </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">72</span><span style="color:#A6ACCD;">                </span><span style="color:#676E95;">// \u5B57\u4F53Dpi,  DPI: \u6BCF\u82F1\u5BF8\u957F\u5EA6\u5185\u7684\u50CF\u7D20\u70B9\u6570, \u4E00\u822C\u4E3A72</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// \u83B7\u53D6\u6587\u672C\u5185\u5BB9\u5B9E\u9645\u6240\u5360\u5BBD\u9AD8</span></span>
<span class="line"><span style="color:#A6ACCD;">    width</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> height </span><span style="color:#89DDFF;">:=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">GetContentWidthAndHeight</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">text</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> fontPath</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> fontSize</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> fontDpi</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;">// \u8F93\u51FA</span></span>
<span class="line"><span style="color:#A6ACCD;">    fmt</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Println</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">width</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> height</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,7),e=[o];function r(t,c,D,y,A,F){return a(),n("div",null,e)}const b=s(p,[["render",r]]);export{i as __pageData,b as default};
