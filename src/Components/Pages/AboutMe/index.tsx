import me from "../../images/me.jpg";
import "./styles.css";

const WHAT_I_DO = [
  ["Microservices", "Go services behind a gateway, with Cadence workflows for long-running operations."],
  ["Containerization", "Optimized Dockerfiles and deployments with Helm Charts, Kustomize and ArgoCD."],
  ["Infrastructure as code", "Kubernetes manifests, Helm Charts and Kustomize overlays that ship with the code."],
  ["Performance tuning", "Profiling and optimizing backend logic for high-load scenarios."],
  ["Rapid prototyping", "AI-assisted workflows (Claude Code, MCP, OpenSpec) to deliver robust MVPs fast."],
];

function AboutMe() {
  return (
    <div className="aup animate-fade-in-up">
      <img src={me} className="img-me" alt="Zdravko Kralev" />
      <div className="page-text">
        <h1 className="h1-text-about-me"> Zdravko Kralev </h1>
        <h2 className="h2-text-about-me">Golang Backend Developer &amp; DevOps Specialist</h2>
        <h3 className="h3-text"> Age: 31 </h3>
        <h3 className="h3-text"> Country: Bulgaria </h3>
        <h3 className="h3-text"> Mobile: +359 87 6844146 </h3>
        <h3 className="h3-text"> Email: z.kralev@outlook.com </h3>
        <p className="p-text-about-me">
          Building things that work well and learning to make them better is what drives me. 
          Clean code, solid systems, and being a teammate people can count on matter a lot. 
          With 5+ years in IT outsourcing and 4+ years in software development, the focus has been on backend services, cloud infrastructure, and modern web stacks.
        </p>
        <p className="p-text-about-me">
          At Conga I build the internal platforms behind cloud operations: a self-service portal,
          a service catalog, a CMDB, and in-house incident and status tooling.
        </p>
        <h2 className="h2-text-about-me">What I do best</h2>
        <ul className="about-list">
          {WHAT_I_DO.map(([title, text]) => (
            <li key={title}><strong>{title}:</strong> {text}</li>
          ))}
        </ul>
        <a className="cv-link" href={`${import.meta.env.BASE_URL}Zdravko-CV.pdf`} download>
          Download CV
        </a>
        <a className="cv-link" href="https://github.com/zkralev-conga" target="_blank" rel="noopener noreferrer">
          Work GitHub
        </a>
      </div>
    </div>
  );
}

export default AboutMe;
