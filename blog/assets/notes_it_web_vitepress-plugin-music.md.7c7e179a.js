import{_ as e,g as s,f as a,v as n}from"./app.9619b0e5.js";const g=JSON.parse('{"title":"vitepress-plugin-music\u5F00\u53D1\u8BB0\u5F55","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5B83\u662F\u4EC0\u4E48","slug":"\u5B83\u662F\u4EC0\u4E48","link":"#\u5B83\u662F\u4EC0\u4E48","children":[]},{"level":2,"title":"\u4F7F\u7528\u6280\u672F","slug":"\u4F7F\u7528\u6280\u672F","link":"#\u4F7F\u7528\u6280\u672F","children":[]},{"level":2,"title":"\u9047\u5230\u95EE\u9898","slug":"\u9047\u5230\u95EE\u9898","link":"#\u9047\u5230\u95EE\u9898","children":[{"level":3,"title":"\u4F7F\u7528unbuild\u6253\u5305\u65F6\u9047\u5230\u7684\u95EE\u9898","slug":"\u4F7F\u7528unbuild\u6253\u5305\u65F6\u9047\u5230\u7684\u95EE\u9898","link":"#\u4F7F\u7528unbuild\u6253\u5305\u65F6\u9047\u5230\u7684\u95EE\u9898","children":[]},{"level":3,"title":"\u4F7F\u7528vite\u6253\u5305lib\u6CE8\u610F\u7684\u4E8B","slug":"\u4F7F\u7528vite\u6253\u5305lib\u6CE8\u610F\u7684\u4E8B","link":"#\u4F7F\u7528vite\u6253\u5305lib\u6CE8\u610F\u7684\u4E8B","children":[]}]},{"level":2,"title":"todo","slug":"todo","link":"#todo","children":[]},{"level":2,"title":"\u53C2\u8003","slug":"\u53C2\u8003","link":"#\u53C2\u8003","children":[]}],"relativePath":"notes/it/web/vitepress-plugin-music.md","lastUpdated":1670830165000}'),l={name:"notes/it/web/vitepress-plugin-music.md"},i=n(`<h1 id="vitepress-plugin-music\u5F00\u53D1\u8BB0\u5F55" tabindex="-1">vitepress-plugin-music\u5F00\u53D1\u8BB0\u5F55 <a class="header-anchor" href="#vitepress-plugin-music\u5F00\u53D1\u8BB0\u5F55" aria-hidden="true">#</a></h1><h2 id="\u5B83\u662F\u4EC0\u4E48" tabindex="-1">\u5B83\u662F\u4EC0\u4E48 <a class="header-anchor" href="#\u5B83\u662F\u4EC0\u4E48" aria-hidden="true">#</a></h2><p><a href="https://github.com/ZhongxuYang/vitepress-plugin-music" target="_blank" rel="noreferrer">vitepress-plugin-music</a> \u662F\u4E3A <code>vitepress</code> \u5F00\u53D1\u7684\u62D3\u5C55\u63D2\u4EF6\u3002</p><p>\u65E8\u5728\u7B80\u5355\u7684\u4F20\u5165\u6B4C\u5355\u5217\u8868\u6570\u636E\u540E\uFF0C\u5373\u53EF\u5728\u7F51\u7AD9\u4E0A\u64AD\u653E\u97F3\u9891\u7684\u63D2\u4EF6\u3002</p><h2 id="\u4F7F\u7528\u6280\u672F" tabindex="-1">\u4F7F\u7528\u6280\u672F <a class="header-anchor" href="#\u4F7F\u7528\u6280\u672F" aria-hidden="true">#</a></h2><ul><li>\u4F7F\u7528 <code>typescript</code> \u5F00\u53D1</li><li>\u4F7F\u7528 <code>vue template</code> \u6A21\u7248\u6E32\u67D3</li><li>\u4F7F\u7528 <code>vite</code> \u8FDB\u884C\u6253\u5305</li></ul><h2 id="\u9047\u5230\u95EE\u9898" tabindex="-1">\u9047\u5230\u95EE\u9898 <a class="header-anchor" href="#\u9047\u5230\u95EE\u9898" aria-hidden="true">#</a></h2><h3 id="\u4F7F\u7528unbuild\u6253\u5305\u65F6\u9047\u5230\u7684\u95EE\u9898" tabindex="-1">\u4F7F\u7528unbuild\u6253\u5305\u65F6\u9047\u5230\u7684\u95EE\u9898 <a class="header-anchor" href="#\u4F7F\u7528unbuild\u6253\u5305\u65F6\u9047\u5230\u7684\u95EE\u9898" aria-hidden="true">#</a></h3><p>\u672C\u60F3\u50CF <a href="https://github.com/ZhongxuYang/vitepress-plugin-nprogress" target="_blank" rel="noreferrer">vitepress-plugin-nprogress</a> \u4E0E <a href="https://github.com/ZhongxuYang/vitepress-plugin-google-analytics" target="_blank" rel="noreferrer">vitepress-plugin-google-analytics</a> \u4E00\u6837\uFF0C\u4F7F\u7528 <a href="https://github.com/unjs/unbuild" target="_blank" rel="noreferrer">unbuild</a> \u8FDB\u884C\u6253\u5305\u3002</p><p>\u4F46\u5728 <code>yarn build</code> \u65F6\uFF0C\u9047\u5230\u62A5\u9519 <code>Error: Unexpected token (Note that you need plugins to import files that are not JavaScript)</code> \u3002\u5E94\u8BE5\u662F <code>unbuild</code> \u4E0D\u80FD\u89E3\u6790vue\u6587\u4EF6\u9020\u6210\u7684\u9519\u8BEF\uFF0C\u76EE\u524D\u6CA1\u6709\u627E\u5230\u89E3\u51B3\u65B9\u6848\uFF0C\u5BF9\u5E94<a href="https://github.com/unjs/unbuild/issues/80" target="_blank" rel="noreferrer">Issue</a>\u3002</p><p>\u9042\u653E\u5F03\u4F7F\u7528 <code>unbuild</code> \uFF0C\u8F6C\u800C\u4F7F\u7528 <code>vite</code> \u8FDB\u884C\u6253\u5305\u3002\u6BD5\u7ADF\u662Fvitepress\u9879\u76EE\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528<code>vite</code>\uFF0C\u8FD8\u53EF\u4EE5\u5C11\u5B89\u88C5\u4E00\u4E2A\u4F9D\u8D56\u3002</p><h3 id="\u4F7F\u7528vite\u6253\u5305lib\u6CE8\u610F\u7684\u4E8B" tabindex="-1">\u4F7F\u7528vite\u6253\u5305lib\u6CE8\u610F\u7684\u4E8B <a class="header-anchor" href="#\u4F7F\u7528vite\u6253\u5305lib\u6CE8\u610F\u7684\u4E8B" aria-hidden="true">#</a></h3><ol><li>\u914D\u7F6E <a href="https://github.com/ZhongxuYang/vitepress-plugin-music/blob/main/vite.config.ts" target="_blank" rel="noreferrer">vite.config.ts</a> \u7684 <code>build.rollupOptions.external</code>\uFF0C\u7528\u6765\u628A <code>vue</code> \u4F9D\u8D56\u5305\u7684\u5185\u5BB9\u6392\u9664\u5728\u5916\uFF08\u56E0\u4E3A\u4F7F\u7528\u672Cplugin\u7684\u4E3B\u9879\u76EE\u4E00\u5B9A\u5DF2\u7ECF\u5B89\u88C5\u4E86<code>vue</code>\uFF0C\u53EF\u4EE5\u5728 <a href="./\u6253\u5305JavaScript\u5E93\u7684\u73B0\u4EE3\u5316\u6307\u5357.html#\u5916\u7F6E\u6846\u67B6">\u6253\u5305JavaScript\u5E93\u7684\u73B0\u4EE3\u5316\u6307\u5357</a> \u770B\u5230\u4E4B\u6240\u4EE5\u8981\u8FD9\u6837\u505A\u7684\u66F4\u8BE6\u7EC6\u7684\u4ECB\u7ECD\uFF09\u3002</li></ol><div class="language-ts line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#FFCB6B;">build</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#FFCB6B;">rollupOptions</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">external</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> [</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="todo" tabindex="-1">todo <a class="header-anchor" href="#todo" aria-hidden="true">#</a></h2><ul><li>\u907F\u514D\u9700\u8981\u5355\u72EC\u5F15\u5165css\uFF0Ccss\u6587\u4EF6\u6DF7\u5165js</li></ul><h2 id="\u53C2\u8003" tabindex="-1">\u53C2\u8003 <a class="header-anchor" href="#\u53C2\u8003" aria-hidden="true">#</a></h2><ul><li><a href="https://github.com/unjs/unbuild/issues/80" target="_blank" rel="noreferrer">unbuild Issue</a></li><li><a href="https://github.com/vuejs/core/issues/5625#issuecomment-1078953150" target="_blank" rel="noreferrer">Cannot find module &#39;@babel/types&#39; or its corresponding type declarations</a></li><li><a href="https://rollupjs.org/guide/en/#external" target="_blank" rel="noreferrer">vite.config.ts build.rollupOptions.external</a></li></ul>`,18),r=[i];function t(o,p,c,u,d,h){return a(),s("div",null,r)}const v=e(l,[["render",t]]);export{g as __pageData,v as default};