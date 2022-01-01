import React from "react";

import { Button as ButtonContainer } from "./styles";

interface IButtonProps {
  children: React.ReactNode;
}

function Button({ children }: IButtonProps) {
  return <ButtonContainer>{children}</ButtonContainer>;
}

export default Button;
