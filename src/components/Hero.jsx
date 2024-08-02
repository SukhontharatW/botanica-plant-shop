import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container">
      <div className="container__main bg-green-white">
        <div className="container__hero">
          <div className="hero__top">
            <div className="hero__greeting">
              <h1 className="heading__h1 spacing__min">
                The Art of Green Living
              </h1>
              <p className="paragraph__normal opacity__medium">
                Step into our botanical wonderland, where every plant tells a
                story and promises.
              </p>
              <button className="btn__main">Shop Now</button>
            </div>
          </div>
          <div className="hero__bottom">
            <ul className="hero__plant">
              <li>
                <Link className="hero__plant-link heading__h4">Home Plant</Link>
              </li>
              <li>
                <Link className="hero__plant-link heading__h4">
                  Indoor Plant
                </Link>
              </li>
              <li>
                <Link className="hero__plant-link heading__h4">
                  Outdoor Plant
                </Link>
              </li>
              <li>
                <Link className="hero__plant-link heading__h4">
                  Accessoriest
                </Link>
              </li>
            </ul>

            <div className="hero__detail">
              <h3 className="heading__h3 hero__right-title">Zanzibar Gem</h3>
              <p className="paragraph__normal opacity__max">
                Zamioculcas is genus of flowering plants in the family Araceae,
                containing the single species Zamioculcas zamiifolia. It is a
                tropical perennial plant, native to eastern Africa, from
                southern Kenya to northeastern South Africa.
              </p>
              <Link className="btn__read heading__h4">Read More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
