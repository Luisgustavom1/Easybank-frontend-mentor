import styled from "styled-components";

export const Container = styled.article`
  width: 325px;
  background: ${({ theme }) => theme.neutral.White};
  border-radius: 6px;
  overflow: hidden;
  margin: 0 auto;
`;

export const ContainerImg = styled.div`
  height: 216px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ContainerTexts = styled.div`
  text-align: left;
  padding: 20px 20px 35px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  @media (min-width: 760px) {
    padding: 20px 65px 35px 30px;

    p {
      -webkit-line-clamp: 4;
    }
  }
`;

export const ArticleTitle = styled.h2`
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary.DarkBlue};
`;
