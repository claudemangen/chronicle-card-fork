function e(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a}"function"==typeof SuppressedError&&SuppressedError;const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),r=new WeakMap;let n=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=r.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(t,e))}return e}toString(){return this.cssText}};const a=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,o)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new n(i,e,o)},s=(e,o)=>{if(i)e.adoptedStyleSheets=o.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of o){const o=document.createElement("style"),r=t.litNonce;void 0!==r&&o.setAttribute("nonce",r),o.textContent=i.cssText,e.appendChild(o)}},c=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new n("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:l,defineProperty:d,getOwnPropertyDescriptor:h,getOwnPropertyNames:p,getOwnPropertySymbols:u,getPrototypeOf:m}=Object,g=globalThis,f=g.trustedTypes,y=f?f.emptyScript:"",_=g.reactiveElementPolyfillSupport,v=(e,t)=>e,b={toAttribute(e,t){switch(t){case Boolean:e=e?y:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},x=(e,t)=>!l(e,t),w={attribute:!0,type:String,converter:b,reflect:!1,useDefault:!1,hasChanged:x};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;let $=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=w){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),o=this.getPropertyDescriptor(e,i,t);void 0!==o&&d(this.prototype,e,o)}}static getPropertyDescriptor(e,t,i){const{get:o,set:r}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:o,set(t){const n=o?.call(this);r?.call(this,t),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??w}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const e=m(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...p(e),...u(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(c(e))}else void 0!==e&&t.push(c(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return s(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,i);if(void 0!==o&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:b).toAttribute(t,i.type);this._$Em=e,null==r?this.removeAttribute(o):this.setAttribute(o,r),this._$Em=null}}_$AK(e,t){const i=this.constructor,o=i._$Eh.get(e);if(void 0!==o&&this._$Em!==o){const e=i.getPropertyOptions(o),r="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:b;this._$Em=o;const n=r.fromAttribute(t,e.type);this[o]=n??this._$Ej?.get(o)??n,this._$Em=null}}requestUpdate(e,t,i,o=!1,r){if(void 0!==e){const n=this.constructor;if(!1===o&&(r=this[e]),i??=n.getPropertyOptions(e),!((i.hasChanged??x)(r,t)||i.useDefault&&i.reflect&&r===this._$Ej?.get(e)&&!this.hasAttribute(n._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:o,wrapped:r},n){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==r||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===o&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,o=this[t];!0!==e||this._$AL.has(t)||void 0===o||this.C(t,void 0,i,o)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[v("elementProperties")]=new Map,$[v("finalized")]=new Map,_?.({ReactiveElement:$}),(g.reactiveElementVersions??=[]).push("2.1.2");const k=globalThis,S=e=>e,A=k.trustedTypes,C=A?A.createPolicy("lit-html",{createHTML:e=>e}):void 0,E="$lit$",D=`lit$${Math.random().toFixed(9).slice(2)}$`,T="?"+D,z=`<${T}>`,I=document,O=()=>I.createComment(""),M=e=>null===e||"object"!=typeof e&&"function"!=typeof e,P=Array.isArray,U="[ \t\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,N=/>/g,F=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,H=/"/g,W=/^(?:script|style|textarea|title)$/i,B=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),G=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),q=new WeakMap,K=I.createTreeWalker(I,129);function V(e,t){if(!P(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(t):t}const J=(e,t)=>{const i=e.length-1,o=[];let r,n=2===t?"<svg>":3===t?"<math>":"",a=L;for(let t=0;t<i;t++){const i=e[t];let s,c,l=-1,d=0;for(;d<i.length&&(a.lastIndex=d,c=a.exec(i),null!==c);)d=a.lastIndex,a===L?"!--"===c[1]?a=j:void 0!==c[1]?a=N:void 0!==c[2]?(W.test(c[2])&&(r=RegExp("</"+c[2],"g")),a=F):void 0!==c[3]&&(a=F):a===F?">"===c[0]?(a=r??L,l=-1):void 0===c[1]?l=-2:(l=a.lastIndex-c[2].length,s=c[1],a=void 0===c[3]?F:'"'===c[3]?H:R):a===H||a===R?a=F:a===j||a===N?a=L:(a=F,r=void 0);const h=a===F&&e[t+1].startsWith("/>")?" ":"";n+=a===L?i+z:l>=0?(o.push(s),i.slice(0,l)+E+i.slice(l)+D+h):i+D+(-2===l?t:h)}return[V(e,n+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),o]};class Z{constructor({strings:e,_$litType$:t},i){let o;this.parts=[];let r=0,n=0;const a=e.length-1,s=this.parts,[c,l]=J(e,t);if(this.el=Z.createElement(c,i),K.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(o=K.nextNode())&&s.length<a;){if(1===o.nodeType){if(o.hasAttributes())for(const e of o.getAttributeNames())if(e.endsWith(E)){const t=l[n++],i=o.getAttribute(e).split(D),a=/([.?@])?(.*)/.exec(t);s.push({type:1,index:r,name:a[2],strings:i,ctor:"."===a[1]?ie:"?"===a[1]?oe:"@"===a[1]?re:te}),o.removeAttribute(e)}else e.startsWith(D)&&(s.push({type:6,index:r}),o.removeAttribute(e));if(W.test(o.tagName)){const e=o.textContent.split(D),t=e.length-1;if(t>0){o.textContent=A?A.emptyScript:"";for(let i=0;i<t;i++)o.append(e[i],O()),K.nextNode(),s.push({type:2,index:++r});o.append(e[t],O())}}}else if(8===o.nodeType)if(o.data===T)s.push({type:2,index:r});else{let e=-1;for(;-1!==(e=o.data.indexOf(D,e+1));)s.push({type:7,index:r}),e+=D.length-1}r++}}static createElement(e,t){const i=I.createElement("template");return i.innerHTML=e,i}}function X(e,t,i=e,o){if(t===G)return t;let r=void 0!==o?i._$Co?.[o]:i._$Cl;const n=M(t)?void 0:t._$litDirective$;return r?.constructor!==n&&(r?._$AO?.(!1),void 0===n?r=void 0:(r=new n(e),r._$AT(e,i,o)),void 0!==o?(i._$Co??=[])[o]=r:i._$Cl=r),void 0!==r&&(t=X(e,r._$AS(e,t.values),r,o)),t}class Q{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,o=(e?.creationScope??I).importNode(t,!0);K.currentNode=o;let r=K.nextNode(),n=0,a=0,s=i[0];for(;void 0!==s;){if(n===s.index){let t;2===s.type?t=new ee(r,r.nextSibling,this,e):1===s.type?t=new s.ctor(r,s.name,s.strings,this,e):6===s.type&&(t=new ne(r,this,e)),this._$AV.push(t),s=i[++a]}n!==s?.index&&(r=K.nextNode(),n++)}return K.currentNode=I,o}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class ee{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,o){this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=X(this,e,t),M(e)?e===Y||null==e||""===e?(this._$AH!==Y&&this._$AR(),this._$AH=Y):e!==this._$AH&&e!==G&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>P(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Y&&M(this._$AH)?this._$AA.nextSibling.data=e:this.T(I.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,o="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Z.createElement(V(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===o)this._$AH.p(t);else{const e=new Q(o,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=q.get(e.strings);return void 0===t&&q.set(e.strings,t=new Z(e)),t}k(e){P(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,o=0;for(const r of e)o===t.length?t.push(i=new ee(this.O(O()),this.O(O()),this,this.options)):i=t[o],i._$AI(r),o++;o<t.length&&(this._$AR(i&&i._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=S(e).nextSibling;S(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class te{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,o,r){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Y}_$AI(e,t=this,i,o){const r=this.strings;let n=!1;if(void 0===r)e=X(this,e,t,0),n=!M(e)||e!==this._$AH&&e!==G,n&&(this._$AH=e);else{const o=e;let a,s;for(e=r[0],a=0;a<r.length-1;a++)s=X(this,o[i+a],t,a),s===G&&(s=this._$AH[a]),n||=!M(s)||s!==this._$AH[a],s===Y?e=Y:e!==Y&&(e+=(s??"")+r[a+1]),this._$AH[a]=s}n&&!o&&this.j(e)}j(e){e===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ie extends te{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Y?void 0:e}}class oe extends te{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Y)}}class re extends te{constructor(e,t,i,o,r){super(e,t,i,o,r),this.type=5}_$AI(e,t=this){if((e=X(this,e,t,0)??Y)===G)return;const i=this._$AH,o=e===Y&&i!==Y||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==Y&&(i===Y||o);o&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ne{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){X(this,e)}}const ae=k.litHtmlPolyfillSupport;ae?.(Z,ee),(k.litHtmlVersions??=[]).push("3.3.2");const se=(e,t,i)=>{const o=i?.renderBefore??t;let r=o._$litPart$;if(void 0===r){const e=i?.renderBefore??null;o._$litPart$=r=new ee(t.insertBefore(O(),e),e,void 0,i??{})}return r._$AI(e),r},ce=globalThis;class le extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=se(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return G}}le._$litElement$=!0,le.finalized=!0,ce.litElementHydrateSupport?.({LitElement:le});const de=ce.litElementPolyfillSupport;de?.({LitElement:le}),(ce.litElementVersions??=[]).push("4.2.2");const he=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},pe={attribute:!0,type:String,converter:b,reflect:!1,hasChanged:x},ue=(e=pe,t,i)=>{const{kind:o,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(void 0===n&&globalThis.litPropertyMetadata.set(r,n=new Map),"setter"===o&&((e=Object.create(e)).wrapped=!0),n.set(i.name,e),"accessor"===o){const{name:o}=i;return{set(i){const r=t.get.call(this);t.set.call(this,i),this.requestUpdate(o,r,e,!0,i)},init(t){return void 0!==t&&this.C(o,void 0,e,t),t}}}if("setter"===o){const{name:o}=i;return function(i){const r=this[o];t.call(this,i),this.requestUpdate(o,r,e,!0,i)}}throw Error("Unsupported decorator location: "+o)};function me(e){return(t,i)=>"object"==typeof i?ue(e,t,i):((e,t,i)=>{const o=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),o?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function ge(e){return me({...e,state:!0,attribute:!1})}function fe(e,t){return(t,i,o)=>((e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i))(t,i,{get(){return(t=>t.renderRoot?.querySelector(e)??null)(this)}})}function ye(e){return e?.clip_template||e?.clip_url_template||void 0}const _e={layout:"vertical",show_layout_toggle:!0,max_events:50,days_back:7,days_forward:0,show_header:!0,show_date_picker:!1,date_format:"profile",filters:{categories:[],severities:[],sources:[],entities:[],search:"",exclude_categories:[],exclude_severities:[],exclude_sources:[],exclude_entities:[],exclude_search:""},grouping:{enabled:!0,window_seconds:120,min_group_size:3,group_by:"category"},appearance:{card_height:"400px",compact:!1,sticky_date_headers:!1,show_images:!0,show_icons:!0,show_severity_badge:!0,show_category:!0,animate_new_events:!0,title_lines:1,description_lines:1,severity_colors:{critical:"#D32F2F",warning:"#FF9800",info:"#2196F3",debug:"#9E9E9E"}}};function ve(e){return"events"in e&&Array.isArray(e.events)}const be={critical:"#D32F2F",warning:"#FF9800",info:"#2196F3",debug:"#9E9E9E"},xe={person:"mdi:walk",vehicle:"mdi:car",animal:"mdi:paw",pet:"mdi:paw",security:"mdi:shield-home",motion:"mdi:motion-sensor",door:"mdi:door",lock:"mdi:lock",camera:"mdi:cctv",light:"mdi:lightbulb",climate:"mdi:thermostat",automation:"mdi:robot",system:"mdi:cog",default:"mdi:calendar-clock"},we={person:"#FF9800",vehicle:"#2196F3",animal:"#43A047",pet:"#43A047",security:"#F44336",motion:"#9C27B0",door:"#795548",lock:"#607D8B",camera:"#FF5722",light:"#FFC107",climate:"#00BCD4",automation:"#3F51B5",system:"#9E9E9E",default:"#78909C"},$e="1.15.6",ke="chronicle-card-local-snaps",Se="chronicle-card-local-snaps-editor",Ae=108e5,Ce=[[["cat","kitten","feline"],"mdi:cat"],[["dog","puppy","canine"],"mdi:dog"],[["bird","robin","crow","pigeon","sparrow"],"mdi:bird"],[["fish","aquarium"],"mdi:fish"],[["rabbit","bunny"],"mdi:rabbit"],[["horse","pony"],"mdi:horse"],[["snake","reptile","lizard"],"mdi:snake"],[["bear"],"mdi:paw"],[["deer"],"mdi:deer"],[["insect","bug","spider","bee","wasp"],"mdi:bee"],[["animal","pet","wildlife"],"mdi:paw"],[["person","human","people","visitor","guest","face"],"mdi:walk"],[["baby","infant","child","kid"],"mdi:baby-face-outline"],[["meeting","appointment","interview"],"mdi:account-group"],[["car","automobile","sedan"],"mdi:car"],[["truck","lorry"],"mdi:truck"],[["motorcycle","motorbike","bike","bicycle"],"mdi:bike"],[["bus","transit"],"mdi:bus"],[["boat","ship"],"mdi:sail-boat"],[["airplane","plane","flight"],"mdi:airplane"],[["vehicle","transport"],"mdi:car"],[["package","parcel","delivery","mail","post","courier"],"mdi:package-variant-closed"],[["amazon"],"mdi:package-variant-closed"],[["alarm","alert","intrusion","break-in","breach"],"mdi:alarm-light"],[["security","surveillance","guard"],"mdi:shield-home"],[["smoke","fire","flame"],"mdi:fire"],[["flood","water leak","leak"],"mdi:water-alert"],[["co2","carbon monoxide","gas"],"mdi:molecule-co2"],[["doorbell","ring","knock"],"mdi:doorbell"],[["door","gate","entry","entrance","exit"],"mdi:door"],[["lock","unlock","locked","unlocked"],"mdi:lock"],[["window"],"mdi:window-closed-variant"],[["garage"],"mdi:garage"],[["motion","movement","activity","detected"],"mdi:motion-sensor"],[["camera","cctv","snapshot","recording","footage","clip"],"mdi:cctv"],[["light","lamp","bulb","lighting","illumin"],"mdi:lightbulb"],[["temperature","temp","thermostat","hvac","heat","cool"],"mdi:thermostat"],[["weather","rain","snow","storm","wind","sunny","cloud"],"mdi:weather-partly-cloudy"],[["humidity","moisture"],"mdi:water-percent"],[["vacuum","roomba","clean"],"mdi:robot-vacuum"],[["washer","laundry","wash"],"mdi:washing-machine"],[["dryer"],"mdi:tumble-dryer"],[["dishwasher","dishes"],"mdi:dishwasher"],[["oven","stove","cook","bake"],"mdi:stove"],[["fridge","refrigerator","freezer"],"mdi:fridge"],[["microwave"],"mdi:microwave"],[["coffee","espresso"],"mdi:coffee"],[["music","song","audio","speaker","playing"],"mdi:music"],[["tv","television","movie","video","stream","netflix","plex"],"mdi:television"],[["gaming","game","playstation","xbox","nintendo"],"mdi:gamepad-variant"],[["3d print","printer","bambu","print job","filament"],"mdi:printer-3d-nozzle"],[["health","heart","blood","medical","medicine"],"mdi:heart-pulse"],[["sleep","bedtime","nap"],"mdi:sleep"],[["workout","exercise","fitness","run","walk","step"],"mdi:run"],[["birthday","anniversary"],"mdi:cake-variant"],[["holiday","vacation","day off"],"mdi:beach"],[["reminder","todo","task"],"mdi:bell-ring"],[["calendar","event","schedule"],"mdi:calendar"],[["update","upgrade","firmware"],"mdi:update"],[["restart","reboot","reset"],"mdi:restart"],[["backup","snapshot"],"mdi:backup-restore"],[["error","fail","crash"],"mdi:alert-circle"],[["automation","script","routine","workflow"],"mdi:robot"],[["battery","charge","power"],"mdi:battery"],[["wifi","network","internet","connect"],"mdi:wifi"],[["bluetooth"],"mdi:bluetooth"],[["system","server","maintenance"],"mdi:cog"],[["solar","panel"],"mdi:solar-power"],[["energy","electricity","power","watt","kwh"],"mdi:flash"],[["water","irrigation","sprinkler"],"mdi:water"],[["gas","natural gas","propane"],"mdi:gas-cylinder"],[["trash","garbage","waste","bin","recycl"],"mdi:trash-can"],[["litter","litter box","kitty litter"],"mdi:cat"],[["food","feed","meal","eat","dinner","lunch","breakfast"],"mdi:food"],[["plant","garden","flower","grow"],"mdi:flower"],[["filter","air filter","hvac filter"],"mdi:air-filter"]],Ee=[[["cat","kitten","feline"],"#7f41eb"],[["dog","puppy","canine"],"#8D6E63"],[["bird"],"#4CAF50"],[["animal","pet","wildlife"],"#43A047"],[["person","human","people","visitor","guest","face"],"#FF9800"],[["car","truck","vehicle","automobile","motorcycle"],"#2196F3"],[["package","delivery","mail","amazon"],"#795548"],[["alarm","alert","security","smoke","fire","intrusion"],"#F44336"],[["door","gate","lock","window","garage"],"#795548"],[["doorbell","ring","knock"],"#FF5722"],[["motion","movement","detected"],"#9C27B0"],[["camera","cctv","snapshot"],"#FF5722"],[["light","lamp","bulb"],"#FFC107"],[["temperature","thermostat","hvac","climate"],"#00BCD4"],[["weather"],"#42A5F5"],[["automation","script","routine"],"#3F51B5"],[["error","fail","crash"],"#D32F2F"],[["system","update","restart","maintenance"],"#9E9E9E"],[["trash","garbage","waste"],"#78909C"],[["plant","garden","flower"],"#4CAF50"],[["3d print","printer","bambu"],"#00ACC1"]];function De(e,t){const i=e.toLowerCase();for(const[e,o]of t)if(e.some(e=>i.includes(e)))return o}function Te(e,t,i,o,r){if(o){const r=[e,t,i].filter(Boolean).join(" ").toLowerCase();for(const[e,t]of Object.entries(o))if(r.includes(e.toLowerCase()))return t}const n=function(e,t,i){return De([e,t,i].filter(Boolean).join(" "),Ce)}(e,t,i);return n||(r||(xe[t]?xe[t]:xe.default))}function ze(e,t,i,o,r){if(o){const r=[e,t,i].filter(Boolean).join(" ").toLowerCase();for(const[e,t]of Object.entries(o))if(r.includes(e.toLowerCase()))return t}if(r)return r;const n=function(e,t,i){return De([e,t,i].filter(Boolean).join(" "),Ee)}(e,t,i);return n||(we[t]?we[t]:we.default)}function Ie(e,t){return e?"string"==typeof e?e:e.dateTime||e.date||t:t}function Oe(e,t){const i=t.split(".");let o=e;for(const e of i){if(null==o||"object"!=typeof o)return;o=o[e]}return o}function Me(e){if(!e&&0!==e)return"";const t=String(e),i=Number(e);return!isNaN(i)&&i>1e9&&i<1e13?new Date(1e3*i).toISOString():t}function Pe(e,t){if(!e)return e;if(e.startsWith("http://")||e.startsWith("https://"))return e;if(e.startsWith("/"))return e;const i=t.hassUrl?.("")??"";return i?`${i.replace(/\/$/,"")}/${e}`:e}class Ue{constructor(){this.type="rest"}configure(e){this.config=e}static applyRange(e,t){const i=t.start.getTime(),o=t.end.getTime();return e.replace(/\{start\}/g,encodeURIComponent(t.start.toISOString())).replace(/\{end\}/g,encodeURIComponent(t.end.toISOString())).replace(/\{(start_ts|after)\}/g,String(Math.floor(i/1e3))).replace(/\{(end_ts|before)\}/g,String(Math.ceil(o/1e3))).replace(/\{start_ms\}/g,String(i)).replace(/\{end_ms\}/g,String(o))}static isFrigateEventsUrl(e){return/frigate/i.test(e)&&/\/events(\?|$)/.test(e)}async fetchEvents(e,t){let i=this.config.ws_params,o=this.config.url;if(o&&(o=Ue.applyRange(o,t),Ue.isFrigateEventsUrl(o)&&!/[?&](after|before)=/.test(o)&&(o+=`${o.includes("?")?"&":"?"}after=${Math.floor(t.start.getTime()/1e3)}&before=${Math.ceil(t.end.getTime()/1e3)}`)),i){const e={};for(const[o,r]of Object.entries(i)){if("string"!=typeof r){e[o]=r;continue}const i=Ue.applyRange(r,t);e[o]=i!==r&&/^\d+$/.test(i)?Number(i):decodeURIComponent(i)}"string"==typeof e.type&&e.type.startsWith("frigate/events")&&(void 0===e.after&&(e.after=Math.floor(t.start.getTime()/1e3)),void 0===e.before&&(e.before=Math.ceil(t.end.getTime()/1e3))),i=e}if(!o&&!i)return console.warn("[chronicle-card] RestAdapter: no url or ws_params configured"),[];try{let t,r;if(i){const o={...i};"string"==typeof o.type&&o.type.startsWith("frigate/")&&!o.instance_id&&(o.instance_id="frigate");const r=await e.callWS(o);t="string"==typeof r?JSON.parse(r):r}else if(function(e){return!e.startsWith("http://")&&!e.startsWith("https://")}(o)){const i=o.replace(/^\/api\//,"").replace(/^\/+/,"");t=await e.callApi("GET",i)}else{const e=await fetch(o);if(!e.ok)return console.warn(`[chronicle-card] RestAdapter: HTTP ${e.status} from ${o}`),[];const i=await e.text();try{t=JSON.parse(i)}catch{const e=i.split("\n").filter(e=>e.trim());if(!(e.length>0))throw new Error("Response is not valid JSON or NDJSON");t=e.map(e=>JSON.parse(e))}}if(this.config.response_path){const e=Oe(t,this.config.response_path);if(!Array.isArray(e))return console.warn("[chronicle-card] RestAdapter: response_path did not resolve to an array"),[];r=e}else{if(!Array.isArray(t))return console.warn("[chronicle-card] RestAdapter: response is not an array and no response_path configured"),[];r=t}return r.map((t,i)=>this.mapItem(t,i,e))}catch(e){return console.warn("[chronicle-card] RestAdapter: failed to fetch events",e),[]}}classifyMedia(e,t){return e?e.startsWith("/media/")?{mediaContentId:`media-source://media_source/local/${e.slice(7)}`}:{mediaUrl:Pe(e,t)}:{}}expandTemplate(e,t){return e.replace(/\{(\w+)\}/g,(e,i)=>{const o=t[i];return null!=o?String(o):""})}mapItem(e,t,i){const o=this.config.field_map||{},r=(t,i="")=>{const r=o[t];if(r){const t=r.includes(".")?Oe(e,r):e[r];if(void 0!==t)return t}return void 0!==e[t]?e[t]:i},n=String(r("id",t)),a=String(r("title","Untitled")),s=String(r("category","default")),c=r("label",void 0);let l=r("mediaUrl",void 0);this.config.media_url_template&&(l=this.expandTemplate(this.config.media_url_template,e));const d=r("mediaContentId",void 0),h=this.classifyMedia(l,i),p=this.config.clip_url_template?Pe(this.expandTemplate(this.config.clip_url_template,e),i):void 0,u=r("icon",void 0),m=r("color",void 0);return{id:`rest:${this.config.url||this.config.name||"ws"}:${n}`,sourceType:"rest",sourceId:this.config.name||this.config.url||"rest",title:a,description:String(r("description","")),start:Me(r("start",(new Date).toISOString())),end:Me(r("end","")),mediaUrl:h.mediaUrl,mediaContentId:d||h.mediaContentId,icon:u||Te(a,s,c,this.config.icon_map,this.config.default_icon),color:m||ze(a,s,c,this.config.color_map,this.config.default_color),category:s,label:c,severity:r("severity",this.config.default_severity||"info"),entityId:r("entityId",void 0),entityName:r("entityName",void 0),actions:this.config.actions,tapAction:this.config.tap_action,holdAction:this.config.hold_action,metadata:{source_url:this.config.url,raw_index:t,raw_id:n,...p?{clip_url:p}:{},...r("metadata",void 0)||{}}}}}function Le(e,t,i=!1){const o=t.metadata??{},r={};for(const[e,t]of Object.entries(o))null!=t&&"object"!=typeof t&&(r[e]=t);return Object.assign(r,{id:o.raw_id??t.id,title:t.title,description:t.description,entity:t.entityId??"",entity_id:t.entityId??"",source:t.sourceId,category:t.category,severity:t.severity,start:t.start,end:t.end,media_url:t.mediaUrl??""}),e.replace(/\{([\w.]+)\}/g,(e,t)=>{const n=r[t]??(t.includes(".")?function(e,t){let i=e;for(const e of t.split(".")){if(null==i||"object"!=typeof i)return;i=i[e]}return i}(o,t):void 0);return null!=n&&"object"!=typeof n?String(n):i?"":e})}function je(e,t,i){const o=t?.title_template||i?.title_template,r=t?.description_template||i?.description_template,n=t?.show_description??i?.show_description??!0;if(!o&&!r&&n)return e;const a=o&&Le(o,e,!0).trim()||e.title;let s=r?Le(r,e,!0).trim():e.description;return n||(s=""),{...e,title:a,description:s}}function Ne(e,t){if("string"==typeof e)return Le(e,t);if(Array.isArray(e))return e.map(e=>Ne(e,t));if(e&&"object"==typeof e){const i={};for(const[o,r]of Object.entries(e))i[o]=Ne(r,t);return i}return e}function Fe(e,t){return Ne(e,t)}const Re=e=>new Date(1e3*e).toISOString(),He=new Set(["unavailable","unknown"]),We={door:"door",opening:"door",garage_door:"door",window:"door",lock:"lock",motion:"motion",occupancy:"motion",presence:"person",vibration:"motion",smoke:"security",gas:"security",co:"security",moisture:"climate",heat:"climate",cold:"climate",tamper:"security",safety:"security",problem:"system",connectivity:"system",battery:"system",power:"system",plug:"system",running:"system",sound:"motion",light:"light"},Be={person:"person",device_tracker:"person",sensor:"system",light:"light",switch:"automation",lock:"lock",cover:"door",climate:"climate",camera:"camera",alarm_control_panel:"security",automation:"automation",vacuum:"automation",media_player:"system",fan:"climate"};let Ge={language:void 0,hour12:void 0,timeZone:void 0};const Ye=new Map;function qe(e){try{return new Intl.DateTimeFormat(e),e}catch{return}}function Ke(e,t,i=!1){let o=Ye.get(e);if(!o){const r=i?"en-US":Ge.language;try{o=new Intl.DateTimeFormat(r,{timeZone:Ge.timeZone,...t})}catch{o=new Intl.DateTimeFormat(r,t)}Ye.set(e,o)}return o}function Ve(e){if(e instanceof Date)return isNaN(e.getTime())?new Date:e;const t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(e),i=t?new Date(Number(t[1]),Number(t[2])-1,Number(t[3])):new Date(e);return isNaN(i.getTime())?new Date:i}function Je(e){return Ve(e).getTime()}function Ze(e){return Ke("time",{hour:"numeric",minute:"2-digit",hour12:Ge.hour12}).format(Ve(e))}function Xe(e){return Ke("datetime",{weekday:"short",month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:Ge.hour12}).format(Ve(e))}function Qe(e){return Ke("date",{weekday:"short",month:"short",day:"numeric"}).format(e)}function et(e){const t=Ke("key",{year:"numeric",month:"2-digit",day:"2-digit"},!0).formatToParts(Ve(e)),i=e=>t.find(t=>t.type===e)?.value;return`${i("year")}-${i("month")}-${i("day")}`}function tt(e,t){const i=e=>{const[t,i,o]=e.split("-").map(Number);return Date.UTC(t,i-1,o)};return Math.round((i(t)-i(e))/864e5)}function it(){return new Intl.RelativeTimeFormat(Ge.language,{numeric:"auto"})}function ot(e){const t=Ve(e),i=tt(et(new Date),et(t));if(Math.abs(i)<=1){const e=it().format(i,"day");return e.charAt(0).toLocaleUpperCase()+e.slice(1)}return Qe(t)}function rt(e){const t=Ve(e),i=Math.round((t.getTime()-Date.now())/1e3),o=it();if(Math.abs(i)<60)return o.format(0,"second");if(Math.abs(i)<3600)return o.format(Math.trunc(i/60),"minute");const r=tt(et(new Date),et(t));return 0===r?o.format(Math.trunc(i/3600),"hour"):1===Math.abs(r)?o.format(r,"day"):Qe(t)}function nt(e){if(!Ge.timeZone)return 6e4*-new Date(e).getTimezoneOffset();const t=Ke("offset",{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric",hourCycle:"h23"},!0).formatToParts(new Date(e)),i=e=>Number(t.find(t=>t.type===e)?.value);return Date.UTC(i("year"),i("month")-1,i("day"),i("hour"),i("minute"),i("second"))-1e3*Math.floor(e/1e3)}function at(e){const[t,i,o]=et(new Date).split("-").map(Number),r=Date.UTC(t,i-1,o+e);let n=r-nt(r);return n=r-nt(n),new Date(n)}const st={person:"person",device_tracker:"person",light:"light",switch:"automation",lock:"lock",cover:"door",climate:"climate",camera:"camera",alarm_control_panel:"security",automation:"automation",script:"automation",scene:"automation",vacuum:"automation",media_player:"system",fan:"climate",sensor:"system"};const ct=new class{constructor(){this.registry=new Map}register(e,t){this.registry.set(e,t)}create(e){const t=this.registry.get(e);if(!t)throw new Error(`[chronicle-card] Unknown adapter type: "${e}". Available types: ${Array.from(this.registry.keys()).join(", ")}`);return new t}has(e){return this.registry.has(e)}types(){return Array.from(this.registry.keys())}};ct.register("calendar",class{constructor(){this.type="calendar"}configure(e){this.config=e}async fetchEvents(e,t){const i=this.config.entity;if(!i)return console.warn("[chronicle-card] CalendarAdapter: no entity configured"),[];try{const o=t.start.toISOString(),r=t.end.toISOString(),n=`calendars/${i}?start=${encodeURIComponent(o)}&end=${encodeURIComponent(r)}`,a=await e.callApi("GET",n);return Array.isArray(a)?a.map(t=>{const n=t.summary||"Untitled Event",a=t.description||"",s=function(e){const t=(e||"").toLowerCase(),i={person:["person","visitor","guest","meeting","appointment"],vehicle:["vehicle","car","delivery","parking"],security:["security","alarm","alert"],motion:["motion","movement"],pet:["pet","cat","dog","animal"],automation:["automation","script","routine"],system:["system","update","maintenance","restart"],climate:["climate","temperature","hvac","weather"],light:["light","lamp","lighting"]};for(const[e,o]of Object.entries(i))if(o.some(e=>t.includes(e)))return e;return"default"}(`${n} ${a}`),c=Ie(t.start,o),l=t.uid||function(e){let t=0;for(let i=0;i<e.length;i++)t=(t<<5)-t+e.charCodeAt(i),t|=0;return Math.abs(t).toString(36)}(`${n}:${c}`);return{id:`calendar:${i}:${l}`,sourceType:"calendar",sourceId:this.config.name||i,title:n,description:a,start:c,end:Ie(t.end,r),icon:Te(n,s,void 0,this.config.icon_map,this.config.default_icon),color:ze(n,s,void 0,this.config.color_map,this.config.default_color),category:s,severity:this.config.default_severity||"info",entityId:i,entityName:e.states[i]?.attributes?.friendly_name||i,actions:this.config.actions,tapAction:this.config.tap_action,holdAction:this.config.hold_action,metadata:{location:t.location,recurrence_id:t.recurrence_id,uid:t.uid}}}):(console.warn("[chronicle-card] CalendarAdapter: unexpected response format"),[])}catch(e){return console.warn("[chronicle-card] CalendarAdapter: failed to fetch events",e),[]}}}),ct.register("rest",Ue),ct.register("history",class{constructor(){this.type="history"}configure(e){this.config=e}getEntities(){const e=[];return this.config.entities?.length&&e.push(...this.config.entities),this.config.entity&&!e.includes(this.config.entity)&&e.push(this.config.entity),e}getStateFilter(e){const t=this.config.entity_config?.[e]?.state_filter;return t?.length?new Set(t.map(e=>e.toLowerCase())):this.config.state_filter?.length?new Set(this.config.state_filter.map(e=>e.toLowerCase())):null}needsAttributes(){const e=Object.values(this.config.entity_config??{});return!!(this.config.image_template||ye(this.config)||this.config.show_attributes?.length||e.some(e=>e.image_template||ye(e)||e.show_attributes?.length))}isTransition(e,t,i){if(null==i.state||null==t.state)return!1;if(t.state===i.state)return!1;if(He.has(i.state)||He.has(t.state))return!1;const o=this.getStateFilter(e);return!o||o.has(i.state.toLowerCase())}async fetchEvents(e,t){const i=this.getEntities();if(0===i.length)return console.warn("[chronicle-card] HistoryAdapter: no entities configured"),[];try{const o=this.needsAttributes(),r=Math.min(t.end.getTime(),Date.now()),n=await e.callWS({type:"history/history_during_period",start_time:t.start.toISOString(),end_time:new Date(r).toISOString(),entity_ids:i,minimal_response:!o,no_attributes:!o,significant_changes_only:!0});if(!n||"object"!=typeof n)return console.warn("[chronicle-card] HistoryAdapter: unexpected response format"),[];const a=[];for(const[t,i]of Object.entries(n)){if(!Array.isArray(i))continue;let o;for(const r of i){const i=Re(r.lc??r.lu),n={entity_id:t,state:r.s,attributes:r.a??o?.attributes,last_changed:i,last_updated:Re(r.lu)};o&&this.isTransition(t,o,n)&&a.push(this.stateChangeToEvent(e,t,o,n)),o=n}}return a}catch(e){return console.warn("[chronicle-card] HistoryAdapter: failed to fetch events",e),[]}}processStateChanges(e,t){const i=[];for(const o of this.getEntities()){const r=e.states[o],n=t.states[o];r&&n&&r!==n&&(this.isTransition(o,n,r)&&i.push(this.stateChangeToEvent(e,o,n,r)))}return i}getDeviceClass(e,t,i){const o=e.states[t];return o?.attributes?.device_class?String(o.attributes.device_class):i.attributes?.device_class?String(i.attributes.device_class):""}humanizeState(e,t,i){const o=t.entity_id,r=this.config.entity_config?.[o]?.state_map?.[i]??this.config.state_map?.[i];if(r)return r;if(e.formatEntityState)try{return e.formatEntityState(t,i)}catch{}return i.charAt(0).toUpperCase()+i.slice(1).replace(/_/g," ")}detectCategory(e,t){const i=e.split(".")[0];return"binary_sensor"===i&&t?We[t]||"default":Be[i]||"default"}stripOverlap(e,t){const i=e.toLowerCase().split(/\s+/),o=t.split(/\s+/),r=o.map(e=>e.toLowerCase());for(let e=Math.min(i.length,r.length);e>0;e--){const n=i.slice(-e),a=r.slice(0,e);if(n.every((e,t)=>e===a[t])){return o.slice(e).join(" ")||t}}return t}formatAttributes(e,t,i,o){return i.map(i=>{const r=o[i];if(null==r||""===r||"object"==typeof r)return null;const n=e.formatEntityAttributeName?.(t,i)??i.replace(/_/g," ");let a;try{a=e.formatEntityAttributeValue?.(t,i,r)??String(r)}catch{a=String(r)}return`${n}: ${a}`}).filter(Boolean).join(" · ")}stateChangeToEvent(e,t,i,o){const r=this.getDeviceClass(e,t,o),n=this.detectCategory(t,r),a=e.states[t],s=a?.attributes?.friendly_name||t,c=this.config.entity_config?.[t],l=this.getEntities().length>1,d=c?.name||(l?s:this.config.name||s),h={...a?.attributes??{},...o.attributes??{}},p=a??{entity_id:t,state:o.state,attributes:h,last_changed:o.last_changed,last_updated:o.last_updated},u=this.humanizeState(e,p,o.state),m=this.humanizeState(e,p,i.state),g=`${d} ${this.stripOverlap(d,u)}`,f=`${this.stripOverlap(d,m)} → ${this.stripOverlap(d,u)}`,y=c?.show_attributes??this.config.show_attributes,_=y?.length?this.formatAttributes(e,p,y,h):"",v=c?.state_icon?.[o.state]||this.config.state_icon?.[o.state]||c?.icon||Te(g,n,void 0,this.config.icon_map,this.config.default_icon),b=c?.state_color?.[o.state]||this.config.state_color?.[o.state]||c?.color||ze(g,n,void 0,this.config.color_map,this.config.default_color),x=c?.severity||this.config.default_severity||"info",w=new Date(o.last_changed).toISOString();return je({id:`history:${t}:${new Date(w).getTime()}`,sourceType:"history",sourceId:this.config.name||"history",title:g,description:f,details:_||void 0,start:w,end:w,icon:v,color:b,category:n,severity:x,entityId:t,actions:this.config.actions,tapAction:c?.tap_action||this.config.tap_action,holdAction:c?.hold_action||this.config.hold_action,metadata:{name:d,entity_name:s,old_state:i.state,new_state:o.state,old_label:m,new_label:u,device_class:r,last_updated:o.last_updated,attributes:h,source_name:this.config.name||"history",_image_template:c?.image_template||this.config.image_template,_clip_template:ye(c)||ye(this.config)}},c,this.config)}}),ct.register("static",class{constructor(){this.type="static"}configure(e){this.config=e}async fetchEvents(e,t){const i=this.config.events;if(!i||0===i.length)return console.warn("[chronicle-card] StaticAdapter: no events configured"),[];try{const e=this.config.name||"static";return i.map((i,o)=>{const r=i.category||"default",n=Ve(i.start);return(i.end?Ve(i.end):n)<t.start||n>t.end?null:{id:`static:${e}:${o}`,sourceType:"static",sourceId:e,title:i.title,description:i.description||"",start:i.start,end:i.end||i.start,icon:i.icon||this.config.default_icon||xe[r]||xe.default,color:i.color||this.config.default_color||we[r]||we.default,category:r,severity:i.severity||this.config.default_severity||"info",actions:this.config.actions,tapAction:this.config.tap_action,holdAction:this.config.hold_action,metadata:{static_index:o}}}).filter(e=>null!==e)}catch(e){return console.warn("[chronicle-card] StaticAdapter: failed to process events",e),[]}}}),ct.register("logbook",class{constructor(){this.type="logbook"}configure(e){this.config=e}getEntities(){const e=[];return this.config.entities?.length&&e.push(...this.config.entities),this.config.entity&&!e.includes(this.config.entity)&&e.push(this.config.entity),e}async fetchEvents(e,t){const i=this.getEntities();if(0===i.length)return console.warn("[chronicle-card] LogbookAdapter: no entities configured"),[];try{const o=await e.callWS({type:"logbook/get_events",start_time:t.start.toISOString(),end_time:new Date(Math.min(t.end.getTime(),Date.now())).toISOString(),entity_ids:i});return Array.isArray(o)?o.filter(e=>e&&null!=e.when).map(t=>this.entryToEvent(e,t)):[]}catch(e){return console.warn("[chronicle-card] LogbookAdapter: failed to fetch events",e),[]}}whenToISO(e){if("string"==typeof e){const t=new Date(e);return isNaN(t.getTime())?(new Date).toISOString():t.toISOString()}return new Date(e>1e12?e:1e3*e).toISOString()}entryToEvent(e,t){const i=t.entity_id,o=t.domain||i?.split(".")[0]||"",r=st[o]||"default",n=i?this.config.entity_config?.[i]:void 0,a=i?e.states[i]?.attributes?.friendly_name:void 0,s=n?.name||t.name||a||i||"Logbook",c=t.message||(t.state?`→ ${t.state}`:""),l=c?`${s} ${c}`:s,d=this.whenToISO(t.when),h=n?.icon||t.icon||Te(l,r,void 0,this.config.icon_map,this.config.default_icon),p=n?.color||ze(l,r,void 0,this.config.color_map,this.config.default_color),u=n?.severity||this.config.default_severity||"info",m=Object.fromEntries(Object.entries(t).filter(([e,t])=>e.startsWith("context_")&&null!=t&&"object"!=typeof t));return je({id:`logbook:${i||o||"ha"}:${d}`,sourceType:"logbook",sourceId:this.config.name||"logbook",title:l,description:t.message||"",start:d,end:d,icon:h,color:p,category:r,severity:u,entityId:i,entityName:s,actions:this.config.actions,tapAction:n?.tap_action||this.config.tap_action,holdAction:n?.hold_action||this.config.hold_action,metadata:{...m,name:s,entity_name:a||i||"",message:t.message??"",domain:o,state:t.state??"",source_name:this.config.name||"logbook",_image_template:n?.image_template||this.config.image_template,_clip_template:ye(n)||ye(this.config)}},n,this.config)}});const lt={en:{"chronicle.no_events":"No events","chronicle.group_events":"{count} {label} events","chronicle.detail.more_info":"More Info","chronicle.detail.entity":"Entity","chronicle.detail.entity_id":"Entity ID","chronicle.detail.source":"Source","chronicle.detail.start":"Start","chronicle.detail.end":"End","chronicle.detail.location":"Location","chronicle.detail.open_clip":"Open clip","chronicle.detail.clip_unavailable":"This clip can't be played here.","chronicle.detail.close":"Close","chronicle.severity.critical":"Critical","chronicle.severity.warning":"Warning","chronicle.severity.info":"Info","chronicle.severity.debug":"Debug"},de:{"chronicle.no_events":"Keine Ereignisse","chronicle.group_events":"{count} {label} Ereignisse","chronicle.detail.more_info":"Mehr Infos","chronicle.detail.entity":"Entität","chronicle.detail.entity_id":"Entitäts-ID","chronicle.detail.source":"Quelle","chronicle.detail.start":"Start","chronicle.detail.end":"Ende","chronicle.detail.location":"Ort","chronicle.detail.open_clip":"Clip öffnen","chronicle.detail.clip_unavailable":"Dieser Clip kann hier nicht abgespielt werden.","chronicle.detail.close":"Schließen","chronicle.severity.critical":"Kritisch","chronicle.severity.warning":"Warnung","chronicle.severity.info":"Info","chronicle.severity.debug":"Debug"},fr:{"chronicle.no_events":"Aucun événement","chronicle.group_events":"{count} événements {label}","chronicle.detail.more_info":"Plus d'infos","chronicle.detail.entity":"Entité","chronicle.detail.entity_id":"ID d'entité","chronicle.detail.source":"Source","chronicle.detail.start":"Début","chronicle.detail.end":"Fin","chronicle.detail.location":"Lieu","chronicle.detail.open_clip":"Ouvrir le clip","chronicle.detail.clip_unavailable":"Ce clip ne peut pas être lu ici.","chronicle.detail.close":"Fermer","chronicle.severity.critical":"Critique","chronicle.severity.warning":"Avertissement","chronicle.severity.info":"Info","chronicle.severity.debug":"Débogage"},es:{"chronicle.no_events":"Sin eventos","chronicle.group_events":"{count} eventos de {label}","chronicle.detail.more_info":"Más información","chronicle.detail.entity":"Entidad","chronicle.detail.entity_id":"ID de entidad","chronicle.detail.source":"Fuente","chronicle.detail.start":"Inicio","chronicle.detail.end":"Fin","chronicle.detail.location":"Ubicación","chronicle.detail.open_clip":"Abrir clip","chronicle.detail.clip_unavailable":"Este clip no se puede reproducir aquí.","chronicle.detail.close":"Cerrar","chronicle.severity.critical":"Crítico","chronicle.severity.warning":"Advertencia","chronicle.severity.info":"Info","chronicle.severity.debug":"Depuración"},it:{"chronicle.no_events":"Nessun evento","chronicle.group_events":"{count} eventi {label}","chronicle.detail.more_info":"Maggiori info","chronicle.detail.entity":"Entità","chronicle.detail.entity_id":"ID entità","chronicle.detail.source":"Sorgente","chronicle.detail.start":"Inizio","chronicle.detail.end":"Fine","chronicle.detail.location":"Luogo","chronicle.detail.open_clip":"Apri clip","chronicle.detail.clip_unavailable":"Questo clip non può essere riprodotto qui.","chronicle.detail.close":"Chiudi","chronicle.severity.critical":"Critico","chronicle.severity.warning":"Avviso","chronicle.severity.info":"Info","chronicle.severity.debug":"Debug"},pt:{"chronicle.no_events":"Sem eventos","chronicle.group_events":"{count} eventos de {label}","chronicle.detail.more_info":"Mais informações","chronicle.detail.entity":"Entidade","chronicle.detail.entity_id":"ID da entidade","chronicle.detail.source":"Fonte","chronicle.detail.start":"Início","chronicle.detail.end":"Fim","chronicle.detail.location":"Local","chronicle.detail.open_clip":"Abrir clipe","chronicle.detail.clip_unavailable":"Este clipe não pode ser reproduzido aqui.","chronicle.detail.close":"Fechar","chronicle.severity.critical":"Crítico","chronicle.severity.warning":"Aviso","chronicle.severity.info":"Info","chronicle.severity.debug":"Depuração"},nl:{"chronicle.no_events":"Geen gebeurtenissen","chronicle.group_events":"{count} {label} gebeurtenissen","chronicle.detail.more_info":"Meer info","chronicle.detail.entity":"Entiteit","chronicle.detail.entity_id":"Entiteits-ID","chronicle.detail.source":"Bron","chronicle.detail.start":"Start","chronicle.detail.end":"Einde","chronicle.detail.location":"Locatie","chronicle.detail.open_clip":"Clip openen","chronicle.detail.clip_unavailable":"Deze clip kan hier niet worden afgespeeld.","chronicle.detail.close":"Sluiten","chronicle.severity.critical":"Kritiek","chronicle.severity.warning":"Waarschuwing","chronicle.severity.info":"Info","chronicle.severity.debug":"Debug"},sv:{"chronicle.no_events":"Inga händelser","chronicle.group_events":"{count} {label}-händelser","chronicle.detail.more_info":"Mer info","chronicle.detail.entity":"Entitet","chronicle.detail.entity_id":"Entitets-ID","chronicle.detail.source":"Källa","chronicle.detail.start":"Start","chronicle.detail.end":"Slut","chronicle.detail.location":"Plats","chronicle.detail.open_clip":"Öppna klipp","chronicle.detail.clip_unavailable":"Klippet kan inte spelas upp här.","chronicle.detail.close":"Stäng","chronicle.severity.critical":"Kritisk","chronicle.severity.warning":"Varning","chronicle.severity.info":"Info","chronicle.severity.debug":"Felsökning"},pl:{"chronicle.no_events":"Brak zdarzeń","chronicle.group_events":"{count} zdarzeń: {label}","chronicle.detail.more_info":"Więcej informacji","chronicle.detail.entity":"Encja","chronicle.detail.entity_id":"ID encji","chronicle.detail.source":"Źródło","chronicle.detail.start":"Początek","chronicle.detail.end":"Koniec","chronicle.detail.location":"Lokalizacja","chronicle.detail.open_clip":"Otwórz klip","chronicle.detail.clip_unavailable":"Tego klipu nie można tutaj odtworzyć.","chronicle.detail.close":"Zamknij","chronicle.severity.critical":"Krytyczny","chronicle.severity.warning":"Ostrzeżenie","chronicle.severity.info":"Info","chronicle.severity.debug":"Debug"}};let dt="en";function ht(e,t){const i=dt,o=lt[i];if(o&&void 0!==o[e])return o[e];const r=i.split("-")[0];if(r!==i){const t=lt[r];if(t&&void 0!==t[e])return t[e]}const n=lt.en;return n&&void 0!==n[e]?n[e]:e}function pt(e){let t=e.events[0];for(const i of e.events)Je(i.start)<Je(t.start)&&(t=i);return t.id}function ut(e,t){if(!t.enabled||"none"===t.group_by||0===e.length)return[...e];const i=1e3*(t.window_seconds??120),o=t.min_group_size??3,r=t.group_by??"category",n=[];let a=[],s=null,c=null;const l=e=>{switch(r){case"category":return e.category;case"source":return`${e.sourceType}:${e.sourceId}`;case"entity":return e.entityId??"";default:return""}},d=e=>{const i=e.length,o=e[0];if(t.group_name)return t.group_name.replace(/\{count\}/g,String(i)).replace(/\{label\}/g,o.label||o.category||"").replace(/\{source\}/g,o.sourceId||"").replace(/\{entity\}/g,o.entityName||o.entityId||"");const n=e=>ht("chronicle.group_events").replace("{count}",String(i)).replace("{label}",e);switch(r){case"source":return n(o.sourceId);case"entity":return n(o.entityName||o.entityId||"entity")}const a=new Set(e.map(e=>e.label||e.category).filter(Boolean));return 1===a.size?n([...a][0]):n(o.category)},h=()=>{if(0!==a.length){if(a.length>=o){const e=a[0];n.push({representative:e,events:a,summary:d(a),expanded:!1})}else n.push(...a);a=[],s=null,c=null}};for(const t of e){const e=l(t),o=Je(t.start);if(null===s){s=e,c=o,a.push(t);continue}const r=null!==c&&Math.abs(o-c)<=i;e===s&&r?(a.push(t),c=o):(h(),s=e,c=o,a.push(t))}return h(),n}const mt=new Map;async function gt(e,t){if(!t)return;const i=mt.get(t);if(i&&Date.now()-i.timestamp<Ae)return i.url;!function(){const e=Date.now();for(const[t,i]of mt)e-i.timestamp>Ae&&mt.delete(t)}();try{const i=await e.callWS({type:"media_source/resolve_media",media_content_id:t});return i&&i.url?(mt.set(t,{url:i.url,timestamp:Date.now()}),i.url):void 0}catch{return}}const ft=/\{[%{]/;function yt(e){return ft.test(e)}async function _t(e,t,i={}){return new Promise((o,r)=>{let n,a=!1;const s=setTimeout(()=>{a||(a=!0,n?.(),r(new Error("Template render timed out")))},5e3);e.connection.subscribeMessage(e=>{a||(a=!0,clearTimeout(s),n?.(),o(e.result))},{type:"render_template",template:t,variables:i,timeout:5}).then(e=>{n=e,a&&n()}).catch(e=>{a||(a=!0,clearTimeout(s),r(e))})})}function vt(e){if(e.name)return e.name;switch(e.type){case"calendar":return e.entity||"calendar";case"rest":return e.url||"rest";default:return e.type}}function bt(e){return Je(ve(e)?e.representative.start:e.start)}function xt(e,t){return e.id===t.id||e.sourceType===t.sourceType&&e.entityId===t.entityId&&e.title===t.title&&Math.abs(Je(e.start)-Je(t.start))<1e3}const wt=(e,t)=>Je(t.start)-Je(e.start),$t=[{key:"_image_template",apply:(e,t)=>{e.mediaUrl=t},has:e=>!!e.mediaUrl},{key:"_clip_template",apply:(e,t)=>{e.metadata={...e.metadata,clip_url:t}},has:e=>!!e.metadata?.clip_url}],kt=new Map;async function St(e,t){return t.startsWith("media-source://")?await gt(e,t)??t:t.startsWith("/media/")&&!t.startsWith("/media/local/")?await gt(e,`media-source://media_source/local/${t.slice(7)}`)??t:t}function At(e){const[t,i,o]=e.split("-").map(Number),r=new Date(t,i-1,o,0,0,0,0),n=new Date(t,i-1,o+1,0,0,0,0),a=new Date;return{start:r,end:n<a?n:a}}class Ct{constructor(){this.adapters=[],this.allEvents=[],this.filteredItems=[],this.lastFetch=0,this.lastHash="",this.listeners=new Set,this.fetchPromise=null,this.generation=0,this.expandedGroups=new Set,this.recentLive=new Map,this.selectedDate=null}get items(){return this.filteredItems}get events(){return this.allEvents}get pollInterval(){return(this.config?.sources??[]).reduce((e,t)=>Math.min(e,1e3*(t.poll_interval??30)),3e4)}configure(e){this.config=e,this.generation++,this.lastFetch=0,this.lastHash="",this.fetchPromise=null,this.recentLive.clear(),this.adapters=[];for(const t of e.sources??[])try{const e=ct.create(t.type);e.configure(t),this.adapters.push(e)}catch(e){console.warn("[chronicle-card] Skipping source:",e)}this.allEvents.length&&this.applyFiltersAndGroup()}get date(){return this.selectedDate}async setSelectedDate(e,t){const i=e||null;i!==this.selectedDate&&(this.selectedDate=i,this.generation++,this.fetchPromise=null,this.recentLive.clear(),this.allEvents=[],this.lastHash="",this.lastFetch=0,this.applyFiltersAndGroup(),t&&await this.fetch(t,!0))}inSelectedDay(e){if(!this.selectedDate)return!0;const{start:t,end:i}=At(this.selectedDate),o=Je(e);return o>=t.getTime()&&o<=i.getTime()+1}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notify(){for(const e of this.listeners)e()}async fetch(e,t=!1){if(!this.config)return;if(!t&&Date.now()-this.lastFetch<this.pollInterval)return;if(this.fetchPromise)return this.fetchPromise;const i=this._doFetch(e,this.generation);this.fetchPromise=i;try{await i}finally{this.fetchPromise===i&&(this.fetchPromise=null)}}async _doFetch(e,t){this.lastFetch=Date.now();const i=this.selectedDate?At(this.selectedDate):function(e){const t=new Date,i=Math.max(0,e.days_back??_e.days_back??7),o=Math.max(0,e.days_forward??0);return{start:Number.isInteger(i)?at(-i):new Date(t.getTime()-864e5*i),end:0===o?t:Number.isInteger(o)?at(o+1):new Date(t.getTime()+864e5*o)}}(this.config),o=await Promise.allSettled(this.adapters.map(t=>t.fetchEvents(e,i))),r=[];for(const e of o)"fulfilled"===e.status?r.push(...e.value):console.warn("[chronicle-card] Adapter fetch failed:",e.reason);const n=new Set,a=[];for(const e of r)n.has(e.id)||(n.add(e.id),a.push(e));const s=Date.now();for(const[e,t]of this.recentLive)s-t.at>12e4||a.some(e=>xt(e,t.event))?this.recentLive.delete(e):(n.add(e),a.push(t.event));a.sort(wt);const c=this.selectedDate?a.filter(e=>this.inSelectedDay(e.start)):a;if(this.resolveTemplates(e,c,!0),t!==this.generation)return;const l=this.computeHash(c);if(l===this.lastHash)return;this.allEvents=c,this.lastHash=l,this.applyFiltersAndGroup();const d=this.displayedEvents(),h=e=>`${e.mediaUrl??""}|${e.metadata?.clip_url??""}`,p=new Map(d.map(e=>[e,h(e)]));if(await this.resolveMedia(e,d),await this.resolveTemplates(e,d),t!==this.generation||this.allEvents!==c)return;let u=!1;this.allEvents=c.map(e=>{const t=p.get(e);return void 0!==t&&t!==h(e)?(u=!0,{...e}):e}),u&&(this.lastHash=this.computeHash(this.allEvents),this.applyFiltersAndGroup())}displayedEvents(){const e=[];for(const t of this.filteredItems)ve(t)?e.push(...t.events):e.push(t);return e}async processStateChanges(e,t){if(e.states===t.states)return;const i=this.generation,o=[];for(const i of this.adapters){const r=i.processStateChanges?.(e,t);r?.length&&o.push(...r)}const r=o.filter(e=>this.inSelectedDay(e.start)&&!this.allEvents.some(t=>xt(t,e)));if(0===r.length)return;if(await this.resolveMedia(e,r),await this.resolveTemplates(e,r),i!==this.generation)return;const n=r.filter(e=>!this.allEvents.some(t=>xt(t,e)));if(0!==n.length){for(const e of n)this.recentLive.set(e.id,{event:e,at:Date.now()});this.allEvents=[...n,...this.allEvents].sort(wt),this.lastHash=this.computeHash(this.allEvents),this.applyFiltersAndGroup()}}applyFiltersAndGroup(){let e=[...this.allEvents];const t=this.config.filters??{};if(t.categories&&t.categories.length>0){const i=new Set(t.categories);e=e.filter(e=>i.has(e.category))}if(t.severities&&t.severities.length>0){const i=new Set(t.severities);e=e.filter(e=>i.has(e.severity))}if(t.sources&&t.sources.length>0){const i=new Set(t.sources);e=e.filter(e=>i.has(e.sourceId)||i.has(e.sourceType))}if(t.entities&&t.entities.length>0){const i=new Set(t.entities);e=e.filter(e=>e.entityId&&i.has(e.entityId))}const i=(e,t)=>e.title.toLowerCase().includes(t)||e.description.toLowerCase().includes(t)||e.category.toLowerCase().includes(t)||!(!e.label||!e.label.toLowerCase().includes(t));if(t.search&&t.search.trim().length>0){const o=t.search.toLowerCase().trim();e=e.filter(e=>i(e,o))}if(t.exclude_categories&&t.exclude_categories.length>0){const i=new Set(t.exclude_categories);e=e.filter(e=>!i.has(e.category))}if(t.exclude_severities&&t.exclude_severities.length>0){const i=new Set(t.exclude_severities);e=e.filter(e=>!i.has(e.severity))}if(t.exclude_sources&&t.exclude_sources.length>0){const i=new Set(t.exclude_sources);e=e.filter(e=>!i.has(e.sourceId)&&!i.has(e.sourceType))}if(t.exclude_entities&&t.exclude_entities.length>0){const i=new Set(t.exclude_entities);e=e.filter(e=>!e.entityId||!i.has(e.entityId))}if(t.exclude_search&&t.exclude_search.trim().length>0){const o=t.exclude_search.toLowerCase().trim();e=e.filter(e=>!i(e,o))}const o=this.config.max_events??_e.max_events??50;e.length>o&&(e=e.slice(0,o));const r={..._e.grouping,...this.config.grouping},n=new Map;for(const e of this.config.sources??[])e.grouping&&n.set(vt(e),{...r,...e.grouping});let a;if(0===n.size)a=ut(e,r);else{const t=new Map,i=[];for(const o of e)if(n.has(o.sourceId)){const e=t.get(o.sourceId)??[];e.push(o),t.set(o.sourceId,e)}else i.push(o);a=[];for(const[e,i]of t)a.push(...ut(i,n.get(e)));a.push(...ut(i,r)),a.sort((e,t)=>bt(t)-bt(e))}for(const e of a)ve(e)&&(e.expanded=this.expandedGroups.has(pt(e)));this.filteredItems=a,this.notify()}toggleGroup(e){const t=pt(e);this.expandedGroups.has(t)?this.expandedGroups.delete(t):this.expandedGroups.add(t),this.filteredItems=this.filteredItems.map(e=>ve(e)&&pt(e)===t?{...e,expanded:!e.expanded}:e),this.notify()}async resolveMedia(e,t){const i=t.filter(e=>e.mediaContentId&&!e.mediaUrl);if(0===i.length)return;const o=await Promise.allSettled(i.map(t=>gt(e,t.mediaContentId)));for(let e=0;e<i.length;e++){const t=o[e];"fulfilled"===t.status&&t.value&&(i[e].mediaUrl=t.value)}}async resolveTemplates(e,t,i=!1){const o=[];for(const r of t)for(const t of $t){const n=r.metadata?.[t.key];if("string"==typeof n&&n.trim()&&!t.has(r)){if(!yt(n)){const o=Le(n.trim(),r);"_image_template"===t.key&&(o.startsWith("/media/")||o.startsWith("media-source://"))?i||(r.mediaUrl=await St(e,o)):t.apply(r,o);continue}o.push({event:r,template:n,apply:t.apply})}}if(0===o.length)return;const r=e=>({entity_id:e.entityId||"",state:e.metadata?.new_state||e.metadata?.state||"",old_state:e.metadata?.old_state||"",timestamp:e.start,attributes:e.metadata?.attributes||{},source_name:e.metadata?.source_name||""}),n=e=>e.startsWith("/media/")||e.startsWith("media-source://"),a=async(t,i)=>{t.apply===$t[0].apply&&n(i)&&(i=await St(e,i)),t.apply(t.event,i)};if(i){for(const e of o){const t=kt.get(`${e.template}\0${JSON.stringify(r(e.event))}`);!t||e.apply===$t[0].apply&&n(t)||e.apply(e.event,t)}return}for(let t=0;t<o.length;t+=50)await Promise.allSettled(o.slice(t,t+50).map(async t=>{const i=r(t.event),o=`${t.template}\0${JSON.stringify(i)}`;let n=kt.get(o);if(void 0===n){try{n=(await _t(e,t.template,{...i})??"").trim()}catch(e){return void console.warn("[chronicle-card] Template resolution failed:",e)}kt.size>=1e3&&kt.delete(kt.keys().next().value),kt.set(o,n)}n&&await a(t,n)}))}computeHash(e){return e.map(e=>`${e.id}|${e.title}|${e.description}|${e.details??""}|${e.mediaUrl??""}|${e.metadata?.clip_url??""}`).join("\n")}}let Et,Dt,Tt=!1,zt=[];const It=Date.now();let Ot=!1;function Mt(e,t){Tt=e,t&&(Et=t),e&&Et&&!Ot&&(Ot=!0,Pt(`version ${$e}`),Pt(`env ua="${navigator.userAgent}" vendor="${navigator.vendor}" vw=${window.innerWidth}x${window.innerHeight} touch=${"ontouchstart"in window}`),window.addEventListener("resize",()=>Pt(`window resize ${window.innerWidth}x${window.innerHeight}`)),window.visualViewport?.addEventListener("resize",()=>Pt(`visualViewport resize ${Math.round(window.visualViewport.width)}x${Math.round(window.visualViewport.height)}`)))}function Pt(e){if(!Tt)return;const t=`+${Date.now()-It}ms ${e}`;console.info("[chronicle-card debug]",t),zt.push(t),Dt||(Dt=setTimeout(Ut,1500))}function Ut(){if(Dt=void 0,!Et||0===zt.length)return;const e=zt;zt=[];const t=`[chronicle-card debug] user=${Et.user?.name??"?"}\n${e.join("\n")}`;Et.callService("system_log","write",{message:t,level:"warning",logger:"chronicle_card.debug"}).catch(()=>Et.callWS({type:"system_log/write",logger:"chronicle_card.debug",level:"warning",message:t})).catch(e=>console.warn("[chronicle-card debug] could not write to HA log",e))}function Lt(e){const t=e;if(!t||!t.tagName)return String(e);const i="string"==typeof t.className&&t.className?"."+t.className.trim().split(/\s+/).join("."):"";return`${t.tagName.toLowerCase()}${i}`}const jt=/^#(?:[0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,Nt=/^(?:rgb|rgba|hsl|hsla)\(\s*[0-9.,%\s/-]+\s*\)$/i,Ft=/^[a-zA-Z]{3,20}$/;function Rt(e,t="#78909C"){if("string"!=typeof e)return t;const i=e.trim();return jt.test(i)||Nt.test(i)||Ft.test(i)?i:t}function Ht(e,t=.82){const i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);if(!i)return"#ffffff";return`#${[i[1],i[2],i[3]].map(e=>(e=>Math.round(parseInt(e,16)+(255-parseInt(e,16))*t))(e).toString(16).padStart(2,"0")).join("")}`}function Wt(e,t){return t&&t[e]?t[e]:be[e]??be.info}function Bt(e){return e&&/^[a-z0-9_-]+:[a-z0-9_-]+$/i.test(e)?e:xe.default}function Gt(e,t,i,o="tap"){const r=Fe(i,t);("more-info"!==r.action||t.entityId||r.entity)&&e.dispatchEvent(new CustomEvent("hass-action",{bubbles:!0,composed:!0,detail:{config:{entity:t.entityId,[`${o}_action`]:r},action:o}}))}function Yt(e,t,i){const o="hold"===i?t.holdAction:t.tapAction;o&&"default"!==o.action?Gt(e,t,o,i):"tap"===i&&e.dispatchEvent(new CustomEvent("chronicle-show-detail",{bubbles:!0,composed:!0,detail:{event:t}}))}function qt(e,t=!1){const i=Math.floor(Number(e));if(null==e||!Number.isFinite(i)||1===i||i<0)return"";const o=`white-space: ${t?"pre-line":"normal"}; overflow-wrap: anywhere;`;return 0===i?`${o} text-overflow: clip;`:`${o} display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: ${i}; line-clamp: ${i};`}let Kt=class extends le{constructor(){super(...arguments),this.severity="info"}render(){const e=Rt(Wt(this.severity,this.customColors));return B`
      <span class="badge" style="background-color: ${e}">
        ${ht(`chronicle.severity.${this.severity}`)}
      </span>
    `}};Kt.styles=a`
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
  `,e([me()],Kt.prototype,"severity",void 0),e([me({attribute:!1})],Kt.prototype,"customColors",void 0),Kt=e([he("chronicle-severity-badge")],Kt);let Vt=class extends le{render(){return B`
      <button @click=${this._handleClick} @pointerdown=${e=>e.stopPropagation()}>
        ${this.action.icon?B`<ha-icon .icon=${this.action.icon}></ha-icon>`:""}
        ${this.action.label}
      </button>
    `}_handleClick(e){if(e.stopPropagation(),!this.action||!this.event)return;if(!this.action.action&&"fire-event"===this.action.type)return void(this.action.eventType&&this.dispatchEvent(new CustomEvent(this.action.eventType,{bubbles:!0,composed:!0,detail:Fe(this.action.eventData??{},this.event)})));const t=function(e){const{label:t,icon:i,type:o,serviceData:r,url:n,eventType:a,eventData:s,...c}=e;if(e.action)return c;switch(o){case"service":return e.service?{action:"perform-action",perform_action:e.service,data:r,target:e.target}:void 0;case"navigate":if(!n)return;return/^https?:\/\//.test(n)?{action:"url",url_path:n}:{action:"navigate",navigation_path:n};default:return}}(this.action);t&&Gt(this,this.event,t)}};Vt.styles=a`
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
  `,e([me({attribute:!1})],Vt.prototype,"action",void 0),e([me({attribute:!1})],Vt.prototype,"event",void 0),Vt=e([he("chronicle-action-button")],Vt);let Jt=class extends le{constructor(){super(...arguments),this.compact=!1,this.animated=!1,this._holdTimer=null,this._pressed=!1,this._holdFired=!1,this._startX=0,this._startY=0,this._lastActionAt=0}render(){const e=this.event;if(!e)return Y;const t=!1!==this.appearance?.show_images,i=!1!==this.appearance?.show_icons,o=!1!==this.appearance?.show_severity_badge,r=!1!==this.appearance?.show_category,n=this.compact?!0===this.appearance?.show_description:!1!==this.appearance?.show_description,a=/^\d{4}-\d{2}-\d{2}$/.test(e.start)?"":Ze(e.start),s=Rt(e.color),c=qt(this.appearance?.title_lines),l=qt(this.appearance?.description_lines,!0);return B`
      <div class="event-row">
        ${i?B`
          <div class="icon-wrap" style="background-color: ${s}">
            <ha-icon .icon=${Bt(e.icon)} style="color: ${Ht(s)}"></ha-icon>
          </div>
        `:Y}

        <div class="event-item"
          role="button"
          tabindex="0"
          @pointerdown=${this._onPointerDown}
          @pointerup=${this._onPointerUp}
          @pointercancel=${()=>{Pt("item pointercancel"),this._cancelHold()}}
          @pointerleave=${this._onPointerLeave}
          @click=${this._onClick}
          @keydown=${this._onKeyDown}
          @contextmenu=${e=>{this.event.holdAction&&e.preventDefault()}}
        >
          <div class="content">
            <div class="top-row ${c?"wrap":""}">
              <span class="title" style=${c}>${e.title}</span>
              ${o&&"info"!==e.severity?B`
                <chronicle-severity-badge
                  .severity=${e.severity}
                  .customColors=${this.appearance?.severity_colors}
                ></chronicle-severity-badge>
              `:Y}
              ${a?B`<span class="time">${a}</span>`:Y}
            </div>
            ${n&&e.description?B`<div class="description" style=${l}>${e.description}</div>`:Y}
            ${e.details?B`<div class="details">${e.details}</div>`:Y}
            <div class="meta-row">
              ${r&&e.category?B`<span class="category-tag">${e.category}</span>`:Y}
              ${r&&e.label?B`<span class="category-tag">${e.label}</span>`:Y}
              ${r&&e.entityName&&e.entityName!==e.title?B`<span class="category-tag">${e.entityName}</span>`:Y}
            </div>
            ${e.actions&&e.actions.length>0?B`
              <div class="actions-row">
                ${e.actions.map(t=>B`
                  <chronicle-action-button .action=${t} .event=${e}></chronicle-action-button>
                `)}
              </div>
            `:Y}
          </div>

          ${t&&e.mediaUrl?B`
            <img class="thumbnail" src=${e.mediaUrl} alt="" loading="lazy" />
          `:Y}
        </div>
      </div>
    `}_onPointerDown(e){Pt(`item pointerdown type=${e.pointerType} button=${e.button} "${this.event?.title}"`),"mouse"===e.pointerType&&0!==e.button||(this._pressed=!0,this._holdFired=!1,this._startX=e.clientX,this._startY=e.clientY,this._holdTimer=setTimeout(()=>{this._holdFired=!0,this._lastActionAt=Date.now(),this._handleAction("hold")},500))}_onPointerUp(e){Pt(`item pointerup type=${e.pointerType} pressed=${this._pressed} hold=${this._holdFired} dx=${Math.round(e.clientX-this._startX)} dy=${Math.round(e.clientY-this._startY)}`),this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=null),this._pressed&&(this._pressed=!1,Math.abs(e.clientX-this._startX)>10||Math.abs(e.clientY-this._startY)>10||this._holdFired||(this._lastActionAt=Date.now(),this._handleAction("tap")))}_onPointerLeave(e){Pt(`item pointerleave type=${e.pointerType}`),"mouse"===e.pointerType&&this._cancelHold()}_onClick(){Pt(`item click (${Date.now()-this._lastActionAt}ms after last action, hold=${this._holdFired})`),this._holdFired||Date.now()-this._lastActionAt<700||(this._cancelHold(),this._lastActionAt=Date.now(),this._handleAction("tap"))}_cancelHold(){this._pressed=!1,this._holdTimer&&(clearTimeout(this._holdTimer),this._holdTimer=null)}_onKeyDown(e){e.target===e.currentTarget&&("Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this._handleAction("tap")))}_handleAction(e){Pt(`item action ${e}`),Yt(this,this.event,e)}};Jt.styles=a`
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
    .event-item:focus-visible {
      outline: 2px solid var(--primary-color, #03a9f4);
      outline-offset: -2px;
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
    /* A wrapped title keeps the time/badge level with its first line */
    .top-row.wrap {
      align-items: baseline;
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

    .details {
      font-size: 11.5px;
      color: var(--secondary-text-color, #888);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 1.4;
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
    :host([compact]) .details { font-size: 11px; }
    :host([compact]) .meta-row,
    :host([compact]) .actions-row { display: none; }
  `,e([me({attribute:!1})],Jt.prototype,"event",void 0),e([me({attribute:!1})],Jt.prototype,"appearance",void 0),e([me({type:Boolean,reflect:!0})],Jt.prototype,"compact",void 0),e([me({type:Boolean,reflect:!0})],Jt.prototype,"animated",void 0),Jt=e([he("chronicle-event-item")],Jt);let Zt=class extends le{constructor(){super(...arguments),this.compact=!1}render(){const e=this.group;if(!e)return Y;const t=e.representative,i=e.events.map(e=>Je(e.start)),o=Ze(new Date(Math.min(...i))),r=Ze(new Date(Math.max(...i))),n=o===r?o:`${o} – ${r}`,a=!1!==this.appearance?.show_images?e.events.map(e=>e.mediaUrl).filter(Boolean):[],s=a.slice(0,3),c=a.length-3;return B`
      <div>
        <div class="group-row">
          <div class="icon-wrap" style="background-color: ${Rt(t.color)}">
            <ha-icon .icon=${Bt(t.icon)} style="color: ${Ht(Rt(t.color))}"></ha-icon>
            <span class="count-badge">${e.events.length}</span>
          </div>

          <div class="group-header"
            role="button"
            tabindex="0"
            aria-expanded=${e.expanded?"true":"false"}
            @click=${this._toggle}
            @keydown=${e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this._toggle())}}
          >
            <div class="content">
              <div class="top-row">
                <span class="summary">${e.summary}</span>
                <span class="time-range">${n}</span>
              </div>
            </div>

            ${s.length>0?B`
              <div class="thumb-strip">
                ${s.map((e,t)=>2===t&&c>0?B`
                        <div class="thumb-more-wrap">
                          <img src=${e} alt="" loading="lazy" />
                          <span class="more-count">+${c}</span>
                        </div>
                      `:B`<img class="thumb" src=${e} alt="" loading="lazy" />`)}
              </div>
            `:Y}

            <ha-icon
              class="chevron ${e.expanded?"open":Y}"
              icon="mdi:chevron-down"
            ></ha-icon>
          </div>
        </div>

        <div class="children ${e.expanded?"expanded":Y}">
          <div class="children-inner">
            ${e.expanded?B`
              <div class="children-content">
                ${e.events.map(e=>B`
                  <chronicle-event-item
                    .event=${e}
                    .appearance=${this.appearance}
                    ?compact=${this.compact}
                  ></chronicle-event-item>
                `)}
              </div>
            `:Y}
          </div>
        </div>
      </div>
    `}_toggle(){this.dispatchEvent(new CustomEvent("chronicle-toggle-group",{bubbles:!0,composed:!0,detail:{group:this.group}}))}};Zt.styles=a`
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
    .group-header:focus-visible {
      outline: 2px solid var(--primary-color, #03a9f4);
      outline-offset: -2px;
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
  `,e([me({attribute:!1})],Zt.prototype,"group",void 0),e([me({attribute:!1})],Zt.prototype,"appearance",void 0),e([me({type:Boolean,reflect:!0})],Zt.prototype,"compact",void 0),Zt=e([he("chronicle-event-group")],Zt);let Xt=class extends le{constructor(){super(...arguments),this.label="",this.eventCount=0}render(){return B`
      <div class="date-header">
        <span class="label">${this.label}</span>
        <span class="line"></span>
        ${this.eventCount>0?B`<span class="count">${this.eventCount}</span>`:""}
      </div>
    `}};Xt.styles=a`
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
  `,e([me()],Xt.prototype,"label",void 0),e([me()],Xt.prototype,"eventCount",void 0),Xt=e([he("chronicle-date-header")],Xt);let Qt=class extends le{constructor(){super(...arguments),this.message=""}render(){return B`
      <div class="empty">
        <div class="icon-ring">
          <ha-icon icon="mdi:timeline-clock-outline"></ha-icon>
        </div>
        <span class="text">${this.message||ht("chronicle.no_events")}</span>
      </div>
    `}};Qt.styles=a`
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
  `,e([me()],Qt.prototype,"message",void 0),Qt=e([he("chronicle-empty-state")],Qt);let ei=class extends le{constructor(){super(...arguments),this.items=[],this.compact=!1,this.headerDate=!1,this.animateNew=!0,this._renderLimit=30,this._seen=new Set,this._fresh=new Set,this._raf=0,this._winScroll=()=>this._onScroll()}willUpdate(e){if(!e.has("items"))return;const t=new Set;for(const e of this.items??[])for(const i of ve(e)?e.events:[e])t.add(i.id);this._fresh=this._seen.size&&this.animateNew?new Set([...t].filter(e=>!this._seen.has(e))):new Set,this._seen=t;const i=(this.items??[])[0],o=i?ve(i)?i.representative.id:i.id:void 0,r=this._firstId;void 0!==r&&t.has(r)||(this._renderLimit=30),this._firstId=o}render(){if(!this.items||0===this.items.length)return B`<chronicle-empty-state></chronicle-empty-state>`;const e=this.items.length,t=e>this._renderLimit?this.items.slice(0,this._renderLimit):this.items,i=this._groupByDate(t),o=this.appearance?.card_height??"400px",r="fill"===o||"100%"===o,n=r||"auto"===o?"":`max-height: ${o}`;return this.classList.toggle("fill",r),this.classList.toggle("sticky-dates",!0===this.appearance?.sticky_date_headers&&!this.headerDate),B`
      <div class="timeline-container" style=${n} @scroll=${this._onScroll}>
        <div class="timeline-inner">
          ${i.map(e=>B`
            <div class="date-section" data-label=${e.label}>
              <chronicle-date-header
                .label=${e.label}
                .eventCount=${this._countEvents(e.items)}
              ></chronicle-date-header>
              ${e.items.map(e=>ve(e)?B`
                    <chronicle-event-group
                      .group=${e}
                      .appearance=${this.appearance}
                      ?compact=${this.compact}
                    ></chronicle-event-group>
                  `:B`
                    <chronicle-event-item
                      .event=${e}
                      .appearance=${this.appearance}
                      ?compact=${this.compact}
                      ?animated=${this._fresh.has(e.id)}
                    ></chronicle-event-item>
                  `)}
            </div>
          `)}
          ${e>this._renderLimit?B`<div class="load-sentinel"></div>`:""}
        </div>
      </div>
    `}connectedCallback(){super.connectedCallback(),window.addEventListener("scroll",this._winScroll,{passive:!0,capture:!0})}_onScroll(){this.headerDate&&!this._raf&&(this._raf=requestAnimationFrame(()=>{this._raf=0;const e=this.renderRoot.querySelector(".timeline-container");if(!e)return;const t=Array.from(this.renderRoot.querySelectorAll(".date-section"));if(!t.length)return;const i=e.scrollHeight>e.clientHeight+1?e.getBoundingClientRect().top:Math.max(0,e.getBoundingClientRect().top);let o=t[0].dataset.label??"";for(const e of t)if(e.getBoundingClientRect().bottom>i+4){o=e.dataset.label??"";break}this._emitLabel(o)}))}_emitLabel(e){e!==this._lastLabel&&(this._lastLabel=e,this.dispatchEvent(new CustomEvent("chronicle-visible-date",{detail:{label:e},bubbles:!0,composed:!0})))}updated(){if(this.headerDate){this.renderRoot.querySelector(".date-section")?void 0!==this._lastLabel&&this.renderRoot.querySelector(`.date-section[data-label="${CSS.escape(this._lastLabel)}"]`)||(this._lastLabel=void 0,this._onScroll()):this._emitLabel("")}const e=this.renderRoot.querySelector(".load-sentinel"),t=this.renderRoot.querySelector(".timeline-container");if(this._observer?.disconnect(),!e)return;const i=t&&"none"!==getComputedStyle(t).maxHeight;this._observer=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(this._observer?.disconnect(),this._renderLimit+=30,this.requestUpdate())},{root:i||this.classList.contains("fill")?t:null,rootMargin:"400px 0px"}),this._observer.observe(e)}disconnectedCallback(){super.disconnectedCallback(),this._observer?.disconnect(),window.removeEventListener("scroll",this._winScroll,{capture:!0})}_groupByDate(e){const t=new Map;for(const i of e){const e=ve(i)?i.representative.start:i.start,o=et(e);let r=t.get(o);r||(r={dateKey:o,label:ot(e),items:[]},t.set(o,r)),r.items.push(i)}return Array.from(t.values())}_countEvents(e){let t=0;for(const i of e)t+=ve(i)?i.events.length:1;return t}};ei.styles=a`
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

    /* Skip layout/paint work for rows that are scrolled out of view. */
    chronicle-event-item,
    chronicle-event-group {
      content-visibility: auto;
      contain-intrinsic-size: auto 72px;
    }
    :host([compact]) chronicle-event-item,
    :host([compact]) chronicle-event-group {
      contain-intrinsic-size: auto 48px;
    }

    .load-sentinel {
      height: 1px;
    }
    /* Sticky date headers — each header pins to the top of the scroll
       container until the next day's section pushes it away. */
    :host(.sticky-dates) chronicle-date-header {
      position: sticky;
      top: 0;
      z-index: 3;
      background: var(--ha-card-background, var(--card-background-color, #fff));
    }
    .date-section:last-child {
      margin-bottom: 0;
    }
  `,e([me({attribute:!1})],ei.prototype,"items",void 0),e([me({attribute:!1})],ei.prototype,"appearance",void 0),e([me({type:Boolean,reflect:!0})],ei.prototype,"compact",void 0),e([me({type:Boolean})],ei.prototype,"headerDate",void 0),e([me({type:Boolean})],ei.prototype,"animateNew",void 0),ei=e([he("chronicle-vertical-timeline")],ei);const ti=e=>t=>{"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),e())};let ii=class extends le{constructor(){super(...arguments),this.items=[]}render(){if(!this.items||0===this.items.length)return B`<chronicle-empty-state></chronicle-empty-state>`;const e=this.appearance?.card_height;return B`
      <div class="wrapper">
        <button class="scroll-btn left" aria-label="Scroll left" @click=${()=>this._scroll(-200)}>
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </button>

        <div class="scroll-container" style=${e&&"auto"!==e?`height: ${"fill"===e||"100%"===e?"100%":e}; align-items: center;`:""}>
          ${this.items.map(e=>ve(e)?e.expanded?this._renderExpandedGroup(e):this._renderGroupCard(e):this._renderEventCard(e))}
        </div>

        <button class="scroll-btn right" aria-label="Scroll right" @click=${()=>this._scroll(200)}>
          <ha-icon icon="mdi:chevron-right"></ha-icon>
        </button>
      </div>
    `}_renderEventCard(e){const t=!1!==this.appearance?.show_images,i=Rt(e.color);return B`
      <div class="event-card" role="button" tabindex="0"
        @click=${()=>this._activate(e)}
        @keydown=${ti(()=>this._activate(e))}
      >
        ${t&&e.mediaUrl?B`<img class="card-media" src=${e.mediaUrl} alt="" loading="lazy" />`:B`
            <div class="card-placeholder" style="background-color: ${i}">
              <ha-icon .icon=${Bt(e.icon)}></ha-icon>
            </div>
          `}
        <div class="card-body">
          <div class="card-title" style=${qt(this.appearance?.title_lines)}>
            <span class="card-severity" style="background-color: ${i}"></span>
            ${e.title}
          </div>
          <div class="card-time">${rt(e.start)}</div>
        </div>
      </div>
    `}_renderGroupCard(e){const t=e.representative,i=!1!==this.appearance?.show_images;return B`
      <div class="group-card" role="button" tabindex="0" aria-expanded="false"
        @click=${()=>this._toggleGroup(e)}
        @keydown=${ti(()=>this._toggleGroup(e))}
      >
        ${i&&t.mediaUrl?B`
            <div class="group-media" style="padding: 0;">
              <img class="card-media" src=${t.mediaUrl} alt="" loading="lazy" />
              <span class="group-badge">${e.events.length}</span>
            </div>
          `:B`
            <div class="group-media" style="background-color: ${Rt(t.color)}">
              <ha-icon .icon=${Bt(t.icon)}></ha-icon>
              <span class="group-badge">${e.events.length}</span>
            </div>
          `}
        <div class="group-body">
          <div class="group-title">${e.summary}</div>
          <div class="group-time">${rt(t.start)}</div>
        </div>
      </div>
    `}_renderExpandedGroup(e){const t=!1!==this.appearance?.show_images;return B`
      <div class="group-expanded">
        ${e.events.map(e=>B`
          <div class="event-card" role="button" tabindex="0"
        @click=${()=>this._activate(e)}
        @keydown=${ti(()=>this._activate(e))}
      >
            ${t&&e.mediaUrl?B`<img class="card-media" src=${e.mediaUrl} alt="" loading="lazy" />`:B`
                <div class="card-placeholder" style="background-color: ${Rt(e.color)}">
                  <ha-icon .icon=${Bt(e.icon)}></ha-icon>
                </div>
              `}
            <div class="card-body">
              <div class="card-title" style=${qt(this.appearance?.title_lines)}>
                <span class="card-severity" style="background-color: ${Rt(e.color)}"></span>
                ${e.title}
              </div>
              <div class="card-time">${rt(e.start)}</div>
            </div>
          </div>
        `)}
        <div class="group-collapse-btn" role="button" tabindex="0" aria-expanded="true"
          @click=${()=>this._toggleGroup(e)}
          @keydown=${ti(()=>this._toggleGroup(e))}
        >
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </div>
      </div>
    `}_scroll(e){this.scrollEl?.scrollBy({left:e,behavior:"smooth"})}_activate(e){Yt(this,e,"tap")}_toggleGroup(e){this.dispatchEvent(new CustomEvent("chronicle-toggle-group",{bubbles:!0,composed:!0,detail:{group:e}}))}};ii.styles=a`
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
    .event-card:focus-visible,
    .group-card:focus-visible,
    .group-collapse-btn:focus-visible {
      outline: 2px solid var(--primary-color, #03a9f4);
      outline-offset: 2px;
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
  `,e([me({attribute:!1})],ii.prototype,"items",void 0),e([me({attribute:!1})],ii.prototype,"appearance",void 0),e([fe(".scroll-container")],ii.prototype,"scrollEl",void 0),ii=e([he("chronicle-horizontal-timeline")],ii);const oi=/^(\/api\/frigate\/(?:[^/]+\/)?notifications\/[^/]+\/(?:[^/]+\/)?)clip\.mp4$/,ri=/^(.*)\/api\/events\/([^/]+)\/clip\.mp4$/;let ni;function ai(){if(void 0===ni)try{ni=!!document.createElement("video").canPlayType("application/vnd.apple.mpegurl")}catch{ni=!1}return ni}function si(e){if(!e)return[];const t=function(e){let t;try{t=new URL(e,window.location.href)}catch{return}if(!/^https?:$/.test(t.protocol))return;let i,o=oi.exec(t.pathname);if(o?i=`${o[1]}master.m3u8`:(o=ri.exec(t.pathname))&&(i=`${o[1]}/vod/event/${o[2]}/master.m3u8`),!i)return;return`${/^[a-z][a-z\d+.-]*:|^\/\//i.test(e)?t.origin:""}${i}${t.search}`}(e),i=(t?"undefined"!=typeof navigator&&/apple/i.test(navigator.vendor||"")&&ai()?[t,e]:[e,t]:[e]).filter(e=>!/\.m3u8([?#]|$)/i.test(e)||ai());return i.length?i:[e]}async function ci(e,t){if(!e||!t)return t;try{if(t.startsWith("media-source://")){const i=await e.callWS({type:"media_source/resolve_media",media_content_id:t,expires:900});return i?.url||t}const i=function(e){try{const t=new URL(e,window.location.href);return t.origin===window.location.origin?t:void 0}catch{return}}(t);if(!i||!function(e){return/^\/(api|media)\//.test(e.pathname)&&!e.searchParams.has("authSig")}(i))return t;if(i.pathname.startsWith("/media/")&&!i.pathname.startsWith("/media/local/")){const o=await e.callWS({type:"media_source/resolve_media",media_content_id:`media-source://media_source/local/${decodeURIComponent(i.pathname.slice(7))}`,expires:900});return o?.url||t}const o=await e.callWS({type:"auth/sign_path",path:`${i.pathname}${i.search}`,expires:900});return o?.path||t}catch{return t}}const li=/\.(mp4|webm|mov|m3u8|mkv|ogv)([?#]|$)/i,di=a`
  :host {
    font-family: var(--ha-font-family-body, Roboto, Noto, sans-serif);
    -webkit-font-smoothing: antialiased;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }

  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    z-index: 99999;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }
  .open .overlay { opacity: 1; pointer-events: auto; }

  .dialog {
    position: fixed;
    z-index: 100000;
    background: var(--ha-dialog-surface-background, var(--card-background-color, #fff));
    color: var(--primary-text-color, #333);
    overflow-y: auto;
    overscroll-behavior: contain;
    outline: none;

    /* Mobile: bottom sheet */
    bottom: 0; left: 0; right: 0;
    max-height: 88vh;
    border-radius: 20px 20px 0 0;
    box-shadow: 0 -2px 30px rgba(0, 0, 0, 0.2), 0 -1px 2px rgba(0,0,0,0.06);
    transform: translateY(100%);
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    padding-bottom: env(safe-area-inset-bottom, 0);
  }
  .open .dialog { transform: translateY(0); }

  @media (min-width: 600px) {
    .dialog {
      bottom: auto; left: 50%; right: auto;
      top: 50%;
      transform: translate(-50%, -50%) scale(0.96);
      opacity: 0;
      transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease;
      border-radius: var(--ha-dialog-border-radius, 18px);
      max-width: 460px;
      width: 92vw;
      max-height: 82vh;
      box-shadow: 0 12px 48px rgba(0, 0, 0, 0.18), 0 2px 8px rgba(0,0,0,0.08);
    }
    .open .dialog { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  }

  @media (prefers-reduced-motion: reduce) {
    .overlay, .dialog { transition: none; }
  }

  .handle {
    width: 32px; height: 4px;
    border-radius: 2px;
    background: var(--divider-color, rgba(127,127,127,0.25));
    margin: 10px auto 0;
  }
  @media (min-width: 600px) { .handle { display: none; } }

  .media-wrap { position: relative; overflow: hidden; }
  .media {
    width: 100%;
    max-height: 240px;
    object-fit: cover;
    display: block;
    background: var(--secondary-background-color, #f0f0f0);
  }
  video.media { object-fit: contain; background: #000; }
  .media-gradient {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 48px;
    background: linear-gradient(transparent, var(--ha-dialog-surface-background, var(--card-background-color, #fff)));
    pointer-events: none;
  }
  .clip-link {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    margin: 8px 20px 0;
    font-size: 12px;
    font-weight: 500;
    color: var(--primary-color, #03a9f4);
    text-decoration: none;
  }
  .clip-link ha-icon { --mdc-icon-size: 14px; }
  .clip-error {
    display: flex;
    align-items: center;
    gap: 6px;
    margin: 12px 20px 0;
    font-size: 12.5px;
    color: var(--secondary-text-color, #888);
  }
  .clip-error ha-icon { --mdc-icon-size: 16px; flex-shrink: 0; }
  .clip-error + .clip-link { margin-top: 4px; }

  .body { padding: 16px 20px 24px; }
  .body-with-media { padding-top: 8px; }

  .header {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 16px;
  }
  .header-icon {
    width: 40px; height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 2px 6px rgba(0,0,0,0.12);
  }
  .header-icon ha-icon {
    --mdc-icon-size: 20px;
    color: #fff;
    filter: drop-shadow(0 1px 1px rgba(0,0,0,0.15));
  }
  .header-text { flex: 1; min-width: 0; padding-right: 28px; }
  .header-title {
    font-size: 17px;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.2px;
  }
  .header-time {
    font-size: 12px;
    color: var(--secondary-text-color, #888);
    margin-top: 4px;
    font-variant-numeric: tabular-nums;
  }

  .close-btn {
    position: absolute;
    top: 12px; right: 12px;
    width: 32px; height: 32px;
    border-radius: 50%;
    border: none;
    background: rgba(127,127,127,0.12);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    color: var(--primary-text-color, #333);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    transition: background 0.15s ease;
  }
  .close-btn:hover { background: rgba(127,127,127,0.22); }
  .close-btn ha-icon { --mdc-icon-size: 18px; }
  .close-btn:focus-visible, .more-info-btn:focus-visible, .clip-link:focus-visible {
    outline: 2px solid var(--primary-color, #03a9f4);
    outline-offset: 2px;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 16px;
  }
  .tag {
    font-size: 11px;
    font-weight: 500;
    padding: 3px 10px;
    border-radius: 20px;
    background: var(--divider-color, rgba(127,127,127,0.08));
    color: var(--secondary-text-color, #777);
    letter-spacing: 0.1px;
  }
  .severity-tag {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.4px;
    text-transform: uppercase;
    padding: 4px 10px;
    border-radius: 20px;
    color: #fff;
    display: inline-flex;
    align-items: center;
    line-height: 1;
  }

  .description {
    font-size: 13.5px;
    line-height: 1.65;
    margin-bottom: 16px;
    white-space: pre-wrap;
    word-break: break-word;
    opacity: 0.9;
  }
  .details {
    font-size: 12.5px;
    color: var(--secondary-text-color, #888);
    margin: -8px 0 16px;
  }

  .meta-table {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 7px 14px;
    font-size: 12px;
    margin-bottom: 16px;
    padding: 14px 16px;
    background: var(--secondary-background-color, rgba(127,127,127,0.04));
    border-radius: 12px;
    border: 1px solid var(--divider-color, rgba(127,127,127,0.08));
  }
  .meta-label {
    color: var(--secondary-text-color, #888);
    font-weight: 500;
    font-size: 11px;
    text-transform: uppercase;
    letter-spacing: 0.3px;
  }
  .meta-value { font-size: 12.5px; word-break: break-word; }

  .more-info-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    border-radius: 20px;
    border: 1px solid var(--divider-color, rgba(127,127,127,0.2));
    background: var(--secondary-background-color, rgba(127,127,127,0.06));
    color: var(--primary-color, #03a9f4);
    font-size: 12px;
    font-weight: 600;
    font-family: inherit;
    cursor: pointer;
    margin-bottom: 16px;
    transition: background 0.15s ease, border-color 0.15s ease;
  }
  .more-info-btn:hover { border-color: var(--primary-color, #03a9f4); }
  .more-info-btn ha-icon { --mdc-icon-size: 16px; }
`;let hi=class extends le{constructor(){super(...arguments),this._event=null,this._open=!1,this._clipCandidates=[],this._clipIndex=0,this._clipSrc="",this._clipLink="",this._clipFailed=!1,this._clipToken=0,this._container=null,this._returnFocus=null,this._openedAt=0,this._ghostGuard={capture:!0,handleEvent:e=>{Date.now()-this._openedAt<500&&(Pt(`ghost click swallowed on ${Lt(e.composedPath()[0])}`),e.preventDefault(),e.stopPropagation())}},this._onKeydown=e=>{"Escape"===e.key&&this._open&&(e.stopPropagation(),this.close("escape"))}}render(){return Y}show(e,t){if(clearTimeout(this._closeTimer),Pt(`dialog show "${e.title}" clip=${e.metadata?.clip_url||"-"}`),Tt&&!this._docTrace){this._docTrace=e=>{if(!this._container)return;const t=e.composedPath();Pt(`doc ${e.type} target=${Lt(t[0])} inDialog=${t.includes(this._container)} defaultPrevented=${e.defaultPrevented}`)};for(const e of["pointerdown","pointerup","click","touchend"])document.addEventListener(e,this._docTrace,!0)}this._openedAt=Date.now(),this._event=e,this._hass=t,this._clipCandidates=si(e.metadata?.clip_url||""),this._clipIndex=0,this._clipSrc="",this._clipLink="",this._clipFailed=!1,this._loadClip(),this._returnFocus=document.activeElement,this._ensureContainer(),this._renderDialog(),requestAnimationFrame(()=>{requestAnimationFrame(()=>{this._open=!0,this._renderDialog(),this._container?.shadowRoot?.querySelector(".close-btn")?.focus()})})}close(e="api"){Pt(`dialog close reason=${e} open=${this._open} ${Date.now()-this._openedAt}ms after show`),this._open&&(this._open=!1,this._clipToken++,this._renderDialog(),this._returnFocus?.focus?.(),this._closeTimer=setTimeout(()=>{this._event=null,this._removeContainer()},350))}_ensureContainer(){if(this._container)return;this._container=document.createElement("div"),this._container.className="chronicle-detail-overlay",document.body.appendChild(this._container);const e=this._container.attachShadow({mode:"open"});s(e,[di])}_removeContainer(){this._container&&Pt("dialog container removed"),this._container?.remove(),this._container=null}_renderDialog(){const e=this._container?.shadowRoot;e&&se(this._template(),e)}_template(){const e=this._event;if(!e)return Y;const t=this._clipCandidates.length>0,i=t&&!this._clipFailed,o=i?this._clipSrc:e.mediaUrl||"",r=i||li.test(o),n=this._clipLink||this._clipCandidates[0]||"",a=e.metadata?.location,s=Rt(Wt(e.severity,this.severityColors)),c=!!e.entityId&&["history","logbook","calendar"].includes(e.sourceType);return B`
      <div class=${this._open?"open":""} @click=${this._ghostGuard}>
        <div class="overlay" @click=${()=>this.close("backdrop")}></div>
        <div class="dialog" role="dialog" aria-modal="true" aria-labelledby="chronicle-dialog-title" tabindex="-1">
          <div class="handle"></div>
          <button class="close-btn" aria-label=${ht("chronicle.detail.close")} @click=${()=>this.close("close-button")}>
            <ha-icon icon="mdi:close"></ha-icon>
          </button>

          ${o||i?B`
            <div class="media-wrap">
              ${r?this._video(o,i&&e.mediaUrl&&!li.test(e.mediaUrl)?e.mediaUrl:"",i):B`<img class="media" src=${o} alt="" /><div class="media-gradient"></div>`}
            </div>
          `:Y}
          ${this._clipFailed?B`
            <div class="clip-error" role="status">
              <ha-icon icon="mdi:video-off-outline"></ha-icon>${ht("chronicle.detail.clip_unavailable")}
            </div>
          `:Y}
          ${t?B`
            <a class="clip-link" href=${n} target="_blank" rel="noopener">
              <ha-icon icon="mdi:open-in-new"></ha-icon>${ht("chronicle.detail.open_clip")}
            </a>
          `:Y}

          <div class="body ${o?"body-with-media":""}">
            <div class="header">
              <div class="header-icon" style="background-color: ${Rt(e.color)}">
                <ha-icon .icon=${Bt(e.icon)}></ha-icon>
              </div>
              <div class="header-text">
                <div class="header-title" id="chronicle-dialog-title">${e.title}</div>
                <div class="header-time">${Xe(e.start)}</div>
              </div>
            </div>

            <div class="tags">
              <span class="severity-tag" style="background-color: ${s}">
                ${ht(`chronicle.severity.${e.severity}`)}
              </span>
              ${e.category?B`<span class="tag">${e.category}</span>`:Y}
              ${e.label?B`<span class="tag">${e.label}</span>`:Y}
              ${e.sourceType?B`<span class="tag">${e.sourceType}</span>`:Y}
            </div>

            ${e.description?B`<div class="description">${e.description}</div>`:Y}
            ${e.details?B`<div class="details">${e.details}</div>`:Y}

            ${c?B`
              <button class="more-info-btn" @click=${()=>this._moreInfo(e.entityId)}>
                <ha-icon icon="mdi:information-outline"></ha-icon>
                ${ht("chronicle.detail.more_info")}
              </button>
            `:Y}

            <div class="meta-table">
              ${e.entityName?this._row("chronicle.detail.entity",e.entityName):Y}
              ${e.entityId?this._row("chronicle.detail.entity_id",e.entityId):Y}
              ${this._row("chronicle.detail.source",e.sourceId)}
              ${a?this._row("chronicle.detail.location",a):Y}
              ${this._row("chronicle.detail.start",Xe(e.start))}
              ${e.end&&e.end!==e.start?this._row("chronicle.detail.end",Xe(e.end)):Y}
            </div>
          </div>
        </div>
      </div>
    `}_row(e,t){return B`
      <span class="meta-label">${ht(e)}</span>
      <span class="meta-value">${t}</span>
    `}_video(e,t,i){return B`<video class="media" controls autoplay loop playsinline webkit-playsinline muted
      .muted=${!0}
      .playsInline=${!0}
      src=${e||Y}
      poster=${t||Y}
      @error=${i?e=>this._onClipError(e):Y}></video>`}async _loadClip(){const e=this._clipCandidates[this._clipIndex];if(!e)return;const t=++this._clipToken,i=await ci(this._hass,e);t===this._clipToken&&(this._clipSrc=i,0===this._clipIndex&&(this._clipLink=i),this._renderDialog())}_onClipError(e){const t=e.target;!this._clipFailed&&this._clipSrc&&t.getAttribute("src")===this._clipSrc&&(console.warn("[chronicle-card] Clip failed to play:",this._clipSrc,t.error?.code,t.error?.message),this._clipIndex++,this._clipSrc="",this._clipIndex<this._clipCandidates.length?this._loadClip():this._clipFailed=!0,this._renderDialog())}_moreInfo(e){this.close("more-info"),setTimeout(()=>{this.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:e}}))},100)}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._onKeydown)}disconnectedCallback(){super.disconnectedCallback(),Pt(`dialog element DISCONNECTED (open=${this._open})`),document.removeEventListener("keydown",this._onKeydown),clearTimeout(this._closeTimer),this._open=!1,this._removeContainer()}};hi.styles=a`:host { display: none; }`,e([me({attribute:!1})],hi.prototype,"severityColors",void 0),hi=e([he("chronicle-detail-dialog")],hi);let pi,ui=class extends le{constructor(){super(...arguments),this._items=[],this._layout="vertical",this._selectedDate="",this._visibleDate="",this._calOpen=!1,this._calMonth="",this._outsideClick=e=>{e.composedPath().includes(this)||(this._calOpen=!1,document.removeEventListener("click",this._outsideClick,{capture:!0}))},this._localeKey="",this._store=new Ct}static getConfigElement(){return document.createElement(Se)}static getStubConfig(e){const t=Object.keys(e?.states??{}),i=t.find(e=>e.startsWith("calendar.")),o=t.filter(e=>/^(binary_sensor|lock|cover|person|light)\./.test(e)).slice(0,3);return{title:"Timeline",sources:i?[{type:"calendar",entity:i}]:o.length?[{type:"history",entities:o}]:[]}}setConfig(e){if(!e)throw new Error("No configuration provided");if(void 0!==e.sources&&!Array.isArray(e.sources))throw new Error('"sources" must be a list');if(this._rawConfig&&JSON.stringify(this._rawConfig)===JSON.stringify(e))return;const t=this._rawConfig?.layout!==e.layout;this._rawConfig=e,this._config={..._e,...e,sources:e.sources??[],filters:{..._e.filters,...e.filters},grouping:{..._e.grouping,...e.grouping},appearance:{..._e.appearance,...e.appearance}},Mt(!0===this._config.debug,this._hass),t&&(this._layout=this._config.layout??"vertical"),this._store.configure(this._config),this._config.show_date_picker||(this._selectedDate=""),this._store.setSelectedDate(this._selectedDate||null).catch(()=>{}),this._hass&&this.isConnected&&this._fetch(!0),this.isConnected&&this._startPolling()}set hass(e){const t=this._hass;this._hass=e,!t&&this._config?.debug&&Mt(!0,e);const i=[this._config?.language,e.locale?.language,e.language,e.locale?.time_format,e.locale?.time_zone,e.config?.time_zone].join("|");i!==this._localeKey&&(this._localeKey=i),this.isConnected&&this._config&&(t?this._store.processStateChanges(e,t).catch(e=>{console.warn("[chronicle-card] Live update error:",e)}):this._fetch(!1))}get hass(){return this._hass}connectedCallback(){super.connectedCallback(),Pt("card connected"),this._storeUnsub?.(),this._storeUnsub=this._store.subscribe(()=>{this._items=[...this._store.items]}),this._items=[...this._store.items],this._startPolling(),this._hass&&this._config&&this._fetch(!1)}disconnectedCallback(){super.disconnectedCallback(),Pt("card DISCONNECTED"),document.removeEventListener("click",this._outsideClick,{capture:!0}),this._storeUnsub?.(),this._storeUnsub=void 0,this._stopPolling()}_fetch(e){this._hass&&(this._syncLocale(),this._store.fetch(this._hass,e).catch(e=>{console.warn("[chronicle-card] Fetch error:",e)}))}_startPolling(){this._stopPolling(),this._config&&(this._pollTimer=setInterval(()=>this._fetch(!0),this._store.pollInterval))}_stopPolling(){this._pollTimer&&clearInterval(this._pollTimer),this._pollTimer=void 0}_syncLocale(){const e=this._config?.language||this._hass?.locale?.language||this._hass?.language||"en";!function(e){dt=e}(e),function(e,t,i){let o;if(i)o="12h"===i;else switch(e?.locale?.time_format){case"12":o=!0;break;case"24":o=!1;break;case"system":o=new Intl.DateTimeFormat(void 0,{hour:"numeric"}).resolvedOptions().hour12;break;default:o=void 0}const r="server"===e?.locale?.time_zone?e.config?.time_zone:void 0,n={language:qe(t),hour12:o,timeZone:r};n.language===Ge.language&&n.hour12===Ge.hour12&&n.timeZone===Ge.timeZone||(Ge=n,Ye.clear())}(this._hass,e,this._config?.time_format)}get _fill(){const e=this._config?.appearance?.card_height;return"fill"===e||"100%"===e||"number"==typeof this._config?.grid_options?.rows}willUpdate(e){super.willUpdate(e),this.toggleAttribute("fill",this._fill),this.toggleAttribute("cal-open",this._calOpen)}render(){if(!this._config)return Y;this._syncLocale();const e=!1!==this._config.show_header,t=!1!==this._config.show_layout_toggle,i={...this._config.appearance,...this._fill?{card_height:"fill"}:{}},o=i.compact??!1,r=!1!==i.animate_new_events,n=e&&!0===i.sticky_date_headers&&"vertical"===this._layout;return B`
      <ha-card>
        ${e&&(this._config.title||t)?B`
          <div class="card-header">
            <span class="title-wrap">
              <span class="title">${this._config.title??""}</span>
              ${this._config.debug?B`<span class="current-date">v${$e} debug</span>`:""}
              ${n&&this._visibleDate?B`<span class="current-date">${this._visibleDate}</span>`:""}
            </span>
            ${this._config.show_date_picker?this._renderDatePicker():""}
            ${t?B`
              <div class="header-actions">
                ${this._renderToggle("vertical","mdi:view-sequential","Vertical timeline")}
                ${this._renderToggle("horizontal","mdi:view-carousel","Horizontal timeline")}
              </div>
            `:Y}
          </div>
        `:Y}

        <div class="card-content" @chronicle-show-detail=${this._onShowDetail} @chronicle-toggle-group=${this._onToggleGroup}>
          ${"vertical"===this._layout?B`
              <chronicle-vertical-timeline
                .items=${this._items}
                .appearance=${i}
                ?compact=${o}
                ?animateNew=${r}
                ?headerDate=${n}
                @chronicle-visible-date=${e=>{this._visibleDate=e.detail.label}}
              ></chronicle-vertical-timeline>
            `:B`
              <chronicle-horizontal-timeline
                .items=${this._items}
                .appearance=${i}
              ></chronicle-horizontal-timeline>
            `}
        </div>

        <chronicle-detail-dialog .severityColors=${i.severity_colors}></chronicle-detail-dialog>
      </ha-card>
    `}_todayStr(e=0){const t=new Date;t.setDate(t.getDate()+e);const i=e=>String(e).padStart(2,"0");return`${t.getFullYear()}-${i(t.getMonth()+1)}-${i(t.getDate())}`}_renderDatePicker(){const e=this._todayStr(),t=this._selectedDate;return B`
      <div class="date-picker">
        <button class="layout-toggle" title="Previous day"
          @click=${()=>this._shiftDate(-1)}>
          <ha-icon icon="mdi:chevron-left"></ha-icon>
        </button>
        <button class="date-field ${t?"active":""}" title="Show events from this day"
          @click=${this._toggleCal}>
          <ha-icon icon="mdi:calendar"></ha-icon>
          <span>${this._formatDate(t||e)}</span>
        </button>
        ${this._calOpen?this._renderCalendar(t||e,e):""}
        <button class="layout-toggle" title="Next day"
          ?disabled=${!t||t>=e}
          @click=${()=>this._shiftDate(1)}>
          <ha-icon icon="mdi:chevron-right"></ha-icon>
        </button>
        ${t?B`
          <button class="layout-toggle" title="Back to latest events"
            @click=${()=>this._setDate("")}>
            <ha-icon icon="mdi:calendar-today"></ha-icon>
          </button>
        `:""}
      </div>
    `}_dateOrder(){const e=this._config?.date_format;if("DMY"===e||"MDY"===e||"YMD"===e)return e;const t=this._hass?.locale?.date_format;if("DMY"===t||"MDY"===t||"YMD"===t)return t;if("language"===t||"system"===t){const e="system"===t?void 0:this._hass?.locale?.language||this._hass?.language;try{const t=new Intl.DateTimeFormat(e,{year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date(2026,11,31)).map(e=>e.type).filter(e=>"day"===e||"month"===e||"year"===e),i=t.map(e=>e[0].toUpperCase()).join("");if("DMY"===i||"MDY"===i||"YMD"===i)return i}catch{}}return"DMY"}_formatDate(e){const[t,i,o]=e.split("-");switch(this._dateOrder()){case"MDY":return`${i}/${o}/${t}`;case"YMD":return`${t}-${i}-${o}`;default:return`${o}/${i}/${t}`}}_toggleCal(e){e.stopPropagation(),this._calOpen=!this._calOpen,this._calOpen&&(this._calMonth=(this._selectedDate||this._todayStr()).slice(0,7),setTimeout(()=>document.addEventListener("click",this._outsideClick,{capture:!0}),0))}_firstWeekday(){const e=this._hass?.locale?.first_weekday,t={sunday:0,monday:1,tuesday:2,wednesday:3,thursday:4,friday:5,saturday:6};return e&&e in t?t[e]:1}_renderCalendar(e,t){const[i,o]=this._calMonth.split("-").map(Number),r=new Date(i,o-1,1),n=new Date(i,o,0).getDate(),a=this._firstWeekday(),s=(r.getDay()-a+7)%7;let c=this._config?.language||this._hass?.locale?.language||this._hass?.language;try{new Intl.DateTimeFormat(c)}catch{c=void 0}const l=r.toLocaleDateString(c,{month:"long",year:"numeric"}),d=Array.from({length:7},(e,t)=>new Date(2024,0,7+(a+t)%7).toLocaleDateString(c,{weekday:"short"}).replace(".","")),h=e=>String(e).padStart(2,"0"),p=[];for(let e=0;e<s;e++)p.push(B`<span></span>`);for(let r=1;r<=n;r++){const n=`${i}-${h(o)}-${h(r)}`;p.push(B`<button
        class="cal-day ${n===e?"sel":""} ${n===t?"today":""}"
        ?disabled=${n>t}
        @click=${e=>{e.stopPropagation(),this._calOpen=!1,this._setDate(n===t?"":n)}}
      >${r}</button>`)}const u=`${i}-${h(o)}`<t.slice(0,7);return B`
      <div class="cal" @click=${e=>e.stopPropagation()}>
        <div class="cal-head">
          <button class="layout-toggle" @click=${()=>this._shiftMonth(-1)}><ha-icon icon="mdi:chevron-left"></ha-icon></button>
          <span>${l}</span>
          <button class="layout-toggle" ?disabled=${!u} @click=${()=>u&&this._shiftMonth(1)}><ha-icon icon="mdi:chevron-right"></ha-icon></button>
        </div>
        <div class="cal-grid">
          ${d.map(e=>B`<span class="cal-wd">${e}</span>`)}
          ${p}
        </div>
      </div>
    `}_shiftMonth(e){const[t,i]=this._calMonth.split("-").map(Number),o=new Date(t,i-1+e,1);this._calMonth=`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}`}_shiftDate(e){const t=this._selectedDate||this._todayStr(),[i,o,r]=t.split("-").map(Number),n=new Date(i,o-1,r+e),a=e=>String(e).padStart(2,"0"),s=`${n.getFullYear()}-${a(n.getMonth()+1)}-${a(n.getDate())}`;s>this._todayStr()||this._setDate(s)}_setDate(e){const t=this._todayStr(),i=e&&e<=t?e:"";i!==this._selectedDate&&(this._selectedDate=i,this._store.setSelectedDate(i||null,this._hass).catch(e=>{console.warn("[chronicle-card] Date fetch error:",e)}))}_renderToggle(e,t,i){const o=this._layout===e;return B`
      <button
        class="layout-toggle ${o?"active":""}"
        aria-pressed=${o?"true":"false"}
        aria-label=${i}
        title=${i}
        @click=${()=>{this._layout=e}}
      >
        <ha-icon .icon=${t}></ha-icon>
      </button>
    `}_onShowDetail(e){Pt("show-detail received, dialog element "+(this._dialog?this._dialog.isConnected?"connected":"NOT connected":"MISSING")),this._dialog?.show(e.detail.event,this._hass)}_onToggleGroup(e){this._store.toggleGroup(e.detail.group)}getCardSize(){const e=!1!==this._config?.show_header?1:0,t=this._config?.appearance?.card_height??"400px",i=/^(\d+)px$/.exec(t);return e+(i?Math.ceil(Number(i[1])/50):6)}getGridOptions(){return{columns:12,min_columns:6,min_rows:3}}};ui.styles=a`
    :host {
      display: block;
      contain: content;
    }

    /* Fill mode — stretch the whole chain to the height the dashboard gives us. */
    :host([fill]) {
      height: 100%;
    }

    /* Let the calendar popup overflow the card while open */
    :host([cal-open]) {
      contain: none;
      position: relative;
      z-index: 5;
    }
    :host([cal-open]) ha-card {
      overflow: visible;
    }

    ha-card {
      overflow: hidden;
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
      color: var(--ha-card-header-color, var(--primary-text-color, #333));
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
    .layout-toggle:focus-visible {
      outline: 2px solid var(--primary-color, #03a9f4);
      outline-offset: 1px;
    }
    .layout-toggle.active {
      background: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff);
    }
    .layout-toggle ha-icon {
      --mdc-icon-size: 17px;
    }

    .title-wrap {
      display: flex;
      align-items: baseline;
      gap: 8px;
      min-width: 0;
    }
    .current-date {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;
      color: var(--secondary-text-color, #888);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .layout-toggle[disabled] {
      opacity: 0.35;
      cursor: default;
    }

    .date-picker {
      display: flex;
      align-items: center;
      gap: 3px;
      margin-left: auto;
      margin-right: 6px;
    }
    .date-field {
      position: relative;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      height: 30px;
      box-sizing: border-box;
      padding: 0 10px;
      border-radius: 8px;
      border: 1px solid var(--divider-color, rgba(127,127,127,0.25));
      color: var(--primary-text-color, #333);
      font-size: 12.5px;
      font-variant-numeric: tabular-nums;
      cursor: pointer;
      white-space: nowrap;
    }
    .date-field.active {
      border-color: var(--primary-color, #03a9f4);
      color: var(--primary-color, #03a9f4);
      font-weight: 600;
    }
    .date-field ha-icon {
      --mdc-icon-size: 15px;
      opacity: 0.7;
    }
    .date-field {
      font-family: inherit;
      font-size: 12px;
      font-weight: 500;
      line-height: 1;
      height: 28px;
      padding: 0 8px;
      background: transparent;
    }
    .date-field.active { font-weight: 600; }
    .date-picker { position: relative; }
    .cal {
      position: absolute;
      top: 36px;
      right: 0;
      z-index: 10;
      width: 252px;
      padding: 10px;
      box-sizing: border-box;
      border-radius: 12px;
      /* Opaque base (themes often use translucent card backgrounds) with the
         card colour layered on top */
      background-color: var(--primary-background-color, #fafafa);
      background-image: linear-gradient(
        var(--card-background-color, #fff),
        var(--card-background-color, #fff)
      );
      border: 1px solid var(--divider-color, rgba(127,127,127,0.2));
      box-shadow: 0 6px 24px rgba(0,0,0,0.25);
      color: var(--primary-text-color, #333);
      font-size: 12.5px;
    }
    .cal-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 6px;
      font-weight: 700;
    }
    .cal-grid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 2px;
      text-align: center;
    }
    .cal-wd {
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      color: var(--secondary-text-color, #888);
      padding: 4px 0;
    }
    .cal-day {
      height: 30px;
      border: none;
      border-radius: 8px;
      background: transparent;
      color: inherit;
      font: inherit;
      cursor: pointer;
      font-variant-numeric: tabular-nums;
    }
    .cal-day:hover:not([disabled]) {
      background: var(--secondary-background-color, rgba(127,127,127,0.1));
    }
    .cal-day.today { font-weight: 700; color: var(--primary-color, #03a9f4); }
    .cal-day.sel {
      background: var(--primary-color, #03a9f4);
      color: var(--text-primary-color, #fff);
    }
    .cal-day[disabled] { opacity: 0.3; cursor: default; }
    .date-picker input.legacy {
      height: 30px;
      box-sizing: border-box;
      padding: 0 8px;
      border-radius: 8px;
      border: 1px solid var(--divider-color, rgba(127,127,127,0.25));
      background: transparent;
      color: var(--primary-text-color, #333);
      font: inherit;
      font-size: 12.5px;
      color-scheme: light dark;
      cursor: pointer;
    }
    .date-picker input[type='date']:focus {
      outline: none;
      border-color: var(--primary-color, #03a9f4);
    }
    .date-picker input.active {
      border-color: var(--primary-color, #03a9f4);
      color: var(--primary-color, #03a9f4);
      font-weight: 600;
    }

    .card-content {
      padding: 0 16px 14px;
    }
  `,e([ge()],ui.prototype,"_config",void 0),e([ge()],ui.prototype,"_items",void 0),e([ge()],ui.prototype,"_layout",void 0),e([ge()],ui.prototype,"_selectedDate",void 0),e([ge()],ui.prototype,"_visibleDate",void 0),e([ge()],ui.prototype,"_calOpen",void 0),e([ge()],ui.prototype,"_calMonth",void 0),e([ge()],ui.prototype,"_localeKey",void 0),e([fe("chronicle-detail-dialog")],ui.prototype,"_dialog",void 0),ui=e([he("chronicle-card-local-snaps")],ui);const mi=[{value:"category",label:"Category"},{value:"source",label:"Source"},{value:"entity",label:"Entity"},{value:"none",label:"None"}],gi=e=>!!e&&"object"==typeof e&&!Array.isArray(e),fi=e=>null==e||""===e||Array.isArray(e)&&0===e.length||gi(e)&&0===Object.keys(e).length,yi=(e,t)=>JSON.stringify(e)===JSON.stringify(t);function _i(e,t,i){const o={};for(const[r,n]of Object.entries(e)){if(fi(n))continue;const e=!!t&&r in t,a=i?.[r];if(gi(n)){const e=_i(n,gi(t?.[r])?t[r]:void 0,gi(a)?a:void 0);Object.keys(e).length&&(o[r]=e);continue}!e&&void 0!==a&&yi(n,a)||(o[r]=n)}return o}function vi(e){if("string"!=typeof e)return;let t=e.trim().replace(/^#/,"");return 3===t.length&&(t=t.split("").map(e=>e+e).join("")),/^[0-9a-f]{6}$/i.test(t)?[0,2,4].map(e=>parseInt(t.slice(e,e+2),16)):void 0}function bi(e){return Array.isArray(e)&&3===e.length?`#${e.map(e=>Math.max(0,Math.min(255,Math.round(Number(e)))).toString(16).padStart(2,"0")).join("")}`:"string"==typeof e?e:void 0}function xi(e,t,i){const o={...e};for(const e of t)e in o&&(o[e]=i(o[e]));return o}function wi(e,t){const i=new Set(["title","name","entity","entities","icon","tap_action","hold_action","state_color"]);return o=>{const r=o.name??"";if(i.has(r)){const t=e?.localize?.(`ui.panel.lovelace.editor.card.generic.${r}`);if(t)return t}return t[r]??o.title??r}}const $i=[{value:"history",label:"Entity state (history)"},{value:"logbook",label:"Logbook"},{value:"calendar",label:"Calendar"},{value:"rest",label:"REST / WebSocket API"},{value:"static",label:"Static events"}],ki={select:{mode:"dropdown",options:[{value:"critical",label:"Critical"},{value:"warning",label:"Warning"},{value:"info",label:"Info"},{value:"debug",label:"Debug"}]}},Si={binary_sensor:["on","off"],switch:["on","off"],light:["on","off"],fan:["on","off"],input_boolean:["on","off"],lock:["locked","unlocked","jammed","locking","unlocking","open"],cover:["open","closed","opening","closing"],person:["home","not_home"],device_tracker:["home","not_home"],alarm_control_panel:["armed_away","armed_home","armed_night","armed_vacation","disarmed","triggered","pending","arming"],vacuum:["cleaning","docked","returning","idle","paused","error"],media_player:["playing","paused","idle","standby","off","on"]},Ai={type:"Source type",url:"API URL",ws_params:"WebSocket command",response_path:"Response path",field_map:"Field map",media_url_template:"Media URL template",clip_url_template:"Clip URL template",poll_interval:"Poll interval",show_attributes:"Show attributes",image_template:"Image template",clip_template:"Clip template",events:"Events",actions:"Action buttons",default_icon:"Default icon",default_color:"Default color",default_severity:"Default severity",severity:"Severity",color:"Color",icon_map:"Icon map",color_map:"Color map",state_filter:"Only these states",state_map:"State labels",state_icon:"Icon per state",state_color:"Color per state",grouping:"Grouping override",window_seconds:"Window",min_group_size:"Minimum group size",group_by:"Group by",group_name:"Group name",entity_config:"Per-entity settings",title_template:"Title template",description_template:"Description template",show_description:"Show description"},Ci={logbook:{title:"Default: {name} {message}. Placeholders: {name}, {message}, {entity_name}, {entity_id}, {state}, {domain}, {context_name}, {title} (the default title)…",description:"Default: {message}. Same placeholders; {description} is the default."},history:{title:"Default: name + new state. Placeholders: {name}, {entity_name}, {new_label}, {old_label}, {new_state}, {old_state}, {attributes.<name>}, {title} (the default title)…",description:"Default: {old_label} → {new_label}. Same placeholders; {description} is the default."}},Ei=[{name:"title_template",selector:{text:{}}},{name:"description_template",selector:{text:{}}},{name:"show_description",selector:{boolean:{}}}],Di=e=>"history"===e||"logbook"===e,Ti={name:"Shown in the timeline and usable in filters.",url:"Internal HA API path (e.g. /api/…) or a full external URL.",ws_params:"Use a WebSocket command instead of the URL, e.g. {type: frigate/events/get, limit: 50}.",response_path:"Dot-path to the array in the response, e.g. data.items.",field_map:"Map response fields to: id, title, description, start, end, mediaUrl, category, label, entityId.",media_url_template:"Image URL built from response fields, e.g. /api/frigate/notifications/{id}/snapshot.jpg",clip_url_template:"Video URL played in the detail dialog, e.g. /api/frigate/notifications/{id}/clip.mp4 (on iPhone/iPad/Safari the matching HLS playlist is used automatically).",poll_interval:"Seconds between refreshes (default 30).",show_attributes:"Attribute values shown under each event.",image_template:"A URL/path, or a Jinja2 template. Variables: entity_id, state, old_state, timestamp, attributes, source_name. Use /local/ or proxy URLs — camera_proxy needs auth that images can't send.",clip_template:"Video URL/path, media-source:// id or Jinja2 template (same variables as the image template), played in the detail dialog. Plain URLs can use {field} placeholders.",events:"List of events: title, start, end, description, icon, color, severity, category.",actions:"Buttons under each event. Native actions use tap_action keys (action: perform-action, …); strings support {field} placeholders.",tap_action:'"Default action" opens the Chronicle detail dialog. Strings support {field} placeholders such as {id} or {entity_id}.',icon_map:"Category/keyword → icon, e.g. {person: mdi:walk}.",color_map:'Category/keyword → color, e.g. {person: "#FF9800"}.',state_filter:"Only log changes into these states. Empty = all changes.",state_map:'Raw state → label, e.g. {"on": Opened}.',state_icon:'Raw state → icon, e.g. {"on": mdi:door-open}.',state_color:'Raw state → color, e.g. {"on": "#4CAF50"}.',window_seconds:"Leave empty to inherit the card-level grouping.",entity_config:"Overrides for individual entities.",show_description:"Turn off to hide the description line for these events."};let zi=class extends le{constructor(){super(...arguments),this.index=0,this._computeHelper=e=>{const t=e.name??"",i=Ci[this.source.type];return i&&"title_template"===t?i.title:i&&"description_template"===t?i.description:Ti[t]}}get _entities(){const e=[...this.source.entities??[]];return this.source.entity&&!e.includes(this.source.entity)&&e.push(this.source.entity),e}_friendlyName(e){return this.hass?.states[e]?.attributes?.friendly_name||e}_attributeOptions(e){const t=new Set(["friendly_name","icon","entity_picture","supported_features","device_class","unit_of_measurement","attribution","restored"]),i=new Map;for(const o of e){const e=this.hass?.states[o];for(const o of Object.keys(e?.attributes??{}))t.has(o)||i.has(o)||i.set(o,e&&this.hass?.formatEntityAttributeName?.(e,o)||o)}return[...i].map(([e,t])=>({value:e,label:t}))}_stateFilterSelector(e){if(function(e,t,i){const o=/^(\d+)\.(\d+)/.exec(e?.config?.version??"");if(!o)return!1;const[r,n]=[Number(o[1]),Number(o[2])];return r>t||r===t&&n>=i}(this.hass,2025,9))return{state:{entity_id:e,multiple:!0}};const t=this.hass?.states[e],i=t?.attributes??{},o=[...new Set([...Si[e.split(".")[0]]??[],...Array.isArray(i.options)?i.options:[],...Array.isArray(i.hvac_modes)?i.hvac_modes:[],...t?[t.state]:[]])].map(e=>({value:e,label:t&&this.hass?.formatEntityState?.(t,e)||e}));return{select:{multiple:!0,custom_value:!0,mode:"dropdown",options:o}}}_entitySchema(e,t){const i=[{name:"name",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"icon",selector:{icon:{}}},{name:"color",selector:{color_rgb:{}}},{name:"severity",selector:ki}]}],o=[{name:"tap_action",selector:{ui_action:{}}},{name:"hold_action",selector:{ui_action:{}}}],r=[{name:"image_template",selector:{template:{}}},{name:"clip_template",selector:{template:{}}}];return"history"!==t?[...i,...Ei,...r,...o]:[...i,...Ei,{name:"state_filter",selector:this._stateFilterSelector(e)},{name:"show_attributes",selector:{select:{multiple:!0,custom_value:!0,mode:"dropdown",options:this._attributeOptions([e])}}},{name:"state_map",selector:{object:{}}},{name:"state_icon",selector:{object:{}}},{name:"state_color",selector:{object:{}}},...r,...o]}get _schema(){const e=this.source.type,t=this._entities,i={name:"",type:"grid",schema:[{name:"type",required:!0,selector:{select:{mode:"dropdown",options:$i}}},{name:"name",selector:{text:{}}}]},o={name:"poll_interval",selector:{number:{min:5,max:86400,mode:"box",unit_of_measurement:"s"}}};let r=[];switch(e){case"calendar":r=[{name:"entity",selector:{entity:{filter:{domain:"calendar"}}}}];break;case"rest":r=[{name:"url",selector:{text:{}}},{name:"ws_params",selector:{object:{}}},{name:"response_path",selector:{text:{}}},{name:"field_map",selector:{object:{}}},{name:"media_url_template",selector:{text:{}}},{name:"clip_url_template",selector:{text:{}}},o];break;case"history":r=[{name:"entities",selector:{entity:{multiple:!0}}},{name:"show_attributes",selector:{select:{multiple:!0,custom_value:!0,mode:"dropdown",options:this._attributeOptions(t)}}},{name:"image_template",selector:{template:{}}},{name:"clip_template",selector:{template:{}}}];break;case"logbook":r=[{name:"entities",selector:{entity:{multiple:!0}}},{name:"image_template",selector:{template:{}}},{name:"clip_template",selector:{template:{}}},o];break;case"static":r=[{name:"events",selector:{object:{}}}]}const n="history"!==e&&"logbook"!==e||!t.length?[]:[{type:"expandable",name:"entity_config",title:"Per-entity settings",icon:"mdi:tune",schema:t.map(t=>({type:"expandable",name:t,title:this._friendlyName(t),schema:this._entitySchema(t,e)}))}],a=Di(e)?[{type:"expandable",title:"Title & description",icon:"mdi:format-text",schema:Ei}]:[];return[i,...r,...a,...n,{type:"expandable",title:"Interactions",icon:"mdi:gesture-tap",schema:[{name:"tap_action",selector:{ui_action:{}}},{name:"hold_action",selector:{ui_action:{}}},{name:"actions",selector:{object:{}}}]},{type:"expandable",title:"Appearance",icon:"mdi:palette-outline",schema:[{name:"",type:"grid",schema:[{name:"default_icon",selector:{icon:{}}},{name:"default_color",selector:{color_rgb:{}}},{name:"default_severity",selector:ki}]},..."static"===e?[]:[{name:"icon_map",selector:{object:{}}},{name:"color_map",selector:{object:{}}}]]},{type:"expandable",name:"grouping",title:"Grouping override",icon:"mdi:group",schema:[{name:"",type:"grid",schema:[{name:"window_seconds",selector:{number:{min:0,max:86400,mode:"box",unit_of_measurement:"s"}}},{name:"min_group_size",selector:{number:{min:2,max:100,mode:"box"}}}]},{name:"group_by",selector:{select:{mode:"dropdown",options:mi}}},{name:"group_name",selector:{text:{}}}]}]}get _data(){const e={...this.source};if(Di(this.source.type)){e.entities=this._entities,delete e.entity;const t=this.source.show_description??!0;e.show_description=t;const i=this.source.entity_config??{};e.entity_config=Object.fromEntries(this._entities.map(e=>[e,xi({...i[e],show_description:i[e]?.show_description??t},["color"],vi)]))}return xi(e,["default_color"],vi)}_hint(){const e=this._entities;return 1===e.length?this._friendlyName(e[0]):e.length>1?`${e.length} entities`:this.source.url?this.source.url:this.source.ws_params?.type?String(this.source.ws_params.type):this.source.events?.length?`${this.source.events.length} events`:""}render(){if(!this.source||!this.hass)return Y;const e=$i.find(e=>e.value===this.source.type)?.label??this.source.type,t=this._hint();return B`
      <ha-expansion-panel
        outlined
        .header=${this.source.name||e}
        .secondary=${t?`${e} · ${t}`:e}
      >
        <div class="body">
          <ha-form
            .hass=${this.hass}
            .data=${this._data}
            .schema=${this._schema}
            .computeLabel=${wi(this.hass,Ai)}
            .computeHelper=${this._computeHelper}
            @value-changed=${this._valueChanged}
          ></ha-form>
          <button class="remove" @click=${this._remove}>
            <ha-icon icon="mdi:delete-outline"></ha-icon>Remove source
          </button>
        </div>
      </ha-expansion-panel>
    `}_valueChanged(e){e.stopPropagation();const t=xi({...e.detail.value},["default_color"],bi),i=this.source.show_description??!0;void 0===this.source.show_description&&t.show_description===i&&delete t.show_description;const o=this.source.entity_config??{};let r=Object.fromEntries(Object.entries(t.entity_config??{}).map(([e,t])=>{const r={...t};return void 0===o[e]?.show_description&&r.show_description===i&&delete r.show_description,[e,r]}));if(Di(t.type)){delete t.entity;const e=new Set(t.entities??[]);r=Object.fromEntries(Object.entries(r).filter(([t])=>e.has(t)).map(([e,t])=>[e,_i(xi(t,["color"],bi),void 0,void 0)]))}t.entity_config=r;const n=_i(t,void 0,void 0);this.dispatchEvent(new CustomEvent("source-changed",{bubbles:!0,composed:!0,detail:{index:this.index,source:n}}))}_remove(){this.dispatchEvent(new CustomEvent("source-removed",{bubbles:!0,composed:!0,detail:{index:this.index}}))}};zi.styles=a`
    :host { display: block; margin-bottom: 8px; }
    .body { padding: 0 0 8px; }
    .remove {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      margin-top: 12px;
      padding: 6px 12px;
      border: 1px solid var(--divider-color, rgba(127,127,127,0.3));
      border-radius: 18px;
      background: transparent;
      color: var(--error-color, #db4437);
      font: inherit;
      font-size: 13px;
      cursor: pointer;
    }
    .remove:hover, .remove:focus-visible { border-color: var(--error-color, #db4437); outline: none; }
    .remove ha-icon { --mdc-icon-size: 16px; }
  `,e([me({attribute:!1})],zi.prototype,"hass",void 0),e([me({attribute:!1})],zi.prototype,"source",void 0),e([me({type:Number})],zi.prototype,"index",void 0),zi=e([he("chronicle-source-editor")],zi);const Ii=[{value:"critical",label:"Critical"},{value:"warning",label:"Warning"},{value:"info",label:"Info"},{value:"debug",label:"Debug"}],Oi=["person","vehicle","animal","pet","security","motion","door","lock","camera","light","climate","automation","system"].map(e=>({value:e,label:e.charAt(0).toUpperCase()+e.slice(1)})),Mi=[{type:"history",label:"Entity state",icon:"mdi:history"},{type:"logbook",label:"Logbook",icon:"mdi:format-list-bulleted"},{type:"calendar",label:"Calendar",icon:"mdi:calendar"},{type:"rest",label:"REST / WebSocket",icon:"mdi:api"},{type:"static",label:"Static events",icon:"mdi:playlist-edit"}],Pi=["critical","warning","info","debug"],Ui={..._e,appearance:{..._e.appearance,severity_colors:xi(_e.appearance.severity_colors,Pi,e=>bi(vi(e)))}},Li={layout:"Layout",time_format:"Time format",max_events:"Max events",days_back:"Days back",days_forward:"Days forward",show_header:"Show header",show_layout_toggle:"Show layout toggle",show_date_picker:"Show date picker",date_format:"Date format",sticky_date_headers:"Sticky date headers",filters:"Filters",search:"Search",categories:"Categories",severities:"Severities",sources:"Sources",entities:"Entities",exclude_search:"Exclude search",exclude_categories:"Exclude categories",exclude_severities:"Exclude severities",exclude_sources:"Exclude sources",exclude_entities:"Exclude entities",grouping:"Grouping",enabled:"Group similar events",window_seconds:"Window",min_group_size:"Minimum group size",group_by:"Group by",group_name:"Group name",appearance:"Appearance",card_height:"Card height",compact:"Compact mode",show_description:"Show description",title_lines:"Title lines",description_lines:"Description lines",show_images:"Show images",show_icons:"Show icons",show_severity_badge:"Show severity badge",show_category:"Show category tags",animate_new_events:"Animate new events",severity_colors:"Severity colors",critical:"Critical",warning:"Warning",info:"Info",debug:"Debug"},ji={time_format:"Leave empty to follow your Home Assistant profile.",days_back:"Whole numbers are calendar days (0 = today since midnight); decimals are a rolling window.",days_forward:"Show upcoming calendar/static events. 0 = none.",search:"Only show events containing this text.",exclude_search:"Hide events containing this text.",show_date_picker:"Day picker in the header to browse events from a specific day.",sticky_date_headers:"Pin the day header while scrolling and show the current day in the card header.",group_name:"Custom summary. Placeholders: {count}, {label}, {source}, {entity}.",card_height:'A fixed height (e.g. 400px), "fill" for Panel layout, or "auto" to grow with content. In a sections view, resizing the card height also fills.',compact:'Single-line events. Descriptions are hidden unless "Show description" is enabled explicitly.',show_description:'Secondary line such as "Off → On".',title_lines:'Lines a long title can wrap onto before it is cut off with "…". 1 = single line, 0 = no limit.',description_lines:"Same for the description line."};let Ni=class extends le{constructor(){super(...arguments),this._computeHelper=e=>ji[e.name??""]}connectedCallback(){super.connectedCallback(),(customElements.get("ha-form")&&customElements.get("hui-action-editor")?Promise.resolve():(pi??=(async()=>{try{const e=await(window.loadCardHelpers?.());for(const t of["tile","button"]){e?.createCardElement({type:t,entity:"sun.sun"});const i=`hui-${t}-card`;await Promise.race([customElements.whenDefined(i),new Promise(e=>setTimeout(e,2e3))]);const o=customElements.get(i);await(o?.getConfigElement?.())}}catch{}await Promise.all(["ha-form","ha-expansion-panel"].map(e=>Promise.race([customElements.whenDefined(e),new Promise(e=>setTimeout(e,5e3))])))})(),pi)).then(()=>this.requestUpdate())}setConfig(e){this._config=e}get _generalSchema(){return[{name:"title",selector:{text:{}}},{name:"",type:"grid",schema:[{name:"layout",selector:{select:{mode:"dropdown",options:[{value:"vertical",label:"Vertical"},{value:"horizontal",label:"Horizontal"}]}}},{name:"time_format",selector:{select:{mode:"dropdown",options:[{value:"24h",label:"24 hour"},{value:"12h",label:"12 hour"}]}}},{name:"days_back",selector:{number:{min:0,max:365,step:"any",mode:"box",unit_of_measurement:"days"}}},{name:"days_forward",selector:{number:{min:0,max:365,step:"any",mode:"box",unit_of_measurement:"days"}}},{name:"max_events",selector:{number:{min:1,max:1e3,mode:"box"}}}]},{name:"",type:"grid",schema:[{name:"show_header",selector:{boolean:{}}},{name:"show_layout_toggle",selector:{boolean:{}}},{name:"show_date_picker",selector:{boolean:{}}}]},...this._config?.show_date_picker?[{name:"date_format",selector:{select:{mode:"dropdown",options:[{value:"profile",label:"From user profile"},{value:"DMY",label:"Day/Month/Year (31/12/2026)"},{value:"MDY",label:"Month/Day/Year (12/31/2026)"},{value:"YMD",label:"Year-Month-Day (2026-12-31)"}]}}}]:[]]}get _optionsSchema(){const e=(this._config?.sources??[]).filter(e=>e.name).map(e=>({value:e.name,label:e.name})),t=(e,t=!0)=>({select:{multiple:!0,custom_value:t,mode:"dropdown",options:e}});return[{type:"expandable",name:"filters",title:"Filters",icon:"mdi:filter-outline",schema:[{name:"search",selector:{text:{}}},{name:"categories",selector:t(Oi)},{name:"severities",selector:t(Ii,!1)},{name:"sources",selector:t(e)},{name:"entities",selector:{entity:{multiple:!0}}},{type:"expandable",title:"Exclusions",icon:"mdi:filter-remove-outline",schema:[{name:"exclude_search",selector:{text:{}}},{name:"exclude_categories",selector:t(Oi)},{name:"exclude_severities",selector:t(Ii,!1)},{name:"exclude_sources",selector:t(e)},{name:"exclude_entities",selector:{entity:{multiple:!0}}}]}]},{type:"expandable",name:"grouping",title:"Grouping",icon:"mdi:group",schema:[{name:"enabled",selector:{boolean:{}}},{name:"",type:"grid",schema:[{name:"window_seconds",selector:{number:{min:0,max:86400,mode:"box",unit_of_measurement:"s"}}},{name:"min_group_size",selector:{number:{min:2,max:100,mode:"box"}}}]},{name:"group_by",selector:{select:{mode:"dropdown",options:mi}}},{name:"group_name",selector:{text:{}}}]},{type:"expandable",name:"appearance",title:"Appearance",icon:"mdi:palette-outline",schema:[{name:"card_height",selector:{select:{mode:"dropdown",custom_value:!0,options:[{value:"400px",label:"400px"},{value:"auto",label:"Auto (grow with content)"},{value:"fill",label:"Fill available space"}]}}},{name:"",type:"grid",schema:[{name:"title_lines",selector:{number:{min:0,max:10,mode:"box"}}},{name:"description_lines",selector:{number:{min:0,max:10,mode:"box"}}}]},{name:"",type:"grid",schema:[{name:"compact",selector:{boolean:{}}},{name:"sticky_date_headers",selector:{boolean:{}}},{name:"show_description",selector:{boolean:{}}},{name:"show_images",selector:{boolean:{}}},{name:"show_icons",selector:{boolean:{}}},{name:"show_severity_badge",selector:{boolean:{}}},{name:"show_category",selector:{boolean:{}}},{name:"animate_new_events",selector:{boolean:{}}}]},{type:"expandable",name:"severity_colors",title:"Severity colors",schema:[{name:"",type:"grid",schema:Pi.map(e=>({name:e,selector:{color_rgb:{}}}))}]}]}]}get _displayData(){const e=this._config,t={..._e.appearance,...e.appearance};return{..._e,...e,filters:{..._e.filters,...e.filters},grouping:{..._e.grouping,...e.grouping},appearance:{...t,show_description:t.show_description??!t.compact,severity_colors:xi({..._e.appearance.severity_colors,...t.severity_colors},Pi,vi)}}}render(){if(!this._config||!this.hass)return Y;const e=this._displayData,t=wi(this.hass,Li),i=this._config.sources??[];return B`
      <ha-form
        .hass=${this.hass}
        .data=${e}
        .schema=${this._generalSchema}
        .computeLabel=${t}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._formChanged}
      ></ha-form>

      <div class="sources">
        <div class="sources-header">Sources <span class="count">${i.length}</span></div>
        ${0===i.length?B`<p class="empty">Add a source to start building the timeline.</p>`:Y}
        ${i.map((e,t)=>B`
          <chronicle-source-editor
            .hass=${this.hass}
            .source=${e}
            .index=${t}
            @source-changed=${this._sourceChanged}
            @source-removed=${this._sourceRemoved}
          ></chronicle-source-editor>
        `)}
        <div class="add-row">
          ${Mi.map(e=>B`
            <button class="add-btn" @click=${()=>this._addSource(e.type)}>
              <ha-icon .icon=${e.icon}></ha-icon>${e.label}
            </button>
          `)}
        </div>
      </div>

      <ha-form
        .hass=${this.hass}
        .data=${e}
        .schema=${this._optionsSchema}
        .computeLabel=${t}
        .computeHelper=${this._computeHelper}
        @value-changed=${this._formChanged}
      ></ha-form>
    `}_formChanged(e){e.stopPropagation();const t={...e.detail.value},i={...t.appearance};i.severity_colors&&(i.severity_colors=xi(i.severity_colors,Pi,bi));const o=this._config?.appearance;void 0===o?.show_description&&i.show_description===!o?.compact&&delete i.show_description,t.appearance=i,this._commit(t)}_sourceChanged(e){e.stopPropagation();const{index:t,source:i}=e.detail,o=[...this._config.sources??[]];o[t]=i,this._commit({...this._config,sources:o})}_sourceRemoved(e){e.stopPropagation();const t=[...this._config.sources??[]];t.splice(e.detail.index,1),this._commit({...this._config,sources:t})}_addSource(e){const t=Mi.find(t=>t.type===e)?.label??e,i=[...this._config.sources??[],{type:e,name:t}];this._commit({...this._config,sources:i})}_commit(e){const t=this._config,{type:i,sources:o,...r}=e,n=_i(r,t,Ui),a=[...Object.keys(t).filter(e=>e in n),...Object.keys(n).filter(e=>!(e in t))],s={type:i??t.type,...Object.fromEntries(a.map(e=>[e,n[e]])),sources:o??t.sources??[]};this._config=s,this.dispatchEvent(new CustomEvent("config-changed",{bubbles:!0,composed:!0,detail:{config:s}}))}};Ni.styles=a`
    :host { display: block; }
    .sources {
      margin: 16px 0;
    }
    .sources-header {
      display: flex;
      align-items: baseline;
      gap: 8px;
      margin: 0 0 8px;
      font-size: 15px;
      font-weight: 500;
      color: var(--primary-text-color);
    }
    .sources-header .count {
      font-size: 12px;
      color: var(--secondary-text-color);
    }
    .empty {
      font-size: 13px;
      color: var(--secondary-text-color);
      margin: 0 0 8px;
    }
    .add-row {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-top: 8px;
    }
    .add-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      border: 1px dashed var(--divider-color, rgba(127,127,127,0.3));
      border-radius: 18px;
      background: transparent;
      color: var(--primary-color);
      font: inherit;
      font-size: 13px;
      cursor: pointer;
    }
    .add-btn:hover, .add-btn:focus-visible {
      border-color: var(--primary-color);
      outline: none;
    }
    .add-btn ha-icon { --mdc-icon-size: 16px; }
  `,e([me({attribute:!1})],Ni.prototype,"hass",void 0),e([ge()],Ni.prototype,"_config",void 0),Ni=e([he(Se)],Ni);const Fi=/^(binary_sensor|lock|cover|person|device_tracker|alarm_control_panel|climate|vacuum)\./,Ri=window;Ri.customCards=Ri.customCards||[],Ri.customCards.push({type:ke,name:"Chronicle Card (Fork)",description:"A universal, extensible timeline card for Home Assistant (fork with history clip_url_template & relative URL fix)",preview:!0,documentationURL:"https://github.com/claudemangen/chronicle-card-fork",getEntitySuggestion:(e,t)=>{const i=e.states[t]?.attributes?.friendly_name||t;return t.startsWith("calendar.")?{config:{type:`custom:${ke}`,title:i,days_forward:7,sources:[{type:"calendar",entity:t}]}}:Fi.test(t)?{config:{type:`custom:${ke}`,title:i,sources:[{type:"history",entities:[t]}]}}:null}}),console.info(`%c CHRONICLE-CARD-FORK %c v${$e} `,"color: #fff; background: #9C27B0; font-weight: 700; padding: 2px 6px; border-radius: 4px 0 0 4px;","color: #9C27B0; background: #f3e5f5; font-weight: 500; padding: 2px 6px; border-radius: 0 4px 4px 0;");
