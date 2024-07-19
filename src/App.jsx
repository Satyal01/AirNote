import React from 'react'
import Hero from "./Hero"

const App = () => {
  return (
    <div className='z-0 h-full w-full bg-zinc-800 relative'>
        <div className='text-2xl top-10  w-full py-10 flex justify-center text-zinc-300 opacity-100 bg-none absolute z-0 font-semibold hover:text-black '> <h2 className='w-fit hover:text-black'>Documents</h2>.</div>
        <h1 className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] leading-none tracking-tighter text-slate-200 hover:text-black '>Docs.</h1>
        <Hero />  
    </div>
  )
}

export default App
