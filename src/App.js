import React from "react"
import { Routes, Route } from "react-router-dom"
import { AdminLayout } from "./components/Layout"
import { NotFound, PrivateRoute } from "./components/Common"
import LoginPage from "./features/auth/pages/LoginPage"
import RegisterPage from "./features/auth/pages/RegisterPage"

const App = () => {
  return (
    <Routes>
        
        {/* <Route path="/" element={<HomePage />}></Route> */}

        <Route 
          path="/login" 
          element={<LoginPage />} 
        />
           

         
        <Route 
            path="/register" 
            element={<RegisterPage />} 
        />
        <Route element={ <PrivateRoute />}>
            <Route path="/admin" element={<AdminLayout />} />
        </Route>

        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App