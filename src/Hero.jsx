import React, { useRef, useState } from 'react'
import Card from './Card'

const Hero = () => {

    const ref = useRef(null);

    const data = [{
      id:1,
      desc : "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      size : "9 mb",
      close : true,
      tag : {
        isOpen : true,
        content :"Download now",
        color: "green",
      }
    },{
      id:2,
      desc : "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      size : "9 mb",
      close : true,
      tag : {
        isOpen : true,
        content :"Download now",
        color: "blue",
      }
    },{
      id:3,
      desc : "Lorem ipsum, dolor sit amet consectetur adipisicing.",
      size : "9 mb",
      close : true,
      tag : {
        isOpen : true,
        content :"Download now",
        color: "green",
      }
    }]

  return (
    <div ref={ref} className='Hero relative z-2 h-[100vh] bg-black opacity-75 text-white 
      flex  flex-wrap gap-10 p-5 flex-shrink-0 overflow-hidden
       '>
        {
          data.map((item) =>{
            return <Card data={item} refrence={ref} key={item.id} />
          })
        }
    </div>
  )
}

export default Hero
