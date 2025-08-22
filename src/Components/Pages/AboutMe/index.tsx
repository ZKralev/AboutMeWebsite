import me from "../../images/me.jpg";
import "./styles.css";

function AboutMe() {
  return (
    <div className="aup">
      <img src={me} className="img-me" alt="me" />
      <div className="page-text">
        <h1 className="h1-text-about-me"> Zdravko Kralev </h1>
        <h3 className="h3-text"> Age: 31 </h3>
        <h3 className="h3-text"> Country: Bulgaria </h3>
        <h3 className="h3-text"> Mobile: +359 87 6844146 </h3>
        <h3 className="h3-text"> Email: z.kralev@outlook.com </h3>
        <p className="p-text-about-me">
          I am an achievement-oriented professional who sets ambitious goals and thrives on new challenges. 
          I am committed to continuous learning and to delivering high-quality results, striving to be a top performer and a reliable teammate. 
          I have 4+ years of experience in the IT outsourcing industry and 3+ years in Software Development.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
