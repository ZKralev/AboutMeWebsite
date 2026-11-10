import fullstk from "../../images/stack.jpg";
import './styles.css';
import browser from './icons/browser.png'
import docker from './icons/docker.png'
import golang from './icons/golang.png'
import java from './icons/java_logo_logos_icon.svg'
import linux from './icons/linux.png'
import react from './icons/react_react native_icon.svg'
import spring from './icons/springboot.png'
import typescript from './icons/typescript_icon.png'
import ubuntu from './icons/ubuntu.png'
import windows from './icons/windows.png'
import k8s from './icons/k8s.png'
import helm from './icons/helm.png'
import azure from './icons/azure.png'
import ado from './icons/ado.svg'
import json from './icons/json.svg'
import atlassian from './icons/atlassian.svg'
import postgresql from './icons/postgresql.svg'
import rabbitmq from './icons/rabbitmq.svg'
import amazonwebservices from './icons/amazonwebservices.svg'
import githubactions from './icons/githubactions.svg'
import php from './icons/php.svg'
import laravel from './icons/laravel.svg'
import tailwindcss from './icons/tailwindcss.svg'
import bash from './icons/bash.svg'

// One entry per technology, in display order
const STACK: [icon: string, label: string][] = [
  [browser, "Web Browsers"],
  [docker, "Docker"],
  [golang, "Go / Golang"],
  [java, "Java"],
  [linux, "Linux"],
  [react, "React"],
  [spring, "Spring Boot"],
  [typescript, "TypeScript"],
  [ubuntu, "Ubuntu"],
  [windows, "Windows"],
  [k8s, "Kubernetes"],
  [helm, "Helm Charts"],
  [azure, "Azure"],
  [ado, "ADO Pipelines"],
  [json, "JSON"],
  [atlassian, "Atlassian"],
  [postgresql, "PostgreSQL"],
  [rabbitmq, "RabbitMQ"],
  [amazonwebservices, "AWS"],
  [githubactions, "GitHub Actions"],
  [php, "PHP"],
  [laravel, "Laravel"],
  [tailwindcss, "Tailwind CSS"],
  [bash, "Bash"],
];

function MyStack() {
  return (
    <div className="my-stack animate-fade-in-up">
      <img src={fullstk} className="img-fullstk" alt="" />
      <div className="page-text">
        <h1 className="stack-heading"> Tech Stack </h1>
        <div className="icon-container">
          {STACK.map(([icon, label]) => (
            <div key={label} className="icon-wrapper">
              <img className="icon" src={icon} width={50} height={50} alt="" />
              <span className="icon-label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyStack;
