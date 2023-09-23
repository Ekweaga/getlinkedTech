import React from 'react'
import Image from 'next/image'

function Terms() {
  return (
    <>
    <div className="relative flex flex-col items-center pb-[80px] pt-[50px]">
     <div className="flex gap-[130px] items-center justify-center flex-col md:flex-row md:p-0 p-4">


        <div>

            <div>
                <div className="relative p-3">
                    <div data-aos="zoom-in"><h3 class="md:text-[25px] text-center md:text-left font-bold text-[19px] ">Privacy Policy and <br/>
                            <span className="text-[#d434fe]">Terms</span></h3></div>
<p className="text-center md:text-left text-sm mt-[15px]">Last updated on September 12, 2023</p>
<Image src="/star (1).png" width={20} height={20} alt="star" className="right-[220px] absolute top-0"/>
<p className="text-center md:text-left text-sm mt-[20px]">Below are our privacy & policy, which outline a lot of goodies. <br/>
                                          it’s our aim to always take of our participant</p>
                </div>
                        

                        <div className=" border-[1px] border-[#d434fe] md:w-[450px] md:p-[40px] p-[20px] md:mt-[100px] mt-[40px]  relative" style={{zIndex:33333}}>
                            <div>
                            <p className="text-sm">At getlinked tech Hackathon 1.0, we value your privacy
and are committed to protecting your personal information.
This Privacy Policy outlines how we collect, use, disclose, 
and safeguard your data when you participate in our tech 
hackathon event. By participating in our event, you consent 
to the practices described in this policy.</p>
                            </div>

                            <div className="mt-[30px]">
                                <h4 className="font-extrabold text-[#d434fe]">Licensing Policy</h4>
                                <p className="text-sm mt-[12px]">Here are terms of our Standard License:</p>
                            </div>

                            <div className="mt-[20px]">
                                <div className="flex items-center gap-3 " data-aos="fade-in">
                               <div className="-mt-[30px]"><Image src="/list.png" width={30} height={30} alt="list"/></div> 
                                <p className="text-sm">The Standard License grants you a non-exclusive right to
navigate and register for our event</p>
                                </div>

                                <div className="flex items-center gap-3 mt-[10px]" data-aos="fade-in">
                               <div className="-mt-[30px]"><Image src="/list.png" width={30} height={30} alt="list"/></div> 
                                <p className="text-sm">The Standard License grants you a non-exclusive right to
navigate and register for our event</p>
                                </div>
                                <div className="flex items-center justify-center" data-aos="zoom-in"><button className="bg-gradient-to-r from-[#d434fe] to-[#9d39ff] p-2 w-[150px] rounded-sm mt-[20px]">Read more</button></div>
                            </div>

                        </div>

            </div>

        </div>



        <div>

            <div className="relative md:mt-0 mt-[120px]" data-aos="slide-left">
               <div  style={{zIndex:'10px'}} class="relative" >
                <Image src="/boy.png" width={400} height={400} alt="boy" className="relative" style={{zIndex:999}} /><br/>
                <Image src="/lock.png" width={400} height={400} alt="lock" className="absolute -top-[100px] left-0" style={{zIndex:33}}/>
                <Image src="/star.png" width={20} height={400} alt="lock" classNameName="absolute bottom-[140px] left-[70px]" style={{zIndex:33}}/>
                <Image src="/star (1).png" width={20} height={400} alt="lock" className="absolute bottom-[100px] -right-[70px] hidden md:block" style={{zIndex:33}}/>
                <Image src="/star.png" width={20} height={400} alt="lock" className="absolute top-[20px] right-[80px]" style={{zIndex:33}}/>
                <Image src="/star3.png" width={20} height={400} alt="lock" className="absolute top-[0px] -left-[100px]" style={{zIndex:33}}/></div> 
                
            </div>

        </div>


     </div>
     <Image src="/lens.png" width={660} height={450} alt="f" className="ml-[0px] absolute bottom-[700px] -left-[150px] md:-bottom-[100px] md:-left-[90px] md:-mb-[100px]" style={{zIndex:11}}/>
     <Image src="/star3.png" width={20} height={20} alt="star" className="left-[120px] absolute md:bottom-[250px]"/>
    </div>
    </>
  )
}

export default Terms