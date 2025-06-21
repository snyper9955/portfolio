import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './component/Header';
import Skill from './component/Skill';
import Footer from './component/Footer';
import Project from './component/Project';
import About from './component/About';
import GraphicDesign from './page/GraphicDesign';
import VideoProj from './page/VideoProj';
import WebProj from './page/WebProj';
import Contact from './component/Contact';

const MainLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

const App = () => {
  return (
   <Routes>
        <Route
          path="/portfolio"
          element={
            <MainLayout>
              
              <Skill />
              <Contact />
              <Project />
              <About />
            </MainLayout>
          }
        />
        <Route path="/portfolio/design-projects" element={<GraphicDesign />} />
        <Route path="/portfolio/video-projects" element={<VideoProj />} />
        <Route path="/portfolio/web-projects" element={<WebProj />} />
      </Routes>
  );
};

export default App;
