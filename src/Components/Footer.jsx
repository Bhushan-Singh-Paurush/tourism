import { NavLink } from 'react-router-dom';
import footerdetails from '../footerApi.json'
import {MdPlace} from 'react-icons/md'
import { IoCallSharp } from 'react-icons/io5';
import { TbMailPlus } from 'react-icons/tb';

export const Footer = () => {
    const iconMap={
      MdPlace:MdPlace,
     IoCallSharp:IoCallSharp,
     TbMailPlus:TbMailPlus
    }
    let MyIcon='';
  return (
    
    <div className=" bg-black  border-t-2 border-slate-600">
    <div className="w-10/12 mx-auto flex flex-col sm:flex-row gap-5 justify-between items-center w-max-[1200px] py-2">
    <div className='flex gap-5 flex-col items-start lg:flex-row lg:gap-20 lg:items-center'>
     {footerdetails.map((item,index)=>(
      MyIcon=iconMap[item.icon],
      <div key={index} className='flex gap-5 items-center'>
        <MyIcon className='text-2xl text-blue-700'/>
        <div className='text-blue-700'>
        <h1>{item.title}</h1>
        <p>{item.details}</p>
        </div>
      </div>
     ))}
    </div>
    <div className="flex gap-5 flex-col items-start lg:flex-row lg:items-center text-slate-400 lg:gap-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/About">About</NavLink>
            <NavLink to="/Contact">Contact</NavLink>
        </div>
    </div>
    </div>

  )
}
