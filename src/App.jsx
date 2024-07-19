import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import Programs from './Components/Programs/Programs';
import About from './Components/About/About';
import Title from './Components/Title/Title';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import Services from './Components/Services/Services'; // Import the Service component

const App = () => {
  const [playState, setplayState] = useState(false);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <MainContent />
              <VideoPlayer playState={playState} setplayState={setplayState} />
            </>
          }
        />
        <Route
          path="/services"
          element={<ServicesPage />}
        />
      </Routes>
    </Router>
  );
};

const MainContent = () => (
  <div className="container">
    <Title subTitle="Our Program" title="What We Offer" />
    <Programs />
    <About />
    <Title subTitle="Gallery" title="Campus Photos" />
    <Campus />
    <Title subTitle="Testimonials" title="What Student Says" />
    <Testimonials />
    <Title subTitle="Contact us" title="Get In Touch" />
    <Contact />
    <Footer />
  </div>
);

const ServicesPage = () => (
  <div className="container" style={{marginTop: '130px'}}>
    <Title subTitle="Our Services" title="Explore Our Services" />
    <Services />
    <Footer />
  </div>
);

export default App;