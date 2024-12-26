import { ImCross } from "react-icons/im";
import { useParams } from "react-router-dom"
import flagdetail from '../flagdetail.json'
import { useEffect, useState } from "react";
export const FlageDetails = () => {
   const{id}=useParams();
   const[state,setState]=useState(false)
   const[country,setCountry]=useState([])
   useEffect(()=>{
    setCountry(flagdetail.countries.filter(item=>item.name===id))
   },[])
  return (
   
    country.map((item,index)=>(
      <div key={index}>
     { state && <div  className="w-full top-0 absolute bg-slate-500 bg-opacity-90 h-[100vh] flex justify-center items-center">
      <div onClick={()=>{setState(!state)}} className=" absolute top-4 right-4 text-red-200 text-2xl select-none hover:cursor-pointer"><ImCross /></div>
      <img src={item.flagUrl}/>
      </div>}
   <div className="w-10/12 max-w-[1200px] my-20 mx-auto flex flex-col lg:flex-row justify-between min-h-[calc(90vh-140px)] items-start" >
    <img onClick={()=>{setState(!state)}} className="w-[300px] aspect-square order-2 lg:order-1" src={item.flagUrl}/>
   
    <div className="flex flex-col text-gray-200 gap-2 w-full lg:w-[50%] order-1 lg:order-2">
      <h1 className="text-4xl text-gray-400">{item.name}</h1>
      <h1 className="text-xl"><span className="text-gray-400">Domain</span> {item.domain}</h1>
      <p className="text-xl"><span className="text-gray-400">Description</span> {item.description}</p>
     <div className="text-xl"><span className="text-gray-400">TouristLocations</span>
     {item.touristLocations.map((item,index)=>(
              <div key={index}>{item}</div>
     ))}</div>
    </div>
      </div>
      </div>   
    ))
   
  )
 
}
