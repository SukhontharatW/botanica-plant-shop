/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import CompanyLogo from "../images/logo.svg";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

function Header() {
  const [color, setColor] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      // console.log(position);
      if (position >= 70) {
        setColor(true);
      } else {
        setColor(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const showSideBar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
  };
  const hiddenSideBar = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  };
  return (
    <div className="container">
      <div
        className={color ? "container__nav container__bg" : "container__nav"}
      >
        <div>
          <nav className="sidebar">
            <div className="nav-logo">
              <Link onClick={hiddenSideBar}>
                <HiOutlineX size={30} color="#609351" />
              </Link>
            </div>
            <ul>
              <li onClick={hiddenSideBar}>
                <Link className="navbar__link heading__h4">About</Link>
              </li>
              <li onClick={hiddenSideBar}>
                <Link className="navbar__link heading__h4">Shop</Link>
              </li>
              <li onClick={hiddenSideBar}>
                <Link className="navbar__link heading__h4">Blog</Link>
              </li>
              <li onClick={hiddenSideBar}>
                <Link className="navbar__link heading__h4">Contact</Link>
              </li>
            </ul>
          </nav>
          <nav>
            <div className="nav-logo">
              <Link>
                <img src={CompanyLogo} alt="company logo" />
              </Link>
            </div>
            <ul>
              <li className="hideOnMobile">
                <Link className="navbar__link heading__h4">About</Link>
              </li>
              <li className="hideOnMobile">
                <Link className="navbar__link heading__h4">Shop</Link>
              </li>
              <li className="hideOnMobile">
                <Link className="navbar__link heading__h4">Blog</Link>
              </li>
              <li className="hideOnMobile">
                <Link className="navbar__link heading__h4">Contact</Link>
              </li>
              <li onClick={showSideBar} className="menu-btn">
                <Link className="navbar__link heading__h4">
                  <HiOutlineMenu size={30} color="#609351" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
