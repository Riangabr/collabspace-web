import { useNavigate } from "react-router-dom";

import { useAuthentication } from "../../contexts/Authentication";

import {
  Container,
  Header,
  Cover,
  Content,
  Divider,
  ButtonEdit,
  Footer,
} from "./styles";

import AvatarSquare from "../AvatarSquare";

const ProfileCard: React.FC = () => {
  const { user } = useAuthentication();

  const navigate = useNavigate();

  const handleMe = () => {
    if (user) navigate(`/me/${user.id}`);
  };

  return (
    <Container>
      <Header>
        <Cover src={"https://i.imgur.com/gH2QLjf.png"} />

        <div onClick={handleMe}>
          <AvatarSquare
            src={user?.avatarUrl || "https://i.imgur.com/HYrZqHy.jpg"}
            borderEffect
          />
        </div>
      </Header>

      <Content>
        <h1 onClick={handleMe}>{user?.name}</h1>
        <p>{user?.email}</p>
      </Content>

      <Divider />

      <Footer>
        <ButtonEdit>Editar seu perfil</ButtonEdit>
      </Footer>
    </Container>
  );
};

export default ProfileCard;
