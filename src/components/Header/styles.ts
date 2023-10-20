import { styled } from "styled-components";

export const Container = styled.header`
  width: 100vw;
  height: 4rem;
  background: var(--zinc-800);

  display: flex;
  align-items: center;
  gap: 2rem;

  padding: 0 2rem;

  position: fixed;
  z-index: 999;

  svg {
    cursor: pointer;
  }

  color: white;
`;

export const Brand = styled.div`
  width: 25%;

  display: flex;
  align-items: center;
`;

export const Navbar = styled.nav`
  width: 75%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Menu = styled.div`
  height: 100%;

  display: flex;

  .active {
    button {
      padding: 0 calc(2rem + 8px);
      border-bottom: 3px solid var(--emerald-600);

      svg {
        color: var(--emerald-600);
      }
    }
  }

  .inactive {
    margin: 4px 8px;

    button {
      border-bottom: 3px solid transparent;
      border-radius: 8px;
      transition: all 0.15s;

      &:hover {
        background: var(--zinc-700);
      }

      svg {
        color: var(--zinc-400);
      }
    }
  }
`;

export const Item = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  padding: 0 2rem;
  background: transparent;
  outline: 0;
  border: 0;

  cursor: pointer;
`;

export const Aside = styled.aside`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 8px;
`;

export const AsideButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--zinc-700);
  border: 0;
  outline: 0;
  border-radius: 100%;
  padding: 0.75rem;
  transition: all 0.15s;

  cursor: pointer;

  svg {
    color: var(--zinc-200);
  }

  &:hover {
    background: var(--zinc-600);
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 2rem;
  background: var(--zinc-600);
  margin: 0 4px;
`;
