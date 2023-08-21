import colors from "./tokens/colors";

export const lightTheme = {
    colors:{
        ...colors['light'],
        background: colors['light'].background.background100,
        text: colors['light'].neutral.neutral100,
    }
}

export const darkTheme = {
    colors:{
        ...colors['dark'],
        background: colors['dark'].background.background100,
        text: colors['dark'].neutral.neutral100,
    }
}