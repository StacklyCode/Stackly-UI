import { AppProps } from "next/app";
import { ThemeProvider } from "@emotion/react";
import GlobalStyles from "@Styles/globalStyled";
import Theme from "@Styles/theme";
import ThemeContext from "@Hooks/ThemeContext";
import { useEffect, useContext, useState } from "react";
import { I18nContext } from "next-i18next";

import { appWithTranslation } from "@Src/i18n";

const App = ({ Component, pageProps }: AppProps) => {
  const [theme, setTheme] = useState(Theme.theme1);
  const {
    i18n: { language },
  } = useContext(I18nContext);

  useEffect(() => {
    const themeLocal = localStorage.getItem("theme");
    if (themeLocal) {
      if (themeLocal === "theme1") {
        setTheme(Theme.theme1);
      } else {
        setTheme(Theme.theme2);
      }
    } else {
      localStorage.setItem("theme", "theme1");
    }
    const languageLocal = localStorage.getItem("language");
    if (!languageLocal) {
      localStorage.setItem("language", language);
    }
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default appWithTranslation(App);
