!function(){function e(e){return e&&e.__esModule?e.default:e}function t(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},u=r.parcelRequire1b87;null==u&&((u=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){a[e]=t},r.parcelRequire1b87=u),u.register("9UMhL",(function(r,n){t(r.exports,"READ_NEWS_KEY",(function(){return c}));var a=u("bpxeT"),o=u("2TvXO"),s=u("dIxxU"),i=u("1m3k3"),c=(new(0,u("awzFl").default),"read-news"),l=document.querySelector(".news__gallery"),f=null,p="https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=ctrAXxxlZTZKIuOVxETyJyELWuuMaa5A";function d(){return h.apply(this,arguments)}function h(){return(h=e(a)(e(o).mark((function t(){var r;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.default.get(p);case 2:return r=e.sent.data,e.abrupt("return",r);case 4:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function b(){return(b=e(a)(e(o).mark((function t(r){var n,a,u,s,l,p;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("A"===r.target.nodeName){e.next=2;break}return e.abrupt("return");case 2:return n=(0,i.getDataFromLocalStorage)(c),a=r.target.closest(".card").dataset.id,e.next=6,d();case 6:u=e.sent,f=u.results,console.log(f),s=new Date,l=s.toLocaleString().slice(0,10),(p=f.find((function(e){var t=e.id;return Number(t)===Number(a)}))).day=l,console.log(p),void 0!==p&&n.every((function(e){return Number(a)!==Number(e.id)}))&&(n.push(p),(0,i.setDataToLocalStorage)(c,n));case 15:case"end":return e.stop()}}),t)})))).apply(this,arguments)}l&&l.addEventListener("click",(function(e){return b.apply(this,arguments)}))})),u.register("awzFl",(function(r,n){t(r.exports,"default",(function(){return f}));var a=u("bpxeT"),o=u("8MBJY"),s=u("a2hTj"),i=u("hKHmD"),c=u("2TvXO"),l=u("dIxxU"),f=function(){"use strict";function t(r){e(o)(this,t),e(i)(this,"baseUrl","https://api.nytimes.com/svc/search/v2"),e(i)(this,"apiKey","1CftshpIbKCwUhOxVLAbMSPcGc2N2XMQ"),this.query=r,this.page=0}return e(s)(t,[{key:"searchNews",value:function(){var t=this;return e(a)(e(c).mark((function r(){var n;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(t.baseUrl,"/articlesearch.json?q=").concat(t.query,"&api-key=").concat(t.apiKey,"&page=").concat(t.page),e.next=3,l.default.get(n).then((function(e){if(200!==e.status||0===e.data.response.docs.length)throw new Error(e.status);return e.data}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),r)})))()}},{key:"nextPage",value:function(){this.page+=1}}]),t}()})),u.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}}))}();
//# sourceMappingURL=read.822ff496.js.map
