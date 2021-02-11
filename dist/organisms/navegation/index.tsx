import AtomContainer from "@Atoms/container";
import AtomIcon from "@Atoms/icon";
import AtomToggleList from "@Atoms/togglelist";
import styled from "@emotion/styled";
import { useState } from "react";
import { Link } from "react-scroll";
import LinkNext from "next/link";
import { useRouter } from "next/router";
import { TFunction } from "next-i18next";
import AtomButton from "@Src/components/atoms/button";
import AtomTitle from "@Src/components/atoms/title";
import AtomSwitch from "@Src/components/atoms/switch";

type NavegationProps = {
  title?: string;
  t?: TFunction;
};

const Navigation = styled.header<NavegationProps>`
  width: 100vw;
  height: 110px;
  background-color: ${({ theme }) => theme.colors.secondary.base};
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: ${({ theme }) => theme.zindex.zFixed};
  box-shadow: 0px 5px 10px ${({ theme }) => `${theme.colors.primary.base}0D`};
`;
const NavigationLogo = styled.div`
  div {
    width: 35px;
    height: 35px;
    margin-right: 40px;
    cursor: pointer;
    svg {
      g {
        display: none;
      }
    }
  }

  ${({ theme }) => theme.mediaquery.medium} {
    div {
      svg {
        g {
          display: block;
        }
      }
    }
  }
`;

const NavigationLinks = styled.div<NavegationProps>`
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.mediaquery.medium} {
    display: flex;
  }
  a {
    text-decoration: none;
  }
`;

const NavigationLink = styled.div<NavegationProps>`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.primary.base};
  cursor: pointer;
  display: flex;
  position: relative;
  div {
    position: absolute;
    right: -15px;
    top: -8px;
    width: 35px;
  }

  margin-right: 20px;
`;

const IconSideBar = styled.div<NavegationProps>`
  height: 30px;
  width: 30px;
  background-color: transparent;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    svg {
      path {
        stroke: ${({ theme }) => theme.colors.primary.base};
      }
    }
  }
  ${({ theme }) => theme.mediaquery.medium} {
    display: none;
  }
  cursor: pointer;
  z-index: ${({ theme }) => theme.zindex.zModal};
`;

const SideBar = styled.div<NavegationProps>`
  height: 100vh;
  width: 300px;
  background-color: ${({ theme }) => theme.colors.secondary.base};
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  ${({ theme }) => theme.mediaquery.medium} {
    display: none;
  }
  box-shadow: -5px 0px 10px rgba(0, 0, 0, 0.05);
`;
const ContainerSideBar = styled.div<NavegationProps>`
  width: 100%;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.05);
`;

const NavigationLinksSidebar = styled.div<NavegationProps>`
  height: max-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    margin-bottom: 50px;
  }
`;
const ToggleContainer = styled.div<NavegationProps>`
  height: max-content;
  width: max-content;
  margin-right: 40px;
`;

const NavigationContainer = styled.div<NavegationProps>`
  height: 45px;
  width: max-content;
  display: flex;
  align-items: center;
`;
const NavigationContainerButtons = styled.div<NavegationProps>`
  height: max-content;
  width: max-content;
  align-items: center;
  display: none;
  ${({ theme }) => theme.mediaquery.medium} {
    display: flex;
  }
  button {
    max-height: 35px;
    margin: 0 10px;
    padding: 10px 25px;
    font-size: 14px;
    font-weight: 500;
  }
`;

