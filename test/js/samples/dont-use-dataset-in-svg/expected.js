/* generated by Svelte vX.Y.Z */
import { appendNode, assign, createSvgElement, detachNode, init, insertNode, proto, setAttribute } from "svelte/shared.js";

function create_main_fragment(component, ctx) {
	var svg, g, g_1;

	return {
		c() {
			svg = createSvgElement("svg");
			g = createSvgElement("g");
			g_1 = createSvgElement("g");
			setAttribute(g, "data-foo", "bar");
			setAttribute(g_1, "data-foo", ctx.bar);
		},

		m(target, anchor) {
			insertNode(svg, target, anchor);
			appendNode(g, svg);
			appendNode(g_1, svg);
		},

		p(changed, ctx) {
			if (changed.bar) {
				setAttribute(g_1, "data-foo", ctx.bar);
			}
		},

		d(detach) {
			if (detach) {
				detachNode(svg);
			}
		}
	};
}

function SvelteComponent(options) {
	init(this, options);
	this._state = assign({}, options.data);
	this._intro = true;

	this._fragment = create_main_fragment(this, this._state);

	if (options.target) {
		this._fragment.c();
		this._mount(options.target, options.anchor);
	}
}

assign(SvelteComponent.prototype, proto);
export default SvelteComponent;