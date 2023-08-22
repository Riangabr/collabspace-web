import LayoutDefault from "../../layouts/Default";

import RequestFriend from "../../components/RequestFriend";

import {
  Overview,
  Cover,
  Avatar,
  UserInfo,
  General,
  Contact,
  Total,
  SideBar,
  Requests,
  Content,
  Container,
  RequestList,
} from "./styles";

const Profile: React.FC = () => {
  return (
    <LayoutDefault>
      <Container>
        <Content>
          <Overview>
            <Cover src="https://cutewallpaper.org/29/dual-screen-mr-robot-wallpaper/247286624.jpg" />

            <Avatar src="https://i.pinimg.com/736x/b7/65/02/b76502e936cd209b595bd7a537e74db4.jpg" />

            <UserInfo>
              <General>
                <h1>Rian Gabriel</h1>
                <p>
                  Você só vai me olhar, me julgar tirar, conclusões
                  precipitadas, mas ainda... assim não vai me conhecer.
                </p>

                <Total>
                  <span>
                    <strong>115</strong> publicações
                  </span>
                  <span>
                    <strong>1562</strong> amigos
                  </span>
                </Total>
              </General>

              <Contact>
                <span>Jaborandi, São Paulo, Brasil</span>
                <span>(17) 98154-9528</span>
                <span>Entrou em Fevereiro de 2023</span>
              </Contact>
            </UserInfo>
          </Overview>
        </Content>
        <SideBar>
          <Requests>
            <h1>Solicitações de amizade</h1>

            <RequestList>
              <RequestFriend />
              <RequestFriend />
              <RequestFriend />
              <RequestFriend />
            </RequestList>
          </Requests>
        </SideBar>
      </Container>
    </LayoutDefault>
  );
};

export default Profile;
