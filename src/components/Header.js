import "../App.css";
import menu from "../images/bx-menu.svg";
import close from "../images/bx-x (1).svg";
import { useState } from "react";

function Header() {
  const [toggle, setToggle] = useState(true);

  function openNav() {
    setToggle(false);
  }

  function closeNav() {
    setToggle(true);
  }

  return (
    <header className="z-10 flex justify-between h-[70px] items-center shadow px-8 md:px-16 bg-white fixed w-full top-0 left-0 ">
      <h2 className=" font-bold text-xl ">ARCHANGEL</h2>
      <nav
        className={`md:h-auto text-base md:relative absolute w-full md:z-0 h-[100vh] top-0 flex flex-col items-center justify-center px-8 bg-[#EF0178] md:bg-transparent duration-500 ${
          toggle ? "left-[-100%] md:left-0" : "left-0"
        }
            `}
      >
        <img
          className=" md:hidden w-10 absolute top-[17px] fill-white right-[25px] "
          src={close}
          onClick={closeNav}
        />
        <ul className="flex gap-9 md:gap-4 flex-col md:flex-row items-center text-3xl md:text-base ">
          <a href="#home">
            <li
              className="md:hover:text-[#EF0178] md:text-black text-white  duration-500"
              onClick={closeNav}
            >
              Home
            </li>
          </a>
          <a href="#about">
            <li
              className="md:hover:text-[#EF0178] md:text-black text-white  duration-500"
              onClick={closeNav}
            >
              About
            </li>
          </a>
          <a href="#skills">
            <li
              className="md:hover:text-[#EF0178] md:text-black text-white  duration-500"
              onClick={closeNav}
            >
              Skills
            </li>
          </a>
          <a href="#portfolio">
            <li
              className="md:hover:text-[#EF0178] md:text-black text-white  duration-500"
              onClick={closeNav}
            >
              My Works
            </li>
          </a>
        </ul>
      </nav>
      <button className="px-4 py-[3px] border hidden md:block rounded text-base text-white shadow bg-[#EF0178]">
        <a href="#contact">Contact</a>
      </button>
      <img
        src={menu}
        alt="Hamburger Menu"
        className=" block cursor-pointer md:hidden "
        onClick={openNav}
      />
    </header>
  );
}

export default Header;
