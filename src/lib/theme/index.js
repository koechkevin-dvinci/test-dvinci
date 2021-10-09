import merge from 'lodash/merge';
import { createTheme, responsiveFontSizes } from '@material-ui/core';
import { THEMES } from '../constants';
import { lightShadows, darkShadows } from './shadows';

export const baseOptions = {
  direction: 'ltr',
  components: {
    MuiAvatar: {
      styleOverrides: {
        fallback: {
          height: '75%',
          width: '75%',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
        },
        html: {
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
          height: '100%',
          width: '100%',
        },
        body: {
          height: '100%',
        },
        '#root': {
          height: '100%',
        },
        '#nprogress .bar': {
          zIndex: '2000 !important',
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: 'h6',
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          overflow: 'hidden',
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: 'auto',
          marginRight: '16px',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
  typography: {
    button: {
      fontWeight: 600,
    },
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    fontSize: 12,
    htmlFontSize: 18,
    h1: {
      fontWeight: 600,
      fontSize: 28,
    },
    h2: {
      fontWeight: 600,
      fontSize: 26,
    },
    h3: {
      fontWeight: 600,
      fontSize: 24,
    },
    h4: {
      fontWeight: 600,
      fontSize: 32,
    },
    h5: {
      fontWeight: 600,
      fontSize: 24,
    },
    h6: {
      fontWeight: 600,
      fontSize: 18,
    },
    overline: {
      fontWeight: 600,
      fontSize: 12,
    },
    body2: {
      fontSize: 14,
    },
    body1: {
      fontSize: 14,
    },
    caption: {
      fontSize: 12,
    },
  },
  overrides: {
    MuiInputBase: {
      root: {
        '&$disabled': {
          color: 'rgba(145, 158, 171, 0.86)',
        },
      },
    },
    MuiIconButton: {
      root: {
        '&$disabled': {
          color: 'rgba(145, 158, 171, 0.86)',
        },
      },
    },
  },
};

export const themesOptions = {
  [THEMES.LIGHT]: {
    components: {
      MuiInputBase: {
        styleOverrides: {
          input: {
            '&::placeholder': {
              opacity: 0.86,
              color: '#42526e',
            },
          },
        },
      },
    },
    palette: {
      action: {
        active: '#6b778c',
      },
      background: {
        default: '#f4f5f7',
        paper: '#ffffff',
      },
      error: {
        contrastText: '#ffffff',
        main: '#f44336',
      },
      mode: 'light',
      primary: {
        contrastText: '#ffffff',
        main: '#5664d2',
      },
      success: {
        contrastText: '#ffffff',
        main: '#4caf50',
      },
      text: {
        primary: '#172b4d',
        secondary: '#6b778c',
      },
      warning: {
        contrastText: '#ffffff',
        main: '#ff9800',
      },
    },
    shadows: lightShadows,
  },
  [THEMES.DARK]: {
    components: {
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderBottom: '1px solid rgba(145, 158, 171, 0.24)',
          },
        },
      },
    },
    palette: {
      background: {
        default: '#171c24',
        paper: '#222b36',
      },
      divider: 'rgba(145, 158, 171, 0.24)',
      error: {
        contrastText: '#ffffff',
        main: '#f44336',
      },
      mode: 'dark',
      primary: {
        contrastText: '#ffffff',
        main: '#688eff',
      },
      success: {
        contrastText: '#ffffff',
        main: '#4caf50',
      },
      text: {
        primary: '#ffffff',
        secondary: '#919eab',
      },
      warning: {
        contrastText: '#ffffff',
        main: '#ff9800',
      },
    },
    shadows: darkShadows,
  },
  [THEMES.NATURE]: {
    components: {
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderBottom: '1px solid rgba(145, 158, 171, 0.24)',
          },
        },
      },
    },
    palette: {
      background: {
        default: '#1c2531',
        paper: '#293142',
      },
      divider: 'rgba(145, 158, 171, 0.24)',
      error: {
        contrastText: '#ffffff',
        main: '#f44336',
      },
      mode: 'dark',
      primary: {
        contrastText: '#ffffff',
        main: '#01ab56',
      },
      success: {
        contrastText: '#ffffff',
        main: '#4caf50',
      },
      text: {
        primary: '#ffffff',
        secondary: '#919eab',
      },
      warning: {
        contrastText: '#ffffff',
        main: '#ff9800',
      },
    },
    shadows: darkShadows,
  },
};

export const createCustomTheme = (config = {}) => {
  let themeOptions = themesOptions[config.theme];

  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    themeOptions = themesOptions[THEMES.LIGHT];
  }

  let theme = createTheme(
    merge(
      {},
      baseOptions,
      themeOptions,
      {
        ...(config.roundedCorners && {
          shape: {
            borderRadius: 16,
          },
        }),
        overrides: {
          MuiButton: {
            root: {
              borderRadius: 24,
              textTransform: 'none',
              '&.MuiButton-sizeLarge': {
                height: 40,
                fontSize: 14,
                minWidth: 50
              }
            },
          },
          MuiListItem: {
            root: {
              minHeight: 40
            }
          },
          MuiSvgIcon: {
            root: {
              fontSize: 24
            }
          },
          MuiFormHelperText: {
            contained: {
              marginLeft: 2
            }
          }
        },
      },
      {
        direction: config.direction,
      },
    ),
  );

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};

export const theme = (isDarkMode = true, direction = 'ltr') => {
  return createCustomTheme({
    direction: direction,
    responsiveFontSizes: false,
    roundedCorners: true,
    theme: isDarkMode ? THEMES.DARK : THEMES.LIGHT,
  });
};
