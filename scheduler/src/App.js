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
  );
}

export default App;
