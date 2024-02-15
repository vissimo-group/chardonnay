import React from "react";
import { createGlobalStyle, ThemeProvider, useTheme } from "styled-components";
import { lightTheme, darkTheme } from "../src/theme";

const THEMES = {
  light: lightTheme,
  dark: darkTheme,
};

const GlobalStyle = () => {
  const theme = useTheme();

  const Style = createGlobalStyle`
      html, body {
      background-color: ${theme.colors.background};
      color: ${theme.colors.text};
      }
    `;
  return <Style />;
};

export const withTheme = (Story, context) => {
  const { theme } = context.globals;

  return (
    <ThemeProvider theme={THEMES[theme] || THEMES.light}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  );
};
