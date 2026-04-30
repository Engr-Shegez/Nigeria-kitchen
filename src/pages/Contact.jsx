import { useState } from "react";
import ReservationForm from "../components/ReservationForm";
import Reveal from "../components/Reveal";

const Contact = () => {
  const [sent, setSent] = useState(false);

  const submitMessage = (event) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <>
      <section className="page-hero compact-hero">
        <div className="container section-heading">
          <Reveal>
            <p className="eyebrow">Contact</p>
            <h1>Visit, call, or reserve</h1>
            <p>
              Reach the Lekki kitchen for reservations, catering questions, order
              support, and private dining requests.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section contact-page">
        <div className="container contact-layout">
          <Reveal className="contact-info">
            <h2>Savage Kitchen Lekki</h2>
            <p>18 Admiralty Way, Lekki Phase 1, Lagos</p>
            <a href="tel:+2348125550188">+234 812 555 0188</a>
            <a href="mailto:hello@savagekitchen.ng">hello@savagekitchen.ng</a>
            <div className="hours-card inline-card">
              <h3>Opening Hours</h3>
              <p>Mon-Thu: 11:00 AM - 10:00 PM</p>
              <p>Fri-Sat: 11:00 AM - 11:30 PM</p>
              <p>Sun: 12:00 PM - 9:00 PM</p>
            </div>
          </Reveal>

          <Reveal className="checkout-card" delay={100}>
            <h2>Send a Message</h2>
            {sent && (
              <p className="form-success" role="status">
                Message received. We will reply shortly.
              </p>
            )}
            <form className="stacked-form" onSubmit={submitMessage}>
              <label>
                <span>Name</span>
                <input type="text" name="name" placeholder="Your name" required />
              </label>
              <label>
                <span>Email</span>
                <input type="email" name="email" placeholder="you@example.com" required />
              </label>
              <label>
                <span>Message</span>
                <textarea name="message" rows="5" placeholder="How can we help?" required />
              </label>
              <button className="btn btn-primary" type="submit">
                Send Message
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container reservation-panel">
          <Reveal>
            <p className="eyebrow">Reserve</p>
            <h2>Plan your visit</h2>
            <p>Pick a date and time for dine-in, and we will confirm availability shortly.</p>
          </Reveal>
          <Reveal delay={100}>
            <ReservationForm />
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Contact;
