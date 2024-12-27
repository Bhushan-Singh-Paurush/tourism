import { NavLink } from 'react-router-dom';
import flagdetail from '../flagdetail.json'
import { useState } from 'react';
export const About = () => {
  const[status,setStatus]=useState([])
  const[data,setData]=useState(flagdetail.countries)
  function filterhandeler(event)
  {
       setData(flagdetail.countries.filter(value=>value.name.toLowerCase().includes(event.target.value.toLowerCase())))  
  }
  function orderhandeler(event)
  {
  console.log(event.target.value);
  
    event.target.value=='ALL' ? setData(flagdetail.countries) : setData(data=>[...data].sort((a,b)=>(a.name.localeCompare(b.name))))
    
  }
  function handler(domain)
  {
    status.includes(domain) ? 
    setStatus(status.filter(value=>domain!==value)) : 
    setStatus(pre=>([...pre,domain]))
  }  
    return (
      <div>
      <div className='w-11/12 max-w-[1200px] mx-auto flex flex-col sm:flex-row gap-5 sm:gap-20 sm:justify-center my-10'>
       <label className='text-gray-300 text-lg'>
        Name :<input onChange={filterhandeler} type='text' placeholder='Enter Name' className='bg-gray-300  outline-gray-700 rounded-lg pl-2 ml-4 text-gray-900 font-semibold'/>
       </label>
       <label className='text-gray-300 text-lg'>
       Order :
       <select onChange={orderhandeler}  className='bg-gray-300  outline-gray-700 rounded-lg pl-2 ml-4 text-gray-900 font-semibold'>
        <option>ALL</option>
        <option>A - Z</option>
       </select>
       </label>
      </div>
<div className="w-screen sm:w-11/12 mx-auto gap-8 min-h-[57vh] justify-center flex flex-wrap w-max-[1200px] my-10 items-start">
    {data.length>0 ? 
      data.map((item,index)=>(
    <div key={index}  >
      <div className='w-[190px] md:w-[250] lg:w-[350px] p-4 border border-gray-500 gap-2 shadow-lg shadow-gray-800 rounded-lg h-full mygradient2 flex flex-col'>
       <img className='w-[140px] h-[90px] sm:w-[150px] sm:h-[100px]' src={item.flagUrl}/>
       <h1 className='text-white text-lg'>Name : {item.name}</h1>
       <h2 className=' text-slate-300'>Domain - {item.domain}</h2>
       <p className='text-slate-300'>Description : {(status.includes(item.domain) && item.description.length>5) ? item.description + "..." : item.description.split(" ").slice(0,5).join(" ") + "..."}<button onClick={()=>handler(item.domain)}>{status.includes(item.domain) ? <span className='text-blue-700'> Less</span> : <span className='text-blue-700'> Read More</span>}</button></p>
      <NavLink to={`/flage/${item.name}`} className="w-full sm:w-[50%] py-1 my-2 bg-yellow-500 rounded-lg text-center">Learn More</NavLink>
      </div>
    </div>

    )):<div className='w-10/12 max-w-[1200px] h-[55vh] flex justify-center items-center text-2xl text-gray-300'>No Recode Found</div>}
    </div>
</div>  )
}
