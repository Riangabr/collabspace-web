import { Check, X } from "phosphor-react";

import {
  Container,
  Avatar,
  Info,
  User,
  Actions,
  ButtonAccept,
  ButtonRecuse,
} from "./styles";

const RequestFriend: React.FC = () => {
  return (
    <Container>
      <User>
        <Avatar src="https://i.pinimg.com/originals/e4/34/2a/e4342a4e0e968344b75cf50cf1936c09.jpg"></Avatar>

        <Info>
          <h1>Alfa</h1>
          <p>alfadosalfas@gmail.com</p>
        </Info>
      </User>
      <Actions>
        <ButtonAccept>
          <Check />
        </ButtonAccept>

        <ButtonRecuse>
          <X />
        </ButtonRecuse>
      </Actions>
    </Container>
  );
};

export default RequestFriend;
