import { useAuthentication } from "../../contexts/Authentication";

import AvatarSquare from "../AvatarSquare";

import { Container, Info } from "./styles";

interface FriendCardProps {
  id: string;
  name: string;
  avatarUrl: string;
}

const FriendCard: React.FC<FriendCardProps> = ({ id, name, avatarUrl }) => {
  const { me } = useAuthentication();

  return (
    <Container>
      <AvatarSquare size="72px" avatar={avatarUrl} onClick={() => me(id)} />

      <Info onClick={() => me(id)}>
        <h1>{name}</h1>
        <p>268 amigos em comum</p>
      </Info>
    </Container>
  );
};

export default FriendCard;
