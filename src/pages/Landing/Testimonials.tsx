import React from 'react';
import {
  Container,
  Box,
  HStack,
  VStack,
  Stack,
  Text,
  SimpleGrid,
  useBreakpointValue,
  Flex,
  Spacer,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Carousel, { CarouselItem } from '../../components/Carousel/Carousel';
import FemaleImage from '../../assets/images/FemaleImage';
import CardsImage from '../../assets/images/CardsImage';
import BarsImage from '../../assets/images/BarsImage';

interface TestimonialProps {
  image: React.ElementType;
  testimonial: string;
  name: string;
  identity: string;
}

const Testimonial = ({
  image: TestimonialImage,
  testimonial,
  name,
  identity,
}: TestimonialProps) => (
  <Stack direction={{ base: 'column', md: 'row' }}>
    <SimpleGrid>
      <Box
        w={{ base: '100%', md: '350px' }}
        transform={{
          base: 'skew(-20deg) translateX(-25px)',
          md: 'skew(-20deg) translateX(-50px)',
        }}
        background={{ base: '#00000000', md: '#E6F0FF' }}
        gridArea="1 / 1"
      />
      <TestimonialImage
        zIndex={2}
        w="200px"
        h="200px"
        gridArea="1 / 1"
        mx={{ base: 'auto', md: 10 }}
        paddingTop={4}
      />
    </SimpleGrid>
    <VStack
      spacing={1}
      align="left"
      p={8}
      paddingTop={{ base: 0, md: 2, lg: 4 }}
    >
      <Text py={4} fontSize="lg">
        “{testimonial}”
      </Text>
      <Text fontWeight="500">{name}</Text>
      <Text fontSize="sm" color="gray.500">
        {identity}
      </Text>
    </VStack>
  </Stack>
);

const LandingTestimonials = () => {
  const base = useBreakpointValue({ base: true, sm: false });
  const CustomSignBox = (base ? VStack : Flex) as typeof Box;
  return (
    <Box w="100%">
      <Container maxW="5xl" centerContent py={20}>
        <VStack spacing={16} w="100%">
          <VStack spacing={4}>
            <Text fontSize="4xl">Here is what users have to say</Text>
            <Text fontSize="lg" color="gray.500">
              We had a please of providing this platform of students.
            </Text>
          </VStack>
          <Carousel
            w="100%"
            h={{ base: '440px', sm: '375px', md: '200px' }}
            bgColor="white"
          >
            <CarouselItem>
              <Testimonial
                image={FemaleImage}
                testimonial="Colab is a fantastic way to buff up my portfolio while meeting new friends!"
                name="Shelly Wang"
                identity="3rd Year Student at The University of British Columbia"
              />
            </CarouselItem>
            <CarouselItem>
              <Testimonial
                image={FemaleImage}
                testimonial="Colab helped me find project partners really quickly"
                name="Andrew Fletcher"
                identity="2nd Year Student at The University of British Columbia"
              />
            </CarouselItem>
            <CarouselItem>
              <Testimonial
                image={FemaleImage}
                testimonial="As someone who struggles with approaching people, Colab helped me to get into projects."
                name="Harnoor Singh"
                identity="4th Year Student at The University of British Columbia"
              />
            </CarouselItem>
          </Carousel>

          <SimpleGrid columns={{ base: 1, md: 2 }} w="100%" px={4} spacing={8}>
            <HStack
              overflow="hidden"
              w="100%"
              shadow="xl"
              rounded="xl"
              bgColor="white"
            >
              <CardsImage w={24} h={24} marginLeft={-6} />
              <VStack spacing={2} align="left" padding={5}>
                <Text
                  color="orangeText"
                  textTransform="uppercase"
                  fontSize="sm"
                >
                  See THE TEAM BEHIND THIS PROJECT
                </Text>
                <Text color="gray.500" fontSize="sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Risus, vitae vel tellus nisl. Vitae commodo lorem donec id
                  quam nulla elementum.
                </Text>
              </VStack>
            </HStack>
            <HStack
              overflow="hidden"
              w="100%"
              shadow="xl"
              rounded="xl"
              bgColor="white"
            >
              <BarsImage w={24} h={24} marginLeft={-6} />
              <VStack spacing={2} align="left" padding={5}>
                <Text
                  color="orangeText"
                  textTransform="uppercase"
                  fontSize="sm"
                >
                  read our case studies
                </Text>
                <Text color="gray.500" fontSize="sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Risus, vitae vel tellus nisl. Vitae commodo lorem donec id
                  quam nulla elementum.
                </Text>
              </VStack>
            </HStack>
          </SimpleGrid>
          <CustomSignBox w="100%" px={4}>
            <VStack align="left">
              <Text color="orangeText" fontSize="2xl">
                What are you waiting for?
              </Text>
              <Text fontSize="lg">Register your account now!</Text>
            </VStack>
            <Spacer />
            <Stack direction={{ base: 'column', md: 'row' }}>
              <Link to="/signup" style={{ border: 'none' }}>
                <Box
                  display="inline-block"
                  px={{ base: 2, md: 4 }}
                  py={{ base: 1, md: 2 }}
                  fontSize="md"
                  fontWeight="500"
                  bgGradient="linear(to-r, createAccountButtonLeft, createAccountButtonRight)"
                  color="white"
                  userSelect="none"
                  shadow="lg"
                  textTransform="uppercase"
                  rounded="md"
                  w="205px"
                  textAlign="center"
                >
                  Create an account
                </Box>
              </Link>
              <Link to="/signin" style={{ border: 'none' }}>
                <Box
                  display="inline-block"
                  px={{ base: 2, md: 4 }}
                  py={{ base: 1, md: 2 }}
                  fontSize="md"
                  fontWeight="500"
                  bg="white"
                  color="orangeText"
                  userSelect="none"
                  shadow="xs"
                  textTransform="uppercase"
                  rounded="lg"
                  w="205px"
                  textAlign="center"
                >
                  Sign in
                </Box>
              </Link>
            </Stack>
          </CustomSignBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default LandingTestimonials;
