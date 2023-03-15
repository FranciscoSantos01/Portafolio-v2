import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
export const Form = () => {
  return (
      <motion.div 
      initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5, duration:1.2, type:'spring', stiffness:120}} 
      className='flex flex-col justify-center items-center h-[100vh] gap-14 '>
        <h1 className='text-white font-extrabold text-7xl '>Welcome to my Portafolio!!</h1>
        <Link to='/home'><motion.button whileHover={{scale:1.2}} className='bg-green-700 py-6 px-4 w-[300px] text-2xl font-medium text-white rounded-2xl '>Start</motion.button></Link>
      </motion.div>
  )
}
