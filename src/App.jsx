import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './router/AppRouter'

export const App = () => {
  return (
    <BrowserRouter>
    <div className='relative z-0  h-full w-full ' style={{background: '#0b032d'}} >
      <AppRouter />
    </div>
    </BrowserRouter>
  )
}
