import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Theme from '../../theme';

export const palette = Theme();

export const CustomTextField: any = styled(TextField)(({ error }) => ({
  margin: '0 0 24px 0',
  '& .MuiInputBase-root': {
    padding: palette.status.default.padding,
    color: palette.status.default.selectedColor,
    fontSize: palette.fonts.size,
    fontWeight: palette.fonts.weight,
    backgroundColor:
      error === true
        ? palette.status.danger.background
        : palette.status.default.background,
    borderRadius: palette.radius,
    border:
      error === true
        ? palette.status.danger.border
        : palette.status.default.border.default,
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
  },
  '& .MuiInputBase-root.Mui-focused': {
    color: palette.status.default.selectedColor,
    backgroundColor:
      error === false
        ? palette.status.default.background
        : palette.status.danger.background,
    border:
      error === false
        ? palette.status.focused.border
        : palette.status.danger.border,
  },
}));
