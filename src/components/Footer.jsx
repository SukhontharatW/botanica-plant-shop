import { Link } from "react-router-dom";
import CompanyLogo from "../images/logo.svg";
function Footer() {
  return (
    <footer className="container bgcolor__black" id="footer">
      <div className="container__main ">
        <div className="container__footer">
          <div className="footer__left">
            <Link>
              <img src={CompanyLogo} alt="" />
            </Link>
            <h2 className="heading__h2 spacing__medium">
              Let us be your partner in plants.
            </h2>
            <div className="footer__social">
              <p className="social__tw paragraph__normal">tw</p>
              <p className="social__fb paragraph__normal">fb</p>
              <p className="social__ig paragraph__normal">ig</p>
            </div>
          </div>
          <div className="footer__middle">
            <div className="footer__middle-top">
              <div className="footer__nav">
                <h4 className="heading__h4 paragraph__strong">Navigation</h4>
                <ul className="nav__group">
                  <li className="nav__group-item">
                    <Link className="nav__group-link heading__h5 opacity__medium">
                      About Us
                    </Link>
                  </li>
                  <li className="nav__group-item">
                    <Link className="nav__group-link heading__h5 opacity__medium">
                      Our Products
                    </Link>
                  </li>
                  <li className="nav__group-item">
                    <Link className="nav__group-link heading__h5 opacity__medium">
                      Gardening Blog
                    </Link>
                  </li>
                  <li className="nav__group-item">
                    <Link className="nav__group-link heading__h5 opacity__medium">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="footer__nav">
                <h4 className="heading__h4 paragraph__strong">Support</h4>
                <ul className="nav__group">
                  <li className="nav__group-item">
                    <Link className="nav__group-link heading__h5 opacity__medium">
                      Track Order
                    </Link>
                  </li>
                  <li className="nav__group-item">
                    <Link className="nav__group-link heading__h5 opacity__medium">
                      Refund Policy
                    </Link>
                  </li>
                  <li className="nav__group-item">
                    <Link className="nav__group-link heading__h5 opacity__medium">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="nav__group-item">
                    <Link className="nav__group-link heading__h5 opacity__medium">
                      Terms & Condition
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer__middle-bottom">
              <div className="footer__nav">
                <h4 className="heading__h4 paragraph__strong">Contact</h4>
                <ul className="nav__group">
                  <li className="nav__group-item">
                    <Link className="nav__group-link heading__h5 opacity__medium">
                      Phone
                    </Link>
                  </li>
                  <li className="nav__group-item">
                    <Link className="nav__group-link heading__h5 opacity__medium">
                      Location
                    </Link>
                  </li>
                  <li className="nav__group-item">
                    <Link className="nav__group-link heading__h5 opacity__medium">
                      Email Address
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer__right">
            <p className="paragraph__strong spacing__max">NEWSLETTER</p>
            <h3 className="heading__h3">
              Get updates and promo from us every week!
            </h3>
            <div className="footer__cta">
              <input
                className="footer__cta-input heading__h5"
                type="text"
                placeholder="Enter email address ..."
              />
              <Link className="btn__main">Subscribe</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
