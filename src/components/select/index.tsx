import React, { useState, useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import { SelectChangeEvent } from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import { ReactComponent as ArrowDown } from '../../assets/svg/arrow-down.svg';
import { CustomSelect } from './customization';
import { ISelectProps } from '../../model';
import CircleIcon from '@mui/icons-material/Circle';

const SelectComponent: React.FC<ISelectProps> = (props: ISelectProps) => {
  const { label, value, options, error, onChange, ...rest } = props;
  const [currentValue, setCurrentValue] = useState('');

  /**
   *
   * @param event
   */
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value);
    setCurrentValue(event.target.value);
  };

  return (
    <FormControl variant='filled' sx={{ width: '100%' }}>
      <CustomSelect
        select
        id='select-filled-label'
        className='select-filled'
        label={label}
        SelectProps={{
          multiple: false,
          value: value,
          onChange: (e: SelectChangeEvent) => handleChange(e),
          renderValue: (selected: any) => selected,
          IconComponent: ArrowDown,
        }}
        error={error}
        {...rest}
      >
        {options?.map((option: string, index: number) => {
          return (
            <MenuItem key={index} value={option}>
              <FormControlLabel
                control={<Radio checked={currentValue === option} />}
                label={option}
              />
            </MenuItem>
          );
        })}
      </CustomSelect>
    </FormControl>
  );
};

export default SelectComponent;
