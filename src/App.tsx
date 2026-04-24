import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import About from "./Components/Pages/AboutMe/index";
import Home from "./Components/Pages/Home/index";
import MyStack from "./Components/Pages/MyStack/index";
import Experience from "./Components/Pages/Experience/index";
import Page from "./Components/Pages/page"
import { ThemeProvider } from "./context/ThemeContext";

function AnimatedRoutes() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState("page-transition-enter page-transition-enter-active");

  
  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setTransitionStage("page-transition-exit page-transition-exit-active");
      const timeout = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage("page-transition-enter page-transition-enter-active");
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [location, displayLocation]);

  return (
    <div className={transitionStage}>
      <Routes location={displayLocation}>
        <Route path="/" element={<Page />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="stack" element={<MyStack />} />
          <Route path="exp" element={<Experience />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <AnimatedRoutes />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
