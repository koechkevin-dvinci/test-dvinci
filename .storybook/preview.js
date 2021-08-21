import { themes } from '@storybook/theming';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { createCustomTheme } from '../src/lib/theme';
import { THEMES } from '../src/lib/constants';
import { useDarkMode } from 'storybook-dark-mode';
// import Box from "@material-ui/core/Box";

const commonThemes = {
  brandTitle: 'Dvinci Components',
};

const Decorator = (Story, args) => {
  const isDarkMode = useDarkMode();
  const theme = createCustomTheme({
    direction: 'ltr',
    responsiveFontSizes: true,
    roundedCorners: true,
    theme: isDarkMode ? THEMES.DARK : THEMES.LIGHT,
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  );
};

export const decorators = [Decorator];
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: { ...themes.dark, ...commonThemes, appBg: 'black', appContentBg: 'black' },
    light: { ...themes.normal, ...commonThemes },
  },
};
