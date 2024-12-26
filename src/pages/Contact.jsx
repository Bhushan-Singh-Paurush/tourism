import { useState } from "react";

export const Contact = () => {
  const[states,setStates]=useState({name:"",email:"",textarea:""})
  function changeHandelar(event)
  {
    const{name,value}=event.target   
    setStates(pre=>({...pre,[name]:value}))
  }
  function submitHandelar(event)
  {
event.preventDefault();
console.log(states);
  }
  return (
    <div className="w-10/12 max-w-[600px] p-4 flex items-center border border-slate-600 shadow-lg shadow-slate-800 rounded-2xl justify-center min-h-[68vh] mx-auto my-10 bg-black">
    <form onSubmit={submitHandelar} className="flex flex-col gap-5 w-full">
      <label className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between">
       <div className="text-gray-400 text-xl">Name : </div><input 
       onChange={changeHandelar}
       value={states.name}
       name="name"
       type="text" 
       placeholder="Enter text" 
       className=" rounded-lg bg-gray-400 text-gray-950 w-[80%] placeholder:text-gray-950 text-xl pl-2 py-1"/>
      </label>
      <label className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between">
       <span className="text-gray-400 text-xl">Email : </span><input 
       onChange={changeHandelar}
       value={states.email}
       name="email"
       type="email"
       placeholder="Enter your email" 
       className=" rounded-lg bg-gray-400 text-gray-950 w-[80%] placeholder:text-gray-950 text-xl pl-2 py-1"/>
      </label>
      <label className="flex flex-col sm:flex-row items-center sm:items-start sm:justify-between">
       <span className="text-gray-400 text-xl">Text Area : </span><textarea 
       onChange={changeHandelar}
       value={states.textarea}
       name="textarea"
       placeholder="Enter your text" 
       rows={4} 
       className=" rounded-lg bg-gray-400 text-gray-950 w-[80%] placeholder:text-gray-950 text-xl pl-2 py-1"/>
      </label>
     <button className="w-[50%] py-1 my-2 mx-auto bg-blue-700 rounded-lg text-center">Submit</button>
    </form>
    </div>
  )
}
