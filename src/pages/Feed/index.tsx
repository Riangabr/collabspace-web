import LayoutDefault from "../../layouts/Default";

import ProfileCard from "../../components/ProfileCard";
import CreatePost from "../../components/CreatePost";
import Post from "../../components/Post";

import { Container, Posts } from "./styles";

const Feed: React.FC = () => {
  return (
    <LayoutDefault>
      <Container>
        <ProfileCard />

        <Posts>
          <CreatePost />

          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </Posts>
      </Container>
    </LayoutDefault>
  );
};

export default Feed;
