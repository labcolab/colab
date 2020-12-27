// eslint-disable-next-line react/jsx-props-no-spreading
import React, { useState } from 'react';
import type { Story, Meta } from '@storybook/react';
import ImageSlider, { ImageSliderProps, ImagesInterface } from './ImageSlider';

export default {
  title: 'Components/ImageSlider',
  component: ImageSlider,
} as Meta;

const images: ImagesInterface[] = [
  {
    id: 'first image',
    image:
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*',
  },
  {
    id: 'second image',
    image:
      'https://post.greatist.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg',
  },
  {
    id: 'third image',
    image:
      'https://www.thesprucepets.com/thmb/sfuyyLvyUx636_Oq3Fw5_mt-PIc=/3760x2820/smart/filters:no_upscale()/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg',
  },
  {
    id: 'fourth image',
    image: 'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg',
  },
  {
    id: 'fifth image',
    image:
      'https://i.insider.com/5484d9d1eab8ea3017b17e29?width=600&format=jpeg&auto=webp',
  },
];

const Template: Story<ImageSliderProps> = (args) => {
  const [selectedImages, setSelectedImages] = useState<ImagesInterface[]>(
    images,
  );

  const handleImageRemoved = (imageId: string) => {
    const newImages = selectedImages.filter((image) => image.id !== imageId);
    setSelectedImages(newImages);
  };

  return (
    <ImageSlider
      {...args}
      images={selectedImages}
      onClick={handleImageRemoved}
    />
  );
};

export const Slider = Template.bind({});
Slider.args = {};
