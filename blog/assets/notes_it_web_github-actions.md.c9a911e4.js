import{_ as s,g as n,f as a,z as l}from"./app.c8d93939.js";const D=JSON.parse('{"title":"Github Actions 自动化部署静态页面","description":"","frontmatter":{},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"Github Actions自动化部署配置","slug":"github-actions自动化部署配置","link":"#github-actions自动化部署配置","children":[]},{"level":2,"title":"本地部署","slug":"本地部署","link":"#本地部署","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"notes/it/web/github-actions.md","lastUpdated":1676011096000}'),e={name:"notes/it/web/github-actions.md"},p=l(`<h1 id="github-actions-自动化部署静态页面" tabindex="-1">Github Actions 自动化部署静态页面 <a class="header-anchor" href="#github-actions-自动化部署静态页面" aria-hidden="true">#</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-hidden="true">#</a></h2><p>下文中提到的项目含义如下：</p><ol><li><code>zhangsan</code> / <code>webapp</code> / dev - 张三的Git账户 / 源代码项目名称 / 分支</li><li><code>lisi</code> / <code>blog.github.io</code> / main - 李四的Git账户 / 静态页面项目名称（即webapp的build产物） / 分支</li></ol><h2 id="github-actions自动化部署配置" tabindex="-1">Github Actions自动化部署配置 <a class="header-anchor" href="#github-actions自动化部署配置" aria-hidden="true">#</a></h2><ol><li>首先使用 <code>blog.github.io</code> 创建人账户<a href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token" target="_blank" rel="noreferrer">创建 Access Token</a>，并记录最后生成的值。</li><li>在你 <code>webapp</code> 仓库下 <a href="https://docs.github.com/en/actions/security-guides/encrypted-secrets" target="_blank" rel="noreferrer">创建一个secrets</a>，填入刚创建的 Access Token。（注意：创建的 <code>secrets</code> 名称需要记住，在下面的 <code>yml</code> 文件中使用）</li><li>在项目根目录下的 <code>.github/workflows</code> 目录（没有的话，请手动创建一个）下创建一个 <code>.yml</code> 或者 <code>.yaml</code> 文件，如: <code>vitepress-deploy.yml</code></li></ol><div class="language-yaml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># vitepress-deploy.yml</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># name 可以自定义</span></span>
<span class="line"><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Deploy GitHub Pages</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 触发条件：在 push 到 dev 分支后触发</span></span>
<span class="line"><span style="color:#FF9CAC;">on</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">push</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">branches</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 任务</span></span>
<span class="line"><span style="color:#F07178;">jobs</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">build-and-deploy</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;"># 服务器环境：最新版 Ubuntu</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">runs-on</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ubuntu-latest</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">steps</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;"># 拉取代码</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Checkout</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">actions/checkout@v2</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># github官方提供的分支切换github action</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">with</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">persist-credentials</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;"># 生成静态文件</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Build</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">run</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yarn &amp;&amp; yarn build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;font-style:italic;"># 部署到 GitHub Pages</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">Deploy</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">uses</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">JamesIves/github-pages-deploy-action@releases/v3</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 此GitHub Action将自动将您的项目部署到GitHub Pages</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">with</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">REPOSITORY_NAME</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">lisi/blog.github.io</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">BRANCH</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">main</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">FOLDER</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs/.vitepress/dist</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># vitepress 生成的静态文件存放的地方</span></span>
<span class="line"><span style="color:#A6ACCD;">          </span><span style="color:#F07178;">ACCESS_TOKEN</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">\${{ secrets.ACCESS_TOKEN }}</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;"># 生成的 secret, ACCESS_TOKEN就是在配置secrets时填写的名字</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>至此，Github Action的静态页面部署就结束啦！在推送 <code>webapp / dev</code> 后，我们就可以在 <code>Action</code> 中看到脚本已经愉地跑起来了。</p><h2 id="本地部署" tabindex="-1">本地部署 <a class="header-anchor" href="#本地部署" aria-hidden="true">#</a></h2><p>本地部署是一种非自动化的，基于 <code>Shell</code> 脚本的部署方式。</p><p>相对于 <code>GitHub Action</code> 来说，它配置简单，只需要配置一个 <code>Shell</code> 文件，同时缺点也是每次部署前需要手动执行这个 <code>Shell</code> 脚本。</p><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">#!/usr/bin/env sh</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 确保脚本抛出遇到的错误</span></span>
<span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-e</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 生成静态文件</span></span>
<span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 进入生成的文件夹</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">docs/.vitepress/dist</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 如果是发布到自定义域名</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># echo &#39;www.example.com&#39; &gt; CNAME</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">init</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-A</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">deploy</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 如果发布到 https://&lt;USERNAME&gt;.github.io</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-f</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git@github.com:lisi/blog.github.io.git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">main</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 如果发布到 https://&lt;USERNAME&gt;.github.io/&lt;REPO&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># git push -f git@github.com:&lt;USERNAME&gt;/&lt;REPO&gt;.git master:gh-pages</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>当改完代码后，在git bash中执行 ./deploy.sh即可。</p><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h2><ul><li><a href="https://github.com/marketplace/actions/private-actions-checkout" target="_blank" rel="noreferrer">actions/checkout@v2</a></li><li><a href="https://github.com/JamesIves/github-pages-deploy-action/tree/3.7.1" target="_blank" rel="noreferrer">JamesIves/github-pages-deploy-action/v3</a></li><li><a href="https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages" target="_blank" rel="noreferrer">Vuepress - 部署</a></li><li><a href="https://cloud.tencent.com/developer/article/1777585" target="_blank" rel="noreferrer">VuePress教程之部署到Github Action</a></li></ul>`,15),o=[p];function t(c,r,i,y,b,C){return a(),n("div",null,o)}const A=s(e,[["render",t]]);export{D as __pageData,A as default};