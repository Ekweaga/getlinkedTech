"use client"
import React from 'react'
import Image from 'next/image'
import {useState} from 'react'
import Link from 'next/link'
function Menu() {
const [open,setOpen]=useState(false)

return (
    <>
    <nav className="flex justify-between md:pr-[120px] pt-[30px] pl-[30px] pb-[10px] items-center border-b-[1px] border-[#2c2c2c] pr-3">
        <div className="logo md:ml-[150px]">
            <h3 className="font-semibold md:text-[30px] text-[15px] cursor-pointer">
              <Link href="/">get<span className="text-[#d434fe]">linked</span></Link>  
            </h3>
        </div>

        <div className="md:flex justify-evenly gap-[120px] mr-[50px] items-center hidden">
            <ul className="flex justify-around gap-[30px] item-center text-sm list-style-none relative" style={{zIndex:555}}>
                <li className="cursor-pointer text-sm">
                  <a href="#timeline" className="cursor-pointer text-white"> Timeline</a>     
                </li>
                <li className="cursor-pointer text-sm ">
                    Overview
                </li>
                <li className="cursor-pointer text-sm ">
                   <Link href="#faqs">FAQs</Link> 
                </li>
                <li className="cursor-pointer text-sm">
                <Link href="contacts" className="cursor-pointer">Contact</Link>
                </li>
            </ul>
            <div className="md:block none"><button class="bg-gradient-to-r from-[#d434fe] to-[#9d39ff] p-2 w-[150px] rounded-sm hover:bg-[#9d39ff] hover:scale-75"><Link href="register">Register</Link></button></div>
        </div>

        <div
        onClick={() => setOpen(!open)}
        className={`z-[99999px]  ${
          open ? "text-gray-900" : ""
        } text-3xl md:hidden `}
      >
        <Image src={open ? "/close.png" :"/bar.png"} alt="icon" width={20} height={25}></Image>
      </div>

        <div
          className={`md:hidden text-white absolute w-full h-[550px] z-[99999px]
      px-7 py-2 font-medium bg-[#150e28]  top-0 duration-300 ${
        open ? "right-0 block" : "left-0 hidden"
      }`} style={{zIndex:3333}}
        >
          <div className="absolute right-[30px] top-[40px] p-2 border-[1px] border-gradient-to-r from-[#d434fe] to-[#9d39ff]  rounded-full  ">
          <Image src= "/close.png" alt="icon" width={10} height={25} onClick={() => setOpen(!open)}></Image>
          </div>
         
          <ul className="flex flex-col justify-center h-[300px] gap-10 py-2 text-lg mt-[100px] pl-[30px]">
          <li  onClick={() => setOpen(!open)}><Link href="#timeline">Timeline</Link></li>
          <li className="cursor-pointer" >
              Overview
            </li>
                
                <li  onClick={() => setOpen(!open)}><Link href="#faqs">FAQs</Link> </li>
                <li  onClick={() => setOpen(!open)}><Link href="contacts">Contact</Link></li>
               
                <li>  <button className="bg-gradient-to-r from-[#d434fe] to-[#9d39ff] p-2 w-[150px] rounded-sm hover:bg-[#9d39ff] hover:scale-75"><Link href="register">Register</Link></button></li>
          </ul>
        </div>

    </nav>
    </>
  )
}

export default Menu