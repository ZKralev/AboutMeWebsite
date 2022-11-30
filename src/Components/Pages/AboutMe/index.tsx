import dev from "../../../dev.jpg";
import "./styles.css";

function AboutMe() {
  return (
    <div className="aup">
      <img src={dev} className="image" alt="" />
      <div className="page-text">
        <h1> Zdravko Kralev </h1>
        <h3> Age: 28 </h3>
        <h3> Country: Bulgaria </h3>
        <p>
          I'm a developer for the last 2 years, and professionaly for a little
          more than half a year.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
