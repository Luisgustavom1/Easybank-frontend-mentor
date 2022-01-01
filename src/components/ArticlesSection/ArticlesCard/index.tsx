import React from "react";

import { BodyMd, Subtitle } from "../../../styles/typography";
import {
  ArticleTitle,
  Container,
  ContainerTexts,
  ContainerImg,
} from "./styles";

interface IArticlesCardProps {
  author: string;
  title: string;
  text: string;
  img: string;
}

function ArticlesCard({ author, title, text, img }: IArticlesCardProps) {
  return (
    <Container>
      <ContainerImg>
        <img src={img} alt={title} />
      </ContainerImg>
      <ContainerTexts>
        <Subtitle>By {author}</Subtitle>
        <ArticleTitle>{title}</ArticleTitle>
        <BodyMd>{text}</BodyMd>
      </ContainerTexts>
    </Container>
  );
}

export default ArticlesCard;
