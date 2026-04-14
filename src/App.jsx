import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Box from './components/Box.jsx'
const App = () => {
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(()=>{
      gsap.to('.car,.path',{
        x:'101.5vw',
        scrollTrigger:{
          trigger: ".section",
          start: "top top",
          end:'bottom top',
          markers:true,
          scrub:true
        }
      })
    })
  return (
    <div className='section bg-[#d1d1d1] h-[300vh]'>
      <div className="track h-screen sticky top-0 flex justify-center items-center">
        <div className="road relative h-50 w-full  overflow-hidden flex items-center">
          <img className='car z-2 h-50 absolute' src="/McLaren.png" alt="" />
          <div className="path bg-[#1e1e1e] h-full w-full z-1 ml-19 absolute top-0"></div>
          <div className="trail  flex justify-center items-center h-full w-full bg-[#45db7d]">
            <div className="text mr-25 text-[8rem] tracking-wider font-bold">WELCOME ITZFIZZ</div>
          </div>
        </div>
      </div>
      <Box classnames={'absolute top-14 right-[31vw]'} textclr={'#111'} percent={58} text={'Increase in pick up point use'} bg={'#def54f'} size={'18'} />
      <Box classnames={'absolute bottom-14 right-[32vw]'} textclr={'#111'} percent={23} text={'Decreased in customer phone calls'} bg={'#6ac9ff'} size={'16'}/>
      <Box classnames={'absolute top-14 right-[11.3vw]'} textclr={'#fff'} percent={27} text={'Increase in pick up point use'} bg={'#333'} size={'18'} />
      <Box classnames={'absolute bottom-14 right-[10.2vw]'} textclr={'#111'} percent={40} text={'Decreased in customer phone calls'} bg={'#fa7328'} size={'16'} />

    </div>
  )
}

export default App