import {
  Container,
  Content,
  Header,
  Cover,
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
            src="https://animepersona.com/wp-content/uploads/2023/03/1678110464420.jpg"
            borderEffect
          />
        </div>
      </Header>

      <Content>
        <h1>Rian Gabriel</h1>
        <p>rianagb2711@speedmail.com</p>
      </Content>

      <Divider />

      <Footer>
        <ButtonEdit>Editar seu perfil</ButtonEdit>
      </Footer>
    </Container>
  );
};

export default ProfileCard;
