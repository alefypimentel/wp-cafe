!function(a,b){"object"==typeof exports&&"undefined"!=typeof module?b(exports):"function"==typeof define&&define.amd?define(["exports"],b):b(a.riot=a.riot||{})}(this,function(a){"use strict";function b(a){return Ha.test(a)}function c(a){return Ka.test(a)}function d(a){return typeof a===Ba||!1}function e(a){return a&&typeof a===za}function f(a){return typeof a===Aa}function g(a){return typeof a===ya}function h(a){return f(a)||null===a||""===a}function i(a){return Array.isArray(a)||a instanceof Array}function j(a,b){var c=Object.getOwnPropertyDescriptor(a,b);return f(a[b])||c&&c.writable}function k(a){return Ga.test(a)}function l(a,b){return(b||document).querySelectorAll(a)}function m(a,b){return(b||document).querySelector(a)}function n(){return document.createDocumentFragment()}function o(){return document.createTextNode("")}function p(a,b){return b?document.createElementNS("http://www.w3.org/2000/svg","svg"):document.createElement(a)}function q(a){if(a.outerHTML)return a.outerHTML;var b=p("div");return b.appendChild(a.cloneNode(!0)),b.innerHTML}function r(a,b){if(f(a.innerHTML)){var c=(new DOMParser).parseFromString(b,"application/xml"),d=a.ownerDocument.importNode(c.documentElement,!0);a.appendChild(d)}else a.innerHTML=b}function s(a,b){a.removeAttribute(b)}function t(a,b){return a.getAttribute(b)}function u(a,b,c){var d=Da.exec(b);d&&d[1]?a.setAttributeNS(Ca,d[1],c):a.setAttribute(b,c)}function v(a,b,c){a.insertBefore(b,c.parentNode&&c)}function w(a,b){if(a)for(var c;c=Ia.exec(a);)b(c[1].toLowerCase(),c[2]||c[3]||c[4])}function x(a,b,c){if(a){var d,e=b(a,c);if(e===!1)return;for(a=a.firstChild;a;)d=a.nextSibling,x(a,b,e),a=d}}function y(a,b){for(var c,d=a?a.length:0,e=0;e<d;++e)c=a[e],b(c,e)===!1&&e--;return a}function z(a,b){return~a.indexOf(b)}function A(a){return a.replace(/-(\w)/g,function(a,b){return b.toUpperCase()})}function B(a,b){return a.slice(0,b.length)===b}function C(a,b,c,d){return Object.defineProperty(a,b,D({value:c,enumerable:!1,writable:!1,configurable:!0},d)),a}function D(a){for(var b,c=arguments,d=1;d<c.length;++d)if(b=c[d])for(var e in b)j(a,e)&&(a[e]=b[e]);return a}function E(a,b,c){var d=this._parent,e=this._item;if(!e)for(;d&&!e;)e=d._item,d=d._parent;if(j(c,"currentTarget")&&(c.currentTarget=a),j(c,"target")&&(c.target=c.srcElement),j(c,"which")&&(c.which=c.charCode||c.keyCode),c.item=e,b.call(this,c),!c.preventUpdate){var f=ga(this);f.isMounted&&f.update()}}function F(a,b,c,d){var e,f=E.bind(d,c,b);if(!c.addEventListener)return void(c[a]=f);c[a]=null,e=a.replace(Wa,""),c._riotEvents||(c._riotEvents={}),c._riotEvents[a]&&c.removeEventListener(e,c._riotEvents[a]),c._riotEvents[a]=f,c.addEventListener(e,f,!1)}function G(a,b){var c,d=Ta(a.value,b);if(a.tag&&a.tagName===d)return void a.tag.update();if(a.tag){var e=a.value,f=a.tag._parent.tags;u(a.tag.root,xa,d),la(f,e,a.tag)}a.impl=ua[d],c={root:a.dom,parent:b,hasImpl:!0,tagName:d},a.tag=fa(a.impl,c,a.dom.innerHTML,b),a.tagName=d,a.tag.mount(),a.tag.update(),b.on("unmount",function(){var b=a.tag.opts.dataIs,c=a.tag.parent.tags,d=a.tag._parent.tags;la(c,b,a.tag),la(d,b,a.tag),a.tag.unmount()})}function H(a){var b,c=a.dom,e=a.attr,g=/^(show|hide)$/.test(e),h=g||Ta(a.expr,this),i="riot-value"===e,j=a.root&&"VIRTUAL"===a.root.tagName,k=c&&(a.parent||c.parentNode);if(a.bool?h=!!h&&e:(f(h)||null===h)&&(h=""),a._riot_id){if(a.isMounted)a.update();else if(a.mount(),j){var l=document.createDocumentFragment();oa.call(a,l),a.root.parentElement.replaceChild(l,a.root)}}else{if(b=a.value,a.value=h,a.update)return void a.update();if(a.isRtag&&h)return G(a,this);if((b!==h||g)&&(!i||c.value!==h)){if(!e)return h+="",void(k&&(a.parent=k,"TEXTAREA"===k.tagName?(k.value=h,La||(c.nodeValue=h)):c.nodeValue=h));if(a.isAttrRemoved&&h||(s(c,e),a.isAttrRemoved=!0),d(h))F(e,h,c,this);else if(g)h=Ta(a.expr,D({},this,this.parent)),"hide"===e&&(h=!h),c.style.display=h?"":"none";else if(i)c.value=h;else if(B(e,wa)&&e!==xa)e=e.slice(wa.length),Ja[e]&&(e=Ja[e]),null!=h&&u(c,e,h);else{if("selected"===e&&k&&/^(SELECT|OPTGROUP)$/.test(k.tagName)&&null!=h&&(k.value=c.value),a.bool&&(c[e]=h,!h))return;(0===h||h&&typeof h!==za)&&u(c,e,h)}}}}function I(a){y(a,H.bind(this))}function J(a,b,c,d){var e=d?Object.create(d):{};return e[a.key]=b,a.pos&&(e[a.pos]=c),e}function K(a,b,c,d){for(var e,f=b.length,g=a.length;f>g;)e=b[--f],b.splice(f,1),e.unmount(),la(d.tags,c,e,!0)}function L(a){var b=this;y(Object.keys(this.tags),function(c){var d=b.tags[c];i(d)?y(d,function(b){ea.apply(b,[c,a])}):ea.apply(d,[c,a])})}function M(a,b,c){c?pa.apply(this,[a,b]):v(a,this.root,b.root)}function N(a,b,c){c?oa.apply(this,[a,b]):v(a,this.root,b.root)}function O(a,b){b?oa.call(this,a):a.appendChild(this.root)}function P(a,b,c){s(a,"each");var d,e=typeof t(a,"no-reorder")!==ya||s(a,"no-reorder"),f=ia(a),g=ua[f]||{tmpl:q(a)},h=Fa.test(f),j=a.parentNode,k=o(),l=ca(a),m=t(a,"if"),p=[],r=[],u=!ua[f],v="VIRTUAL"===a.tagName;return c=Ta.loopKeys(c),c.isLoop=!0,m&&s(a,"if"),j.insertBefore(k,a),j.removeChild(a),c.update=function(){var q,s,t,w=Ta(c.val,b);j=k.parentNode,q?(t=o(""),q.insertBefore(t,j),q.removeChild(j)):s=n(),i(w)?d=!1:(d=w||!1,w=d?Object.keys(w).map(function(a){return J(c,w[a],a)}):[]),m&&(w=w.filter(function(a,d){return c.key?!!Ta(m,J(c,a,d,b)):!!Ta(m,b)||!!Ta(m,a)})),y(w,function(i,k){var m=e&&typeof i===za&&!d,n=r.indexOf(i),o=~n&&m?n:k,q=p[o];if(i=!d&&c.key?J(c,i,k):i,!m&&!q||m&&!~n){var t=k===p.length;q=new ba(g,{parent:b,isLoop:!0,isAnonymous:u,root:h?j:a.cloneNode(),item:i},a.innerHTML),q.mount(),t?O.apply(q,[s||j,v]):N.apply(q,[j,p[k],v]),t||r.splice(k,0,i),p.splice(k,0,q),l&&ka(b.tags,f,q,!0),o=k}else q.update(i);o!==k&&m&&(z(w,r[k])&&M.apply(q,[j,p[k],v]),c.pos&&(q[c.pos]=k),p.splice(k,0,p.splice(o,1)[0]),r.splice(k,0,r.splice(o,1)[0]),!l&&q.tags&&L.call(q,k)),q._item=i,C(q,"_parent",b)}),K(w,p,f,b),r=w.slice(),s?j.insertBefore(s,k):(q.insertBefore(j,t),q.removeChild(t))},c.unmount=function(){y(p,function(a){a.unmount()})},c}function Q(a,b,c){var d=this,e={parent:{children:b}};return x(a,function(b,e){var f,g,h,i=b.nodeType,j=e.parent;if(!c&&b===a)return{parent:j};if(3===i&&"STYLE"!==b.parentNode.tagName&&Ta.hasExpr(b.nodeValue)&&j.children.push({dom:b,expr:b.nodeValue}),1!==i)return e;if(f=t(b,"each"))return j.children.push(P(b,d,f)),!1;if(f=t(b,"if"))return j.children.push(Object.create(Xa).init(b,d,f)),!1;if((g=t(b,xa))&&Ta.hasExpr(g))return j.children.push({isRtag:!0,expr:g,dom:b}),!1;if((h=ca(b))&&(b!==a||c)){var k={root:b,parent:d,hasImpl:!0};return j.children.push(fa(h,k,b.innerHTML,d)),!1}return R.apply(d,[b,b.attributes,function(a,b){b&&j.children.push(b)}]),{parent:j}},e),{tree:e,root:a}}function R(a,b,d){var e=this;y(b,function(b){var f,g=b.name,h=c(g);~["ref","data-ref"].indexOf(g)?f=Object.create(Ya).init(a,g,b.value,e):Ta.hasExpr(b.value)&&(f={dom:a,expr:b.value,attr:b.name,bool:h}),d(b,f)})}function S(a,b,c){var d="o"===c[0],e=d?"select>":"table>";if(a.innerHTML="<"+e+b.trim()+"</"+e,e=a.firstChild,d)e.selectedIndex=-1;else{var f=bb[c];f&&1===e.childElementCount&&(e=m(f,e))}return e}function T(a,b){if(!Za.test(a))return a;var c={};return b=b&&b.replace(_a,function(a,b,d){return c[b]=c[b]||d,""}).trim(),a.replace(ab,function(a,b,d){return c[b]||d||""}).replace($a,function(a,c){return b||c||""})}function U(a,c,d){var e=a&&a.match(/^\s*<([-\w]+)/),f=e&&e[1].toLowerCase(),g=p(db,d&&b(f));return a=T(a,c),cb.test(f)?g=S(g,a,f):r(g,a),g.stub=!0,g}function V(a,b){var c=this,d=c.name,e=c.tmpl,f=c.css,g=c.attrs,h=c.onCreate;return ua[d]||(W(d,e,f,g,h),ua[d].class=this.constructor),na(a,d,b,this),f&&Ra.inject(),this}function W(a,b,c,e,f){return d(e)&&(f=e,/^[\w\-]+\s?=/.test(c)?(e=c,c=""):e=""),c&&(d(c)?f=c:Ra.add(c)),a=a.toLowerCase(),ua[a]={name:a,tmpl:b,attrs:e,fn:f},a}function X(a,b,c,d,e){c&&Ra.add(c,a);var f=!!ua[a];return ua[a]={name:a,tmpl:b,attrs:d,fn:e},f&&kb.hotReloader&&kb.hotReloader(a),a}function Y(a,b,c){function d(a){if(a.tagName){var e=t(a,xa);b&&e!==b&&(e=b,u(a,xa,b));var g=na(a,e||a.tagName.toLowerCase(),c);g&&f.push(g)}else a.length&&y(a,d)}var f=[];Ra.inject(),e(b)&&(c=b,b=0);var h,i;if(g(a)?(a="*"===a?i=qa():a+qa(a.split(/, */)),h=a?l(a):[]):h=a,"*"===b){if(b=i||qa(),h.tagName)h=l(b,h);else{var j=[];y(h,function(a){return j.push(l(b,a))}),h=j}b=0}return d(h),f}function Z(a,b,c){if(e(a))return void Z("__unnamed_"+gb++,a,!0);var g=c?fb:eb;if(!b){if(f(g[a]))throw new Error("Unregistered mixin: "+a);return g[a]}g[a]=d(b)?D(b.prototype,g[a]||{})&&b:D(g[a]||{},b)}function $(){return y(ta,function(a){return a.update()})}function _(a){delete ua[a]}function aa(a,b,c,d,e){if(!a||!c){var f=!c&&a?this:b||this;y(e,function(a){a.expr&&I.call(f,[a.expr]),d[A(a.name)]=a.expr?a.expr.value:a.value})}}function ba(a,b,c){var e,f=D({},b.opts),h=b.parent,i=b.isLoop,j=b.isAnonymous,k=ja(b.item),l=[],m=[],n=[],o=b.root,p=b.tagName||ia(o),q="virtual"===p,r=[];Va(this),a.name&&o._tag&&o._tag.unmount(!0),this.isMounted=!1,o.isLoop=i,C(this,"_internal",{isAnonymous:j,instAttrs:l,innerHTML:c,virts:[],tail:null,head:null}),C(this,"_riot_id",++hb),D(this,{parent:h,root:o,opts:f},k),C(this,"tags",{}),C(this,"refs",{}),e=U(a.tmpl,c,i),C(this,"update",function(a){return d(this.shouldUpdate)&&!this.shouldUpdate(a)?this:(a=ja(a),i&&j&&da.apply(this,[this.parent,r]),D(this,a),aa.apply(this,[i,h,j,f,l]),this.isMounted&&this.trigger("update",a),I.call(this,n),this.isMounted&&this.trigger("updated"),this)}.bind(this)),C(this,"mixin",function(){var a=this;return y(arguments,function(b){var c,e,f=[];b=g(b)?Z(b):b,c=d(b)?new b:b;var h=Object.getPrototypeOf(c);do{f=f.concat(Object.getOwnPropertyNames(e||c))}while(e=Object.getPrototypeOf(e||c));y(f,function(b){if("init"!==b){var e=Object.getOwnPropertyDescriptor(c,b)||Object.getOwnPropertyDescriptor(h,b),f=e&&(e.get||e.set);!a.hasOwnProperty(b)&&f?Object.defineProperty(a,b,e):a[b]=d(c[b])?c[b].bind(a):c[b]}}),c.init&&c.init.bind(a)()}),this}.bind(this)),C(this,"mount",function(){var b=this;o._tag=this,R.apply(h,[o,o.attributes,function(a,c){!j&&Ya.isPrototypeOf(c)&&(c.tag=b),a.expr=c,l.push(a)}]),m=[],w(a.attrs,function(a,b){m.push({name:a,value:b})}),R.apply(this,[o,m,function(a,b){b?n.push(b):u(o,a.name,a.value)}]),this._parent&&j&&da.apply(this,[this._parent,r]),aa.apply(this,[i,h,j,f,l]);var c=Z(va);if(c)for(var d in c)c.hasOwnProperty(d)&&b.mixin(c[d]);if(a.fn&&a.fn.call(this,f),this.trigger("before-mount"),Q.apply(this,[e,n,!1]),this.update(k),i&&j)this.root=o=e.firstChild;else{for(;e.firstChild;)o.appendChild(e.firstChild);o.stub&&(o=h.root)}return C(this,"root",o),this.isMounted=!0,!this.parent||this.parent.isMounted?this.trigger("mount"):this.parent.one("mount",function(){b.trigger("mount")}),this}.bind(this)),C(this,"unmount",function(b){var c,d=this,e=this.root,f=e.parentNode,g=ta.indexOf(this);if(this.trigger("before-unmount"),w(a.attrs,function(a){B(a,wa)&&(a=a.slice(wa.length)),s(o,a)}),~g&&ta.splice(g,1),f){if(h)c=ga(h),q?Object.keys(this.tags).forEach(function(a){la(c.tags,a,d.tags[a])}):la(c.tags,p,this);else for(;e.firstChild;)e.removeChild(e.firstChild);b?s(f,xa):f.removeChild(e)}return this._internal.virts&&y(this._internal.virts,function(a){a.parentNode&&a.parentNode.removeChild(a)}),ha(n),y(l,function(a){return a.expr&&a.expr.unmount&&a.expr.unmount()}),this.trigger("unmount"),this.off("*"),this.isMounted=!1,delete this.root._tag,this}.bind(this))}function ca(a){return a.tagName&&ua[t(a,xa)||t(a,xa)||a.tagName.toLowerCase()]}function da(a,b){var c=this;y(Object.keys(a),function(d){var e=!k(d)&&z(b,d);(f(c[d])||e)&&(e||b.push(d),c[d]=a[d])})}function ea(a,b){var c,d=this.parent;d&&(c=d.tags[a],i(c)?c.splice(b,0,c.splice(c.indexOf(this),1)[0]):ka(d.tags,a,this))}function fa(a,b,c,d){var e=new ba(a,b,c),f=b.tagName||ia(b.root,!0),g=ga(d);return e.parent=g,e._parent=d,ka(g.tags,f,e),g!==d&&ka(d.tags,f,e),b.root.innerHTML="",e}function ga(a){for(var b=a;b._internal.isAnonymous&&b.parent;)b=b.parent;return b}function ha(a){y(a,function(a){a instanceof ba?a.unmount(!0):a.unmount&&a.unmount()})}function ia(a,b){var c=ca(a),d=!b&&t(a,xa);return d&&!Ta.hasExpr(d)?d:c?c.name:a.tagName.toLowerCase()}function ja(a){if(!(a instanceof ba||a&&typeof a.trigger===Ba))return a;var b={};for(var c in a)Ga.test(c)||(b[c]=a[c]);return b}function ka(a,b,c,d){var e=a[b],f=i(e);e&&e===c||(!e&&d?a[b]=[c]:e?(!f||f&&!z(e,c))&&(f?e.push(c):a[b]=[e,c]):a[b]=c)}function la(a,b,c,d){i(a[b])?(y(a[b],function(d,e){d===c&&a[b].splice(e,1)}),a[b].length?1!==a[b].length||d||(a[b]=a[b][0]):delete a[b]):delete a[b]}function ma(a){for(;a;){if(a.inStub)return!0;a=a.parentNode}return!1}function na(a,b,c,d){var e=ua[b],f=ua[b].class,g=d||(f?Object.create(f.prototype):{}),h=a._innerHTML=a._innerHTML||a.innerHTML;a.innerHTML="";var i={root:a,opts:c};return c&&c.parent&&(i.parent=c.parent),e&&a&&ba.apply(g,[e,i,h]),g&&g.mount&&(g.mount(!0),z(ta,g)||ta.push(g)),g}function oa(a,b){var c,d,e=this,f=o(),g=o(),h=n();for(this._internal.head=this.root.insertBefore(f,this.root.firstChild),this._internal.tail=this.root.appendChild(g),d=this._internal.head;d;)c=d.nextSibling,h.appendChild(d),e._internal.virts.push(d),d=c;b?a.insertBefore(h,b._internal.head):a.appendChild(h)}function pa(a,b){for(var c,d=this,e=this._internal.head,f=n();e;)if(c=e.nextSibling,f.appendChild(e),(e=c)===d._internal.tail){f.appendChild(e),a.insertBefore(f,b._internal.head);break}}function qa(a){if(!a){var b=Object.keys(ua);return b+qa(b)}return a.filter(function(a){return!/[^-\w]/.test(a)}).reduce(function(a,b){return a+",["+xa+'="'+b.trim().toLowerCase()+'"]'},"")}var ra,sa,ta=[],ua={},va="__global_mixin",wa="riot-",xa="data-is",ya="string",za="object",Aa="undefined",Ba="function",Ca="http://www.w3.org/1999/xlink",Da=/^xlink:(\w+)/,Ea=typeof window===Aa?void 0:window,Fa=/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/,Ga=/^(?:_(?:item|id|parent)|update|root|(?:un)?mount|mixin|is(?:Mounted|Loop)|tags|refs|parent|opts|trigger|o(?:n|ff|ne))$/,Ha=/^(altGlyph|animate(?:Color)?|circle|clipPath|defs|ellipse|fe(?:Blend|ColorMatrix|ComponentTransfer|Composite|ConvolveMatrix|DiffuseLighting|DisplacementMap|Flood|GaussianBlur|Image|Merge|Morphology|Offset|SpecularLighting|Tile|Turbulence)|filter|font|foreignObject|g(?:lyph)?(?:Ref)?|image|line(?:arGradient)?|ma(?:rker|sk)|missing-glyph|path|pattern|poly(?:gon|line)|radialGradient|rect|stop|svg|switch|symbol|text(?:Path)?|tref|tspan|use)$/,Ia=/([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g,Ja={viewbox:"viewBox"},Ka=/^(?:disabled|checked|readonly|required|allowfullscreen|auto(?:focus|play)|compact|controls|default|formnovalidate|hidden|ismap|itemscope|loop|multiple|muted|no(?:resize|shade|validate|wrap)?|open|reversed|seamless|selected|sortable|truespeed|typemustmatch)$/,La=0|(Ea&&Ea.document||{}).documentMode,Ma=Object.freeze({isSVGTag:b,isBoolAttr:c,isFunction:d,isObject:e,isUndefined:f,isString:g,isBlank:h,isArray:i,isWritable:j,isReservedName:k}),Na=Object.freeze({$$:l,$:m,createFrag:n,createDOMPlaceholder:o,mkEl:p,getOuterHTML:q,setInnerHTML:r,remAttr:s,getAttr:t,setAttr:u,safeInsert:v,walkAttrs:w,walkNodes:x}),Oa={},Pa=[],Qa=!1;Ea&&(ra=function(){var a=p("style");u(a,"type","text/css");var b=m("style[type=riot]");return b?(b.id&&(a.id=b.id),b.parentNode.replaceChild(a,b)):document.getElementsByTagName("head")[0].appendChild(a),a}(),sa=ra.styleSheet);var Ra={styleNode:ra,add:function(a,b){b?Oa[b]=a:Pa.push(a),Qa=!0},inject:function(){if(Ea&&Qa){Qa=!1;var a=Object.keys(Oa).map(function(a){return Oa[a]}).concat(Pa).join("\n");sa?sa.cssText=a:ra.innerHTML=a}}},Sa=function(a){function b(a){return a}function c(a,b){return b||(b=s),new RegExp(a.source.replace(/{/g,b[2]).replace(/}/g,b[3]),a.global?j:"")}function d(a){if(a===p)return q;var b=a.split(" ");if(2!==b.length||m.test(a))throw new Error('Unsupported brackets "'+a+'"');return b=b.concat(a.replace(n,"\\").split(" ")),b[4]=c(b[1].length>1?/{[\S\s]*?}/:q[4],b),b[5]=c(a.length>3?/\\({|})/g:q[5],b),b[6]=c(q[6],b),b[7]=RegExp("\\\\("+b[3]+")|([[({])|("+b[3]+")|"+l,j),b[8]=a,b}function e(a){return a instanceof RegExp?h(a):s[a]}function f(a){(a||(a=p))!==s[8]&&(s=d(a),h=a===p?b:c,s[9]=h(q[9])),r=a}function g(a){var b;a=a||{},b=a.brackets,Object.defineProperty(a,"brackets",{set:f,get:function(){return r},enumerable:!0}),i=a,f(b)}var h,i,j="g",k=/"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'/g,l=k.source+"|"+/(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source+"|"+/\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?(\/)[gim]*/.source,m=RegExp("[\\x00-\\x1F<>a-zA-Z0-9'\",;\\\\]"),n=/(?=[[\]()*+?.^$|])/g,o={"(":RegExp("([()])|"+l,j),"[":RegExp("([[\\]])|"+l,j),"{":RegExp("([{}])|"+l,j)},p="{ }",q=["{","}","{","}",/{[^}]*}/,/\\([{}])/g,/\\({)|{/g,RegExp("\\\\(})|([[({])|(})|"+l,j),p,/^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/,/(^|[^\\]){=[\S\s]*?}/],r=void 0,s=[];return e.split=function(a,b,c){function d(a){b||f?i.push(a&&a.replace(c[5],"$1")):i.push(a)}c||(c=s);var e,f,g,h,i=[],j=c[6];for(f=g=j.lastIndex=0;e=j.exec(a);){if(h=e.index,f){if(e[2]){j.lastIndex=function(a,b,c){var d,e=o[b];for(e.lastIndex=c,c=1;(d=e.exec(a))&&(!d[1]||(d[1]===b?++c:--c)););return c?a.length:e.lastIndex}(a,e[2],j.lastIndex);continue}if(!e[3])continue}e[1]||(d(a.slice(g,h)),g=j.lastIndex,j=c[6+(f^=1)],j.lastIndex=g)}return a&&g<a.length&&d(a.slice(g)),i},e.hasExpr=function(a){return s[4].test(a)},e.loopKeys=function(a){var b=a.match(s[9]);return b?{key:b[1],pos:b[2],val:s[0]+b[3].trim()+s[1]}:{val:a.trim()}},e.array=function(a){return a?d(a):s},Object.defineProperty(e,"settings",{set:g,get:function(){return i}}),e.settings="undefined"!=typeof riot&&riot.settings||{},e.set=f,e.R_STRINGS=k,e.R_MLCOMMS=/\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g,e.S_QBLOCKS=l,e}(),Ta=function(){function a(a,d){return a?(g[a]||(g[a]=c(a))).call(d,b):a}function b(b,c){b.riotData={tagName:c&&c.root&&c.root.tagName,_riot_id:c&&c._riot_id},a.errorHandler?a.errorHandler(b):"undefined"!=typeof console&&"function"==typeof console.error&&(b.riotData.tagName&&console.error("Riot template error thrown in the <%s> tag",b.riotData.tagName.toLowerCase()),console.error(b))}function c(a){var b=d(a);return"try{return "!==b.slice(0,11)&&(b="return "+b),new Function("E",b+";")}function d(a){var b,c=[],d=Sa.split(a.replace(k,'"'),1);if(d.length>2||d[0]){var f,g,h=[];for(f=g=0;f<d.length;++f)(b=d[f])&&(b=1&f?e(b,1,c):'"'+b.replace(/\\/g,"\\\\").replace(/\r\n?|\n/g,"\\n").replace(/"/g,'\\"')+'"')&&(h[g++]=b);b=g<2?h[0]:"["+h.join(",")+'].join("")'}else b=e(d[1],0,c);return c[0]&&(b=b.replace(l,function(a,b){return c[b].replace(/\r/g,"\\r").replace(/\n/g,"\\n")})),b}function e(a,b,c){if(a=a.replace(j,function(a,b){return a.length>2&&!b?h+(c.push(a)-1)+"~":a}).replace(/\s+/g," ").trim().replace(/\ ?([[\({},?\.:])\ ?/g,"$1")){for(var d,e=[],g=0;a&&(d=a.match(i))&&!d.index;){var k,l,n=/,|([[{(])|$/g;for(a=RegExp.rightContext,k=d[2]?c[d[2]].slice(1,-1).trim().replace(/\s+/g," "):d[1];l=(d=n.exec(a))[1];)!function(b,c){var d,e=1,f=m[b];for(f.lastIndex=c.lastIndex;d=f.exec(a);)if(d[0]===b)++e;else if(!--e)break;c.lastIndex=e?a.length:f.lastIndex}(l,n);l=a.slice(0,d.index),a=RegExp.rightContext,e[g++]=f(l,1,k)}a=g?g>1?"["+e.join(",")+'].join(" ").trim()':e[0]:f(a,b)}return a}function f(a,b,c){var d;return a=a.replace(o,function(a,b,c,e,f){return c&&(e=d?0:e+a.length,"this"!==c&&"global"!==c&&"window"!==c?(a=b+'("'+c+n+c,e&&(d="."===(f=f[e])||"("===f||"["===f)):e&&(d=!p.test(f.slice(e)))),a}),d&&(a="try{return "+a+"}catch(e){E(e,this)}"),c?a=(d?"function(){"+a+"}.call(this)":"("+a+")")+'?"'+c+'":""':b&&(a="function(v){"+(d?a.replace("return ","v="):"v=("+a+")")+';return v||v===0?v:""}.call(this)'),a}var g={};a.hasExpr=Sa.hasExpr,a.loopKeys=Sa.loopKeys,a.clearCache=function(){g={}},a.errorHandler=null;var h=String.fromCharCode(8279),i=/^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\u2057(\d+)~):/,j=RegExp(Sa.S_QBLOCKS,"g"),k=/\u2057/g,l=/\u2057(\d+)~/g,m={"(":/[()]/g,"[":/[[\]]/g,"{":/[{}]/g},n='"in this?this:'+("object"!=typeof window?"global":"window")+").",o=/[,{][\$\w]+(?=:)|(^ *|[^$\w\.{])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,p=/^(?=(\.[$\w]+))\1(?:[^.[(]|$)/;return a.version=Sa.version="v3.0.1",a}(),Ua=Object.freeze({each:y,contains:z,toCamel:A,startsWith:B,defineProperty:C,extend:D}),Va=function(a){a=a||{};var b={},c=Array.prototype.slice;return Object.defineProperties(a,{on:{value:function(c,d){return"function"==typeof d&&(b[c]=b[c]||[]).push(d),a},enumerable:!1,writable:!1,configurable:!1},off:{value:function(c,d){if("*"!=c||d)if(d)for(var e,f=b[c],g=0;e=f&&f[g];++g)e==d&&f.splice(g--,1);else delete b[c];else b={};return a},enumerable:!1,writable:!1,configurable:!1},one:{value:function(b,c){function d(){a.off(b,d),c.apply(a,arguments)}return a.on(b,d)},enumerable:!1,writable:!1,configurable:!1},trigger:{value:function(d){var e,f,g,h=arguments,i=arguments.length-1,j=new Array(i);for(g=0;g<i;g++)j[g]=h[g+1];for(e=c.call(b[d]||[],0),g=0;f=e[g];++g)f.apply(a,j);return b["*"]&&"*"!=d&&a.trigger.apply(a,["*",d].concat(j)),a},enumerable:!1,writable:!1,configurable:!1}}),a},Wa=/^on/,Xa={init:function(a,b,c){s(a,"if"),this.parentTag=b,this.expr=c,this.stub=document.createTextNode(""),this.pristine=a;var d=a.parentNode;return d.insertBefore(this.stub,a),d.removeChild(a),this},update:function(){var a=Ta(this.expr,this.parentTag);a&&!this.current?(this.current=this.pristine.cloneNode(!0),this.stub.parentNode.insertBefore(this.current,this.stub),this.expressions=[],Q.apply(this.parentTag,[this.current,this.expressions,!0])):!a&&this.current&&(ha(this.expressions),this.current._tag?this.current._tag.unmount():this.current.parentNode&&this.current.parentNode.removeChild(this.current),this.current=null,this.expressions=[]),a&&I.call(this.parentTag,this.expressions)},unmount:function(){ha(this.expressions||[]),delete this.pristine,delete this.parentNode,delete this.stub}},Ya={init:function(a,b,c,d){return this.dom=a,this.attr=b,this.rawValue=c,this.parent=d,this.hasExp=Ta.hasExpr(c),this.firstRun=!0,this},update:function(){var a=this.rawValue;if(this.hasExp&&(a=Ta(this.rawValue,this.parent)),this.firstRun||a!==this.value){var b=this.parent&&ga(this.parent),c=this.tag||this.dom;!h(this.value)&&b&&la(b.refs,this.value,c),h(a)?s(this.dom,this.attr):(b&&ka(b.refs,a,c),u(this.dom,this.attr,a)),this.value=a,this.firstRun=!1}},unmount:function(){var a=this.tag||this.dom,b=this.parent&&ga(this.parent);!h(this.value)&&b&&la(b.refs,this.value,a),delete this.dom,delete this.parent}},Za=/<yield\b/i,$a=/<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>|>)/gi,_a=/<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/gi,ab=/<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/gi,bb={tr:"tbody",th:"tr",td:"tr",col:"colgroup"},cb=La&&La<10?Fa:/^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/,db="div",eb={},fb=eb[va]={},gb=0,hb=0,ib=Object.freeze({getTag:ca,inheritFrom:da,moveChildTag:ea,initChildTag:fa,getImmediateCustomParentTag:ga,unmountAll:ha,getTagName:ia,cleanUpData:ja,arrayishAdd:ka,arrayishRemove:la,isInStub:ma,mountTo:na,makeVirtual:oa,moveVirtual:pa,selectTags:qa}),jb=Object.create(Sa.settings),kb={tmpl:Ta,brackets:Sa,styleManager:Ra,vdom:ta,styleNode:Ra.styleNode,dom:Na,check:Ma,misc:Ua,tags:ib};a.settings=jb,a.util=kb,a.observable=Va,a.Tag=V,a.tag=W,a.tag2=X,a.mount=Y,a.mixin=Z,a.update=$,a.unregister=_,Object.defineProperty(a,"__esModule",{value:!0})}),jQuery(function(a){riot.mount("*")});