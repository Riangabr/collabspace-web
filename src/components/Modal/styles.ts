import styled from "styled-components";

interface ContentProps {
  $width: string;
  $height?: string;
}

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  background: rgb(0, 0, 0, 0.75);
`;

export const Content = styled.div<ContentProps>`
  position: relative;

  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};

  background: var(--zinc-800);
  border-radius: 8px;

  margin: 2.5rem 0;

  svg {
    position: absolute;
    top: 1rem;
    right: 1rem;

    color: var(--zinc-200);

    cursor: pointer;
  }
`;
