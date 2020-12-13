import React from 'react';
import { Box, Image } from "@chakra-ui/react";

export interface CategoryCardProps {
    categoryName: string;
    categoryPicPath: string;
}

const CategoryCard = ({ categoryName, categoryPicPath }: CategoryCardProps) => {

  return (
    <Box w="165px" h="200px" borderWidth="1px" overflow="hidden">
      <Image w="165px" h="160px" src={categoryPicPath} />
      {categoryName}
    </Box>

  );
};

export default CategoryCard;
