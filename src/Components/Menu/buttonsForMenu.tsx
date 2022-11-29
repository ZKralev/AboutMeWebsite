import "./styles.css";

type props = {
  label: string;
};

function MenuButton(props: props) {
  return (
    <div className="bn5">
      <div className="bn5-text">{props.label}</div>
    </div>
  );
}

export default MenuButton;
