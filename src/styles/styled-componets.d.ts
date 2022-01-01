import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    primary: {
      DarkBlue: string;
      LimeGreen: string;
      BrightCyan: string;
    };
    neutral: {
      GrayishBlue: string;
      LightGrayishBlue: string;
      VeryLightGray: string;
      White: string;
    };
  }
}
