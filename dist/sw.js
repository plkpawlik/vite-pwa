if(!self.define){let e,i={};const r=(r,n)=>(r=new URL(r+".js",n).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const f=e=>r(e,o),t={module:{uri:o},exports:c,require:f};i[o]=Promise.all(n.map((e=>t[e]||f(e)))).then((e=>(s(...e),c)))}}define(["./workbox-8738f3ab"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.034b56ce.css",revision:null},{url:"assets/index.3412b6e5.js",revision:null},{url:"index.html",revision:"0edef4cc2398eda228bb8483ecd45f29"},{url:"registerSW.js",revision:"56e6f4ff80d8291b45c7d1c9ef1bec1c"},{url:"favicon.ico",revision:"a814be90a0e77149f68270b219ec899f"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"apple-touch-icon.png",revision:"9118936e395f477c4b89eb916ff77d2d"},{url:"android-chrome-192x192.png",revision:"86a5ddd1ff1d3691f19a5f7a6d6b4e6b"},{url:"android-chrome-512x512.png",revision:"ba9925f6b3cda8ce59b7ad95de446084"},{url:"manifest.webmanifest",revision:"bef05d61973b03517c252f80a5aa2b7e"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));