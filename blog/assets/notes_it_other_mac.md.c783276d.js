import{_ as s,f as a,e as n,z as l}from"./app.d04813f8.js";const D=JSON.parse('{"title":"MacOS 使用","description":"","frontmatter":{},"headers":[{"level":2,"title":"端口占用处理","slug":"端口占用处理","link":"#端口占用处理","children":[{"level":3,"title":"查看端口占用","slug":"查看端口占用","link":"#查看端口占用","children":[]},{"level":3,"title":"结束占用端口的进程","slug":"结束占用端口的进程","link":"#结束占用端口的进程","children":[]}]},{"level":2,"title":"为Adobe施加一些魔法","slug":"为adobe施加一些魔法","link":"#为adobe施加一些魔法","children":[]}],"relativePath":"notes/it/other/mac.md","lastUpdated":1683370778000}'),e={name:"notes/it/other/mac.md"},o=l(`<h1 id="macos-使用" tabindex="-1">MacOS 使用 <a class="header-anchor" href="#macos-使用" aria-hidden="true">#</a></h1><h2 id="端口占用处理" tabindex="-1">端口占用处理 <a class="header-anchor" href="#端口占用处理" aria-hidden="true">#</a></h2><h3 id="查看端口占用" tabindex="-1">查看端口占用 <a class="header-anchor" href="#查看端口占用" aria-hidden="true">#</a></h3><blockquote><p>输入：</p></blockquote><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看3000端口的占用情况</span></span>
<span class="line"><span style="color:#FFCB6B;">lsof</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i:3000</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote><p>输出：</p></blockquote><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">COMMAND</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">PID</span><span style="color:#A6ACCD;">        </span><span style="color:#C3E88D;">USER</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">FD</span><span style="color:#A6ACCD;">   </span><span style="color:#C3E88D;">TYPE</span><span style="color:#A6ACCD;">             </span><span style="color:#C3E88D;">DEVICE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">SIZE/OFF</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">NODE</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">NAME</span></span>
<span class="line"><span style="color:#FFCB6B;">node</span><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">2904</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yangzhongxu</span><span style="color:#A6ACCD;">   </span><span style="color:#F78C6C;">35u</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">IPv4</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0x11f45d274147e49d</span><span style="color:#A6ACCD;">      </span><span style="color:#C3E88D;">0t0</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">TCP</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">*</span><span style="color:#C3E88D;">:hbci</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">LISTEN</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#FFCB6B;">node</span><span style="color:#A6ACCD;">    </span><span style="color:#F78C6C;">2904</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">yangzhongxu</span><span style="color:#A6ACCD;">   </span><span style="color:#F78C6C;">52u</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">IPv4</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0x11f45d274145882d</span><span style="color:#A6ACCD;">      </span><span style="color:#C3E88D;">0t0</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">TCP</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">localhost:hbci</span><span style="color:#A6ACCD;">-</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">localhost:</span><span style="color:#F78C6C;">49885</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">CLOSED</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="结束占用端口的进程" tabindex="-1">结束占用端口的进程 <a class="header-anchor" href="#结束占用端口的进程" aria-hidden="true">#</a></h3><blockquote><p>输入：</p></blockquote><div class="language-sh line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 结束PID为 2904 的进程</span></span>
<span class="line"><span style="color:#82AAFF;">kill</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-9</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2904</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="为adobe施加一些魔法" tabindex="-1">为Adobe施加一些魔法 <a class="header-anchor" href="#为adobe施加一些魔法" aria-hidden="true">#</a></h2><blockquote><p>在使用魔法 <code>APP</code> 时，会跳出 <code>Sorry, this adobe app is not available.</code> ，这是App在使用时进行了联网校验。</p></blockquote><p>知道了问题就很好解决了，这里提供两种方案：</p><ol><li>修改对应的 <code>host</code>：</li></ol><ul><li>优点：简单方便</li><li>缺点：App可能会定时更新，这时候可能会再次遇到此问题，重新添加新的域名</li></ul><ol start="2"><li>安装 <a href="https://github.com/objective-see/LuLu" target="_blank" rel="noreferrer">lulu</a> ，这是方案一的升级版，使用 <code>lulu</code> 禁止APP联网。</li></ol><ul><li>优点：一劳永逸</li><li>缺点：需要安装额外软件</li></ul>`,17),p=[o];function t(c,r,i,C,d,y){return n(),a("div",null,p)}const h=s(e,[["render",t]]);export{D as __pageData,h as default};