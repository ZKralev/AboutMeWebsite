import me from "../../images/me.jpg";
import "./styles.css";

function AboutMe() {
  return (
    <div className="aup animate-fade-in-up">
      <img src={me} className="img-me" alt="me" />
      <div className="page-text">
        <h1 className="h1-text-about-me"> Zdravko Kralev </h1>
        <h3 className="h3-text"> Age: 31 </h3>
        <h3 className="h3-text"> Country: Bulgaria </h3>
        <h3 className="h3-text"> Mobile: +359 87 6844146 </h3>
        <h3 className="h3-text"> Email: z.kralev@outlook.com </h3>
        <p className="p-text-about-me">
          Building things that work well and learning to make them better is what drives me. 
          Clean code, solid systems, and being a teammate people can count on matter a lot. 
          With 5+ years in IT outsourcing and 4+ years in software development, the focus has been on backend services, cloud infrastructure, and modern web stacks.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
