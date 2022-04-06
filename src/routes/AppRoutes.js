import React from 'react'
import Register from '../pages/register/Register'
import { Route, Routes } from 'react-router-dom'

function AppRoutes() {
  return (
      <Routes>
          <Route element={<Register />} path="/register" />
      </Routes>
  )
}

export default AppRoutes