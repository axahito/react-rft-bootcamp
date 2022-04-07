import React from 'react'
import Register from '../pages/register/Register'
import { Route, Routes } from 'react-router-dom'
import PrivateRoutes from './PrivateRoutes'

function AppRoutes() {
  return (
      <Routes>
          <Route element={<Register />} path="/register" />
          <Route element={<PrivateRoutes />} path="">
            
          </Route>
      </Routes>
  )
}

export default AppRoutes