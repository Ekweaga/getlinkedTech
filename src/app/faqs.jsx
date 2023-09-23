import React from 'react'
import Image from 'next/image'

function FAQs() {
  return (
    <>
    <div class="border-b-[1px] border-[#2c2c2c] pb-[40px] relative" id="faqs">
        <div class="flex items-center justify-around -mt-[30px] flex-col md:flex-row md:p-0 p-3">
           
            <div class="relative">
           
            <Image src="/star3.png" width={20} height={20} alt="idea" class="absolute md:-top-[50px] left-4 top-[40px]"/>
           
              <div data-aos="zoom-in"> <h3 class="md:text-[30px] font-extrabold text-center md:text-left mt-[50px] md:mt-0 text-[20px] p-3 md:p-0">Frequently Ask<br/>
<span class="text-[#d434fe]">Question</span></h3>
<p class="md:w-[400px] text-sm mt-[15px] md:mt-0 leading-6 md:leading-0 text-center md:text-left">We got answers to the questions that you might
want to ask about getlinked Hackathon 1.0</p></div>
<br/>
<div class="faqs flex flex-col gap-[40px] p-3 md:p-0 mt-[15px] md:mt-0">
    <div class="flex items-center border-b-[3px] border-[#d434fe] pb-[10px] gap-[40px] relative" data-aos="fade-in">
      <p class="text-sm">Can I work on a project I started before the hackathon?</p> <p class="text-[#d434fe] font-bold text-[20px] absolute right-0">+</p>
    </div>

    <div class="flex items-center border-b-[3px] border-[#d434fe] pb-[10px] gap-[40px] relative" data-aos="fade-in">
      <p class="text-sm">What happens if I need help during the hackathon?</p> <p class="text-[#d434fe] font-bold text-[20px] absolute right-0">+</p>
    </div>
    <div class="flex items-center border-b-[3px] border-[#d434fe] pb-[10px] gap-[40px] relative" data-aos="fade-in">
      <p class="text-sm">Can I join a team or do I have to come with one?</p> <p class="text-[#d434fe] font-bold text-[20px] absolute right-0">+</p>
    </div>
    <div class="flex items-center border-b-[3px] border-[#d434fe] pb-[10px] gap-[40px] relative" data-aos="fade-in">
      <p class="text-sm">What happens if I need help during the hackathon?</p> <p class="text-[#d434fe] font-bold text-[20px] absolute right-0">+</p>
    </div>
    <div class="flex items-center border-b-[3px] border-[#d434fe] pb-[10px] gap-[40px] relative" data-aos="fade-in">
      <p class="text-sm">Can I join a team or do I have to come with one?</p> <p class="text-[#d434fe] font-bold text-[20px] absolute right-0">+</p>
    </div>
</div>

            </div>

            <div class="relative mt-[190px]" data-aos="fade-left">
              <div class="" style={{zIndex:'10px'}}>   <Image src="/faq.png" width={550} height={350} alt="idea"  style={{zIndex:5}}/></div>
              <div class="">
              <Image src="/star2.png" width={20} height={20} alt="idea" class="absolute left-[210px] -top-[50px]"/>
                <div class="absolute left-[280px] -top-[50px] " style={{zIndex:'2px'}}> <Image src="/quemark.png" width={40} height={100} alt="idea" style={{zIndex:3}}/></div>
             
               <div class="absolute left-[30px] -top-[50px] " style={{zIndex:'2px'}}> <Image src="/quemark.png" width={40} height={100} alt="idea" style={{zIndex:3}}/></div>
               <div class="absolute left-[150px] -top-[100px] " style={{zIndex:'2px'}}> <Image src="/quemark.png" width={40} height={30} alt="idea" style={{zIndex:3}}/></div>
              </div>
              <Image src="/star.png" width={20} height={20} alt="idea" class="absolute right-4 -bottom-4"/>
              <Image src="/star2.png" width={20} height={20} alt="idea" class="absolute left-[60px] top-[80px]"/>
              <Image src="/star (1).png" width={20} height={20} alt="idea" class="absolute left-[60px] top-[280px]"/>
            </div>
        </div>
       
    </div>
    </>
  )
}

export default FAQs