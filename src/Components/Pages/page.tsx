import AboutMe from "./AboutMe";
import Home from "./Home";
import MyStack from "./MyStack";
import Experience from "./Experience";
import "./styles.css";

function Page() {
  let url = window.location.href;
  let currentPage;
  if (url.includes("About%20Me")) {
    currentPage = <AboutMe />;
  } else if (url.includes("Home")) {
    currentPage = <Home />;
  } else if (url.includes("My%20Stack")) {
    currentPage = <MyStack />;
  } else if (url.includes("Experience")) {
    currentPage = <Experience />;
  } else {
    currentPage = <Home />;
  }
  return <div className="page">{currentPage}</div>;
}

export default Page;
