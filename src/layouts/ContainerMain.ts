import styled from "styled-components";

interface IContainerMainProps {
  backgroundColor?: "Primary" | "Secondary";
}

const ContainerMain = styled.section<IContainerMainProps>`
  align-items: center;
  background: ${({ theme, backgroundColor }) =>
    backgroundColor === "Primary"
      ? theme.neutral.LightGrayishBlue
      : theme.neutral.VeryLightGray};
  display: flex;
  flex-direction: column;
  padding: 60px 5vw;
  text-align: center;

  @media (min-width: 728px) {
    text-align: left;
    align-items: start;
  }
`;

ContainerMain.defaultProps = {
  backgroundColor: "Primary",
};

export default ContainerMain;
