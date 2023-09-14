import { styled } from "styled-components";

export const Container = styled.aside`
  width: 25%;
  height: 350px;
  background: var(--zinc-800);
  border-radius: 8px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    margin-top: -28px;
  }
`;

export const Cover = styled.img`
  width: 100%;
  height: 6rem;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 1rem;

  h1 {
    font-size: 1rem;
    color: var(--zinc-200);
    font-weight: bold;

    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    font-size: 0.875rem;
    color: var(--zinc-500);
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  margin: 2rem 0;
  background: var(--zinc-700);
`;

export const ButtonEdit = styled.button`
  padding: 1rem;
  font-size: 1rem;
  font-weight: bold;
  color: var(--emerald-600);
  background: transparent;
  border: 1px solid var(--emerald-600);
  border-radius: 8px;
  outline: 0;
  transition: all 0.25s;

  cursor: pointer;

  &:hover {
    color: var(--zinc-100);
    background: var(--emerald-600);
  }
`;
