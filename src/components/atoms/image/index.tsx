import styled from "@emotion/styled";

type ImageProps = {
  background?: boolean;
  image?: string;
  getColor?: string;
};

const Image = styled.div<ImageProps>`
  /* StyleComponent Style with Theme*/
  width: 250px;
  height: 130px;
  border-radius: 4px;
  ${({ background, theme, getColor }) =>
    background && {
      width: "480px",
      height: "280px",
      backgroundColor: getColor || theme.colors.white,
    }}
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    border-radius: 4px;
    ${({ background }) =>
      background && {
        width: "80%",
        height: "80%",
        filter: "drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.5))",
        borderRadius: "0px",
      }}
    object-fit: cover;
  }
  transition: all 0.5s ease;
`;

const AtomImage: React.FC<ImageProps> = ({ background, image }) => {
  return (
    <Image background={background} getColor="#fff">
      <img
        src={
          image ||
          "https://climate.onep.go.th/wp-content/uploads/2020/01/default-image.png"
        }
        width="100%"
        height="100%"
        alt=""
        loading="lazy"
      />
    </Image>
  );
};

export default AtomImage;
