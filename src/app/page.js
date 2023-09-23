"use client"

import Image from 'next/image'
import Menu from './components/menu'
import Hero from './components/hero'
import Intro from "./components/intro"
import Rules from "./components/rules"
import Criteria from './components/criteria'
import FAQs from './faqs'
import TimeLines from './components/timeline'
import Prizes from './components/prizes'
import Partners from './components/partners'
import Terms from './components/terms'
import Footer from './components/footer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'





export default function Home() {
  useEffect(()=>{
    AOS.init({
      duration:1000
    })
  })
  return (
   
        <>
        <Menu/>
        <Hero/>
        <Intro/>
        <Rules/>
        <Criteria/>
        <FAQs/>
        <TimeLines/>
        <Prizes/>
        <Partners/>
        <Terms/>
        <Footer/>
        </>
       
             
  )
}
