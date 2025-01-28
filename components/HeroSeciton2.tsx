import Image from "next/image";
import React from "react";
import motorIcon from "@/public/motorIcon.svg";
import bagIcon from "@/public/bagIcon.svg";
import searchIcon from "@/public/searchIcon.svg";
import IconSearch2 from "@/public/IconSearch2.svg";
import pastaImg from "@/public/pastaImg.png";

function HeroSeciton2() {
  return (
    <div className="h-screen bg-[#FFB30E]">
      <div className="flex space-x-10 mx-[100px]">
        <div className=" mt-[137px] flex flex-col space-y-8">
          <div className="flex flex-col text-white">
            <p className="font-bold text-[88px]">Are you starving?</p>
            <p className="text-sm">
              Within a few clicks, find meals that are accessible near you
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 flex flex-col">
            <div className="flex space-x-2">
              <button className="flex space-x-2 bg-[#F172281A] py-2 px-6 items-center rounded-md">
                <Image
                  src={motorIcon}
                  width={23}
                  height={18}
                  alt="about_image"
                  className="rounded-2xl hover:scale-105 transition-all"
                />
                <p className="font-bold text-[#F17228] text-lg">Delivery</p>
              </button>

              <div className="flex space-x-2 items-center">
                <Image
                  src={bagIcon}
                  width={16}
                  height={18}
                  alt="about_image"
                  className="rounded-2xl hover:scale-105 transition-all"
                />
                <p className="font-bold text-[#757575] text-lg ">Pickup</p>
              </div>
            </div>

            <div className="flex mt-12 space-x-4">
              <div className="rounded-xl py-3 px-4 bg-[#F5F5F5] w-[450px]">
                <div className="flex space-x-4">
                  <Image
                    src={searchIcon}
                    width={16}
                    height={18}
                    alt="about_image"
                    className="rounded-2xl hover:scale-105 transition-all"
                  />
                  <input
                    type="text"
                    placeholder="What do you like to eat today?"
                    className="text-[#9E9E9E] text-lg outline-none w-full  bg-[#F5F5F5]"
                  />
                </div>
              </div>
              <button className="bg-gradient-to-r from-[#FF7A7A] to-[#F65900] py-4 px-9 flex space-x-4 rounded-xl items-center">
                <Image
                  src={IconSearch2}
                  width={16}
                  height={18}
                  alt="about_image"
                  className="rounded-2xl hover:scale-105 transition-all"
                />
                <p className="font-bold text-lg text-white">Find Food</p>
              </button>
            </div>
          </div>
        </div>

        {/* image part  */}
        <div className="mt-[267px]">
          <Image
            src={pastaImg}
            width={380}
            height={380}
            alt="about_image"
            className="rounded-2xl hover:scale-105 transition-all"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSeciton2;
