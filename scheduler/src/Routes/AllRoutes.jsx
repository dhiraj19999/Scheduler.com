import React from 'react';
import {Routes, Route} from 'react-router-dom'
import HomePage from '../Page/HomePage';
import LoginPage from '../Page/loginPage';
import SignupPage from '../Page/SignupPage';


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/contact' element={<ContactPage/>}/> 
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
    </Routes>
  )
}

export default AllRoutes
