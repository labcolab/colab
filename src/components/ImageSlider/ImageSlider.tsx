import React from 'react';
import { Image, Box, IconButton, BoxProps } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

export interface ImagesInterface {
  id: string;
  image: string;
}

export interface ImageSliderProps extends Omit<BoxProps, 'onClick'> {
  images: ImagesInterface[];
  onClick?: (fileId: string) => void;
}

const ImageSlider = ({ images, onClick, ...otherProps }: ImageSliderProps) => (
  <Box display="block" textAlign="left" {...otherProps}>
    {images.map((img) => (
      <Box
        key={img.id}
        width="100px"
        height="70px"
        display="inline-block"
        marginRight="2px"
        position="relative"
      >
        <Image
          src={img.image}
          alt={img.image}
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
          onClick={onClick ? () => onClick(img.id) : undefined}
        />
      </Box>
    ))}
  </Box>
);

export default ImageSlider;
