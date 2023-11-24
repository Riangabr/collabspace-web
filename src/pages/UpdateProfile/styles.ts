import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Forms = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Form = styled.form`
  width: 100%;
  background: var(--zinc-800);
  padding: 1.5rem;
  border-radius: 0.5rem;
  h1 {
    font-size: 22px;
    font-weight: 500;
    color: var(--zinc-200);
  }
  input[type="date"] {
    color: var(--zinc-300);
  }
  input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(66.66%);
  }
`;

export const Groups = styled.div`
  width: 100%;
  display: flex;
  gap: 1.5rem;
  margin: 1.5rem 0 1.5rem 0;
`;

export const Group = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  textarea {
    margin-bottom: 2rem;
    background: var(--zinc-700);
    color: var(--zinc-300);

    &::placeholder {
      color: var(--zinc-400);
    }
  }
`;

export const Label = styled.label`
  font-size: 0.875rem;
  color: var(--zinc-100);
  font-weight: 300;
`;

export const Input = styled.input`
  height: 48px;
  background: var(--zinc-700);
  color: var(--zinc-300);
  font-size: 0.875rem;
  padding: 1.25rem 1rem;
  border-radius: 4px;
  border: 0;
  outline: 0;

  &::placeholder {
    color: var(--zinc-400);
  }

  &:focus {
    outline: 1px solid var(--emerald-500);
  }
`;

export const Select = styled.select`
  height: 48px;
  background: var(--zinc-700);
  color: var(--zinc-300);
  font-size: 0.875rem;
  padding: 0 0.75rem;
  border-radius: 4px;
  border: 0;
  outline: none !important;
  box-shadow: 0;
  &::placeholder {
    color: var(--zinc-300);
  }
`;
