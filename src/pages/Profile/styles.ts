import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Content = styled.div`
  width: 75%;
`;

export const Overview = styled.div``;

export const Cover = styled.img`
  display: block;
  width: 100%;
  height: 192px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

export const Avatar = styled.img`
  display: block;
  height: 192px;
  border-radius: 100%;
  object-fit: cover;
  margin-top: -160px;
  margin-left: 2rem;
  border: 2px solid var(--zinc-100);
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 1rem;
  background: var(--zinc-800);
  border-radius: 0 0 8px 8px;
  margin-top: -32px;
  padding: 4rem 1rem 2rem 1rem;
`;

export const General = styled.div`
  flex: 0.7;

  h1 {
    color: var(--zinc-200);
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
  gap: 1rem;

  span {
    color: var(--zinc-300);
    font-weight: 300;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const Contact = styled.div`
  flex: 0.3;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;

  span {
    color: var(--zinc-300);
    font-weight: 300;
  }
`;

export const SideBar = styled.aside``;

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
