import { Theme } from "@Styles/styled";
import ThemeColors from "@Styles/global/themesColors/light";
import ThemeText from "@Styles/global/themeTexts";
import ThemeShadows from "@Styles/global/themeShadows";
import ThemeSpaces from "@Styles/global/themeSpaces";
import ThemeZindex from "@Styles/global/themeZIndex";
import ThemeMediaQuery from "@Styles/global/themeMediaQuery";

const theme: Theme = {
  colors: ThemeColors,
  texts: ThemeText,
  shadows: ThemeShadows,
  spaces: ThemeSpaces,
  borders: "4px",
  zindex: ThemeZindex,
  mediaquery: ThemeMediaQuery,
  breakpoints: {
    xs: 480,
    s: 768,
    m: 1024,
    l: 1280,
    xl: 1440,
    xxl: 1920,
  },
  spacings: {
    xs: 12,
    s: 12,
    m: 34,
    l: 34,
    xl: 155,
    xxl: 125,
  },
};

export default theme;
