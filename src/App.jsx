import React from 'react'
import Home from './components/Home'
import { VStack } from '@chakra-ui/react'
import { Route, Routes } from 'react-router'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Profile from './components/Profile'

const App = () => {
  return (
    <VStack h={'90vh'} alignItems={"center"} justifyContent={"center"}> 
     
   {/* <Home/> */}
     <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/signin' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/profile' element={<Profile/>}/>
     </Routes>
    </VStack>
  )
}

export default App
