import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 1.3, 1, 1, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.2, 0.1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center "
    >
      <div className="absoluteborder border-[#df2525]  h-[200px] w-[200px] mt-52 rounded-full animate-ping" />
      <div className="absolute border border-[#333333]  h-[300px] w-[300px] mt-52  rounded-full bg-black " />
      <div className="absolute border-[2px]  border-[#9c537e]  h-[550px] w-[550px] mt-52 rounded-full bg-gradient-to-r from-slate-400 to-zinc-700  animate-pulse" />
      {/*lineas separaradas */}
      <div className="absolute border-[1px]  border-[#F7AB0A] h-[550px] w-[550px] mt-52   rounded-full bg-gradient-to-r from-slate-400 to-purple-500 animate-spin " />
      <div className="absolute border-[1px]  border-yell h-[470px] w-[470px] mt-52  rounded-full animate-spin  bg-gradient-to-r from-slate-300 to-purple-400" />
      <div className="absolute border-[1px]  border-red-200 h-[410px] w-[410px] mt-52  rounded-full animate-pulse  bg-gradient-to-r from-slate-200 to-purple-300 " />

      <div className="absolute border-[#333333]  h-[800px] w-[800px] mt-52  rounded-full  " />
    </motion.div>
  );
}

export default BackgroundCircles;
