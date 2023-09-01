import { ThumbsUp, ChatCircleText } from "phosphor-react";
import moment from "moment";

import AvatarSquare from "../AvatarSquare";
import Comment from "../Comment";
import InputArea from "../InputArea";
import Button from "../Button";

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
} from "./styles";
import { useState } from "react";

interface PostProps {
  authorAvatar: string | null;
  authorName: string;
  authorEmail: string;
  publishedAt: string;
  content: string;
  tags: string | null;
  comments: any[];
  reactions: any[];
}

const Post: React.FC<PostProps> = ({
  authorAvatar,
  authorName,
  authorEmail,
  publishedAt,
  content,
  tags,
  comments = [],
  reactions = [],
}) => {
  const [commentArea, setCommentArea] = useState(false);

  function toggleCommentArea() {
    setCommentArea(!commentArea);
  }

  const diff = moment().diff(publishedAt, "seconds");

  return (
    <Container>
      <Header>
        <Author>
          <AvatarSquare
            src={authorAvatar || "https://i.imgur.com/HYrZqHy.jpg"}
            borderEffect
          />

          <AuthorInfo>
            <h1>{authorName}</h1>
            <p>{authorEmail}</p>
          </AuthorInfo>
        </Author>
        <time> {publishedAt}</time>
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
          <CountReaction>
            <span>
              <ThumbsUp size={19} weight="bold" />
              {reactions.length}
            </span>
          </CountReaction>

          <CountComment>
            <span onClick={toggleCommentArea}>
              {comments.length} comentários
            </span>
          </CountComment>
        </InteractionInfo>

        <InteractionAction>
          <ButtonAction>
            <ThumbsUp size={22} />
            Reagir
          </ButtonAction>

          <ButtonAction onClick={toggleCommentArea}>
            <ChatCircleText size={22} />
            Comentar
          </ButtonAction>
        </InteractionAction>
      </Interactions>

      <CommentArea $commentArea={commentArea}>
        <CommentForm>
          <h1>Deixe seu comentário</h1>

          <InputArea rows={3} placeholder="Escreva seu comentário aqui ..." />

          <Button>Comentar</Button>
        </CommentForm>

        <Divider />

        <Comments>
          <Comment />
        </Comments>
      </CommentArea>
    </Container>
  );
};

export default Post;
