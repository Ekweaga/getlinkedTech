import React from 'react'
import Image from 'next/image'

function Partners() {
  return (
    <>
    <div class="border-b-[1px] border-[#2c2c2c] relative flex flex-col items-center pb-[30px] pt-[30px]">
       <div class="flex items-center flex-col gap-2 md:p-[60px] p-3 relative" style={{zIndex:2222}} data-aos="zoom-in">
        <h2 class="md:text-[30px] font-extrabold text-center text-[20px]">Partners and Sponsors</h2>
        <p class="text-center text-sm">Getlinked Hackathon 1.0 is honored to have the following major <br/>
companies as its partners and sponsors</p>
       </div>

       <div class="mt-[60px] relative md:p-0 p-4" data-aos="fade-in">
        <Image src="/partner.png" width={1000} height={400} alt="partner" class="relative" style={{zIndex:2222}}/>
        <Image src="/star2.png" width={20} height={20} alt="idea" class="absolute  right-[50px] top-[60px] left-[580px]" style={{zIndex:1}}/>
        <Image src="/star.png" width={20} height={20} alt="idea" class="absolute  right-[50px] bottom-[60px] left-[580px]"/>
            <Image src="/star.png" width={20} height={20} alt="idea" class="absolute -top-[50px] left-[30px]"/>
       </div>
           
           
            
           
             

           

            <Image src="/lens.png" width={660} height={450} alt="f" class="ml-[0px] absolute -top-[70px] md:-left-[50px] -mb-[100px] -left-[150px]" style={{zIndex:11}}/>
        
        <Image src="/lens.png" width={660} height={450} alt="f" class="ml-[0px] absolute md:-bottom-[100px] md:-right-[150px] -mb-[100px] -right-[230px] -bottom-[60px]" style={{zIndex:11}}/>
    </div>
    </>
  )
}

export default Partners