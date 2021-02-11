import styled from "@emotion/styled";
import OrganismsNavigation from "@Organisms/navegation";
import OrganismFooter from "@Organisms/footer";
import { TFunction } from "next-i18next";

const Background = styled.main`
  height: max-content;
  width: 100%;
  margin-top: 110px;
`;

type ITemplate = {
  t?: TFunction;
};

const TemplateMain: React.FC<ITemplate> = ({ children, t }) => {
  return (
    <Background>
      <OrganismsNavigation t={t} />
      {children}
      <OrganismFooter t={t} />
    </Background>
  );
};

export default TemplateMain;
