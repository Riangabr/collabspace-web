import { ThumbsUp, ChatCircleText } from "phosphor-react";

import Avatar from "../Avatar";
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

const Post: React.FC = () => {
  const [commentArea, setCommentArea] = useState(false);

  function toggleCommentArea() {
    setCommentArea(!commentArea);
  }

  return (
    <Container>
      <Header>
        <Author>
          <Avatar
            src="https://b.fssta.com/uploads/application/soccer/headshots/713.png"
            borderEffect
          />

          <AuthorInfo>
            <h1>Neymar Jr</h1>
            <p>ney@hotney.com</p>
          </AuthorInfo>
        </Author>

        <time>Publicado à 1h</time>
      </Header>

      <Content>
        <Description>
          <p>Fala galeraa 👋</p>
          <p>
            Você pode sempre sonhar, e seus sonhos se tornarão sonhos, e a
            realidade se tornará realidade. Mas é você que tem que torná-los
            realidade. 🚀
          </p>
        </Description>

        <Hashtags>
          <span>#collabspace</span>
          <span>#confia</span>
        </Hashtags>
      </Content>

      <Interactions>
        <InteractionInfo>
          <CountReaction>
            <span>
              <ThumbsUp size={19} weight="bold" />
              32
            </span>
          </CountReaction>

          <CountComment>
            <span onClick={toggleCommentArea}>7 comentários</span>
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
