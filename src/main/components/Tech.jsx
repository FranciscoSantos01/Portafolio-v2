import React from 'react'
import { technologies } from '../../constants'
import { motion } from 'framer-motion'

export const Tech = () => {
  return (
    <div className='flex flex-wrap justify-center gap-10 mt-12'>
        {technologies.map((tech,index)=>(
            <motion.div whileHover={{scale: 1.1, boxShadow:"0px 0px 8px rgb(255,255,255)"}} key={index} className='h-32 w-32 bg-white rounded-full flex flex-col justify-center items-center'>
            <img src={tech.icon} alt={tech.name} className="h-16 w-16 object-contain" />    
            <h3 className='font-bold '>{tech.name}</h3>
        </motion.div>
        ))}
        
    </div>
  )
}
