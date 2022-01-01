import styled from "styled-components";
import ContainerFlexRowBreak from "../../layouts/ContainerFlexRowBreak";

export const NewContainerFlexRowBreak = styled(ContainerFlexRowBreak)`
  padding: 30px 5vw;
  background: ${({ theme }) => theme.primary.DarkBlue};
  justify-content: center;
`;

export const ContainerIcons = styled.section`
  display: flex;
  gap: 15px;
`;

export const ContainerFlexColumn = styled.div`
  min-width: 325px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;

  > svg {
    margin-bottom: 30px;
  }

  section {
    svg {
      fill: #fff;

      &:hover {
        fill: ${({ theme }) => theme.primary.LimeGreen};
      }
    }
  }

  p {
    font-size: 14px;
  }
`;

export const ContainerList = styled.ul`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;
`;

export const ContainerLinks = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: center;

  @media (min-width: 918px) {
    text-align: left;
  }
`;

export const Link = styled.a`
  color: white;
  font-size: 14px;
  font-weight: 400;

  &:hover {
    color: ${({ theme }) => theme.primary.LimeGreen};
  }
`;
