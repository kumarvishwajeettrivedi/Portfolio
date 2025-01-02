import React, { useState, useEffect } from 'react';
import linkedinIco from './assets/images/linkdin-inc.png';
import githubIco from './assets/images/github-inc.png';
import codechef from './assets/images/codechef-inc.png';
import ytIco from './assets/images/yt-inc.png';
import instaIco from './assets/images/instagram-inc.png';
import resume from './assets/resume.pdf';
import './hero.css';
import BlobCanvas from './bolb.jsx';
import BlobCanvas2 from './blob2.jsx';
import BlobCanvas3 from './bolb3.jsx';

function HeroSection() {
  const [renderBlobs, setRenderBlobs] = useState(true);
  const [isSafari, setIsSafari] = useState(false);

useEffect(() => {
    
    const userAgent = navigator.userAgent;
    const isSafariBrowser = userAgent.includes("Safari") && !userAgent.includes("Chrome");
    setIsSafari(isSafariBrowser);

    if (isSafariBrowser) {
    
      const alertTimeout = setTimeout(() => {
        alert("😔 Soorry, blobs are not compatible with Safari ...🥺Please open this link in other browser...working on issue");
       
      }, 3000);
      return () => clearTimeout(alertTimeout);
    }
  }, []);

  
  useEffect(() => {
    const handleScroll = () => {
      const homeHero = document.querySelector('.home-hero');
      const homeHeroHeight = homeHero.offsetHeight;
      const scrollPosition = window.scrollY;
    if(!isSafari){
      if (scrollPosition+500 >= homeHeroHeight) {
        setRenderBlobs(false);
      } else {
        setRenderBlobs(true);
      }
    }
    };

    window.addEventListener('scroll', handleScroll);

   
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="home-hero">
      {
    renderBlobs && (
      <>
        <BlobCanvas />
        <BlobCanvas2 />
        <BlobCanvas3 />
      </>
    
  )}
      

      <div className="home-hero__socials">
        <a href="https://www.linkedin.com/in/vishwajeet-kumar-5b7530242" className="home-hero__social-icon-link" data-platform="linkedin" aria-label="LinkedIn">
          <img src={linkedinIco} alt="LinkedIn Icon" className="home-hero__social-icon" />
        </a>
        <a href="https://github.com/kumarvishwajeettrivedi" className="home-hero__social-icon-link" data-platform="github" aria-label="GitHub">
          <img src={githubIco} alt="GitHub Icon" className="home-hero__social-icon" />
        </a>
        <a href="https://www.codechef.com/users/kalkin07" className="home-hero__social-icon-link" data-platform="codechef" aria-label="CodeChef">
          <img src={codechef} alt="CodeChef Icon" className="home-hero__social-icon" />
        </a>
        <a href="https://www.youtube.com/@curious_insan07" className="home-hero__social-icon-link" data-platform="youtube" aria-label="YouTube">
          <img src={ytIco} alt="YouTube Icon" className="home-hero__social-icon" />
        </a>
        <a href="https://www.instagram.com/curious_insan/" className="home-hero__social-icon-link" data-platform="instagram" aria-label="Instagram">
          <img src={instaIco} alt="Instagram Icon" className="home-hero__social-icon" />
        </a>
      </div>
   
    
      <div className="home-hero__content">
      {
    renderBlobs && (
      <>
        <BlobCanvas />
        <BlobCanvas2 />
        <BlobCanvas3 />
      </>
    
  )}
        
        <h1 className="heading-primary">Hey, I'm Vishwajeet Kumar</h1>
        
        <div className="home-hero__info">
          <p className="text-primary">

          "Passionate software developer with a love for machine learning, tech, and web 
          development. I enjoy tackling complex problems, creating smart solutions, and building engaging web experiences. 
          Check out my portfolio to see what I’ve been working on and what drives me."          </p>
        </div>
       
        <div className="home-hero__cta">
          <a href="#projects" className="btn">Projects</a>
        </div>
      </div>

      <a href={resume} download="Vishwajeet_Kumar_Resume.pdf" className="download-resume">
        Download Resume
      </a>
      
      <div className="home-hero__mouse-scroll-cont">
        <div className="mouse"></div>
      </div>
    </section>
  );
}

export default HeroSection;
