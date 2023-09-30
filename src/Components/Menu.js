import React from 'react'
import {motion} from 'framer-motion'
import { BsX } from 'react-icons/bs'

const parentVariant = {
  hidden: {
     y: "-100%"
    },
    animate: {
      y: "0%",
    
     
    }, 
    transition: { 
         duration: .5,
      ease: "linear",
        when: "beforeChildren",
      staggerChildren: .4
    
    }
}

const liVariants = {
  animate:(i) =>({
    opacity:1,
    y: 0,
    transition:{
      delay: i * .13
    }
  }),
  hidden: {
    opacity: 0,
    y: 100
  }
}
const Menu = ({menu,setmenu}) => {


  return (
    <motion.div variants={parentVariant} initial={"hidden"} animate={menu ? "animate" : {}} transition={"transition"} className='bg-black w-full h-screen fixed top-0 z-[99] flex items-center justify-center text-white font-[700] '>
      <div className='text-[50px] absolute top-10 right-10' onClick={() => setmenu(false)}><BsX/></div>
     <motion.ul  className='text-[32px] flex flex-col gap-7 '>
      <motion.li variants={liVariants} animate={menu ? "animate" : {}} className="overflow-hidden inline-block" custom={1}>Home</motion.li>
      <motion.li  variants={liVariants} animate={menu ? "animate" : {}}  className="overflow-hidden" custom={2}>Explore</motion.li>
      <motion.li  variants={liVariants} animate={menu ? "animate" : {}}  className="overflow-hidden" custom={3}>About</motion.li>
      <motion.li  variants={liVariants} animate={menu ? "animate" : {}}  className="overflow-hidden" custom={4}>services</motion.li>
     </motion.ul>

    </motion.div>
  )
}

export default Menu