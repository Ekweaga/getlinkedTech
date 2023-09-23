import React from 'react'
import Image from 'next/image'

function Prizes() {
  return (
    <>
    <div className=" bg-[#110b20] p-3 pb-[150px]">
        <div className="flex items-center justify-around flex-col md:flex-row md:p-0 p-4 ">
        <div className="relative pt-[60px] md:hidden block">
                <h3 className="text-[30px] font-bold text-center">
                Prizes and <br/>
             <span className="text-[#d434fe] -mt-[40px]">Rewards</span>
                </h3>
                <p className="relative text-center leading-8 mt-[10px]" style={{zIndex:222}}>Highlight of the prizes or rewards for winners and
for participants.
</p>
  <Image src="/star2.png" width={20} height={450} alt="f" className="ml-[0px] absolute top-[90px] bottom-0 md:left-[250px] left-[300px] " style={{zIndex:2}}/>
              </div><br/><br/>

           <div className="relative mt-[60px]" data-aos="fade-up">
           <Image src="/star3.png" width={20} height={450} alt="f" className="ml-[0px] absolute md:-top-[100px] md:left-[140px] -top-[300px] left-[20px]" style={{zIndex:2}}/>
           <div className="relative">
           <Image src="/lens.png" width={960} height={550} alt="f" className="ml-[0px] absolute md:top-[0px] md:-right-[200px] left-0 -top-[110px]" style={{zIndex:2}}/>
            <Image src="/cup.png" width={450} height={400} alt="cup"  className="relative" style={{zIndex:2222}}/>
           </div>
           
            <Image src="/star.png" width={20} height={450} alt="f" className="ml-[0px] absolute -bottom-4 left-[140px] " style={{zIndex:2}}/>
           </div>
           

            <div className="relative pt-4" >
              <div className="relative pt-[60px] md:block hidden">
                <h3 className="text-[30px] font-bold">
                Prizes and <br/>
             <span className="text-[#d434fe] -mt-[40px]">Rewards</span>
                </h3>
                <p className="relative" style={{zIndex:222}}>Highlight of the prizes or rewards for winners and<br/>
for participants.
</p>
  <Image src="/star2.png" width={20} height={450} alt="f" class="ml-[0px] absolute top-[90px] bottom-0 left-[250px] " style={{zIndex:2}}/>
              </div><br/><br/>
              <div className="relative" style={{zIndex:'10px'}} data-aos="zoom-in"> 
                <Image src="/Rewards.png" width={650} height={350} alt="idea"  style={{zIndex:555}} className="relative"/>
                <Image src="/lens.png" width={960} height={550} alt="f" class="ml-[0px] absolute -right-[190px] top-0 md:hidden block" style={{zIndex:0}}/>
                <div className="absolute right-[200px] -bottom-[80px] " style={{zIndex:'2px'}}> <Image src="/star (1).png" width={20} height={100} alt="idea" style={{zIndex:3}}/></div>
                <div className="absolute right-0 md:top-[100px] -top-[30px] " style={{zIndex:'2px'}}> <Image src="/star.png" width={20} height={100} alt="idea" style={{zIndex:3}}/></div>
                </div>
              <div className="absolute -left-[120px] top-[220px] " style={{zIndex:'2px'}}> <Image src="/star.png" width={20} height={100} alt="idea" style={{zIndex:3}}/></div>
             
             
               
            </div>
        </div>
       
    </div>
    </>
  )
}

export default Prizes