(()=>{"use strict";var n={958:(n,e,t)=>{t.d(e,{A:()=>c});var r=t(354),o=t.n(r),i=t(314),a=t.n(i)()(o());a.push([n.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.2rem;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    width: 100vw;\n    height: 100vh;\n    background: rgb(9, 180, 180);\n}\nh1{\n    font-size: 3em;\n    color: #fff;\n    text-shadow: 0 0 1rem #ffffff7d;\n\n}\n\n.main-container {\n    width: 30rem;\n    height: auto;\n    background-color: #fff;\n    border-radius: 1.5rem;\n    padding: 2rem;\n}\n\n.info-container h1{\n    margin: 0 0 2rem;\n    text-align: center;\n    text-shadow: 0 0 .4rem rgba(0, 0, 0, 0.243);\n}\n\n.info-container p {\n    text-indent: 2rem;\n    margin-bottom: 2rem;\n    text-align: justify;\n}\n\n.form-container {\n    display: flex;\n    flex-flow: column nowrap;\n}\n\nlabel {\n    margin-bottom: .5rem;\n    font-size: .9rem;\n    font-style: italic;\n    text-indent: .5rem;\n    opacity: 0.7;\n}\n\n.caixa-form{\n    padding: .5rem;\n    border-radius: 1.5rem;\n    border: .1rem solid rgba(128, 128, 128, 0.595);\n    \n}\n\n.caixa-form:nth-child(9) {\n    cursor: pointer;\n    margin-top: 1.5rem;\n    background-color: transparent;\n}\n\n.caixa-form:nth-child(9):hover {\n    border: .1rem solid rgb(9, 180, 180);\n}\n\n.caixa-form:focus {\n    outline: .1rem solid rgb(9, 180, 180);\n}","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;IACjB,gDAAgD;IAChD,YAAY;IACZ,aAAa;IACb,4BAA4B;AAChC;AACA;IACI,cAAc;IACd,WAAW;IACX,+BAA+B;;AAEnC;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,sBAAsB;IACtB,qBAAqB;IACrB,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,2CAA2C;AAC/C;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,wBAAwB;AAC5B;;AAEA;IACI,oBAAoB;IACpB,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,qBAAqB;IACrB,8CAA8C;;AAElD;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,6BAA6B;AACjC;;AAEA;IACI,oCAAoC;AACxC;;AAEA;IACI,qCAAqC;AACzC",sourcesContent:["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 1.2rem;\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n    width: 100vw;\n    height: 100vh;\n    background: rgb(9, 180, 180);\n}\nh1{\n    font-size: 3em;\n    color: #fff;\n    text-shadow: 0 0 1rem #ffffff7d;\n\n}\n\n.main-container {\n    width: 30rem;\n    height: auto;\n    background-color: #fff;\n    border-radius: 1.5rem;\n    padding: 2rem;\n}\n\n.info-container h1{\n    margin: 0 0 2rem;\n    text-align: center;\n    text-shadow: 0 0 .4rem rgba(0, 0, 0, 0.243);\n}\n\n.info-container p {\n    text-indent: 2rem;\n    margin-bottom: 2rem;\n    text-align: justify;\n}\n\n.form-container {\n    display: flex;\n    flex-flow: column nowrap;\n}\n\nlabel {\n    margin-bottom: .5rem;\n    font-size: .9rem;\n    font-style: italic;\n    text-indent: .5rem;\n    opacity: 0.7;\n}\n\n.caixa-form{\n    padding: .5rem;\n    border-radius: 1.5rem;\n    border: .1rem solid rgba(128, 128, 128, 0.595);\n    \n}\n\n.caixa-form:nth-child(9) {\n    cursor: pointer;\n    margin-top: 1.5rem;\n    background-color: transparent;\n}\n\n.caixa-form:nth-child(9):hover {\n    border: .1rem solid rgb(9, 180, 180);\n}\n\n.caixa-form:focus {\n    outline: .1rem solid rgb(9, 180, 180);\n}"],sourceRoot:""}]);const c=a},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var u=this[c][0];null!=u&&(a[u]=!0)}for(var f=0;f<n.length;f++){var s=[].concat(n[f]);r&&a[s[0]]||(void 0!==i&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=i),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),e.push(s))}},e}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */");return[e].concat([i]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var u=n[c],f=r.base?u[0]+r.base:u[0],s=i[f]||0,l="".concat(f," ").concat(s);i[f]=s+1;var A=t(l),p={css:u[1],media:u[2],sourceMap:u[3],supports:u[4],layer:u[5]};if(-1!==A)e[A].references++,e[A].updater(p);else{var d=o(p,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:d,references:1})}a.push(l)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);e[c].references--}for(var u=r(n,o),f=0;f<i.length;f++){var s=t(i[f]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}i=u}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n(e)}function e(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,r(o.key),o)}}function r(e){var t=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!=n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==n(t)?t:t+""}var o=function(){return n=function n(e){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),Object.defineProperty(this,"cpfFull",{value:e.replace(/\D+/g,""),writable:!0,enumerable:!0,configurable:!0}),Object.defineProperty(this,"cpf",{value:this.cpfFull.slice(0,-2),writable:!1,enumerable:!1,configurable:!1})},(t=[{key:"sumArray",value:function(n){var e=Array.from(n),t=e.length+1;return e.reduce((function(n,e){return n+=t*Number(e),t--,n}),0)}},{key:"createDigit",value:function(n){var e=11-this.sumArray(n)%11;return e>9?0:e}},{key:"isSequence",value:function(){return this.cpf[1].repeat(this.cpf.length+2)===this.cpfFull}},{key:"appendValidation",value:function(){if(0==this.valid())return document.querySelector(".result-off > p").textContent="Digite um CPF válido!",void this.openResult();var n=document.querySelector(".info-cpf"),e=document.querySelector(".result-cpf");n.innerHTML=cpfDigit.value,e.innerHTML=this.valid(),this.openResult()}},{key:"valid",value:function(){if(!this.cpfFull)return!1;if("string"!=typeof this.cpfFull)return!1;if(11!==this.cpfFull.length)return!1;if(this.isSequence())return!1;var n=this.createDigit(this.cpf),e=this.createDigit(this.cpf+n),t=this.cpf+n+e;return this.cpfFull===t?"VÁLIDO":"INVÁLIDO"}}])&&e(n.prototype,t),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,t}();function i(n){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},i(n)}function a(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,c(r.key),r)}}function c(n){var e=function(n,e){if("object"!=i(n)||!n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var r=t.call(n,"string");if("object"!=i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==i(e)?e:e+""}var u,f=function(){return n=function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this.digito=new o},e=[{key:"rand",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e8,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:999999999;return String(math.floor(math.random()*(e-n)+n))}},{key:"geraNovoCpf",value:function(){var n=this.rand(),e=this.digito.createDigit(n);return this.digito.createDigit(n+e),"oi"}}],e&&a(n.prototype,e),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,e}(),s=t(72),l=t.n(s),A=t(825),p=t.n(A),d=t(659),m=t.n(d),v=t(56),h=t.n(v),y=t(540),b=t.n(y),g=t(113),C=t.n(g),B=t(958),I={};I.styleTagTransform=C(),I.setAttributes=h(),I.insert=m().bind(null,"head"),I.domAPI=p(),I.insertStyleElement=b(),l()(B.A,I),B.A&&B.A.locals&&B.A.locals,u=new f,document.querySelector(".cpf-gerado").innerHTML=u.geraNovoCpf()})()})();
//# sourceMappingURL=bundle.js.map