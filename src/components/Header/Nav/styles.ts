import styled, { css } from "styled-components";

interface INavProps {
  isOpen: boolean;
}

export const Container = styled.nav<INavProps>`
  ${({ isOpen }) => css`
    background: linear-gradient(
      0deg,
      rgba(201, 201, 201, 0.7) 0%,
      rgba(45, 49, 77, 1) 100%
    );
    height: calc(100vh - 60px);
    left: 50%;
    opacity: ${isOpen ? 1 : 0};
    padding-top: 30px;
    position: absolute;
    top: 52px;
    transform: translateX(-50%) rotateX(${isOpen ? "0deg" : "-90deg"});
    transform-origin: top center;
    transition: all 250ms ease-in-out;
    width: 100%;

    @media (min-width: 768px) {
      background: none;
      flex: 1;
      height: 100%;
      left: auto;
      opacity: 1;
      padding: 0;
      position: relative;
      top: auto;
      transform: translateX(0%) rotateX(0deg);
      width: auto;
    }
  `}
`;

export const List = styled.ul`
  background: white;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 0 auto;
  padding: 20px 0;
  text-align: center;
  width: 90%;

  @media (min-width: 768px) {
    height: 100%;
    background: none;
    flex-direction: row;
    justify-content: center;
    padding: 0;
    width: auto;
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.primary.DarkBlue};
  font-size: 16px;

  &:hover {
    opacity: 0.8;
  }

  @media (min-width: 768px) {
    display: grid;
    height: 100%;
    opacity: 0.7;
    place-items: center;
    position: relative;

    &:after {
      background: linear-gradient(
        90deg,
        rgba(49, 211, 92, 1) 0%,
        rgba(43, 183, 218, 1) 100%
      );
      bottom: 0;
      content: "";
      display: block;
      height: 3px;
      position: absolute;
      transition: all 150ms ease-in;
      width: 0px;
    }

    &:hover {
      opacity: 1;

      &::after {
        width: 100%;
      }
    }
  }
`;
