/* eslint-disable no-unused-vars */
import Testimonial from "../components/Testimonial";
import Plant from "../components/Plant";
import Blog from "../components/Blog";
import CallToAction from "../components/CallToAction";
import About from "../components/About";
import Value from "../components/Value";
import Hero from "../components/Hero";

function Home() {
  return (
    <>
      <Hero />
      <Value />
      <Plant />
      <About />
      <Testimonial />
      <CallToAction />
      <Blog />
    </>
  );
}

export default Home;
