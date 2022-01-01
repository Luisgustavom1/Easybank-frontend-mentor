import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 25px;
  padding: 30px 25px;
  text-align: center;

  @media (min-width: 570px) {
    text-align: left;
    padding: 120px 20% 0 5%;
  }

  @media (min-width: 1280px) {
    padding: 190px 20% 0 5%;
  }
`;

export { Container };
