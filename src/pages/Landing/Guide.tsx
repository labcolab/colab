import React from 'react';
import {
  Container,
  Box,
  VStack,
  StackProps,
  Text,
  Image,
  SimpleGrid,
} from '@chakra-ui/react';

interface StepCardProps extends StackProps {
  image: string;
  title: string;
  description: string;
}

const StepCard = ({ image, title, description }: StepCardProps) => (
  <VStack
    spacing={6}
    bgColor="white"
    p={{ base: 16, md: 8, lg: 16 }}
    shadow="xl"
    rounded="xl"
  >
    <Image w="200px" h="200px" bgColor="gray.200" src={image} />
    <Text fontSize="lg" fontWeight="500">
      {title}
    </Text>
    <Text fontSize="sm" textAlign="center" color="gray.600">
      {description}
    </Text>
  </VStack>
);

const LandingGuide = () => (
  <Box bgColor="#FCFAF6" width="100%">
    <Container maxW="7xl" centerContent py={20}>
      <VStack spacing={4}>
        <Text fontSize="4xl">Okay... So how does it work?</Text>
        <Text fontSize="lg" color="gray.500">
          Well, it is simple really, Take a look.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} paddingTop={10}>
          <StepCard
            image=""
            title="Title of Step 1"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. At donec eleifend eu est, et, cras faucibus amet. Diam lorem nunc amet tellus habitant felis."
          />
          <StepCard
            image=""
            title="Title of Step 2"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. At donec eleifend eu est, et, cras faucibus amet. Diam lorem nunc amet tellus habitant felis."
          />
          <StepCard
            image=""
            title="Title of Step 3"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. At donec eleifend eu est, et, cras faucibus amet. Diam lorem nunc amet tellus habitant felis."
          />
        </SimpleGrid>
      </VStack>
    </Container>
  </Box>
);

export default LandingGuide;
