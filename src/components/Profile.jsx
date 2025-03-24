import { Box, Grid, GridItem, Heading, Text, VStack,Image } from '@chakra-ui/react'
import React from 'react'

const Profile = () => {
  return (
   <VStack p={3} >
    <Heading>Account Settings</Heading>
    <Grid templateColumns="1fr 3fr" alignItems={"center"} gap={"8"}>
        <GridItem>
                    <Image src='https://cdn-icons-png.flaticon.com/512/9159/9159760.png' fit="fill" border={"2px solid red"} h={"70px"} w={"70px" } borderRadius={"50%"} />
        </GridItem>
        <GridItem>
            <Text fontWeight={"bold"} fontSize={{base:"12px" , sm:"15px"}}>Marry Doe</Text>
            <Text fontSize={{base:"12px" , sm:"15px"}}>Marry@Gmail.com</Text>
            
        </GridItem>
    </Grid>
    <Text fontSize={{base:"12px" , sm:"15px"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ab? Necessitatibus distinctio in quam minima totam similique alias aspernatur deserunt.</Text>
   </VStack>
  )
}

export default Profile
