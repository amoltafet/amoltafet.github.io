import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Research from "./sections/Research";
import Education from "./sections/Education";
import Main from "./sections/Main";
import { useState } from 'react';
import { useEffect } from 'react';
import Work from './sections/Work';
import { IconButton } from '@mui/material';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={
            <div style={{
              margin: "10%",
            }}>
              <div id="home"><Home /></div>
              <div id="projects"><Projects /></div>
              <div id="skills"><Skills /></div>
              <div id="research"><Research /></div>
              <div id="education"><Education /></div>
              <div id="work"><Work /></div>
  
            </div>
          } />
        </Routes>
      </div>
      <div className="scroll-to-top">
      {isVisible && 
        <Link smooth to="/#home">
          <IconButton>
          Scroll to top
          </IconButton>
        </Link>
        }
    </div>
    </Router>
  );
}

export default App;