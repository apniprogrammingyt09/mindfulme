import React from 'react'
import { FiAlignJustify } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import {useState} from "react"
import { FaMoon } from "react-icons/fa";
import {Link} from "react-router-dom"

const Nav = () => {
  const [state ,setstate] =useState(true)
  function iconhandler(){

setstate(!state)
   
  }
  return (
    <div className='bg-blue-950 p-4' >
      <div className="flex justify-between p-[15px]  max-w-full ">

        <div className="text-4xl font-bold  flex justify-center text-white "><Link to="/">MindfulMe</Link></div>

        <ul className=' hidden md:flex gap-5 md:display '>
        <li className="p-4  text-white"><Link to="/"> Home </Link> </li>

<li className="p-4  text-white"><Link to="/Symptom_tracker"> Daily Log </Link> </li>
<li className="p-4  text-white"><Link to="/Guid_meditation" > Resource Library </Link> </li>
<li className="p-4  text-white "> <Link to="/Community">Community </Link></li>
<li className="p-4  text-white"><Link to="/CBT">Crisis Support  </Link></li>

        </ul>
       <button className=' md:hidden text-white ' onClick={iconhandler}> {state ? <FiAlignJustify/> : <FiX/>}</button>


       <ul className={ `  w-full md:hidden fixed  top-[100px]   bg-black text-white  gap-5 md:display h-full duration-700 ${state ? 'left-[-100%]' : 'left-[0]' }`}>
       <li className="p-4  text-white"><Link to="/"> Home </Link> </li>

<li className="p-4  text-white"><Link to="/Symptom_tracker">Daily Log </Link> </li>
<li className="p-4  text-white"><Link to="/Guid_meditation" > Resource Library </Link> </li>
<li className="p-4  text-white "> <Link to="/Community">Community </Link></li>
<li className="p-4  text-white"><Link to="/CBT">Crisis Support </Link></li>


        </ul>
        
      </div>
    </div>
  )
}

export default Nav