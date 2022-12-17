import React,{useState} from 'react';
import "./HomePage.css";
import CheckBox from '../Components/CheckBox';
import { Button, Box, Image, Flex ,
    Text, Img,
    Heading,
    } from "@chakra-ui/react";
import { useMediaQuery } from '@chakra-ui/react'
import Navbar from '../Components/Navbar/Navbar';





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

    const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

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
        <Navbar/>
        <Box id="box1">
            <Box id="box2">
                <p id="HomePage-heading1-box2">A Platform built for a</p>
                <p id="HomePage-heading2-box2">new way of working</p>
                <p id="HomePage-heading3-box2">What would you like to manage with scheduler.com Work OS?</p>
                <Flex id="box1-check" gap="10px" >
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
                <p style={{marginTop:"20px"}}>No credit card needed * Unlimited time on Free Plan</p>
            </Box>
        </Box>
        <Box>
            <Image src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/first_fold/image.png" w="100%" alt="Error"/>
        </Box>
        <Box marginTop="20px" marginBottom="30px">
            <center><Heading color="#4C4C4C">Trusted by 152,000+ customers worldwide</Heading></center>
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
            <center>
                <p id="HomePage-heading1-box8"><span style={{fontWeight:"bolder"}}> Everything</span> you need for any <span style={{fontWeight:"bolder"}}> workflow</span></p>
                <p>Easily build your ideal workflow with monday.com building blocks.</p>
            </center>
        </Box>

        {/* workflow */}
        <Box id="box9">
            <Box id="box9-0">
                
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

    {/* day3 */}

    <Box bg="#0C0D46">
        <Box id="box11">
            <Box id="box11-0">
                <Flex>
                    <center><img width={"50%"} src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/wm_main_logo.png" alt="error"/></center>
                </Flex>
                <p>For professionals and teams<br/>managing tasks & workflows</p>
                <p>Manage tasks and workflows to fuel team collaboration and productivity at scale.</p>
                <hr style={{borderColor: '#FFA318'}}></hr>
                <p>Top use cases:</p>
                <p><span style={{color: "orange"}}>&#10003; </span> Task management</p>
                <p><span style={{color: "orange"}}>&#10003; </span> Project management</p>
                <p><span style={{color: "orange"}}>&#10003; </span> Automated workflows</p>
                <p><span style={{color: "orange"}}>&#10003; </span> Build your own</p>
                <Button w="150px" h="50px" bg="#6161FF" borderRadius={"20px"} marginTop="50px" color="white" _hover={{cursor:"pointer"}} border={"transparent"}>
                    Get Started
                </Button>
            </Box>

            <Box id="box11-0">
                <Flex>
                    <center><img width={"50%"} src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/marketer_main_logo.png" alt="error"/></center>
                </Flex>
                <p>For professionals and teams<br/>managing tasks & workflows</p>
                <p>Manage tasks and workflows to fuel team collaboration and productivity at scale.</p>
                <hr style={{borderColor: '#F14F9D'}}></hr>
                <p>Top use cases:</p>
                <p><span style={{color: "orange"}}>&#10003; </span> Task management</p>
                <p><span style={{color: "orange"}}>&#10003; </span> Project management</p>
                <p><span style={{color: "orange"}}>&#10003; </span> Automated workflows</p>
                <p><span style={{color: "orange"}}>&#10003; </span> Build your own</p>
                <Button w="150px" h="50px" bg="#6161FF" borderRadius={"20px"} marginTop="50px" color="white" _hover={{cursor:"pointer"}} border={"transparent"}>
                    Get Started
                </Button>
            </Box>

            <Box id="box11-0">
                <Flex>
                    <center><img width={"50%"} src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/crm_main_logo.png" alt="error"/></center>
                </Flex>
                <p>For professionals and teams<br/>managing tasks & workflows</p>
                <p>Manage tasks and workflows to fuel team collaboration and productivity at scale.</p>
                <hr style={{borderColor: '#1DCE85'}}></hr>
                <p>Top use cases:</p>
                <p><span style={{color: "orange"}}>&#10003; </span> Task management</p>
                <p><span style={{color: "orange"}}>&#10003; </span> Project management</p>
                <p><span style={{color: "orange"}}>&#10003; </span> Automated workflows</p>
                <p><span style={{color: "orange"}}>&#10003; </span> Build your own</p>
                <Button w="150px" h="50px" bg="#6161FF" borderRadius={"20px"} marginTop="50px" color="white" _hover={{cursor:"pointer"}} border={"transparent"}>
                    Get Started
                </Button>
            </Box>

            <Box id="box11-0">
                <Flex>
                    <center><img width={"50%"} src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/products/projects_main_logo.png" alt="error"/></center>
                </Flex>
                <p>For professionals and teams<br/>managing tasks & workflows</p>
                <p>Manage tasks and workflows to fuel team collaboration and productivity at scale.</p>
                <hr style={{borderColor: '#1DCE85'}}></hr>
                <p>Top use cases:</p>
                <p><span style={{color: "orange"}}>&#10003; </span> Task management</p>
                <p><span style={{color: "orange"}}>&#10003; </span> Project management</p>
                <p><span style={{color: "orange"}}>&#10003; </span> Automated workflows</p>
                <p><span style={{color: "orange"}}>&#10003; </span> Build your own</p>
                <Button w="150px" h="50px" bg="#6161FF" borderRadius={"20px"} marginTop="50px" color="white" _hover={{cursor:"pointer"}} border={"transparent"}>
                    Get Started
                </Button>
            </Box>
        </Box>
    </Box>

    <Box id="box12">
        <img width={"100%"} src="https://i.ibb.co/2nhjgfg/ezgif-com-gif-maker.gif" />
    </Box>

    <Box id="box13">
        <Box id="box13-0">
            <img width={"70%"} height="100%" src="https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/customer-support/support_globe.png" alt="error" />
        </Box>
        <Box id="box13-1">
            <p id="HomePage-heading1-box8"><span style={{fontWeight:"bolder"}}>Supporting</span> your growth<br/> every step of the way</p>
            <p>Our support superheroes are a click away to help you get the most out of monday.com, so you can focus on working without limits.</p>
            <Box id="box13-2">
                <Box id="box13-3">
                    <img width="50px" height="40px" style={{marginTop:"20px",display:"flex", justifyContent:"center", alignItem:"center"}} src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/customer-support/phone.png" alt="Error" />
                    <p><span style={{fontWeight:"bolder"}}>24/7</span><br/>support<br/>anytime,<br/>anywhere</p>
                </Box>
                <Box id="box13-3">
                    <img width="50px" height="40px" style={{marginTop:"20px",display:"flex", justifyContent:"center", alignItem:"center"}} src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/customer-support/heart.png" alt="Error" />
                    <p><span style={{fontWeight:"bolder"}}>Most Loved by</span><br/>customers on<br/>anytime,<br/>G2</p>
                </Box>
                <Box id="box13-3">
                    <img width="50px" height="40px" style={{marginTop:"20px",display:"flex", justifyContent:"center", alignItem:"center"}} src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/customer-support/fast.png" alt="Error" />
                    <p><span style={{fontWeight:"bolder"}}>2 hour</span><br/>average<br/>anytime,<br/>response time</p>
                </Box>
            </Box>
            <Button w="150px" h="50px" bg="#6161FF" borderRadius={"20px"} marginTop="50px" color="white" _hover={{cursor:"pointer"}} border={"transparent"}>
                Get Started
            </Button>
        </Box>
    </Box>

    <Box marginTop={"100px"}>
        <center>
            <img src="https://dapulse-res.cloudinary.com/image/upload/Generator_featured%20images/Home%20Page%20-%202022%20Rebrand/review-cards/stars.png" alt="Error" />
            <p id="HomePage-heading1-box8">An<span style={{fontWeight:"bolder"}}> award-winning</span> platform. <span style={{fontWeight:"bolder"}}> Loved</span> by customers.</p>
            <p>Based on 10,000+ customer reviews.</p>
        </center>
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

export default HomePage