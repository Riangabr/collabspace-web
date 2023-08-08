import { Container, Cover, Divider, ButtonEdit } from "./styles";

import Avatar from "../Avatar";

const ProfileCard: React.FC = () => {
  return (
    <Container>
      <header>
        <Cover src="https://cutewallpaper.org/29/dual-screen-mr-robot-wallpaper/247286624.jpg" />

        <div>
          <Avatar />
        </div>
      </header>

      <main>
        <h1>Natan Foleto</h1>
        <p>natanfoleto@hotmail.com</p>
      </main>

      <Divider />

      <footer>
        <ButtonEdit>Editar seu perfil</ButtonEdit>
      </footer>
    </Container>
  );
};

export default ProfileCard;
