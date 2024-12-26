import { NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { IoMdContact } from "react-icons/io";
export const Navbar = () => {
  const[isvisible,setIsVisible]=useState(false)
  function handelar()
  {
         setIsVisible(!isvisible)
  }
  return (
    <div className=" bg-black border-b-2 border-slate-600 sticky top-0 shadow-lg shadow-slate-800 ">
    <div className="w-10/12 items-center mx-auto flex justify-between w-max-[1200px] h-[70px] relative">
      <NavLink to="/"><img src="/images/rb_98465.png" alt="logo" className="w-[80px] h-[55px] sm:w-[100px] sm:h-[60px]" /></NavLink>
      <GiHamburgerMenu onClick={handelar} className="text-2xl  sm:hidden text-slate-200"/>
      {isvisible && <div className="w-[60%] flex justify-center items-center rounded-xl border-slate-600 shadow-lg shadow-slate-800 h-[30vh] absolute top-[70px] right-0 bg-lightblack">
        <div className="flex flex-col  items-start text-3xl text-slate-200 gap-10 ">
            
            <NavLink onClick={handelar}  className="flex gap-4 items-center " to="/"><FaHome /> Home</NavLink>
            <NavLink onClick={handelar} className="flex gap-4 items-center " to="/About"><FcAbout /> About</NavLink>
            <NavLink onClick={handelar} className="flex gap-4 items-center " to="/Contact"><IoMdContact /> Contact</NavLink>
        </div>
      </div>}
        <div className=" hidden sm:flex items-center text-xl text-slate-200 gap-4 ">
            
            <NavLink to="/">Home</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
        </div>
    </div>
    </div>
  )
}
