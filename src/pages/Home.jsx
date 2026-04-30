import { Link } from "react-router";
import MenuCard from "../components/MenuCard";
import ReservationForm from "../components/ReservationForm";
import Reveal from "../components/Reveal";
import { featuredDishes } from "../data/dishes";
import egusi from "../assets/egusi.png";
import rice from "../assets/rice.jpg";
import seafood from "../assets/seafood.jpg";

const Home = () => {
  const testimonials = [
    {
      name: "Tomi A.",
      text: "The jollof tastes like a proper Lagos party, but the service feels calm and polished.",
    },
    {
      name: "Nneka O.",
      text: "Best afang I have had outside Calabar. The order flow was quick and the packaging was neat.",
    },
    {
      name: "Femi B.",
      text: "A rare restaurant site where booking, ordering, and checking hours are all easy on mobile.",
    },
  ];

  return (
    <>
      <section className="hero-section">
        <div className="container hero-grid">
          <Reveal className="hero-copy">
            <p className="eyebrow">Lagos comfort, plated with care</p>
            <h1>Savage Kitchen</h1>
            <p>
              Premium Nigerian meals for dine-in, pickup, and delivery, built around
              smoky rice, rich soups, tender proteins, and drinks that taste like home.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/menu">
                Order Now
              </Link>
              <a className="btn btn-secondary" href="#reservation">
                Book a Table
              </a>
            </div>
          </Reveal>

          <Reveal className="hero-visual" delay={120}>
            <img className="hero-main-image" src={rice} alt="A plate of Nigerian jollof rice" />
            <div className="hero-floating-card top-card">
              <span>Today</span>
              <strong>Chef's smoky jollof</strong>
            </div>
            <div className="hero-floating-card bottom-card">
              <span>Pickup ready</span>
              <strong>25-35 min</strong>
            </div>
            <img className="hero-side-image" src={egusi} alt="Egusi soup with assorted protein" />
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container section-heading">
          <Reveal>
            <p className="eyebrow">Chef Specials</p>
            <h2>Made for cravings, not just clicks</h2>
            <p>
              A short list of guest favourites, balanced for flavour, texture, and a
              proper Nigerian table.
            </p>
          </Reveal>
        </div>
        <div className="container menu-grid featured-grid">
          {featuredDishes.map((dish, index) => (
            <Reveal key={dish.id} delay={index * 80}>
              <MenuCard dish={dish} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section split-section">
        <div className="container split-grid">
          <Reveal>
            <img className="story-image" src={seafood} alt="Grilled Nigerian seafood platter" />
          </Reveal>
          <Reveal className="story-copy" delay={100}>
            <p className="eyebrow">The Experience</p>
            <h2>Warm hospitality, sharper digital flow</h2>
            <p>
              Browse by category, search quickly, build your order without losing
              your place, or reserve a table in under a minute.
            </p>
            <div className="feature-list">
              <span>Fresh batches daily</span>
              <span>Mobile-first ordering</span>
              <span>Indoor dining and pickup</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="reservation">
        <div className="container reservation-panel">
          <Reveal>
            <p className="eyebrow">Reservations</p>
            <h2>Save your table before the pepper soup sells out</h2>
            <p>
              Choose a date, time, and party size. We will hold your request and
              confirm availability shortly.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <ReservationForm />
          </Reveal>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container section-heading">
          <Reveal>
            <p className="eyebrow">Guests</p>
            <h2>People come back for the feeling</h2>
          </Reveal>
        </div>
        <div className="container testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <Reveal className="testimonial-card" key={testimonial.name} delay={index * 90}>
              <p>“{testimonial.text}”</p>
              <strong>{testimonial.name}</strong>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section contact-band">
        <div className="container contact-grid">
          <Reveal>
            <p className="eyebrow">Location</p>
            <h2>Lekki Phase 1, Lagos</h2>
            <p>18 Admiralty Way. Delivery covers Lekki, VI, Ikoyi, Oniru, and nearby areas.</p>
          </Reveal>
          <Reveal className="hours-card" delay={100}>
            <h3>Opening Hours</h3>
            <p>Mon-Thu: 11:00 AM - 10:00 PM</p>
            <p>Fri-Sat: 11:00 AM - 11:30 PM</p>
            <p>Sun: 12:00 PM - 9:00 PM</p>
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default Home;
