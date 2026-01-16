import React, { useEffect, useState, useRef } from "react";
import Typed from "typed.js";
import ScrollReveal from "scrollreveal";
import { SiJsonwebtokens, SiNextdotjs } from "react-icons/si";
import "../styles/Home.css";
import profileimage1 from "../assets/Adiimg.jpg";
import profileimage2 from "../assets/Adiimg2.jpg";
import AiSaaS from "../assets/aissas.png";
import Course from "../assets/course.jpg";
import Book from "../assets/bookstore.jpg";
import deepseek from "../assets/deepseek.jpg";
import food from "../assets/food.png";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollWidth, setScrollWidth] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);

  // ----------------- Scroll Progress Bar ---------------------
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollWidth(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const typedRef = useRef(null);

  useEffect(() => {
    ScrollReveal({
      distance: "70px",
      duration: 2000,
      delay: 200,
    });

    ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
    ScrollReveal().reveal(".home-img, .service-container, .portfolio-box", {
      origin: "bottom",
    });
    ScrollReveal().reveal(
      ".home, .about-content, .services-box, .contact form",
      {
        origin: "right",
      }
    );
    ScrollReveal().reveal(".about-img", { origin: "left" });

    typedRef.current = new Typed(".all-texts", {
      strings: [
        "Full-Stack Web Developer",
        "Aspiring Software Engineer",
        "Backend Engineering Enthusiast",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 900,
      loop: true,
    });

    // ✅ Cleanup
    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []);

  // ----------------- Back to Top Button ---------------------
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      {/* 🔥 Scroll progress bar at top */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "4.5px", // thinner for professional look
          width: `${scrollWidth}%`,
          background: "linear-gradient(90deg, #ff4b2b, #ffcc00)", // modern red→yellow
          backgroundSize: "200% 100%",
          animation: "lavaFlow 6s linear infinite", // subtle slow movement
          boxShadow:
            "0 0 6px rgba(255, 75, 43, 0.6), 0 0 12px rgba(255, 204, 0, 0.4)",
          borderRadius: "0 4px 4px 0", // rounded right end
          zIndex: 1000,
          transition: "width 0.25s ease-out",
        }}
      ></div>

      {/* --------------------- HEADER --------------------- */}
      <header className="header">
        <a href="#home" className="logo">
          My Portfolio
        </a>
        {/* Hamburger Icon */}
        <i
          className="fa-solid fa-bars"
          id="menu-icon"
          onClick={() => setIsOpen(!isOpen)}
        ></i>

        {/* Navbar */}
        <nav className={`navbar ${isOpen ? "open" : ""}`}>
          <a href="#home" className="active">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#exp">Experiences</a>
          <a href="#services">Education & Certifications</a>
          <a href="#portfolio">Projects</a>
        </nav>
      </header>

      {/* ----------------- Back to Top Button --------------------- */}
      {showTopBtn && (
        <button className="back-to-top" onClick={scrollToTop}>
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      )}

      {/* --------------------- HOME --------------------- */}
      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello !</h3>
          <h1>
            I'm <span className="highlight-name">Aditya Pal</span>
          </h1>
          <h3>
            <span className="all-texts"></span>
          </h3>
          <p className="p">
            Aspiring software engineer currently in the 7th semester of B.Tech
            in Computer Science and Engineering, with hands-on experience in
            MERN stack development and strong programming fundamentals. Quick to
            learn new technologies, with solid problem-solving skills, effective
            communication, and a collaborative mindset.
          </p>
          <div className="social-media">
            <a href="https://www.facebook.com/share/1Bip2mtRpd/?mibextid=wwXIfr">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/mrlightbringer/">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://github.com/adityapal08">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/aditya-pal-5b376332a/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <a
            href="https://drive.google.com/file/d/1R0NqmRJI3R1qv-2lEXmYYjZJhcsltYnc/view?usp=sharing"
            className="btn"
          >
            Download Resume
          </a>
        </div>
        <div className="home-img">
          <img src={profileimage1} alt="" />
        </div>
      </section>

      {/* --------------------- ABOUT --------------------- */}
      <section className="about" id="about">
        <div className="about-img">
          <img src={profileimage2} alt="" />
          <div className="skill-mf">
            <p className="title-s">Technical Skills</p>
            <span className="pull-right">Web Development</span>{" "}
            <span className="pull-rights">85%</span>
            <div className="progress">
              <div className="progress-bar" style={{ width: "85%" }}></div>
            </div>
            <span className="pull-right">Data Structure & Algorithms</span>{" "}
            <span className="pull-rights">85%</span>
            <div className="progress">
              <div className="progress-bar" style={{ width: "85%" }}></div>
            </div>
            <span className="pull-right">Java</span>{" "}
            <span className="pull-rights">75%</span>
            <div className="progress">
              <div className="progress-bar" style={{ width: "75%" }}></div>
            </div>
            <span className="pull-right">JavaScript</span>{" "}
            <span className="pull-rights">85%</span>
            <div className="progress">
              <div className="progress-bar" style={{ width: "85%" }}></div>
            </div>
            <span className="pull-right">DBMS</span>{" "}
            <span className="pull-rights">80%%</span>
            <div className="progress">
              <div className="progress-bar" style={{ width: "80%" }}></div>
            </div>
          </div>
        </div>

        <div className="about-content">
          <h2 className="heading">
            About <span>Me</span>
          </h2>
          <p>
            I am an aspiring engineering student with a deep passion for coding,
            particularly in frontend development. My ambition is to become a
            successful software engineer known for crafting intuitive user
            interfaces and robust applications. Proficient in Java programming,
            I thrive on team-based problem-solving, leveraging collaborative
            efforts to tackle complex challenges.
          </p>

          <ul className="ul">
            <li className="uls">
              <p>
                Address :<span> Kolkata , West Bengal , India</span>
              </p>
            </li>
            <li className="uls">
              <p>
                Education :
                <span> B.Tech In Computer Science & Engineering</span>
              </p>
            </li>
            <li className="uls">
              <p>
                Language :<span> English , Bengali , Hindi</span>
              </p>
            </li>
            <li className="uls">
              <p>
                Interest :<span> Traveling , Music</span>
              </p>
            </li>
            <li className="uls">
              <p>
                Sports :<span> Football , Cricket </span>
              </p>
            </li>
          </ul>

          <a
            href="https://www.linkedin.com/in/aditya-pal-5b376332a/"
            className="btn"
          >
            LinkedIn Profile
          </a>
        </div>
      </section>

      {/* --------------------- Skills --------------------- */}
      <section className="skills-section" id="skills">
        <h2 className="heading">
          My Technical <span>Skills</span>
        </h2>
        <div className="skills-grid">
          {/* Left Column */}
          <div>
            <h3 className="skills-subtitle">Web Development Skills</h3>
            <div className="underli"></div>
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-icon">
                  <i
                    className="fa-brands fa-react"
                    style={{ color: "#27b6f8" }}
                  ></i>
                </span>
                <span className="skill-name">React.js</span>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-icon">
                  <i
                    className="fa-brands fa-node"
                    style={{ color: "#00f735" }}
                  ></i>
                </span>
                <span className="skill-name">Node.js</span>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-icon">
                  <i
                    className="devicon-express-original text-4xl"
                    style={{ color: "#ffffff" }}
                  ></i>
                </span>
                <span className="skill-name">Express.js</span>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-icon">
                  <i
                    className="devicon-mongodb-plain text-6xl text-gray-700"
                    style={{ color: "#00fd0d" }}
                  ></i>
                </span>
                <span className="skill-name">MongoDB</span>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-icon">
                  <i
                    className="fa-solid fa-code-branch api-icon"
                    style={{ color: "#f70000" }}
                  ></i>
                </span>
                <span className="skill-name">Rest APIs</span>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-icon">
                  <SiNextdotjs
                    style={{ color: "#00b894", fontSize: "2.69rem" }}
                  />
                </span>
                <span className="skill-name">Next.js</span>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-icon">
                  <i
                    className="devicon-tailwindcss-original colored text-4xl"
                    style={{ color: "#00c8fa" }}
                  ></i>
                </span>
                <span className="skill-name">Tailwind CSS</span>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-icon">
                  <i className="fab fa-html5" style={{ color: "#E34F26" }}></i>
                </span>
                <span className="skill-name">HTML</span>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-icon">
                  <i
                    className="fab fa-css3-alt"
                    style={{ color: "#1572B6" }}
                  ></i>
                </span>
                <span className="skill-name">CSS</span>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-icon">
                  <i
                    className="fab fa-js-square"
                    style={{ color: "#F7DF1E" }}
                  ></i>
                </span>
                <span className="skill-name">JavaScript</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="skills-subtitle">Programming Languages</h3>
            <div className="underli"></div>
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-icon">
                  <i
                    className="fa-brands fa-java"
                    style={{ color: "#ff0000" }}
                  ></i>
                </span>
                <span className="skill-name">Java</span>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-icon">
                  <i
                    className="fab fa-js-square"
                    style={{ color: "#F7DF1E" }}
                  ></i>
                </span>
                <span className="skill-name">JavaScript</span>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-icon">
                  <i
                    className="devicon-dart-plain colored"
                    style={{ color: "#0175C2" }}
                  ></i>
                </span>
                <span className="skill-name">Dart</span>
              </div>
            </div>

            <div className="skill-item">
              <div className="skill-header">
                <span className="skill-icon">
                  <i
                    className="devicon-c-plain colored text-5xl"
                    style={{ color: "#0066ff" }}
                  ></i>
                </span>
                <span className="skill-name">C Language</span>
              </div>
            </div>
            <div>
              <h3 className="skills-subtitle">Development Tools</h3>
              <div className="underli"></div>
              <div className="skill-item">
                <div className="skill-header">
                  <span className="skill-icon">
                    <i
                      className="devicon-git-plain colored"
                      style={{ color: "#ff5e00" }}
                    ></i>
                  </span>
                  <span className="skill-name">Git</span>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <span className="skill-icon">
                    <i
                      className="fa-brands fa-github"
                      style={{ color: "#ffffff" }}
                    ></i>
                  </span>
                  <span className="skill-name">GitHub</span>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <span className="skill-icon">
                    <i
                      className="devicon-postman-plain colored"
                      style={{ color: "#ff4901" }}
                    ></i>
                  </span>
                  <span className="skill-name">Postman</span>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <span className="skill-icon">
                    <i
                      className="devicon-vscode-plain colored text-5xl"
                      style={{ color: "#008cff" }}
                    ></i>
                  </span>
                  <span className="skill-name">VS Code</span>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-header">
                  <span className="skill-icon">
                    <i
                      className="devicon-vercel-original colored"
                      style={{ color: "#ffffff" }}
                    ></i>
                  </span>
                  <span className="skill-name">Vercel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------- Experiences --------------------- */}
      <section className="exp" id="exp">
        <h2 className="heading">
          My <span>Professional Experiences</span>
        </h2>
        <div className="row">
          <h1 className="big-4">Freelance</h1>
          <div className="underline"></div>
        </div>

        <div className="services-container">
          <div className="services-box bte">
            <i className="fa-solid fa-graduation-cap"></i>
            <h3>Software Developer Intern</h3>
            <div className="edu">
              <p>
                <strong>Company:</strong> ShopConnect
              </p>
              <p>
                <strong>Duration:</strong> Oct 2025 – Jan 2026
              </p>
              <p>
                <strong>Location:</strong> Kolkata, India
              </p>
              <ul>
                <li>
                  Developed the frontend of the application using{" "}
                  <strong>Flutter</strong>.
                </li>
                <li>
                  Developed the backend of the application using{" "}
                  <strong>Node.js</strong>.
                </li>
              </ul>
            </div>
            {/*} <a
              href="https://drive.google.com/file/d/1qmxoYLqhzqIg6JTX31GeCyWecISJPQV7/view?usp=sharing"
              className="btn"
            >
              Read More
            </a>*/}
          </div>
        </div>
      </section>

      {/* --------------------- SERVICES --------------------- */}
      <section className="services" id="services">
        <h2 className="heading">
          My <span>Academic Background & Certifications</span>
        </h2>

        <div className="row">
          <h1 className="big-4">Education</h1>
          <div className="underline"></div>
        </div>

        <div className="services-container">
          <div className="services-box bte">
            <i className="fa-solid fa-graduation-cap"></i>
            <h3>B.Tech In Computer Science and Engineering</h3>
            <div className="edu">
              <p>University : MAKAUT UNIVERSITY</p>
              <p>
                College : Dr. Sudhir Chandra Sur Institute Of Technology And
                Sports Complex
              </p>
              <p>Appearing (2022-2026)</p>
              <p>CGPA : 7.72</p>
            </div>
            <a href="#" className="btn">
              Read More
            </a>
          </div>

          <div className="services-box">
            <i className="fa-solid fa-school"></i>
            <h3>Higher Secondary Education</h3>
            <div className="edu">
              <p>Board : WBCHSE</p>
              <p>School : Nangi High School</p>
              <p>Passing Year : 2022</p>
              <p>Percentage : 78.8%</p>
            </div>
            <a
              href="https://drive.google.com/file/d/1r8TYCZF-0o__YsBMVdMkL2NTI2YKymMY/view?usp=drive_link"
              className="btn"
            >
              Read More
            </a>
          </div>

          <div className="services-box">
            <i className="fa-solid fa-school"></i>
            <h3>Secondary Education</h3>
            <div className="edu">
              <p>Board : WBBSE</p>
              <p>School : Nangi High School</p>
              <p>Passing Year : 2020</p>
              <p>Percentage : 66.4%</p>
            </div>
            {/*  <a
              href="https://drive.google.com/file/d/1y3jQ4oILlv3EV2TLyUFvJyfst-iAWOec/view?usp=drive_link"
              className="btn"
            >
              Read More
            </a>*/}
            <a href="#" className="btn">
              Read More
            </a>
          </div>
        </div>
      </section>
      <section className="services" id="services">
        <div className="row">
          <h1 className="big-4">Certifications</h1>
          <div className="underline"></div>
        </div>

        <div className="certificate-container">
          <div className="services-box">
            <i className="fa-solid fa-stamp"></i>
            <h3>Internet of Things (IOT)</h3>
            <div className="edu">
              <p>Issuing Organization : ARDENT COMPUTECH PVT LTD</p>
              <p>Duration : August 2024-August 2025</p>
            </div>
            <a
              href="https://drive.google.com/file/d/1WGyTUwksi8YlD58TkGZU4j6DqnUARh8Q/view?usp=drive_link"
              className="btn"
            >
              Read More
            </a>
          </div>

          <div className="services-box">
            <i className="fa-solid fa-stamp"></i>
            <h3>AI Powered Web Dev</h3>
            <div className="edu">
              <p>Issuing Organization : Sheryians Coding School</p>
              <p>Issued : September-2025 - </p>
            </div>
            <a href="#" className="btn">
              Read More
            </a>
          </div>

          <div className="services-box">
            <i className="fa-solid fa-stamp"></i>
            <h3>PYTHON with DJANGO</h3>
            <div className="edu">
              <p>Issuing Organization : ARDENT COMPUTECH PVT LTD</p>
              <p>Issued : April 2025</p>
            </div>
            <a
              href="https://drive.google.com/file/d/1Ms_JXWlVwiZZGI4N_jy95WqhfYUHi71D/view?usp=drive_link"
              className="btn"
            >
              Read More
            </a>
          </div>

          <div className="services-box">
            <i className="fa-solid fa-stamp"></i>
            <h3>MongoDB</h3>
            <div className="edu">
              <p>Issuing Organization : Euphoria</p>
              <p>Issued : March 2025</p>
            </div>
            <a
              href="https://drive.google.com/file/d/1OlBdVS5XRr1J0kOaHx44r_iTKmtPlHmb/view?usp=sharing"
              className="btn"
            >
              Read More
            </a>
          </div>

          {/*<div className="services-box">
            <i className="fa-solid fa-stamp"></i>
            <h3>Micro-Certification</h3>
            <div className="edu">
              <p>Issuing Organization : SERVICENOW</p>
              <p>Issued : April 2025</p>
            </div>
            <a
              href="https://media.licdn.com/dms/image/v2/D562DAQHTsC-kKAMTkg/profile-treasury-image-shrink_800_800/B56ZYT.LYUGsAc"
              className="btn"
            >
              Read More
            </a>
          </div>

          <div className="services-box">
            <i className="fa-solid fa-stamp"></i>
            <h3>Python With Django Training</h3>
            <div className="edu">
              <p>Issuing Organization : ARDENT COMPUTECH PVT LTD</p>
              <p>Issued : March 2024</p>
            </div>
            <a
              href="https://drive.google.com/file/d/1ZlckCwNfGfqxqcipuQ-SUT2aJ0enjhH2/view?usp=drivesdk"
              className="btn"
            >
              Read More
            </a>
          </div>

          <div className="services-box">
            <i className="fa-solid fa-stamp"></i>
            <h3>Crash Course On Python</h3>
            <div className="edu">
              <p>Issuing Organization : COURSERA</p>
              <p>Issued : May 2024</p>
            </div>
            <a
              href="https://coursera.org/share/91aeeafaeec6a84999944cd8d5c40618"
              className="btn"
            >
              Read More
            </a>
          </div>

          <div className="services-box">
            <i className="fa-solid fa-stamp"></i>
            <h3>What is Data Science</h3>
            <div className="edu">
              <p>Issuing Organization : COURSERA</p>
              <p>Issued : Nov 2023</p>
            </div>
            <a
              href="https://coursera.org/share/ae32b7d3434bda6617ea52ec99b51eaf"
              className="btn"
            >
              Read More
            </a>
          </div>

          <div className="services-box">
            <i className="fa-solid fa-stamp"></i>
            <h3>Google Cloud Computing Fundamentals</h3>
            <div className="edu">
              <p>Issuing Organization : GDSC</p>
              <p>Issued : Dec 2023</p>
            </div>
            <a
              href="https://drive.google.com/file/d/1ZicY5B49zjvDcVOt3WWPJ2urIpKAZ8ZE/view?usp=drivesdk"
              className="btn"
            >
              Read More
            </a>
          </div>

          <div className="services-box">
            <i className="fa-solid fa-stamp"></i>
            <h3>Google Cloud Skill Boost Certificates</h3>
            <div className="edu">
              <p>Issuing Organization : GDSC</p>
              <p>Issued : Sep 2023</p>
            </div>
            <a
              href="https://www.cloudskillsboost.google/public_profiles/767ffd36-9cda-45ad-9809-f14486a1c196"
              className="btn"
            >
              Read More
            </a>
          </div>*/}
        </div>
      </section>

      {/* --------------------- PORTFOLIO --------------------- */}
      <section className="portfolio" id="portfolio">
        <h2 className="heading">
          My <span>Projects</span>
        </h2>
        <div className="portfolio-container">
          <div className="portfolio-box">
            <img src={AiSaaS} alt="" />
            <div className="portfolio-layer">
              <h3>Ai SaaS</h3>

              <p>
                Built a full-featured Ai-Saas using the PERN stack (PostgreSql,
                Express.js, React, Node.js).
              </p>
              <a href="https://quickaiclient-kappa.vercel.app/">
                <i className="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
          </div>

          <div className="portfolio-box">
            <img src={Course} alt="" />
            <div className="portfolio-layer">
              <h3>Course selling website</h3>
              <p>A Responsive Design Of simple website Using MERN stack.</p>
              <a href="https://github.com/adityapal08/course-selling-app">
                <i className="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="portfolio-box">
            <img src={food} alt="" />
            <div className="portfolio-layer">
              <h3>Food-Delivery website</h3>
              <p>A Responsive Design Of simple website Using MERN stack.</p>
              <a href="https://foodify-fd.onrender.com/">
                <i className="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
          </div>

          <div className="portfolio-box">
            <img src={Book} alt="" />
            <div className="portfolio-layer">
              <h3>Online Book Store</h3>
              <p>
                A Simple Responsive Design Of simple website Using MERN stack.
              </p>
              <a href="https://github.com/adityapal08/bookstore">
                <i className="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div className="portfolio-box">
            <img src={deepseek} alt="" />
            <div className="portfolio-layer">
              <h3>Deepseek Ai Clone</h3>
              <p>A Responsive Ai Clone Using MERN stack.</p>
              <a href="https://github.com/adityapal08/Desi-Ai.">
                <i className="fa-solid fa-up-right-from-square"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------- THANK YOU --------------------- */}
      <section className="thankyou-section" id="thankyou">
        <div className="thankyou-container">
          <h2 className="thankyou-title">
            Thanks again for scrolling through my work✨{" "}
          </h2>
          <p className="thankyou-text">
            Thanks again for exploring my portfolio <br />
            I’d love to connect, collaborate, or just chat over coffee ☕. Feel
            free to reach out anytime!
          </p>
          <div className="thankyou-links">
            <a
              href="https://github.com/adityapal08"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/aditya-pal-5b376332a/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href="mailto:adityapal2493@gmail.com?subject=Hello%20Aditya&body=Hi%20there!"
              target="_blank"
              rel="noreferrer"
            >
              Say Hello
            </a>
            {/*} <a
              href="https://mail.google.com/mail/?view=cm&to=adityapal2493@gmail.com&su=Hello%20Aditya&body=Hi%20Aditya!"
              target="_blank"
            >
              Say Hello
            </a>*/}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-text">
          <p>Copyright &copy; 2025 By Aditya Pal | All Rights Reserved .</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
