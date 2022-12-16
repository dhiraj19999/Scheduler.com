import './App.css';
import HomePage from './Page/HomePage';
import SideNavBar from "./Page/SideNavBar/SideNavBar";

import Navbar from './Components/Navbar/Navbar';
import Pricing from "./Page/Pricing/Pricing";

function App() {
  return (
    <div className="App">
       <Navbar/> 
      {/* <SideNavBar />  */}
      <HomePage/> 
      <Pricing/>
      
      
      
    </div>

import Navbar from './Components/Navbar/Navbar'
import AllRoutes from './Routes/AllRoutes';



function App() {
  return (
    <>
      <AllRoutes/>
    </>

  );
}

export default App;
