import fullstk from "../../../work-experience.jpg";
import './styles.css';
import jobs from "./data.json";
import pros from "./logos/pros.jpg"
import crypto from "./logos/crypto.png"
import modis from "./logos/modis.png"


function Experience() {
  return (
    <div className="exp">
      <img src={fullstk} className="exp-img" alt="" />
      <div className="page-text">
      <div className="job-separator" />
        {jobs.map((job, index) => (
          <>
            <h1>{job.title}</h1>
            <h4>At</h4>
            {job.company === "PROS" && <img src={pros} className="comp-logo" alt="" />}
            {job.company === "Modis" && <img src={modis} className="comp-logo" alt="" />}
            {job.company === "Crypto.com" && <img src={crypto} className="comp-logo" alt="" />}
            <h5>{job.dates}</h5>
            <p>{job.description}</p>
            {index !== jobs.length - 1 && <div className="job-separator" />}
          </>
        ))}
      </div>
    </div>
  );
}

export default Experience;
