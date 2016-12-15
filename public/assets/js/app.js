(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('./modules/carousel.js');

},{"./modules/carousel.js":2}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Carousel = function (_HTMLElement) {
	_inherits(Carousel, _HTMLElement);

	function Carousel() {
		_classCallCheck(this, Carousel);

		return _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).apply(this, arguments));
	}

	_createClass(Carousel, [{
		key: 'connectedCallback',
		value: function connectedCallback() {
			var _this2 = this;

			// Set defaults
			this.current = this.current;
			this.loop = this.loop;

			setInterval(function () {
				return _this2.current++;
			}, 1000);

			this.classList.add('has-loaded');
		}
	}, {
		key: 'current',
		get: function get() {
			return this.getAttribute('current') || 0;
		},
		set: function set(to) {
			to = parseInt(to);

			// If we're at the last slide and navigated 'Next'
			if (to >= this.children.length) {
				// Back to first slide if carousel has loop set to true
				to = this.loop ? 0 : this.children.length - 1;
			}

			// If we're at the first slide and navigated 'Previous'
			if (to < 0) {
				// Jump to last slide if carousel has loop set to true
				to = this.loop ? this.children.length - 1 : 0;
			}

			for (var i = 0; i < this.children.length; i++) {
				var child = this.children[i];

				if (child.classList.contains('is-active')) {
					child.classList.remove('is-active');
				}

				if (i === to) {
					child.classList.add('is-active');
				}
			}

			return this.setAttribute('current', to);
		}
	}, {
		key: 'loop',
		get: function get() {
			return this.hasAttribute('loop');
		},
		set: function set(to) {
			if (!!to) {
				this.setAttribute('loop', 'loop');
			} else {
				this.removeAttribute('loop');
			}
		}
	}], [{
		key: 'observedAttributes',


		// Properties

		get: function get() {
			return ['current', 'loop'];
		}
	}]);

	return Carousel;
}(HTMLElement);

;

