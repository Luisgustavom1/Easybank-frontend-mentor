import React from "react";

import { TitleSm, BodyLg } from "../../../styles/typography";
import { Container } from "./styles";

interface IServiceCardProps {
  img: string;
  title: string;
  text: string;
}

function ServiceCard({ img, title, text }: IServiceCardProps) {
  return (
    <Container>
      <img src={img} alt={`${title} icon`} />
      <TitleSm>{title}</TitleSm>
      <BodyLg>{text}</BodyLg>
    </Container>
  );
}

export default ServiceCard;
