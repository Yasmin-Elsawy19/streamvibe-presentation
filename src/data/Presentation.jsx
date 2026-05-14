import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const slides = [
  {
    id: "title",
    title: "StreamVibe",
    subtitle: "Modern OTT Streaming Platform",
    aos: "fade-right",

    content: (
      <>
        <h3>Team Members</h3>

        <ul>
          <li>Yasmin Elsawy</li>
          <li>Sohaila Adel</li>
          <li>Nada Ali</li>
          <li>Ahmed Mohamed</li>
        </ul>
      </>
    ),
  },

  {
    id: "overview",
    title: "Project Overview",
    subtitle: "Idea & Goals",
    aos: "fade-left",

    content: (
      <>
        <p>
          StreamVibe is a modern OTT streaming platform inspired by
          Netflix and Disney+, designed to deliver a smooth and
          interactive movie browsing experience.
        </p>

        <ul>
          <li>Build a responsive modern UI</li>
          <li>Integrate real APIs</li>
          <li>Enhance user experience</li>
          <li>Simulate real team workflow</li>
          <li>Create reusable components</li>
        </ul>
      </>
    ),
  },

  {
    id: "technologies",
    title: "Technologies & Tools",
    aos: "fade-right",

    content: (
      <>
        <h4>Front-End</h4>

        <ul>
          <li>React.js</li>
          <li>JavaScript ES6+</li>
          <li>CSS3</li>
          <li>Flexbox & CSS Grid</li>
          <li>Media Queries</li>
        </ul>

        <h4>Libraries & Tools</h4>

        <ul>
          <li>Axios</li>
          <li>React Router DOM</li>
          <li>Framer Motion</li>
          <li>LocalStorage</li>
          <li>Git & GitHub</li>
        </ul>

        <h4>APIs</h4>

        <ul>
          <li>IMDb API</li>
          <li>DummyJSON API</li>
        </ul>
      </>
    ),
  },

  {
    id: "challenges",
    title: "Challenges Faced",
    aos: "fade-left",

    content: (
      <>
        <ul>
          <li>Handling API errors and empty states</li>
          <li>Ensuring full responsiveness across devices</li>
          <li>Managing complex animations with Framer Motion</li>
          <li>Organizing code structure for scalability</li>
          <li>Maintaining clean Git workflow</li>
        </ul>
      </>
    ),
  },

  {
    id: "learnings",
    title: "Key Learnings",
    aos: "fade-right",

    content: (
      <>
        <ul>
          <li>Improved React.js and component reusability</li>
          <li>Better API integration and data handling</li>
          <li>Enhanced UI/UX with animations</li>
          <li>Responsive design with CSS Grid/Flexbox</li>
          <li>Team collaboration and workflow simulation</li>
        </ul>
      </>
    ),
  },

  {
    id: "future",
    title: "Future Enhancements",
    aos: "fade-left",

    content: (
      <>
        <ul>
          <li>Personalized recommendations using AI</li>
          <li>Social features (sharing lists, ratings)</li>
          <li>Multi-language & accessibility improvements</li>
          <li>Performance optimization</li>
        </ul>
      </>
    ),
  },

  {
    id: "demo",
    title: "Live Demo",
    aos: "zoom-in",

    content: (
      <>
        <p>During the demo we will showcase:</p>

        <ul>
          <li>Home Page navigation</li>
          <li>Search functionality</li>
          <li>Movies & TV Shows browsing</li>
          <li>Movie Details with Trailer Modal</li>
          <li>Watchlist using LocalStorage</li>
          <li>Support Page with interactive form</li>
          <li>Responsive design across devices</li>
        </ul>

        <p>
          🔗 Live Demo Link:
        </p>

        <a
          href="https://stream-vibe-app.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="demo-btn"
        >
          Open Live Demo
        </a>
      </>
    ),
  },

  {
    id: "conclusion",
    title: "Conclusion",
    aos: "fade-up",

    content: (
      <>
        <p>
          This project helped us simulate a real-world workflow,
          improve our front-end development skills, and strengthen
          our teamwork.
        </p>

        <h3>Thank You 🎬</h3>
      </>
    ),
  },
];

export default function Presentation() {

  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: false,
      easing: "ease-in-out",
      offset: 120,
    });
  }, []);

  return (
    <div className="app">

      {/* Navbar */}

      <nav className="navbar">
        <div className="logo">StreamVibe</div>

        <div className="nav-links">
          <a href="#overview">Overview</a>
          <a href="#technologies">Tech</a>
          <a href="#demo">Demo</a>
          <a href="#conclusion">Conclusion</a>
        </div>
      </nav>

      {/* Hero */}

     <header className="hero">
  <div className="hero-content" data-aos="zoom-out">
    <h1>StreamVibe</h1>
    <h3>Modern OTT Streaming Platform</h3>
    <p>
      Graduation project showcasing responsive design,
      API integration, and interactive user experience.
    </p>

    <a href="#overview" className="hero-btn">
      Start Presentation
    </a>
  </div>
</header>


      {/* Slides */}

      {slides.map((slide) => (
        <section
          key={slide.id}
          id={slide.id}
          className="slide-section"
        >
          <div
            className="slide-card"
            data-aos={slide.aos}
          >
            <h1>{slide.title}</h1>

            {slide.subtitle && (
              <h3>{slide.subtitle}</h3>
            )}

            {slide.content}
          </div>
        </section>
      ))}
      {/* FOOTER */}
<footer className="footer">

  <div className="footer-content">

    <h1 className="footer-logo">
      StreamVibe
    </h1>

    <p className="footer-subtitle">
      Designed & Developed by Yasmin Elsawy
    </p>

    <div className="footer-links">
      <a href="#overview">Overview</a>
      <a href="#technologies">Technologies</a>
      <a href="#demo">Demo</a>
      <a href="#conclusion">Conclusion</a>
    </div>

    <div className="footer-bottom">
      © 2026 Yasmin Elsawy — Graduation Project Presentation
    </div>

  </div>

</footer>

    </div>
  );
}