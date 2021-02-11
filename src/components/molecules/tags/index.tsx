import AtomBody from "@Atoms/body";
import AtomIcon from "@Atoms/icon";
import AtomTitle from "@Atoms/title";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface ISocialnetwork {
  name: string;
  url: string;
}

type TagsProps = {
  color?: "blue" | "cyan" | "green" | "orange" | "pink" | "red";
  img?: string;
  title?: string;
  description?: string;
  socialnetwork?: ISocialnetwork[];
  stars?: boolean;
};

const Tags = styled.article<TagsProps>`
  max-width: 310px;
  min-height: 88px;
  display: flex;
  border-radius: 4px;
  box-shadow: 0px 4px 20px rgba(105, 115, 124, 0.15);
`;
const TagColor = styled.div<TagsProps>`
  width: 13px;
  height: 100%;
  background-color: ${({ theme, color }) => css`
    ${theme.colors.accent[color || "blue"].base}
  `};
  border-radius: 4px 0px 0px 4px;
`;

const TagContariner = styled.div<TagsProps>`
  width: calc(100% - 13px);
  min-width: 249px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0px 4px 4px 0px;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  img {
    width: 65px;
    height: 65px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 20px;
  }
  div {
    span {
      text-align: left;
    }
    p {
      text-align: left;
      font-size: 14px;
      line-height: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      display: -webkit-box;
      -webkit-box-orient: vertical;
    }
  }
`;
const InfoTag = styled.div<TagsProps>`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;
const SocialNetworkContainer = styled.div<TagsProps>`
  display: flex;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;

    ${({ stars, theme }) =>
      !stars && {
        width: "18px",
        height: "18px",
        marginRight: "15px",
        svg: {
          width: "100%",
          height: "100%",
          path: {
            fill: theme.colors.gray[300],
          },
        },
      }}
  }
`;
const StarContainer = styled.div<TagsProps>`
  display: flex;
  width: fit-content;
`;

const MoleculesTags: React.FC<TagsProps> = ({
  color,
  img,
  title,
  description,
  socialnetwork,
  stars,
}) => {
  return (
    <Tags>
      <TagColor color={color} />
      <TagContariner>
        {img && (
          <img loading="lazy" src={img} width="100%" height="100%" alt="" />
        )}
        <div>
          <AtomTitle as="span" size="SubTitleSmall" color="black" bold>
            {title || "Some Title"}
          </AtomTitle>
          <AtomBody size="BodySmall" color="light">
            {description ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
          </AtomBody>
          {(socialnetwork || stars) && (
            <InfoTag socialnetwork={socialnetwork}>
              {socialnetwork && (
                <SocialNetworkContainer stars={stars}>
                  {socialnetwork.map((social) => (
                    <a key={social.name} href={social.url}>
                      <AtomIcon icon={social.name} color="dark" size="12px" />
                    </a>
                  ))}
                </SocialNetworkContainer>
              )}
              {stars && (
                <StarContainer>
                  <AtomIcon icon="star" />
                  <AtomIcon icon="star" />
                  <AtomIcon icon="star" />
                  <AtomIcon icon="star" />
                  <AtomIcon icon="star" />
                </StarContainer>
              )}
            </InfoTag>
          )}
        </div>
      </TagContariner>
    </Tags>
  );
};

export default MoleculesTags;
