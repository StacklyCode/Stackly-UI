import AtomContainer from "@Atoms/container";
import AtomIcon from "@Atoms/icon";
import styled from "@emotion/styled";
import { TFunction } from "next-i18next";
import LinkNext from "next/link";

type FooterProps = {
  title?: string;
  t?: TFunction;
};

const Footer = styled.div<FooterProps>`
  width: 100vw;
  min-height: 110px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary.base};
  box-shadow: 0px -5px 10px ${({ theme }) => `${theme.colors.primary.base}0D`};
`;

const FooterContainer = styled.div<FooterProps>`
  width: 100%;
  min-height: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 20px 0px;
  ${({ theme }) => theme.mediaquery.small} {
    flex-direction: row;
    justify-content: space-between;
    margin: 0px 30px;
  }
  span {
    display: none;
    width: 358.47px;
    ${({ theme }) => theme.mediaquery.large} {
      display: flex;
    }
  }
`;
const FooterContainerLogo = styled.div<FooterProps>`
  min-width: 190px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.mediaquery.small} {
    justify-content: flex-start;
  }
  svg {
    height: 35px;
    width: 35px;
  }
`;
const FooterSocialContainer = styled.div<FooterProps>`
  width: max-content;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    width: 25px;
    margin-right: 30px;
  }
  a:nth-last-of-type(1) {
    margin-right: 0px;
  }
`;

const FooterCopyrighted = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme && theme.colors.primary.base};
  display: flex;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;

const OrganismFooter: React.FC<FooterProps> = ({ t }) => {
  return (
    <Footer>
      <AtomContainer fullwidth alignItems="center" justifyContent="center">
        <FooterContainer>
          <FooterContainerLogo>
            <AtomIcon icon="stacklycodelogo" />
          </FooterContainerLogo>
          <LinkNext href="/copyrighted">
            <FooterCopyrighted>{t && t("footer-desc")}</FooterCopyrighted>
          </LinkNext>
          <FooterSocialContainer>
            <a target="_blank"
              href="https://www.facebook.com/StacklyCodeOfficial"
              title="Facebook Page"
            >
              <AtomIcon icon="facebook" />
            </a>
            <a target="_blank"
              href="https://www.linkedin.com/company/68642625/admin/"
              title="Linkedin Page"
            >
              <AtomIcon icon="linkedin" />
            </a>
            <a target="_blank" href="https://github.com/StacklyCode" title="Github Page">
              <AtomIcon icon="github" />
            </a>
            <a target="_blank" href="https://twitter.com/StacklyCode" title="Twitter Page">
              <AtomIcon icon="twitter" />
            </a>
          </FooterSocialContainer>
        </FooterContainer>
      </AtomContainer>
    </Footer>
  );
};

export default OrganismFooter;
