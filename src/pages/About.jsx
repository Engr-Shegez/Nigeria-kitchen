import { Link } from "react-router";
import Reveal from "../components/Reveal";
import Amala from "../assets/Amala.jpg";
import chicken from "../assets/chicken.jpg";

const About = () => {
  const values = [
    "Recipes grounded in Nigerian kitchens",
    "Measured spice, heat, and texture",
    "Transparent ordering and reservation flows",
    "Hospitality that works on mobile and in person",
  ];

  return (
    <>
      <section className="page-hero compact-hero">
        <div className="container section-heading">
          <Reveal>
            <p className="eyebrow">Our Story</p>
            <h1>Food with memory, service with polish</h1>
            <p>
              Savage Kitchen celebrates Nigerian food without making guests work hard
              for the experience.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section split-section">
        <div className="container split-grid">
          <Reveal className="story-copy">
            <p className="eyebrow">Kitchen Point Of View</p>
            <h2>Traditional flavour, modern pace</h2>
            <p>
              We cook the staples people crave: smoky rice, resilient swallows, rich
              soups, peppered proteins, street snacks, and cold drinks. The goal is
              simple: make the food feel familiar, then make every touchpoint easier.
            </p>
            <div className="feature-list">
              {values.map((value) => (
                <span key={value}>{value}</span>
              ))}
            </div>
            <Link className="btn btn-primary" to="/menu">
              Explore Menu
            </Link>
          </Reveal>
          <Reveal className="image-pair" delay={100}>
            <img src={Amala} alt="Amala meal" />
            <img src={chicken} alt="Peppered chicken" />
          </Reveal>
        </div>
      </section>
    </>
  );
};

export default About;
