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

// Layout that wraps the main routes
const MainLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

// Main App Component
const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              {/* Sections with IDs used in Header for scrolling */}
              <Skill />
              
              <Contact />
              <Project />
              <About />
            </MainLayout>
          }
        />
        {/* Other pages not requiring full layout */}
        <Route path="/design-projects" element={<GraphicDesign />} />
        <Route path="/video-projects" element={<VideoProj />} />
        <Route path="/web-projects" element={<WebProj />} />
      </Routes>
    </>
  );
};

export default App;
