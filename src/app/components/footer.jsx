import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <>
    
    <div className=" pb-[20px] relative bg-[#110b20] md:h-[400px] mt-[50px] flex items-center flex-col justify-center md:p-0 p-4">
    
    <Image src="/star.png" width={20} height={450} alt="f" className="ml-[0px] absolute md:top-[100px] left-[120px] top-[200px]"/>
    <Image src="/star.png" width={20} height={450} alt="f" className="ml-[0px] absolute bottom-[100px] right-[120px]"/>
    <Image src="/star3.png" width={20} height={450} alt="f" className="ml-[0px] absolute bottom-[120px] left-[730px]"/>
        <div className="flex md:items-center justify-around relative md:gap-[150px] flex-col md:flex-row md:p-0 p-3">
           <Image src="/star (1).png" width={20} height={450} alt="f" className="ml-[0px] absolute top-[60px] right-[260px]"/>
          <div>
          <h3 className="font-semibold md:text-[30px] mb-[20px] text-[20px] md:ml-0 ml-[20px] md:pt-0 pt-3">
                get<span className="text-[#d434fe]">linked</span>
            </h3>
            <p className="md:w-[450px] mt-[20px] text-sm p-3 md:p-0 ">Getlinked Tech Hackathon is a technology innovation program 
established by a group of organizations with the aim of showcasing 
young and talented individuals in the field of technology</p>

<div className="mt-[50px]">
  <p className="flex items-center gap-2 text-sm"><span>Terms of Use</span><span className=""><Image src="/vertical.png" width={2} height={5} alt="vertical"/></span> <span>Privacy Policy</span></p>
  </div>

          </div>

          <div className="mt-[40px]">
            <h3 className="text-[#d434fe] font-bold">Useful links</h3>
            <ul className="flex flex-col gap-2 text-sm md:mt-0 mt-2">
              <li className="text-sm">Overview</li>
              <li >Timeline</li>
              <li className="text-sm">FAQs</li>
               <li className="text-sm">Register</li>
               <li className="flex items-center gap-3 text-[#d434fe] font-bold text-sm">Follow Us <div><Image src="/media.png" width={80} height={50} alt="media"/></div></li>
            </ul>
          </div>

          <div className="mt-[25px] md:mt-0">
          <h3 className="text-[#d434fe] font-bold">Contact us</h3>
            <ul className="flex flex-col gap-2 text-sm mt-[20px]">
            <li className="flex items-center gap-3  font-bold"><div><Image src="/phone.png" width={10} height={50} alt="media"/></div>+2349084569 </li>
            <li className="flex items-center gap-3  font-bold"><div><Image src="/location.png" width={10} height={50} alt="media"/></div>27,Alara Street<br/>
Yaba 100012
Lagos State </li>
             
              
            </ul>
          </div>
           
          
        </div>
        <div className="mt-[60px] p-3 text-sm"><p>All rights reserved. © getlinked Ltd.</p></div>
    </div>
    </>
  )
}

export default Footer