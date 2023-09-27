import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  overflow-y: hidden;
`;

export const Title = styled.h1`
  padding: 1rem 1rem 0;
  font-size: 1.5rem;
  font-weight: 400;
  color: var(--zinc-200);
`;

export const Navbar = styled.div`
  padding: 1rem;
  color: var(--emerald-500);
`;

export const Reactions = styled.div`
  height: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar-track {
    background: var(--zinc-900);
  }

  &::-webkit-scrollbar-thumb {
    background: var(--zinc-700);
  }

  &::-webkit-scrollbar {
    width: 0.5rem;
  }
`;

export const Reaction = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  padding: 1rem;
  border-top: 1px solid var(--zinc-700);

  &:last-child {
    border-bottom: 1px solid var(--zinc-700);
  }
`;

export const AuthorInfo = styled.div`
  h1 {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--zinc-200);
  }

  p {
    font-size: 0.875rem;
    color: var(--zinc-400);
  }

  cursor: pointer;
`;

export const NoReactions = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1rem;
  font-weight: 300;
  color: var(--zinc-400);
  border-top: 1px solid var(--zinc-700);
`;
