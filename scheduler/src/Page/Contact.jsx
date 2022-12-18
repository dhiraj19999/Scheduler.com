import React from 'react'
import { useState } from 'react'
import { Button, Grid, GridItem } from '@chakra-ui/react'
import { Input,Text,InputGroup,InputLeftElement,Image } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { PhoneIcon } from '@chakra-ui/icons'
import emailjs from '@emailjs/browser'
import { useToast } from '@chakra-ui/react'

import "./Contact.css"
function Contact() {
  
  const [first,setFirst]=useState('')
  const [last,setLast]=useState('')
  const [email,setEmail]=useState('')
  const [job,setJob]=useState('')
  const [number,setNumber]=useState('')
  const [company,setCompany]=useState('')
  const [message,setMessage]=useState('')
const [phone,setPhone]=useState('')

let  toast=useToast()

  const form={

    from_name:first+" "+ last,
    email_id:email,
    message:`Job Role is ${job}, company name is ${company},number of employ in company ${number},${message},my number is ${phone}`
  
  }
  
  
  const sendEmail=()=>{

    emailjs.send('service_amv7b8j','template_imu5bv7',form,'EzPjmd_YlK35hXceC').then((res)=>{
  
      return res
    }).then((data)=>{
     
  return toast({
        title: 'Message Sent successfully',
        position: 'top',
        isClosable: true,
        status:'success'
      })
    })
  
    setFirst('')
    setLast('')
    setEmail('')
   setJob('')
    setNumber('')
    setCompany('')
   setMessage("")
   setPhone("")
  }
  
    return (
    <div>
      

<Grid templateColumns='repeat(2, 1fr)' gap={6}  mt='30px' >

 <Box  w='88%' ml='50px' h='783px' mt='60px'  borderBottom={"8px solid "} borderLeft="15px solid " borderRadius='8px' borderLeftColor={'blue.200'}  borderBottomColor={'blue.200'}> 
  <GridItem w='590px' h='790px' mt='-45px' borderRadius={'20px'} className='grid'>

<Text  fontSize='25px' mt={'30px'} pt='30px' ml='-205px'>Contact our Sales team</Text>

<Grid templateColumns='repeat(2, 1fr)' gap={6} mt='25px' >
    <Text ml='-70px'>First Name</Text> <Text ml='-200px'>Last Name</Text>
</Grid>

<Input size='md' w='210px' mt='10px' value={first} onChange={(e)=>setFirst(e.target.value)}/>

<Input size='md' w='210px' ml='40px' mt='10px'  value={last} onChange={(e)=>setLast(e.target.value)}/>
 
 
 
<Grid templateColumns='repeat(2, 1fr)' gap={6}  mt='30px'>
    <Text ml='-70px'>Work email</Text> <Text ml='-200px'>Job title
</Text>
</Grid>

<Input placeholder='name@company.com' size='md' w='210px' mt='10px'  value={email} onChange={(e)=>setEmail(e.target.value)}/>

<Input  size='md' w='210px' ml='40px' mt='10px'  value={job} onChange={(e)=>setJob(e.target.value)}/>
 
 
<Text ml='-355px' mt='30px'>Phone number</Text>
<InputGroup mt='10px'>
    <InputLeftElement
      pointerEvents='none'
      children={<PhoneIcon color='green.300' ml='130px'/>}
    />
    <Input type='tel' placeholder='Phone number'  size='md' w='460px' ml='70px' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
  </InputGroup>



<Grid templateColumns='repeat(2, 1fr)' gap={6}  mt='30px'>
    <Text ml='-34px'>Company name</Text> <Text ml='-173px'>Company size
</Text>
</Grid>

<Input  size='md' w='210px' mt='10px' value={company} onChange={(e)=>setCompany(e.target.value)}/>

<Input  size='md' w='210px' ml='40px' mt='10px' value={number} onChange={(e)=>setNumber(e.target.value)} />



<Text ml='-260px' mt='30px'>How can our team help you?
</Text>
<Input  size='md' w='460px' ml='-1px' mt='10px' h='100px'  value={message} onChange={(e)=>setMessage(e.target.value)}/>
 

<Text fontSize='14px' mt='25px' ml='120px' w='350px'>By clicking submit, I acknowledge receipt of the Schedular.com Privacy policy</Text>

<Button  onClick={sendEmail}  bg='blue.500' _hover={{bg:'violet'}}  w='120px' mt='26px' ml='-50px'>Submit</Button>
  </GridItem>
  </Box>
 

  
 
 
 
 
  <GridItem w='100%' h='800px' mt='40px' >

<Text fontSize={'31px'} fontWeight='bold' w='550px' ml='70px'>Align, collaborate and gain visibility into your work in one connected space</Text>



<Grid templateColumns='repeat(2, 1fr)' gap={6}  mt='30px'>

<Image ml='80px' mt='10px' src='https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto,w_37/remote_mondaycom_static/img/contact-sales/countries_icon.png'/>
<Text ml='-160px' mt='20px' fontSize={'18px'} color={'gray'} w='330px' alignItems={'center'}>Meet with a product consultant to see how monday.com can fit your exact business needs</Text>


</Grid>
<Text color={'gray'} ml='60px' mt='-50px' w='90px'>Across 190+ countries</Text>








<Grid templateColumns='repeat(2, 1fr)' gap={6}  mt='30px'>

<Image ml='80px' mt='10px' src='https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto,w_37/remote_mondaycom_static/img/contact-sales/industries_icon.png'/>
<Text ml='-150px' mt='20px' fontSize={'18px'} color={'gray'} w='330px' alignContent={'center'}>Explore our tailored pricing plans based on your goals and priorities</Text>


</Grid>
<Text color={'gray'} ml='50px' mt='-30px' w='110px' >152k+ paying customers</Text>











<Grid templateColumns='repeat(2, 1fr)' gap={6}  mt='30px'>

<Image ml='80px' mt='10px' src='https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto,w_37/remote_mondaycom_static/img/contact-sales/industries_icon.png'/>
<Text ml='-150px' mt='20px' fontSize={'18px'} color={'gray'} w='352px' >Boost productivity from day one by building your team's ideal workflow</Text>


</Grid>
<Text color={'gray'} ml='50px' mt='-30px' w='110px'>Serving 200+ industries</Text>



<Box w='500px' h='210px' bg='#f0f3ff' ml='70px' mt='30px'>


<Text color={'gray'} pt='30px' fontSize={'18px'} w='400px' ml='50px'>' Schedular.com Work OS saves us about 1,850 hrs of staff time and somewhere in the range of $50,000 a month.”</Text>

<Text color={'gray'} mt='20px' w='400px' ml='50px'>Stefana Muller | Senior Director, CTO Product and Program Office | Oscar</Text>

</Box>






<Grid templateColumns='repeat(5, 1fr)' gap={2}  mt='30px'>

<Image w='40px' ml='70px' src='https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/wix.png'/>

<Image w='40px' ml="30px" src='https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/nhl.png'/>

<Image w='90px' ml='-10px' mt='10px' src='https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/mars_wrigley.png'/>

<Image w='90px' ml='-10px'  mt='8px' src='https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/canva.png'/>

<Image w='60px' ml='-10px' mt='4px' src='https://dapulse-res.cloudinary.com/image/upload/f_auto,q_auto/remote_mondaycom_static/img/customers/logos-v2/coca_cola.png'/>



</Grid>






  </GridItem>
  
</Grid>



    </div>
  )
}

export default Contact
