import{_ as s,g as e,f as a,y as n}from"./app.f8049d2c.js";const g=JSON.parse('{"title":"Github Page Error","description":"","frontmatter":{},"headers":[{"level":2,"title":"Github Page\u62A5\u9519_commonjsHelpers\u7684\u95EE\u9898","slug":"github-page\u62A5\u9519-commonjshelpers\u7684\u95EE\u9898","link":"#github-page\u62A5\u9519-commonjshelpers\u7684\u95EE\u9898","children":[{"level":3,"title":"\u95EE\u9898\u63CF\u8FF0","slug":"\u95EE\u9898\u63CF\u8FF0","link":"#\u95EE\u9898\u63CF\u8FF0","children":[]},{"level":3,"title":"\u539F\u56E0\u5206\u6790","slug":"\u539F\u56E0\u5206\u6790","link":"#\u539F\u56E0\u5206\u6790","children":[]},{"level":3,"title":"\u89E3\u51B3\u95EE\u9898","slug":"\u89E3\u51B3\u95EE\u9898","link":"#\u89E3\u51B3\u95EE\u9898","children":[]}]}],"relativePath":"notes/it/web/github-page-error.md","lastUpdated":1675677189000}'),l={name:"notes/it/web/github-page-error.md"},p=n(`<h1 id="github-page-error" tabindex="-1">Github Page Error <a class="header-anchor" href="#github-page-error" aria-hidden="true">#</a></h1><h2 id="github-page\u62A5\u9519-commonjshelpers\u7684\u95EE\u9898" tabindex="-1">Github Page\u62A5\u9519_commonjsHelpers\u7684\u95EE\u9898 <a class="header-anchor" href="#github-page\u62A5\u9519-commonjshelpers\u7684\u95EE\u9898" aria-hidden="true">#</a></h2><h3 id="\u95EE\u9898\u63CF\u8FF0" tabindex="-1">\u95EE\u9898\u63CF\u8FF0 <a class="header-anchor" href="#\u95EE\u9898\u63CF\u8FF0" aria-hidden="true">#</a></h3><p>\u5728\u4F7F\u7528 <code>Vitepress</code> \u6784\u5EFA\u7684\u9879\u76EE\u65F6\uFF0C\u5982\u679C\u7528\u5230 <code>\u6309\u9700\u5F15\u5165</code> \u7684\u7EC4\u4EF6\uFF0C\u5728<a href="https://github.com/ZhongxuYang/zhongxuyang.github.io" target="_blank" rel="noreferrer">\u7EBF\u4E0A\u73AF\u5883</a>\u4F1A\u62A5\u9519\uFF1A</p><div class="danger custom-block"><p class="custom-block-title">\u62A5\u9519\u4FE1\u606F</p><p>_commonjsHelpers.XXXXXX.js file generated in the assets folder to Github Pages</p><p>Hydration completed but contains mismatches when using Github pages</p></div><h3 id="\u539F\u56E0\u5206\u6790" tabindex="-1">\u539F\u56E0\u5206\u6790 <a class="header-anchor" href="#\u539F\u56E0\u5206\u6790" aria-hidden="true">#</a></h3><blockquote><p>\u95EE\u9898\u6392\u9664</p></blockquote><p>\u9996\u5148\u5C1D\u8BD5\u5728\u672C\u5730 <code>build</code> \u540E <code>yarn serve</code> \u8FD0\u884C\uFF0C\u5E76\u4E0D\u4F1A\u62A5\u9519\u3002\u8FD9\u65F6\u53EF\u4EE5\u5F88\u81EA\u7136\u7684\u60F3\u5230<code>\u7EBF\u4E0A\u6253\u5305</code>\u548C<code>\u672C\u5730\u6253\u5305</code>\u7684\u5DEE\u5F02\uFF0C\u5408\u7406\u6000\u7591\u662F\u5426\u662F\u7531\u4E8E <code>Node.js</code> \u7248\u672C\u4E0D\u4E00\u81F4\u9020\u6210\u7684\u95EE\u9898\u3002</p><div class="info custom-block"><p class="custom-block-title"><a href="https://vitepress.vuejs.org/guide/deploying.html#netlify-vercel-aws-amplify-cloudflare-pages-render" target="_blank" rel="noreferrer">vitepress - Netlify\u3001Vercel\u3001AWS Amplify\u3001Cloudflare \u9875\u9762\u3001\u6E32\u67D3</a> \u4E2D\u63D0\u5230\uFF1A</p><p>Node Version: 14 (or above, by default it usually will be 14 or 16, but on Cloudflare Pages the default is still 12, so you may need to change that)</p></div><p>\u672C\u5730\u4F7F\u7528\u7684\u662F <code>Node 16.x</code>\uFF0C\u7EBF\u4E0A\u662F\u901A\u8FC7 <a href="./github-actions.html">Github Action</a> \u90E8\u7F72\u7684\u3002</p><p>\u5148\u5728\u672C\u5730\u5207\u6362\u5230 <code>Node 12.x</code> \u91CD\u65B0\u5C1D\u8BD5\u8FD0\u884C\uFF1A</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u67E5\u770B\u672C\u5730\u5B89\u88C5\u7684\u6240\u6709nodejs\u7248\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">nvm list </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5B89\u88C5\u6307\u5B9A\u7248\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">nvm install 12</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5207\u6362\u5230\u6307\u5B9A\u7248\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">nvm use 12</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u5378\u8F7D\u6307\u5B9A\u7248\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">nvm uninstall 12</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u663E\u793A\u5F53\u524D\u7248\u672C</span></span>
<span class="line"><span style="color:#A6ACCD;">nvm current</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u7ED3\u679C\u663E\u800C\u6613\u89C1\uFF0C\u6211\u5FFD\u7565\u4E86 <code>Vite</code> \u9700\u8981 <code>Node.js &gt; 14.18+, 16+</code> \u624D\u80FD<a href="https://cn.vitejs.dev/guide/#scaffolding-your-first-vite-project" target="_blank" rel="noreferrer">\u6B63\u5E38\u8FD0\u884C</a>\u3002</p><p>\u63A5\u4E0B\u6765\u5C1D\u8BD5\u628A\u7EBF\u4E0A\u73AF\u5883\u7684 <code>Node</code> \u7248\u672C\u4E0E\u5207\u6362\u5230\u4E0E\u672C\u5730\u76F8\u540C\uFF0C\u627E\u5230 <code>/.github/workflows/***.yml</code> \u6587\u4EF6:</p><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># ...</span></span>
<span class="line"><span style="color:#F07178;">jobs</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">build-and-deploy</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">runs-on</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ubuntu-latest</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">strategy</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">matrix</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">node-version</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#C3E88D;">16.x</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;"># \u914D\u7F6E\u6240\u9700node\u7248\u672C</span></span>
<span class="line"><span style="color:#676E95;"># ...</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u7ED3\u679C\u4F9D\u7136\u62A5\u9519\uFF0C\u81F3\u6B64\u53EF\u4EE5\u6392\u9664\u662F <code>Node.js</code> \u7684\u95EE\u9898\u9020\u6210\u8BE5\u9519\u8BEF\u3002</p><blockquote><p>\u786E\u8BA4\u539F\u56E0</p></blockquote><p>\u8FD9\u65F6\u5728 <a href="https://github.com/vuejs/vitepress/issues" target="_blank" rel="noreferrer">vitepress</a> \u7684 <code>issue</code> \u4E2D\u53D1\u73B0\u4E00\u4E2A\u540D\u4E3A <a href="https://github.com/vuejs/vitepress/issues/382" target="_blank" rel="noreferrer">Problems with uploading the _commonjsHelpers.XXXXXX.js file generated in the assets folder to Github Pages</a> \u7684bug\u53CD\u9988\u3002</p><p>\u5728\u8FD9\u4E2A\u53CD\u9988\u4E0B\u9762\u5C24\u5927\u7ED9\u51FA\u4E86\u6B63\u786E\u7B54\u6848\uFF1A<a href="https://github.blog/2009-12-29-bypassing-jekyll-on-github-pag" target="_blank" rel="noreferrer">Bypassing Jekyll on GitHub Pages</a></p><div class="tip custom-block"><p class="custom-block-title">_commonjsHelpers.XXXXXX.js file generated in the assets folder to Github Pages</p><p>Github Pages \u9ED8\u8BA4\u662F\u57FA\u4E8E Jekyll \u6784\u5EFA\uFF0CJekyll \u662F\u4E00\u4E2A\u5C06\u7EAF\u6587\u672C\u8F6C\u6362\u4E3A\u9759\u6001\u7F51\u7AD9\u7684\u5DE5\u5177\uFF0C\u5B83\u6784\u5EFA\u7684\u7F51\u7AD9\u4E0B\u5404\u79CD\u76EE\u5F55\u90FD\u662F\u7279\u5B9A\u7684\u4EE5\u4E0B\u5212\u7EBF\u5F00\u5934\u547D\u540D\u7684\u6587\u4EF6\u5939\uFF0C\u4F8B\u5982 _layouts\u3001_posts \uFF0C\u5B83\u4F1A\u5FFD\u7565\u6389\u5176\u5B83\u7684\u4EE5\u4E0B\u5212\u7EBF\u5F00\u5934\u7684\u6587\u4EF6\u5939\u548C\u6587\u4EF6\u3002</p><p>.nojekyll \u5C31\u662F\u544A\u8BC9 Github Pages \u5F53\u524D\u7F51\u7AD9\u4E0D\u662F\u57FA\u4E8E Jekyll \u6784\u5EFA\u7684\uFF0C\u4E0D\u8981\u5FFD\u7565\u6389\u4E0B\u5212\u7EBF\u5F00\u5934\u7684\u6587\u4EF6\u548C\u6587\u4EF6\u5939\u3002</p><p>\u53EF\u89C1 .nojekyll \u4E3B\u8981\u5C31\u662F\u7528\u4E8E Github Pages \u8FD9\u79CD\u6709\u9ED8\u8BA4\u89C4\u5219\u7684\u7F51\u7AD9\u90E8\u7F72\u5E73\u53F0\uFF0C\u5982\u679C\u662F\u90E8\u7F72\u5728\u81EA\u5DF1\u7684\u670D\u52A1\u5668\u4E0A\uFF0C\u53EF\u4EE5\u628A\u5B83\u5220\u6389\u3002</p><p>\u53CD\u4E4B\uFF0C\u5982\u679C\u4F60\u7684\u7F51\u7AD9\u4E0D\u662F Jekyll \u6784\u5EFA\u7684\uFF0C\u8981\u90E8\u7F72\u5230 Github Pages \uFF0C\u5E76\u4E14\u5305\u542B\u4E0B\u5212\u7EBF\u5F00\u5934\u7684\u6587\u4EF6\u6216\u6587\u4EF6\u5939\uFF0C\u90A3\u4E48\u4F60\u5C31\u9700\u8981\u5728\u6839\u76EE\u5F55\u6DFB\u52A0\u4E00\u4E2A .nojekyll \u7A7A\u6587\u4EF6\u3002</p></div><h3 id="\u89E3\u51B3\u95EE\u9898" tabindex="-1">\u89E3\u51B3\u95EE\u9898 <a class="header-anchor" href="#\u89E3\u51B3\u95EE\u9898" aria-hidden="true">#</a></h3><p>\u5982\u4E0A\u6240\u8BF4\uFF0C\u53EA\u9700\u8981\u5728 <code>***.github.io</code> \u7684\u9879\u76EE\u6839\u76EE\u5F55\u4E2D\u521B\u5EFA\u4E00\u4E2A\u7A7A\u7684 <code>.nojekyll</code> \u6587\u4EF6\u5373\u53EF\u89E3\u51B3\uFF01\u{1F389}</p><div class="info custom-block"><p class="custom-block-title">\u63D0\u793A</p><p>\u4E00\u4E9B\u6846\u67B6\u6253\u5305\u751F\u6210\u7684 <code>dist</code> \u6587\u4EF6\u5DF2\u7ECF\u4E3A\u4F60\u521B\u5EFA\u597D\u4E86\u8FD9\u4E2A\u7A7A\u6587\u4EF6\u3002\u4F8B\u5982\uFF1A<code>Nuxt</code></p></div>`,23),o=[p];function r(t,c,i,d,u,b){return a(),e("div",null,o)}const m=s(l,[["render",r]]);export{g as __pageData,m as default};