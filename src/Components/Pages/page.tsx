import { Outlet } from "react-router-dom";
import MenuBox from "../Menu/boxForMenu";
import "./styles.css";

function Page() {
  return (
    <>
      <MenuBox/>
      <div className="page">
        <Outlet />
      </div>
    </>
    
  );
}

export default Page;
