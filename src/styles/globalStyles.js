import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
      background-color: #ffffff !important;
      background: none !important;
    }
    * {
      margin: 0;
      padding: 0;
    }

    html, body, #root, button, input, select, textarea, p {
    font: 14px 'Jost Regular';
    color: ${({ theme: { colors } }) => colors.blue_1};
  }
`;
