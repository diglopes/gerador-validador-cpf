if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return i[e]||(c=new Promise(async c=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=c}else importScripts(e),c()})),c.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},c=(c,i)=>{Promise.all(c.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(c)};self.define=(c,d,r)=>{i[c]||(i[c]=Promise.resolve().then(()=>{let i={};const a={uri:location.origin+c.slice(1)};return Promise.all(d.map(c=>{switch(c){case"exports":return i;case"module":return a;default:return e(c)}})).then(e=>{const c=r(...e);return i.default||(i.default=c),i})}))}}define("./service-worker.js",["./workbox-468c4d03"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"apple-touch-icon.png",revision:"4b5a4f3a4ce0968ef98b48ceb21828f9"},{url:"browserconfig.xml",revision:"f422643f69978430a467930f63d7a941"},{url:"favicon.ico",revision:"b8499a3d28c9b11a7b5aaaf70003adf1"},{url:"img/47d5e02832a083558ddd7c5ef8baae02.svg",revision:"1364c01051f21b1d83b7d018d8c44ccb"},{url:"img/96860fdd2f001e8edad5e0bdc5f71b7c.png",revision:"386a62f05bc173ef503483ec29bfdca8"},{url:"img/9e589c8265f399fca2e50b0220cb8c21.svg",revision:"786d89b5e65cca29ceefa320c415aa16"},{url:"img/b82e870a12a8cbabd701bc6ef708cce5.svg",revision:"d8df5272dd47d8ecf390a6ef1a5a8aa7"},{url:"img/fa8f33d6d6e3997f9256f58e31a3b85b.svg",revision:"1a28f2a529887ea4b254be5f1e90b510"},{url:"img/github.svg",revision:"23fc8f81f92bb2981d8f9e089d7df14a"},{url:"img/like.svg",revision:"335eff6a0aefd9ce25d8624c9cae2f54"},{url:"img/logo.svg",revision:"1c62d5e1a9782ca0891117e1b46be44f"},{url:"img/tiles/large.png",revision:"4fa9884a84f347a1e4d7ef94d81fbb8c"},{url:"img/tiles/medium.png",revision:"89b898e90d8b3976ff5c3028d5626f4a"},{url:"img/tiles/small.png",revision:"3527bfe7a2ec1464e2fa83ccbc17a73f"},{url:"img/tiles/wide.png",revision:"3f8e3b9c4099f3a030e79eac741c9818"},{url:"img/touch/chrome-touch-icon-192x192.png",revision:"09e2bcdec5002f356327361c55bee4c3"},{url:"img/touch/icon-128x128 2.png",revision:"8d79e83d57ab1745548eb2df1dfca230"},{url:"img/touch/icon-128x128.png",revision:"0a0256a8009590c91c60fd628aafd2cf"},{url:"img/touch/icon-144x144.png",revision:"a5f0a9b4f16edf84dc3e66c06a7d7f22"},{url:"img/touch/icon-512x512.png",revision:"52090f8f62b770165f1bdc431b2adc5b"},{url:"index.1b2d3ea25635af33e28e.js",revision:"248d5290a5efd6d1e78c974e27a268e9"},{url:"index.df222006c285bc137b53.css",revision:"c9eae5e20bc4d28b8bdfa67f6d571a58"},{url:"index.html",revision:"368ea1da37c516225690568a7bb5027b"},{url:"polyfill~index.ddd4fef48ccb4992b1a0.bundle.js",revision:"c35f9b57c5484030adce23b745e8df52"},{url:"react~index.5693a82988225ade6eee.css",revision:"f733fbc738066faa49d59e32cc7cdb3d"},{url:"react~index.5b64252507013c461f4b.bundle.js",revision:"a7a5254444e247c116d608b604153799"},{url:"react~react-ga.e5c5c8ff797ca5ddde0f.bundle.js",revision:"10ce1ae00c10177d1ab83cfadf163ebe"},{url:"serviceWorker.db6b52a98cb48dce44ac.bundle.js",revision:"ae8dd839a20db92464856bcf5c5e3ee4"},{url:"site.webmanifest",revision:"fb46bfc75f7cf370ad417ef77d758da7"},{url:"vendors~index.a5f93857a68c9a5748a1.bundle.js",revision:"b03a4e53980240dbaa27b4c5fcccd0cd"},{url:"vendors~index.c6ce05cb43ddbdee12b2.css",revision:"a7265dc9e694a81720ddb16c4d8b737a"}],{})}));
//# sourceMappingURL=service-worker.js.map