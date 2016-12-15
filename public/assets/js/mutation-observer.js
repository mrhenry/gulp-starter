// WeakMap
"undefined"==typeof WeakMap&&!function(){var a=Object.defineProperty,b=Date.now()%1e9,c=function(){this.name="__st"+(1e9*Math.random()>>>0)+(b++ +"__")};c.prototype={set:function(b,c){var d=b[this.name];return d&&d[0]===b?d[1]=c:a(b,this.name,{value:[b,c],writable:!0}),this},get:function(a){var b;return(b=a[this.name])&&b[0]===a?b[1]:void 0},delete:function(a){var b=a[this.name];return!(!b||b[0]!==a)&&(b[0]=b[1]=void 0,!0)},has:function(a){var b=a[this.name];return!!b&&b[0]===a}},window.WeakMap=c}();

// MutationObserver
!function(a){function h(a){g.push(a),f||(f=!0,c(j))}function i(a){return window.ShadowDOMPolyfill&&window.ShadowDOMPolyfill.wrapIfNeeded(a)||a}function j(){f=!1;var a=g;g=[],a.sort(function(a,b){return a.uid_-b.uid_});var b=!1;a.forEach(function(a){var c=a.takeRecords();k(a),c.length&&(a.callback_(c,a),b=!0)}),b&&j()}function k(a){a.nodes_.forEach(function(c){var d=b.get(c);d&&d.forEach(function(b){b.observer===a&&b.removeTransientObservers()})})}function l(a,c){for(var d=a;d;d=d.parentNode){var e=b.get(d);if(e)for(var f=0;f<e.length;f++){var g=e[f],h=g.options;if(d===a||h.subtree){var i=c(h);i&&g.enqueue(i)}}}}function n(a){this.callback_=a,this.nodes_=[],this.records_=[],this.uid_=++m}function o(a,b){this.type=a,this.target=b,this.addedNodes=[],this.removedNodes=[],this.previousSibling=null,this.nextSibling=null,this.attributeName=null,this.attributeNamespace=null,this.oldValue=null}function p(a){var b=new o(a.type,a.target);return b.addedNodes=a.addedNodes.slice(),b.removedNodes=a.removedNodes.slice(),b.previousSibling=a.previousSibling,b.nextSibling=a.nextSibling,b.attributeName=a.attributeName,b.attributeNamespace=a.attributeNamespace,b.oldValue=a.oldValue,b}function s(a,b){return q=new o(a,b)}function t(a){return r?r:(r=p(q),r.oldValue=a,r)}function u(){q=r=void 0}function v(a){return a===r||a===q}function w(a,b){return a===b?a:r&&v(a)?r:null}function x(a,b,c){this.observer=a,this.target=b,this.options=c,this.transientObservedNodes=[]}if(!a.JsMutationObserver){var c,b=new WeakMap;if(/Trident|Edge/.test(navigator.userAgent))c=setTimeout;else if(window.setImmediate)c=window.setImmediate;else{var d=[],e=String(Math.random());window.addEventListener("message",function(a){if(a.data===e){var b=d;d=[],b.forEach(function(a){a()})}}),c=function(a){d.push(a),window.postMessage(e,"*")}}var f=!1,g=[],m=0;n.prototype={observe:function(a,c){if(a=i(a),!c.childList&&!c.attributes&&!c.characterData||c.attributeOldValue&&!c.attributes||c.attributeFilter&&c.attributeFilter.length&&!c.attributes||c.characterDataOldValue&&!c.characterData)throw new SyntaxError;var d=b.get(a);d||b.set(a,d=[]);for(var e,f=0;f<d.length;f++)if(d[f].observer===this){e=d[f],e.removeListeners(),e.options=c;break}e||(e=new x(this,a,c),d.push(e),this.nodes_.push(a)),e.addListeners()},disconnect:function(){this.nodes_.forEach(function(a){for(var c=b.get(a),d=0;d<c.length;d++){var e=c[d];if(e.observer===this){e.removeListeners(),c.splice(d,1);break}}},this),this.records_=[]},takeRecords:function(){var a=this.records_;return this.records_=[],a}};var q,r;x.prototype={enqueue:function(a){var b=this.observer.records_,c=b.length;if(b.length>0){var d=b[c-1],e=w(d,a);if(e)return void(b[c-1]=e)}else h(this.observer);b[c]=a},addListeners:function(){this.addListeners_(this.target)},addListeners_:function(a){var b=this.options;b.attributes&&a.addEventListener("DOMAttrModified",this,!0),b.characterData&&a.addEventListener("DOMCharacterDataModified",this,!0),b.childList&&a.addEventListener("DOMNodeInserted",this,!0),(b.childList||b.subtree)&&a.addEventListener("DOMNodeRemoved",this,!0)},removeListeners:function(){this.removeListeners_(this.target)},removeListeners_:function(a){var b=this.options;b.attributes&&a.removeEventListener("DOMAttrModified",this,!0),b.characterData&&a.removeEventListener("DOMCharacterDataModified",this,!0),b.childList&&a.removeEventListener("DOMNodeInserted",this,!0),(b.childList||b.subtree)&&a.removeEventListener("DOMNodeRemoved",this,!0)},addTransientObserver:function(a){if(a!==this.target){this.addListeners_(a),this.transientObservedNodes.push(a);var c=b.get(a);c||b.set(a,c=[]),c.push(this)}},removeTransientObservers:function(){var a=this.transientObservedNodes;this.transientObservedNodes=[],a.forEach(function(a){this.removeListeners_(a);for(var c=b.get(a),d=0;d<c.length;d++)if(c[d]===this){c.splice(d,1);break}},this)},handleEvent:function(a){switch(a.stopImmediatePropagation(),a.type){case"DOMAttrModified":var b=a.attrName,c=a.relatedNode.namespaceURI,d=a.target,e=new s("attributes",d);e.attributeName=b,e.attributeNamespace=c;var f=a.attrChange===MutationEvent.ADDITION?null:a.prevValue;l(d,function(a){if(a.attributes&&(!a.attributeFilter||!a.attributeFilter.length||a.attributeFilter.indexOf(b)!==-1||a.attributeFilter.indexOf(c)!==-1))return a.attributeOldValue?t(f):e});break;case"DOMCharacterDataModified":var d=a.target,e=s("characterData",d),f=a.prevValue;l(d,function(a){if(a.characterData)return a.characterDataOldValue?t(f):e});break;case"DOMNodeRemoved":this.addTransientObserver(a.target);case"DOMNodeInserted":var h,i,g=a.target;"DOMNodeInserted"===a.type?(h=[g],i=[]):(h=[],i=[g]);var j=g.previousSibling,k=g.nextSibling,e=s("childList",a.target.parentNode);e.addedNodes=h,e.removedNodes=i,e.previousSibling=j,e.nextSibling=k,l(a.relatedNode,function(a){if(a.childList)return e})}u()}},a.JsMutationObserver=n,a.MutationObserver||(a.MutationObserver=n,n._isPolyfilled=!0)}}(self);