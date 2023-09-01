import { useState, useCallback, FormEvent } from "react";
import { toast } from "react-toastify";

import Avatar from "../AvatarSquare";
import InputArea from "../InputArea";
import Button from "../Button";
import { useAuthentication } from "../../contexts/Authentication";

import { Container, Form } from "./styles";
import { createPost } from "../../posts";

const CreatePost: React.FC = () => {
  const { user } = useAuthentication();

  const [content, setContent] = useState<string>("");

  const handleCreatePost = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      try {
        const { result, message } = await createPost({
          content,
        });

        if (result === "success") toast.success(message);
        if (result === "error") toast.error(message);
      } catch (error: any) {
        toast.error(error.message);
      }
    },
    [content],
  );

  return (
    <Container>
      <Avatar
        src={user?.avatarUrl || "https://i.imgur.com/HYrZqHy.jpg"}
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
