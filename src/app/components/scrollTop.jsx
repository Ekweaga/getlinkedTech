import React from 'react'
import {FaAngleUp} from "react-icons/fa"

function ScrollTop() {
    const onTop = ()=>{
        window.scrollTo({top:0,behavior:"smooth"})
    }
  return (
    <div> <div class="relative bg-black/50 p-3 rounded-full"><button class="fixed bottom-[100px] right-[80px] bg-black/50 p-3" onClick={onTop}><FaAngleUp/></button></div></div>
  )
}

export default ScrollTop