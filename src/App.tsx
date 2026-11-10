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
  // Exit stage is derived: the shown page lags the URL by one fade
  const exiting = location.pathname !== displayLocation.pathname;

  useEffect(() => {
    if (!exiting) return;
    const delay = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 300;
    const timeout = setTimeout(() => setDisplayLocation(location), delay);
    return () => clearTimeout(timeout);
  }, [location, exiting]);

  return (
    <div className={exiting ? "page-transition-exit page-transition-exit-active" : "page-transition-enter page-transition-enter-active"}>
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
        <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <AnimatedRoutes />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
