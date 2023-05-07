import React, { useEffect, useState } from "react";
import Main from "./sections/Main.js";
import Custom404 from "./Custom404.js";
import Work from "./sections/Work.js";
import Projects from "./sections/Projects.js";
import Skills from "./sections/Skills.js";
import Research from "./sections/Research.js";
import CssBaseline from "@mui/material/CssBaseline";
import Education from "./sections/Education.js";
import Home from "./sections/Home.js";

function App() {
  const [componentToShow, setComponentToShow] = useState(<Main />);

  useEffect(() => {
    console.log(window.location.hash);
    switch (window.location.hash) {
      case "#work":
        setComponentToShow(<Work />);
        break;
      case "#projects":
        setComponentToShow(<Projects />);
        break;
      case "#skills":
        setComponentToShow(<Skills />);
        break;
      case "#research":
        setComponentToShow(<Research />);
        break;
      case "#education":
        setComponentToShow(<Education />);
        break;
        case "#home":
          setComponentToShow(<Home />);
          break;
      default:
        setComponentToShow(<Main />);
    }
    //  reload the page when the hash changes
    window.addEventListener("hashchange", () => {
      window.location.reload();
    });
  }, [window.location.hash]);

  return (
    <div>
      <CssBaseline />
      {componentToShow}
    </div>
  );
}

export default App;
