import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 1rem;
`;

export const CommentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputArea = styled.div`
  background: var(--zinc-900);
  border-radius: 8px;
  padding: 1rem 1rem 1.5rem 1rem;

  p {
    margin-top: 1rem;
    font-size: 0.875rem;
    color: var(--zinc-300);
  }
`;

export const AuthorAndTime = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  h1 {
    max-width: max-content;
    font-size: 0.875rem;
    color: var(--zinc-200);

    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  time {
    font-size: 0.75rem;
    color: var(--zinc-500);
  }
`;

export const Interactions = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 8px;

  color: var(--zinc-400);
  font-size: 0.875rem;

  svg {
    margin-bottom: 2px;
    color: var(--emerald-600);
    cursor: pointer;
  }

  span {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ButtonDelete = styled.button`
  position: absolute;
  top: 0;
  right: 0;

  border: 0;
  outline: 0;
  color: var(--zinc-500);
  background: transparent;
  transition: all 0.15s;

  cursor: pointer;

  &:hover {
    color: var(--red-500);
  }
`;
