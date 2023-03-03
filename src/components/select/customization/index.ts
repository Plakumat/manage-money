import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import Theme from '../../theme';

export const palette = Theme();

export const CustomSelect: any = styled(Select)(({ error }) => ({
  color: palette.status.default.selectedColor,
  backgroundColor:
    error === true
      ? palette.status.danger.background
      : palette.status.default.background,
  borderRadius: palette.radius,
  border:
    error === true
      ? palette.status.danger.border
      : palette.status.default.border.default,
  fontSize: palette.fonts.size,
  fontWeight: palette.fonts.weight,
  margin: '0 0 24px 0',
  '&.Mui-focused': {
    color: palette.status.default.selectedColor,
    border:
      error === false
        ? palette.status.focused.border
        : palette.status.danger.border,
    backgroundColor:
      error === false
        ? palette.status.focused.background
        : palette.status.danger.background,
  },
  '&:hover': {
    backgroundColor:
      error === false
        ? palette.status.default.background
        : palette.status.danger.background,
    border:
      error === false
        ? palette.status.default.border.hover
        : palette.status.danger.border,
  },
}));
