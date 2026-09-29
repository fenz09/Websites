const services = [
	{
		number: "01",
		title: "Car Sales",
		description: "Carefully selected vehicles, prepared to an exceptional standard and ready for the road.",
		icon: "<path d=\"M3 13.5 5.2 8h13.6l2.2 5.5M4 13.5h16v4H4zM7 17.5v2m10-2v2M7 12h.01M17 12h.01M5.2 8 7 5h10l1.8 3\"/>"
	},
	{
		number: "02",
		title: "Car Sourcing",
		description: "Tell us what you are looking for. We use our network to find the right car at the right value.",
		icon: "<circle cx=\"11\" cy=\"11\" r=\"6\"/><path d=\"m16 16 5 5M11 8v6m-3-3h6\"/>"
	},
	{
		number: "03",
		title: "Car Imports",
		description: "A clear route from overseas selection to your driveway, handled from start to finish.",
		icon: "<path d=\"M3 16h18M5 16V8h14v8M8 8V5h8v3M7 19h.01M17 19h.01\"/><path d=\"M12 2v8m0-8-3 3m3-3 3 3\"/>"
	},
	{
		number: "04",
		title: "Mechanic & Servicing",
		description: "Practical, transparent care from routine maintenance to the work your car cannot wait for.",
		icon: "<path d=\"m14.7 6.3 3-3a4 4 0 0 0 5 5l-3 3M14.7 6.3 3 18a2.1 2.1 0 0 0 3 3L17.7 9.3\"/><path d=\"m12 9 3 3\"/>"
	}
];

const reviews = [
	{
		quote: "A genuinely refreshing buying experience. Clear advice, no pressure and the car was exactly as described.",
		name: "Daniel R.",
		detail: "Vehicle sourcing client"
	},
	{
		quote: "The team handled every detail of my import and kept me updated throughout. I could not be happier with the result.",
		name: "Maya T.",
		detail: "Import client"
	},
	{
		quote: "Honest mechanics who take the time to explain things properly. My go-to garage from now on.",
		name: "Oliver K.",
		detail: "Servicing client"
	}
];

const icon = (paths, className = "icon") => `
	<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
		${paths}
	</svg>
`;

const renderServiceCard = ({ number, title, description, icon: serviceIcon }) => `
	<article class="service-card">
		<div class="service-icon">${icon(serviceIcon)}</div>
		<div class="service-number">${number}</div>
		<h3>${title}</h3>
		<p>${description}</p>
	</article>
`;

const renderReviewCard = ({ quote, name, detail }) => `
	<article class="review-card">
		<div class="stars" aria-label="5 out of 5 stars">★★★★★</div>
		<blockquote>“${quote}”</blockquote>
		<span class="review-name">${name}</span>
		<span class="review-detail">${detail}</span>
	</article>
`;

const app = document.querySelector("#app");

