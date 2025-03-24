import { Button, Heading, VStack, Text,  Flex } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router'

const Home = () => {
    const navigate = useNavigate();
  return (
    <VStack p={3}>
      <Flex direction={"column"} gap={1}>
      <Heading>Welcome to PopX</Heading>
      <Text pb={3} fontSize={{base:"12px", sm:"15px"}} >Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
      </Flex>
      <Flex direction={"column"} gap={2} w={"100%"}>
      <Button onClick={()=>navigate("/signup")} size={"sm"} fontSize={{base:"12px", sm:"15px"}} colorPalette={"purple"}>Create Account</Button>
      
      <Button  onClick={()=>navigate("/signin")}size={"sm"} bg={"#CEBAFB"}  fontSize={{base:"12px", sm:"15px"}} color={"black"}>Already Registered? Login</Button>
      </Flex>
    </VStack>
  )
}

export default Home
