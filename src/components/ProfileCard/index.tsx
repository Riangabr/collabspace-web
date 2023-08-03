import { ButtonEdit, Container, Cover, Divider } from "./styles";

import Avatar from "../Avatar";

const ProfileCard: React.FC = () => {
  return (
    <Container>
      <header>
        <Cover src="https://i.pinimg.com/474x/ea/80/03/ea8003eda835af024292148060887ed4.jpg" />

        <div>
          <Avatar />
        </div>
      </header>

      <main>
        <h1>Rian Gabriel</h1>
        <p>riangabr2711@speedmail.com</p>
      </main>
      <Divider />

      <footer>
        <ButtonEdit>Editar perfil</ButtonEdit>
      </footer>
    </Container>
  );
};

export default ProfileCard;
