import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import emailjs from "@emailjs/browser";
import "./styles.css";
import img1 from "../img1.PNG";
import img2 from "../img2.PNG";
import image3 from "../image3.png";
import image4 from "../image 4.PNG";
import image5 from "../image5.PNG";
import image7 from "../image 7.jpg";

const EMAILJS_SERVICE_ID = "service_fs72dps";
const EMAILJS_TEMPLATE_ID = "template_kgtja1m";
const EMAILJS_PUBLIC_KEY = "rHjsKLtcNSoyW02Si";

const services = [
  { id: "01", title: "Car Sales", text: "Hand-picked cars, prepared properly and ready for the next chapter.", mark: "SALE" },
  { id: "02", title: "Car Sourcing", text: "Your brief, our network. We find the right car without the usual noise.", mark: "FIND" },
  { id: "03", title: "Car Imports", text: "A smooth route from overseas discovery to your driveway.", mark: "IMPORT" },
  { id: "04", title: "Mechanic & Servicing", text: "Straight answers, skilled hands, and care that keeps you moving.", mark: "CARE" }
];

const reviews = [
  { quote: "A genuinely refreshing buying experience. Clear advice, no pressure and the car was exactly as described.", name: "Daniel R.", type: "Vehicle sourcing client" },
  { quote: "The team handled every detail of my import and kept me updated throughout. I could not be happier with the result.", name: "Maya T.", type: "Mechanic & Servicing client" },
  { quote: "Honest mechanics who take the time to explain things properly. My go-to garage from now on.", name: "Oliver K.", type: "Mechanic & Servicing client" }
];

const gallery = [
  { id: "workshop-1", label: "auto sourcing", className: "gallery-main", image: img1 },
  { id: "workshop-2", label: "auto sourcing", className: "gallery-arrivals", image: img2 },
  { id: "workshop-3", label: "mechanic & servicing", className: "gallery-workshop", image: image3 },
  { id: "workshop-4", label: "mechanic & servicing", className: "gallery-daily", image: image4 },
  { id: "workshop-5", label: "mechanic & servicing", className: "gallery-detail", image: image5 }
];

function Arrow() {
  return <span className="action-mark" aria-hidden="true" />;
}

function Logo() {
  return <a className="logo" href="#top" aria-label="Aldachan Autos home"><span className="logo-badge">A</span><span>ALDACHAN<span className="logo-accent">/</span>AUTOS</span></a>;
}

function Button({ children, onClick, secondary = false, type = "button", disabled = false }) {
  return <button className={`button ${secondary ? "button-secondary" : ""}`} type={type} onClick={onClick} disabled={disabled}>{children}</button>;
}

