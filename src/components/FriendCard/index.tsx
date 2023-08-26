import AvatarSquare from "../AvatarSquare";

import { Container, Info } from "./styles";

const FriendCard: React.FC = () => {
  return (
    <Container>
      <AvatarSquare
        size="72px"
        src="https://cutewallpaper.org/29/dual-screen-mr-robot-wallpaper/247286624.jpg"
      />

      <Info>
        <h1>Rian Gabriel</h1>
        <p>268 amigos em comum</p>
      </Info>
    </Container>
  );
};

export default FriendCard;
