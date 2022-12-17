import { Avatar, Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, Image, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {BsThreeDotsVertical} from "react-icons/bs"



const Project = () => {

    const [show, setShow] = useState([]);

    useEffect(() => {
      axios
        .get("https://link-deployment-git-main-pallavijainy.vercel.app/posts")
        .then((res) => {
          console.log(res.data);
          setShow(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  
    
  return (
    <Box  paddingTop={20} display="grid" gridTemplateColumns={{sm:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(3,1fr)"}} gap={5}>
        {
            show.map((el)=>(
                <Box>
               <Card maxW='md'>
  <CardHeader>
    <Flex spacing='4'>
      <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
        <Avatar name='Segun Adebayo' src={el.url} />

        <Box>
          <Heading size='sm'>{el.title}</Heading>
          <Text>Project Member</Text>
        </Box>
      </Flex>
      <IconButton
        variant='ghost'
        colorScheme='gray'
        aria-label='See menu'
        icon={<BsThreeDotsVertical />}
      />
    </Flex>
  </CardHeader>
  <CardBody>
    <Text>
      {el.price}
    </Text>
  </CardBody>
  <Image
    objectFit='cover'
    src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
    alt='Chakra UI'
  />

  <CardFooter
    justify='space-between'
    flexWrap='wrap'
    sx={{
      '& > button': {
        minW: '136px',
      },
    }}
  >
    <Button flex='1' variant='ghost' >
      Like
    </Button>
    <Button flex='1' variant='ghost'>
      {el.category}
    </Button>
    
  </CardFooter>
</Card>
                
            </Box>
      
            ))
        }
     
    </Box>
  )
}

export default Project