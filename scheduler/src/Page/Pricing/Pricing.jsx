import React from 'react';
//import Navbar from "../../Components/Navbar/Navbar";
import ClinetTestimonial from "./ClinetTestimonial";
import Frequently from './Frequently';
import { Link } from "@chakra-ui/react";
import {Box,Heading,
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
  import NormalButton from "../../Components/NormalButton";
  import "./Pricing.css";
import Navbar from '../../Components/Navbar/Navbar';

const Pricing= () => {
  return (
    
    <div className='container'>
       <Navbar/>
        <div className='head'>
              <center><h1>Supercharge your teamwork. Start <a style={{color:"#6c6cff"}}>free</a>.</h1></center>
                 <p>Unlimited boards and workflows. No credit card needed.</p>
           <center><button >Get Started</button></center>
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
          <center><Link href='./Checkout'><button  style={{width:"150px", height:"40px", borderRadius:"20px",backgroundColor:"#6C6CFF", color:"white", fontWeight:"bold"}}>Try for free</button></Link></center>
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

          <center><Link href='./Checkout'><button  style={{width:"150px", height:"40px", borderRadius:"20px",backgroundColor:"#6C6CFF", color:"white",fontWeight:"bold"}}>Try for free</button></Link></center>
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
          
          <center><Link href='./Checkout'><button  style={{width:"150px", height:"40px", borderRadius:"20px",backgroundColor:"#6C6CFF", color:"white",fontWeight:"bold"}}>Try for free</button></Link></center>
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
          
          <center><Link href='./Checkout'><button  style={{width:"150px", height:"40px", borderRadius:"20px",backgroundColor:"#6C6CFF", color:"white",fontWeight:"bold"}}>Try for free</button></Link></center>
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
          <center><Link href='./Checkout'><button  style={{width:"150px", height:"40px", borderRadius:"20px",backgroundColor:"#6C6CFF", color:"white", fontWeight:"bold"}}>Contact Us</button></Link></center>
                    
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
    {/* <Menu>Complete feature list</Menu> */}
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

    <ClinetTestimonial />

   
     <Frequently/> 
   
     <Box id="lastHeading">
      <Heading fontSize="40px" marginBottom="10px">Start using monday.com today</Heading>
    </Box>
    <Box id="para">
      <p fontSize="25px" marginBottom="10px">Try it now for free / No credit card needed</p>
    </Box>
    <Box id="btn">
      <button style={{height:"50px"}} ><a href="Login">Get Started</a></button>
    </Box>


    {/* Footer */}
    <Box id="box-14">
        <Box id="box14-0">
            <Heading color={"white"} size="l">Scheduler.com</Heading>
            <a href="//monday.com/integrations/" target="_blank">Pricing</a>
            <a href="//monday.com/integrations/" target="_blank">Contact us</a>
            <a href="//monday.com/integrations/" target="_blank">Templates</a>
            <a href="//monday.com/integrations/" target="_blank">SMB</a>
            <a href="//monday.com/integrations/" target="_blank">Enterprise</a>
            <a href="//monday.com/integrations/" target="_blank">Nonprofits</a>
            <a href="//monday.com/integrations/" target="_blank">Apps marketplace</a>
            <a href="//monday.com/integrations/" target="_blank">24/7 support</a>
        </Box>

        <Box id="box14-0">
            <Heading color={"white"} size="l">Features</Heading>
            <a href="//monday.com/integrations/" target="_blank">Docs</a>
            <a href="//monday.com/integrations/" target="_blank">Integrations</a>
            <a href="//monday.com/integrations/" target="_blank">Automations</a>
            <a href="//monday.com/integrations/" target="_blank">Files</a>
            <a href="//monday.com/integrations/" target="_blank">Dashboards</a>
            <a href="//monday.com/integrations/" target="_blank">Kanban</a>
            <a href="//monday.com/integrations/" target="_blank">Gantt</a>
        </Box>

        <Box id="box14-03">
            <Heading color={"white"} size="l">Scheduler products</Heading>
            <div style={{display:"flex", gap:"5px"}}>
               <div style={{width:"5%", marginTop:"0px"}}>
                    <img width={"100%"} src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/wm_icon_footer.png" alt="Error" />
               </div>
               <a href="//monday.com/integrations/" target="_blank">Scheduler Work Management</a>
            </div>
            <div style={{display:"flex", gap:"5px"}}>
               <div style={{width:"5%", marginTop:"0px"}}>
                    <img width={"100%"} src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/crm_icon_footer.png" alt="Error" />
               </div>
               <a href="//monday.com/integrations/" target="_blank">Scheduler Sales CRM</a>
            </div>
            <div style={{display:"flex", gap:"5px"}}>
               <div style={{width:"5%", marginTop:"0px"}}>
                    <img width={"100%"} src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/marketer_icon_footer.png" alt="Error" />
               </div>
               <a href="//monday.com/integrations/" target="_blank">Scheduler Marketer</a>
            </div>
            <div style={{display:"flex", gap:"5px"}}>
               <div style={{width:"5%", marginTop:"0px"}}>
                    <img width={"100%"} src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/projects_icon_footer.png" alt="Error" />
               </div>
               <a href="//monday.com/integrations/" target="_blank">Scheduler Projects</a>
            </div>
            <div style={{display:"flex", gap:"5px"}}>
               <div style={{width:"5%", marginTop:"0px"}}>
                    <img width={"100%"} src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/monday_dev_product_management_software.png" alt="Error" />
               </div>
               <a href="//monday.com/integrations/" target="_blank">Scheduler Dev</a>
            </div>
            <br/>
            <h4>More by Scheduler.com</h4>
            <div style={{display:"flex", gap:"5px"}}>
               <div style={{width:"5%", marginTop:"0px"}}>
                    <img width={"100%"} src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/canvas_icon_footer.png" alt="Error" />
               </div>
               <a href="//monday.com/integrations/" target="_blank">Canvas</a>
            </div>
            <div style={{display:"flex", gap:"5px"}}>
               <div style={{width:"5%", marginTop:"0px"}}>
                    <img width={"100%"} src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/footer/workforms_icon_footer.png" alt="Error" />
               </div>
               <a href="//monday.com/integrations/" target="_blank">WorkForms</a>
            </div>
        </Box>

        <Box id="box14-0">
            <Heading color={"white"} size="l">Use cases</Heading>
            <a href="//monday.com/integrations/" target="_blank">Marketing</a>
            <a href="//monday.com/integrations/" target="_blank">Project management</a>
            <a href="//monday.com/integrations/" target="_blank">Sales</a>
            <a href="//monday.com/integrations/" target="_blank">Developers</a>
            <a href="//monday.com/integrations/" target="_blank">HR</a>
            <a href="//monday.com/integrations/" target="_blank">IT</a>
            <a href="//monday.com/integrations/" target="_blank">Operations</a>
            <a href="//monday.com/integrations/" target="_blank">Construction</a>
        </Box>

        <Box id="box14-0">
            <Heading color={"white"} size="l">Company</Heading>
            <a href="//monday.com/integrations/" target="_blank">About Us</a>
            <a href="//monday.com/integrations/" target="_blank">Careers - We're hiring!</a>
            <a href="//monday.com/integrations/" target="_blank">Scheduler - U</a>
            <a href="//monday.com/integrations/" target="_blank">Press</a>
            <a href="//monday.com/integrations/" target="_blank">Press</a>
            <a href="//monday.com/integrations/" target="_blank">Customer Stories</a>
            <a href="//monday.com/integrations/" target="_blank">Become a partner</a>
            <a href="//monday.com/integrations/" target="_blank">Sustainability & ESG</a>
            <a href="//monday.com/integrations/" target="_blank">Affiliates</a>
            <a href="//monday.com/integrations/" target="_blank">Digital Lift</a>
        </Box>

        <Box id="box14-0">
            <Heading color={"white"} size="l">Resources</Heading>
            <a href="//monday.com/integrations/" target="_blank">Help Center</a>
            <a href="//monday.com/integrations/" target="_blank">Community</a>
            <a href="//monday.com/integrations/" target="_blank">Blog</a>
            <a href="//monday.com/integrations/" target="_blank">Webinars</a>
            <a href="//monday.com/integrations/" target="_blank">Startup for Startup</a>
            <a href="//monday.com/integrations/" target="_blank">Global events</a>
            <a href="//monday.com/integrations/" target="_blank">App Development</a>
            <a href="//monday.com/integrations/" target="_blank">Find a Partner</a>
            <a href="//monday.com/integrations/" target="_blank">Compare</a>
        </Box>
    </Box>


   </div>
    
  )
}
export default Pricing;