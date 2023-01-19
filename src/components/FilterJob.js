import React from 'react';
import {Box} from '@material-ui/core';
import Btn from '../elements/Button';
import Textfield from '../elements/Input';
import CheckBox from '../elements/Checkbox';

const FilterJob = ({
  description,
  location,
  checkedBox,
  onClickFilter,
  onChangeCheck,
  onChangeDesc,
  onChangeLocation,
}) => {
  return (
    <Box
      display="flex"
      alignContent="center"
      alignItems="center"
      justifyContent="space-around"
      mt={3}
    >
      <Box>
        <Textfield
          label="Job Description"
          value={description}
          onChange={onChangeDesc}
          placeholder="Search by search term, such as ruby or java"
        />
      </Box>
      <Box ml={2.1}>
        <Textfield
          label="Location"
          value={location}
          onChange={onChangeLocation}
          placeholder="Search by city name, zip code, or other location"
        />
      </Box>
      <Box ml={2.1}>
        <CheckBox
          label="Full Time Only"
          checked={checkedBox}
          onChangeCheck={onChangeCheck}
        />
      </Box>
      <Box ml={1.6}>
        <Btn onClick={onClickFilter}>Search</Btn>
      </Box>
    </Box>
  );
};

export default FilterJob;
