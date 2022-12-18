import React from 'react';
import {Routes, Route} from 'react-router-dom'
import HomePage from '../Page/HomePage';
import LoginPage from '../Page/loginPage';
import SignupPage from '../Page/SignupPage';
import Contact from "../Page/Contact";
import Pricing from "../Page/Pricing/Pricing"
import SideNavBar from "../Components/CalenderPage/SideNavBar"


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/sidenav' element={<SideNavBar/>}/>
    </Routes>
  )
}

export default AllRoutes
