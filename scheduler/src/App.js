import './App.css';
import HomePage from './Page/HomePage';
import SideNavBar from "./Page/SideNavBar/SideNavBar";
import Navbar from './Components/Navbar/Navbar'



function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <SideNavBar /> */}
      <HomePage/>
    </div>
  );
}

export default App;
