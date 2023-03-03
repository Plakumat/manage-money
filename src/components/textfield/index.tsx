import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { palette, CustomTextField } from './customization';
import { IInputProps } from '../../model/';

const InputComponent: React.FC<IInputProps> = (props: IInputProps) => {
  const { label, value, name, type, error, onChange, ...rest } = props;

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  /**
   *
   * @param event
   */
  const handleChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    onChange(event.target.value);
  };

  return (
    <FormControl variant='filled' sx={{ width: '100%' }}>
      <CustomTextField
        className='textfield-filled'
        variant='filled'
        name={name}
        label={label}
        type={showPassword ? 'text' : type}
        onChange={handleChange}
        value={value}
        InputProps={{
          disableUnderline: true,
          endAdornment:
            type === 'password' ? (
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle-password'
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword && value.length !== 0 ? (
                    <VisibilityIcon
                      style={{ color: palette.icon.color }}
                      className='visibility-icon'
                    />
                  ) : (
                    <VisibilityOffIcon
                      style={{ color: palette.icon.color }}
                      className='visibility-icon'
                    />
                  )}
                </IconButton>
              </InputAdornment>
            ) : null,
        }}
        error={error}
        {...rest}
      />
    </FormControl>
  );
};

export default InputComponent;
