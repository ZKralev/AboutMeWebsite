import coffee from "../../../coffee.jpeg";
import "./styles.css";

function Home() {
  return (
    <div className="hp">
      <img src={coffee} className="image" alt="" />
      <div className="page-text">
        <h1> Hello and welcome to my custom website :))</h1>
        <p>This website was created in for exercise purposes.</p>
      </div>
    </div>
  );
}

export default Home;
