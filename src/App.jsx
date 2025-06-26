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
import ScrollToTop from './component/ScrollToTop';

const MainLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

const App = () => {
  return (
    <>
      <ScrollToTop />
   <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              
              <Skill />
              <Contact />
              <Project />
              <About />
            </MainLayout>
          }
        />
        <Route path="/design-projects" element={<GraphicDesign />} />
        <Route path="/video-projects" element={<VideoProj />} />
        <Route path="/web-projects" element={<WebProj />} />
      </Routes>
    </>
  );
};

export default App;
