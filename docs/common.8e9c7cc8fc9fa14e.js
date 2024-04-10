"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{1233:(M,h,i)=>{i.d(h,{c:()=>r});var a=i(9081),v=i(4081),l=i(405);const r=(s,n)=>{let e,t;const u=(c,p,w)=>{if(typeof document>"u")return;const E=document.elementFromPoint(c,p);E&&n(E)?E!==e&&(o(),d(E,w)):o()},d=(c,p)=>{e=c,t||(t=e);const w=e;(0,a.w)(()=>w.classList.add("ion-activated")),p()},o=(c=!1)=>{if(!e)return;const p=e;(0,a.w)(()=>p.classList.remove("ion-activated")),c&&t!==e&&e.click(),e=void 0};return(0,l.createGesture)({el:s,gestureName:"buttonActiveDrag",threshold:0,onStart:c=>u(c.currentX,c.currentY,v.a),onMove:c=>u(c.currentX,c.currentY,v.b),onEnd:()=>{o(!0),(0,v.h)(),t=void 0}})}},8438:(M,h,i)=>{i.d(h,{g:()=>v});var a=i(8476);const v=()=>{if(void 0!==a.w)return a.w.Capacitor}},5572:(M,h,i)=>{i.d(h,{c:()=>a,i:()=>v});const a=(l,r,s)=>"function"==typeof s?s(l,r):"string"==typeof s?l[s]===r[s]:Array.isArray(r)?r.includes(l):l===r,v=(l,r,s)=>void 0!==l&&(Array.isArray(l)?l.some(n=>a(n,r,s)):a(l,r,s))},3351:(M,h,i)=>{i.d(h,{g:()=>a});const a=(n,e,t,u,d)=>l(n[1],e[1],t[1],u[1],d).map(o=>v(n[0],e[0],t[0],u[0],o)),v=(n,e,t,u,d)=>d*(3*e*Math.pow(d-1,2)+d*(-3*t*d+3*t+u*d))-n*Math.pow(d-1,3),l=(n,e,t,u,d)=>s((u-=d)-3*(t-=d)+3*(e-=d)-(n-=d),3*t-6*e+3*n,3*e-3*n,n).filter(c=>c>=0&&c<=1),s=(n,e,t,u)=>{if(0===n)return((n,e,t)=>{const u=e*e-4*n*t;return u<0?[]:[(-e+Math.sqrt(u))/(2*n),(-e-Math.sqrt(u))/(2*n)]})(e,t,u);const d=(3*(t/=n)-(e/=n)*e)/3,o=(2*e*e*e-9*e*t+27*(u/=n))/27;if(0===d)return[Math.pow(-o,1/3)];if(0===o)return[Math.sqrt(-d),-Math.sqrt(-d)];const c=Math.pow(o/2,2)+Math.pow(d/3,3);if(0===c)return[Math.pow(o/2,.5)-e/3];if(c>0)return[Math.pow(-o/2+Math.sqrt(c),1/3)-Math.pow(o/2+Math.sqrt(c),1/3)-e/3];const p=Math.sqrt(Math.pow(-d/3,3)),w=Math.acos(-o/(2*Math.sqrt(Math.pow(-d/3,3)))),E=2*Math.pow(p,1/3);return[E*Math.cos(w/3)-e/3,E*Math.cos((w+2*Math.PI)/3)-e/3,E*Math.cos((w+4*Math.PI)/3)-e/3]}},5083:(M,h,i)=>{i.d(h,{i:()=>a});const a=v=>v&&""!==v.dir?"rtl"===v.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3126:(M,h,i)=>{i.r(h),i.d(h,{startFocusVisible:()=>r});const a="ion-focused",l=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],r=s=>{let n=[],e=!0;const t=s?s.shadowRoot:document,u=s||document.body,d=y=>{n.forEach(g=>g.classList.remove(a)),y.forEach(g=>g.classList.add(a)),n=y},o=()=>{e=!1,d([])},c=y=>{e=l.includes(y.key),e||d([])},p=y=>{if(e&&void 0!==y.composedPath){const g=y.composedPath().filter(_=>!!_.classList&&_.classList.contains("ion-focusable"));d(g)}},w=()=>{t.activeElement===u&&d([])};return t.addEventListener("keydown",c),t.addEventListener("focusin",p),t.addEventListener("focusout",w),t.addEventListener("touchstart",o,{passive:!0}),t.addEventListener("mousedown",o),{destroy:()=>{t.removeEventListener("keydown",c),t.removeEventListener("focusin",p),t.removeEventListener("focusout",w),t.removeEventListener("touchstart",o),t.removeEventListener("mousedown",o)},setFocus:d}}},8281:(M,h,i)=>{i.d(h,{c:()=>v});var a=i(5638);const v=n=>{const e=n;let t;return{hasLegacyControl:()=>{if(void 0===t){const d=void 0!==e.label||l(e),o=e.hasAttribute("aria-label")||e.hasAttribute("aria-labelledby")&&null===e.shadowRoot,c=(0,a.h)(e);t=!0===e.legacy||!d&&!o&&null!==c}return t}}},l=n=>!!(r.includes(n.tagName)&&null!==n.querySelector('[slot="label"]')||s.includes(n.tagName)&&""!==n.textContent),r=["ION-INPUT","ION-TEXTAREA","ION-SELECT","ION-RANGE"],s=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},4081:(M,h,i)=>{i.d(h,{I:()=>v,a:()=>e,b:()=>t,c:()=>n,d:()=>d,h:()=>u});var a=i(8438),v=function(o){return o.Heavy="HEAVY",o.Medium="MEDIUM",o.Light="LIGHT",o}(v||{});const r={getEngine(){const o=window.TapticEngine;if(o)return o;const c=(0,a.g)();return null!=c&&c.isPluginAvailable("Haptics")?c.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const c=(0,a.g)();return"web"!==(null==c?void 0:c.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,a.g)(),impact(o){const c=this.getEngine();if(!c)return;const p=this.isCapacitor()?o.style:o.style.toLowerCase();c.impact({style:p})},notification(o){const c=this.getEngine();if(!c)return;const p=this.isCapacitor()?o.type:o.type.toLowerCase();c.notification({type:p})},selection(){const o=this.isCapacitor()?v.Light:"light";this.impact({style:o})},selectionStart(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionStart():o.gestureSelectionStart())},selectionChanged(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionChanged():o.gestureSelectionChanged())},selectionEnd(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionEnd():o.gestureSelectionEnd())}},s=()=>r.available(),n=()=>{s()&&r.selection()},e=()=>{s()&&r.selectionStart()},t=()=>{s()&&r.selectionChanged()},u=()=>{s()&&r.selectionEnd()},d=o=>{s()&&r.impact(o)}},2885:(M,h,i)=>{i.d(h,{I:()=>n,a:()=>d,b:()=>s,c:()=>p,d:()=>E,f:()=>o,g:()=>u,i:()=>t,p:()=>w,r:()=>y,s:()=>c});var a=i(467),v=i(5638),l=i(4929);const s="ion-content",n=".ion-content-scroll-host",e=`${s}, ${n}`,t=g=>"ION-CONTENT"===g.tagName,u=function(){var g=(0,a.A)(function*(_){return t(_)?(yield new Promise(m=>(0,v.c)(_,m)),_.getScrollElement()):_});return function(m){return g.apply(this,arguments)}}(),d=g=>g.querySelector(n)||g.querySelector(e),o=g=>g.closest(e),c=(g,_)=>t(g)?g.scrollToTop(_):Promise.resolve(g.scrollTo({top:0,left:0,behavior:_>0?"smooth":"auto"})),p=(g,_,m,C)=>t(g)?g.scrollByPoint(_,m,C):Promise.resolve(g.scrollBy({top:m,left:_,behavior:C>0?"smooth":"auto"})),w=g=>(0,l.b)(g,s),E=g=>{if(t(g)){const m=g.scrollY;return g.scrollY=!1,m}return g.style.setProperty("overflow","hidden"),!0},y=(g,_)=>{t(g)?g.scrollY=_:g.style.removeProperty("overflow")}},6726:(M,h,i)=>{i.d(h,{a:()=>a,b:()=>p,c:()=>e,d:()=>w,e:()=>b,f:()=>n,g:()=>E,h:()=>l,i:()=>v,j:()=>C,k:()=>O,l:()=>t,m:()=>o,n:()=>y,o:()=>d,p:()=>s,q:()=>r,r:()=>m,s:()=>f,t:()=>c,u:()=>g,v:()=>_,w:()=>u});const a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",b="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},275:(M,h,i)=>{i.d(h,{c:()=>r,g:()=>s});var a=i(8476),v=i(5638),l=i(4929);const r=(e,t,u)=>{let d,o;if(void 0!==a.w&&"MutationObserver"in a.w){const E=Array.isArray(t)?t:[t];d=new MutationObserver(y=>{for(const g of y)for(const _ of g.addedNodes)if(_.nodeType===Node.ELEMENT_NODE&&E.includes(_.slot))return u(),void(0,v.r)(()=>c(_))}),d.observe(e,{childList:!0})}const c=E=>{var y;o&&(o.disconnect(),o=void 0),o=new MutationObserver(g=>{u();for(const _ of g)for(const m of _.removedNodes)m.nodeType===Node.ELEMENT_NODE&&m.slot===t&&w()}),o.observe(null!==(y=E.parentElement)&&void 0!==y?y:E,{subtree:!0,childList:!0})},w=()=>{o&&(o.disconnect(),o=void 0)};return{destroy:()=>{d&&(d.disconnect(),d=void 0),w()}}},s=(e,t,u)=>{const d=null==e?0:e.toString().length,o=n(d,t);if(void 0===u)return o;try{return u(d,t)}catch(c){return(0,l.a)("Exception in provided `counterFormatter`.",c),o}},n=(e,t)=>`${e} / ${t}`},1622:(M,h,i)=>{i.r(h),i.d(h,{KEYBOARD_DID_CLOSE:()=>s,KEYBOARD_DID_OPEN:()=>r,copyVisualViewport:()=>O,keyboardDidClose:()=>g,keyboardDidOpen:()=>E,keyboardDidResize:()=>y,resetKeyboardAssist:()=>d,setKeyboardClose:()=>w,setKeyboardOpen:()=>p,startKeyboardAssist:()=>o,trackViewportChanges:()=>C});var a=i(4379);i(8438),i(8476);const r="ionKeyboardDidShow",s="ionKeyboardDidHide";let e={},t={},u=!1;const d=()=>{e={},t={},u=!1},o=f=>{if(a.K.getEngine())c(f);else{if(!f.visualViewport)return;t=O(f.visualViewport),f.visualViewport.onresize=()=>{C(f),E()||y(f)?p(f):g(f)&&w(f)}}},c=f=>{f.addEventListener("keyboardDidShow",b=>p(f,b)),f.addEventListener("keyboardDidHide",()=>w(f))},p=(f,b)=>{_(f,b),u=!0},w=f=>{m(f),u=!1},E=()=>!u&&e.width===t.width&&(e.height-t.height)*t.scale>150,y=f=>u&&!g(f),g=f=>u&&t.height===f.innerHeight,_=(f,b)=>{const D=new CustomEvent(r,{detail:{keyboardHeight:b?b.keyboardHeight:f.innerHeight-t.height}});f.dispatchEvent(D)},m=f=>{const b=new CustomEvent(s);f.dispatchEvent(b)},C=f=>{e=Object.assign({},t),t=O(f.visualViewport)},O=f=>({width:Math.round(f.width),height:Math.round(f.height),offsetTop:f.offsetTop,offsetLeft:f.offsetLeft,pageTop:f.pageTop,pageLeft:f.pageLeft,scale:f.scale})},4379:(M,h,i)=>{i.d(h,{K:()=>r,a:()=>l});var a=i(8438),v=function(s){return s.Unimplemented="UNIMPLEMENTED",s.Unavailable="UNAVAILABLE",s}(v||{}),l=function(s){return s.Body="body",s.Ionic="ionic",s.Native="native",s.None="none",s}(l||{});const r={getEngine(){const s=(0,a.g)();if(null!=s&&s.isPluginAvailable("Keyboard"))return s.Plugins.Keyboard},getResizeMode(){const s=this.getEngine();return null!=s&&s.getResizeMode?s.getResizeMode().catch(n=>{if(n.code!==v.Unimplemented)throw n}):Promise.resolve(void 0)}}},4731:(M,h,i)=>{i.d(h,{c:()=>n});var a=i(467),v=i(8476),l=i(4379);const r=e=>{if(void 0===v.d||e===l.a.None||void 0===e)return null;const t=v.d.querySelector("ion-app");return null!=t?t:v.d.body},s=e=>{const t=r(e);return null===t?0:t.clientHeight},n=function(){var e=(0,a.A)(function*(t){let u,d,o,c;const p=function(){var _=(0,a.A)(function*(){const m=yield l.K.getResizeMode(),C=void 0===m?void 0:m.mode;u=()=>{void 0===c&&(c=s(C)),o=!0,w(o,C)},d=()=>{o=!1,w(o,C)},null==v.w||v.w.addEventListener("keyboardWillShow",u),null==v.w||v.w.addEventListener("keyboardWillHide",d)});return function(){return _.apply(this,arguments)}}(),w=(_,m)=>{t&&t(_,E(m))},E=_=>{if(0===c||c===s(_))return;const m=r(_);return null!==m?new Promise(C=>{const f=new ResizeObserver(()=>{m.clientHeight===c&&(f.disconnect(),C())});f.observe(m)}):void 0};return yield p(),{init:p,destroy:()=>{null==v.w||v.w.removeEventListener("keyboardWillShow",u),null==v.w||v.w.removeEventListener("keyboardWillHide",d),u=d=void 0},isKeyboardVisible:()=>o}});return function(u){return e.apply(this,arguments)}}()},7838:(M,h,i)=>{i.d(h,{c:()=>v});var a=i(467);const v=()=>{let l;return{lock:function(){var s=(0,a.A)(function*(){const n=l;let e;return l=new Promise(t=>e=t),void 0!==n&&(yield n),e});return function(){return s.apply(this,arguments)}}()}}},2172:(M,h,i)=>{i.d(h,{c:()=>l});var a=i(8476),v=i(5638);const l=(r,s,n)=>{let e;const t=()=>!(void 0===s()||void 0!==r.label||null===n()),d=()=>{const c=s();if(void 0===c)return;if(!t())return void c.style.removeProperty("width");const p=n().scrollWidth;if(0===p&&null===c.offsetParent&&void 0!==a.w&&"IntersectionObserver"in a.w){if(void 0!==e)return;const w=e=new IntersectionObserver(E=>{1===E[0].intersectionRatio&&(d(),w.disconnect(),e=void 0)},{threshold:.01,root:r});w.observe(c)}else c.style.setProperty("width",.75*p+"px")};return{calculateNotchWidth:()=>{t()&&(0,v.r)(()=>{d()})},destroy:()=>{e&&(e.disconnect(),e=void 0)}}}},7895:(M,h,i)=>{i.d(h,{S:()=>v});const v={bubbles:{dur:1e3,circles:9,fn:(l,r,s)=>{const n=l*r/s-l+"ms",e=2*Math.PI*r/s;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(l,r,s)=>{const n=r/s,e=l*n-l+"ms",t=2*Math.PI*n;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(l,r)=>({r:6,style:{left:32-32*r+"%","animation-delay":-110*r+"ms"}})},lines:{dur:1e3,lines:8,fn:(l,r,s)=>({y1:14,y2:26,style:{transform:`rotate(${360/s*r+(r<s/2?180:-180)}deg)`,"animation-delay":l*r/s-l+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(l,r,s)=>({y1:12,y2:20,style:{transform:`rotate(${360/s*r+(r<s/2?180:-180)}deg)`,"animation-delay":l*r/s-l+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(l,r,s)=>({y1:17,y2:29,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":l*r/s-l+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(l,r,s)=>({y1:12,y2:20,style:{transform:`rotate(${30*r+(r<6?180:-180)}deg)`,"animation-delay":l*r/s-l+"ms"}})}}},6492:(M,h,i)=>{i.r(h),i.d(h,{createSwipeBackGesture:()=>s});var a=i(5638),v=i(5083),l=i(405);i(8221);const s=(n,e,t,u,d)=>{const o=n.ownerDocument.defaultView;let c=(0,v.i)(n);const w=m=>c?-m.deltaX:m.deltaX;return(0,l.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:m=>(c=(0,v.i)(n),(m=>{const{startX:O}=m;return c?O>=o.innerWidth-50:O<=50})(m)&&e()),onStart:t,onMove:m=>{const O=w(m)/o.innerWidth;u(O)},onEnd:m=>{const C=w(m),O=o.innerWidth,f=C/O,b=(m=>c?-m.velocityX:m.velocityX)(m),D=b>=0&&(b>.2||C>O/2),P=(D?1-f:f)*O;let k=0;if(P>5){const A=P/Math.abs(b);k=Math.min(A,540)}d(D,f<=0?.01:(0,a.l)(0,f,.9999),k)}})}},2935:(M,h,i)=>{i.d(h,{w:()=>a});const a=(r,s,n)=>{if(typeof MutationObserver>"u")return;const e=new MutationObserver(t=>{n(v(t,s))});return e.observe(r,{childList:!0,subtree:!0}),e},v=(r,s)=>{let n;return r.forEach(e=>{for(let t=0;t<e.addedNodes.length;t++)n=l(e.addedNodes[t],s)||n}),n},l=(r,s)=>{if(1!==r.nodeType)return;const n=r;return(n.tagName===s.toUpperCase()?[n]:Array.from(n.querySelectorAll(s))).find(t=>t.value===n.value)}},5553:(M,h,i)=>{i.d(h,{h:()=>v});var a=i(4438);let v=(()=>{var l;class r{}return(l=r).\u0275fac=function(n){return new(n||l)},l.\u0275mod=a.$C({type:l}),l.\u0275inj=a.G2t({}),r})()},3513:(M,h,i)=>{i.d(h,{l:()=>s});var a=i(4438),v=i(467),l=i(4517);let r=(()=>{var n;class e{constructor(u){this.navController=u}navigateForward(u,d={},o=!0){var c=this;return(0,v.A)(function*(){yield c.navController.navigateForward(u,{animated:o,queryParams:d})})()}navigateRoot(u,d={},o=!0){this.navController.navigateRoot(u,{animated:o,queryParams:d,replaceUrl:!0})}navigateBack(u,d={},o=!0){this.navController.navigateBack(u,{animated:o,queryParams:d})}}return(n=e).\u0275fac=function(u){return new(u||n)(a.KVO(l.q9))},n.\u0275prov=a.jDH({token:n,factory:n.\u0275fac,providedIn:"root"}),e})(),s=(()=>{var n;class e{constructor(u){this.utils=u}ngOnInit(){}navegarPagina(u){this.utils.navigateForward(u)}}return(n=e).\u0275fac=function(u){return new(u||n)(a.rXU(r))},n.\u0275cmp=a.VBU({type:n,selectors:[["app-header"]],decls:22,vars:0,consts:[[3,"click"]],template:function(u,d){1&u&&(a.j41(0,"ion-grid")(1,"ion-row")(2,"ion-col")(3,"div")(4,"h2",0),a.bIt("click",function(){return d.navegarPagina("inicio")}),a.EFF(5,"In\xedcio"),a.k0s()()(),a.j41(6,"ion-col")(7,"div")(8,"h2",0),a.bIt("click",function(){return d.navegarPagina("videos")}),a.EFF(9,"V\xeddeos"),a.k0s()()(),a.j41(10,"ion-col")(11,"div")(12,"h2",0),a.bIt("click",function(){return d.navegarPagina("historia")}),a.EFF(13,"Hist\xf3ria"),a.k0s()()(),a.j41(14,"ion-col")(15,"div")(16,"h2",0),a.bIt("click",function(){return d.navegarPagina("definicoes")}),a.EFF(17,"Defini\xe7\xf5es"),a.k0s()()(),a.j41(18,"ion-col")(19,"div")(20,"h2",0),a.bIt("click",function(){return d.navegarPagina("sobre")}),a.EFF(21,"Sobre"),a.k0s()()()()())},styles:["ion-grid[_ngcontent-%COMP%]{background-color:var(--azul-escuro);box-shadow:0 0 10px 5px #ffffffbf}ion-grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%}ion-grid[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{cursor:pointer;color:#fff}ion-grid[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:hover{text-decoration:underline;color:#dededee5}"]}),e})()}}]);