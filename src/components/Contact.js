import "../App.css";
import whatsapp from "../images/bxl-whatsapp.svg";
import twitter from "../images/bxl-twitter.svg";
import gmail from "../images/bxl-gmail.svg";
import github from "../images/bxl-github.svg";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useRef } from "react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

function Contact() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i7l9h0f",
        "template_3pirfs5",
        form.current,
        "7A4-3rHIbnPWSRvPd"
      )
      .then(
        (result) => {
          Swal.fire({
            title: "Success!",
            text: "Your Message has been delivered successfully!",
            icon: "success",
            button: "Go back!",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="px-8 py-4 md:px-16">
      <h2
        data-aos="fade-up"
        className="text-center text-[#EF0178] font-bold text-2xl mb-5 "
      >
        Contact Me
      </h2>
      <p data-aos="fade-up" className="text-center mb-5 font-bold text-lg">
        Below are my contact details:
      </p>
      <div
        data-aos="fade-up"
        className="flex items-center justify-center gap-10"
      >
        <a href="https://wa.me/2348025438602" className="cursor-pointer">
          <img src={whatsapp} alt="Whatsapp" className="cursor-pointer" />
        </a>
        <a href="https://twitter.com/AimiuwuVictor">
          <img src={twitter} alt="Twitter" />
        </a>
        <a href="mailto:archangeltv24@gmail.com">
          <img src={gmail} alt="E-mail" />
        </a>
        <a href="https://github.com/Archangeltv">
          <img src={github} alt="Github" />
        </a>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        data-aos="fade-up"
        className="flex flex-col gap-5 items-start py-4 items-center justify-center"
      >
        <input
          name="from_name"
          type="text"
          placeholder="Your Name"
          className=" border rounded p-3 w-full border-black md:w-[480px]"
        />
        <input
          name="user_email"
          type="email"
          placeholder="Your Email"
          className=" border rounded p-3 w-full border-black md:w-[480px] "
        />
        <textarea
          name="message"
          cols="30"
          rows="7"
          placeholder="Your Message..."
          className=" border rounded p-3 w-full border-black md:w-[480px] "
        ></textarea>
        <button className="bg-[#5243C2] w-40 py-2 text-white rounded self-start md:self-center">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
