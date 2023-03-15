import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Landing } from '../components/Landing'
import { MainPage } from '../pages/MainPage'

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
        <Route path='/home' element={<MainPage />} />
        <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}
