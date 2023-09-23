"use client"


import React from 'react'

import Menu from '../components/menu'
import Image from "next/image"
import Success from '../components/success'
import {useState} from 'react'

function Register() {
    const[teamName,setName] = useState('')
    const[email,setEmail] = useState('')
    const[phone,setPhone] = useState('')
    const[size,setSize] = useState('')
        const[category,setCategory] = useState('')
        const[topic,setTopic] = useState('')
  return (
   <>
  <Menu/>
  <div class="overflow-hidden h-[100%]">
  <div class="p-[50px]">
                <h3 class="font-extrabold text-[25px] text-[#d434fe] md:hidden block">Register</h3>
            </div>
    <div class="relative pt-[50px] flex items-center justify-center pb-[40px] md:gap-[50px] flex-col md:flex-row">
        <div class="relative ">
            <Image src="/seat.png" width={650} height={400} alt="seat" class="relative" style={{zIndex:222}}/>
            <Image src="/lens.png" width={660} height={400} alt="seat" class="absolute md:-top-[80px] md:-left-[120px] top-[90px] -left-[100px]" style={{zIndex:1}}/>
            <Image src="/star2.png" width={20} height={400} alt="seat" class="absolute md:top-[40px] md:left-[60px] right-[40px] top-[40px]" style={{zIndex:22}}/>
            <Image src="/star (1).png" width={20} height={400} alt="seat" class="absolute md:bottom-[60px] md:left-[80px] bottom-0 left-0" style={{zIndex:22}}/>
             <Image src="/star3.png" width={20} height={400} alt="seat" class="absolute bottom-[120px] right-[60px] md:block hidden" style={{zIndex:22}}/>

        </div>

        <div class="md:bg-[#1c152e]  md:w-[600px] relative md:p-[40px] pb-[30px] rounded-md shadow-2xl p-[50px] md:mt-0 -mt-[80px]">
        <Image src="/star.png" width={20} height={400} alt="seat" class="absolute -bottom-4 right-[60px] md:block hidden" style={{zIndex:22}}/>
         <Image src="/star3.png" width={20} height={400} alt="seat" class="absolute bottom-[230px] right-[40px] md:hidden block" style={{zIndex:22}}/>
            <div>

            <div>
                <h3 class="font-extrabold text-[25px] text-[#d434fe] md:block hidden">Register</h3>
            </div>

            <div class="mt-[25px] flex gap-[20px]"><p class="text-sm">Be part of this movement!</p>
            <div class="flex gap-1">
               <div><Image src="/boywalk.png" width={20} height={20} alt="boywalk"/></div> 
               <div><Image src="/girlwalk.png" width={20} height={20} alt="boywalk"/></div> 
                
                </div>
            </div>
            <h1 class="md:text-[30px] text-[20px] font-bold mt-[18px]">CREATE AN ACCOUNT</h1>
            <form class="flex flex-col gap-3  mt-[30px] relative">
            <Image src="/star (1).png" width={20} height={400} alt="seat" class="absolute -top-[100px] right-[100px] -mt-[60px] md:block hidden" style={{zIndex:22}}/>
                <div class="input1 flex gap-[30px] flex-col md:flex-row ">
                    <div class="flex flex-col gap-2">
                        <label>Team's Name</label>
                        <input type="text" placeholder="Enter the name of your group" class="border-[2px] border-white bg-transparent p-2 md:w-[220px] placeholder:text-[12px] w-[300px]" value={teamName} onChange={(e)=>setName(e.target.value)}/>
                    </div>

                    <div class="flex flex-col gap-2">
                        <label>Phone</label>
                        <input type="text" placeholder="Enter the name of your group" class="border-[2px] border-white bg-transparent p-2 md:w-[220px] placeholder:text-[12px] w-[300px]" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                    </div>

                </div>

                <div class="input1 flex gap-[30px] flex-col md:flex-row">
                    <div class="flex flex-col gap-2">
                        <label>Email</label>
                        <input type="text" placeholder="Enter your email address" class="border-[2px] border-white bg-transparent p-2 md:w-[220px] placeholder:text-[12px] w-[300px] focus:outline-white" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>

                    <div class="flex flex-col gap-2">
                        <label>Project Topic</label>
                        <input type="text" placeholder="What is your group project topic" class="border-[2px] border-white bg-transparent p-2 md:w-[220px] placeholder:text-[12px] w-[300px] focus:border-white focus:outline-white"/>
                    </div>

                </div>
                <div class="input1 flex gap-[30px] mt-[15px]">
                    <div class="flex flex-col gap-2">
                        <label>Category</label>
                        <select class="border-[2px] border-white bg-transparent p-2 md:w-[220px] text-white w-[160px] text-sm">
                            <option>Select your category</option>

                        </select>
                       
                    </div>

                    <div class="flex flex-col gap-2">
                        <label class="text-sm">Group Size</label>
                        <select class="border-[2px] border-white bg-transparent p-2 pr-[25px] md:w-[220px] text-white w-[100px] text-sm">
<option>select</option>
</select>
                    </div>

                </div>
                <div>
                    <p class="text-[#8d1d73] md:text-sm text-[10px] ">Please review your registration details before submitting</p>
                    <div class="flex gap-2 mt-[5px]"><input type="checkbox" class="bg-transparent"/><p class="md:text-sm text-[10px]">I agreed with the event terms and conditions  and privacy policy</p></div>
                </div>
                <div class="flex items-center md:items-start justify-center mt-[15px]"><button class="bg-gradient-to-r from-[#f927c1] to-[#9d39ff] p-2 rounded-sm md:w-[470px] w-[200px]">Register</button></div>
            </form>
            </div>
            

        </div>
    </div>
  </div>

   </>
  )
}

export default Register