import { useNavigate, NavLink } from "react-router-dom";

import { SignOut, House, Mouse } from "phosphor-react";

import { useAuthentication } from "../../contexts/Authentication";

import { LogoRocket } from "../../assets/sources";

import AvatarCircle from "../AvatarCircle";

import {
  Container,
  Brand,
  Navbar,
  Menu,
  Item,
  Aside,
  AsideButton,
  Divider,
} from "./styles";

const itensFeed = [
  { path: "/feed", icon: <House size={28} weight="fill" /> },
  {
    path: "/me/0bc72890-5689-4213-a976-166cad648961",
    icon: <Mouse size={28} weight="fill" />,
  },
];

const Header: React.FC = () => {
  const navigate = useNavigate();

  const { user, me, signOut } = useAuthentication();

  const handleLogo = () => {
    navigate("/feed");
  };

  return (
    <Container>
      <Brand>
        <LogoRocket onClick={handleLogo} />
      </Brand>

      <Navbar>
        <Menu>
          {itensFeed.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              <Item>{item.icon}</Item>
            </NavLink>
          ))}
        </Menu>

        <Aside>
          <AsideButton title="Sair" onClick={signOut}>
            <SignOut size={18} weight="fill" />
          </AsideButton>

          <Divider />

          <AvatarCircle
            size="40px"
            avatar={user?.avatarUrl}
            onClick={() => me(user?.id)}
          />
        </Aside>
      </Navbar>
    </Container>
  );
};

export default Header;
