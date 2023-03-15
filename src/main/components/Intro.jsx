import React from 'react'
import { motion } from 'framer-motion'


export const Intro = () => {
  return (
    <div  className='flex gap-6 bg-main p-7 w-full'>
    {/* <JukeCanvas /> */}
    <div className='flex flex-col justify-center items-center'>
    <div className='w-12 h-12 rounded-full bg-purple-700 ' />
    <div className='w-1 sm:h-80 h-40 black-gradient'  />
    </div>
    <motion.div initial={{x:'-130vh'}} animate={{x:0}} transition={{delay:0.2, duration:1, type:'spring'}} className='sm:self-center'>
    <h1 className='text-white font-bold sm:text-7xl text-5xl w-full '>Hi my name is <br /> <span className='text-purple-700'>Francisco Santos</span></h1>
    <p className='text-white font-bold sm:text-5xl  text-4xl mt-6'>I develop web Applications <br /> and mobile Apps</p>
    </motion.div>
</div>  
  )
}

