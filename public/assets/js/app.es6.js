class Carousel extends HTMLElement {

	// Properties

	static get observedAttributes() {
		return ['current', 'loop'];
	}

	get current() {
		return this.getAttribute('current') || 0;
	}

	set current(to) {
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

		for (let i = 0; i < this.children.length; i++) {
			const child = this.children[i];

			if (child.classList.contains('is-active')) {
				child.classList.remove('is-active');
			}

			if (i === to) {
				child.classList.add('is-active');
			}
		}

		return this.setAttribute('current', to);
	}

	get loop() {
		return this.hasAttribute('loop');
	}

	set loop(to) {
		if (!!to) {
			this.setAttribute('loop', 'loop');
		} else {
			this.removeAttribute('loop');
		}
	}

	connectedCallback() {
		// Set defaults
		this.current = this.current;
		this.loop = this.loop;

		setInterval(() => this.current++, 1000);

		this.classList.add('has-loaded');
	};

}

customElements.define('mr-carousel', Carousel);
