// import React from 'react';
// import { Avatar, Wrap, WrapItem, Box, Text, VStack } from '@chakra-ui/react';
// import RoleTag from '../RoleTag/RoleTag';
// import type { RolesInterface } from '../RoleTag/roles';

// export interface ProjectBoxProps {
//   avatar: string;
//   title: string;
//   date: string;
//   description: string;
//   roles: RolesInterface;
//   images: string[];
// }

// const ProjectBox = ({
//   avatar,
//   title,
//   date,
//   description,
//   roles,
//   images = [],
// }: ProjectBoxProps) => (
//   <Box
//     w={images ? '100%' : '50%'}
//     p={4}
//     borderWidth="1px"
//     borderRadius="lg"
//     overflow="hidden"
//   >
//     <VStack spacing={2} align="left">
//       <Wrap spacing={2}>
//         <WrapItem>
//           <Avatar
//             size="sm"
//             name="Dan Abrahmov"
//             src="https://bit.ly/dan-abramov"
//           />
//         </WrapItem>
//         <WrapItem>{title}</WrapItem>
//       </Wrap>
//       <Text>{description}</Text>
//       <Wrap spacing={3}>
//         {Object.entries(roles).map(([key, args]) => (
//           <WrapItem key={key}>
//             <RoleTag {...args} />
//           </WrapItem>
//         ))}
//       </Wrap>
//       <Wrap spacing={2}>
//         {images.map((image) => (
//           <WrapItem>
//             <img src={image} alt={image} key={image} />
//           </WrapItem>
//         ))}
//       </Wrap>
//     </VStack>
//   </Box>
// );

// export default ProjectBox;
