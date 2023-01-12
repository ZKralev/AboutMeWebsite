import dev from "../../../dev.jpg";
import "./styles.css";
import ts from '../MyStack/icons/typescript_icon.svg'
import rect from '../MyStack/icons/react_react native_icon.svg'
import smile from '../../../smile.png'



function Home() {
  return (
    <div className="hp">
      <img src={dev} className="image" alt="" />
      <div className="page-text hpt">
        <h1 className="h1"> Hello and welcome to my website, which will tell you a little bit about me</h1>
        <img className="hicon" src={smile} width={50} height={50} alt="smile" />
        <p>This website was created in for exercise purposes.</p>
        <p>I used <img className="hicon" src={ts} width={50} height={50} alt="typescript" /> and <img className="hicon" src={rect} width={50} height={50} alt="react" /> for it.</p>
      </div>
    </div>
  );
}

export default Home;
