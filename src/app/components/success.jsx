import React from 'react'
import Image from "next/image"

function Success() {
  return (
    <>
    <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/70  overflow-y-hidden" style={{zIndex:9999}}>
        <div className="flex items-center justify-center">
            <div className=" border-[1px] border-[#d434fe] md:w-[550px] md:p-[40px] mt-[150px] relative w-[330px] p-3" >
            <Image src="/star3.png" width={20} height={400} alt="lens" className="absolute -top-[25px] -right-[20px]"/>
            <Image src="/star2.png" width={20} height={400} alt="lens" className="absolute bottom-[15px] right-[20px]"/>
            <Image src="/star (1).png" width={20} height={400} alt="lens" className="absolute top-[205px] left-[60px]"/>
                <div className="flex flex-col items-center justify-center gap-3">
                    <div>
                        <Image src="/congratulation.png" width={300} height={400} alt="congrats"/>
                    </div>
                    <div>
                    <h3 className="text-[20px] font-bold text-center">Congratulations</h3>
                    <h3 className="text-[20px] font-bold text-center">you have successfully Registered</h3>

                    <p className="text-center text-[15px] mt-[10px] leading-8 relative">Yes, it was easy and you did it!<br/>
check your mail box for next step<sub class="absolute right-[20px] bottom-3"><Image src="/emoji.png" width={15} height={10} alt="emoji"/></sub></p>
                    </div>
                    <div>
                    <button className="bg-gradient-to-r from-[#f927c1] to-[#9d39ff] p-2 rounded-sm md:w-[350px] w-[300px]">Back</button>
                    </div>
                </div>

            </div>
        </div>

    </div>
    </>
  )
}

export default Success
