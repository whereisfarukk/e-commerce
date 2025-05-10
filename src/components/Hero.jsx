import React from "react";
// import image
import WomanImg from "../img/woman_hero.png";
const Hero = () => {
  return (
    <section className="bg-[#F5E6E0] h-[800px] bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex">
          <div>
            <div>New treand</div>
          </div>
        </div>
        <div className="hidden lg:block">
          <img src={WomanImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
