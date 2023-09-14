import { styled, css } from "styled-components";

interface ContainerProps {
  $size: string;
  $borderEffect?: boolean;
}

export const Container = styled.img<ContainerProps>`
  width: ${({ $size }) => $size};
  height: ${({ $size }) => $size};
  min-width: 56px;
  min-height: 56px;
  background: white;
  border-radius: 6px;
  object-fit: cover;

  cursor: pointer;

  ${({ $borderEffect }) =>
    $borderEffect &&
    css`
      border: 3px solid var(--zinc-800);
      box-shadow: 0px 0px 1px 2px var(--emerald-500);
    `}
`;
