import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const User = styled.div`
  width: 80%;

  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Info = styled.div`
  overflow: hidden;
  cursor: pointer;

  h1 {
    font-size: 0.875rem;
    color: var(--zinc-200);
  }

  p {
    font-size: 0.875rem;
    color: var(--zinc-200);
    font-weight: 200;
    text-overflow: ellipsis;
  }
`;

export const Actions = styled.div`
  width: 20%;

  display: flex;
  justify-content: space-between;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    outline: 0;
    background: transparent;

    cursor: pointer;
  }
`;

export const ButtonAccept = styled.button`
  color: var(--emerald-500);
`;

export const ButtonRecuse = styled.button`
  color: var(--red-500);
`;
