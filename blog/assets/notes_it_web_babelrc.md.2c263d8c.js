import{_ as e,g as a,f as l,v as b}from"./app.b8302316.js";const g=JSON.parse('{"title":".babelrc\u4E0Ebabel.config.js","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u95EE\u9898\u80CC\u666F","slug":"\u95EE\u9898\u80CC\u666F","link":"#\u95EE\u9898\u80CC\u666F","children":[]},{"level":2,"title":"babel.config.js\u4E0E.babelrc\u533A\u522B","slug":"babel-config-js\u4E0E-babelrc\u533A\u522B","link":"#babel-config-js\u4E0E-babelrc\u533A\u522B","children":[]},{"level":2,"title":"\u89E3\u51B3","slug":"\u89E3\u51B3","link":"#\u89E3\u51B3","children":[]}],"relativePath":"notes/it/web/babelrc.md","lastUpdated":1675246477000}'),o={name:"notes/it/web/babelrc.md"},c=b('<h1 id="babelrc\u4E0Ebabel-config-js" tabindex="-1">.babelrc\u4E0Ebabel.config.js <a class="header-anchor" href="#babelrc\u4E0Ebabel-config-js" aria-hidden="true">#</a></h1><h2 id="\u95EE\u9898\u80CC\u666F" tabindex="-1">\u95EE\u9898\u80CC\u666F <a class="header-anchor" href="#\u95EE\u9898\u80CC\u666F" aria-hidden="true">#</a></h2><p>\u5728\u5F00\u53D1\u7EC4\u4EF6\u5E93 <code>EJ/UI</code> \u65F6\uFF0C\u4F7F\u7528\u7684\u6280\u672F\u6808\uFF1ATypescript\u3001Vue3\u3001Storybook\u3002</p><p>\u56E0\u4E3A\u5728\u5F00\u53D1\u67D0\u4E9B\u7EC4\u4EF6\u65F6\uFF08Table\u3001TableColumn\uFF09\u9700\u8981\u7528\u5230 <code>jsx</code> \u8BED\u6CD5\u3002\u6240\u4EE5\u9700\u8981\u5B89\u88C5Vue\u5B98\u65B9\u5F00\u53D1\u7684babel plugin\uFF1A<code>@vue/babel-plugin-jsx</code>\u3002</p><p>\u4E8E\u662F\u5728\u9879\u76EE\u7684 <code>/.storybook</code> \u7684\u8DEF\u5F84\u4E0B\u521B\u5EFA\u4E86 <code>.babelrc</code> \u6587\u4EF6\u7528\u4E8E\u914D\u7F6E\u6DFB\u52A0\u7684babel plugin\uFF0C\u8FD9\u65F6\u5019\u51FA\u73B0\u4E86\u7B2C\u4E00\u4E2A\u5947\u602A\u7684\u95EE\u9898\uFF1A</p><ol><li>\u5728\u9879\u76EE\u7F16\u8BD1\u65F6??\u548C?.\u7B49\u53EF\u9009\u7B26\u7F16\u8BD1\u62A5\u9519\uFF0C\u56E0\u6B64\u4E3A\u4E86\u89E3\u51B3\u8BE5\u95EE\u9898\uFF0C\u6211\u4E0D\u5F97\u4E0D\u624B\u52A8\u914D\u7F6E\u4E0A <code>@babel/plugin-proposal-optional-chaining</code> \u548C <code>@babel/plugin-proposal-nullish-coalescing-operator</code> \u63D2\u4EF6\u3002\u7136\u800C\u5728\u672A\u914D\u7F6E\u6B64\u6587\u4EF6\u4E4B\u524D\u662F\u4E0D\u62A5\u6B64\u9519\u8BEF\u7684\uFF0C\u56E0\u4E3Atypescript\u5DF2\u7ECF\u4E3A\u6211\u4EEC\u505A\u597D\u4E86\u53EF\u9009\u7B26\u7684\u7F16\u8BD1\u914D\u7F6E\uFF0C\u8FD9\u65F6\u5019\u6211\u4EEC\u53EF\u4EE5\u5408\u7406\u6000\u7591\uFF0C\u662F\u914D\u7F6E\u7684.babelrc\u6587\u4EF6\u51B2\u6389\u4E86\u539F\u6709\u7684\u914D\u7F6E\u3002</li><li>\u9047\u5230\u7684\u7B2C\u4E8C\u4E2A\u95EE\u9898\u662F\uFF0C\u5728\u7F16\u8BD1\u5728/src/utils\u8DEF\u5F84\u4E0B\u7684Typescript\u5199\u7684ES6\u4EE3\u7801\u65F6\uFF0C\u6CA1\u6709\u628AES6\u4EE3\u7801\u8F6C\u4E49\u6210ES5\uFF0C\u56E0\u6B64\u9020\u6210webpack\u62A5\u9519\u3002\u8FD9\u65F6\u5019\u6211\u4EEC\u66F4\u52A0\u53EF\u4EE5\u9A8C\u8BC1\uFF0C\u7531\u4E8E\u5BF9.babelrc\u6587\u4EF6\u7684\u914D\u7F6E\u51B2\u5237\u6389\u539F\u6709\u7684babel\u914D\u7F6E\u4E86\u3002</li></ol><h2 id="babel-config-js\u4E0E-babelrc\u533A\u522B" tabindex="-1">babel.config.js\u4E0E.babelrc\u533A\u522B <a class="header-anchor" href="#babel-config-js\u4E0E-babelrc\u533A\u522B" aria-hidden="true">#</a></h2><p>\u901A\u8FC7<a href="https://babeljs.io/docs/en/config-files#root-babelconfigjson-file" target="_blank" rel="noreferrer">babel\u5B98\u65B9\u6587\u6863</a>\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\uFF0C\u5BF9\u4E8Ebabel.config.js\u4E0E.babelrc\u533A\u522B\u7684\u63CF\u5199\uFF0C\u6211\u4EEC\u53EF\u4EE5\u7406\u89E3\u4E3A\uFF1A</p><ol><li>babel.config.js\u8FDB\u884C\u7684\u914D\u7F6E\u662F\u5BF9\u4E8E\u8BE5\u9879\u76EE\u4E0B\u6240\u6709\u6587\u4EF6\u751F\u6548\uFF08\u62A5\u9519node_modules\uFF09\u3002</li><li>.babelrc\u8FDB\u884C\u914D\u7F6E\u4EC5\u5BF9.babelrc\u6240\u5728\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6\u6709\u6548\uFF0C\u4E14\u4F1A\u4EE5.babelrc\u7684\u914D\u7F6E\u4E3A\u4E3B\uFF0C\u5FFD\u7565\u6389babel.config.js\u3002</li></ol><h2 id="\u89E3\u51B3" tabindex="-1">\u89E3\u51B3 <a class="header-anchor" href="#\u89E3\u51B3" aria-hidden="true">#</a></h2><p>\u77E5\u9053\u4E86\u539F\u56E0\uFF0C\u6211\u4EEC\u5C31\u5F88\u597D\u89E3\u51B3\u4E86\u3002</p><p>\u6B63\u662F\u7531\u4E8E <code>/.storybook/.babelrc</code> \u51B2\u6389\u4E86\u9879\u76EE\u7684\u9ED8\u8BA4babel\u914D\u7F6E\uFF0C\u624D\u9020\u6210\u7684\u65E0\u6CD5\u6B63\u786E\u7F16\u8BD1\u3002\u6211\u4EEC\u53EA\u9700\u8981\u628A\u5BF9babel\u7684\u914D\u7F6E\u6587\u4EF6\u7531 <code>/.storybook/.babelrc</code> \u6362\u5230 <code>/babel.config.js</code> \u5373\u53EF\u3002</p>',12),r=[c];function i(n,s,t,d,p,h){return l(),a("div",null,r)}const _=e(o,[["render",i]]);export{g as __pageData,_ as default};