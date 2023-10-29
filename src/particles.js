import Particle from "./particle.js";

const defaultOptions = {
	responsive: null,
	selector: null,
	maxParticles: 100,
	sizeVariations: 3,
	showParticles: true,
	speed: 0.5,
	color: "#000000",
	minDistance: 120,
	connectParticles: false,
};

class Particles {
	constructor(options) {
		this.options = {...defaultOptions, ...options};

		this.element = null;
		this.context = null;
		this.ratio = null;
		this.breakpoints = [];
		this.activeBreakpoint = null;
		this.breakpointSettings = [];
		this.originalSettings = null;
		this.storage = [];
		this.usingPolyfill = false;
	}

	init() {
		console.log("init");
	}
}

const particles = new Particles({speed: 5});
console.log(particles.init());

export default Particles;
