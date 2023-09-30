import React from "react";
import { motion } from "framer-motion";
import img1 from "../Assets/hazel-z-8nZSyuGlQlM-unsplash-removebg-preview.png";
import { BsFillArrowDownRightCircleFill } from "react-icons/bs";
const Section = () => {
  return (
    <div className="p-2 lg:p-5">
      {" "}
      <div className="bg-[#1E1E1E] w-full mt-5 rounded-2xl text-white p-8  flex flex-col items-center gap-[100px]  justify-between relative overflow-hidden">
        <div>
          <motion.div initial={{
           transform: "translateY(100%)"
          }} whileInView={{
            transform: "translateY(0)"
          }} className="flex items-center justify-between w-max gap-2 text-[28px] font-[600] overflow-hidden">
            Learn{" "}
            <div className="text-green-700">
              <BsFillArrowDownRightCircleFill />
            </div>
          </motion.div>
          <motion.h3
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }} transition={{
            delay: .3
          }} className=" font-[900] text-[45px] md:text-[50px] lg:text-[80px]">
            LEARN THE BASICS IN A MORDERN WAY USING ADVANCED TECHNOLOGIES AND
            INNOVATIVE TEACHING METHODS
          </motion.h3>
        </div>

        <div className="flex items-center justify-end">
          <div className="w-[70%] md:w-[45%] lg:w-[33%] mt-auto text-[16px] font-[500] text-slate-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vitae
            ut ad dolor fuga consequatur eaque sapiente magni veritatis sit
            pariatur cupiditate modi ea, voluptatem qui nulla repudiandae,
            exercitationem aut ipsam. Nesciunt repellendus quisquam nostrum
            dignissimos. Nemo cupiditate suscipit, itaque quisquam eveniet sit
            autem molestiae quia, ratione voluptate perspiciatis possimus.
          </div>
        </div>
        <div className="w-full">
          <marquee behavior="scroll" loop="infinite" direction="left">
          {Array.from("fifteentimesscolll").map(word =>( <span className="font-[700] text-[32px]">
              <span className="text-green-700">L</span>EARN {">"}
              <span className="text-green-700">{">"}</span> {">"}
            </span>))}
            </marquee>
        </div>
        <motion.div variants={{
            animate: {
              scale: ["0%","100%"],
              transition: {
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              },
            },
            initial: {
              scale: "0",
            },
        }}  initial={"initial"} animate={"animate"}  className="w-[200px] h-[200px] md:right-[-180px] blur-[125px] md:top-0 top-[-100px] z-[-0] bg-green-700 rounded- absolute right-[-30%]"></motion.div>
        <motion.div variants={{
            animate: {
              y: ["0%","25%"],
              transition: {
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              },
            },
            initial: {
              y: "0",
            },
        }}  initial={"initial"} animate={"animate"} className="w-[200px] h-[200px] blur-[125px] z-[-0] bg-green-700 rounded- absolute left-[-100px] bottom-[-150px] md:bottom-0 md:left-[-180px]"></motion.div>
      </div>
    </div>
  );
};

export default Section;
