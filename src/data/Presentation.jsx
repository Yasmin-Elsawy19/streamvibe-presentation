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
          <li>Mohamed Ahmed</li>
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
          <li>AOS Animation Library</li>
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
    id: "structure",
    title: "Project Structure",
    subtitle: "Clean Architecture & Organization",
    aos: "fade-left",

    content: (
      <>
        <p>
          We organized the project using a scalable and maintainable
          structure to improve code readability, reusability, and
          teamwork workflow.
        </p>

        <div className="structure-box">
          <div className="folder">

            <h4>📁 src/</h4>

            <ul>
              <li>assets/ → Images & static files</li>

              <li>
                components/ → Reusable UI components
              </li>

              <li>
                common/ → Shared reusable components
              </li>

              <li>
                details/ → Details page components
              </li>

              <li>
                utils/ → Watchlist & helper functions
              </li>

              <li>
                pages/ → Main application pages
              </li>

              <li>
                services/ → API requests & Axios setup
              </li>

              <li>
                styles/ → CSS files & responsive styling
              </li>
            </ul>
          </div>
        </div>

        <h4 style={{ marginTop: "30px" }}>
          Why This Structure?
        </h4>

        <ul>
          <li>Improves scalability</li>
          <li>Enhances code organization</li>
          <li>Supports component reusability</li>
          <li>Separates responsibilities clearly</li>
          <li>Makes teamwork easier</li>
        </ul>
      </>
    ),
  },

  {
    id: "routing",
    title: "Routing & Navigation",
    subtitle: "Dynamic Navigation with React Router",
    aos: "fade-right",

    content: (
      <>
        <p>
          We used React Router DOM to create dynamic navigation
          between pages without reloading the application.
        </p>

        <ul>
          <li>Home Page</li>
          <li>Movies Page</li>
          <li>TV Shows Page</li>
          <li>Movie Details Page</li>
          <li>TV Show Details Page</li>
          <li>Support Page</li>
        </ul>

        <h4>Dynamic Routes</h4>

        <ul>
          <li>/movie/:id</li>
          <li>/tv/:id</li>
        </ul>

        <p>
          We also used useParams() to fetch dynamic IDs
          from the URL and load the correct movie or TV show details.
        </p>
      </>
    ),
  },

  {
    id: "features",
    title: "Core Features",
    subtitle: "Interactive User Experience",
    aos: "fade-left",

    content: (
      <>
        <ul>
          <li>Dynamic Movies & TV Shows Fetching</li>
          <li>Search Functionality</li>
          <li>Trailer Modal Integration</li>
          <li>Watchlist using LocalStorage</li>
          <li>Responsive Design</li>
          <li>Accordion FAQ System</li>
          <li>Custom Country Dropdown</li>
          <li>Skeleton Loading</li>
          <li>Hover Effects & Smooth Animations</li>
        </ul>
      </>
    ),
  },

  {
    id: "uiux",
    title: "UI / UX Design",
    subtitle: "Modern Streaming Experience",
    aos: "fade-right",

    content: (
      <>
        <p>
          The UI was inspired by modern OTT platforms like
          Netflix and Disney+ to create a premium cinematic experience.
        </p>

        <ul>
          <li>Dark Modern Theme</li>
          <li>Glassmorphism Effects</li>
          <li>Smooth Navigation</li>
          <li>Interactive Components</li>
          <li>Fully Responsive Layout</li>
          <li>Consistent Typography & Spacing</li>
        </ul>
      </>
    ),
  },

  {
    id: "teamwork",
    title: "Teamwork & Workflow",
    subtitle: "Real Development Workflow",
    aos: "fade-left",

    content: (
      <>
        <p>
          We worked as a real development team using GitHub workflow
          and task distribution.
        </p>

        <ul>
          <li>Task Distribution Between Team Members</li>
          <li>Feature Branches</li>
          <li>Pull Requests</li>
          <li>Git Commits</li>
          <li>Project Collaboration</li>
          <li>Code Organization & Reviews</li>
        </ul>
      </>
    ),
  },

  {
    id: "challenges",
    title: "Challenges Faced",
    aos: "fade-right",

    content: (
      <>
        <ul>
          <li>Handling API errors and empty states</li>
          <li>Ensuring full responsiveness across devices</li>
          <li>Managing animations with Framer Motion</li>
          <li>Organizing scalable project structure</li>
          <li>Maintaining clean Git workflow</li>
        </ul>
      </>
    ),
  },

  {
    id: "learnings",
    title: "Key Learnings",
    aos: "fade-left",

    content: (
      <>
        <ul>
          <li>Improved React.js skills</li>
          <li>Better API Integration</li>
          <li>Advanced UI/UX Design</li>
          <li>Component Reusability</li>
          <li>Responsive Web Design</li>
          <li>Team Collaboration</li>
        </ul>
      </>
    ),
  },

  {
    id: "future",
    title: "Future Enhancements",
    aos: "fade-right",

    content: (
      <>
        <ul>
          <li>AI-based Recommendations</li>
          <li>User Authentication System</li>
          <li>Advanced Filtering</li>
          <li>Multi-language Support</li>
          <li>Performance Optimization</li>
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

        <a
          href="https://stream-vibe-beta.vercel.app/"
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

        <p>
          StreamVibe represents a complete OTT streaming experience
          built using modern front-end technologies and best practices.
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

        <div className="logo">
          StreamVibe
        </div>

        <div className="nav-links">

          <a href="#overview">Overview</a>

          <a href="#technologies">Tech</a>

          <a href="#features">Features</a>

          <a href="#demo">Demo</a>

          <a href="#conclusion">Conclusion</a>

        </div>

      </nav>

      {/* Hero */}

      <header className="hero">

        <div
          className="hero-content"
          data-aos="zoom-out"
        >

          <h1>StreamVibe</h1>

          <h3>
            Modern OTT Streaming Platform
          </h3>

          <p>
            Graduation project showcasing responsive design,
            API integration, animations, and interactive
            user experience.
          </p>

          <a
            href="#overview"
            className="hero-btn"
          >
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

      {/* Footer */}

      <footer className="footer">

        <div className="footer-content">

          <h1 className="footer-logo">
            StreamVibe
          </h1>

          <p className="footer-subtitle">
            Designed & Developed by Yasmin Elsawy
          </p>

          <div className="footer-links">

            <a href="#overview">
              Overview
            </a>

            <a href="#technologies">
              Technologies
            </a>

            <a href="#demo">
              Demo
            </a>

            <a href="#conclusion">
              Conclusion
            </a>

          </div>

          <div className="footer-bottom">
            © 2026 Yasmin Elsawy — Graduation Project Presentation
          </div>

        </div>

      </footer>

    </div>
  );
}