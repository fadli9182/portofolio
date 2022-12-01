import React, { useState } from "react";
import unduh from "../../assets/image/unduh.svg";
import close from "../../assets/image/close.svg";
import menu from "../../assets/image/menu.svg";
import FRosyid from "../../assets/image/FRosyid.png";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState("Home");

  const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "project",
      title: "Project",
    },
    {
      id: "about",
      title: "About Me",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  return (
    <>
      <nav className="w-full flex justify-between items-center m-auto py-5 font-poppins text-dimWhite xs:m-0">
        <div className="brand scale-50 sm:scale-100">
          <img src={FRosyid} alt="Logo" width={150} />
        </div>
        <ul className="sm:flex hidden flex-row gap-5 justify-end items-center">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <li>
            <button className="btn flex md:px-10 md:text-base text-sm px-6 py-2 gap-5">
              Unduh CV <img src={unduh} alt="unduh" width={20} />
            </button>
          </li>
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu" className="cursor-pointer" onClick={() => setToggle(!toggle)} />

          <div className={`${!toggle ? "hidden" : "flex"} p-6 bg-black-gradient absolute top-10 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((link) => (
                <li key={link.id} className="mb-4">
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
