import "../App.css";
import about from "../images/about.png";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });

  return (
    <section
      id="about"
      className="grid md:grid-cols-2 items-center justify-center p-8 md:px-16 gap-5"
    >
      <img src={about} className="row-start-2 md:row-auto" />
      <div className="flex flex-col gap-5 items-center md:items-start text-center md:text-start">
        <h2 className="text-2xl font-bold text-[#EF0178]" data-aos="fade-up">
          About Me
        </h2>
        <p className="text-lg" data-aos="fade-up">
          I am Self Taught web developer with a strong background in both design
          and development. To every project, I contribute a special combination
          of artistic and technical skills. When I'm not writing code, you'd
          find me researching about latest technologies and coming up with more
          innovative ideas.
        </p>
        <ul
          data-aos="fade-up"
          className="flex md:block items-center justify-around gap-9 text-lg marker:text-[#5243C2] list-disc p-0 md:ml-4"
        >
          <li>iLearn</li>
          <li>iDesign</li>
          <li>iCode</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
