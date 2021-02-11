import { useContext, useEffect, useState } from "react";
import styled from "@emotion/styled";
import AtomIcon from "@Atoms/icon";
import { i18n } from "@Src/i18n";
import { I18nContext } from "next-i18next";

type ToggleListProps = {
  outline?: boolean;
  object?: { title: string; options: string[] };
  toggle?: boolean;
};

const ToggleListStyled = styled.div<ToggleListProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 70px;
  height: 35px;
  border-radius: 3px;
  align-self: baseline;
  cursor: pointer;
  ${({ theme }) =>
    theme && {
      backgroundColor: theme.colors.primary.base,
      border: `solid 1px ${theme.colors.primary.base}`,
    }}
  ${({ theme, outline }) =>
    outline && {
      backgroundColor: "transparent",
      border: `solid 1px ${theme.colors.primary.base}`,
    }}
  transition: all .5s ease;
`;

const ContainerTitleStyled = styled.div<ToggleListProps>`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0px 10px;
  align-items: center;
  justify-content: space-evenly;
  ${({ theme, outline, toggle }) =>
    outline &&
    toggle && {
      backgroundColor: "transparent",
      borderBottom: `solid 2px ${theme.colors.white}`,
    }}
  span {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: ${({ theme }) => theme.colors.primary.base};
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-transform: uppercase;
  }
  div {
    svg {
      margin-right: 5px;
      height: 9px;
      width: 9px;
      path {
        fill: ${({ theme }) => theme.colors.primary.base};
        stroke: ${({ theme }) => theme.colors.primary.base};
      }
    }
  }
`;
const ContainerOptionsStyled = styled.div<ToggleListProps>`
  position: absolute;
  top: 33px;
  left: -1px;
  border: solid 1px ${({ theme }) => theme.colors.primary.base};
  display: flex;
  flex-direction: column;
  width: 70px;
  height: max-content;
  button {
    padding: 8px 0px;
    display: flex;
    border: none;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.primary.base};
    background-color: ${({ theme }) => theme.colors.secondary.base};
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    text-transform: uppercase;
    font-size: 12px;
    line-height: 15px;
    :hover {
      cursor: pointer;
      background-color: #414e6a;
      ${({ theme, outline }) =>
        outline && {
          backgroundColor: theme.colors.secondary.base,
          color: theme.colors.primary.base,
        }}
    }
  }
`;

const AtomToggleList: React.FC<ToggleListProps> = ({ outline, object }) => {
  const [toggle, settoggle] = useState(false);
  const [option, setoption] = useState("");
  const {
    i18n: { language },
  } = useContext(I18nContext);
  function clickOption(e: React.MouseEvent<HTMLSpanElement>) {
    const eGet = e.target as HTMLSpanElement;
    const optionGet = eGet.innerText.toLowerCase();
    localStorage.setItem("language", optionGet);
    i18n.changeLanguage(optionGet);
    setoption(optionGet);
    /*  Function to Do */
  }
  useEffect(() => { 
    setoption(language);
  });
  return (
    <ToggleListStyled outline={outline} onClick={() => settoggle(!toggle)}>
      <ContainerTitleStyled outline={outline} toggle={toggle}>
        <span>{option || object?.options[0]}</span>
        <AtomIcon icon="arrow" />
      </ContainerTitleStyled>
      {toggle && (
        <ContainerOptionsStyled outline={outline}>
          {object?.options.map((e) => (
            <button type="button" onClick={clickOption} key={e}>
              {e}
            </button>
          ))}
        </ContainerOptionsStyled>
      )}
    </ToggleListStyled>
  );
};

export default AtomToggleList;
