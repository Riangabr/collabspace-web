import { useState, useEffect, useRef, useCallback, FormEvent } from "react";
import { ThumbsUp, ChatCircleText, DotsThree, Trash } from "phosphor-react";
import { toast } from "react-toastify";

import moment from "moment";

import { DiffToString } from "../../utils/date";

import { useAuthentication } from "../../contexts/Authentication";

import { deletePost } from "../../services/posts";
import { createComment, deleteComment } from "../../services/comments";
import { createReaction, deleteReaction } from "../../services/reactions";
import { IComment } from "../../services/comments/types";
import { IReaction } from "../../services/reactions/types";

import AvatarSquare from "../AvatarSquare";
import Comment from "../Comment";
import InputArea from "../InputArea";
import Button from "../Button";
import Modal from "../Modal";
import ReactionList from "../ReactionList";

import {
  Container,
  Header,
  Author,
  AuthorInfo,
  Content,
  Description,
  Hashtags,
  Divider,
  Interactions,
  InteractionInfo,
  CountReaction,
  CountComment,
  InteractionAction,
  ButtonAction,
  CommentArea,
  CommentForm,
  Comments,
  OptionsArea,
  BoxOptions,
  Option,
} from "./styles";

interface PostProps {
  authorId: string;
  authorAvatar: string | null;
  authorName: string;
  authorEmail: string;
  postId: string;
  content: string;
  tags: string | null;
  comments: IComment[];
  reactions: IReaction[];
  publishedAt: string;
  onDeletePost(id: string): void;
}

