import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

const App = () => {
  return (
    <div className='section'>
      <div className="track h-screen flex justify-center items-center">
        <div className="road relative h-50 w-full bg-[#1e1e1e] overflow-hidden flex items-center">
          {/* <img className='car h-45 absolute' src="/McLaren.png" alt="" /> */}
          <div className="trail flex justify-center items-center h-full w-full bg-[#45db7d]">
            <div className="text text-[8rem] tracking-wider font-bold">WELCOME ITZFIZZ</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default App