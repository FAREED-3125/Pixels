import React, { useEffect, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import img from "../Assets/pexels-maxime-lecomte-13471116.jpg";
import Loading from "./Loading";
import Section from "./section2";
import Section3 from "./Section3";
const yelloboxVariant = {
  animate: {
    x: ["5%", "95%"],
    transition: {
      duration: 7,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
  initial: {
    x: "2%",
  },
};

const sectionVariant = {
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  hidden: {
    y: 100,
    opacity: 0,
  },
};
const Home = () => {
  const isFirst = JSON.parse(localStorage.getItem('startpage')) ? false : true
  const [startpage, setstartPage] = useState(isFirst);

  useEffect(() => {
    const timer = setTimeout(() => {
      setstartPage(false);
      localStorage.setItem('startpage',JSON.stringify(true))
    }, 3000);
  }, []);
  return (
    startpage ? <Loading/> :
   <> <motion.div className="flex items-start flex-col justify-center w-screen py-10 px-3 lg:px-[100px] home-container" exit={{
      opacity: 0,
    }} transition={{

   
      ease: "linear"
    }}>
      <div className="md:w-[70%] mx-auto">
      <AnimateComponent />
      <div className="font-[600] text-[15px] text-center text-slate-500 py-[2rem]">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aliquam
          qui, cupiditate, incidunt ab non veniam autem Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Doloribus minus perferendis
          obcaecati suscipit nam eligendi. Lorem ipsum, dolor sit amet
          consectetur adipisicing elit. Consectetur, accusantium.
        </p>
        <div className="mx-auto text-black w-max p-2 rounded-[1rem] mt-7 flex items-center justify-center text-[32px] gap-5 border-2 border-black">
          <div className="text-[16px]">Learn more</div>
          <BsFillArrowUpRightCircleFill />
        </div>
      </div></div>
      <SectionComponent />
     
    </motion.div> 
    <Section />
    <Section3/>
     </>
  );
};

const AnimateComponent = () => {

  
  return (
    <div className="relative flex w-full  flex-col  justify-center h-[150px] md:h-[200px]  ">
      <div className="text-center font-[700]  text-[40px] absolute top-[50%] translate-y-[-50%] md:text-[60px] w-full">
        Eplore the World of Pixels
      </div>
      <motion.div
        variants={yelloboxVariant}
        animate="animate"
        initial="initial"
        className="w-[50%] left-0 h-full bg-[#ffE931] absolute rounded-[.5rem]"
      ></motion.div>
      <div className="text-center font-[700] text-[40px] text-stroke absolute top-[50%] translate-y-[-50%] md:text-[60px] w-full">
        Eplore the World of Pixels
      </div>
    </div>
  );
};

const SectionComponent = () => {
  return (
    <motion.div className="w-full flex flex-col gap-8 md:w-[100%] md:grid grid-cols-3">
      <motion.div
        variants={sectionVariant}
        whileInView="animate"
        initial="hidden"
        viewport={{ once: true }}
        className="w-full 
      bg-[#facbb9] rounded-[.5rem] p-3 py-87 flex flex-col md:items-center justify-around min-h-[270px] lg:text-center
      "
      >
        <div className="font-[700] text-[33px] leading-9">
          Explore the World of Artificial{" "}
          <span className="text-stroke">Intelligence</span>
        </div>
        <div className="font-[600] text-[13px]  text-slate-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            reiciendis! Quaerat esse soluta saepe accusantium.
          </p>
        </div>
        <div className="text-white w-max p-2 mt-5 rounded-[1rem] flex items-center justify-center text-[32px] gap-5 border-2 border-black bg-black">
          <div className="text-[16px] font-[500]">Learn more</div>
          <BsFillArrowUpRightCircleFill />
        </div>
      </motion.div>
      <motion.div
        variants={sectionVariant}
        whileInView="animate"
        initial="hidden"
        viewport={{ once: true }}
        className="w-full 
      bg-[#D1EFED] rounded-[.5rem] p-3 py-87 flex flex-col md:items-center justify-around min-h-[270px]  
      "
      >
        <div className="font-[700] text-[32px] leading-9">
          Explore the World of <span className="text-stroke">Blockchain</span>
        </div>
        <div className=" text-[13px] text-gray-700 font-[600]  ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            reiciendis! Quaerat esse soluta saepe accusantium.
          </p>
        </div>
        <div className="text-white w-max p-2 mt-5 rounded-[1rem] flex items-center justify-center text-[32px] gap-5 border-2 border-black  bg-black">
          <div className="text-[16px] font-[500]">Learn more</div>
          <BsFillArrowUpRightCircleFill />
        </div>
      </motion.div>
      <motion.div
        variants={sectionVariant}
        whileInView="animate"
        initial="hidden"
        viewport={{ once: true }}
        className="w-full 
      bg-[#dfc1f9] rounded-[.5rem] p-3 py-87 flex flex-col md:items-center justify-around min-h-[270px]
      "
      >
        <div className="font-[700] text-[32px] leading-9">
          Explore the World of machine{" "}
          <span className="text-stroke">learning</span>
        </div>
        <div className="text-[13px] text-gray-800 font-[600]  ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
            reiciendis! Quaerat esse soluta saepe accusantium.
          </p>
        </div>
        <div className="text-white w-max p-2 mt-5 rounded-[1rem]  flex items-center justify-center text-[32px] gap-5 border-2 border-black bg-black">
          <div className="text-[16px] font-[500]">Learn more</div>
          <BsFillArrowUpRightCircleFill />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
