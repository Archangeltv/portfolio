import "../App.css";
import hero from "../images/hero.png";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Hero() {
  useEffect(() => {
    Aos.init({});
  });

  return (
    <section
      id="home"
      className="mt-[70px] px-8 md:px-16 md:text-left py-4 text-center grid md:grid-cols-2 gap-5 items-center justify-center"
    >
      <div className="flex flex-col gap-5 mb-5 md:mb-0">
        <h1 className="text-2xl font-extrabold md:text-3xl">
          Hi, I'm{" "}
          <span className="text-[#EF0178]" data-aos="fade-up">
            Aimiuwu Victor.
          </span>{" "}
          I am a{" "}
          <span className=" text-[#EF0178] ">Frontend Web Developer</span> based
          in Nigeria.
        </h1>
        <p className="text-lg">
          I am a developer who takes pride in writing efficient, maintainable,
          and scalable code. I create websites that are not just functional but
          also visually appealing and user-friendly.
        </p>
        <button className="md:self-start self-center bg-[#5243C2] w-40 py-2 text-white rounded">
          <a href="#contact">Contact Me</a>
        </button>
      </div>
      <img src={hero} className="row-start-1 md:row-auto" />
    </section>
  );
}

export default Hero;
