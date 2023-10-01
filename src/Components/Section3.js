import React from "react";
import img from "../Assets/image.png";
import { BsArrowBarRight } from "react-icons/bs";
import { motion } from "framer-motion";
const slideUpvariant = {
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: "linear",
    },
  },
  hidden: {
    y: 100,
  },
  view: {
    once: true,
  },
};
const Section3 = () => {
  return (
    <div className="w-full h-[1200px] md:h-[750px] bg-[#1E1E1E] p-2 md:p-5 mt-[6rem]">
      <motion.div className="bg-white w-full h-full rounded-lg  overflow-hidden grid grid-rows-4  md:grid-cols-2 md:grid-rows-3 p-3 gap-3">
        <CardComponent
          title={"UI UX Designs"}
          start={1}
          end={3}
          color={"bg-red-50"}
        />

        <CardComponent
          title={"Artificial Intelligence"}
          start={0}
          end={0}
          color={"bg-purple-50"}
        />
        <CardComponent
          title={"BlockChain"}
          start={0}
          end={0}
          color={"bg-yellow-50"}
        />
        <CardComponent
          title={"UI UX Designs"}
          start={2}
          end={4}
          color={"bg-violet-200"}
        />
      </motion.div>
    </div>
  );
};

export default Section3;

const CardComponent = ({ title, start, end, color }) => {
  return (
    <motion.div
      variants={slideUpvariant}
      viewport={{
        once: true,
      }}
      initial="hidden"
      whileInView={"visible"}
      className={`w-full h-full md:row-start-${start} md:row-end-${end} rounded-lg  p-3 ${color} flex flex-col justify-between`}
    >
      <div className="overflow-hidden">
        {" "}
        <h2 className="font-[700] text-[28px] text-gray-900">Why {title}?</h2>
        <p className="font-[600] text-slate-500 h-[65%] overflow-hidden md:h-auto ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quas
          natus autem cumque dicta quisquam voluptatibus, quasi, possimus magni
          molestiae a reiciendis laboriosam eaque iusto error! Voluptatibus
          minus debitis facilis. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Excepturi accusamus quisquam quibusdam obcaecati
          laboriosam, nisi ipsum? Facilis, voluptate voluptatem. Assumenda totam
          quam voluptate sapiente quos rem deleniti officia architecto
          voluptates.
        </p>
      </div>
      <div className="ml-auto md:mb-[1rem] md:mr-[1rem] px-5 py-2 font-[700] flex gap-2 items-center text-white w-max bg-[#1E1E1E] ">
        <span>More</span>{" "}
        <span className="text-[20px]">
          <BsArrowBarRight />
        </span>{" "}
      </div>
    </motion.div>
  );
};
