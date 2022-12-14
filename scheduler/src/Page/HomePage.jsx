import React,{useState} from 'react';
import "./HomePage.css";
import CheckBox from '../Components/CheckBox';
import { Button, Box, WrapItem, Wrap, ButtonGroup ,Checkbox, CheckboxGroup, InputGroup, Input , InputRightElement, Image, Flex, Center, Grid, GridItem ,
    IconButton,
    useBreakpointValue,
    Stack,Text, Img,
    Heading,
    p,HStack,
    Container,
    flexbox,} from "@chakra-ui/react";
import EndToEnd from '../Components/EndToEnd';




const workflow1 = [
    {
      title: "Boards",
      logo: "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured images/Home Page - 2022 Rebrand/tabs/board_icon.svg",
      content:
        "Everything starts with a visual board — the core of monday.com Work OS. Tailor it your way and manage anything from projects to departments.",
    },
  
    {
      title: "View",
      logo: "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/views_icon.svg",
      content:
        "Visualize and plan your work more efficiently with multiple views: Kanban board, calendar, timeline, Gantt chart, and more.",
    },
  
    {
      title: "Dashboards",
      logo: "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/dashboard_icon.svg",
      content:
        "Get the insights you need to make decisions with confidence. Keep track of progress, timelines, and budgets with custom dashboards.",
    },
  
    {
      title: "Integration",
      logo: "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/integrations_icon.svg",
      content:
        "Connect monday.com with all your favorite tools and get more work done. Integrate Slack, Dropbox, Adobe Creative Cloud, and more.",
    },
  
    {
      title: "Automation",
      logo: "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/automations_icon.svg",
      content:
        "Streamline processes to focus on the work that matters. Choose from a variety of automation recipes or create your own in minutes.",
    },
  
    {
      title: "Apps",
      logo: "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/apps_icon.svg",
      content:
        "Expand the capabilities of your Work OS with monday apps. Enhance your workflows with custom views, widgets, integrations, and more.",
    },
  
    {
      title: "Docs",
      logo: "https://dapulse-res.cloudinary.com/image/upload/e_colorize,co_rgb:0F1048/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/tabs/docs_icon.svg",
      content:
        "Transform text into action items, in just a few clicks. Connect, collaborate, and execute ideas and workflows in real-time from any doc.",
    },
  ];

