import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Icon,
  Input,
  Select,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import Flag from 'react-world-flags';
import { AsYouType } from 'libphonenumber-js';

import { getCountryTelCode } from 'components/Countries/Countries';

const PhoneNumberInput = ({
  size,
  value,
  country,
  options,
  onChange,
  placeholder,
  ...rest
}) => {
  const [number, setNumber] = useState(value || '');
  const [selectedCountry, setSelectedCountry] = useState(country || '');
  const [countryCode, setCountryCode] = useState(
    getCountryTelCode(country) || ''
  );

  useEffect(() => {
    setSelectedCountry(country);
    setCountryCode(getCountryTelCode(country));
  }, [country]);

  const onCountryChange = e => {
    const value = e.target.value;
    const code = getCountryTelCode(value);
    const parsedNumber = new AsYouType().input(`${code}${number}`);

    setCountryCode(code);
    setSelectedCountry(value);
    onChange(parsedNumber);
  };

  const onPhoneNumberChange = e => {
    const value = e.target.value;
    const parsedNumber = new AsYouType().input(`${countryCode}${value}`);

    setNumber(value);
    onChange(parsedNumber);
  };

  return (
    <InputGroup size={size} {...rest}>
      <InputLeftElement width="4rem">
        <Select
          top="0"
          left="0"
          zIndex={1}
          bottom={0}
          opacity={0}
          height="100%"
          position="absolute"
          value={selectedCountry}
          onChange={onCountryChange}
        >
          <option value="" />
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
        <Flex pl={2} width="100%" alignItems="center">
          {selectedCountry ? (
            <Box mr="4px" width="50%" flex={1}>
              <Flag height="1rem" code={selectedCountry || ''} />
            </Box>
          ) : (
            <Icon name="phone" />
          )}
          <Icon name="chevron-down" />
        </Flex>
      </InputLeftElement>
      <Input
        pl="4rem"
        type="tel"
        value={number}
        pattern="[0-9]"
        placeholder={placeholder}
        onChange={onPhoneNumberChange}
      />
    </InputGroup>
  );
};

PhoneNumberInput.defaultProps = {
  options: [],
  size: 'md',
};

export default PhoneNumberInput;
