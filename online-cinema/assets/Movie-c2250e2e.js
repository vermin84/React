import{u as X,c as Pe,d as be,e as _e,f as ee,R as U,a as j,r as oe,j as y,k as we,h as Se,H as F,L as ie}from"./index-f9467390.js";import{A as Ee}from"./ActorCard-37112683.js";import{G as se}from"./GridContainer-c82f3b7f.js";import{M as Ce}from"./MovieCard-c777be8b.js";import"./useFetchActorInfo-7b887b7d.js";function Ae(r){const{data:e,isLoading:t}=X(["search movie actors",r],()=>Pe(r));return{data:e,isLoading:t}}function xe(r){const{data:e,isLoading:t}=X(["search movie By Id",r],()=>be(r));return{data:e,isLoading:t}}function Oe(r){const{data:e,isLoading:t}=X(["search similar movies",r],()=>_e(r));return{data:e,isLoading:t}}var fe={exports:{}},Te="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Ie=Te,Re=Ie;function pe(){}function ye(){}ye.resetWarningCache=pe;var Ne=function(){function r(a,o,n,d,c,l){if(l!==Re){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}r.isRequired=r;function e(){return r}var t={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:e,element:r,elementType:r,instanceOf:e,node:r,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:ye,resetWarningCache:pe};return t.PropTypes=t,t};fe.exports=Ne();var Ve=fe.exports;const h=ee(Ve);var De=function r(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var a,o,n;if(Array.isArray(e)){if(a=e.length,a!=t.length)return!1;for(o=a;o--!==0;)if(!r(e[o],t[o]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(n=Object.keys(e),a=n.length,a!==Object.keys(t).length)return!1;for(o=a;o--!==0;)if(!Object.prototype.hasOwnProperty.call(t,n[o]))return!1;for(o=a;o--!==0;){var d=n[o];if(!r(e[d],t[d]))return!1}return!0}return e!==e&&t!==t};const je=ee(De);var B={exports:{}},he;/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/he=function(){var r={},e={};return r.on=function(t,a){var o={name:t,handler:a};return e[t]=e[t]||[],e[t].unshift(o),o},r.off=function(t){var a=e[t.name].indexOf(t);a!==-1&&e[t.name].splice(a,1)},r.trigger=function(t,a){var o=e[t],n;if(o)for(n=o.length;n--;)o[n].handler(a)},r};var Me=he,G={exports:{}},ke=function(e,t,a){var o=document.head||document.getElementsByTagName("head")[0],n=document.createElement("script");typeof t=="function"&&(a=t,t={}),t=t||{},a=a||function(){},n.type=t.type||"text/javascript",n.charset=t.charset||"utf8",n.async="async"in t?!!t.async:!0,n.src=e,t.attrs&&Le(n,t.attrs),t.text&&(n.text=""+t.text);var d="onload"in n?le:Ye;d(n,a),n.onload||le(n,a),o.appendChild(n)};function Le(r,e){for(var t in e)r.setAttribute(t,e[t])}function le(r,e){r.onload=function(){this.onerror=this.onload=null,e(null,r)},r.onerror=function(){this.onerror=this.onload=null,e(new Error("Failed to load "+this.src),r)}}function Ye(r,e){r.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,e(null,r))}}(function(r,e){Object.defineProperty(e,"__esModule",{value:!0});var t=ke,a=o(t);function o(n){return n&&n.__esModule?n:{default:n}}e.default=function(n){var d=new Promise(function(c){if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function){c(window.YT);return}else{var l=window.location.protocol==="http:"?"http:":"https:";(0,a.default)(l+"//www.youtube.com/iframe_api",function(s){s&&n.trigger("error",s)})}var i=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){i&&i(),c(window.YT)}});return d},r.exports=e.default})(G,G.exports);var Ue=G.exports,q={exports:{}},Q={exports:{}},$={exports:{}},R=1e3,N=R*60,V=N*60,D=V*24,Fe=D*365.25,Be=function(r,e){e=e||{};var t=typeof r;if(t==="string"&&r.length>0)return Ge(r);if(t==="number"&&isNaN(r)===!1)return e.long?Qe(r):qe(r);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(r))};function Ge(r){if(r=String(r),!(r.length>100)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(r);if(e){var t=parseFloat(e[1]),a=(e[2]||"ms").toLowerCase();switch(a){case"years":case"year":case"yrs":case"yr":case"y":return t*Fe;case"days":case"day":case"d":return t*D;case"hours":case"hour":case"hrs":case"hr":case"h":return t*V;case"minutes":case"minute":case"mins":case"min":case"m":return t*N;case"seconds":case"second":case"secs":case"sec":case"s":return t*R;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return t;default:return}}}}function qe(r){return r>=D?Math.round(r/D)+"d":r>=V?Math.round(r/V)+"h":r>=N?Math.round(r/N)+"m":r>=R?Math.round(r/R)+"s":r+"ms"}function Qe(r){return k(r,D,"day")||k(r,V,"hour")||k(r,N,"minute")||k(r,R,"second")||r+" ms"}function k(r,e,t){if(!(r<e))return r<e*1.5?Math.floor(r/e)+" "+t:Math.ceil(r/e)+" "+t+"s"}(function(r,e){e=r.exports=o.debug=o.default=o,e.coerce=l,e.disable=d,e.enable=n,e.enabled=c,e.humanize=Be,e.names=[],e.skips=[],e.formatters={};var t;function a(i){var s=0,u;for(u in i)s=(s<<5)-s+i.charCodeAt(u),s|=0;return e.colors[Math.abs(s)%e.colors.length]}function o(i){function s(){if(s.enabled){var u=s,p=+new Date,v=p-(t||p);u.diff=v,u.prev=t,u.curr=p,t=p;for(var f=new Array(arguments.length),m=0;m<f.length;m++)f[m]=arguments[m];f[0]=e.coerce(f[0]),typeof f[0]!="string"&&f.unshift("%O");var g=0;f[0]=f[0].replace(/%([a-zA-Z%])/g,function(P,w){if(P==="%%")return P;g++;var _=e.formatters[w];if(typeof _=="function"){var O=f[g];P=_.call(u,O),f.splice(g,1),g--}return P}),e.formatArgs.call(u,f);var b=s.log||e.log||console.log.bind(console);b.apply(u,f)}}return s.namespace=i,s.enabled=e.enabled(i),s.useColors=e.useColors(),s.color=a(i),typeof e.init=="function"&&e.init(s),s}function n(i){e.save(i),e.names=[],e.skips=[];for(var s=(typeof i=="string"?i:"").split(/[\s,]+/),u=s.length,p=0;p<u;p++)s[p]&&(i=s[p].replace(/\*/g,".*?"),i[0]==="-"?e.skips.push(new RegExp("^"+i.substr(1)+"$")):e.names.push(new RegExp("^"+i+"$")))}function d(){e.enable("")}function c(i){var s,u;for(s=0,u=e.skips.length;s<u;s++)if(e.skips[s].test(i))return!1;for(s=0,u=e.names.length;s<u;s++)if(e.names[s].test(i))return!0;return!1}function l(i){return i instanceof Error?i.stack||i.message:i}})($,$.exports);var $e=$.exports;(function(r,e){e=r.exports=$e,e.log=o,e.formatArgs=a,e.save=n,e.load=d,e.useColors=t,e.storage=typeof chrome<"u"&&typeof chrome.storage<"u"?chrome.storage.local:c(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function t(){return typeof window<"u"&&window.process&&window.process.type==="renderer"?!0:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}e.formatters.j=function(l){try{return JSON.stringify(l)}catch(i){return"[UnexpectedJSONParseError]: "+i.message}};function a(l){var i=this.useColors;if(l[0]=(i?"%c":"")+this.namespace+(i?" %c":" ")+l[0]+(i?"%c ":" ")+"+"+e.humanize(this.diff),!!i){var s="color: "+this.color;l.splice(1,0,s,"color: inherit");var u=0,p=0;l[0].replace(/%[a-zA-Z%]/g,function(v){v!=="%%"&&(u++,v==="%c"&&(p=u))}),l.splice(p,0,s)}}function o(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function n(l){try{l==null?e.storage.removeItem("debug"):e.storage.debug=l}catch{}}function d(){var l;try{l=e.storage.debug}catch{}return!l&&typeof process<"u"&&"env"in process&&(l={}.DEBUG),l}e.enable(d());function c(){try{return window.localStorage}catch{}}})(Q,Q.exports);var ze=Q.exports,z={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe"],r.exports=e.default})(z,z.exports);var We=z.exports,W={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],r.exports=e.default})(W,W.exports);var He=W.exports,H={exports:{}},J={exports:{}};(function(r,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},r.exports=e.default})(J,J.exports);var Je=J.exports;(function(r,e){Object.defineProperty(e,"__esModule",{value:!0});var t=Je,a=o(t);function o(n){return n&&n.__esModule?n:{default:n}}e.default={pauseVideo:{acceptableStates:[a.default.ENDED,a.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[a.default.ENDED,a.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[a.default.ENDED,a.default.PLAYING,a.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},r.exports=e.default})(H,H.exports);var Ze=H.exports;(function(r,e){Object.defineProperty(e,"__esModule",{value:!0});var t=ze,a=s(t),o=We,n=s(o),d=He,c=s(d),l=Ze,i=s(l);function s(v){return v&&v.__esModule?v:{default:v}}var u=(0,a.default)("youtube-player"),p={};p.proxyEvents=function(v){var f={},m=function(T){var E="on"+T.slice(0,1).toUpperCase()+T.slice(1);f[E]=function(A){u('event "%s"',E,A),v.trigger(T,A)}},g=!0,b=!1,P=void 0;try{for(var w=c.default[Symbol.iterator](),_;!(g=(_=w.next()).done);g=!0){var O=_.value;m(O)}}catch(M){b=!0,P=M}finally{try{!g&&w.return&&w.return()}finally{if(b)throw P}}return f},p.promisifyPlayer=function(v){var f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,m={},g=function(E){f&&i.default[E]?m[E]=function(){for(var A=arguments.length,I=Array(A),C=0;C<A;C++)I[C]=arguments[C];return v.then(function(S){var x=i.default[E],ve=S.getPlayerState(),te=S[E].apply(S,I);return x.stateChangeRequired||Array.isArray(x.acceptableStates)&&x.acceptableStates.indexOf(ve)===-1?new Promise(function(re){var ge=function ae(){var me=S.getPlayerState(),ne=void 0;typeof x.timeout=="number"&&(ne=setTimeout(function(){S.removeEventListener("onStateChange",ae),re()},x.timeout)),Array.isArray(x.acceptableStates)&&x.acceptableStates.indexOf(me)!==-1&&(S.removeEventListener("onStateChange",ae),clearTimeout(ne),re())};S.addEventListener("onStateChange",ge)}).then(function(){return te}):te})}:m[E]=function(){for(var A=arguments.length,I=Array(A),C=0;C<A;C++)I[C]=arguments[C];return v.then(function(S){return S[E].apply(S,I)})}},b=!0,P=!1,w=void 0;try{for(var _=n.default[Symbol.iterator](),O;!(b=(O=_.next()).done);b=!0){var M=O.value;g(M)}}catch(T){P=!0,w=T}finally{try{!b&&_.return&&_.return()}finally{if(P)throw w}}return m},e.default=p,r.exports=e.default})(q,q.exports);var Ke=q.exports;(function(r,e){Object.defineProperty(e,"__esModule",{value:!0});var t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},a=Me,o=i(a),n=Ue,d=i(n),c=Ke,l=i(c);function i(u){return u&&u.__esModule?u:{default:u}}var s=void 0;e.default=function(u){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,f=(0,o.default)();if(s||(s=(0,d.default)(f)),p.events)throw new Error("Event handlers cannot be overwritten.");if(typeof u=="string"&&!document.getElementById(u))throw new Error('Element "'+u+'" does not exist.');p.events=l.default.proxyEvents(f);var m=new Promise(function(b){if((typeof u>"u"?"undefined":t(u))==="object"&&u.playVideo instanceof Function){var P=u;b(P)}else s.then(function(w){var _=new w.Player(u,p);return f.on("ready",function(){b(_)}),null})}),g=l.default.promisifyPlayer(m,v);return g.on=f.on,g.off=f.off,g},r.exports=e.default})(B,B.exports);var Xe=B.exports;const et=ee(Xe);var tt=Object.defineProperty,rt=Object.defineProperties,at=Object.getOwnPropertyDescriptors,ue=Object.getOwnPropertySymbols,nt=Object.prototype.hasOwnProperty,ot=Object.prototype.propertyIsEnumerable,de=(r,e,t)=>e in r?tt(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Z=(r,e)=>{for(var t in e||(e={}))nt.call(e,t)&&de(r,t,e[t]);if(ue)for(var t of ue(e))ot.call(e,t)&&de(r,t,e[t]);return r},K=(r,e)=>rt(r,at(e)),it=(r,e,t)=>new Promise((a,o)=>{var n=l=>{try{c(t.next(l))}catch(i){o(i)}},d=l=>{try{c(t.throw(l))}catch(i){o(i)}},c=l=>l.done?a(l.value):Promise.resolve(l.value).then(n,d);c((t=t.apply(r,e)).next())});function st(r,e){var t,a;if(r.videoId!==e.videoId)return!0;const o=((t=r.opts)==null?void 0:t.playerVars)||{},n=((a=e.opts)==null?void 0:a.playerVars)||{};return o.start!==n.start||o.end!==n.end}function ce(r={}){return K(Z({},r),{height:0,width:0,playerVars:K(Z({},r.playerVars),{autoplay:0,start:0,end:0})})}function lt(r,e){return r.videoId!==e.videoId||!je(ce(r.opts),ce(e.opts))}function ut(r,e){var t,a,o,n;return r.id!==e.id||r.className!==e.className||((t=r.opts)==null?void 0:t.width)!==((a=e.opts)==null?void 0:a.width)||((o=r.opts)==null?void 0:o.height)!==((n=e.opts)==null?void 0:n.height)||r.iframeClassName!==e.iframeClassName||r.title!==e.title}var dt={videoId:"",id:"",className:"",iframeClassName:"",style:{},title:"",loading:void 0,opts:{},onReady:()=>{},onError:()=>{},onPlay:()=>{},onPause:()=>{},onEnd:()=>{},onStateChange:()=>{},onPlaybackRateChange:()=>{},onPlaybackQualityChange:()=>{}},ct={videoId:h.string,id:h.string,className:h.string,iframeClassName:h.string,style:h.object,title:h.string,loading:h.oneOf(["lazy","eager"]),opts:h.objectOf(h.any),onReady:h.func,onError:h.func,onPlay:h.func,onPause:h.func,onEnd:h.func,onStateChange:h.func,onPlaybackRateChange:h.func,onPlaybackQualityChange:h.func},L=class extends U.Component{constructor(r){super(r),this.destroyPlayerPromise=void 0,this.onPlayerReady=e=>{var t,a;return(a=(t=this.props).onReady)==null?void 0:a.call(t,e)},this.onPlayerError=e=>{var t,a;return(a=(t=this.props).onError)==null?void 0:a.call(t,e)},this.onPlayerStateChange=e=>{var t,a,o,n,d,c,l,i;switch((a=(t=this.props).onStateChange)==null||a.call(t,e),e.data){case L.PlayerState.ENDED:(n=(o=this.props).onEnd)==null||n.call(o,e);break;case L.PlayerState.PLAYING:(c=(d=this.props).onPlay)==null||c.call(d,e);break;case L.PlayerState.PAUSED:(i=(l=this.props).onPause)==null||i.call(l,e);break}},this.onPlayerPlaybackRateChange=e=>{var t,a;return(a=(t=this.props).onPlaybackRateChange)==null?void 0:a.call(t,e)},this.onPlayerPlaybackQualityChange=e=>{var t,a;return(a=(t=this.props).onPlaybackQualityChange)==null?void 0:a.call(t,e)},this.destroyPlayer=()=>this.internalPlayer?(this.destroyPlayerPromise=this.internalPlayer.destroy().then(()=>this.destroyPlayerPromise=void 0),this.destroyPlayerPromise):Promise.resolve(),this.createPlayer=()=>{if(typeof document>"u")return;if(this.destroyPlayerPromise){this.destroyPlayerPromise.then(this.createPlayer);return}const e=K(Z({},this.props.opts),{videoId:this.props.videoId});this.internalPlayer=et(this.container,e),this.internalPlayer.on("ready",this.onPlayerReady),this.internalPlayer.on("error",this.onPlayerError),this.internalPlayer.on("stateChange",this.onPlayerStateChange),this.internalPlayer.on("playbackRateChange",this.onPlayerPlaybackRateChange),this.internalPlayer.on("playbackQualityChange",this.onPlayerPlaybackQualityChange),(this.props.title||this.props.loading)&&this.internalPlayer.getIframe().then(t=>{this.props.title&&t.setAttribute("title",this.props.title),this.props.loading&&t.setAttribute("loading",this.props.loading)})},this.resetPlayer=()=>this.destroyPlayer().then(this.createPlayer),this.updatePlayer=()=>{var e;(e=this.internalPlayer)==null||e.getIframe().then(t=>{this.props.id?t.setAttribute("id",this.props.id):t.removeAttribute("id"),this.props.iframeClassName?t.setAttribute("class",this.props.iframeClassName):t.removeAttribute("class"),this.props.opts&&this.props.opts.width?t.setAttribute("width",this.props.opts.width.toString()):t.removeAttribute("width"),this.props.opts&&this.props.opts.height?t.setAttribute("height",this.props.opts.height.toString()):t.removeAttribute("height"),this.props.title?t.setAttribute("title",this.props.title):t.setAttribute("title","YouTube video player"),this.props.loading?t.setAttribute("loading",this.props.loading):t.removeAttribute("loading")})},this.getInternalPlayer=()=>this.internalPlayer,this.updateVideo=()=>{var e,t,a,o;if(typeof this.props.videoId>"u"||this.props.videoId===null){(e=this.internalPlayer)==null||e.stopVideo();return}let n=!1;const d={videoId:this.props.videoId};if((t=this.props.opts)!=null&&t.playerVars&&(n=this.props.opts.playerVars.autoplay===1,"start"in this.props.opts.playerVars&&(d.startSeconds=this.props.opts.playerVars.start),"end"in this.props.opts.playerVars&&(d.endSeconds=this.props.opts.playerVars.end)),n){(a=this.internalPlayer)==null||a.loadVideoById(d);return}(o=this.internalPlayer)==null||o.cueVideoById(d)},this.refContainer=e=>{this.container=e},this.container=null,this.internalPlayer=null}componentDidMount(){this.createPlayer()}componentDidUpdate(r){return it(this,null,function*(){ut(r,this.props)&&this.updatePlayer(),lt(r,this.props)&&(yield this.resetPlayer()),st(r,this.props)&&this.updateVideo()})}componentWillUnmount(){this.destroyPlayer()}render(){return U.createElement("div",{className:this.props.className,style:this.props.style},U.createElement("div",{id:this.props.id,className:this.props.iframeClassName,ref:this.refContainer}))}},Y=L;Y.propTypes=ct;Y.defaultProps=dt;Y.PlayerState={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5};var ft=Y;const pt=j.div`
  width: 100%;
  padding-bottom: 56.25%;
  position: relative;

  & iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;function yt({videoId:r}){const[e,t]=oe.useState("");return oe.useEffect(()=>{async function a(){const o=`https://api.themoviedb.org/3/movie/${r}/videos?api_key=${we}`,c=(await(await fetch(o)).json()).results.find(l=>l.type==="Trailer"&&l.site==="YouTube");c&&t(c.key)}a()},[r]),e?y.jsx(pt,{children:y.jsx(ft,{videoId:e})}):y.jsx("p",{children:"Трейлер не найден"})}const ht=j.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  padding: 2rem 1.5rem;
  flex-wrap: wrap;
