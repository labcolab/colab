import React from 'react';
import { VStack } from '@chakra-ui/react';
import LandingIntro from './Intro';
import LandingAbout from './About';
import LandingGuide from './Guide';
import LandingTestimonials from './Testimonials';
import LandingFooter from './Footer';

const LandingPage = () => (
  <VStack spacing={0}>
    <LandingIntro />
    <LandingAbout />
    <LandingGuide />
    <LandingTestimonials />
    <LandingFooter />
  </VStack>
);

export default LandingPage;
