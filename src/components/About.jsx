import { Link } from "react-router-dom";
import AboutImg from "../images/About-section.png";
import CompanyLogo from "../images/logo.svg";
function About() {
  return (
    <div className="container" id="about">
      <div className="container__main">
        <div className="container__about">
          <div className="about__text">
            <img src={CompanyLogo} alt="" />
            <h2 className="heading__h2 spacing__medium">
              Embark on Your Best Green Journey with Us
            </h2>
            <p className="paragraph__normal opacity__medium">
              Welcome to Botanica, your online haven for all things green and
              beautiful. At Botanica, we believe in bringing nature closer to
              you, offering an extensive selection of indoor and outdoor plants
              to transform your living spaces into vibrant, thriving ecosystems.
              Explore our virtual aisles, where you&apos;ll discover a curated
              collection of plant types, from low-maintenance succulents to
              exotic orchids, handpicked for their quality and uniqueness. We
              are more than a plant shop. It&apos;s a place of inspiration and
              knowledge.
            </p>
            <div className="about__cta">
              <button className="btn__main">Shop Now</button>
              <Link className="btn__read heading__h4">Read More</Link>
            </div>
          </div>
          <div className="about__image">
            <img src={AboutImg} alt="about image" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
