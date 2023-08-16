import Header from "../../components/Header";
import ProfileCard from "../../components/ProfileCard";
import CreatePost from "../../components/CreatePost";
import Post from "../../components/Post";

import { Container, Content, Posts } from "./styles";

const Feed: React.FC = () => {
  return (
    <Container>
      <Header />

      <Content>
        <ProfileCard />

        <Posts>
          <CreatePost />

          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </Posts>
      </Content>
    </Container>
  );
};

export default Feed;
