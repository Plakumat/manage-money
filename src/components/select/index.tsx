import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { SelectChangeEvent } from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { ReactComponent as ArrowDown } from '../../assets/svg/arrow-down.svg';
import { palette, CustomSelect } from './customization';
import { ISelectProps, IOption } from '../../model';

const SelectComponent: React.FC<ISelectProps> = (props: ISelectProps) => {
  const { label, value, options, error, onChange, ...rest } = props;

  /**
   *
   * @param event
   */
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value);
  };

  return (
    <FormControl variant='filled' sx={{ width: '100%' }}>
      <InputLabel className='select-filled-label'>
        <Typography color={palette.status.default.placeholder}>
          {label}
        </Typography>
      </InputLabel>
      <CustomSelect
        labelId='select-filled-label'
        className='select-filled'
        value={value}
        onChange={handleChange}
        IconComponent={ArrowDown}
        error={error}
        disableUnderline
        {...rest}
      >
        {options?.map((option: IOption, index: number) => {
          return (
            <MenuItem key={index} value={option.value}>
              {option.label}
            </MenuItem>
          );
        })}
      </CustomSelect>
    </FormControl>
  );
};

export default SelectComponent;
