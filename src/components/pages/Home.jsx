import React from "react";
import { style } from "../../style";
import bgBody from "../../assets/image/bgBody.png";
import Header from "../navigate/Header";
import Heros from "./Heros";
import Quotes from "./Quotes";
import Hobby from "./Hobby";
import Skill from "./Skill";
import Project from "./Project";
import Footer from "../navigate/Footer";

const Home = () => {
  return (
    <div>
      <div className="bg-primary w-full h-full flex flex-col">
        <section className="bg-top">
          <div className="bg__overlay">
            <div className={` ${style.paddingX} xl:max-w-[1280px] w-full`}>
              <Header />
              <Heros />
            </div>
          </div>
        </section>
        <section className="flex flex-col">
          <div className={` ${style.paddingX} xl:max-w-[1280px] w-full`}>
            <Quotes />
          </div>
        </section>

        <section className="h-100% bg-secondary relative">
          <div className="-z-20">
            <img src={bgBody} alt="" width={350} className="absolute top-[40%] " />
          </div>
          <div className={` ${style.paddingX} xl:max-w-[1280px] w-full z-10`}>
            <Hobby />
          </div>
        </section>
        <section>
          <div className={` ${style.paddingX} xl:max-w-[1280px] w-full`}>
            <Skill />
          </div>
        </section>
        <section className="bg-space bg-cover bg-fixed">
          <Project />
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
