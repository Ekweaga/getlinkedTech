import React from 'react'
import Image from "next/image"
import Link from "next/link"

function Hero() {
  return (
    <>
   <div className="border-b-[1px] border-[#2c2c2c] relative ">
    <Image src="/lens.png" width={550} height={600} alt="lens" class="absolute md:-top-[120px] md:left-[320px] -left-[60px]"/>
    <div className="pt-4 absolute md:right-[100px] top-0 md:pr-4 right-[40px]">
        <h4 className="md:text-[25px] font-bold text-[15px] text-center md:text-right">Igniting a Revolution in HR Innovation</h4>
        <Image src="/f.png" width={200} height={200} alt="f" class="md:ml-[280px] ml-[150px] md:block hidden"/>
        <Image src="/f.png" width={150} height={200} alt="f" class="md:ml-[280px] ml-[150px] md:hidden block"/>
    </div>

    <div>

        <div className="flex  justify-center md:pt-[100px] gap-[50px] md:flex-row flex-col pt-[120px] md:p-0 p-2">

            <div className="relative p-4 md:ml-[180px] flex flex-col items-center justify-center md:items-start ">
                <div>
                <h1 className="md:text-[62px] font-extrabold relative text-[30px]">getlinked Tech</h1>
                    <Image src="/Creative 1.png" width={20} height={600} alt="lens" className="absolute md:top-[40px] md:right-[80px] right-[90px] -top-[10px]"/>
                </div>
                <div className="relative">
                    <h1 className="md:text-[62px] font-extrabold relative text-[30px] md:ml-0 -ml-[90px]">Hackathon <span  className="text-[#d434fe]">1.0</span></h1><div className="absolute md:top-[25px] top-0 md:-right-[60px] -right-[50px]"><Image src="/chain.png" width={50} height={100} alt="chain"/></div>
                    <div className="absolute md:top-[25px] top-0 md:-right-[110px] -right-[100px]"><Image src="/1f4a5.png" width={50} height={100} alt="chain"/></div>
                </div>
                <div className="mt-[20px]">
                    <p className="text-center md:text-left"> Participate in getlinked tech Hackathon 2023 stand
a chance to win a Big prize</p>
                </div>

                <div className="mt-[30px]"><button className="bg-gradient-to-r from-[#f927c1] to-[#9d39ff] p-2 rounded-sm w-[200px] hover:bg-[#f927c1] hover:scale-75"><Link href="register">Register</Link></button></div>

                <div className="mt-[70px] flex gap-3">
                    <p><span className=" text-[40px]">00</span><sub className="text-sm">H</sub></p>
                    <p><span className=" text-[40px]">00</span><sub className="text-sm">M</sub></p>
                    <p><span className=" text-[40px]">00</span><sub className="text-sm">S</sub></p>
                </div>

            </div>




            <div>
                <div class="relative">
                <Image src="/lens.png" width={660} height={500} alt="manw" class="absolute -top-[90px] -right-[90px]" style={{zIndex:111}}/>
                <Image src="/lens.png" width={800} height={500} alt="manw" class="absolute -bottom-[140px] right-0" style={{zIndex:111}}/>
                    <Image src="/Image 1.png" width={650} height={500} alt="manw" class="absolute -top-[30px] left-0" style={{zIndex:222}}/>
                    <Image src="/manw.png" width={800} height={500} alt="manw" class="relative"/>

                </div>
            </div>


        </div>
    </div>




   </div>
    </>
  )
}

export default Hero