function ConsultationModal({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const formData = new FormData(event.currentTarget);
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        date: formData.get("date"),
        reason: formData.get("reason"),
        to_email: "arturpietri0910@gmail.com"
      }, EMAILJS_PUBLIC_KEY);

      setSubmitted(true);
    } catch {
      setError("We could not send your request. Please check the form template and try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function closeModal() {
    setSubmitted(false);
    setError("");
    onClose();
  }

  if (!open) return null;

  return <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && closeModal()}>
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <button className="modal-close" type="button" onClick={closeModal} aria-label="Close consultation form"><span aria-hidden="true" /></button>
      {submitted ? <div className="success-state"><span className="success-mark" aria-hidden="true" /><p className="kicker">Request received</p><h2>We&apos;ll be in touch.</h2><p>Thanks for reaching out. Our team will review your details and get back to you shortly.</p><Button onClick={closeModal}>Back to the page <Arrow /></Button></div> : <>
        <p className="kicker">Private consultation</p>
        <h2 id="modal-title">Let&apos;s talk cars.</h2>
        <p className="modal-intro">Bring us your questions, your shortlist, or simply the idea of a better car experience.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <label>Name<input name="name" required autoComplete="name" /></label>
            <label>Email<input name="email" type="email" required autoComplete="email" /></label>
            <label>Phone number<input name="phone" type="tel" required autoComplete="tel" /></label>
            <label>Preferred date / time<input name="date" type="datetime-local" required /></label>
            <label className="form-wide">What would you like to discuss?<textarea name="reason" required placeholder="Tell us what you need help with..." /></label>
          </div>
          {error && <p className="form-error" role="alert">{error}</p>}
          <Button type="submit" disabled={submitting}>{submitting ? "Sending request..." : <>Get in touch <Arrow /></>}</Button>
        </form>
      </>}
    </div>
  </div>;
}

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const openConsultation = () => {
    setMenuOpen(false);
    setModalOpen(true);
  };

  return <>
    <header className={`site-header ${menuOpen ? "menu-open" : ""}`}>
      <nav className="nav shell" aria-label="Main navigation">
        <Logo />
        <div className="nav-links">
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Our work</a>
          <a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
        <Button onClick={openConsultation}>Get in touch <Arrow /></Button>
        <button className="menu-toggle" type="button" aria-label="Toggle menu" onClick={() => setMenuOpen((isOpen) => !isOpen)}><span className="menu-icon" aria-hidden="true" /></button>
      </nav>
    </header>

    <main id="top">
      <section className="hero">
        <div className="hero-image" style={{ "--hero-image": `url(${image7})` }} />
        <div className="hero-content shell">
          <p className="kicker">Independent automotive specialists <span className="pulse-dot" /></p>
          <h1>Cars with<br /><em>character.</em></h1>
          <p className="hero-copy">From finding your next car to keeping it at its best, we bring care, clarity and serious automotive knowledge to every mile, ensuring customer satisfaction.</p>
          <div className="hero-actions"><Button onClick={openConsultation}>Get in touch <Arrow /></Button><a className="text-link" href="#services">Explore services <Arrow /></a></div>
          <div className="hero-stats"><div><strong>5<span>+</span></strong><small>Years in the trade</small></div><div><strong>4.7<span>/5</span></strong><small>Client satisfaction</small></div><div><strong>1 <span>on 1</span></strong><small>Personal service</small></div></div>
        </div>
        <div className="hero-tag">BMW / 4 SERIES <span>01 — 04</span></div>
      </section>

      <section className="services section shell" id="services">
        <div className="section-intro"><div><p className="kicker">01 / What we do</p><h2>Good cars.<br /><em>Properly looked after.</em></h2></div><p>Whether you are buying, importing or maintaining, our advice stays straightforward and our standards stay high.</p></div>
        <div className="service-grid">{services.map((service) => <article className="service-card" key={service.id}><span className="service-id">{service.id}</span><span className="service-mark">{service.mark}</span><h3>{service.title}</h3><p>{service.text}</p><span className="card-link">Learn more <Arrow /></span></article>)}</div>
      </section>

      <section className="work section shell" id="work">
        <div className="section-intro"><div><p className="kicker">02 / Selected work</p><h2>Built around<br /><em>the drive.</em></h2></div><p>A glimpse at the vehicles, details and transformations that have passed through our doors.</p></div>
        <div className="gallery-grid">{gallery.map((item) => <figure className={`gallery-item ${item.className}`} key={item.id ?? item.label} style={{ backgroundImage: `url(${item.image})` }}><figcaption><span>{item.label}</span><Arrow /></figcaption></figure>)}</div>
      </section>

      <section className="reviews section" id="reviews"><div className="shell"><div className="section-intro"><div><p className="kicker">03 / Client words</p><h2>Trust is part<br />of <em>the service.</em></h2></div><p>Our reputation is built one honest conversation and one well-kept car at a time.</p></div><div className="review-grid">{reviews.map((review) => <article className="review-card" key={review.name}><div className="stars" aria-label="5 out of 5 stars"><span /><span /><span /><span /><span /></div><blockquote>“{review.quote}”</blockquote><strong>{review.name}</strong><small>{review.type}</small></article>)}</div></div></section>

      <section className="cta"><div className="shell cta-inner"><div><p className="kicker">04 / Start a conversation</p><h2>Not sure<br /><em>where to start?</em></h2></div><div><p>Bring us your questions, your shortlist or simply the idea of a better car experience. We&apos;ll take it from there.</p><Button onClick={openConsultation}>Get in touch <Arrow /></Button></div></div></section>

      <section className="contact section shell" id="contact"><div className="contact-grid"><div><span>Call us</span><strong>020 7946 0821</strong></div><div><span>Email</span><strong>hello@apexmotoring.co.uk</strong></div><a className="instagram-link" href="https://www.instagram.com/cflipzd15/?hl=en" target="_blank" rel="noreferrer"><span>Instagram</span><strong>@cflipzd15</strong></a></div><footer><span>© 2024 Apex Motoring</span><span>Made for the road ahead.</span></footer></section>
    </main>
    <span className="watermark" aria-hidden="true">AP &amp; Sons Digital Solutions</span>
    <button className="back-to-top" type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Back to top</button>
    <ConsultationModal open={modalOpen} onClose={() => setModalOpen(false)} />
  </>;
}

createRoot(document.getElementById("app")).render(<App />);