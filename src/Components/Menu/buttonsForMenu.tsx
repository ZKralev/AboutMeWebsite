import "./styles.css";
import { Link } from "react-router-dom";


type props = {
  label: string;
  path: string;
};

function MenuButton(props: props) {
  return (
    <Link to={`/${props.path}`}>
      <div className="bn5">
        <div className="bn5-text">{props.label}</div>
      </div>
    </Link>
  );
}

export default MenuButton;
