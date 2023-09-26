import AvatarSquare from "../AvatarSquare";

import { Container, Info } from "./styles";

const FriendCard: React.FC = () => {
  return (
    <Container>
      <AvatarSquare
        size="72px"
        avatar="https://www.byrdie.com/thmb/jbHGe-TMbHgP3VmJxuivdNY8aCA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/promo-f479f33fd9304b3997cc0f7c97c1a245-1aebc5f0ea88447e840db1f8fd67f802.jpg"
      />

      <Info>
        <h1>Natan Foleto</h1>
        <p>268 amigos em comum</p>
      </Info>
    </Container>
  );
};

export default FriendCard;
