import React from 'react'
import { projects } from '../../constants'
import { motion } from 'framer-motion'
import Github from '../../assets/github.png'


const ProjectCard = ({name,img,description,responsibility,link,tech})=>{
    return(
        <motion.div whileHover={{scale:0.9}} className='bg-[#364f6b] p-5 rounded-3xl sm:w-[360px] w-full h-fit'>
             <div className='relative w-full h-[230px] '>
            <img src={img} alt={name} className="w-full h-full object-cover rounded-2xl"  />
          <div className='absolute inset-0 flex justify-end m-3'>
            <div onClick={()=>{window.open(link, '_blank')}} 
            className="w-10 h-10 black-gradient rounded-full flex justify-center items-center cursor-pointer" >
               <img src={Github} alt="github" className='w-1/2 h-1/2 object-contain' />
            </div>
          </div>
          </div>

          <div className='mt-5'>
                <h3 className='font-bold text-white text-[25px]'>{name}</h3>
                <p className='text-gray-400 text-[15px] '>{description} </p>
                 {responsibility && <p className='text-white font-medium text-[13px] mt-3 '>{responsibility}</p>}
                 <div className='flex flex-wrap items-center gap-1'>
                 {tech.map(item=>(
                   <span className='text-gray-400 font-extralight' key={item}>#{item},</span>
                   ))} 
                </div>
          </div>
        </motion.div>
    )
}




export const Projects = () => {
  return (
    <>
    <div className='mt-12 p-3 sm:p-5 ' >
      <p className='text-gray-500 font-medium text-3xl'>My Projects</p>
      <h2 className='text-white font-bold text-7xl'>Projects</h2>
    </div>
    <div className='w-full flex  p-3 sm:p-5 '>
      <p  className="text-gray-500 font-medium text-xl w-full sm:max-w-3xl leading-[30px] mt-4 ">
        Following projects showcase my skills and experience through real world examples.
        Each project is briefly described with links to code repositories and live demos in it
        It reflects my ability to solve complex problems, work with different technologies and manage
        projects effectively 
      </p>
    </div>
    <div className='mt-20 flex justify-center flex-wrap gap-7  p-4 sm:p-0 '>
        {projects.map((project, index)=>(
            <ProjectCard {...project} key={index} />
        ))}
    </div>
    </>
  )
}
