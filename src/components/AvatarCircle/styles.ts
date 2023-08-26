import { styled } from "styled-components";

interface ContainerProps {
  $size: string;
}

export const Container = styled.img<ContainerProps>`
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  display: block;
  background: white;
  border-radius: 100%;
  object-fit: cover;
`;
