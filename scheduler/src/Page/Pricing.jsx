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
    Th,
    Td,
    TableContainer,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  }from "@chakra-ui/react";
  import { Image } from "@chakra-ui/react";
  import NormalButton from "../Components/NormalButton"
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
        p="30px 0px 30px 0px"
        gap="50px"
      >
        <VStack boxShadow="lg" bg="white" p="4px 8px" border="1px solid black" borderRadius="10px" width="15%" >
          <Text fontSize="8xl" fontWeight="bold" >
            Individual
          </Text>
          
          <Text>
            <Text
              fontWeight="bold"
              display="inline-block"
              fontSize="24px"
              as="span"
              mb="20px"
            >
              $0
            </Text>
            <br/>
            <Text as="span" fontSize="6xl" mb="20px" > 
            free <br/> forever
            </Text>
            <br/>
            <Text fontWeight="bolder" as="span" fontSize="6xl" gap="10"> 
               Up to 2 seats
            </Text>
            <br/>
            <br/>
          </Text>
          <br/>

          <Text fontSize="10px" color="#8A9FC7" >
          For individuals looking to <br/>keep track of their work
          </Text>

          <Text fontWeight="bolder" as="span" fontSize="12px" gap="10"> 
               Individual plan <br/> Includes:
               
            </Text>
            <br/>
           <TableContainer align="left">
             <Table>
                <Tbody fontSize="10px">
                    <Tr align="left">
                        <Td>Up to 3 boards </Td>
                    </Tr>
                    <Tr align="left">
                        <Td>Unlimited docs</Td>
                    </Tr >
                    <Tr align="left">
                        <Td>200+ templates </Td>
                    </Tr>
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

        <VStack boxShadow="lg" bg="white" p="4px 8px"  border="1px solid black" borderRadius="10px" width="15%" >
          <Text fontSize="8xl" fontWeight="bold">
            Basic
          </Text>
          
          <Text>
            <Text
              fontWeight="bold"
              display="inline-block"
              fontSize="24px"
              as="span"
              mb="20px"
              color="#886AFF"
            >
              $8
            </Text>
            <br/>
            <Text as="span" fontSize="6xl" mb="20px"> 
            seat/ <br/> month
            </Text>
            <br/>
            <Text fontWeight="bolder" as="span" fontSize="6xl" gap="10"> 
               Total $24/month
            </Text>
           < br/>
            <Text as="span" fontSize="10px" mb="20px"> 
            billed annually
            </Text>
            
          </Text>
          
          <Link style={{width:"100%", textDecoration:"none"}} href='./Checkout'><NormalButton borderRadius="10px"  text="Try for free" /></Link>
          <Text fontSize="10px" color="#8A9FC7" >
          Manage all yours teams' <br/>work in one place
          </Text>

          <Text fontWeight="bolder" as="span" fontSize="12px" gap="10"> 
            Includes Individual, <br/> plan:
               
            </Text>
            <br/>
           <TableContainer align="left" gap="90px">
             <Table gap="50px">
                <Tbody fontSize="10px" >
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
                        <Td>Create a dashboard <br/> based on 1 board </Td>
                    </Tr>
                </Tbody>
             </Table>
           </TableContainer>
             
        </VStack>

        <VStack boxShadow="lg" bg="white" p="4px 8px"  border="1px solid black" borderRadius="10px" width="15%" >
          <Text fontSize="8xl" fontWeight="bold" >
            Standard
          </Text>
          
          <Text>
            <Text
              fontWeight="bold"
              display="inline-block"
              fontSize="24px"
              as="span"
              mb="20px"
              color="#0080ff"
            >
              $10
            </Text>
            <br/>
            <Text as="span" fontSize="6xl" mb="20px"> 
            seat/ <br/> month
            </Text>
            <br/>
            <Text fontWeight="bolder" as="span" fontSize="6xl" gap="10"> 
               Total $30/month
            </Text>
           < br/>
            <Text as="span" fontSize="10px" mb="20px"> 
            billed annually
            </Text>
            
          </Text>
          
          <NormalButton borderRadius="10px"  text="Try for free" />
          <Text fontSize="10px" color="#8A9FC7" >
          Collaborate and optimize' <br/>Your team processes
          </Text>

          <Text fontWeight="bolder" as="span" fontSize="12px" gap="10"> 
            Includes Individual, <br/> plan:
               
            </Text>
            <br/>
           <TableContainer align="left" gap="90px">
             <Table gap="50px">
                <Tbody fontSize="10px" >
                    <Tr align="left">
                        <Td>Timeline & Gantt views </Td>
                    </Tr>
                    <Tr align="left">
                        <Td>Calender View</Td>
                    </Tr >
                    <Tr align="left">
                        <Td>Automations(250 actions per month)</Td>
                    </Tr>
                    <Tr>
                        <Td>Integrations <br/> (250 actions per month) </Td>
                    </Tr>
                    <Tr>
                        <Td>Create a dashboard that<br/> combines up to 5 board </Td>
                    </Tr>
                </Tbody>
             </Table>
           </TableContainer>
             
        </VStack>

        <VStack boxShadow="lg" bg="white" p="4px 8px"  border="1px solid black" borderRadius="10px" width="15%" >
          <Text fontSize="8xl" fontWeight="bold">
            Pro
          </Text>
          
          <Text>
            <Text
              fontWeight="bold"
              display="inline-block"
              fontSize="24px"
              as="span"
              mb="20px"
              color=" #53c653"
            >
              $16
            </Text>
            <br/>
            <Text as="span" fontSize="6xl" mb="20px"> 
            seat/ <br/> month
            </Text>
            <br/>
            <Text fontWeight="bolder" as="span" fontSize="6xl" gap="10"> 
               Total $48/month
            </Text>
           < br/>
            <Text as="span" fontSize="10px" mb="20px"> 
            billed annually
            </Text>
            
          </Text>
          
          <NormalButton borderRadius="10px" text="Try for free" />
          <Text fontSize="10px" color="#8A9FC7" >
          Streamline and run your <br/>teams'complex workflows
          </Text>

          <Text fontWeight="bolder" as="span" fontSize="12px" gap="10"> 
            Includes Individual, <br/> plan:
               
            </Text>
            <br/>
           <TableContainer align="left" gap="90px">
             <Table gap="50px">
                <Tbody fontSize="10px" >
                    <Tr align="left">
                        <Td>Private boards and docs</Td>
                    </Tr>
                    <Tr align="left">
                        <Td>Chart view</Td>
                    </Tr >
                    <Tr align="left">
                        <Td>Time tracking</Td>
                    </Tr>
                    <Tr>
                        <Td>Formula Column</Td>
                    </Tr>
                    <Tr>
                        <Td>Dependency column</Td>
                    </Tr>
                    <Tr>
                        <Td>Automations (25000 actions per month)</Td>
                    </Tr>
                    <Tr>
                        <Td>Integrations(25000 actions per month)</Td>
                    </Tr>
                    <Tr>
                        <Td>Create a dashboard that combines <br/>up to 10 boards</Td>
                    </Tr>

                </Tbody>
             </Table>
           </TableContainer>
             
        </VStack>

        <VStack boxShadow="lg" bg="white" p="4px 8px"  border="1px solid black" borderRadius="10px" width="15%" >
       
          <Text fontSize="8xl" fontWeight="bold" >
            Enterprise
          </Text>
          <Image
           height="90px"
           objectFit="cover"
           src="https://monday.com/static/img/pricing/contact_us_plan_enterprise.png"
           alt="logo"
          />
          <div className='gap'><br/><br/></div>
          <NormalButton borderRadius="10px" Bgcolor="white" color="#6c6cff" text="Contact us" />
          <Text fontSize="10px" color="#8A9FC7" >
          For organization seeking enterprise-grade features
          </Text>

          <Text fontWeight="bolder" as="span" fontSize="12px" gap="10"> 
            Includes Individual, <br/> plan:
               
            </Text>
            <br/>
           <TableContainer align="left" gap="90px">
             <Table gap="50px">
                <Tbody fontSize="10px" >
                    <Tr align="left">
                        <Td>Enterprise-scale<br/>Automations & Integrations</Td>
                    </Tr>
                    <Tr align="left">
                        <Td>Enterprise-grade <br/>security & governance</Td>
                    </Tr >
                    <Tr align="left">
                        <Td>Advanced reporting & analytics</Td>
                    </Tr>
                    <Tr>
                        <Td>Multi-level permissions</Td>
                    </Tr>
                    <Tr>
                        <Td>Premium support</Td>
                    </Tr>
                    <Tr>
                        <Td>Create a dashboard that combines <br/>up to 50 boards</Td>
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
  </div>
  )
}
export default Pricing;