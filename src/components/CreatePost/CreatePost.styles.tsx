import styled from '@emotion/styled';
import {
  Textarea,
  Container,
  Text,
  CloseButton,
  IconButton,
  Button,
  Input,
} from '@chakra-ui/react';

export const StyledTitleInput = styled(Input)`
  border: none;
`;

export const StyledDescriptionInput = styled(Textarea)`
  height: 100px;
  border: none;
`;

export const StyledBox = styled(Container)`
  position: fixed;
  left: 0;
  right: 0;
  overflow: auto;
`;

export const StyledText = styled(Text)`
  white-space: nowrap;
  text-align: left;
`;

export const StyledCloseButton = styled(CloseButton)`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 2px;
  margin-right: 2px;
  color: orange;
`;

export const StyledImageButton = styled(IconButton)`
  position: absolute;
  left: 0;
  bottom: 0;
  margin-bottom: 8px;
`;

export const StyledPostButton = styled(Button)`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 8px;
  margin-right: 20px;
  color: orange;
  width: 150px;
  height: 30px;
`;
