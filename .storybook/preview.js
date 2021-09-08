import { themes } from '@storybook/theming';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { theme } from '../src/lib/theme';
import { useDarkMode } from 'storybook-dark-mode';

const commonThemes = {
  brandTitle: 'Dvinci Components',
};

const Decorator = (Story, args) => {
  const isDarkMode = useDarkMode();
  const appTheme = theme(isDarkMode, 'ltr');
  return (
    <ThemeProvider theme={appTheme}>
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
