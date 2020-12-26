import React from 'react';
import { Image, Box, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

export interface ImageSliderProps {
  images: string[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  const imageBox = React.createRef<HTMLDivElement>();

  const scroll = (dir: number) => {
    if (imageBox.current) {
      imageBox.current.scrollLeft += dir * 70;
    }
  };

  return (
    <Box
      textAlign="center"
      display="flex"
      flexDirection="column"
      justifyContent="space-around"
    >
      <Box>
        <IconButton
          aria-label="prev"
          icon={<ChevronLeftIcon />}
          onClick={() => scroll(-1)}
        />
        <Box
          verticalAlign="middle"
          display="inline-block"
          width="50%"
          whiteSpace="nowrap"
          overflowX="auto"
          overflowY="hidden"
          ref={imageBox}
        >
          {images.map((img) => (
            <Image
              className="image"
              key={img}
              width="70px"
              height="auto"
              src={img}
              alt={img}
              margin="10px"
              display="inline-block"
              lineHeight="100px"
            />
          ))}
        </Box>
        <IconButton
          aria-label="next"
          icon={<ChevronRightIcon />}
          onClick={() => scroll(1)}
        />
      </Box>
    </Box>
  );
};

export default ImageSlider;
