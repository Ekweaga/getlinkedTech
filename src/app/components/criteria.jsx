import React from 'react'
import Image from 'next/image'

function Criteria() {
  return (
    <>
     <div class="border-b-[1px] border-[#2c2c2c] pb-[50px] p-[30px]">
        <div class="flex items-center justify-around mt-[50px] flex-col md:flex-row">
            <div class="relative" data-aos="slide-right">
                <Image src="/stand.png" width={600} height={350} alt="idea" class="relative" style={{zIndex:22}}/>
                <Image src="/star3.png" width={20} height={20} alt="idea" class="absolute left-[140px] md:-top-[80px] -top-[60px]"/>
                <Image src="/circle.png" width={80} height={20} alt="idea" class="absolute md:left-[100px] top-0 hidden md:block" style={{zIndex:1}}/>
               
                <Image src="/star (1).png" width={20} height={20} alt="idea" class="absolute md:right-[250px] md:bottom-[200px] right-[150px] top-[140px]"/>
                <Image src="/lens.png" width={660} height={450} alt="f" class=" absolute md:-left-[120px] md:-bottom-[200px] top-[50px] md:top-[50px] -bottom-[850px]"/>
            </div>
            <div class="relative p-4">
            <Image src="/star.png" width={20} height={20} alt="idea" class="absolute md:-left-[50px] md:bottom-[30px] right-0 bottom-0"/>
           <div data-aos="zoom-in">
           <h3 class="text-[30px] font-extrabold mb-[30px] text-center md:text-left">Judging Criteria<br/>
<span class="text-[#d434fe]">Key attributes</span></h3>
           </div>
                
<div data-aos="fade-in">
    <p class="md:w-[480px] text-sm text-center md:text-left"><span class="text-[#d3219d] font-bold">Innovation and Creativity</span>: Evaluate the uniqueness and creativity of the
solution. Consider whether it addresses a real-world problem in a novel 
way or introduces innovative features.</p>
</div><br/>

<div data-aos="fade-in">
    <p class="md:w-[480px] text-sm text-center md:text-left"><span class="text-[#d3219d] font-bold">Functionality</span>: Assess how well the solution works. Does it perform its 
intended functions effectively and without major issues? Judges would
consider the completeness and robustness of the solution.</p>
</div>
<br/>

<div  data-aos="fade-in">
    <p class="md:w-[480px] text-sm text-center md:text-left"><span class="text-[#d3219d] font-bold">Impact and Revelance</span>: Determine the potential impact of the solution 
in the real world. Does it address a significant problem, and is it relevant 
to the target audience? Judges would assess the potential social, 
economic, or environmental benefits.</p>
</div>
<br/>
<div  data-aos="fade-in">
    <p class="md:w-[480px] text-sm text-center md:text-left"><span class="text-[#d3219d] font-bold">Technical Complexity</span>: Evaluate the technical sophistication of the solution. 
Judges would consider the complexity of the code, the use of advanced 
technologies or algorithms, and the scalability of the solution.</p>
</div><br/>

<div  data-aos="fade-in">
    <p class="md:w-[480px] text-sm text-center md:text-left"><span class="text-[#d3219d] font-bold">Adherence to Hackathon Rules</span>: Judges will Ensure that the team adhered 
to the rules and guidelines of the hackathon, including deadlines, use of 
specific technologies or APIs, and any other competition-specific requirements.</p>
</div>

 <div class="flex items-center md:items-start justify-center md:justify-start relative" style={{zIndex:9922}} data-aos="slide-up"><button class="bg-gradient-to-r from-[#d434fe] to-[#9d39ff] p-2 w-[150px] rounded-sm mt-[40px]">Read more</button></div><br/><br/>
 <Image src="/lens.png" width={700} height={450} alt="f" class="ml-[0px] absolute md:-bottom-4 md:-right-[300px]  md:-mb-[250px] -right-[150px] -bottom-[50px]"/>

            </div>
        </div>
    </div>
    </>
  )
}

export default Criteria
