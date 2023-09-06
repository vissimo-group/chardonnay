import * as styled_components from 'styled-components';
import * as styled_components_dist_types from 'styled-components/dist/types';
import * as react from 'react';

declare const BorderRadius: {
    1: string;
    2: string;
    3: string;
    4: string;
};

declare const Colors: {
    light: {
        neutral: {
            neutral100: string;
            neutral200: string;
            neutral300: string;
            neutral400: string;
            neutral500: string;
        };
        action: {
            action100: string;
            action200: string;
            action300: string;
            action400: string;
        };
        brand: {
            brand100: string;
            brand200: string;
            brand300: string;
            brand400: string;
        };
        renomados: {
            renomados100: string;
            renomados200: string;
            renomados300: string;
            renomados400: string;
        };
        feedback: {
            feedbackInfo100: string;
            feedbackSuccess100: string;
            feedbackWarning100: string;
            feedbackError100: string;
            feedbackInfo200: string;
            feedbackSuccess200: string;
            feedbackWarning200: string;
            feedbackError200: string;
        };
        background: {
            background100: string;
            background200: string;
            backgroundInfo: string;
            backgroundSuccess: string;
            backgroundWarning: string;
            backgroundError: string;
        };
    };
    dark: {
        neutral: {
            neutral100: string;
            neutral200: string;
            neutral300: string;
            neutral400: string;
            neutral500: string;
        };
        action: {
            action100: string;
            action200: string;
            action300: string;
            action400: string;
        };
        brand: {
            brand100: string;
            brand200: string;
            brand300: string;
            brand400: string;
        };
        renomados: {
            renomados100: string;
            renomados200: string;
            renomados300: string;
            renomados400: string;
        };
        feedback: {
            feedbackInfo100: string;
            feedbackSuccess100: string;
            feedbackWarning100: string;
            feedbackError100: string;
            feedbackInfo200: string;
            feedbackSuccess200: string;
            feedbackWarning200: string;
            feedbackError200: string;
        };
        background: {
            background100: string;
            background200: string;
            backgroundInfo: string;
            backgroundSuccess: string;
            backgroundWarning: string;
            backgroundError: string;
        };
    };
};

declare const Spacing: {
    1: string;
    2: string;
    3: string;
    4: string;
    5: string;
    6: string;
    7: string;
    8: string;
    9: string;
};

declare const index$1_BorderRadius: typeof BorderRadius;
declare const index$1_Colors: typeof Colors;
declare const index$1_Spacing: typeof Spacing;
declare namespace index$1 {
  export {
    index$1_BorderRadius as BorderRadius,
    index$1_Colors as Colors,
    index$1_Spacing as Spacing,
  };
}

interface ButtonStyledProps {
    size?: 'big' | 'small';
}
declare const Button: styled_components.IStyledComponent<"web", styled_components_dist_types.Substitute<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, ButtonStyledProps>>;

declare const index_Button: typeof Button;
declare namespace index {
  export {
    index_Button as Button,
  };
}

export { index as Components, index$1 as Tokens };
