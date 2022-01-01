import styled from "styled-components";

interface IContainerFlexRowBreakProps {
  gap?: number;
}

const ContainerFlexRowBreak = styled.section<IContainerFlexRowBreakProps>`
  display: flex;
  align-items: end;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${({ gap }) => gap}px;
  width: 100%;
`;

ContainerFlexRowBreak.defaultProps = {
  gap: 20,
};

export default ContainerFlexRowBreak;
