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
  const { user, me } = useAuthentication();

  return (
    <Container>
      <Header>
        <Cover src={user?.coverUrl || "https://i.imgur.com/gH2QLjf.png"} />

        <div onClick={() => me(user?.id)}>
          <AvatarSquare avatar={user?.avatarUrl} borderEffect />
        </div>
      </Header>

      <Content>
        <h1 onClick={() => me(user?.id)}>{user?.name}</h1>
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
