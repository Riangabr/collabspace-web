import { styled, css } from "styled-components";

interface CommentAreaProps {
  $commentArea: boolean;
}

export const Container = styled.div`
  width: 100%;
  padding: 40px;
  background: var(--zinc-800);
  border-radius: 8px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  time {
    font-size: 0.875rem;
    color: var(--zinc-500);
  }
`;

export const Author = styled.div`
  display: flex;
  gap: 1rem;
`;

export const AuthorInfo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 1rem;
    color: var(--zinc-200);
  }

  p {
    font-size: 0.875rem;
    color: var(--zinc-500);
  }
`;

export const Content = styled.div`
  margin-top: 1.5rem;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    font-size: 1rem;
    color: var(--zinc-300);
  }
`;

export const Hashtags = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;

  span {
    font-size: 1rem;
    font-weight: bold;
    color: var(--emerald-600);

    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: var(--zinc-700);
  margin: 2rem 0;
`;

export const Interactions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  margin-top: 2rem;
`;

export const InteractionInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border-top: 1px solid var(--zinc-700);
  border-bottom: 1px solid var(--zinc-700);

  span {
    font-size: 0.875rem;
    color: var(--zinc-400);

    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const CountReaction = styled.div`
  span {
    display: flex;
    gap: 4px;
  }

  svg {
    color: var(--emerald-600);
  }
`;

export const CountComment = styled.div``;

export const InteractionAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
`;

export const ButtonAction = styled.button`
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background: transparent;
  border: 0;
  outline: 0;
  border-radius: 4px;
  padding: 0.5rem 2rem;
  font-size: 0.875rem;
  color: var(--zinc-400);
  font-weight: 500;
  transition: all 0.15s;

  cursor: pointer;

  &:hover {
    background: var(--zinc-700);
  }
`;

export const CommentArea = styled.div<CommentAreaProps>`
  margin-top: 2rem;

  ${({ $commentArea }) =>
    !$commentArea &&
    css`
      display: none;
    `}
`;

export const CommentForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-size: 1rem;
    color: var(--zinc-200);
  }
`;

export const Comments = styled.div``;
