import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Image,
  Toast,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { login, logout } from "../redux/auth/auth.actions";


export default function Login() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const {state}=useLocation()
  const navigate=useNavigate()
  const {loading,error,isLoggedIn}=useSelector((store)=>store.auth)
  const dispatch=useDispatch()

  const handleSubmit=async()=>{
    dispatch(login(userDetails))
  }

  useEffect(()=>{
    if(isLoggedIn){
   
        navigate('/')
      
    }
  },[isLoggedIn])
 

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
            height="150px"
            src="https://www.home.llc/guide/nikfiles/uploads/2021/07/homellc-Logo.png"
          />
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          <Text style={{display:error?"block":"none"}} color='red'>Wrong Credentials, please enter correct details to login</Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg="white"
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
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
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                value={userDetails.password}
                onChange={(e) => {
                  setUserDetails({
                    ...userDetails,
                    password: e.target.value,
                  });
                }}
                type="password"
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={"blue.400"}>Forgot password?</Link>
              </Stack>
              <Button
                bg="#ef5373"
                color={"white"}
                _hover={{
                  bg: "#f3c3c5",
                }}
                onClick={handleSubmit}
              >
                Sign in
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                New user?{" "}
                <NavLink to="/register" style={{ color: "#ef5373" }}>
                  Register
                </NavLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
