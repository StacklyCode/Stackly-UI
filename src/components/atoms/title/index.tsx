import styled from "@emotion/styled";
import { Theme } from "@Styles/styled";

type Size =
  | "TitleLarge"
  | "TitleMedium"
  | "TitleSmall"
  | "SubTitleLarge"
  | "SubTitleMedium"
  | "SubTitleSmall";
type Tag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "a" | "span";

type TitleProps = {
  size?: Size;
  as?: Tag;
  color?: "white" | "green" | "gray" | "black" | "light" | "accent";
  align?: "left" | "center";
  bold?: boolean;
};

let tag: Tag = "h1";
let mobileSize: Size = "TitleMedium";

const getColor = (
  theme: Theme,
  color: "white" | "green" | "gray" | "black" | "light" | "accent" | undefined
) => {
  switch (color) {
    case "black":
      return theme.colors.primary.dark;
    case "gray":
      return theme.colors.gray[300];
    case "light":
      return theme.colors.primary.light;
    case "accent":
      return theme.colors.accent.primary.base;
    default:
      return theme.colors.primary.base;
  }
};

const setValues = (size: Size | undefined) => {
  switch (size) {
    case "SubTitleSmall":
      tag = "h6";
      mobileSize = "SubTitleSmall";
      break;
    case "SubTitleMedium":
      tag = "h5";
      mobileSize = "SubTitleSmall";
      break;
    case "SubTitleLarge":
      tag = "h4";
      mobileSize = "SubTitleMedium";
      break;
    case "TitleSmall":
      tag = "h3";
      mobileSize = "TitleSmall";
      break;
    case "TitleMedium":
      tag = "h2";
      mobileSize = "TitleSmall";
      break;
    default:
      tag = "h1";
      mobileSize = "TitleMedium";
      break;
  }
};

const Title = styled.h1<TitleProps>`
  ${({ theme, color, bold }) => ({
    fontFamily: theme.texts.TitleLarge.FontFamily,
    fontWeight: bold ? 700 : 500,
    textAlign: "center",
    fontSize: theme.texts[mobileSize].FontSize,
    lineHeight: theme.texts[mobileSize].LineHeight,
    color: getColor(theme, color),
  })}

  ${({ theme }) => theme.mediaquery.small} {
    ${({ theme, size, align }) => ({
      textAlign: align || "center",
      fontSize: theme.texts[size || "TitleLarge"].FontSize,
      lineHeight: theme.texts[size || "TitleLarge"].LineHeight,
    })}
  }
`;

const AtomTitle: React.FC<TitleProps> = ({
  children,
  size,
  color,
  align,
  bold,
  as,
}) => {
  setValues(size);
  return (
    <Title as={as || tag} size={size} color={color} align={align} bold={bold}>
      {children || "Some Text"}
    </Title>
  );
};

export default AtomTitle;
