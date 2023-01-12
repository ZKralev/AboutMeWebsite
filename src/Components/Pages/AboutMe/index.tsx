import me from "../../../me.jpg";
import "./styles.css";

function AboutMe() {
  return (
    <div className="aup">
      <img src={me} className="image" alt="" />
      <div className="page-text">
        <h1> Zdravko Kralev </h1>
        <h3> Age: 28 </h3>
        <h3> Country: Bulgaria </h3>
        <h3> Mobile: +359 87 6844146 </h3>
        <h3> Email: z.kralev@outlook.com </h3>
        <p>
        I would describe myself as achievement-oriented person, who sets his goals high. I love new challenges and always motivated to learn new skills. Committed to my job and anything that I do, drive to be a top performer and help my team at any time. In the IT outsourcing business for 4+ years and now working on changing my carrier path to Software Development.
          In the last 2 years I was studying in SoftUni Bulgaria and was able to get my first job as Developer in Pros in the summer of 2022. So hard work does payout after all. :)
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
