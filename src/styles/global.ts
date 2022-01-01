import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: 'Public Sans', sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.neutral.VeryLightGray};
    font-size: 18px;
    color: ${({ theme }) => theme.neutral.GrayishBlue};
    font-weight: 500;
  }

  input, button, textarea {
    border: none;
    font-family: 'Public Sans', sans-serif;
  }

  ul, li, ol, a {
    text-decoration: none;
    list-style: none;
  }

  input, svg, img, textarea, a, input::placeholder {
    user-select: none;
  }
`;

export default GlobalStyle;
