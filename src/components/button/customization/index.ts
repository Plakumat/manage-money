import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Theme from '../../theme';

export const palette = Theme();

export const CustomButton: any = styled(Button)(() => ({
  height: palette.button.height,
  color: palette.button.color,
  fontSize: palette.button.fontSize,
  fontWeight: palette.button.fontWeight,
  letterSpacing: palette.button.letterSpacing,
  borderRadius: palette.radius,
  backgroundColor: palette.button.backgroundColor,
  '&:hover': {
    backgroundColor: palette.button.hover,
  },
  '&:disabled': {
    color: palette.button.disabled.color,
    backgroundColor: palette.button.disabled.backgroundColor,
  },
}));
