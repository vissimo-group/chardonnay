import { css, Global, ThemeProvider, useTheme } from "@emotion/react";
import { lightTheme, darkTheme } from "../src/theme";

const THEMES = {
    light: lightTheme,
    dark: darkTheme,
};

const GlobalStyles = () => {
    const theme = useTheme();

    return (
        <Global
            styles={
                css`
                    html,
                    body {
                      background-color: ${theme.colors.background};
                      color: ${theme.colors.text};
                    }
                `
            }
        />
    );
};

export const withTheme = (Story, context) => {
    const { theme } = context.globals;

    return (
        <ThemeProvider theme={THEMES[theme] || THEMES["dark"]}>
            <GlobalStyles />
            <Story />
        </ThemeProvider>
    );
};
