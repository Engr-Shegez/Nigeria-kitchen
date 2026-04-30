import { Link } from "react-router";

const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-grid">
      <div>
        <Link to="/" className="brand-mark footer-brand">
          <span>SK</span>
          <strong>Savage Kitchen</strong>
        </Link>
        <p>
          Nigerian comfort food with careful sourcing, warm service, and plates
          designed for sharing.
        </p>
      </div>

      <nav aria-label="Footer navigation">
        <h3>Explore</h3>
        <Link to="/menu">Menu</Link>
        <Link to="/order">Order</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div>
        <h3>Visit</h3>
        <p>18 Admiralty Way, Lekki Phase 1, Lagos</p>
        <p>hello@savagekitchen.ng</p>
        <p>+234 812 555 0188</p>
      </div>

      <div>
        <h3>Hours</h3>
        <p>Mon-Thu: 11:00 AM - 10:00 PM</p>
        <p>Fri-Sat: 11:00 AM - 11:30 PM</p>
        <p>Sun: 12:00 PM - 9:00 PM</p>
      </div>
    </div>
  </footer>
);

export default Footer;
