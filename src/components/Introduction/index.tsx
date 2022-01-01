import React from "react";

import { Container } from "./styles";
import mockups from "../../assets/images/image-mockups.png";
import TextsIntroduction from "./TextsIntroduction";

function Introduction() {
  return (
    <Container>
      <img className="img-mockups" src={mockups} alt="Mockups illustration" />
      <TextsIntroduction />
    </Container>
  );
}

export default Introduction;
