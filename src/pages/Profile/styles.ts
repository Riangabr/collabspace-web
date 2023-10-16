import { styled, css } from "styled-components";

interface FriendshipButtonProps {
  $relationship: number;
}

export const Container = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Content = styled.div`
  width: 75%;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  margin-bottom: 2rem;
`;

export const Overview = styled.div``;

export const UserBanner = styled.div`
  position: relative;

  div {
    margin-top: -152px;
    margin-left: 2rem;
  }
`;

export const EditCoverButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border-radius: 100%;
  border: 0;
  outline: 0;
  background: var(--zinc-200);
  color: var(--emerald-600);
  transition: ease 0.15s;

  cursor: pointer;

  &:hover {
    background: var(--zinc-300);
    color: var(--emerald-600);
  }
`;

export const Cover = styled.img`
  display: block;
  width: 100%;
  height: 192px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
  background: var(--zinc-700);
`;

export const EditInfoButton = styled.button`
  position: absolute;
  right: 1rem;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 6px;
  border: 0;
  outline: 0;
  background: transparent;
  color: var(--zinc-300);
  transition: ease 0.15s;

  cursor: pointer;

  &:hover {
    color: var(--zinc-400);
  }
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 1rem;
  background: var(--zinc-800);
  border-radius: 0 0 8px 8px;
  margin-top: -40px;
  padding: 4rem 1rem 2rem 1rem;
`;

export const General = styled.div`
  flex: 0.7;

  h1 {
    color: var(--zinc-100);
    font-size: 1.5rem;
    font-weight: 500;
  }

  p {
    color: var(--zinc-300);
    font-size: 0.875rem;
    margin-top: 4px;
    font-weight: 300;
  }
`;

export const Total = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;

  span {
    color: var(--zinc-300);
    font-weight: 300;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const FriendshipArea = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 1rem;
`;

export const FriendshipButton = styled.button<FriendshipButtonProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${({ $relationship }) => {
    if ($relationship === 1 || $relationship === 2)
      return css`var(--emerald-600)`;
    if ($relationship === 3) return css`var(--red-500)`;
    if ($relationship === 4) return css`var(--blue-600)`;
  }};
  color: var(--white);
  border: 0;
  outline: 0;
  padding: 0.5rem;
  border-radius: 8px;
  transition: 0.15s all;

  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }
`;

export const Contact = styled.div`
  flex: 0.3;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    display: flex;
    align-items: center;
    gap: 8px;

    color: var(--zinc-300);
    font-weight: 300;
  }
`;

export const Friends = styled.div`
  background: var(--zinc-800);
  border-radius: 8px;
  padding: 1.5rem 1.5rem 0 1.5rem;

  h1 {
    font-size: 1.375rem;
    color: var(--zinc-200);
    font-weight: 600;
  }
`;

export const FriendList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, auto);
  gap: 1.5rem;

  margin: 2rem 0;
`;

export const AreaFriendButton = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: -20px;

  button {
    height: 40px;
    padding: 0 1rem;
    outline: 0;
    border: 1px solid var(--zinc-700);
    border-radius: 8px;
    font-weight: 500;
    color: var(--zinc-300);
    background: var(--zinc-800);
    transition: all 0.15s;

    cursor: pointer;

    &:hover {
      color: var(--zinc-200);
      background: var(--zinc-700);
    }
  }
`;

export const Sidebar = styled.aside`
  width: 25%;
`;

export const Requests = styled.div`
  height: 32rem;
  background: var(--zinc-800);
  border-radius: 8px;
  padding: 1rem;

  h1 {
    font-size: 1rem;
    color: var(--zinc-400);
    font-weight: 500;
  }
`;

export const RequestList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 1rem;
`;

export const FormEdit = styled.form`
  height: 100%;
  padding: 2rem 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const InputEdit = styled.input`
  width: 100%;
  height: 48px;
  background: var(--zinc-700);
  color: var(--zinc-300);
  font-size: 1rem;
  padding: 1.25rem 1rem;
  border-radius: 4px;
  border: 0;
  outline: 0;

  &::placeholder {
    color: var(--zinc-400);
  }
`;

export const ButtonEdit = styled.button`
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem 1rem;
  border: 0;
  outline: 0;
  border-radius: 4px;
  color: var(--white);
  font-weight: 600;
  background: var(--emerald-500);
  transition: all 0.15s;

  cursor: pointer;

  &:hover {
    color: var(--zinc-200);
    background: var(--emerald-600);
  }
`;

export const PreviewAvatar = styled.img`
  width: 100%;
  height: 100%;
`;
