import "./styles.css";
import { NavLink } from "react-router-dom";


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
    <NavLink to={props.path} end>
      <div className="bn5">
        <div className="bn5-text">{props.label}</div>
      </div>
    </NavLink>
  );
}

export default MenuButton;
