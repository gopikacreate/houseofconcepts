import React, { useState } from "react";
import profilePic from "../images/img1.JPG";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaSpotify,
  FaBrain,
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaDatabase,
  FaAws,
  FaGitAlt,
  FaPython,
  FaUsers,
  FaLightbulb,
  FaClock,
  FaTasks,
  FaArrowUp 
} from "react-icons/fa";
import {
  SiMui,
  SiPostgresql,
  SiMongodb,
  SiTypescript,
  SiJira,
  SiDocker,
  SiC,
  SiCplusplus,
} from "react-icons/si";

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="portfolio-container">
      <nav className="navbar">
        <h2 className="logo">GOPIKA GOPAKUMAR</h2>
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          {/* <li>
            <a href="#certificates">Certificates</a>
          </li> */}
          <li>
            <a href="/resume.pdf" download="resume.pdf">
              Get Resume
            </a>
          </li>
        </ul>
      </nav>
      <div className="hero-section">
        <div className="hero-text">
          <h1>Hey, I'm Gopika.</h1>
          <p>
            A passionate web developer who loves crafting innovative web
            solutions.When I'm not coding, you'll find me creating content,
            exploring new places, or vibing to my favorite playlists. Tech and
            travel, — that's my world!
          </p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/gopika-gopakumar-0646a2225"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/gopikacreate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/_gopikanair_?igsh=MXkxam05ZzczMXYyMQ=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/blahblah018"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://open.spotify.com/user/31gom7kko2het6yskmro2kdpvhja?si=8Ppx-L3iR5q3e1xLD8Z1ng"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSpotify />
            </a>
          </div>
        </div>
      </div>

      <section id="about-me" className="about-section">
        <img src={profilePic} alt="Gopika Gopakumar" className="about-avatar" />
        <h2>About Me</h2>
        <p>
          Hey there! I'm Gopika, a passionate web developer with a strong
          foundation in front-end technologies. I hold a{" "}
          <strong>Bachelor's degree in Information Technology</strong> from
          &nbsp;
          <a
            href="https://www.lbsitw.ac.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="college-name"
          >
            <strong>
              LBS Institute Of Technology for Women, Kerala, India
            </strong>
          </a>{" "}
          and thrive on building seamless, user-friendly web applications.
         
          My tech journey kicked off at my first job, where I got hands-on
          experience with React.js, Material-UI, and REST APIs. I was thrown
          into the deep end taking over the front-end of a project all on my
          own. It was challenging, but that experience made me way more
          confident in my skills. I also worked on other projects, mostly
          focused on UI design and implementation.
          <br />
          After two years of working as a web developer, I wanted to expand my
          skill set beyond front-end technologies. So, I took a break to upskill
          myself and completed the
          <strong>
            {" "}
            Web Development Bootcamp by Dr. Angela Yu on Udemy.
          </strong>{" "}
          This course introduced me to backend development, where I gained
          hands-on experience with Node.js, Express.js and PostgreSQL. Diving
          into full-stack development gave me a broader perspective on building
          complete applications, from crafting engaging UIs to handling
          databases and APIs. <br />
          Apart from web development, I have a basic understanding of{" "}
          <strong>Python, C, and C++,</strong> which I picked up during my
          college days. While I primarily focus on front-end technologies, my
          exposure to these languages has helped me grasp core programming
          concepts and problem-solving techniques. Back in college, I did{" "}
          <strong>internships and worked on a bunch of mini-projects</strong>,
          experimenting with different technologies. I love learning,
          problem-solving, and bringing ideas to life through code. Outside of
          work? I love traveling, exploring different cultures, and connecting
          with people from all walks of life. In my free time, you’ll find me
          checking off items from my bucket list, listening to music, and
          sharing stories through digital platforms.
        </p>
      </section>

      <section id="skills" className="skills-section">
        <h2>Skills</h2>
        <div className="skills-categories">
          <h3>Strong Knowledge</h3>
          <div className="skills-content">
            <div className="skills-category">
              <FaReact /> React.js
            </div>
            <div className="skills-category">
              <FaJsSquare /> JavaScript (ES6+)
            </div>
            <div className="skills-category">
              <SiMui /> Material-UI
            </div>
            <div className="skills-category">REST APIs</div>
          </div>
          <h3>Familiar With</h3>
          <div className="skills-content">
            <div className="skills-category">
              <FaNodeJs /> Node.js
            </div>
            <div className="skills-category">Express.js</div>
            <div className="skills-category">
              <SiPostgresql /> PostgreSQL
            </div>
            <div className="skills-category">
              <SiMongodb /> MongoDB
            </div>
            <div className="skills-category">
              <SiTypescript /> TypeScript
            </div>
            <div className="skills-category">
              <FaAws /> AWS (Cognito, Lambda)
            </div>
            <div className="skills-category">CI/CD</div>
            <div className="skills-category">
              <SiDocker /> Docker
            </div>
            <div className="skills-category">
              <SiJira /> Jira
            </div>
            <div className="skills-category">
              <FaGitAlt /> Git/GitHub
            </div>
            <div className="skills-category">Agile (Scrum, Kanban)</div>
            <div className="skills-category">
              <FaPython /> Python
            </div>
            <div className="skills-category">
              <SiC /> C
            </div>
            <div className="skills-category">
              <SiCplusplus /> C++
            </div>
          </div>
        </div>
        <h2>Soft Skills</h2>
        <div className="skills-content">
          <div className="skills-category">
            <FaUsers /> Communication
          </div>
          <div className="skills-category">
            <FaLightbulb /> Problem-Solving
          </div>
          <div className="skills-category">
            <FaClock /> Time Management
          </div>
          <div className="skills-category">
            <FaTasks /> Teamwork
          </div>
        </div>
      </section>

      <section id="experience" className="experience-section">
        <h2>Experience</h2>
        <div className="experience-card">
          <p className="experience-date">July 2022 – July 2024</p>
          <a
            href="https://xminds.com"
            target="_blank"
            rel="noopener noreferrer"
            className="experience-title"
          >
            Software Developer · Xminds Infotech
          </a>
          <p>
            Developed scalable React.js applications, improving page load speeds
            by 40%.
          </p>
          <p>
            Integrated secure REST APIs and optimized API calls, reducing
            response times by 30%.
          </p>
          <p>
            Designed and implemented graph visualization tools, decreasing data
            analysis time by 30%.
          </p>
        </div>
        <div className="experience-card">
          <p className="experience-date">Internship</p>
          <a
            href="https://keltron.org"
            target="_blank"
            rel="noopener noreferrer"
            className="experience-title"
          >
            Hardware-Software Co-Design Intern · Keltron
          </a>
          <p>
            Gained hands-on experience in sensor interfacing and IoT deployment.
          </p>
        </div>
        <div className="experience-card">
          <p className="experience-date">Internship</p>
          <a
            href="https://ktu.edu.in"
            target="_blank"
            rel="noopener noreferrer"
            className="experience-title"
          >
            Computer Hardware & Networking Intern · APJ Abdul Kalam University
          </a>
          <p>
            Worked on networking fundamentals and troubleshooting hardware
            issues.
          </p>
        </div>
      </section>
      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <div className="projects-container">
          <div className="project-card">
            <h3>Datafree Portal</h3>
            <p>
              Built an interactive web application, streamlining data access for
              500+ users.
            </p>
            <div className="tech-stack">
              <FaReact /> <SiMui /> <FaAws />
            </div>
          </div>
          <div className="project-card">
            <h3>Pixovo</h3>
            <p>
              Developed a user-friendly interface, enhancing user experience and
              accessibility.
            </p>
            <div className="tech-stack">
              <FaReact /> <SiMui />
            </div>
          </div>
          <div className="project-card">
            <h3>Comeonda</h3>
            <p>
              Created a responsive web application, optimizing data
              functionality and UI performance.
            </p>
            <div className="tech-stack">
              <FaReact /> <SiMui /> <FaNodeJs />
            </div>
          </div>
          <div className="project-card">
            <h3>Smart Irrigation System</h3>
            <p>
            Designed a prototype to improve water efficiency in irrigation systems using Arduino and sensors.
            </p>
            <div className="tech-stack">
              <SiC /> <SiCplusplus />
            </div>
          </div>
          <div className="project-card">
            <h3>Library Management System</h3>
            <p>
              Developed a streamlined system for managing library operations
              efficiently.
            </p>
            <div className="tech-stack">
              <FaDatabase />
            </div>
          </div>

          <div className="project-card">
            <h3>Diabetic Retinopathy Detection</h3>
            <p>
            Compared pre-built models for accurate retinal abnormality detection using deep learning.
            </p>
            <div className="tech-stack">
              <FaPython /> <FaBrain />
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Gopika Gopakumar. All rights reserved.
        </p>
        <div className="scroll-top" onClick={scrollToTop}>
        <FaArrowUp size={20} /> Back to Top
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
