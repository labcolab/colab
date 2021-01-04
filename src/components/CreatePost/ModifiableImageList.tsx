import React from 'react';
import { Image, Box, IconButton, BoxProps } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

export interface ModifiableImageListProps extends Omit<BoxProps, 'onClick'> {
  images: File[];
  onClick?: (fileToRemove: File) => void;
}

const ModifiableImageList = ({
  images,
  onClick,
  ...otherProps
}: ModifiableImageListProps) => (
  <Box display="block" textAlign="left" {...otherProps}>
    {images.map((img, i) => (
      <Box
        // eslint-disable-next-line react/no-array-index-key
        key={i}
        width="100px"
        height="70px"
        display="inline-block"
        marginRight="2px"
        position="relative"
      >
        <Image
          src={URL.createObjectURL(img)}
          alt="uploaded image"
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
          onClick={onClick ? () => onClick(img) : undefined}
        />
      </Box>
    ))}
  </Box>
);

export default ModifiableImageList;
