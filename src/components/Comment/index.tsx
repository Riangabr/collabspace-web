import { Trash } from "phosphor-react";

import Avatar from "../Avatar";

import { Container, CommentBox, AuthorAndTime, ButtonDelete } from "./styles";

const Comment: React.FC = () => {
  return (
    <Container>
      <Avatar
        src="https://animepersona.com/wp-content/uploads/2023/03/1678110464420.jpg"
        borderEffect
      />

      <CommentBox>
        <AuthorAndTime>
          <h1>Natan Foleto</h1>
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
