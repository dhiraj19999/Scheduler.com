import React from 'react'
import "./CheckBox.css";
import { Button, Box,Checkbox, CheckboxGroup, InputGroup, Input , InputRightElement, Image, Flex, Center, Grid, GridItem ,
    IconButton,
    useBreakpointValue,
    Stack,
    Heading,
    Text,
    Container,} from "@chakra-ui/react";

const CheckBox = ({para, src, width, height}) => {
  return (
    <Box w="150px" h="200px" border="1px solid white" borderRadius={"10px"} overflow={"hidden"} >
        <Checkbox colorScheme='red' defaultunChecked h={"30%"}  >
            <p>{para}</p>
        </Checkbox>
        <Flex justifyContent={"center"} alignItems="center"  >
            <img src={src} alt="error" width={width} height={height} id="img1" />
        </Flex>                       
    </Box>
  )
}

export default CheckBox