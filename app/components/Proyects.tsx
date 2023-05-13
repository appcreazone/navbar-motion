import { imgSlid, imgSlider2, imgSlider3, imgSlider4 } from "@/assets";
import data from "../../data/products.json";
import Image from "next/image";
import React from "react";

type Props = {};

function Proyects({}: Props) {
  const projects = [imgSlid, imgSlider2, imgSlider3, imgSlider4];
  return (
    <div className="h-screen relative  overflow-hidden flex flex-col  md:flex-row text-left max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase  tracking-[20px] text-gray-500 text-2xl">
        Proyects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((proyect, i) => (
          <div
            key={i}
            className="w-screen  flex-shrink-0 snap-center  space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <Image
              className="w-full h-full object-cover group-hover:scale-110 duration-500 rounded-md md:rounded-lg"
              src={imgSlid}
              alt="productImg"
            />
            <div>
              <h4>
                <span>
                  {i + 1} of{projects.length}
                </span>
              </h4>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7ABBA]/10 left-0 h-[500px] -skew-y-12" />
    </div>
  );
}

export default Proyects;
