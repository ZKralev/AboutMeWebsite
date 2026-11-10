import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import MenuBox from "../Menu/boxForMenu";
import "./styles.css";

const TITLES: Record<string, string> = {
  "/stack": "My Stack",
  "/about": "About Me",
  "/exp": "Experience",
};

function Page() {
  const { pathname } = useLocation();
  useEffect(() => {
    const name = TITLES[pathname.replace(/\/$/, "")];
    document.title = name ? `${name} | Zdravko Kralev` : "Zdravko Kralev";
  }, [pathname]);

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
