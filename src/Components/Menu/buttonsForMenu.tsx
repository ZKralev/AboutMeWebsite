import * as React from "react";

type props = {
  label: string;
};

function MenuButton(props: props) {
  return (
    <div className="button-box">
      <div>{props.label}</div>
    </div>
  );
}

export default MenuButton;
