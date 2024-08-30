import React from "react";
import "./about.css"; // Import the CSS file

const AboutSection = () => {
  return (
    <section id="about" className="about sec-pad">
      <div className="stars">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">About Me</span>
        </h2>

        <div className="about__content">
          <div className="about__image-container">
            <div className="about__image-container"></div>
          </div>

          <div className="about__text">
            <h3 className="about__content-title">Get to know me!</h3>
            <div className="about__content-details">
              <p className="about__content-details-para">
                Hey there! I'm{" "}
                <strong style={{ color: "red", fontSize: "1.6rem" }}>
                  Vishwajeet Kumar
                </strong>
                , a passionate <strong>4th-year undergraduate</strong> from the
                National Institute of Technology Sikkim. As a dedicated{" "}
                <strong>Software Developer</strong>, I'm driven by a curiosity
                to build versatile projects, whether they involve{" "}
                <strong>electronic systems</strong>,{" "}
                <strong>machine learning</strong>, or innovative software
                solutions.
              </p>
              <p className="about__content-details-para">
                Currently, I’m a pre-final year student specializing in{" "}
                <strong>Software Development</strong>,{" "}
                <strong>Electronics and Control Systems Design</strong>, and am
                an enthusiast of <strong>Machine Learning</strong>
                ,  Feel free to
                explore my work and <strong>get in touch</strong>!
              </p>
            </div>

            <a
              href="./#contact"
              className="btn btn--med btn--theme dynamicBgClr"
            >
              Contact
            </a>
            <div className="about__content-skills">
              <h3 className="about__content-title">Tech Stack</h3>
              <div className="skills">
                <div className="skills__skill">HTML</div>
                <div className="skills__skill">CSS</div>
                <div className="skills__skill">JavaScript</div>
                <div className="skills__skill">React</div>
                <div className="skills__skill">Node.js</div>
                <div className="skills__skill">MongoDB</div>
                <div className="skills__skill">SQL</div>
                <div className="skills__skill">PHP</div>
                <div className="skills__skill">Django</div>
                <div className="skills__skill">Redux</div>
                <div className="skills__skill">Firebase</div>
                <div className="skills__skill">Socket.io</div>
                <div className="skills__skill">Machine Learning</div>
                <div className="skills__skill">GIT</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
