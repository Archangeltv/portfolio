import "../App.css";
import ipAddress from "../images/IP Address Tracker.png";
import PortData from "./PortData";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Portfolio() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });

  return (
    <section id="portfolio" className="p-8 md:p-16">
      <h4
        data-aos="fade-up"
        className="text-2xl font-bold text-[#EF0178] text-center mb-5 "
      >
        My Works
      </h4>
      <p data-aos="fade-up" className="mb-5 text-center font-bold text-lg">
        I have worked on alot of projects, but here are some:
      </p>
      <div className="flex flex-col gap-5">
        {PortData.map((data) => {
          return (
            <div
              data-aos="fade-up"
              className="flex gap-5 p-3 rounded border items-center justify-between flex-col md:flex-row"
            >
              <img src={data.img} className="md:w-60 w-[100%] rounded" />
              <div className="flex flex-col gap-5">
                <h4 className="text-xl font-bold">{data.h4}</h4>
                <p className="text-lg">{data.p}</p>
                <button className="bg-[#5243C2] w-40 py-2 text-white rounded">
                  <a href={data.link}>View Live Site</a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
