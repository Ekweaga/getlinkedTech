import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <>
    <div class=" pb-[20px] relative bg-[#110b20] md:h-[400px] mt-[50px] flex items-center flex-col justify-center ">
    <Image src="/star.png" width={20} height={450} alt="f" class="ml-[0px] absolute md:top-[100px] left-[120px] top-[200px]"/>
    <Image src="/star.png" width={20} height={450} alt="f" class="ml-[0px] absolute bottom-[100px] right-[120px]"/>
    <Image src="/star3.png" width={20} height={450} alt="f" class="ml-[0px] absolute bottom-[120px] left-[730px]"/>
        <div class="flex md:items-center justify-around relative md:gap-[150px] flex-col md:flex-row md:p-0 p-3">
           <Image src="/star (1).png" width={20} height={450} alt="f" class="ml-[0px] absolute top-[60px] right-[260px]"/>
          <div>
          <h3 class="font-semibold text-[30px] mb-[20px]">
                get<span class="text-[#d434fe]">linked</span>
            </h3>
            <p class="md:w-[450px] mt-[20px] text-sm ">Getlinked Tech Hackathon is a technology innovation program 
established by a group of organizations with the aim of showcasing 
young and talented individuals in the field of technology</p>

<div class="mt-[50px]">
  <p class="flex items-center gap-2 text-sm"><span>Terms of Use</span><span class=""><Image src="/vertical.png" width={2} height={5} alt="vertical"/></span> <span>Privacy Policy</span></p>
  </div>

          </div>

          <div class="mt-[40px]">
            <h3 class="text-[#d434fe] font-bold">Useful links</h3>
            <ul class="flex flex-col gap-2 text-sm">
              <li class="text-sm">Overview</li>
              <li >Timeline</li>
              <li class="text-sm">FAQs</li>
               <li class="text-sm">Register</li>
               <li class="flex items-center gap-3 text-[#d434fe] font-bold text-sm">Follow Us <div><Image src="/media.png" width={80} height={50} alt="media"/></div></li>
            </ul>
          </div>

          <div>
          <h3 class="text-[#d434fe] font-bold">Contact us</h3>
            <ul class="flex flex-col gap-2 text-sm mt-[20px]">
            <li class="flex items-center gap-3  font-bold"><div><Image src="/phone.png" width={10} height={50} alt="media"/></div>+2349084569 </li>
            <li class="flex items-center gap-3  font-bold"><div><Image src="/location.png" width={10} height={50} alt="media"/></div>27,Alara Street<br/>
Yaba 100012
Lagos State </li>
             
              
            </ul>
          </div>
           
          
        </div>
        <div class="mt-[60px] p-3 text-sm"><p>All rights reserved. © getlinked Ltd.</p></div>
    </div>
    </>
  )
}

export default Footer