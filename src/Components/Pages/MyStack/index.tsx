import fullstk from "../../images/stack.jpg";
import './styles.css';
import React from 'react';
import icon1 from './icons/browser.png'
import icon2 from './icons/docker.png'
import icon3 from './icons/golang_icon.svg'
import icon4 from './icons/java_logo_logos_icon.svg'
import icon5 from './icons/linux.png'
import icon6 from './icons/react_react native_icon.svg'
import icon7 from './icons/spring_boot_icon.svg'
import icon8 from './icons/typescript_icon.svg'
import icon9 from './icons/ubuntu.png'
import icon10 from './icons/windows_icon.svg'
import icon11 from './icons/k8s.png'
import icon12 from './icons/helm.png'

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
  helm: icon12
}

interface Props {
  iconName: string;
}

const Icon: React.FC<Props> = ({ iconName }) => {
  const Icon = icons[iconName];
  return <img className="icon" src={Icon} width={50} height={50} alt={iconName} />
}

const MyStack: React.FC = () => {
  const iconNames = ['browser', 'docker', 'golang', 'java', 'linux', 'react', 'spring', 'typescript', 'ubuntu', 'windows', 'k8s', 'helm'];
  return (
    <div className="my-stack">
      <img src={fullstk} className="image" alt="" />
      <div className="page-text">
        <h1> Tech Stack: </h1>
        <div className="icon-container">
          {iconNames.map(iconName => <Icon key={iconName} iconName={iconName} />)}
        </div>
      </div>
    </div>
  )
}

export default MyStack;
