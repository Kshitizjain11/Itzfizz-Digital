import React from 'react'

const box = ({percent,text,bg,textclr,size,classnames}) => {
  return (
    <div style={{backgroundColor:bg,color:textclr}} className={`bg-[${bg}] font-[sans-serif] flex flex-col justify-center items-start  gap-2 px-7 py-7 rounded-xl text-[${size}] ${classnames}`}>
          <span style={{color:textclr}} class={`text-6xl tracking-tight font-bold`}>{percent}%</span> {text}
    </div>
  )
}

export default box