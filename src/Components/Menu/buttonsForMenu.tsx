import "./styles.css";

type props = {
  label: string;
};

function MenuButton(props: props) {
  const onClickHandler = (url: string) => {
    window.location.href = url;
  };

  return (
    <div className="bn5" onClick={() => onClickHandler(props.label)}>
      <div className="bn5-text">{props.label}</div>
    </div>
  );
}

export default MenuButton;
