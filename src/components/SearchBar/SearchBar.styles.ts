import styled from '@emotion/styled';
import { Input, InputGroup } from '@chakra-ui/react';

export const StyledInput = styled(Input)`
  position: absolute;
  padding: 12px 30px;
  box-shadow: 0px 5px 18px rgba(154, 154, 154, 0.12);
  border-radius: 100px;
`;

export const StyledInputGroup = styled(InputGroup)`

  svg {
    font-size: 1.2rem;
    margin-top: 8px;
    margin-right: 30px;
  };

  width: 500px;
`;
