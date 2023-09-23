import React from 'react'
import Image from "next/image"

function Intro() {
  return (
    <>
    <div class="border-b-[1px] border-[#2c2c2c] pb-[30px] pt-[30px]">
        <div class="flex items-center justify-around mt-[50px] flex-col md:flex-row md:p-0 p-4">
            <div class="relative pb-4" data-aos="slide-left">
                <Image src="/idea.png" width={450} height={350} alt="idea"/>
                <Image src="/star1.png" width={20} height={20} alt="idea" class="absolute left-0 top-[120px]"/>
                <Image src="/arrow.png" width={50} height={20} alt="idea" class="absolute right-[120px] -bottom-[40px] md:-right-[50px] md:bottom-[50px]"/>
            </div>
            <div class="relative md:mt-0 mt-[65px]" data-aos="fade-up">
            <Image src="/star3.png" width={20} height={20} alt="idea" class="absolute right-0 top-4" />
                <h3 class="md:text-[30px] font-extrabold text-center md:text-left">Introduction to getlinked<br/>
<span class="text-[#d434fe]">tech Hackathon 1.0</span></h3>
<p class="md:w-[500px] text-sm md:leading-8 mt-[10px] text-center md:text-left md:p-0 p-3">Our tech hackathon is a melting pot of visionaries, and its purpose is as
 clear as day: to shape the future. Whether you're a coding genius, a 
design maverick, or a concept wizard, you'll have the chance to transform 
your ideas into reality. Solving real-world problems, pushing the boundaries
of technology, and creating solutions that can change the world,
that's what we're all about!</p>

            </div>
        </div>
    </div>
    
    </>
  )
}

export default Intro
