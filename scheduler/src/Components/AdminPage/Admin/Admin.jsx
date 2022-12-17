import { Avatar, Box, Button, Grid, Heading, Stack, Text, WrapItem } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AddAdmin from './AddAdmin'



const handleDel=(id)=>{
  axios.delete(`https://mock-server-kkz2.onrender.com/login2/${id}`).then((res)=>{
    console.log(res)
  }).catch((err)=>{
    console.log(err)
  })
}

const Admin = () => {
    const [showUser,setUser]=useState([])

useEffect(()=>{
    axios.get("https://mock-server-kkz2.onrender.com/login2").then((res)=>{
        console.log(res.data)
        setUser(res.data)

    }).catch((err)=>{
        console.log(err)
    })
},[])

  return (
    <Box paddingTop={10}>
        <AddAdmin/>

<Box width={"800px"} ml={{sm:0,md:0,lg:"25%"}} display="grid" gridTemplateColumns={{sm:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)"}} gap={5} >
       
       {showUser.map((el) => (
         <Box key={el.id} border={"1px solid grey"}  boxShadow='dark-lg' p='6' rounded='md' bg='white'>
           <Grid>
<Box>
 <Stack>
 
 <Heading as='h3' size='lg' color={"black"}>
   {el.username}
 </Heading>
 <Text color='grey'  fontSize='md'>{el.password}</Text>
 <Heading as='h6' size='xs' color={"black"}>
   "Member" - {el.id}
 </Heading>
 <Heading as='h6' size='xs' color={"black"}>
 Joined on:-  {el.Date}
 </Heading>

 
 <Button colorScheme='blue' onClick={()=>handleDel(el.id)}>Remove </Button>

 </Stack>



</Box>
          
           </Grid>
           

         </Box>
       ))}
     </Box>
    </Box>
  )
}

export default Admin