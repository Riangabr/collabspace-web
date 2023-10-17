import { useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";

import LayoutDefault from "../../layouts/Default";

import ProfileCard from "../../components/ProfileCard";
import CreatePost from "../../components/CreatePost";
import Post from "../../components/Post";

import { Container, Posts } from "./styles";

import { IPost } from "../../services/posts/types";
import { listAllPosts } from "../../services/posts";

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  const handleListAllPosts = useCallback(async () => {
    try {
      const { result, message, data } = await listAllPosts();

      if (result === "success") {
        if (data) setPosts(data.posts);
      }

      if (result === "error") toast.error(message);
    } catch (error: any) {
      toast.error(error.message);
    }
  }, []);

  const handleAddPost = (post: IPost) =>
    setPosts((prevState) => {
      const posts = [...prevState];

      posts.unshift(post);

      return posts;
    });

  const handleRemovePost = (id: string) =>
    setPosts((prevState) => prevState.filter((post) => post.id !== id));

  useEffect(() => {
    handleListAllPosts();
  }, [handleListAllPosts]);

  return (
    <LayoutDefault>
      <Container>
        <ProfileCard />

        <Posts>
          <CreatePost onCreatePost={handleAddPost} />

          {posts.map((post) => (
            <Post
              key={post.id}
              authorId={post.user.id}
              authorAvatar={post.user.avatarUrl}
              authorName={post.user.name}
              authorEmail={post.user.email}
              postId={post.id}
              content={post.content}
              tags={post.tags}
              comments={post.comments}
              reactions={post.reactions}
              publishedAt={post.publishedAt}
              onDeletePost={handleRemovePost}
            />
          ))}
        </Posts>
      </Container>
    </LayoutDefault>
  );
};

export default Feed;
