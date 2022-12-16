import React from 'react';
import { Link } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import {
    Flex,
    Text,
    VStack,
    Table,
    Tbody,
    Tr,
    Td,
    TableContainer,
    Menu,
    MenuList,
    MenuItem,
  }from "@chakra-ui/react";
  import { Image } from "@chakra-ui/react";
  import NormalButton from "../../Components/NormalButton"
  import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
  import "./Pricing.css";
  

const Pricing= () => {
  return (
    <div className='container'>
      
        <div className='head'>
              <h1>Supercharge your teamwork. Start <a style={{color:"#6c6cff"}}>free</a>.</h1>
                 <p>Unlimited boards and workflows. No credit card needed.</p>
           <button >Get Started</button>
        </div>
    
    <div className='box'>
    <Flex
        m="100px 0 50px 0"
        justifyContent="center"
        p="40px 20px 40px 20px"
        gap="50px"
        margin="auto"
        width="100%"
      >
        <VStack  
        boxShadow="lg" 
        bg="white" 
        p="4px 8px" 
        border="1px solid black" 
        box-shadow=' rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px'
        borderRadius="10px" 
        width="25%"
        height="10%" 
        >
          <Text fontSize="3xl" fontWeight="bold" mt="30px" mr="60px">
            Individual
          </Text>
          
          <Text>
            <Text
              fontWeight="bold"
              display="inline-block"
              fontSize="34px"
              as="span"
              mb="10px"
              mr="120px"
            >
              $0
            </Text>
            <br/>
            <Text as="span" fontSize="2xl"  mb="60px"> 
            free<br/>forever
            </Text>
            <br/>
            <Text fontWeight="bolder" as="span" fontSize="2xl" gap="10"> 
               Up to 2 seats
            </Text>
            <br/>
            <br/>
          </Text>
            <Link style={{width:"100%", textDecoration:"none" }} href='./Checkout'><NormalButton borderRadius="10px" text="Try for free" /></Link>
          <Text fontSize="15px" color="#8A9FC7" mt="100px" >
          For individuals looking to <br/>keep track of their work
          </Text>
          <Text fontWeight="bolder" as="span" fontSize="20px"> 
               Individual plan <br/> Includes:
            </Text>
            <br/>
           <TableContainer align="left">
             <Table>
                <Tbody fontSize="15px">
                    <Tr align="left">
                      <Td>Up to 3 boards </Td>
                    </Tr>
                    <Tr align="left">
                        <Td>Unlimited docs <br/><br/>200 + templates</Td>
                    </Tr >
                    {/* <Tr align="left">
                        <Td> </Td>
                    </Tr> */}
                    <Tr>
                        <Td>Over 20 Column types </Td>
                    </Tr>
                    <Tr>
                        <Td>Up to 2 team member </Td>
                    </Tr>
                    <Tr>
                        <Td>iOS and Android apps </Td>
                    </Tr>
                    
                   
                </Tbody>
               </Table>
           </TableContainer>  
        </VStack>

        <VStack boxShadow="lg" bg="white" p="4px 8px"  border="1px solid black" borderRadius="10px" width="25%" height="12%">
          <Text fontSize="3xl" fontWeight="bold" mr="90px" mt="25px">
            Basic
          </Text>
          
          <Text>
            <Text
              fontWeight="bold"
              display="inline-block"
              fontSize="35px"
              as="span"
              mb="10px"
              color="#886AFF"
              mr="120px"
            >
              $8
            </Text>
            <br/>
            <Text as="span" fontSize="2xl" mb="90px"> 
            seat/ <br/> month
            </Text>
            <br/>
            <Text fontWeight="bolder" as="span" fontSize="2xl" gap="10"> 
               Total $24/month
            </Text>
           < br/>
            <Text as="span" fontSize="12px" mb="22px"> 
            billed annually
            </Text>
          </Text>

          <Link style={{width:"100%", textDecoration:"none",}} href='./Checkout'><NormalButton borderRadius="10px" text="Try for free" /></Link>
          <Text fontSize="15px" color="#8A9FC7" >
          Manage all yours teams' <br/>work in one place
          </Text>

          <Text fontWeight="bolder" as="span" fontSize="20px" gap="10" > 
            Includes Individual, <br/> plan:
            </Text>
            <br/>
           <TableContainer align="left" gap="90px" >
             <Table gap="50px">
                <Tbody fontSize="15px" >
                    <Tr align="left">
                        <Td>Unlimited free viewers </Td>
                    </Tr>
                    <Tr align="left">
                        <Td>Unlimited item</Td>
                    </Tr >
                    <Tr align="left">
                        <Td>5 GB file storage </Td>
                    </Tr>
                    <Tr>
                        <Td>Prioritised customer <br/> support </Td>
                    </Tr>
                    <Tr>
                        <Td>Create a dashboard <br/> based on 1 boards <br/></Td>
                    </Tr>
                </Tbody>
             </Table>
           </TableContainer>
             
        </VStack>

        <VStack boxShadow="lg" bg="white" p="4px 8px"  border="1px solid black" borderRadius="10px" width="25%" height="12%" >
          <Text fontSize="3xl" fontWeight="bold" mr="50px" mt="25px">
            Standard
          </Text>
          
          <Text>
            <Text
              fontWeight="bold"
              display="inline-block"
              fontSize="30px"
              as="span"
              mb="20px"
              color="#0080ff"
              mr="90px"
            >
              $10
            </Text>
            <br/>
            <Text as="span" fontSize="2xl" mb="20px"> 
            seat/ <br/> month
            </Text>
            <br/>
            <Text fontWeight="bolder" as="span" fontSize="2xl" gap="10"> 
               Total $30/month
            </Text>
           < br/>
            <Text as="span" fontSize="12px" mb="20px"> 
            billed annually
            </Text>
            
          </Text>
          
          <NormalButton borderRadius="10px"  text="Try for free" />
          <Text fontSize="15px" color="#8A9FC7" >
          Collaborate and optimize' <br/>Your team processes
          </Text>

          <Text fontWeight="bolder" as="span" fontSize="20px" gap="10"> 
            Includes Individual, <br/> plan:
               
            </Text>
            <br/>
           <TableContainer align="left" gap="90px">
             <Table gap="50px">
                <Tbody fontSize="15px" >
                    <Tr align="left">
                        <Td>Timeline & Gantt views <br/><br/>Calender View</Td>
                    </Tr>
                    <Tr align="left">
                        <Td>Automations<br/>(250 actions per month)</Td>
                    </Tr>
                    <Tr>
                        <Td>Integrations<br/>(250 actions per month) </Td>
                    </Tr>
                    <Tr>
                        <Td>Create a dashboard that<br/> combines up to 5 board </Td>
                    </Tr>
                </Tbody>
             </Table>
           </TableContainer>
             
        </VStack>

        <VStack boxShadow="lg" bg="white" p="4px 8px"  border="1px solid black" borderRadius="10px" width="25%" height="12%" >
          <Text fontSize="3xl" fontWeight="bold" mr="90px" mt="25px">
            Pro
          </Text>
          
          <Text>
            <Text
              fontWeight="bold"
              display="inline-block"
              fontSize="30px"
              as="span"
              mb="20px"
              color=" #53c653"
              mr="90px"
            >
              $16
            </Text>
            <br/>
            <Text as="span" fontSize="2xl" mb="20px"> 
            seat/ <br/> month
            </Text>
            <br/>
            <Text fontWeight="bolder" as="span" fontSize="2xl" gap="10"> 
               Total $48/month
            </Text>
           < br/>
            <Text as="span" fontSize="12px" mb="20px"> 
            billed annually
            </Text>
            
          </Text>
          
          <NormalButton borderRadius="10px" text="Try for free" />
          <Text fontSize="15px" color="#8A9FC7" >
          Streamline and run your <br/>teams'complex workflows
          </Text>

          <Text fontWeight="bolder" as="span" fontSize="20px" gap="10"> 
            Includes Individual, <br/> plan:
               
            </Text>
            <br/>
           <TableContainer align="left" gap="90px">
             <Table gap="50px">
                <Tbody fontSize="15px" >
                    <Tr align="left">
                        <Td>Private boards and docs <br/><br/>Chart view</Td>
                    </Tr>
                    {/* <Tr align="left">
                        <Td>Chart view</Td>
                    </Tr > */}
                    {/* <Tr align="left">
                        <Td>Time tracking</Td>
                    </Tr> */}
                    {/* <Tr>
                        <Td>Formula Column</Td>
                    </Tr> */}
                    {/* <Tr>
                        <Td>Dependency column</Td>
                    </Tr> */}
                    <Tr>
                        <Td>Automations<br/>(25000 actions per month)</Td>
                    </Tr>
                    <Tr>
                        <Td>Integrations<br/>(25000 actions per month)</Td>
                    </Tr>
                    <Tr>
                        <Td>Create a dashboard that<br/>combines up to 10 boards</Td>
                    </Tr>

                </Tbody>
             </Table>
           </TableContainer>
             
        </VStack>

        <VStack boxShadow="lg" bg="white" p="4px 8px"  border="1px solid black" borderRadius="10px" width="25%" height="12%" >
       
          <Text fontSize="3xl" fontWeight="bold" mr="90px" mt="25px">
            Enterprise
          </Text>
          <Image
           height="90px"
           objectFit="cover"
           src="https://monday.com/static/img/pricing/contact_us_plan_enterprise.png"
           alt="logo"
          />
          <div className='gap'><br/><br/><br/><br/></div>
          <NormalButton borderRadius="10px" Bgcolor="white" color="#6c6cff" text="Contact us" />
          <Text fontSize="15px" color="#8A9FC7" >
          For organization seeking enterprise-grade features
          </Text>

          <Text fontWeight="bolder" as="span" fontSize="20px" gap="10"> 
            Includes Individual, <br/> plan:
               
            </Text>
            <br/>
           <TableContainer align="left" gap="90px">
             <Table gap="50px">
                <Tbody fontSize="15px" >
                    <Tr align="left">
                        <Td>Enterprise-scale<br/>Automations Integration</Td>
                    </Tr>
                    <Tr align="left">
                        <Td>Enterprise-grade <br/>security & governance</Td>
                    </Tr >
                    <Tr align="left">
                        <Td>Advanced reporting & <br/><br/>Multi-level Premium support</Td>
                    </Tr>
                    {/* <Tr>
                        <Td>Multi-level Premium support</Td>
                    </Tr> */}
                    <Tr>
                        <Td>Create a dashboard that <br/>combines up to 50 boards</Td>
                    </Tr>
                </Tbody>
             </Table>
           </TableContainer>
        </VStack>
      </Flex>
    </div>
    
    <div className='box2'>
    <Menu isLazy>
    <Menu>Complete feature list</Menu>
    <MenuList>
    <MenuItem>New Window</MenuItem>
    </MenuList>
    </Menu>
    </div>

    <div className='head2'>
              <h1>Over 152,000 customers worldwide rely on<br/> monday.com</h1>
    </div>

    <div className='img'>
         <Image
           height="40px"
           objectFit="cover"
           src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/hulu.png"
           alt="logo"
          />
          <Image
           height="40px"
           objectFit="cover"
           src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/bd.png"
           alt="logo"
          />
          <Image
           height="40px"
           objectFit="cover"
           src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/canva.png"
           alt="logo"
          />
          <Image
           height="40px"
           objectFit="cover"
           src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/nhl.png"
           alt="logo"
          />
          <Image
           height="40px"
           objectFit="cover"
           src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/coca_cola.png"
           alt="logo"
          />
           <Image
           height="40px"
           objectFit="cover"
           src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/hubspot.png"
           alt="logo"
          />
          <Image
           height="40px"
           objectFit="cover"
           src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/Electronic_Arts.png"
           alt="logo"
          />
           <Image
           height="40px"
           objectFit="cover"
           src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/nautica.png"
           alt="logo"
          />
          <Image
           height="40px"
           objectFit="cover"
           src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/universal.png"
           alt="logo"
          />
    </div>
        
    <div className='faq'>
    </div>




  </div>
  )
}
export default Pricing;