import styled from "styled-components";

const TitleLg = styled.h1`
  font-size: 40px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary.DarkBlue};

  @media (min-width: 1280px) {
    font-size: 56px;
  }
`;

const TitleMd = styled.h1`
  font-size: 32px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary.DarkBlue};

  @media (min-width: 1280px) {
    font-size: 40px;
  }
`;

const TitleSm = styled.h1`
  font-size: 24px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary.DarkBlue};

  @media (min-width: 1280px) {
    font-size: 26px;
  }
`;

const BodyLg = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

const BodyMd = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

const Subtitle = styled.h4`
  font-size: 12px;
  font-weight: 400;
`;

export { TitleLg, TitleMd, TitleSm, BodyLg, BodyMd, Subtitle };
