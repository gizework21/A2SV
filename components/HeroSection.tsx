import Image from "next/image";
import React from "react";
import aboutImage from "@/public/aboutWhiteBoard.png";
import Logo from "@/public/logo.svg";
import logoText from "@/public/logoText.svg";

function HeroSectionComponent() {
  return (
    <div className="bg-white ">
      <div className="mx-20 my-5 flex justify-between">
        <div className="flex space-x-2">
          <Image
            src={Logo}
            width={28}
            height={29}
            alt="about_image"
            className="rounded-2xl hover:scale-105 transition-all"
          />
          <Image
            src={logoText}
            width={154}
            height={37}
            alt="about_image"
            className="rounded-2xl hover:scale-105 transition-all"
          />
        </div>

        <button className="bg-[#FFBA26] text-white font-bold rounded-xl py-2 px-8">
          Add food
        </button>
      </div>
    </div>
  );
}

export default HeroSectionComponent;
