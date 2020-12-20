import styled from '@emotion/styled';
import {
  Textarea,
  Container,
  Text,
  CloseButton,
  IconButton,
  Button,
  Input,
  Stack,
} from '@chakra-ui/react';

export const StyledTitleInput = styled(Input)`
  border: none;
  font-size: 20px;
  // &:focus {
  //   outline: none;
  //   box-shadow: 0px 0px 2px white;
  // }
`;

export const StyledDescriptionInput = styled(Textarea)`
  height: 100px;
  border: none;
  font-size: 14px; //dont use exact numbers
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px white;
  }
`;

export const StyledBox = styled(Box)`
  // position: fixed;
  // left: 0;
  // right: 0;
  // overflow: auto;
`;

export const StyledText = styled(Text)`
  font-size: 14px;
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
  // position: absolute;
  // left: 0;
  // bottom: 0;
  // margin-bottom: 5px;
  // margin-left: 5px;
`;

export const StyledPostButton = styled(Button)`
  // position: absolute;
  // bottom: 0;
  // right: 0;
  // margin-bottom: 10px;
  // margin-right: 10px;
  // color: orange;
  // width: 150px;
  // height: 30px;
`;

export const StyledFileInput = styled(Input)`
  margin-left: 200px;
  margin-bottom: 200px;
`;

export const StyledButtonRow = styled(Stack)`
  padding-left: 2px;
  padding-right: 10px;
`;
