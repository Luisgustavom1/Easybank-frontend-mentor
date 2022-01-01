import React from "react";
import { BodyLg, TitleLg } from "../../../styles/typography";
import Button from "../../Button";

import { Container } from "./styles";

function TextsIntroduction() {
  return (
    <Container>
      <TitleLg>Next generation digital banking</TitleLg>
      <BodyLg>
        Take your finacial life online. Your Easybank account will be a
        one-stop-shop for spending, saving, budgeting, investing, and much more.
      </BodyLg>
      <div>
        <Button>Request Invite</Button>
      </div>
    </Container>
  );
}

export default TextsIntroduction;
