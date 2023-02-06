import "../App.css";
import Datas from "./Data";
import rand from "../images/rand.png";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });

  return (
    <section id="skills" className="p-8 md:px-16 text-center">
      <h2
        data-aos="fade-up"
        className=" mb-5 text-2xl text-[#EF0178] font-bold "
      >
        My Skills
      </h2>
      <p data-aos="fade-up" className="mb-5 text-lg font-bold">
        The following are some of the tools I use and the services I offer:
      </p>
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 items-center justify-center gap-5 md:grid-cols-4"
      >
        {Datas.map((data) => {
          return (
            <div>
              <img src={data.img} className="m-auto" />
              <h4 className="font-bold my-2">{data.h4}</h4>
              <p className="text-lg">{data.p}</p>
            </div>
          );
        })}
      </div>
      <div
        data-aos="fade-up"
        className=" z-0 flex bg-[#5243C2] mt-8 rounded-2xl flex-col md:flex-row h-40 items-center relative overflow-hidden gap-3 justify-center md:justify-between p-6 md:p-16 "
      >
        <h2 className="text-white font-bold text-2xl">
          Hire Me as your Web Developer
        </h2>
        <img
          src={rand}
          alt="Illustration"
          className="absolute top-0 md:left-16 "
        />
        <button className="bg-white  w-40 py-2 rounded text-[#5243C2] text-lg font-bold">
          <a href="#contact">Hire Me</a>
        </button>
      </div>
    </section>
  );
}

export default Skills;
