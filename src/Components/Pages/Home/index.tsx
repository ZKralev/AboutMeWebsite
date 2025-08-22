import dev from "../../images/dev.jpg";
import "./styles.css";
import ts from '../MyStack/icons/typescript_icon.svg'
import rect from '../MyStack/icons/react_react native_icon.svg'
import smile from '../../images/smile.png'



function Home() {
  return (
    <div className="hp">
      <img src={dev} className="img-dev" alt="" />
      <div className="page-text hpt">
        <h1 className="h1-text-home">Hello and welcome to my website,</h1>
        <h1 className="h1-text-home">it will tell you a little bit about me</h1>
        <img className="hicon" src={smile} width={50} height={50} alt="smile" />
        <p className="hpt2">This website was created in for exercise purposes.</p>
        <p className="hpt2">I used <img className="hicon" src={ts} width={50} height={50} alt="typescript" /> and <img className="hicon" src={rect} width={50} height={50} alt="react" /> for it.</p>
        <p className="hpt2">P.S. the webpage will work on mobile devices as well ;)</p>
      </div>
    </div>
  );
}

export default Home;
