import { useState, useEffect, useCallback, FormEvent } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import moment from "moment";

import { IUser } from "../../services/users/types";
import { listUserById, updateAvatar, updateCover } from "../../services/users";
import { IFriend, IRequest } from "../../services/friends/types";
import {
  acceptRequest,
  cancelRequest,
  createFriend,
  deleteFriend,
  listAllFriendsByUser,
  listAllRequestsByUser,
  recuseRequest,
} from "../../services/friends";

import LayoutDefault from "../../layouts/Default";

import AvatarCircle from "../../components/AvatarCircle";
import RequestFriend from "../../components/RequestFriend";
import FriendCard from "../../components/FriendCard";
import Modal from "../../components/Modal";

import { useAuthentication } from "../../contexts/Authentication";

import {
  Camera,
  PencilSimple,
  MapPin,
  Phone,
  Clock,
  UserCirclePlus,
  UserCircleMinus,
} from "phosphor-react";

import {
  Container,
  Content,
  Overview,
  UserBanner,
  Cover,
  EditCoverButton,
  UserInfo,
  EditInfoButton,
  General,
  Total,
  FriendshipArea,
  FriendshipButton,
  Contact,
  Friends,
  FriendList,
  AreaFriendButton,
  Sidebar,
  Requests,
  RequestList,
  FormEdit,
  InputEdit,
  ButtonEdit,
  PreviewAvatar,
} from "./styles";

moment.defineLocale("pt-br", {
  weekdays: "Segunda_Terça_Quarta_Quinta_Sexta_Sábado_Domingo".split("_"),
  months:
    "Janeiro_Fereveiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split(
      "_",
    ),
});

