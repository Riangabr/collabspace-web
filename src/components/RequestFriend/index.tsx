import { Check, X } from "phosphor-react";
import { useCallback } from "react";
import { toast } from "react-toastify";

import { useAuthentication } from "../../contexts/Authentication";
import { acceptRequest, recuseRequest } from "../../services/friends";

import AvatarCircle from "../AvatarCircle";

import {
  Actions,
  ButtonAccept,
  ButtonRecuse,
  Container,
  Info,
  User,
} from "./styles";

interface RequestFriendProps {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  userAvatarUrl: string | null;
  onRemove(): void;
}

const RequestFriend: React.FC<RequestFriendProps> = ({
  id,
  userId,
  userName,
  userEmail,
  userAvatarUrl,
  onRemove,
}) => {
  const { me } = useAuthentication();

  const handleAcceptRequest = useCallback(async () => {
    try {
      const { result, message } = await acceptRequest({
        id,
      });

      if (result === "success") onRemove();
      if (result === "error") toast.error(message);
    } catch (error: any) {
      toast.error(error.message);
    }
  }, [id, onRemove]);

  const handleRecuseRequest = useCallback(async () => {
    try {
      const { result, message } = await recuseRequest({
        id,
      });

      if (result === "success") onRemove();
      if (result === "error") toast.error(message);
    } catch (error: any) {
      toast.error(error.message);
    }
  }, [id, onRemove]);

  return (
    <Container>
      <User>
        <AvatarCircle avatar={userAvatarUrl} onClick={() => me(userId)} />

        <Info onClick={() => me(userId)}>
          <h1>{userName}</h1>
          <p>{userEmail}</p>
        </Info>
      </User>

      <Actions>
        <ButtonAccept onClick={handleAcceptRequest}>
          <Check size={18} />
        </ButtonAccept>

        <ButtonRecuse onClick={handleRecuseRequest}>
          <X size={18} />
        </ButtonRecuse>
      </Actions>
    </Container>
  );
};

export default RequestFriend;
