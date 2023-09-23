"use client"


import React from 'react'

import Menu from '../components/menu'
import Image from "next/image"
import Success from '../components/success'
import {useState,useEffect} from 'react'
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import axios from 'axios'
import {ImSpinner8} from 'react-icons/im'
import Link from "next/link"


function Register() {
    const baseUrl = "https://backend.getlinked.ai"
    const hackathon = ""
    const [categoryList,setCategoryList] = useState([])
    const[teamName,setName] = useState('')
    const[email,setEmail] = useState('')
    const[phone,setPhone] = useState('')
    const[size,setSize] = useState('')
        const[category,setCategory] = useState('')
        const[topic,setTopic] = useState('')
        const [error,setError] = useState('')
        const [success,setSuccess] = useState(false)
        const [confirmReg,setReg] = useState(false)


        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        

        const registerCall = (e)=>{

                e.preventDefault();
setSuccess(true)

                if(teamName !== "" || email !== "" || phone !== "" || size !=="" || category !== "" || topic !== ""){

                    if(isNaN(phone) == false){
                                if(phone.length < 11){
                                  
                                     toast('Phone digits must have at least 11 characters',{autoClose:1000,type:'error',position:'top-right'})
                                     setSuccess(false)
                                    return;
                                }

                    }

                    else{
                        toast('Phone number is not valid',{autoClose:1000,type:'error',position:'top-right'})
                        setSuccess(false)
                    return;
                }
            
                if(emailRegex.test(email) == false){
                    toast('Email is not valid',{autoClose:1000,type:'error',position:'top-right'})
                    setSuccess(false);
                    return;
                }

                axios.post(baseUrl + '/hackathon' + '/registration',{
                    email:email,
                    phone_number:phone,
                    team_name:teamName,
                    group_size:size,
                    project_topic:topic,
                    category:category,
                    privacy_policy_accepted:true
                },
               ).then((response)=>{
                    
                    setSuccess(false)
                    setReg(true)
                    setEmail('')
                    setName('')
                    setPhone('')
                    setSize('')
                    setCategory('')
                    setCategoryList('')
                    setTopic('')
                }).catch((err)=>{
                    if(err.response.data.email){
                        toast('Email already exist',{autoClose:1000,type:'error',position:'top-right'})
                    }
                    setSuccess(false)
                    
                })

        }

        else{
                           
                            toast('Fields are empty, check',{autoClose:1000,type:'error',position:'top-right'})
                            setSuccess(false)
                    

        }

        }
        useEffect(()=>{
                axios.get(baseUrl + '/hackathon' + '/categories-list').then((response)=>{
                   
                    setCategoryList(response.data).catch((err)=>{
                        console.log(err)

                })
        }),[]})
  return (
   <>
   <ToastContainer/>
  <Menu/>
  <div class="overflow-hidden  ">
  <div class="p-[50px]">
                <h3 class="font-extrabold text-[25px] text-[#d434fe] md:hidden block">Register</h3>
            </div>
    <div class="relative pt-[0px] flex items-center justify-center md:pb-[20px] md:gap-[50px] flex-col md:flex-row md:-mt-[50px] ">
        <div class="relative ">
            <Image src="/seat.png" width={480} height={400} alt="seat" class="relative" style={{zIndex:222}}/>
            <Image src="/lens.png" width={660} height={400} alt="seat" class="absolute md:-top-[80px] md:-left-[120px] top-[90px] -left-[100px]" style={{zIndex:1}}/>
            <Image src="/star2.png" width={20} height={400} alt="seat" class="absolute md:top-[40px] md:left-[60px] right-[40px] top-[40px]" style={{zIndex:22}}/>
            <Image src="/star (1).png" width={20} height={400} alt="seat" class="absolute md:bottom-[60px] md:left-[80px] bottom-0 left-0" style={{zIndex:22}}/>
             <Image src="/star3.png" width={20} height={400} alt="seat" class="absolute bottom-[120px] right-[60px] md:block hidden" style={{zIndex:22}}/>

        </div>

        <div class="md:bg-[#1c152e]  md:w-[600px] relative md:p-[20px] pb-[30px] rounded-md shadow-2xl p-[50px] md:mt-0 -mt-[80px]">
        <Image src="/star.png" width={20} height={400} alt="seat" class="absolute -bottom-4 right-[60px] md:block hidden" style={{zIndex:22}}/>
         <Image src="/star3.png" width={20} height={400} alt="seat" class="absolute bottom-[230px] right-[40px] md:hidden block" style={{zIndex:22}}/>
            <div>

            <div>
                <h3 class="font-extrabold text-[25px] text-[#d434fe] md:block hidden">Register</h3>
            </div>

            <div class="mt-[15px] flex gap-[20px]"><p class="text-sm">Be part of this movement!</p>
            <div class="flex gap-1">
               <div><Image src="/boywalk.png" width={20} height={20} alt="boywalk"/></div> 
               <div><Image src="/girlwalk.png" width={20} height={20} alt="boywalk"/></div> 
                
                </div>
            </div>
            <h1 class="md:text-[20px] text-[20px] font-bold mt-[10px]">CREATE AN ACCOUNT</h1>
            <div class="flex flex-col gap-2  mt-[10px] relative">
            <Image src="/star (1).png" width={20} height={400} alt="seat" class="absolute -top-[100px] right-[100px] -mt-[60px] md:block hidden" style={{zIndex:22}}/>
                <div class="input1 flex gap-[30px] flex-col md:flex-row ">
                    <div class="flex flex-col gap-2">
                        <label class="text-sm">Teams Name</label>
                        <input type="text" placeholder="Enter the name of your group" class="border-[2px] border-white bg-transparent p-2 md:w-[220px] placeholder:text-[12px] w-[300px]" value={teamName} onChange={(e)=>setName(e.target.value)}/>
                    </div>

                    <div class="flex flex-col gap-2">
                        <label class="text-sm">Phone</label>
                        <input type="text" placeholder="Enter the name of your group" class="border-[2px] border-white bg-transparent p-2 md:w-[220px] placeholder:text-[12px] w-[300px]" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                    </div>

                </div>

                <div class="input1 flex gap-[30px] flex-col md:flex-row">
                    <div class="flex flex-col gap-2">
                        <label class="text-sm">Email</label>
                        <input type="text" placeholder="Enter your email address" class="border-[2px] border-white bg-transparent p-2 md:w-[220px] placeholder:text-[12px] w-[300px] focus:outline-white" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>

                    <div class="flex flex-col gap-2">
                        <label class="text-sm">Project Topic</label>
                        <input type="text" placeholder="What is your group project topic" class="border-[2px] border-white bg-transparent p-2 md:w-[220px] placeholder:text-[12px] w-[300px] focus:border-white focus:outline-white" onChange={(e)=>setTopic(e.target.value)} value={topic}/>
                    </div>

                </div>
                <div class="input1 flex gap-[30px] mt-[15px]">
                    <div class="flex flex-col gap-2">
                        <label class="text-sm">Category</label>
                        <select class="border-[2px] border-white bg-transparent p-2 md:w-[220px] text-white w-[160px] text-sm" onChange={(e)=>setCategory(e.target.value)}>
                            <option value="" className="text-white">Select your category</option>
                            { categoryList.map((item,i)=>{
                                return (
                                    <option value={item.id} className="text-[#8d1d73] font-bold">{item.name}</option>
                                )
                            })}


                        </select>
                       
                    </div>

                    <div class="flex flex-col gap-2">
                        <label class="text-sm">Group Size</label>
                        <select class="border-[2px] border-white bg-transparent p-2 pr-[25px] md:w-[220px] text-white w-[100px] text-sm" onChange={(e)=>setSize(e.target.value)}>
<option>select</option>
<option value={10} className="text-[#8d1d73] font-bold">10</option>
<option value={15} className="text-[#8d1d73] font-bold">15</option>
<option value={8} className="text-[#8d1d73] font-bold">8</option>
</select>
                    </div>

                </div>
                <div>
                    <p class="text-[#8d1d73] md:text-sm text-[10px] ">Please review your registration details before submitting</p>
                    <div class="flex gap-2 mt-[5px]"><input type="checkbox" class="bg-transparent"/><p class="md:text-sm text-[10px]">I agreed with the event terms and conditions  and privacy policy</p></div>
                </div>
                <div class="flex items-center md:items-start justify-center mt-[15px]"><button class="bg-gradient-to-r from-[#f927c1] to-[#9d39ff] p-2 rounded-sm md:w-[470px] w-[200px] flex items-center justify-center" onClick={registerCall}>{success ?<ImSpinner8 className="text-white animate w-[30px] spin"/>:<p className="text-[17px]">Register</p>}</button></div>
                <div>{error ? <p>{error}</p>:null}</div>
            </div>
            </div>
            

        </div>
    </div>
  </div>
  
{confirmReg ? <Success/> : null}
   </>
  )

}

export default Register;