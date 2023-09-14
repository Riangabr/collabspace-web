import { styled, css } from "styled-components";

interface AreaEmailProps {
  $areaEmail: boolean;
}

interface AreaPasswordProps {
  $areaPassword: boolean;
}

interface PasswordMeterProps {
  $isWeak: boolean;
}

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: var(--zinc-900);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  min-width: 320px;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  margin: 4rem 0;

  h1 {
    color: var(--zinc-100);
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
  }

  input[type="date"] {
    color: var(--zinc-300);
  }

  input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(66.66%);
  }
`;

export const ErrorAlert = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  border-radius: 6px;
  border: 1px solid var(--red-500);
  color: var(--red-500);
  margin-bottom: 1.5rem;
`;

export const Group = styled.div`
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
  color: var(--zinc-300);
  font-size: 1rem;
  padding: 1.25rem 1rem;
  border-radius: 4px;
  border: 0;
  outline: 0;

  ::placeholder {
    color: ar(--zinc-500);
  }
`;

export const AreaEmail = styled(Group)<AreaEmailProps>`
  max-height: 150px;
  transition: 0.3s ease;
  overflow: hidden;

  ${({ $areaEmail }) =>
    $areaEmail &&
    css`
      max-height: 0;
    `}
`;

export const AreaPassword = styled(Group)<AreaPasswordProps>`
  max-height: 170px;
  transition: 0.3s ease;
  overflow: hidden;

  ${({ $areaPassword }) =>
    $areaPassword &&
    css`
      max-height: 0;
    `};
`;

export const PasswordMeter = styled.div<PasswordMeterProps>`
  height: 2px;
  border-radius: 9999px;
  font-size: 0.75rem;
  text-align: ${({ $isWeak }) => ($isWeak ? "left" : "right")};
  margin-bottom: 0.5rem;

  background: var(--zinc-300);

  &::after {
    content: "Senha fraca";
    display: block;
    padding-top: 2px;
    color: var(--zinc-300);
  }

  ${({ $isWeak }) =>
    !$isWeak &&
    css`
      background: var(--emerald-600);

      &::after {
        content: "Senha forte";
        display: block;
        padding-top: 2px;
        color: var(--emerald-600);
      }
    `}
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 48px;
  background: var(--emerald-600);
  color: var(--zinc-100);
  font-size: 1.125rem;
  font-weight: bold;
  padding: 0 1rem;
  margin-bottom: 1.5rem;
  border: 0;
  outline: 0;
  border-radius: 4px;
  transition: all 0.25s;

  cursor: pointer;

  &:hover {
    background: var(--emerald-800);
  }

  &:disabled {
    background: var(--zinc-600);
    cursor: not-allowed;
  }
`;

export const LinkLogin = styled.div`
  font-size: 0.875rem;
  text-align: center;

  p {
    color: var(--zinc-400);
  }

  a {
    color: var(--emerald-500);
    transition: all 0.15s;

    cursor: pointer;

    &:hover {
      color: var(--emerald-600);
    }
  }
`;
