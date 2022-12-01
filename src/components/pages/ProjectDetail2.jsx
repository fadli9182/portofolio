import React from "react";
import { style } from "../../style";
import Footer from "../navigate/Footer";
import Header from "../navigate/Header";
import tk from "../../assets/image/tk.png";

const ProjectDetail2 = () => {
  return (
    <div className="bg-primary">
      <div className={` ${style.paddingX} xl:max-w-[1280px] w-full`}>
        <Header />
        <div className="text-center">
          <h1>Portal Taman Kanak-kanak</h1>
          <div className="grid grid-cols-2">
            <div className="card__image">
              <img src={tk} alt="Foto 1" />
            </div>
            <div className="card__detail">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at dolorum dolores consequuntur vero saepe blanditiis ad impedit a minus!</p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="card__image">
              <img src={tk} alt="Foto 1" />
            </div>
            <div className="card__detail">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at dolorum dolores consequuntur vero saepe blanditiis ad impedit a minus!</p>
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="card__image">
              <img src={tk} alt="Foto 1" />
            </div>
            <div className="card__detail">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias at dolorum dolores consequuntur vero saepe blanditiis ad impedit a minus!</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetail2;
