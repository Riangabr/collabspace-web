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
  width: 360px;
  padding: 0 16px;
  display: flex;
  flex-direction: column;

  h1 {
    color: var(--zinc-100);
    font-size: 48px;
    font-weight: 600;
    margin-bottom: 40px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 20px;
  }
`;

export const Label = styled.label`
  color: var(--zinc-100);
  font-weight: 300;
`;
export const Input = styled.input`
  height: 48px;
  background: var(--zinc-500);
  color: var(--zinc-100);
  padding: 20px 16px;
  border-radius: 4px;
  border: 0;
  outline: 0;

  ::placeholder {
    color: var(--zinc-800);
  }
`;

export const Button = styled.button`
  height: 48px;
  background: var(--emerald-600);
  color: var(--zinc-100);
  font-size: 18px;
  font-weight: bold;
  padding: 0 16px;
  border: 0;
  outline: 0;
  border-radius: 4px;

  cursor: pointer;
`;
