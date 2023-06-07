"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9957],{76:(Y,Z,f)=>{f.d(Z,{GW:()=>u,dk:()=>E,oK:()=>s});var s=(()=>((s=s||{}).Prompt="PROMPT",s.Camera="CAMERA",s.Photos="PHOTOS",s))(),u=(()=>((u=u||{}).Rear="REAR",u.Front="FRONT",u))(),E=(()=>((E=E||{}).Uri="uri",E.Base64="base64",E.DataUrl="dataUrl",E))()},7423:(Y,Z,f)=>{f.d(Z,{Uw:()=>J,dV:()=>M,fo:()=>N,xz:()=>D});var s=f(5861);typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"&&global;var A=(()=>((A=A||{}).Unimplemented="UNIMPLEMENTED",A.Unavailable="UNAVAILABLE",A))();class D extends Error{constructor(e,t,o){super(e),this.message=e,this.code=t,this.data=o}}const W=n=>{var e,t,o,c,r;const m=n.CapacitorCustomPlatform||null,a=n.Capacitor||{},b=a.Plugins=a.Plugins||{},g=n.CapacitorPlatforms,B=(null===(e=null==g?void 0:g.currentPlatform)||void 0===e?void 0:e.getPlatform)||(()=>null!==m?m.name:(n=>{var e,t;return null!=n&&n.androidBridge?"android":null!==(t=null===(e=null==n?void 0:n.webkit)||void 0===e?void 0:e.messageHandlers)&&void 0!==t&&t.bridge?"ios":"web"})(n)),ce=(null===(t=null==g?void 0:g.currentPlatform)||void 0===t?void 0:t.isNativePlatform)||(()=>"web"!==B()),ue=(null===(o=null==g?void 0:g.currentPlatform)||void 0===o?void 0:o.isPluginAvailable)||(p=>{const P=Q.get(p);return!!(null!=P&&P.platforms.has(B())||re(p))}),re=(null===(c=null==g?void 0:g.currentPlatform)||void 0===c?void 0:c.getPluginHeader)||(p=>{var P;return null===(P=a.PluginHeaders)||void 0===P?void 0:P.find(I=>I.name===p)}),Q=new Map,ve=(null===(r=null==g?void 0:g.currentPlatform)||void 0===r?void 0:r.registerPlugin)||((p,P={})=>{const I=Q.get(p);if(I)return console.warn(`Capacitor plugin "${p}" already registered. Cannot register plugins twice.`),I.proxy;const H=B(),z=re(p);let S;const pe=function(){var y=(0,s.Z)(function*(){return!S&&H in P?S=S="function"==typeof P[H]?yield P[H]():P[H]:null!==m&&!S&&"web"in P&&(S=S="function"==typeof P.web?yield P.web():P.web),S});return function(){return y.apply(this,arguments)}}(),q=y=>{let w;const F=(...U)=>{const R=pe().then(L=>{const $=((y,w)=>{var F,U;if(!z){if(y)return null===(U=y[w])||void 0===U?void 0:U.bind(y);throw new D(`"${p}" plugin is not implemented on ${H}`,A.Unimplemented)}{const R=null==z?void 0:z.methods.find(L=>w===L.name);if(R)return"promise"===R.rtype?L=>a.nativePromise(p,w.toString(),L):(L,$)=>a.nativeCallback(p,w.toString(),L,$);if(y)return null===(F=y[w])||void 0===F?void 0:F.bind(y)}})(L,y);if($){const V=$(...U);return w=null==V?void 0:V.remove,V}throw new D(`"${p}.${y}()" is not implemented on ${H}`,A.Unimplemented)});return"addListener"===y&&(R.remove=(0,s.Z)(function*(){return w()})),R};return F.toString=()=>`${y.toString()}() { [capacitor code] }`,Object.defineProperty(F,"name",{value:y,writable:!1,configurable:!1}),F},oe=q("addListener"),ie=q("removeListener"),be=(y,w)=>{const F=oe({eventName:y},w),U=function(){var L=(0,s.Z)(function*(){const $=yield F;ie({eventName:y,callbackId:$},w)});return function(){return L.apply(this,arguments)}}(),R=new Promise(L=>F.then(()=>L({remove:U})));return R.remove=(0,s.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield U()}),R},ee=new Proxy({},{get(y,w){switch(w){case"$$typeof":return;case"toJSON":return()=>({});case"addListener":return z?be:oe;case"removeListener":return ie;default:return q(w)}}});return b[p]=ee,Q.set(p,{name:p,proxy:ee,platforms:new Set([...Object.keys(P),...z?[H]:[]])}),ee});return a.convertFileSrc||(a.convertFileSrc=p=>p),a.getPlatform=B,a.handleError=p=>n.console.error(p),a.isNativePlatform=ce,a.isPluginAvailable=ue,a.pluginMethodNoop=(p,P,I)=>Promise.reject(`${I} does not have an implementation of "${P}".`),a.registerPlugin=ve,a.Exception=D,a.DEBUG=!!a.DEBUG,a.isLoggingEnabled=!!a.isLoggingEnabled,a.platform=a.getPlatform(),a.isNative=a.isNativePlatform(),a},M=(n=>n.Capacitor=W(n))(typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),N=M.registerPlugin;class J{constructor(e){this.listeners={},this.windowListeners={},e&&(console.warn(`Capacitor WebPlugin "${e.name}" config object was deprecated in v3 and will be removed in v4.`),this.config=e)}addListener(e,t){var o=this;this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t);const r=this.windowListeners[e];r&&!r.registered&&this.addWindowListener(r);const m=function(){var b=(0,s.Z)(function*(){return o.removeListener(e,t)});return function(){return b.apply(this,arguments)}}(),a=Promise.resolve({remove:m});return Object.defineProperty(a,"remove",{value:(b=(0,s.Z)(function*(){console.warn("Using addListener() without 'await' is deprecated."),yield m()}),function(){return b.apply(this,arguments)})}),a;var b}removeAllListeners(){var e=this;return(0,s.Z)(function*(){e.listeners={};for(const t in e.windowListeners)e.removeWindowListener(e.windowListeners[t]);e.windowListeners={}})()}notifyListeners(e,t){const o=this.listeners[e];o&&o.forEach(c=>c(t))}hasListeners(e){return!!this.listeners[e].length}registerWindowListener(e,t){this.windowListeners[t]={registered:!1,windowEventName:e,pluginEventName:t,handler:o=>{this.notifyListeners(t,o)}}}unimplemented(e="not implemented"){return new M.Exception(e,A.Unimplemented)}unavailable(e="not available"){return new M.Exception(e,A.Unavailable)}removeListener(e,t){var o=this;return(0,s.Z)(function*(){const c=o.listeners[e];if(!c)return;const r=c.indexOf(t);o.listeners[e].splice(r,1),o.listeners[e].length||o.removeWindowListener(o.windowListeners[e])})()}addWindowListener(e){window.addEventListener(e.windowEventName,e.handler),e.registered=!0}removeWindowListener(e){e&&(window.removeEventListener(e.windowEventName,e.handler),e.registered=!1)}}const l=n=>encodeURIComponent(n).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape),C=n=>n.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent);class i extends J{getCookies(){return(0,s.Z)(function*(){const e=document.cookie,t={};return e.split(";").forEach(o=>{if(o.length<=0)return;let[c,r]=o.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE");c=C(c).trim(),r=C(r).trim(),t[c]=r}),t})()}setCookie(e){return(0,s.Z)(function*(){try{const t=l(e.key),o=l(e.value),c=`; expires=${(e.expires||"").replace("expires=","")}`,r=(e.path||"/").replace("path=",""),m=null!=e.url&&e.url.length>0?`domain=${e.url}`:"";document.cookie=`${t}=${o||""}${c}; path=${r}; ${m};`}catch(t){return Promise.reject(t)}})()}deleteCookie(e){return(0,s.Z)(function*(){try{document.cookie=`${e.key}=; Max-Age=0`}catch(t){return Promise.reject(t)}})()}clearCookies(){return(0,s.Z)(function*(){try{const e=document.cookie.split(";")||[];for(const t of e)document.cookie=t.replace(/^ +/,"").replace(/=.*/,`=;expires=${(new Date).toUTCString()};path=/`)}catch(e){return Promise.reject(e)}})()}clearAllCookies(){var e=this;return(0,s.Z)(function*(){try{yield e.clearCookies()}catch(t){return Promise.reject(t)}})()}}N("CapacitorCookies",{web:()=>new i});const v=function(){var n=(0,s.Z)(function*(e){return new Promise((t,o)=>{const c=new FileReader;c.onload=()=>{const r=c.result;t(r.indexOf(",")>=0?r.split(",")[1]:r)},c.onerror=r=>o(r),c.readAsDataURL(e)})});return function(t){return n.apply(this,arguments)}}();class le extends J{request(e){return(0,s.Z)(function*(){const t=((n,e={})=>{const t=Object.assign({method:n.method||"GET",headers:n.headers},e),c=((n={})=>{const e=Object.keys(n);return Object.keys(n).map(c=>c.toLocaleLowerCase()).reduce((c,r,m)=>(c[r]=n[e[m]],c),{})})(n.headers)["content-type"]||"";if("string"==typeof n.data)t.body=n.data;else if(c.includes("application/x-www-form-urlencoded")){const r=new URLSearchParams;for(const[m,a]of Object.entries(n.data||{}))r.set(m,a);t.body=r.toString()}else if(c.includes("multipart/form-data")){const r=new FormData;if(n.data instanceof FormData)n.data.forEach((a,b)=>{r.append(b,a)});else for(const a of Object.keys(n.data))r.append(a,n.data[a]);t.body=r;const m=new Headers(t.headers);m.delete("content-type"),t.headers=m}else(c.includes("application/json")||"object"==typeof n.data)&&(t.body=JSON.stringify(n.data));return t})(e,e.webFetchExtra),o=((n,e=!0)=>n?Object.entries(n).reduce((o,c)=>{const[r,m]=c;let a,b;return Array.isArray(m)?(b="",m.forEach(g=>{a=e?encodeURIComponent(g):g,b+=`${r}=${a}&`}),b.slice(0,-1)):(a=e?encodeURIComponent(m):m,b=`${r}=${a}`),`${o}&${b}`},"").substr(1):null)(e.params,e.shouldEncodeUrlParams),c=o?`${e.url}?${o}`:e.url,r=yield fetch(c,t),m=r.headers.get("content-type")||"";let b,g,{responseType:a="text"}=r.ok?e:{};switch(m.includes("application/json")&&(a="json"),a){case"arraybuffer":case"blob":g=yield r.blob(),b=yield v(g);break;case"json":b=yield r.json();break;default:b=yield r.text()}const K={};return r.headers.forEach((B,X)=>{K[X]=B}),{data:b,headers:K,status:r.status,url:r.url}})()}get(e){var t=this;return(0,s.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"GET"}))})()}post(e){var t=this;return(0,s.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"POST"}))})()}put(e){var t=this;return(0,s.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PUT"}))})()}patch(e){var t=this;return(0,s.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"PATCH"}))})()}delete(e){var t=this;return(0,s.Z)(function*(){return t.request(Object.assign(Object.assign({},e),{method:"DELETE"}))})()}}N("CapacitorHttp",{web:()=>new le})},1443:(Y,Z,f)=>{f.d(Z,{ez:()=>u,tP:()=>s});var s=(()=>((s=s||{}).Documents="DOCUMENTS",s.Data="DATA",s.Library="LIBRARY",s.Cache="CACHE",s.External="EXTERNAL",s.ExternalStorage="EXTERNAL_STORAGE",s))(),u=(()=>((u=u||{}).UTF8="utf8",u.ASCII="ascii",u.UTF16="utf16",u))()},9957:(Y,Z,f)=>{f.r(Z),f.d(Z,{HomePageModule:()=>ne});var s=f(4755),u=f(5562),E=f(5030),k=f(838),x=f(5861),d=f(9523),j=f(7423),A=f(76);const D=(0,j.fo)("Camera",{web:()=>f.e(3954).then(f.bind(f,3954)).then(l=>new l.CameraWeb)});var G=f(1443);const W=(0,j.fo)("Filesystem",{web:()=>f.e(6364).then(f.bind(f,6364)).then(l=>new l.FilesystemWeb)}),_=(0,j.fo)("Preferences",{web:()=>f.e(8359).then(f.bind(f,8359)).then(l=>new l.PreferencesWeb)});let M=(()=>{class l{constructor(i){this.platform=i,this.fotos=[],this.FOTO_ARMAZENAMENTO="fotos",this.convertBlobToBase64=h=>new Promise((v,O)=>{const T=new FileReader;T.onerror=O,T.onload=()=>{v(T.result)},T.readAsDataURL(h)})}carregarFotosSalvas(){var i=this;return(0,x.Z)(function*(){const h=yield _.get({key:i.FOTO_ARMAZENAMENTO});if(i.fotos=JSON.parse(h.value)||[],!i.platform.is("hybrid"))for(let v of i.fotos){const O=yield W.readFile({path:v.filepath,directory:G.tP.Data});v.webviewPath=`data:image/jpeg;base64,${O.data}`}})()}tirarFoto(){var i=this;return(0,x.Z)(function*(){const h=yield D.getPhoto({resultType:A.dk.Uri,source:A.oK.Camera,quality:50}),v=yield i.salvarFoto(h);i.fotos.unshift(v),_.set({key:i.FOTO_ARMAZENAMENTO,value:JSON.stringify(i.fotos)})})()}salvarFoto(i){var h=this;return(0,x.Z)(function*(){const v=yield h.readAsBase64(i),O=(new Date).getTime()+".jpeg",T=yield W.writeFile({path:O,data:v,directory:G.tP.Data});return h.platform.is("hybrid")?{filepath:T.uri,webviewPath:j.dV.convertFileSrc(T.uri)}:{filepath:O,webviewPath:i.webPath}})()}readAsBase64(i){var h=this;return(0,x.Z)(function*(){if(h.platform.is("hybrid"))return(yield W.readFile({path:i.path})).data;{const O=yield(yield fetch(i.webPath)).blob();return yield h.convertBlobToBase64(O)}})()}deletePicture(i,h){var v=this;return(0,x.Z)(function*(){v.fotos.splice(h,1),_.set({key:v.FOTO_ARMAZENAMENTO,value:JSON.stringify(v.fotos)});const O=i.filepath.substr(i.filepath.lastIndexOf("/")+1);yield W.deleteFile({path:O,directory:G.tP.Data})})()}}return l.\u0275fac=function(i){return new(i||l)(d.LFG(u.t4))},l.\u0275prov=d.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})();function N(l,C){if(1&l){const i=d.EpF();d.TgZ(0,"ion-col",7)(1,"ion-img",8),d.NdJ("click",function(){d.CHM(i);const v=d.oxw();return d.KtG(v.showActionSheet)}),d.qZA()()}if(2&l){const i=C.$implicit;d.xp6(1),d.Q6J("src",i.webviewPath)}}const te=[{path:"",component:(()=>{class l{constructor(i,h){this.fotoService=i,this.actionSheetController=h}ngOnInit(){var i=this;return(0,x.Z)(function*(){yield i.fotoService.carregarFotosSalvas()})()}showActionSheet(i,h){var v=this;return(0,x.Z)(function*(){yield(yield v.actionSheetController.create({header:"Fotos",buttons:[{text:"Delete",role:"destructive",icon:"trash",handler:()=>{v.fotoService.deletePicture(i,h)}},{text:"Cancelar",icon:"close",role:"cancel",handler:()=>{}}]})).present()})()}tirarFoto(){this.fotoService.tirarFoto()}}return l.\u0275fac=function(i){return new(i||l)(d.Y36(M),d.Y36(u.BX))},l.\u0275cmp=d.Xpm({type:l,selectors:[["app-home"]],decls:14,vars:3,consts:[[3,"translucent"],[3,"fullscreen"],["vertical","bottom","horizontal","end","slot","fixed"],["color","success"],["name","camera"],["size","6",4,"ngFor","ngForOf"],[3,"click"],["size","6"],["(photo,","","position)","",3,"src","click"]],template:function(i,h){1&i&&(d.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),d._uU(3," Ia do Azure "),d.qZA()()(),d.TgZ(4,"ion-content",1)(5,"ion-fab",2)(6,"ion-fab-button",3),d._UZ(7,"ion-icon",4),d.qZA()(),d.TgZ(8,"ion-grid")(9,"ion-row"),d.YNc(10,N,2,1,"ion-col",5),d.qZA()(),d.TgZ(11,"ion-fab",2)(12,"ion-fab-button",6),d.NdJ("click",function(){return h.tirarFoto()}),d._UZ(13,"ion-icon",4),d.qZA()()()),2&i&&(d.Q6J("translucent",!0),d.xp6(4),d.Q6J("fullscreen",!0),d.xp6(6),d.Q6J("ngForOf",h.fotoService.fotos))},dependencies:[s.sg,u.wI,u.W2,u.IJ,u.W4,u.jY,u.Gu,u.gu,u.Xz,u.Nd,u.wd,u.sr],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}"]}),l})()}];let J=(()=>{class l{}return l.\u0275fac=function(i){return new(i||l)},l.\u0275mod=d.oAB({type:l}),l.\u0275inj=d.cJS({imports:[k.Bz.forChild(te),k.Bz]}),l})(),ne=(()=>{class l{}return l.\u0275fac=function(i){return new(i||l)},l.\u0275mod=d.oAB({type:l}),l.\u0275inj=d.cJS({imports:[s.ez,E.u5,u.Pc,J]}),l})()}}]);