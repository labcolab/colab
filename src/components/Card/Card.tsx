import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

export interface CardProps extends BoxProps {}

const Card = (props: CardProps) => (
  <Box px="4" py="5" rounded="lg" shadow="base" {...props} />
);
export default Card;
