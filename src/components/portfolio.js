import React, { useState } from "react";
import profilePic from "../images/img1.svg";
import logo from "../images/img2.svg";
import project1 from "../images/project1.svg";
import project2 from "../images/project2.svg";
import project3 from "../images/project3.svg";
import project4 from "../images/project4.svg";

import {
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const ContactCard = ({ icon, title, detail }) => {
    return (
      <div className="contact-card">
        <div className="icon-box">{icon}</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "justify",
          }}
        >
          <p className="contact-label">{title}</p>
          <p className="contact-detail">{detail}</p>
        </div>
      </div>
    );
  };

  const brands = [
    {
      name: "App It Eat",
      category: "Brand Identity & Strategy",
      description:
        "Built a strong brand identity and digital marketing strategy, resulting in increased customer engagement, brand awareness, and online traction.",
      image: project1,
    },
    {
      name: "Theyyam Restaurant Leeds",
      category: "Rebranding & Social Media Marketing",
      description:
        "Rebranded this South Indian cloud kitchen and executed a social media strategy that turned it from a hidden gem into a must-try destination for authentic flavors.",
      image: project4,
    },
    {
      name: "Foodle",
      category: "Brand Identity & Social Media Marketing",
      description:
        "Launched a brand that made waves in the food industry, creating a distinct identity and social media buzz that attracted a loyal audience.",
      image: project3,
    },
    {
      name: "Smart Students Services UK",
      category: "Brand Identity & Social Media Marketing",
      description:
        "Developed a brand identity and marketing strategy to connect with students globally, making academic and professional services more accessible.",
      image: project2,
    },
  ];

  return (
    <div className="portfolio-container">
      <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        {/* <h2 className="logo">GOPIKA GOPAKUMAR</h2> */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#about-me">About Us</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#our-works">Our Works</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          {/* <li>
            <a href="#certificates">Certificates</a>
          </li> */}
          {/* <li>
            <a href="/resume.pdf" download="resume.pdf">
              Get Resume
            </a>
          </li> */}
        </ul>
      </nav>
      <div className="hero-section">
        <div className="hero-text">
          <h1>Hey, We're House of Concept</h1>
          <p
            style={{
              lineHeight: "24px",
              letterSpacing: "1px",
            }}
          >
            You’ve got a great idea. We make sure the world sees it, loves it,
            and remembers it. HOC is a creative agency that crafts bold
            branding, scroll-stopping content, and marketing strategies that
            actually work. We don’t do generic. We do game-changing.
          </p>
          <div className="social-links">
            {/* <a
              href="https://www.linkedin.com/in/gopika-gopakumar-0646a2225"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a> */}
            {/* <a
              href="https://github.com/gopikacreate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a> */}
            <a
              href="https://www.instagram.com/house.ofconcept?igsh=OTVhZ3Z5YTJjdWp1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            {/* <a
              href="https://www.facebook.com/blahblah018"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a> */}
            {/* <a
              href="https://open.spotify.com/user/31gom7kko2het6yskmro2kdpvhja?si=8Ppx-L3iR5q3e1xLD8Z1ng"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSpotify />
            </a> */}
          </div>
        </div>
      </div>

      <section id="about-me" className="about-section">
        <img src={profilePic} alt="Gopika Gopakumar" className="about-avatar" />
        <h2>About Us</h2>
        <p>
          We believe marketing should feel less like marketing and more like an
          experience. That’s why we craft brands that resonate,
          <br /> campaigns that convert, and content that sticks. Whether it’s a
          startup finding its voice or a brand looking for a glow-up, we bring{" "}
          <br /> the strategy, creativity, and execution to make it happen.{" "}
          <br />
          Our journey? It started with a love for design and storytelling. Now,
          we’re the creative minds behind brand identities, social media <br />
          strategies, ad campaigns, and killer content. We don't just market—we
          make people care.
          <br /> When we're not busy building brands, we're probably deep in a
          rabbit hole of design inspo, testing the latest marketing hacks, or{" "}
          <br />
          sipping coffee (lots of coffee).
          <br />{" "}
        </p>
        <p>
          {" "}
          House of Concept (HOC) is a creative agency specializing in branding,
          content creation, and digital marketing. We help
          <br /> businesses tell their stories through design, strategy, and
          innovation, ensuring they stand out in a crowded marketplace. Whether
          <br />
          it’s crafting a compelling brand identity, designing eye-catching
          visuals, or running data-driven campaigns, we’re all about
          <br /> making an impact.
        </p>
      </section>

      <section id="services" className="skills-section">
        <h2
          style={{
            marginBottom: "30px",
          }}
        >
          What We Do Best
        </h2>
        <div className="skills-categories">
          <div className="skills-content">
            <div className="skills-category">Social Media Management</div>
            <div className="skills-category">Brand Strategy & Development</div>
            <div className="skills-category">Brand Identity Design</div>
            <div className="skills-category">Content Creation</div>
            <div className="skills-category">Video Production & Ads</div>
            <div className="skills-category">Portfolio Design</div>
            <div className="skills-category">Pitch Development</div>
            <div className="skills-category">Influencer Marketing</div>
          </div>
          <h3
            style={{
              marginTop: "60px",
              marginBottom: "30px",
            }}
          >
            Also in Our Toolbox
          </h3>
          <div className="skills-content">
            <div className="tools-category">Ad Production & Strategy</div>
            <div className="tools-category">Copywriting & Storytelling</div>
            <div className="tools-category">Creative Consulting</div>
          </div>
        </div>
        <div className="soft-skills-section">
          <h3
            style={{
              color: "white",
              marginTop: "40px",
              marginBottom: "25px",
            }}
          >
            Soft skills we take seriously when hiring
          </h3>
          <ul className="soft-skills-list">
            <li
              style={{
                marginBottom: "10px",
              }}
            >
              Communication (we actually listen)
            </li>
            <li
              style={{
                marginBottom: "10px",
              }}
            >
              Creative Problem-Solving (we thrive on challenges)
            </li>
            <li
              style={{
                marginBottom: "10px",
              }}
            >
              Time Management (because deadlines are sacred)
            </li>
            <li
              style={{
                marginBottom: "10px",
              }}
            >
              Strategic Thinking (no fluff, just results)
            </li>
          </ul>
        </div>
      </section>

      <section id="our-works" className="brands-section">
        {/* Title */}
        <h2 className="section-title">Brands We've Worked With</h2>

        {/* Brands List */}
        <div className="brands-list">
          {brands.map((brand, index) => (
            <div key={index} className="brand-item">
              <img src={brand.image} alt={brand.name} className="brand-image" />
              <div className="brand-info">
                <h3 className="brand-name">{brand.name}</h3>
                <p className="brand-category">{brand.category}</p>
                <p className="brand-description">{brand.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-container">
        <h3 className="contact-heading">Contact</h3>
        <h2 className="contact-title">
          Let’s Discuss Your <span>Project</span>
        </h2>
        <p className="contact-description">
          Let’s make something new, different, and more
          <br />
          meaningful or make things more visual or conceptual.
        </p>

        <div className="contact-content">
          {/* Left Side - Contact Info */}
          <div className="contact-info">
            <ContactCard
              icon={<FaPhoneAlt />}
              title="Call me"
              detail="+8801613968687"
            />
            <ContactCard
              icon={<FaEnvelope />}
              title="Email me"
              detail="ahmedtanvir8687@gmail.com"
            />
            <ContactCard
              icon={<FaMapMarkerAlt />}
              title="Address"
              detail="Zakigonj,Sylhet,Bangladesh."
            />
          </div>

          {/* Right Side - Form */}
          <div className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Full name" />
              <input type="email" placeholder="Your email" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Phone number" />
              <input type="text" placeholder="Budget" />
            </div>
            <textarea placeholder="Message"></textarea>
            <button className="submit-btn">Submit Message</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} House of concepts. All rights reserved.
        </p>
        <div className="scroll-top" onClick={scrollToTop}>
          Back to Top
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
