"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{1233:(M,_,a)=>{a.d(_,{c:()=>i});var r=a(9081),v=a(4081),d=a(405);const i=(s,n)=>{let e,t;const u=(c,p,w)=>{if(typeof document>"u")return;const E=document.elementFromPoint(c,p);E&&n(E)?E!==e&&(o(),l(E,w)):o()},l=(c,p)=>{e=c,t||(t=e);const w=e;(0,r.w)(()=>w.classList.add("ion-activated")),p()},o=(c=!1)=>{if(!e)return;const p=e;(0,r.w)(()=>p.classList.remove("ion-activated")),c&&t!==e&&e.click(),e=void 0};return(0,d.createGesture)({el:s,gestureName:"buttonActiveDrag",threshold:0,onStart:c=>u(c.currentX,c.currentY,v.a),onMove:c=>u(c.currentX,c.currentY,v.b),onEnd:()=>{o(!0),(0,v.h)(),t=void 0}})}},8438:(M,_,a)=>{a.d(_,{g:()=>v});var r=a(8476);const v=()=>{if(void 0!==r.w)return r.w.Capacitor}},5572:(M,_,a)=>{a.d(_,{c:()=>r,i:()=>v});const r=(d,i,s)=>"function"==typeof s?s(d,i):"string"==typeof s?d[s]===i[s]:Array.isArray(i)?i.includes(d):d===i,v=(d,i,s)=>void 0!==d&&(Array.isArray(d)?d.some(n=>r(n,i,s)):r(d,i,s))},3351:(M,_,a)=>{a.d(_,{g:()=>r});const r=(n,e,t,u,l)=>d(n[1],e[1],t[1],u[1],l).map(o=>v(n[0],e[0],t[0],u[0],o)),v=(n,e,t,u,l)=>l*(3*e*Math.pow(l-1,2)+l*(-3*t*l+3*t+u*l))-n*Math.pow(l-1,3),d=(n,e,t,u,l)=>s((u-=l)-3*(t-=l)+3*(e-=l)-(n-=l),3*t-6*e+3*n,3*e-3*n,n).filter(c=>c>=0&&c<=1),s=(n,e,t,u)=>{if(0===n)return((n,e,t)=>{const u=e*e-4*n*t;return u<0?[]:[(-e+Math.sqrt(u))/(2*n),(-e-Math.sqrt(u))/(2*n)]})(e,t,u);const l=(3*(t/=n)-(e/=n)*e)/3,o=(2*e*e*e-9*e*t+27*(u/=n))/27;if(0===l)return[Math.pow(-o,1/3)];if(0===o)return[Math.sqrt(-l),-Math.sqrt(-l)];const c=Math.pow(o/2,2)+Math.pow(l/3,3);if(0===c)return[Math.pow(o/2,.5)-e/3];if(c>0)return[Math.pow(-o/2+Math.sqrt(c),1/3)-Math.pow(o/2+Math.sqrt(c),1/3)-e/3];const p=Math.sqrt(Math.pow(-l/3,3)),w=Math.acos(-o/(2*Math.sqrt(Math.pow(-l/3,3)))),E=2*Math.pow(p,1/3);return[E*Math.cos(w/3)-e/3,E*Math.cos((w+2*Math.PI)/3)-e/3,E*Math.cos((w+4*Math.PI)/3)-e/3]}},5083:(M,_,a)=>{a.d(_,{i:()=>r});const r=v=>v&&""!==v.dir?"rtl"===v.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3126:(M,_,a)=>{a.r(_),a.d(_,{startFocusVisible:()=>i});const r="ion-focused",d=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],i=s=>{let n=[],e=!0;const t=s?s.shadowRoot:document,u=s||document.body,l=y=>{n.forEach(g=>g.classList.remove(r)),y.forEach(g=>g.classList.add(r)),n=y},o=()=>{e=!1,l([])},c=y=>{e=d.includes(y.key),e||l([])},p=y=>{if(e&&void 0!==y.composedPath){const g=y.composedPath().filter(h=>!!h.classList&&h.classList.contains("ion-focusable"));l(g)}},w=()=>{t.activeElement===u&&l([])};return t.addEventListener("keydown",c),t.addEventListener("focusin",p),t.addEventListener("focusout",w),t.addEventListener("touchstart",o,{passive:!0}),t.addEventListener("mousedown",o),{destroy:()=>{t.removeEventListener("keydown",c),t.removeEventListener("focusin",p),t.removeEventListener("focusout",w),t.removeEventListener("touchstart",o),t.removeEventListener("mousedown",o)},setFocus:l}}},8281:(M,_,a)=>{a.d(_,{c:()=>v});var r=a(5638);const v=n=>{const e=n;let t;return{hasLegacyControl:()=>{if(void 0===t){const l=void 0!==e.label||d(e),o=e.hasAttribute("aria-label")||e.hasAttribute("aria-labelledby")&&null===e.shadowRoot,c=(0,r.h)(e);t=!0===e.legacy||!l&&!o&&null!==c}return t}}},d=n=>!!(i.includes(n.tagName)&&null!==n.querySelector('[slot="label"]')||s.includes(n.tagName)&&""!==n.textContent),i=["ION-INPUT","ION-TEXTAREA","ION-SELECT","ION-RANGE"],s=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},4081:(M,_,a)=>{a.d(_,{I:()=>v,a:()=>e,b:()=>t,c:()=>n,d:()=>l,h:()=>u});var r=a(8438),v=function(o){return o.Heavy="HEAVY",o.Medium="MEDIUM",o.Light="LIGHT",o}(v||{});const i={getEngine(){const o=window.TapticEngine;if(o)return o;const c=(0,r.g)();return null!=c&&c.isPluginAvailable("Haptics")?c.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const c=(0,r.g)();return"web"!==(null==c?void 0:c.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,r.g)(),impact(o){const c=this.getEngine();if(!c)return;const p=this.isCapacitor()?o.style:o.style.toLowerCase();c.impact({style:p})},notification(o){const c=this.getEngine();if(!c)return;const p=this.isCapacitor()?o.type:o.type.toLowerCase();c.notification({type:p})},selection(){const o=this.isCapacitor()?v.Light:"light";this.impact({style:o})},selectionStart(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionStart():o.gestureSelectionStart())},selectionChanged(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionChanged():o.gestureSelectionChanged())},selectionEnd(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionEnd():o.gestureSelectionEnd())}},s=()=>i.available(),n=()=>{s()&&i.selection()},e=()=>{s()&&i.selectionStart()},t=()=>{s()&&i.selectionChanged()},u=()=>{s()&&i.selectionEnd()},l=o=>{s()&&i.impact(o)}},2885:(M,_,a)=>{a.d(_,{I:()=>n,a:()=>l,b:()=>s,c:()=>p,d:()=>E,f:()=>o,g:()=>u,i:()=>t,p:()=>w,r:()=>y,s:()=>c});var r=a(467),v=a(5638),d=a(4929);const s="ion-content",n=".ion-content-scroll-host",e=`${s}, ${n}`,t=g=>"ION-CONTENT"===g.tagName,u=function(){var g=(0,r.A)(function*(h){return t(h)?(yield new Promise(m=>(0,v.c)(h,m)),h.getScrollElement()):h});return function(m){return g.apply(this,arguments)}}(),l=g=>g.querySelector(n)||g.querySelector(e),o=g=>g.closest(e),c=(g,h)=>t(g)?g.scrollToTop(h):Promise.resolve(g.scrollTo({top:0,left:0,behavior:h>0?"smooth":"auto"})),p=(g,h,m,C)=>t(g)?g.scrollByPoint(h,m,C):Promise.resolve(g.scrollBy({top:m,left:h,behavior:C>0?"smooth":"auto"})),w=g=>(0,d.b)(g,s),E=g=>{if(t(g)){const m=g.scrollY;return g.scrollY=!1,m}return g.style.setProperty("overflow","hidden"),!0},y=(g,h)=>{t(g)?g.scrollY=h:g.style.removeProperty("overflow")}},6726:(M,_,a)=>{a.d(_,{a:()=>r,b:()=>p,c:()=>e,d:()=>w,e:()=>D,f:()=>n,g:()=>E,h:()=>d,i:()=>v,j:()=>C,k:()=>O,l:()=>t,m:()=>o,n:()=>y,o:()=>l,p:()=>s,q:()=>i,r:()=>m,s:()=>f,t:()=>c,u:()=>g,v:()=>h,w:()=>u});const r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},275:(M,_,a)=>{a.d(_,{c:()=>i,g:()=>s});var r=a(8476),v=a(5638),d=a(4929);const i=(e,t,u)=>{let l,o;if(void 0!==r.w&&"MutationObserver"in r.w){const E=Array.isArray(t)?t:[t];l=new MutationObserver(y=>{for(const g of y)for(const h of g.addedNodes)if(h.nodeType===Node.ELEMENT_NODE&&E.includes(h.slot))return u(),void(0,v.r)(()=>c(h))}),l.observe(e,{childList:!0})}const c=E=>{var y;o&&(o.disconnect(),o=void 0),o=new MutationObserver(g=>{u();for(const h of g)for(const m of h.removedNodes)m.nodeType===Node.ELEMENT_NODE&&m.slot===t&&w()}),o.observe(null!==(y=E.parentElement)&&void 0!==y?y:E,{subtree:!0,childList:!0})},w=()=>{o&&(o.disconnect(),o=void 0)};return{destroy:()=>{l&&(l.disconnect(),l=void 0),w()}}},s=(e,t,u)=>{const l=null==e?0:e.toString().length,o=n(l,t);if(void 0===u)return o;try{return u(l,t)}catch(c){return(0,d.a)("Exception in provided `counterFormatter`.",c),o}},n=(e,t)=>`${e} / ${t}`},1622:(M,_,a)=>{a.r(_),a.d(_,{KEYBOARD_DID_CLOSE:()=>s,KEYBOARD_DID_OPEN:()=>i,copyVisualViewport:()=>O,keyboardDidClose:()=>g,keyboardDidOpen:()=>E,keyboardDidResize:()=>y,resetKeyboardAssist:()=>l,setKeyboardClose:()=>w,setKeyboardOpen:()=>p,startKeyboardAssist:()=>o,trackViewportChanges:()=>C});var r=a(4379);a(8438),a(8476);const i="ionKeyboardDidShow",s="ionKeyboardDidHide";let e={},t={},u=!1;const l=()=>{e={},t={},u=!1},o=f=>{if(r.K.getEngine())c(f);else{if(!f.visualViewport)return;t=O(f.visualViewport),f.visualViewport.onresize=()=>{C(f),E()||y(f)?p(f):g(f)&&w(f)}}},c=f=>{f.addEventListener("keyboardDidShow",D=>p(f,D)),f.addEventListener("keyboardDidHide",()=>w(f))},p=(f,D)=>{h(f,D),u=!0},w=f=>{m(f),u=!1},E=()=>!u&&e.width===t.width&&(e.height-t.height)*t.scale>150,y=f=>u&&!g(f),g=f=>u&&t.height===f.innerHeight,h=(f,D)=>{const b=new CustomEvent(i,{detail:{keyboardHeight:D?D.keyboardHeight:f.innerHeight-t.height}});f.dispatchEvent(b)},m=f=>{const D=new CustomEvent(s);f.dispatchEvent(D)},C=f=>{e=Object.assign({},t),t=O(f.visualViewport)},O=f=>({width:Math.round(f.width),height:Math.round(f.height),offsetTop:f.offsetTop,offsetLeft:f.offsetLeft,pageTop:f.pageTop,pageLeft:f.pageLeft,scale:f.scale})},4379:(M,_,a)=>{a.d(_,{K:()=>i,a:()=>d});var r=a(8438),v=function(s){return s.Unimplemented="UNIMPLEMENTED",s.Unavailable="UNAVAILABLE",s}(v||{}),d=function(s){return s.Body="body",s.Ionic="ionic",s.Native="native",s.None="none",s}(d||{});const i={getEngine(){const s=(0,r.g)();if(null!=s&&s.isPluginAvailable("Keyboard"))return s.Plugins.Keyboard},getResizeMode(){const s=this.getEngine();return null!=s&&s.getResizeMode?s.getResizeMode().catch(n=>{if(n.code!==v.Unimplemented)throw n}):Promise.resolve(void 0)}}},4731:(M,_,a)=>{a.d(_,{c:()=>n});var r=a(467),v=a(8476),d=a(4379);const i=e=>{if(void 0===v.d||e===d.a.None||void 0===e)return null;const t=v.d.querySelector("ion-app");return null!=t?t:v.d.body},s=e=>{const t=i(e);return null===t?0:t.clientHeight},n=function(){var e=(0,r.A)(function*(t){let u,l,o,c;const p=function(){var h=(0,r.A)(function*(){const m=yield d.K.getResizeMode(),C=void 0===m?void 0:m.mode;u=()=>{void 0===c&&(c=s(C)),o=!0,w(o,C)},l=()=>{o=!1,w(o,C)},null==v.w||v.w.addEventListener("keyboardWillShow",u),null==v.w||v.w.addEventListener("keyboardWillHide",l)});return function(){return h.apply(this,arguments)}}(),w=(h,m)=>{t&&t(h,E(m))},E=h=>{if(0===c||c===s(h))return;const m=i(h);return null!==m?new Promise(C=>{const f=new ResizeObserver(()=>{m.clientHeight===c&&(f.disconnect(),C())});f.observe(m)}):void 0};return yield p(),{init:p,destroy:()=>{null==v.w||v.w.removeEventListener("keyboardWillShow",u),null==v.w||v.w.removeEventListener("keyboardWillHide",l),u=l=void 0},isKeyboardVisible:()=>o}});return function(u){return e.apply(this,arguments)}}()},7838:(M,_,a)=>{a.d(_,{c:()=>v});var r=a(467);const v=()=>{let d;return{lock:function(){var s=(0,r.A)(function*(){const n=d;let e;return d=new Promise(t=>e=t),void 0!==n&&(yield n),e});return function(){return s.apply(this,arguments)}}()}}},2172:(M,_,a)=>{a.d(_,{c:()=>d});var r=a(8476),v=a(5638);const d=(i,s,n)=>{let e;const t=()=>!(void 0===s()||void 0!==i.label||null===n()),l=()=>{const c=s();if(void 0===c)return;if(!t())return void c.style.removeProperty("width");const p=n().scrollWidth;if(0===p&&null===c.offsetParent&&void 0!==r.w&&"IntersectionObserver"in r.w){if(void 0!==e)return;const w=e=new IntersectionObserver(E=>{1===E[0].intersectionRatio&&(l(),w.disconnect(),e=void 0)},{threshold:.01,root:i});w.observe(c)}else c.style.setProperty("width",.75*p+"px")};return{calculateNotchWidth:()=>{t()&&(0,v.r)(()=>{l()})},destroy:()=>{e&&(e.disconnect(),e=void 0)}}}},7895:(M,_,a)=>{a.d(_,{S:()=>v});const v={bubbles:{dur:1e3,circles:9,fn:(d,i,s)=>{const n=d*i/s-d+"ms",e=2*Math.PI*i/s;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:(d,i,s)=>{const n=i/s,e=d*n-d+"ms",t=2*Math.PI*n;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(d,i)=>({r:6,style:{left:32-32*i+"%","animation-delay":-110*i+"ms"}})},lines:{dur:1e3,lines:8,fn:(d,i,s)=>({y1:14,y2:26,style:{transform:`rotate(${360/s*i+(i<s/2?180:-180)}deg)`,"animation-delay":d*i/s-d+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(d,i,s)=>({y1:12,y2:20,style:{transform:`rotate(${360/s*i+(i<s/2?180:-180)}deg)`,"animation-delay":d*i/s-d+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(d,i,s)=>({y1:17,y2:29,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":d*i/s-d+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(d,i,s)=>({y1:12,y2:20,style:{transform:`rotate(${30*i+(i<6?180:-180)}deg)`,"animation-delay":d*i/s-d+"ms"}})}}},6492:(M,_,a)=>{a.r(_),a.d(_,{createSwipeBackGesture:()=>s});var r=a(5638),v=a(5083),d=a(405);a(8221);const s=(n,e,t,u,l)=>{const o=n.ownerDocument.defaultView;let c=(0,v.i)(n);const w=m=>c?-m.deltaX:m.deltaX;return(0,d.createGesture)({el:n,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:m=>(c=(0,v.i)(n),(m=>{const{startX:O}=m;return c?O>=o.innerWidth-50:O<=50})(m)&&e()),onStart:t,onMove:m=>{const O=w(m)/o.innerWidth;u(O)},onEnd:m=>{const C=w(m),O=o.innerWidth,f=C/O,D=(m=>c?-m.velocityX:m.velocityX)(m),b=D>=0&&(D>.2||C>O/2),L=(b?1-f:f)*O;let k=0;if(L>5){const T=L/Math.abs(D);k=Math.min(T,540)}l(b,f<=0?.01:(0,r.l)(0,f,.9999),k)}})}},2935:(M,_,a)=>{a.d(_,{w:()=>r});const r=(i,s,n)=>{if(typeof MutationObserver>"u")return;const e=new MutationObserver(t=>{n(v(t,s))});return e.observe(i,{childList:!0,subtree:!0}),e},v=(i,s)=>{let n;return i.forEach(e=>{for(let t=0;t<e.addedNodes.length;t++)n=d(e.addedNodes[t],s)||n}),n},d=(i,s)=>{if(1!==i.nodeType)return;const n=i;return(n.tagName===s.toUpperCase()?[n]:Array.from(n.querySelectorAll(s))).find(t=>t.value===n.value)}},5553:(M,_,a)=>{a.d(_,{h:()=>v});var r=a(4438);let v=(()=>{var d;class i{}return(d=i).\u0275fac=function(n){return new(n||d)},d.\u0275mod=r.$C({type:d}),d.\u0275inj=r.G2t({}),i})()},3513:(M,_,a)=>{a.d(_,{l:()=>s});var r=a(4438),v=a(467),d=a(4517);let i=(()=>{var n;class e{constructor(u){this.navController=u}navigateForward(u,l={},o=!0){var c=this;return(0,v.A)(function*(){yield c.navController.navigateForward(u,{animated:o,queryParams:l})})()}navigateRoot(u,l={},o=!0){this.navController.navigateRoot(u,{animated:o,queryParams:l,replaceUrl:!0})}navigateBack(u,l={},o=!0){this.navController.navigateBack(u,{animated:o,queryParams:l})}}return(n=e).\u0275fac=function(u){return new(u||n)(r.KVO(d.q9))},n.\u0275prov=r.jDH({token:n,factory:n.\u0275fac,providedIn:"root"}),e})(),s=(()=>{var n;class e{constructor(u){this.utils=u}ngOnInit(){}navegarPagina(u){this.utils.navigateForward(u)}}return(n=e).\u0275fac=function(u){return new(u||n)(r.rXU(i))},n.\u0275cmp=r.VBU({type:n,selectors:[["app-header"]],decls:26,vars:0,consts:[[3,"click"]],template:function(u,l){1&u&&(r.j41(0,"ion-grid")(1,"ion-row")(2,"ion-col")(3,"div")(4,"h2",0),r.bIt("click",function(){return l.navegarPagina("inicio")}),r.EFF(5,"In\xedcio"),r.k0s()()(),r.j41(6,"ion-col")(7,"div")(8,"h2",0),r.bIt("click",function(){return l.navegarPagina("videos")}),r.EFF(9,"V\xeddeos"),r.k0s()()(),r.j41(10,"ion-col")(11,"div")(12,"h2",0),r.bIt("click",function(){return l.navegarPagina("historia")}),r.EFF(13,"Hist\xf3ria"),r.k0s()()(),r.j41(14,"ion-col")(15,"div")(16,"h2",0),r.bIt("click",function(){return l.navegarPagina("definicoes")}),r.EFF(17,"Defini\xe7\xf5es"),r.k0s()()(),r.j41(18,"ion-col")(19,"div")(20,"h2",0),r.bIt("click",function(){return l.navegarPagina("definicoes-calculo")}),r.EFF(21,"Conceitos"),r.k0s()()(),r.j41(22,"ion-col")(23,"div")(24,"h2",0),r.bIt("click",function(){return l.navegarPagina("sobre")}),r.EFF(25,"Sobre"),r.k0s()()()()())},styles:["ion-grid[_ngcontent-%COMP%]{background-color:var(--azul-escuro);box-shadow:0 0 10px 5px #ffffffbf}ion-grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%}ion-grid[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{cursor:pointer;color:#fff}ion-grid[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:hover{text-decoration:underline;color:#dededee5}"]}),e})()}}]);