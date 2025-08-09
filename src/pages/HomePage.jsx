import React from 'react';
import FirstSlide from '../components/FirstSlide';
import Services from '../components/Services';
import Projects from '../components/Projects';
import ContactUs from '../components/ContactUs';

const HomePage = () => {
  return (
    <div>
      <div id="first-slide">
        <FirstSlide />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <ContactUs />
      </div>
    </div>
  );
};

export default HomePage;