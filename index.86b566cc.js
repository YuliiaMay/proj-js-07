!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},a=t.parcelRequire1b87;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequire1b87=a),a.register("6dAs7",(function(t,r){var n,o,s,u;n=t.exports,o="onBtnFavoriteClick",s=function(){return g},Object.defineProperty(n,o,{get:s,set:u,enumerable:!0,configurable:!0});var i=a("bpxeT"),c=a("2TvXO"),l=a("dIxxU"),d=a("1m3k3"),f=document.querySelector(".news__gallery");console.log(f);var p="https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=ctrAXxxlZTZKIuOVxETyJyELWuuMaa5A";function x(){return v.apply(this,arguments)}function v(){return(v=e(i)(e(c).mark((function t(){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.default.get(p);case 2:return r=e.sent.data,console.log(r),e.abrupt("return",r);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}f&&f.addEventListener("click",g);var b=null;function g(e){return m.apply(this,arguments)}function m(){return m=e(i)(e(c).mark((function t(r){var n,a,o,s,u,i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n=r.target.closest(".item-news__add-to-favorite")){e.next=4;break}return e.abrupt("return");case 4:if(n.classList.toggle("hidden-span"),a=n.closest(".card").dataset.id,o=(0,d.getDataFromLocalStorage)("news"),s=o.findIndex((function(e){var t=e.id;return Number(t)===Number(a)})),console.log("indexElem ",s),!(s>-1)){e.next=13;break}o.splice(s,1),e.next=20;break;case 13:if(b){e.next=18;break}return e.next=16,x();case 16:u=e.sent.results,b=u;case 18:i=b.find((function(e){var t=e.id;return Number(t)===Number(a)})),o.push(i);case 20:(0,d.setDataToLocalStorage)("news",o),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(0),console.log(e.t0.message);case 26:case"end":return e.stop()}}),t,null,[[0,23]])}))),m.apply(this,arguments)}}))}();
//# sourceMappingURL=index.86b566cc.js.map
