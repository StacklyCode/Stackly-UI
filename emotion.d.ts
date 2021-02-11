import "@emotion/react";

declare module "@emotion/react" {
  interface IPrimary {
    dark: string;
    base: string;
    light: string;
  }
  interface ISecondary {
    dark: string;
    base: string;
    light: string;
  }
  interface IAccentColor {
    dark: string;
    base: string;
    light: string;
  }

  interface IAccent {
    primary: IAccentColor;
    green: IAccentColor;
    red: IAccentColor;
    orange: IAccentColor;
    blue: IAccentColor;
    cyan: IAccentColor;
    pink: IAccentColor;
  }

  interface IGray {
    500: string;
    400: string;
    300: string;
    200: string;
    100: string;
  }

  interface IColors {
    primary: IPrimary;
    secondary: ISecondary;
    accent: IAccent;
    gray: IGray;
    black: string;
    white: string;
  }
  interface ISizeTextProperties {
    FontFamily: string;
    FontSize: string;
    LineHeight: string;
  }
  interface IThemeText {
    TitleLarge: ISizeTextProperties;
    TitleMedium: ISizeTextProperties;
    TitleSmall: ISizeTextProperties;
    SubTitleLarge: ISizeTextProperties;
    SubTitleMedium: ISizeTextProperties;
    SubTitleSmall: ISizeTextProperties;
    SubTitleExtraSmall: ISizeTextProperties;
    BodyExtraLarge: ISizeTextProperties;
    BodyLarge: ISizeTextProperties;
    BodyMedium: ISizeTextProperties;
    BodySmall: ISizeTextProperties;
    BodyExtraSmall: ISizeTextProperties;
    Button: ISizeTextProperties;
  }

  interface IShadows {
    level1: string;
    level2: string;
    level3: string;
    level4: string;
    level5: string;
    level6: string;
  }

  interface ISpace {
    xxl: string;
    xl: string;
    l: string;
    m: string;
    s: string;
    xs: string;
  }

  interface IZindex {
    zBack: string;
    zNormal: string;
    zTooltip: string;
    zFixed: string;
    zModal: string;
  }

  interface IMediaQuery {
    extrasmall: string;
    small: string;
    medium: string;
    large: string;
    extralarge: string;
  }

  export interface Theme {
    colors: IColors;
    texts: IThemeText;
    shadows: IShadows;
    spaces: ISpace;
    borders: string;
    zindex: IZindex;
    mediaquery: IMediaQuery;
    breakpoints: {
      xs: number;
      s: number;
      m: number;
      l: number;
      xl: number;
      xxl: number;
    };
    spacings: {
      xs: number;
      s: number;
      m: number;
      l: number;
      xl: number;
      xxl: number;
    };
  }
}
