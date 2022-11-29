import MenuButton from "./buttonsForMenu";
import menu from "./menu.json";
import "./styles.css";

function MenuBox() {
  const allButtons = menu.lables.map((e) => <MenuButton label={e} />);
  return <div className="menu-box">{allButtons}</div>;
}

export default MenuBox;
