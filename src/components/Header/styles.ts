import styled, { css } from "styled-components";
import { Button } from "../Button/styles";

interface IMenuProps {
  isOpen: boolean;
}

export const Container = styled.header`
  align-items: center;
  background: white;
  display: flex;
  height: 60px;
  padding: 0 5%;
  justify-content: space-between;
  z-index: 998;
  position: relative;

  @media (max-width: 767.5px) {
    button {
      display: none;
    }
  }
`;

export const MenuHamburguer = styled.div<IMenuProps>`
  ${({ isOpen }) => css`
    .menu {
      display: ${isOpen ? "none" : "block"};
    }

    .menu-close {
      display: ${isOpen ? "block" : "none"};
    }

    @media (min-width: 768px) {
      .menu {
        display: none;
      }

      .menu-close {
        display: none;
      }
    }
  `}
`;

export const NewButton = styled(Button)`
  padding: 10px 40px;
`;
