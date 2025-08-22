import me from "../../images/me.jpg";
import "./styles.css";

function AboutMe() {
  return (
    <div className="aup">
      <img src={me} className="image" alt="" />
      <div className="page-text">
        <h1> Zdravko Kralev </h1>
        <h3> Age: 31 </h3>
        <h3> Country: Bulgaria </h3>
        <h3> Mobile: +359 87 6844146 </h3>
        <h3> Email: z.kralev@outlook.com </h3>
        <p>
          I am an achievement-oriented professional who sets ambitious goals and thrives on new challenges. 
          I am committed to continuous learning and to delivering high-quality results, striving to be a top performer and a reliable teammate. 
          I have 4+ years of experience in the IT outsourcing industry and 3+ years in Software Development.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
