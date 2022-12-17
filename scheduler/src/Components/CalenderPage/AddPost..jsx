import React, { useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Select,
  useDisclosure,
} from "@chakra-ui/react";

import axios from "axios";

const AddPost = () => {
  // TODO: Remove below const and instead import them from chakra
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [input, setInput] = useState("");
  const [type, setType] = useState("");
  const [gender, setGender] = useState("");
  const [price, setPrice] = useState(0);
  const [src, setSrc] = useState("");

  const handleClick = () => {
    alert("Add new Project Successfully")
    axios
      .post(`https://link-deployment-git-main-pallavijainy.vercel.app/posts`, {
        title: input,
        category: type,
        gender: gender,
        price: price,
        url: src,
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

      <Button my={4} data-cy="add-product-button"  color={"black"} onClick={onOpen}>
       New Item
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} variant={Modal}>


        <ModalContent bg={"white"}>

          <ModalHeader>Add New Project</ModalHeader>
          <ModalBody pb={6}>
            <label>Person</label>
            <Input
              data-cy="add-product-title"
              placeholder="Person Name"
              onChange={(e) => setInput(e.target.value)}
              value={input}
            />
            <label>Status</label>
            <Select
              data-cy="add-product-category"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option data-cy="add-product-category-shirt" value={"  Working on it"}>
                Working on it💻
              </option>
              <option data-cy="add-product-category-pant" value={" Stuck"}>
                Stuck😯
              </option>
              <option data-cy="add-product-category-jeans" value={" Done"}>
               Done✅
              </option>
            </Select>
            <label>No. of Members</label>
            <RadioGroup
              data-cy="add-product-gender"
              value={gender}
              onChange={setGender}
            >
              
              <Radio data-cy="add-product-gender-male" value={"0-20"}>
                0-20
              </Radio>
              <Radio data-cy="add-product-gender-female" value={"20-40"}>
                20-40
              </Radio>
              <Radio data-cy="add-product-gender-unisex" value={"40+"}>
                40+
              </Radio>
            </RadioGroup>
            <label>Project Description</label>
            <Input
              data-cy="add-product-price"
              placeholder="Project Description"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
            <label>Profile Image</label>
            <Input
              data-cy="Image_url"
              placeholder="Profile Image"
              onChange={(e) => setSrc(e.target.value)}
              value={src}
            />

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

export default AddPost;
