import React from "react";
import html from "../../assets/image/html.png";
import css from "../../assets/image/css.png";
import js from "../../assets/image/js.png";
import react from "../../assets/image/react.png";

const Hobby = () => {
  const tech = [
    {
      name: "HTML",
      image: html,
    },
    {
      name: "CSS",
      image: css,
    },
    {
      name: "JavaScript",
      image: js,
    },
    {
      name: "ReactJs",
      image: react,
    },
  ];
  return (
    <>
      <div className="judul font-bold text-center relative bottom-16">
        <h1 className="text-8xl opacity-20 ">Tech Stack</h1>
        <p className="absolute right-[27%] top-[40%] text-3xl">Tech Stack</p>
      </div>
      <div className="flex flex-wrap justify-center sm:gap-20 gap-10 mb-32 font-bold z-20">
        {tech.map((tech) => (
          <div key={tech.name} className="card flex flex-col gap-3 items-center justify-center z-30">
            <img src={tech.image} alt="pen" width={60} />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Hobby;
