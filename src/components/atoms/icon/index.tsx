import styled from "@emotion/styled";
import dynamic from "next/dynamic";
import { useState } from "react";

type IconProps = {
  icon?: string;
  color?: "dark" | "light" | "grey" | "white";
  size?: string;
};

const IconStyled = styled.div<IconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ size }) => size && { width: size, height: size }}
  svg {
    width: 100%;
    height: 100%;
    path {
      fill: ${({ theme, color }) =>
        color === "white"
          ? theme.colors.secondary.base
          : theme.colors.primary.base};
    }
  }
`;

const IconStyledTest = styled.span`
  width: 50px;
  height: 50px;
  ${({ theme }) => ({
    fontSize: theme.texts.Button.FontSize,
    fontFamily: theme.texts.Button.FontFamily,
    fontWeight: "bold",
  })}
`;

const AtomIcon: React.FC<IconProps> = ({ icon, size, color }) => {
  const [iconLoad, setIconLoad] = useState(false);
  const DynamicIcon = dynamic(() =>
    import(`@Assets/icons/${icon}.svg`).catch(() => {
      setIconLoad(true);
    })
  );

  return (
    <>
      {!iconLoad ? (
        <IconStyled size={size} color={color}>
          <DynamicIcon />
        </IconStyled>
      ) : (
        <IconStyledTest> Please Write Correct Icon </IconStyledTest>
      )}
    </>
  );
};

export default AtomIcon;
