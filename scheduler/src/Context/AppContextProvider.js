import React from "react";
import {useState} from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const AppContext = React.createContext();

AppContext.displayName = "CONTEXT1234";


function AppContextProvider({ children }) {
  const navigate = useNavigate();
    const [state, setState] = useState({
        isAuth: false,
        username:null
    });

    const handleLogin=(username,isAuth)=> {
        
        setState({
          ...state,
          isAuth: isAuth,
          username
        });
       
        navigate("/login")
        
      }

      const handleLogout=()=>{
        
        setState({
            ...state,
            isAuth:false,
            username:null
        });
        <NavLink to="/login"></NavLink>
       
      }

      const value = { authState:state, handleLogin, handleLogout };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
