import React from 'react'

function Menu() {
  return (
    <>
    <nav class="flex justify-between pr-[120px] pt-[30px] pl-[30px] pb-[10px] items-center border-b-[1px] border-[#2c2c2c]" style={{}}>
        <div class="logo md:ml-[150px]">
            <h3 class="font-semibold md:text-[30px] text-[15px]">
                get<span class="text-[#d434fe]">linked</span>
            </h3>
        </div>

        <div class="md:flex justify-evenly gap-[120px] mr-[50px] items-center hidden">
            <ul class="flex justify-around gap-[30px] item-center text-sm">
                <li class="cursor-pointer text-sm">
                        Timeline
                </li>
                <li class="cursor-pointer text-sm">
                    Overview
                </li>
                <li class="cursor-pointer text-sm">
                    FAQs
                </li>
                <li class="cursor-pointer text-sm">
                    Contact
                </li>
            </ul>
            <div class="md:block none"><button class="bg-gradient-to-r from-[#d434fe] to-[#9d39ff] p-2 w-[150px] rounded-sm">Register</button></div>
        </div>

    </nav>
    </>
  )
}

export default Menu