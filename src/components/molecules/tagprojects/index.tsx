import AtomBody from "@Atoms/body";
import AtomTitle from "@Atoms/title";
import styled from "@emotion/styled";
import { TFunction } from "next-i18next";
import AtomButton from "@Src/components/atoms/button";

type TagsProps = {
  img?: string;
  type?: string;
  title?: string;
  link?: string;
  description?: string;
  t?: TFunction;
};

const Tags = styled.article<TagsProps>`
  width: 240px;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 10px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0);
  :hover {
    background-color: ${({ theme }) => theme.colors.secondary.base};
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    img {
      filter: drop-shadow(0px 4px 11px rgba(0, 0, 0, 0.25));
    }
    div {
      opacity: 1;
    }
  }
  span {
    width: 100%;
    margin-top: 5px;
    text-align: center;
    ${({ theme }) => theme.mediaquery.small} {
      margin-top: 10px;
      text-align: left;
    }
  }
  p {
    text-align: center;
    ${({ theme }) => theme.mediaquery.small} {
      text-align: left;
    }
    margin-top: 5px;
  }
  transition: all 0.6s ease;
`;

const TagImage = styled.img<TagsProps>`
  width: 100%;
  height: 100px;
  object-fit: cover;
  transition: all 0.6s ease;
`;

const TagImageDesc = styled.desc<TagsProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: max-content;
  img {
    margin-bottom: 5px;
  }
`;

const TagDescContainer = styled.div<TagsProps>`
  width: 100%;
  overflow: hidden;
  height: max-content;
  opacity: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  p {
    text-align: left;
  }
  a {
    width: 100%;
    margin-bottom: 0;
    button {
      margin-bottom: 0;
      width: 100%;
      max-width: 100%;
    }
  }
  button {
    margin: 20px 0;
  }
  transition: all 0.6s ease;
`;

const MoleculesTagProject: React.FC<TagsProps> = ({
  img,
  type,
  title,
  link,
  description,
  t,
}) => {
  return (
    <Tags>
      <TagImageDesc>
        <TagImage
          src={
            img ||
            "https://assets-global.website-files.com/583347ca8f6c7ee058111b55/5f86270f93330c1ddd36c821_best-website-gallery.jpg"
          }
        />
        <AtomTitle
          align="left"
          as="span"
          size="SubTitleMedium"
          color="black"
          bold
        >
          {title || "Some Title"}
        </AtomTitle>
        <AtomBody align="left" size="BodySmall" color="light">
          {type || "Web | UI/UX"}
        </AtomBody>
      </TagImageDesc>
      <TagDescContainer>
        <AtomButton href={link}>View Project</AtomButton>
      </TagDescContainer>
    </Tags>
  );
};

export default MoleculesTagProject;
