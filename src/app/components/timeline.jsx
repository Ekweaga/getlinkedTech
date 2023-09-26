import React from 'react'
import Image from 'next/image'

function TimeLines() {
  return (
    <>
    <div className="p-3 relative md:block hidden" id="timeline">
      
    <div className="flex flex-col items-center justify-center gap-2 md:p-[50px] ">
      <h2 className="text-[25px] font-extrabold text-center p-3 md:p-0 mt-[10px] ">Timeline</h2>
      <p className="text-[15px] text-center">Here is the breakdown of the time we anticipate <br/>
using for the upcoming event.</p>
    </div>


    <div>
    <div className="flex justify-center gap-[60px] pb-[100px] relative">
      <Image src="/star3.png" width={20} height={20} alt="star" className="absolute left-[400px] top-0"/>
      <Image src="/star.png" width={20} height={20} alt="star" className="absolute top-[340px] right-[300px]"/>
      <Image src="/star (1).png" width={20} height={20} alt="star" className="absolute left-[300px] bottom-[150px]"/>

      <div class="dates">


        <div data-aos="fade-down">
          <h3 className="font-extrabold text-[#d434fe] text-[20px] mt-[70px] text-right">Hackathon Announcement</h3>
          <p className=" text-sm mt-[10px] text-right">The getlinked tech hackathon 1.0 is formally announced<br/>
to the general public and teams begin to get ready to register</p>
        </div>

        <div className="font-extrabold text-[#d434fe] mt-[80px] text-[20px]" data-aos="fade-down"><h4 className="text-right">November 18, 2023</h4></div>

 <div data-aos="fade-down">
          <h3 className="font-extrabold text-[#d434fe] mt-[60px] text-[20px] text-right">Teams Registration ends</h3>
          <p className="text-sm text-right mt-[10px]">Interested Participants are no longer Allowed to<br/>
register</p>
        </div>

        <div className="font-extrabold text-[#d434fe] mt-[70px]"><h4 className="text-right text-[20px] font-extrabold" data-aos="fade-down">November 18, 2023</h4></div>

        <div data-aos="fade-down">
          <h3 className="font-extrabold text-[#d434fe] text-[20px] mt-[60px] text-right">Getlinked Hackathon 1.0 Offically Begins</h3>
          <p className="text-sm text-right mt-[10px]">Accepted teams can now proceed to build their<br/>
ground breaking skill driven solutions</p>
        </div>

        <div className="font-extrabold text-[#d434fe] text-right text-[20px] mt-[60px]" data-aos="fade-down"><h4>November 18, 2023</h4></div>


      </div>

         <div className="ml-[20px]">
          <div className="flex flex-col gap-3">

            <div className="flex flex-col items-center gap-2" data-aos="fade-in">
              <div>
                <Image src="/ok.png" width={3} height={10} alt="ok"/>
              </div>
              <div>
                <Image src="/No 1.png" width={30} height={60} alt="ok"/>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2" data-aos="fade-in">
              <div>
                <Image src="/ok.png" width={2} height={10} alt="ok"/>
              </div>
              <div>
                <Image src="/No 2.png" width={30} height={60} alt="ok"/>
              </div>
            </div>


            <div className="flex flex-col items-center gap-2" data-aos="fade-in">
              <div>
                <Image src="/ok.png" width={2} height={10} alt="ok"/>
              </div>
              <div>
                <Image src="/No 3.png" width={30} height={60} alt="ok"/>
              </div>
            </div>


            <div className="flex flex-col items-center gap-2" data-aos="fade-in">
              <div>
                <Image src="/ok.png" width={2} height={10} alt="ok"/>
              </div>
              <div>
                <Image src="/No 4.png" width={30} height={60} alt="ok"/>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2" data-aos="fade-in">
              <div>
                <Image src="/ok.png" width={2} height={10} alt="ok"/>
              </div>
              <div>
                <Image src="/No 5.png" width={30} height={60} alt="ok"/>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2" data-aos="fade-in">
              <div>
                <Image src="/ok.png" width={2} height={10} alt="ok"/>
              </div>
              <div>
                <Image src="/No 6.png" width={30} height={60} alt="ok"/>
              </div>
            </div>


          </div>

        

      </div>


      <div>
      <div className="font-extrabold text-[#d434fe] text-[20px] mt-[110px]" data-aos="fade-down"><h4>November 18, 2023</h4></div>
      <div data-aos="fade-down">
          <h3 className="font-extrabold text-[#d434fe] text-[20px] mt-[70px]">Teams Registration begins</h3>
          <p className="text-sm mt-[10px]">Interested teams can now show their interest in the<br/>
getlinked tech hackathon 1.0 2023 by proceeding to register</p>
        </div>

        <div className="font-extrabold text-[#d434fe] mt-[60px] text-[20px]" data-aos="fade-down"><h4>November 18, 2023</h4></div>

        <div data-aos="fade-down">
          <h4 className="font-extrabold text-[#d434fe] mt-[60px] text-[20px]">Announcement of the accepted teams
and ideas</h4>
          <p className="text-sm mt-[10px]">All teams whom idea has been accepted into getlinked tech<br/>
hackathon 1.0 2023 are formally announced</p>
        </div>

        <div className="font-extrabold text-[#d434fe] mt-[70px] text-[20px]" data-aos="fade-down"><h4>November 18, 2023</h4></div>

        <div data-aos="fade-down">
          <h4 className="font-extrabold text-[#d434fe] text-[20px]  mt-[70px]">Demo Day</h4>
          <p className="text-sm">Teams get the opportunity to pitch their projects to judges.<br/>
The winner of the hackathon will also be announced on
this day</p>
        </div>


      </div>

      




   

    </div>
    </div>
    </div>







    <div className="md:hidden block">
    <div className="flex flex-col items-center justify-center gap-2 p-[4px] ">
      <h2 className="text-[25px] font-extrabold text-center pt-4">Timeline</h2>
      <p className="text-[15px] text-center">Here is the breakdown of the time we anticipate <br/>
using for the upcoming event.</p>
    </div>

    <div className="flex gap-3 p-[15px] items-center justify-center">



    <div className="flex flex-col gap-3 pl-3">

<div className="flex flex-col items-center gap-2" data-aos="fade-in">
  <div>
    <Image src="/ok.png" width={3} height={10} alt="ok"/>
  </div>
  <div>
    <Image src="/No 1.png" width={60} height={60} alt="ok"/>
  </div>
</div>

<div className="flex flex-col items-center gap-2" data-aos="fade-in">
  <div>
    <Image src="/ok.png" width={2} height={10} alt="ok"/>
  </div>
  <div>
    <Image src="/No 2.png" width={60} height={60} alt="ok"/>
  </div>
</div>


<div className="flex flex-col items-center gap-2" data-aos="fade-in">
  <div>
    <Image src="/ok.png" width={2} height={10} alt="ok"/>
  </div>
  <div>
    <Image src="/No 3.png" width={60} height={60} alt="ok"/>
  </div>
</div>


<div className="flex flex-col items-center gap-2" data-aos="fade-in">
  <div>
    <Image src="/ok.png" width={2} height={10} alt="ok"/>
  </div>
  <div>
    <Image src="/No 4.png" width={60} height={60} alt="ok"/>
  </div>
</div>

<div className="flex flex-col items-center gap-2" data-aos="fade-in">
  <div>
    <Image src="/ok.png" width={2} height={10} alt="ok"/>
  </div>
  <div>
    <Image src="/No 5.png" width={60} height={60} alt="ok"/>
  </div>
</div>

<div className="flex flex-col items-center gap-2">
  
  
</div>


</div>


<div className="dates p-3 ">


        <div className="" data-aos="fade-down">
          <h3 className="font-extrabold text-[#d434fe] text-[13px]  text-left -mt-[0px]">Hackathon Announcement</h3>
          <p className=" text-[13px] mt-[05px] text-left">The getlinked tech hackathon 1.0 is formally announced
to the general public and teams begin to get ready to register</p>
        </div>

        <div className="font-extrabold text-[#d434fe] text-[13px] mt-[px]" ><h4 class="text-left mt-[0px]">November 18, 2023</h4></div>

 <div data-aos="fade-down" className="mt-[05px]">
          <h3 className="font-extrabold text-[#d434fe]  text-[13px] text-left ">Teams Registration ends</h3>
          <p className="text-sm text-left mt-[0px]">Interested Participants are no longer Allowed to
register</p>
        </div>

        <div className="font-extrabold text-[#d434fe] mt-[0px] "><h4 class="text-left text-[13px] font-extrabold " data-aos="">November 18, 2023</h4></div>

        <div data-aos="fade-down" className="mt-[20px]">
          <h3 className="font-extrabold text-[#d434fe] text-[13px]  text-left mt-[2px]">Getlinked Hackathon 1.0 Offically Begins</h3>
          <p className="text-sm text-left mt-[3px]">Accepted teams can now proceed to build their
ground breaking skill driven solutions</p>
        </div>

        <div className="font-extrabold text-[#d434fe] text-left text-[13px] " data-aos=""><h4>November 18, 2023</h4></div>

        <div data-aos="fade-down" className="mt-[20px]">
          <h4 className="font-extrabold text-[#d434fe]  text-[13px] text-left mt-[0px]">Announcement of the accepted teams
and ideas</h4>
          <p className="text-sm mt-[10px]">All teams whom idea has been accepted into getlinked tech<br/>
hackathon 1.0 2023 are formally announced</p>
        </div>

        <div className="font-extrabold text-[#d434fe]  text-[13px] text-left mt-[0px]" data-aos=""><h4>November 18, 2023</h4></div>

        <div data-aos="fade-down" className="mt-[05px]">
          <h4 className="font-extrabold text-[#d434fe] text-[13px] text-left mt-[0px]">Demo Day</h4>
          <p className="text-sm">Teams get the opportunity to pitch their projects to judges.<br/>
The winner of the hackathon will also be announced on
this day</p>
        </div>


      </div>


    </div>
    </div>
           
    </>
  )
}

export default TimeLines