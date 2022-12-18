import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import React, { useEffect } from 'react'
import { useState } from 'react'
import HomeComponent from "./HomeComponents.css";
import {Box,Button,Flex,Image} from '@chakra-ui/react'

function ClinetTestimonial() {

     let crauserData = [
       {
         image: "https://dapulse-res.cloudinary.com/image/upload/v1607704782/remote_mondaycom_static/img/segment-layout-default-images/customer-testimonials/thoughtworks.png",
         text: "Thanks to monday.com, we are now able to budget the team’s time and efforts much more scientifically, leading to increased operational efficiency.",
         title: "Samyuktha Shivakumar | Global Marketing Operation Manager, Thoughtworks",
         
       },
       {
         image: "https://dapulse-res.cloudinary.com/image/upload/v1607704782/remote_mondaycom_static/img/segment-layout-default-images/customer-testimonials/genpact.png",
         text: "Since adopting monday.com, our global marketing department has seen a 40% improvement in cross-team collaboration for successful end-to-end campaign planning and execution.",
         title: "Sarah Pharr | AVP, Marketing, Genpact",
         
       },
       {
         image: "https://dapulse-res.cloudinary.com/image/upload/v1607704782/remote_mondaycom_static/img/segment-layout-default-images/customer-testimonials/telefonica.png",
         text: "With monday.com, we’re 30% more efficient at delivering hundreds of campaigns seen by millions of customers." ,
         title: "Leonardo W.",
         
       },
     ];   
    const [imageState, setImageState] = useState(0);
    const [imageSrc, setImageSrc] = useState(crauserData[imageState].image);
    const [crouserPara, setCrouserPara] = useState(
      crauserData[imageState].text
    );
    const [crauserTitle, setCrauserTitle] = useState(
      crauserData[imageState].title
    );
    // const [crauserDesignation, setCrauserDesignation] = useState(
    //   crauserData[imageState].designation
    // );

    const rightClick = () =>{
      
      if (imageState == crauserData.length-1) {
        setImageState(0);
      }else{
         setImageState(imageState + 1);
      }
     
    }
    const leftClick = ()=> {
      if (imageState == 0) {
        setImageState(crauserData.length - 1);
      }else{
          setImageState(imageState - 1);
      }
    }

   useEffect(() => {
     const id = setInterval(() => {
       console.log(imageState);
       if (imageState == crauserData.length - 1) {
         setImageState(0);
       } else {
         setImageState(imageState + 1);
       }
     }, 5000);
     return () => {
       clearInterval(id);
     };
   }, [{imageState}]);

    useEffect(()=>{
          setImageSrc(crauserData[imageState].image);
          setCrouserPara(crauserData[imageState].text);
          setCrauserTitle(crauserData[imageState].title);
          // setCrauserDesignation(crauserData[imageState].designation);
    },[{imageState}])

  console.log(imageState)
  return (
    <Box id="container_Client" pt={10} mt={"80px"}>
      <Box
        id="main_Client"
        bgImage={
          "url('')"
        }
        bgPosition={"center"}
        bgRepeat={"no-repeat"}
      >
        <Image id="crauser-img" src={imageSrc} m={"auto"} />
        <Flex mb={5}>
          <Button id="left-btn" onClick={leftClick} bg={"transparent"}>
            <ChevronLeftIcon boxSize={10} />
          </Button>
          <Box>
            <p id="crauser-para">{crouserPara}</p>
          </Box>
          <Button id="right-btn" onClick={rightClick} bg={"transparent"}>
            <ChevronRightIcon boxSize={10} />
          </Button>
        </Flex>
        <h4 id="crauser-title">{crauserTitle}</h4>
        {/* <p id="crauser-desin">{crauserDesignation}</p> */}
      </Box>
    </Box>
  );
}

export default ClinetTestimonial

