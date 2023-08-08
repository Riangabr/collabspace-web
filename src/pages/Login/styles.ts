import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: var(--zinc-900);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 320px;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;

  h1 {
    color: var(--zinc-100);
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 2.5rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-bottom: 1.25rem;
  }
`;

export const Group = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
`;

export const Label = styled.label`
  color: var(--zinc-100);
  font-weight: 300;
`;

export const Input = styled.input`
  height: 48px;
  background: var(--zinc-800);
  color: var(--zinc-100);
  font-size: 1rem;
  padding: 1.25rem 1rem;
  border-radius: 4px;
  border: 0;
  outline: 0;

  ::placeholder {
    color: ar(--zinc-500);
  }
`;

export const Button = styled.button`
  height: 48px;
  background: var(--emerald-600);
  color: var(--zinc-100);
  font-size: 1.125rem;
  font-weight: bold;
  padding: 0 1rem;
  border: 0;
  outline: 0;
  border-radius: 4px;
  transition: all 0.25s;

  cursor: pointer;

  &:hover {
    background: var(--emerald-800);
  }
`;
