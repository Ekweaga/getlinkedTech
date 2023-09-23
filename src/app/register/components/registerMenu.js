import React from 'react'

function RegisterMenu() {
  return (
    <>
    <nav class="flex justify-between pr-[30px] pt-[30px] pl-[30px] pb-[10px] items-center " style={{}}>
        <div class="logo ml-[150px]">
            <h3 class="font-semibold text-[30px]">
                get<span class="text-[#d434fe]">linked</span>
            </h3>
        </div>

        <div class="flex justify-evenly gap-[120px] mr-[50px] items-center">
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
            <div><button class="bg-gradient-to-r from-[#d434fe] to-[#9d39ff] p-2 w-[150px] rounded-sm">Register</button></div>
        </div>

    </nav>
    </>
  )
}

export default RegisterMenu