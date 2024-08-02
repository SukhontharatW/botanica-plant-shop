import { Link } from "react-router-dom";
import { PLANT_DATA } from "./PlantData";
function Plant() {
  // console.log(PLANT_DATA);
  // PLANT_DATA.map((item) => console.log(item[0].id));
  return (
    <div className="container" id="shop">
      <div className="container__main">
        <div className="container__plant">
          <div className="plant__title">
            <h2 className="heading__h2 spacing__medium align__center">
              Discover Your Perfect
              <br />
              Plant Match
            </h2>
            <p className="paragraph__normal opacity__medium align__center">
              Discover a diverse world of greenery, from air-purifying
              succulents to lush tropicals,
              <br /> whether for seasoned plant enthusiasts or those just
              starting their green journey.
            </p>
          </div>

          <div className="plant__group">
            {PLANT_DATA.map((plant) => (
              <PlantItem plant={plant[0]} key={plant[0].id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
function PlantItem({ plant }) {
  const { type, name, ad, img } = plant;
  return (
    <div className="plant__item">
      <div className="plant__image">
        <img src={img} alt="plant image" />
      </div>
      <div className="plant__text">
        <h6 className="heading__h6 spacing__max">{type}</h6>
        <h3 className="heading__h3">{name}</h3>
        {
          <div>
            <p className="paragraph__normal opacity__max">{ad}</p>
            <Link className="btn__main">See More</Link>
          </div>
        }
      </div>
    </div>
  );
}
export default Plant;
