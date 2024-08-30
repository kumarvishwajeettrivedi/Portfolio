import React, { useState, useEffect, useRef } from 'react';
import './project.css';

const projectsData = [
  {
    id: 1,
    title: 'ChatiFy',
    description: 'A chating app provides real time intraction, allows functionality such as making channels and sharing images',
    imgSrc: './projectimg/images/project1.jpg',
    caseStudyLink: 'https://github.com/kumarvishwajeettrivedi/chatify',
    skills: ['JavaScript', 'React', 'socket.io','Node.js', 'Express', 'MongoDB','Vue.js']
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    imgSrc: './assets/jpeg/project-mockup-example.jpeg',
    caseStudyLink: 'https://github.com/your-repo/project-2',
    skills: ['Node.js', 'Express', 'MongoDB']
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    imgSrc: './assets/jpeg/project-mockup-example.jpeg',
    caseStudyLink: 'https://github.com/your-repo/project-3',
    skills: ['HTML', 'CSS', 'JavaScript']
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    imgSrc: './assets/jpeg/project-mockup-example.jpeg',
    caseStudyLink: 'https://github.com/your-repo/project-4',
    skills: ['Python', 'Django', 'PostgreSQL']
  },
  {
    id: 5,
    title: 'Project 5',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    imgSrc: './assets/jpeg/project-mockup-example.jpeg',
    caseStudyLink: 'https://github.com/your-repo/project-5',
    skills: ['Vue.js', 'Vuex', 'SCSS']
  },
  {
    id: 6,
    title: 'Project 5',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    imgSrc: './assets/jpeg/project-mockup-example.jpeg',
    caseStudyLink: 'https://github.com/your-repo/project-5',
    skills: ['Vue.js', 'Vuex', 'SCSS']
  },
  {
    id: 7,
    title: 'Project 5',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    imgSrc: './assets/jpeg/project-mockup-example.jpeg',
    caseStudyLink: 'https://github.com/your-repo/project-5',
    skills: ['Vue.js', 'Vuex', 'SCSS']
  },
  
];

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState(4);
  const projectsRef = useRef([]);

  const handleLoadMore = () => {
    setVisibleProjects((prevVisible) => prevVisible + 4);
  };

  const handleShowLess = () => {
    setVisibleProjects(4);
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

    projectsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      projectsRef.current.forEach((el) => {
        if (el) observer.unobserve(el);
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
              ref={(el) => (projectsRef.current[index] = el)}
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
