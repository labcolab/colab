import React, {useState} from 'react';
import { Button } from "@chakra-ui/react";

export interface CategoryBtnProps {
    categoryName: string;
}

const CategoryBtn = ({ categoryName }: CategoryBtnProps) => {
  const [clicked, setClicked] = useState<string>("purple");
  const handleIconClick = () => () => {
    setClicked(clicked==="purple"? "red" : "purple");
  };
  return (
    <Button onClick={() => handleIconClick()} colorScheme={clicked} size="md">
    {categoryName}
    </Button>
  );
};

export default CategoryBtn;
