import{_ as e,f as o,e as t,z as d}from"./app.165f9875.js";const i="/blog/assets/compare.77ffc20c.png",m=JSON.parse('{"title":"记录一次vite项目build优化过程","description":"","frontmatter":{},"headers":[{"level":2,"title":"问题描述","slug":"问题描述","link":"#问题描述","children":[]},{"level":2,"title":"原因分析","slug":"原因分析","link":"#原因分析","children":[]}],"relativePath":"notes/it/web/vite-build.md","lastUpdated":1683799267000}'),c={name:"notes/it/web/vite-build.md"},l=d('<h1 id="记录一次vite项目build优化过程" tabindex="-1">记录一次vite项目build优化过程 <a class="header-anchor" href="#记录一次vite项目build优化过程" aria-hidden="true">#</a></h1><h2 id="问题描述" tabindex="-1">问题描述 <a class="header-anchor" href="#问题描述" aria-hidden="true">#</a></h2><p>在项目打包时，会报错 <code>out of memory</code> 然后终止运行。这个错误不是必现的。</p><p>按照 <code>vite</code> <a href="https://github.com/vitejs/vite/issues/2433" target="_blank" rel="noreferrer">issue</a> 中提到的方法，以前已经通过配置 <code>&quot;build&quot;: &quot;cross-env NODE_OPTIONS=--max-old-space-size=8192 vite build&quot;,</code> 临时避免了此问题，可这次再次出现。</p><h2 id="原因分析" tabindex="-1">原因分析 <a class="header-anchor" href="#原因分析" aria-hidden="true">#</a></h2><p>为了正确定位原因，进行了多次打包测试。</p><p>主要是切换不同Node版本、主要依赖版本、代码版本（因为是本次合并后才出现的此问题）。</p><p>测试结果如下： <img src="'+i+'" alt="" data-fancybox="gallery"></p><p>通过上面的表格可以发现，不包含 <code>@antv/g6</code> 包的代码 <code>build</code> 耗时更短。</p><p>虽然内存和耗时是两个概念，但仍能反应一些问题。</p><div class="tip custom-block"><p class="custom-block-title">提示</p><p>如果想要查看在 <code>build</code> 时的内存变化，这里提供两种方式：</p><ol><li><p>使用 <code>--inspect</code> 参数：</p><ul><li>例如：<code>&quot;build&quot;: &quot;node --inspect --max_old_space_size=16384 ./node_modules/vite/bin/vite.js build --mode deploy&quot;</code></li><li>浏览器进入 <code>chrome://inspect</code>，打开监控界面。</li></ul></li><li><p>使用 <code>pm2</code> 执行打包命令：</p><ul><li>使用 <code>pm2</code> 运行 <code>yarn build:test</code>： <ul><li><code>pm2 start yarn --name &quot;build&quot; --interpreter bash --no-autorestart -- run build</code></li><li>这将启动一个名为 <code>build</code> 的 <code>PM2</code> 进程，使用 <code>bash</code> 解释器来运行 <code>yarn</code> 命令，并在执行成功后退出。<code>--no-autorestart</code> 标志将防止进程在崩溃时自动重新启动。</li></ul></li><li>通过 <code>pm2 monit</code> 命令可以调出监控界面。</li></ul></li></ol></div>',11),a=[l];function s(r,n,u,p,_,h){return t(),o("div",null,a)}const v=e(c,[["render",s]]);export{m as __pageData,v as default};