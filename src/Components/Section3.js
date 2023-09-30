import React from "react";
import img from "../Assets/image.png";
import { BsArrowBarRight } from "react-icons/bs";
import { motion } from "framer-motion";
const Section3 = () => {
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
  return (
    <div className="w-full h-[1200px] md:h-[750px] bg-[#1E1E1E] p-2 md:p-5 mt-[6rem]">
      <motion.div
        
        className="bg-white w-full h-full rounded-lg  overflow-hidden grid grid-rows-4  md:grid-cols-2 md:grid-rows-3 p-3 gap-3"
      >
        <motion.div
          variants={slideUpvariant}
          viewport={{
            once: true
          }}
          initial="hidden"
          whileInView={"visible"}
          className="md:row-start-1 md:row-end-3 w-full h-full bg-red-50 rounded-md p-3 flex flex-col justify-between"
        >
          <div className="overflow-hidden">
            {" "}
            <h2 className="font-[700] text-[28px] text-gray-900">
              Why Machine learning ?
            </h2>
            <p className="font-[600] text-slate-500 h-[65%] md:h-auto overflow-hidden">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quas
              natus autem cumque dicta quisquam voluptatibus, quasi, possimus
              magni molestiae a reiciendis laboriosam eaque iusto error!
              Voluptatibus minus debitis facilis. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Excepturi accusamus quisquam
              quibusdam obcaecati laboriosam, nisi ipsum? Facilis, voluptate
              voluptatem. Assumenda totam quam voluptate sapiente quos rem
              deleniti officia architecto voluptates.
            </p>
          </div>
          <div className="ml-auto md:mb-[1rem] md:mr-[1rem] px-5 py-2 font-[700] flex gap-2 items-center text-white w-max bg-[#1E1E1E]  ">
            <span>More</span>{" "}
            <span className="text-[20px]">
              <BsArrowBarRight />
            </span>{" "}
          </div>
        </motion.div>
        <motion.div
          variants={slideUpvariant}
          viewport={{
            once: true
          }}
          initial="hidden"
          whileInView={"visible"}
          className="w-full h-full  rounded-lg bg-purple-50 flex  p-3 flex-col justify-between"
        >
          <div className="overflow-hidden">
            {" "}
            <h2 className="font-[700] text-[28px] text-gray-900">
              Why Artificial Intelligence ?
            </h2>
            <p className="font-[600] text-slate-500 h-[65%] overflow-hidden ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quas
              natus autem cumque dicta quisquam voluptatibus, quasi, possimus
              magni molestiae a reiciendis laboriosam eaque iusto error!
              Voluptatibus minus debitis facilis. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Excepturi accusamus quisquam
              quibusdam obcaecati laboriosam, nisi ipsum? Facilis, voluptate
              voluptatem. Assumenda totam quam voluptate sapiente quos rem
              deleniti officia architecto voluptates.
            </p>
          </div>
          <div className="ml-auto md:mb-[1rem] md:mr-[1rem] px-5 py-2 font-[700] flex gap-2 items-center text-white w-max bg-[#1E1E1E] ">
            <span>More</span>{" "}
            <span className="text-[20px]">
              <BsArrowBarRight />
            </span>{" "}
          </div>
        </motion.div>
        <motion.div
          variants={slideUpvariant}
          viewport={{
            once: true
          }}
          initial="hidden"
          whileInView={"visible"}
          className="w-full h-full  rounded-lg bg-yellow-50  p-3 flex flex-col justify-between"
        >
          <div className="overflow-hidden">
            {" "}
            <h2 className="font-[700] text-[28px] text-gray-900">
              Why Blockchain ?
            </h2>
            <p className="font-[600] text-slate-500 h-[65%] overflow-hidden ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quas
              natus autem cumque dicta quisquam voluptatibus, quasi, possimus
              magni molestiae a reiciendis laboriosam eaque iusto error!
              Voluptatibus minus debitis facilis. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Excepturi accusamus quisquam
              quibusdam obcaecati laboriosam, nisi ipsum? Facilis, voluptate
              voluptatem. Assumenda totam quam voluptate sapiente quos rem
              deleniti officia architecto voluptates.
            </p>
          </div>
          <div className="ml-auto md:mb-[1rem] md:mr-[1rem] px-5 py-2 font-[700] flex gap-2 items-center text-white w-max bg-[#1E1E1E] ">
            <span>More</span>{" "}
            <span className="text-[20px]">
              <BsArrowBarRight />
            </span>{" "}
          </div>
        </motion.div>
        <motion.div
          variants={slideUpvariant}
          viewport={{
            once: true
          }}
          initial="hidden"
          whileInView={"visible"}
          className="w-full h-full md:row-start-2 md:row-end-4 rounded-lg  p-3 bg-violet-200 flex flex-col justify-between"
        >
          <div className="overflow-hidden">
            {" "}
            <h2 className="font-[700] text-[28px] text-gray-900">
              Why Ui Ux designs?
            </h2>
            <p className="font-[600] text-slate-500 h-[65%] overflow-hidden md:h-auto ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quas
              natus autem cumque dicta quisquam voluptatibus, quasi, possimus
              magni molestiae a reiciendis laboriosam eaque iusto error!
              Voluptatibus minus debitis facilis. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Excepturi accusamus quisquam
              quibusdam obcaecati laboriosam, nisi ipsum? Facilis, voluptate
              voluptatem. Assumenda totam quam voluptate sapiente quos rem
              deleniti officia architecto voluptates.
            </p>
          </div>
          <div className="ml-auto md:mb-[1rem] md:mr-[1rem] px-5 py-2 font-[700] flex gap-2 items-center text-white w-max bg-[#1E1E1E] ">
            <span>More</span>{" "}
            <span className="text-[20px]">
              <BsArrowBarRight />
            </span>{" "}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Section3;
