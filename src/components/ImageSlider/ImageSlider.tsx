import React from 'react';
import { Image, Box, IconButton, BoxProps } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

export interface ImageSliderProps extends BoxProps {
  images: string[];
}

const ImageSlider = ({ images, ...otherProps }: ImageSliderProps) => (
  <Box display="block" textAlign="left" {...otherProps}>
    {images.map((img) => (
      <Box
        key={img}
        width="100px"
        height="70px"
        display="inline-block"
        marginRight="2px"
        position="relative"
      >
        <Image
          src={img}
          alt={img}
          objectFit="cover"
          width="100%"
          height="100%"
          position="relative"
          display="block"
        />
        <IconButton
          aria-label="delete image"
          icon={<CloseIcon />}
          position="absolute"
          top={1}
          right={1}
          size="xs"
          borderRadius="full"
          colorScheme="orange"
        />
      </Box>
    ))}
  </Box>
);

export default ImageSlider;
