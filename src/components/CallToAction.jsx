import { Link } from "react-router-dom";
function CallToAction() {
  return (
    <div className="container">
      <div className="container__main">
        <div className="container__cta">
          <h2 className="heading__h2 spacing__medium align__center">
            Ready for Your Best Plant Experience?
          </h2>
          <p className="paragraph__normal lign__center">
            Take the first step towards transforming your space into a lush
            haven of greenery.
            <br /> Browse our exquisite plant selection and let nature&apos;s
            beauty thrive in your home.
          </p>
          <Link className="btn__main">Shop Now</Link>
        </div>
      </div>
    </div>
  );
}
export default CallToAction;
