import React from "react";
import styled from "@emotion/styled";
import AtomBody from "@Src/components/atoms/body";
import AtomButton from "@Src/components/atoms/button";
import AtomContainer from "@Src/components/atoms/container";
import AtomIcon from "@Src/components/atoms/icon";
import AtomImage from "@Src/components/atoms/image";
import AtomInput from "@Src/components/atoms/input";
import AtomSwitch from "@Src/components/atoms/switch";
import AtomTitle from "@Src/components/atoms/title";
import AtomToggleList from "@Src/components/atoms/togglelist";
import MoleculeCarrusel from "@Src/components/molecules/carrusel";
import MoleculeProjectInfo from "@Src/components/molecules/projectinfo";
import MoleculesTagProject from "@Src/components/molecules/tagprojects";
import MoleculesTags from "@Src/components/molecules/tags";
import MoleculesTagServices from "@Src/components/molecules/tagservices";
import MoleculesTagTeam from "@Src/components/molecules/tagteam";
import OrganismFooter from "@Src/components/organisms/footer";
import OrganismNavigation from "@Src/components/organisms/navegation";
import TemplateMain from "@Src/components/templates";

const BackgroundStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary.base};
  min-height: 100vh;
`;

const index = () => {
  return (
    <BackgroundStyled>
      <AtomTitle />
      <AtomBody />
      <AtomButton />
      <AtomContainer />
      <AtomIcon />
      <AtomIcon icon="facebook" size="40px" />
      <AtomImage />
      <AtomInput />
      <AtomSwitch />
      <AtomToggleList />
      <MoleculeCarrusel />
      <MoleculeProjectInfo />
      <MoleculesTagProject />
      <MoleculesTags />
      <MoleculesTagServices />
      <MoleculesTagTeam />
      <OrganismNavigation />
      <OrganismFooter />
      <TemplateMain />
    </BackgroundStyled>
  );
};

export default index;
