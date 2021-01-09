import React from 'react';
import type { Story, Meta } from '@storybook/react';
import { Center } from '@chakra-ui/react';
import Carousel, { CarouselItem, CarouselProps } from './Carousel';

export default {
  title: 'Components/Carousel',
  component: Carousel,
} as Meta;

const Template: Story<CarouselProps> = (args) => <Carousel {...args} />;

export const Default = Template.bind({});
Default.args = {
  w: '500px',
  h: '200px',
  children: [
    <CarouselItem key="Slide 1">
      <Center h="200px" fontSize="6xl">
        Slide 1
      </Center>
    </CarouselItem>,
    <CarouselItem key="Slide 2">
      <Center h="200px" fontSize="6xl">
        Slide 2
      </Center>
    </CarouselItem>,
    <CarouselItem key="Slide 3">
      <Center h="200px" fontSize="6xl">
        Slide 3
      </Center>
    </CarouselItem>,
  ],
};