customElements.define('mr-carousel', Carousel);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJndWxwL2Fzc2V0cy9qcy9hcHAuanMiLCJndWxwL2Fzc2V0cy9qcy9tb2R1bGVzL2Nhcm91c2VsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FBRUE7Ozs7Ozs7Ozs7Ozs7SUNGTSxROzs7Ozs7Ozs7OztzQ0FzRGU7QUFBQTs7QUFDbkI7QUFDQSxRQUFLLE9BQUwsR0FBZSxLQUFLLE9BQXBCO0FBQ0EsUUFBSyxJQUFMLEdBQVksS0FBSyxJQUFqQjs7QUFFQSxlQUFZO0FBQUEsV0FBTSxPQUFLLE9BQUwsRUFBTjtBQUFBLElBQVosRUFBa0MsSUFBbEM7O0FBRUEsUUFBSyxTQUFMLENBQWUsR0FBZixDQUFtQixZQUFuQjtBQUNBOzs7c0JBdERhO0FBQ2IsVUFBTyxLQUFLLFlBQUwsQ0FBa0IsU0FBbEIsS0FBZ0MsQ0FBdkM7QUFDQSxHO29CQUVXLEUsRUFBSTtBQUNmLFFBQUssU0FBUyxFQUFULENBQUw7O0FBRUE7QUFDQSxPQUFJLE1BQU0sS0FBSyxRQUFMLENBQWMsTUFBeEIsRUFBZ0M7QUFDL0I7QUFDQSxTQUFLLEtBQUssSUFBTCxHQUFZLENBQVosR0FBZ0IsS0FBSyxRQUFMLENBQWMsTUFBZCxHQUF1QixDQUE1QztBQUNBOztBQUVEO0FBQ0EsT0FBSSxLQUFLLENBQVQsRUFBWTtBQUNYO0FBQ0EsU0FBSyxLQUFLLElBQUwsR0FBWSxLQUFLLFFBQUwsQ0FBYyxNQUFkLEdBQXVCLENBQW5DLEdBQXVDLENBQTVDO0FBQ0E7O0FBRUQsUUFBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLEtBQUssUUFBTCxDQUFjLE1BQWxDLEVBQTBDLEdBQTFDLEVBQStDO0FBQzlDLFFBQU0sUUFBUSxLQUFLLFFBQUwsQ0FBYyxDQUFkLENBQWQ7O0FBRUEsUUFBSSxNQUFNLFNBQU4sQ0FBZ0IsUUFBaEIsQ0FBeUIsV0FBekIsQ0FBSixFQUEyQztBQUMxQyxXQUFNLFNBQU4sQ0FBZ0IsTUFBaEIsQ0FBdUIsV0FBdkI7QUFDQTs7QUFFRCxRQUFJLE1BQU0sRUFBVixFQUFjO0FBQ2IsV0FBTSxTQUFOLENBQWdCLEdBQWhCLENBQW9CLFdBQXBCO0FBQ0E7QUFDRDs7QUFFRCxVQUFPLEtBQUssWUFBTCxDQUFrQixTQUFsQixFQUE2QixFQUE3QixDQUFQO0FBQ0E7OztzQkFFVTtBQUNWLFVBQU8sS0FBSyxZQUFMLENBQWtCLE1BQWxCLENBQVA7QUFDQSxHO29CQUVRLEUsRUFBSTtBQUNaLE9BQUksQ0FBQyxDQUFDLEVBQU4sRUFBVTtBQUNULFNBQUssWUFBTCxDQUFrQixNQUFsQixFQUEwQixNQUExQjtBQUNBLElBRkQsTUFFTztBQUNOLFNBQUssZUFBTCxDQUFxQixNQUFyQjtBQUNBO0FBQ0Q7Ozs7O0FBbEREOztzQkFFZ0M7QUFDL0IsVUFBTyxDQUFDLFNBQUQsRUFBWSxNQUFaLENBQVA7QUFDQTs7OztFQU5xQixXOztBQWdFdEI7O0FBRUQsZUFBZSxNQUFmLENBQXNCLGFBQXRCLEVBQXFDLFFBQXJDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuL21vZHVsZXMvY2Fyb3VzZWwuanMnOyIsImNsYXNzIENhcm91c2VsIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuXG5cdC8vIFByb3BlcnRpZXNcblxuXHRzdGF0aWMgZ2V0IG9ic2VydmVkQXR0cmlidXRlcygpIHtcblx0XHRyZXR1cm4gWydjdXJyZW50JywgJ2xvb3AnXTtcblx0fVxuXG5cdGdldCBjdXJyZW50KCkge1xuXHRcdHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnY3VycmVudCcpIHx8IDA7XG5cdH1cblxuXHRzZXQgY3VycmVudCh0bykge1xuXHRcdHRvID0gcGFyc2VJbnQodG8pO1xuXG5cdFx0Ly8gSWYgd2UncmUgYXQgdGhlIGxhc3Qgc2xpZGUgYW5kIG5hdmlnYXRlZCAnTmV4dCdcblx0XHRpZiAodG8gPj0gdGhpcy5jaGlsZHJlbi5sZW5ndGgpIHtcblx0XHRcdC8vIEJhY2sgdG8gZmlyc3Qgc2xpZGUgaWYgY2Fyb3VzZWwgaGFzIGxvb3Agc2V0IHRvIHRydWVcblx0XHRcdHRvID0gdGhpcy5sb29wID8gMCA6IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTtcblx0XHR9XG5cblx0XHQvLyBJZiB3ZSdyZSBhdCB0aGUgZmlyc3Qgc2xpZGUgYW5kIG5hdmlnYXRlZCAnUHJldmlvdXMnXG5cdFx0aWYgKHRvIDwgMCkge1xuXHRcdFx0Ly8gSnVtcCB0byBsYXN0IHNsaWRlIGlmIGNhcm91c2VsIGhhcyBsb29wIHNldCB0byB0cnVlXG5cdFx0XHR0byA9IHRoaXMubG9vcCA/IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMSA6IDA7XG5cdFx0fVxuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBjaGlsZCA9IHRoaXMuY2hpbGRyZW5baV07XG5cblx0XHRcdGlmIChjaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ2lzLWFjdGl2ZScpKSB7XG5cdFx0XHRcdGNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFjdGl2ZScpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoaSA9PT0gdG8pIHtcblx0XHRcdFx0Y2hpbGQuY2xhc3NMaXN0LmFkZCgnaXMtYWN0aXZlJyk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuc2V0QXR0cmlidXRlKCdjdXJyZW50JywgdG8pO1xuXHR9XG5cblx0Z2V0IGxvb3AoKSB7XG5cdFx0cmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdsb29wJyk7XG5cdH1cblxuXHRzZXQgbG9vcCh0bykge1xuXHRcdGlmICghIXRvKSB7XG5cdFx0XHR0aGlzLnNldEF0dHJpYnV0ZSgnbG9vcCcsICdsb29wJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucmVtb3ZlQXR0cmlidXRlKCdsb29wJyk7XG5cdFx0fVxuXHR9XG5cblx0Y29ubmVjdGVkQ2FsbGJhY2soKSB7XG5cdFx0Ly8gU2V0IGRlZmF1bHRzXG5cdFx0dGhpcy5jdXJyZW50ID0gdGhpcy5jdXJyZW50O1xuXHRcdHRoaXMubG9vcCA9IHRoaXMubG9vcDtcblxuXHRcdHNldEludGVydmFsKCgpID0+IHRoaXMuY3VycmVudCsrLCAxMDAwKTtcblxuXHRcdHRoaXMuY2xhc3NMaXN0LmFkZCgnaGFzLWxvYWRlZCcpO1xuXHR9O1xuXG59O1xuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ21yLWNhcm91c2VsJywgQ2Fyb3VzZWwpOyJdfQ==
