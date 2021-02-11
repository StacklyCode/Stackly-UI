import AtomBody from "@Atoms/body";
import AtomIcon from "@Atoms/icon";
import AtomTitle from "@Atoms/title";
import styled from "@emotion/styled";

type TagsProps = {
  image?: string;
  name?: string;
  description?: string;
  social?: {
    name: string;
    url: string;
  }[];
};

const Tags = styled.article<TagsProps>`
  width: 150px;
  height: 200px;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  ${({ theme }) => theme.mediaquery.small} {
    align-items: flex-start;
    width: 210px;
    height: 220px;
    padding: 20px 30px;
  }
  img {
    border: 2px solid transparent;
  }
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.secondary.base};
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  :hover {
    background-color: ${({ theme }) => theme.colors.accent.primary.base};
    span {
      color: ${({ theme }) => theme.colors.secondary.base};
    }
    p {
      color: ${({ theme }) => theme.colors.secondary.base};
    }
    svg {
      path {
        fill: ${({ theme }) => theme.colors.secondary.base};
      }
    }
    img {
      border: 2px solid ${({ theme }) => theme.colors.secondary.base};
    }
  }
  img {
    background-color: ${({ theme }) => theme.colors.secondary.dark};
    border-radius: 10px;
    width: 72px;
    height: 72px;
    transition: all 0.3s ease;
    object-fit: cover;
  }
  h2 {
    line-height: 20px;
  }
  transition: all 0.3s ease;
`;

const SocialNetworkContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  ${({ theme }) => theme.mediaquery.small} {
    margin-bottom: 0px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;

    ${({ theme }) =>
      true && {
        width: "20px",
        height: "20px",
        marginRight: "15px",
        svg: {
          width: "100%",
          height: "100%",
          path: {
            fill: theme.colors.primary.base,
          },
        },
      }}
  }
`;

const MoleculesTagTeam: React.FC<TagsProps> = ({
  image,
  name,
  description,
  social,
}) => {
  return (
    <Tags>
      <img src={image || "https://i.stack.imgur.com/l60Hf.png"} alt={name} />
      <AtomTitle
        align="left"
        as="span"
        size="SubTitleMedium"
        color="black"
        bold
      >
        {name || "Some Name"}
      </AtomTitle>
      <AtomBody align="left" size="BodySmall" color="light">
        {description || "CTO"}
      </AtomBody>
      <SocialNetworkContainer>
        {social?.map((item, index) => (
          <a target="_blank" key={`${item.name}key${index}`} href={item.url}>
            <AtomIcon icon={item.name} color="dark" size="12px" />
          </a>
        ))}
      </SocialNetworkContainer>
    </Tags>
  );
};

export default MoleculesTagTeam;