const Post: React.FC<PostProps> = ({
  authorId,
  authorAvatar,
  authorName,
  authorEmail,
  postId,
  content,
  tags,
  comments = [],
  reactions = [],
  publishedAt,
  onDeletePost,
}) => {
  const { user, me } = useAuthentication();

  const [postComments, setPostComments] = useState(comments);
  const [postReactions, setPostReactions] = useState(reactions);

  const [commentArea, setCommentArea] = useState(false);
  const [commentContent, setCommentContent] = useState("");

  const [userReacted, setUserReacted] = useState(
    postReactions.some((reaction) => reaction.user.id === user?.id),
  );

  const [modalReactions, setModalReactions] = useState(false);
  const [boxOptions, setBoxOption] = useState(false);

  const boxOptionsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        boxOptionsRef.current &&
        !boxOptionsRef.current.contains(event.target as Node)
      ) {
        setBoxOption(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleDeletePost = useCallback(async () => {
    try {
      const { result, message } = await deletePost({ id: postId });

      if (result === "success") {
        onDeletePost(postId);
        toast.success(message);
      }

      if (result === "error") toast.error(message);
    } catch (error: any) {
      toast.error(error.message);
    }
  }, [postId, onDeletePost]);

  const handleCreateComment = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      try {
        const { result, message, data } = await createComment({
          postId,
          content: commentContent,
        });

        if (result === "success") {
          if (data) {
            setCommentContent("");

            setPostComments((prevState) => {
              const postComments = [...prevState];

              postComments.unshift(data);

              return postComments;
            });

            toast.success(message);
          }
        }

        if (result === "error") {
          toast.error(message);
        }
      } catch (error: any) {
        toast.error(error.message);
      }
    },
    [postId, commentContent],
  );

  const handleDeleteComment = useCallback(
    async (commentId: string) => {
      try {
        const { result } = await deleteComment({ commentId, postId });

        if (result === "success") {
          setPostComments((prevState) =>
            prevState.filter((comment) => comment.id !== commentId),
          );
        }
      } catch (error: any) {
        toast.error(error.message);
      }
    },
    [postId],
  );

  const handleCreateReaction = useCallback(async () => {
    try {
      const { result, data } = await createReaction({
        postId,
        entityType: 1,
      });

      if (result === "success") {
        if (data) {
          setPostReactions((prevState) => {
            const postReactions = [...prevState];

            postReactions.unshift(data);

            return postReactions;
          });
        }
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  }, [postId]);

  const handleDeleteReaction = useCallback(async (reactionId: string) => {
    try {
      const { result } = await deleteReaction({ reactionId });

      if (result === "success") {
        setPostReactions((prevState) =>
          prevState.filter((reaction) => reaction.id !== reactionId),
        );
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  }, []);

  function toggleReaction() {
    if (userReacted) {
      const reaction = postReactions.find(
        (reaction) => reaction.user.id === user?.id,
      );

      if (reaction) {
        handleDeleteReaction(reaction.id);

        setUserReacted(false);
      }

      return;
    }

    handleCreateReaction();
    setUserReacted(true);
  }

  function toggleCommentArea() {
    setCommentArea(!commentArea);
  }

  function toggleModalReactions() {
    setModalReactions(!modalReactions);
  }

  function toggleBoxOptions() {
    setBoxOption(!boxOptions);
  }

  return (
    <Container>
      {authorId === user?.id && (
        <OptionsArea>
          <DotsThree size={24} weight="bold" onClick={toggleBoxOptions} />

          <BoxOptions ref={boxOptionsRef} $boxOptions={boxOptions}>
            <Option onClick={handleDeletePost}>
              <Trash size={24} weight="fill" />
              Excluir publicação
            </Option>
          </BoxOptions>
        </OptionsArea>
      )}

      <Header>
        <Author>
          <AvatarSquare
            onClick={() => me(authorId)}
            avatar={authorAvatar}
            borderEffect
          />

          <AuthorInfo>
            <h1 onClick={() => me(authorId)}>{authorName}</h1>
            <p>{authorEmail}</p>
          </AuthorInfo>
        </Author>

        <time>
          Publicado há {DiffToString(moment().diff(publishedAt, "seconds"))}
        </time>
      </Header>

      <Content>
        <Description>
          <p>{content}</p>
        </Description>

        <Hashtags>
          <span>{tags}</span>
        </Hashtags>
      </Content>

      <Interactions>
        <InteractionInfo>
          <CountReaction onClick={toggleModalReactions}>
            <span>
              <ThumbsUp size={19} weight={userReacted ? "fill" : "bold"} />

              {postReactions.length}
            </span>
          </CountReaction>

          <CountComment>
            <span onClick={toggleCommentArea}>
              {postComments.length} comentários
            </span>
          </CountComment>
        </InteractionInfo>

        <InteractionAction>
          <ButtonAction onClick={toggleReaction}>
            <ThumbsUp size={22} weight={userReacted ? "fill" : "regular"} />
            Reagir
          </ButtonAction>

          <ButtonAction onClick={toggleCommentArea}>
            <ChatCircleText size={22} />
            Comentar
          </ButtonAction>
        </InteractionAction>
      </Interactions>

      <CommentArea $commentArea={commentArea}>
        <CommentForm onSubmit={handleCreateComment}>
          <h1>Deixe seu comentário</h1>

          <InputArea
            name="commentContent"
            value={commentContent}
            rows={3}
            placeholder="Escreva seu comentário aqui ..."
            required
            onChange={(e) => setCommentContent(e.target.value)}
          />

          <Button>Comentar</Button>
        </CommentForm>

        <Divider />

        <Comments>
          {postComments.map((comment) => (
            <Comment
              key={comment.id}
              postAuthorId={authorId}
              authorId={comment.user.id}
              authorAvatar={comment.user.avatarUrl}
              authorName={comment.user.name}
              commentId={comment.id}
              content={comment.content}
              reactions={comment.reactions}
              commentedAt={comment.commentedAt}
              onDelete={handleDeleteComment}
            />
          ))}
        </Comments>
      </CommentArea>

      <Modal isOpen={modalReactions} onClose={toggleModalReactions}>
        <ReactionList data={postReactions} />
      </Modal>
    </Container>
  );
};

export default Post;
