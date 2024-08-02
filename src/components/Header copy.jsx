// import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CompanyLogo from "../images/logo.svg";
import { Link } from "react-router-dom";

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

  return (
    <div className="container">
      <div className="container__main">
        <div
          className={color ? "container__nav container__bg" : "container__nav"}
        >
          <div className="navbar">
            <Link>
              <img src={CompanyLogo} alt="company logo" />
            </Link>

            <ul className="navigation">
              <li className="navbar__item">
                <Link className="navbar__link heading__h4">About</Link>
              </li>
              <li className="navbar__item">
                <Link className="navbar__link heading__h4">Shop</Link>
              </li>
              <li className="navbar__item">
                <Link className="navbar__link heading__h4">Blog</Link>
              </li>
              <li className="navbar__item">
                <Link className="navbar__link heading__h4">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="navbar sidebar">
            <Link>
              <img src={CompanyLogo} alt="company logo" />
            </Link>

            <ul className="navigation">
              <li className="navbar__item">
                <Link className="navbar__link heading__h4">About</Link>
              </li>
              <li className="navbar__item">
                <Link className="navbar__link heading__h4">Shop</Link>
              </li>
              <li className="navbar__item">
                <Link className="navbar__link heading__h4">Blog</Link>
              </li>
              <li className="navbar__item">
                <Link className="navbar__link heading__h4">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
