import { Heading, Text, VStack, Input, Stack, Field, Button, Flex } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import '../App.css'
import { useNavigate } from 'react-router'

const Login = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({ email:"", password:""})

    useEffect(() => {
        localStorage.setItem("user",JSON.stringify(formData))
      }, [formData]);

    const handleInput =(e)=>{
        const {name, value} = e.target;
        setFormData({...formData,[name]:value})
        // console.log(formData)
    }

    
    const handleSubmit=(e)=>{
        e.preventDefault();
        
       navigate("/profile")
      
        console.log(formData)

    }
    return (
        <VStack>
           <Flex direction={"column"} gap={1} >
           <Heading>Signin to Your Popx account</Heading>
           <Text  pb={3} fontSize={{base:"12px", sm:"15px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
          

          
           <form onSubmit={handleSubmit}> 
                <Flex direction={"column"} gap={"2"} w={"md"}>

                    <Field.Root>
                        <Field.Label className='label' color={'purple'}>Email Address</Field.Label>
                        <Input type="email" placeholder='Enter email address' onChange={handleInput}  value={formData.email}/>
                    </Field.Root>

                    <Field.Root>
                        <Field.Label className='label' color={'purple'}>Password</Field.Label>
                        <Input type="password" placeholder='Enter password' onChange={handleInput}/>
                    </Field.Root>
                    <Button size={"sm"} bg="gray"
                    type='submit'>Login</Button>
                </Flex>

            </form>
           </Flex>

        </VStack>


    )
}

export default Login
