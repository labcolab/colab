import React, { useState } from 'react';
import {
  Box,
  HStack,
  BoxProps,
  Tabs,
  TabPanels,
  TabPanel,
  ScaleFade,
} from '@chakra-ui/react';
import { LeftTriangleIcon, RightTriangleIcon } from '../../assets/icons';

export interface CarouselProps extends BoxProps {}

export interface CarouselItemProps extends BoxProps {}

export const CarouselItem = (props: CarouselItemProps) => <Box {...props} />;

const Carousel = ({
  children,
  w,
  h,
  width = w,
  height = h,
  ...otherProps
}: CarouselProps) => {
  const totalTabs = React.Children.toArray(children).filter(
    (child: any) => child.type.name === CarouselItem.name,
  ).length;
  const [tabIndex, setTabIndex] = useState(0);
  const [slideForward, setSlideForward] = useState(false);
  const incrementTabIndex = () => {
    setTabIndex((index) => (index + 1) % totalTabs);
    setSlideForward(true);
  };
  const decrememntTabIndex = () => {
    setTabIndex((index) => (index - 1 + totalTabs) % totalTabs);
    setSlideForward(false);
  };

  return (
    <HStack width={width} spacing={-4}>
      <LeftTriangleIcon
        rounded="full"
        shadow="md"
        w={8}
        h={8}
        p={2}
        bgColor="white"
        role="button"
        onClick={decrememntTabIndex}
      />
      <Box
        zIndex={-1}
        shadow="xl"
        rounded="xl"
        width={width}
        height={height}
        overflow="hidden"
        {...otherProps}
      >
        <Tabs index={tabIndex}>
          <TabPanels>
            {React.Children.map(children, (child: any, index) => {
              if (child.type.name === CarouselItem.name) {
                return (
                  <TabPanel p={0}>
                    <ScaleFade
                      in={tabIndex === index}
                      initialScale={slideForward ? 0 : 2}
                      unmountOnExit
                    >
                      {child}
                    </ScaleFade>
                  </TabPanel>
                );
              }
              return null;
            })}
          </TabPanels>
        </Tabs>
      </Box>
      <RightTriangleIcon
        rounded="full"
        shadow="md"
        w={8}
        h={8}
        p={2}
        bgColor="white"
        role="button"
        onClick={incrementTabIndex}
      />
    </HStack>
  );
};

export default Carousel;
