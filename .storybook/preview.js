import { themes } from '@storybook/theming';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import {AdapterDateFns, theme, LocalizationProvider} from '../src/lib';
import { useDarkMode } from 'storybook-dark-mode';

const commonThemes = {
  brandTitle: 'Dvinci Components',
};

const Decorator = (Story, args) => {
  const isDarkMode = useDarkMode();
  const appTheme = theme(isDarkMode, 'ltr');
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
    </LocalizationProvider>
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
