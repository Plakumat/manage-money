import React from 'react';
import FormControl from '@mui/material/FormControl';
import { CustomButton } from './customization';
import { IButtonProps } from '../../model';

const ButtonComponent: React.FC<IButtonProps> = (props: IButtonProps) => {
  const { children, onClick, ...rest } = props;

  return (
    <FormControl variant='filled' sx={{ width: '100%', maxWidth: 160 }}>
      <CustomButton variant='contained' onClick={onClick} {...rest}>
        {children}
      </CustomButton>
    </FormControl>
  );
};

export default ButtonComponent;
