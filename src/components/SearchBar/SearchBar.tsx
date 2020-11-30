import React, { useState } from 'react';

import { StyledInput } from './SearchBar.styles';

export interface SearchBarProps {}

const SearchBar = () => {
  const [query, setQuery] = useState<string>('');
  return (
    <StyledInput
      type="text"
      value={query}
      onChange={({ target: { value } }) => setQuery(value)}
    />
  );
};

export default SearchBar;
