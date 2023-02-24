import { useDispatch } from 'react-redux';
import { Input, FormControl, FormLabel } from '@chakra-ui/react';

import { setFilter } from 'redux/contacts/filtersSlice';

const Filter = () => {
  const dispatch = useDispatch();

  const onChange = e => {
    const value = e.target.value.toLowerCase();
    dispatch(setFilter(value));
  };

  return (
    <FormControl id="filter">
      <FormLabel>Find contacts by name or phone number</FormLabel>
      <Input type="text" name="filter" onChange={onChange} />
    </FormControl>
  );
};

export default Filter;
