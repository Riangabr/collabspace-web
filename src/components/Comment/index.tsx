import { useNavigate } from "react-router-dom";
import moment from "moment";

import { Trash } from "phosphor-react";

import Avatar from "../AvatarSquare";

import { DiffToString } from "../../utils/date";

import { useAuthentication } from "../../contexts/Authentication";

import { Container, CommentBox, AuthorAndTime, ButtonDelete } from "./styles";

interface CommentProps {
  postAuthorId: string;
  authorId: string;
  authorAvatar: string | null;
  authorName: string;
  commentId: string;
  content: string;
  reactions: any[];
  commentedAt: string;
  onDelete(id: string): void;
}

const Comment: React.FC<CommentProps> = ({
  postAuthorId,
  authorId,
  authorAvatar,
  authorName,
  commentId,
  content,
  reactions = [],
  commentedAt,
  onDelete,
}) => {
  const navigate = useNavigate();
  const { user } = useAuthentication();

  function handleMe() {
    navigate(`/me/${authorId}`);
  }

  return (
    <Container>
      <Avatar
        onClick={handleMe}
        src={authorAvatar || "https://i.imgur.com/HYrZqHy.jpg"}
      />

      <CommentBox>
        <AuthorAndTime>
          <h1 onClick={handleMe}>{authorName}</h1>
          <time>
            Cerca de {DiffToString(moment().diff(commentedAt, "seconds"))}
          </time>

          {(user && user.id === authorId) || user?.id === postAuthorId ? (
            <ButtonDelete onClick={() => onDelete(commentId)}>
              <Trash size={22} />
            </ButtonDelete>
          ) : null}
        </AuthorAndTime>

        <p>{content}</p>
      </CommentBox>
    </Container>
  );
};

export default Comment;
