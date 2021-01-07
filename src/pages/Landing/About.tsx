import React, { ElementType } from 'react';
import {
  Container,
  Box,
  VStack,
  HStack,
  Text,
  Image,
  SimpleGrid,
  SimpleGridProps,
} from '@chakra-ui/react';
import { HeartIcon } from '../../assets/icons';

interface AboutIconBoxProps {
  icon: ElementType;
  title: string;
  color: string;
  description: string;
}

interface AboutImageBoxProps extends SimpleGridProps {
  hint: string;
  title: string;
  description: string;
  image: string;
  // eslint-disable-next-line react/require-default-props
  flip?: boolean;
}

const AboutIconBox = ({
  icon,
  color,
  title,
  description,
}: AboutIconBoxProps) => {
  const BoxIcon = icon;
  return (
    <HStack align="top" my={6} mx={4} spacing={4}>
      <Box>
        <Box>
          <BoxIcon
            backgroundColor={`${color}.400`}
            w={7}
            h={7}
            p={1}
            color="white"
            rounded="md"
          />
        </Box>
      </Box>
      <VStack align="left">
        <Text fontWeight="500" fontSize="lg">
          {title}
        </Text>
        <Text color="gray.500">{description}</Text>
      </VStack>
    </HStack>
  );
};

const AboutImageBox = ({
  hint,
  title,
  description,
  image,
  flip = false,
  ...otherProps
}: AboutImageBoxProps) => (
  <SimpleGrid columns={{ base: 1, md: 2 }} {...otherProps} width="100%" my={10}>
    <VStack
      maxW="500px"
      marginLeft={{ base: 'auto', md: flip ? 'auto' : 0 }}
      marginRight={{ base: 'auto', md: flip ? 0 : 'auto' }}
      align="left"
      spacing={2}
      gridColumn={{ base: 1, md: flip ? 2 : 1 }}
    >
      <Text
        color="orangeText"
        fontSize="md"
        fontWeight="500"
        textTransform="uppercase"
      >
        {hint}
      </Text>
      <Text fontWeight="500" fontSize="2xl" textTransform="uppercase">
        {title}
      </Text>
      <Text color="gray.500" fontSize="md">
        {description}
      </Text>
    </VStack>
    <Image
      w="375px"
      h="275px"
      marginLeft={{ base: 'auto', md: flip ? 0 : 'auto' }}
      marginRight={{ base: 'auto', md: flip ? 'auto' : 0 }}
      marginTop={{ base: '40px', md: 0 }}
      gridColumn={{ base: 1, md: flip ? 1 : 2 }}
      gridRow={{ base: 2, md: 1 }}
      bg="gray.300"
    />
  </SimpleGrid>
);

const LandingAbout = () => (
  <Box>
    <Container maxW="6xl" centerContent py={20}>
      <VStack spacing={12}>
        <VStack spacing={4}>
          <Text fontSize="4xl">So... What is this platform all about?</Text>
          <Text fontSize="lg" color="gray.500">
            TL;DR Well... it’s basically like Pinterest, but for students
            looking to do a digital project.
          </Text>
        </VStack>
        <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }}>
          <AboutIconBox
            icon={HeartIcon}
            color="purple"
            title="Create posts"
            description="We have great user interface that makes navigating accountiing tasks fun and easy."
          />
          <AboutIconBox
            icon={HeartIcon}
            color="orange"
            title="Recruit team members"
            description="We have great user interface that makes navigating accountiing tasks fun and easy."
          />
          <AboutIconBox
            icon={HeartIcon}
            color="green"
            title="Collaborators"
            description="We have great user interface that makes navigating accountiing tasks fun and easy."
          />
          <AboutIconBox
            icon={HeartIcon}
            color="pink"
            title="Categories"
            description="We have great user interface that makes navigating accountiing tasks fun and easy."
          />
          <AboutIconBox
            icon={HeartIcon}
            color="yellow"
            title="Chat feature"
            description="We have great user interface that makes navigating accountiing tasks fun and easy."
          />
          <AboutIconBox
            icon={HeartIcon}
            color="blue"
            title="100% free"
            description="We have great user interface that makes navigating accountiing tasks fun and easy."
          />
        </SimpleGrid>
        <AboutImageBox
          hint="CUSTOM CORPORATE CARDS"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor nunc, et elit. At tristique gravida sed risus gravida ridiculus urna integer. Tortor tortor, tristique elit donec tellus, quisque sed. Sit nec eleifend lectus netus vestibulum arcu."
          image=""
        />
        <AboutImageBox
          hint="CUSTOM CORPORATE CARDS"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor nunc, et elit. At tristique gravida sed risus gravida ridiculus urna integer. Tortor tortor, tristique elit donec tellus, quisque sed. Sit nec eleifend lectus netus vestibulum arcu."
          image=""
          flip
        />
        <AboutImageBox
          hint="CUSTOM CORPORATE CARDS"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem."
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor nunc, et elit. At tristique gravida sed risus gravida ridiculus urna integer. Tortor tortor, tristique elit donec tellus, quisque sed. Sit nec eleifend lectus netus vestibulum arcu."
          image=""
        />
      </VStack>
    </Container>
  </Box>
);

export default LandingAbout;
