import { Trash } from "phosphor-react";

import Avatar from "../Avatar";

import { Container, CommentBox, AuthorAndTime } from "./styles";

const Comment: React.FC = () => {
  return (
    <Container>
      <Avatar />

      <CommentBox>
        <AuthorAndTime>
          <h1>Natan Foleto</h1>
          <time>Cerca de 2h</time>

          <button>
            <Trash size={22} />
          </button>
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
