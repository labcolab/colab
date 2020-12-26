// eslint-disable-next-line react/jsx-props-no-spreading
import React from 'react';
import type { Story, Meta } from '@storybook/react';
import ImageSlider, { ImageSliderProps } from './ImageSlider';

export default {
  title: 'Components/ImageSlider',
  component: ImageSlider,
} as Meta;

const Template: Story<ImageSliderProps> = (args) => {
  const images = [
    'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*',
    'https://post.greatist.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
    'https://www.thesprucepets.com/thmb/sfuyyLvyUx636_Oq3Fw5_mt-PIc=/3760x2820/smart/filters:no_upscale()/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg',
    'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg',
    'https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp',
    'https://post.healthline.com/wp-content/uploads/2020/08/3180-Pug_green_grass-732x549-thumbnail-732x549.jpg',
  ];
  return <ImageSlider {...args} images={images} />;
};

export const Slider = Template.bind({});
Slider.args = {};
