import { Check, X } from "phosphor-react";

import AvatarCircle from "../AvatarCircle";

import {
  Container,
  User,
  Info,
  Actions,
  ButtonAccept,
  ButtonRecuse,
} from "./styles";

const RequestFriend: React.FC = () => {
  return (
    <Container>
      <User>
        <AvatarCircle src="https://images.generated.photos/rRsRe7d3ekuoklEhgFeJ0mlCEMsuw7je_Wzzmlo_9UM/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjUzMzMyLmpwZw.jpg" />

        <Info>
          <h1>Marta Ribeiro</h1>
          <p>martaribeiro@hotmaadsasdasdasdil.com</p>
        </Info>
      </User>

      <Actions>
        <ButtonAccept>
          <Check size={18} />
        </ButtonAccept>

        <ButtonRecuse>
          <X size={18} />
        </ButtonRecuse>
      </Actions>
    </Container>
  );
};

export default RequestFriend;
