import React, { useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  
  Select,
  useDisclosure,
} from "@chakra-ui/react";

import axios from "axios";

const AddAdmin = () => {
  // TODO: Remove below const and instead import them from chakra
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [input, setInput] = useState("");
  const [type, setType] = useState("");
  const [password, setPassword] = useState("");
  

  const handleClick = () => {
    alert("New user Added")
    axios
      .post(`https://mock-server-kkz2.onrender.com/login2`, {
        username: input,
        password: password,
        Date: type
         })
      .then((res) => {
       
        console.log(res);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>

      <Button my={4} data-cy="add-product-button"  color={"white"} onClick={onOpen} colorScheme='blue'>
      Add New User
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} variant={Modal}>


        <ModalContent bg={"white"}>

          <ModalHeader>Add User Detail</ModalHeader>
          <ModalBody pb={6}>
            <label>UserName</label>
            <Input
              data-cy="add-product-title"
              placeholder="User Name"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
 <label>Password</label>
<Input
              data-cy="add-product-title"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />


            <label>Joined Date</label>
            <Select
              data-cy="add-product-category"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option data-cy="add-product-category-shirt" value={"  20/12/2022"}>
              20/12/2022
              </option>
              <option data-cy="add-product-category-pant" value={" 21/12/2022"}>
              21/12/2022
              </option>
              <option data-cy="add-product-category-jeans" value={" 22/12/2022"}>
              22/12/2022
              </option>
              <option data-cy="add-product-category-jeans" value={" 23/12/2022"}>
              23/12/2022
              </option>
              <option data-cy="add-product-category-jeans" value={" 24/12/2022"}>
              24/12/2022
              </option>
              <option data-cy="add-product-category-jeans" value={" 25/12/2022"}>
              25/12/2022
              </option>
              <option data-cy="add-product-category-jeans" value={" 26/12/2022"}>
              26/12/2022
              </option>
            </Select>
          
            <Button 
              data-cy="add-product-submit-button"
              colorScheme="blue"
              mr={3}
              onClick={handleClick}
            >
             Add
            </Button>
            <Button onClick={onClose}>close</Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddAdmin;
