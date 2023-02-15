import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Image,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import {BiShow,BiHide} from 'react-icons/bi'
import axios from 'axios'
import { Navigate, NavLink } from "react-router-dom";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [userDetails, setUserDetails] = useState({first_name: '', last_name:'', email: '', password:''})
  const [registered,setRegistered]=useState(false)
    const toast = useToast();

  const handleSubmit=async(userDetails)=>{
    const response = await axios.post(`http://localhost:8080/users/register`,userDetails);
    console.log(response)
   
     toast({
       title: `${response.data}`,
       status: response.data!=='Registered'?"error":"success",
       duration: 9000,
       isClosable: true,
     });
     
      if(response.data=='Registered'){
        setRegistered(true)
      }
   
  }

  if(registered){
    
    return <Navigate to='/login' />
  }

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg="gray.50"
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Image
            height="100px"
            src="https://www.home.llc/guide/nikfiles/uploads/2021/07/homellc-Logo.png"
          />
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg="white"
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input
                    value={userDetails.first_name}
                    onChange={(e) => {
                      setUserDetails({
                        ...userDetails,
                        first_name: e.target.value,
                      });
                    }}
                    type="text"
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    value={userDetails.last_name}
                    onChange={(e) => {
                      setUserDetails({
                        ...userDetails,
                        last_name: e.target.value,
                      });
                    }}
                    type="text"
                  />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                value={userDetails.email}
                onChange={(e) => {
                  setUserDetails({
                    ...userDetails,
                    email: e.target.value,
                  });
                }}
                type="email"
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  value={userDetails.password}
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => {
                    setUserDetails({
                      ...userDetails,
                      password: e.target.value,
                    });
                  }}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <BiShow /> : <BiHide />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg="#ef5373"
                color={"white"}
                _hover={{
                  bg: "#f3c3c5",
                }}
                onClick={() => {
                  handleSubmit(userDetails);
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <NavLink to="/login" style={{ color: "#ef5373" }}>
                  Login
                </NavLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