const HomePage = () => {
    const [dataWorkflow, setDataWorkFlow] = useState(workflow1[0]);
    const handleChangeWorkflow=(value)=>{
        workflow1.map((el)=>{
         if(el.title===value){
             setDataWorkFlow(el)
         }
        })
       }
  return (
    <div>
        <Box id="box1">
            <Box id="box2">
                <p id="HomePage-heading1-box2">A Platform built for a</p>
                <p id="HomePage-heading2-box2">new way of working</p>
                <p id="HomePage-heading3-box2">What would you like to manage with scheduler.com Work OS?</p>
                <Flex gap="10px">
                    <CheckBox src="https://i.ibb.co/Nsczd8V/pngegg.png" width="80%" height="100%" para="Creative & design"/>
                    <CheckBox src="https://i.ibb.co/m05GWsy/5847eb76cef1014c0b5e484f.png" width="50%" height="50%"  para="Software Development" />
                    <CheckBox src="https://i.ibb.co/dMyCgfc/pngwing-com.png" width="50%" height="50%"  para="Marketing" />
                    <CheckBox src="https://i.ibb.co/NLrmqWp/pngwing-com-1.png" width="50%" height="50%" para="Project Management" />
                    <CheckBox src="https://i.ibb.co/DDQzHCX/pngwing-com-2.png" width="50%" height="50%" para="Sales & CRM" />
                    <CheckBox src="https://i.ibb.co/R2N2Sjk/pngwing-com-3.png" width="50%" height="50%" para="Task Management" />
                    <CheckBox src="https://i.ibb.co/6P76pcN/pngwing-com-4.png" width="50%" height="50%" para="HR" />
                    <CheckBox src="https://i.ibb.co/9HJrB3s/pngwing-com-6.png" width="50%" height="50%" para="Operations" />
                </Flex>
                <Button w="150px" h="50px" bg="#9C95FF" borderRadius={"20px"} marginTop="50px" color="white" _hover={{cursor:"pointer"}}>
                    Get Started
                </Button>
                <p>No credit card needed * Unlimited time on Free Plan</p>
            </Box>
        </Box>
        <Box>
            <Image src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/image.png" w="100%" alt="Error"/>
        </Box>
        <Box>
            <Heading color="#4C4C4C">Trusted by 152,000+ customers worldwide</Heading>
        </Box>
        <Box id="box4">
                <Box>
                    <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/hulu.png" alt ="Error" />
                </Box>
                <Box>
                    <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/bd.png" alt ="Error" />
                </Box>
                <Box>
                    <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/canva.png" alt ="Error" />
                </Box>
                <Box>
                    <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/nhl.png" alt ="Error" />
                </Box>
                <Box>
                    <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/coca_cola.png" alt ="Error" />
                </Box>
                <Box>
                    <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/Electronic_Arts.png" alt ="Error" />
                </Box>
                <Box>
                    <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/nautica.png" alt ="Error" />
                </Box>
                <Box>
                    <img src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/universal.png" alt ="Error" />
                </Box>
        </Box>
        <Box id="box5">
            <Box>
                <p id="HomePage-heading1-box5" color="#4C4C4C">The Work OS that lets you</p>
                <p id="HomePage-heading2-box5" color="#4C4C4C">shape workflows,<span style={{fontWeight:"bolder"}}> your way</span></p>
            </Box>
            <Box>
                <p id="HomePage-heading1-box5" color="#4C4C4C">Boost your team's alignment, and productivity by</p>
                <p id="HomePage-heading2-box5" color="#4C4C4C">customizing any workflow to fit your needs.</p>
                <Button w="150px" h="50px" bg="#6161FF" borderRadius={"20px"} marginTop="50px" color="white" _hover={{cursor:"pointer"}} border={"transparent"}>
                    Get Started
                </Button>
            </Box>
        </Box>
        <Box>
            <img src="https://soluma.eu/wp-content/uploads/2021/08/Group-1261151019-1-1.png" alt="Error" width={"100%"}/>
        </Box>
        <Box id="box6">
            <Box id="box7">
                <Box id = "box7-0">
                    <Box height="500px" color="white" bg="#0f1048" overflow="auto">
                        <Box >
                            <Box margin="auto" marginTop="50px">
                                <p id="HomePage-heading2-box5" color="#4C4C4C">Streamline your work for<br/><span style={{fontWeight:"bolder"}}> maximum productivity</span></p>
                                <p id="HomePage-heading3-box5">Centralize all your work, processes, tools, and files into one Work OS. Connect teams, bridge silos, and maintain one source of truth across your organization.</p>
                            </Box>
                            <br/>
                            <Flex gap="10px">
                                <Box >
                                    <img width={"70px"} style={{marginTop:"25px"}} src="https://dapulse-res.cloudinary.com/image/upload/r_400/f_auto,q_auto/remote_mondaycom_static/uploads/BarBen/jane.jpeg" alt="error"/>
                                </Box>
                                <Box>
                                    <p style={{fontSize:"15px"}}>“We use monday.com for a plethora of use cases, the opportunities this platform provides are limitless.”<br/><span style={{fontWeight:"bolder"}}> Jane Tham | VP of Collaboration Technologies</span><br/> Universal Music Group </p>
                                </Box>
                            </Flex>

                            <Box margin="auto" marginTop="50px">
                                <p id="HomePage-heading2-box5" color="#4C4C4C">Bring teams together to<br/><span style={{fontWeight:"bolder"}}> drive business impact</span></p>
                                <p id="HomePage-heading3-box5">Collaborate effectively organization-wide to get a clear picture of all your work. Stay in the loop with easy-to-use automations and real-time notifications.</p>
                            </Box>
                            <br/>
                            <Flex gap="10px">
                                <Box >
                                    <img width={"70px"} style={{marginTop:"25px"}} src="https://dapulse-res.cloudinary.com/image/upload/r_400/f_auto,q_auto/remote_mondaycom_static/uploads/BarBen/sarah.jpeg" alt="error"/>
                                </Box>
                                <Box>
                                    <p style={{fontSize:"15px"}}>“Since adopting monday.com, our global marketing department has seen a 40% improvement in cross-team collaboration.”<br/><span style={{fontWeight:"bolder"}}> Sarah Pharr | AVP Marketing</span><br/> Genpact </p>
                                </Box>
                            </Flex>

                            <Box margin="auto" marginTop="50px">
                                <p id="HomePage-heading2-box5" color="#4C4C4C">Stay on track to<br/><span style={{fontWeight:"bolder"}}> reach your goals, faster</span></p>
                                <p id="HomePage-heading3-box5">Get a high-level overview of your organization with customizable dashboards. Make confident decisions and easily scale workflows for your evolving needs.</p>
                            </Box>
                            <Button w="150px" h="50px" bg="#9C95FF" borderRadius={"20px"} marginTop="50px" color="white" _hover={{cursor:"pointer"}}>
                                Get Started
                            </Button>
                            <br/>
                            <Flex gap="10px">
                                <Box >
                                    <img width={"70px"} style={{marginTop:"25px"}} src="https://dapulse-res.cloudinary.com/image/upload/r_400/f_auto,q_auto/remote_mondaycom_static/uploads/BarBen/baptiste.jpeg" alt="error"/>
                                </Box>
                                <Box>
                                    <p style={{fontSize:"15px"}}>“monday.com allows banks to be synchronized between the top-level management figures and local KPIs.”<br/><span style={{fontWeight:"bolder"}}> Baptiste Ancey | Head of Innovation</span><br/> Indosuez Wealth Management </p>
                                </Box>
                            </Flex>
                        </Box>  
                    </Box>   
                </Box>
                <Box id="box7-1">
                    <img src="https://www.nttdata-gsl.co.jp/assets/img/service/hosting/monday/Board.gif" width={"100%"}/>
                </Box>
            </Box>
            
        </Box>
        <Box id="box8">
            <p id="HomePage-heading1-box8"><span style={{fontWeight:"bolder"}}> Everything</span> you need for any <span style={{fontWeight:"bolder"}}> workflow</span></p>
            <p>Easily build your ideal workflow with monday.com building blocks.</p>
        </Box>

        {/* workflow */}
        <Box id="box9">
            <Box id="box9-0">
                <Flex>
                        {workflow1.map((el) => {
                            return (
                                <Button id="btnwork"
                                onClick={()=>{handleChangeWorkflow(el.title)}}
                                borderBottom={
                                    dataWorkflow.title === el.title ? "4px solid #5034ff" : ""
                                }
                                
                                width="100%"
                                height="100%"
                                color="grey"
                                p="15px"
                                display="flex"
                                flexDirection={"column"}
                                bg="white"
                                >
                                <Img width="20px" src={el.logo}></Img>
                                <Text>{el.title}</Text>
                                </Button>
                            );
                            })}
                </Flex>
            </Box>
            <Box id="box9-1">
                <Box boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"} id="box9-1a">
                    <img width={"100%"} src="https://monday.com/static/uploads/DotanEgozi/87578cb4-a27e-4a22-898a-e3cda340da9c_views-gif-30-45-min1.gif"/>
                </Box>
                <Box id="box9-1b">
                    <Box id="box9-1c">
                        <img width="3%" height={"3%"} src={dataWorkflow.logo}></img>
                        <Text color="#6d6dff" fontSize="30px" >{dataWorkflow.title}</Text>
                    </Box>
                    <Text color="grey" marginTop="20px" fontSize="20px">{dataWorkflow.content}</Text>
                </Box>
                
            </Box>
    </Box>
    <Box id="box10">
        <p id="HomePage-heading1-box8"><span style={{fontWeight:"bolder"}}> End-to-end products</span> to run<br/> the core of your business</p>
        <p>Tailored products designed for every aspect of your teams' needs.</p>
    </Box>
    
    
        
        

    </div>
  )
}

export default HomePage