`,vt=j.div`
  flex: 1 1 50%;
  font-size: 1rem;
  align-self: start;
  line-height: 1.6;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`,gt=j.div`
  flex: 0 0 40%;

  & img {
    width: 100%;
  }

  @media (max-width: 1150px) {
    flex: 0 0 80%;
  }
`,mt=j.div`
  display: grid;
  gap: 3rem;
  @media (max-width: 770px) {
    gap: 1rem;
  }
`;function Et(){const{movieId:r}=Se(),{data:e,isLoading:t}=xe(r),{data:a,isLoading:o}=Ae(r),{data:n,isLOading:d}=Oe(r),c="https://image.tmdb.org/t/p/";if(t)return y.jsx("div",{children:"Loading..."});const{title:l,poster_path:i}=e;return y.jsxs(mt,{children:[y.jsx(F,{as:"h1",children:l}),y.jsxs(ht,{children:[y.jsx(gt,{children:y.jsx("img",{src:`${c}w400${i}`,alt:"poster"})}),y.jsxs(vt,{children:[y.jsx("p",{children:e.overview}),y.jsx(yt,{videoId:r})]})]}),y.jsx(F,{as:"h2",children:"Actors"}),y.jsx(se,{children:o?y.jsx(ie,{}):a.map(s=>y.jsx(Ee,{actor:s},s.name))}),y.jsx(F,{as:"h2",children:"Similar Movies"}),n&&y.jsx(se,{children:d?y.jsx(ie,{}):n.map(s=>y.jsx(Ce,{movie:s},s.id))})]})}export{Et as default};
