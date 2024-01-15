import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../pages/shared/NavBar/NavBar";
import { FaArrowUp } from "react-icons/fa";
import Footer from "../pages/shared/Footer/Footer";
import "./layout.css";

const MainLayout = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", function () {
      const offset = window?.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, [setScrolled]);
  return (
    <div className="layout">
      <NavBar />
      <Outlet />
      {scrolled && (
        <div className="iconTop">
          <a href="#">
            <FaArrowUp className="i" />
          </a>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default MainLayout;
