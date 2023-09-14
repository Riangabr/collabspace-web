import { styled } from "styled-components";

interface ContainerProps {
  $size: string;
}

export const Container = styled.img<ContainerProps>`
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  display: block;
  object-fit: cover;
  border-radius: 100%;

  cursor: pointer;
`;
