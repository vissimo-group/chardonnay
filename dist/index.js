"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/tokens/index.ts
var tokens_exports = {};
__export(tokens_exports, {
  borderRadius: () => radius_default,
  default: () => tokens_default,
  spacing: () => spacing_default
});
module.exports = __toCommonJS(tokens_exports);

// src/tokens/radius.ts
var borderRadius = {
  1: "0px",
  2: "4px",
  3: "8px",
  4: "100px"
};
var radius_default = borderRadius;

// src/tokens/colors.ts
var colors = {
  light: {
    neutral: {
      neutral100: "#FFFFFF",
      neutral200: "#E7E7E7",
      neutral300: "#969696",
      neutral400: "#585757",
      neutral500: "#1C1C1C"
    },
    action: {
      action100: "#03A678",
      action200: "#088A66",
      action300: "#0D6F53",
      action400: "#125341"
    },
    brand: {
      brand100: "#CE2A36",
      brand200: "#AA2731",
      brand300: "#87242C",
      brand400: "#632226"
    },
    renomados: {
      renomados100: "#FF9A22",
      renomados200: "#E0801B",
      renomados300: "#C16614",
      renomados400: "#A24C0E"
    },
    feedback: {
      feedbackInfo100: "#2391E1",
      feedbackSuccess100: "#029C49",
      feedbackWarning100: "#DF8F16",
      feedbackError100: "#F14444",
      feedbackInfo200: "#2391E1",
      feedbackSuccess200: "#029C49",
      feedbackWarning200: "#DF8F16",
      feedbackError200: "#F14444"
    },
    background: {
      background100: "#FFFFFF",
      background200: "#F7F7F7",
      backgroundInfo: "#C9E5FA",
      backgroundSuccess: "#C0E6D1",
      backgroundWarning: "#F7E3C5",
      backgroundError: "#FBD0D0"
    }
  },
  dark: {
    neutral: {
      neutral100: "#FFFFFF",
      neutral200: "#E7E7E7",
      neutral300: "#B8B8B8",
      neutral400: "#707070",
      neutral500: "#292929"
    },
    action: {
      action100: "#3AD883",
      action200: "#81E6B0",
      action300: "#B8F1D3",
      action400: "#DFF9EB"
    },
    brand: {
      brand100: "#D84550",
      brand200: "#E06A73",
      brand300: "#E88F96",
      brand400: "#EFB5B9"
    },
    renomados: {
      renomados100: "#FFA740",
      renomados200: "#FFB966",
      renomados300: "#FFCA8C",
      renomados400: "#FFDCB3"
    },
    feedback: {
      feedbackInfo100: "#4FA7E7",
      feedbackSuccess100: "#35B06D",
      feedbackWarning100: "#E5A545",
      feedbackError100: "#F46969",
      feedbackInfo200: "#7BBDED",
      feedbackSuccess200: "#67C492",
      feedbackWarning200: "#ECBC73",
      feedbackError200: "#F78F8F"
    },
    background: {
      background100: "#1C1C1C",
      background200: "#262626",
      backgroundInfo: "#104165",
      backgroundSuccess: "#014621",
      backgroundWarning: "#64400A",
      backgroundError: "#6C1F1F"
    }
  }
};

// src/tokens/spacing.ts
var spacing = {
  1: "0.125rem",
  2: "0.25rem",
  3: "0.5rem",
  4: "1rem",
  5: "1.5rem",
  6: "2rem",
  7: "2.5rem",
  8: "3rem",
  9: "3.5rem"
};
var spacing_default = spacing;

// src/tokens/index.ts
var tokens_default = colors;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  borderRadius,
  spacing
});
