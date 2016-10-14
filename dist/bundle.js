"use strict";function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,n){for(var i=0;i<n.length;i++){var e=n[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(n,i,e){return i&&t(n.prototype,i),e&&t(n,e),n}}(),Coordinate=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;_classCallCheck(this,t),this._x=n,this._y=i}return _createClass(t,[{key:"x",get:function(){return this._x},set:function(t){this._x=t}},{key:"y",get:function(){return this._y},set:function(t){this._y=t}}]),t}(),_createClass=function(){function t(t,n){for(var i=0;i<n.length;i++){var e=n[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(n,i,e){return i&&t(n.prototype,i),e&&t(n,e),n}}(),NQueens=function(){function t(){_classCallCheck(this,t),this._positions=[],this.oneSolution=this.oneSolution.bind(this),this.oneSolutionUtil=this.oneSolutionUtil.bind(this),this.allSolutions=this.allSolutions.bind(this),this.allSolutionsUtil=this.allSolutionsUtil.bind(this)}return _createClass(t,[{key:"oneSolution",value:function(t){this.oneSolutionUtil(t,0,this._positions);return this._positions}},{key:"oneSolutionUtil",value:function(t,n,i){if(t===n)return!0;for(var e=0;e<t;e++){for(var o=!0,r=0;r<n;r++)if(i[r].y===e||i[r].x-i[r].y===n-e||i[r].x+i[r].y===n+e){o=!1;break}if(o&&(i[n]=new Coordinate(n,e),this.oneSolutionUtil(t,n+1,i)))return!0}return!1}},{key:"allSolutions",value:function(t){var n=[];return this.allSolutionsUtil(0,this._positions,n,t),n}},{key:"allSolutionsUtil",value:function(t,n,i,e){var o=this;e===t&&!function(){var r=[],s=[];n.forEach(function(t){for(var n=0;n<e;n++)t.y===n?r.push("Q"):r.push("."),s.push(r.join(" ")),r=[];i.push(s)});for(var l=0;l<e;l++){for(var u=!0,a=0;a<t;a++)if(n[a].y===l||n[a].y-n[a].x===l-t||n[a].y+n[a].x===l+t){u=!1;break}u&&(n[t]=new Coordinate(t,l),o.allSolutionsUtil(t+1,n,i,e))}}()}},{key:"positions",get:function(){return this._positions},set:function(t){this._positions=t}}]),t}(),_createClass=function(){function t(t,n){for(var i=0;i<n.length;i++){var e=n[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(n,i,e){return i&&t(n.prototype,i),e&&t(n,e),n}}(),Board=function(){function t(n,i){_classCallCheck(this,t),this.container=document.querySelector(".n-queens__wrapper"),this._size=n,this._coords=i,this.paint=this.paint.bind(this)}return _createClass(t,[{key:"paint",value:function(){this.container.innerHTML="";for(var t=0,n="";t<this._size;t++,n=""){for(var i=0;i<this._size;i++)n+=this._coords[t].x===t&&this._coords[t].y===i?"Q ":"_ ";this.container.innerHTML+="<p>"+n+"</p>"}}},{key:"size",get:function(){return this._size},set:function(t){this._size=t}},{key:"coords",get:function(){return this._coords},set:function(t){this._coords=t}}]),t}();!function(t,n){var i=n.querySelector("form"),e=n.querySelector("input"),o=n.querySelector(".n-queens__wrapper"),r=n.querySelector(".modal"),s=n.querySelector(".btn-close");s.onclick=function(){return r.style.visibility="hidden"},t.onclick=function(t){t.target==r&&(r.style.visibility="hidden")};var l=function(t){t.preventDefault();var n=Number(e.value);if(2===n||3===n)return void(r.style.visibility="visible");o.innerHTML="<p>processing</p>";var i=new NQueens,s=i.oneSolution(n),l=new Board(n,s);l.paint()};i.addEventListener("submit",l)}(window,document);