import fullstk from "../../../stack.jpg";
import "./styles.css";

function MyStack() {
  return (
    <div className="msp">
      <img src={fullstk} className="image" alt="" />
      <div className="page-text">
        <h1> So far my stack covers: </h1>
        <p>Icons of all the stacks I KNOW</p>
      </div>
    </div>
  );
}

export default MyStack;
