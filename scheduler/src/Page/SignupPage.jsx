import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { loginData } from "./api";
import { Box,
    Image,FormLabel,
    Input,
    Flex,
    Heading,
    Button,
} from "@chakra-ui/react";

function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    loginData().then((result) => {
        console.log(result.data)
        let dataLog = result.data
        let filter = dataLog.filter(function(el){
            return username===el.username
        })
            if(filter.length>0){
                alert("Account Allready Exist")  
                return;           
            }else{
                fetch("https://mock-server-kkz2.onrender.com/login2", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
                })
                .then((res) => res.json())
                .then((res) => {
                    if (res) {
                        alert("Account Created");
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
            }
        })
    ;
}
    {
        return (
          <div>
            <Box>
                <Image position="relative" left="30px" src="https://cdn.monday.com/images/logos/monday_logo_short.png" h="50px" w="220px" />
            </Box>
            <hr style={{marginTop:"10px", marginBottom:"0px"}}></hr>
            <Flex w="80%" margin="auto" h={"700px"}>
                <Box >
                    <Image src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/soft-welcome.png" h= "800px"/>
                </Box>
                <Box marginLeft={"30px"} marginTop="50px" margin="auto">
                <Heading>Welcome to Scheduler.com</Heading>
                <form onSubmit={handleSubmit} marginTop="30px">
                <div>
                <FormLabel>Username</FormLabel>
                <label>
                    <Input
                    type="username"
                    placeholder="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                </div>
                <div>
                <FormLabel>Password</FormLabel>
                <label>
                    <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="password"
                    />
                </label>
                </div>
                <div>
                <Button type="submit" marginTop={"20px"}>
                    SignUp
                </Button>
                </div>
                </form>
                <Button backgroundColor={"red"} color="white" marginTop={"20px"}><NavLink to="/login">SignIn Now!</NavLink></Button>
                </Box>
            </Flex>
          </div>
        );
      }
}

export default SignupPage