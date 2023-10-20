import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Info = styled.div`
  cursor: pointer;

  h1 {
    font-size: 1.125rem;
    color: var(--zinc-200);
    font-weight: 500;
  }

  p {
    font-size: 0.875rem;
    color: var(--zinc-200);
    font-weight: 200;
  }
`;
