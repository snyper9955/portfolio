import React from 'react'
import { motion } from 'framer-motion'

const WebProj = () => {
  return (
    <div className='min-h-screen bg-black text-white flex justify-center '>
      
       <div className='relative top-8'><motion.h1 initial={{ opacity: 0, x: -1000 }} animate={{ opacity: 1, x: 0 }} 
      transition={{ duration: 3, type: "spring" }}
       className='text-6xl font-bold text-yellow-400 
       drop-shadow-[0_0_20px_rgba(255,69,0,0.8)]'>Video Project</motion.h1>
        <motion.hr initial={{ opacity: 0 }} animate={{ opacity: 1}} transition={{ duration: 2,delay: 1 }}
         className='border-2 border-yellow-400 mt-2  relative top-3' /></div>
    </div>
  )
}

export default WebProj