const Profile: React.FC = () => {
  const { id } = useParams();

  const {
    user: userLogged,
    handleAvatarUrl,
    handleCoverUrl,
  } = useAuthentication();

  const [user, setUser] = useState<IUser | null>(null);
  const [friends, setFriends] = useState<IFriend[]>([]);
  const [requests, setRequests] = useState<IRequest[]>([]);
  const [userLoggedRequests, setUserLoggedRequests] = useState<IRequest[]>([]);

  const [relationship, setRelationship] = useState(0);
  const [relationshipId, setRelationshipId] = useState<string>();
  const [modalEditAvatar, setModalEditAvatar] = useState(false);
  const [modalEditCover, setModalEditCover] = useState(false);
  const [modalPreviewAvatar, setModalPreviewAvatar] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [coverUrl, setCoverUrl] = useState("");

  const handleListUserById = useCallback(async () => {
    try {
      if (id) {
        const { result, message, data } = await listUserById({ id });

        if (result === "success") {
          if (data) setUser(data.user);
        }

        if (result === "error") toast.error(message);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  }, [id]);

  const handleListAllFriendsByUser = useCallback(async () => {
    try {
      if (id) {
        const { result, data, message } = await listAllFriendsByUser({ id });

        if (result === "success") {
          if (data?.friends) setFriends(data.friends);
        }

        if (result === "error") toast.error(message);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  }, [id]);

  const handleListAllRequestsByUser = useCallback(async () => {
    try {
      if (id) {
        const { result, data, message } = await listAllRequestsByUser({ id });

        if (result === "success") {
          if (data?.requests) setRequests(data.requests);
        }

        if (result === "error") toast.error(message);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  }, [id]);

  const handleListAllRequestsByUserLogged = useCallback(async () => {
    try {
      if (userLogged?.id) {
        const { result, data, message } = await listAllRequestsByUser({
          id: userLogged.id,
        });

        if (result === "success") {
          if (data?.requests) setUserLoggedRequests(data.requests);
        }

        if (result === "error") toast.error(message);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  }, [userLogged]);

  const handleToggleRelationship = useCallback(async () => {
    try {
      switch (relationship) {
        case 1: // Enviar uma solicitação de amizade
          if (id) {
            const { result, data, message } = await createFriend({ id });

            if (result === "success") {
              if (data) {
                setRelationship(2);
                setRelationshipId(data.id);
              }
            }

            if (result === "error") toast.error(message);
          }
          break;
        case 2: // Cancelar a solicitação enviada
          if (relationshipId) {
            const { result, message } = await cancelRequest({
              id: relationshipId,
            });

            if (result === "success") setRelationship(1);
            if (result === "error") toast.error(message);
          }
          break;
        case 3: // Desfazer a amizade
          if (relationshipId) {
            const { result, message } = await deleteFriend({
              id: relationshipId,
            });

            if (result === "success") setRelationship(1);
            if (result === "error") toast.error(message);
          }
          break;
        case 4: // Aceitar o pedido de amizade
          if (relationshipId) {
            const { result, message } = await acceptRequest({
              id: relationshipId,
            });

            if (result === "success") setRelationship(3);
            if (result === "error") toast.error(message);
          }
          break;
        default:
          break;
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  }, [id, relationship, relationshipId]);

  const handleRecuseRequest = useCallback(async () => {
    try {
      if (relationshipId) {
        const { result, message } = await recuseRequest({ id: relationshipId });

        if (result === "success") setRelationship(1);
        if (result === "error") toast.error(message);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  }, [relationshipId]);

  const handleRemoveRequest = useCallback(
    async (id: string) => {
      setRequests(requests.filter((request) => request.id !== id));

      handleListAllFriendsByUser();
    },
    [requests, handleListAllFriendsByUser],
  );

  const handleUpdateAvatar = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      try {
        const { result, message } = await updateAvatar({ avatarUrl });

        if (result === "success") {
          handleAvatarUrl(avatarUrl);
          toast.success(message);
          setModalEditAvatar(!modalEditAvatar);
        }

        if (result === "error") toast.error(message);
      } catch (error: any) {
        toast.error(error.message);
      }
    },
    [avatarUrl, handleAvatarUrl, modalEditAvatar],
  );

  const handleUpdateCover = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      try {
        const { result, message } = await updateCover({ coverUrl });

        if (result === "success") {
          handleCoverUrl(coverUrl);
          toast.success(message);
          setModalEditCover(!modalEditCover);
        }

        if (result === "error") toast.error(message);
      } catch (error: any) {
        toast.error(error.message);
      }
    },
    [coverUrl, handleCoverUrl, modalEditCover],
  );

  function toggleModalEditAvatar() {
    setModalEditAvatar(!modalEditAvatar);
  }

  function toggleModalEditCover() {
    setModalEditCover(!modalEditCover);
  }

  function toggleModalPreviewAvatar() {
    if (user?.avatarUrl) setModalPreviewAvatar(!modalPreviewAvatar);
    else setModalPreviewAvatar(false);
  }

  useEffect(() => {
    handleListUserById();
    handleListAllFriendsByUser();
    handleListAllRequestsByUser();
    handleListAllRequestsByUserLogged();
  }, [
    id,
    relationship,
    handleListUserById,
    handleListAllFriendsByUser,
    handleListAllRequestsByUser,
    handleListAllRequestsByUserLogged,
  ]);

  useEffect(() => {
    let leave = false;
    const userLoggedId = userLogged?.id;

    if (userLoggedId) {
      for (const friend of friends) {
        if ([friend.user1.id, friend.user2.id].includes(userLoggedId)) {
          setRelationship(3);
          setRelationshipId(friend.id);
          leave = true;

          break;
        }
      }

      for (const request of requests) {
        if (request.user1.id === userLoggedId) {
          setRelationship(2);
          setRelationshipId(request.id);
          leave = true;

          break;
        }
      }
    }

    for (const request of userLoggedRequests) {
      if (request.user1.id === id) {
        setRelationship(4);
        setRelationshipId(request.id);
        leave = true;

        break;
      }
    }

    if (!leave) setRelationship(1);
  }, [id, userLogged?.id, friends, requests, userLoggedRequests]);

  const isOwner = id === userLogged?.id;

  return (
    <LayoutDefault>
      <Container>
        <Content>
          <Overview>
            <UserBanner>
              {isOwner && (
                <EditCoverButton onClick={toggleModalEditCover}>
                  <Camera size={22} weight="fill" />
                </EditCoverButton>
              )}

              <Cover
                src={
                  coverUrl ||
                  user?.coverUrl ||
                  "https://i.imgur.com/gH2QLjf.png"
                }
              />

              <div>
                <AvatarCircle
                  size="192px"
                  avatar={avatarUrl || user?.avatarUrl}
                  onClick={
                    isOwner ? toggleModalEditAvatar : toggleModalPreviewAvatar
                  }
                />
              </div>

              {isOwner && (
                <EditInfoButton>
                  <PencilSimple size={22} weight="bold" />
                </EditInfoButton>
              )}
            </UserBanner>

            <UserInfo>
              <General>
                <h1>{user?.name}</h1>
                <p>{user?.bio}</p>

                <Total>
                  <span>
                    <strong>115</strong> publicações
                  </span>
                  <span>
                    <strong>{friends.length}</strong> amigos
                  </span>
                </Total>

                {/*
                  1 - Adicionar amigo
                  2 - Cancelar solicitação
                  3 - Desfazer amizade
                  4 - Aceitar pedido | Recusar pedido
                */}

                {!isOwner && (
                  <FriendshipArea>
                    <FriendshipButton
                      $relationship={relationship}
                      onClick={handleToggleRelationship}
                    >
                      {relationship === 1 ? (
                        <UserCirclePlus size={20} weight="fill" />
                      ) : relationship === 2 ? (
                        <UserCircleMinus size={20} weight="fill" />
                      ) : relationship === 3 ? (
                        <UserCircleMinus size={20} weight="fill" />
                      ) : relationship === 4 ? (
                        <UserCirclePlus size={20} weight="fill" />
                      ) : null}

                      {relationship === 1
                        ? "Adicionar amigo"
                        : relationship === 2
                        ? "Cancelar solicitação"
                        : relationship === 3
                        ? "Desfazer amizade"
                        : relationship === 4
                        ? "Aceitar pedido"
                        : null}
                    </FriendshipButton>

                    {relationship === 4 && (
                      <FriendshipButton
                        $relationship={relationship}
                        onClick={handleRecuseRequest}
                      >
                        <UserCircleMinus size={20} weight="fill" />
                        Recusar pedido
                      </FriendshipButton>
                    )}
                  </FriendshipArea>
                )}
              </General>

              <Contact>
                <span>
                  <MapPin size={20} weight="bold" />
                  Jaborandi, São Paulo, Brasil
                </span>

                {user?.telephone && (
                  <span>
                    <Phone size={20} weight="bold" />
                    {user.telephone}
                  </span>
                )}

                <span>
                  <Clock size={20} weight="bold" />
                  {moment(user?.createdAt).format("[Entrou em] MMMM [de] YYYY")}
                </span>
              </Contact>
            </UserInfo>
          </Overview>

          <Friends>
            <h1>Amigos</h1>

            <FriendList>
              {friends.map((friend) => {
                let userId = friend.user1.id;
                let userName = friend.user1.name;
                let userAvatarUrl = friend.user1.avatarUrl;

                if (friend.user1.id === id) {
                  userId = friend.user2.id;
                  userName = friend.user2.name;
                  userAvatarUrl = friend.user2.avatarUrl;
                }

                return (
                  <FriendCard
                    key={friend.id}
                    id={userId}
                    name={userName}
                    avatarUrl={userAvatarUrl}
                  />
                );
              })}
            </FriendList>

            <AreaFriendButton>
              <button>Ver todos os amigos</button>
            </AreaFriendButton>
          </Friends>
        </Content>

        <Sidebar>
          {isOwner && (
            <Requests>
              <h1>Solicitações de amizade</h1>

              <RequestList>
                {requests.map((request) => (
                  <RequestFriend
                    key={request.id}
                    id={request.id}
                    userId={request.user1.id}
                    userName={request.user1.name}
                    userEmail={request.user1.name}
                    userAvatarUrl={request.user1.avatarUrl}
                    onRemove={() => handleRemoveRequest(request.id)}
                  />
                ))}
              </RequestList>
            </Requests>
          )}
        </Sidebar>

        <Modal
          width="75%"
          height="120px"
          isOpen={modalEditAvatar}
          onClose={toggleModalEditAvatar}
        >
          <FormEdit onSubmit={handleUpdateAvatar}>
            <InputEdit
              name="avatarUrl"
              type="text"
              value={avatarUrl}
              onChange={(e) => {
                setAvatarUrl(e.target.value);
              }}
              placeholder="URL da imagem"
            />
            <ButtonEdit>SALVAR</ButtonEdit>
          </FormEdit>
        </Modal>

        <Modal
          width="75%"
          height="120px"
          isOpen={modalEditCover}
          onClose={toggleModalEditCover}
        >
          <FormEdit onSubmit={handleUpdateCover}>
            <InputEdit
              name="coverUrl"
              type="text"
              value={coverUrl}
              onChange={(e) => {
                setCoverUrl(e.target.value);
              }}
              placeholder="URL do cover"
            />
            <ButtonEdit>SALVAR</ButtonEdit>
          </FormEdit>
        </Modal>

        <Modal
          width="90%"
          isOpen={modalPreviewAvatar}
          onClose={toggleModalPreviewAvatar}
        >
          <PreviewAvatar
            src={user?.avatarUrl || "https://i.imgur.com/HYrZqHy.jpg"}
          />
        </Modal>
      </Container>
    </LayoutDefault>
  );
};

export default Profile;
