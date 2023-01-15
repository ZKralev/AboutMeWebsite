import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Components/Pages/AboutMe/index";
import Home from "./Components/Pages/Home/index";
import MyStack from "./Components/Pages/MyStack/index";
import Experience from "./Components/Pages/Experience/index";
import Page from "./Components/Pages/page"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          {/* <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/stack" element={<MyStack/>} />
            <Route path="/about" element={<AboutMe/>} />
            <Route path="/exp" element={<Experience/>} />
            <Route path="*" element={<Home />} />
          </Routes> */}
          <Routes>
            <Route path="/" element={<Page />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="stack" element={<MyStack />} />
              <Route path="exp" element={<Experience />} />
              <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
