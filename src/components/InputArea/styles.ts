import { styled } from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  font-size: 0.875rem;
  color: var(--zinc-300);
  background: var(--zinc-900);
  border: 0;
  outline: 0;
  resize: none;
  padding: 1rem;
  border-radius: 8px;

  &:focus {
    outline: 1px solid var(--emerald-500);
  }
`;
