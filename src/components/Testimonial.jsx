import { TESTIMONIAL_DATA } from "./TestimonialData";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Words from "../images/word.svg";

import "@splidejs/react-splide/css";
// import "@splidejs/react-splide/css/skyblue";
// import "@splidejs/react-splide/css/sea-green";
// import "@splidejs/react-splide/css/core";

function Testimonial() {
  // TESTIMONIAL_DATA.map((item) => console.log(item[0].name));

  return (
    <div className="container">
      <div className="container__main">
        <div className="container__testimonial">
          <h2 className="heading__h2 spacing__medium ">Our Testimonials</h2>

          <div className="testimonial">
            <Splide
              options={{
                perPage: 2,
                autoplay: false,
                speed: 1000,
                rewind: false,
                rewindByDrag: true,
                breakpoints: {
                  800: {
                    perPage: 1,
                  },
                },
              }}
            >
              {TESTIMONIAL_DATA.map((item) => (
                <SplideSlide key={item[0].id}>
                  <img className="testimonial__word" src={Words} alt="" />
                  <p className="paragraph__normal opacity__max">
                    {item[0].review}
                  </p>
                  <h4 className="heading__h4">{item[0].name}</h4>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
