import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 325px;
  margin: 0 auto;
  text-align: center;

  @media (min-width: 728px) {
    align-items: start;
    text-align: left;
  }
`;
