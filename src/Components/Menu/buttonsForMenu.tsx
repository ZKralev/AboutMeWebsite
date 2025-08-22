import "./styles.css";
import { Link } from "react-router-dom";


type props = {
  label: string;
  path: string;
};

function MenuButton(props: props) {
  const isExternal = /^https?:\/\//i.test(props.path);

  if (isExternal) {
    return (
      <a href={props.path} target="_blank" rel="noopener noreferrer">
        <div className="bn5">
          <div className="bn5-text">{props.label}</div>
        </div>
      </a>
    );
  }

  return (
    <Link to={props.path}>
      <div className="bn5">
        <div className="bn5-text">{props.label}</div>
      </div>
    </Link>
  );
}

export default MenuButton;