const ToggleDarkModeContainer = styled.div<NavegationProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const OrganismNavigation: React.FC<NavegationProps> = ({ t }) => {
  const [sidebar, setSidebar] = useState(false);
  const router = useRouter();
  return (
    <Navigation>
      <AtomContainer
        fullwidth
        alignItems="center"
        justifyContent="space-between"
      >
        <NavigationContainer>
          <NavigationLogo>
            {router.pathname !== "/" ? (
              <a href="/">
                <AtomIcon icon="stacklycodelogo" />
              </a>
            ) : (
              <Link to="HeroScroll" smooth offset={-110}>
                <AtomIcon icon="stacklycodelogo" />
              </Link>
            )}
          </NavigationLogo>
          <ToggleContainer>
            <AtomToggleList
              outline
              object={{ title: "Lenguajes", options: ["en", "es"] }}
            />
          </ToggleContainer>
          <NavigationLinks>
            {router.pathname !== "/" ? (
              <>
                <LinkNext href="/#ServicesScroll">
                  <NavigationLink>{t && t("nav-tag-3")}</NavigationLink>
                </LinkNext>
                <LinkNext href="/#ProjectsScroll">
                  <NavigationLink>{t && t("nav-tag-5")}</NavigationLink>
                </LinkNext>
                <LinkNext href="/#ClientsScroll">
                  <NavigationLink>{t && t("nav-tag-4")}</NavigationLink>
                </LinkNext>

                <LinkNext href="/#ContactScroll">
                  <NavigationLink>{t && t("nav-tag-6")}</NavigationLink>
                </LinkNext>
              </>
            ) : (
              <>
                <Link to="ServicesScroll" smooth offset={-140}>
                  <NavigationLink>{t && t("nav-tag-3")}</NavigationLink>
                </Link>
                <Link to="ProjectsScroll" smooth offset={-140}>
                  <NavigationLink>{t && t("nav-tag-5")}</NavigationLink>
                </Link>
                <Link to="ClientsScroll" smooth offset={-140}>
                  <NavigationLink>{t && t("nav-tag-4")}</NavigationLink>
                </Link>
                <Link to="ContactScroll" smooth offset={-140}>
                  <NavigationLink>{t && t("nav-tag-6")}</NavigationLink>
                </Link>
              </>
            )}
            <LinkNext href="/about">
              <NavigationLink>{t && t("nav-tag-1")}</NavigationLink>
            </LinkNext>
            <LinkNext href="/community">
              <NavigationLink>
                {t && t("nav-tag-2")} <AtomIcon color="white" icon="new" />
              </NavigationLink>
            </LinkNext>
          </NavigationLinks>
        </NavigationContainer>
        <IconSideBar onClick={() => setSidebar(!sidebar)}>
          <AtomIcon icon="menu" />
        </IconSideBar>
        <NavigationContainerButtons>
          {/* 
          <ToggleDarkModeContainer>
            <AtomSwitch />
          </ToggleDarkModeContainer>
         
          <AtomButton outline>Sign In</AtomButton>
          <AtomButton>Sign Up</AtomButton> */}
        </NavigationContainerButtons>
      </AtomContainer>
      {sidebar && (
        <SideBar>
          <NavigationLinksSidebar>
            <ContainerSideBar></ContainerSideBar>
            <LinkNext href="/about">
              <NavigationLink>{t && t("nav-tag-1")}</NavigationLink>
            </LinkNext>
            <LinkNext href="/community">
              <NavigationLink>
                {t && t("nav-tag-2")} <AtomIcon color="white" icon="new" />
              </NavigationLink>
            </LinkNext>
            {router.pathname !== "/" ? (
              <LinkNext href="/#ServicesScroll">
                <NavigationLink>{t && t("nav-tag-3")}</NavigationLink>
              </LinkNext>
            ) : (
              <Link to="ServicesScroll" smooth offset={-60}>
                <NavigationLink>{t && t("nav-tag-3")}</NavigationLink>
              </Link>
            )}
            {router.pathname !== "/" ? (
              <LinkNext href="/#ClientsScroll">
                <NavigationLink>{t && t("nav-tag-4")}</NavigationLink>
              </LinkNext>
            ) : (
              <Link to="ClientsScroll" smooth offset={-60}>
                <NavigationLink>{t && t("nav-tag-4")}</NavigationLink>
              </Link>
            )}
            {router.pathname !== "/" ? (
              <LinkNext href="/#ProjectsScroll">
                <NavigationLink>{t && t("nav-tag-5")}</NavigationLink>
              </LinkNext>
            ) : (
              <Link to="ProjectsScroll" smooth offset={-30}>
                <NavigationLink>{t && t("nav-tag-5")}</NavigationLink>
              </Link>
            )}
            {router.pathname !== "/" ? (
              <LinkNext href="/#ContactScroll">
                <NavigationLink>{t && t("nav-tag-6")}</NavigationLink>
              </LinkNext>
            ) : (
              <Link to="ContactScroll" smooth offset={-40}>
                <NavigationLink>{t && t("nav-tag-6")}</NavigationLink>
              </Link>
            )}
          </NavigationLinksSidebar>
        </SideBar>
      )}
    </Navigation>
  );
};

export default OrganismNavigation;
