import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    fonts: {
      size: string;
      weight: number;
    };
    status: {
      danger: {
        color: string;
        border: string;
        background: string;
      };
      success: string;
      default: {
        border: {
          default: string;
          hover: string;
        };
        selectedColor: string;
        placeholder: string;
        background: string;
        padding: string;
      };
      focused: {
        border: string;
        background: string;
      };
    };
    radius: string;
    button: {
      height: string;
      fontWeight: number;
      fontSize: string;
      color: string;
      letterSpacing: string;
      backgroundColor: string;
      hover: string;
      disabled: {
        color: string;
        backgroundColor: string;
      };
    };
    icon: {
      color: string;
    };
  }
  interface ThemeOptions {
    fonts?: {
      size: string;
      weight: number;
    };
    status?: {
      danger?: {
        color: string;
        border: string;
        background: string;
      };
      success?: string;
      default?: {
        border: {
          default: string;
          hover: string;
        };
        selectedColor: string;
        placeholder: string;
        background: string;
        padding: string;
      };
      focused?: {
        border: string;
        background: string;
      };
    };
    radius?: string;
    button?: {
      height: string;
      fontWeight: number;
      fontSize: string;
      color: string;
      letterSpacing: string;
      backgroundColor: string;
      hover: string;
      disabled: {
        color: string;
        backgroundColor: string;
      };
    };
    icon?: {
      color: string;
    };
  }
}

const Theme = () => {
  const palette = createTheme({
    typography: {
      fontFamily: [
        'SofiaPro',
        'sans-serif',
        '-apple-system',
        'BlinkMacSystemFont',
      ].join(','),
      button: {
        textTransform: 'none',
      },
    },
    fonts: {
      size: '16px',
      weight: 600,
    },
    status: {
      danger: {
        color: '#f20028',
        border: '2px solid #f20028',
        background: '#faf5f5',
      },
      success: 'green',
      default: {
        border: {
          default: '2px solid transparent',
          hover: '2px solid #dcdce6',
        },
        selectedColor: '#17171a',
        placeholder: '#909099',
        background: '#f5f5fa',
        padding: '0 20px',
      },
      focused: {
        border: '2px solid #155ed4',
        background: '#f5f5fa',
      },
    },
    radius: '12px',
    button: {
      fontSize: '14px',
      color: '#fff',
      fontWeight: 600,
      letterSpacing: '0.6px',
      height: '56px',
      backgroundColor: '#155ed4',
      hover: '#4085e6',
      disabled: {
        color: '#fff',
        backgroundColor: '#e8e8f0',
      },
    },
    icon: {
      color: '#c0c0cb',
    },
  });

  return palette;
};

export default Theme;
