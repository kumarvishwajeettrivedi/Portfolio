import React from 'react';
import Header from './main';
import HeroSection from './hero';
import AboutSection from './about.jsx';
import ProjectsSection from './project.jsx';
import ContactSection from './contact.jsx';
import Footer from './footer.jsx';


function App() {
  
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
