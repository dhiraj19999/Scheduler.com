import { NavLink } from "react-router-dom";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContextProvider";
import { loginData } from "./api";
import { Button, Box, Input ,Image,
    FormLabel,
    Heading,
    } from "@chakra-ui/react";

const LoginPage = () => {
    const {authState, handleLogin} = useContext(AppContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        loginData().then((res) => {
            console.log(res.data)
            let dataLog = res.data
            let flag = false;
            dataLog.forEach(function(el){
                if(username===el.username && password===el.password){
                    return (flag = true);                
                }
            })
            if (flag) {
                alert("You Are Successfully Logged In.");
                handleLogin(username,authState.isAuth=true);               
                navigate("/sidenav");
              } else {
                alert("Wrong ID/Password");
              }
        });
    }

  if (!authState.isAuth) {
    return (
        <div>
          <Box>
            <Image position="relative" left="30px" src="https://cdn.monday.com/images/logos/monday_logo_short.png" h="50px" w="220px" />
          </Box>
          <hr style={{marginTop:"10px", marginBottom:"30px"}}></hr>
          <center>
            <Heading>Welcome to Scheduler.com</Heading>
            <Heading>Log in to your account</Heading>
            <br/>
            <form onSubmit={handleSubmit} marginTop="30px" style={{width:"500px"}}>
                <div >
                    <FormLabel>Username</FormLabel>
                    <label>
                    <Input type="username" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </label>
                </div>
                <div>
                    <FormLabel>Password</FormLabel>
                    <label>
                    <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password"/>
                    </label>
                </div>
                <div>
                    <Button type="submit" marginTop={"20px"}>SUBMIT</Button>
                </div>
            </form>
            <Button backgroundColor={"red"} color="white" marginTop={"20px"}><NavLink to="/signup">Dont Have An Account Signup Now!</NavLink></Button>
          </center>                  
        </div>
        )
    }
    return(
        <NavLink to="/"></NavLink>
      )
}

export default LoginPage;