import React from "react";
import { Theme } from "@Styles/styled";

interface IContextProps {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const UserContext = React.createContext({} as IContextProps);

export default UserContext;
