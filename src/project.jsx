import React, { useState, useEffect, useRef } from 'react';
import './project.css';

const projectsData = [
    {
    id: 1,
    title: 'GroZo',
    description: 'GroZo is a grocery and food delivery app, the first in Ravangla, Sikkim, delivering 5,000+ orders within a month.',
    imgSrc: './projectimg/images/1.jpg',
    caseStudyLink: 'https://drive.google.com/drive/folders/1_zoV3Qk10M7jidw3627IvyfH2NrNnh-a?usp=sharing',
    skills: ['Flutter','DART','Node.js','Firebase','JavaScript','Redis','Postgresql']
  },
  {
    id: 2,
    title: 'ChatiFy',
    description: 'Chatify provides a real time intraction, allows functionality such as making channels and sharing images check it out on my GITHUB',
    imgSrc: './projectimg/images/project1.jpg',
    caseStudyLink: 'https://github.com/kumarvishwajeettrivedi/chatify',
    skills: ['JavaScript', 'React', 'socket.io','Node.js', 'Express', 'MongoDB','tailwind','Radix ui']
  },

  {
    id: 3,
    title: 'Face Recognition and Greeting System',
    description: 'Developed a robust face recognition model using OpenCV, and TensorFlow, integrated with Raspberry Pi for real-time detection and greeting.',
    imgSrc: './projectimg/images/testingimg.png',
    caseStudyLink: 'https://github.com/kumarvishwajeettrivedi/face-detection-greeting-system',
    skills: ['OpenCV', 'TensorFlow', 'Raspberry Pi', 'Python']
  },
  {
    id: 4,
    title: 'Tripling',
    description: 'Developed a MERN stack app for users to search, update, and review camps/hotels seamlessly.',
    imgSrc: './projectimg/images/tripling.png',
    caseStudyLink: 'https://github.com/kumarvishwajeettrivedi/Tripling',
    skills: ['Javascript', 'React','Node.js','Express.js','MongoDB']
  },
  {
    id: 5,
    title: 'RCSC',
    description: 'I developed a website for RCSC conference on AI and Computer Vision, hosted by NIT Sikkim, enhancing event outreach',
    imgSrc: './projectimg/images/flappybird.png',
    caseStudyLink: 'https://flappy-bird-nu-red.vercel.app/',
    skills: ['HTML', 'CSS', 'JavaScript','Tailwind']
  },
  {
    id: 6,
    title: 'Project 4',
    description: 'Designed a maze-solving car using a PID controller, motor driver, and Arduino; showcased at Technex, IIT-BHU.',
    imgSrc: './projectimg/images/mazesolver.png',
    caseStudyLink: 'https://github.com/kumarvishwajeettrivedi/Maze-Solver_Robot',
    skills: ['Arduino', 'C++','more']
  },
  {
    id: 7,
    title: 'Parkit',
    description: 'ParkIT is a smart parking solution using AI, IoT, and cloud for real-time parking updates, security,AI-mapping, and automated reservations.',
    imgSrc: './projectimg/images/parkit.png',
    caseStudyLink: 'https://github.com/kumarvishwajeettrivedi/Parkit',
    skills: ['IoT Development','AI/ML','Cloud Computing','C++','Python','OpenCV','esp32','more']
  },
  {
    id: 8,
    title: 'Twitter Sentiment Analysis',
    description: 'Twitter Sentimental Analysis: Machine learning-based project categorizing tweets as positive, negative, or neutral ',
    imgSrc: './projectimg/images/twittersentiment.png',
    caseStudyLink: 'https://github.com/kumarvishwajeettrivedi/Twitter-sentiment-analysis',
    skills: ['Python','Logistic Regression','Jupyter notebook','Decision Tree','XGBoost']
  },
  

  
];



const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);
  const [showOverlayText, setShowOverlayText] = useState(false);
  const projectsRef = useRef([]);

  const handleLoadMore = () => {
    setVisibleProjects((prevVisible) => prevVisible + 4);
    setShowOverlayText(true); 
  };

  const handleShowLess = () => {
    setVisibleProjects(4);
    setShowOverlayText(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-project');
          }
        });
      },
      { threshold: 0.1 }
    );

    projectsRef.current.forEach((e) => {
      if (e) observer.observe(e);
    });

    return () => {
      projectsRef.current.forEach((e) => {
        if (e) observer.unobserve(e);
      });
    };
  }, [visibleProjects]);

  return (
    <section id="projects" className="projects sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-bg">
          <span className="heading-sec__main">Projects</span>
        </h2>
        <div className="projects__content">
          {projectsData.slice(0, visibleProjects).map((project, index) => (
            <div
              key={project.id}
              className="projects__card"
              ref={(e) => (projectsRef.current[index] = e)}
            >
              <a
                href={project.caseStudyLink}
                className="projects__card-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="projects__card-img">
                  <img
                    src={project.imgSrc}
                    alt={project.title}
                    className="projects__card-img-img"
                    loading="lazy"
                  />
                </div>
              </a>
              <div className="projects__card-content">
                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-description">{project.description}</p>
                <div className="projects__card-skills">
                  {project.skills.map((skill, idx) => (
                    <div key={idx} className="projects__card-skill">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="projects__load-more">
          {visibleProjects < projectsData.length ? (
            <button onClick={handleLoadMore} className="btn btn--med btn--theme">
              More Projects
            </button>
          ) : (
            <button onClick={handleShowLess} className="btn btn--med btn--theme">
              Show Less
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
