if(!self.define){let e,s={};const n=(n,o)=>(n=new URL(n+".js",o).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(o,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let r={};const l=e=>n(e,i),c={module:{uri:i},exports:r,require:l};s[i]=Promise.all(o.map((e=>c[e]||l(e)))).then((e=>(t(...e),r)))}}define(["./workbox-db5fc017"],(function(e){"use strict";e.setCacheNameDetails({prefix:"components-vue"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/Components-Dist/css/app.a4a0b0d1.css",revision:null},{url:"/Components-Dist/css/chunk-vendors.583ee891.css",revision:null},{url:"/Components-Dist/index.html",revision:"ffeec65d3be2c080c418b4246d37a63e"},{url:"/Components-Dist/js/about.bf7e0534.js",revision:null},{url:"/Components-Dist/js/app.f4d0d1d0.js",revision:null},{url:"/Components-Dist/js/chunk-vendors.7d96e4b7.js",revision:null},{url:"/Components-Dist/manifest.json",revision:"13803f029b3f2c9754fbd9639bb27518"},{url:"/Components-Dist/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
