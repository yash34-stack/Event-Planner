import React from "react";
import bgphoto from "../assets/hero.jpg";

const Hero = () => {
  return (
    <div className="-mt-30 relative h-200 flex justify-center items-center">
      <img src={bgphoto} alt="" className="absolute -z-1 " />

      <div>
        <h1 className="text-fuchsia-500  text-shadow-cyan-300 text-shadow-lg text-6xl text-center font-bold font-[family-name:var(--customFont) ">
          Turning Dreams into Reality
        </h1>
      </div>
      <div>
        <button className="btn btn-primary rounded-0 btn-lg px-4">Book Now</button>
      </div>
    </div>
  );
};

export default Hero;