app.innerHTML = `
<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap');
:root{--ink:#f3f6fa;--muted:#8d99a8;--line:rgb(255, 255, 255);--panel:#121820;--blue:#4aa8ff;--bright:#83c6ff;--night:#070b10;--display:'Space Grotesk',sans-serif;--body:'DM Sans',sans-serif}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;min-width:320px;background:var(--night);color:var(--ink);font-family:var(--body)}body.modal-open{overflow:hidden}a{color:inherit;text-decoration:none}button,input,textarea{font:inherit}button{cursor:pointer}.container{width:min(1180px,calc(100% - 48px));margin:auto}.eyebrow{color:var(--bright);font-size:.7rem;font-weight:700;letter-spacing:.18em;text-transform:uppercase}.section-heading{display:flex;align-items:end;justify-content:space-between;gap:32px;margin-bottom:48px}.section-heading h2{max-width:600px;margin:14px 0 0;font:600 clamp(2rem,4.5vw,3.8rem)/1.04 var(--display);letter-spacing:-.06em}.section-heading p{max-width:330px;margin:0 0 5px;color:var(--muted);line-height:1.6}.btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:48px;padding:0 20px;border:1px solid transparent;border-radius:3px;font-size:.78rem;font-weight:700;transition:.25s}.btn:hover{transform:translateY(-2px)}.btn-primary{background:var(--blue);color:#06101b}.btn-primary:hover{background:var(--bright)}.btn-ghost{border-color:var(--line);color:var(--ink)}.btn-ghost:hover{border-color:var(--blue);background:#4aa8ff14}.arrow{width:16px;height:16px}.site-header{position:absolute;z-index:5;top:0;width:100%;border-bottom:1px solid var(--line)}.nav{display:flex;align-items:center;justify-content:space-between;height:78px}.logo{display:flex;align-items:center;gap:10px;font:700 1rem var(--display);letter-spacing:.08em}.logo-mark{display:grid;width:27px;height:27px;place-items:center;border:2px solid var(--blue);border-radius:50%;color:var(--blue);font-size:.65rem}.nav-links{display:flex;gap:32px;color:#b6c1cd;font-size:.78rem}.nav-links a:hover{color:var(--bright)}.nav-actions{display:flex;gap:14px}.nav-actions .btn{min-height:38px;padding:0 15px;font-size:.7rem}.menu-toggle{display:none;border:0;background:transparent;color:var(--ink)}
.hero{position:relative;display:flex;min-height:760px;align-items:center;overflow:hidden;background:linear-gradient(90deg,#070b10fa 0%,#070b10c4 43%,#070b101f 100%),url('https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=2200&q=85') center/cover}.hero-content{position:relative;z-index:1;padding-top:68px}.hero h1{max-width:760px;margin:18px 0 24px;font:600 clamp(3.6rem,8.5vw,7.6rem)/.94 var(--display);letter-spacing:-.08em}.hero h1 span{color:var(--blue)}.hero-copy{max-width:470px;color:#b4bec9;font-size:1.03rem;line-height:1.7}.hero-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:32px}.hero-meta{display:flex;gap:42px;margin-top:90px}.meta-item strong{display:block;font:600 1.25rem var(--display)}.meta-item span{display:block;margin-top:5px;color:var(--muted);font-size:.72rem}.scroll-cue{position:absolute;right:24px;bottom:35px;display:flex;align-items:center;gap:12px;color:var(--muted);font-size:.65rem;letter-spacing:.15em;text-transform:uppercase;writing-mode:vertical-rl}.scroll-cue:after{width:1px;height:48px;background:var(--blue);content:""}
.services,.work,.reviews,.contact{padding:120px 0}.services,.reviews{background:#0a0f15}.service-grid{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--line);border-left:1px solid var(--line)}.service-card{min-height:300px;padding:27px 25px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);transition:.3s}.service-card:hover{position:relative;z-index:1;background:#111c27;transform:translateY(-5px)}.service-icon{display:grid;width:44px;height:44px;place-items:center;border:1px solid #4aa8ff59;color:var(--blue)}.service-icon .icon{width:21px;height:21px}.service-number{margin:48px 0 18px;color:#53606d;font-size:.68rem;letter-spacing:.1em}.service-card h3{margin:0 0 12px;font:600 1.25rem var(--display)}.service-card p{margin:0;color:var(--muted);font-size:.83rem;line-height:1.6}.work-grid{display:grid;grid-template-columns:1.4fr .8fr .8fr;grid-template-rows:250px 190px;gap:12px}.work-image{position:relative;overflow:hidden;background-position:center;background-size:cover}.work-image:after{position:absolute;inset:0;background:linear-gradient(180deg,transparent 40%,#000000bf);content:""}.work-image:first-child{grid-row:span 2;background-image:url('https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=85')}.work-image:nth-child(2){background-image:url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=900&q=85')}.work-image:nth-child(3){background-image:url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=900&q=85')}.work-image:nth-child(4){background-image:url('https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=85')}.image-label{position:absolute;z-index:1;bottom:18px;left:20px;font-size:.77rem}.review-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.review-card{padding:30px;border:1px solid var(--line);background:#0d141c}.stars{color:var(--blue);letter-spacing:.12em}.review-card blockquote{min-height:112px;margin:26px 0;color:#d7dee6;font:1.05rem/1.6 var(--display)}.review-name{display:block;font-size:.8rem;font-weight:700}.review-detail{display:block;margin-top:5px;color:var(--muted);font-size:.7rem}.consultation{position:relative;overflow:hidden;padding:110px 0;background:linear-gradient(110deg,#102131,#0b151f 62%,#0c1117)}.consultation-inner{position:relative;display:flex;align-items:center;justify-content:space-between;gap:30px}.consultation h2{max-width:560px;margin:14px 0 0;font:600 clamp(2.5rem,5vw,4.6rem)/1 var(--display);letter-spacing:-.07em}.consultation p{max-width:410px;color:#aab8c7;line-height:1.65}.contact{padding-bottom:40px}.contact-grid{display:grid;grid-template-columns:1fr 1fr 1fr 1.3fr;gap:20px;padding:32px 0 48px;border-top:1px solid var(--line)}.contact-item span{display:block;margin-bottom:10px;color:var(--muted);font-size:.68rem;letter-spacing:.12em;text-transform:uppercase}.contact-item strong{display:block;font:500 1.02rem var(--display)}.contact-item p{margin:5px 0 0;color:#b1bdc9;font-size:.82rem;line-height:1.6}.footer{display:flex;justify-content:space-between;padding:20px 0;border-top:1px solid var(--line);color:#586574;font-size:.7rem}
.modal-backdrop{position:fixed;z-index:10;inset:0;display:grid;padding:20px;place-items:center;background:#010407d1;opacity:0;pointer-events:none;transition:.25s;backdrop-filter:blur(8px)}.modal-backdrop.open{opacity:1;pointer-events:auto}.modal{position:relative;width:min(570px,100%);max-height:92vh;overflow:auto;padding:35px;border:1px solid #ffffff24;background:#101820;transform:translateY(20px);transition:.25s}.modal-backdrop.open .modal{transform:translateY(0)}.modal h2{margin:8px 0;font:600 2rem var(--display);letter-spacing:-.05em}.modal-intro{margin:0 0 25px;color:var(--muted);font-size:.84rem;line-height:1.5}.modal-close{position:absolute;top:14px;right:14px;display:grid;width:34px;height:34px;place-items:center;border:1px solid var(--line);color:var(--muted);background:transparent}.form-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}.field{display:flex;flex-direction:column;gap:7px}.field.full{grid-column:1/-1}.field label{color:#b9c4d0;font-size:.72rem;font-weight:600}.field input,.field textarea{width:100%;border:1px solid var(--line);border-radius:2px;outline:0;padding:12px;color:var(--ink);background:#0a1016}.field input:focus,.field textarea:focus{border-color:var(--blue)}.field textarea{min-height:100px;resize:vertical}.form-submit{width:100%;margin-top:20px}.form-message{min-height:20px;margin:15px 0 0;color:var(--bright);font-size:.8rem;text-align:center}
@media(max-width:800px){.container{width:min(calc(100% - 32px),600px)}.nav-links,.nav-actions{display:none}.menu-toggle{display:block}.site-header.menu-open{background:#0a0f15}.site-header.menu-open .nav-links{position:absolute;top:78px;left:0;display:flex;flex-direction:column;width:100%;padding:22px 16px 28px;background:#0a0f15;border-bottom:1px solid var(--line)}.hero{min-height:720px;background-position:62% center}.hero h1{font-size:clamp(3.3rem,16vw,6rem)}.hero-meta{margin-top:60px}.section-heading{display:block;margin-bottom:30px}.section-heading p{margin-top:20px}.services,.work,.reviews,.contact{padding:80px 0}.service-grid{grid-template-columns:1fr 1fr}.work-grid{grid-template-columns:1fr 1fr;grid-template-rows:220px 180px}.work-image:first-child{grid-row:span 1;grid-column:span 2}.review-grid{grid-template-columns:1fr}.review-card blockquote{min-height:auto}.consultation-inner{display:block}.consultation .btn{margin-top:22px}.contact-grid{grid-template-columns:1fr 1fr}}@media(max-width:480px){.hero-meta{gap:20px}.meta-item strong{font-size:1.05rem}.meta-item span{font-size:.65rem}.service-grid{grid-template-columns:1fr}.service-card{min-height:255px}.work-grid{display:flex;flex-direction:column}.work-image,.work-image:first-child{min-height:210px}.contact-grid{grid-template-columns:1fr;gap:28px}.footer{display:block;line-height:1.7}.footer span{display:block}.modal{padding:28px 20px}.form-grid{grid-template-columns:1fr}.field.full{grid-column:auto}}
</style>
<header class="site-header" id="site-header">
	<nav class="nav container" aria-label="Main navigation">
		<a class="logo" href="#top" aria-label="Apex Motoring home">
			<span class="logo-mark">A</span>
			APEX MOTORING
		</a>
		<div class="nav-links">
			<a href="#services">Services</a>
			<a href="#work">Our work</a>
			<a href="#reviews">Reviews</a>
			<a href="#contact">Contact</a>
		</div>
		<div class="nav-actions">
			<button class="btn btn-primary book-trigger" type="button">Book a consultation</button>
		</div>
		<button class="menu-toggle" id="menu-toggle" type="button" aria-label="Open menu">
			${icon("<path d=\"M4 7h16M4 12h16M4 17h16\"/>")}
		</button>
	</nav>
</header>

<main id="top">
	<section class="hero">
		<div class="hero-content container">
			<span class="eyebrow">Independent automotive specialists</span>
			<h1>Driven by <span>the right</span> details.</h1>
			<p class="hero-copy">
				From finding your next car to keeping it at its best, we bring care, clarity and serious automotive knowledge to every mile.
			</p>
			<div class="hero-actions">
				<button class="btn btn-primary book-trigger" type="button">
					Book a consultation ${icon("<path d=\"M5 12h14m-6-6 6 6-6 6\"/>", "arrow")}
				</button>
				<a class="btn btn-ghost" href="#services">View our services</a>
			</div>
			<div class="hero-meta">
				<div class="meta-item"><strong>15+</strong><span>Years in the trade</span></div>
				<div class="meta-item"><strong>4.9 / 5</strong><span>Client satisfaction</span></div>
				<div class="meta-item"><strong>1:1</strong><span>Personal service</span></div>
			</div>
		</div>
		<div class="scroll-cue">Scroll to explore</div>
	</section>

	<section class="services" id="services">
		<div class="container">
			<div class="section-heading">
				<div>
					<span class="eyebrow">What we do</span>
					<h2>Good cars. Properly looked after.</h2>
				</div>
				<p>Whether you are buying, importing or maintaining, our advice stays straightforward and our standards stay high.</p>
			</div>
			<div class="service-grid">
				${services.map(renderServiceCard).join("")}
			</div>
		</div>
	</section>

	<section class="work" id="work">
		<div class="container">
			<div class="section-heading">
				<div>
					<span class="eyebrow">Selected work</span>
					<h2>Built around the drive.</h2>
				</div>
				<p>A glimpse at the vehicles, details and transformations that have passed through our doors.</p>
			</div>
			<div class="work-grid">
				<div class="work-image"><span class="image-label">Performance, refined</span></div>
				<div class="work-image"><span class="image-label">New arrivals</span></div>
				<div class="work-image"><span class="image-label">Daily legends</span></div>
				<div class="work-image"><span class="image-label">Workshop care</span></div>
			</div>
		</div>
	</section>

	<section class="reviews" id="reviews">
		<div class="container">
			<div class="section-heading">
				<div>
					<span class="eyebrow">Client words</span>
					<h2>Trust is part of the service.</h2>
				</div>
				<p>Our reputation is built one honest conversation and one well-kept car at a time.</p>
			</div>
			<div class="review-grid">
				${reviews.map(renderReviewCard).join("")}
			</div>
		</div>
	</section>

	<section class="consultation">
		<div class="consultation-inner container">
			<div>
				<span class="eyebrow">Start a conversation</span>
				<h2>Not sure where to start?</h2>
				<p>Bring us your questions, your shortlist or simply the idea of a better car experience. We will take it from there.</p>
			</div>
			<button class="btn btn-primary book-trigger" type="button">
				Book a consultation ${icon("<path d=\"M5 12h14m-6-6 6 6-6 6\"/>", "arrow")}
			</button>
		</div>
	</section>

	<section class="contact" id="contact">
		<div class="container">
			<div class="contact-grid">
				<div class="contact-item"><span>Call us</span><strong>020 7946 0821</strong></div>
				<div class="contact-item"><span>Email</span><strong>hello@apexmotoring.co.uk</strong></div>
				<div class="contact-item"><span>Find us</span><strong>18 North Wharf Road</strong><p>London, W2 1LA</p></div>
				<div class="contact-item"><span>Opening hours</span><strong>Mon - Fri, 8:30 - 18:00</strong><p>Saturday, 9:00 - 15:00 · Sunday, closed</p></div>
			</div>
			<footer class="footer">
				<span>© 2024 Apex Motoring. Independent automotive specialists.</span>
				<span>Made for the road ahead.</span>
			</footer>
		</div>
	</section>
</main>

<div class="modal-backdrop" id="booking-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
	<div class="modal">
		<button class="modal-close" id="modal-close" type="button" aria-label="Close booking form">
			${icon("<path d=\"M6 6l12 12M18 6 6 18\"/>")}
		</button>
		<span class="eyebrow">Private consultation</span>
		<h2 id="modal-title">Let's talk cars.</h2>
		<p class="modal-intro">Tell us a little about what you need and a member of our team will be in touch.</p>
		<form id="booking-form">
			<div class="form-grid">
				<div class="field">
					<label for="name">Name</label>
					<input id="name" name="name" required autocomplete="name" />
				</div>
				<div class="field">
					<label for="email">Email</label>
					<input id="email" name="email" type="email" required autocomplete="email" />
				</div>
				<div class="field">
					<label for="phone">Phone number</label>
					<input id="phone" name="phone" type="tel" required autocomplete="tel" />
				</div>
				<div class="field">
					<label for="date">Preferred date / time</label>
					<input id="date" name="date" type="datetime-local" required />
				</div>
				<div class="field full">
					<label for="reason">What would you like to discuss?</label>
					<textarea id="reason" name="reason" required placeholder="Tell us what you need help with..."></textarea>
				</div>
			</div>
			<button class="btn btn-primary form-submit" type="submit">
				Book consultation ${icon("<path d=\"M5 12h14m-6-6 6 6-6 6\"/>", "arrow")}
			</button>
			<p class="form-message" id="form-message" aria-live="polite"></p>
		</form>
	</div>
</div>`;

