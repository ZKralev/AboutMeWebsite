import fullstk from "../../images/stack.jpg";
import './styles.css';
import React from 'react';
import icon1 from './icons/browser.png'
import icon2 from './icons/docker.png'
import icon3 from './icons/golang.png'
import icon4 from './icons/java_logo_logos_icon.svg'
import icon5 from './icons/linux.png'
import icon6 from './icons/react_react native_icon.svg'
import icon7 from './icons/springboot.png'
import icon8 from './icons/typescript_icon.png'
import icon9 from './icons/ubuntu.png'
import icon10 from './icons/windows.png'
import icon11 from './icons/k8s.png'
import icon12 from './icons/helm.png'
import icon13 from './icons/azure.png'
import icon14 from './icons/ado.svg'
import icon15 from './icons/json.svg'
import icon16 from './icons/atlassian.svg'
import icon17 from './icons/postgresql.svg'
import icon18 from './icons/rabbitmq.svg'
import icon19 from './icons/amazonwebservices.svg'
import icon20 from './icons/githubactions.svg'
import icon21 from './icons/php.svg'
import icon22 from './icons/laravel.svg'
import icon23 from './icons/tailwindcss.svg'
import icon24 from './icons/bash.svg'

const icons: { [key: string]: string } = {
  browser: icon1,
  docker: icon2,
  golang: icon3,
  java: icon4,
  linux: icon5,
  react: icon6,
  spring: icon7,
  typescript: icon8,
  ubuntu: icon9,
  windows: icon10,
  k8s: icon11,
  helm: icon12,
  azure: icon13,
  ado: icon14,
  json: icon15,
  atlassian: icon16,
  postgresql: icon17,
  rabbitmq: icon18,
  amazonwebservices: icon19,
  githubactions: icon20,
  php: icon21,
  laravel: icon22,
  tailwindcss: icon23,
  bash: icon24
}

const labels: { [key: string]: string } = {
  browser: "Web Browsers",
  docker: "Docker",
  golang: "Go / Golang",
  java: "Java",
  linux: "Linux",
  react: "React",
  spring: "Spring Boot",
  typescript: "TypeScript",
  ubuntu: "Ubuntu",
  windows: "Windows",
  k8s: "Kubernetes",
  helm: "Helm Charts",
  azure: "Azure",
  ado: "ADO Pipelines",
  json: "JSON",
  atlassian: "Atlassian",
  postgresql: "PostgreSQL",
  rabbitmq: "RabbitMQ",
  amazonwebservices: "AWS",
  githubactions: "GitHub Actions",
  php: "PHP",
  laravel: "Laravel",
  tailwindcss: "Tailwind CSS",
  bash: "Bash"
}

interface Props {
  iconName: string;
}

const Icon: React.FC<Props> = ({ iconName }) => {
  const src = icons[iconName];
  return (
    <div className="icon-wrapper">
      <img className="icon" src={src} width={50} height={50} alt="" />
      <span className="icon-label">{labels[iconName]}</span>
    </div>
  )
}

const MyStack: React.FC = () => {
  const iconNames = ['browser', 'docker', 'golang', 'java', 'linux', 'react', 'spring', 'typescript', 'ubuntu', 'windows', 'k8s', 'helm', 'azure', 'ado', 'json', 'atlassian', 'postgresql', 'rabbitmq', 'amazonwebservices', 'githubactions', 'php', 'laravel', 'tailwindcss', 'bash'];
  return (
    <div className="my-stack animate-fade-in-up">
      <img src={fullstk} className="img-fullstk" alt="" />
      <div className="page-text">
        <h1 className="stack-heading"> Tech Stack </h1>
        <div className="icon-container">
          {iconNames.map(iconName => <Icon key={iconName} iconName={iconName} />)}
        </div>
      </div>
    </div>
  )
}

export default MyStack;
