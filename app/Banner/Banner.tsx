"use client";

import Image from "next/image";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "../components/BackgroundCircles";
import { imagen } from "@/assets/imagen";
import Link from "next/link";

type Props = {};

const Banner = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      " Hi!, my name is",
      " Camilo Bautista",
      "I am entrepeneur tecnology",
      " <Come in to meet me />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-6 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        width="200"
        height="200"
        src={imagen}
        alt="morty"
        className="absolute rounded-full mx-auto object-cover items-center justify-center"
      />
      <div className="pt-4">
        <h2 className="text-sm uppercase text-gray-400 tracking-[11px]">
          Full Stack Developer
        </h2>
        <h1 className="text-2xl lg:text-3xl font-semibold p-2">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div>
          <Link href={"/"}>
            <button className="superButton">Home</button>
          </Link>
          <Link href={"/Contact"}>
            <button className="superButton">Contact</button>
          </Link>
          <Link href={"/Service"}>
            <button className="superButton">Services</button>
          </Link>
          <Link href={"/"}>
            {" "}
            <button className="superButton">gg</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
