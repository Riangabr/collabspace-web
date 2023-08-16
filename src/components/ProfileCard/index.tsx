import {
  Container,
  Header,
  Cover,
  Content,
  Divider,
  ButtonEdit,
  Footer,
} from "./styles";

import Avatar from "../Avatar";

const ProfileCard: React.FC = () => {
  return (
    <Container>
      <Header>
        <Cover src="https://cutewallpaper.org/29/dual-screen-mr-robot-wallpaper/247286624.jpg" />

        <div>
          <Avatar
            src="https://i.pinimg.com/736x/b7/65/02/b76502e936cd209b595bd7a537e74db4.jpg"
            borderEffect
          />
        </div>
      </Header>

      <Content>
        <h1>Natan Foleto</h1>
        <p>natanfoleto@hotmail.com</p>
      </Content>

      <Divider />

      <Footer>
        <ButtonEdit>Editar seu perfil</ButtonEdit>
      </Footer>
    </Container>
  );
};

export default ProfileCard;
