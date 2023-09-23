"use client"


import React from 'react'
import Menu from '../components/menu'
import Image from "next/image"
import { useState,useEffect } from 'react'
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import axios from 'axios'
import {ImSpinner8} from 'react-icons/im'



function Contact(){
    const[name,setName] = useState('')
    const[phone,setPhone] = useState('')
    const [mail,setMail] = useState('')
    const[message,setMessage] = useState('')
    const [error,setError] = useState('')
    const [success,setSuccess] = useState(false)
      const baseUrl = "https://backend.getlinked.ai"

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const contactCall = (e)=>{
                e.preventDefault();

               
setSuccess(true)

                if(name !== "" || mail !== "" || phone !== "" || message !== "" ){

                    if(isNaN(phone) == false){
                                if(phone.length < 11){
                                  
                                     toast('Phone digits must have at least 11 characters',{autoClose:1000,type:'error',position:'top-right'})
                                     setSuccess(false)
                                    return;
                                }

                    }

                    else{
                        toast('Phone numver is not valid',{autoClose:1000,type:'error',position:'top-right'})
                        setSuccess(false)
                    return;
                }
            
                if(emailRegex.test(mail) == false){
                    toast('Email is not valid',{autoClose:1000,type:'error',position:'top-right'})
                    setSuccess(false);
                    return;
                }

                axios.post(baseUrl + '/hackathon' + '/contact-form',{
                    email:mail,
                    phone_number:phone,
                    first_name:name,
                    message:message,
            
                },
               ).then((response)=>{
                    console.log(response)
                    setSuccess(false)
                }).catch((err)=>{
                    if(err.response.data.email){
                        toast('Email already exist',{autoClose:1000,type:'error',position:'top-right'})
                    }
                    setSuccess(false)
                    console.log(err)
                })


            }


            else{
                           
                toast('Fields are empty, check',{autoClose:1000,type:'error',position:'top-right'})
                setSuccess(false)
        

}







    }
    return(
<>
<ToastContainer/>
<Menu/>

<div>
    <div class="flex  w-[100%] mx-auto justify-center items-center md:gap-[300px] md:mt-[100px] relative flex-col md:flex-row mt-[150px]">
    <Image src="/lens.png" width={660} height={400} alt="lens" class="absolute -top-[180px] -left-[100px]" style={{zIndex:11}}/>
        <div>
            <div class="relative md:block hidden">
               
                <Image src="/star2.png" width={20} height={400} alt="lens" class="absolute -top-[80px] left-0" style={{zIndex:22}}/>
                <h2 class="text-[30px] font-bold text-[#d434fe] relative" style={{zIndex:99}}>Get in touch</h2>
                <div class="mt-[20px] flex flex-col gap-[20px] relative" style={{zIndex:3333}}>
                    <p>Contact<br/>Information</p>
                    <p>27,Alara Street<br/>
Yaba 100012
Lagos State</p>
<p>Call Us : 07067981819</p>
<p>we are open from Monday-Friday<br/>
08:00am - 05:00pm</p>
                </div>
                <div class="mt-[15px]">
                    <span class="text-[#d434fe] font-bold text-[15px] mb-[15px]">Share on</span>:
                    <Image src="/media.png" width={100} height={60} alt="media"/>
                </div>

            </div>
        </div>

        <div class="md:bg-[#1c152e] md:w-[450px] relative md:p-[40px] md:pb-[30px] rounded-md md:shadow-2xl pb-[3px]  ">
        <Image src="/star3.png" width={20} height={400} alt="lens" class="absolute bottom-[80px] -left-2" style={{zIndex:522}}/>
          <Image src="/star.png" width={20} height={400} alt="lens" class="absolute bottom-0 -right-[40px]" style={{zIndex:522}}/>
          <Image src="/star (1).png" width={20} height={400} alt="lens" class="absolute -top-[60px] right-0" style={{zIndex:522}}/>
          <Image src="/lens.png" width={2000} height={400} alt="lens" class="absolute -bottom-[200px] -right-[320px] hidden md:block" style={{zIndex:11}}/>
            <h2 class="text-[#d434fe] font-bold text-[20px] md:ml-[35px] relative" style={{zIndex:2222}}>Questions or need assistance?</h2>
            <h2 class="text-[#d434fe] font-bold text-[20px] md:ml-[35px] relative" style={{zIndex:2222}}>Let us know  about it!</h2>

            <div class="flex flex-col md:gap-4 items-center justify-center mt-[20px] gap-[40px]">
            <div class="flex flex-col gap-2 relative" style={{zIndex:222}}>
                        
                        <input type="text" placeholder="First Name" class="border-[2px] border-white bg-transparent p-[10px] md:w-[300px] w-[300px] placeholder:text-sm placeholder:text-white placeholder:pl-2" value={name} onChange={(e)=>setName(e.target.value)}/>
                    </div>

                    <div class="flex flex-col gap-2">
                       
                       <input type="text" placeholder="Phone number" class="border-[2px] border-white bg-transparent p-[10px] md:w-[300px] w-[300px] placeholder:text-sm placeholder:text-white placeholder:pl-2 bg-[#1c152e] md:bg-none" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                   </div>

                    <div class="flex flex-col gap-2">
                       
                        <input type="text" placeholder="Mail" class="border-[2px] border-white bg-transparent p-[10px] w-[300px] md:w-[300px] placeholder:text-sm placeholder:text-white placeholder:pl-2" value={mail} onChange={(e)=>setMail(e.target.value)}/>
                    </div>
                    <div class="flex flex-col gap-2">
                        <textarea  class="border-[2px] border-white bg-transparent p-2 md:w-[300px] w-[300px] placeholder:text-sm placeholder:text-white placeholder:pl-2 h-[100px]" placeholder="Message" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                    </div>
                     <div><button class="bg-gradient-to-r from-[#f927c1] to-[#9d39ff] p-2 rounded-sm w-[200px] flex items-center justify-center" onClick={contactCall}>{success ?<ImSpinner8 className="text-white animate w-[30px] spin"/>:<p className="text-[17px]">Submit</p>}</button></div>
            </div>

           
        </div>
    </div>

</div>
<div class=" md:hidden flex flex-col items-center justify-center mt-[30px] pb-[10px]">
                    <span class="text-[#d434fe] font-bold text-[15px] mb-[15px]">Share on:</span>
                    <Image src="/media.png" width={100} height={60} alt="media"/>
                </div>
</>
    )




}


export default Contact;