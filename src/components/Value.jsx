import Icon1 from "../images/Icon-SUSTAINABILITY.svg";
import Icon2 from "../images/Icon-QUALITY.svg";
import Icon3 from "../images/Icon-COMMUNITY.svg";
import Icon4 from "../images/Icon-CREDIBILITY.svg";
function Value() {
  return (
    <div className="container">
      <div className="container__main">
        <div className="container__value">
          <div className="value__item">
            <div className="value__item-top">
              <img src={Icon1} alt="" />
            </div>
            <h6 className="value__item-bottom heading__h6 spacing__max">
              SUSTAINABILITY
            </h6>
          </div>
          <div className="value__item">
            <div className="value__item-top">
              <img src={Icon2} alt="" />
            </div>
            <h6 className="value__item-bottom heading__h6 spacing__max">
              QUALITY
            </h6>
          </div>
          <div className="value__item">
            <div className="value__item-top">
              <img src={Icon3} alt="" />
            </div>
            <h6 className="value__item-bottom heading__h6 spacing__max">
              COMMUNITY
            </h6>
          </div>
          <div className="value__item">
            <div className="value__item-top">
              <img src={Icon4} alt="" />
            </div>
            <h6 className="value__item-bottom heading__h6 spacing__max">
              CREDIBILITY
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Value;