const header = document.querySelector("#site-header");
const menuToggle = document.querySelector("#menu-toggle");
const modal = document.querySelector("#booking-modal");
const bookingForm = document.querySelector("#booking-form");
const formMessage = document.querySelector("#form-message");
const modalCloseButton = document.querySelector("#modal-close");

const openModal = () => {
	modal.classList.add("open");
	document.body.classList.add("modal-open");
	document.querySelector("#name").focus();
};

const closeModal = () => {
	modal.classList.remove("open");
	document.body.classList.remove("modal-open");
};

document.querySelectorAll(".book-trigger").forEach((button) => {
	button.addEventListener("click", openModal);
});

modalCloseButton.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
	if (event.target === modal) {
		closeModal();
	}
});

document.addEventListener("keydown", (event) => {
	if (event.key === "Escape" && modal.classList.contains("open")) {
		closeModal();
	}
});

bookingForm.addEventListener("submit", (event) => {
	event.preventDefault();
	const name = new FormData(bookingForm).get("name");

	formMessage.textContent = `Thanks, ${name}. We will be in touch shortly.`;
	bookingForm.reset();
});

menuToggle.addEventListener("click", () => {
	const isOpen = header.classList.toggle("menu-open");
	menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
	link.addEventListener("click", () => header.classList.remove("menu-open"));
});
