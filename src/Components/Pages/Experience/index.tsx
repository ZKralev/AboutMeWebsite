import fullstk from "../../images/work-experience.jpg";
import './styles.css';
import jobs from "./data.json";
import pros from "./logos/pros.png"
import crypto from "./logos/crypto.png"
import modis from "./logos/modis.png"

const logoMap: Record<string, string> = {
  "PROS": pros,
  "Modis": modis,
  "Crypto.com": crypto,
};

function Experience() {
  return (
    <div className="exp animate-fade-in-up">
      <img src={fullstk} className="exp-img" alt="Work experience" />
      <div className="page-text">
        <h1 className="exp-heading">Work Experience</h1>
        <div className="timeline">
          {jobs.map((job, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <h2 className="job-title">{job.title}</h2>
                  <span className="job-dates">{job.dates}</span>
                </div>
                <div className="job-company-row">
                  {logoMap[job.company] && (
                    <img src={logoMap[job.company]} className="comp-logo" alt={job.company} />
                  )}
                </div>
                <p className="job-description">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
