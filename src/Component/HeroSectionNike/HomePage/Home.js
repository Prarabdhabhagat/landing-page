import React from "react";
import brand from "../../../Images/brand_logo.png";
import boot from "../../../Images/hero-image.png";
import amz from "../../../Images/amazon.png";
import flip from "../../../Images/flipkart.png";

export default function Home() {
  return (
    <div className="max-w-[1400px] mx-auto my-[50px] flex flex-col justify-center items-center">
      {/* Navbar */}
      <div className="flex gap-[473px] mt-[30px]">
        <div className="flex justify-center items-center">
          <img src={brand} alt="logo" />
        </div>
        <div className="flex items-center gap-[20px]">
          <div className="text-[16px] text-[#2E2E2E]">MENU</div>
          <div className="text-[16px] text-[#2E2E2E]">LOCATION</div>
          <div className="text-[16px] text-[#2E2E2E]">ABOUT</div>
          <div className="text-[16px] text-[#2E2E2E]">CONTACT</div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[75px] h-[31px] bg-[#D01C28] text-[white] flex justify-center items-center">
            Login
          </div>
        </div>
      </div>
      {/* Hero Section */}

      <div className="flex justify-center items-center gap-[50px]">
        {/* Left Container */}
        <div className="flex flex-col w-[50%]">
          <div className="text-[108px] font-bold mt-[104px]">
            YOUR FEET DESERVE THE BEST
          </div>
          <div className="mt-[20px] flex justify-start text-[16px] text-[GRAY]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde
            ratione distinctio, voluptate expedita reiciendis hic sunt, ipsam
            labore eaque non quod molestiae deleniti omnis dolorum asperiores
            inventore natus nesciunt vitae nulla. Numquam, assumenda.
          </div>
          <div className="flex  gap-[20px] mt-[30px]">
            <div className=" flex justify-center items-center w-[150px] h-[41px] text-[white] bg-[#D01C28] text-[24px] cursor-pointer">
              Shop Now
            </div>
            <div className=" flex justify-center items-center w-[150px] h-[41px] border-[gray] text-[gray] border-2 text-[24px] cursor-pointer">
              Category
            </div>
          </div>
          {/* Partner */}
          <div className="flex flex-col mt-7">
            <div className="text-[20px]">Also Available on</div>
            <div className="mt-[30px] flex gap-[30px]">
              <img src={amz} alt="" />
              <img src={flip} alt="" />
            </div>
          </div>
        </div>
        {/* Right Container */}
        <div className="flex">
          <img src={boot} alt="boot" />
        </div>
      </div>
    </div>
  );
}
