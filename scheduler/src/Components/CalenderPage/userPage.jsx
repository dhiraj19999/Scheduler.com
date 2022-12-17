import { Box } from '@chakra-ui/react'
import React from 'react'
import BlueBox from './BlueBox'
import { Calender } from './Calender/Calender'


const UserPage = () => {
  return (
    <Box paddingTop={10} backgroundColor="#121833" color="white">
      
    <BlueBox/>
  <Calender/>
    </Box>
  )
}

export default UserPage
