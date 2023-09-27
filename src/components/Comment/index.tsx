import { useState, useCallback } from "react";
import moment from "moment";

import { Trash, ThumbsUp } from "phosphor-react";

import { createReaction, deleteReaction } from "../../services/reactions";
import { IReaction } from "../../services/reactions/types";

import AvatarSquare from "../AvatarSquare";
import Modal from "../Modal";
import ReactionList from "../ReactionList";

import { DiffToString } from "../../utils/date";

import { useAuthentication } from "../../contexts/Authentication";

import {
  Container,
  CommentBox,
  InputArea,
  AuthorAndTime,
  Interactions,
  ButtonDelete,
} from "./styles";

import { toast } from "react-toastify";

interface CommentProps {
  postAuthorId: string;
  authorId: string;
  authorAvatar: string | null;
  authorName: string;
  commentId: string;
  content: string;
  reactions: IReaction[];
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
  const { user, me } = useAuthentication();

  const [commentReactions, setCommentReactions] = useState(reactions);

  const [userReacted, setUserReacted] = useState(
    commentReactions.some((reaction) => reaction.user.id === user?.id),
  );

  const [modalReactions, setModalReactions] = useState(false);

  const handleCreateReaction = useCallback(async () => {
    try {
      const { result, data } = await createReaction({
        commentId,
        entityType: 1,
      });

      if (result === "success") {
        if (data) {
          setCommentReactions((prevState) => {
            const commentReactions = [...prevState];

            commentReactions.unshift(data);

            return commentReactions;
          });

          setUserReacted(true);
        }
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  }, [commentId]);

  const handleDeleteReaction = useCallback(async (reactionId: string) => {
    try {
      const { result } = await deleteReaction({
        reactionId,
      });

      if (result === "success") {
        setCommentReactions((prevState) =>
          prevState.filter((reaction) => reaction.id !== reactionId),
        );

        setUserReacted(false);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  }, []);

  function toggleReaction() {
    if (userReacted) {
      const reaction = commentReactions.find(
        (reaction) => reaction.user.id === user?.id,
      );

      if (reaction) handleDeleteReaction(reaction.id);

      return;
    }

    handleCreateReaction();
  }

  function toggleModalReactions() {
    setModalReactions(!modalReactions);
  }

  return (
    <Container>
      <AvatarSquare onClick={() => me(authorId)} avatar={authorAvatar} />

      <CommentBox>
        <InputArea>
          <AuthorAndTime>
            <h1 onClick={() => me(authorId)}>{authorName}</h1>
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
        </InputArea>

        <Interactions>
          <ThumbsUp
            onClick={toggleReaction}
            size={18}
            weight={userReacted ? "fill" : "regular"}
          />
          <span>•</span>
          <span onClick={toggleModalReactions}>{commentReactions.length}</span>
        </Interactions>
      </CommentBox>

      <Modal isOpen={modalReactions} onClose={toggleModalReactions}>
        <ReactionList data={commentReactions} />
      </Modal>
    </Container>
  );
};

export default Comment;
