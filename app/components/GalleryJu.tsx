"use client";
import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import { imgSlid, imgSlider2, imgSlider3 } from "../../assets";

const images = [
  {
    id: 1,
    src: imgSlid,
    alt: "Image 1",
  },
  {
    id: 2,
    src: imgSlider2,
    alt: "Image 2",
  },
  {
    id: 3,
    src: imgSlider3,
    alt: "Image 3",
  },
];

export default function GalleryJu() {
  return (
    <div className="grid grid-cols-1  gap-4 overflow-x-scroll ">
      {images.map((image) => (
        <motion.div
          key={image.id}
          className="relative overflow-hidden rounded-lg"
          whileHover={{ scale: 1.05 }}
          style={{ minWidth: "100%" }}
        >
          <Image src={image.src} alt={image.alt} width={500} height={500} />
        </motion.div>
      ))}
    </div>
  );
}
