import React from 'react';
import {Routes, Route} from 'react-router-dom'
import HomePage from '../Page/HomePage';
import LoginPage from '../Page/loginPage';


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        {/* <Route path='/pricing' element={<PricingPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/> */}
        <Route path='/login' element={<LoginPage/>}/>
    </Routes>
  )
}

export default AllRoutes
