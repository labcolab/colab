import styled from '@emotion/styled';
import { Tag } from '@chakra-ui/react';

// eslint-disable-next-line import/prefer-default-export
export const StyledTag = styled(Tag)`

  img {   
    :first-child {
      margin-right: 8px;
    }
    :last-child {
      margin-left: 8px;
    }
  }

`;
