import {motion } from "framer-motion";
import React from "react";

const Loading = () => {
  return (

      <motion.div className="flex items-center justify-center w-[100vw] h-[100dvh]  text-white bg-black fixed top-0 left-0 z-[99]">
        <Pixels tsixe={"32px"} color={"white"} aniletter={true} />
      </motion.div>
  
  );
};

export default Loading;

export const Pixels = ({ tsixe, color,layoutid,aniletter=false }) => {
    const Pixels = Array.from("Pixels")
   
  return (
    <motion.div 
    layoutId={layoutid}
    transition={{
        duration: .5
    }}

    exit={{
      opacity: 0
    }}
    >
      <h1
        className="font-Pixels font-[700]  "
        style={{
          fontSize: tsixe,
          color: color ? color : "black",
        }}
      >
        {
            aniletter ? Pixels.map((word,index) => {
              return (  <motion.span key={index}  initial={{y: -50,opacity: 0}} animate={{x: 0,opacity: 1}} transition={{delay: index*.3}}>{word}</motion.span>)
            }) : "Pixels"
        }
        
      </h1>
    </motion.div>
  );
};
