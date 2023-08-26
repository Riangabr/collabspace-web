import { Trash } from "phosphor-react";

import Avatar from "../AvatarSquare";

import { Container, CommentBox, AuthorAndTime, ButtonDelete } from "./styles";

const Comment: React.FC = () => {
  return (
    <Container>
      <Avatar src="https://media.fstatic.com/DH5yngg4vQQdK9csLNLAzsPJ9N8=/full-fit-in/290x478/filters:format(webp)/media/artists/avatar/2022/12/naldo-benny_a305866.jpg" />

      <CommentBox>
        <AuthorAndTime>
          <h1>Naldo Beny</h1>
          <time>Cerca de 2h</time>

          <ButtonDelete>
            <Trash size={22} />
          </ButtonDelete>
        </AuthorAndTime>

        <p>
          Ai Ney, ta ligado que o LeBroun ficou impressionado com a cor do meu
          tênis la em Miami 😎
        </p>
      </CommentBox>
    </Container>
  );
};

export default Comment;
