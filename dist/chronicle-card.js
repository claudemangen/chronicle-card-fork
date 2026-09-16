function e(e,t,i,o){var r,a=arguments.length,n=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(n=(a<3?r(n):a>3?r(t,i,n):r(t,i))||n);return a>3&&n&&Object.defineProperty(t,i,n),n}"function"==typeof SuppressedError&&SuppressedError;const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new WeakMap;let a=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=r.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(t,e))}return e}toString(){return this.cssText}};const n=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new a(i,e,o)},s=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new a("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:c,defineProperty:l,getOwnPropertyDescriptor:d,getOwnPropertyNames:h,getOwnPropertySymbols:u,getPrototypeOf:p}=Object,g=globalThis,m=g.trustedTypes,v=m?m.emptyScript:"",f=g.reactiveElementPolyfillSupport,y=(e,t)=>e,b={toAttribute(e,t){switch(t){case Boolean:e=e?v:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},_=(e,t)=>!c(e,t),x={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:_};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;let w=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=x){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&l(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:r}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){const a=o?.call(this);r?.call(this,t),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??x}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const e=p(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const e=this.properties,t=[...h(e),...u(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(s(e))}else void 0!==e&&t.push(s(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,o)=>{if(i)e.adoptedStyleSheets=o.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of o){const o=document.createElement("style"),r=t.litNonce;void 0!==r&&o.setAttribute("nonce",r),o.textContent=i.cssText,e.appendChild(o)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(t,i.type);this._$Em=e,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=i.getPropertyOptions(o),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:b;this._$Em=o;const a=r.fromAttribute(t,e.type);this[o]=a??this._$Ej?.get(o)??a,this._$Em=null}}requestUpdate(e,t,i,o=!1,r){if(void 0!==e){const a=this.constructor;if(!1===o&&(r=this[e]),i??=a.getPropertyOptions(e),!((i.hasChanged??_)(r,t)||i.useDefault&&i.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:o,wrapped:r},a){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==r||void 0!==a)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,i,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};w.elementStyles=[],w.shadowRootOptions={mode:"open"},w[y("elementProperties")]=new Map,w[y("finalized")]=new Map,f?.({ReactiveElement:w}),(g.reactiveElementVersions??=[]).push("2.1.2");const $=globalThis,k=e=>e,S=$.trustedTypes,E=S?S.createPolicy("lit-html",{createHTML:e=>e}):void 0,A="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,z="?"+C,T=`<${z}>`,O=document,D=()=>O.createComment(""),I=e=>null===e||"object"!=typeof e&&"function"!=typeof e,F=Array.isArray,M="[ \t\n\f\r]",j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,P=/>/g,L=RegExp(`>|${M}(?:([^\\s"'>=/]+)(${M}*=${M}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),H=/'/g,U=/"/g,R=/^(?:script|style|textarea|title)$/i,G=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),B=Symbol.for("lit-noChange"),W=Symbol.for("lit-nothing"),K=new WeakMap,V=O.createTreeWalker(O,129);function J(e,t){if(!F(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==E?E.createHTML(t):t}const q=(e,t)=>{const i=e.length-1,o=[];let r,a=2===t?"<svg>":3===t?"<math>":"",n=j;for(let t=0;t<i;t++){const i=e[t];let s,c,l=-1,d=0;for(;d<i.length&&(n.lastIndex=d,c=n.exec(i),null!==c);)d=n.lastIndex,n===j?"!--"===c[1]?n=N:void 0!==c[1]?n=P:void 0!==c[2]?(R.test(c[2])&&(r=RegExp("</"+c[2],"g")),n=L):void 0!==c[3]&&(n=L):n===L?">"===c[0]?(n=r??j,l=-1):void 0===c[1]?l=-2:(l=n.lastIndex-c[2].length,s=c[1],n=void 0===c[3]?L:'"'===c[3]?U:H):n===U||n===H?n=L:n===N||n===P?n=j:(n=L,r=void 0);const h=n===L&&e[t+1].startsWith("/>")?" ":"";a+=n===j?i+T:l>=0?(o.push(s),i.slice(0,l)+A+i.slice(l)+C+h):i+C+(-2===l?t:h)}return[J(e,a+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class Y{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let r=0,a=0;const n=e.length-1,s=this.parts,[c,l]=q(e,t);if(this.el=Y.createElement(c,i),V.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=V.nextNode())&&s.length<n;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(A)){const t=l[a++],i=o.getAttribute(e).split(C),n=/([.?@])?(.*)/.exec(t);s.push({type:1,index:r,name:n[2],strings:i,ctor:"."===n[1]?te:"?"===n[1]?ie:"@"===n[1]?oe:ee}),o.removeAttribute(e)}else e.startsWith(C)&&(s.push({type:6,index:r}),o.removeAttribute(e));if(R.test(o.tagName)){const e=o.textContent.split(C),t=e.length-1;if(t>0){o.textContent=S?S.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],D()),V.nextNode(),s.push({type:2,index:++r});o.append(e[t],D())}}}else if(8===o.nodeType)if(o.data===z)s.push({type:2,index:r});else{let e=-1;for(;-1!==(e=o.data.indexOf(C,e+1));)s.push({type:7,index:r}),e+=C.length-1}r++}}static createElement(e,t){const i=O.createElement("template");return i.innerHTML=e,i}}function Q(e,t,i=e,o){if(t===B)return t;let r=void 0!==o?i._$Co?.[o]:i._$Cl;const a=I(t)?void 0:t._$litDirective$;return r?.constructor!==a&&(r?._$AO?.(!1),void 0===a?r=void 0:(r=new a(e),r._$AT(e,i,o)),void 0!==o?(i._$Co??=[])[o]=r:i._$Cl=r),void 0!==r&&(t=Q(e,r._$AS(e,t.values),r,o)),t}class X{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??O).importNode(t,!0);V.currentNode=o;let r=V.nextNode(),a=0,n=0,s=i[0];for(;void 0!==s;){if(a===s.index){let t;2===s.type?t=new Z(r,r.nextSibling,this,e):1===s.type?t=new s.ctor(r,s.name,s.strings,this,e):6===s.type&&(t=new re(r,this,e)),this._$AV.push(t),s=i[++n]}a!==s?.index&&(r=V.nextNode(),a++)}return V.currentNode=O,o}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class Z{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=W,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Q(this,e,t),I(e)?e===W||null==e||""===e?(this._$AH!==W&&this._$AR(),this._$AH=W):e!==this._$AH&&e!==B&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>F(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==W&&I(this._$AH)?this._$AA.nextSibling.data=e:this.T(O.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Y.createElement(J(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new X(o,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=K.get(e.strings);return void 0===t&&K.set(e.strings,t=new Y(e)),t}k(e){F(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const r of e)o===t.length?t.push(i=new Z(this.O(D()),this.O(D()),this,this.options)):i=t[o],i._$AI(r),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=k(e).nextSibling;k(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,r){this.type=1,this._$AH=W,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=W}_$AI(e,t=this,i,o){const r=this.strings;let a=!1;if(void 0===r)e=Q(this,e,t,0),a=!I(e)||e!==this._$AH&&e!==B,a&&(this._$AH=e);else{const o=e;let n,s;for(e=r[0],n=0;n<r.length-1;n++)s=Q(this,o[i+n],t,n),s===B&&(s=this._$AH[n]),a||=!I(s)||s!==this._$AH[n],s===W?e=W:e!==W&&(e+=(s??"")+r[n+1]),this._$AH[n]=s}a&&!o&&this.j(e)}j(e){e===W?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===W?void 0:e}}class ie extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==W)}}class oe extends ee{constructor(e,t,i,o,r){super(e,t,i,o,r),this.type=5}_$AI(e,t=this){if((e=Q(this,e,t,0)??W)===B)return;const i=this._$AH,o=e===W&&i!==W||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==W&&(i===W||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class re{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Q(this,e)}}const ae=$.litHtmlPolyfillSupport;ae?.(Y,Z),($.litHtmlVersions??=[]).push("3.3.2");const ne=globalThis;class se extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const o=i?.renderBefore??t;let r=o._$litPart$;if(void 0===r){const e=i?.renderBefore??null;o._$litPart$=r=new Z(t.insertBefore(D(),e),e,void 0,i??{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return B}}se._$litElement$=!0,se.finalized=!0,ne.litElementHydrateSupport?.({LitElement:se});const ce=ne.litElementPolyfillSupport;ce?.({LitElement:se}),(ne.litElementVersions??=[]).push("4.2.2");const le=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},de={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:_},he=(e=de,t,i)=>{const{kind:o,metadata:r}=i;let a=globalThis.litPropertyMetadata.get(r);if(void 0===a&&globalThis.litPropertyMetadata.set(r,a=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),a.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const r=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,r,e,!0,i)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){const{name:o}=i;return function(i){const r=this[o];t.call(this,i),this.requestUpdate(o,r,e,!0,i)}}throw Error("Unsupported decorator location: "+o)};function ue(e){return(t,i)=>"object"==typeof i?he(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function pe(e){return ue({...e,state:!0,attribute:!1})}function ge(e,t){return(t,i,o)=>((e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i))(t,i,{get(){return(t=>t.renderRoot?.querySelector(e)??null)(this)}})}const me={layout:"vertical",show_layout_toggle:!0,max_events:50,days_back:7,time_format:"24h",show_header:!0,filters:{categories:[],severities:[],sources:[],entities:[],search:"",exclude_categories:[],exclude_severities:[],exclude_sources:[],exclude_entities:[],exclude_search:""},grouping:{enabled:!0,window_seconds:120,min_group_size:3,group_by:"category"},appearance:{card_height:"400px",compact:!1,show_images:!0,show_icons:!0,show_severity_badge:!0,show_source_badge:!1,show_category:!0,animate_new_events:!0,severity_colors:{critical:"#D32F2F",warning:"#FF9800",info:"#2196F3",debug:"#9E9E9E"}}};function ve(e){return"events"in e&&Array.isArray(e.events)}const fe={critical:"#D32F2F",warning:"#FF9800",info:"#2196F3",debug:"#9E9E9E"},ye={person:"mdi:walk",vehicle:"mdi:car",animal:"mdi:paw",pet:"mdi:paw",security:"mdi:shield-home",motion:"mdi:motion-sensor",door:"mdi:door",lock:"mdi:lock",camera:"mdi:cctv",light:"mdi:lightbulb",climate:"mdi:thermostat",automation:"mdi:robot",system:"mdi:cog",default:"mdi:calendar-clock"},be={person:"#FF9800",vehicle:"#2196F3",animal:"#43A047",pet:"#43A047",security:"#F44336",motion:"#9C27B0",door:"#795548",lock:"#607D8B",camera:"#FF5722",light:"#FFC107",climate:"#00BCD4",automation:"#3F51B5",system:"#9E9E9E",default:"#78909C"},_e=108e5,xe=[[["cat","kitten","feline"],"mdi:cat"],[["dog","puppy","canine"],"mdi:dog"],[["bird","robin","crow","pigeon","sparrow"],"mdi:bird"],[["fish","aquarium"],"mdi:fish"],[["rabbit","bunny"],"mdi:rabbit"],[["horse","pony"],"mdi:horse"],[["snake","reptile","lizard"],"mdi:snake"],[["bear"],"mdi:paw"],[["deer"],"mdi:deer"],[["insect","bug","spider","bee","wasp"],"mdi:bee"],[["animal","pet","wildlife"],"mdi:paw"],[["person","human","people","visitor","guest","face"],"mdi:walk"],[["baby","infant","child","kid"],"mdi:baby-face-outline"],[["meeting","appointment","interview"],"mdi:account-group"],[["car","automobile","sedan"],"mdi:car"],[["truck","lorry"],"mdi:truck"],[["motorcycle","motorbike","bike","bicycle"],"mdi:bike"],[["bus","transit"],"mdi:bus"],[["boat","ship"],"mdi:sail-boat"],[["airplane","plane","flight"],"mdi:airplane"],[["vehicle","transport"],"mdi:car"],[["package","parcel","delivery","mail","post","courier"],"mdi:package-variant-closed"],[["amazon"],"mdi:package-variant-closed"],[["alarm","alert","intrusion","break-in","breach"],"mdi:alarm-light"],[["security","surveillance","guard"],"mdi:shield-home"],[["smoke","fire","flame"],"mdi:fire"],[["flood","water leak","leak"],"mdi:water-alert"],[["co2","carbon monoxide","gas"],"mdi:molecule-co2"],[["doorbell","ring","knock"],"mdi:doorbell"],[["door","gate","entry","entrance","exit"],"mdi:door"],[["lock","unlock","locked","unlocked"],"mdi:lock"],[["window"],"mdi:window-closed-variant"],[["garage"],"mdi:garage"],[["motion","movement","activity","detected"],"mdi:motion-sensor"],[["camera","cctv","snapshot","recording","footage","clip"],"mdi:cctv"],[["light","lamp","bulb","lighting","illumin"],"mdi:lightbulb"],[["temperature","temp","thermostat","hvac","heat","cool"],"mdi:thermostat"],[["weather","rain","snow","storm","wind","sunny","cloud"],"mdi:weather-partly-cloudy"],[["humidity","moisture"],"mdi:water-percent"],[["vacuum","roomba","clean"],"mdi:robot-vacuum"],[["washer","laundry","wash"],"mdi:washing-machine"],[["dryer"],"mdi:tumble-dryer"],[["dishwasher","dishes"],"mdi:dishwasher"],[["oven","stove","cook","bake"],"mdi:stove"],[["fridge","refrigerator","freezer"],"mdi:fridge"],[["microwave"],"mdi:microwave"],[["coffee","espresso"],"mdi:coffee"],[["music","song","audio","speaker","playing"],"mdi:music"],[["tv","television","movie","video","stream","netflix","plex"],"mdi:television"],[["gaming","game","playstation","xbox","nintendo"],"mdi:gamepad-variant"],[["3d print","printer","bambu","print job","filament"],"mdi:printer-3d-nozzle"],[["health","heart","blood","medical","medicine"],"mdi:heart-pulse"],[["sleep","bedtime","nap"],"mdi:sleep"],[["workout","exercise","fitness","run","walk","step"],"mdi:run"],[["birthday","anniversary"],"mdi:cake-variant"],[["holiday","vacation","day off"],"mdi:beach"],[["reminder","todo","task"],"mdi:bell-ring"],[["calendar","event","schedule"],"mdi:calendar"],[["update","upgrade","firmware"],"mdi:update"],[["restart","reboot","reset"],"mdi:restart"],[["backup","snapshot"],"mdi:backup-restore"],[["error","fail","crash"],"mdi:alert-circle"],[["automation","script","routine","workflow"],"mdi:robot"],[["battery","charge","power"],"mdi:battery"],[["wifi","network","internet","connect"],"mdi:wifi"],[["bluetooth"],"mdi:bluetooth"],[["system","server","maintenance"],"mdi:cog"],[["solar","panel"],"mdi:solar-power"],[["energy","electricity","power","watt","kwh"],"mdi:flash"],[["water","irrigation","sprinkler"],"mdi:water"],[["gas","natural gas","propane"],"mdi:gas-cylinder"],[["trash","garbage","waste","bin","recycl"],"mdi:trash-can"],[["litter","litter box","kitty litter"],"mdi:cat"],[["food","feed","meal","eat","dinner","lunch","breakfast"],"mdi:food"],[["plant","garden","flower","grow"],"mdi:flower"],[["filter","air filter","hvac filter"],"mdi:air-filter"]],we=[[["cat","kitten","feline"],"#7f41eb"],[["dog","puppy","canine"],"#8D6E63"],[["bird"],"#4CAF50"],[["animal","pet","wildlife"],"#43A047"],[["person","human","people","visitor","guest","face"],"#FF9800"],[["car","truck","vehicle","automobile","motorcycle"],"#2196F3"],[["package","delivery","mail","amazon"],"#795548"],[["alarm","alert","security","smoke","fire","intrusion"],"#F44336"],[["door","gate","lock","window","garage"],"#795548"],[["doorbell","ring","knock"],"#FF5722"],[["motion","movement","detected"],"#9C27B0"],[["camera","cctv","snapshot"],"#FF5722"],[["light","lamp","bulb"],"#FFC107"],[["temperature","thermostat","hvac","climate"],"#00BCD4"],[["weather"],"#42A5F5"],[["automation","script","routine"],"#3F51B5"],[["error","fail","crash"],"#D32F2F"],[["system","update","restart","maintenance"],"#9E9E9E"],[["trash","garbage","waste"],"#78909C"],[["plant","garden","flower"],"#4CAF50"],[["3d print","printer","bambu"],"#00ACC1"]];function $e(e,t){const i=e.toLowerCase();for(const[e,o]of t)if(e.some(e=>i.includes(e)))return o}function ke(e,t,i,o,r){if(o){const r=[e,t,i].filter(Boolean).join(" ").toLowerCase();for(const[e,t]of Object.entries(o))if(r.includes(e.toLowerCase()))return t}const a=function(e,t,i){return $e([e,t,i].filter(Boolean).join(" "),xe)}(e,t,i);return a||(r||(ye[t]?ye[t]:ye.default))}function Se(e,t,i,o,r){if(o){const r=[e,t,i].filter(Boolean).join(" ").toLowerCase();for(const[e,t]of Object.entries(o))if(r.includes(e.toLowerCase()))return t}if(r)return r;const a=function(e,t,i){return $e([e,t,i].filter(Boolean).join(" "),we)}(e,t,i);return a||(be[t]?be[t]:be.default)}function Ee(e,t){return e?"string"==typeof e?e:e.dateTime||e.date||t:t}function Ae(e,t){const i=t.split(".");let o=e;for(const e of i){if(null==o||"object"!=typeof o)return;o=o[e]}return o}function Ce(e){if(!e&&0!==e)return"";const t=String(e),i=Number(e);return!isNaN(i)&&i>1e9&&i<1e13?new Date(1e3*i).toISOString():t}const ze={door:{on:"Opened",off:"Closed"},opening:{on:"Opened",off:"Closed"},garage_door:{on:"Opened",off:"Closed"},window:{on:"Opened",off:"Closed"},lock:{on:"Unlocked",off:"Locked"},motion:{on:"Motion Detected",off:"Motion Cleared"},occupancy:{on:"Occupied",off:"Unoccupied"},presence:{on:"Present",off:"Away"},smoke:{on:"Smoke Detected",off:"Clear"},moisture:{on:"Wet",off:"Dry"},gas:{on:"Gas Detected",off:"Clear"},co:{on:"CO Detected",off:"Clear"},vibration:{on:"Vibration",off:"Still"},tamper:{on:"Tampered",off:"Secure"},safety:{on:"Unsafe",off:"Safe"},power:{on:"On",off:"Off"},plug:{on:"Plugged In",off:"Unplugged"},sound:{on:"Sound Detected",off:"Quiet"},problem:{on:"Problem",off:"OK"},connectivity:{on:"Connected",off:"Disconnected"},battery:{on:"Low",off:"Normal"},running:{on:"Running",off:"Stopped"},heat:{on:"Hot",off:"Normal"},cold:{on:"Cold",off:"Normal"},light:{on:"Light Detected",off:"Dark"}},Te={lock:{locked:"Locked",unlocked:"Unlocked",jammed:"Jammed",locking:"Locking",unlocking:"Unlocking"},cover:{open:"Opened",closed:"Closed",opening:"Opening",closing:"Closing"},alarm_control_panel:{armed_away:"Armed Away",armed_home:"Armed Home",armed_night:"Armed Night",armed_vacation:"Armed Vacation",armed_custom_bypass:"Armed Custom",disarmed:"Disarmed",triggered:"Triggered",pending:"Pending",arming:"Arming"},person:{home:"Home",not_home:"Away"},device_tracker:{home:"Home",not_home:"Away"},light:{on:"On",off:"Off"},switch:{on:"On",off:"Off"},fan:{on:"On",off:"Off"},input_boolean:{on:"On",off:"Off"},climate:{off:"Off",heat:"Heating",cool:"Cooling",auto:"Auto",heat_cool:"Heat/Cool",fan_only:"Fan Only",dry:"Dry"},vacuum:{cleaning:"Cleaning",docked:"Docked",returning:"Returning",idle:"Idle",paused:"Paused",error:"Error"},media_player:{playing:"Playing",paused:"Paused",idle:"Idle",standby:"Standby",off:"Off",on:"On",buffering:"Buffering"}},Oe={door:"door",opening:"door",garage_door:"door",window:"door",lock:"lock",motion:"motion",occupancy:"motion",presence:"person",vibration:"motion",smoke:"security",gas:"security",co:"security",moisture:"climate",heat:"climate",cold:"climate",tamper:"security",safety:"security",problem:"system",connectivity:"system",battery:"system",power:"system",plug:"system",running:"system",sound:"motion",light:"light"},De={person:"person",device_tracker:"person",sensor:"system",light:"light",switch:"automation",lock:"lock",cover:"door",climate:"climate",camera:"camera",alarm_control_panel:"security",automation:"automation",vacuum:"automation",media_player:"system",fan:"climate"};const Ie={person:"person",device_tracker:"person",light:"light",switch:"automation",lock:"lock",cover:"door",climate:"climate",camera:"camera",alarm_control_panel:"security",automation:"automation",script:"automation",scene:"automation",vacuum:"automation",media_player:"system",fan:"climate",sensor:"system"};const Fe=new class{constructor(){this.registry=new Map}register(e,t){this.registry.set(e,t)}create(e){const t=this.registry.get(e);if(!t)throw new Error(`[chronicle-card] Unknown adapter type: "${e}". Available types: ${Array.from(this.registry.keys()).join(", ")}`);return new t}has(e){return this.registry.has(e)}types(){return Array.from(this.registry.keys())}};Fe.register("calendar",class{constructor(){this.type="calendar"}configure(e){this.config=e}async fetchEvents(e,t){const i=this.config.entity;if(!i)return console.warn("[chronicle-card] CalendarAdapter: no entity configured"),[];try{const o=t.start.toISOString(),r=t.end.toISOString(),a=`calendars/${i}?start=${encodeURIComponent(o)}&end=${encodeURIComponent(r)}`,n=await e.callApi("GET",a);return Array.isArray(n)?n.map(t=>{const a=t.summary||"Untitled Event",n=t.description||"",s=function(e){const t=(e||"").toLowerCase(),i={person:["person","visitor","guest","meeting","appointment"],vehicle:["vehicle","car","delivery","parking"],security:["security","alarm","alert"],motion:["motion","movement"],pet:["pet","cat","dog","animal"],automation:["automation","script","routine"],system:["system","update","maintenance","restart"],climate:["climate","temperature","hvac","weather"],light:["light","lamp","lighting"]};for(const[e,o]of Object.entries(i))if(o.some(e=>t.includes(e)))return e;return"default"}(`${a} ${n}`),c=Ee(t.start,o),l=t.uid||function(e){let t=0;for(let i=0;i<e.length;i++)t=(t<<5)-t+e.charCodeAt(i),t|=0;return Math.abs(t).toString(36)}(`${a}:${c}`);return{id:`calendar:${i}:${l}`,sourceType:"calendar",sourceId:this.config.name||i,title:a,description:n,start:c,end:Ee(t.end,r),icon:ke(a,s,void 0,this.config.icon_map,this.config.default_icon),color:Se(a,s,void 0,this.config.color_map,this.config.default_color),category:s,severity:this.config.default_severity||"info",entityId:i,entityName:e.states[i]?.attributes?.friendly_name||i,actions:this.config.actions,metadata:{location:t.location,recurrence_id:t.recurrence_id,uid:t.uid}}}):(console.warn("[chronicle-card] CalendarAdapter: unexpected response format"),[])}catch(e){return console.warn("[chronicle-card] CalendarAdapter: failed to fetch events",e),[]}}}),Fe.register("rest",class{constructor(){this.type="rest"}configure(e){this.config=e}async fetchEvents(e,t){const i=this.config.ws_params,o=this.config.url;if(!o&&!i)return console.warn("[chronicle-card] RestAdapter: no url or ws_params configured"),[];try{let t,r;if(i){const o={...i};"string"==typeof o.type&&o.type.startsWith("frigate/")&&!o.instance_id&&(o.instance_id="frigate");const r=await e.callWS(o);t="string"==typeof r?JSON.parse(r):r}else if(function(e){return!e.startsWith("http://")&&!e.startsWith("https://")}(o)){const i=o.replace(/^\/api\//,"").replace(/^\/+/,"");t=await e.callApi("GET",i)}else{const e=await fetch(o);if(!e.ok)return console.warn(`[chronicle-card] RestAdapter: HTTP ${e.status} from ${o}`),[];const i=await e.text();try{t=JSON.parse(i)}catch{const e=i.split("\n").filter(e=>e.trim());if(!(e.length>0))throw new Error("Response is not valid JSON or NDJSON");t=e.map(e=>JSON.parse(e))}}if(this.config.response_path){const e=Ae(t,this.config.response_path);if(!Array.isArray(e))return console.warn("[chronicle-card] RestAdapter: response_path did not resolve to an array"),[];r=e}else{if(!Array.isArray(t))return console.warn("[chronicle-card] RestAdapter: response is not an array and no response_path configured"),[];r=t}return r.map((e,t)=>this.mapItem(e,t))}catch(e){return console.warn("[chronicle-card] RestAdapter: failed to fetch events",e),[]}}classifyMedia(e){return e?e.startsWith("/media/")?{mediaContentId:`media-source://media_source/local/${e.slice(7)}`}:{mediaUrl:e}:{}}expandTemplate(e,t){return e.replace(/\{(\w+)\}/g,(e,i)=>{const o=t[i];return null!=o?String(o):""})}mapItem(e,t){const i=this.config.field_map||{},o=(t,o="")=>{const r=i[t];if(r){const t=r.includes(".")?Ae(e,r):e[r];if(void 0!==t)return t}return void 0!==e[t]?e[t]:o},r=String(o("id",t)),a=String(o("title","Untitled")),n=String(o("category","default")),s=o("label",void 0);let c=o("mediaUrl",void 0);this.config.media_url_template&&(c=this.expandTemplate(this.config.media_url_template,e));const l=o("mediaContentId",void 0),d=this.classifyMedia(c),h=o("icon",void 0),u=o("color",void 0);return{id:`rest:${this.config.url||this.config.name||"ws"}:${r}`,sourceType:"rest",sourceId:this.config.name||this.config.url||"rest",title:a,description:String(o("description","")),start:Ce(o("start",(new Date).toISOString())),end:Ce(o("end","")),mediaUrl:d.mediaUrl,mediaContentId:l||d.mediaContentId,icon:h||ke(a,n,s,this.config.icon_map,this.config.default_icon),color:u||Se(a,n,s,this.config.color_map,this.config.default_color),category:n,label:s,severity:o("severity",this.config.default_severity||"info"),entityId:o("entityId",void 0),entityName:o("entityName",void 0),actions:this.config.actions,metadata:{source_url:this.config.url,raw_index:t,raw_id:r,...this.config.clip_url_template?{clip_url:this.expandTemplate(this.config.clip_url_template,e)}:{},...o("metadata",void 0)||{}}}}}),Fe.register("history",class{constructor(){this.type="history"}configure(e){this.config=e}getEntities(){const e=[];return this.config.entities?.length&&e.push(...this.config.entities),this.config.entity&&!e.includes(this.config.entity)&&e.push(this.config.entity),e}getStateFilter(e){const t=this.config.entity_config?.[e]?.state_filter;return t?.length?new Set(t.map(e=>e.toLowerCase())):this.config.state_filter?.length?new Set(this.config.state_filter.map(e=>e.toLowerCase())):null}hasEntityImageTemplates(){return!!this.config.entity_config&&Object.values(this.config.entity_config).some(e=>!!e.image_template)}async fetchEvents(e,t){const i=this.getEntities();if(0===i.length)return console.warn("[chronicle-card] HistoryAdapter: no entities configured"),[];try{const o=t.start.toISOString(),r=t.end.toISOString(),a=!!(this.config.image_template||this.hasEntityImageTemplates()||this.config.show_attributes?.length||Object.values(this.config.entity_config??{}).some(e=>e.show_attributes?.length)),n=`history/period/${o}?filter_entity_id=${i.join(",")}&end_time=${r}${a?"":"&minimal_response"}`,s=await e.callApi("GET",n);if(!Array.isArray(s))return console.warn("[chronicle-card] HistoryAdapter: unexpected response format"),[];const c=[];for(const t of s)if(Array.isArray(t)&&0!==t.length)for(let i=1;i<t.length;i++){const o=t[i-1],r=t[i],a=r.entity_id||t[0].entity_id;if(null==r.state||null==o.state)continue;if(o.state===r.state)continue;if("unavailable"===r.state||"unknown"===r.state)continue;if("unavailable"===o.state||"unknown"===o.state)continue;const n=this.getStateFilter(a);if(n&&!n.has(r.state.toLowerCase()))continue;const s=this.stateChangeToEvent(e,a,o,r);c.push(s)}return c}catch(e){return console.warn("[chronicle-card] HistoryAdapter: failed to fetch events",e),[]}}async subscribeLive(e,t){const i=this.getEntities();if(0===i.length)return()=>{};const o=new Set(i);return await e.connection.subscribeEvents(i=>{const r=i.data;if(!r.entity_id||!o.has(r.entity_id))return;if(!r.old_state||!r.new_state)return;if(null==r.old_state.state||null==r.new_state.state)return;if(r.old_state.state===r.new_state.state)return;if("unavailable"===r.new_state.state||"unknown"===r.new_state.state)return;if("unavailable"===r.old_state.state||"unknown"===r.old_state.state)return;const a=this.getStateFilter(r.entity_id);if(a&&!a.has(r.new_state.state.toLowerCase()))return;const n=this.stateChangeToEvent(e,r.entity_id,r.old_state,r.new_state);t(n)},"state_changed")}getDeviceClass(e,t,i){const o=e.states[t];return o?.attributes?.device_class?String(o.attributes.device_class):i.attributes?.device_class?String(i.attributes.device_class):""}humanizeState(e,t,i){const o=this.config.entity_config?.[e]?.state_map?.[t];if(o)return o;const r=this.config.state_map?.[t];if(r)return r;const a=e.split(".")[0];if("binary_sensor"===a&&i){const e=ze[i];if(e?.[t])return e[t]}const n=Te[a];return n?.[t]?n[t]:"on"===t?"On":"off"===t?"Off":t.charAt(0).toUpperCase()+t.slice(1).replace(/_/g," ")}detectCategory(e,t){const i=e.split(".")[0];return"binary_sensor"===i&&t?Oe[t]||"default":De[i]||"default"}stripOverlap(e,t){const i=e.toLowerCase().split(/\s+/),o=t.split(/\s+/),r=o.map(e=>e.toLowerCase());for(let e=Math.min(i.length,r.length);e>0;e--){const a=i.slice(-e),n=r.slice(0,e);if(a.every((e,t)=>e===n[t])){return o.slice(e).join(" ")||t}}return t}stateChangeToEvent(e,t,i,o){const r=this.getDeviceClass(e,t,o),a=this.detectCategory(t,r),n=e.states[t]?.attributes?.friendly_name||t,s=this.config.entity_config?.[t],c=this.getEntities().length>1,l=s?.name||(c?n:this.config.name||n),d=this.humanizeState(t,o.state,r),h=this.humanizeState(t,i.state,r),u=`${l} ${this.stripOverlap(l,d)}`,p=e.states[t],g={...p?.attributes??{},...o.attributes??{}};let m=`${this.stripOverlap(l,h)} → ${this.stripOverlap(l,d)}`;const v=s?.show_attributes??this.config.show_attributes;if(v?.length){const e=v.map(e=>{const t=g[e];if(null==t||""===t||"object"==typeof t)return null;const i="number"!=typeof t||Number.isInteger(t)?String(t):t.toFixed(1);return`${e.replace(/_/g," ")}: ${i}`}).filter(Boolean);e.length&&(m+=` · ${e.join(" · ")}`)}const f=s?.state_icon?.[o.state]||this.config.state_icon?.[o.state]||s?.icon||ke(u,a,void 0,this.config.icon_map,this.config.default_icon),y=s?.state_color?.[o.state]||this.config.state_color?.[o.state]||s?.color||Se(u,a,void 0,this.config.color_map,this.config.default_color),b=s?.severity||this.config.default_severity||"info",_=s?.image_template||this.config.image_template,x=s?.tap_action||this.config.tap_action,w=s?.hold_action||this.config.hold_action;return{id:`history:${t}:${o.last_changed}`,sourceType:"history",sourceId:this.config.name||"history",title:u,description:m,start:o.last_changed,end:o.last_changed,icon:f,color:y,category:a,severity:b,entityId:t,actions:this.config.actions,tapAction:x,holdAction:w,metadata:{old_state:i.state,new_state:o.state,old_label:h,new_label:d,device_class:r,last_updated:o.last_updated,attributes:g,source_name:this.config.name||"history",_image_template:_}}}}),Fe.register("static",class{constructor(){this.type="static"}configure(e){this.config=e}async fetchEvents(e,t){const i=this.config.events;if(!i||0===i.length)return console.warn("[chronicle-card] StaticAdapter: no events configured"),[];try{const e=this.config.name||"static";return i.map((i,o)=>{const r=i.category||"default",a=new Date(i.start);return(i.end?new Date(i.end):a)<t.start||a>t.end?null:{id:`static:${e}:${o}`,sourceType:"static",sourceId:e,title:i.title,description:i.description||"",start:i.start,end:i.end||i.start,icon:i.icon||this.config.default_icon||ye[r]||ye.default,color:i.color||this.config.default_color||be[r]||be.default,category:r,severity:i.severity||this.config.default_severity||"info",actions:this.config.actions,metadata:{static_index:o}}}).filter(e=>null!==e)}catch(e){return console.warn("[chronicle-card] StaticAdapter: failed to process events",e),[]}}}),Fe.register("logbook",class{constructor(){this.type="logbook"}configure(e){this.config=e}getEntities(){const e=[];return this.config.entities?.length&&e.push(...this.config.entities),this.config.entity&&!e.includes(this.config.entity)&&e.push(this.config.entity),e}async fetchEvents(e,t){const i=this.getEntities();if(0===i.length)return console.warn("[chronicle-card] LogbookAdapter: no entities configured"),[];try{const o=await e.callWS({type:"logbook/get_events",start_time:t.start.toISOString(),end_time:t.end.toISOString(),entity_ids:i});return Array.isArray(o)?o.filter(e=>e&&null!=e.when).map(t=>this.entryToEvent(e,t)):[]}catch(e){return console.warn("[chronicle-card] LogbookAdapter: failed to fetch events",e),[]}}whenToISO(e){if("string"==typeof e){const t=new Date(e);return isNaN(t.getTime())?(new Date).toISOString():t.toISOString()}return new Date(e>1e12?e:1e3*e).toISOString()}entryToEvent(e,t){const i=t.entity_id,o=t.domain||i?.split(".")[0]||"",r=Ie[o]||"default",a=i?this.config.entity_config?.[i]:void 0,n=i?e.states[i]?.attributes?.friendly_name:void 0,s=a?.name||t.name||n||i||"Logbook",c=t.message||(t.state?`→ ${t.state}`:""),l=c?`${s} ${c}`:s,d=this.whenToISO(t.when),h=a?.icon||t.icon||ke(l,r,void 0,this.config.icon_map,this.config.default_icon),u=a?.color||Se(l,r,void 0,this.config.color_map,this.config.default_color),p=a?.severity||this.config.default_severity||"info";return{id:`logbook:${i||o||"ha"}:${d}`,sourceType:"logbook",sourceId:this.config.name||"logbook",title:l,description:t.message||"",start:d,end:d,icon:h,color:u,category:r,severity:p,entityId:i,entityName:s,actions:this.config.actions,tapAction:a?.tap_action||this.config.tap_action,holdAction:a?.hold_action||this.config.hold_action,metadata:{domain:o,state:t.state,context_service:t.context_service,context_event_type:t.context_event_type,source_name:this.config.name||"logbook"}}}});const Me={en:{"chronicle.today":"Today","chronicle.yesterday":"Yesterday","chronicle.no_events":"No events","chronicle.events_count":"{count} events","chronicle.group_summary":"{count} similar events","chronicle.group_events":"{count} {label} events","chronicle.detail.more_info":"More Info","chronicle.detail.entity":"Entity","chronicle.detail.entity_id":"Entity ID","chronicle.detail.source":"Source","chronicle.detail.start":"Start","chronicle.detail.end":"End","chronicle.loading":"Loading...","chronicle.error":"Error loading events","chronicle.refresh":"Refresh","chronicle.severity.critical":"Critical","chronicle.severity.warning":"Warning","chronicle.severity.info":"Info","chronicle.severity.debug":"Debug","chronicle.time.just_now":"just now","chronicle.time.minutes_ago":"{count} min ago","chronicle.time.hours_ago":"{count}h ago","chronicle.time.yesterday":"Yesterday","chronicle.editor.title":"Title","chronicle.editor.layout":"Layout","chronicle.editor.layout_vertical":"Vertical","chronicle.editor.layout_horizontal":"Horizontal","chronicle.editor.sources":"Sources","chronicle.editor.add_source":"Add source","chronicle.editor.remove_source":"Remove source","chronicle.editor.source_type":"Source type","chronicle.editor.entity":"Entity","chronicle.editor.entities":"Entities","chronicle.editor.filters":"Filters","chronicle.editor.categories":"Categories","chronicle.editor.severities":"Severities","chronicle.editor.search":"Search","chronicle.editor.grouping":"Grouping","chronicle.editor.group_by":"Group by","chronicle.editor.appearance":"Appearance","chronicle.editor.card_height":"Card height","chronicle.editor.compact":"Compact mode","chronicle.editor.show_images":"Show images","chronicle.editor.show_icons":"Show icons","chronicle.editor.show_header":"Show header","chronicle.editor.max_events":"Max events","chronicle.editor.days_back":"Days back","chronicle.editor.time_format":"Time format","chronicle.editor.language":"Language","chronicle.editor.severity_colors":"Severity colors","chronicle.editor.animate_new":"Animate new events","chronicle.editor.show_severity_badge":"Show severity badge","chronicle.editor.show_source_badge":"Show source badge","chronicle.editor.show_layout_toggle":"Show layout toggle"},de:{"chronicle.today":"Heute","chronicle.yesterday":"Gestern","chronicle.no_events":"Keine Ereignisse","chronicle.events_count":"{count} Ereignisse","chronicle.group_summary":"{count} ähnliche Ereignisse","chronicle.group_events":"{count} {label} Ereignisse","chronicle.detail.more_info":"Mehr Infos","chronicle.detail.entity":"Entität","chronicle.detail.entity_id":"Entitäts-ID","chronicle.detail.source":"Quelle","chronicle.detail.start":"Start","chronicle.detail.end":"Ende","chronicle.loading":"Laden...","chronicle.error":"Fehler beim Laden","chronicle.refresh":"Aktualisieren","chronicle.severity.critical":"Kritisch","chronicle.severity.warning":"Warnung","chronicle.severity.info":"Info","chronicle.severity.debug":"Debug","chronicle.time.just_now":"gerade eben","chronicle.time.minutes_ago":"vor {count} Min.","chronicle.time.hours_ago":"vor {count} Std.","chronicle.time.yesterday":"Gestern","chronicle.editor.title":"Titel","chronicle.editor.layout":"Layout","chronicle.editor.layout_vertical":"Vertikal","chronicle.editor.layout_horizontal":"Horizontal","chronicle.editor.sources":"Quellen","chronicle.editor.add_source":"Quelle hinzufügen","chronicle.editor.remove_source":"Quelle entfernen","chronicle.editor.source_type":"Quellentyp","chronicle.editor.entity":"Entität","chronicle.editor.entities":"Entitäten","chronicle.editor.filters":"Filter","chronicle.editor.categories":"Kategorien","chronicle.editor.severities":"Schweregrade","chronicle.editor.search":"Suche","chronicle.editor.grouping":"Gruppierung","chronicle.editor.group_by":"Gruppieren nach","chronicle.editor.appearance":"Darstellung","chronicle.editor.card_height":"Kartenhöhe","chronicle.editor.compact":"Kompaktmodus","chronicle.editor.show_images":"Bilder anzeigen","chronicle.editor.show_icons":"Icons anzeigen","chronicle.editor.show_header":"Kopfzeile anzeigen","chronicle.editor.max_events":"Max. Ereignisse","chronicle.editor.days_back":"Tage zurück","chronicle.editor.time_format":"Zeitformat","chronicle.editor.language":"Sprache","chronicle.editor.severity_colors":"Schweregradfarben","chronicle.editor.animate_new":"Neue Ereignisse animieren","chronicle.editor.show_severity_badge":"Schweregrad-Badge anzeigen","chronicle.editor.show_source_badge":"Quellen-Badge anzeigen","chronicle.editor.show_layout_toggle":"Layout-Umschalter anzeigen"},fr:{"chronicle.today":"Aujourd'hui","chronicle.yesterday":"Hier","chronicle.no_events":"Aucun événement","chronicle.events_count":"{count} événements","chronicle.group_summary":"{count} événements similaires","chronicle.group_events":"{count} événements {label}","chronicle.detail.more_info":"Plus d'infos","chronicle.detail.entity":"Entité","chronicle.detail.entity_id":"ID d'entité","chronicle.detail.source":"Source","chronicle.detail.start":"Début","chronicle.detail.end":"Fin","chronicle.loading":"Chargement...","chronicle.error":"Erreur de chargement","chronicle.refresh":"Actualiser","chronicle.severity.critical":"Critique","chronicle.severity.warning":"Avertissement","chronicle.severity.info":"Info","chronicle.severity.debug":"Débogage","chronicle.time.just_now":"à l'instant","chronicle.time.minutes_ago":"il y a {count} min","chronicle.time.hours_ago":"il y a {count}h","chronicle.time.yesterday":"Hier","chronicle.editor.title":"Titre","chronicle.editor.layout":"Disposition","chronicle.editor.layout_vertical":"Vertical","chronicle.editor.layout_horizontal":"Horizontal","chronicle.editor.sources":"Sources","chronicle.editor.add_source":"Ajouter une source","chronicle.editor.remove_source":"Supprimer la source","chronicle.editor.source_type":"Type de source","chronicle.editor.entity":"Entité","chronicle.editor.entities":"Entités","chronicle.editor.filters":"Filtres","chronicle.editor.categories":"Catégories","chronicle.editor.severities":"Sévérités","chronicle.editor.search":"Recherche","chronicle.editor.grouping":"Regroupement","chronicle.editor.group_by":"Grouper par","chronicle.editor.appearance":"Apparence","chronicle.editor.card_height":"Hauteur de la carte","chronicle.editor.compact":"Mode compact","chronicle.editor.show_images":"Afficher les images","chronicle.editor.show_icons":"Afficher les icônes","chronicle.editor.show_header":"Afficher l'en-tête","chronicle.editor.max_events":"Nombre max d'événements","chronicle.editor.days_back":"Jours en arrière","chronicle.editor.time_format":"Format horaire","chronicle.editor.language":"Langue","chronicle.editor.severity_colors":"Couleurs de sévérité","chronicle.editor.animate_new":"Animer les nouveaux événements","chronicle.editor.show_severity_badge":"Afficher le badge de sévérité","chronicle.editor.show_source_badge":"Afficher le badge de source","chronicle.editor.show_layout_toggle":"Afficher le bouton de disposition"},es:{"chronicle.today":"Hoy","chronicle.yesterday":"Ayer","chronicle.no_events":"Sin eventos","chronicle.events_count":"{count} eventos","chronicle.group_summary":"{count} eventos similares","chronicle.group_events":"{count} eventos de {label}","chronicle.detail.more_info":"Más información","chronicle.detail.entity":"Entidad","chronicle.detail.entity_id":"ID de entidad","chronicle.detail.source":"Fuente","chronicle.detail.start":"Inicio","chronicle.detail.end":"Fin","chronicle.loading":"Cargando...","chronicle.error":"Error al cargar","chronicle.refresh":"Actualizar","chronicle.severity.critical":"Crítico","chronicle.severity.warning":"Advertencia","chronicle.severity.info":"Info","chronicle.severity.debug":"Depuración","chronicle.time.just_now":"ahora mismo","chronicle.time.minutes_ago":"hace {count} min","chronicle.time.hours_ago":"hace {count}h","chronicle.time.yesterday":"Ayer","chronicle.editor.title":"Título","chronicle.editor.layout":"Diseño","chronicle.editor.layout_vertical":"Vertical","chronicle.editor.layout_horizontal":"Horizontal","chronicle.editor.sources":"Fuentes","chronicle.editor.add_source":"Añadir fuente","chronicle.editor.remove_source":"Eliminar fuente","chronicle.editor.source_type":"Tipo de fuente","chronicle.editor.entity":"Entidad","chronicle.editor.entities":"Entidades","chronicle.editor.filters":"Filtros","chronicle.editor.categories":"Categorías","chronicle.editor.severities":"Severidades","chronicle.editor.search":"Buscar","chronicle.editor.grouping":"Agrupación","chronicle.editor.group_by":"Agrupar por","chronicle.editor.appearance":"Apariencia","chronicle.editor.card_height":"Altura de la tarjeta","chronicle.editor.compact":"Modo compacto","chronicle.editor.show_images":"Mostrar imágenes","chronicle.editor.show_icons":"Mostrar iconos","chronicle.editor.show_header":"Mostrar encabezado","chronicle.editor.max_events":"Máx. eventos","chronicle.editor.days_back":"Días atrás","chronicle.editor.time_format":"Formato de hora","chronicle.editor.language":"Idioma","chronicle.editor.severity_colors":"Colores de severidad","chronicle.editor.animate_new":"Animar nuevos eventos","chronicle.editor.show_severity_badge":"Mostrar insignia de severidad","chronicle.editor.show_source_badge":"Mostrar insignia de fuente","chronicle.editor.show_layout_toggle":"Mostrar cambio de diseño"},it:{"chronicle.today":"Oggi","chronicle.yesterday":"Ieri","chronicle.no_events":"Nessun evento","chronicle.events_count":"{count} eventi","chronicle.group_summary":"{count} eventi simili","chronicle.group_events":"{count} eventi {label}","chronicle.detail.more_info":"Maggiori info","chronicle.detail.entity":"Entità","chronicle.detail.entity_id":"ID entità","chronicle.detail.source":"Sorgente","chronicle.detail.start":"Inizio","chronicle.detail.end":"Fine","chronicle.loading":"Caricamento...","chronicle.error":"Errore di caricamento","chronicle.refresh":"Aggiorna","chronicle.severity.critical":"Critico","chronicle.severity.warning":"Avviso","chronicle.severity.info":"Info","chronicle.severity.debug":"Debug","chronicle.time.just_now":"proprio ora","chronicle.time.minutes_ago":"{count} min fa","chronicle.time.hours_ago":"{count}h fa","chronicle.time.yesterday":"Ieri","chronicle.editor.title":"Titolo","chronicle.editor.layout":"Layout","chronicle.editor.layout_vertical":"Verticale","chronicle.editor.layout_horizontal":"Orizzontale","chronicle.editor.sources":"Fonti","chronicle.editor.add_source":"Aggiungi fonte","chronicle.editor.remove_source":"Rimuovi fonte","chronicle.editor.source_type":"Tipo di fonte","chronicle.editor.entity":"Entità","chronicle.editor.entities":"Entità","chronicle.editor.filters":"Filtri","chronicle.editor.categories":"Categorie","chronicle.editor.severities":"Severità","chronicle.editor.search":"Cerca","chronicle.editor.grouping":"Raggruppamento","chronicle.editor.group_by":"Raggruppa per","chronicle.editor.appearance":"Aspetto","chronicle.editor.card_height":"Altezza della scheda","chronicle.editor.compact":"Modalità compatta","chronicle.editor.show_images":"Mostra immagini","chronicle.editor.show_icons":"Mostra icone","chronicle.editor.show_header":"Mostra intestazione","chronicle.editor.max_events":"Max eventi","chronicle.editor.days_back":"Giorni indietro","chronicle.editor.time_format":"Formato ora","chronicle.editor.language":"Lingua","chronicle.editor.severity_colors":"Colori di severità","chronicle.editor.animate_new":"Anima nuovi eventi","chronicle.editor.show_severity_badge":"Mostra badge severità","chronicle.editor.show_source_badge":"Mostra badge fonte","chronicle.editor.show_layout_toggle":"Mostra pulsante layout"},pt:{"chronicle.today":"Hoje","chronicle.yesterday":"Ontem","chronicle.no_events":"Sem eventos","chronicle.events_count":"{count} eventos","chronicle.group_summary":"{count} eventos semelhantes","chronicle.group_events":"{count} eventos de {label}","chronicle.detail.more_info":"Mais informações","chronicle.detail.entity":"Entidade","chronicle.detail.entity_id":"ID da entidade","chronicle.detail.source":"Fonte","chronicle.detail.start":"Início","chronicle.detail.end":"Fim","chronicle.loading":"Carregando...","chronicle.error":"Erro ao carregar","chronicle.refresh":"Atualizar","chronicle.severity.critical":"Crítico","chronicle.severity.warning":"Aviso","chronicle.severity.info":"Info","chronicle.severity.debug":"Depuração","chronicle.time.just_now":"agora mesmo","chronicle.time.minutes_ago":"há {count} min","chronicle.time.hours_ago":"há {count}h","chronicle.time.yesterday":"Ontem","chronicle.editor.title":"Título","chronicle.editor.layout":"Layout","chronicle.editor.layout_vertical":"Vertical","chronicle.editor.layout_horizontal":"Horizontal","chronicle.editor.sources":"Fontes","chronicle.editor.add_source":"Adicionar fonte","chronicle.editor.remove_source":"Remover fonte","chronicle.editor.source_type":"Tipo de fonte","chronicle.editor.entity":"Entidade","chronicle.editor.entities":"Entidades","chronicle.editor.filters":"Filtros","chronicle.editor.categories":"Categorias","chronicle.editor.severities":"Severidades","chronicle.editor.search":"Pesquisar","chronicle.editor.grouping":"Agrupamento","chronicle.editor.group_by":"Agrupar por","chronicle.editor.appearance":"Aparência","chronicle.editor.card_height":"Altura do cartão","chronicle.editor.compact":"Modo compacto","chronicle.editor.show_images":"Mostrar imagens","chronicle.editor.show_icons":"Mostrar ícones","chronicle.editor.show_header":"Mostrar cabeçalho","chronicle.editor.max_events":"Máx. eventos","chronicle.editor.days_back":"Dias atrás","chronicle.editor.time_format":"Formato de hora","chronicle.editor.language":"Idioma","chronicle.editor.severity_colors":"Cores de severidade","chronicle.editor.animate_new":"Animar novos eventos","chronicle.editor.show_severity_badge":"Mostrar distintivo de severidade","chronicle.editor.show_source_badge":"Mostrar distintivo de fonte","chronicle.editor.show_layout_toggle":"Mostrar botão de layout"},nl:{"chronicle.today":"Vandaag","chronicle.yesterday":"Gisteren","chronicle.no_events":"Geen gebeurtenissen","chronicle.events_count":"{count} gebeurtenissen","chronicle.group_summary":"{count} vergelijkbare gebeurtenissen","chronicle.group_events":"{count} {label} gebeurtenissen","chronicle.detail.more_info":"Meer info","chronicle.detail.entity":"Entiteit","chronicle.detail.entity_id":"Entiteits-ID","chronicle.detail.source":"Bron","chronicle.detail.start":"Start","chronicle.detail.end":"Einde","chronicle.loading":"Laden...","chronicle.error":"Fout bij laden","chronicle.refresh":"Vernieuwen","chronicle.severity.critical":"Kritiek","chronicle.severity.warning":"Waarschuwing","chronicle.severity.info":"Info","chronicle.severity.debug":"Debug","chronicle.time.just_now":"zojuist","chronicle.time.minutes_ago":"{count} min geleden","chronicle.time.hours_ago":"{count}u geleden","chronicle.time.yesterday":"Gisteren","chronicle.editor.title":"Titel","chronicle.editor.layout":"Lay-out","chronicle.editor.layout_vertical":"Verticaal","chronicle.editor.layout_horizontal":"Horizontaal","chronicle.editor.sources":"Bronnen","chronicle.editor.add_source":"Bron toevoegen","chronicle.editor.remove_source":"Bron verwijderen","chronicle.editor.source_type":"Brontype","chronicle.editor.entity":"Entiteit","chronicle.editor.entities":"Entiteiten","chronicle.editor.filters":"Filters","chronicle.editor.categories":"Categorieën","chronicle.editor.severities":"Ernstniveaus","chronicle.editor.search":"Zoeken","chronicle.editor.grouping":"Groepering","chronicle.editor.group_by":"Groeperen op","chronicle.editor.appearance":"Uiterlijk","chronicle.editor.card_height":"Kaartrij hoogte","chronicle.editor.compact":"Compacte modus","chronicle.editor.show_images":"Afbeeldingen tonen","chronicle.editor.show_icons":"Iconen tonen","chronicle.editor.show_header":"Koptekst tonen","chronicle.editor.max_events":"Max. gebeurtenissen","chronicle.editor.days_back":"Dagen terug","chronicle.editor.time_format":"Tijdformaat","chronicle.editor.language":"Taal","chronicle.editor.severity_colors":"Ernstkleuren","chronicle.editor.animate_new":"Nieuwe gebeurtenissen animeren","chronicle.editor.show_severity_badge":"Ernstbadge tonen","chronicle.editor.show_source_badge":"Bronbadge tonen","chronicle.editor.show_layout_toggle":"Lay-outschakelaar tonen"},sv:{"chronicle.today":"Idag","chronicle.yesterday":"Igår","chronicle.no_events":"Inga händelser","chronicle.events_count":"{count} händelser","chronicle.group_summary":"{count} liknande händelser","chronicle.group_events":"{count} {label}-händelser","chronicle.detail.more_info":"Mer info","chronicle.detail.entity":"Entitet","chronicle.detail.entity_id":"Entitets-ID","chronicle.detail.source":"Källa","chronicle.detail.start":"Start","chronicle.detail.end":"Slut","chronicle.loading":"Laddar...","chronicle.error":"Fel vid laddning","chronicle.refresh":"Uppdatera","chronicle.severity.critical":"Kritisk","chronicle.severity.warning":"Varning","chronicle.severity.info":"Info","chronicle.severity.debug":"Felsökning","chronicle.time.just_now":"just nu","chronicle.time.minutes_ago":"{count} min sedan","chronicle.time.hours_ago":"{count}t sedan","chronicle.time.yesterday":"Igår","chronicle.editor.title":"Titel","chronicle.editor.layout":"Layout","chronicle.editor.layout_vertical":"Vertikal","chronicle.editor.layout_horizontal":"Horisontell","chronicle.editor.sources":"Källor","chronicle.editor.add_source":"Lägg till källa","chronicle.editor.remove_source":"Ta bort källa","chronicle.editor.source_type":"Källtyp","chronicle.editor.entity":"Entitet","chronicle.editor.entities":"Entiteter","chronicle.editor.filters":"Filter","chronicle.editor.categories":"Kategorier","chronicle.editor.severities":"Allvarlighetsgrader","chronicle.editor.search":"Sök","chronicle.editor.grouping":"Gruppering","chronicle.editor.group_by":"Gruppera efter","chronicle.editor.appearance":"Utseende","chronicle.editor.card_height":"Korthöjd","chronicle.editor.compact":"Kompakt läge","chronicle.editor.show_images":"Visa bilder","chronicle.editor.show_icons":"Visa ikoner","chronicle.editor.show_header":"Visa rubrik","chronicle.editor.max_events":"Max händelser","chronicle.editor.days_back":"Dagar tillbaka","chronicle.editor.time_format":"Tidsformat","chronicle.editor.language":"Språk","chronicle.editor.severity_colors":"Allvarlighetsfärger","chronicle.editor.animate_new":"Animera nya händelser","chronicle.editor.show_severity_badge":"Visa allvarlighetsmärke","chronicle.editor.show_source_badge":"Visa källmärke","chronicle.editor.show_layout_toggle":"Visa layoutväxlare"},pl:{"chronicle.today":"Dzisiaj","chronicle.yesterday":"Wczoraj","chronicle.no_events":"Brak zdarzeń","chronicle.events_count":"{count} zdarzeń","chronicle.group_summary":"{count} podobnych zdarzeń","chronicle.group_events":"{count} zdarzeń: {label}","chronicle.detail.more_info":"Więcej informacji","chronicle.detail.entity":"Encja","chronicle.detail.entity_id":"ID encji","chronicle.detail.source":"Źródło","chronicle.detail.start":"Początek","chronicle.detail.end":"Koniec","chronicle.loading":"Ładowanie...","chronicle.error":"Błąd ładowania zdarzeń","chronicle.refresh":"Odśwież","chronicle.severity.critical":"Krytyczny","chronicle.severity.warning":"Ostrzeżenie","chronicle.severity.info":"Info","chronicle.severity.debug":"Debug","chronicle.time.just_now":"przed chwilą","chronicle.time.minutes_ago":"{count} min temu","chronicle.time.hours_ago":"{count} godz. temu","chronicle.time.yesterday":"Wczoraj","chronicle.editor.title":"Tytuł","chronicle.editor.layout":"Układ","chronicle.editor.layout_vertical":"Pionowy","chronicle.editor.layout_horizontal":"Poziomy","chronicle.editor.sources":"Źródła","chronicle.editor.add_source":"Dodaj źródło","chronicle.editor.remove_source":"Usuń źródło","chronicle.editor.source_type":"Typ źródła","chronicle.editor.entity":"Encja","chronicle.editor.entities":"Encje","chronicle.editor.filters":"Filtry","chronicle.editor.categories":"Kategorie","chronicle.editor.severities":"Ważności","chronicle.editor.search":"Szukaj","chronicle.editor.grouping":"Grupowanie","chronicle.editor.group_by":"Grupuj według","chronicle.editor.appearance":"Wygląd","chronicle.editor.card_height":"Wysokość karty","chronicle.editor.compact":"Tryb kompaktowy","chronicle.editor.show_images":"Pokaż obrazy","chronicle.editor.show_icons":"Pokaż ikony","chronicle.editor.show_header":"Pokaż nagłówek","chronicle.editor.max_events":"Maks. zdarzeń","chronicle.editor.days_back":"Dni wstecz","chronicle.editor.time_format":"Format czasu","chronicle.editor.language":"Język","chronicle.editor.severity_colors":"Kolory ważności","chronicle.editor.animate_new":"Animuj nowe zdarzenia","chronicle.editor.show_severity_badge":"Pokaż odznakę ważności","chronicle.editor.show_source_badge":"Pokaż odznakę źródła","chronicle.editor.show_layout_toggle":"Pokaż przełącznik układu"}};let je="en";function Ne(){return je}function Pe(e,t){const i=je,o=Me[i];if(o&&void 0!==o[e])return o[e];const r=i.split("-")[0];if(r!==i){const t=Me[r];if(t&&void 0!==t[e])return t[e]}const a=Me.en;return a&&void 0!==a[e]?a[e]:e}function Le(e,t){if(!t.enabled||"none"===t.group_by||0===e.length)return[...e];const i=1e3*(t.window_seconds??120),o=t.min_group_size??3,r=t.group_by??"category",a=[];let n=[],s=null,c=null;const l=e=>{switch(r){case"category":return e.category;case"source":return`${e.sourceType}:${e.sourceId}`;case"entity":return e.entityId??"";default:return""}},d=e=>{const i=e.length,o=e[0];if(t.group_name)return t.group_name.replace(/\{count\}/g,String(i)).replace(/\{label\}/g,o.label||o.category||"").replace(/\{source\}/g,o.sourceId||"").replace(/\{entity\}/g,o.entityName||o.entityId||"");const a=e=>Pe("chronicle.group_events").replace("{count}",String(i)).replace("{label}",e);switch(r){case"source":return a(o.sourceId);case"entity":return a(o.entityName||o.entityId||"entity")}const n=new Set(e.map(e=>e.label||e.category).filter(Boolean));return 1===n.size?a([...n][0]):a(o.category)},h=()=>{if(0!==n.length){if(n.length>=o){const e=n[0];a.push({representative:e,events:n,summary:d(n),expanded:!1})}else a.push(...n);n=[],s=null,c=null}};for(const t of e){const e=l(t),o=new Date(t.start).getTime();if(null===s){s=e,c=o,n.push(t);continue}const r=null!==c&&Math.abs(o-c)<=i;e===s&&r?(n.push(t),c=o):(h(),s=e,c=o,n.push(t))}return h(),a}const He=new Map;async function Ue(e,t){if(!t)return;const i=He.get(t);if(i&&Date.now()-i.timestamp<_e)return i.url;!function(){const e=Date.now();for(const[t,i]of He)e-i.timestamp>_e&&He.delete(t)}();try{const i=await e.callWS({type:"media_source/resolve_media",media_content_id:t});return i&&i.url?(He.set(t,{url:i.url,timestamp:Date.now()}),i.url):void 0}catch{return}}const Re=/\{[%{]/;function Ge(e){return Re.test(e)}async function Be(e,t,i={}){return new Promise((o,r)=>{let a,n=!1;const s=setTimeout(()=>{n||(n=!0,a?.(),r(new Error("Template render timed out")))},5e3);e.connection.subscribeMessage(e=>{n||(n=!0,clearTimeout(s),a?.(),o(e.result))},{type:"render_template",template:t,variables:i}).then(e=>{a=e,n&&a()}).catch(e=>{n||(n=!0,clearTimeout(s),r(e))})})}async function We(e,t,i){if(0===i.length)return[];const o=[];for(let r=0;r<i.length;r+=50){const a=i.slice(r,r+50),n=await Promise.allSettled(a.map(i=>Be(e,t,{...i})));for(const e of n)o.push("fulfilled"===e.status&&e.value?e.value.trim():"")}return o}function Ke(e){if(e.name)return e.name;switch(e.type){case"calendar":return e.entity||"calendar";case"rest":return e.url||"rest";case"history":return"history";case"static":return"static";default:return e.type}}function Ve(e){return new Date(ve(e)?e.representative.start:e.start).getTime()}class Je{constructor(){this.adapters=[],this.allEvents=[],this.filteredItems=[],this.lastFetch=0,this.lastHash="",this.liveUnsubscribers=[],this.listeners=new Set,this.fetchPromise=null}get items(){return this.filteredItems}get events(){return this.allEvents}configure(e){this.config=e,this.adapters=[];for(const t of e.sources??[])try{const e=Fe.create(t.type);e.configure(t),this.adapters.push(e)}catch(e){console.warn("[chronicle-card] Skipping source:",e)}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notify(){for(const e of this.listeners)e()}async fetch(e,t=!1){const i=(this.config?.sources??[]).reduce((e,t)=>Math.min(e,1e3*(t.poll_interval??30)),3e4);if(t||!(Date.now()-this.lastFetch<i)){if(this.fetchPromise)return this.fetchPromise;this.fetchPromise=this._doFetch(e);try{await this.fetchPromise}finally{this.fetchPromise=null}}}async _doFetch(e){const t=this.config.days_back??me.days_back??7,i=new Date,o={start:new Date(i.getTime()-24*t*60*60*1e3),end:i},r=await Promise.allSettled(this.adapters.map(t=>t.fetchEvents(e,o))),a=[];for(const e of r)"fulfilled"===e.status?a.push(...e.value):console.warn("[chronicle-card] Adapter fetch failed:",e.reason);const n=new Set,s=[];for(const e of a)n.has(e.id)||(n.add(e.id),s.push(e));s.sort((e,t)=>new Date(t.start).getTime()-new Date(e.start).getTime()),await this.resolveMedia(e,s),await this.resolveTemplates(e,s);const c=this.computeHash(s);c!==this.lastHash?(this.allEvents=s,this.lastHash=c,this.lastFetch=Date.now(),this.applyFiltersAndGroup()):this.lastFetch=Date.now()}applyFiltersAndGroup(){let e=[...this.allEvents];const t=this.config.filters??{};if(t.categories&&t.categories.length>0){const i=new Set(t.categories);e=e.filter(e=>i.has(e.category))}if(t.severities&&t.severities.length>0){const i=new Set(t.severities);e=e.filter(e=>i.has(e.severity))}if(t.sources&&t.sources.length>0){const i=new Set(t.sources);e=e.filter(e=>i.has(e.sourceId)||i.has(e.sourceType))}if(t.entities&&t.entities.length>0){const i=new Set(t.entities);e=e.filter(e=>e.entityId&&i.has(e.entityId))}if(t.search&&t.search.trim().length>0){const i=t.search.toLowerCase().trim();e=e.filter(e=>e.title.toLowerCase().includes(i)||e.description.toLowerCase().includes(i)||e.category.toLowerCase().includes(i)||e.label&&e.label.toLowerCase().includes(i))}if(t.exclude_categories&&t.exclude_categories.length>0){const i=new Set(t.exclude_categories);e=e.filter(e=>!i.has(e.category))}if(t.exclude_severities&&t.exclude_severities.length>0){const i=new Set(t.exclude_severities);e=e.filter(e=>!i.has(e.severity))}if(t.exclude_sources&&t.exclude_sources.length>0){const i=new Set(t.exclude_sources);e=e.filter(e=>!i.has(e.sourceId)&&!i.has(e.sourceType))}if(t.exclude_entities&&t.exclude_entities.length>0){const i=new Set(t.exclude_entities);e=e.filter(e=>!e.entityId||!i.has(e.entityId))}if(t.exclude_search&&t.exclude_search.trim().length>0){const i=t.exclude_search.toLowerCase().trim();e=e.filter(e=>!(e.title.toLowerCase().includes(i)||e.description.toLowerCase().includes(i)||e.category.toLowerCase().includes(i)||e.label&&e.label.toLowerCase().includes(i)))}const i=this.config.max_events??me.max_events??50;e.length>i&&(e=e.slice(0,i));const o={enabled:!0,window_seconds:120,min_group_size:3,group_by:"category",...this.config.grouping},r=new Map;for(const e of this.config.sources??[])e.grouping&&r.set(Ke(e),{...o,...e.grouping});if(0===r.size)return this.filteredItems=Le(e,o),void this.notify();const a=new Map,n=[];for(const t of e)if(r.has(t.sourceId)){const e=a.get(t.sourceId)??[];e.push(t),a.set(t.sourceId,e)}else n.push(t);const s=[];for(const[e,t]of a)s.push(...Le(t,r.get(e)));s.push(...Le(n,o)),s.sort((e,t)=>Ve(t)-Ve(e)),this.filteredItems=s,this.notify()}async injectLiveEvent(e,t){this.allEvents.some(t=>t.id===e.id)||(t&&await this.resolveTemplates(t,[e]),this.allEvents.unshift(e),this.lastHash=this.computeHash(this.allEvents),this.applyFiltersAndGroup())}async subscribeLive(e){this.unsubscribeLive();for(const t of this.adapters)if(t.subscribeLive)try{const i=await t.subscribeLive(e,t=>{this.injectLiveEvent(t,e)});this.liveUnsubscribers.push(i)}catch(e){console.warn("[chronicle-card] Live subscription failed:",e)}}unsubscribeLive(){for(const e of this.liveUnsubscribers)try{e()}catch{}this.liveUnsubscribers=[]}toggleGroup(e){e.expanded=!e.expanded,this.notify()}async resolveMedia(e,t){const i=t.filter(e=>e.mediaContentId&&!e.mediaUrl);if(0===i.length)return;const o=await Promise.allSettled(i.map(t=>Ue(e,t.mediaContentId)));for(let e=0;e<i.length;e++){const t=o[e];"fulfilled"===t.status&&t.value&&(i[e].mediaUrl=t.value)}}async resolveTemplates(e,t){const i=new Map;for(const e of t){const t=e.metadata?._image_template;if(!t||!Ge(t)||e.mediaUrl)continue;const o=i.get(t)||[];o.push(e),i.set(t,o)}if(0===i.size)return;const o=[];for(const[t,r]of i)o.push((async()=>{const i=r.map(e=>({entity_id:e.entityId||"",state:e.metadata?.new_state||"",old_state:e.metadata?.old_state||"",timestamp:e.start,attributes:e.metadata?.attributes||{},source_name:e.metadata?.source_name||""}));try{const o=await We(e,t,i);for(let e=0;e<r.length;e++){const t=o[e]?.trim();t&&(r[e].mediaUrl=t)}}catch(e){console.warn("[chronicle-card] Template resolution failed:",e)}})());await Promise.allSettled(o)}computeHash(e){return 0===e.length?"0":`${e.length}:${e[0]?.id}:${e[e.length-1]?.id}`}}function qe(e){if(e instanceof Date)return isNaN(e.getTime())?new Date:e;const t=new Date(e);return isNaN(t.getTime())?new Date:t}function Ye(e){return e<10?`0${e}`:String(e)}function Qe(e,t){const i=qe(e),o=i.getHours(),r=Ye(i.getMinutes());if("24h"===t)return`${Ye(o)}:${r}`;return`${0===o?12:o>12?o-12:o}:${r} ${o>=12?"PM":"AM"}`}function Xe(e){const t=qe(e);try{return t.toLocaleDateString(Ne(),{weekday:"short",month:"short",day:"numeric"})}catch{return t.toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})}}function Ze(e){const t=qe(e),i=(new Date).getTime()-t.getTime();if(i<0)return Xe(t);const o=Math.floor(i/1e3),r=Math.floor(o/60),a=Math.floor(r/60);return o<60?Pe("chronicle.time.just_now"):r<60?Pe("chronicle.time.minutes_ago").replace("{count}",String(r)):a<24&&function(e){const t=qe(e),i=new Date;return t.getFullYear()===i.getFullYear()&&t.getMonth()===i.getMonth()&&t.getDate()===i.getDate()}(t)?Pe("chronicle.time.hours_ago").replace("{count}",String(a)):function(e){const t=qe(e),i=new Date;return i.setDate(i.getDate()-1),t.getFullYear()===i.getFullYear()&&t.getMonth()===i.getMonth()&&t.getDate()===i.getDate()}(t)?Pe("chronicle.time.yesterday"):Xe(t)}const et=/^#(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,tt=/^(?:rgb|rgba|hsl|hsla)\(\s*[0-9.,%\s/-]+\s*\)$/i,it=/^[a-zA-Z]{3,20}$/;function ot(e,t="#78909C"){if("string"!=typeof e)return t;const i=e.trim();return et.test(i)||tt.test(i)||it.test(i)?i:t}function rt(e,t){const i=t.metadata??{},o={};for(const[e,t]of Object.entries(i))null!=t&&"object"!=typeof t&&(o[e]=t);return Object.assign(o,{id:i.raw_id??t.id,title:t.title,description:t.description,entity:t.entityId??"",entity_id:t.entityId??"",source:t.sourceId,category:t.category,severity:t.severity,start:t.start,end:t.end,media_url:t.mediaUrl??""}),e.replace(/\{([\w.]+)\}/g,(e,t)=>null!=o[t]?String(o[t]):e)}function at(e,t){if("string"==typeof e)return rt(e,t);if(Array.isArray(e))return e.map(e=>at(e,t));if(e&&"object"==typeof e){const i={};for(const[o,r]of Object.entries(e))i[o]=at(r,t);return i}return e}let nt=class extends se{constructor(){super(...arguments),this.severity="info"}render(){const e=ot(this.customColors?.[this.severity]??fe[this.severity]??fe.info);return G`
      <span class="badge" style="background-color: ${e}">
        ${this.severity}
      </span>
    `}};nt.styles=n`
    :host {
      display: inline-flex;
      flex-shrink: 0;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 3px 7px;
      border-radius: 20px;
      font-size: 9px;
      font-weight: 600;
      letter-spacing: 0.4px;
      text-transform: uppercase;
      color: #fff;
      line-height: 1;
      white-space: nowrap;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
  `,e([ue()],nt.prototype,"severity",void 0),e([ue()],nt.prototype,"customColors",void 0),nt=e([le("chronicle-severity-badge")],nt);let st=class extends se{render(){return G`
      <button @click=${this._handleClick}>
        ${this.action.icon?G`<ha-icon .icon=${this.action.icon}></ha-icon>`:""}
        ${this.action.label}
      </button>
    `}async _handleClick(e){if(e.stopPropagation(),this.action)switch(this.action.type){case"service":{if(!this.hass||!this.action.service)return;const[e,t]=this.action.service.split(".");e&&t&&await this.hass.callService(e,t,this.action.serviceData??{},this.action.target);break}case"navigate":this.action.url&&(this.action.url.startsWith("http")?window.open(this.action.url,"_blank"):(history.pushState(null,"",this.action.url),window.dispatchEvent(new Event("location-changed"))));break;case"fire-event":if(this.action.eventType){const e=new CustomEvent(this.action.eventType,{bubbles:!0,composed:!0,detail:this.action.eventData??{}});this.dispatchEvent(e)}}}};st.styles=n`
    :host {
      display: inline-flex;
    }
    button {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 4px 10px;
      border: 1px solid var(--divider-color, rgba(127,127,127,0.15));
      border-radius: 20px;
      background: var(--ha-card-background, var(--card-background-color, #fff));
      color: var(--primary-text-color, #333);
      font-size: 10.5px;
      font-weight: 500;
      cursor: pointer;
      transition: background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease, color 0.2s ease;
      font-family: inherit;
      line-height: 1.4;
      letter-spacing: 0.1px;
    }
    button:hover {
      background: var(--primary-color, #03a9f4);
      color: #fff;
      border-color: var(--primary-color, #03a9f4);
      box-shadow: 0 1px 4px rgba(3,169,244,0.25);
    }
    button:active {
      transform: scale(0.97);
    }
    ha-icon {
      --mdc-icon-size: 13px;
    }
  `,e([ue({attribute:!1})],st.prototype,"hass",void 0),e([ue({attribute:!1})],st.prototype,"action",void 0),st=e([le("chronicle-action-button")],st);let ct=class extends se{constructor(){super(...arguments),this.compact=!1,this.timeFormat="24h",this.animated=!1,this._holdTimer=null,this._holdFired=!1,this._startX=0,this._startY=0}render(){const e=this.event;if(!e)return W;const t=!1!==this.appearance?.show_images,i=!1!==this.appearance?.show_icons,o=!1!==this.appearance?.show_severity_badge,r=!1!==this.appearance?.show_category,a=Qe(e.start,this.timeFormat);return G`
      <div class="event-row">
        ${i?G`
          <div class="icon-wrap" style="background-color: ${ot(e.color)}">
            <ha-icon .icon=${n=e.icon,n&&n.startsWith("mdi:")?n:ye.default} style="color: ${function(e,t=.82){const i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);if(!i)return"#ffffff";const o=Math.round(parseInt(i[1],16)+(255-parseInt(i[1],16))*t),r=Math.round(parseInt(i[2],16)+(255-parseInt(i[2],16))*t),a=Math.round(parseInt(i[3],16)+(255-parseInt(i[3],16))*t);return`#${o.toString(16).padStart(2,"0")}${r.toString(16).padStart(2,"0")}${a.toString(16).padStart(2,"0")}`}(ot(e.color))}"></ha-icon>
          </div>
        `:""}

        <div class="event-item"
          @pointerdown=${this._onPointerDown}
          @pointerup=${this._onPointerUp}
          @pointercancel=${this._onPointerCancel}
          @contextmenu=${e=>{this.event.holdAction&&e.preventDefault()}}
        >
          <div class="content">
            <div class="top-row">
              <span class="title">${e.title}</span>
              ${o&&"info"!==e.severity?G`
                <chronicle-severity-badge
                  .severity=${e.severity}
                  .customColors=${this.appearance?.severity_colors}
                ></chronicle-severity-badge>
              `:""}
              <span class="time">${a}</span>
            </div>
            ${e.description?G`<div class="description">${e.description}</div>`:""}
            <div class="meta-row">
              ${r&&e.category?G`<span class="category-tag">${e.category}</span>`:""}
              ${r&&e.label?G`<span class="category-tag">${e.label}</span>`:""}
              ${r&&e.entityName?G`<span class="category-tag">${e.entityName}</span>`:""}
            </div>
            ${e.actions&&e.actions.length>0?G`
              <div class="actions-row">
                ${e.actions.map(t=>{return G`
                  <chronicle-action-button .action=${i=t,o=e,{...i,url:i.url?rt(i.url,o):i.url,serviceData:i.serviceData?at(i.serviceData,o):i.serviceData,eventData:i.eventData?at(i.eventData,o):i.eventData}} .hass=${this.hass}></chronicle-action-button>
                `;var i,o})}
              </div>
            `:""}
          </div>

          ${t&&e.mediaUrl?G`
            <img class="thumbnail" src=${e.mediaUrl} alt="" loading="lazy" />
          `:""}
        </div>
      </div>
    `;var n}_onPointerDown(e){this._holdFired=!1,this._startX=e.clientX,this._startY=e.clientY,this._holdTimer=setTimeout(()=>{this._holdFired=!0,this._handleAction("hold")},500)}_onPointerUp(e){this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=null);const t=e.clientX-this._startX,i=e.clientY-this._startY;Math.abs(t)>10||Math.abs(i)>10||this._holdFired||this._handleAction("tap")}_onPointerCancel(){this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=null)}_handleAction(e){const t="hold"===e?this.event.holdAction:this.event.tapAction,i=t?function(e,t){return{...e,navigation_path:e.navigation_path?rt(e.navigation_path,t):e.navigation_path,service_data:e.service_data?at(e.service_data,t):e.service_data}}(t,this.event):t;if(i&&"default"!==i.action)switch(i.action){case"more-info":this.event.entityId&&this.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:this.event.entityId}}));break;case"navigate":if(i.navigation_path){history.pushState(null,"",i.navigation_path);const e=new CustomEvent("location-changed",{bubbles:!0,composed:!0});window.dispatchEvent(e)}break;case"call-service":if(i.service&&this.hass){const[e,t]=i.service.split(".",2);e&&t&&this.hass.callService(e,t,i.service_data??{},i.target)}break;case"none":break;default:"tap"===e&&this.dispatchEvent(new CustomEvent("chronicle-show-detail",{bubbles:!0,composed:!0,detail:{event:this.event}}))}else"tap"===e&&this.dispatchEvent(new CustomEvent("chronicle-show-detail",{bubbles:!0,composed:!0,detail:{event:this.event}}))}};ct.styles=n`
    :host {
      display: block;
    }
    :host([animated]) .event-item {
      animation: chronicle-slide-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
    }
    @keyframes chronicle-slide-in {
      from {
        opacity: 0;
        transform: translateY(-6px) scale(0.98);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    .event-row {
      display: flex;
      align-items: flex-start;
      position: relative;
    }

    /* Icon sits outside the hoverable card area, over the timeline line */
    .icon-wrap {
      flex-shrink: 0;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 1px 4px rgba(0,0,0,0.12);
      z-index: 2;
      margin-top: 9px;
      margin-right: 8px;
    }
    .icon-wrap ha-icon {
      --mdc-icon-size: 17px;
      filter: drop-shadow(0 1px 1px rgba(0,0,0,0.15));
    }
    :host([compact]) .icon-wrap {
      width: 26px;
      height: 26px;
      margin-right: 6px;
    }
    :host([compact]) .icon-wrap ha-icon {
      --mdc-icon-size: 13px;
    }

    .event-item {
      flex: 1;
      min-width: 0;
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 9px 10px;
      border-radius: 12px;
      cursor: pointer;
      transition: background 0.2s ease, box-shadow 0.2s ease;
      border: 1px solid transparent;
    }
    .event-item:hover {
      background: var(--secondary-background-color, rgba(127,127,127,0.05));
      border-color: var(--divider-color, rgba(127,127,127,0.08));
      box-shadow: 0 1px 6px rgba(0,0,0,0.04);
    }
    .event-item:active {
      transform: scale(0.99);
      transition: transform 0.1s ease;
    }

    .content {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    .top-row {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .title {
      font-size: 13px;
      font-weight: 600;
      color: var(--primary-text-color, #333);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      flex: 1;
      min-width: 0;
      letter-spacing: -0.15px;
      line-height: 1.35;
    }
    .time {
      font-size: 10.5px;
      font-weight: 500;
      color: var(--secondary-text-color, #999);
      white-space: nowrap;
      flex-shrink: 0;
      font-variant-numeric: tabular-nums;
      letter-spacing: 0.2px;
    }

    .description {
      font-size: 12px;
      color: var(--secondary-text-color, #888);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 1.45;
      opacity: 0.85;
    }

    .meta-row {
      display: flex;
      align-items: center;
      gap: 5px;
      flex-wrap: wrap;
      margin-top: 1px;
    }
    .category-tag {
      font-size: 10px;
      font-weight: 500;
      padding: 1px 7px;
      border-radius: 20px;
      background: var(--divider-color, rgba(127,127,127,0.08));
      color: var(--secondary-text-color, #888);
      letter-spacing: 0.15px;
      line-height: 1.6;
    }

    .thumbnail {
      flex-shrink: 0;
      width: 52px;
      height: 52px;
      border-radius: 10px;
      object-fit: cover;
      background: var(--divider-color, rgba(127,127,127,0.08));
      box-shadow: 0 1px 4px rgba(0,0,0,0.1);
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .event-item:hover .thumbnail {
      transform: scale(1.03);
      box-shadow: 0 2px 8px rgba(0,0,0,0.14);
    }
    :host([compact]) .thumbnail {
      width: 36px;
      height: 36px;
      border-radius: 8px;
    }

    .actions-row {
      display: flex;
      gap: 6px;
      margin-top: 4px;
      flex-wrap: wrap;
    }

    :host([compact]) .content { gap: 0; }
    :host([compact]) .title { font-size: 12px; }
    :host([compact]) .description,
    :host([compact]) .meta-row,
    :host([compact]) .actions-row { display: none; }
  `,e([ue({attribute:!1})],ct.prototype,"event",void 0),e([ue({attribute:!1})],ct.prototype,"appearance",void 0),e([ue({attribute:!1})],ct.prototype,"hass",void 0),e([ue({type:Boolean})],ct.prototype,"compact",void 0),e([ue({type:String})],ct.prototype,"timeFormat",void 0),e([ue({type:Boolean,reflect:!0})],ct.prototype,"animated",void 0),ct=e([le("chronicle-event-item")],ct);let lt=class extends se{constructor(){super(...arguments),this.compact=!1,this.timeFormat="24h"}render(){const e=this.group;if(!e)return W;const t=e.representative,i=e.events[0],o=e.events[e.events.length-1],r=Qe(i.start,this.timeFormat),a=Qe(o.start,this.timeFormat),n=r===a?r:`${r} – ${a}`,s=!1!==this.appearance?.show_images?e.events.map(e=>e.mediaUrl).filter(Boolean):[],c=s.slice(0,3),l=s.length-3;return G`
      <div>
        <div class="group-row">
          <div class="icon-wrap" style="background-color: ${ot(t.color)}">
            <ha-icon .icon=${d=t.icon,d&&d.startsWith("mdi:")?d:ye.default} style="color: ${function(e,t=.82){const i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);if(!i)return"#ffffff";const o=Math.round(parseInt(i[1],16)+(255-parseInt(i[1],16))*t),r=Math.round(parseInt(i[2],16)+(255-parseInt(i[2],16))*t),a=Math.round(parseInt(i[3],16)+(255-parseInt(i[3],16))*t);return`#${o.toString(16).padStart(2,"0")}${r.toString(16).padStart(2,"0")}${a.toString(16).padStart(2,"0")}`}(ot(t.color))}"></ha-icon>
            <span class="count-badge">${e.events.length}</span>
          </div>

          <div class="group-header" @click=${this._toggle}>
            <div class="content">
              <div class="top-row">
                <span class="summary">${e.summary}</span>
                <span class="time-range">${n}</span>
              </div>
            </div>

            ${c.length>0?G`
              <div class="thumb-strip">
                ${c.map((e,t)=>2===t&&l>0?G`
                        <div class="thumb-more-wrap">
                          <img src=${e} alt="" loading="lazy" />
                          <span class="more-count">+${l}</span>
                        </div>
                      `:G`<img class="thumb" src=${e} alt="" loading="lazy" />`)}
              </div>
            `:""}

            <ha-icon
              class="chevron ${e.expanded?"open":""}"
              icon="mdi:chevron-down"
            ></ha-icon>
          </div>
        </div>

        <div class="children ${e.expanded?"expanded":""}">
          <div class="children-inner">
            ${e.expanded?G`
              <div class="children-content">
                ${e.events.map(e=>G`
                  <chronicle-event-item
                    .event=${e}
                    .appearance=${this.appearance}
                    .hass=${this.hass}
                    .timeFormat=${this.timeFormat}
                    ?compact=${this.compact}
                  ></chronicle-event-item>
                `)}
              </div>
            `:""}
          </div>
        </div>
      </div>
    `;var d}_toggle(){this.dispatchEvent(new CustomEvent("chronicle-toggle-group",{bubbles:!0,composed:!0,detail:{group:this.group}}))}};lt.styles=n`
    :host {
      display: block;
    }

    /* ── Outer row — mirrors event-item's .event-row exactly ── */
    .group-row {
      display: flex;
      align-items: flex-start;
      position: relative;
    }

    /* ── Icon — identical to event-item ── */
    .icon-wrap {
      flex-shrink: 0;
      width: 34px;
      height: 34px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 1px 4px rgba(0,0,0,0.12);
      z-index: 2;
      margin-top: 9px;
      margin-right: 8px;
      position: relative;
    }
    .icon-wrap ha-icon {
      --mdc-icon-size: 17px;
      filter: drop-shadow(0 1px 1px rgba(0,0,0,0.15));
    }
    :host([compact]) .icon-wrap {
      width: 26px;
      height: 26px;
      margin-right: 6px;
    }
    :host([compact]) .icon-wrap ha-icon {
      --mdc-icon-size: 13px;
    }

    .count-badge {
      position: absolute;
      top: -5px;
      right: -5px;
      min-width: 17px;
      height: 17px;
      border-radius: 9px;
      background: var(--primary-color, #03a9f4);
      color: #fff;
      font-size: 9px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 4px;
      border: 2px solid var(--ha-card-background, var(--card-background-color, #fff));
      font-variant-numeric: tabular-nums;
      line-height: 1;
      box-shadow: 0 1px 3px rgba(3,169,244,0.25);
    }

    /* ── Clickable header — mirrors event-item's .event-item ── */
    .group-header {
      flex: 1;
      min-width: 0;
      display: flex;
      align-items: flex-start;
      gap: 10px;
      padding: 9px 10px;
      border-radius: 12px;
      cursor: pointer;
      transition: background 0.15s ease, box-shadow 0.15s ease;
      border: 1px solid transparent;
    }
    .group-header:hover {
      background: var(--secondary-background-color, rgba(127,127,127,0.05));
      border-color: var(--divider-color, rgba(127,127,127,0.08));
      box-shadow: 0 1px 6px rgba(0,0,0,0.04);
    }
    .group-header:active {
      transform: scale(0.99);
      transition: transform 0.1s ease;
    }

    .content {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    /* ── Top row — title + time, same as event-item ── */
    .top-row {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .summary {
      font-size: 13px;
      font-weight: 600;
      color: var(--primary-text-color, #333);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      flex: 1;
      min-width: 0;
      letter-spacing: -0.15px;
      line-height: 1.35;
    }
    .time-range {
      font-size: 10.5px;
      font-weight: 500;
      color: var(--secondary-text-color, #999);
      white-space: nowrap;
      flex-shrink: 0;
      font-variant-numeric: tabular-nums;
      letter-spacing: 0.2px;
    }

    /* ── Thumbnail strip ── */
    .thumb-strip {
      display: flex;
      flex-shrink: 0;
      align-items: center;
    }
    .thumb-strip .thumb {
      width: 32px;
      height: 32px;
      border-radius: 6px;
      object-fit: cover;
      margin-left: -6px;
      border: 2px solid var(--ha-card-background, var(--card-background-color, #fff));
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      display: block;
      flex-shrink: 0;
    }
    .thumb-strip .thumb:first-child {
      margin-left: 0;
    }
    .thumb-more-wrap {
      position: relative;
      width: 32px;
      height: 32px;
      border-radius: 6px;
      overflow: hidden;
      margin-left: -6px;
      border: 2px solid var(--ha-card-background, var(--card-background-color, #fff));
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      flex-shrink: 0;
    }
    .thumb-more-wrap img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      filter: blur(2px) brightness(0.65);
    }
    .thumb-more-wrap .more-count {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 10px;
      font-weight: 700;
      text-shadow: 0 1px 2px rgba(0,0,0,0.5);
    }

    .chevron {
      flex-shrink: 0;
      transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
      color: var(--secondary-text-color, #999);
      --mdc-icon-size: 18px;
      margin-top: 2px;
    }
    .chevron.open {
      transform: rotate(180deg);
    }

    /* ── Expand/collapse via CSS grid — no max-height lag ── */
    .children {
      display: grid;
      grid-template-rows: 0fr;
      transition: grid-template-rows 0.25s cubic-bezier(0.16, 1, 0.3, 1);
      margin-left: 42px;
    }
    .children.expanded {
      grid-template-rows: 1fr;
    }
    .children-inner {
      overflow: hidden;
    }
    .children-content {
      padding: 4px 0 4px 10px;
      border-left: 2px solid var(--divider-color, rgba(127,127,127,0.12));
    }

    :host([compact]) .summary { font-size: 12px; }
  `,e([ue({attribute:!1})],lt.prototype,"group",void 0),e([ue({attribute:!1})],lt.prototype,"appearance",void 0),e([ue({attribute:!1})],lt.prototype,"hass",void 0),e([ue({type:Boolean})],lt.prototype,"compact",void 0),e([ue({type:String})],lt.prototype,"timeFormat",void 0),lt=e([le("chronicle-event-group")],lt);let dt=class extends se{constructor(){super(...arguments),this.label="",this.eventCount=0}render(){return G`
      <div class="date-header">
        <span class="label">${this.label}</span>
        <span class="line"></span>
        ${this.eventCount>0?G`<span class="count">${this.eventCount}</span>`:""}
      </div>
    `}};dt.styles=n`
    :host {
      display: block;
    }
    .date-header {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 14px 0 6px 42px;
      user-select: none;
    }
    .label {
      font-size: 10.5px;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: var(--secondary-text-color, #888);
      white-space: nowrap;
      opacity: 0.85;
    }
    .line {
      flex: 1;
      height: 1px;
      background: linear-gradient(
        to right,
        var(--divider-color, rgba(127,127,127,0.18)),
        transparent
      );
    }
    .count {
      font-size: 9.5px;
      font-weight: 600;
      color: var(--secondary-text-color, #999);
      background: var(--divider-color, rgba(127,127,127,0.1));
      border-radius: 10px;
      padding: 2px 8px;
      white-space: nowrap;
      font-variant-numeric: tabular-nums;
      letter-spacing: 0.2px;
    }
  `,e([ue()],dt.prototype,"label",void 0),e([ue()],dt.prototype,"eventCount",void 0),dt=e([le("chronicle-date-header")],dt);let ht=class extends se{constructor(){super(...arguments),this.message=""}render(){return G`
      <div class="empty">
        <div class="icon-ring">
          <ha-icon icon="mdi:timeline-clock-outline"></ha-icon>
        </div>
        <span class="text">${this.message||Pe("chronicle.no_events")}</span>
      </div>
    `}};ht.styles=n`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 140px;
    }
    .empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      padding: 36px 16px;
      text-align: center;
    }
    .icon-ring {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      border: 2px dashed var(--divider-color, rgba(127,127,127,0.18));
      display: flex;
      align-items: center;
      justify-content: center;
      animation: chronicle-pulse 3s ease-in-out infinite;
    }
    @keyframes chronicle-pulse {
      0%, 100% { opacity: 0.5; transform: scale(1); }
      50% { opacity: 0.7; transform: scale(1.04); }
    }
    ha-icon {
      --mdc-icon-size: 24px;
      color: var(--secondary-text-color, #999);
      opacity: 0.5;
    }
    .text {
      font-size: 12.5px;
      color: var(--secondary-text-color, #999);
      font-weight: 400;
      letter-spacing: 0.1px;
      opacity: 0.7;
    }
  `,e([ue()],ht.prototype,"message",void 0),ht=e([le("chronicle-empty-state")],ht);let ut=class extends se{constructor(){super(...arguments),this.items=[],this.compact=!1,this.timeFormat="24h",this.animateNew=!0}render(){if(!this.items||0===this.items.length)return G`<chronicle-empty-state></chronicle-empty-state>`;const e=this._groupByDate(this.items),t=this.appearance?.card_height??"400px",i="fill"===t||"100%"===t,o=i||"auto"===t?"":`max-height: ${t}`;return this.classList.toggle("fill",i),G`
      <div class="timeline-container" style=${o}>
        <div class="timeline-inner">
          ${e.map(e=>G`
            <div class="date-section">
              <chronicle-date-header
                .label=${e.label}
                .eventCount=${this._countEvents(e.items)}
              ></chronicle-date-header>
              ${e.items.map(e=>ve(e)?G`
                    <chronicle-event-group
                      .group=${e}
                      .appearance=${this.appearance}
                      .hass=${this.hass}
                      .timeFormat=${this.timeFormat}
                      ?compact=${this.compact}
                    ></chronicle-event-group>
                  `:G`
                    <chronicle-event-item
                      .event=${e}
                      .appearance=${this.appearance}
                      .hass=${this.hass}
                      .timeFormat=${this.timeFormat}
                      ?compact=${this.compact}
                    ></chronicle-event-item>
                  `)}
            </div>
          `)}
        </div>
      </div>
    `}_groupByDate(e){const t=new Map,i=new Date,o=this._dateKey(i),r=this._dateKey(new Date(i.getTime()-864e5));for(const i of e){const e=ve(i)?i.representative.start:i.start,a=this._dateKey(new Date(e));if(!t.has(a)){let i;if(a===o)i=Pe("chronicle.today");else if(a===r)i=Pe("chronicle.yesterday");else{const t=new Date(e);let o=Ne();try{new Intl.DateTimeFormat(o)}catch{o=void 0}i=t.toLocaleDateString(o,{weekday:"short",month:"short",day:"numeric"})}t.set(a,{dateKey:a,label:i,items:[]})}t.get(a).items.push(i)}return Array.from(t.values())}_dateKey(e){return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`}_countEvents(e){let t=0;for(const i of e)t+=ve(i)?i.events.length:1;return t}};function pt(e){return e&&e.startsWith("mdi:")?e:ye.default}ut.styles=n`
    :host {
      display: block;
    }

    /* Fill mode — host + container stretch to the parent's available height
       (set by chronicle-card's :host([fill]) flex chain). */
    :host(.fill) {
      height: 100%;
      display: flex;
      flex-direction: column;
      min-height: 0;
    }
    :host(.fill) .timeline-container {
      flex: 1 1 auto;
      min-height: 0;
    }

    .timeline-container {
      position: relative;
      overflow-y: auto;
      overscroll-behavior: contain;
      scrollbar-width: thin;
      scrollbar-color: var(--divider-color, rgba(127,127,127,0.15)) transparent;
    }
    .timeline-container::-webkit-scrollbar {
      width: 4px;
    }
    .timeline-container::-webkit-scrollbar-track {
      background: transparent;
    }
    .timeline-container::-webkit-scrollbar-thumb {
      background: var(--divider-color, rgba(127,127,127,0.2));
      border-radius: 4px;
    }

    .timeline-inner {
      position: relative;
    }

    /* Vertical timeline line — centered on icon column (17px = half of 34px icon) */
    .timeline-inner::before {
      content: '';
      position: absolute;
      left: 16px;
      top: 28px;
      bottom: 8px;
      width: 2px;
      background: linear-gradient(
        to bottom,
        transparent 0%,
        var(--divider-color, rgba(127,127,127,0.15)) 4%,
        var(--divider-color, rgba(127,127,127,0.15)) 92%,
        transparent 100%
      );
      border-radius: 2px;
    }

    .date-section {
      margin-bottom: 2px;
    }
    .date-section:last-child {
      margin-bottom: 0;
    }
  `,e([ue({attribute:!1})],ut.prototype,"items",void 0),e([ue({attribute:!1})],ut.prototype,"appearance",void 0),e([ue({attribute:!1})],ut.prototype,"hass",void 0),e([ue({type:Boolean})],ut.prototype,"compact",void 0),e([ue({type:String})],ut.prototype,"timeFormat",void 0),e([ue({type:Boolean})],ut.prototype,"animateNew",void 0),ut=e([le("chronicle-vertical-timeline")],ut);let gt=class extends se{constructor(){super(...arguments),this.items=[],this.timeFormat="24h"}render(){if(!this.items||0===this.items.length)return G`<chronicle-empty-state></chronicle-empty-state>`;const e=this.appearance?.card_height;return G`
      <div class="wrapper">
        <button class="scroll-btn left" @click=${()=>this._scroll(-200)}>
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </button>

        <div class="scroll-container" style=${e&&"auto"!==e?`height: ${e}; align-items: center;`:""}>
          ${this.items.map(e=>ve(e)?e.expanded?this._renderExpandedGroup(e):this._renderGroupCard(e):this._renderEventCard(e))}
        </div>

        <button class="scroll-btn right" @click=${()=>this._scroll(200)}>
          <ha-icon icon="mdi:chevron-right"></ha-icon>
        </button>
      </div>
    `}_renderEventCard(e){const t=!1!==this.appearance?.show_images,i=ot(e.color);return G`
      <div class="event-card" @click=${()=>this._showDetail(e)}>
        ${t&&e.mediaUrl?G`<img class="card-media" src=${e.mediaUrl} alt="" loading="lazy" />`:G`
            <div class="card-placeholder" style="background-color: ${i}">
              <ha-icon .icon=${pt(e.icon)}></ha-icon>
            </div>
          `}
        <div class="card-body">
          <div class="card-title">
            <span class="card-severity" style="background-color: ${i}"></span>
            ${e.title}
          </div>
          <div class="card-time">${Ze(e.start)}</div>
        </div>
      </div>
    `}_renderGroupCard(e){const t=e.representative,i=!1!==this.appearance?.show_images;return G`
      <div class="group-card" @click=${()=>this._toggleGroup(e)}>
        ${i&&t.mediaUrl?G`
            <div class="group-media" style="padding: 0;">
              <img class="card-media" src=${t.mediaUrl} alt="" loading="lazy" />
              <span class="group-badge">${e.events.length}</span>
            </div>
          `:G`
            <div class="group-media" style="background-color: ${ot(t.color)}">
              <ha-icon .icon=${pt(t.icon)}></ha-icon>
              <span class="group-badge">${e.events.length}</span>
            </div>
          `}
        <div class="group-body">
          <div class="group-title">${e.summary}</div>
          <div class="group-time">${Ze(t.start)}</div>
        </div>
      </div>
    `}_renderExpandedGroup(e){const t=!1!==this.appearance?.show_images;return G`
      <div class="group-expanded">
        ${e.events.map(e=>G`
          <div class="event-card" @click=${()=>this._showDetail(e)}>
            ${t&&e.mediaUrl?G`<img class="card-media" src=${e.mediaUrl} alt="" loading="lazy" />`:G`
                <div class="card-placeholder" style="background-color: ${ot(e.color)}">
                  <ha-icon .icon=${pt(e.icon)}></ha-icon>
                </div>
              `}
            <div class="card-body">
              <div class="card-title">
                <span class="card-severity" style="background-color: ${ot(e.color)}"></span>
                ${e.title}
              </div>
              <div class="card-time">${Ze(e.start)}</div>
            </div>
          </div>
        `)}
        <div class="group-collapse-btn" @click=${()=>this._toggleGroup(e)}>
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </div>
      </div>
    `}_scroll(e){this.scrollEl?.scrollBy({left:e,behavior:"smooth"})}_showDetail(e){this.dispatchEvent(new CustomEvent("chronicle-show-detail",{bubbles:!0,composed:!0,detail:{event:e}}))}_toggleGroup(e){this.dispatchEvent(new CustomEvent("chronicle-toggle-group",{bubbles:!0,composed:!0,detail:{group:e}}))}};gt.styles=n`
    :host {
      display: block;
    }

    .wrapper {
      position: relative;
    }

    .scroll-container {
      display: flex;
      gap: 10px;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      scrollbar-width: none;
      -webkit-overflow-scrolling: touch;
      padding: 8px 4px 12px;
    }
    .scroll-container::-webkit-scrollbar {
      display: none;
    }

    .scroll-btn {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: none;
      background: var(--ha-card-background, var(--card-background-color, #fff));
      box-shadow: 0 1px 6px rgba(0,0,0,0.12), 0 0 1px rgba(0,0,0,0.06);
      color: var(--primary-text-color, #333);
      cursor: pointer;
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.15s ease, box-shadow 0.15s ease;
    }
    .scroll-btn:hover {
      background: var(--primary-color, #03a9f4);
      color: #fff;
      box-shadow: 0 2px 10px rgba(0,0,0,0.15);
    }
    .scroll-btn.left { left: 4px; }
    .scroll-btn.right { right: 4px; }
    .scroll-btn ha-icon {
      --mdc-icon-size: 16px;
    }

    .event-card {
      flex-shrink: 0;
      width: 152px;
      scroll-snap-align: start;
      border-radius: 14px;
      overflow: hidden;
      background: var(--secondary-background-color, rgba(127,127,127,0.05));
      border: 1px solid var(--divider-color, rgba(127,127,127,0.08));
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .event-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 16px rgba(0,0,0,0.1);
    }
    .event-card:active {
      transform: translateY(-1px) scale(0.99);
    }

    .card-media {
      width: 100%;
      height: 88px;
      object-fit: cover;
      display: block;
      background: var(--divider-color, rgba(127,127,127,0.08));
    }
    .card-placeholder {
      width: 100%;
      height: 88px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .card-placeholder ha-icon {
      --mdc-icon-size: 26px;
      color: #fff;
      filter: drop-shadow(0 1px 2px rgba(0,0,0,0.15));
    }

    .card-body {
      padding: 8px 10px 10px;
    }
    .card-title {
      font-size: 11.5px;
      font-weight: 600;
      color: var(--primary-text-color, #333);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 3px;
      letter-spacing: -0.1px;
    }
    .card-time {
      font-size: 10px;
      color: var(--secondary-text-color, #999);
      font-variant-numeric: tabular-nums;
      letter-spacing: 0.1px;
    }
    .card-severity {
      display: inline-block;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      margin-right: 4px;
      vertical-align: middle;
      box-shadow: 0 0 3px currentColor;
    }

    /* Group card — collapsed state */
    .group-card {
      flex-shrink: 0;
      width: 152px;
      scroll-snap-align: start;
      border-radius: 14px;
      overflow: hidden;
      background: var(--secondary-background-color, rgba(127,127,127,0.05));
      border: 1px solid var(--divider-color, rgba(127,127,127,0.08));
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }
    .group-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 16px rgba(0,0,0,0.1);
    }
    .group-card:active {
      transform: translateY(-1px) scale(0.99);
    }
    .group-media {
      width: 100%;
      height: 88px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
    }
    .group-media .card-media {
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      object-fit: cover;
    }
    .group-media ha-icon {
      --mdc-icon-size: 26px;
      color: #fff;
      filter: drop-shadow(0 1px 2px rgba(0,0,0,0.15));
    }
    .group-badge {
      position: absolute;
      top: 6px;
      right: 6px;
      min-width: 22px;
      height: 22px;
      border-radius: 11px;
      background: var(--primary-color, #03a9f4);
      color: #fff;
      font-size: 11px;
      font-weight: 700;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 5px;
      line-height: 1;
      font-variant-numeric: tabular-nums;
      box-shadow: 0 1px 4px rgba(0,0,0,0.15);
    }
    .group-body {
      padding: 8px 10px 10px;
    }
    .group-title {
      font-size: 11.5px;
      font-weight: 600;
      color: var(--primary-text-color, #333);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 3px;
      letter-spacing: -0.1px;
    }
    .group-time {
      font-size: 10px;
      color: var(--secondary-text-color, #999);
      font-variant-numeric: tabular-nums;
      letter-spacing: 0.1px;
    }

    /* Expanded group — unfurled inline */
    .group-expanded {
      flex-shrink: 0;
      display: flex;
      gap: 6px;
      scroll-snap-align: start;
      padding: 4px;
      border-radius: 16px;
      background: var(--divider-color, rgba(127,127,127,0.06));
      border: 1px solid var(--divider-color, rgba(127,127,127,0.1));
      transition: background 0.2s ease;
    }
    .group-expanded .event-card {
      width: 140px;
      border: 1px solid var(--divider-color, rgba(127,127,127,0.12));
    }
    .group-expanded .card-media,
    .group-expanded .card-placeholder {
      height: 76px;
    }

    /* Collapse button inside expanded group */
    .group-collapse-btn {
      flex-shrink: 0;
      width: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border-radius: 10px;
      transition: background 0.15s ease;
    }
    .group-collapse-btn:hover {
      background: var(--secondary-background-color, rgba(127,127,127,0.08));
    }
    .group-collapse-btn ha-icon {
      --mdc-icon-size: 16px;
      color: var(--secondary-text-color, #999);
    }
  `,e([ue({attribute:!1})],gt.prototype,"items",void 0),e([ue({attribute:!1})],gt.prototype,"appearance",void 0),e([ue({attribute:!1})],gt.prototype,"hass",void 0),e([ue({type:String})],gt.prototype,"timeFormat",void 0),e([ge(".scroll-container")],gt.prototype,"scrollEl",void 0),gt=e([le("chronicle-horizontal-timeline")],gt);let mt=class extends se{constructor(){super(...arguments),this._event=null,this._open=!1,this._container=null}render(){return W}show(e){this._event=e,this._ensureContainer(),this._renderDialog(),requestAnimationFrame(()=>{requestAnimationFrame(()=>{this._open=!0,this._renderDialog()})})}close(){this._open=!1,this._renderDialog(),setTimeout(()=>{this._event=null,this._removeContainer()},350)}_ensureContainer(){if(this._container)return;this._container=document.createElement("div"),this._container.id="chronicle-detail-overlay",document.body.appendChild(this._container);this._container.attachShadow({mode:"open"}).innerHTML=""}_removeContainer(){this._container&&(this._container.remove(),this._container=null)}_renderDialog(){if(!this._container)return;const e=this._container.shadowRoot;if(!e)return;const t=this._event,i=this._open,o=t?.metadata?.clip_url||"",r=o||t?.mediaUrl||"",a=!!o||/\.(mp4|webm|mov|m3u8|mkv|ogv)([?#]|$)/i.test(r);var n;e.innerHTML=`\n      <style>\n        * { box-sizing: border-box; margin: 0; padding: 0; }\n\n        .overlay {\n          position: fixed;\n          top: 0; left: 0; right: 0; bottom: 0;\n          background: rgba(0, 0, 0, 0.5);\n          backdrop-filter: blur(4px);\n          -webkit-backdrop-filter: blur(4px);\n          z-index: 99999;\n          opacity: ${i?"1":"0"};\n          transition: opacity 0.3s ease;\n          pointer-events: ${i?"auto":"none"};\n        }\n\n        .dialog {\n          position: fixed;\n          z-index: 100000;\n          background: var(--card-background-color, #fff);\n          overflow-y: auto;\n          overscroll-behavior: contain;\n\n          /* Mobile: bottom sheet */\n          bottom: 0; left: 0; right: 0;\n          max-height: 88vh;\n          border-radius: 20px 20px 0 0;\n          box-shadow: 0 -2px 30px rgba(0, 0, 0, 0.2), 0 -1px 2px rgba(0,0,0,0.06);\n          transform: translateY(${i?"0":"100%"});\n          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);\n        }\n\n        @media (min-width: 600px) {\n          .dialog {\n            bottom: auto; left: 50%; right: auto;\n            top: 50%;\n            transform: translate(-50%, -50%) scale(${i?"1":"0.96"});\n            opacity: ${i?"1":"0"};\n            transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease;\n            border-radius: 18px;\n            max-width: 460px;\n            width: 92vw;\n            max-height: 82vh;\n            box-shadow: 0 12px 48px rgba(0, 0, 0, 0.18), 0 2px 8px rgba(0,0,0,0.08);\n          }\n        }\n\n        .handle {\n          width: 32px; height: 4px;\n          border-radius: 2px;\n          background: var(--divider-color, rgba(127,127,127,0.25));\n          margin: 10px auto 0;\n        }\n        @media (min-width: 600px) { .handle { display: none; } }\n\n        .media-wrap {\n          position: relative;\n          overflow: hidden;\n        }\n        .media {\n          width: 100%;\n          max-height: 240px;\n          object-fit: cover;\n          display: block;\n          background: var(--secondary-background-color, #f0f0f0);\n        }\n        .media-gradient {\n          position: absolute;\n          bottom: 0; left: 0; right: 0;\n          height: 48px;\n          background: linear-gradient(transparent, var(--card-background-color, #fff));\n          pointer-events: none;\n        }\n\n        .body { padding: 16px 20px 24px; }\n        .body-with-media { padding-top: 8px; }\n\n        .header {\n          display: flex;\n          align-items: flex-start;\n          gap: 12px;\n          margin-bottom: 16px;\n        }\n        .header-icon {\n          width: 40px; height: 40px;\n          border-radius: 50%;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          flex-shrink: 0;\n          box-shadow: 0 2px 6px rgba(0,0,0,0.12);\n        }\n        .header-icon ha-icon {\n          --mdc-icon-size: 20px;\n          color: #fff;\n          filter: drop-shadow(0 1px 1px rgba(0,0,0,0.15));\n        }\n        .header-text { flex: 1; min-width: 0; }\n        .header-title {\n          font-size: 17px;\n          font-weight: 700;\n          color: var(--primary-text-color, #333);\n          line-height: 1.3;\n          letter-spacing: -0.2px;\n        }\n        .header-time {\n          font-size: 12px;\n          color: var(--secondary-text-color, #888);\n          margin-top: 4px;\n          font-variant-numeric: tabular-nums;\n        }\n\n        .close-btn {\n          position: absolute;\n          top: 12px; right: 12px;\n          width: 32px; height: 32px;\n          border-radius: 50%;\n          border: none;\n          background: rgba(127,127,127,0.12);\n          backdrop-filter: blur(8px);\n          -webkit-backdrop-filter: blur(8px);\n          color: var(--primary-text-color, #333);\n          cursor: pointer;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          z-index: 2;\n          padding: 0;\n          transition: background 0.15s ease;\n          line-height: 0;\n        }\n        .close-btn:hover {\n          background: rgba(127,127,127,0.22);\n        }\n        .close-btn svg {\n          display: block;\n          width: 14px;\n          height: 14px;\n        }\n\n        .tags {\n          display: flex;\n          flex-wrap: wrap;\n          gap: 6px;\n          margin-bottom: 16px;\n        }\n        .tag {\n          font-size: 11px;\n          font-weight: 500;\n          padding: 3px 10px;\n          border-radius: 20px;\n          background: var(--divider-color, rgba(127,127,127,0.08));\n          color: var(--secondary-text-color, #777);\n          letter-spacing: 0.1px;\n        }\n        .severity-tag {\n          font-size: 10px;\n          font-weight: 600;\n          letter-spacing: 0.4px;\n          text-transform: uppercase;\n          padding: 4px 10px;\n          border-radius: 20px;\n          color: #fff;\n          display: inline-flex;\n          align-items: center;\n          justify-content: center;\n          line-height: 1;\n        }\n\n        .description {\n          font-size: 13.5px;\n          line-height: 1.65;\n          color: var(--primary-text-color, #444);\n          margin-bottom: 16px;\n          white-space: pre-wrap;\n          word-break: break-word;\n          opacity: 0.9;\n        }\n\n        .meta-table {\n          display: grid;\n          grid-template-columns: auto 1fr;\n          gap: 7px 14px;\n          font-size: 12px;\n          margin-bottom: 16px;\n          padding: 14px 16px;\n          background: var(--secondary-background-color, rgba(127,127,127,0.04));\n          border-radius: 12px;\n          border: 1px solid var(--divider-color, rgba(127,127,127,0.08));\n        }\n        .meta-label {\n          color: var(--secondary-text-color, #888);\n          font-weight: 500;\n          font-size: 11px;\n          text-transform: uppercase;\n          letter-spacing: 0.3px;\n        }\n        .meta-value {\n          color: var(--primary-text-color, #333);\n          font-size: 12.5px;\n        }\n\n        .more-info-btn {\n          display: inline-flex;\n          align-items: center;\n          gap: 6px;\n          padding: 8px 16px;\n          border-radius: 20px;\n          border: 1px solid var(--divider-color, rgba(127,127,127,0.2));\n          background: var(--secondary-background-color, rgba(127,127,127,0.06));\n          color: var(--primary-color, #03a9f4);\n          font-size: 12px;\n          font-weight: 600;\n          font-family: inherit;\n          cursor: pointer;\n          margin-bottom: 16px;\n          transition: background 0.15s ease, border-color 0.15s ease;\n          line-height: 1;\n        }\n        .more-info-btn:hover {\n          background: rgba(3, 169, 244, 0.08);\n          border-color: var(--primary-color, #03a9f4);\n        }\n        .more-info-btn svg {\n          display: block;\n        }\n      </style>\n\n      <div class="overlay"></div>\n      <div class="dialog">\n        ${t?`\n          <div class="handle"></div>\n          <button class="close-btn"><svg viewBox="0 0 24 24" width="14" height="14"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor"/></svg></button>\n\n          ${r?`\n            <div class="media-wrap">\n              ${a?`\n                <video class="media" src="${this._escHtml(r)}" controls autoplay muted loop playsinline></video>\n              `:`\n                <img class="media" src="${this._escHtml(r)}" alt="" />\n                <div class="media-gradient"></div>\n              `}\n            </div>\n          `:""}\n\n          <div class="body ${r?"body-with-media":""}">\n            <div class="header">\n              <div class="header-icon" style="background-color: ${ot(t.color)}">\n                <ha-icon icon="${n=t.icon,n&&n.startsWith("mdi:")?n:ye.default}"></ha-icon>\n              </div>\n              <div class="header-text">\n                <div class="header-title">${this._escHtml(t.title)}</div>\n                <div class="header-time">${this._formatDateTime(t.start)}</div>\n              </div>\n            </div>\n\n            <div class="tags">\n              <span class="severity-tag" style="background-color: ${ot(this._severityColor(t.severity))}">${t.severity}</span>\n              ${t.category?`<span class="tag">${this._escHtml(t.category)}</span>`:""}\n              ${t.label?`<span class="tag">${this._escHtml(t.label)}</span>`:""}\n              ${t.sourceType?`<span class="tag">${this._escHtml(t.sourceType)}</span>`:""}\n            </div>\n\n            ${t.description?`<div class="description">${this._escHtml(t.description)}</div>`:""}\n\n            ${t.entityId&&"history"===t.sourceType?`\n              <button class="more-info-btn" data-entity="${this._escHtml(t.entityId)}">\n                <svg viewBox="0 0 24 24" width="14" height="14"><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/></svg>\n                ${this._escHtml(Pe("chronicle.detail.more_info"))}\n              </button>\n            `:""}\n\n            <div class="meta-table">\n              ${t.entityName?`\n                <span class="meta-label">${this._escHtml(Pe("chronicle.detail.entity"))}</span>\n                <span class="meta-value">${this._escHtml(t.entityName)}</span>\n              `:""}\n              ${t.entityId?`\n                <span class="meta-label">${this._escHtml(Pe("chronicle.detail.entity_id"))}</span>\n                <span class="meta-value">${this._escHtml(t.entityId)}</span>\n              `:""}\n              <span class="meta-label">${this._escHtml(Pe("chronicle.detail.source"))}</span>\n              <span class="meta-value">${this._escHtml(t.sourceId)}</span>\n              <span class="meta-label">${this._escHtml(Pe("chronicle.detail.start"))}</span>\n              <span class="meta-value">${this._formatDateTime(t.start)}</span>\n              ${t.end&&t.end!==t.start?`\n                <span class="meta-label">${this._escHtml(Pe("chronicle.detail.end"))}</span>\n                <span class="meta-value">${this._formatDateTime(t.end)}</span>\n              `:""}\n            </div>\n          </div>\n        `:""}\n      </div>\n    `;const s=e.querySelector(".overlay"),c=e.querySelector(".close-btn"),l=e.querySelector(".more-info-btn");s?.addEventListener("click",()=>this.close()),c?.addEventListener("click",()=>this.close()),l?.addEventListener("click",()=>{const e=l.getAttribute("data-entity");e&&(this.close(),setTimeout(()=>{this.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:e}}))},100))})}_escHtml(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}_severityColor(e){const t={critical:"#D32F2F",warning:"#FF9800",info:"#2196F3",debug:"#9E9E9E"};return t[e]||t.info}_formatDateTime(e){try{return new Date(e).toLocaleString(void 0,{weekday:"short",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}catch{return e}}connectedCallback(){super.connectedCallback(),this._boundKeydown=this._handleKeydown.bind(this),document.addEventListener("keydown",this._boundKeydown)}disconnectedCallback(){super.disconnectedCallback(),this._boundKeydown&&document.removeEventListener("keydown",this._boundKeydown),this._removeContainer()}_handleKeydown(e){"Escape"===e.key&&this._open&&this.close()}};mt.styles=n`
    :host { display: none; }
  `,e([ue({attribute:!1})],mt.prototype,"hass",void 0),e([pe()],mt.prototype,"_event",void 0),e([pe()],mt.prototype,"_open",void 0),mt=e([le("chronicle-detail-dialog")],mt);let vt=class extends se{constructor(){super(...arguments),this._items=[],this._layout="vertical",this._store=new Je,this._liveSubscribed=!1}static getConfigElement(){return document.createElement("chronicle-card-editor")}static getStubConfig(){return{type:"custom:chronicle-card",title:"Timeline",layout:"vertical",sources:[]}}setConfig(e){if(!e)throw new Error("No configuration provided");this._config={...me,...e,filters:{...me.filters,...e.filters},grouping:{...me.grouping,...e.grouping},appearance:{...me.appearance,...e.appearance}},this._layout=this._config.layout??"vertical",this._syncLocale(),this._store.configure(this._config),this._storeUnsub?.(),this._storeUnsub=this._store.subscribe(()=>{this._items=[...this._store.items]})}_syncLocale(){var e;e=this._config?.language||this._hass?.locale?.language||this._hass?.language||"en",je=e}set hass(e){this._hass=e,this._syncLocale(),this.requestUpdate(),this._store.fetch(e).catch(e=>{console.warn("[chronicle-card] Fetch error:",e)}),this._liveSubscribed||(this._liveSubscribed=!0,this._store.subscribeLive(e).catch(()=>{}))}get hass(){return this._hass}connectedCallback(){super.connectedCallback(),this._hass&&this._store.subscribeLive(this._hass).catch(()=>{})}disconnectedCallback(){super.disconnectedCallback(),this._store.unsubscribeLive(),this._liveSubscribed=!1,this._storeUnsub?.()}willUpdate(){const e=this._config?.appearance?.card_height;this.toggleAttribute("fill","fill"===e||"100%"===e)}render(){if(!this._config)return W;this._syncLocale();const e=!1!==this._config.show_header,t=!1!==this._config.show_layout_toggle,i=this._config.appearance??{},o=this._config.time_format??"24h",r=i.compact??!1,a=!1!==i.animate_new_events;return G`
      <ha-card>
        ${e?G`
          <div class="card-header">
            <span class="title">${this._config.title??""}</span>
            ${t?G`
              <div class="header-actions">
                <button
                  class="layout-toggle ${"vertical"===this._layout?"active":""}"
                  @click=${()=>this._setLayout("vertical")}
                  title="Vertical timeline"
                >
                  <ha-icon icon="mdi:view-sequential"></ha-icon>
                </button>
                <button
                  class="layout-toggle ${"horizontal"===this._layout?"active":""}"
                  @click=${()=>this._setLayout("horizontal")}
                  title="Horizontal timeline"
                >
                  <ha-icon icon="mdi:view-carousel"></ha-icon>
                </button>
              </div>
            `:""}
          </div>
        `:""}

        <div class="card-content" @chronicle-show-detail=${this._onShowDetail} @chronicle-toggle-group=${this._onToggleGroup}>
          ${"vertical"===this._layout?G`
              <chronicle-vertical-timeline
                .items=${this._items}
                .appearance=${i}
                .hass=${this.hass}
                .timeFormat=${o}
                ?compact=${r}
                ?animateNew=${a}
              ></chronicle-vertical-timeline>
            `:G`
              <chronicle-horizontal-timeline
                .items=${this._items}
                .appearance=${i}
                .hass=${this.hass}
                .timeFormat=${o}
              ></chronicle-horizontal-timeline>
            `}
        </div>

        <chronicle-detail-dialog .hass=${this.hass}></chronicle-detail-dialog>
      </ha-card>
    `}_setLayout(e){this._layout=e}_onShowDetail(e){const t=e.detail.event;this._dialog&&this._dialog.show(t)}_onToggleGroup(e){const t=e.detail.group;this._store.toggleGroup(t)}getCardSize(){return 4}};vt.styles=n`
    :host {
      display: block;
      contain: content;
    }

    /* Fill mode (card_height: fill / 100%) — stretch the whole chain to the
       height the dashboard gives us, e.g. Panel layout. */
    :host([fill]) {
      height: 100%;
    }

    ha-card {
      overflow: hidden;
      background: var(--ha-card-background, var(--card-background-color, #fff));
      border-radius: var(--ha-card-border-radius, 12px);
    }

    :host([fill]) ha-card {
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    :host([fill]) .card-content {
      flex: 1 1 auto;
      min-height: 0;
      display: flex;
      flex-direction: column;
    }

    :host([fill]) .card-content > * {
      flex: 1 1 auto;
      min-height: 0;
    }

    .card-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 16px 6px;
    }

    .title {
      font-size: 15px;
      font-weight: 700;
      color: var(--primary-text-color, #333);
      letter-spacing: -0.3px;
    }

    .header-actions {
      display: flex;
      gap: 3px;
    }

    .layout-toggle {
      width: 30px;
      height: 30px;
      border-radius: 8px;
      border: none;
      background: transparent;
      color: var(--secondary-text-color, #999);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.2s ease, color 0.2s ease;
    }
    .layout-toggle:hover {
      background: var(--secondary-background-color, rgba(127,127,127,0.08));
      color: var(--primary-text-color, #333);
    }
    .layout-toggle.active {
      background: var(--primary-color, #03a9f4);
      color: #fff;
      box-shadow: 0 1px 4px rgba(3,169,244,0.25);
    }
    .layout-toggle ha-icon {
      --mdc-icon-size: 17px;
    }

    .card-content {
      padding: 0 16px 14px;
    }
  `,e([pe()],vt.prototype,"_config",void 0),e([pe()],vt.prototype,"_items",void 0),e([pe()],vt.prototype,"_layout",void 0),e([ge("chronicle-detail-dialog")],vt.prototype,"_dialog",void 0),vt=e([le("chronicle-card")],vt);const ft={binary_sensor:[{value:"on",label:"On"},{value:"off",label:"Off"}],lock:[{value:"locked",label:"Locked"},{value:"unlocked",label:"Unlocked"},{value:"jammed",label:"Jammed"},{value:"locking",label:"Locking"},{value:"unlocking",label:"Unlocking"}],cover:[{value:"open",label:"Open"},{value:"closed",label:"Closed"},{value:"opening",label:"Opening"},{value:"closing",label:"Closing"}],light:[{value:"on",label:"On"},{value:"off",label:"Off"}],switch:[{value:"on",label:"On"},{value:"off",label:"Off"}],fan:[{value:"on",label:"On"},{value:"off",label:"Off"}],input_boolean:[{value:"on",label:"On"},{value:"off",label:"Off"}],person:[{value:"home",label:"Home"},{value:"not_home",label:"Away"}],device_tracker:[{value:"home",label:"Home"},{value:"not_home",label:"Away"}],alarm_control_panel:[{value:"armed_away",label:"Armed Away"},{value:"armed_home",label:"Armed Home"},{value:"armed_night",label:"Armed Night"},{value:"disarmed",label:"Disarmed"},{value:"triggered",label:"Triggered"},{value:"pending",label:"Pending"}],climate:[{value:"off",label:"Off"},{value:"heat",label:"Heating"},{value:"cool",label:"Cooling"},{value:"auto",label:"Auto"},{value:"fan_only",label:"Fan Only"},{value:"dry",label:"Dry"}],vacuum:[{value:"cleaning",label:"Cleaning"},{value:"docked",label:"Docked"},{value:"returning",label:"Returning"},{value:"idle",label:"Idle"},{value:"paused",label:"Paused"}],media_player:[{value:"playing",label:"Playing"},{value:"paused",label:"Paused"},{value:"idle",label:"Idle"},{value:"off",label:"Off"}]},yt=[{value:"on",label:"On"},{value:"off",label:"Off"}];let bt=class extends se{constructor(){super(...arguments),this.index=0,this._clearGrouping=e=>{e.preventDefault(),this._update("grouping",void 0)}}_getHint(){if("history"===this.source.type||"logbook"===this.source.type){const e=this._getHistoryEntities();if(1===e.length)return e[0];if(e.length>1)return`${e.length} entities`}return this.source.entity?this.source.entity:this.source.url?this.source.url:this.source.events?.length?`${this.source.events.length} event(s)`:""}_getHistoryEntities(){return this.source.entities?.length?this.source.entities:this.source.entity?[this.source.entity]:[]}_getStateOptions(e){const t=e.split(".")[0];return ft[t]||yt}_getFriendlyName(e){return this.hass?.states[e]?.attributes?.friendly_name||e}render(){if(!this.source)return W;const e=this.source.name||"Unnamed",t=this._getHint(),i=this.source.type;return G`
      <details>
        <summary>
          <span class="type-badge ${i}">${{calendar:"calendar",rest:"rest",history:"entity state",static:"template",logbook:"logbook"}[i]||i}</span>
          <span class="source-name">${e}</span>
          ${t?G`<span class="source-hint">${t}</span>`:W}
          <button class="remove-btn" @click=${this._remove}>Remove</button>
        </summary>
        <div class="source-body">
          <div class="row">
            <div class="field" style="flex:2;">
              <ha-selector
                .hass=${this.hass}
                .selector=${{select:{options:[{value:"calendar",label:"Calendar Entity"},{value:"rest",label:"REST API"},{value:"history",label:"Entity State"},{value:"static",label:"Template"},{value:"logbook",label:"Logbook"}],mode:"dropdown"}}}
                .value=${this.source.type}
                .label=${"Source type"}
                @value-changed=${e=>this._onSourceTypeSelected(e.detail.value)}
              ></ha-selector>
            </div>
            <div class="field" style="flex:3;">
              <ha-selector
                .hass=${this.hass}
                .selector=${{text:{}}}
                .value=${this.source.name??""}
                .label=${"Name"}
                .helper=${"Display name for this source in the timeline and filters."}
                @value-changed=${e=>this._update("name",e.detail.value)}
              ></ha-selector>
            </div>
          </div>

          ${this._renderTypeFields()}

          <div class="section-label">Appearance</div>

          <div class="row">
            <div class="field">
              <label>Default Icon</label>
              <ha-icon-picker
                .hass=${this.hass}
                .value=${this.source.default_icon??""}
                @value-changed=${e=>this._update("default_icon",e.detail.value)}
              ></ha-icon-picker>
            </div>
            <div class="field">
              <label>Default Color</label>
              <input type="color" .value=${this.source.default_color??"#2196F3"} @input=${e=>this._update("default_color",e.target.value)} />
            </div>
            <div class="field">
              <label>Severity</label>
              <ha-selector
                .hass=${this.hass}
                .selector=${{select:{options:[{value:"critical",label:"Critical"},{value:"warning",label:"Warning"},{value:"info",label:"Info"},{value:"debug",label:"Debug"}],mode:"dropdown"}}}
                .value=${this.source.default_severity??"info"}
                .label=${"Default severity"}
                @value-changed=${e=>this._update("default_severity",e.detail.value)}
              ></ha-selector>
            </div>
          </div>

          ${this._renderIconColorMaps()}

          ${this._renderGroupingSection()}
        </div>
      </details>
    `}_renderGroupingSection(){const e=this.source.grouping??{},t=!!this.source.grouping,i=Object.keys(e).filter(t=>void 0!==e[t]),o=t?`Customized · ${i.length} override${1===i.length?"":"s"}`:"Inherits the card-level Grouping config";return G`
      <ha-expansion-panel
        .outlined=${!0}
        .header=${"Grouping Override"}
        .secondary=${o}
      >
        <div class="entity-panel-content">
          <ha-selector
            .hass=${this.hass}
            .selector=${{number:{min:0,max:3600,mode:"box",unit_of_measurement:"seconds"}}}
            .value=${e.window_seconds??""}
            .label=${"Window (seconds)"}
            .helper=${"Grouping window. Leave blank to inherit the card-level value."}
            @value-changed=${e=>this._updateGrouping("window_seconds",e.detail.value)}
          ></ha-selector>

          <ha-selector
            .hass=${this.hass}
            .selector=${{number:{min:1,max:100,mode:"box"}}}
            .value=${e.min_group_size??""}
            .label=${"Minimum group size"}
            .helper=${"Smallest bucket that forms a group. Leave blank to inherit."}
            @value-changed=${e=>this._updateGrouping("min_group_size",e.detail.value)}
          ></ha-selector>

          <ha-selector
            .hass=${this.hass}
            .selector=${{select:{options:[{value:"category",label:"Category"},{value:"source",label:"Source"},{value:"entity",label:"Entity"},{value:"none",label:"None"}],mode:"dropdown"}}}
            .value=${e.group_by??""}
            .label=${"Group by"}
            .helper=${"Leave unset to inherit the card-level grouping dimension."}
            @value-changed=${e=>this._updateGrouping("group_by",e.detail.value||void 0)}
          ></ha-selector>

          <ha-selector
            .hass=${this.hass}
            .selector=${{text:{}}}
            .value=${e.group_name??""}
            .label=${"Group name"}
            .helper=${"Custom summary label. Placeholders: {count}, {label}, {source}, {entity}."}
            @value-changed=${e=>this._updateGrouping("group_name",e.detail.value)}
          ></ha-selector>

          ${t?G`
            <button class="add-label-btn" @click=${this._clearGrouping}>Clear override</button>
          `:W}
        </div>
      </ha-expansion-panel>
    `}_updateGrouping(e,t){const i={...this.source.grouping??{}};null==t||""===t||"number"==typeof t&&Number.isNaN(t)?delete i[e]:i[e]=t,this._update("grouping",Object.keys(i).length>0?i:void 0)}_renderTypeFields(){switch(this.source.type){case"calendar":return G`
          <div class="field">
            <label>Calendar Entity</label>
            <ha-selector
              .hass=${this.hass}
              .selector=${{entity:{filter:[{domain:"calendar"}]}}}
              .value=${this.source.entity??""}
              .label=${"Calendar entity"}
              @value-changed=${e=>this._update("entity",e.detail.value)}
            ></ha-selector>
          </div>
        `;case"rest":return G`
          <div class="field">
            <ha-selector
              .hass=${this.hass}
              .selector=${{text:{}}}
              .value=${this.source.url??""}
              .label=${"API URL"}
              .helper=${"Internal HA API path (no /api/ prefix needed) or full external URL"}
              @value-changed=${e=>this._update("url",e.detail.value)}
            ></ha-selector>
          </div>
          <div class="field">
            <ha-selector
              .hass=${this.hass}
              .selector=${{text:{}}}
              .value=${this.source.response_path??""}
              .label=${"Response path"}
              .helper=${'Dot-path to the array in the JSON response (e.g. "events" or "data.items")'}
              @value-changed=${e=>this._update("response_path",e.detail.value)}
            ></ha-selector>
          </div>
          <div class="field">
            <label>Field Map (JSON)</label>
            <textarea
              .value=${this._fieldMapToString()}
              @change=${this._onFieldMapChange}
              placeholder='{"id":"uid","title":"title","start":"start","mediaUrl":"key_frame"}'
            ></textarea>
            <p class="help-text">Maps response fields to: id, title, description, start, end, mediaUrl, category, label, entityId</p>
          </div>
          <div class="field">
            <ha-selector
              .hass=${this.hass}
              .selector=${{text:{}}}
              .value=${this.source.media_url_template??""}
              .label=${"Media URL template"}
              .helper=${"Build image URL from response fields using {field} placeholders. Overrides mediaUrl field mapping."}
              @value-changed=${e=>this._update("media_url_template",e.detail.value)}
            ></ha-selector>
          </div>
          <div class="field">
            <label>WebSocket Params (JSON)</label>
            <textarea
              .value=${this._wsParamsToString()}
              @change=${this._onWsParamsChange}
              placeholder='{"type":"frigate/events/get","instance_id":"frigate","labels":["cat"],"limit":25}'
            ></textarea>
            <p class="help-text">Use WebSocket instead of REST. Overrides API URL. Required for Frigate events.</p>
          </div>
          <div class="field">
            <ha-selector
              .hass=${this.hass}
              .selector=${{number:{min:1,max:3600,mode:"box",unit_of_measurement:"seconds"}}}
              .value=${this.source.poll_interval??60}
              .label=${"Poll interval"}
              @value-changed=${e=>this._update("poll_interval",e.detail.value)}
            ></ha-selector>
          </div>
        `;case"history":return G`
          <div class="field">
            <ha-selector
              .hass=${this.hass}
              .selector=${{entity:{multiple:!0}}}
              .value=${this._getHistoryEntities()}
              .label=${"Entities"}
              @value-changed=${this._onEntitiesChanged}
            ></ha-selector>
            <p class="help-text">Each state change becomes a timeline event.</p>
          </div>
          ${this._renderPerEntityConfig()}
          ${this._renderTemplateAndActions()}
          ${this._renderSourceLevelDefaults()}
        `;case"logbook":return G`
          <div class="field">
            <ha-selector
              .hass=${this.hass}
              .selector=${{entity:{multiple:!0}}}
              .value=${this._getHistoryEntities()}
              .label=${"Entities"}
              @value-changed=${this._onEntitiesChanged}
            ></ha-selector>
            <p class="help-text">Each logbook entry becomes a timeline event — captures automation/script triggers even when the state change is too fast for the history database. Poll-based (no live push).</p>
          </div>
          ${this._renderSourceLevelDefaults()}
        `;case"static":return G`
          <div class="field">
            <label>Events (JSON array)</label>
            <textarea
              .value=${this._staticEventsToString()}
              @change=${this._onStaticEventsChange}
              placeholder='[{"title":"Filter Change","start":"2026-04-01T10:00:00","icon":"mdi:air-filter"}]'
            ></textarea>
            <p class="help-text">Define events directly. Fields: title, start, end, description, icon, color, severity, category</p>
          </div>
        `;default:return W}}_renderPerEntityConfig(){const e=this._getHistoryEntities();return 0===e.length?W:G`
      <div class="section-label">Entity Settings</div>
      <p class="help-text" style="margin-bottom: 8px;">
        Expand an entity to customize its name, state filter, labels, icon, and severity.
        Unconfigured entities use smart defaults based on their device class.
      </p>
      ${e.map(e=>this._renderEntityPanel(e))}
    `}_renderEntityPanel(e){const t=this.source.entity_config?.[e]??{},i=this._getFriendlyName(e),o=Object.keys(t).length>0;e.split(".")[0];const r=this._getStateOptions(e),a=t.state_map?Object.entries(t.state_map):[];return G`
      <ha-expansion-panel
        .outlined=${!0}
        .header=${i}
        .secondary=${o?`${e} · customized`:e}
      >
        <div class="entity-panel-content">
          <!-- Custom name -->
          <ha-selector
            .hass=${this.hass}
            .selector=${{text:{}}}
            .value=${t.name??""}
            .label=${"Custom display name"}
            .helper=${"Override the entity's friendly name in the timeline"}
            @value-changed=${t=>this._updateEntityConfig(e,"name",t.detail.value)}
          ></ha-selector>

          <!-- State filter (chip-based multi-select) -->
          <ha-selector
            .hass=${this.hass}
            .selector=${{select:{options:r,multiple:!0,custom_value:!0,mode:"list"}}}
            .value=${t.state_filter??[]}
            .label=${"State filter"}
            .helper=${"Only log events for these states. Leave empty to log all changes."}
            @value-changed=${t=>this._updateEntityConfig(e,"state_filter",t.detail.value)}
          ></ha-selector>

          <!-- State labels (key-value pairs) -->
          ${a.length>0||t.state_map?G`
            <label>State Labels</label>
            ${a.map(([t,i],o)=>G`
              <div class="state-label-row">
                <ha-selector
                  .hass=${this.hass}
                  .selector=${{text:{}}}
                  .value=${t}
                  .label=${"State value"}
                  @value-changed=${t=>this._updateStateMapKey(e,o,t.detail.value,i)}
                ></ha-selector>
                <ha-selector
                  .hass=${this.hass}
                  .selector=${{text:{}}}
                  .value=${i}
                  .label=${"Display label"}
                  @value-changed=${i=>this._updateStateMapValue(e,t,i.detail.value)}
                ></ha-selector>
                <button
                  class="state-label-remove"
                  @click=${()=>this._removeStateMapEntry(e,t)}
                  title="Remove label"
                >&#x2715;</button>
              </div>
            `)}
          `:W}
          <button
            class="add-label-btn"
            @click=${()=>this._addStateMapEntry(e)}
          >+ Add state label</button>

          <!-- Icon override -->
          <div class="clearable-row">
            <ha-selector
              .hass=${this.hass}
              .selector=${{icon:{}}}
              .value=${t.icon??""}
              .label=${"Icon override"}
              @value-changed=${t=>this._updateEntityConfig(e,"icon",t.detail.value)}
            ></ha-selector>
            ${t.icon?G`
              <button class="clear-btn" @click=${()=>this._updateEntityConfig(e,"icon",void 0)} title="Clear icon override">&times;</button>
            `:W}
          </div>

          <!-- Color override -->
          <div class="clearable-row">
            <div class="field" style="flex:1;margin-bottom:0;">
              <label>Color override</label>
              <input
                type="color"
                .value=${t.color??this.source.default_color??"#2196F3"}
                @input=${t=>this._updateEntityConfig(e,"color",t.target.value)}
              />
            </div>
            ${t.color?G`
              <button class="clear-btn" @click=${()=>this._updateEntityConfig(e,"color",void 0)} title="Clear color override">&times;</button>
            `:W}
          </div>

          <!-- Severity override -->
          <ha-selector
            .hass=${this.hass}
            .selector=${{select:{options:[{value:"default",label:"Detail Dialog (default)"},{value:"critical",label:"Critical"},{value:"warning",label:"Warning"},{value:"info",label:"Info"},{value:"debug",label:"Debug"}],mode:"dropdown"}}}
            .value=${t.severity??""}
            .label=${"Severity override"}
            @value-changed=${t=>this._updateEntityConfig(e,"severity",t.detail.value||void 0)}
          ></ha-selector>

          <!-- Per-entity image template -->
          <ha-selector
            .hass=${this.hass}
            .selector=${{template:{}}}
            .value=${t.image_template??""}
            .label=${"Image template override"}
            .helper=${"Overrides source-level template. Preview will show errors — variables are injected at render time."}
            @value-changed=${t=>this._updateEntityConfig(e,"image_template",t.detail.value||void 0)}
          ></ha-selector>

          <!-- Per-entity tap action -->
          ${this._renderEntityActionEditor(e,"tap_action","Tap Action",t.tap_action)}

          <!-- Per-entity hold action -->
          ${this._renderEntityActionEditor(e,"hold_action","Hold Action",t.hold_action)}
        </div>
      </ha-expansion-panel>
    `}_renderTemplateAndActions(){return"history"!==this.source.type?W:G`
      <div class="section-label">Image Template & Actions</div>
      <div class="field">
        <ha-selector
          .hass=${this.hass}
          .selector=${{template:{}}}
          .value=${this.source.image_template??""}
          .label=${"Image template (Jinja2)"}
          .helper=${"Variables: entity_id, state, old_state, timestamp, attributes, source_name. Preview will show errors — variables are injected at render time."}
          @value-changed=${e=>this._update("image_template",e.detail.value||void 0)}
        ></ha-selector>
      </div>
      <div class="row">
        <div class="field">
          ${this._renderActionEditor("tap_action","Tap Action",this.source.tap_action)}
        </div>
        <div class="field">
          ${this._renderActionEditor("hold_action","Hold Action",this.source.hold_action)}
        </div>
      </div>
      <p class="help-text">
        Default tap opens the detail dialog. "More Info" opens the entity's native HA dialog.
      </p>
    `}_renderActionEditor(e,t,i){return G`
      <ha-selector
        .hass=${this.hass}
        .selector=${{select:{options:[{value:"default",label:"Detail Dialog (default)"},{value:"more-info",label:"More Info"},{value:"navigate",label:"Navigate"},{value:"call-service",label:"Call Service"},{value:"none",label:"None"}],mode:"dropdown"}}}
        .value=${i?.action||"default"}
        .label=${t}
        @value-changed=${t=>this._onActionTypeChange(e,t.detail.value)}
      ></ha-selector>
      ${"navigate"===i?.action?G`
        <ha-selector
          .hass=${this.hass}
          .selector=${{text:{}}}
          .value=${i.navigation_path??""}
          .label=${"Navigation path"}
          @value-changed=${t=>this._updateActionField(e,"navigation_path",t.detail.value)}
        ></ha-selector>
      `:W}
      ${"call-service"===i?.action?G`
        <ha-selector
          .hass=${this.hass}
          .selector=${{text:{}}}
          .value=${i.service??""}
          .label=${"Service (e.g. light.toggle)"}
          @value-changed=${t=>this._updateActionField(e,"service",t.detail.value)}
        ></ha-selector>
      `:W}
    `}_onActionTypeChange(e,t){if(t&&"default"!==t){const i=this.source[e]??{};this._update(e,{...i,action:t})}else this._update(e,void 0)}_updateActionField(e,t,i){const o=this.source[e]??{};this._update(e,{...o,[t]:i||void 0})}_renderEntityActionEditor(e,t,i,o){return G`
      <ha-selector
        .hass=${this.hass}
        .selector=${{select:{options:[{value:"default",label:"Detail Dialog (default)"},{value:"more-info",label:"More Info"},{value:"navigate",label:"Navigate"},{value:"call-service",label:"Call Service"},{value:"none",label:"None"}],mode:"dropdown"}}}
        .value=${o?.action||"default"}
        .label=${i}
        @value-changed=${i=>{const r=i.detail.value;this._updateEntityConfig(e,t,r&&"default"!==r?{...o??{},action:r}:void 0)}}
      ></ha-selector>
      ${"navigate"===o?.action?G`
        <ha-selector
          .hass=${this.hass}
          .selector=${{text:{}}}
          .value=${o.navigation_path??""}
          .label=${"Navigation path"}
          @value-changed=${i=>{this._updateEntityConfig(e,t,{...o??{},navigation_path:i.detail.value||void 0})}}
        ></ha-selector>
      `:W}
      ${"call-service"===o?.action?G`
        <ha-selector
          .hass=${this.hass}
          .selector=${{text:{}}}
          .value=${o.service??""}
          .label=${"Service (e.g. light.toggle)"}
          @value-changed=${i=>{this._updateEntityConfig(e,t,{...o??{},service:i.detail.value||void 0})}}
        ></ha-selector>
      `:W}
    `}_renderSourceLevelDefaults(){return W}_onEntitiesChanged(e){const t=e.detail.value;if(Array.isArray(t)&&(this._update("entities",t.length>0?t:void 0),this.source.entity&&this._update("entity",void 0),this.source.entity_config)){const e=new Set(t),i={};for(const[t,o]of Object.entries(this.source.entity_config))e.has(t)&&(i[t]=o);this._update("entity_config",Object.keys(i).length>0?i:void 0)}}_updateEntityConfig(e,t,i){const o={...this.source.entity_config??{}},r={...o[e]??{},[t]:i};(!i||Array.isArray(i)&&0===i.length)&&delete r[t],0===Object.keys(r).length?delete o[e]:o[e]=r,this._update("entity_config",Object.keys(o).length>0?o:void 0)}_addStateMapEntry(e){const t={...this.source.entity_config??{}},i={...t[e]??{}},o={...i.state_map??{},"":""};i.state_map=o,t[e]=i,this._update("entity_config",t)}_updateStateMapKey(e,t,i,o){const r={...this.source.entity_config??{}},a={...r[e]??{}},n=Object.entries(a.state_map??{});t<n.length&&n.splice(t,1),i&&n.push([i,o]),a.state_map=Object.fromEntries(n),0===Object.keys(a.state_map).length&&delete a.state_map,r[e]=a,0===Object.keys(a).length&&delete r[e],this._update("entity_config",Object.keys(r).length>0?r:void 0)}_updateStateMapValue(e,t,i){const o={...this.source.entity_config??{}},r={...o[e]??{}},a={...r.state_map??{},[t]:i};r.state_map=a,o[e]=r,this._update("entity_config",o)}_removeStateMapEntry(e,t){const i={...this.source.entity_config??{}},o={...i[e]??{}},r={...o.state_map??{}};delete r[t],0===Object.keys(r).length?delete o.state_map:o.state_map=r,0===Object.keys(o).length?delete i[e]:i[e]=o,this._update("entity_config",Object.keys(i).length>0?i:void 0)}_renderIconColorMaps(){return"static"===this.source.type?W:G`
      <div class="section-label">Category Mapping (optional)</div>
      <div class="row">
        <div class="field">
          <label>Icon Map (JSON)</label>
          <textarea
            .value=${this._mapToString(this.source.icon_map)}
            @change=${e=>this._onMapChange("icon_map",e)}
            placeholder='{"person":"mdi:walk","vehicle":"mdi:car"}'
            style="min-height:40px;"
          ></textarea>
        </div>
        <div class="field">
          <label>Color Map (JSON)</label>
          <textarea
            .value=${this._mapToString(this.source.color_map)}
            @change=${e=>this._onMapChange("color_map",e)}
            placeholder='{"person":"#FF9800","vehicle":"#2196F3"}'
            style="min-height:40px;"
          ></textarea>
        </div>
      </div>
    `}_fieldMapToString(){if(!this.source.field_map||0===Object.keys(this.source.field_map).length)return"";try{return JSON.stringify(this.source.field_map,null,2)}catch{return""}}_wsParamsToString(){if(!this.source.ws_params||0===Object.keys(this.source.ws_params).length)return"";try{return JSON.stringify(this.source.ws_params,null,2)}catch{return""}}_onWsParamsChange(e){const t=e.target.value.trim();if(t)try{const e=JSON.parse(t);"object"!=typeof e||Array.isArray(e)||this._update("ws_params",e)}catch{}else this._update("ws_params",void 0)}_onFieldMapChange(e){const t=e.target.value.trim();if(t)try{const e=JSON.parse(t);"object"!=typeof e||Array.isArray(e)||this._update("field_map",e)}catch{}else this._update("field_map",void 0)}_staticEventsToString(){if(!this.source.events||0===this.source.events.length)return"";try{return JSON.stringify(this.source.events,null,2)}catch{return""}}_onStaticEventsChange(e){const t=e.target.value.trim();if(t)try{const e=JSON.parse(t);Array.isArray(e)&&this._update("events",e)}catch{}else this._update("events",void 0)}_mapToString(e){if(!e||0===Object.keys(e).length)return"";try{return JSON.stringify(e)}catch{return""}}_onMapChange(e,t){const i=t.target.value.trim();if(i)try{const t=JSON.parse(i);"object"!=typeof t||Array.isArray(t)||this._update(e,t)}catch{}else this._update(e,void 0)}_onTypeChange(e){this._update("type",e.target.value)}_onSourceTypeSelected(e){e&&this._update("type",e)}_update(e,t){this.dispatchEvent(new CustomEvent("source-changed",{bubbles:!0,composed:!0,detail:{index:this.index,key:e,value:t}}))}_remove(e){e.preventDefault(),e.stopPropagation(),this.dispatchEvent(new CustomEvent("source-removed",{bubbles:!0,composed:!0,detail:{index:this.index}}))}};bt.styles=n`
    :host {
      display: block;
      margin-bottom: 6px;
    }

    /* Collapsible source wrapper */
    details {
      border: 1px solid var(--divider-color, rgba(127,127,127,0.2));
      border-radius: 10px;
      overflow: hidden;
      background: var(--secondary-background-color, rgba(127,127,127,0.04));
    }
    summary {
      padding: 10px 12px;
      font-size: 13px;
      cursor: pointer;
      user-select: none;
      list-style: none;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    summary::-webkit-details-marker { display: none; }
    summary::before {
      content: '▸';
      transition: transform 0.15s ease;
      font-size: 10px;
      color: var(--secondary-text-color, #999);
      flex-shrink: 0;
    }
    details[open] > summary::before {
      transform: rotate(90deg);
    }

    .type-badge {
      display: inline-block;
      padding: 2px 7px;
      border-radius: 4px;
      font-size: 10px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.3px;
      flex-shrink: 0;
    }
    .type-badge.calendar { background: rgba(33,150,243,0.12); color: #1976d2; }
    .type-badge.rest { background: rgba(156,39,176,0.12); color: #7b1fa2; }
    .type-badge.history { background: rgba(255,152,0,0.12); color: #e65100; }
    .type-badge.static { background: rgba(76,175,80,0.12); color: #2e7d32; }
    .type-badge.logbook { background: rgba(0,150,136,0.12); color: #00695c; }

    .source-name {
      font-weight: 500;
      color: var(--primary-text-color, #333);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      min-width: 0;
    }
    .source-hint {
      font-size: 11px;
      color: var(--secondary-text-color, #999);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      min-width: 0;
      flex: 1;
    }
    .remove-btn {
      border: none;
      background: none;
      color: var(--error-color, #db4437);
      cursor: pointer;
      font-size: 11px;
      padding: 3px 6px;
      border-radius: 4px;
      font-family: inherit;
      flex-shrink: 0;
      margin-left: auto;
    }
    .remove-btn:hover {
      background: rgba(219, 68, 55, 0.1);
    }

    .source-body {
      padding: 12px;
      border-top: 1px solid var(--divider-color, rgba(127,127,127,0.12));
    }
    .field {
      margin-bottom: 8px;
    }
    .row {
      display: flex;
      gap: 8px;
    }
    .row .field { flex: 1; }
    label {
      display: block;
      font-size: 11px;
      font-weight: 500;
      color: var(--secondary-text-color, #888);
      margin-bottom: 4px;
      text-transform: uppercase;
      letter-spacing: 0.4px;
    }
    textarea {
      width: 100%;
      padding: 8px 10px;
      border: 1px solid var(--divider-color, rgba(127,127,127,0.2));
      border-radius: 6px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color, #333);
      font-size: 13px;
      font-family: inherit;
      box-sizing: border-box;
    }
    textarea:focus {
      outline: none;
      border-color: var(--primary-color, #03a9f4);
    }
    input[type="color"] {
      width: 100%;
      padding: 8px 10px;
      border: 1px solid var(--divider-color, rgba(127,127,127,0.2));
      border-radius: 6px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color, #333);
      font-size: 13px;
      font-family: inherit;
      box-sizing: border-box;
    }
    input[type="color"]:focus {
      outline: none;
      border-color: var(--primary-color, #03a9f4);
    }
    ha-textfield, ha-select, ha-entity-picker, ha-icon-picker, ha-selector {
      display: block;
      width: 100%;
    }
    textarea {
      min-height: 60px;
      resize: vertical;
      font-family: monospace;
      font-size: 12px;
    }
    .section-label {
      font-size: 11px;
      font-weight: 600;
      color: var(--secondary-text-color, #777);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin: 12px 0 6px;
      padding-top: 8px;
      border-top: 1px solid var(--divider-color, rgba(127,127,127,0.12));
    }
    .help-text {
      font-size: 11px;
      color: var(--secondary-text-color, #999);
      margin: 2px 0 0;
      line-height: 1.4;
    }

    /* Per-source grouping override section uses ha-expansion-panel +
       ha-selector — no custom styles needed, all HA-native. */

    /* Per-entity expansion panels */
    ha-expansion-panel {
      margin-bottom: 4px;
      --expansion-panel-summary-padding: 8px 12px;
    }
    .entity-panel-content {
      padding: 8px 12px 12px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .state-label-row {
      display: flex;
      gap: 8px;
      align-items: flex-end;
      margin-bottom: 4px;
    }
    .state-label-row ha-selector {
      flex: 1;
    }
    .state-label-remove {
      border: none;
      background: none;
      color: var(--error-color, #db4437);
      cursor: pointer;
      font-size: 16px;
      padding: 4px 8px;
      flex-shrink: 0;
      line-height: 1;
      margin-bottom: 8px;
    }
    .state-label-remove:hover {
      background: rgba(219, 68, 55, 0.1);
      border-radius: 4px;
    }
    .add-label-btn {
      border: 1px dashed var(--divider-color, rgba(127,127,127,0.3));
      background: transparent;
      color: var(--primary-color, #03a9f4);
      cursor: pointer;
      font-size: 12px;
      padding: 6px 10px;
      border-radius: 6px;
      font-family: inherit;
    }
    .add-label-btn:hover {
      border-color: var(--primary-color, #03a9f4);
      background: rgba(3, 169, 244, 0.04);
    }

    .clearable-row {
      display: flex;
      align-items: center;
      gap: 4px;
    }
    .clearable-row > :first-child {
      flex: 1;
      min-width: 0;
    }
    .clear-btn {
      flex-shrink: 0;
      width: 28px;
      height: 28px;
      border: 1px solid var(--divider-color, rgba(127,127,127,0.2));
      border-radius: 50%;
      background: var(--secondary-background-color, rgba(127,127,127,0.06));
      color: var(--secondary-text-color, #888);
      cursor: pointer;
      font-size: 16px;
      line-height: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      transition: background 0.15s ease, color 0.15s ease;
    }
    .clear-btn:hover {
      background: rgba(219, 68, 55, 0.1);
      color: var(--error-color, #db4437);
      border-color: var(--error-color, #db4437);
    }
  `,e([ue({attribute:!1})],bt.prototype,"source",void 0),e([ue({type:Number})],bt.prototype,"index",void 0),e([ue({attribute:!1})],bt.prototype,"hass",void 0),bt=e([le("chronicle-source-editor")],bt);let _t=class extends se{connectedCallback(){super.connectedCallback(),customElements.get("ha-form")||customElements.get("hui-tile-card")?.getConfigElement(),customElements.get("ha-entity-picker")||customElements.get("hui-entities-card")?.getConfigElement(),customElements.get("hui-action-editor")||customElements.get("hui-button-card")?.getConfigElement()}setConfig(e){this._config={...me,...e,filters:{...me.filters,...e.filters},grouping:{...me.grouping,...e.grouping},appearance:{...me.appearance,...e.appearance}}}render(){if(!this._config)return W;const e=this._config,t=e.grouping??{},i=e.appearance??{};return G`
      <div class="editor">
        <!-- General -->
        <details open>
          <summary>General</summary>
          <div class="section-body">
            <div class="field">
              <ha-selector
                .hass=${this.hass}
                .selector=${{text:{}}}
                .value=${e.title??""}
                .label=${"Title"}
                @value-changed=${e=>this._set("title",e.detail.value)}
              ></ha-selector>
            </div>
            <div class="row">
              <div class="field">
                <ha-selector
                  .hass=${this.hass}
                  .selector=${{select:{options:[{value:"vertical",label:"Vertical"},{value:"horizontal",label:"Horizontal"}],mode:"dropdown"}}}
                  .value=${e.layout??"vertical"}
                  .label=${"Layout"}
                  @value-changed=${e=>this._set("layout",e.detail.value)}
                ></ha-selector>
              </div>
              <div class="field">
                <ha-selector
                  .hass=${this.hass}
                  .selector=${{select:{options:[{value:"24h",label:"24 Hour"},{value:"12h",label:"12 Hour"}],mode:"dropdown"}}}
                  .value=${e.time_format??"24h"}
                  .label=${"Time format"}
                  @value-changed=${e=>this._set("time_format",e.detail.value)}
                ></ha-selector>
              </div>
            </div>
            <div class="row">
              <div class="field">
                <ha-selector
                  .hass=${this.hass}
                  .selector=${{number:{min:1,max:1e3,mode:"box"}}}
                  .value=${e.max_events??50}
                  .label=${"Max events"}
                  @value-changed=${e=>this._set("max_events",e.detail.value)}
                ></ha-selector>
              </div>
              <div class="field">
                <ha-selector
                  .hass=${this.hass}
                  .selector=${{number:{min:1,max:365,mode:"box",unit_of_measurement:"days"}}}
                  .value=${e.days_back??7}
                  .label=${"Days back"}
                  @value-changed=${e=>this._set("days_back",e.detail.value)}
                ></ha-selector>
              </div>
            </div>
            <div class="toggle-row">
              <span class="toggle-label">Show Header</span>
              ${this._renderToggle(!1!==e.show_header,e=>this._set("show_header",e))}
            </div>
            <div class="toggle-row">
              <span class="toggle-label">Show Layout Toggle</span>
              ${this._renderToggle(!1!==e.show_layout_toggle,e=>this._set("show_layout_toggle",e))}
            </div>
          </div>
        </details>

        <!-- Sources -->
        <details>
          <summary>Sources (${(e.sources??[]).length})</summary>
          <div class="section-body"
            @source-changed=${this._onSourceChanged}
            @source-removed=${this._onSourceRemoved}
          >
            ${(e.sources??[]).map((e,t)=>G`
              <chronicle-source-editor
                .source=${e}
                .index=${t}
                .hass=${this.hass}
              ></chronicle-source-editor>
            `)}
            <div class="add-source-row">
              <button class="add-btn" @click=${()=>this._addSource("calendar")}>+ Calendar</button>
              <button class="add-btn" @click=${()=>this._addSource("rest")}>+ REST API</button>
              <button class="add-btn" @click=${()=>this._addSource("history")}>+ Entity State</button>
              <button class="add-btn" @click=${()=>this._addSource("static")}>+ Template</button>
              <button class="add-btn" @click=${()=>this._addSource("logbook")}>+ Logbook</button>
            </div>
          </div>
        </details>

        <!-- Filters -->
        <details>
          <summary>Filters</summary>
          <div class="section-body">
            <div class="field">
              <ha-selector
                .hass=${this.hass}
                .selector=${{text:{}}}
                .value=${e.filters?.search??""}
                .label=${"Search"}
                .helper=${"Filter events by keyword"}
                @value-changed=${e=>this._setNested("filters","search",e.detail.value)}
              ></ha-selector>
            </div>
            <div class="field">
              <ha-selector
                .hass=${this.hass}
                .selector=${{select:{options:this._getCategoryOptions(),multiple:!0,custom_value:!0,mode:"list"}}}
                .value=${e.filters?.categories??[]}
                .label=${"Categories"}
                .helper=${"Filter timeline to specific event categories"}
                @value-changed=${e=>this._setNested("filters","categories",e.detail.value)}
              ></ha-selector>
            </div>
            <div class="field">
              <ha-selector
                .hass=${this.hass}
                .selector=${{select:{options:[{value:"critical",label:"Critical"},{value:"warning",label:"Warning"},{value:"info",label:"Info"},{value:"debug",label:"Debug"}],multiple:!0}}}
                .value=${e.filters?.severities??[]}
                .label=${"Severities"}
                .helper=${"Filter timeline to specific severity levels"}
                @value-changed=${e=>this._setNested("filters","severities",e.detail.value)}
              ></ha-selector>
            </div>
            <div class="field">
              <ha-selector
                .hass=${this.hass}
                .selector=${{select:{options:this._getSourceNameOptions(),multiple:!0,custom_value:!0}}}
                .value=${e.filters?.sources??[]}
                .label=${"Sources"}
                .helper=${"Filter timeline to specific source names"}
                @value-changed=${e=>this._setNested("filters","sources",e.detail.value)}
              ></ha-selector>
            </div>
            <div class="field">
              <ha-selector
                .hass=${this.hass}
                .selector=${{entity:{multiple:!0}}}
                .value=${e.filters?.entities??[]}
                .label=${"Filter Entities"}
                @value-changed=${e=>this._setNested("filters","entities",e.detail.value??[])}
              ></ha-selector>
            </div>

            <details class="nested-details">
              <summary>Exclusions</summary>
              <div class="section-body">
                <div class="field">
                  <ha-selector
                    .hass=${this.hass}
                    .selector=${{text:{}}}
                    .value=${e.filters?.exclude_search??""}
                    .label=${"Exclude search"}
                    .helper=${"Hide events matching keyword"}
                    @value-changed=${e=>this._setNested("filters","exclude_search",e.detail.value)}
                  ></ha-selector>
                </div>
                <div class="field">
                  <ha-selector
                    .hass=${this.hass}
                    .selector=${{select:{options:this._getCategoryOptions(),multiple:!0,custom_value:!0,mode:"list"}}}
                    .value=${e.filters?.exclude_categories??[]}
                    .label=${"Exclude Categories"}
                    .helper=${"Hide events in these categories"}
                    @value-changed=${e=>this._setNested("filters","exclude_categories",e.detail.value)}
                  ></ha-selector>
                </div>
                <div class="field">
                  <ha-selector
                    .hass=${this.hass}
                    .selector=${{select:{options:[{value:"critical",label:"Critical"},{value:"warning",label:"Warning"},{value:"info",label:"Info"},{value:"debug",label:"Debug"}],multiple:!0}}}
                    .value=${e.filters?.exclude_severities??[]}
                    .label=${"Exclude Severities"}
                    @value-changed=${e=>this._setNested("filters","exclude_severities",e.detail.value)}
                  ></ha-selector>
                </div>
                <div class="field">
                  <ha-selector
                    .hass=${this.hass}
                    .selector=${{select:{options:this._getSourceNameOptions(),multiple:!0,custom_value:!0}}}
                    .value=${e.filters?.exclude_sources??[]}
                    .label=${"Exclude Sources"}
                    @value-changed=${e=>this._setNested("filters","exclude_sources",e.detail.value)}
                  ></ha-selector>
                </div>
                <div class="field">
                  <ha-selector
                    .hass=${this.hass}
                    .selector=${{entity:{multiple:!0}}}
                    .value=${e.filters?.exclude_entities??[]}
                    .label=${"Exclude Entities"}
                    @value-changed=${e=>this._setNested("filters","exclude_entities",e.detail.value??[])}
                  ></ha-selector>
                </div>
              </div>
            </details>
          </div>
        </details>

        <!-- Grouping -->
        <details>
          <summary>Grouping</summary>
          <div class="section-body">
            <div class="toggle-row">
              <span class="toggle-label">Enable Grouping</span>
              ${this._renderToggle(!1!==t.enabled,e=>this._setNested("grouping","enabled",e))}
            </div>
            <div class="row">
              <div class="field">
                <ha-selector
                  .hass=${this.hass}
                  .selector=${{number:{min:0,max:3600,mode:"box",unit_of_measurement:"seconds"}}}
                  .value=${t.window_seconds??120}
                  .label=${"Window (seconds)"}
                  @value-changed=${e=>this._setNested("grouping","window_seconds",e.detail.value)}
                ></ha-selector>
              </div>
              <div class="field">
                <ha-selector
                  .hass=${this.hass}
                  .selector=${{number:{min:1,max:100,mode:"box"}}}
                  .value=${t.min_group_size??3}
                  .label=${"Min group size"}
                  @value-changed=${e=>this._setNested("grouping","min_group_size",e.detail.value)}
                ></ha-selector>
              </div>
            </div>
            <div class="field">
              <ha-selector
                .hass=${this.hass}
                .selector=${{select:{options:[{value:"category",label:"Category"},{value:"source",label:"Source"},{value:"entity",label:"Entity"},{value:"none",label:"None"}],mode:"dropdown"}}}
                .value=${t.group_by??"category"}
                .label=${"Group by"}
                @value-changed=${e=>this._setNested("grouping","group_by",e.detail.value)}
              ></ha-selector>
            </div>
            <div class="field">
              <ha-selector
                .hass=${this.hass}
                .selector=${{text:{}}}
                .value=${t.group_name??""}
                .label=${"Group name"}
                .helper=${'Custom summary label. Placeholders: {count}, {label}, {source}, {entity}. Leave empty for the default "N X events" summary.'}
                @value-changed=${e=>this._setNested("grouping","group_name",e.detail.value||void 0)}
              ></ha-selector>
            </div>
          </div>
        </details>

        <!-- Appearance -->
        <details>
          <summary>Appearance</summary>
          <div class="section-body">
            <div class="field">
              <ha-selector
                .hass=${this.hass}
                .selector=${{select:{options:[{value:"400px",label:"400px (default)"},{value:"fill",label:"Fill available space (Panel layout)"},{value:"auto",label:"Auto (grow with content)"}],custom_value:!0,mode:"dropdown"}}}
                .value=${i.card_height??"400px"}
                .label=${"Card height"}
                .helper=${'A fixed height (e.g. 400px), "fill" to use the full dashboard height (Panel layout), or "auto" to grow with content.'}
                @value-changed=${e=>this._setNested("appearance","card_height",e.detail.value)}
              ></ha-selector>
            </div>
            <div class="toggle-row">
              <span class="toggle-label">Compact Mode</span>
              ${this._renderToggle(i.compact??!1,e=>this._setNested("appearance","compact",e))}
            </div>
            <div class="toggle-row">
              <span class="toggle-label">Show Images</span>
              ${this._renderToggle(!1!==i.show_images,e=>this._setNested("appearance","show_images",e))}
            </div>
            <div class="toggle-row">
              <span class="toggle-label">Show Icons</span>
              ${this._renderToggle(!1!==i.show_icons,e=>this._setNested("appearance","show_icons",e))}
            </div>
            <div class="toggle-row">
              <span class="toggle-label">Show Severity Badge</span>
              ${this._renderToggle(!1!==i.show_severity_badge,e=>this._setNested("appearance","show_severity_badge",e))}
            </div>
            <div class="toggle-row">
              <span class="toggle-label">Show Category Tags</span>
              ${this._renderToggle(!1!==i.show_category,e=>this._setNested("appearance","show_category",e))}
            </div>
            <div class="toggle-row">
              <span class="toggle-label">Animate New Events</span>
              ${this._renderToggle(!1!==i.animate_new_events,e=>this._setNested("appearance","animate_new_events",e))}
            </div>

            <div style="margin-top: 12px;">
              <label>Severity Colors</label>
              <div class="row">
                <div class="field">
                  <label>Critical</label>
                  <input type="color" .value=${i.severity_colors?.critical??"#D32F2F"} @input=${e=>this._setSeverityColor("critical",e.target.value)} />
                </div>
                <div class="field">
                  <label>Warning</label>
                  <input type="color" .value=${i.severity_colors?.warning??"#FF9800"} @input=${e=>this._setSeverityColor("warning",e.target.value)} />
                </div>
                <div class="field">
                  <label>Info</label>
                  <input type="color" .value=${i.severity_colors?.info??"#2196F3"} @input=${e=>this._setSeverityColor("info",e.target.value)} />
                </div>
                <div class="field">
                  <label>Debug</label>
                  <input type="color" .value=${i.severity_colors?.debug??"#9E9E9E"} @input=${e=>this._setSeverityColor("debug",e.target.value)} />
                </div>
              </div>
            </div>
          </div>
        </details>
      </div>
    `}_renderToggle(e,t){return G`
      <ha-switch
        .checked=${e}
        @change=${e=>t(e.target.checked)}
      ></ha-switch>
    `}_set(e,t){this._config={...this._config,[e]:t},this._fire()}_setNested(e,t,i){const o=this._config[e]??{};this._config={...this._config,[e]:{...o,[t]:i}},this._fire()}_setSeverityColor(e,t){const i=this._config.appearance?.severity_colors??{};this._setNested("appearance","severity_colors",{...i,[e]:t})}_csvToArray(e){const t=e.trim();return t?t.split(",").map(e=>e.trim()).filter(Boolean):[]}_getCategoryOptions(){return[{value:"person",label:"Person"},{value:"vehicle",label:"Vehicle"},{value:"animal",label:"Animal"},{value:"pet",label:"Pet"},{value:"security",label:"Security"},{value:"motion",label:"Motion"},{value:"door",label:"Door"},{value:"lock",label:"Lock"},{value:"camera",label:"Camera"},{value:"light",label:"Light"},{value:"climate",label:"Climate"},{value:"automation",label:"Automation"},{value:"system",label:"System"}]}_getSourceNameOptions(){return(this._config.sources??[]).filter(e=>e.name).map(e=>({value:e.name,label:e.name}))}_addSource(e){const t=[...this._config.sources??[],{type:e,name:{calendar:"Calendar",rest:"REST API",history:"Entity State",static:"Template",logbook:"Logbook"}[e]}];this._config={...this._config,sources:t},this._fire()}_onSourceChanged(e){const{index:t,key:i,value:o}=e.detail,r=[...this._config.sources??[]];r[t]={...r[t],[i]:o},this._config={...this._config,sources:r},this._fire()}_onSourceRemoved(e){const{index:t}=e.detail,i=[...this._config.sources??[]];i.splice(t,1),this._config={...this._config,sources:i},this._fire()}_fire(){this.dispatchEvent(new CustomEvent("config-changed",{bubbles:!0,composed:!0,detail:{config:this._config}}))}};_t.styles=n`
    :host {
      display: block;
    }

    .editor {
      padding: 4px 0;
    }

    details {
      margin-bottom: 4px;
      border: 1px solid var(--divider-color, rgba(127,127,127,0.15));
      border-radius: 10px;
      overflow: hidden;
    }
    summary {
      padding: 12px 14px;
      font-size: 13px;
      font-weight: 600;
      color: var(--primary-text-color, #333);
      cursor: pointer;
      user-select: none;
      list-style: none;
      display: flex;
      align-items: center;
      gap: 8px;
      background: var(--secondary-background-color, rgba(127,127,127,0.04));
    }
    summary::-webkit-details-marker { display: none; }
    summary::before {
      content: '▸';
      transition: transform 0.15s ease;
      font-size: 11px;
      color: var(--secondary-text-color, #999);
    }
    details[open] > summary::before {
      transform: rotate(90deg);
    }

    .section-body {
      padding: 12px 14px;
    }

    .field {
      margin-bottom: 12px;
    }
    label {
      display: block;
      font-size: 11px;
      font-weight: 500;
      color: var(--secondary-text-color, #888);
      margin-bottom: 4px;
      text-transform: uppercase;
      letter-spacing: 0.4px;
    }
    input[type="color"] {
      width: 100%;
      height: 36px;
      padding: 2px 4px;
      cursor: pointer;
      border: 1px solid var(--divider-color, rgba(127,127,127,0.2));
      border-radius: 6px;
      background: var(--card-background-color, #fff);
      box-sizing: border-box;
    }
    input[type="color"]:focus {
      outline: none;
      border-color: var(--primary-color, #03a9f4);
    }
    ha-textfield, ha-select, ha-entity-picker, ha-selector {
      display: block;
      width: 100%;
    }

    .row {
      display: flex;
      gap: 12px;
    }
    .row .field { flex: 1; }

    .toggle-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 6px 0;
    }
    .toggle-label {
      font-size: 13px;
      color: var(--primary-text-color, #333);
    }

    .add-source-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
    }
    .add-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;
      padding: 8px 6px;
      border: 2px dashed var(--divider-color, rgba(127,127,127,0.25));
      border-radius: 8px;
      background: transparent;
      color: var(--primary-color, #03a9f4);
      font-size: 12px;
      font-weight: 500;
      cursor: pointer;
      font-family: inherit;
      transition: border-color 0.15s ease, background 0.15s ease;
    }
    .add-btn:hover {
      border-color: var(--primary-color, #03a9f4);
      background: rgba(3, 169, 244, 0.04);
    }

    /* ha-switch alignment */
    ha-switch {
      --mdc-theme-secondary: var(--primary-color, #03a9f4);
    }

  `,e([ue({attribute:!1})],_t.prototype,"hass",void 0),e([pe()],_t.prototype,"_config",void 0),_t=e([le("chronicle-card-editor")],_t);const xt=window;xt.customCards=xt.customCards||[],xt.customCards.push({type:"chronicle-card",name:"Chronicle Card",description:"A universal, extensible timeline card for Home Assistant",preview:!0,documentationURL:"https://github.com/chronicle-card/chronicle-card"}),console.info("%c CHRONICLE-CARD %c v1.13.0 ","color: #fff; background: #2196F3; font-weight: 700; padding: 2px 6px; border-radius: 4px 0 0 4px;","color: #2196F3; background: #e3f2fd; font-weight: 500; padding: 2px 6px; border-radius: 0 4px 4px 0;");
