import React from 'react'
import { socials } from '../../constants'
import Download from '../../assets/download.png'
import {motion} from 'framer-motion'
import CV from '../../assets/CV.pdf'

export const Contact = () => {
  return (
    <div className='mt-12 sm:mx-20'>
        <h3 className='text-white font-bold sm:text-7xl text-5xl w-[340px] sm:w-full p-3 sm:p-0  '>Connect with me</h3>
        <div className='flex flex-col justify-center items-center sm:flex-row sm:justify-center mt-10 gap-9'>
          {socials.map((item,index)=>(
            <motion.div key={index}  whileHover={{scale: 1.1, boxShadow:"0px 0px 8px rgb(255,255,255)"}} className='w-32 h-32 rounded-full bg-white flex flex-col justify-center items-center' >
              <a href={item.link} target='_blank'>
              <img src={item.icon} alt={item.name} className='h-16 w-16 object-contain' />
              </a>
              <h2 className='font-bold'>{item.name}</h2>
            </motion.div>
          ))}
          <motion.div whileHover={{scale: 1.1, boxShadow:"0px 0px 8px rgb(255,255,255)"}}  
          className='w-32 h-32 rounded-full bg-white flex flex-col justify-center items-center'>
          <a href={CV} target='_blank' download>
          <img src={Download} alt="" className='h-16 w-16 object-contain' />
          </a>
              <h2>CV</h2>
          </motion.div>
        </div>
        <motion.h3 initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.5, duration:1.2}} 
        className='text-center font-bold text-white  text-4xl sm:text-6xl mt-10 sm:p-0 p-3'>Develop by Francisco Santos</motion.h3>
    </div>
  )
}
