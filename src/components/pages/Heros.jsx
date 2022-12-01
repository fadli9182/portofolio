import React from "react";
import foto from "../../assets/image/foto.png";
import as1 from "../../assets/image/as1.webp";

const Heros = () => {
  return (
    <>
      <div className="text-gray opacity-50 leading-[0.8]">
        <h1 className="text-[8.5rem] sm:text-[10rem] md:text-[16rem] tracking-tighter font-bold">HELLO</h1>
      </div>
      <div className="flex sm:flex-row flex-col">
        <div className="">
          <h2 className="text-white md:text-6xl md:pt-15 text-7xl font-bold pt-5">
            I'm <br /> Fadli <span className="text-blue-500">Rosyid</span>
          </h2>
          <hr className="my-3" style={{ border: "6px solid rgb(59, 130, 246)", width: "132px" }} />
          <p>Front-End Web Developer (Kayanya)</p>
        </div>
        {/* <div className="foto__hero m-0 sm:flex hidden absolute bottom-[1%] right-0">
          <img src={foto} alt="foto-hero" />
        </div> */}
        <div className="absolute top-26 sm:top-20 right-0">
          <img src={as1} alt="" width={"400px"} height={"400px"} className="opacity-20" />
        </div>
      </div>
    </>
  );
};

export default Heros;
