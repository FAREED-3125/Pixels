import React, { useState } from 'react'
import { Pixels } from './Loading'
import { HiMenu } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import Menu from './Menu'

const Header = () => {
  const [menu,setmenu] = useState(false)
  return (
    <>

    <div className='bg-white/95 backdrop-blur-[2
    px] px-4 py-2 md:pl-[70px] flex justify-between items-center shadow-lg sticky top-0     md:static z-[95]'>
       <Pixels tsixe={"33px"} layoutid={"pixels"} />
       <div className='flex gap-3  ml-auto'>
       <div className='w-[70px]  items-center text-[17px] justify-center bg-slate-50 border-2 border-black font-[900] text-black h-[40px] rounded-[.2rem]          md:hidden hidden lg:flex'>Sign up</div>
        <NavLink to={'/'} className='w-[70px] flex items-center text-[17px] justify-center bg-slate-900  font-[900] text-white h-[40px] rounded-[.2rem]          ml-auto'>Login</NavLink></div>
        <div className='text-[33px] ml-3 lg:hidden' onClick={() => setmenu(true)}><HiMenu/></div>
    </div>
    <Menu menu={menu} setmenu={setmenu}/>
    </>
  )
}

export default Header

