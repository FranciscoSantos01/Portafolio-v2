import React from 'react'
import { Form } from './Form' 
import { StarsCanvas } from './stars' 

export const Landing = () => {
  return (
    <div className='bg-black relative z-0  '>
        <Form />
        <StarsCanvas />
    </div>
  )
}