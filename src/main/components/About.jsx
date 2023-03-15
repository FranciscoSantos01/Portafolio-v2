import React from 'react'
import { motion } from 'framer-motion'
import Tilt from 'react-tilt'
import { services } from '../../constants'

const ServiceCards =  ({title,icon})=>{
  return(
    <Tilt className="w-full md:w-[250px] ">
       <div className='w-full p-[1px] rounded-[20px] bg-slate-800'>
       <div
           options={{
            max:45,
            scale:1,
            speed: 450
           }} 
           className=' cardBg rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col '
          >
            <img src={icon} alt="icon" className='w-16 h-16 object-contain ' />
            <h3 className='text-white text-[20px] font-bold text-center '> {title} </h3>

          </div>
       </div>
    </Tilt>
  )
}




export const About = () => {
  return (
    <>
    <div className='sm:mx-20 mt-10'>
        <div className='flex justify-between items-center'>
            <div>
            < motion.h3 
            initial={{opacity: 0}}
            animate={{
                opacity: 1
            }}
            transition={{duration:1.2, delay:0.4, type:'spring'}} 
            className='text-gray-500 font-medium text-3xl'>Introduction</motion.h3>
            <h2 className='text-white font-bold text-7xl'>Overview.</h2>
            </div>
            <div className='w-16 h-16 bg-purple-700 rotate-center hidden sm:block ' />
        </div>
       <p className='text-gray-500 font-medium text-xl w-full sm:max-w-3xl leading-[30px] mt-8' style={{color:'#aaa6c3'}}>I'm a skilled Junior Frontend Developer with knowledge in javacript,
         React, React native. I consider myself a quick learner and like to work closely with
         clients to create efficient, scalable, and user-friendly solutions that solve real world-problems.
         Let's bring your ideas to life!</p>
    </div>
    <div className='mt-20 flex gap-10 flex-wrap p-5'>
        {services.map(item=>(
          <ServiceCards {...item}/>
        ))}
    </div>
    </>
  )
}
