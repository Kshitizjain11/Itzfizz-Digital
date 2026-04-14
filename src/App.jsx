import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother} from "gsap/ScrollSmoother";

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
    <div className='section h-[300vh]'>
      <div className="track h-screen sticky top-0 flex justify-center items-center">
        <div className="road relative h-50 w-full  overflow-hidden flex items-center">
          <img className='car z-2 h-50 absolute' src="/McLaren.png" alt="" />
          <div className="path bg-[#1e1e1e] h-full w-full z-1 ml-19 absolute top-0"></div>
          <div className="trail  flex justify-center items-center h-full w-full bg-[#45db7d]">
            <div className="text mr-25 text-[8rem] tracking-wider font-bold">WELCOME ITZFIZZ</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App