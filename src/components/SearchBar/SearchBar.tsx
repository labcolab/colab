import React, { useCallback } from 'react';
import { InputRightElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { StyledInput, StyledInputGroup } from './SearchBar.styles';

export interface SearchBarProps {
  onChange: (value: string) => void;
  value: string;
}

const SearchBar = ({ onChange, value }: SearchBarProps) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    },
    [onChange],
  );

  return (
    <StyledInputGroup>
      <StyledInput
        variant="unstyled"
        placeholder="Search"
        onChange={handleChange}
        value={value}
      />
      <InputRightElement>
        <SearchIcon />
      </InputRightElement>
    </StyledInputGroup>
  );
};

export default SearchBar;
