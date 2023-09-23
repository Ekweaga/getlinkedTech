import React from 'react'
import Image from 'next/image'

function Rules() {
  return (
    <>
    <div className="border-b-[1px] border-[#2c2c2c] pb-[20px] relative">
        <div className="flex items-center justify-around -mt-[30px] flex-col-reverse md:flex-row">
           
            <div className="relative p-4 md:p-0" data-aos="fade-in">
            <Image src="/star.png" width={20} height={20} alt="idea" className="absolute md:-right-4 md:-bottom-4 top-0 right-3"/>
            <Image src="/star.png" width={20} height={20} alt="idea" className="absolute left-[90px] bottom-0  md:hidden block"/>
            <Image src="/star (1).png" width={20} height={20} alt="idea" className="absolute md:top-0 md:left-[250px] -top-[340px]" style={{zIndex:22}}/>
            <Image src="/lens.png" width={1300} height={450} alt="f" className="ml-[0px] absolute md:-top-[150px] -top-[400px] -left-[100px] md:-left-[20px]" style={{zIndex:2}}/>
                <h3 class="md:text-[30px] text-[20px] font-extrabold relative md:text-left text-center" style={{zIndex:222}}>Rules and<br/>
<span className="text-[#d434fe]">Guidelines</span></h3>
<p className="md:w-[500px] mt-[10px] text-sm leading-8 relative text-center md:text-left md:p-0 p-3" style={{zIndex:222}}>Our tech hackathon is a melting pot of visionaries, and its purpose is as
clear as day: to shape the future. Whether you are a coding genius, a 
design maverick, or a concept wizard, you will have the chance to transform 
your ideas into reality. Solving real-world problems, pushing the boundaries
of technology, and creating solutions that can change the world,
thats what we are all about!</p>

            </div>

            <div className="relative md:p-0 p-3" data-aos="slide-up">
              <div className="relative" style={{zIndex:'10px'}}>  
               <Image src="/rules.png" width={500} height={350} alt="idea"  style={{zIndex:5}} className="relative"/>
               <div className="absolute right-[100px] top-[80px] md:block hidden " style={{zIndex:2}}> <Image src="/circle.png" width={80} height={100} alt="idea" style={{zIndex:3}}/></div>
               
               </div>
              
             
               
            </div>
        </div>
        <Image src="/lens.png" width={660} height={450} alt="f" className="ml-[0px] absolute md:-bottom-[80px] md:-right-[400px] md:-mr-4 md:-mb-[100px] -right-[200px] top-[150px]"/>
    </div>
    </>
  )
}

export default Rules