function W0(c,a){return function(){return c.apply(a,arguments)}}const{toString:Pi}=Object.prototype,{getPrototypeOf:m4}=Object,t3=(c=>a=>{const e=Pi.call(a);return c[e]||(c[e]=e.slice(8,-1).toLowerCase())})(Object.create(null)),c2=c=>(c=c.toLowerCase(),a=>t3(a)===c),o3=c=>a=>typeof a===c,{isArray:q2}=Array,c1=o3("undefined");function _i(c){return c!==null&&!c1(c)&&c.constructor!==null&&!c1(c.constructor)&&I(c.constructor.isBuffer)&&c.constructor.isBuffer(c)}const j0=c2("ArrayBuffer");function Bi(c){let a;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?a=ArrayBuffer.isView(c):a=c&&c.buffer&&j0(c.buffer),a}const Ri=o3("string"),I=o3("function"),G0=o3("number"),l3=c=>c!==null&&typeof c=="object",Di=c=>c===!0||c===!1,O1=c=>{if(t3(c)!=="object")return!1;const a=m4(c);return(a===null||a===Object.prototype||Object.getPrototypeOf(a)===null)&&!(Symbol.toStringTag in c)&&!(Symbol.iterator in c)},Fi=c2("Date"),Oi=c2("File"),Ui=c2("Blob"),qi=c2("FileList"),Ii=c=>l3(c)&&I(c.pipe),Wi=c=>{let a;return c&&(typeof FormData=="function"&&c instanceof FormData||I(c.append)&&((a=t3(c))==="formdata"||a==="object"&&I(c.toString)&&c.toString()==="[object FormData]"))},ji=c2("URLSearchParams"),Gi=c=>c.trim?c.trim():c.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function o1(c,a,{allOwnKeys:e=!1}={}){if(c===null||typeof c>"u")return;let r,i;if(typeof c!="object"&&(c=[c]),q2(c))for(r=0,i=c.length;r<i;r++)a.call(null,c[r],r,c);else{const s=e?Object.getOwnPropertyNames(c):Object.keys(c),n=s.length;let t;for(r=0;r<n;r++)t=s[r],a.call(null,c[t],t,c)}}function X0(c,a){a=a.toLowerCase();const e=Object.keys(c);let r=e.length,i;for(;r-- >0;)if(i=e[r],a===i.toLowerCase())return i;return null}const $0=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Y0=c=>!c1(c)&&c!==$0;function j3(){const{caseless:c}=Y0(this)&&this||{},a={},e=(r,i)=>{const s=c&&X0(a,i)||i;O1(a[s])&&O1(r)?a[s]=j3(a[s],r):O1(r)?a[s]=j3({},r):q2(r)?a[s]=r.slice():a[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&o1(arguments[r],e);return a}const Xi=(c,a,e,{allOwnKeys:r}={})=>(o1(a,(i,s)=>{e&&I(i)?c[s]=W0(i,e):c[s]=i},{allOwnKeys:r}),c),$i=c=>(c.charCodeAt(0)===65279&&(c=c.slice(1)),c),Yi=(c,a,e,r)=>{c.prototype=Object.create(a.prototype,r),c.prototype.constructor=c,Object.defineProperty(c,"super",{value:a.prototype}),e&&Object.assign(c.prototype,e)},Ki=(c,a,e,r)=>{let i,s,n;const t={};if(a=a||{},c==null)return a;do{for(i=Object.getOwnPropertyNames(c),s=i.length;s-- >0;)n=i[s],(!r||r(n,c,a))&&!t[n]&&(a[n]=c[n],t[n]=!0);c=e!==!1&&m4(c)}while(c&&(!e||e(c,a))&&c!==Object.prototype);return a},Ji=(c,a,e)=>{c=String(c),(e===void 0||e>c.length)&&(e=c.length),e-=a.length;const r=c.indexOf(a,e);return r!==-1&&r===e},Qi=c=>{if(!c)return null;if(q2(c))return c;let a=c.length;if(!G0(a))return null;const e=new Array(a);for(;a-- >0;)e[a]=c[a];return e},Zi=(c=>a=>c&&a instanceof c)(typeof Uint8Array<"u"&&m4(Uint8Array)),cs=(c,a)=>{const r=(c&&c[Symbol.iterator]).call(c);let i;for(;(i=r.next())&&!i.done;){const s=i.value;a.call(c,s[0],s[1])}},as=(c,a)=>{let e;const r=[];for(;(e=c.exec(a))!==null;)r.push(e);return r},es=c2("HTMLFormElement"),rs=c=>c.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,r,i){return r.toUpperCase()+i}),K6=(({hasOwnProperty:c})=>(a,e)=>c.call(a,e))(Object.prototype),is=c2("RegExp"),K0=(c,a)=>{const e=Object.getOwnPropertyDescriptors(c),r={};o1(e,(i,s)=>{let n;(n=a(i,s,c))!==!1&&(r[s]=n||i)}),Object.defineProperties(c,r)},ss=c=>{K0(c,(a,e)=>{if(I(c)&&["arguments","caller","callee"].indexOf(e)!==-1)return!1;const r=c[e];if(I(r)){if(a.enumerable=!1,"writable"in a){a.writable=!1;return}a.set||(a.set=()=>{throw Error("Can not rewrite read-only method '"+e+"'")})}})},ns=(c,a)=>{const e={},r=i=>{i.forEach(s=>{e[s]=!0})};return q2(c)?r(c):r(String(c).split(a)),e},ts=()=>{},os=(c,a)=>(c=+c,Number.isFinite(c)?c:a),R3="abcdefghijklmnopqrstuvwxyz",J6="0123456789",J0={DIGIT:J6,ALPHA:R3,ALPHA_DIGIT:R3+R3.toUpperCase()+J6},ls=(c=16,a=J0.ALPHA_DIGIT)=>{let e="";const{length:r}=a;for(;c--;)e+=a[Math.random()*r|0];return e};function fs(c){return!!(c&&I(c.append)&&c[Symbol.toStringTag]==="FormData"&&c[Symbol.iterator])}const ms=c=>{const a=new Array(10),e=(r,i)=>{if(l3(r)){if(a.indexOf(r)>=0)return;if(!("toJSON"in r)){a[i]=r;const s=q2(r)?[]:{};return o1(r,(n,t)=>{const o=e(n,i+1);!c1(o)&&(s[t]=o)}),a[i]=void 0,s}}return r};return e(c,0)},vs=c2("AsyncFunction"),hs=c=>c&&(l3(c)||I(c))&&I(c.then)&&I(c.catch),v={isArray:q2,isArrayBuffer:j0,isBuffer:_i,isFormData:Wi,isArrayBufferView:Bi,isString:Ri,isNumber:G0,isBoolean:Di,isObject:l3,isPlainObject:O1,isUndefined:c1,isDate:Fi,isFile:Oi,isBlob:Ui,isRegExp:is,isFunction:I,isStream:Ii,isURLSearchParams:ji,isTypedArray:Zi,isFileList:qi,forEach:o1,merge:j3,extend:Xi,trim:Gi,stripBOM:$i,inherits:Yi,toFlatObject:Ki,kindOf:t3,kindOfTest:c2,endsWith:Ji,toArray:Qi,forEachEntry:cs,matchAll:as,isHTMLForm:es,hasOwnProperty:K6,hasOwnProp:K6,reduceDescriptors:K0,freezeMethods:ss,toObjectSet:ns,toCamelCase:rs,noop:ts,toFiniteNumber:os,findKey:X0,global:$0,isContextDefined:Y0,ALPHABET:J0,generateString:ls,isSpecCompliantForm:fs,toJSONObject:ms,isAsyncFn:vs,isThenable:hs};function w(c,a,e,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=c,this.name="AxiosError",a&&(this.code=a),e&&(this.config=e),r&&(this.request=r),i&&(this.response=i)}v.inherits(w,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:v.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Q0=w.prototype,Z0={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(c=>{Z0[c]={value:c}});Object.defineProperties(w,Z0);Object.defineProperty(Q0,"isAxiosError",{value:!0});w.from=(c,a,e,r,i,s)=>{const n=Object.create(Q0);return v.toFlatObject(c,n,function(o){return o!==Error.prototype},t=>t!=="isAxiosError"),w.call(n,c.message,a,e,r,i),n.cause=c,n.name=c.name,s&&Object.assign(n,s),n};const us=null;function G3(c){return v.isPlainObject(c)||v.isArray(c)}function c8(c){return v.endsWith(c,"[]")?c.slice(0,-2):c}function Q6(c,a,e){return c?c.concat(a).map(function(i,s){return i=c8(i),!e&&s?"["+i+"]":i}).join(e?".":""):a}function Hs(c){return v.isArray(c)&&!c.some(G3)}const ps=v.toFlatObject(v,{},null,function(a){return/^is[A-Z]/.test(a)});function f3(c,a,e){if(!v.isObject(c))throw new TypeError("target must be an object");a=a||new FormData,e=v.toFlatObject(e,{metaTokens:!0,dots:!1,indexes:!1},!1,function(H,V){return!v.isUndefined(V[H])});const r=e.metaTokens,i=e.visitor||l,s=e.dots,n=e.indexes,o=(e.Blob||typeof Blob<"u"&&Blob)&&v.isSpecCompliantForm(a);if(!v.isFunction(i))throw new TypeError("visitor must be a function");function f(h){if(h===null)return"";if(v.isDate(h))return h.toISOString();if(!o&&v.isBlob(h))throw new w("Blob is not supported. Use a Buffer instead.");return v.isArrayBuffer(h)||v.isTypedArray(h)?o&&typeof Blob=="function"?new Blob([h]):Buffer.from(h):h}function l(h,H,V){let L=h;if(h&&!V&&typeof h=="object"){if(v.endsWith(H,"{}"))H=r?H:H.slice(0,-2),h=JSON.stringify(h);else if(v.isArray(h)&&Hs(h)||(v.isFileList(h)||v.endsWith(H,"[]"))&&(L=v.toArray(h)))return H=c8(H),L.forEach(function(g,C){!(v.isUndefined(g)||g===null)&&a.append(n===!0?Q6([H],C,s):n===null?H:H+"[]",f(g))}),!1}return G3(h)?!0:(a.append(Q6(V,H,s),f(h)),!1)}const m=[],p=Object.assign(ps,{defaultVisitor:l,convertValue:f,isVisitable:G3});function u(h,H){if(!v.isUndefined(h)){if(m.indexOf(h)!==-1)throw Error("Circular reference detected in "+H.join("."));m.push(h),v.forEach(h,function(L,M){(!(v.isUndefined(L)||L===null)&&i.call(a,L,v.isString(M)?M.trim():M,H,p))===!0&&u(L,H?H.concat(M):[M])}),m.pop()}}if(!v.isObject(c))throw new TypeError("data must be an object");return u(c),a}function Z6(c){const a={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(c).replace(/[!'()~]|%20|%00/g,function(r){return a[r]})}function v4(c,a){this._pairs=[],c&&f3(c,this,a)}const a8=v4.prototype;a8.append=function(a,e){this._pairs.push([a,e])};a8.toString=function(a){const e=a?function(r){return a.call(this,r,Z6)}:Z6;return this._pairs.map(function(i){return e(i[0])+"="+e(i[1])},"").join("&")};function zs(c){return encodeURIComponent(c).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function e8(c,a,e){if(!a)return c;const r=e&&e.encode||zs,i=e&&e.serialize;let s;if(i?s=i(a,e):s=v.isURLSearchParams(a)?a.toString():new v4(a,e).toString(r),s){const n=c.indexOf("#");n!==-1&&(c=c.slice(0,n)),c+=(c.indexOf("?")===-1?"?":"&")+s}return c}class ds{constructor(){this.handlers=[]}use(a,e,r){return this.handlers.push({fulfilled:a,rejected:e,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(a){this.handlers[a]&&(this.handlers[a]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(a){v.forEach(this.handlers,function(r){r!==null&&a(r)})}}const c0=ds,r8={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Vs=typeof URLSearchParams<"u"?URLSearchParams:v4,Ms=typeof FormData<"u"?FormData:null,Cs=typeof Blob<"u"?Blob:null,Ls=(()=>{let c;return typeof navigator<"u"&&((c=navigator.product)==="ReactNative"||c==="NativeScript"||c==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),gs=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),K={isBrowser:!0,classes:{URLSearchParams:Vs,FormData:Ms,Blob:Cs},isStandardBrowserEnv:Ls,isStandardBrowserWebWorkerEnv:gs,protocols:["http","https","file","blob","url","data"]};function xs(c,a){return f3(c,new K.classes.URLSearchParams,Object.assign({visitor:function(e,r,i,s){return K.isNode&&v.isBuffer(e)?(this.append(r,e.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},a))}function bs(c){return v.matchAll(/\w+|\[(\w*)]/g,c).map(a=>a[0]==="[]"?"":a[1]||a[0])}function ws(c){const a={},e=Object.keys(c);let r;const i=e.length;let s;for(r=0;r<i;r++)s=e[r],a[s]=c[s];return a}function i8(c){function a(e,r,i,s){let n=e[s++];const t=Number.isFinite(+n),o=s>=e.length;return n=!n&&v.isArray(i)?i.length:n,o?(v.hasOwnProp(i,n)?i[n]=[i[n],r]:i[n]=r,!t):((!i[n]||!v.isObject(i[n]))&&(i[n]=[]),a(e,r,i[n],s)&&v.isArray(i[n])&&(i[n]=ws(i[n])),!t)}if(v.isFormData(c)&&v.isFunction(c.entries)){const e={};return v.forEachEntry(c,(r,i)=>{a(bs(r),i,e,0)}),e}return null}function Ns(c,a,e){if(v.isString(c))try{return(a||JSON.parse)(c),v.trim(c)}catch(r){if(r.name!=="SyntaxError")throw r}return(e||JSON.stringify)(c)}const h4={transitional:r8,adapter:["xhr","http"],transformRequest:[function(a,e){const r=e.getContentType()||"",i=r.indexOf("application/json")>-1,s=v.isObject(a);if(s&&v.isHTMLForm(a)&&(a=new FormData(a)),v.isFormData(a))return i&&i?JSON.stringify(i8(a)):a;if(v.isArrayBuffer(a)||v.isBuffer(a)||v.isStream(a)||v.isFile(a)||v.isBlob(a))return a;if(v.isArrayBufferView(a))return a.buffer;if(v.isURLSearchParams(a))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),a.toString();let t;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return xs(a,this.formSerializer).toString();if((t=v.isFileList(a))||r.indexOf("multipart/form-data")>-1){const o=this.env&&this.env.FormData;return f3(t?{"files[]":a}:a,o&&new o,this.formSerializer)}}return s||i?(e.setContentType("application/json",!1),Ns(a)):a}],transformResponse:[function(a){const e=this.transitional||h4.transitional,r=e&&e.forcedJSONParsing,i=this.responseType==="json";if(a&&v.isString(a)&&(r&&!this.responseType||i)){const n=!(e&&e.silentJSONParsing)&&i;try{return JSON.parse(a)}catch(t){if(n)throw t.name==="SyntaxError"?w.from(t,w.ERR_BAD_RESPONSE,this,null,this.response):t}}return a}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:K.classes.FormData,Blob:K.classes.Blob},validateStatus:function(a){return a>=200&&a<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};v.forEach(["delete","get","head","post","put","patch"],c=>{h4.headers[c]={}});const u4=h4,ys=v.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ss=c=>{const a={};let e,r,i;return c&&c.split(`
`).forEach(function(n){i=n.indexOf(":"),e=n.substring(0,i).trim().toLowerCase(),r=n.substring(i+1).trim(),!(!e||a[e]&&ys[e])&&(e==="set-cookie"?a[e]?a[e].push(r):a[e]=[r]:a[e]=a[e]?a[e]+", "+r:r)}),a},a0=Symbol("internals");function G2(c){return c&&String(c).trim().toLowerCase()}function U1(c){return c===!1||c==null?c:v.isArray(c)?c.map(U1):String(c)}function ks(c){const a=Object.create(null),e=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=e.exec(c);)a[r[1]]=r[2];return a}const As=c=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(c.trim());function D3(c,a,e,r,i){if(v.isFunction(r))return r.call(this,a,e);if(i&&(a=e),!!v.isString(a)){if(v.isString(r))return a.indexOf(r)!==-1;if(v.isRegExp(r))return r.test(a)}}function Ts(c){return c.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(a,e,r)=>e.toUpperCase()+r)}function Es(c,a){const e=v.toCamelCase(" "+a);["get","set","has"].forEach(r=>{Object.defineProperty(c,r+e,{value:function(i,s,n){return this[r].call(this,a,i,s,n)},configurable:!0})})}class m3{constructor(a){a&&this.set(a)}set(a,e,r){const i=this;function s(t,o,f){const l=G2(o);if(!l)throw new Error("header name must be a non-empty string");const m=v.findKey(i,l);(!m||i[m]===void 0||f===!0||f===void 0&&i[m]!==!1)&&(i[m||o]=U1(t))}const n=(t,o)=>v.forEach(t,(f,l)=>s(f,l,o));return v.isPlainObject(a)||a instanceof this.constructor?n(a,e):v.isString(a)&&(a=a.trim())&&!As(a)?n(Ss(a),e):a!=null&&s(e,a,r),this}get(a,e){if(a=G2(a),a){const r=v.findKey(this,a);if(r){const i=this[r];if(!e)return i;if(e===!0)return ks(i);if(v.isFunction(e))return e.call(this,i,r);if(v.isRegExp(e))return e.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(a,e){if(a=G2(a),a){const r=v.findKey(this,a);return!!(r&&this[r]!==void 0&&(!e||D3(this,this[r],r,e)))}return!1}delete(a,e){const r=this;let i=!1;function s(n){if(n=G2(n),n){const t=v.findKey(r,n);t&&(!e||D3(r,r[t],t,e))&&(delete r[t],i=!0)}}return v.isArray(a)?a.forEach(s):s(a),i}clear(a){const e=Object.keys(this);let r=e.length,i=!1;for(;r--;){const s=e[r];(!a||D3(this,this[s],s,a,!0))&&(delete this[s],i=!0)}return i}normalize(a){const e=this,r={};return v.forEach(this,(i,s)=>{const n=v.findKey(r,s);if(n){e[n]=U1(i),delete e[s];return}const t=a?Ts(s):String(s).trim();t!==s&&delete e[s],e[t]=U1(i),r[t]=!0}),this}concat(...a){return this.constructor.concat(this,...a)}toJSON(a){const e=Object.create(null);return v.forEach(this,(r,i)=>{r!=null&&r!==!1&&(e[i]=a&&v.isArray(r)?r.join(", "):r)}),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([a,e])=>a+": "+e).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(a){return a instanceof this?a:new this(a)}static concat(a,...e){const r=new this(a);return e.forEach(i=>r.set(i)),r}static accessor(a){const r=(this[a0]=this[a0]={accessors:{}}).accessors,i=this.prototype;function s(n){const t=G2(n);r[t]||(Es(i,n),r[t]=!0)}return v.isArray(a)?a.forEach(s):s(a),this}}m3.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);v.reduceDescriptors(m3.prototype,({value:c},a)=>{let e=a[0].toUpperCase()+a.slice(1);return{get:()=>c,set(r){this[e]=r}}});v.freezeMethods(m3);const a2=m3;function F3(c,a){const e=this||u4,r=a||e,i=a2.from(r.headers);let s=r.data;return v.forEach(c,function(t){s=t.call(e,s,i.normalize(),a?a.status:void 0)}),i.normalize(),s}function s8(c){return!!(c&&c.__CANCEL__)}function l1(c,a,e){w.call(this,c??"canceled",w.ERR_CANCELED,a,e),this.name="CanceledError"}v.inherits(l1,w,{__CANCEL__:!0});function Ps(c,a,e){const r=e.config.validateStatus;!e.status||!r||r(e.status)?c(e):a(new w("Request failed with status code "+e.status,[w.ERR_BAD_REQUEST,w.ERR_BAD_RESPONSE][Math.floor(e.status/100)-4],e.config,e.request,e))}const _s=K.isStandardBrowserEnv?function(){return{write:function(e,r,i,s,n,t){const o=[];o.push(e+"="+encodeURIComponent(r)),v.isNumber(i)&&o.push("expires="+new Date(i).toGMTString()),v.isString(s)&&o.push("path="+s),v.isString(n)&&o.push("domain="+n),t===!0&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){const r=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function Bs(c){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(c)}function Rs(c,a){return a?c.replace(/\/+$/,"")+"/"+a.replace(/^\/+/,""):c}function n8(c,a){return c&&!Bs(a)?Rs(c,a):a}const Ds=K.isStandardBrowserEnv?function(){const a=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let r;function i(s){let n=s;return a&&(e.setAttribute("href",n),n=e.href),e.setAttribute("href",n),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:e.pathname.charAt(0)==="/"?e.pathname:"/"+e.pathname}}return r=i(window.location.href),function(n){const t=v.isString(n)?i(n):n;return t.protocol===r.protocol&&t.host===r.host}}():function(){return function(){return!0}}();function Fs(c){const a=/^([-+\w]{1,25})(:?\/\/|:)/.exec(c);return a&&a[1]||""}function Os(c,a){c=c||10;const e=new Array(c),r=new Array(c);let i=0,s=0,n;return a=a!==void 0?a:1e3,function(o){const f=Date.now(),l=r[s];n||(n=f),e[i]=o,r[i]=f;let m=s,p=0;for(;m!==i;)p+=e[m++],m=m%c;if(i=(i+1)%c,i===s&&(s=(s+1)%c),f-n<a)return;const u=l&&f-l;return u?Math.round(p*1e3/u):void 0}}function e0(c,a){let e=0;const r=Os(50,250);return i=>{const s=i.loaded,n=i.lengthComputable?i.total:void 0,t=s-e,o=r(t),f=s<=n;e=s;const l={loaded:s,total:n,progress:n?s/n:void 0,bytes:t,rate:o||void 0,estimated:o&&n&&f?(n-s)/o:void 0,event:i};l[a?"download":"upload"]=!0,c(l)}}const Us=typeof XMLHttpRequest<"u",qs=Us&&function(c){return new Promise(function(e,r){let i=c.data;const s=a2.from(c.headers).normalize(),n=c.responseType;let t;function o(){c.cancelToken&&c.cancelToken.unsubscribe(t),c.signal&&c.signal.removeEventListener("abort",t)}let f;v.isFormData(i)&&(K.isStandardBrowserEnv||K.isStandardBrowserWebWorkerEnv?s.setContentType(!1):s.getContentType(/^\s*multipart\/form-data/)?v.isString(f=s.getContentType())&&s.setContentType(f.replace(/^\s*(multipart\/form-data);+/,"$1")):s.setContentType("multipart/form-data"));let l=new XMLHttpRequest;if(c.auth){const h=c.auth.username||"",H=c.auth.password?unescape(encodeURIComponent(c.auth.password)):"";s.set("Authorization","Basic "+btoa(h+":"+H))}const m=n8(c.baseURL,c.url);l.open(c.method.toUpperCase(),e8(m,c.params,c.paramsSerializer),!0),l.timeout=c.timeout;function p(){if(!l)return;const h=a2.from("getAllResponseHeaders"in l&&l.getAllResponseHeaders()),V={data:!n||n==="text"||n==="json"?l.responseText:l.response,status:l.status,statusText:l.statusText,headers:h,config:c,request:l};Ps(function(M){e(M),o()},function(M){r(M),o()},V),l=null}if("onloadend"in l?l.onloadend=p:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(p)},l.onabort=function(){l&&(r(new w("Request aborted",w.ECONNABORTED,c,l)),l=null)},l.onerror=function(){r(new w("Network Error",w.ERR_NETWORK,c,l)),l=null},l.ontimeout=function(){let H=c.timeout?"timeout of "+c.timeout+"ms exceeded":"timeout exceeded";const V=c.transitional||r8;c.timeoutErrorMessage&&(H=c.timeoutErrorMessage),r(new w(H,V.clarifyTimeoutError?w.ETIMEDOUT:w.ECONNABORTED,c,l)),l=null},K.isStandardBrowserEnv){const h=(c.withCredentials||Ds(m))&&c.xsrfCookieName&&_s.read(c.xsrfCookieName);h&&s.set(c.xsrfHeaderName,h)}i===void 0&&s.setContentType(null),"setRequestHeader"in l&&v.forEach(s.toJSON(),function(H,V){l.setRequestHeader(V,H)}),v.isUndefined(c.withCredentials)||(l.withCredentials=!!c.withCredentials),n&&n!=="json"&&(l.responseType=c.responseType),typeof c.onDownloadProgress=="function"&&l.addEventListener("progress",e0(c.onDownloadProgress,!0)),typeof c.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",e0(c.onUploadProgress)),(c.cancelToken||c.signal)&&(t=h=>{l&&(r(!h||h.type?new l1(null,c,l):h),l.abort(),l=null)},c.cancelToken&&c.cancelToken.subscribe(t),c.signal&&(c.signal.aborted?t():c.signal.addEventListener("abort",t)));const u=Fs(m);if(u&&K.protocols.indexOf(u)===-1){r(new w("Unsupported protocol "+u+":",w.ERR_BAD_REQUEST,c));return}l.send(i||null)})},X3={http:us,xhr:qs};v.forEach(X3,(c,a)=>{if(c){try{Object.defineProperty(c,"name",{value:a})}catch{}Object.defineProperty(c,"adapterName",{value:a})}});const r0=c=>`- ${c}`,Is=c=>v.isFunction(c)||c===null||c===!1,t8={getAdapter:c=>{c=v.isArray(c)?c:[c];const{length:a}=c;let e,r;const i={};for(let s=0;s<a;s++){e=c[s];let n;if(r=e,!Is(e)&&(r=X3[(n=String(e)).toLowerCase()],r===void 0))throw new w(`Unknown adapter '${n}'`);if(r)break;i[n||"#"+s]=r}if(!r){const s=Object.entries(i).map(([t,o])=>`adapter ${t} `+(o===!1?"is not supported by the environment":"is not available in the build"));let n=a?s.length>1?`since :
`+s.map(r0).join(`
`):" "+r0(s[0]):"as no adapter specified";throw new w("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r},adapters:X3};function O3(c){if(c.cancelToken&&c.cancelToken.throwIfRequested(),c.signal&&c.signal.aborted)throw new l1(null,c)}function i0(c){return O3(c),c.headers=a2.from(c.headers),c.data=F3.call(c,c.transformRequest),["post","put","patch"].indexOf(c.method)!==-1&&c.headers.setContentType("application/x-www-form-urlencoded",!1),t8.getAdapter(c.adapter||u4.adapter)(c).then(function(r){return O3(c),r.data=F3.call(c,c.transformResponse,r),r.headers=a2.from(r.headers),r},function(r){return s8(r)||(O3(c),r&&r.response&&(r.response.data=F3.call(c,c.transformResponse,r.response),r.response.headers=a2.from(r.response.headers))),Promise.reject(r)})}const s0=c=>c instanceof a2?c.toJSON():c;function B2(c,a){a=a||{};const e={};function r(f,l,m){return v.isPlainObject(f)&&v.isPlainObject(l)?v.merge.call({caseless:m},f,l):v.isPlainObject(l)?v.merge({},l):v.isArray(l)?l.slice():l}function i(f,l,m){if(v.isUndefined(l)){if(!v.isUndefined(f))return r(void 0,f,m)}else return r(f,l,m)}function s(f,l){if(!v.isUndefined(l))return r(void 0,l)}function n(f,l){if(v.isUndefined(l)){if(!v.isUndefined(f))return r(void 0,f)}else return r(void 0,l)}function t(f,l,m){if(m in a)return r(f,l);if(m in c)return r(void 0,f)}const o={url:s,method:s,data:s,baseURL:n,transformRequest:n,transformResponse:n,paramsSerializer:n,timeout:n,timeoutMessage:n,withCredentials:n,adapter:n,responseType:n,xsrfCookieName:n,xsrfHeaderName:n,onUploadProgress:n,onDownloadProgress:n,decompress:n,maxContentLength:n,maxBodyLength:n,beforeRedirect:n,transport:n,httpAgent:n,httpsAgent:n,cancelToken:n,socketPath:n,responseEncoding:n,validateStatus:t,headers:(f,l)=>i(s0(f),s0(l),!0)};return v.forEach(Object.keys(Object.assign({},c,a)),function(l){const m=o[l]||i,p=m(c[l],a[l],l);v.isUndefined(p)&&m!==t||(e[l]=p)}),e}const o8="1.5.1",H4={};["object","boolean","number","function","string","symbol"].forEach((c,a)=>{H4[c]=function(r){return typeof r===c||"a"+(a<1?"n ":" ")+c}});const n0={};H4.transitional=function(a,e,r){function i(s,n){return"[Axios v"+o8+"] Transitional option '"+s+"'"+n+(r?". "+r:"")}return(s,n,t)=>{if(a===!1)throw new w(i(n," has been removed"+(e?" in "+e:"")),w.ERR_DEPRECATED);return e&&!n0[n]&&(n0[n]=!0,console.warn(i(n," has been deprecated since v"+e+" and will be removed in the near future"))),a?a(s,n,t):!0}};function Ws(c,a,e){if(typeof c!="object")throw new w("options must be an object",w.ERR_BAD_OPTION_VALUE);const r=Object.keys(c);let i=r.length;for(;i-- >0;){const s=r[i],n=a[s];if(n){const t=c[s],o=t===void 0||n(t,s,c);if(o!==!0)throw new w("option "+s+" must be "+o,w.ERR_BAD_OPTION_VALUE);continue}if(e!==!0)throw new w("Unknown option "+s,w.ERR_BAD_OPTION)}}const $3={assertOptions:Ws,validators:H4},o2=$3.validators;class X1{constructor(a){this.defaults=a,this.interceptors={request:new c0,response:new c0}}request(a,e){typeof a=="string"?(e=e||{},e.url=a):e=a||{},e=B2(this.defaults,e);const{transitional:r,paramsSerializer:i,headers:s}=e;r!==void 0&&$3.assertOptions(r,{silentJSONParsing:o2.transitional(o2.boolean),forcedJSONParsing:o2.transitional(o2.boolean),clarifyTimeoutError:o2.transitional(o2.boolean)},!1),i!=null&&(v.isFunction(i)?e.paramsSerializer={serialize:i}:$3.assertOptions(i,{encode:o2.function,serialize:o2.function},!0)),e.method=(e.method||this.defaults.method||"get").toLowerCase();let n=s&&v.merge(s.common,s[e.method]);s&&v.forEach(["delete","get","head","post","put","patch","common"],h=>{delete s[h]}),e.headers=a2.concat(n,s);const t=[];let o=!0;this.interceptors.request.forEach(function(H){typeof H.runWhen=="function"&&H.runWhen(e)===!1||(o=o&&H.synchronous,t.unshift(H.fulfilled,H.rejected))});const f=[];this.interceptors.response.forEach(function(H){f.push(H.fulfilled,H.rejected)});let l,m=0,p;if(!o){const h=[i0.bind(this),void 0];for(h.unshift.apply(h,t),h.push.apply(h,f),p=h.length,l=Promise.resolve(e);m<p;)l=l.then(h[m++],h[m++]);return l}p=t.length;let u=e;for(m=0;m<p;){const h=t[m++],H=t[m++];try{u=h(u)}catch(V){H.call(this,V);break}}try{l=i0.call(this,u)}catch(h){return Promise.reject(h)}for(m=0,p=f.length;m<p;)l=l.then(f[m++],f[m++]);return l}getUri(a){a=B2(this.defaults,a);const e=n8(a.baseURL,a.url);return e8(e,a.params,a.paramsSerializer)}}v.forEach(["delete","get","head","options"],function(a){X1.prototype[a]=function(e,r){return this.request(B2(r||{},{method:a,url:e,data:(r||{}).data}))}});v.forEach(["post","put","patch"],function(a){function e(r){return function(s,n,t){return this.request(B2(t||{},{method:a,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:n}))}}X1.prototype[a]=e(),X1.prototype[a+"Form"]=e(!0)});const q1=X1;class p4{constructor(a){if(typeof a!="function")throw new TypeError("executor must be a function.");let e;this.promise=new Promise(function(s){e=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const n=new Promise(t=>{r.subscribe(t),s=t}).then(i);return n.cancel=function(){r.unsubscribe(s)},n},a(function(s,n,t){r.reason||(r.reason=new l1(s,n,t),e(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(a){if(this.reason){a(this.reason);return}this._listeners?this._listeners.push(a):this._listeners=[a]}unsubscribe(a){if(!this._listeners)return;const e=this._listeners.indexOf(a);e!==-1&&this._listeners.splice(e,1)}static source(){let a;return{token:new p4(function(i){a=i}),cancel:a}}}const js=p4;function Gs(c){return function(e){return c.apply(null,e)}}function Xs(c){return v.isObject(c)&&c.isAxiosError===!0}const Y3={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Y3).forEach(([c,a])=>{Y3[a]=c});const $s=Y3;function l8(c){const a=new q1(c),e=W0(q1.prototype.request,a);return v.extend(e,q1.prototype,a,{allOwnKeys:!0}),v.extend(e,a,null,{allOwnKeys:!0}),e.create=function(i){return l8(B2(c,i))},e}const P=l8(u4);P.Axios=q1;P.CanceledError=l1;P.CancelToken=js;P.isCancel=s8;P.VERSION=o8;P.toFormData=f3;P.AxiosError=w;P.Cancel=P.CanceledError;P.all=function(a){return Promise.all(a)};P.spread=Gs;P.isAxiosError=Xs;P.mergeConfig=B2;P.AxiosHeaders=a2;P.formToJSON=c=>i8(v.isHTMLForm(c)?new FormData(c):c);P.getAdapter=t8.getAdapter;P.HttpStatusCode=$s;P.default=P;const Ys=P;window.axios=Ys;window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";require("node_modules/flowbite/js/flowbite.js");var Ks=function(){function c(a,e){e===void 0&&(e=[]),this._eventType=a,this._eventFunctions=e}return c.prototype.init=function(){var a=this;this._eventFunctions.forEach(function(e){typeof window<"u"&&window.addEventListener(a._eventType,e)})},c}(),$1=globalThis&&globalThis.__assign||function(){return $1=Object.assign||function(c){for(var a,e=1,r=arguments.length;e<r;e++){a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(c[i]=a[i])}return c},$1.apply(this,arguments)},Y1={alwaysOpen:!1,activeClasses:"bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",inactiveClasses:"text-gray-500 dark:text-gray-400",onOpen:function(){},onClose:function(){},onToggle:function(){}},f8=function(){function c(a,e){a===void 0&&(a=[]),e===void 0&&(e=Y1),this._items=a,this._options=$1($1({},Y1),e),this._init()}return c.prototype._init=function(){var a=this;this._items.length&&this._items.map(function(e){e.active&&a.open(e.id),e.triggerEl.addEventListener("click",function(){a.toggle(e.id)})})},c.prototype.getItem=function(a){return this._items.filter(function(e){return e.id===a})[0]},c.prototype.open=function(a){var e,r,i=this,s=this.getItem(a);this._options.alwaysOpen||this._items.map(function(n){var t,o;n!==s&&((t=n.triggerEl.classList).remove.apply(t,i._options.activeClasses.split(" ")),(o=n.triggerEl.classList).add.apply(o,i._options.inactiveClasses.split(" ")),n.targetEl.classList.add("hidden"),n.triggerEl.setAttribute("aria-expanded","false"),n.active=!1,n.iconEl&&n.iconEl.classList.remove("rotate-180"))}),(e=s.triggerEl.classList).add.apply(e,this._options.activeClasses.split(" ")),(r=s.triggerEl.classList).remove.apply(r,this._options.inactiveClasses.split(" ")),s.triggerEl.setAttribute("aria-expanded","true"),s.targetEl.classList.remove("hidden"),s.active=!0,s.iconEl&&s.iconEl.classList.add("rotate-180"),this._options.onOpen(this,s)},c.prototype.toggle=function(a){var e=this.getItem(a);e.active?this.close(a):this.open(a),this._options.onToggle(this,e)},c.prototype.close=function(a){var e,r,i=this.getItem(a);(e=i.triggerEl.classList).remove.apply(e,this._options.activeClasses.split(" ")),(r=i.triggerEl.classList).add.apply(r,this._options.inactiveClasses.split(" ")),i.targetEl.classList.add("hidden"),i.triggerEl.setAttribute("aria-expanded","false"),i.active=!1,i.iconEl&&i.iconEl.classList.remove("rotate-180"),this._options.onClose(this,i)},c}();function z4(){document.querySelectorAll("[data-accordion]").forEach(function(c){var a=c.getAttribute("data-accordion"),e=c.getAttribute("data-active-classes"),r=c.getAttribute("data-inactive-classes"),i=[];c.querySelectorAll("[data-accordion-target]").forEach(function(s){if(s.closest("[data-accordion]")===c){var n={id:s.getAttribute("data-accordion-target"),triggerEl:s,targetEl:document.querySelector(s.getAttribute("data-accordion-target")),iconEl:s.querySelector("[data-accordion-icon]"),active:s.getAttribute("aria-expanded")==="true"};i.push(n)}}),new f8(i,{alwaysOpen:a==="open",activeClasses:e||Y1.activeClasses,inactiveClasses:r||Y1.inactiveClasses})})}typeof window<"u"&&(window.Accordion=f8,window.initAccordions=z4);var K1=globalThis&&globalThis.__assign||function(){return K1=Object.assign||function(c){for(var a,e=1,r=arguments.length;e<r;e++){a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(c[i]=a[i])}return c},K1.apply(this,arguments)},t0={onCollapse:function(){},onExpand:function(){},onToggle:function(){}},m8=function(){function c(a,e,r){a===void 0&&(a=null),e===void 0&&(e=null),r===void 0&&(r=t0),this._targetEl=a,this._triggerEl=e,this._options=K1(K1({},t0),r),this._visible=!1,this._init()}return c.prototype._init=function(){var a=this;this._triggerEl&&(this._triggerEl.hasAttribute("aria-expanded")?this._visible=this._triggerEl.getAttribute("aria-expanded")==="true":this._visible=!this._targetEl.classList.contains("hidden"),this._triggerEl.addEventListener("click",function(){a.toggle()}))},c.prototype.collapse=function(){this._targetEl.classList.add("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","false"),this._visible=!1,this._options.onCollapse(this)},c.prototype.expand=function(){this._targetEl.classList.remove("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","true"),this._visible=!0,this._options.onExpand(this)},c.prototype.toggle=function(){this._visible?this.collapse():this.expand(),this._options.onToggle(this)},c}();function d4(){document.querySelectorAll("[data-collapse-toggle]").forEach(function(c){var a=c.getAttribute("data-collapse-toggle"),e=document.getElementById(a);e?new m8(e,c):console.error('The target element with id "'.concat(a,'" does not exist. Please check the data-collapse-toggle attribute.'))})}typeof window<"u"&&(window.Collapse=m8,window.initCollapses=d4);var g2=globalThis&&globalThis.__assign||function(){return g2=Object.assign||function(c){for(var a,e=1,r=arguments.length;e<r;e++){a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(c[i]=a[i])}return c},g2.apply(this,arguments)},I1={defaultPosition:0,indicators:{items:[],activeClasses:"bg-white dark:bg-gray-800",inactiveClasses:"bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"},interval:3e3,onNext:function(){},onPrev:function(){},onChange:function(){}},v8=function(){function c(a,e){a===void 0&&(a=[]),e===void 0&&(e=I1),this._items=a,this._options=g2(g2(g2({},I1),e),{indicators:g2(g2({},I1.indicators),e.indicators)}),this._activeItem=this.getItem(this._options.defaultPosition),this._indicators=this._options.indicators.items,this._intervalDuration=this._options.interval,this._intervalInstance=null,this._init()}return c.prototype._init=function(){var a=this;this._items.map(function(e){e.el.classList.add("absolute","inset-0","transition-transform","transform")}),this._getActiveItem()?this.slideTo(this._getActiveItem().position):this.slideTo(0),this._indicators.map(function(e,r){e.el.addEventListener("click",function(){a.slideTo(r)})})},c.prototype.getItem=function(a){return this._items[a]},c.prototype.slideTo=function(a){var e=this._items[a],r={left:e.position===0?this._items[this._items.length-1]:this._items[e.position-1],middle:e,right:e.position===this._items.length-1?this._items[0]:this._items[e.position+1]};this._rotate(r),this._setActiveItem(e),this._intervalInstance&&(this.pause(),this.cycle()),this._options.onChange(this)},c.prototype.next=function(){var a=this._getActiveItem(),e=null;a.position===this._items.length-1?e=this._items[0]:e=this._items[a.position+1],this.slideTo(e.position),this._options.onNext(this)},c.prototype.prev=function(){var a=this._getActiveItem(),e=null;a.position===0?e=this._items[this._items.length-1]:e=this._items[a.position-1],this.slideTo(e.position),this._options.onPrev(this)},c.prototype._rotate=function(a){this._items.map(function(e){e.el.classList.add("hidden")}),a.left.el.classList.remove("-translate-x-full","translate-x-full","translate-x-0","hidden","z-20"),a.left.el.classList.add("-translate-x-full","z-10"),a.middle.el.classList.remove("-translate-x-full","translate-x-full","translate-x-0","hidden","z-10"),a.middle.el.classList.add("translate-x-0","z-20"),a.right.el.classList.remove("-translate-x-full","translate-x-full","translate-x-0","hidden","z-20"),a.right.el.classList.add("translate-x-full","z-10")},c.prototype.cycle=function(){var a=this;typeof window<"u"&&(this._intervalInstance=window.setInterval(function(){a.next()},this._intervalDuration))},c.prototype.pause=function(){clearInterval(this._intervalInstance)},c.prototype._getActiveItem=function(){return this._activeItem},c.prototype._setActiveItem=function(a){var e,r,i=this;this._activeItem=a;var s=a.position;this._indicators.length&&(this._indicators.map(function(n){var t,o;n.el.setAttribute("aria-current","false"),(t=n.el.classList).remove.apply(t,i._options.indicators.activeClasses.split(" ")),(o=n.el.classList).add.apply(o,i._options.indicators.inactiveClasses.split(" "))}),(e=this._indicators[s].el.classList).add.apply(e,this._options.indicators.activeClasses.split(" ")),(r=this._indicators[s].el.classList).remove.apply(r,this._options.indicators.inactiveClasses.split(" ")),this._indicators[s].el.setAttribute("aria-current","true"))},c}();function V4(){document.querySelectorAll("[data-carousel]").forEach(function(c){var a=c.getAttribute("data-carousel-interval"),e=c.getAttribute("data-carousel")==="slide",r=[],i=0;c.querySelectorAll("[data-carousel-item]").length&&Array.from(c.querySelectorAll("[data-carousel-item]")).map(function(f,l){r.push({position:l,el:f}),f.getAttribute("data-carousel-item")==="active"&&(i=l)});var s=[];c.querySelectorAll("[data-carousel-slide-to]").length&&Array.from(c.querySelectorAll("[data-carousel-slide-to]")).map(function(f){s.push({position:parseInt(f.getAttribute("data-carousel-slide-to")),el:f})});var n=new v8(r,{defaultPosition:i,indicators:{items:s},interval:a||I1.interval});e&&n.cycle();var t=c.querySelector("[data-carousel-next]"),o=c.querySelector("[data-carousel-prev]");t&&t.addEventListener("click",function(){n.next()}),o&&o.addEventListener("click",function(){n.prev()})})}typeof window<"u"&&(window.Carousel=v8,window.initCarousels=V4);var J1=globalThis&&globalThis.__assign||function(){return J1=Object.assign||function(c){for(var a,e=1,r=arguments.length;e<r;e++){a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(c[i]=a[i])}return c},J1.apply(this,arguments)},o0={transition:"transition-opacity",duration:300,timing:"ease-out",onHide:function(){}},h8=function(){function c(a,e,r){a===void 0&&(a=null),e===void 0&&(e=null),r===void 0&&(r=o0),this._targetEl=a,this._triggerEl=e,this._options=J1(J1({},o0),r),this._init()}return c.prototype._init=function(){var a=this;this._triggerEl&&this._triggerEl.addEventListener("click",function(){a.hide()})},c.prototype.hide=function(){var a=this;this._targetEl.classList.add(this._options.transition,"duration-".concat(this._options.duration),this._options.timing,"opacity-0"),setTimeout(function(){a._targetEl.classList.add("hidden")},this._options.duration),this._options.onHide(this,this._targetEl)},c}();function M4(){document.querySelectorAll("[data-dismiss-target]").forEach(function(c){var a=c.getAttribute("data-dismiss-target"),e=document.querySelector(a);e?new h8(e,c):console.error('The dismiss element with id "'.concat(a,'" does not exist. Please check the data-dismiss-target attribute.'))})}typeof window<"u"&&(window.Dismiss=h8,window.initDismisses=M4);var D="top",j="bottom",G="right",F="left",C4="auto",f1=[D,j,G,F],R2="start",a1="end",Js="clippingParents",u8="viewport",X2="popper",Qs="reference",l0=f1.reduce(function(c,a){return c.concat([a+"-"+R2,a+"-"+a1])},[]),H8=[].concat(f1,[C4]).reduce(function(c,a){return c.concat([a,a+"-"+R2,a+"-"+a1])},[]),Zs="beforeRead",cn="read",an="afterRead",en="beforeMain",rn="main",sn="afterMain",nn="beforeWrite",tn="write",on="afterWrite",ln=[Zs,cn,an,en,rn,sn,nn,tn,on];function Z(c){return c?(c.nodeName||"").toLowerCase():null}function U(c){if(c==null)return window;if(c.toString()!=="[object Window]"){var a=c.ownerDocument;return a&&a.defaultView||window}return c}function y2(c){var a=U(c).Element;return c instanceof a||c instanceof Element}function W(c){var a=U(c).HTMLElement;return c instanceof a||c instanceof HTMLElement}function L4(c){if(typeof ShadowRoot>"u")return!1;var a=U(c).ShadowRoot;return c instanceof a||c instanceof ShadowRoot}function fn(c){var a=c.state;Object.keys(a.elements).forEach(function(e){var r=a.styles[e]||{},i=a.attributes[e]||{},s=a.elements[e];!W(s)||!Z(s)||(Object.assign(s.style,r),Object.keys(i).forEach(function(n){var t=i[n];t===!1?s.removeAttribute(n):s.setAttribute(n,t===!0?"":t)}))})}function mn(c){var a=c.state,e={popper:{position:a.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(a.elements.popper.style,e.popper),a.styles=e,a.elements.arrow&&Object.assign(a.elements.arrow.style,e.arrow),function(){Object.keys(a.elements).forEach(function(r){var i=a.elements[r],s=a.attributes[r]||{},n=Object.keys(a.styles.hasOwnProperty(r)?a.styles[r]:e[r]),t=n.reduce(function(o,f){return o[f]="",o},{});!W(i)||!Z(i)||(Object.assign(i.style,t),Object.keys(s).forEach(function(o){i.removeAttribute(o)}))})}}const vn={name:"applyStyles",enabled:!0,phase:"write",fn,effect:mn,requires:["computeStyles"]};function Q(c){return c.split("-")[0]}var N2=Math.max,Q1=Math.min,D2=Math.round;function K3(){var c=navigator.userAgentData;return c!=null&&c.brands&&Array.isArray(c.brands)?c.brands.map(function(a){return a.brand+"/"+a.version}).join(" "):navigator.userAgent}function p8(){return!/^((?!chrome|android).)*safari/i.test(K3())}function F2(c,a,e){a===void 0&&(a=!1),e===void 0&&(e=!1);var r=c.getBoundingClientRect(),i=1,s=1;a&&W(c)&&(i=c.offsetWidth>0&&D2(r.width)/c.offsetWidth||1,s=c.offsetHeight>0&&D2(r.height)/c.offsetHeight||1);var n=y2(c)?U(c):window,t=n.visualViewport,o=!p8()&&e,f=(r.left+(o&&t?t.offsetLeft:0))/i,l=(r.top+(o&&t?t.offsetTop:0))/s,m=r.width/i,p=r.height/s;return{width:m,height:p,top:l,right:f+m,bottom:l+p,left:f,x:f,y:l}}function g4(c){var a=F2(c),e=c.offsetWidth,r=c.offsetHeight;return Math.abs(a.width-e)<=1&&(e=a.width),Math.abs(a.height-r)<=1&&(r=a.height),{x:c.offsetLeft,y:c.offsetTop,width:e,height:r}}function z8(c,a){var e=a.getRootNode&&a.getRootNode();if(c.contains(a))return!0;if(e&&L4(e)){var r=a;do{if(r&&c.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function e2(c){return U(c).getComputedStyle(c)}function hn(c){return["table","td","th"].indexOf(Z(c))>=0}function z2(c){return((y2(c)?c.ownerDocument:c.document)||window.document).documentElement}function v3(c){return Z(c)==="html"?c:c.assignedSlot||c.parentNode||(L4(c)?c.host:null)||z2(c)}function f0(c){return!W(c)||e2(c).position==="fixed"?null:c.offsetParent}function un(c){var a=/firefox/i.test(K3()),e=/Trident/i.test(K3());if(e&&W(c)){var r=e2(c);if(r.position==="fixed")return null}var i=v3(c);for(L4(i)&&(i=i.host);W(i)&&["html","body"].indexOf(Z(i))<0;){var s=e2(i);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||a&&s.willChange==="filter"||a&&s.filter&&s.filter!=="none")return i;i=i.parentNode}return null}function m1(c){for(var a=U(c),e=f0(c);e&&hn(e)&&e2(e).position==="static";)e=f0(e);return e&&(Z(e)==="html"||Z(e)==="body"&&e2(e).position==="static")?a:e||un(c)||a}function x4(c){return["top","bottom"].indexOf(c)>=0?"x":"y"}function Y2(c,a,e){return N2(c,Q1(a,e))}function Hn(c,a,e){var r=Y2(c,a,e);return r>e?e:r}function d8(){return{top:0,right:0,bottom:0,left:0}}function V8(c){return Object.assign({},d8(),c)}function M8(c,a){return a.reduce(function(e,r){return e[r]=c,e},{})}var pn=function(a,e){return a=typeof a=="function"?a(Object.assign({},e.rects,{placement:e.placement})):a,V8(typeof a!="number"?a:M8(a,f1))};function zn(c){var a,e=c.state,r=c.name,i=c.options,s=e.elements.arrow,n=e.modifiersData.popperOffsets,t=Q(e.placement),o=x4(t),f=[F,G].indexOf(t)>=0,l=f?"height":"width";if(!(!s||!n)){var m=pn(i.padding,e),p=g4(s),u=o==="y"?D:F,h=o==="y"?j:G,H=e.rects.reference[l]+e.rects.reference[o]-n[o]-e.rects.popper[l],V=n[o]-e.rects.reference[o],L=m1(s),M=L?o==="y"?L.clientHeight||0:L.clientWidth||0:0,g=H/2-V/2,C=m[u],x=M-p[l]-m[h],b=M/2-p[l]/2+g,N=Y2(C,b,x),T=o;e.modifiersData[r]=(a={},a[T]=N,a.centerOffset=N-b,a)}}function dn(c){var a=c.state,e=c.options,r=e.element,i=r===void 0?"[data-popper-arrow]":r;i!=null&&(typeof i=="string"&&(i=a.elements.popper.querySelector(i),!i)||z8(a.elements.popper,i)&&(a.elements.arrow=i))}const Vn={name:"arrow",enabled:!0,phase:"main",fn:zn,effect:dn,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function O2(c){return c.split("-")[1]}var Mn={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Cn(c,a){var e=c.x,r=c.y,i=a.devicePixelRatio||1;return{x:D2(e*i)/i||0,y:D2(r*i)/i||0}}function m0(c){var a,e=c.popper,r=c.popperRect,i=c.placement,s=c.variation,n=c.offsets,t=c.position,o=c.gpuAcceleration,f=c.adaptive,l=c.roundOffsets,m=c.isFixed,p=n.x,u=p===void 0?0:p,h=n.y,H=h===void 0?0:h,V=typeof l=="function"?l({x:u,y:H}):{x:u,y:H};u=V.x,H=V.y;var L=n.hasOwnProperty("x"),M=n.hasOwnProperty("y"),g=F,C=D,x=window;if(f){var b=m1(e),N="clientHeight",T="clientWidth";if(b===U(e)&&(b=z2(e),e2(b).position!=="static"&&t==="absolute"&&(N="scrollHeight",T="scrollWidth")),b=b,i===D||(i===F||i===G)&&s===a1){C=j;var y=m&&b===x&&x.visualViewport?x.visualViewport.height:b[N];H-=y-r.height,H*=o?1:-1}if(i===F||(i===D||i===j)&&s===a1){g=G;var E=m&&b===x&&x.visualViewport?x.visualViewport.width:b[T];u-=E-r.width,u*=o?1:-1}}var B=Object.assign({position:t},f&&Mn),X=l===!0?Cn({x:u,y:H},U(e)):{x:u,y:H};if(u=X.x,H=X.y,o){var R;return Object.assign({},B,(R={},R[C]=M?"0":"",R[g]=L?"0":"",R.transform=(x.devicePixelRatio||1)<=1?"translate("+u+"px, "+H+"px)":"translate3d("+u+"px, "+H+"px, 0)",R))}return Object.assign({},B,(a={},a[C]=M?H+"px":"",a[g]=L?u+"px":"",a.transform="",a))}function Ln(c){var a=c.state,e=c.options,r=e.gpuAcceleration,i=r===void 0?!0:r,s=e.adaptive,n=s===void 0?!0:s,t=e.roundOffsets,o=t===void 0?!0:t,f={placement:Q(a.placement),variation:O2(a.placement),popper:a.elements.popper,popperRect:a.rects.popper,gpuAcceleration:i,isFixed:a.options.strategy==="fixed"};a.modifiersData.popperOffsets!=null&&(a.styles.popper=Object.assign({},a.styles.popper,m0(Object.assign({},f,{offsets:a.modifiersData.popperOffsets,position:a.options.strategy,adaptive:n,roundOffsets:o})))),a.modifiersData.arrow!=null&&(a.styles.arrow=Object.assign({},a.styles.arrow,m0(Object.assign({},f,{offsets:a.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:o})))),a.attributes.popper=Object.assign({},a.attributes.popper,{"data-popper-placement":a.placement})}const gn={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Ln,data:{}};var b1={passive:!0};function xn(c){var a=c.state,e=c.instance,r=c.options,i=r.scroll,s=i===void 0?!0:i,n=r.resize,t=n===void 0?!0:n,o=U(a.elements.popper),f=[].concat(a.scrollParents.reference,a.scrollParents.popper);return s&&f.forEach(function(l){l.addEventListener("scroll",e.update,b1)}),t&&o.addEventListener("resize",e.update,b1),function(){s&&f.forEach(function(l){l.removeEventListener("scroll",e.update,b1)}),t&&o.removeEventListener("resize",e.update,b1)}}const bn={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:xn,data:{}};var wn={left:"right",right:"left",bottom:"top",top:"bottom"};function W1(c){return c.replace(/left|right|bottom|top/g,function(a){return wn[a]})}var Nn={start:"end",end:"start"};function v0(c){return c.replace(/start|end/g,function(a){return Nn[a]})}function b4(c){var a=U(c),e=a.pageXOffset,r=a.pageYOffset;return{scrollLeft:e,scrollTop:r}}function w4(c){return F2(z2(c)).left+b4(c).scrollLeft}function yn(c,a){var e=U(c),r=z2(c),i=e.visualViewport,s=r.clientWidth,n=r.clientHeight,t=0,o=0;if(i){s=i.width,n=i.height;var f=p8();(f||!f&&a==="fixed")&&(t=i.offsetLeft,o=i.offsetTop)}return{width:s,height:n,x:t+w4(c),y:o}}function Sn(c){var a,e=z2(c),r=b4(c),i=(a=c.ownerDocument)==null?void 0:a.body,s=N2(e.scrollWidth,e.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),n=N2(e.scrollHeight,e.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),t=-r.scrollLeft+w4(c),o=-r.scrollTop;return e2(i||e).direction==="rtl"&&(t+=N2(e.clientWidth,i?i.clientWidth:0)-s),{width:s,height:n,x:t,y:o}}function N4(c){var a=e2(c),e=a.overflow,r=a.overflowX,i=a.overflowY;return/auto|scroll|overlay|hidden/.test(e+i+r)}function C8(c){return["html","body","#document"].indexOf(Z(c))>=0?c.ownerDocument.body:W(c)&&N4(c)?c:C8(v3(c))}function K2(c,a){var e;a===void 0&&(a=[]);var r=C8(c),i=r===((e=c.ownerDocument)==null?void 0:e.body),s=U(r),n=i?[s].concat(s.visualViewport||[],N4(r)?r:[]):r,t=a.concat(n);return i?t:t.concat(K2(v3(n)))}function J3(c){return Object.assign({},c,{left:c.x,top:c.y,right:c.x+c.width,bottom:c.y+c.height})}function kn(c,a){var e=F2(c,!1,a==="fixed");return e.top=e.top+c.clientTop,e.left=e.left+c.clientLeft,e.bottom=e.top+c.clientHeight,e.right=e.left+c.clientWidth,e.width=c.clientWidth,e.height=c.clientHeight,e.x=e.left,e.y=e.top,e}function h0(c,a,e){return a===u8?J3(yn(c,e)):y2(a)?kn(a,e):J3(Sn(z2(c)))}function An(c){var a=K2(v3(c)),e=["absolute","fixed"].indexOf(e2(c).position)>=0,r=e&&W(c)?m1(c):c;return y2(r)?a.filter(function(i){return y2(i)&&z8(i,r)&&Z(i)!=="body"}):[]}function Tn(c,a,e,r){var i=a==="clippingParents"?An(c):[].concat(a),s=[].concat(i,[e]),n=s[0],t=s.reduce(function(o,f){var l=h0(c,f,r);return o.top=N2(l.top,o.top),o.right=Q1(l.right,o.right),o.bottom=Q1(l.bottom,o.bottom),o.left=N2(l.left,o.left),o},h0(c,n,r));return t.width=t.right-t.left,t.height=t.bottom-t.top,t.x=t.left,t.y=t.top,t}function L8(c){var a=c.reference,e=c.element,r=c.placement,i=r?Q(r):null,s=r?O2(r):null,n=a.x+a.width/2-e.width/2,t=a.y+a.height/2-e.height/2,o;switch(i){case D:o={x:n,y:a.y-e.height};break;case j:o={x:n,y:a.y+a.height};break;case G:o={x:a.x+a.width,y:t};break;case F:o={x:a.x-e.width,y:t};break;default:o={x:a.x,y:a.y}}var f=i?x4(i):null;if(f!=null){var l=f==="y"?"height":"width";switch(s){case R2:o[f]=o[f]-(a[l]/2-e[l]/2);break;case a1:o[f]=o[f]+(a[l]/2-e[l]/2);break}}return o}function e1(c,a){a===void 0&&(a={});var e=a,r=e.placement,i=r===void 0?c.placement:r,s=e.strategy,n=s===void 0?c.strategy:s,t=e.boundary,o=t===void 0?Js:t,f=e.rootBoundary,l=f===void 0?u8:f,m=e.elementContext,p=m===void 0?X2:m,u=e.altBoundary,h=u===void 0?!1:u,H=e.padding,V=H===void 0?0:H,L=V8(typeof V!="number"?V:M8(V,f1)),M=p===X2?Qs:X2,g=c.rects.popper,C=c.elements[h?M:p],x=Tn(y2(C)?C:C.contextElement||z2(c.elements.popper),o,l,n),b=F2(c.elements.reference),N=L8({reference:b,element:g,strategy:"absolute",placement:i}),T=J3(Object.assign({},g,N)),y=p===X2?T:b,E={top:x.top-y.top+L.top,bottom:y.bottom-x.bottom+L.bottom,left:x.left-y.left+L.left,right:y.right-x.right+L.right},B=c.modifiersData.offset;if(p===X2&&B){var X=B[i];Object.keys(E).forEach(function(R){var d2=[G,j].indexOf(R)>=0?1:-1,V2=[D,j].indexOf(R)>=0?"y":"x";E[R]+=X[V2]*d2})}return E}function En(c,a){a===void 0&&(a={});var e=a,r=e.placement,i=e.boundary,s=e.rootBoundary,n=e.padding,t=e.flipVariations,o=e.allowedAutoPlacements,f=o===void 0?H8:o,l=O2(r),m=l?t?l0:l0.filter(function(h){return O2(h)===l}):f1,p=m.filter(function(h){return f.indexOf(h)>=0});p.length===0&&(p=m);var u=p.reduce(function(h,H){return h[H]=e1(c,{placement:H,boundary:i,rootBoundary:s,padding:n})[Q(H)],h},{});return Object.keys(u).sort(function(h,H){return u[h]-u[H]})}function Pn(c){if(Q(c)===C4)return[];var a=W1(c);return[v0(c),a,v0(a)]}function _n(c){var a=c.state,e=c.options,r=c.name;if(!a.modifiersData[r]._skip){for(var i=e.mainAxis,s=i===void 0?!0:i,n=e.altAxis,t=n===void 0?!0:n,o=e.fallbackPlacements,f=e.padding,l=e.boundary,m=e.rootBoundary,p=e.altBoundary,u=e.flipVariations,h=u===void 0?!0:u,H=e.allowedAutoPlacements,V=a.options.placement,L=Q(V),M=L===V,g=o||(M||!h?[W1(V)]:Pn(V)),C=[V].concat(g).reduce(function(A2,t2){return A2.concat(Q(t2)===C4?En(a,{placement:t2,boundary:l,rootBoundary:m,padding:f,flipVariations:h,allowedAutoPlacements:H}):t2)},[]),x=a.rects.reference,b=a.rects.popper,N=new Map,T=!0,y=C[0],E=0;E<C.length;E++){var B=C[E],X=Q(B),R=O2(B)===R2,d2=[D,j].indexOf(X)>=0,V2=d2?"width":"height",O=e1(a,{placement:B,boundary:l,rootBoundary:m,altBoundary:p,padding:f}),$=d2?R?G:F:R?j:D;x[V2]>b[V2]&&($=W1($));var M1=W1($),M2=[];if(s&&M2.push(O[X]<=0),t&&M2.push(O[$]<=0,O[M1]<=0),M2.every(function(A2){return A2})){y=B,T=!1;break}N.set(B,M2)}if(T)for(var C1=h?3:1,E3=function(t2){var j2=C.find(function(g1){var C2=N.get(g1);if(C2)return C2.slice(0,t2).every(function(P3){return P3})});if(j2)return y=j2,"break"},W2=C1;W2>0;W2--){var L1=E3(W2);if(L1==="break")break}a.placement!==y&&(a.modifiersData[r]._skip=!0,a.placement=y,a.reset=!0)}}const Bn={name:"flip",enabled:!0,phase:"main",fn:_n,requiresIfExists:["offset"],data:{_skip:!1}};function u0(c,a,e){return e===void 0&&(e={x:0,y:0}),{top:c.top-a.height-e.y,right:c.right-a.width+e.x,bottom:c.bottom-a.height+e.y,left:c.left-a.width-e.x}}function H0(c){return[D,G,j,F].some(function(a){return c[a]>=0})}function Rn(c){var a=c.state,e=c.name,r=a.rects.reference,i=a.rects.popper,s=a.modifiersData.preventOverflow,n=e1(a,{elementContext:"reference"}),t=e1(a,{altBoundary:!0}),o=u0(n,r),f=u0(t,i,s),l=H0(o),m=H0(f);a.modifiersData[e]={referenceClippingOffsets:o,popperEscapeOffsets:f,isReferenceHidden:l,hasPopperEscaped:m},a.attributes.popper=Object.assign({},a.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":m})}const Dn={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Rn};function Fn(c,a,e){var r=Q(c),i=[F,D].indexOf(r)>=0?-1:1,s=typeof e=="function"?e(Object.assign({},a,{placement:c})):e,n=s[0],t=s[1];return n=n||0,t=(t||0)*i,[F,G].indexOf(r)>=0?{x:t,y:n}:{x:n,y:t}}function On(c){var a=c.state,e=c.options,r=c.name,i=e.offset,s=i===void 0?[0,0]:i,n=H8.reduce(function(l,m){return l[m]=Fn(m,a.rects,s),l},{}),t=n[a.placement],o=t.x,f=t.y;a.modifiersData.popperOffsets!=null&&(a.modifiersData.popperOffsets.x+=o,a.modifiersData.popperOffsets.y+=f),a.modifiersData[r]=n}const Un={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:On};function qn(c){var a=c.state,e=c.name;a.modifiersData[e]=L8({reference:a.rects.reference,element:a.rects.popper,strategy:"absolute",placement:a.placement})}const In={name:"popperOffsets",enabled:!0,phase:"read",fn:qn,data:{}};function Wn(c){return c==="x"?"y":"x"}function jn(c){var a=c.state,e=c.options,r=c.name,i=e.mainAxis,s=i===void 0?!0:i,n=e.altAxis,t=n===void 0?!1:n,o=e.boundary,f=e.rootBoundary,l=e.altBoundary,m=e.padding,p=e.tether,u=p===void 0?!0:p,h=e.tetherOffset,H=h===void 0?0:h,V=e1(a,{boundary:o,rootBoundary:f,padding:m,altBoundary:l}),L=Q(a.placement),M=O2(a.placement),g=!M,C=x4(L),x=Wn(C),b=a.modifiersData.popperOffsets,N=a.rects.reference,T=a.rects.popper,y=typeof H=="function"?H(Object.assign({},a.rects,{placement:a.placement})):H,E=typeof y=="number"?{mainAxis:y,altAxis:y}:Object.assign({mainAxis:0,altAxis:0},y),B=a.modifiersData.offset?a.modifiersData.offset[a.placement]:null,X={x:0,y:0};if(b){if(s){var R,d2=C==="y"?D:F,V2=C==="y"?j:G,O=C==="y"?"height":"width",$=b[C],M1=$+V[d2],M2=$-V[V2],C1=u?-T[O]/2:0,E3=M===R2?N[O]:T[O],W2=M===R2?-T[O]:-N[O],L1=a.elements.arrow,A2=u&&L1?g4(L1):{width:0,height:0},t2=a.modifiersData["arrow#persistent"]?a.modifiersData["arrow#persistent"].padding:d8(),j2=t2[d2],g1=t2[V2],C2=Y2(0,N[O],A2[O]),P3=g?N[O]/2-C1-C2-j2-E.mainAxis:E3-C2-j2-E.mainAxis,yi=g?-N[O]/2+C1+C2+g1+E.mainAxis:W2+C2+g1+E.mainAxis,_3=a.elements.arrow&&m1(a.elements.arrow),Si=_3?C==="y"?_3.clientTop||0:_3.clientLeft||0:0,U6=(R=B==null?void 0:B[C])!=null?R:0,ki=$+P3-U6-Si,Ai=$+yi-U6,q6=Y2(u?Q1(M1,ki):M1,$,u?N2(M2,Ai):M2);b[C]=q6,X[C]=q6-$}if(t){var I6,Ti=C==="x"?D:F,Ei=C==="x"?j:G,L2=b[x],x1=x==="y"?"height":"width",W6=L2+V[Ti],j6=L2-V[Ei],B3=[D,F].indexOf(L)!==-1,G6=(I6=B==null?void 0:B[x])!=null?I6:0,X6=B3?W6:L2-N[x1]-T[x1]-G6+E.altAxis,$6=B3?L2+N[x1]+T[x1]-G6-E.altAxis:j6,Y6=u&&B3?Hn(X6,L2,$6):Y2(u?X6:W6,L2,u?$6:j6);b[x]=Y6,X[x]=Y6-L2}a.modifiersData[r]=X}}const Gn={name:"preventOverflow",enabled:!0,phase:"main",fn:jn,requiresIfExists:["offset"]};function Xn(c){return{scrollLeft:c.scrollLeft,scrollTop:c.scrollTop}}function $n(c){return c===U(c)||!W(c)?b4(c):Xn(c)}function Yn(c){var a=c.getBoundingClientRect(),e=D2(a.width)/c.offsetWidth||1,r=D2(a.height)/c.offsetHeight||1;return e!==1||r!==1}function Kn(c,a,e){e===void 0&&(e=!1);var r=W(a),i=W(a)&&Yn(a),s=z2(a),n=F2(c,i,e),t={scrollLeft:0,scrollTop:0},o={x:0,y:0};return(r||!r&&!e)&&((Z(a)!=="body"||N4(s))&&(t=$n(a)),W(a)?(o=F2(a,!0),o.x+=a.clientLeft,o.y+=a.clientTop):s&&(o.x=w4(s))),{x:n.left+t.scrollLeft-o.x,y:n.top+t.scrollTop-o.y,width:n.width,height:n.height}}function Jn(c){var a=new Map,e=new Set,r=[];c.forEach(function(s){a.set(s.name,s)});function i(s){e.add(s.name);var n=[].concat(s.requires||[],s.requiresIfExists||[]);n.forEach(function(t){if(!e.has(t)){var o=a.get(t);o&&i(o)}}),r.push(s)}return c.forEach(function(s){e.has(s.name)||i(s)}),r}function Qn(c){var a=Jn(c);return ln.reduce(function(e,r){return e.concat(a.filter(function(i){return i.phase===r}))},[])}function Zn(c){var a;return function(){return a||(a=new Promise(function(e){Promise.resolve().then(function(){a=void 0,e(c())})})),a}}function ct(c){var a=c.reduce(function(e,r){var i=e[r.name];return e[r.name]=i?Object.assign({},i,r,{options:Object.assign({},i.options,r.options),data:Object.assign({},i.data,r.data)}):r,e},{});return Object.keys(a).map(function(e){return a[e]})}var p0={placement:"bottom",modifiers:[],strategy:"absolute"};function z0(){for(var c=arguments.length,a=new Array(c),e=0;e<c;e++)a[e]=arguments[e];return!a.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function at(c){c===void 0&&(c={});var a=c,e=a.defaultModifiers,r=e===void 0?[]:e,i=a.defaultOptions,s=i===void 0?p0:i;return function(t,o,f){f===void 0&&(f=s);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},p0,s),modifiersData:{},elements:{reference:t,popper:o},attributes:{},styles:{}},m=[],p=!1,u={state:l,setOptions:function(L){var M=typeof L=="function"?L(l.options):L;H(),l.options=Object.assign({},s,l.options,M),l.scrollParents={reference:y2(t)?K2(t):t.contextElement?K2(t.contextElement):[],popper:K2(o)};var g=Qn(ct([].concat(r,l.options.modifiers)));return l.orderedModifiers=g.filter(function(C){return C.enabled}),h(),u.update()},forceUpdate:function(){if(!p){var L=l.elements,M=L.reference,g=L.popper;if(z0(M,g)){l.rects={reference:Kn(M,m1(g),l.options.strategy==="fixed"),popper:g4(g)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(E){return l.modifiersData[E.name]=Object.assign({},E.data)});for(var C=0;C<l.orderedModifiers.length;C++){if(l.reset===!0){l.reset=!1,C=-1;continue}var x=l.orderedModifiers[C],b=x.fn,N=x.options,T=N===void 0?{}:N,y=x.name;typeof b=="function"&&(l=b({state:l,options:T,name:y,instance:u})||l)}}}},update:Zn(function(){return new Promise(function(V){u.forceUpdate(),V(l)})}),destroy:function(){H(),p=!0}};if(!z0(t,o))return u;u.setOptions(f).then(function(V){!p&&f.onFirstUpdate&&f.onFirstUpdate(V)});function h(){l.orderedModifiers.forEach(function(V){var L=V.name,M=V.options,g=M===void 0?{}:M,C=V.effect;if(typeof C=="function"){var x=C({state:l,name:L,instance:u,options:g}),b=function(){};m.push(x||b)}})}function H(){m.forEach(function(V){return V()}),m=[]}return u}}var et=[bn,In,gn,vn,Un,Bn,Gn,Vn,Dn],y4=at({defaultModifiers:et}),f2=globalThis&&globalThis.__assign||function(){return f2=Object.assign||function(c){for(var a,e=1,r=arguments.length;e<r;e++){a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(c[i]=a[i])}return c},f2.apply(this,arguments)},w1=globalThis&&globalThis.__spreadArray||function(c,a,e){if(e||arguments.length===2)for(var r=0,i=a.length,s;r<i;r++)(s||!(r in a))&&(s||(s=Array.prototype.slice.call(a,0,r)),s[r]=a[r]);return c.concat(s||Array.prototype.slice.call(a))},m2={placement:"bottom",triggerType:"click",offsetSkidding:0,offsetDistance:10,delay:300,ignoreClickOutsideClass:!1,onShow:function(){},onHide:function(){},onToggle:function(){}},g8=function(){function c(a,e,r){a===void 0&&(a=null),e===void 0&&(e=null),r===void 0&&(r=m2),this._targetEl=a,this._triggerEl=e,this._options=f2(f2({},m2),r),this._popperInstance=this._createPopperInstance(),this._visible=!1,this._init()}return c.prototype._init=function(){this._triggerEl&&this._setupEventListeners()},c.prototype._setupEventListeners=function(){var a=this,e=this._getTriggerEvents();this._options.triggerType==="click"&&e.showEvents.forEach(function(r){a._triggerEl.addEventListener(r,function(){a.toggle()})}),this._options.triggerType==="hover"&&(e.showEvents.forEach(function(r){a._triggerEl.addEventListener(r,function(){r==="click"?a.toggle():setTimeout(function(){a.show()},a._options.delay)}),a._targetEl.addEventListener(r,function(){a.show()})}),e.hideEvents.forEach(function(r){a._triggerEl.addEventListener(r,function(){setTimeout(function(){a._targetEl.matches(":hover")||a.hide()},a._options.delay)}),a._targetEl.addEventListener(r,function(){setTimeout(function(){a._triggerEl.matches(":hover")||a.hide()},a._options.delay)})}))},c.prototype._createPopperInstance=function(){return y4(this._triggerEl,this._targetEl,{placement:this._options.placement,modifiers:[{name:"offset",options:{offset:[this._options.offsetSkidding,this._options.offsetDistance]}}]})},c.prototype._setupClickOutsideListener=function(){var a=this;this._clickOutsideEventListener=function(e){a._handleClickOutside(e,a._targetEl)},document.body.addEventListener("click",this._clickOutsideEventListener,!0)},c.prototype._removeClickOutsideListener=function(){document.body.removeEventListener("click",this._clickOutsideEventListener,!0)},c.prototype._handleClickOutside=function(a,e){var r=a.target,i=this._options.ignoreClickOutsideClass,s=!1;if(i){var n=document.querySelectorAll(".".concat(i));n.forEach(function(t){if(t.contains(r)){s=!0;return}})}r!==e&&!e.contains(r)&&!this._triggerEl.contains(r)&&!s&&this.isVisible()&&this.hide()},c.prototype._getTriggerEvents=function(){switch(this._options.triggerType){case"hover":return{showEvents:["mouseenter","click"],hideEvents:["mouseleave"]};case"click":return{showEvents:["click"],hideEvents:[]};case"none":return{showEvents:[],hideEvents:[]};default:return{showEvents:["click"],hideEvents:[]}}},c.prototype.toggle=function(){this.isVisible()?this.hide():this.show(),this._options.onToggle(this)},c.prototype.isVisible=function(){return this._visible},c.prototype.show=function(){this._targetEl.classList.remove("hidden"),this._targetEl.classList.add("block"),this._popperInstance.setOptions(function(a){return f2(f2({},a),{modifiers:w1(w1([],a.modifiers,!0),[{name:"eventListeners",enabled:!0}],!1)})}),this._setupClickOutsideListener(),this._popperInstance.update(),this._visible=!0,this._options.onShow(this)},c.prototype.hide=function(){this._targetEl.classList.remove("block"),this._targetEl.classList.add("hidden"),this._popperInstance.setOptions(function(a){return f2(f2({},a),{modifiers:w1(w1([],a.modifiers,!0),[{name:"eventListeners",enabled:!1}],!1)})}),this._visible=!1,this._removeClickOutsideListener(),this._options.onHide(this)},c}();function S4(){document.querySelectorAll("[data-dropdown-toggle]").forEach(function(c){var a=c.getAttribute("data-dropdown-toggle"),e=document.getElementById(a);if(e){var r=c.getAttribute("data-dropdown-placement"),i=c.getAttribute("data-dropdown-offset-skidding"),s=c.getAttribute("data-dropdown-offset-distance"),n=c.getAttribute("data-dropdown-trigger"),t=c.getAttribute("data-dropdown-delay"),o=c.getAttribute("data-dropdown-ignore-click-outside-class");new g8(e,c,{placement:r||m2.placement,triggerType:n||m2.triggerType,offsetSkidding:i?parseInt(i):m2.offsetSkidding,offsetDistance:s?parseInt(s):m2.offsetDistance,delay:t?parseInt(t):m2.delay,ignoreClickOutsideClass:o||m2.ignoreClickOutsideClass})}else console.error('The dropdown element with id "'.concat(a,'" does not exist. Please check the data-dropdown-toggle attribute.'))})}typeof window<"u"&&(window.Dropdown=g8,window.initDropdowns=S4);var Z1=globalThis&&globalThis.__assign||function(){return Z1=Object.assign||function(c){for(var a,e=1,r=arguments.length;e<r;e++){a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(c[i]=a[i])}return c},Z1.apply(this,arguments)},T2={placement:"center",backdropClasses:"bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",backdrop:"dynamic",closable:!0,onHide:function(){},onShow:function(){},onToggle:function(){}},Q3=function(){function c(a,e){a===void 0&&(a=null),e===void 0&&(e=T2),this._targetEl=a,this._options=Z1(Z1({},T2),e),this._isHidden=!0,this._backdropEl=null,this._init()}return c.prototype._init=function(){var a=this;this._targetEl&&this._getPlacementClasses().map(function(e){a._targetEl.classList.add(e)})},c.prototype._createBackdrop=function(){var a;if(this._isHidden){var e=document.createElement("div");e.setAttribute("modal-backdrop",""),(a=e.classList).add.apply(a,this._options.backdropClasses.split(" ")),document.querySelector("body").append(e),this._backdropEl=e}},c.prototype._destroyBackdropEl=function(){this._isHidden||document.querySelector("[modal-backdrop]").remove()},c.prototype._setupModalCloseEventListeners=function(){var a=this;this._options.backdrop==="dynamic"&&(this._clickOutsideEventListener=function(e){a._handleOutsideClick(e.target)},this._targetEl.addEventListener("click",this._clickOutsideEventListener,!0)),this._keydownEventListener=function(e){e.key==="Escape"&&a.hide()},document.body.addEventListener("keydown",this._keydownEventListener,!0)},c.prototype._removeModalCloseEventListeners=function(){this._options.backdrop==="dynamic"&&this._targetEl.removeEventListener("click",this._clickOutsideEventListener,!0),document.body.removeEventListener("keydown",this._keydownEventListener,!0)},c.prototype._handleOutsideClick=function(a){(a===this._targetEl||a===this._backdropEl&&this.isVisible())&&this.hide()},c.prototype._getPlacementClasses=function(){switch(this._options.placement){case"top-left":return["justify-start","items-start"];case"top-center":return["justify-center","items-start"];case"top-right":return["justify-end","items-start"];case"center-left":return["justify-start","items-center"];case"center":return["justify-center","items-center"];case"center-right":return["justify-end","items-center"];case"bottom-left":return["justify-start","items-end"];case"bottom-center":return["justify-center","items-end"];case"bottom-right":return["justify-end","items-end"];default:return["justify-center","items-center"]}},c.prototype.toggle=function(){this._isHidden?this.show():this.hide(),this._options.onToggle(this)},c.prototype.show=function(){this.isHidden&&(this._targetEl.classList.add("flex"),this._targetEl.classList.remove("hidden"),this._targetEl.setAttribute("aria-modal","true"),this._targetEl.setAttribute("role","dialog"),this._targetEl.removeAttribute("aria-hidden"),this._createBackdrop(),this._isHidden=!1,document.body.classList.add("overflow-hidden"),this._options.closable&&this._setupModalCloseEventListeners(),this._options.onShow(this))},c.prototype.hide=function(){this.isVisible&&(this._targetEl.classList.add("hidden"),this._targetEl.classList.remove("flex"),this._targetEl.setAttribute("aria-hidden","true"),this._targetEl.removeAttribute("aria-modal"),this._targetEl.removeAttribute("role"),this._destroyBackdropEl(),this._isHidden=!0,document.body.classList.remove("overflow-hidden"),this._options.closable&&this._removeModalCloseEventListeners(),this._options.onHide(this))},c.prototype.isVisible=function(){return!this._isHidden},c.prototype.isHidden=function(){return this._isHidden},c}(),N1=function(c,a){return a.some(function(e){return e.id===c})?a.find(function(e){return e.id===c}):null};function k4(){var c=[];document.querySelectorAll("[data-modal-target]").forEach(function(a){var e=a.getAttribute("data-modal-target"),r=document.getElementById(e);if(r){var i=r.getAttribute("data-modal-placement"),s=r.getAttribute("data-modal-backdrop");N1(e,c)||c.push({id:e,object:new Q3(r,{placement:i||T2.placement,backdrop:s||T2.backdrop})})}else console.error("Modal with id ".concat(e," does not exist. Are you sure that the data-modal-target attribute points to the correct modal id?."))}),document.querySelectorAll("[data-modal-toggle]").forEach(function(a){var e=a.getAttribute("data-modal-toggle"),r=document.getElementById(e);if(r){var i=r.getAttribute("data-modal-placement"),s=r.getAttribute("data-modal-backdrop"),n=N1(e,c);n||(n={id:e,object:new Q3(r,{placement:i||T2.placement,backdrop:s||T2.backdrop})},c.push(n)),a.addEventListener("click",function(){n.object.toggle()})}else console.error("Modal with id ".concat(e," does not exist. Are you sure that the data-modal-toggle attribute points to the correct modal id?"))}),document.querySelectorAll("[data-modal-show]").forEach(function(a){var e=a.getAttribute("data-modal-show"),r=document.getElementById(e);if(r){var i=N1(e,c);i?a.addEventListener("click",function(){i.object.isHidden&&i.object.show()}):console.error("Modal with id ".concat(e," has not been initialized. Please initialize it using the data-modal-target attribute."))}else console.error("Modal with id ".concat(e," does not exist. Are you sure that the data-modal-show attribute points to the correct modal id?"))}),document.querySelectorAll("[data-modal-hide]").forEach(function(a){var e=a.getAttribute("data-modal-hide"),r=document.getElementById(e);if(r){var i=N1(e,c);i?a.addEventListener("click",function(){i.object.isVisible&&i.object.hide()}):console.error("Modal with id ".concat(e," has not been initialized. Please initialize it using the data-modal-target attribute."))}else console.error("Modal with id ".concat(e," does not exist. Are you sure that the data-modal-hide attribute points to the correct modal id?"))})}typeof window<"u"&&(window.Modal=Q3,window.initModals=k4);var c3=globalThis&&globalThis.__assign||function(){return c3=Object.assign||function(c){for(var a,e=1,r=arguments.length;e<r;e++){a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(c[i]=a[i])}return c},c3.apply(this,arguments)},x2={placement:"left",bodyScrolling:!1,backdrop:!0,edge:!1,edgeOffset:"bottom-[60px]",backdropClasses:"bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30",onShow:function(){},onHide:function(){},onToggle:function(){}},x8=function(){function c(a,e){a===void 0&&(a=null),e===void 0&&(e=x2),this._targetEl=a,this._options=c3(c3({},x2),e),this._visible=!1,this._init()}return c.prototype._init=function(){var a=this;this._targetEl&&(this._targetEl.setAttribute("aria-hidden","true"),this._targetEl.classList.add("transition-transform")),this._getPlacementClasses(this._options.placement).base.map(function(e){a._targetEl.classList.add(e)}),document.addEventListener("keydown",function(e){e.key==="Escape"&&a.isVisible()&&a.hide()})},c.prototype.hide=function(){var a=this;this._options.edge?(this._getPlacementClasses(this._options.placement+"-edge").active.map(function(e){a._targetEl.classList.remove(e)}),this._getPlacementClasses(this._options.placement+"-edge").inactive.map(function(e){a._targetEl.classList.add(e)})):(this._getPlacementClasses(this._options.placement).active.map(function(e){a._targetEl.classList.remove(e)}),this._getPlacementClasses(this._options.placement).inactive.map(function(e){a._targetEl.classList.add(e)})),this._targetEl.setAttribute("aria-hidden","true"),this._targetEl.removeAttribute("aria-modal"),this._targetEl.removeAttribute("role"),this._options.bodyScrolling||document.body.classList.remove("overflow-hidden"),this._options.backdrop&&this._destroyBackdropEl(),this._visible=!1,this._options.onHide(this)},c.prototype.show=function(){var a=this;this._options.edge?(this._getPlacementClasses(this._options.placement+"-edge").active.map(function(e){a._targetEl.classList.add(e)}),this._getPlacementClasses(this._options.placement+"-edge").inactive.map(function(e){a._targetEl.classList.remove(e)})):(this._getPlacementClasses(this._options.placement).active.map(function(e){a._targetEl.classList.add(e)}),this._getPlacementClasses(this._options.placement).inactive.map(function(e){a._targetEl.classList.remove(e)})),this._targetEl.setAttribute("aria-modal","true"),this._targetEl.setAttribute("role","dialog"),this._targetEl.removeAttribute("aria-hidden"),this._options.bodyScrolling||document.body.classList.add("overflow-hidden"),this._options.backdrop&&this._createBackdrop(),this._visible=!0,this._options.onShow(this)},c.prototype.toggle=function(){this.isVisible()?this.hide():this.show()},c.prototype._createBackdrop=function(){var a,e=this;if(!this._visible){var r=document.createElement("div");r.setAttribute("drawer-backdrop",""),(a=r.classList).add.apply(a,this._options.backdropClasses.split(" ")),document.querySelector("body").append(r),r.addEventListener("click",function(){e.hide()})}},c.prototype._destroyBackdropEl=function(){this._visible&&document.querySelector("[drawer-backdrop]").remove()},c.prototype._getPlacementClasses=function(a){switch(a){case"top":return{base:["top-0","left-0","right-0"],active:["transform-none"],inactive:["-translate-y-full"]};case"right":return{base:["right-0","top-0"],active:["transform-none"],inactive:["translate-x-full"]};case"bottom":return{base:["bottom-0","left-0","right-0"],active:["transform-none"],inactive:["translate-y-full"]};case"left":return{base:["left-0","top-0"],active:["transform-none"],inactive:["-translate-x-full"]};case"bottom-edge":return{base:["left-0","top-0"],active:["transform-none"],inactive:["translate-y-full",this._options.edgeOffset]};default:return{base:["left-0","top-0"],active:["transform-none"],inactive:["-translate-x-full"]}}},c.prototype.isHidden=function(){return!this._visible},c.prototype.isVisible=function(){return this._visible},c}(),y1=function(c,a){if(a.some(function(e){return e.id===c}))return a.find(function(e){return e.id===c})};function A4(){var c=[];document.querySelectorAll("[data-drawer-target]").forEach(function(a){var e=a.getAttribute("data-drawer-target"),r=document.getElementById(e);if(r){var i=a.getAttribute("data-drawer-placement"),s=a.getAttribute("data-drawer-body-scrolling"),n=a.getAttribute("data-drawer-backdrop"),t=a.getAttribute("data-drawer-edge"),o=a.getAttribute("data-drawer-edge-offset");y1(e,c)||c.push({id:e,object:new x8(r,{placement:i||x2.placement,bodyScrolling:s?s==="true":x2.bodyScrolling,backdrop:n?n==="true":x2.backdrop,edge:t?t==="true":x2.edge,edgeOffset:o||x2.edgeOffset})})}else console.error("Drawer with id ".concat(e," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))}),document.querySelectorAll("[data-drawer-toggle]").forEach(function(a){var e=a.getAttribute("data-drawer-toggle"),r=document.getElementById(e);if(r){var i=y1(e,c);i?a.addEventListener("click",function(){i.object.toggle()}):console.error("Drawer with id ".concat(e," has not been initialized. Please initialize it using the data-drawer-target attribute."))}else console.error("Drawer with id ".concat(e," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))}),document.querySelectorAll("[data-drawer-dismiss], [data-drawer-hide]").forEach(function(a){var e=a.getAttribute("data-drawer-dismiss")?a.getAttribute("data-drawer-dismiss"):a.getAttribute("data-drawer-hide"),r=document.getElementById(e);if(r){var i=y1(e,c);i?a.addEventListener("click",function(){i.object.hide()}):console.error("Drawer with id ".concat(e," has not been initialized. Please initialize it using the data-drawer-target attribute."))}else console.error("Drawer with id ".concat(e," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id"))}),document.querySelectorAll("[data-drawer-show]").forEach(function(a){var e=a.getAttribute("data-drawer-show"),r=document.getElementById(e);if(r){var i=y1(e,c);i?a.addEventListener("click",function(){i.object.show()}):console.error("Drawer with id ".concat(e," has not been initialized. Please initialize it using the data-drawer-target attribute."))}else console.error("Drawer with id ".concat(e," not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))})}typeof window<"u"&&(window.Drawer=x8,window.initDrawers=A4);var a3=globalThis&&globalThis.__assign||function(){return a3=Object.assign||function(c){for(var a,e=1,r=arguments.length;e<r;e++){a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(c[i]=a[i])}return c},a3.apply(this,arguments)},d0={defaultTabId:null,activeClasses:"text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500",inactiveClasses:"dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300",onShow:function(){}},b8=function(){function c(a,e){a===void 0&&(a=[]),e===void 0&&(e=d0),this._items=a,this._activeTab=e?this.getTab(e.defaultTabId):null,this._options=a3(a3({},d0),e),this._init()}return c.prototype._init=function(){var a=this;this._items.length&&(this._activeTab||this._setActiveTab(this._items[0]),this.show(this._activeTab.id,!0),this._items.map(function(e){e.triggerEl.addEventListener("click",function(){a.show(e.id)})}))},c.prototype.getActiveTab=function(){return this._activeTab},c.prototype._setActiveTab=function(a){this._activeTab=a},c.prototype.getTab=function(a){return this._items.filter(function(e){return e.id===a})[0]},c.prototype.show=function(a,e){var r,i,s=this;e===void 0&&(e=!1);var n=this.getTab(a);n===this._activeTab&&!e||(this._items.map(function(t){var o,f;t!==n&&((o=t.triggerEl.classList).remove.apply(o,s._options.activeClasses.split(" ")),(f=t.triggerEl.classList).add.apply(f,s._options.inactiveClasses.split(" ")),t.targetEl.classList.add("hidden"),t.triggerEl.setAttribute("aria-selected","false"))}),(r=n.triggerEl.classList).add.apply(r,this._options.activeClasses.split(" ")),(i=n.triggerEl.classList).remove.apply(i,this._options.inactiveClasses.split(" ")),n.triggerEl.setAttribute("aria-selected","true"),n.targetEl.classList.remove("hidden"),this._setActiveTab(n),this._options.onShow(this,n))},c}();function T4(){document.querySelectorAll("[data-tabs-toggle]").forEach(function(c){var a=[],e=null;c.querySelectorAll('[role="tab"]').forEach(function(r){var i=r.getAttribute("aria-selected")==="true",s={id:r.getAttribute("data-tabs-target"),triggerEl:r,targetEl:document.querySelector(r.getAttribute("data-tabs-target"))};a.push(s),i&&(e=s.id)}),new b8(a,{defaultTabId:e})})}typeof window<"u"&&(window.Tabs=b8,window.initTabs=T4);var v2=globalThis&&globalThis.__assign||function(){return v2=Object.assign||function(c){for(var a,e=1,r=arguments.length;e<r;e++){a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(c[i]=a[i])}return c},v2.apply(this,arguments)},S1=globalThis&&globalThis.__spreadArray||function(c,a,e){if(e||arguments.length===2)for(var r=0,i=a.length,s;r<i;r++)(s||!(r in a))&&(s||(s=Array.prototype.slice.call(a,0,r)),s[r]=a[r]);return c.concat(s||Array.prototype.slice.call(a))},e3={placement:"top",triggerType:"hover",onShow:function(){},onHide:function(){},onToggle:function(){}},w8=function(){function c(a,e,r){a===void 0&&(a=null),e===void 0&&(e=null),r===void 0&&(r=e3),this._targetEl=a,this._triggerEl=e,this._options=v2(v2({},e3),r),this._popperInstance=this._createPopperInstance(),this._visible=!1,this._init()}return c.prototype._init=function(){this._triggerEl&&this._setupEventListeners()},c.prototype._setupEventListeners=function(){var a=this,e=this._getTriggerEvents();e.showEvents.forEach(function(r){a._triggerEl.addEventListener(r,function(){a.show()})}),e.hideEvents.forEach(function(r){a._triggerEl.addEventListener(r,function(){a.hide()})})},c.prototype._createPopperInstance=function(){return y4(this._triggerEl,this._targetEl,{placement:this._options.placement,modifiers:[{name:"offset",options:{offset:[0,8]}}]})},c.prototype._getTriggerEvents=function(){switch(this._options.triggerType){case"hover":return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]};case"click":return{showEvents:["click","focus"],hideEvents:["focusout","blur"]};case"none":return{showEvents:[],hideEvents:[]};default:return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]}}},c.prototype._setupKeydownListener=function(){var a=this;this._keydownEventListener=function(e){e.key==="Escape"&&a.hide()},document.body.addEventListener("keydown",this._keydownEventListener,!0)},c.prototype._removeKeydownListener=function(){document.body.removeEventListener("keydown",this._keydownEventListener,!0)},c.prototype._setupClickOutsideListener=function(){var a=this;this._clickOutsideEventListener=function(e){a._handleClickOutside(e,a._targetEl)},document.body.addEventListener("click",this._clickOutsideEventListener,!0)},c.prototype._removeClickOutsideListener=function(){document.body.removeEventListener("click",this._clickOutsideEventListener,!0)},c.prototype._handleClickOutside=function(a,e){var r=a.target;r!==e&&!e.contains(r)&&!this._triggerEl.contains(r)&&this.isVisible()&&this.hide()},c.prototype.isVisible=function(){return this._visible},c.prototype.toggle=function(){this.isVisible()?this.hide():this.show()},c.prototype.show=function(){this._targetEl.classList.remove("opacity-0","invisible"),this._targetEl.classList.add("opacity-100","visible"),this._popperInstance.setOptions(function(a){return v2(v2({},a),{modifiers:S1(S1([],a.modifiers,!0),[{name:"eventListeners",enabled:!0}],!1)})}),this._setupClickOutsideListener(),this._setupKeydownListener(),this._popperInstance.update(),this._visible=!0,this._options.onShow(this)},c.prototype.hide=function(){this._targetEl.classList.remove("opacity-100","visible"),this._targetEl.classList.add("opacity-0","invisible"),this._popperInstance.setOptions(function(a){return v2(v2({},a),{modifiers:S1(S1([],a.modifiers,!0),[{name:"eventListeners",enabled:!1}],!1)})}),this._removeClickOutsideListener(),this._removeKeydownListener(),this._visible=!1,this._options.onHide(this)},c}();function E4(){document.querySelectorAll("[data-tooltip-target]").forEach(function(c){var a=c.getAttribute("data-tooltip-target"),e=document.getElementById(a);if(e){var r=c.getAttribute("data-tooltip-trigger"),i=c.getAttribute("data-tooltip-placement");new w8(e,c,{placement:i||e3.placement,triggerType:r||e3.triggerType})}else console.error('The tooltip element with id "'.concat(a,'" does not exist. Please check the data-tooltip-target attribute.'))})}typeof window<"u"&&(window.Tooltip=w8,window.initTooltips=E4);var h2=globalThis&&globalThis.__assign||function(){return h2=Object.assign||function(c){for(var a,e=1,r=arguments.length;e<r;e++){a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(c[i]=a[i])}return c},h2.apply(this,arguments)},k1=globalThis&&globalThis.__spreadArray||function(c,a,e){if(e||arguments.length===2)for(var r=0,i=a.length,s;r<i;r++)(s||!(r in a))&&(s||(s=Array.prototype.slice.call(a,0,r)),s[r]=a[r]);return c.concat(s||Array.prototype.slice.call(a))},J2={placement:"top",offset:10,triggerType:"hover",onShow:function(){},onHide:function(){},onToggle:function(){}},N8=function(){function c(a,e,r){a===void 0&&(a=null),e===void 0&&(e=null),r===void 0&&(r=J2),this._targetEl=a,this._triggerEl=e,this._options=h2(h2({},J2),r),this._popperInstance=this._createPopperInstance(),this._visible=!1,this._init()}return c.prototype._init=function(){this._triggerEl&&this._setupEventListeners()},c.prototype._setupEventListeners=function(){var a=this,e=this._getTriggerEvents();e.showEvents.forEach(function(r){a._triggerEl.addEventListener(r,function(){a.show()}),a._targetEl.addEventListener(r,function(){a.show()})}),e.hideEvents.forEach(function(r){a._triggerEl.addEventListener(r,function(){setTimeout(function(){a._targetEl.matches(":hover")||a.hide()},100)}),a._targetEl.addEventListener(r,function(){setTimeout(function(){a._triggerEl.matches(":hover")||a.hide()},100)})})},c.prototype._createPopperInstance=function(){return y4(this._triggerEl,this._targetEl,{placement:this._options.placement,modifiers:[{name:"offset",options:{offset:[0,this._options.offset]}}]})},c.prototype._getTriggerEvents=function(){switch(this._options.triggerType){case"hover":return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]};case"click":return{showEvents:["click","focus"],hideEvents:["focusout","blur"]};case"none":return{showEvents:[],hideEvents:[]};default:return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]}}},c.prototype._setupKeydownListener=function(){var a=this;this._keydownEventListener=function(e){e.key==="Escape"&&a.hide()},document.body.addEventListener("keydown",this._keydownEventListener,!0)},c.prototype._removeKeydownListener=function(){document.body.removeEventListener("keydown",this._keydownEventListener,!0)},c.prototype._setupClickOutsideListener=function(){var a=this;this._clickOutsideEventListener=function(e){a._handleClickOutside(e,a._targetEl)},document.body.addEventListener("click",this._clickOutsideEventListener,!0)},c.prototype._removeClickOutsideListener=function(){document.body.removeEventListener("click",this._clickOutsideEventListener,!0)},c.prototype._handleClickOutside=function(a,e){var r=a.target;r!==e&&!e.contains(r)&&!this._triggerEl.contains(r)&&this.isVisible()&&this.hide()},c.prototype.isVisible=function(){return this._visible},c.prototype.toggle=function(){this.isVisible()?this.hide():this.show(),this._options.onToggle(this)},c.prototype.show=function(){this._targetEl.classList.remove("opacity-0","invisible"),this._targetEl.classList.add("opacity-100","visible"),this._popperInstance.setOptions(function(a){return h2(h2({},a),{modifiers:k1(k1([],a.modifiers,!0),[{name:"eventListeners",enabled:!0}],!1)})}),this._setupClickOutsideListener(),this._setupKeydownListener(),this._popperInstance.update(),this._visible=!0,this._options.onShow(this)},c.prototype.hide=function(){this._targetEl.classList.remove("opacity-100","visible"),this._targetEl.classList.add("opacity-0","invisible"),this._popperInstance.setOptions(function(a){return h2(h2({},a),{modifiers:k1(k1([],a.modifiers,!0),[{name:"eventListeners",enabled:!1}],!1)})}),this._removeClickOutsideListener(),this._removeKeydownListener(),this._visible=!1,this._options.onHide(this)},c}();function P4(){document.querySelectorAll("[data-popover-target]").forEach(function(c){var a=c.getAttribute("data-popover-target"),e=document.getElementById(a);if(e){var r=c.getAttribute("data-popover-trigger"),i=c.getAttribute("data-popover-placement"),s=c.getAttribute("data-popover-offset");new N8(e,c,{placement:i||J2.placement,offset:s?parseInt(s):J2.offset,triggerType:r||J2.triggerType})}else console.error('The popover element with id "'.concat(a,'" does not exist. Please check the data-popover-target attribute.'))})}typeof window<"u"&&(window.Popover=N8,window.initPopovers=P4);var r3=globalThis&&globalThis.__assign||function(){return r3=Object.assign||function(c){for(var a,e=1,r=arguments.length;e<r;e++){a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(c[i]=a[i])}return c},r3.apply(this,arguments)},Z3={triggerType:"hover",onShow:function(){},onHide:function(){},onToggle:function(){}},y8=function(){function c(a,e,r,i){a===void 0&&(a=null),e===void 0&&(e=null),r===void 0&&(r=null),i===void 0&&(i=Z3),this._parentEl=a,this._triggerEl=e,this._targetEl=r,this._options=r3(r3({},Z3),i),this._visible=!1,this._init()}return c.prototype._init=function(){var a=this;if(this._triggerEl){var e=this._getTriggerEventTypes(this._options.triggerType);e.showEvents.forEach(function(r){a._triggerEl.addEventListener(r,function(){a.show()}),a._targetEl.addEventListener(r,function(){a.show()})}),e.hideEvents.forEach(function(r){a._parentEl.addEventListener(r,function(){a._parentEl.matches(":hover")||a.hide()})})}},c.prototype.hide=function(){this._targetEl.classList.add("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","false"),this._visible=!1,this._options.onHide(this)},c.prototype.show=function(){this._targetEl.classList.remove("hidden"),this._triggerEl&&this._triggerEl.setAttribute("aria-expanded","true"),this._visible=!0,this._options.onShow(this)},c.prototype.toggle=function(){this._visible?this.hide():this.show()},c.prototype.isHidden=function(){return!this._visible},c.prototype.isVisible=function(){return this._visible},c.prototype._getTriggerEventTypes=function(a){switch(a){case"hover":return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]};case"click":return{showEvents:["click","focus"],hideEvents:["focusout","blur"]};case"none":return{showEvents:[],hideEvents:[]};default:return{showEvents:["mouseenter","focus"],hideEvents:["mouseleave","blur"]}}},c}();function _4(){document.querySelectorAll("[data-dial-init]").forEach(function(c){var a=c.querySelector("[data-dial-toggle]");if(a){var e=a.getAttribute("data-dial-toggle"),r=document.getElementById(e);if(r){var i=a.getAttribute("data-dial-trigger");new y8(c,a,r,{triggerType:i||Z3.triggerType})}else console.error("Dial with id ".concat(e," does not exist. Are you sure that the data-dial-toggle attribute points to the correct modal id?"))}else console.error("Dial with id ".concat(c.id," does not have a trigger element. Are you sure that the data-dial-toggle attribute exists?"))})}typeof window<"u"&&(window.Dial=y8,window.initDials=_4);function rt(){z4(),d4(),V4(),M4(),S4(),k4(),A4(),T4(),E4(),P4(),_4()}typeof window<"u"&&(window.initFlowbite=rt);var it=new Ks("load",[z4,d4,V4,M4,S4,k4,A4,T4,E4,P4,_4]);it.init();function V0(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(c,i).enumerable})),e.push.apply(e,r)}return e}function z(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?V0(Object(e),!0).forEach(function(r){_(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):V0(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function i3(c){"@babel/helpers - typeof";return i3=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},i3(c)}function st(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function M0(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function nt(c,a,e){return a&&M0(c.prototype,a),e&&M0(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function _(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function B4(c,a){return ot(c)||ft(c,a)||S8(c,a)||vt()}function v1(c){return tt(c)||lt(c)||S8(c)||mt()}function tt(c){if(Array.isArray(c))return c4(c)}function ot(c){if(Array.isArray(c))return c}function lt(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function ft(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],i=!0,s=!1,n,t;try{for(e=e.call(c);!(i=(n=e.next()).done)&&(r.push(n.value),!(a&&r.length===a));i=!0);}catch(o){s=!0,t=o}finally{try{!i&&e.return!=null&&e.return()}finally{if(s)throw t}}return r}}function S8(c,a){if(c){if(typeof c=="string")return c4(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return c4(c,a)}}function c4(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function mt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var C0=function(){},R4={},k8={},A8=null,T8={mark:C0,measure:C0};try{typeof window<"u"&&(R4=window),typeof document<"u"&&(k8=document),typeof MutationObserver<"u"&&(A8=MutationObserver),typeof performance<"u"&&(T8=performance)}catch{}var ht=R4.navigator||{},L0=ht.userAgent,g0=L0===void 0?"":L0,u2=R4,k=k8,x0=A8,A1=T8;u2.document;var n2=!!k.documentElement&&!!k.head&&typeof k.addEventListener=="function"&&typeof k.createElement=="function",E8=~g0.indexOf("MSIE")||~g0.indexOf("Trident/"),T1,E1,P1,_1,B1,r2="___FONT_AWESOME___",a4=16,P8="fa",_8="svg-inline--fa",S2="data-fa-i2svg",e4="data-fa-pseudo-element",ut="data-fa-pseudo-element-pending",D4="data-prefix",F4="data-icon",b0="fontawesome-i2svg",Ht="async",pt=["HTML","HEAD","STYLE","SCRIPT"],B8=function(){try{return!0}catch{return!1}}(),S="classic",A="sharp",O4=[S,A];function h1(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[S]}})}var r1=h1((T1={},_(T1,S,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),_(T1,A,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),T1)),i1=h1((E1={},_(E1,S,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),_(E1,A,{solid:"fass",regular:"fasr",light:"fasl"}),E1)),s1=h1((P1={},_(P1,S,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),_(P1,A,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),P1)),zt=h1((_1={},_(_1,S,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),_(_1,A,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),_1)),dt=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,R8="fa-layers-text",Vt=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Mt=h1((B1={},_(B1,S,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),_(B1,A,{900:"fass",400:"fasr",300:"fasl"}),B1)),D8=[1,2,3,4,5,6,7,8,9,10],Ct=D8.concat([11,12,13,14,15,16,17,18,19,20]),Lt=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],b2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},n1=new Set;Object.keys(i1[S]).map(n1.add.bind(n1));Object.keys(i1[A]).map(n1.add.bind(n1));var gt=[].concat(O4,v1(n1),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",b2.GROUP,b2.SWAP_OPACITY,b2.PRIMARY,b2.SECONDARY]).concat(D8.map(function(c){return"".concat(c,"x")})).concat(Ct.map(function(c){return"w-".concat(c)})),Q2=u2.FontAwesomeConfig||{};function xt(c){var a=k.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function bt(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}if(k&&typeof k.querySelector=="function"){var wt=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];wt.forEach(function(c){var a=B4(c,2),e=a[0],r=a[1],i=bt(xt(e));i!=null&&(Q2[r]=i)})}var F8={styleDefault:"solid",familyDefault:"classic",cssPrefix:P8,replacementClass:_8,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Q2.familyPrefix&&(Q2.cssPrefix=Q2.familyPrefix);var U2=z(z({},F8),Q2);U2.autoReplaceSvg||(U2.observeMutations=!1);var d={};Object.keys(F8).forEach(function(c){Object.defineProperty(d,c,{enumerable:!0,set:function(e){U2[c]=e,Z2.forEach(function(r){return r(d)})},get:function(){return U2[c]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(a){U2.cssPrefix=a,Z2.forEach(function(e){return e(d)})},get:function(){return U2.cssPrefix}});u2.FontAwesomeConfig=d;var Z2=[];function Nt(c){return Z2.push(c),function(){Z2.splice(Z2.indexOf(c),1)}}var l2=a4,J={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function yt(c){if(!(!c||!n2)){var a=k.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=k.head.childNodes,r=null,i=e.length-1;i>-1;i--){var s=e[i],n=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(r=s)}return k.head.insertBefore(a,r),c}}var St="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function t1(){for(var c=12,a="";c-- >0;)a+=St[Math.random()*62|0];return a}function I2(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function U4(c){return c.classList?I2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function O8(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function kt(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(O8(c[e]),'" ')},"").trim()}function h3(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function q4(c){return c.size!==J.size||c.x!==J.x||c.y!==J.y||c.rotate!==J.rotate||c.flipX||c.flipY}function At(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,i={transform:"translate(".concat(e/2," 256)")},s="translate(".concat(a.x*32,", ").concat(a.y*32,") "),n="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),t="rotate(".concat(a.rotate," 0 0)"),o={transform:"".concat(s," ").concat(n," ").concat(t)},f={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:o,path:f}}function Tt(c){var a=c.transform,e=c.width,r=e===void 0?a4:e,i=c.height,s=i===void 0?a4:i,n=c.startCentered,t=n===void 0?!1:n,o="";return t&&E8?o+="translate(".concat(a.x/l2-r/2,"em, ").concat(a.y/l2-s/2,"em) "):t?o+="translate(calc(-50% + ".concat(a.x/l2,"em), calc(-50% + ").concat(a.y/l2,"em)) "):o+="translate(".concat(a.x/l2,"em, ").concat(a.y/l2,"em) "),o+="scale(".concat(a.size/l2*(a.flipX?-1:1),", ").concat(a.size/l2*(a.flipY?-1:1),") "),o+="rotate(".concat(a.rotate,"deg) "),o}var Et=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function U8(){var c=P8,a=_8,e=d.cssPrefix,r=d.replacementClass,i=Et;if(e!==c||r!==a){var s=new RegExp("\\.".concat(c,"\\-"),"g"),n=new RegExp("\\--".concat(c,"\\-"),"g"),t=new RegExp("\\.".concat(a),"g");i=i.replace(s,".".concat(e,"-")).replace(n,"--".concat(e,"-")).replace(t,".".concat(r))}return i}var w0=!1;function U3(){d.autoAddCss&&!w0&&(yt(U8()),w0=!0)}var Pt={mixout:function(){return{dom:{css:U8,insertCss:U3}}},hooks:function(){return{beforeDOMElementCreation:function(){U3()},beforeI2svg:function(){U3()}}}},i2=u2||{};i2[r2]||(i2[r2]={});i2[r2].styles||(i2[r2].styles={});i2[r2].hooks||(i2[r2].hooks={});i2[r2].shims||(i2[r2].shims=[]);var Y=i2[r2],q8=[],_t=function c(){k.removeEventListener("DOMContentLoaded",c),s3=1,q8.map(function(a){return a()})},s3=!1;n2&&(s3=(k.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(k.readyState),s3||k.addEventListener("DOMContentLoaded",_t));function Bt(c){n2&&(s3?setTimeout(c,0):q8.push(c))}function u1(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,i=c.children,s=i===void 0?[]:i;return typeof c=="string"?O8(c):"<".concat(a," ").concat(kt(r),">").concat(s.map(u1).join(""),"</").concat(a,">")}function N0(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var Rt=function(a,e){return function(r,i,s,n){return a.call(e,r,i,s,n)}},q3=function(a,e,r,i){var s=Object.keys(a),n=s.length,t=i!==void 0?Rt(e,i):e,o,f,l;for(r===void 0?(o=1,l=a[s[0]]):(o=0,l=r);o<n;o++)f=s[o],l=t(l,a[f],f,a);return l};function Dt(c){for(var a=[],e=0,r=c.length;e<r;){var i=c.charCodeAt(e++);if(i>=55296&&i<=56319&&e<r){var s=c.charCodeAt(e++);(s&64512)==56320?a.push(((i&1023)<<10)+(s&1023)+65536):(a.push(i),e--)}else a.push(i)}return a}function r4(c){var a=Dt(c);return a.length===1?a[0].toString(16):null}function Ft(c,a){var e=c.length,r=c.charCodeAt(a),i;return r>=55296&&r<=56319&&e>a+1&&(i=c.charCodeAt(a+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function y0(c){return Object.keys(c).reduce(function(a,e){var r=c[e],i=!!r.icon;return i?a[r.iconName]=r.icon:a[e]=r,a},{})}function i4(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,i=r===void 0?!1:r,s=y0(a);typeof Y.hooks.addPack=="function"&&!i?Y.hooks.addPack(c,y0(a)):Y.styles[c]=z(z({},Y.styles[c]||{}),s),c==="fas"&&i4("fa",a)}var R1,D1,F1,E2=Y.styles,Ot=Y.shims,Ut=(R1={},_(R1,S,Object.values(s1[S])),_(R1,A,Object.values(s1[A])),R1),I4=null,I8={},W8={},j8={},G8={},X8={},qt=(D1={},_(D1,S,Object.keys(r1[S])),_(D1,A,Object.keys(r1[A])),D1);function It(c){return~gt.indexOf(c)}function Wt(c,a){var e=a.split("-"),r=e[0],i=e.slice(1).join("-");return r===c&&i!==""&&!It(i)?i:null}var $8=function(){var a=function(s){return q3(E2,function(n,t,o){return n[o]=q3(t,s,{}),n},{})};I8=a(function(i,s,n){if(s[3]&&(i[s[3]]=n),s[2]){var t=s[2].filter(function(o){return typeof o=="number"});t.forEach(function(o){i[o.toString(16)]=n})}return i}),W8=a(function(i,s,n){if(i[n]=n,s[2]){var t=s[2].filter(function(o){return typeof o=="string"});t.forEach(function(o){i[o]=n})}return i}),X8=a(function(i,s,n){var t=s[2];return i[n]=n,t.forEach(function(o){i[o]=n}),i});var e="far"in E2||d.autoFetchSvg,r=q3(Ot,function(i,s){var n=s[0],t=s[1],o=s[2];return t==="far"&&!e&&(t="fas"),typeof n=="string"&&(i.names[n]={prefix:t,iconName:o}),typeof n=="number"&&(i.unicodes[n.toString(16)]={prefix:t,iconName:o}),i},{names:{},unicodes:{}});j8=r.names,G8=r.unicodes,I4=u3(d.styleDefault,{family:d.familyDefault})};Nt(function(c){I4=u3(c.styleDefault,{family:d.familyDefault})});$8();function W4(c,a){return(I8[c]||{})[a]}function jt(c,a){return(W8[c]||{})[a]}function w2(c,a){return(X8[c]||{})[a]}function Y8(c){return j8[c]||{prefix:null,iconName:null}}function Gt(c){var a=G8[c],e=W4("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function H2(){return I4}var j4=function(){return{prefix:null,iconName:null,rest:[]}};function u3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?S:e,i=r1[r][c],s=i1[r][c]||i1[r][i],n=c in Y.styles?c:null;return s||n||null}var S0=(F1={},_(F1,S,Object.keys(s1[S])),_(F1,A,Object.keys(s1[A])),F1);function H3(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,i=r===void 0?!1:r,s=(a={},_(a,S,"".concat(d.cssPrefix,"-").concat(S)),_(a,A,"".concat(d.cssPrefix,"-").concat(A)),a),n=null,t=S;(c.includes(s[S])||c.some(function(f){return S0[S].includes(f)}))&&(t=S),(c.includes(s[A])||c.some(function(f){return S0[A].includes(f)}))&&(t=A);var o=c.reduce(function(f,l){var m=Wt(d.cssPrefix,l);if(E2[l]?(l=Ut[t].includes(l)?zt[t][l]:l,n=l,f.prefix=l):qt[t].indexOf(l)>-1?(n=l,f.prefix=u3(l,{family:t})):m?f.iconName=m:l!==d.replacementClass&&l!==s[S]&&l!==s[A]&&f.rest.push(l),!i&&f.prefix&&f.iconName){var p=n==="fa"?Y8(f.iconName):{},u=w2(f.prefix,f.iconName);p.prefix&&(n=null),f.iconName=p.iconName||u||f.iconName,f.prefix=p.prefix||f.prefix,f.prefix==="far"&&!E2.far&&E2.fas&&!d.autoFetchSvg&&(f.prefix="fas")}return f},j4());return(c.includes("fa-brands")||c.includes("fab"))&&(o.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(o.prefix="fad"),!o.prefix&&t===A&&(E2.fass||d.autoFetchSvg)&&(o.prefix="fass",o.iconName=w2(o.prefix,o.iconName)||o.iconName),(o.prefix==="fa"||n==="fa")&&(o.prefix=H2()||"fas"),o}var Xt=function(){function c(){st(this,c),this.definitions={}}return nt(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var n=i.reduce(this._pullDefinitions,{});Object.keys(n).forEach(function(t){e.definitions[t]=z(z({},e.definitions[t]||{}),n[t]),i4(t,n[t]);var o=s1[S][t];o&&i4(o,n[t]),$8()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var n=i[s],t=n.prefix,o=n.iconName,f=n.icon,l=f[2];e[t]||(e[t]={}),l.length>0&&l.forEach(function(m){typeof m=="string"&&(e[t][m]=f)}),e[t][o]=f}),e}}]),c}(),k0=[],P2={},_2={},$t=Object.keys(_2);function Yt(c,a){var e=a.mixoutsTo;return k0=c,P2={},Object.keys(_2).forEach(function(r){$t.indexOf(r)===-1&&delete _2[r]}),k0.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(n){typeof i[n]=="function"&&(e[n]=i[n]),i3(i[n])==="object"&&Object.keys(i[n]).forEach(function(t){e[n]||(e[n]={}),e[n][t]=i[n][t]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(n){P2[n]||(P2[n]=[]),P2[n].push(s[n])})}r.provides&&r.provides(_2)}),e}function s4(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),i=2;i<e;i++)r[i-2]=arguments[i];var s=P2[c]||[];return s.forEach(function(n){a=n.apply(null,[a].concat(r))}),a}function k2(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var i=P2[c]||[];i.forEach(function(s){s.apply(null,e)})}function s2(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return _2[c]?_2[c].apply(null,a):void 0}function n4(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||H2();if(a)return a=w2(e,a)||a,N0(K8.definitions,e,a)||N0(Y.styles,e,a)}var K8=new Xt,Kt=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,k2("noAuto")},Jt={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return n2?(k2("beforeI2svg",a),s2("pseudoElements2svg",a),s2("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,Bt(function(){Zt({autoReplaceSvgRoot:e}),k2("watch",a)})}},Qt={icon:function(a){if(a===null)return null;if(i3(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:w2(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=u3(a[0]);return{prefix:r,iconName:w2(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(d.cssPrefix,"-"))>-1||a.match(dt))){var i=H3(a.split(" "),{skipLookups:!0});return{prefix:i.prefix||H2(),iconName:w2(i.prefix,i.iconName)||i.iconName}}if(typeof a=="string"){var s=H2();return{prefix:s,iconName:w2(s,a)||a}}}},q={noAuto:Kt,config:d,dom:Jt,parse:Qt,library:K8,findIconDefinition:n4,toHtml:u1},Zt=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?k:e;(Object.keys(Y.styles).length>0||d.autoFetchSvg)&&n2&&d.autoReplaceSvg&&q.dom.i2svg({node:r})};function p3(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return u1(r)})}}),Object.defineProperty(c,"node",{get:function(){if(n2){var r=k.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function co(c){var a=c.children,e=c.main,r=c.mask,i=c.attributes,s=c.styles,n=c.transform;if(q4(n)&&e.found&&!r.found){var t=e.width,o=e.height,f={x:t/o/2,y:.5};i.style=h3(z(z({},s),{},{"transform-origin":"".concat(f.x+n.x/16,"em ").concat(f.y+n.y/16,"em")}))}return[{tag:"svg",attributes:i,children:a}]}function ao(c){var a=c.prefix,e=c.iconName,r=c.children,i=c.attributes,s=c.symbol,n=s===!0?"".concat(a,"-").concat(d.cssPrefix,"-").concat(e):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:z(z({},i),{},{id:n}),children:r}]}]}function G4(c){var a=c.icons,e=a.main,r=a.mask,i=c.prefix,s=c.iconName,n=c.transform,t=c.symbol,o=c.title,f=c.maskId,l=c.titleId,m=c.extra,p=c.watchable,u=p===void 0?!1:p,h=r.found?r:e,H=h.width,V=h.height,L=i==="fak",M=[d.replacementClass,s?"".concat(d.cssPrefix,"-").concat(s):""].filter(function(y){return m.classes.indexOf(y)===-1}).filter(function(y){return y!==""||!!y}).concat(m.classes).join(" "),g={children:[],attributes:z(z({},m.attributes),{},{"data-prefix":i,"data-icon":s,class:M,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(H," ").concat(V)})},C=L&&!~m.classes.indexOf("fa-fw")?{width:"".concat(H/V*16*.0625,"em")}:{};u&&(g.attributes[S2]=""),o&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(l||t1())},children:[o]}),delete g.attributes.title);var x=z(z({},g),{},{prefix:i,iconName:s,main:e,mask:r,maskId:f,transform:n,symbol:t,styles:z(z({},C),m.styles)}),b=r.found&&e.found?s2("generateAbstractMask",x)||{children:[],attributes:{}}:s2("generateAbstractIcon",x)||{children:[],attributes:{}},N=b.children,T=b.attributes;return x.children=N,x.attributes=T,t?ao(x):co(x)}function A0(c){var a=c.content,e=c.width,r=c.height,i=c.transform,s=c.title,n=c.extra,t=c.watchable,o=t===void 0?!1:t,f=z(z(z({},n.attributes),s?{title:s}:{}),{},{class:n.classes.join(" ")});o&&(f[S2]="");var l=z({},n.styles);q4(i)&&(l.transform=Tt({transform:i,startCentered:!0,width:e,height:r}),l["-webkit-transform"]=l.transform);var m=h3(l);m.length>0&&(f.style=m);var p=[];return p.push({tag:"span",attributes:f,children:[a]}),s&&p.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),p}function eo(c){var a=c.content,e=c.title,r=c.extra,i=z(z(z({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),s=h3(r.styles);s.length>0&&(i.style=s);var n=[];return n.push({tag:"span",attributes:i,children:[a]}),e&&n.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),n}var I3=Y.styles;function t4(c){var a=c[0],e=c[1],r=c.slice(4),i=B4(r,1),s=i[0],n=null;return Array.isArray(s)?n={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(b2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(b2.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(b2.PRIMARY),fill:"currentColor",d:s[1]}}]}:n={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:a,height:e,icon:n}}var ro={found:!1,width:512,height:512};function io(c,a){!B8&&!d.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function o4(c,a){var e=a;return a==="fa"&&d.styleDefault!==null&&(a=H2()),new Promise(function(r,i){if(s2("missingIconAbstract"),e==="fa"){var s=Y8(c)||{};c=s.iconName||c,a=s.prefix||a}if(c&&a&&I3[a]&&I3[a][c]){var n=I3[a][c];return r(t4(n))}io(c,a),r(z(z({},ro),{},{icon:d.showMissingIcons&&c?s2("missingIconAbstract")||{}:{}}))})}var T0=function(){},l4=d.measurePerformance&&A1&&A1.mark&&A1.measure?A1:{mark:T0,measure:T0},$2='FA "6.4.2"',so=function(a){return l4.mark("".concat($2," ").concat(a," begins")),function(){return J8(a)}},J8=function(a){l4.mark("".concat($2," ").concat(a," ends")),l4.measure("".concat($2," ").concat(a),"".concat($2," ").concat(a," begins"),"".concat($2," ").concat(a," ends"))},X4={begin:so,end:J8},j1=function(){};function E0(c){var a=c.getAttribute?c.getAttribute(S2):null;return typeof a=="string"}function no(c){var a=c.getAttribute?c.getAttribute(D4):null,e=c.getAttribute?c.getAttribute(F4):null;return a&&e}function to(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(d.replacementClass)}function oo(){if(d.autoReplaceSvg===!0)return G1.replace;var c=G1[d.autoReplaceSvg];return c||G1.replace}function lo(c){return k.createElementNS("http://www.w3.org/2000/svg",c)}function fo(c){return k.createElement(c)}function Q8(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?lo:fo:e;if(typeof c=="string")return k.createTextNode(c);var i=r(c.tag);Object.keys(c.attributes||[]).forEach(function(n){i.setAttribute(n,c.attributes[n])});var s=c.children||[];return s.forEach(function(n){i.appendChild(Q8(n,{ceFn:r}))}),i}function mo(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var G1={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(i){e.parentNode.insertBefore(Q8(i),e)}),e.getAttribute(S2)===null&&d.keepOriginalSource){var r=k.createComment(mo(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~U4(e).indexOf(d.replacementClass))return G1.replace(a);var i=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(t,o){return o===d.replacementClass||o.match(i)?t.toSvg.push(o):t.toNode.push(o),t},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",s.toNode.join(" "))}var n=r.map(function(t){return u1(t)}).join(`
`);e.setAttribute(S2,""),e.innerHTML=n}};function P0(c){c()}function Z8(c,a){var e=typeof a=="function"?a:j1;if(c.length===0)e();else{var r=P0;d.mutateApproach===Ht&&(r=u2.requestAnimationFrame||P0),r(function(){var i=oo(),s=X4.begin("mutate");c.map(i),s(),e()})}}var $4=!1;function c5(){$4=!0}function f4(){$4=!1}var n3=null;function _0(c){if(x0&&d.observeMutations){var a=c.treeCallback,e=a===void 0?j1:a,r=c.nodeCallback,i=r===void 0?j1:r,s=c.pseudoElementsCallback,n=s===void 0?j1:s,t=c.observeMutationsRoot,o=t===void 0?k:t;n3=new x0(function(f){if(!$4){var l=H2();I2(f).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!E0(m.addedNodes[0])&&(d.searchPseudoElements&&n(m.target),e(m.target)),m.type==="attributes"&&m.target.parentNode&&d.searchPseudoElements&&n(m.target.parentNode),m.type==="attributes"&&E0(m.target)&&~Lt.indexOf(m.attributeName))if(m.attributeName==="class"&&no(m.target)){var p=H3(U4(m.target)),u=p.prefix,h=p.iconName;m.target.setAttribute(D4,u||l),h&&m.target.setAttribute(F4,h)}else to(m.target)&&i(m.target)})}}),n2&&n3.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function vo(){n3&&n3.disconnect()}function ho(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,i){var s=i.split(":"),n=s[0],t=s.slice(1);return n&&t.length>0&&(r[n]=t.join(":").trim()),r},{})),e}function uo(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",i=H3(U4(c));return i.prefix||(i.prefix=H2()),a&&e&&(i.prefix=a,i.iconName=e),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=jt(i.prefix,c.innerText)||W4(i.prefix,r4(c.innerText))),!i.iconName&&d.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=c.firstChild.data)),i}function Ho(c){var a=I2(c.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return d.autoA11y&&(e?a["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(r||t1()):(a["aria-hidden"]="true",a.focusable="false")),a}function po(){return{iconName:null,title:null,titleId:null,prefix:null,transform:J,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function B0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=uo(c),r=e.iconName,i=e.prefix,s=e.rest,n=Ho(c),t=s4("parseNodeAttributes",{},c),o=a.styleParser?ho(c):[];return z({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:i,transform:J,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:o,attributes:n}},t)}var zo=Y.styles;function a5(c){var a=d.autoReplaceSvg==="nest"?B0(c,{styleParser:!1}):B0(c);return~a.extra.classes.indexOf(R8)?s2("generateLayersText",c,a):s2("generateSvgReplacementMutation",c,a)}var p2=new Set;O4.map(function(c){p2.add("fa-".concat(c))});Object.keys(r1[S]).map(p2.add.bind(p2));Object.keys(r1[A]).map(p2.add.bind(p2));p2=v1(p2);function R0(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!n2)return Promise.resolve();var e=k.documentElement.classList,r=function(m){return e.add("".concat(b0,"-").concat(m))},i=function(m){return e.remove("".concat(b0,"-").concat(m))},s=d.autoFetchSvg?p2:O4.map(function(l){return"fa-".concat(l)}).concat(Object.keys(zo));s.includes("fa")||s.push("fa");var n=[".".concat(R8,":not([").concat(S2,"])")].concat(s.map(function(l){return".".concat(l,":not([").concat(S2,"])")})).join(", ");if(n.length===0)return Promise.resolve();var t=[];try{t=I2(c.querySelectorAll(n))}catch{}if(t.length>0)r("pending"),i("complete");else return Promise.resolve();var o=X4.begin("onTree"),f=t.reduce(function(l,m){try{var p=a5(m);p&&l.push(p)}catch(u){B8||u.name==="MissingIcon"&&console.error(u)}return l},[]);return new Promise(function(l,m){Promise.all(f).then(function(p){Z8(p,function(){r("active"),r("complete"),i("pending"),typeof a=="function"&&a(),o(),l()})}).catch(function(p){o(),m(p)})})}function Vo(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;a5(c).then(function(e){e&&Z8([e],a)})}function Mo(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:n4(a||{}),i=e.mask;return i&&(i=(i||{}).icon?i:n4(i||{})),c(r,z(z({},e),{},{mask:i}))}}var Co=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?J:r,s=e.symbol,n=s===void 0?!1:s,t=e.mask,o=t===void 0?null:t,f=e.maskId,l=f===void 0?null:f,m=e.title,p=m===void 0?null:m,u=e.titleId,h=u===void 0?null:u,H=e.classes,V=H===void 0?[]:H,L=e.attributes,M=L===void 0?{}:L,g=e.styles,C=g===void 0?{}:g;if(a){var x=a.prefix,b=a.iconName,N=a.icon;return p3(z({type:"icon"},a),function(){return k2("beforeDOMElementCreation",{iconDefinition:a,params:e}),d.autoA11y&&(p?M["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(h||t1()):(M["aria-hidden"]="true",M.focusable="false")),G4({icons:{main:t4(N),mask:o?t4(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:b,transform:z(z({},J),i),symbol:n,title:p,maskId:l,titleId:h,extra:{attributes:M,styles:C,classes:V}})})}},Lo={mixout:function(){return{icon:Mo(Co)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=R0,e.nodeCallback=Vo,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,i=r===void 0?k:r,s=e.callback,n=s===void 0?function(){}:s;return R0(i,n)},a.generateSvgReplacementMutation=function(e,r){var i=r.iconName,s=r.title,n=r.titleId,t=r.prefix,o=r.transform,f=r.symbol,l=r.mask,m=r.maskId,p=r.extra;return new Promise(function(u,h){Promise.all([o4(i,t),l.iconName?o4(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(H){var V=B4(H,2),L=V[0],M=V[1];u([e,G4({icons:{main:L,mask:M},prefix:t,iconName:i,transform:o,symbol:f,maskId:m,title:s,titleId:n,extra:p,watchable:!0})])}).catch(h)})},a.generateAbstractIcon=function(e){var r=e.children,i=e.attributes,s=e.main,n=e.transform,t=e.styles,o=h3(t);o.length>0&&(i.style=o);var f;return q4(n)&&(f=s2("generateAbstractTransformGrouping",{main:s,transform:n,containerWidth:s.width,iconWidth:s.width})),r.push(f||s.icon),{children:r,attributes:i}}}},go={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return p3({type:"layer"},function(){k2("beforeDOMElementCreation",{assembler:e,params:r});var n=[];return e(function(t){Array.isArray(t)?t.map(function(o){n=n.concat(o.abstract)}):n=n.concat(t.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(v1(s)).join(" ")},children:n}]})}}}},xo={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,n=r.classes,t=n===void 0?[]:n,o=r.attributes,f=o===void 0?{}:o,l=r.styles,m=l===void 0?{}:l;return p3({type:"counter",content:e},function(){return k2("beforeDOMElementCreation",{content:e,params:r}),eo({content:e.toString(),title:s,extra:{attributes:f,styles:m,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(v1(t))}})})}}}},bo={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?J:i,n=r.title,t=n===void 0?null:n,o=r.classes,f=o===void 0?[]:o,l=r.attributes,m=l===void 0?{}:l,p=r.styles,u=p===void 0?{}:p;return p3({type:"text",content:e},function(){return k2("beforeDOMElementCreation",{content:e,params:r}),A0({content:e,transform:z(z({},J),s),title:t,extra:{attributes:m,styles:u,classes:["".concat(d.cssPrefix,"-layers-text")].concat(v1(f))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var i=r.title,s=r.transform,n=r.extra,t=null,o=null;if(E8){var f=parseInt(getComputedStyle(e).fontSize,10),l=e.getBoundingClientRect();t=l.width/f,o=l.height/f}return d.autoA11y&&!i&&(n.attributes["aria-hidden"]="true"),Promise.resolve([e,A0({content:e.innerHTML,width:t,height:o,transform:s,title:i,extra:n,watchable:!0})])}}},wo=new RegExp('"',"ug"),D0=[1105920,1112319];function No(c){var a=c.replace(wo,""),e=Ft(a,0),r=e>=D0[0]&&e<=D0[1],i=a.length===2?a[0]===a[1]:!1;return{value:r4(i?a[0]:a),isSecondary:r||i}}function F0(c,a){var e="".concat(ut).concat(a.replace(":","-"));return new Promise(function(r,i){if(c.getAttribute(e)!==null)return r();var s=I2(c.children),n=s.filter(function(N){return N.getAttribute(e4)===a})[0],t=u2.getComputedStyle(c,a),o=t.getPropertyValue("font-family").match(Vt),f=t.getPropertyValue("font-weight"),l=t.getPropertyValue("content");if(n&&!o)return c.removeChild(n),r();if(o&&l!=="none"&&l!==""){var m=t.getPropertyValue("content"),p=~["Sharp"].indexOf(o[2])?A:S,u=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(o[2])?i1[p][o[2].toLowerCase()]:Mt[p][f],h=No(m),H=h.value,V=h.isSecondary,L=o[0].startsWith("FontAwesome"),M=W4(u,H),g=M;if(L){var C=Gt(H);C.iconName&&C.prefix&&(M=C.iconName,u=C.prefix)}if(M&&!V&&(!n||n.getAttribute(D4)!==u||n.getAttribute(F4)!==g)){c.setAttribute(e,g),n&&c.removeChild(n);var x=po(),b=x.extra;b.attributes[e4]=a,o4(M,u).then(function(N){var T=G4(z(z({},x),{},{icons:{main:N,mask:j4()},prefix:u,iconName:g,extra:b,watchable:!0})),y=k.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(y,c.firstChild):c.appendChild(y),y.outerHTML=T.map(function(E){return u1(E)}).join(`