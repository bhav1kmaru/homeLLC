import { Box, Container, Heading, Image, ListItem, OrderedList, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import SideBarAndNavbar from '../components/SideBarAndNavbar';

const Home = () => {
  return (
    <div>
      <SideBarAndNavbar>
        <Box
          maxHeight="600px"
          max-width="100%"
          backgroundImage="url('https://www.home.llc/guide/nikfiles/uploads/2021/08/pedro-lastra-Nyvq2juw4_o-unsplash-scaled.jpg')"
          backgroundPosition="50%"
          backgroundRepeat="no-repeat"
          bgSize="cover"
        >
          <Box pt="450px" width="70%" m="auto">
            <Box p="20px" pt="50px" bgColor="white">
              <Text fontSize="4xl" textAlign="center">
                US States And Metros, Ranked!
              </Text>
              <Text fontSize="sm" color="gray" textAlign="center">
                August 25,2021 LOCAL INSIGHTS
              </Text>
              <VStack gap="40px" textAlign="left">
                <Container maxW="70%" pt="40px">
                  <Text as="i" fontSize="2xl">
                    How good is your state on home ownership and education? How
                    does your metro perform on crime and demographics? Find out
                    all that and more, below!
                  </Text>
                </Container>
                <Text as="i" fontSize="2xl">
                  Just follow these steps:
                </Text>
                <OrderedList>
                  <ListItem>Select Any Tab</ListItem>
                  <ListItem>Filter Your State/Metro</ListItem>
                  <ListItem>Enjoy!</ListItem>
                </OrderedList>
                <Text fontSize='xl'>
                  For suggestions on improvements or to get access to the data,
                  reach out to sid@home.llc.
                </Text>
              </VStack>
            </Box>
          </Box>
        </Box>
      </SideBarAndNavbar>
    </div>
  );
}

export default Home