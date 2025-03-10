// Import necessary libraries
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles.css";

const App = () => {
  const [isPopupVisible, setPopupVisibility] = useState(false);
  const [isNavbarToggled, setNavbarToggle] = useState(false);

  useEffect(() => {
    AOS.init({ offset: 300, duration: 1000 });

    const timer = setTimeout(() => {
      setPopupVisibility(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleScroll = () => {
    const header = document.querySelector(".header");
    if (window.scrollY > 30) {
      header.style.background = "#ffaa00";
      header.style.boxShadow = "0 .2rem .5rem rgba(0,0,0,.4)";
      setPopupVisibility(false); // Ensure only the popup is hidden
    } else {
      header.style.background = "none";
      header.style.boxShadow = "none";
    }
  };
  

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="main">
      {/* Preloader */}

      {/* Popup */}
      {isPopupVisible && (
        <div className={`popup ${isPopupVisible ? "show" : ""}`}>
          <div className="contentBox">
            <div className="close" onClick={() => setPopupVisibility(false)}></div>
            <div className="imgBx" >
              <img src="image/hiring.png" alt="Hiring" />
            </div>
            <div className="content">
              <h3>Showcasing my skills and experiences</h3>
              <p></p>
              <a className="click" href="#about">
                <button className="btn">About Me</button>
              </a>
            </div>
          </div>
        </div>
      )}


      {/* Header */}
      <header className="header">
        <a href="#home" className="logo">
          <i className="fas fa-chart-pie"></i>Manapuram Jyothirmayi
        </a>

        <div
          className={`fas fa-bars ${isNavbarToggled ? "fa-times" : ""}`}
          onClick={() => setNavbarToggle(!isNavbarToggled)}
        ></div>
        <nav className={`navbar ${isNavbarToggled ? "nav-toggle" : ""}`}>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#team">Achievements</a>
            </li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Sections */}
      <section id="home" className="home" data-aos="fade">
        <h1 className="banner">Welcome To My Portfolio</h1>
        <h3 className="slogan">Code --&gt; Create --&gt; Conquer</h3>
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </section>

      <section id="about" className="about" data-aos="zoom-in-down">
        <h1 className="heading">About</h1>
        <div className="row">
          <div className="content">
            <p>
              I'm a fresher with a passion for web development and programming. I have
              knowledge of HTML, CSS, JavaScript, Python, and C programming.
            </p>
            <p>
              Seeking the role of a software professional where I can enhance my skills
              and contribute efficiently to the growth of the organization and my career.
            </p>
            <a href="docs/ManapuramJyothirmayiResume.pdf" target="_blank">
              <button className="btn">Get Resume</button>
            </a>
          </div>
        </div>
      </section>

      <section id="team" className="team" data-aos="zoom-in-down">
        <h1 className="heading">Achievements</h1>
        <div className="row">
          {[{
            img: "image/ccna.png",
            title: "CCNAv7-Introduction to Networks course",
            link: "docs/JYOTHIRMAYIMANAPURAM-CCNAv7_Module1_I-certificate (1).pdf",
          },
          {
            img: "image/cyber.png",
            title: "Cisco Cybersecurity Essentials",
            link: "docs/JYOTHIRMAYIMANAPURAM-Cyber Sec Essent-certificate.pdf",
          },
          {
            img: "image/python.png",
            title: "PCAP-Programming Essentials in Python",
            link: "docs/JYOTHIRMAYIMANAPURAM-Python 2019-23 I-certificate (1).pdf",
          }].map((cert, index) => (
            <div className="card" key={index}>
              <div className="image">
                <img src={cert.img} alt={cert.title} />
              </div>
              <div className="info">
                <h3>{cert.title}</h3>
                <div className="icons">
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <button className="btn">View Certificate</button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="project" className="project" data-aos="zoom-in-down">
        <h1 className="heading">My Projects</h1>
        {[{
          img: "image/railway gate.jpg",
          title: "Automatic Railway Gate Management System using IoT",
          desc: "Developing and designing circuits with Tinkercad. Tinkercad's virtual breadboard enables to connect components, which are used to construct circuits. The designs are tested using a simulation tool. - Servomotor serves as a gate in this process. Using an ultrasonic sensor, we track the arrival of training. In response to the train being detected by the ultrasonic sensor, a red signal will be displayed on a led, and a servomotor automatically rotates 90 degrees to signify that the gate is closed. Once the train moves a given distance from the sensor, it will get reopened, showing a green led indicator until the sensor was again picked up the arrival of the train. A code was developed for the servomotor to open and close.",
        },
        {
          img: "image/BOOK RECOMMENDED SYSTEM.jpg",
          title: "Book Recommendation System based on Ratings",
          desc: "Built a recommender system for books based on ratings using hybrid filtering approach which is a combination of both content-based and collaborative filtering techniques. - Also used cosine similarity which is an unsupervised learning technique to find similarity between two vectors. We use cosine similarity to determine the similarity between these books which acts here as vectors by measuring cosine angle.",
        }].map((project, index) => (
          <div className="row" data-aos="zoom-in-up" key={index}>
            <div className="image">
              <img src={project.img} alt={project.title} />
            </div>
            <div className="content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <section id="education" className="education" data-aos="zoom-in-down">
        <h1 className="heading">Education</h1>
        {[{
          img: "image/andhra-university.jpg", // Placeholder for Andhra University Image
          title: "MTech in Computer Science and Technology (2023-2025)",
          college: "Andhra University College",
          specialization: "Specialization: Computer Science and Technology",
          cgpa: "CGPA: 8.6 (Currently Pursuing)",
          location: "Visakhapatnam, Andhra Pradesh, India",
          link: "https://www.andhrauniversity.edu.in/"
        },
        {
          img: "image/mvgrce.jpg", // Placeholder for Maharaja Vijayaram Gajapathi Raj College of Engineering Image
          title: "BTech in Computer Science and Engineering (2020-2023)",
          college: "Maharaja Vijayaram Gajapathi Raj College of Engineering",
          specialization: "Specialization: Computer Science and Engineering",
          cgpa: "CGPA: 8.08",
          location: "Vizianagaram, Andhra Pradesh, India",
          link: "https://www.mvgrce.com/"
        },
        {
          img: "image/gpw.jpg", // Placeholder for Government Womens Polytechnic Image
          title: "Diploma in Computer Engineering (2017-2020)",
          college: "Government Polytechnic Womens ",
          specialization: "Specialization: Computer Engineering",
          cgpa: "Percentage: 87.08",
          location: "Srikakulam, Andhra Pradesh, India",
          link: "https://govtpolyforwomensrikakulam.ac.in/"
        }].map((education, index) => (
          <div className="education-item" data-aos="fade-up" key={index}>
            <div className="image">
              <img src={education.img} alt={education.college} />
            </div>
            <div className="content">
              <h3 className="title">{education.title}</h3>
              <h4 className="college">{education.college}</h4>
              <p className="specialization">{education.specialization}</p>
              <p className="cgpa">{education.cgpa}</p>
              <p className="location">
                {education.location}
                <a href={education.link} target="_blank" rel="noopener noreferrer">
                  <br></br><button className="btn">Visit</button>
                </a>
              </p>
            </div>
          </div>
        ))}
      </section>

      <section id="contact" className="contact" data-aos="zoom-in-down">
        <h1 className="heading">Contact</h1>
        <div className="row">
          <div className="image">
            <img src="image/istockphoto-1357352422-612x612.svg" alt="Contact" />
          </div>
          <div className="form-container">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Your Form has been submitted successfully");
              }}
            >
              <div className="inputBox">
                <input name="name" type="text" placeholder="First Name" required />
                <input type="text" placeholder="Last Name" required />
              </div>
              <input name="email" type="email" placeholder="Email" required />
              <textarea
                name="message"
                cols="30"
                rows="10"
                placeholder="Message"
                required
              ></textarea>
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="box-container">
          <div className="box">
            <h3>About</h3>
            <p>
              I'm a fresher with a passion for web development and programming. I have knowledge of HTML, CSS, JavaScript, Python, and C programming. Seeking for the role of software professional where I can enhance my skills and contribute efficiently for the growth of the organization.
            </p>
          </div>
          <div className="box">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#team">Achievements</a>
            <a href="#project">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="box">
            <h3>Follow</h3>
            <a href="https://www.facebook.com/">
              <i className="fab fa-facebook"></i> Facebook
            </a>
            <a href="https://www.instagram.com/">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="https://www.linkedin.com/in/jyothirmayi-manapuram-54386123a">
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://twitter.com/">
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </div>
          <div className="box">
            <h3>Contact Info</h3>
            <p>
              <i className="fas fa-map-marker-alt"></i> Gajapathnagaram, Vizianagaram, Andhra Pradesh, India - 535270
            </p>
            <p>
              <i className="fas fa-phone"></i> Masked
            </p>
            <p>
              <i className="fas fa-envelope"></i> jyothirmayi0308@gmail.com
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
