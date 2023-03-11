import { useContext, useState, useEffect } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import HeaderSection from "../sections/HeaderSection";
import FooterSection from "../sections/FooterSection";
import SidebarSection from "../sections/SidebarSection";
import { SidebarContext } from "../contexts/SidebarContext";
import { AuthContext } from "../contexts/AuthContext";

function MainLayout() {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { loggedIn, setLoggedIn } = useContext(AuthContext);

  const [progress, setProgress] = useState(0);

  const url = useLocation();

  useEffect(() => {
    (localStorage.getItem('token') ? setLoggedIn(true) : setLoggedIn(false))
    handleSidebar();
    setProgress(50);
    setTimeout(() => {
      setProgress(100);
    }, 100);
  }, [url]);

  const handleSidebar = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <div
        className={`${isOpen && "cursor-pointer"}`}
        onClick={() => isOpen && handleSidebar()}>
        <HeaderSection />
        <Outlet />
        <FooterSection />
      </div>
      {isOpen && <SidebarSection />}
      <LoadingBar
        height={4}
        color={`#2a2a2a`}
        progress={progress}
        shadow={true}
        transitionTime={500}
        onLoaderFinished={() => setProgress(0)}
      />
    </>
  );
}

export default MainLayout;
