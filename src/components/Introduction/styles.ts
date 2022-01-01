import styled from "styled-components";

import bgMobile from "../../assets/svg/bg-intro-mobile.svg";
import bgDesktop from "../../assets/svg/bg-intro-desktop.svg";

export const Container = styled.section`
  background: url(${bgMobile}) no-repeat right top -7vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: hidden;
  margin-bottom: 40px;

  .img-mockups {
    width: 50%;
    min-width: 360px;
    object-fit: contain;
    margin: -125px auto 0 auto;
  }

  @media (min-width: 571px) {
    .img-mockups {
      order: 1;
      margin-right: -8vw;
    }
  }

  @media (min-width: 1440px) {
    background: url(${bgDesktop}) no-repeat right -150% top 115%;
  }
`;
