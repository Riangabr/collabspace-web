import LayoutDefault from "../../layouts/Default";

import ProfileCard from "../../components/ProfileCard";
import CreatePost from "../../components/CreatePost";
import Post from "../../components/Post";

import { Posts } from "./styles";

const Feed: React.FC = () => {
  return (
    <LayoutDefault>
      <ProfileCard />

      <Posts>
        <CreatePost />

        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </Posts>
    </LayoutDefault>
  );
};

export default Feed;
