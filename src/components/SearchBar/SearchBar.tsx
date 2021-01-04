import React from 'react';
import { InputRightElement, Input, InputGroup } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

export interface SearchBarProps {
  onChange: (value: string) => void;
  onSearch: () => void;
  value: string;
}

const SearchBar = ({ onChange, onSearch, value }: SearchBarProps) => (
  <InputGroup>
    <Input
      variant="unstyled"
      placeholder="Search"
      onChange={(e) => onChange(e.target.value)}
      value={value}
      boxShadow="md"
      size="lg"
      padding="12px 30px"
      rounded="3xl"
    />
    <InputRightElement onClick={onSearch}>
      <SearchIcon marginTop="8px" marginRight="30px" boxSize={5} />
    </InputRightElement>
  </InputGroup>
);

export default SearchBar;
