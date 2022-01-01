import styled from "styled-components";

export const Button = styled.button`
  background: linear-gradient(
    90deg,
    rgba(49, 211, 92, 1) 0%,
    rgba(43, 183, 218, 1) 100%
  );
  border-radius: 30px;
  color: ${({ theme }) => theme.neutral.White};
  font-size: 14px;
  font-weight: 600;
  padding: 15px 40px;

  &:hover {
    opacity: 0.8;
  }
`;
