import { useState, useCallback, FormEvent } from "react";
import { toast } from "react-toastify";

import { useAuthentication } from "../../contexts/Authentication";

import { createPost } from "../../services/posts";
import { IPost } from "../../services/posts/types";

import AvatarSquare from "../AvatarSquare";
import InputArea from "../InputArea";
import Button from "../Button";

import { Container, Form } from "./styles";

interface CreatePostProps {
  onCreatePost: (post: IPost) => void;
}

const CreatePost: React.FC<CreatePostProps> = ({ onCreatePost }) => {
  const { user, me } = useAuthentication();

  const [content, setContent] = useState<string>("");

  const handleCreatePost = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      try {
        const { result, message, data } = await createPost({ content });

        if (result === "success") {
          if (data) {
            setContent("");
            onCreatePost(data);
            toast.success(message);
          }
        }

        if (result === "error") toast.error(message);
      } catch (error: any) {
        toast.error(error.message);
      }
    },
    [content, onCreatePost],
  );

  return (
    <Container>
      <AvatarSquare
        onClick={() => me(user?.id)}
        avatar={user?.avatarUrl}
        borderEffect
      />

      <Form onSubmit={handleCreatePost}>
        <InputArea
          name="content"
          value={content}
          rows={2}
          placeholder="O que temos para hoje?"
          required
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />

        <Button>Publicar</Button>
      </Form>
    </Container>
  );
};

export default CreatePost;
