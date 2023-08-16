import { styled } from "styled-components";

export const Container = styled.button`
  width: 150px;
  padding: 1rem 1.5rem;
  background: var(--emerald-600);
  color: var(--zinc-200);
  font-size: 1rem;
  font-weight: bold;
  border: 1px solid var(--emerald-600);
  outline: 0;
  border-radius: 8px;
  transition: all 0.25s;

  cursor: pointer;

  &:hover {
    color: var(--emerald-600);
    background: transparent;
  }
`;
