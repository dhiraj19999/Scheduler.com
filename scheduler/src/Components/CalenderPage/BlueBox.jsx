import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Tooltip,
  useToast,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import TuneIcon from '@mui/icons-material/Tune';
const BlueBox = () => {

    const toast = useToast()
  return (
    <Box>
      <Tooltip hasArrow label="Everything assigned to you in one single place. Customize it to match your needs." aria-label='A tooltip'>
      <Heading>My Work</Heading>
</Tooltip>
    
      <Divider orientation="horizontal" />
      <Divider orientation="horizontal" />
      <Divider orientation="horizontal" />
      <Flex gap={7} marginTop={4} marginBottom={4}>
      <Box  marginLeft={4} >
        <InputGroup size="sm">
          <InputLeftElement>
            <Icon as={SearchIcon} w="14px" h="14px" color={"gray.300"} />
          </InputLeftElement>

          <Input placeholder="Search" size={"sm"} width="200px" />
        </InputGroup>
      </Box>
      <Box marginTop={2}>
      <Button
     variant={"link"}
      onClick={() =>
        toast({
        position:"top",
          title: 'Showing all items',
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
      }
    >
  <Checkbox/>
  Hide done items
    </Button>
     

      </Box>
          
          <Box  marginTop={2}>
          <Flex>
          <TuneIcon/> 
           
           <Text>Customize</Text>
          </Flex>



          </Box>
      </Flex>
     
    </Box>
  );
};

export default BlueBox;
