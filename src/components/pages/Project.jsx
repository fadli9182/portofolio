import React from "react";
import { Link } from "react-router-dom";
import pusatani from "../../assets/image/pusatani.png";
import tk from "../../assets/image/tk.png";

const Project = () => {
  return (
    <>
      <div className="judul font-bold text-center relative bottom-16">
        <h1 className="text-9xl -z-10 opacity-20 ">My Project</h1>
        <p className="absolute right-[40%] top-[40%] z-10 text-5xl">My Project</p>
      </div>
      <div className="grid justify-items-center grid-cols-1 gap-8">
        <div className="p-7 rounded-2xl mb-8 bg-primary">
          <div className=" bg-primary rounded-2xl relative shadow-lg">
            <Link to="">
              <img src={pusatani} alt="foto" width={800} className="rounded-2xl relative" />
              <h2 className="bg-[rgba(0,0,0,.5)] sm:text-3xl flex justify-center items-center rounded-2xl transition-all absolute top-0 left-0 right-0 bottom-0 opacity-0 hover:opacity-100 ">PusaTani Pusat Informasi Petani</h2>
            </Link>
          </div>
        </div>
        <div className="p-7 rounded-2xl mb-8 bg-primary">
          <div className=" bg-primary rounded-2xl relative shadow-lg">
            <Link to="">
              <img src={tk} alt="foto" width={800} className="rounded-2xl relative" />
              <h2 className="bg-[rgba(0,0,0,.5)] sm:text-3xl flex justify-center items-center rounded-2xl transition-all absolute top-0 left-0 right-0 bottom-0 opacity-0 hover:opacity-100 ">Portal Taman Kanak-Kanak</h2>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
